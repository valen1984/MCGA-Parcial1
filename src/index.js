const express = require('express');
const mongoose = require('mongoose');
const indexRoutes = require('./routes');
const productsRoutes = require('./routes/products');
require('dotenv').config();

const URL_DB = process.env.URL_DB;
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(productsRoutes);

mongoose.connect(URL_DB).then(() => {
  console.log("🟢 DB Connected");

  app.listen(PORT, () => {
    console.log(`🚗 Server running on port http://localhost:${PORT}`);
  })
}).catch(err => {
  console.log('🔴 There was an error on the DB connection method.');
  console.log(err);
})
