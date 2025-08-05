import BASE_URL from "@/constants/baseUrl";

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
        const resp = await fetch(`${BASE_URL}/data/home/questions.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read questions:", err);
        return { questions: [] };
    }
};