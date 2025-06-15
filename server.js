// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const messages = []; // Stores messages in memory

app.use(cors());
app.use(express.json()); // Use built-in body parser

// POST endpoint to save messages
app.post('/save', (req, res) => {
  const { text } = req.body;
  if (text && text.trim() !== '') {
    messages.push({ text, time: new Date().toLocaleString() });
    res.json({ status: 'success', message: 'Thanks for your message!' });
  } else {
    res.status(400).json({ status: 'error', message: 'No text provided' });
  }
});

// GET endpoint to view all messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Start the server
app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
