export default function Main() {
  // Placeholder news data
  const newsArticles = [
    {
      id: 1,
      title: "Breaking: Major Tech Announcement Shakes the Industry",
      excerpt: "A leading technology company has unveiled groundbreaking innovations that could revolutionize the way we interact with devices.",
      category: "Technology",
      date: "2024-01-15",
      image: "/placeholder-news.jpg"
    },
    {
      id: 2,
      title: "Global Climate Summit Reaches Historic Agreement",
      excerpt: "World leaders have agreed on ambitious new targets to combat climate change and reduce carbon emissions.",
      category: "Environment",
      date: "2024-01-14",
      image: "/placeholder-news.jpg"
    },
    {
      id: 3,
      title: "Stock Market Hits Record High Amid Economic Recovery",
      excerpt: "Financial markets continue to surge as economic indicators show signs of strong recovery across multiple sectors.",
      category: "Business",
      date: "2024-01-13",
      image: "/placeholder-news.jpg"
    },
    {
      id: 4,
      title: "New Study Reveals Surprising Health Benefits of Daily Exercise",
      excerpt: "Recent research shows that even moderate daily physical activity can significantly improve overall health outcomes.",
      category: "Health",
      date: "2024-01-12",
      image: "/placeholder-news.jpg"
    },
    {
      id: 5,
      title: "Space Exploration Mission Discovers New Planetary System",
      excerpt: "NASA's latest mission has identified a potentially habitable planet in a nearby star system.",
      category: "Science",
      date: "2024-01-11",
      image: "/placeholder-news.jpg"
    },
    {
      id: 6,
      title: "Cultural Festival Celebrates Diversity and Unity",
      excerpt: "Annual international festival brings together artists and performers from around the world to celebrate cultural diversity.",
      category: "Culture",
      date: "2024-01-10",
      image: "/placeholder-news.jpg"
    }
  ];

  return (
    <main className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Article */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="h-48 w-full md:w-96 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                  Featured Story
                </div>
                <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
                  {newsArticles[0].title}
                </h1>
                <p className="mt-2 text-gray-500">
                  {newsArticles[0].excerpt}
                </p>
                <div className="mt-4">
                  <span className="text-sm text-gray-400">{newsArticles[0].date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.slice(1).map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Article Image</span>
              </div>
              <div className="p-6">
                <div className="uppercase tracking-wide text-xs text-indigo-600 font-semibold mb-2">
                  {article.category}
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
            Load More Articles
          </button>
        </div>
      </div>
    </main>
  );
}
