import db from "./../../database.js";
import bcrypt from "bcryptjs";

export async function emailExists(email) {
  let user = await db("users").select("id").where("email", email).first();
  if (user && user.hasOwnProperty("id")) {
    return true;
  }
  return false;
}

export async function phoneExists(phone) {
  let user = await db("users")
    .select("id")
    .where("phone_number", phone)
    .first();
  if (user && user.hasOwnProperty("id")) {
    return true;
  }
  return false;
}

export async function createUser(name, email, phone, password) {
  let insertID = await db("users")
    .insert({
      name,
      email,
      phone_number: phone,
      password: bcrypt.hashSync(password),
    })
    .returning("id");

  return insertID[0];
}
