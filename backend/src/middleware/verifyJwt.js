import { verifyJwtToken } from "../features/auth/auth.service.js";

export default function verifyJwt(req, res, next) {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const data = verifyJwtToken(token);
    req.user = { id: data.id, name: data.name };

    return next();
  } catch (error) {
    return res.status(401).send({ message: "invalid authentication token" });
  }
}
