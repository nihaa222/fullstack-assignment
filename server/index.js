import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 3002;
mongoose
  .connect(
    "mongodb+srv://niharikapaneer:niharikapaneer@fullstack.52cfx.mongodb.net/fullstack?retryWrites=true&w=majority&appName=fullstack"
  )
  .then(() => {
    console.log("MonogoDB is connected");
  });
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
