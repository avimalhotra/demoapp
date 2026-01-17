  /* app.js */
import express from "express";
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api", (req, res) => {
  res.status(200).json({ message: "API is working" });
});


app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
