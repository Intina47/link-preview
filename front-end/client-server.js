const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

// Serve static files from the 'src' and 'dist' directories
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the index.html file for the root route
app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
    console.log("Client Server running on port:", PORT);
});
