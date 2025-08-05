const BASE_URL: string =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://ofla-portfolio.vercel.app";

export default BASE_URL;
