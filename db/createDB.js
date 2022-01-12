const mysql = require("mysql2");
const util = require("util");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
};

const CREATE_DATABASE = `CREATE DATABASE IF NOT EXISTS STUDENT_DB`;

const createDBConnection = async () => {
  try {
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    if (!connection) {
      throw new Error("Could not create connection");
    }
    const execQuery = util.promisify(connection.query.bind(connection));

    await execQuery(CREATE_DATABASE);

    console.log("Student Database Created Successfully 😄");
    connection.end();
  } catch (error) {
    console.error(error);
  }
};

createDBConnection();
