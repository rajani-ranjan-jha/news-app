import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import { getAllTopHeadlines } from "../lib/newsApi";

export default async function Home() {
  const newsData = await getAllTopHeadlines();
  console.log(newsData)
  const articles = newsData.articles || [];
  const hasError = newsData.status === "error";
  const KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  return (
    <div className="font-poppins min-h-screen bg-black text-white">
      <Header />
      <div className=" flex flex-col justify-start items-center">
        <h1 className="my-10 text-4xl font-semibold">Top Headlines</h1>
        <div className="">
          {hasError ? (
            <div>Something went wrong</div>
          ) : articles.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-5">
              {articles.map((article, index) => (
                <NewsCard key={index} article={article}/>
              ))}
            </div>
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </div>
  );
}
