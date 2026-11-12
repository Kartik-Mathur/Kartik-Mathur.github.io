# Kartik Mathur — Personal Portfolio

A carefully researched, lightweight personal portfolio for **Kartik Mathur**, developer, educator and Co-founder & Academic Head at Coding Blocks.

## What's inside

- `index.html` — page content, SEO metadata, structured data and accessible markup
- `styles.css` — visual design, responsive layouts and reduced-motion support
- `script.js` — mobile navigation, working repository filters, photo fallback and best-effort live GitHub repository count
- `assets/favicon.svg` — simple personal favicon
- `RESEARCH.md` — fact-checking notes and links for future updates
- `GITHUB_PROFILE_README.md` — matching, copy-ready profile text for a `Kartik-Mathur/Kartik-Mathur` GitHub profile repository

**No build step, dependencies or account credentials needed.** The portrait loads directly from Coding Blocks' public image host. If the host is inaccessible, a typographic fallback is shown. The fonts use Google Fonts with system fallbacks. GitHub's public API updates the repository count when reachable; otherwise a static count appears.

## Preview locally

Open `index.html` in your browser. Alternatively:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a public repository named `kartik-mathur-portfolio` under the account that should own the website.
2. Upload the **contents** of this folder to the repository root, or run:

```bash
git init
git add .
git commit -m "Build Kartik Mathur portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kartik-mathur-portfolio.git
git push -u origin main
```

3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Your page will appear at `https://YOUR-USERNAME.github.io/kartik-mathur-portfolio/` once deployment finishes.

If this is published in a repository named `Kartik-Mathur.github.io` under `Kartik-Mathur`, the site will be at `https://Kartik-Mathur.github.io/` instead.

## Personalise before publishing

- Review and approve the first-person biography, especially the personal teaching philosophy.
- Replace the portrait URL with an image file you control if the Coding Blocks image host is not intended for long-term third-party embedding. Add `assets/kartik-photo.jpg`, update the HTML `src`, and update the social preview image to an absolute hosted URL.
- Replace / add GitHub projects over time; the six featured links were checked against public repositories in November 2026.
- Validate student-count language against current official Coding Blocks figures; the page deliberately labels **2.5L+** as the Coding Blocks **community**, not a count of one person's students.
- Change the schema.org `url` value to the final hosted portfolio URL after publishing.
- Adjust speaking invites, email and available social links to match personal preferences.

No personal testimonials or employment history were invented. Workshop attendance is attributed to the official MAIT event report.
