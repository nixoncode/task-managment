import db from "../database.js";

export function fetchByPhoneNumber(phoneNumber) {
  return db("complainants")
    .select()
    .where("phone_number", phoneNumber)
    .first();

}