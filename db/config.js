// dbconnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.massege);
//   } else {
//     console.log(result);
//   }
// });

// const mysql = require("mysql2");

// const dbConnection = mysql.createPool({
// 	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", // Adjust path as necessary for your environment
// 	DatabaseHost:"185.212.70.52"
// 	host: "evangadi.suzanawebsite.com",
// 	user: "evangadiadmin",
// 	password: "Suziye24$",
// 	database: "Evangadidb",
// 	connectionLimit: 10,
// });

// module.exports = dbConnection;

// require("dotenv").config();
const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
	user: "evangadi-admin",
	database: "evangadi-db",
	host: "localhost",

	password: "1234567",
	connectionLimit: 10,
});
// const dbConnection = mysql2.createPool({
// 	// socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
// 	user: u467924948_evangadiadmin,
// 	database: u467924948_Evangadidb,
// 	Host: srv630.hstgr.io,

// 	password: Suziye24$,
// 	JWT_SECRET: x3JUYI1JlYYAJ4umXV9sC8rNMhxtbFE1hjhjdhfjhjhb3334,

// });

module.exports = dbConnection.promise();
