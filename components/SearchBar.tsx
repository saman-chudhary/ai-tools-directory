"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/tools?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-xl mx-auto">
      <div className="relative flex-1">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search AI tools… e.g. video, writing, free"
          className="w-full pl-12 pr-4 py-4 bg-white border border-border rounded-xl text-ink placeholder-muted text-base focus:outline-none focus:border-accent transition-colors shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-sm flex-shrink-0"
      >
        Search
      </button>
    </form>
  );
}
