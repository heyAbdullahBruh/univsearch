export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-card)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xl font-bold font-display text-brand-pinkDeep">
                &lt;/&gt;
              </span>
              <span className="font-display font-bold">UniExplorer</span>
            </div>
            <p className="text-sm text-[var(--text-muted)] font-mono">
              Data: QS 2026 · YTB 2026
            </p>
          </div>

          <div>
            <p className="text-sm font-mono text-[var(--text-muted)]">
              © 2026 · Open Source Project
            </p>
            <p className="text-sm font-mono text-[var(--text-muted)] mt-1">
              Verify all information with official sources
            </p>
          </div>

          <div className="space-y-2">
            <a
              href="https://tbbs.meb.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-brand-blue hover:text-brand-pinkDeep transition-colors block"
            >
              Türkiye Bursları →
            </a>
            <a
              href="https://github.com/heyAbdullahBruh/univsearch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-brand-blue hover:text-brand-pinkDeep transition-colors block"
            >
              GitHub Repository →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
