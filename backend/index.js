import cors from "cors";
import xss from "xss-clean";
import helmet from "helmet";
import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import userRoutes from "./src/router.js";
import sequelize from "./src/sequelize.js";

const app = express();

app.use(cors());
app.use(express.json()); // parse json request body
app.use(cookieParser()); // Use cookie-parser middleware to parse cookies
app.use(helmet()); // set security HTTP headers
app.use(xss()); // sanitize request data
app.use(passport.initialize()); // initialize passport middleware

app.use("/user", userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => console.log(`Server is running on port 3000`));
  })
  .catch((err) => console.error("Unable to connect to the database:", err));
