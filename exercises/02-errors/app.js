const http = require('http');
const express = require('express');  // NOT in package.json - will cause error!

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
