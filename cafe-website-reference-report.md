# Cafe Website Reference Report

## Project Context

This report analyzes the reference website: `https://www.cafecoffeeday.com/`

Goal:
- Build a light, polished sample cafe website inspired by the reference site
- Keep the same kind of visual energy: poster slider, animated CTA buttons, animated nav/cart area, and a clean branded navigation system
- Implement it using your stack:
  - Next.js 15
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Icons

Note:
- The reference site is built on an older Drupal + jQuery stack.
- For your project, the right approach is not to copy that code, but to translate its visual language and interactions into modern React components.

---

## 1. What Was Observed On The Reference Site

### Core homepage structure

The homepage is organized around these key blocks:

1. Full-width hero poster slider
2. Sticky top navigation after the hero
3. Secondary animated promo/image cards
4. History/story section with parallax background
5. Footer with animated social icons and multi-column links

### Main behaviors found

1. Hero poster slider auto-plays
   - Single poster visible at a time
   - Dot navigation
   - Auto-advance every `6000ms`
   - Fast slide speed around `200ms`

2. Mobile promo cards become a slider
   - Desktop: 3 cards in a row
   - Mobile: 1 card with side padding and dots

3. Sticky header
   - Header becomes fixed when scrolling
   - Simple shadow gives separation from the content

4. Navigation hover behavior
   - Desktop nav items show underline reveal
   - Some items open dropdown menus

5. Animated CTA button style
   - Rounded pill button
   - Arrow slides in from the left
   - Button text slides out to the right on hover

6. Search panel reveal
   - Search expands with scale/translate motion
   - Desktop and mobile variants both exist

7. Story section uses parallax feel
   - Large background image
   - Centered logo/story graphic and CTA

8. Social icons have swap-hover animation
   - One icon slides out
   - Another slides into the same circular/graphic button

9. Cart/eshop emphasis
   - Nav uses a small animated cart GIF next to the shop link
   - This gives the menu a playful commerce accent

### Reference-site libraries detected

The site relies on:

- Owl Carousel
- Slick
- jQuery
- Waypoints Sticky
- jQuery UI
- Drupal theme scripts

These should not be reused. They are reference-only.

---

## 2. Visual Identity Extracted From The Reference

### Primary palette actually used on the site

Observed dominant colors from CSS:

| Role | Color |
|---|---|
| Primary brand red | `#dc4348` |
| Secondary red | `#ee5353` |
| White | `#ffffff` |
| Dark text | `#333333` |
| Mid gray | `#666666` |
| Soft muted gray | `#838282` |
| Border gray | `#c9c9c9` |
| Pale pink placeholder tone | `#fcd2d2` |
| Light gray surface | `#f1f1f1` |

### Secondary accent colors seen mostly in mobile menus

These are supporting accents, not the main identity:

| Accent | Color |
|---|---|
| Lavender | `#d380d8` |
| Mustard | `#edb41d` |
| Mint | `#c4df9a` |
| Cyan | `#7bd0d7` |
| Coral orange | `#f96527` |
| Pink | `#fca0b7` |
| Warm gray-brown | `#a29d97` |

### Recommended palette for your sample website

Because you asked for something light, keep the CCD-inspired red but soften the overall canvas.

#### Recommended final palette

| Role | Suggested color |
|---|---|
| Brand red | `#dc4348` |
| Hover red | `#c7383d` |
| Warm cream background | `#faf6f1` |
| Soft beige section | `#f3ece4` |
| White card surface | `#ffffff` |
| Espresso text | `#2f241f` |
| Soft brown secondary text | `#6f6259` |
| Border | `#e4d8cf` |
| Gold highlight | `#c8963e` |
| Leaf accent | `#7d9b76` |

### Color strategy

Use color like this:

1. `#dc4348` for CTAs, active dots, active nav underline, and small interactive highlights
2. Warm cream and beige for most backgrounds so the site feels brighter and more premium
3. Deep brown text instead of plain black for a cafe mood
4. Small gold or leaf accents only in badges, counters, tags, or decorative lines

---

## 3. Typography Direction

### Reference site typography

