const express = require('express');
const app = express();

// ✅ Middleware to log timestamp and request details
const requestTimestampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString(); // () was missing
  console.log(`${timeStamp} | ${req.method} request to ${req.url}`); // corrected req.url
  next();
};

app.use(requestTimestampLogger);

// ✅ Routes
app.get('/', (req, res) => {
  res.send('Home page you will reach');
});

app.get('/about', (req, res) => {
  res.send('About page you will reach');
});

// ✅ Start server
app.listen(3003, () => {
  console.log('Server running on http://localhost:3003');
});
