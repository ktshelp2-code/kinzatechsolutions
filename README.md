# KinzaTechSolutions MERN Website Blueprint

Professional, SEO-ready, responsive company website inspired by enterprise agency layouts and structured for Vercel deployment.

## 📁 Project Structure

```text
kinzatechsolutions/
├── api/
│   └── index.js
├── client/
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── og-image.png
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Seo.jsx
│   │   │   └── ServicesGrid.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── data/
│   │   │   └── services.js
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Team.jsx
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── utils/
│   │   │   └── seo.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── contactController.js
│   │   ├── portfolioController.js
│   │   └── serviceController.js
│   ├── data/
│   │   ├── portfolioSeed.js
│   │   └── servicesSeed.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Contact.js
│   │   ├── Portfolio.js
│   │   └── Service.js
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   ├── portfolioRoutes.js
│   │   └── serviceRoutes.js
│   ├── utils/
│   │   ├── mailer.js
│   │   └── validators.js
│   ├── .env.example
│   ├── index.js
│   └── package.json
├── .github/
│   └── workflows/
│       └── ci.yml
├── vercel.json
└── README.md
```

## 📌 Frontend Code (React)

### Stack and implementation
- React (functional components) + React Router v6
- Tailwind CSS design system
- Framer Motion animations (hero + reveal)
- Dark/light mode toggle via context
- Smooth scroll and scroll-to-top behavior
- SEO per page using `react-helmet-async`

## 📌 Backend Code (Node/Express)

### APIs
- `POST /api/contact` → validates (Joi), stores in MongoDB, triggers email
- `GET /api/services` → dynamic MongoDB data with seed fallback
- `GET /api/portfolio` → dynamic MongoDB data with seed fallback

### Security and reliability
- `helmet`
- `cors`
- `express-rate-limit`
- centralized error middleware

## 📌 Database Setup (MongoDB Atlas)

1. Create a free MongoDB Atlas cluster.
2. Add DB user credentials.
3. Add network access (`0.0.0.0/0` for development or restricted IP in production).
4. Copy connection URI to `MONGODB_URI`.

## 📌 Deployment Instructions (Vercel Free Tier)

1. Push repository to GitHub.
2. Import project in Vercel.
3. In Vercel project settings add Environment Variables:
   - `MONGODB_URI`
   - `FRONTEND_URL`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_TO`
   - `SENDGRID_API_KEY` (optional alternative to SMTP)
4. Build command: `cd client && npm install && npm run build`
5. Output directory: `client/dist`
6. Vercel serverless API is routed through `/api/index.js` and `vercel.json` rewrites.
7. Redeploy after adding env vars.
8. Optional: Add custom domain in **Project → Settings → Domains** and update canonical URLs in `client/src/utils/seo.js`.

## 📌 Environment Variables

```bash
MONGODB_URI=
SENDGRID_API_KEY=
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
FRONTEND_URL=
VERCEL_PROJECT_ID=
```

## 📌 Commands

```bash
# frontend
cd client
npm install
npm run dev

# backend (new terminal)
cd server
npm install
npm run dev
```

## 📌 Bonus Implemented

- Google Analytics snippet in `client/index.html`
- Favicon setup in `client/public/favicon.svg`
- `sitemap.xml` and `robots.txt`
- Open Graph tags from reusable SEO component

## 📌 Best Practices

- Replace placeholder `og-image.png` with branded image (1200x630)
- Add CSRF + captcha for production contact endpoint
- Add unit/integration tests before launch
- Use dedicated transactional email provider (SendGrid/Postmark)
- Add monitoring (Sentry + uptime probes)
