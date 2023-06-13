import db from "../database.js";

export function fetchByPhoneNumber(phoneNumber) {
  return db("complainants")
    .select()
    .where("phone_number", phoneNumber)
    .first();

}

export async function createComplainant(name, email, phoneNumber) {
  let insertID = await db("complainants")
    .insert({ name, email, phone_number: phoneNumber })
    .returning("id");

  return insertID[0];
}