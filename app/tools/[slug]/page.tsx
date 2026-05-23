import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getToolBySlug,
  tools,
  pricingColors,
  getToolsByCategory,
} from "@/lib/tools";
import type { Metadata } from "next";
import ToolCard from "@/components/ToolCard";

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool not found" };
  return {
    title: `${tool.name} — AITools.directory`,
    description: tool.description,
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .slice(0, 3);

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(tool.rating));

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-accent transition-colors">
          Tools
        </Link>
        <span>/</span>
        <span className="text-ink">{tool.name}</span>
      </nav>

      {/* Tool header */}
      <div className="bg-white border border-border rounded-2xl p-8 mb-6">
        <div className="flex items-start gap-6">
          <div className="text-6xl flex-shrink-0">{tool.logo}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center flex-wrap gap-3 mb-2">
              <h1 className="text-4xl font-extrabold text-ink">{tool.name}</h1>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  pricingColors[tool.pricingType]
                }`}
              >
                {tool.pricingType}
              </span>
            </div>

            <p className="text-muted text-lg mb-4">{tool.category}</p>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {stars.map((filled, i) => (
                  <span
                    key={i}
                    className={filled ? "text-amber-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">
                {tool.rating}
              </span>
              <span className="text-sm text-muted">/ 5.0</span>
            </div>

            <p className="text-ink leading-relaxed mb-6">
              {tool.longDescription}
            </p>

            <div className="flex items-center flex-wrap gap-4">
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
              >
                Visit {tool.name} →
              </a>
              <span className="text-ink font-semibold">{tool.pricing}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white border border-border rounded-2xl p-6 mb-6">
        <h2 className="text-lg font-bold text-ink mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-cream border border-border rounded-full text-sm text-muted font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related tools */}
      {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-ink mb-6">
            More {tool.category} tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((t) => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        </div>
      )}

      {/* Back */}
      <div className="mt-10 text-center">
        <Link href="/tools" className="text-muted hover:text-accent transition-colors text-sm">
          ← Back to all tools
        </Link>
      </div>
    </div>
  );
}
