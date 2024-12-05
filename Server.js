// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let userData = {}; // Temporary in-memory storage

app.post('/saveData', (req, res) => {
    const { userId, points } = req.body;
    userData[userId] = points;
    res.send({ status: 'success' });
});

app.get('/getData/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send({ points: userData[userId] || 0 });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
