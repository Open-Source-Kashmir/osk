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

- Add new mentor card to Mentors Page
- Create program card for LFX, GSoC, Outreachy, C4GT
- Improve About Us section
- Add new resources (guides, blogs, YouTube links)
- Enhance UI/UX styling

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

Here are some ways you can contribute:

- Add mentor cards with bio, expertise, links.
- Create program cards for GSoC, LFX, Outreachy, etc.
- Add a Contributors Wall page.
- Improve CSS and responsiveness.
- Add animations and hover effects.
- Write documentation for beginners.
- Suggest new sections/features.

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
