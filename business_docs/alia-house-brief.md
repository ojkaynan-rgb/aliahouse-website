# Alia House — Source of Truth Brief
**For: Website consultant, tracking setup, Google Ads**
**Date: May 2026 · Confidential**

---

## 1. Business Idea — Short Summary

Alia House is a family lifestyle hospitality concept positioned at the intersection of boutique hotel, coworking, and private club. It is designed for families of 3–4 travelling to major European cities who are currently forced into expensive, spatially fragmented two-room hotel workarounds.

The core product is a prefabricated 26 sqm room module accommodating 2 adults + 2 children in a single room — with integrated storage, a children's sleeping area, stroller bay, and no freestanding furniture. The building also includes coworking, an all-day restaurant, a playroom, and a membership layer.

**The concept is not yet open.** The website is a demand-validation exercise (fake door). The goal is to measure real booking intent — not generate actual reservations.

---

## 2. Room Booking Offer

| Element | Detail |
|---|---|
| Room type | Family room — 2 adults + 2 children |
| Size | 26 sqm |
| Price shown | From €320 / night |
| Availability | Always "fully booked" — fake door |
| User flow | User selects city + dates + guests → clicks "Check availability" → modal: "Fully booked for those dates" → prompted to leave email for waitlist notification |
| What is captured | City, check-in date, check-out date, adults, children, email (optional), timestamp |
| Cities shown on site | Amsterdam, Paris, London, Barcelona, Berlin |
| **Test city for ads** | **Paris** |

---

## 3. Membership Offer

Three tiers displayed on site — not yet purchasable. For demand signal only.

| Tier | Price | Access |
|---|---|---|
| Day Pass | From €25 / day | Coworking + playroom + restaurant, one city |
| City Member | From €120 / month | Unlimited coworking, priority booking, 10% off stays, one city |
| Network | From €280 / month | All cities, full access, family concierge, 15% off stays |

Membership CTAs currently say "Learn more" / "Join now" — no backend connected yet.

---

## 4. Target Audiences

**Primary (ads focus)**
International families travelling to Paris — English-speaking, aged 32–48, 2 adults + 1–3 children, accustomed to boutique/lifestyle hotels, frustrated by the two-room workaround or Airbnb compromise.

**Secondary (site awareness)**
- Expat families based in European cities (potential members)
- Design and hospitality press / industry (organic)

**Not targeted yet**
- French local families
- Solo travellers or couples
- Budget travellers

---

## 5. Positioning Statement

*The first lifestyle hotel designed for families of four — without increasing the room footprint. One room. No compromise on design.*

**Against the market:**
- vs. traditional hotels: one room instead of two, at a fraction of the cost
- vs. Airbnb: hotel-grade service, design, and programming
- vs. extended stay / Residence Inn: lifestyle positioning, not functional

---

## 6. Branding Direction

**Tone**
- Confident, editorial, direct
- Speaks to adults — not "family-friendly" in the patronising sense
- Never cute, never corporate
- Words to use: *considered, designed for, properly, integrated, lifestyle, effortless*
- Words to avoid: *bunk beds, kids, family-friendly, cosy, affordable, innovative*

