import Sequelize from "sequelize";

// create a database name "assignment" using MySQL Workbench
// username: root and password: root
const sequelize = new Sequelize("assignment", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
