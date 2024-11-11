import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { logger } from "../utils/index.ts";
import { readFileSync } from "node:fs";

export const databasePromise = open({
  filename: 'db_api-vehicle_control.db',
  driver: sqlite3.Database
});

const db = await databasePromise;

export function setupDatabase() {
  try {
    const sqlSchema = readFileSync("tables.sql", "utf-8");
    db.exec(sqlSchema);
    logger.log("DATABASE 🗃️ ", "Table definitions performed successfully.");
  } catch (error) {
    logger.err("DATABASE 🗃️ ", "Error executing table definitions", error);
  }
}

process.on("SIGINT", () => {
  console.log("\n\n");
  logger.log("APP", "closed.\n\n");
  logger.log("SIGINT", "process successfully overturned.")
  db.close();
  process.exit();
});
