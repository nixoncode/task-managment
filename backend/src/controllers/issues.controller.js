import db from "./../database.js";

export async function create(req, res) {
  const phoneNumber = req.body.phone_number;
  const { name, email, subject, description, category_id } = req.body;

  let complainantId = await db("complainants")
    .insert({ name, email, phone_number: phoneNumber })
    .returning("id");

  let issueID = await db
    .insert({ title: subject, description, complainant_id: complainantId[0], category_id, status_id: 1 })
    .into("issues")
    .returning("id");

  return res.status(201).json({ "message": `ticket created successfully with id ${issueID[0]}` });
}
