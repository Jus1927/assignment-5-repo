const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


// Serve the index.html file at the root endpoint
app.get('https://jus1927.github.io/assignment-5-repo/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the two.html file at the /two endpoint
app.get('https://jus1927.github.io/assignment-5-repo/two', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/two.html'));
});

// Serve the three.html file at the /three endpoint
app.get('https://jus1927.github.io/assignment-5-repo/three', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/three.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});