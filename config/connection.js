// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nepal123!",
    database: "burgers_db"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;




// // Set up MySQL connection.
// var mysql = require("mysql");


// var connection;
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: "v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//         port: 3306,
//         user: "m77za92dgn52swod",
//         password: "ucu2tn45r64zqo6f",
//         database: "burgers_db"
//     });

// }

// connection.connect();
// // Export connection for our ORM to use.
// module.exports = connection;