import bcrypt from "bcryptjs";
export function hashPassword(password) {
  return bcrypt.hashSync(password);
}

export function comparePassword(password, passwordHash) {
  return bcrypt.compareSync(password, hashPassword);
}
