// API utility functions for NewsAPI.org

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export async function getTopHeadlines(category) {
  try {
    const url = `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=30&apiKey=${API_KEY}`;
    const response = await fetch(url, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === "error") {
      throw new Error(data.message || "Failed to fetch news");
    }

    return data;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return {
      status: "error",
      articles: [],
      error: error.message,
    };
  }
}

export async function getAllTopHeadlines() {
  try {
    const url = `${BASE_URL}/top-headlines?country=us&pageSize=30&apiKey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === "error") {
      throw new Error(data.message || "Failed to fetch news");
    }

    return data;
  } catch (error) {
    console.error("Error fetching all top headlines:", error);
    return {
      status: "error",
      articles: [],
      error: error.message,
    };
  }
}

export async function getSearchResult(query) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`
    );
    const data = await res.json();
    // console.log(data);
    if (!res.ok || data.status == 'error') {
        throw new Error(res.message);
    }
    return data;
  } catch (error) {
    console.error(error)
  }
}
