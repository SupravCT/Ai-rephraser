import express from "express";
import { OpenAI } from "openai";
import dotenv from "dotenv";
const grammar = express.Router();
dotenv.config({ path: "./config/config.env" });
const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});
grammar.post("/grammar", async (req, res) => {
  const { text } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-gpt-4o",
      messages: [
        {
          role: "user",
          content:
            "You are a helpful assistant that checks grammer of sentences. Only return the corrected text without any additional comments or context.",
        },
        {
          role: "user",
          content: text,
        },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });
    const rephrased = response.choices[0].message.content;

    return res.status(200).json({ rephrased });
  } catch (e) {
    console.error("Error:", e.message);
    return res.status(500).json({
      message: "Failed to process the request",
      error: e.response ? e.response.data : e.message,
    });
  }
});

export default grammar;
