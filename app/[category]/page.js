"use client";
import { getTopHeadlines } from "@/lib/newsApi";
import Header from "../components/Header";
import { useParams } from "next/navigation";
import PageNotFound from "../components/PageNotFound";
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

const Allowed = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];
const CategoryList = {
  business: {
    title: "Business News - NewsHub",
    description: "Latest business news and updates from around the world",
    heading_p:
      "Stay updated with the latest business trends and market insights",
  },
  entertainment: {
    title: "Entertainment News - NewsHub",
    description:
      "Latest entertainment news, celebrity updates, and showbiz stories",
    heading_p: "Stay in the loop with celebrity news and entertainment updates",
  },
  health: {
    title: "Health News - NewsHub",
    description:
      "Latest health news, medical breakthroughs, and wellness updates",
    heading_p: "Stay informed about health, wellness, and medical advancements",
  },
  science: {
    title: "Science News - NewsHub",
    description: "Latest science news, discoveries, and research updates",
    heading_p: "Explore the latest scientific discoveries and research",
  },
  sports: {
    title: "Sports News - NewsHub",
    description:
      "Latest sports news, scores, and highlights from around the world",
    heading_p: "Get the latest sports scores, highlights, and updates",
  },
  technology: {
    title: "Technology News - NewsHub",
    description: "Latest technology news, gadgets, and innovation updates",
    heading_p: "Discover the latest in tech, gadgets, and innovation",
  },
};

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setarticles] = useState([]);
  const [hasError, sethasError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getTopHeadlines(category);
      if (newsData.status === "error") {
        sethasError(true);
        setErrorMessage(newsData.message)
      } else {
        setarticles(newsData.articles || []);
      }
    };
    fetchData();
  }, [category]);

  if (!Allowed.includes(category)) return <PageNotFound />;

  return (
    <div className="font-poppins min-h-screen bg-black text-white">
      <Header />
      <main className="">
        <div className="h-full flex flex-col justify-center items-center">
          {hasError ? (
            <div className="mt-10 text-red-500 flex flex-col justify-center items-center gap-3 px-20">
              <div className="text-center text-7xl">⚠️</div>
              <h2 className="text-2xl font-medium text-center">Unable to Load News</h2>
              <p className="text-xl text-center">{ErrorMessage}</p>
            </div>
          ) : articles.length > 0 ? (
            <>
              <div className="my-15 space-y-3">
                <h1 className="text-4xl font-semibold capitalize text-center">
                  {category} News
                </h1>
                <p className="text-center">
                  {CategoryList[category].heading_p}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {articles.map((article, index) => (
                  <NewsCard key={index} article={article} />
                ))}
              </div>
            </>
          ) : (
            <div className="mt-10 text-red-500 flex flex-col justify-center items-center gap-3">
              <div className="text-center text-7xl">📰</div>
              <h2 className="text-2xl font-medium text-center">
                No {category.charAt(0).toUpperCase() + category.slice(1)} News
                Available
              </h2>
              <p className="error-message">
                Check back later for the latest updates.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
