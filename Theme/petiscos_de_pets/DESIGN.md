---
name: Petiscos de Pets
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#564338'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#897266'
  outline-variant: '#dcc1b3'
  surface-tint: '#994700'
  primary: '#944400'
  on-primary: '#ffffff'
  primary-container: '#b85809'
  on-primary-container: '#fff9f8'
  inverse-primary: '#ffb68b'
  secondary: '#656100'
  on-secondary: '#ffffff'
  secondary-container: '#efe517'
  on-secondary-container: '#6a6500'
  tertiary: '#2b36ff'
  on-tertiary: '#ffffff'
  tertiary-container: '#535fff'
  on-tertiary-container: '#fdf9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc8'
  primary-fixed-dim: '#ffb68b'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#753400'
  secondary-fixed: '#f2e71c'
  secondary-fixed-dim: '#d4cb00'
  on-secondary-fixed: '#1e1c00'
  on-secondary-fixed-variant: '#4c4800'
  tertiary-fixed: '#e0e0ff'
  tertiary-fixed-dim: '#bec2ff'
  on-tertiary-fixed: '#00026c'
  on-tertiary-fixed-variant: '#000beb'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Poppins
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Poppins
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-md:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  headline-sm:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Open Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.2px
  label-sm:
    fontFamily: Open Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.5px
  price-tag:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  screen-gutter: 1rem
  card-gap: 0.75rem
  sheet-bottom-safe: 5.5rem
---

## Brand & Style

This design system delivers a vibrant, warm, and highly structured mobile-first SPA dining and snack experience tailored for dogs and cats. Designed for conscientious pet parents, the aesthetic balances modern minimalism with bold, playful hospitality cues. 

