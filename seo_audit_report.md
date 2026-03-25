# BBBrotherBuilding — Comprehensive SEO Audit Report
### Benchmarked Against Top 1–10% London SEO Agency Standards

> **Audit Date:** 23 March 2026
> **Domain:** bbbrotherbuilding.co.uk
> **Framework:** Next.js 14 (App Router, Static Export)
> **Total Pages:** 24 (planned), 24 (built)

---

## Executive Summary

The site has a **solid foundation** — correct URL architecture, schema markup on every page, and well-structured content. However, when measured against what a top London SEO agency (think Screaming Frog's own site, or agencies like Builtvisible, Distilled/Brainlabs, Impression) would deliver, there are **significant gaps** across technical SEO, content depth, schema quality, and off-page readiness.

### Overall Score: **6.5 / 10**

| Category | Score | Status |
|----------|-------|--------|
| Technical SEO | 7/10 | 🟡 Good foundation, key issues |
| On-Page SEO | 6/10 | 🟡 Metadata deviates from spec |
| Schema / Structured Data | 7/10 | 🟢 Solid, needs refinement |
| Content Depth & Quality | 5/10 | 🔴 Below agency standard |
| Core Web Vitals / Performance | 6/10 | 🟡 Font loading issue |
| Internal Linking | 7/10 | 🟢 Good hub-and-spoke |
| Image SEO | 7/10 | 🟢 Alt tags present, format concern |
| Local SEO Readiness | 5/10 | 🔴 GBP missing, no citations |
| Off-Page / Authority | 3/10 | 🔴 No backlinks, no socials |
| Conversion Rate Optimisation | 7/10 | 🟢 Strong CTAs |

---

## 🔴 CRITICAL ISSUES (Fix Immediately)

### 1. Fonts Loaded via External Google Fonts Link — Not `next/font`

**File:** [layout.tsx](file:///Users/aldid/bbbrotherbuilding/src/app/layout.tsx#L29-L35)

**Issue:** Fonts are loaded via an external `<link>` tag to `fonts.googleapis.com` instead of using Next.js's built-in `next/font` system. This causes:

- **Render-blocking CSS** — Google Fonts stylesheets block first paint
- **CLS (Cumulative Layout Shift)** — fonts flash/swap on load
- **Privacy leak** — sends user data to Google's servers (GDPR risk for UK business)
- **Extra DNS + connection overhead** — 2 preconnect calls + stylesheet download

**Top-agency standard:** Self-host all fonts via `next/font/google` or `next/font/local`. This eliminates the external request entirely, applies `font-display: swap` automatically, and prevents layout shift.

```diff
- <link rel="preconnect" href="https://fonts.googleapis.com" />
- <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
- <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
+ // Import via next/font/google in layout.tsx
+ import { Epilogue, Manrope, Noto_Serif } from 'next/font/google'
```

> [!CAUTION]
> This is the single biggest Core Web Vitals issue — it directly impacts **LCP** and **CLS**, both of which Google uses as ranking signals.

---

### 2. No Open Graph / Twitter Card Meta Tags

**Files:** Every page's `metadata` export

**Issue:** Zero Open Graph or Twitter Card tags on any page. When anyone shares a link to the site on WhatsApp, Facebook, LinkedIn, or Twitter — it will show a blank preview with no image, no title card, nothing.

**Top-agency standard:** Every page should have:
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- A dedicated OG image (1200×630px) per page, or at minimum a site-wide fallback

**Impact:** Social sharing is a **huge lead-generation channel** for builders. WhatsApp especially — when a homeowner shares your link with their partner/family, a rich preview with a project photo closes the deal.

---

### 3. Google Business Profile Does Not Exist

**Status:** The spec explicitly states "GBP: Does not exist — CREATE NEW"

**Impact:** For a local builder, GBP is arguably **more important than the website** for generating leads. Without it:
- You don't appear in Google Maps results
- You don't appear in the Local Pack (3-pack)
- You can't collect Google reviews
- Competitors in Hertfordshire are taking all the local visibility

**Top-agency would:** Have GBP live on day one, verified, with full services list, photos, Q&A, and weekly posts.

---

### 4. About Page Title Tag Deviates From Spec

**Current:** `About Us | BBBrotherBuilding`
**Spec says:** `About BBBrotherBuilding | 12 Years Experience | Hertfordshire`

The spec title is **far better** — it includes the keyword "12 Years Experience" and the location "Hertfordshire". The current title wastes the most important SEO real estate on the generic word "Us".

---

### 5. Contact Page Title Tag Deviates From Spec

**Current:** `Contact Us | Free Quote | BBBrotherBuilding`
**Spec says:** `Contact BBBrotherBuilding | Free Quote | Hertfordshire`

Missing the location keyword "Hertfordshire" from the title.

---

### 6. About Page Missing Person Schema for Besart

**Issue:** The spec requires a `Person` schema for Besart Dishani (the director and face of the business) linking to the Checkatrade profile. This is completely absent.

**Top-agency standard:** Use `Person` schema with `jobTitle`, `worksFor`, `sameAs` (linking to Checkatrade profile), and connect it to the main `Organization` entity via `@id` references.

---

## 🟡 IMPORTANT ISSUES (Fix Soon)

### 7. Images Are All JPEG — No WebP/AVIF

**Issue:** All 93 images in `/public/images/` are `.jpeg` format. The spec says to use "next/image with WebP/AVIF auto-conversion." However, because the site uses `output: 'export'` with `images.unoptimized: true`, Next.js image optimisation is **completely disabled**.

This means:
- No automatic WebP/AVIF conversion
- No responsive `srcset` generation
- No lazy-loading optimisation (manual `loading="lazy"` is used, which is good)
- Images are served at their full size regardless of viewport

**Top-agency standard:** Use a Vercel deployment without `output: 'export'` (to get native image optimisation), OR manually convert all images to WebP and create multiple sizes.

> [!IMPORTANT]
> Some of these JPEG files are 400–600KB. A top agency would have every image under 100KB in WebP format. This alone could cut total page weight by 60–70%.

---

### 8. Service Pages Lack 800–1000+ Word Content

**Issue:** The spec requires 1000+ words for Extensions and Loft Conversions, and 800+ words for all other services. The actual service pages use the `ServicePage` component template which renders content from props — but the content is **feature cards and short descriptions**, not long-form SEO copy.

For example, the Extensions page has:
- Hero description: ~60 words
- 4 feature cards: ~50 words each
- 3 FAQ answers: ~60 words each
- **Total readable content: ~500 words** — half the 1000-word target

**Top-agency standard:** Each money page should have 1200–2000 words of genuine, helpful content including:
- Long-form body copy between sections
- Local references and case studies
- Internal links woven naturally into paragraphs
- LSI keywords distributed throughout (the spec lists specific LSI terms for each service — most are absent)

---

### 9. Location Pages Use Generic/Template Content

**Issue:** The `LocationPage` component generates FAQs with simple string interpolation (`${location}` inserted into identical templates). The answers for "How long does a project take in St Albans?" are **word-for-word identical** to "How long does a project take in Watford?" except for the location name.

**Top-agency standard:** Google's **Helpful Content Update** specifically targets this kind of templated content. Each location page should have:
- Unique paragraphs mentioning local landmarks, housing stock, planning authority (e.g., "Hertsmere Borough Council" for Borehamwood vs "Watford Borough Council")
- Location-specific average costs (the data exists in `locations.ts` but isn't used in the FAQs)
- Real project references in that area
- Unique FAQ answers

> [!WARNING]
> Google can penalise sites with "programmatically generated" pages that offer no unique value per page. The current location pages are borderline.

---

### 10. No `robots.ts` — Using Static `robots.txt` Instead

**Issue:** The project has a static `public/robots.txt` file. This works, but Next.js best practice is to use `src/app/robots.ts` which:
- Keeps configuration in the app directory alongside `sitemap.ts`
- Can dynamically generate entries
- Avoids potential conflicts with the App Router's metadata system

**Note:** The current static robots.txt is correct and functional. This is a best-practice alignment issue.

---

### 11. Sitemap Uses `new Date()` — Not Real Last-Modified Dates

**File:** [sitemap.ts](file:///Users/aldid/bbbrotherbuilding/src/app/sitemap.ts#L29-L47)

**Issue:** Every page in the sitemap has `lastModified: new Date()`, meaning every time the site builds, all 24 pages claim to have been freshly modified. This sends a misleading signal to Google and can cause it to **discount** the lastModified field entirely.

**Top-agency standard:** Use the actual last content edit date for each page, or at minimum use a fixed date that only updates when content genuinely changes.

---

### 12. No BreadcrumbList Schema on the Homepage

**Issue:** The homepage has no `BreadcrumbList` schema. Service pages and location pages have breadcrumbs via the `Breadcrumbs` component, but there's no schema attached.

**Top-agency standard:** Breadcrumb schema on every page (including homepage as base). This generates rich breadcrumb trails in Google SERPs.

---

### 13. LocalBusiness Schema Missing Key Properties

**File:** [LocalBusinessSchema.tsx](file:///Users/aldid/bbbrotherbuilding/src/components/LocalBusinessSchema.tsx)

**Missing properties:**
- `openingHoursSpecification` — hours of operation
- `foundingDate` — when the business was established
- `image` — business logo/photo
- `description` — what the business does
- `hasOfferCatalog` — services offered (present in OrgSchema but not LocalBusiness)

The current LocalBusiness schema has only: name, telephone, email, url, address, priceRange, areaServed. This is **minimal**.

---

### 14. Service Schema Missing Key Properties

**File:** [ServiceSchema.tsx](file:///Users/aldid/bbbrotherbuilding/src/components/ServiceSchema.tsx)

**Missing:**
- `@id` reference — should link back to the main Organization entity
- `offers` — with price range for the service
- `areaServed` — currently uses a generic "Place" instead of multiple specific `GeoCircle` areas
- `image` — service-specific image

---

### 15. Organization Schema — `sameAs` Is Empty Array

**File:** [OrganizationSchema.tsx](file:///Users/aldid/bbbrotherbuilding/src/components/OrganizationSchema.tsx#L28)

**Issue:** `sameAs: []` — this should at minimum include the Checkatrade profile URL: `https://www.checkatrade.com/trades/bbbrotherbuildingltd`

**Additionally:** Once GBP, Yell, FMB, and other directory listings are created, these URLs should all be added to `sameAs`.

---

### 16. No `manifest.json` / Web App Manifest

**Issue:** No PWA manifest file exists. Icons (`icon-192.png`, `icon-512.png`) are referenced but are only 73 bytes each — they appear to be **placeholder files**, not actual icons.

**Top-agency standard:** Proper favicon set (ICO, SVG, Apple Touch Icon at real 180×180, maskable icon) plus a web app manifest for PWA capabilities and browser theming.

---

## 🟢 WHAT'S WORKING WELL

### ✅ URL Architecture
Hub-and-spoke structure with `/services/` and `/locations/` hubs is textbook-perfect for a local builder.

### ✅ Unique Canonical Tags Per Page
Every page has its own canonical — no cross-page canonical issues.

### ✅ Consistent NAP (Name, Address, Phone)
Phone number `07925921222` is consistent across all pages and schema. Business name is consistent. Address is correctly hidden (service-area business).

### ✅ FAQPage Schema on Every Content Page
Homepage, all service pages, and all location pages have FAQPage schema with visible matching content — Google validates this.

### ✅ Security Headers
HSTS, X-Content-Type-Options, X-Frame-Options, XSS Protection, Referrer Policy, Permissions Policy — all configured correctly in `vercel.json`.

### ✅ All 24 Pages Built
Every page in the spec exists with its own route, metadata, and content.

### ✅ Sitemap Includes All 24 Pages
All pages are present with correct URLs on the right domain.

### ✅ robots.txt Points to Correct Sitemap
Correct domain, correct sitemap URL path.

### ✅ Strong CTA Structure
Every page has phone, WhatsApp, and quote form CTAs. Mobile sticky footer with WhatsApp + Call. Multi-step quote form on contact page.

### ✅ Trust Signals Prominent
Companies House number, £10M insurance, 2-year guarantee, and Checkatrade score displayed prominently throughout.

---

## The Full Checklist — Top 1–10% London Agency Standard

This is what a top agency charges £3,000–5,000/month to maintain. Here's how your site stacks up against every item:

### Technical SEO

| Check | Status | Notes |
|-------|--------|-------|
| Self-hosted fonts via `next/font` | ❌ | External Google Fonts link |
| Image optimisation (WebP/AVIF, responsive) | ❌ | All JPEGs, unoptimised, `output: 'export'` disables Next.js optimisation |
| Core Web Vitals passing | ⚠️ | Likely failing LCP due to font blocking + large images |
| Static `robots.txt` correct | ✅ | Correct |
| XML sitemap with all pages | ✅ | All 24 pages included |
| Sitemap last-modified dates accurate | ❌ | Uses `new Date()` on every build |
| HTTPS everywhere | ✅ | Via Vercel |
| Security headers configured | ✅ | Full set in `vercel.json` |
| 404 page customised | ❌ | No custom 404 page detected |
| Redirect strategy (www → non-www) | ⚠️ | Handled by Vercel, but not explicitly configured |
| Trailing slash consistency | ⚠️ | Not configured in `next.config.mjs` |
| Cookie consent GDPR-compliant | ✅ | `CookieConsent` component exists |
| `lang="en-GB"` attribute | ❌ | Uses `lang="en"` — should be `en-GB` for UK business |
| Web app manifest / favicons | ❌ | Placeholder icon files (73 bytes) |

### On-Page SEO

| Check | Status | Notes |
|-------|--------|-------|
| Unique title tags per page | ⚠️ | Present but several deviate from spec |
| Title tags under 60 characters | ✅ | All within limits |
| Unique meta descriptions per page | ✅ | All unique |
| Meta descriptions under 155 chars | ⚠️ | Some slightly over |
| Canonical tags per page | ✅ | All correct |
| Single H1 per page | ✅ | Verified |
| Heading hierarchy (H1 → H2 → H3) | ✅ | Clean hierarchy |
| Open Graph tags | ❌ | Completely missing |
| Twitter Card tags | ❌ | Completely missing |
| Semantic HTML5 elements | ✅ | `<main>`, `<section>`, `<nav>`, `<footer>` |
| Internal links in body copy | ⚠️ | Links exist in nav/cards but not woven into paragraphs |
| Descriptive anchor text | ✅ | Location and service cards have clear text |

### Schema / Structured Data

| Check | Status | Notes |
|-------|--------|-------|
| Organization/GeneralContractor schema | ✅ | On every page via layout |
| FAQPage schema | ✅ | Homepage + all service/location pages |
| Service schema per service page | ✅ | Via `ServiceSchema` component |
| LocalBusiness schema per location page | ✅ | Via `LocalBusinessSchema` component |
| BreadcrumbList schema | ❌ | Component renders visually but no schema output |
| Person schema for Besart | ❌ | Missing |
| No AggregateRating (correct) | ✅ | Correctly omitted — no Google reviews yet |
| `sameAs` includes Checkatrade | ❌ | Empty array |
| Schema validates on Rich Results Test | ⚠️ | Not tested — likely passes but with warnings |

### Content Quality

| Check | Status | Notes |
|-------|--------|-------|
| Extensions page 1000+ words | ❌ | ~500 words |
| Loft Conversions page 1000+ words | ❌ | Likely similar |
| Other service pages 800+ words | ❌ | Estimated 400–500 words each |
| LSI keywords integrated naturally | ❌ | Some in hero descriptions, most missing from body |
| Location pages have unique content | ❌ | Template-generated identical content |
| Location-specific costs used | ❌ | Data exists in `locations.ts` but not rendered |
| Local landmarks/housing types mentioned | ⚠️ | In location page data but lightly used |
| Blog / content marketing | ❌ | No blog exists |
| Case studies / project write-ups | ❌ | Gallery exists but no written case studies |

### Local SEO

| Check | Status | Notes |
|-------|--------|-------|
| Google Business Profile live | ❌ | Does not exist |
| GBP verified and optimised | ❌ | — |
| Google reviews being collected | ❌ | 0 reviews |
| NAP consistency (site + directories) | ⚠️ | Consistent on-site, no external citations |
| Checkatrade profile linked | ✅ | Link on homepage |
| Directory citations (Yell, TrustATrader, etc.) | ❌ | None exist |
| LocalBusiness schema per area | ✅ | On location pages |
| Service-area schema coverage | ✅ | GeoCircle per location |

### Off-Page / Authority

| Check | Status | Notes |
|-------|--------|-------|
| Backlink profile | ❌ | New domain, no backlinks |
| Social media profiles | ❌ | No social profiles exist |
| `sameAs` social links | ❌ | Empty array |
| Directory listings | ❌ | None created yet |
| Guest posts / PR | ❌ | — |
| Link-worthy content (guides, tools) | ❌ | No linkable assets |

---

## Priority Action Plan

### 🔥 Tier 1 — Do This Week (Biggest Impact)

1. **Create Google Business Profile** — this will generate more leads than any code change
2. **Switch fonts to `next/font/google`** — fixes Core Web Vitals
3. **Add Open Graph + Twitter Card tags** — makes WhatsApp/social shares show rich previews
4. **Fix title tags** to match the spec (About page, Contact page)
5. **Add Checkatrade URL to `sameAs`** in Organization schema

### ⚡ Tier 2 — Do This Month

6. **Expand service page content** to 800–1200 words with LSI keywords from the spec
7. **Make location page content unique** — use the `locations.ts` data (housing types, landmarks, avgExtensionCost, localChallenge) in the rendered page
8. **Convert images to WebP** and reduce file sizes (target <100KB each)
9. **Add BreadcrumbList schema** to the Breadcrumbs component
10. **Add Person schema for Besart** on the About page
11. **Fix `lang="en"` to `lang="en-GB"`**
12. **Create proper favicon/icons** (current ones are 73-byte placeholders)
13. **Add a custom 404 page**

### 📈 Tier 3 — Ongoing (Monthly)

14. **Build directory citations** — Yell, Thomson Local, Scoot, Cylex, FMB, TrustATrader
15. **Start collecting Google reviews** — create a review link, ask every client
16. **Weekly GBP posts** with project photos
17. **Consider a blog** — "How much does an extension cost in Hertfordshire?" type articles
18. **Create case study pages** — detailed project write-ups with before/after photos
19. **Build backlinks** — local press, trade associations, supplier partnerships
20. **Submit to Google Search Console** and monitor indexing

---

## What a Top 1–10% London Agency Would Deliver That's Currently Missing

| What They'd Do | Your Site |
|----------------|-----------|
| Custom OG images per page (1200×630) with branding | ❌ None |
| PageSpeed Insights score 90+ on mobile | ❌ Likely 50–70 due to fonts/images |
| Blog with 2–4 keyword-targeted articles/month | ❌ No blog |
| Monthly backlink outreach campaign | ❌ No backlinks |
| Quarterly content audits with Search Console data | ❌ No console access |
| Schema validation on every deploy | ❌ Not automated |
| Conversion tracking (GA4 events on CTAs, form submissions) | ⚠️ Analytics component exists, unclear what's tracked |
| Heatmap/session recording (Hotjar/Clarity) | ❌ Not installed |
| A/B testing on CTAs and hero copy | ❌ Not set up |
| Monthly ranking reports for target keywords | ❌ No rank tracking |
| GBP management (posts, Q&A, review responses) | ❌ GBP doesn't exist |
| Local link building (sponsorships, local events) | ❌ — |

---

> [!NOTE]
> Despite the issues listed above, the **architectural foundation is strong**. The URL structure, hub-and-spoke internal linking, schema implementation, and trust signal placement are better than 80% of builder websites. The issues are all fixable — it's about filling in the gaps, not rebuilding from scratch.
