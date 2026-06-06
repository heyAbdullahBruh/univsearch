# 🎓 UniExplorer — University Data Visualisation Platform

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF)

**Explore top universities across multiple countries with an interactive, animated, dark/light-mode visualisation platform.**

[Live Demo](https://mrpie-db.github.io/UniExplorer) · [Report Bug](https://github.com/mrpie-db/UniExplorer/issues) · [Request Feature](https://github.com/mrpie-db/UniExplorer/issues)

</div>

---

## 📸 Screenshots

<div align="center">
  <img src="screenshots/light-mode.png" alt="Light Mode" width="45%">
  <img src="screenshots/dark-mode.png" alt="Dark Mode" width="45%">
</div>

---

## ✨ Features

- 🎨 **Beautiful UI** — Monospace typography with soft pink/green color palette
- 🌓 **Dark/Light Mode** — Persistent theme toggle with smooth transitions
- 📱 **Fully Responsive** — Mobile drawer, tablet grid, desktop multi-column layout
- 🎬 **Animated Everything** — Framer Motion page transitions, card entrances, counter animations
- 🔍 **Advanced Filtering** — Search, filter by type/language/program, sort by rank/tuition/name
- 📊 **University Details** — Full modal with department tabs, admission requirements, scholarships
- 🚀 **Blazing Fast** — Vite-powered build, lazy-loaded components, optimized performance
- 🌍 **Multi-Country Ready** — Infrastructure ready for Turkey (current), Germany, Malaysia, Hungary, China

---

## 🛠️ Tech Stack

| Category             | Technology                 |
| -------------------- | -------------------------- |
| **Framework**        | React 18                   |
| **Build Tool**       | Vite 5                     |
| **Routing**          | React Router v7            |
| **Styling**          | TailwindCSS 3              |
| **Animations**       | Framer Motion 10           |
| **Icons**            | Lucide React               |
| **State Management** | Zustand                    |
| **Fonts**            | JetBrains Mono, Space Mono |

---

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/mrpie-db/UniExplorer.git
cd UniExplorer

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173/) in your browser.

---

## 📁 Project Structure

```text


UniExplorer/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml           # CI/CD pipeline
│   │   ├── codeql.yml       # Security analysis
│   │   └── deploy.yml       # GitHub Pages deployment
│   └── dependabot.yml       # Auto dependency updates
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── flags/           # Country flag SVGs
│   ├── components/
│   │   ├── layout/          # Navbar, MobileDrawer, Footer, ThemeToggle
│   │   ├── ui/              # Badge, ProgramTag, StatBar, AnimatedCounter
│   │   ├── university/      # UniversityCard, UniversityModal, DepartmentTab
│   │   └── filters/         # FilterBar, SearchInput, SortDropdown
│   ├── data/
│   │   └── turkey\_universities\_cs\_it.js  # University dataset
│   ├── hooks/               # useTheme, useFilter, useMediaQuery
│   ├── pages/               # Home, CountryPage, NotFound
│   ├── router/              # React Router configuration
│   ├── store/               # Zustand theme store
│   └── utils/               # Helper functions
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Design System

### Color Palette

| Token        | Light     | Dark      |
| ------------ | --------- | --------- |
| Background   | `#FFF5F7` | `#0D1B0F` |
| Card         | `#FFFFFF` | `#1B4332` |
| Text Primary | `#1B4332` | `#FFB3C6` |
| Accent Pink  | `#FF6B9D` | `#FF6B9D` |
| Accent Green | `#52B788` | `#52B788` |
| Accent Blue  | `#4895EF` | `#4895EF` |

### Typography

- **Body:** JetBrains Mono (monospace)
- **Headings:** Space Mono (display)

---

## 📊 Data Source

Currently features **20 Turkish universities** with CS/IT programs for Bangladeshi HSC students.

**Data includes:**

