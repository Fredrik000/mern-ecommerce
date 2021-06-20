import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Define Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

// Start Node + Express server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
      .yellow.bold
  )
);
