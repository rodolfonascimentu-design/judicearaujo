

## Judice & Araujo — Luxury Real Estate Homepage

A premium, editorial-style homepage for a boutique luxury real estate company in Rio de Janeiro. Inspired by Junot, PP Global, and Majeli Vassart — featuring immersive photography, elegant serif typography, generous whitespace, and smooth scroll animations.

### Color & Typography System
- **Palette**: Deep charcoal (#1a1a1a), warm cream (#f5f0eb), muted gold (#b8976a), white — evoking understated luxury
- **Headings**: Serif font (Playfair Display) for editorial elegance
- **Body**: Clean sans-serif (Inter) for readability
- **Spacing**: Generous padding (80-120px vertical sections), calm rhythm

---

### 1. Navigation
- Sticky transparent navbar → solid dark on scroll with smooth transition
- Centered "JUDICE & ARAUJO" logo in elegant serif
- Nav links: Imóveis · Comprar · Alugar · Bairros · Blog · Sobre · Contato
- Hamburger menu on mobile with full-screen overlay
- Subtle stacking animation on scroll

### 2. Hero Section
- Full-viewport immersive hero with a stunning Rio de Janeiro luxury interior/view image
- Scroll-expansion effect: image starts slightly cropped, expands to full bleed on scroll
- Animated headline fading in: *"Viver com exclusividade no Rio de Janeiro"*
- Luxury tagline beneath: *"Imóveis únicos nos endereços mais prestigiados"*
- Elegant search bar overlay with: Location, Type, Price Range, Search button
- Two CTAs: "Ver Imóveis" and "Agendar Consultoria"

### 3. Featured Properties (6 cards)
- 3-column grid (desktop), 1 column (mobile)
- Each card: large image with subtle zoom-on-hover, neighborhood tag, price, bedrooms, area (m²), "Ver Detalhes" link
- Mock data: Leblon penthouse, Ipanema apartment, Lagoa house, Gávea mansion, Jardim Botânico villa, São Conrado estate
- Prices in BRL format (R$ 4.500.000+)
- Section header with serif typography and thin decorative line

### 4. Editorial / Brand Story Section
- Magazine-style split layout: large atmospheric image on one side, text on the other
- Scroll-reveal animation (container scroll style — content fades/slides in as user scrolls)
- Headline: *"Tradição e sofisticação no mercado imobiliário carioca"*
- Body text about the brand's heritage, expertise, and commitment to exclusivity
- "Conheça Nossa História" CTA link

### 5. Luxury Highlights (Horizontal Scroll)
- Horizontally scrollable category cards:
  - Frente para o Mar (Beachfront)
  - Coberturas (Penthouses)
  - Casarões Históricos (Historic Mansions)
  - Arquitetura Contemporânea (Architectural Homes)
- Each card: full-bleed image with category name overlay, subtle glow effect on hover
- Drag/swipe enabled

### 6. Market Insights / Blog Preview
- 3-card layout with large hero images
- Each card: image, category tag, title, date, excerpt
- Mock articles about Rio luxury market trends, neighborhood guides, lifestyle
- "Ver Todos os Artigos" link

### 7. Testimonials
- Elegant centered layout with large quotation marks
- Client quote in italic serif
- Client name and neighborhood below
- Auto-rotating carousel with dots or manual navigation

### 8. Call to Action
- Full-width section with atmospheric Rio skyline/beach background (dark overlay)
- Large serif headline: *"Encontre o imóvel dos seus sonhos"*
- Subtext: *"Agende uma consultoria exclusiva com nossos especialistas"*
- Two buttons: "Agendar Consultoria" (primary gold) and "Fale Conosco" (outlined)

### 9. Footer
- Dark background (charcoal)
- 4-column layout: Navigation, Bairros, Contato, Redes Sociais
- Brand logo at top
- Instagram, WhatsApp, LinkedIn icons
- Legal text and copyright at bottom
- Thin gold accent line separator

### Reusable Components
- `PropertyCard` — used in featured properties grid
- `BlogCard` — used in blog preview section
- `CategoryCard` — used in luxury highlights carousel
- `TestimonialCard` — used in testimonials section
- `CTASection` — reusable call-to-action block
- `SectionHeader` — serif heading with decorative line
- `Navbar` — sticky transparent-to-solid navigation

### Animations & Effects
- Scroll-triggered fade-in for all sections
- Hero scroll-expansion effect
- Property card image zoom on hover
- Subtle glow effect on highlight category cards
- Smooth navbar background transition on scroll
- Horizontal drag scroll for highlights section

