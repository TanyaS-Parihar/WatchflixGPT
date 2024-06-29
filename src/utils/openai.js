import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "";

export const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
