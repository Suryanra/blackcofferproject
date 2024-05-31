const express = require('express');
const app = express();
const { dbConnect } = require('./config/database');
const BlackCofferModel = require('./models/BlackCofferDataset');
var cors = require('cors');

// Connect to the database
dbConnect();

// Use CORS to allow requests from specific origins
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // No trailing slash
  credentials: true
}));

// Define a route to fetch data
app.get('/', async (req, resp) => {
  try {
    const data = await BlackCofferModel.find({});
    resp.send(data);
  } catch (error) {
    resp.status(500).send({ error: 'An error occurred while fetching data' });
  }
});

// Use the environment variable PORT if provided, otherwise default to 4001
const port = process.env.PORT || 4001;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at port ${port}`);
});
