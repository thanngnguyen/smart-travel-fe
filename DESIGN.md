# Design System Document: The Smart Travel Management System (STMS)

## 1. Overview & Creative North Star: "The Digital Concierge"
This design system moves away from the rigid, boxy layouts of traditional travel platforms toward an experience we call **"The Digital Concierge."** The goal is to blend the authoritative reliability of a premium global bank with the fluid, anticipatory service of a five-star resort.

We break the "template" look through **Intentional Asymmetry** and **Tonal Depth**. Instead of standard grids, we use overlapping elements and cinematic white space to guide the eye. The UI doesn't just display data; it curates an itinerary. We prioritize "Breathing Room" over "Information Stuffing," ensuring that even complex travel logistics feel seamless and manageable.

---

## 2. Colors & Surface Architecture
The palette is rooted in deep, authoritative blues, but its sophistication comes from how we layer these tones.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be created through background color shifts or subtle tonal transitions.
*   *Example:* A `surface-container-low` sidebar sitting against a `surface` background provides all the definition needed without the "cheapening" effect of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets of frosted glass. Use the `surface-container` tiers to create natural depth:
*   **Base Layer:** `surface` (#f8f9fb) – The canvas.
*   **Sub-Sectioning:** `surface-container-low` (#f3f4f6) – For large background areas.
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) – For primary content blocks that need to "pop."
*   **Elevated Overlays:** `surface-container-high` (#e7e8ea) – For headers or navigation that stay pinned.

### The "Glass & Gradient" Rule
To achieve a premium feel, use **Glassmorphism** for floating elements (like mobile navigation bars or flight status popovers). Utilize `surface` colors at 80% opacity with a `20px backdrop-blur`. 
**Signature Texture:** Use subtle linear gradients (e.g., `primary` #003d9b to `primary_container` #0052cc) for CTA buttons to provide a "jewel-like" depth that feels tactile and high-end.

---

## 3. Typography: The Editorial Scale
We use a dual-font approach to balance personality with utility.

*   **Display & Headlines (Manrope):** This is our "Editorial" voice. Use `display-lg` through `headline-sm` to create a sense of scale. The wider apertures of Manrope feel modern and welcoming.
*   **Body & Labels (Inter):** Our "Functional" voice. Inter provides maximum legibility for dense travel data, timestamps, and flight numbers.

**Hierarchy as Identity:** 
High-contrast sizing (pairing a `display-md` headline with a `body-sm` caption) mimics high-end travel magazines, moving the system away from "software" and toward "lifestyle."

---

## 4. Elevation & Depth: Tonal Layering
We do not use structural lines. We use light.

*   **The Layering Principle:** Stack `surface-container-lowest` on `surface-container-low` to create a soft "lift."
*   **Ambient Shadows:** For floating elements (Modals/Dropdowns), use ultra-diffused shadows: `box-shadow: 0 20px 40px rgba(25, 28, 30, 0.06)`. The shadow is a tinted version of `on-surface` to feel like natural ambient light.
*   **The Ghost Border Fallback:** If a border is required for accessibility, use `outline-variant` at **15% opacity**. Never use a 100% opaque border.
*   **Glassmorphism:** Use `surface_bright` with 70% opacity and `blur(12px)` for mobile Guide interfaces to allow cinematic imagery to bleed through the UI.

---

## 5. Component Strategy

### Buttons & Interaction
*   **Primary CTA:** Gradient fill (`primary` to `primary_container`), `xl` (1.5rem) roundedness. No border.
*   **Secondary/Ghost:** `outline-variant` (at 20% opacity) with `on_surface` text.
*   **The "Travel Pulse":** Interactive elements for Guides use a subtle `primary` glow animation to indicate real-time updates.

### Cards & Data
*   **Customer Cards:** Use `rounded-xl` or `rounded-2xl`. No dividers. Use `body-lg` for titles and `surface-container-highest` for subtle backgrounds on metadata chips.
*   **Admin DataTables:** Forgo vertical lines. Use `surface-container-low` for alternating row stripes. Use `label-sm` in all-caps for headers to provide a professional, "dashboard" feel.

### Specialized Travel Components
*   **The AI "Red Flag" Indicator:** Uses `tertiary_container` with `on_tertiary_container` text. It should feel like an urgent, sophisticated warning, not a generic error.
*   **Timeline Trackers:** Use a thick 4px line in `primary_fixed` with `primary` nodes. Avoid thin, spindly lines.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use asymmetric margins (e.g., 64px left, 48px right) in Customer-facing hero sections to create a custom, high-end feel.
*   **DO** use "Cinematic Padding." When in doubt, add more white space between sections.
*   **DO** use `surface_tint` for subtle hover states on cards to create a "magnetic" feel.

### Don’t
*   **DON'T** use 1px solid #CCCCCC borders. Ever.
*   **DON'T** use pure black (#000000) for text. Use `on_surface` (#191c1e) to maintain a soft, premium contrast.
*   **DON'T** crowd the Admin interface. Even "high density" requires `surface-container` nesting to keep data groups distinct.
*   **DON'T** use standard "Drop Shadows." If it doesn't look like a soft glow or natural light, it's too heavy.