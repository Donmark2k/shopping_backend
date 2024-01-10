// pages/api/test-db-connection.js
//http://localhost:3000/api/test-db-connection

import clientPromise from "../../lib/mongodb"

export default async function handler(req, res) {
  try {
    await clientPromise; // Wait for the database connection to be established
    res.status(200).json({ message: 'Database connection successful' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
