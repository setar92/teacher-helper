import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import mongoose from 'mongoose';
import { router } from './router/index.js';
config()

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
