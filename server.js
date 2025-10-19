const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Sample product data
const products = [
  { id: 1, name: 'RoadWare Car Perfume', price: 399 },
  { id: 2, name: 'RoadWare Seat Cover', price: 1299 },
  { id: 3, name: 'RoadWare Dashboard Polish', price: 499 },
];

// GET /products endpoint
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
