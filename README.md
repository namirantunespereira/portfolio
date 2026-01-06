<<<<<<< HEAD
# portfolio
This is my portfolio
=======
# Portfolio — Namir Antunes

This repository contains a static portfolio with EN/PT i18n, animated design, and several mini-projects (React + Vanilla).

## Contact form (Email without backend)
We use **Formspree** to send messages to your email.

**Steps:**
1. Create an account at https://formspree.io and a new form.
2. Copy your **Form ID** (e.g., `xknldwgr`).
3. Open `script.js` and replace:
   ```js
   const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_ID';
   ```
4. In Formspree dashboard, set the recipient to `namirantunespereira@gmail.com`.
5. Publish and test the contact form.

> Alternative: **EmailJS** (https://www.emailjs.com) — add SDK and configure service/template.

## React projects build
Two React projects use **Vite**:
- `projects/react-weather-widget`
- `projects/react-animated-cards`

Build locally and copy `dist/` inside each folder so the portfolio can link to them.
```bash
cd projects/react-weather-widget
npm install
cp .env.example .env   # set VITE_OPENWEATHER_API_KEY
npm run build
# Copy the dist/ folder here: projects/react-weather-widget/dist/

cd ../react-animated-cards
npm install
npm run build
# Copy the dist/ folder here: projects/react-animated-cards/dist/
```

## Publish to GitHub Pages
1. Initialize the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/namirantunespereira/portfolio.git
   git push -u origin main
   ```
2. Enable Pages:
   - Go to **Settings → Pages**
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` and **Folder**: `/ (root)`
   - Wait for the build to finish. Your site will be available at:
     `https://namirantunespereira.github.io/portfolio`

## Update social links
Check `index.html` socials and update if needed.

## License
Personal portfolio. Feel free to adapt.
>>>>>>> 6a0886c (Initial portfolio)
