import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function connect() {
  return await open({
    filename: "./database/projeto.db",
    driver: sqlite3.Database,
  });
}
