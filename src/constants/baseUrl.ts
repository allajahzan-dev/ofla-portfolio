const baseUrl = () => {
    let BASE_URL: string;
    process.env.NODE_ENV === "development"
        ? (BASE_URL = "http://localhost:3000")
        : (BASE_URL = "https://ofla-portfolio.vercel.app");

    return BASE_URL;
};

export default baseUrl();
