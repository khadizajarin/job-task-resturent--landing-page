# Resturent Landing Page

## Project Overview

This repository contains the source code for a restaurant website, a modern and simple site designed to showcase an Italian day bar in Hamburg-Winterhude.  
Inspired by the clean and elegant design of **Die Tagesbar**, with additional references from two other websites, this site is responsive, user-friendly, and visually appealing—reflecting the Mediterranean charm and Italian culinary heritage of Big Spuntino.

---

## Features

- **Homepage**: Large hero image with logo, tagline, and a reservation pop-up (to be integrated later).
- **Navigation Menu**: Links to Home, Il Menu, Events, La Storia, Impressions, Contatto, and Jobs.
- **Il Menu**: Description of the menu with four cards (Brunch, Lunch, Dinner, Bar) and PDF menu buttons (currently dummy links).
- **Events**: Highlights special events with a "Contatto" button that opens the user’s email client.
- **La Storia**: Shares the history of Big Spuntino and its founder, Dario Pittarello.
- **Impressions**: Gallery section with placeholder images.
- **Contatto**: Contact details and opening hours.
- **Jobs**: Invitation to join the team with a contact prompt.
- **Multilingual Support**: Content available in both English and German.

---

## Technologies Used

## Technologies Used

- **Next.js (v15+)** – React-based framework for SSR/SSG and routing.
- **React 19** – For building UI components and dynamic content.
- **TypeScript** – Strong typing and modern JS tooling.
- **Tailwind CSS v4** – Utility-first styling with responsive design.
- **AOS** – Animate On Scroll library for scroll-based animations.
- **Lucide / Iconify / react-icons** – Icon libraries for consistent visuals.
- **Framer Motion** – Advanced animation and gesture support (via `motion`).
- **Formik** – Form state management and validation.
- **next-intl** – Internationalization and locale-based routing/content.
- **PostCSS** – CSS transformations (used under the hood by Tailwind).
- **ESLint** – Code linting and formatting.
- **Git** – Version control.
- **Deployment** – Hosted via Vercel (ideal for Next.js apps).

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/khadizajarin/job-task-bigspontino
cd big-spuntino-website
```

### 2. Install Dependencies (If Using Node.js/React)

```bash
npm install
```

### 3. Run Locally

#### For static HTML/CSS/JS:
Open `index.html` in your browser.

#### For React:
```bash
npm start
```

### 4. Build for Production (If Using React)

```bash
npm run build
```

---

## Deploy

Deploy the site using:

- [Vercel](https://job-task-bigspontino.vercel.app/de)


> Update the README with the **live deployed link** after deployment.

---

## Project Structure

```
big-spuntino-website/
├── .next/                      # Build output (auto-generated)
├── messages/                   # Translation JSON files
│   ├── de.json                 # German content
│   └── en.json                 # English content
├── node_modules/              # Project dependencies
├── public/                    # Static assets (e.g., logo, images)
├── src/
│   ├── app/
│   │   ├── [locale]/          # Locale-based routing (Next.js App Router)
│   │   ├── banner.tsx
│   │   ├── contact.tsx
│   │   ├── events.tsx
│   │   ├── gallery.tsx
│   │   ├── job.tsx
│   │   ├── layout.tsx         # Root layout component
│   │   ├── menu.tsx
│   │   ├── page.tsx           # Homepage entry
│   │   ├── reservation.tsx
│   │   ├── story.tsx
│   │   └── globals.css        # Tailwind and base styles
│   ├── commonComponents/      # Shared UI elements (if applicable)
│   ├── components/            # Reusable React components
│   ├── i18n/                  # i18n setup and helpers
│   │   ├── navigation.ts
│   │   ├── request.ts
│   │   └── routing.ts
│   ├── middleware.ts          # Locale redirect middleware
├── .gitignore
├── README.md
├── next.config.ts             # Next.js config with i18n setup
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project metadata and scripts
├── package-lock.json
├── postcss.config.mjs         # Tailwind/PostCSS configuration
```


---

## Submission Details

- **GitHub Repository**: Push all code to a **public repository**.
- **Live Deployed Link**: Host the site and provide a working URL.
- **Submission Email**: Send both GitHub and live links to:

```
khadiza131310@gmail.com
```

🕐 Submitted by **July 22, 2025**.

---

## Notes

- Reservation modal is a placeholder (to be implemented).
- PDF menu links are dummy `#` links for now.
- Placeholder images are used in gallery and cards.
- Design follows a minimal, elegant aesthetic inspired by **Die Tagesbar**.

---

## Contact

For any questions or issues, please reach out to:

📧 **khadiza131310@gmail.com**
