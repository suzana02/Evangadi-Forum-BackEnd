

// require("dotenv").config();
// const mysql2 = require("mysql2");

// const dbConnection = mysql2.createPool({
// 	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
// 	user: "evangadi-admin",
// 	database: "evangadi-db",
// 	host: "localhost",

// 	password: "1234567",
// 	connectionLimit: 10,
// });
const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
	user: process.env.USER,
	database: process.env.DATABASE,
	Host: process.env.HOST,
	password: process.env.PASSWORD,
	connectionLimit: 10,
});


module.exports = dbConnection.promise();
