"use client";
import { getSearchResult } from "@/lib/newsApi";
import React, { useState } from "react";
import NewsCard from "./NewsCard";

const SearchWindow = ({ onClose }) => {
  const [Input, setInput] = useState("");
  const [SearchResult, setSearchResult] = useState([]);
  const [hasError, setHasError] = useState(false);
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  async function GetResult(x) {
    const data = await getSearchResult(Input);
    if (data.status == "error") {
      setHasError(true);
    } else {
      setSearchResult(data.articles);
    }
    console.log(data);
  }

  return (
    <div className="p-15 w-full h-full backdrop-blur-md text-white">
      <button className="absolute right-5 top-5 p-2 z-50" onClick={onClose}>
        <svg
          viewBox="0 0 10 10"
          width="0.75em"
          height="0.75em"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="1" y1="1" x2="9" y2="9" />
          <line x1="9" y1="1" x2="1" y2="9" />
        </svg>
      </button>
      <input
        type="text"
        onKeyDown={(e) => e.key == "Enter" && GetResult(e.target.value)}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={(e) => console.log(e.target.value)}
        placeholder="search news"
        className="mx-auto focus:outline-none right-1 px-5 py-3 border w-full rounded-md "
        autoFocus
      />
      <div className="w-4/5 max-h-4/5 mx-auto overflow-y-auto flex flex-col justify-start items-center">
        {hasError ? (
          <div>Something went wrong</div>
        ) : SearchResult.length > 0 ? (
          <>
            <h1 className="my-10 text-4xl font-semibold">
              Search result for '{Input.trim()}'
            </h1>
            <div className="flex flex-wrap justify-center gap-5">
              {SearchResult.slice(0, 10).map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          </>
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default SearchWindow;
