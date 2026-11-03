# Chisom — Portfolio Website

A modern, professional portfolio built with React, Vite, and Tailwind CSS.

## Run it locally

```sh
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```sh
npm run build
npm run preview
```

## Make it yours

Everything editable lives in `src/data.js`:

- **Profile** — name, role, location, email, GitHub, LinkedIn, Twitter, CV link
- **Skills** — grouped lists with proficiency levels
- **Projects** — cards with images, descriptions, tags, and links
- **Experience** — timeline entries

Things still marked as placeholders (search for `TODO` in the code):

1. `src/data.js` — the "Your Next Project" card and the "Your Next Role"
   experience entry; swap in your own projects and roles when ready
2. `src/components/Contact.jsx` — the form shows a success message but doesn't
   send anywhere yet; wire it to Formspree, EmailJS, or your own API endpoint
