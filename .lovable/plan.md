

# Property Detail Page — Luxury Cinematographic Experience

## Overview

Create a new route `/imovel/:id` with a premium, editorial property detail page inspired by Majeli Vassart, PP Global, and the Judice & Araujo brand identity. The page prioritizes visual impact first, then narrative, then conversion — following luxury real estate UX best practices.

## File Structure

```text
src/
├── pages/
│   └── PropertyDetail.tsx          ← Main page (orchestrator)
├── components/property-detail/
│   ├── PropertyHero.tsx            ← Cinematic fullscreen hero with slideshow
│   ├── PropertyStory.tsx           ← Scroll storytelling sections (Apple-style reveals)
│   ├── PropertyDescription.tsx     ← Two-column: editorial text + sticky conversion card
│   ├── PropertyGallery.tsx         ← Netflix-style horizontal scroll gallery + lightbox
│   ├── PropertyFeatures.tsx        ← Minimalist icons grid (internal + condo amenities)
│   ├── PropertyUnits.tsx           ← Available units table (for launches)
│   ├── PropertyTimeline.tsx        ← Construction status horizontal timeline
│   ├── PropertyLocation.tsx        ← Map embed + neighborhood editorial
│   ├── PropertyNearby.tsx          ← Nearby attractions grid
│   ├── PropertyAgent.tsx           ← Agent card
│   ├── PropertyContact.tsx         ← Contact form with LGPD
│   └── PropertySimilar.tsx         ← Horizontal carousel of similar properties
├── data/
│   └── propertyDetail.ts           ← Mock data for the detail page
```

## Routing

Add route in `App.tsx`:
```
<Route path="/imovel/:id" element={<PropertyDetail />} />
```

Update `SearchPropertyCard` click handler to navigate to `/imovel/${id}`.

## Section-by-Section Design

### 1. Hero Cinematográfico
- Fullscreen `100vh` with auto-playing slideshow (embla-carousel or manual interval)
- Arrow navigation (desktop) + swipe (mobile via embla)
- Dark overlay gradient (bottom-heavy) with white text
- Content overlay: property type label, location, name, quick specs (area, suites, bathrooms, parking), price, and 3 CTA buttons (WhatsApp, Solicitar Info, Compartilhar)
- Cinematic entry animation: fade-in with slight scale from 1.05 to 1.0
- Slide counter (1/8) bottom-right

### 2. Scroll Storytelling
- 3 sections with `framer-motion` viewport-triggered animations
- Section 1: Large serif headline + panoramic image (fade-up)
- Section 2: Editorial text block about design/materials (slide-in from left)
- Section 3: Full-width hero image showcasing view/pool/terrace (scale reveal)
- Generous whitespace (`py-24` to `py-32`)

### 3. Property Description (Two-Column)
- Left: Editorial description with DM Serif Display headings, Inter body text
- Right: Sticky card (`position: sticky; top: 6rem`) with price, status badge, WhatsApp/Info/Share buttons, and financing simulation CTA
- Mobile: card becomes non-sticky, stacked below description

### 4. Netflix-Style Gallery
- Horizontal scrollable rows by category (Fotos, Vídeo, Tour Virtual)
- Each thumbnail with hover zoom preview
- Click opens fullscreen lightbox with keyboard navigation (ArrowLeft/Right, Escape)
- Uses `framer-motion` `AnimatePresence` for lightbox transitions

### 5. Features Grid
- Two-column layout with minimalist lucide icons
- Left: Internal features (suítes, closet, varanda, home theater, etc.)
- Right: Condominium amenities (academia, piscina, playground, etc.)
- Subtle fade-in animation per item

### 6. Available Units Table
- Conditionally rendered for launches
- Clean table with columns: Tipo, Metragem, Quartos, Suítes, Vagas, Preço
- Hover row highlight, minimal borders

### 7. Construction Timeline
- Horizontal progress bar with 4 stages
- Active stage highlighted with primary color
- Clean, minimal design

### 8. Location
- Embedded Google Maps iframe (static, no API key needed)
- "Abrir no Google Maps" button
- Neighborhood + city label

### 9. About the Neighborhood
- Editorial section with lifestyle description
- Image + text layout similar to EditorialSection pattern

### 10. Nearby Attractions
- Grid of categories (Shoppings, Restaurantes, Escolas, Hospitais, Metrô, Parques)
- Each with icon + list of places

### 11. Agent Card
- Photo, name, CRECI, phone, WhatsApp button
- Clean card with subtle border

### 12. Contact Form
- Name, Email, Phone, Message fields
- LGPD consent text
- Submit button in brand style

### 13. Similar Properties
- Horizontal carousel reusing existing `SearchPropertyCard` component
- embla-carousel for smooth scrolling

## Mobile Specifics
- Fixed WhatsApp FAB button (bottom-right, always visible)
- Swipe-enabled hero slideshow
- Stacked layout for all two-column sections
- Touch-friendly gallery

## Visual Guidelines
- Colors: white surfaces, `--primary` (#003F36) for accents, `--foreground` for text
- Typography: DM Serif Display for headings, Inter 400 for body
- Rounded corners: 4px consistent with existing cards
- Animations: `framer-motion` with `whileInView`, `once: false` per brand policy
- Generous whitespace throughout

## Mock Data
Create `propertyDetail.ts` with a single rich mock property including all fields (images array, features, units, agent info, neighborhood data, nearby attractions). Reuse existing property images from `src/assets/`.

## Estimated Scope
This is a large page with 13 sections. All components will be created as separate files for maintainability, with the page component orchestrating layout and scroll behavior.

