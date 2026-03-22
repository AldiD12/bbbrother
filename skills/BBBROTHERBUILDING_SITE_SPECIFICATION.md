# BBBROTHERBUILDING LTD — COMPLETE SITE SPECIFICATION
## Master Build Document for Claude Code

---

## CLIENT DATA (VERIFIED — DO NOT CHANGE)

| Field | Value |
|-------|-------|
| Business Name | BBBrotherBuilding Ltd |
| Owner (NOT day-to-day) | Bledar Dishani |
| Director (Face of business) | Besart Dishani — answers phone, meets clients, manages all projects |
| Primary Phone (WhatsApp) | 07925 921222 |
| Secondary Phones (NOT for website/schema) | 07570 066244, 07475 268206 |
| Professional Email | bledar@bbbrotherbuilding.co.uk (set up forwarding to bbbrotherbuilding@gmail.com) |
| Address (PRIVATE — GBP only) | 31 Arundel Drive, Borehamwood, WD6 2LE |
| Public Location | Based in Borehamwood, Hertfordshire |
| Domain | bbbrotherbuilding.co.uk |
| Company Number (Companies House) | 16950486 |
| Checkatrade Score | 10/10 (4 reviews) |
| Checkatrade URL | https://www.checkatrade.com/trades/bbbrotherbuildingltd |
| Google Reviews | 0 (GBP needs to be created) |
| Experience | 12 years |
| Insurance | £10 million public liability |
| Guarantee | 2 years workmanship |
| GBP | Does not exist — CREATE NEW |

**SCHEMA RULES:**
- AggregateRating: Do NOT include until GBP has at least 1 Google review. Once he gets Google reviews, add ratingValue and reviewCount matching EXACTLY.
- Checkatrade score (10/10, 4 reviews) displayed visually on pages but NEVER in schema
- Only ONE phone number everywhere: 07925 921222 / +447925921222
- Secondary phone numbers appear NOWHERE on the site or in schema

**ADDRESS PRIVACY RULES:**
- NEVER display full street address anywhere on the website
- Website shows: "Based in Borehamwood, Hertfordshire — serving Hertfordshire & North West London"
- Full address exists ONLY in GBP (set as service-area business, address hidden from public)
- Schema uses general Borehamwood/Hertfordshire locality, no street address

---

## TECH STACK

- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS
- Hosting: Vercel (London region - lon1)
- Static Export: `output: 'export'` in next.config.js
- Fonts: next/font (self-hosted)
- Images: next/image with WebP/AVIF auto-conversion

---

## SITE ARCHITECTURE

### URL Structure (Hub & Spoke)

```
bbbrotherbuilding.co.uk/                              ← Homepage
bbbrotherbuilding.co.uk/about                          ← About Bledar & Team
bbbrotherbuilding.co.uk/contact                        ← Contact + Quote Form
bbbrotherbuilding.co.uk/gallery                        ← Project Portfolio
bbbrotherbuilding.co.uk/services                       ← Services Hub
bbbrotherbuilding.co.uk/services/extensions             ← PRIMARY SERVICE
bbbrotherbuilding.co.uk/services/loft-conversions       ← PRIMARY SERVICE
bbbrotherbuilding.co.uk/services/bathroom-renovations   ← PRIMARY SERVICE
bbbrotherbuilding.co.uk/services/kitchen-fitting        ← PRIMARY SERVICE
bbbrotherbuilding.co.uk/services/plastering
bbbrotherbuilding.co.uk/services/painting-decorating
bbbrotherbuilding.co.uk/services/roofing
bbbrotherbuilding.co.uk/services/general-renovations    ← Covers: floor tiling, laminate, doors, windows, silicone render
bbbrotherbuilding.co.uk/locations                      ← Locations Hub
bbbrotherbuilding.co.uk/locations/st-albans            ← PRIMARY AREA
bbbrotherbuilding.co.uk/locations/watford              ← PRIMARY AREA
bbbrotherbuilding.co.uk/locations/edgware              ← PRIMARY AREA
bbbrotherbuilding.co.uk/locations/stanmore             ← PRIMARY AREA
bbbrotherbuilding.co.uk/locations/barnet               ← PRIMARY AREA
bbbrotherbuilding.co.uk/locations/harrow               ← SECONDARY
bbbrotherbuilding.co.uk/locations/wembley              ← SECONDARY
bbbrotherbuilding.co.uk/locations/wood-green           ← SECONDARY
bbbrotherbuilding.co.uk/privacy-policy                 ← GDPR requirement
```

