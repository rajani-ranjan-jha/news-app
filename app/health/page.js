import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import { getTopHeadlines } from '../../lib/newsApi';

export const metadata = {
    title: 'Health News - NewsHub',
    description: 'Latest health news, medical breakthroughs, and wellness updates',
};

export default async function HealthPage() {
    const newsData = await getTopHeadlines('health');
    const articles = newsData.articles || [];
    const hasError = newsData.status === 'error';

    return (
        <>
            <Header />
            <main className="main-content">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title">Health News</h1>
                        <p className="page-subtitle">
                            Stay informed about health, wellness, and medical advancements
                        </p>
                    </div>

                    {hasError ? (
                        <div className="error-container">
                            <div className="error-icon">⚠️</div>
                            <h2 className="error-title">Unable to Load News</h2>
                            <p className="error-message">{newsData.error}</p>
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
                            <h2 className="error-title">No Health News Available</h2>
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
