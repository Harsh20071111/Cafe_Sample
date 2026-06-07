---
name: Brew Haven Luxe
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d4c3ba'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9c8e86'
  outline-variant: '#50453e'
  surface-tint: '#eabda0'
  primary: '#eabda0'
  on-primary: '#452a16'
  primary-container: '#6f4e37'
  on-primary-container: '#eec1a4'
  inverse-primary: '#79573f'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#d2c4b2'
  on-tertiary: '#372f22'
  tertiary-container: '#5e5446'
  on-tertiary-container: '#d7c9b6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc6'
  primary-fixed-dim: '#eabda0'
  on-primary-fixed: '#2d1604'
  on-primary-fixed-variant: '#5f402a'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#efe0cd'
  tertiary-fixed-dim: '#d2c4b2'
  on-tertiary-fixed: '#221a0f'
  on-tertiary-fixed-variant: '#4f4538'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.08em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is rooted in the "Nocturnal Artisan" aesthetic—a sophisticated, cinematic approach to the coffee house experience. It targets a discerning audience that views coffee not just as a beverage, but as a ritual. The brand personality is **Artisanal, Welcoming, Upscale, and Passionate**.

The design style leverages **Modern High-Contrast** principles with a focus on deep, light-absorbing surfaces paired with luminous typography. It borrows the structured efficiency of high-volume cafe layouts but elevates them through generous whitespace and premium finishing details. Every interaction should feel like a curated transition in a luxury boutique, evoking an emotional response of calm, exclusivity, and sensory richness.

## Colors

The palette is anchored in a deep **Charcoal (#111111)** base to create a cinematic, low-light environment. **Coffee Brown (#6F4E37)** serves as the primary functional color, used for primary actions and brand identifiers. 

**Gold (#D4AF37)** is reserved for "The Golden Touch"—fine borders, highlights, and premium call-outs. **Cream (#F5E6D3)** provides a soft, warm alternative to pure white for secondary text and decorative elements, preventing the interface from feeling clinical. Use **White (#FFFFFF)** sparingly for maximum legibility on high-priority headings.

## Typography

Typography centers on the contrast between the bold, geometric authority of **Montserrat** and the Swiss-style precision of **Inter**. 

Headlines use heavy weights and tight tracking to command attention, resembling the editorial layouts of luxury lifestyle magazines. Body text is prioritized for comfort, utilizing Inter’s neutral character to provide a high-legibility experience against dark backgrounds. Use the uppercase `label-md` for navigation and metadata to reinforce the organized, professional nature of the service.

## Layout & Spacing

This design system employs a **12-column fixed grid** for desktop and a **4-column fluid grid** for mobile. 

The philosophy is "Breathable Luxury." Layouts should prioritize large margins and wide gutters to prevent a cluttered "fast-food" feel. Components are grouped using an 8px base scale. Section transitions should use significant vertical padding (`section-gap`) to allow the high-quality coffee photography and cinematic backgrounds to shine. Large-scale imagery should often break the grid or bleed to the edges to enhance the cinematic immersion.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Luminous Outlines** rather than heavy shadows. 

1.  **Base Layer:** Deep Charcoal (#111111).
2.  **Surface Layer:** A slightly lighter Charcoal (#1A1A1A) for cards and containers.
3.  **Accent Outlines:** 1px solid Gold (#D4AF37) borders at 30-50% opacity define the most important interactive elements.
4.  **Interactive Glow:** On hover, primary buttons should emit a subtle, soft brown glow (shadow) to simulate the warmth of a coffee cup.

Avoid traditional drop shadows; instead, use sharp, 1px strokes to define boundaries, maintaining a crisp, architectural look.

## Shapes

The shape language is **Soft (0.25rem)**, leaning towards architectural precision. While corners are not sharp (to maintain a welcoming feel), they are not overly rounded. This conveys stability and craftsmanship.

Buttons and input fields should strictly adhere to the `rounded-md` (0.25rem) standard. Imagery, particularly product shots of coffee or interior spaces, should remain sharp (0px) to maximize the "cinematic" and "premium" photographic impact.

## Components

### Buttons
- **Primary:** Solid Coffee Brown (#6F4E37) with White text. Uppercase Montserrat.
- **Secondary:** Transparent background with a 1px Gold (#D4AF37) border.
- **Tertiary:** Text-only in Cream (#F5E6D3) with a gold underline on hover.

### Cards
- **Product Card:** Surface color (#1A1A1A) with a 1px border that turns Gold on hover. Image occupies the top 60% of the card.
- **Story Card:** Full-bleed background image with an overlay gradient (Bottom-to-Top: Black to Transparent).

### Inputs & Fields
- **Fields:** Darker background than the surface, 1px subtle gray border, Gold focus state.
- **Selection:** Checkboxes and Radio buttons use Gold (#D4AF37) for the active state to signify the "premium" choice.

### Unique Components
- **The "Heritage Scroll":** A horizontal list of artisanal coffee beans with metadata displayed in the `label-md` style.
- **Aroma Transitions:** Smooth, 400ms ease-in-out fades for all page transitions and modal appearances.