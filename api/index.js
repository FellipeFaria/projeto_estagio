import express from "express";
import productRouter from "./routes/productRoute.js";
import salesRouter from "./routes/salesRoute.js";

const app = express();
app.use(express.json());

app.use("/produtos", productRouter);

app.use("/venda", salesRouter);

app.listen(8800);
