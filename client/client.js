const express = require('express');
const io = require('socket.io-client');
const socket = io('http://localhost:3000');

const app = express();

socket.on('connect', () => {
    console.log(`connected ${socket.id}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Assuming you have an index.html
});

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