Total: 24 pages

---

## PAGE-BY-PAGE SPECIFICATION

### HOMEPAGE (/)

**Title Tag (max 60 chars):**
`Builders in Hertfordshire | Extensions & Lofts | BBBrother`

**Meta Description (max 155 chars):**
`Extensions, loft conversions & renovations in Hertfordshire. 10/10 on Checkatrade. Ltd company. £10M insured. 2-year guarantee. Free quotes.`

**Canonical:** `https://bbbrotherbuilding.co.uk/`

**H1:** `Trusted Builders in Hertfordshire & North West London`

**Trust Bar (visible above the fold on every page):**
`★★★★★ 10/10 on Checkatrade | Ltd Company #16950486 | £10M Insured | 2-Year Guarantee | 12 Years Experience`

**Hero Section:**
- H1 (above)
- Sub-headline: "Extensions, loft conversions, bathroom renovations, and complete home transformations. One team, start to finish, no subcontractor surprises."
- Primary CTA: "Get a Free Quote" (button → contact page)
- Secondary CTA: "Call 07925 921 222" (tel: link)
- Below buttons: Trust bar

**Page Sections:**
1. Pain & Agitation: "Worried About Hiring the Wrong Builder?"
   - Copy addresses fears: over-budget, delays, disappearing builders, poor communication, subcontractor chaos
   - Position BBBrother as the antidote: Ltd company, £10M insurance, fixed-price quotes, one team throughout
2. Primary Services (4 cards: Extensions, Loft Conversions, Bathrooms, Kitchens)
3. Our Process (4-Step):
   - Step 1: Free Consultation & Site Survey
   - Step 2: Detailed Fixed-Price Quotation
   - Step 3: Project Management from Foundations to Finish
   - Step 4: Final Walkthrough & 2-Year Guarantee
4. Why Choose Us (Ltd company, insurance, guarantee, experience, Checkatrade verified)
5. Recent Projects (gallery preview — 4-6 best photos)
6. Checkatrade Reviews
7. Areas We Cover
8. FAQ section with FAQPage schema
9. Soft CTA: "Ready to start your project?"

---

### ABOUT PAGE (/about)

**Title Tag:** `About BBBrotherBuilding | 12 Years Experience | Hertfordshire`
**Meta Description:** `Meet the BBBrotherBuilding team. 12 years building extensions, lofts, and renovations across Hertfordshire. Ltd company. Fully insured.`
**Canonical:** `https://bbbrotherbuilding.co.uk/about`
**H1:** `About BBBrotherBuilding`

**IMPORTANT — COMPANY STRUCTURE:**
- **Bledar Dishani** = Company Owner/Founder. NOT involved in day-to-day operations. Listed in company info and footer only.
- **Besart Dishani** = Director. He is the face of the business. He answers the phone, meets clients, manages projects, oversees all work. He is the person featured on the About page.

**Content:**
- Lead with Besart as the director and public face: "Led by Besart Dishani, BBBrotherBuilding delivers complete building solutions across Hertfordshire and North West London."
- Besart's experience and hands-on approach — he attends every site survey, manages every project personally
- Company background: founded by Bledar Dishani, Ltd registered, family-run values
- Company values: reliability, communication, quality, cleanliness
- Person Schema for BESART (not Bledar) linking to Checkatrade profile — Besart is the person clients interact with
- Company credentials: Ltd registration #16950486, £10M insurance, 2-year guarantee
- Photo of Besart on site (use the photo the client sent)
- Smaller mention of Bledar as founder in the company history section

---

### CONTACT PAGE (/contact)

**Title Tag:** `Contact BBBrotherBuilding | Free Quote | Hertfordshire`
**Meta Description:** `Get a free building quote. Call 07925 921 222 or fill in our quick form. Extensions, lofts, bathrooms, kitchens across Hertfordshire & North West London.`
**Canonical:** `https://bbbrotherbuilding.co.uk/contact`
**H1:** `Get Your Free Quote`

