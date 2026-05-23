import toolsData from "@/data/tools.json";

export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  logo: string;
  rating: number;
  pricing: string;
  pricingType: "Free" | "Freemium" | "Paid" | "Enterprise";
  website: string;
  tags: string[];
  featured: boolean;
}

export const tools: Tool[] = toolsData as Tool[];

export const categories = [
  "All",
  ...Array.from(new Set(tools.map((t) => t.category))).sort(),
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  if (category === "All") return tools;
  return tools.filter((t) => t.category === category);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

export const pricingColors: Record<string, string> = {
  Free: "bg-green-100 text-green-700",
  Freemium: "bg-blue-100 text-blue-700",
  Paid: "bg-orange-100 text-orange-700",
  Enterprise: "bg-purple-100 text-purple-700",
};
