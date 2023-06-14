export function userInfo(req, res) {
  res.send({ message: "user info", user: req.user });
}
