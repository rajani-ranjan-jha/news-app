import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import { getAllTopHeadlines } from "../lib/newsApi";
import Footer from "./components/Footer";

export default async function Home() {
  const newsData = await getAllTopHeadlines();
  const articles = newsData.articles || [];
  // console.log(articles.length)
  const hasError = newsData.status === "error";


  return (
    <div className="font-poppins min-h-screen bg-black text-white">
      <Header />
      <div className="flex flex-col justify-start items-center">
        <h1 className="my-10 text-4xl font-semibold">Top Headlines</h1>
        <p className="mb-10 text-2xl text-center">Get the latest news across Business, Technology, Sports, Entertainment, Health, and Science.</p>
        <div className="mt-10">
          {hasError ? (
            <div>{newsData.message || 'Something went wrong'}</div>
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
      <Footer/>
    </div>
  );
}