- QS World Rankings 2026
- Department details (CSE, CyberSecurity, DataScience, IT)
- Admission requirements (HSC %, YÖS, English proficiency)
- Tuition fees (USD & TRY)
- Scholarship information (Türkiye Bursları + university-specific)
- Campus highlights & notes

**Source:** Official university websites · QS Rankings 2026 · Türkiye Bursları (YTB)

---

## 🚀 Deployment

### GitHub Pages (Automatic)

Push to `main` branch — GitHub Actions deploys automatically.

### Manual Build

```bash


npm run build
\# Output in /dist folder
```

### Vercel

```bash


\# Install Vercel CLI
npm i \-g vercel
\# Deploy
vercel \--prod
```

---

## 🧪 Future Countries

| Country     | Status         |
| ----------- | -------------- |
| 🇹🇷 Turkey   | ✅ Active      |
| 🇩🇪 Germany  | 🚧 Coming Soon |
| 🇲🇾 Malaysia | 🚧 Coming Soon |
| 🇭🇺 Hungary  | 🚧 Coming Soon |
| 🇨🇳 China    | 🚧 Coming Soon |
| 🇷🇺 Russia   | 🚧 Coming Soon |
| 🇮🇹 Italy    | 🚧 Coming Soon |

---

## 🤝 Contributing

1.  Fork the repository
2.  Create a feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'feat: add amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

### Commit Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Styling changes
- `refactor:` Code restructuring
- `perf:` Performance improvements
- `chore:` Maintenance tasks

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgments

