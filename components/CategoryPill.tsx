import Link from "next/link";

const categoryIcons: Record<string, string> = {
  Writing: "✍️",
  Design: "🎨",
  Code: "💻",
  Productivity: "⚡",
  Video: "🎬",
  Research: "🔍",
  Audio: "🔊",
  Data: "📊",
};

const categoryColors: Record<string, string> = {
  Writing: "hover:bg-blue-50 hover:border-blue-200",
  Design: "hover:bg-pink-50 hover:border-pink-200",
  Code: "hover:bg-green-50 hover:border-green-200",
  Productivity: "hover:bg-yellow-50 hover:border-yellow-200",
  Video: "hover:bg-red-50 hover:border-red-200",
  Research: "hover:bg-indigo-50 hover:border-indigo-200",
  Audio: "hover:bg-purple-50 hover:border-purple-200",
  Data: "hover:bg-teal-50 hover:border-teal-200",
};

export default function CategoryPill({ category }: { category: string }) {
  const icon = categoryIcons[category] || "🤖";
  const color = categoryColors[category] || "hover:bg-gray-50 hover:border-gray-200";

  return (
    <Link
      href={`/category/${category.toLowerCase()}`}
      className={`flex items-center gap-3 p-4 bg-white border border-border rounded-xl transition-all ${color} group`}
    >
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="font-semibold text-ink text-sm group-hover:text-accent transition-colors">
          {category}
        </div>
        <div className="text-xs text-muted">Browse tools →</div>
      </div>
    </Link>
  );
}
