import { notFound } from "next/navigation";
import { getToolsByCategory, categories } from "@/lib/tools";
import type { Metadata } from "next";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";

export async function generateStaticParams() {
  return categories
    .filter((c) => c !== "All")
    .map((c) => ({ name: c.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const cat = name.charAt(0).toUpperCase() + name.slice(1);
  return {
    title: `${cat} AI Tools — AITools.directory`,
    description: `Browse the best AI tools for ${cat.toLowerCase()}`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1);
  const categoryTools = getToolsByCategory(categoryName);

  if (categoryTools.length === 0) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-accent transition-colors">Tools</Link>
        <span>/</span>
        <span className="text-ink">{categoryName}</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-ink mb-3">
          {categoryName} tools
        </h1>
        <p className="text-muted text-lg">
          {categoryTools.length} tools in this category
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryTools.map((tool, i) => (
          <div
            key={tool.id}
            className={`animate-fade-up stagger-${Math.min(i + 1, 6)}`}
          >
            <ToolCard tool={tool} />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/tools"
          className="inline-block px-8 py-3 border border-border rounded-full text-ink hover:border-accent hover:text-accent transition-colors"
        >
          Browse all categories →
        </Link>
      </div>
    </div>
  );
}
