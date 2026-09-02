<div style="text-align: center;">
  <img 
    src="https://github.com/user-attachments/assets/50faf505-4be4-4bf9-8531-386fd5036b00" 
    alt="osl-logo" 
    style="margin:auto; width:200px; display:block;" 
  />
</div>

# 🌍 Open Source Kashmir Website

This is the official website for **Open Source Kashmir (OSK)** — a community-driven initiative to build an open source ecosystem in Kashmir through awareness, mentorship, and collaboration.

We are part of **Hacktoberfest 2025 🎉** and welcome contributors of all skill levels. Whether you’re new to open source or experienced, this is a great place to contribute.

---

## 🤝 Contribution Guidelines

We welcome all contributions — code, documentation, design, and ideas.

### ✅ Good First Issues

Jump straight in with beginner-friendly tasks:

- Add a new mentor card to the Community page (`src/data/mentors.js`)
- Add a program card to the Programs page (`src/data/programs.js`)
- Fix a `good-first-issue` label on the repo or report a bug
- Improve copy/tone/spacing across any page
- Polish existing card hover effects and responsiveness

## ⚠️ Hacktoberfest Rules (Important)

- PRs must be created between Oct 1–31, 2025
- PRs must be meaningful (no spam, no random text, no whitespace-only changes)
- Low-quality PRs will be marked as spam or invalid and won’t count
- Valid PRs must be merged, approved, or labeled hacktoberfest-accepted

📖 More details: [Hacktoberfest Rules](https://hacktoberfest.com/)

---

## 🚀 Development Setup

This project uses **React.js** (Vite + Tailwind CSS) as a static frontend.

1. Fork this repo 🍴
2. Clone your fork

   ```bash
   git clone https://github.com/YOUR-USERNAME/osk.git
   ```
3. ``cd osk``
4. Install dependencies

   ```bash
     npm install
   ```
5. Start development server

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

## ☁️ Deploy to Vercel

The site is a static Vite single-page app — no server required.

1. Push this repo to GitHub.
2. Go to [Vercel](https://vercel.com) → **New Project** → Import your repo.
3. Vercel auto-detects **Vite** with these defaults (no changes needed):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

`vercel.json` is included so client-side routing (`/programs`, `/community`, `/learn`, ...) works on refresh and direct navigation.

> Note: The contact form opens the visitor's email app (`mailto:`) since there is no backend. To add real form submission later, wire it to a form service or a serverless function.

## 🎯 Contribution Ideas

Here are **20 concrete ways** to contribute — new features, bug fixes, recommendations, and more. Don't feel limited to this list; your own ideas are always welcome.

### ✨ New Features

1. **Add a mentor card** — Add mentors with bio, expertise, GitHub/LinkedIn links, and location to `src/data/mentors.js`.
2. **Add a program card** — Add open source programs (GSoC, LFX, Outreachy, C4GT, MLH, etc.) to `src/data/programs.js`.
3. **Build an Events page** — A section listing upcoming OSK meetups, workshops, and Hacktoberfest events.
4. **Add a Newsroom / Blog page** — Post announcements, community updates, and contributor spotlights.
5. **Create a "First PR Guide" page** — A step-by-step illustrated guide for complete beginners.
6. **Add a dark-mode polish pass** — Audit every page and fix any contrast or spacing issues in dark mode.
7. **Add project showcase cards** — Highlight real projects built by OSK members, with links to their repos.
8. **Add testimonials/testimonials carousel** — Share quotes from contributors and mentees (see the sticky-note quotes on the homepage).
9. **Add FAQ accordion** — Expand the FAQ section with more answers (contribution, mentorship, and community questions).
10. **Add a searchable resources library** — Filterable grid of guides, blogs, videos, and tools (see `resources.md`).

### 🐛 Bug Fixes & Improvements

11. **Fix responsiveness on small screens** — Improve mobile layout of cards, nav, and modals on narrow viewports.
12. **Improve accessibility** — Add `aria` labels, improve focus states, and ensure keyboard navigation works site-wide.
13. **Optimize images & assets** — Compress/bundle the program logos (some are large) for faster load times.
14. **Polish animations & hover effects** — Make the float/wiggle and card-lift animations buttery-smooth and reduced-motion friendly.
15. **Add a site search** — Live client-side search across programs, mentors, and learning tracks.

### 💡 Recommendations & Docs

16. **Recommend a resource** — Suggest guides, blogs, or YouTube videos to add to the Learn/Resources section.
17. **Recommend a program** — Suggest an open source internship or fellowship not yet listed on the Programs page.
18. **Improve documentation** — Fix typos, clarify steps, or translate the README/guides into Urdu, Kashmiri, or Hindi.
19. **Add contributor guidelines** — Help write a `CODE_OF_CONDUCT.md` or a detailed `CONTRIBUTING.md`.
20. **Report a bug or suggest a feature** — Open an [Issue](https://github.com/Open-Source-Kashmir/osk/issues) describing what you found or what you'd like to see.

🗂️ Where things live: mentors in `src/data/mentors.js`, programs in `src/data/programs.js`, learning content in `src/data/learningTracks.json`, shared styles in `src/index.css` and `tailwind.config.js`.

## 🛠 How to Contribute

- Fork & clone the repo.
- Create a new branch.
- Make changes and commit.
- Push and open a Pull Request (PR).

✅ Tip: Small contributions are welcome — even adding one mentor card is a valid PR.

## 🤝 Join the Community

- GitHub Org: Open Source Kashmir
- LinkedIn: coming soon
- Instagram: coming soon

Let’s build the open source community of Kashmir together 🚀

## Admin

[Athar Ramzan](https://github.com/oathar) `<br>`
[Ayaan Taimur](https://github.com/MAT1018)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE.md) file for details.
