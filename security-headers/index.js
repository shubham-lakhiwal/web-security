const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-Content-Type-Options', 'nosniff'); // Tell browser not to do smart work to figure out content type

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