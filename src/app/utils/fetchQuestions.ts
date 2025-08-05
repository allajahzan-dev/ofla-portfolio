import path from "path";
import { promises as fs } from "fs";

// Interface for questions
export interface IQuestions {
  question: string;
  answer: string;
}

// Fetch questions
export const fetchQuestions = async (): Promise<{
  questions: IQuestions[];
}> => {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "app",
      "data",
      "questions.json"
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    return data;
  } catch (err) {
    console.error("Failed to read questions:", err);
    return { questions: [] };
  }
};