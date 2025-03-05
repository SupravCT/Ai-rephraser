import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyse from './Router/analyse.js'
import grammar from './Router/grammerChek.js'
import spell from './Router/spellCheker.js'

const app = express();



dotenv.config({ path: "./config/config.env" });


app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1',analyse)
app.use('/api/v1',grammar)
app.use('/api/v1',spell)

export default app;
