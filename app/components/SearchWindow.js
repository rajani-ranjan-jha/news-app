"use client";
import { getSearchResult } from "@/lib/newsApi";
import React, { useState } from "react";
import NewsCard from "./NewsCard";
import LoadingSpinner from "./LoadingSpinner";

const SearchWindow = ({ onClose }) => {
  const [Input, setInput] = useState("");
  const [SearchResult, setSearchResult] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  async function GetResult() {
    setIsPending(true);
    const data = await getSearchResult(Input);
    if (data.status == "error") {
      setHasError(true);
    } else {
      setSearchResult(data.articles);
    }
    // console.log(data);
    setIsPending(false);
  }

  return (
    <div className="w-full h-full flex flex-col backdrop-blur-md text-white overflow-auto">
      <div className="fixed w-full p-15 flex flex-col">
        <button
          className="absolute right-5 top-5 p-2 z-50 hover:bg-white/20 cursor-pointer rounded-md"
          onClick={onClose}
        >
          <svg
            viewBox="0 0 10 10"
            width="1em"
            height="1em"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="1" y1="1" x2="9" y2="9" />
            <line x1="9" y1="1" x2="1" y2="9" />
          </svg>
        </button>
        <input
          id='search'
          className="mx-auto focus:outline-none right-1 px-5 py-3 border w-full rounded-md "
          type="text"
          onKeyDown={(e) => e.key == "Enter" && GetResult()}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search News"
          autoFocus
        />
      </div>
      <div className="mt-30 w-full flex flex-col justify-start items-center">
        {hasError ? (
          <div>Something went wrong</div>
        ) : SearchResult.length > 0 && Input.length > 0 ? (
          <>
            <h1 className="my-10 text-4xl font-semibold">
              Search result
            </h1>
            <div className="flex flex-wrap justify-center gap-5">
              {SearchResult.slice(0, 10).map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </div>
          </>
        ) : (
          isPending && (
            <div className="mt-10 text-center text-3xl">
              <LoadingSpinner />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchWindow;
