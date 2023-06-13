import db from "../database.js";

export async function createIssue(complainantId, categoryId, subject, description) {
  let insertId = await db("issues")
    .insert({ title: subject, description, complainant_id: complainantId, category_id: categoryId, status_id: 1 })
    .returning("id");

  return insertId[0];
}