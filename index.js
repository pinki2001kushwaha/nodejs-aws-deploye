const express = require('express');
const mysql = require('mysql2'); // Note the correct import
const app = express();

// Create a connection pool
const db = mysql.createPool({
    host: 'localhost', // Replace with your DB host
    user: 'root', // Replace with your DB username
    password: '', // Replace with your DB password
    database: 'company' // Replace with your DB name
});

// Define a route
app.get("/", (req, res) => {
    const sql = "select * from produces"; // Replace 'your_table_name' with the actual table name
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Database query error" });
        }
        res.json(results);
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
