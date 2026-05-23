import Link from "next/link";
import { Tool, pricingColors } from "@/lib/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(tool.rating));

  return (
    <Link href={`/tools/${tool.slug}`} className="block">
      <div className="tool-card bg-white border border-border rounded-2xl p-5 h-full cursor-pointer">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{tool.logo}</div>
            <div>
              <h3 className="font-bold text-ink text-base leading-tight">{tool.name}</h3>
              <p className="text-xs text-muted mt-0.5">{tool.category}</p>
            </div>
          </div>
          {tool.featured && (
            <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium flex-shrink-0">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
          {tool.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {stars.map((filled, i) => (
                <span
                  key={i}
                  className={`text-xs ${filled ? "text-amber-400" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs font-semibold text-ink">{tool.rating}</span>
          </div>

          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              pricingColors[tool.pricingType]
            }`}
          >
            {tool.pricing}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-cream text-muted rounded-full font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
