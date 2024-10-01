import express from "express";
import "dotenv/config.js";
import { connectMongo } from "./src/config/connectMongo.js";
import cors from 'cors'
import morgan from 'morgan'

import UserRouter from './src/router/UserRouter.js'
import CustomerRouter from './src/router/CustomerRouter.js'

const app = express();

app.use(cors())
connectMongo();

const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use('/api/v1/users', UserRouter )

app.use('/api/v1/customers', CustomerRouter )


app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("server running in port ", PORT);
});
