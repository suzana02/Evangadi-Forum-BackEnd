require("dotenv").config();
const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
	socketPath: process.env.DB_SOCKET_PATH,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port:process.env.DB_PORT,
	connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10),
});

// const dbConnection = mysql2.createPool({
// 	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
// 	host: "localhost",
// 	user: "evangadi-admin",
// 	password: "1234567",
// 	database: "evangadi-db",
// 	connectionLimit: 10,
// });
// Test the connection
dbConnection.execute("SELECT 1", (err, result) => {
	if (err) {
		console.error("Database connection error:", err.message);
	} else {
		console.log("Test query result:", result);
	}
});
module.exports = dbConnection.promise();