The original site uses Gotham family variants and some decorative scripts in parts of the theme.

### Recommended typography for your build

Since Gotham is not a safe default web font, use a close premium-feeling setup:

| Usage | Recommendation |
|---|---|
| Headlines | `Cormorant Garamond` or `Bricolage Grotesque` |
| Body text | `Manrope` or `DM Sans` |
| Buttons / labels / nav | `Manrope` semi-bold |

### Why this works

- Serif heading gives cafe warmth
- Clean sans body keeps the site modern
- This avoids the generic startup look

---

## 4. Reference Animation System

### Animation style summary

The reference site does not use heavy cinematic motion. It uses:

1. Short UI transitions
2. Hover-driven microinteractions
3. Auto-playing content sliders
4. Sticky scroll behavior
5. Simple reveal-on-scroll
6. Parallax-style background depth

### Animation timings extracted or inferred

| Interaction | Reference feel | Recommended modern value |
|---|---|---|
| General hover | fast | `0.18s` to `0.24s` |
| CTA arrow/text hover | fast and playful | `0.24s` |
| Nav underline reveal | smooth | `0.28s` to `0.32s` |
| Hero slide auto-change | every `6000ms` | `5000ms` to `6500ms` |
| Hero transition | quick | `0.45s` to `0.7s` |
| Scroll reveal | subtle | `0.45s` to `0.8s` |
| Search reveal | pop open | `0.25s` to `0.35s` |
| Sticky header settle | subtle | `0.2s` |

### Motion rules for your site

#### 1. Hero posters

Use:
- Horizontal slide or fade-slide combo
- Slight scale animation on active poster image
- Animated text layer if you add overlay content

Recommended feel:
- Enter: `x: 40`, `opacity: 0`
- Active: `x: 0`, `opacity: 1`
- Exit: `x: -40`, `opacity: 0`

#### 2. CTA buttons

Recreate the reference button pattern in a cleaner way:

- Rounded pill button
- Arrow icon starts off-canvas on the left
- On hover:
  - arrow moves to center-left
  - label shifts right and fades slightly
  - button background darkens a bit

#### 3. Cart/nav commerce accent

Instead of using a GIF, use Framer Motion:

- tiny looping rotate and bounce
- or pulse badge on hover
- or subtle sway every 3 to 4 seconds

Recommended:
- rotate: `[-6, 6, -4, 0]`
- y: `[0, -1, 0]`
- duration: `1.6s`
- repeat with delay: `3s`

#### 4. Scroll reveal sections

Use:
- `opacity`
- `y`
- optional tiny blur reduction if desired

Avoid:
- dramatic zooms
- large direction changes
- too many staggered layers at once

#### 5. Social icon hover

Use icon swap or slide transition:

- default icon centered
- hover icon or glow layer slides in
- background scale: `1 -> 1.06`

#### 6. Search or menu panel reveal

Use transform-origin top and animate:

- `opacity: 0 -> 1`
- `scaleY: 0.92 -> 1`
- `y: -8 -> 0`

#### 7. Parallax story section

Do not use expensive real parallax everywhere.

Instead:
- slow background translate on scroll
- floating coffee bean or steam shapes
- one layered depth section only

---

## 5. Component Breakdown For Your Build

### A. Header / Navbar

Required features:

- Transparent or light header over hero
- Sticky compact header after scroll
- Main nav links
- Shop/cart highlight
- CTA button for order or menu
- Mobile menu drawer

Recommended interactions:

- underline expand on hover
- sticky background blur on scroll
- cart icon idle motion
- dropdown fade-slide if submenus exist

### B. Hero Poster Slider

This is the main priority based on your request.

Required features:

- poster images provided by you later
- auto slide
- swipe support on mobile
- next/prev buttons
- dot indicator
- optional text overlay per poster

Recommended layout:

- 75vh to 92vh desktop
- 70vh mobile
- poster image should fill width cleanly
- overlay gradient only if text needs readability

### C. Promo Cards Section

Inspired by the three animated cards under the hero.

Recommended content:

- New Brews
- Find a Cafe
- Shop Beans / Order Now

Recommended behavior:

