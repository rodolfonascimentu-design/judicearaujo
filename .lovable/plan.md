

## Plan: Co-Branding Logo Animation in Hero Section

### Overview
Replace the single Judice & Araujo logo in the hero's initial state with a cinematic co-branding animation sequence featuring both Forbes Global Properties and Judice & Araujo logos.

### Assets
- Copy `user-uploads://Forbes_Global_Properties.png` to `src/assets/forbes-global.png`
- Copy `user-uploads://Judice_Araujo.png` to `src/assets/logo-ja-full.png` (the uploaded version may differ from existing `logo-ja.png`)

### Animation Sequence (plays once on page load)

1. **T=0s** — Forbes Global Properties logo fades in, centered on screen
2. **T=0.8s** — Thin vertical divider line animates in (top to bottom) to the left of Forbes logo
3. **T=1.2s** — Judice & Araujo logo slides in from the left, emerging from behind the divider
4. **T=1.6s** — Final composition visible: `Judice & Araujo | Forbes Global Properties` centered
5. **T=3.6s** (after ~2s hold) — Both logos + divider fade out together
6. After fade-out, the scroll hint becomes visible and the hero continues as before

### File Changes

**`src/components/ui/scroll-expansion-hero.tsx`**
- Replace the single centered logo (lines 148-166) with a new `LogoAnimation` component
- The animation uses framer-motion's `animate` with sequential delays
- After animation completes (~3.6s), set a state `logoAnimDone` to true
- The scroll hint only appears after `logoAnimDone`
- When scroll progresses (`showContent` becomes true), the co-branding fades out (already handled by existing opacity logic)
- Remove the import of `logoJA` from this file (logo logic moves to an inline composition)

**Animation implementation detail:**
- Container: `flex items-center gap-6` centered absolutely
- Forbes logo: `motion.img` with `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, delay 0
- Divider: `motion.div` (1px wide, ~40px tall, cream colored), `initial={{ scaleY: 0 }}`, `animate={{ scaleY: 1 }}`, origin top, delay 0.8s
- JA logo: `motion.img` with `initial={{ opacity: 0, x: -20 }}`, `animate={{ opacity: 1, x: 0 }}`, delay 1.2s
- Whole group: after 3.6s, animate opacity to 0 via a timeout that triggers state change

**`src/components/HeroSection.tsx`**
- No changes needed (overlay content and scroll progress logic remain the same)

**`src/components/Navbar.tsx`**
- The navbar logo (`logoJA`) continues to appear only after `pastHero` — no changes needed

### Visual Style
- Both logos rendered white (using `brightness-0 invert` filter) against the dark video background
- Divider: 1px wide, ~40px tall, `bg-cream/40`
- Smooth `ease-in-out` transitions throughout
- Forbes logo slightly larger or equal height to JA logo for balanced composition

