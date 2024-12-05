// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let userData = {}; // Temporary in-memory storage

// Endpoint to save user data
app.post('/saveData', (req, res) => {
    const { userId, points } = req.body;
    userData[userId] = points;
    res.send({ status: 'success' });
});

// Endpoint to retrieve user data
app.get('/getData/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send({ points: userData[userId] || 0 });
});

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
