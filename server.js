const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

