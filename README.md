# Expressjs
all concept of express js
📌 Features Covered
✅ Express.js Concepts
Concept	Description
app.get()	Define routes (GET request)
res.send()	Send basic text/html
res.json()	Send JSON data (API response)
res.render()	Render EJS view
req.params	Access route parameters
req.query	Access query strings
app.use()	Register middleware
Middleware logging	Logs method, URL, and timestamp
Static files (optional)	Can serve using express.static()


✅ Sample Route Overview
/
Renders the home.ejs view

Passes a title and list of products

/about
Renders the about.ejs view (add this file if needed)

/products
Sends a JSON list of products

/products/:id
Dynamic route to get single product by ID

Uses req.params.id

🔍 Middleware Example

