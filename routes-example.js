const express = require('express');
const app = express();

//  Root Route
app.get('/', (req, res) => {
    res.send('Welcome to our home page');
});

//  GET All Products
app.get('/products', (req, res) => {
    const products = [
        { id: 1, label: 'Product 1' },
        { id: 2, label: 'Product 2' }
    ];
    res.json(products);
});

//  GET Single Product by ID
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const products = [
        { id: 1, label: 'Product 1' },
        { id: 2, label: 'Product 2' }
    ];

    const singleProduct = products.find(product => product.id === productId);

    if (singleProduct) {
        res.json(singleProduct);
    } else {
        res.status(404).send("Product not found, please try again");
    }
});

//  Start Server
const port = 3001;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
