import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.listen(3000, () => console.log('Prisma app running on http://localhost:3000'));
