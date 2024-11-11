import { readFile, access } from "node:fs/promises";
import jwt from "jsonwebtoken";
import { generateKeyPEMFile } from "../crypto/index.ts";
import { hoursToMilliseconds } from "../datatime/index.ts";
import logger from "../logger.ts";

async function readKeyFile(filePath) {
  try {
    return await readFile(filePath);
  } catch (error) {
    logger.err("jwt",`Erro ao ler o arquivo ${filePath}:`, error);
    throw error;
  }
}

try {
  await access("private.key");
} catch (error) {
  logger.err("jwt", "Erro ao verificar a existência das chaves:", error);
  generateKeyPEMFile();
}

const privateKey = await readKeyFile("private.key");
const publicKey = await readKeyFile("public.key");

let expires;


try {
  const config = await import("../../config.ts");
  expires = config.default?.app?.tokenExpiresIn
} catch (error) {
  logger.err("jwt","Erro ao importar config.js:", error);
  expires = 1;
}

export const sign = (userId) => {
  const tokenPayload = {
    id: userId,
    exp: hoursToMilliseconds(expires),
  };

  return jwt.sign(tokenPayload, privateKey.toString(), { algorithm: "RS256" });
};

export const verify = (token) => {
  const options = {
    algorithms: ["RS256"],
  };

  return jwt.verify(token, publicKey.toString(), options);
};

export default {
  sign,
  verify
}

