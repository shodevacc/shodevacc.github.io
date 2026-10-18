<p align="center">
    <img alt="Sho-Icon" src="/src/images/SHO.svg" width="60" />
</p>
<h1 align="center">
  Shoaib Alyaan's Website
</h1>
Hello! This is the website I made to showcase my modern web-development skills along with information about myself. I have included my Academic projects, work experience, freelance projects, resume and contact information.

## Stack

- **Next.js** (App Router) with React 19
- **Keystatic** for editing content through an admin page
- CSS Modules and styled-components, all hand-written

## Running it

```shell
npm install
npm run dev
```

The site runs at http://localhost:3000 and the admin at http://localhost:3000/keystatic.

## Editing content

Projects, academic projects, internships, publications and site info (intro, skills, links, resume) live in `content/` as YAML files, with their images in `public/images/`. Edit them either:

- in the admin at `/keystatic`, which writes the files for you, or
- directly in your editor.

To add a new field (say, a tech stack for projects), add it to `keystatic.config.js` and the admin form picks it up.

In development the admin saves to your local files. On the deployed site it commits to GitHub instead: set `NEXT_PUBLIC_KEYSTATIC_STORAGE=github` and follow Keystatic's GitHub setup (`/keystatic` walks you through creating the GitHub app).

Academic projects also have a **Write-up** (the page behind "Learn More"). Besides normal text it has a few building blocks in the editor's **+** menu: Figure (image with caption), Video, Side by side (columns), and Link buttons.

## Other bits

- `/space` is the three.js scene (React Three Fiber), in `src/components/Space`.
- Set `NEXT_PUBLIC_SITE_URL` to the final domain so the sitemap and link previews use it. On Vercel the production URL is used until then.
