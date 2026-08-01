import OpenAI from "openai";
import { AI_BASE_URL } from "./ai";

export const aiClient = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: AI_BASE_URL,
});