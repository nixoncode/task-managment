import { createUser } from "./auth.model.js";

export function login(req, res) {
  res.json({ message: "todo login" });
}
export async function register(req, res) {
  const { name, email, phone, password } = req.body;

  let result = await createUser(name, email, phone, password);

  if (!result) {
    return res
      .status(400)
      .json({ message: "something went wrong, try again in a little bit" });
  }

  return res.status(201).json({
    message: `user registered successfully with id ${result}`,
  });
}
