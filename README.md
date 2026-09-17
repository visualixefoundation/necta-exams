# NECTA A-Level Papers

A small Next.js site that lists and serves past NECTA Advanced Level exam
papers for six subjects: Economics 1 & 2, Computer Science 1 & 2, and
Advanced Mathematics 1 & 2.

## Structure

- `lib/subjects.js` — the list of subjects, their years, and display text.
  Add a new year by adding it to a subject's `years` array **and** dropping
  the matching PDF into `public/exams/<subject-slug>/<year>.pdf`.
- `public/exams/<subject-slug>/<year>.pdf` — the actual exam files, served
  as static assets.
- `app/page.js` — the home page (list of subjects).
- `app/[subject]/page.js` — a subject's page (list of years, with View and
  Download buttons for each).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy on Vercel

1. Push this folder to your GitHub repo (replace whatever is there now —
   this folder already contains your PDFs under `public/exams`, renamed to
   match the site's URLs).
2. Go to vercel.com → **Add New Project** → import the `necta-exams` repo.
3. Leave the default settings (Vercel auto-detects Next.js) and click
   **Deploy**.
4. You'll get a live URL like `necta-exams.vercel.app`. Every future push
   to `main` redeploys automatically.

## Adding more papers later

Add the PDF to `public/exams/<subject-slug>/<year>.pdf`, add the year
number to that subject's `years` array in `lib/subjects.js`, commit, and
push — Vercel redeploys automatically.
