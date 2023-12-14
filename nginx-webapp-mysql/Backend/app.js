const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Create a connection pool to the MySQL database
const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || 'mysql',
  user: process.env.MYSQL_USER || 'your_mysql_user',
  password: process.env.MYSQL_PASSWORD || 'your_mysql_password',
  database: process.env.MYSQL_DATABASE || 'your_database_name',
});


// Routes

// Get all items
app.get('/items', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) {
      console.error('Error fetching items:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Get an item by ID
app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  db.query('SELECT * FROM items WHERE id = ?', [itemId], (err, results) => {
    if (err) {
      console.error('Error fetching item by ID:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.json(results[0]);
    }
  });
});

// Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  db.query('INSERT INTO items SET ?', newItem, (err, result) => {
    if (err) {
      console.error('Error creating item:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json({ id: result.insertId, ...newItem });
  });
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  db.query('UPDATE items SET ? WHERE id = ?', [updatedItem, itemId], (err) => {
    if (err) {
      console.error('Error updating item:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json({ id: itemId, ...updatedItem });
  });
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  db.query('DELETE FROM items WHERE id = ?', [itemId], (err) => {
    if (err) {
      console.error('Error deleting item:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json({ message: 'Item deleted', id: itemId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
