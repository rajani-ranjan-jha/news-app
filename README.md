# News App

A modern news application built with Next.js that fetches and displays the latest news headlines from various categories using the NewsAPI.

## Features

- View top headlines from different categories (Business, Technology, Sports, Entertainment, Health, Science)
- Search for news articles
- Responsive design with Tailwind CSS
- Server-side rendering for better performance

## Tech Stack

- **Framework:** Next.js 16
- **Frontend:** React 19
- **Styling:** Tailwind CSS
- **API:** NewsAPI.org

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- A NewsAPI key from [NewsAPI.org](https://newsapi.org/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd news-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your NewsAPI key:
   ```
   NEXT_PUBLIC_NEWS_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- The home page displays top headlines.
- Navigate to category pages like `/business`, `/technology`, etc., for category-specific news.
- Use the search functionality to find articles on specific topics.