- desktop 3-column cards
- mobile snap slider
- slight image scale on hover
- CTA button reused from hero

### D. Story / About Section

Inspired by the CCD history block.

Recommended style:

- warm parallax background
- central brand statement
- one strong CTA like `Read Our Story`

### E. Menu Highlights Section

Not directly required from the homepage source, but essential for a sample cafe build.

Recommended:

- featured drinks
- seasonal specials
- signature desserts
- category chips

### F. Social / Community Strip

Use:

- 4 to 5 circular icon buttons
- hover motion
- user-generated imagery grid only if you want a lifestyle look

### G. Footer

Recommended:

- 4-column or 5-column footer on desktop
- compact grouped links on mobile
- thin top border
- restrained motion only on icons

---

## 6. How To Translate The Reference Site Into Your Tech Stack

### Stack you confirmed

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

### Recommended implementation mapping

| Reference behavior | Old site method | Your modern replacement |
|---|---|---|
| Hero slider | Owl Carousel | Framer Motion + React state, or Embla if needed |
| Sticky nav | Waypoints Sticky | scroll listener or `useScroll` |
| Hover underline | CSS transform | Tailwind + pseudo-element or nested span |
| Search reveal | jQuery class toggle | React state + Framer Motion |
| CTA hover | CSS left shift | Tailwind + Framer Motion hover variants |
| Social icon hover | CSS icon swap | React Icons + motion wrappers |
| Mobile drawer | jQuery plugin | controlled React drawer |
| Scroll reveal | add class on scroll | `whileInView` / `useInView` |

### Optional extra libraries

Your current stack is enough. If you want a cleaner slider implementation:

- `embla-carousel-react`
- `clsx`
- `tailwind-merge`

If you want zero extra dependencies, that is also fine.

---

## 7. Tailwind Design Tokens To Set Up

Define these in your theme or CSS variables.

### Suggested CSS variables

```css
:root {
  --bg-cream: #faf6f1;
  --bg-beige: #f3ece4;
  --surface: #ffffff;
  --brand: #dc4348;
  --brand-hover: #c7383d;
  --text-main: #2f241f;
  --text-soft: #6f6259;
  --line: #e4d8cf;
  --gold: #c8963e;
  --leaf: #7d9b76;
}
```

### Suggested shadows

```txt
soft-card: 0 16px 40px rgba(47, 36, 31, 0.08)
sticky-nav: 0 8px 24px rgba(47, 36, 31, 0.12)
button-hover: 0 10px 24px rgba(220, 67, 72, 0.24)
```

### Suggested radius scale

```txt
cards: 24px
buttons: 999px
image frames: 28px
small chips: 999px
```

---

## 8. Framer Motion Specs Per Component

### Hero slider

Use:

```ts
const heroVariants = {
  enter: { opacity: 0, x: 40, scale: 1.02 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -40, scale: 1.01 },
};
```

Recommended transition:

```ts
{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }
```

### CTA button

Use:

```ts
whileHover="hover"
whileTap={{ scale: 0.98 }}
```

Animation idea:

- arrow: `x: -24 -> 0`
- label: `x: 0 -> 10`, `opacity: 1 -> 0.92`

### Sticky header

Use:

```ts
animate={{
  backgroundColor: isScrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)",
  backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
  boxShadow: isScrolled ? "0 8px 24px rgba(47,36,31,0.12)" : "0 0 0 rgba(0,0,0,0)"
}}
```

### Promo cards

Use:

- image scale on hover
- card lift: `y: 0 -> -6`
- CTA reveal on hover

### Scroll reveal

Use:

```ts
initial={{ opacity: 0, y: 32 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.25 }}
transition={{ duration: 0.6 }}
```

---

## 9. Recommended File / Component Structure

Suggested starter structure for this project:

```txt
src/
  app/
    page.tsx
    globals.css
  components/
    layout/
      header.tsx
      mobile-menu.tsx
      footer.tsx
    home/
      hero-slider.tsx
      promo-cards.tsx
      story-section.tsx
      menu-highlights.tsx
      social-strip.tsx
    ui/
      animated-button.tsx
      section-heading.tsx
      dot-pagination.tsx
      cart-badge.tsx
  data/
    hero-posters.ts
    featured-menu.ts
  lib/
    motion.ts
    utils.ts
```

