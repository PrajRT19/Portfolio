# Prajwal Ravi Teli — Developer Portfolio

A modern, production-grade personal portfolio built with React + Vite, Tailwind CSS, and Framer Motion.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | React Icons |
| Fonts | Syne + DM Sans (Google Fonts) |
| Deployment | Vercel / Netlify / GitHub Pages |

---

## Features

- Dark / Light theme toggle
- Animated hero with cycling role titles
- Scroll-triggered section animations
- Scroll progress indicator
- Loading screen
- Back-to-top button
- Responsive (Mobile · Tablet · Desktop)
- Interactive project cards with expand/collapse
- Animated count-up statistics
- Glassmorphism UI effects

---

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── BackToTop.jsx
│   │   └── LoadingScreen.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── resume.js        ← All content lives here
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Updating Content

All portfolio content is centralized in one file:

```
src/data/resume.js
```

Edit this file to update:
- Personal info, email, GitHub, LinkedIn
- Skills and technologies
- Projects (title, description, tech stack, links)
- Education details
- Achievements and certifications

No other files need to be touched for content updates.

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push.

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder at netlify.com/drop
```

Or connect your GitHub repo at [netlify.com](https://netlify.com).

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```

Then:
```bash
npm run build
npm run deploy
```

---

## Customization

### Colors

CSS variables are defined in `src/index.css` under `:root`:

```css
--accent-cyan: #00d4ff;
--accent-violet: #7c3aed;
--accent-rose: #f43f5e;
--accent-amber: #f59e0b;
```

Change these to match your personal brand.

### Fonts

Fonts are loaded via Google Fonts in `src/index.css`. Replace `Syne` (headings) and `DM Sans` (body) with your preferred fonts.

### Adding a Project

In `src/data/resume.js`, add an entry to the `projects` array:

```js
{
  title: "Your Project",
  subtitle: "Short tagline",
  description: "What it does.",
  problem: "What problem it solves.",
  features: ["Feature 1", "Feature 2"],
  tech: ["React", "Node.js"],
  github: "https://github.com/...",
  live: "https://yourproject.com",   // or null
  accent: "#00d4ff",                 // card accent color
  featured: true,
  icon: "🚀",
}
```

---

## License

MIT — free to use and modify for personal portfolios.

---

*Built by Prajwal Ravi Teli · [teliprajwal8@gmail.com](mailto:teliprajwal8@gmail.com)*