**Content:**
- Multi-step quote form:
  - Step 1: "What's your project?" (Buttons: Extension / Loft Conversion / Bathroom / Kitchen / Roofing / Plastering / Painting / Other)
  - Step 2: "Your postcode?"
  - Step 3: "Tell us about your project" (Textarea + optional photo upload)
  - Step 4: "Name, phone, email"
- Phone: 07925 921 222 (clickable tel: link)
- WhatsApp button
- Email: bledar@bbbrotherbuilding.co.uk
- Public location: "Based in Borehamwood, Hertfordshire — serving St Albans, Watford, Edgware, Stanmore, Barnet, Harrow, Wembley and surrounding areas"
- DO NOT display full street address
- "We offer free site surveys and fixed-price quotations"

---

### SERVICE PAGES (8 pages)

#### Extensions (/services/extensions) — HIGHEST VALUE SERVICE
**Title Tag:** `House Extensions Hertfordshire | BBBrotherBuilding Ltd`
**H1:** `House Extensions Across Hertfordshire`
**Content:** 1000+ words. This is the money page — extensions are £30,000-60,000+ jobs.
**LSI Keywords MUST include:** planning permission, building regulations, party wall agreement, structural engineer, RSJ steel beam, building control, foundations, footings, underpinning, brickwork, blockwork, cavity wall, damp proof course, DPC, lintel, load-bearing wall, floor joists, first fix, second fix, snagging, handover, building inspector sign-off
**Sections:** Types of extensions (single storey, double storey, side return, wraparound, rear), our process, planning considerations, typical timeline, FAQ with schema

#### Loft Conversions (/services/loft-conversions) — HIGH VALUE
**Title Tag:** `Loft Conversions Hertfordshire | BBBrotherBuilding Ltd`
**H1:** `Loft Conversions in Hertfordshire`
**LSI Keywords:** dormer, hip to gable, mansard, Velux, roof window, staircase, building regs Part L, fire escape, insulation, plasterboard, steel beams, structural calculations, head height, permitted development, party wall
**Content:** 1000+ words. Types of loft conversions, planning vs permitted development, timeline, FAQ with schema.

#### Bathroom Renovations (/services/bathroom-renovations) — HIGH VALUE
**Title Tag:** `Bathroom Renovations Hertfordshire | BBBrotherBuilding Ltd`
**H1:** `Complete Bathroom Renovations`
**LSI Keywords:** wet room, walk-in shower, underfloor heating, tiling, waterproofing, tanking, waste pipe, soil pipe, mixer tap, thermostatic shower, vanity unit, concealed cistern, extractor fan, LED downlights, heated towel rail
**Content:** 800+ words.

#### Kitchen Fitting (/services/kitchen-fitting) — HIGH VALUE
**Title Tag:** `Kitchen Fitting & Tiling Hertfordshire | BBBrotherBuilding Ltd`
**H1:** `Kitchen Fitting & Installation`
**LSI Keywords:** kitchen units, worktop, splashback, tiling, plumbing, electrical, extractor hood, integrated appliances, island unit, breakfast bar, socket placement, lighting plan, vinyl flooring, laminate, porcelain tiles
**Content:** 800+ words.

#### Plastering (/services/plastering)
**Title Tag:** `Plastering Services Hertfordshire | BBBrotherBuilding Ltd`
**H1:** `Professional Plastering Services`
**LSI Keywords:** skim coat, bonding, plasterboard, dot and dab, artex removal, rendering, K-rend, silicone render, monocouche, coving, cornicing, float and set
**Content:** 800+ words.

#### Painting & Decorating (/services/painting-decorating)
**Title Tag:** `Painting & Decorating Hertfordshire | BBBrotherBuilding Ltd`
**H1:** `Painting & Decorating`
**LSI Keywords:** emulsion, gloss, satinwood, primer, undercoat, sanding, cutting in, masonry paint, exterior paint, wallpaper, feature wall, Dulux Trade, Crown Trade
**Content:** 800+ words.

