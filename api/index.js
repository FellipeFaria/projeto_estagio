import express from "express";

const app = express();
app.use(express.json());

app.get("/api/status", (_, res) => {
  res.json({ status: "Online", date: new Date() });
});

app.listen(8800, () => console.log("Server running on port 8800"));