---

## 10. Poster Slider Data Shape

Since you said you will provide poster images later, prepare the slider data like this:

```ts
export type HeroPoster = {
  id: string;
  image: string;
  mobileImage?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlay?: "none" | "light" | "dark";
};
```

This will let you swap in real assets without changing component logic.

---

## 11. Recommended UI Direction For Your Sample Site

This is the most important design decision:

Do not make the site feel like a clone of CCD.

Instead:

- keep the poster-led homepage
- keep the pill CTA language
- keep subtle commerce animation
- keep warm cafe storytelling
- modernize spacing, typography, motion, and image framing

### Recommended visual mood

- lighter background
- more breathing room
- fewer hard lines
- stronger image presentation
- richer typography
- softer shadows

### Good inspiration carryovers

1. Hero-led storytelling
2. Playful CTA hover
3. Sticky navigation
4. Find-a-cafe / menu / shop callouts
5. Parallax story block

### Things to improve from the reference

1. Old-fashioned spacing rhythm
2. Over-dependence on red blocks
3. Legacy dropdown/menu feel
4. Heavy utility markup and dated UI states
5. GIF-based motion instead of component-based motion

---

## 12. Essential Build Checklist

### Required

- Hero poster slider
- Sticky responsive navbar
- Animated shop/cart indicator
- CTA button animation system
- Promo card row / mobile slider
- Story section with depth
- Footer with animated icons
- Mobile drawer menu

### Strongly recommended

- Reduced motion support
- keyboard-accessible controls
- image optimization with `next/image`
- lazy loading for below-the-fold media
- touch swipe support on mobile

### Nice to have

- progress bar for hero autoplay
- active slide number counter
- subtle floating decorative shapes
- menu preview cards

---

## 13. Performance and UX Notes

### Use these rules

1. Prefer Framer Motion transforms over layout-affecting animations
2. Avoid too many concurrent animations above the fold
3. Use optimized posters with desktop/mobile versions
4. Keep autoplay pausable on interaction
5. Respect `prefers-reduced-motion`

### Avoid

1. Large background videos for the hero unless required
2. Too many looping animations at once
3. Parallax on every section
4. Heavy box-shadow everywhere
5. Full-screen mobile menus with slow laggy transitions

---

## 14. Recommended Section Order For Your Homepage

Use this order:

1. Hero poster slider
2. Quick actions / promo cards
3. Signature drinks or featured menu
4. Brand story section
5. Experience / ambience section
6. Social proof or gallery
7. Footer

---

## 15. Build Recommendation Summary

### Best approach

Build a modern cafe website that is:

- inspired by CCD’s content flow
- lighter in color treatment
- cleaner in typography
- smoother in motion
- component-driven in React

### Keep from the reference

- poster-first landing experience
- sticky menu behavior
- animated CTA language
- playful shop/cart accent
- branded promo tiles

### Modernize with your stack

- Next.js app structure
- TypeScript data-driven components
- Tailwind design tokens
- Framer Motion interaction system
- React Icons for nav/social/cart/search UI

---

## 16. Recommended Next Implementation Step

When development starts, implement in this order:

1. Global theme tokens and fonts
2. Sticky header with mobile drawer
3. Hero poster slider
4. Animated reusable CTA button
5. Promo cards section
6. Story/parallax section
7. Footer and icon hovers

---

## 17. Poster Asset Preparation Notes

When you send poster images, try to provide:

- Desktop poster ratio around `1920x900` or similar wide format
- Mobile version for each poster if possible
- Optional title/subtitle/CTA text per poster
- Clear focal point so cropping stays safe

If only one poster version is available, we can still handle it with object-position rules.

---

## Final Conclusion

The reference website is useful mainly for:

- structure
- homepage content hierarchy
- branded CTA behavior
- sticky nav behavior
- slider rhythm
- promo-card concept

For your sample site, the correct direction is a cleaner and lighter reinterpretation built with:

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

This will give you the same feel, but with a much better frontend foundation.
