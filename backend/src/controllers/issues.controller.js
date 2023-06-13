import { createComplainant, fetchByPhoneNumber } from "../models/complainants.model.js";
import { createIssue } from "../models/issues.model.js";

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

  let issueID = await createIssue(complainantId, category_id, subject, description);

  return res.status(201).json({ "message": `ticket created successfully with id ${issueID}` });
}
