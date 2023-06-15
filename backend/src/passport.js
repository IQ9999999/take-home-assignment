import passport from "passport";
import User from "./User.model.js";
import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import jwt from "jsonwebtoken";

export const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "FishNChips",
};

passport.use(
  new JwtStrategy(jwtOptions, function (jwtPayload, done) {
    User.findOne({ where: { id: jwtPayload.id } }).then((user) => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

export function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  if (!token) return res.status(403).send({ auth: false, message: "No token provided." });
  token = token.replace("Bearer ", "");
  jwt.verify(token, jwtOptions.secretOrKey, function (err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: "Failed to authenticate token." });
    req.userId = decoded.id;
    next();
  });
}

export default passport;
