const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/"
    : "https://www.travel-memories.com";

export default baseUrl;
