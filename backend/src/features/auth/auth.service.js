import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config/index.js";

export function hashPassword(password) {
  return bcrypt.hashSync(password);
}

export function comparePassword(password, passwordHash) {
  return bcrypt.compareSync(password, passwordHash);
}

export function signJwt(payload) {
  return jwt.sign(
    {
      ...payload,
      iat: Math.floor(Date.now() / 1000) - 30, // 30 secs ago
    },
    jwtSecret,
    { expiresIn: "1h" },
  );
}

export function verifyJwtToken(token) {
  return jwt.verify(token, jwtSecret);
}
