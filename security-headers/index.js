const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-Content-Type-Options', 'nosniff'); // Tell browser not to do smart work to figure out content type
  res.cookie('sessionId', 'abcd1234', { httpOnly: true, secure: true, sameSite: 'Strict' }); // Mitigate XSS and CSRF attacks
  res.setHeader('X-Frame-Options', 'DENY'); // Clickjacking protection
  res.setHeader('Content-Security-Policy', [
    "default-src 'self';",
    "script-src 'self' 'nonce-abr' 'unsafe-inline' http://unsecure.com;",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
    "font-src 'self' https://fonts.gstatic.com;",
    "img-src 'self' data:;",
    "frame-ancestors 'none'",
  ])
  res.removeHeader('X-Powered-By');
  next();
})

app.get('/list', (req, res) => {
  res.send([{
    id: '1234',
    title: 'Lorem ipsum dolor sit amet',
  }]);
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})