const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "sandbox_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("db connected")
  });
  
  module.exports = connection;