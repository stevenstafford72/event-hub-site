// db.js
const mysql = require('mysql2/promise'); // Make sure you have this installed: npm install mysql2

// Create the connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Spoofcard', // Your actual MySQL password
    database: process.env.DB_NAME || 'free_event_hub', // Your database name
    waitForConnections: true,
    connectionLimit: 10, // Adjust as needed
    queueLimit: 0
});

// Optional: Test the connection when the pool is created
pool.getConnection()
    .then(connection => {
        console.log("Successfully connected to the database 🥳!");
        connection.release(); // Release the connection back to the pool
    })
    .catch(err => {
        console.error("Failed to connect to the database:", err.message);
        process.exit(1);
    });

module.exports = pool; 