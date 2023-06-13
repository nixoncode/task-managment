import { fetchByPhoneNumber } from "../models/complainants.model.js";

export async function fetchPhoneNumber(req, res) {
  const phoneNumber = req.params["phoneNumber"];
  let complainant = await fetchByPhoneNumber(phoneNumber);
  if (!complainant) {
    return res.status(404).json({ "message": "complainant not found" });
  }
  return res.json({ message: "complainant details found", "complainant": complainant });
}