#### Roofing (/services/roofing)
**Title Tag:** `Roofing Services Hertfordshire | BBBrotherBuilding Ltd`
**H1:** `Roofing Repairs & Installation`
**LSI Keywords:** flat roof, pitched roof, EPDM, GRP fibreglass, felt roof, ridge tiles, lead flashing, fascia, soffit, guttering, roof tiles, slates, chimney repair, valley gutter, dormer roof
**Content:** 800+ words.

#### General Renovations (/services/general-renovations)
**Title Tag:** `Home Renovations Hertfordshire | BBBrotherBuilding Ltd`
**H1:** `Complete Home Renovations`
**Content:** 800+ words covering floor tiling, laminate flooring, door & window fitting, silicone render, slabs, garden work. This catches the secondary services.

**Each service page MUST have:**
- Service Schema (serviceType, provider, areaServed)
- FAQPage Schema (3 relevant FAQs specific to that service)
- Internal links to relevant location pages
- CTA with phone number and quote button
- Project photos for that specific service type
- "Companies House registered: #16950486" and "£10M Public Liability Insurance" mentioned

---

### LOCATION PAGES (8 pages — programmatic generation)

#### locations.ts Data Structure:

```typescript
interface Location {
  slug: string;
  name: string;
  postcode: string;
  coordinates: { lat: number; lng: number };
  zone: 'primary' | 'secondary';
  nearby: string[];
  county: string;
  landmarks: string[];
  housingTypes: string[];
  localChallenge: string;
  avgExtensionCost: string;
}
```

#### Location Data:

