import axios from "axios";

const apiKey = '4e6ad8c008d2438386215dfc97796331';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

export const fetchArticles = async () => {
    try {
        const response = await axios.get(apiUrl);
        console.log(response);
        return response.data.articles;
    } catch (error) {
        throw error;
    }
};
