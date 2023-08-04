import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import QuoteRoutes from "./routes/QuoteRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(QuoteRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log("Serve Up dan Running...");
});
