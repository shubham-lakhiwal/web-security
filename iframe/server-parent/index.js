const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.setHeader('Content-Security-Policy', [
//     "default-src 'self';",
//     "script-src 'self' 'nonce-abr' 'unsafe-inline' http://unsecure.com;"
//   ].join(' '));
//
//   next()
// })

app.get('/eg1', (req, res) => {
  res.sendFile(__dirname + '/public/ex1.html');
})

app.get('/eg2', (req, res) => {
  res.sendFile(__dirname + '/public/ex2.html');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})