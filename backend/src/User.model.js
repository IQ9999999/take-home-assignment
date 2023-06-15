import Sequelize from "sequelize";
import sequelize from "./sequelize.js";

const User = sequelize.define("User", {
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: Sequelize.STRING,
});

export default User;
