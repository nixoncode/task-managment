import db from "./../../database.js";

export async function emailExists(email) {
  return await db("users").select("id").where("email", email).first();
}
