import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-extrabold text-lg text-ink">
              <span className="text-accent">⚡</span> AITools.directory
            </Link>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              The best AI tools for business and technology in one place.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-ink text-sm mb-3">Directory</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/tools" className="hover:text-accent transition-colors">Browse all</Link></li>
              <li><Link href="/category/writing" className="hover:text-accent transition-colors">Writing</Link></li>
              <li><Link href="/category/code" className="hover:text-accent transition-colors">Code</Link></li>
              <li><Link href="/category/design" className="hover:text-accent transition-colors">Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-ink text-sm mb-3">More</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/category/productivity" className="hover:text-accent transition-colors">Productivity</Link></li>
              <li><Link href="/category/video" className="hover:text-accent transition-colors">Video</Link></li>
              <li><Link href="/category/research" className="hover:text-accent transition-colors">Research</Link></li>
              <li><Link href="/category/audio" className="hover:text-accent transition-colors">Audio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-ink text-sm mb-3">Project</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/submit" className="hover:text-accent transition-colors">Submit a tool</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© {new Date().getFullYear()} AITools.directory — Built with Next.js & Vercel</p>
          <p className="font-mono">A portfolio project</p>
        </div>
      </div>
    </footer>
  );
}
