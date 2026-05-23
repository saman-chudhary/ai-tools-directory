import Link from "next/link";
import { tools, categories } from "@/lib/tools";

export default function AboutPage() {
  const allCategories = categories.filter((c) => c !== "All");

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold text-ink mb-4">About</h1>
        <p className="text-xl text-muted leading-relaxed">
          AITools.directory is an open, curated directory of the best AI tools
          for business and technology — built with Next.js and deployed on
          Vercel.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-ink mb-4">The project</h2>
          <p className="text-muted leading-relaxed mb-4">
            This directory was built as a portfolio project to showcase
            full-stack Next.js development skills including dynamic routing,
            server components, API routes, and Tailwind CSS design.
          </p>
          <p className="text-muted leading-relaxed">
            It currently indexes{" "}
            <strong className="text-ink">{tools.length} AI tools</strong> across{" "}
            <strong className="text-ink">{allCategories.length} categories</strong>{" "}
            including {allCategories.join(", ")}.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-ink mb-4">Tech stack</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Next.js 15", desc: "App Router, SSG, API routes" },
              { name: "TypeScript", desc: "Type-safe throughout" },
              { name: "Tailwind CSS", desc: "Utility-first styling" },
              { name: "Vercel", desc: "Deployment & hosting" },
              { name: "GitHub", desc: "Source control & CI/CD" },
              { name: "VS Code", desc: "Development environment" },
            ].map((t) => (
              <div key={t.name} className="p-4 bg-cream rounded-xl">
                <div className="font-semibold text-ink text-sm">{t.name}</div>
                <div className="text-muted text-xs mt-1">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-ink mb-4">Built by</h2>
          <p className="text-muted leading-relaxed mb-6">
            This is a portfolio project. The source code is available on GitHub.
            Feel free to fork it, learn from it, or contribute.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://github.com"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              View on GitHub →
            </Link>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-ink rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Submit a tool
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
