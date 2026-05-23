"use client";

import { useState } from "react";

export default function SubmitPage() {
  const [form, setForm] = useState({
    name: "",
    website: "",
    category: "",
    description: "",
    pricing: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const categories = ["Writing", "Design", "Code", "Productivity", "Video", "Research", "Audio", "Data", "Other"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", website: "", category: "", description: "", pricing: "", email: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-ink mb-3">Submit a tool</h1>
        <p className="text-muted text-lg">
          Know an AI tool that should be listed? Tell us about it.
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-ink mb-2">Submitted!</h2>
          <p className="text-muted">
            Thanks! We will review your submission and add it to the directory
            within a few days.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 px-6 py-2 bg-accent text-white rounded-full text-sm"
          >
            Submit another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 space-y-6">
          {/* Tool Name */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              Tool name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. ChatGPT, Midjourney…"
              className="w-full px-4 py-3 border border-border rounded-xl text-ink placeholder-muted bg-cream focus:bg-white transition-colors"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              Website URL <span className="text-accent">*</span>
            </label>
            <input
              type="url"
              name="website"
              required
              value={form.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-border rounded-xl text-ink placeholder-muted bg-cream focus:bg-white transition-colors"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              Category <span className="text-accent">*</span>
            </label>
            <select
              name="category"
              required
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-xl text-ink bg-cream focus:bg-white transition-colors"
            >
              <option value="">Select a category…</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              Short description <span className="text-accent">*</span>
            </label>
            <textarea
              name="description"
              required
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Describe what this tool does in 1-2 sentences…"
              className="w-full px-4 py-3 border border-border rounded-xl text-ink placeholder-muted bg-cream focus:bg-white transition-colors resize-none"
            />
          </div>

          {/* Pricing */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              Pricing
            </label>
            <input
              type="text"
              name="pricing"
              value={form.pricing}
              onChange={handleChange}
              placeholder="Free, $10/mo, Freemium…"
              className="w-full px-4 py-3 border border-border rounded-xl text-ink placeholder-muted bg-cream focus:bg-white transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              Your email (optional)
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="we'll notify you when it goes live"
              className="w-full px-4 py-3 border border-border rounded-xl text-ink placeholder-muted bg-cream focus:bg-white transition-colors"
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-accent text-white py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Submitting…" : "Submit tool →"}
          </button>
        </form>
      )}
    </div>
  );
}
