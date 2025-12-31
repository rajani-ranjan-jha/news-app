'use client'
import Image from 'next/image';
import { useState } from 'react';

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

    const [imageError, setImageError] = useState(false);

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <article className="max-w-100 flex flex-col overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="w-full h-48 overflow-hidden rounded-t-xl">
                {urlToImage && !imageError ? (
                    <img
                    width='500'
                    height='200'
                        src={urlToImage}
                        alt={title}
                        fill='true'
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        onError={() => setImageError(true)}
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-5xl">
                        📰
                    </div>
                )}
            </div>
            <div className="flex flex-col grow p-6">
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">{source?.name || 'Unknown'}</span>
                    <span className="text-xs">{formatDate(publishedAt)}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold leading-tight text-gray-900 dark:text-white line-clamp-2">{title}</h3>
                {description && (
                    <p className="mb-5 text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">{description}</p>
                )}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 mt-auto text-sm font-semibold text-white bg-linear-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:shadow-lg"
                >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </article>
    );
}