- [QS World University Rankings](https://www.topuniversities.com/)
- [Türkiye Bursları (YTB)](https://tbbs.meb.gov.tr/)
- [JetBrains Mono Font](https://www.jetbrains.com/lp/mono/)
- [Space Mono Font](https://fonts.google.com/specimen/Space+Mono)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)

---

## ⚠️ Disclaimer

Tuition fees, deadlines, and scholarship terms change annually. Always verify information with the official university website before applying. This platform is for informational purposes only.

---

## 📞 Contact

**Project Link:** [https://github.com/mrpie-db/UniExplorer](https://github.com/mrpie-db/UniExplorer)

**Türkiye Bursları Portal:** [https://tbbs.meb.gov.tr](https://tbbs.meb.gov.tr/)

---

<div align="center"> Made with ❤️ for Bangladeshi students pursuing CS/IT education in Turkey </div> \`\`\`

---

## Command to Create README

```bash


cd /workspace/UnivSearch/univClient
cat \> README.md << 'ENDOFFILE'
\# 🎓 UniExplorer — University Data Visualisation Platform
<div align\="center"\>
!\[License\](https://img.shields.io/badge/license-MIT-blue.svg)
!\[React\](https://img.shields.io/badge/React-18-61DAFB?logo\=react)
!\[Vite\](https://img.shields.io/badge/Vite-5-646CFF?logo\=vite)
!\[TailwindCSS\](https://img.shields.io/badge/Tailwind-3-06B6D4?logo\=tailwindcss)
!\[Framer Motion\](https://img.shields.io/badge/Framer\_Motion-10-0055FF)
\*\*Explore top universities across multiple countries with an interactive, animated, dark/light-mode visualisation platform.\*\*
\[Live Demo\](https://mrpie-db.github.io/UniExplorer) · \[Report Bug\](https://github.com/mrpie-db/UniExplorer/issues) · \[Request Feature\](https://github.com/mrpie-db/UniExplorer/issues)
</div\>
\---
\## ✨ Features
\- 🎨 \*\*Beautiful UI\*\* — Monospace typography with soft pink/green color palette
\- 🌓 \*\*Dark/Light Mode\*\* — Persistent theme toggle with smooth transitions
\- 📱 \*\*Fully Responsive\*\* — Mobile drawer, tablet grid, desktop multi-column layout
\- 🎬 \*\*Animated Everything\*\* — Framer Motion page transitions, card entrances, counter animations
\- 🔍 \*\*Advanced Filtering\*\* — Search, filter by type/language/program, sort by rank/tuition/name
\- 📊 \*\*University Details\*\* — Full modal with department tabs, admission requirements, scholarships
\- 🚀 \*\*Blazing Fast\*\* — Vite-powered build, lazy-loaded components, optimized performance
\- 🌍 \*\*Multi-Country Ready\*\* — Infrastructure ready for Turkey (current), Germany, Malaysia, Hungary, China
\---
\## 🛠️ Tech Stack
| Category | Technology |
|\----------|\------------|
| \*\*Framework\*\* | React 18 |
| \*\*Build Tool\*\* | Vite 5 |
| \*\*Routing\*\* | React Router v7 |
| \*\*Styling\*\* | TailwindCSS 3 |
| \*\*Animations\*\* | Framer Motion 10 |
| \*\*Icons\*\* | Lucide React |
| \*\*State Management\*\* | Zustand |
| \*\*Fonts\*\* | JetBrains Mono, Space Mono |
\---
\## 📦 Installation
\`\`\`bash
git clone https://github.com/mrpie-db/UniExplorer.git
cd UniExplorer
npm install
npm run dev

Visit [http://localhost:5173](http://localhost:5173/)
```

---

## 📁 Project Structure

```text


UniExplorer/
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, MobileDrawer, Footer, ThemeToggle
│   │   ├── ui/           # Badge, ProgramTag, StatBar, AnimatedCounter
│   │   ├── university/   # UniversityCard, UniversityModal, DepartmentTab
│   │   └── filters/      # FilterBar, SearchInput, SortDropdown
│   ├── data/             # University dataset (20 Turkish universities)
│   ├── hooks/            # useTheme, useFilter, useMediaQuery
│   ├── pages/            # Home, CountryPage, NotFound
│   ├── router/           # React Router config
│   ├── store/            # Zustand theme store
│   └── utils/            # Helpers
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Design System

### Colors

| Token      | Light     | Dark      |
| ---------- | --------- | --------- |
| Background | `#FFF5F7` | `#0D1B0F` |
| Card       | `#FFFFFF` | `#1B4332` |
| Text       | `#1B4332` | `#FFB3C6` |
| Pink       | `#FF6B9D` | `#FF6B9D` |
| Green      | `#52B788` | `#52B788` |
| Blue       | `#4895EF` | `#4895EF` |

### Typography

- **Body:** JetBrains Mono
- **Headings:** Space Mono

---

## 📊 Data

20 Turkish universities with CS/IT programs including:

- QS Rankings 2026
- Department details (CSE, CyberSecurity, DataScience, IT)
- Admission requirements (HSC, YÖS, English)
- Tuition fees (USD & TRY)
- Scholarships (Türkiye Bursları + university-specific)

---

## 🚀 Deployment

### GitHub Pages (Automatic)

Push to `main` branch → deploys automatically.

### Manual

```bash


npm run build
\# Serve /dist folder
```

---

## 🌍 Future Countries

| Country     | Status         |
| ----------- | -------------- |
| 🇹🇷 Turkey   | ✅ Active      |
| 🇩🇪 Germany  | 🚧 Coming Soon |
| 🇲🇾 Malaysia | 🚧 Coming Soon |
| 🇭🇺 Hungary  | 🚧 Coming Soon |
| 🇨🇳 China    | 🚧 Coming Soon |

---

## 🤝 Contributing

1.  Fork → 2. Branch → 3. Commit → 4. Push → 5. PR

### Commit Convention

`feat:` `fix:` `docs:` `style:` `refactor:` `chore:`

---

## 📝 License

MIT License

---

## ⚠️ Disclaimer

Verify all information with official sources. Tuition and deadlines change annually.

---

## 🙏 Acknowledgments

- [QS Rankings](https://www.topuniversities.com/)
- [Türkiye Bursları](https://tbbs.meb.gov.tr/)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)

---

<div align="center"> Made with ❤️ for Bangladeshi students pursuing CS/IT in Turkey </div> ENDOFFILE
