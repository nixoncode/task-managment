import { createUser, fetchUser } from "./auth.model.js";
import { comparePassword, signJwt } from "./auth.service.js";

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await fetchUser(email);

  if (!user) {
    return res.status(404).json({ message: "invalid email or password" });
  }

  const isPasswordValid = comparePassword(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "invalid email or password" });
  }

  let token = signJwt({
    id: user.id,
    name: user.name,
  });

  return res.json({ message: `Welcome back ${user.name}`, token });
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
