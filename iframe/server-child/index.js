const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/iframe1', (req, res) => {
  res.sendFile(__dirname + '/public/ex1.html');
})

app.get('/iframe2', (req, res) => {
  res.sendFile(__dirname + '/public/ex2.html');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})