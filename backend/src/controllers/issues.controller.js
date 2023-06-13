import { createComplainant, fetchByPhoneNumber } from "../models/complainants.model.js";
import db from "./../database.js";

export async function create(req, res) {
  const phoneNumber = req.body.phone_number;
  const { name, email, subject, description, category_id } = req.body;


  let complainant = await fetchByPhoneNumber(phoneNumber);
  let complainantId;
  if (complainant.hasOwnProperty("id")) {
    complainantId = complainant["id"];
  } else {
    complainantId = createComplainant(name, email, phoneNumber);
  }


  let issueID = await db
    .insert({ title: subject, description, complainant_id: complainantId, category_id, status_id: 1 })
    .into("issues")
    .returning("id");

  return res.status(201).json({ "message": `ticket created successfully with id ${issueID[0]}` });
}
