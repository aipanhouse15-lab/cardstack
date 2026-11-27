# Assure Fintech — India's Smartest Credit Card Tool
https://www.assurefintech.com/

## What is this?
A multi-page Next.js website that helps Indians maximize their credit card rewards. 4 tools, 25 cards, real savings math, zero tracking.

## Project Structure
```
cardstack/
├── app/                    # Pages (each folder = a URL)
│   ├── page.jsx            # Homepage (assurefintech.com/)
│   ├── layout.jsx          # Shared layout (nav + footer)
│   ├── globals.css          # Global styles
│   ├── smart-swipe/        # /smart-swipe
│   ├── gap-finder/         # /gap-finder
│   ├── swipe-check/        # /swipe-check
│   ├── compare/            # /compare
│   ├── blog/               # /blog
│   ├── cards/[id]/         # /cards/hdfc-regalia (25 pages)
│   └── api/cards/          # API routes
├── components/             # Reusable UI components
├── data/                   # Card database, merchants, content
│   ├── cards.js            # ← EDIT THIS to update card rewards
│   ├── merchants.js        # ← EDIT THIS to update Swipe Check
│   └── content.js          # ← EDIT THIS to update blog/tips
├── public/                 # Static files (favicon, images)
└── package.json
```

## How to Update Card Data
1. Go to `data/cards.js` on GitHub
2. Click the pencil icon to edit
3. Change the reward rate, fee, or other info
4. Click "Commit changes"
5. Vercel auto-deploys in ~30 seconds

## Card Review Checklist

- Start from the existing review and compare it with the archived original when available. Preserve its sections, FAQs, links, and figures. Update stale claims using current issuer terms.
- Keep the shared 50-row feature table immediately below the summary. Preview with dark as the default and check the light toggle on desktop and mobile.
- Include card pairings in `pairWith` in `data/featured-card-details.json`. Explain which eligible spending each card covers, link to the partner review, and check fees and waivers for the correct variants.
- Use `capMath` in the same file for cap explainers. Include the reset period, affected spending, what happens after the cap, a worked example, and the issuer source. If the issuer publishes no cap or the rule is unclear, say so and cite the terms.
- Before publishing, verify the feature table, the restored sections, and their navigation links against the preview. Repeat the checks on the live pages after deployment.

## How to Deploy

### Step 1: Create Accounts (one-time)
1. Go to github.com → Sign up (free)
2. Go to vercel.com → Sign up with GitHub (free)

### Step 2: Upload to GitHub
1. Create a new repository called "assurefintech"
2. Upload all project files

### Step 3: Deploy on Vercel
1. Go to vercel.com/new
2. Import your "assurefintech" repository
3. Click "Deploy"
4. Your site is live at assurefintech.com!

### Step 4: Custom Domain (optional)
1. Buy a domain (assurefintech.com, ~₹500/year)
2. In Vercel → Settings → Domains → Add your domain
3. Update DNS at your registrar (Vercel shows you how)

## Tech Stack
- **Next.js 14** — React framework with server-side rendering
- **Tailwind CSS** — Utility-first CSS
- **Vercel** — Hosting (free tier)
- **No database needed** — Card data is in JSON files

## Future Phases
- Phase 2: Sanity CMS for visual content editing
- Phase 3: Supabase for user accounts & community
