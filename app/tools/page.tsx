"use client";

import { useState } from "react";
import { tools, categories, pricingColors } from "@/lib/tools";
import type { Tool } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activePricing, setActivePricing] = useState("All");

  const pricingTypes = ["All", "Free", "Freemium", "Paid", "Enterprise"];

  const filtered = tools.filter((t: Tool) => {
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    const matchPrice =
      activePricing === "All" || t.pricingType === activePricing;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q));
    return matchCat && matchPrice && matchSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-ink mb-3">All tools</h1>
        <p className="text-muted text-lg">
          {tools.length} AI tools · filter to find yours
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
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
          placeholder="Search tools, categories, tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-border rounded-xl text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              activeCategory === cat
                ? "bg-accent text-white border-accent"
                : "bg-white text-ink border-border hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {pricingTypes.map((pt) => (
          <button
            key={pt}
            onClick={() => setActivePricing(pt)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
              activePricing === pt
                ? "bg-ink text-white border-ink"
                : "bg-white text-muted border-border hover:border-ink hover:text-ink"
            }`}
          >
            {pt}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted mb-6">
        {filtered.length} tool{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-muted">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl font-medium">No tools found</p>
          <p className="text-sm mt-2">Try a different search or category</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
              setActivePricing("All");
            }}
            className="mt-6 px-6 py-2 bg-accent text-white rounded-full text-sm"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