The emotional signature is clean, dynamic, and wholesome. By relying on expansive ultra-clean backgrounds (#FFFFFF / #FAFAFA), the visual rhythm avoids clutter and highlights appetizing, artisanal pet culinary items. Bold accents drawn from the brand identity—burnt orange warmth, punchy energetic yellow, deep black structure, and electric royal blue focal points—give the interface a crisp, contemporary diner feel.

Iconography relies strictly on Google Material Symbols outlined/rounded variants with no emojis, securing a polished and premium digital product atmosphere. Micro-interactions and transitions are subtle, tactile, and smooth (150ms–200ms ease-out).

## Colors

The palette embraces a high-contrast minimalist foundation anchored by bright, airy surfaces.

- **Primary (`#B85809` - Burnt Orange):** Grounded culinary warmth. Used for primary call-to-action buttons, key price tags, active category indicators, and cart totals.
- **Secondary (`#E6DC00` - Vibrant Yellow):** High-energy attention grabber. Reserved for promotional badges ('Pague 2 Leve 3', 'Destaque'), notification dots, and star ratings. Paired strictly with `#000000` text for maximum legibility and accessibility compliance.
- **Tertiary (`#000DFF` - Electric Royal Blue):** Digital punch accent. Applied strategically to flash deals, interactive highlights, floating cart badge counts, and secondary interactive states.
- **Neutral Core (`#000000` & Grayscale):** Jet black headers and primary text provide crisp definition. Secondary labels utilize `#595959` and subtle borders leverage `#EBEBEB`.
- **Canvas & Surfaces:** Pure `#FFFFFF` for primary cards and elevated sheets, set against `#FAFAFA` background canvas for soft surface separation without visual noise.

## Typography

Typography establishes an appetizing editorial balance:
- **Headings (Poppins):** Geometric, welcoming, and expressive. Used for product titles, restaurant sections, sheet modals, and category tabs.
- **Body & Labels (Open Sans):** Highly legible, humanistic, and balanced. Ensures effortless parsing of ingredients, dietary notices, calorie details, and transactional data across compact mobile viewports.
- Promotional tags and unit prices utilize weighted numeric styles to enable quick price discovery at a glance.

## Layout & Spacing

This system follows a strict 4px/8px base spacing grid optimized for vertical SPA mobile browsing:
- **Mobile Container:** Fluid width bounded to a maximum width of 480px on larger viewports, centered with an ultra-clean ambient canvas.
- **Grid Layout:** 
  - Standard product list: 2-column asymmetric or balanced grid with `0.75rem` (12px) gutter.
  - Horizontal carousel: Edge-to-edge swipe with `1rem` inset margin snap.
- **Safe Clearance:** A bottom clearance buffer (`5.5rem` / 88px) is enforced across all scrollable views to preserve clickability above the floating cart trigger bar and sticky action navigation.

## Elevation & Depth

To maintain a crisp, clean aesthetic without muddying the white backdrop, elevation relies on subtle surface layering and crisp border definition rather than deep shadows:

- **Level 0 (Base Canvas):** Background color `#FAFAFA` with flat layout containers.
- **Level 1 (Cards & Chips):** Pure `#FFFFFF` surface accompanied by a hairline border (`1px solid #F0F0F0`) and an ambient glow: `0 2px 8px rgba(0, 0, 0, 0.04)`.
- **Level 2 (Hover & Active Card States):** `0 8px 20px rgba(184, 88, 9, 0.08)`, subtle upward translation (-2px) on touch or pointer interactions.
- **Level 3 (Floating Cart Bar & Action Sheet):** Backdrop filter blur (`backdrop-filter: blur(12px)` with `#FFFFFFEE`) anchored by `0 -4px 24px rgba(0, 0, 0, 0.08)`.
- **Level 4 (Bottom Sheet Modal & Dialogs):** `#FFFFFF` paired with an overlay tint (`rgba(0, 0, 0, 0.45)`) and depth shadow `0 -8px 32px rgba(0, 0, 0, 0.16)`.

## Shapes

The interface embraces approachable curvature to communicate pet friendliness while retaining modern UI discipline:
- **Default Elements (`0.5rem` / 8px):** Quantity adjusters, input fields, checkboxes, and informational callout containers.
- **Cards & Sheet Modals (`1rem` to `1.5rem` / 16px–24px):** Product cards use `16px` corner radius. Bottom sheets adopt `24px` top border radii for a smooth tactile slide-up gesture.
- **Badges & Pills (`9999px`):** Promo tags ('Pague 2 Leve 3'), category pills, filter chips, and primary CTA buttons use full rounded capsules for thumb-friendly ergonomics.

## Components

### 1. Buttons
- **Primary Action Button:** Background `#B85809`, text `#FFFFFF`, Poppins SemiBold, 48px min height, fully pill-rounded (`rounded-full`). Micro-transition on tap: `transform: scale(0.98)` with 150ms ease.
- **Secondary / Quick Add (`+`):** Pill or circle action button in `#000000` or `#B85809` outline, providing quick tap additions directly from product lists.
- **Ghost Button:** Transparent background, `#000000` text with subtle `#EBEBEB` border.

### 2. Promotional Badges
- **'Pague 2 Leve 3' & Super Deals:** Solid `#E6DC00` fill with `#000000` bold text in uppercase label style. Positioned on the top-left corner of product photos.
- **Percentage Off ('20% OFF'):** High-visibility pill with `#000DFF` background and `#FFFFFF` bold typography for instant coupon identification.

### 3. Product Cards
- Elevated `#FFFFFF` surfaces with isolated photography against neutral backgrounds.
- Contains: Category tag, title, weight/dietary chip (e.g., *100% Natural*), bold price tag in `#B85809`, and an integrated stepper or rapid "+" button with smooth state feedback.

### 4. Floating Cart & Bottom Sheet
- **Floating Bottom Bar:** Sticky bar hovering 16px above screen bottom, featuring total items count in an electric blue (`#000DFF`) pill badge, total price, and a direct checkout CTA.
- **Expanded Bottom Sheet:** Draggable sheet with drag handle (`4px` height, `#E0E0E0`), detailed breakdown of chosen dog and cat treats, delivery estimate, and one-tap order confirmation.

### 5. Chips & Category Filter
- Horizontal scrolling pill group for menu sections (*Cães*, *Gatos*, *Naturais*, *Biscoitos*, *Congelados*).
- Active state: `#B85809` fill with `#FFFFFF` text. Inactive state: `#FFFFFF` fill, `#000000` text, and `1px solid #EBEBEB` border.

### 6. Form Inputs & Steppers
- Inputs feature crisp 1px borders in `#EBEBEB`, shifting to `#B85809` focus ring on activation.
- Steppers (Quantity `-` / `+`): Compact pill cluster with haptic touch feel, high contrast counter number, and smooth disabled state when reaching zero.