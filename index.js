const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();   

const port = process.env.PORT || 3000;   


// Database configuration
const pool = new Pool({
  user: 'John Smith',
  host: 'williwm.com',
  database: 'myprojectapp',
  password: 'your_password',
  port: 5432,
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API endpoints
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);   

    res.status(500).json({ error: 'Server error' });
  }
});

// ... other endpoints for transactions, budgets, etc.

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});