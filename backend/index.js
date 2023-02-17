const express = require("express");
const yup = require("yup");
const Pool = require("pg").Pool;
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

const db = new Pool();

const feedbackSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email(),
  message: yup.string().required(),
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
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

app.listen(process.env.APP_PORT, (req, res) => {
  console.log("Yeah. Im working now.");
});
