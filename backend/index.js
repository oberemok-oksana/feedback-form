const express = require("express");
const yup = require("yup");
const Pool = require("pg").Pool;
require("dotenv").config();

const app = express();
app.use(express.json());

const db = new Pool();

const port = 3000;

const feedbackSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email(),
  message: yup.string().required(),
});

app.get("/", (req, res) => {
  res.send("Hello you there!");
});

app.post("/feedbacks", async (req, res) => {
  try {
    const { name, email, message } = await feedbackSchema.validate(req.body);

    await db.query(
      "INSERT INTO feedbacks (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );

    res.status(201).json({ message: "Got it!" });
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

app.listen(port, (req, res) => {
  console.log("Yeah. Im working now.");
});
