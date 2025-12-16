# Portfolio — Quick Start

This repository contains a minimal, responsive portfolio scaffold: `front.html`, `styles.css`, and `script.js`.

How to run locally

Open `front.html` directly in your browser, or serve it from a local server for correct routing and performance.

Using Python (PowerShell):

```powershell
# serve current folder on port 8000
python -m http.server 8000
# then open http://localhost:8000/front.html
```

Customizing

- Edit `front.html` to change text, projects, and email address. The contact email is currently set to `spdeepakkumar496@gamil.com`.
- Replace placeholder images with your screenshots (put them in an `assets/` folder and update the `src`).
- Update the color scheme in `styles.css` by changing CSS variables at the top.

- The project includes a placeholder resume at `resume.pdf`. Replace that file with your actual PDF to enable the "Download Resume" button on the site.

Enabling contact form submissions

The included form handler in `script.js` is a client-side simulation. To accept real messages consider:

- Using Formspree or a similar service: replace the `form` submit handler to POST to your Formspree endpoint.
- Add a server endpoint to accept and forward messages to your email (Node/Python/Serverless).

Deploying

- GitHub Pages: push to a repository and enable Pages for the `main` branch (or `gh-pages`). Then open `https://<your-username>.github.io/<repo>/front.html`.
- Netlify/Vercel: both support static site deploys; drag-and-drop the folder or connect your repo.

Next steps I can do for you

- Add a resume/download button and PDF
- Replace placeholders with your real projects and screenshots
- Add animations, SEO meta tags, and social links

Tell me which parts you want customized next.