```typescript
export const locations: Location[] = [
  {
    slug: 'st-albans',
    name: 'St Albans',
    postcode: 'AL1, AL2, AL3, AL4',
    coordinates: { lat: 51.7519, lng: -0.3386 },
    zone: 'primary',
    nearby: ['watford', 'barnet'],
    county: 'Hertfordshire',
    landmarks: ['St Albans Cathedral', 'Verulamium Park', 'St Albans City Centre'],
    housingTypes: ['Victorian terraces', 'Edwardian semis', 'period cottages', 'detached family homes', 'new-build estates'],
    localChallenge: 'Many St Albans properties are in conservation areas requiring careful planning applications and sensitive building work that respects the period character of the streetscape.',
    avgExtensionCost: '£40,000-£70,000'
  },
  {
    slug: 'watford',
    name: 'Watford',
    postcode: 'WD17, WD18, WD24, WD25',
    coordinates: { lat: 51.6565, lng: -0.3957 },
    zone: 'primary',
    nearby: ['st-albans', 'harrow'],
    county: 'Hertfordshire',
    landmarks: ['Watford High Street', 'Cassiobury Park', 'Watford Junction'],
    housingTypes: ['1930s semis', 'Victorian terraces', 'post-war estates', 'modern developments'],
    localChallenge: 'Watford families often outgrow their homes but love the area and schools — a well-planned extension or loft conversion lets them gain the space they need without moving.',
    avgExtensionCost: '£35,000-£60,000'
  },
  {
    slug: 'edgware',
    name: 'Edgware',
    postcode: 'HA8',
    coordinates: { lat: 51.6137, lng: -0.2747 },
    zone: 'primary',
    nearby: ['stanmore', 'barnet'],
    county: 'Greater London',
    landmarks: ['Edgware Station', 'Broadwalk Shopping Centre', 'Burnt Oak'],
    housingTypes: ['1930s semis', 'detached houses', 'ex-council properties', 'modern flats'],
    localChallenge: 'Edgware has many 1930s semi-detached homes with excellent loft conversion potential — the roof pitch and party wall structure often make hip-to-gable conversions the most cost-effective way to add a bedroom and bathroom.',
    avgExtensionCost: '£35,000-£55,000'
  },
  {
    slug: 'stanmore',
    name: 'Stanmore',
    postcode: 'HA7',
    coordinates: { lat: 51.6192, lng: -0.3094 },
    zone: 'primary',
    nearby: ['edgware', 'harrow'],
    county: 'Greater London',
    landmarks: ['Stanmore Country Park', 'Bentley Priory', 'Stanmore Station'],
    housingTypes: ['detached family homes', '1930s semis', 'period properties', 'executive homes'],
    localChallenge: 'Stanmore homeowners investing in extensions expect premium finishes and meticulous project management — the properties command high values and the build quality must match.',
    avgExtensionCost: '£45,000-£75,000'
  },
  {
    slug: 'barnet',
    name: 'Barnet',
    postcode: 'EN5, EN4',
    coordinates: { lat: 51.6529, lng: -0.1997 },
    zone: 'primary',
    nearby: ['edgware', 'wood-green'],
    county: 'Greater London',
    landmarks: ['Barnet High Street', 'Hadley Green', 'Barnet Market'],
    housingTypes: ['Victorian and Edwardian terraces', 'period cottages', '1930s semis', 'detached family homes'],
    localChallenge: 'Barnet properties often have mature gardens and space for rear or side extensions — but many are near conservation boundaries requiring planning sensitivity.',
    avgExtensionCost: '£40,000-£65,000'
  },
  {
    slug: 'harrow',
    name: 'Harrow',
    postcode: 'HA1, HA2, HA3',
    coordinates: { lat: 51.5802, lng: -0.3427 },
    zone: 'secondary',
    nearby: ['stanmore', 'wembley'],
    county: 'Greater London',
    landmarks: ['Harrow on the Hill', 'Harrow School', 'St Anns Shopping Centre'],
    housingTypes: ['1930s semis', 'Victorian terraces', 'modern estates', 'period conversions'],
    localChallenge: 'Harrow families frequently convert lofts to accommodate growing households — the typical 1930s semi structure allows for excellent dormer or hip-to-gable conversions.',
    avgExtensionCost: '£35,000-£60,000'
  },
  {
    slug: 'wembley',
    name: 'Wembley',
    postcode: 'HA0, HA9',
    coordinates: { lat: 51.5528, lng: -0.2979 },
    zone: 'secondary',
    nearby: ['harrow', 'wood-green'],
    county: 'Greater London',
    landmarks: ['Wembley Stadium', 'Wembley Arena', 'London Designer Outlet'],
    housingTypes: ['1930s terraces', 'post-war semis', 'modern apartments', 'ex-council homes'],
    localChallenge: 'Wembley has seen significant regeneration with many homeowners now investing in rear extensions and full interior renovations to modernise older properties.',
    avgExtensionCost: '£30,000-£55,000'
  },
  {
    slug: 'wood-green',
    name: 'Wood Green',
    postcode: 'N22',
    coordinates: { lat: 51.5975, lng: -0.1097 },
    zone: 'secondary',
    nearby: ['barnet', 'wembley'],
    county: 'Greater London',
    landmarks: ['Wood Green Shopping City', 'Alexandra Palace', 'Noel Park'],
    housingTypes: ['Victorian terraces', 'Edwardian houses', 'ex-council flats', 'period conversions'],
    localChallenge: 'Wood Green Victorian terraces often benefit from side return extensions that transform narrow kitchens into open-plan living spaces — a popular project that adds significant value.',
    avgExtensionCost: '£35,000-£60,000'
  }
];
```

#### Location Page Template:

**Title Tag Pattern:** `Builders in {Name} ({Postcode}) | BBBrotherBuilding`
**Example:** `Builders in St Albans (AL1-AL4) | BBBrotherBuilding`

**Meta Description Pattern:** `Trusted builders in {Name}. Extensions, loft conversions, bathrooms & kitchens. 10/10 Checkatrade. Ltd company. £10M insured. 2-year guarantee. Free quotes.`

**Canonical:** `https://bbbrotherbuilding.co.uk/locations/{slug}`

**H1:** `Builders in {Name}`

**Each location page MUST have:**
- LocalBusiness schema with areaServed GeoCircle
- BreadcrumbList schema (Home > Locations > {Name})
- FAQPage schema with 3 location-specific FAQs
- Local content hook mentioning housing types, landmarks, specific building challenges
- Average extension cost for the area
- Links to all service pages
- NearbyLocations component with randomised anchor text
- CTA with phone and quote form

---

## SCHEMA TEMPLATES

