import { databasePromise } from "../../database/index.ts";
import { logger } from "../../utils/index.ts";

export const myRepo = async (id) => {
  const db = await databasePromise;

  try {
    const userExists = await db.get(
      "SELECT nome, imagem, email, data_nascimento, autorizacao FROM users WHERE id = ?",
      [id]
    );

    if (!userExists) return { error: "User not found." };

    return userExists;
  } catch (error) {
    logger.err(
      "my repo user",
      "Unable to search for this user.",
      error
    );
    return { error: "Unable to search for this user." };
  }
};
