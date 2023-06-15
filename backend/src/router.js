import express from "express";
import bcrypt from "bcryptjs";
import User from "./User.model.js";
import jwt from "jsonwebtoken";
import { verifyToken, jwtOptions } from "./passport.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    username: req.body.username,
    password: hashedPassword,
  })
    .then((user) => res.status(201).send({ message: "User registered successfully!" }))
    .catch((err) => res.status(500).send("There was a problem registering the user."));
});

router.post("/login", (req, res) => {
  User.findOne({ where: { username: req.body.username } })
    .then((user) => {
      if (!user) return res.status(404).send("No user found.");
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      const token = jwt.sign({ id: user.id }, jwtOptions.secretOrKey);
      res.status(200).send({ auth: true, token: token });
    })
    .catch((err) => res.status(500).send("Error on the server."));
});

router.get("/profile", verifyToken, (req, res) => {
  User.findByPk(req.userId, { attributes: { exclude: ["password"] } })
    .then((user) => {
      if (!user) return res.status(404).send("No user found.");
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send("Error on the server."));
});

export default router;
