# ⚡ AITools.directory

A curated, searchable directory of the best AI tools for business and technology. Built with Next.js 15 and deployed on Vercel.

🔗 **Live demo:** [your-project.vercel.app](https://your-project.vercel.app)

---

## Features

- 🔍 **Search** — full-text search across tools, categories, and tags
- 🗂️ **Category filter** — Writing, Design, Code, Productivity, Video, Research, Audio, Data
- 📄 **Tool detail pages** — with ratings, pricing, tags, and related tools
- 📬 **Submit a tool** — form with API route for new submissions
- ⚡ **Fast** — statically generated pages with Next.js App Router
- 📱 **Responsive** — works great on mobile and desktop

## Tech Stack

| Tool | Purpose |
|---|---|
| **Next.js 15** | Framework (App Router, SSG, API routes) |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Vercel** | Hosting & deployment |
| **GitHub** | Source control |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/ai-tools-directory.git
cd ai-tools-directory

# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
app/
├── page.tsx              # Homepage
├── tools/
│   ├── page.tsx          # Browse all tools
│   └── [slug]/page.tsx   # Tool detail page
├── category/[name]/      # Category pages
├── submit/page.tsx       # Submit a tool
├── about/page.tsx        # About page
└── api/submit/route.ts   # Form handler API

components/
├── Navbar.tsx
├── Footer.tsx
├── ToolCard.tsx
├── SearchBar.tsx
└── CategoryPill.tsx

data/
└── tools.json            # Tool database

lib/
└── tools.ts              # Data helpers
```

## Adding Tools

Edit `data/tools.json` and add a new entry:

```json
{
  "id": "21",
  "name": "Tool Name",
  "slug": "tool-name",
  "category": "Writing",
  "description": "Short description...",
  "longDescription": "Longer description...",
  "logo": "🤖",
  "rating": 4.5,
  "pricing": "Free / $10 mo",
  "pricingType": "Freemium",
  "website": "https://example.com",
  "tags": ["tag1", "tag2"],
  "featured": false
}
```

## Deploy

This project is configured for one-click Vercel deployment:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/ai-tools-directory)

---

Built by [Your Name](https://github.com/YOUR_USERNAME) · Portfolio project