### Layout-Level (every page) — Organization Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://bbbrotherbuilding.co.uk/#organization",
  "name": "BBBrotherBuilding Ltd",
  "url": "https://bbbrotherbuilding.co.uk",
  "telephone": "+447925921222",
  "email": "bledar@bbbrotherbuilding.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Borehamwood",
    "addressRegion": "Hertfordshire",
    "addressCountry": "GB"
  },
  "foundingDate": "2013",
  "founder": {
    "@type": "Person",
    "name": "Bledar Dishani"
  },
  "employee": {
    "@type": "Person",
    "name": "Besart Dishani",
    "jobTitle": "Director"
  },
  "priceRange": "£££",
  "image": "https://bbbrotherbuilding.co.uk/images/hero.webp",
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Building Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "House Extensions"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Loft Conversions"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Bathroom Renovations"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Kitchen Fitting"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Roofing"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Plastering"}}
    ]
  }
}
```

**NOTE:** No AggregateRating in schema until he has Google reviews. Once he gets reviews, add them with EXACT real numbers.
**NOTE:** sameAs stays empty until real social profile URLs exist.
**NOTE:** foundingDate "2013" based on 12 years experience from 2025. Verify with Bledar.

---

## COMPONENTS TO BUILD

### 1. Trust Bar Component
`★★★★★ 10/10 on Checkatrade | Ltd Company #16950486 | £10M Insured | 2-Year Guarantee`

### 2. Mobile Sticky Footer
- Left: WhatsApp (forest green) → opens WhatsApp to 07925921222
- Right: Call (accent colour) → tel:07925921222

### 3. NearbyLocations Component
Randomised anchor text:
- "Builders in {neighbor}"
- "{neighbor} Extensions & Lofts"
- "Our team near {neighbor}"
- "Projects in {neighbor}"
- "Serving {neighbor} and surrounding areas"

### 4. Multi-Step Quote Form
- Step 1: "What's your project?" (Buttons: Extension / Loft Conversion / Bathroom / Kitchen / Roofing / Plastering / Painting / Other)
- Step 2: "Your postcode?"
- Step 3: "Tell us about your project" (Textarea + optional photo upload)
- Step 4: "Name, phone, email"

### 5. Breadcrumb Component + Schema

### 6. FAQ Accordion Component + Schema

---

## DESIGN DIRECTION — "Established Contractor"

This is a BUILDER, not a painter. The design needs to feel solid, established, and trustworthy — like a company that manages £50,000 projects, not a one-man band. Think architecture firm meets construction company.

