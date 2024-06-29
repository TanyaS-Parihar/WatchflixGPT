// import { OPEN_AI_KEY } from "./constants";
// import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyA1UkMbD_YBGrB9G818YwLaTzaJStERmD4";

// Access your API key (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const openai = new OpenAI({
//   apiKey: OPEN_AI_KEY,
//   dangerouslyAllowBrowser: true, // This is the default and can be omitted
// });
// export default openai;