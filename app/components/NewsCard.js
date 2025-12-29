import Image from 'next/image';

export default function NewsCard({ article }) {
    if (!article) return null;

    const {
        title,
        description,
        url,
        urlToImage,
        source,
        publishedAt
    } = article;

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    // Fallback image if no image provided
    const imageUrl = urlToImage || '/placeholder-news.jpg';

    return (
        <article className="news-card">
            <div className="news-card-image">
                {urlToImage ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        loading="lazy"
                    />
                ) : (
                    <div className="news-card-placeholder">
                        📰
                    </div>
                )}
            </div>
            <div className="news-card-content">
                <div className="news-card-meta">
                    <span className="news-source">{source?.name || 'Unknown'}</span>
                    <span className="news-date">{formatDate(publishedAt)}</span>
                </div>
                <h3 className="news-title">{title}</h3>
                {description && (
                    <p className="news-description">{description}</p>
                )}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 w-1/2 text-center hover:bg-blue-500/50 px-10 py-10 font-semibold rounded-md"
                >
                    Read More →
                </a>
            </div>
        </article>
    );
}
