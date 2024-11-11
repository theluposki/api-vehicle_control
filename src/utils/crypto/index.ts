import { randomUUID } from "node:crypto";
import { genKeyPairHex, sharedKey } from "./KeyPair.ts";
import { encrypt, decrypt } from "./enc_dec.ts";
import { generateKeyPEMFile } from "./generateKeyPEMFile.ts";
import { signature, checkSignature } from "./signature.ts";
import { alice, bob } from "./alice_and_bob.ts";

const generateUUID = () => randomUUID();

export {
  generateKeyPEMFile,
  generateUUID,
  genKeyPairHex,
  sharedKey,
  encrypt,
  decrypt,
  signature,
  checkSignature,
  alice,
  bob
};

export default {
  generateKeyPEMFile,
  generateUUID,
  genKeyPairHex,
  sharedKey,
  encrypt,
  decrypt,
  signature,
  checkSignature,
  alice,
  bob
};