**Visual feel**
- Deep navy (#0B1121), warm cream (#F0EAE0), gold accent (#C9A96E)
- Typography: Cormorant Garamond (serif display) + Jost (sans body)
- Photography: warm oak tones, recessed lighting, families in natural interaction — not posed stock
- No freestanding furniture visible in room images (IP sensitivity)

**Known brand assets**
- Logo: AH monogram (text-based wordmark for now)
- Tagline: *Family Lifestyle Hospitality*
- 4 photo-realistic renders: lobby, restaurant, coworking, kids/playroom
- 1 room render (not to be used publicly — reveals unpublished mechanism)
- HTML landing page built and ready to deploy

**Brand name**
Alia House *(Needs confirmation: trademark filing in progress — confirm EUIPO class 43 status before launching ads)*

---

## 7. Website Direction

**Platform:** Single HTML file, self-contained — consultant to deploy on Olivia's own domain.

**Domain:** To be registered by Olivia. Suggested: `aliahouse.co` or `aliahouse.eu`

**Page structure (already built):**
1. Nav — logo + "Book now" CTA
2. Hero — headline + price (from €320/night) + booking widget
3. Locations — 5 cities as text cards (Amsterdam, Paris, London, Barcelona, Berlin)
4. Rooms gallery — 4-image carousel (lobby, coworking, restaurant, kids area)
5. Experience — 4-panel image grid with captions
6. Membership — 3 tiers
7. Footer

**Booking flow:**
- Widget: city / check-in / check-out / adults / children
- Always returns "Fully booked" modal
- Modal prompts email capture for waitlist
- All requests stored in localStorage (consultant to connect to Airtable or Google Sheets)

**Tracking needed (consultant to set up):**
- Google Analytics 4 (GA4)
- Google Tag Manager
- Conversion events: `check_availability_click`, `modal_shown`, `waitlist_email_submitted`
- Google Ads conversion tag on `waitlist_email_submitted`

---

## 8. Google Ads Hypothesis

**Goal:** Drive high-intent families searching for Paris accommodation to the site, measure booking attempts and email signups.

**Budget:** €500 / month (Paris only, English language)

**Campaign type:** Search

**Hypothesis:** Families planning trips to Paris are actively searching for family-suitable hotels and finding nothing adequate. They will click on an ad that speaks directly to their frustration (two rooms, sofa beds) and presents a credible alternative.

**Suggested keyword clusters:**

| Intent | Keywords |
|---|---|
| High intent | "family hotel paris", "family room paris 4 people", "paris hotel 2 adults 2 children", "hotel family suite paris" |
| Problem-aware | "paris hotel sofa bed family", "paris two room hotel family", "family friendly boutique hotel paris" |
| Lifestyle-aware | "boutique family hotel paris", "design hotel paris family", "lifestyle hotel paris kids" |

**Ad copy direction:**
- Headline 1: *One Room. Four People. Paris.*
- Headline 2: *No Sofa Beds. No Second Room.*
- Headline 3: *From €320/night — Check Availability*
- Description: *A lifestyle hotel designed for families. One room, two adults, two children — properly. Coworking, restaurant, playroom.*

**Negative keywords:** budget, cheap, hostel, backpacker, solo, couple

**Landing page:** Homepage (booking widget above the fold)

**Primary conversion:** `waitlist_email_submitted`
**Secondary conversion:** `modal_shown` (booking attempt)

---

## 9. Meta Ads

**Status: Not in scope for this phase.**
To be revisited once Google Ads data confirms demand and a brand Instagram account is established.

---

## 10. Conversion Goals to Track

| Event | Priority | What it proves |
|---|---|---|
| `check_availability_click` | High | User had booking intent |
| `modal_shown` | High | Confirmed dates selected — real intent |
| `waitlist_email_submitted` | Highest | Strongest demand signal |
| `membership_cta_click` | Medium | Membership interest |
| `city_selected` | Medium | Which cities have most demand |
| Time on page | Low | General engagement |

---

## 11. Open Questions & Assumptions

| Item | Status |
|---|---|
| Trademark "Alia House" EUIPO class 43 | **Needs confirmation before ads launch** |
| Domain registered | Needs confirmation |
| Airtable / Google Sheets backend for email capture | Needs setup by consultant |
| GA4 + GTM installed on deployed site | Needs setup by consultant |
| Room render cleared for public use | **Not to be published — IP sensitivity** |
| Membership pricing | Indicative only — not final |
| ADR of €320/night | Assumed — needs market validation (this test will confirm) |
| Paris neighbourhood / address | Not defined — not needed for this phase |

---

## 12. One-Page Brief — For Consultant

**What this is:**
Alia House is a family lifestyle hotel concept in pre-launch. The website is a demand-validation tool (fake door). No real bookings are taken. The goal is to measure how many people try to book, for which cities and dates, and how many leave an email when told it's full.

**What the consultant needs to do:**
1. Deploy the HTML file on Olivia's domain (she provides domain + file)
2. Install GA4 + GTM
3. Set up 3 conversion events: availability click, modal shown, email submitted
4. Connect email submissions to Airtable or Google Sheets (replace localStorage)
5. Set up one Google Search campaign — Paris, English, €500/month
6. Keywords: family hotel paris, family room paris 4 people, boutique family hotel paris, hotel 2 adults 2 children paris
7. Ad copy: leads with "One room. Four people." — against sofa beds and two-room workarounds
8. Optimise for `waitlist_email_submitted` conversion

**What success looks like after 30 days:**
- 50+ booking attempts (modal shown)
- 20+ email submissions
- Clear data on which dates and cities have highest demand
- Cost per email submission under €25

**What Olivia owns:**
- Domain
- HTML file + all images
- Brand identity and positioning
- All captured data

**What is off-limits:**
- Publishing the room interior render (IP sensitivity)
- Mentioning "bunk beds" anywhere in ads or copy
- Any claims about actual availability or opening dates
