const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the index.html file at the root endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the two.html file at the /two endpoint
app.get('/two', (req, res) => {
    res.sendFile(path.join(__dirname, 'two.html'));
});

// Serve the three.html file at the /three endpoint
app.get('/three', (req, res) => {
    res.sendFile(path.join(__dirname, 'three.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});