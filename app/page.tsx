import Link from "next/link";
import { getFeaturedTools, tools, categories } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import CategoryPill from "@/components/CategoryPill";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const featured = getFeaturedTools();
  const allCategories = categories.filter((c) => c !== "All");

  return (
    <div>
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 text-sm text-muted mb-8 font-mono">
          <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
          {tools.length} tools indexed · Updated weekly
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-ink leading-[1.05] mb-6 tracking-tight">
          Find the right
          <br />
          <span className="text-accent">AI tool</span> for the job
        </h1>

        <p className="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          The most complete directory of AI tools for business and tech.
          Discover, compare, and choose smarter.
        </p>

        <SearchBar />

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {allCategories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              className="px-4 py-2 bg-white border border-border rounded-full text-sm text-ink hover:border-accent hover:text-accent transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Tools Listed", value: `${tools.length}+` },
            { label: "Categories", value: `${allCategories.length}` },
            { label: "Free Tools", value: "60+" },
            { label: "Updated", value: "Weekly" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-ink">{s.value}</div>
              <div className="text-sm text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-ink">Featured tools</h2>
            <p className="text-muted mt-1">Hand-picked by our team</p>
          </div>
          <Link
            href="/tools"
            className="text-sm text-accent font-medium hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((tool, i) => (
            <div
              key={tool.id}
              className={`animate-fade-up stagger-${Math.min(i + 1, 6)}`}
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </section>

      {/* Browse by category */}
      <section className="bg-white border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-8">Browse by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allCategories.map((cat) => (
              <CategoryPill key={cat} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-ink mb-4">
          Know a great AI tool?
        </h2>
        <p className="text-muted mb-8 text-lg">
          Submit it to the directory and help others discover it.
        </p>
        <Link
          href="/submit"
          className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors"
        >
          Submit a tool →
        </Link>
      </section>
    </div>
  );
}
