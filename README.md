# Industrial Spring B2B Website

Next.js + Tailwind CSS B2B website for an automotive and industrial spring manufacturer.

## Pages

- `/` Home
- `/about` About Us
- `/products` Product Center
- `/factory` Factory Display
- `/news` News
- `/contact` Contact Us
- `/admin` Admin Panel

## Features

- Industrial high-end B2B visual style
- Video banner area for factory footage
- Dynamic sales and export statistics
- Global market map for Mexico, US and Europe buyers
- ISO/IATF quality system presentation
- Google Analytics placeholder
- Facebook Pixel placeholder
- Dark blue, black and metallic gray palette
- Large homepage banner
- Factory video placeholder area
- Product category cards
- Enterprise advantages
- Cooperation brand section
- Floating WhatsApp button
- English copywriting
- Page-level SEO metadata
- Mobile responsive layout
- Sample product data in `data/products.ts`
- Local industrial placeholder images in `public/images`
- SEO schema structured data
- Dynamic `sitemap.xml`
- Dynamic `robots.txt`
- SEO-friendly product detail pages under `/products/[slug]`
- Product keyword mapping in `data/products.ts`
- Image cache and compression settings in `next.config.mjs`

## Contact Email

`fatmaachab862@gmail.com`

## Admin Panel

Open:

```bash
http://localhost:3000/admin
```

Default admin password:

```bash
admin123
```

For production, set a stronger password in `.env.local`:

```bash
ADMIN_PASSWORD=your-strong-password
```

Admin features:

- Product management
- News management
- Image upload to `public/uploads`
- Contact email, WhatsApp and company information editing

Admin content is saved to:

```bash
data/cms.json
```

If `data/cms.json` does not exist, the site uses the default product and news data.

## Run Locally

Install dependencies first:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## RFQ Email Setup

The contact page submits RFQ data to `/api/rfq` and sends the inquiry by SMTP, including PDF/DWG drawing attachments.

Create `.env.local` from `.env.example`:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-smtp-account@example.com
SMTP_PASS=your-smtp-password
SMTP_FROM=Industrial Spring RFQ <your-smtp-account@example.com>
RFQ_TO=fatmaachab862@gmail.com
```

Supported drawing uploads:

- PDF
- DWG

Each file is limited to 12MB.

## SEO

Next.js automatically generates:

- `https://qifengsping.com/sitemap.xml`
- `https://qifengsping.com/robots.txt`

Structured data includes:

- Organization schema
- WebSite schema
- Breadcrumb schema
- Product schema for each product detail page

Core SEO settings are in:

- `lib/seo.ts`
- `data/products.ts`
- `app/sitemap.ts`
- `app/robots.ts`

## Vercel Deployment

See:

```bash
VERCEL_DEPLOYMENT.md
```

Vercel config:

```bash
vercel.json
```

## Analytics

Optional tracking placeholders are already wired in `components/AnalyticsTags.tsx`.

Set these public environment variables when ready:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=000000000000000
```

## Video Banner

Homepage video banner path:

```bash
public/videos/factory-banner.mp4
```

If the video file is not present, the hero poster image still displays.