### Colour Palette
- Primary: Deep Navy (#0c1a2e) — authority, stability
- Accent: Copper/Bronze (#b87333) — premium, established, construction-warm
- Background: Warm Grey (#f5f4f2) — solid, not delicate
- Text Body: Charcoal (#2d2d2d)
- Text Muted: (#6b7280)
- Success/WhatsApp: Forest Green (#166534)
- Cards: White (#ffffff) with warm shadow

### Typography
- Headings: DM Serif Display or Libre Baskerville (established, authoritative)
- Body: Source Sans 3 or DM Sans (clean, professional)
- Load via next/font — self-hosted
- Generous sizing: 17-18px body, 40-56px H1

### Design Notes
- This site needs to feel MORE substantial than the painter sites
- Larger hero images showing completed extensions and lofts
- Project gallery is CRITICAL — homeowners won't call a builder without seeing finished work
- The Companies House number and £10M insurance need prominent placement — these are the trust signals that close £40,000+ deals
- Mobile first as always — 60%+ of traffic will be mobile

### What to AVOID
- Anything that looks like a small one-man-band operation
- Generic stock construction photos
- Bright, playful colours (this is serious money, serious work)
- Cluttered layouts — whitespace communicates professionalism

---

## SECURITY HEADERS (vercel.json)

```json

{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "geolocation=(), microphone=(), camera=()" }
      ]
    }
  ]
}

```

---

## COPYWRITING RULES (Builder-Specific British Standard)

**MUST USE:** "Complete project management," "from foundations to finish," "fixed-price quotations," "no hidden costs," "2-year workmanship guarantee," "£10 million public liability insurance," "Companies House registered," "fully compliant with building regulations," "structural integrity," "meticulous attention to detail," "experienced team," "one team throughout your project"

**NEVER USE:** "Cheap," "discount," "bargain," "fast," "quick," "budget," "no job too small" (this sounds small-time for a builder doing extensions)

**TONE:** Authoritative, project-management focused. Write as if speaking to a homeowner about to invest £30,000-60,000. They want confidence, competence, and control. Not friendliness — professionalism.

**KEY DIFFERENTIATORS TO EMPHASISE:**
- Ltd company (most competitors are sole traders)
- £10M insurance (most have £1-2M)
- 2-year guarantee (most offer 1 year or nothing)
- 12 years experience
- One team from start to finish (no subcontractor chaos)
- Free site surveys and fixed-price quotes

---

## SITEMAP — ALL 24 PAGES

Verify every page is in sitemap.ts with https://bbbrotherbuilding.co.uk/ base URL.

## ROBOTS.TXT

```
User-agent: *
Allow: /
Sitemap: https://bbbrotherbuilding.co.uk/sitemap.xml
```

**VERIFY:** Domain is bbbrotherbuilding.co.uk — NOT any other domain.

---

## CANONICAL TAGS

Every page MUST have its own unique canonical via `alternates.canonical` in metadata/generateMetadata.
**NEVER** hardcode a single canonical in root layout.

---

## PRE-DEPLOYMENT CHECKLIST

- [ ] Every page has unique title tag under 60 characters
- [ ] Every page has unique meta description under 155 characters
- [ ] Every page has unique canonical tag
- [ ] NO AggregateRating in schema (no Google reviews yet)
- [ ] Checkatrade 10/10 displayed visually but NOT in schema
- [ ] Phone number +447925921222 consistent in ALL schema blocks and CTAs
- [ ] Business name "BBBrotherBuilding Ltd" consistent everywhere
- [ ] Company number 16950486 displayed in footer and about page
- [ ] Full address does NOT appear anywhere on public website
- [ ] Website shows "Based in Borehamwood, Hertfordshire" instead
- [ ] Sitemap includes all 24 pages with correct URLs
- [ ] Robots.txt points to correct sitemap URL on correct domain
- [ ] No hardcoded canonical in root layout
- [ ] All images use next/image with width, height, alt text
- [ ] Hero image has priority prop
- [ ] Below-fold images have loading="lazy"
- [ ] Mobile sticky footer with WhatsApp + Call buttons
- [ ] Privacy policy page exists
- [ ] Cookie consent banner implemented
- [ ] Security headers configured in vercel.json
- [ ] All internal links work (no 404s)
- [ ] Breadcrumbs match BreadcrumbList schema
- [ ] FAQ visible content matches FAQPage schema exactly
- [ ] NearbyLocations uses randomised anchor text
- [ ] No 'use client' on pages that need metadata exports
- [ ] Build succeeds with `npm run build`
- [ ] No references to any other domain in the codebase
- [ ] Only primary phone number (07925921222) appears — no secondary numbers

---

## POST-DEPLOYMENT

1. Register domain under Bledar's email
2. Set up professional email forwarding
3. Deploy to Vercel
4. Build and run force-index-all.js script
5. Submit sitemap to Google Search Console
6. Create GBP:
   - Business name: BBBrotherBuilding Ltd
   - Category: General Contractor (primary), Builder (secondary), Home Renovation Contractor (additional)
   - Service area business (hide address)
   - Service areas: St Albans, Watford, Edgware, Stanmore, Barnet, Harrow, Wembley, Wood Green, Borehamwood
   - Phone: 07925 921222
   - Website: https://bbbrotherbuilding.co.uk
   - Services list matching website service pages exactly
7. Update Checkatrade profile with website URL
8. Create directory listings: Yell, Thompson Local, Scoot, Cylex, FMB (Federation of Master Builders if applicable), TrustATrader
9. Set up Google review link for Bledar
10. Start weekly GBP posts with project photos
11. Verify schema on Google Rich Results Test
12. Test Core Web Vitals on PageSpeed Insights
13. Verify security headers at securityheaders.com
