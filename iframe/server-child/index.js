const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// app.use((req, res, next) => {
//   res.setHeader('Content-Security-Policy', [
//     "default-src 'self';",
//     "script-src 'self' 'nonce-abr' 'unsafe-inline' http://unsecure.com;"
//   ].join(' '));
//
//   next()
// })

app.get('/iframe1', (req, res) => {
  res.sendFile(__dirname + '/server-child/public/ex1.html');
})

app.get('/iframe2', (req, res) => {
  res.sendFile(__dirname + '/server-child/public/ex2.html');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})