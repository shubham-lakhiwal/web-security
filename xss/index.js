const express = require('express');

const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', [
    "default-src 'self';",
    "script-src 'self' 'nonce-abr' 'unsafe-inline' http://unsecure.com;"
  ].join(' '));

  next()
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})