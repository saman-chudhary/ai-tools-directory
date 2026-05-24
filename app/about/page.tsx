import Link from "next/link";
import { tools, categories } from "@/lib/tools";

export default function AboutPage() {
  const allCategories = categories.filter((c) => c !== "All");

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold text-ink mb-4">
          About AITools.directory
        </h1>
        <p className="text-xl text-muted leading-relaxed">
          The most complete, up-to-date directory of AI tools for business and
          technology — curated by humans, updated weekly, free to use.
        </p>
      </div>

      <div className="space-y-6">
        {/* Mission */}
        <div className="bg-white border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-ink mb-4">Our mission</h2>
          <p className="text-muted leading-relaxed mb-4">
            AI is moving fast. New tools launch every week, pricing changes
            overnight, and it's hard to know what's worth your time. We built
            AITools.directory to cut through the noise — giving individuals,
            teams, and businesses a single trusted place to discover, compare,
            and choose the right AI tools.
          </p>
          <p className="text-muted leading-relaxed">
            Every tool in our directory is reviewed before listing. We check the
            pricing, test the core features, and write an honest description so
            you can make an informed decision without signing up for ten free
            trials.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-accent rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">By the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: `${tools.length}+`, label: "Tools listed" },
              { value: `${allCategories.length}`, label: "Categories" },
              { value: "60+", label: "Free tools" },
              { value: "Weekly", label: "Updates" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="text-sm opacity-80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-ink mb-4">What we cover</h2>
          <p className="text-muted leading-relaxed mb-6">
            We index AI tools across {allCategories.length} categories so you
            can find exactly what you need, whether you're a developer, designer,
            marketer, or business owner.
          </p>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                className="px-4 py-2 bg-cream border border-border rounded-full text-sm text-ink hover:border-accent hover:text-accent transition-colors font-medium"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* How we select */}
        <div className="bg-white border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-ink mb-4">
            How we select tools
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: "✅",
                title: "Verified & working",
                desc: "Every tool must have a live, functional product before it gets listed.",
              },
              {
                icon: "💰",
                title: "Transparent pricing",
                desc: "We clearly label what's free, freemium, paid, or enterprise so there are no surprises.",
              },
              {
                icon: "⭐",
                title: "Honest ratings",
                desc: "Ratings are based on real-world usability, not paid placements or sponsorships.",
              },
              {
                icon: "🔄",
                title: "Kept up to date",
                desc: "We review listings weekly and update pricing, features, and status as things change.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-semibold text-ink text-sm">
                    {item.title}
                  </div>
                  <div className="text-muted text-sm mt-0.5 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit CTA */}
        <div className="bg-white border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-ink mb-3">
            Know a tool we're missing?
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Our directory grows with community contributions. If you've found an
            AI tool that belongs here, submit it and we'll review it within a
            few days.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              Submit a tool →
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-ink rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Browse all tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
