const express = require('express');
const app = express();

// Custom Middleware
function myFirstMiddleware(req, res, next) {
  console.log('Middleware is runing every request');
  next(); // Don’t forget to call next() to move to the next middleware/route
}

// Use the middleware globally
app.use(myFirstMiddleware);

// Route with (req, res)
app.get('/', (req, res) => {
  res.send('Home page you will reach');
});
app.get('/about', (req, res) => {
  res.send('About page you will reach');
});

//  Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
