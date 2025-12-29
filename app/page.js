import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import { getAllTopHeadlines } from "../lib/newsApi";

export default async function Home() {
  const newsData = await getAllTopHeadlines();
  const articles = newsData.articles || [];
  const hasError = newsData.status === "error";
  const KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Top Headlines</h1>
            <p className="page-subtitle">Latest news from around the world</p>
          </div>

          {hasError ? (
            <div className="error-container">
              <div className="error-icon">⚠️</div>
              <h2 className="error-title">Unable to Load News</h2>
              <p className="error-message">{newsData.error}</p>
              <div className="error-hint">
                💡 <strong>Tip:</strong> Make sure you've added your NewsAPI key
                to the <code>.env.local</code> file.
                <br />
                Get your free API key at{" "}
                <a
                  href="https://newsapi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  newsapi.org
                </a>
              </div>
            </div>
          ) : articles.length > 0 ? (
            <div className="news-grid">
              {articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          ) : (
            <div className="error-container">
              <div className="error-icon">📰</div>
              <h2 className="error-title">No News Available</h2>
              <p className="error-message">
                Check back later for the latest updates.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
