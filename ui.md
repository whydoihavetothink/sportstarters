# Sportstarters — Style, Colors & Spacing Summary

## Typography

| Role     | Font           | Weights       | Usage                  |
|----------|----------------|---------------|------------------------|
| Display  | Space Grotesk  | 500, 600, 700 | All headings (h1–h6)  |
| Body     | DM Sans        | 400–700       | Body text, UI elements |

Both loaded via Google Fonts. Applied globally: headings get `font-display`, body gets `font-body`.

## Color Palette (Light Mode — HSL)

| Token              | HSL Value          | Approx. Color              | Role                        |
|--------------------|--------------------|----------------------------|-----------------------------|
| `background`       | 40 20% 97%         | Warm off-white             | Page background             |
| `foreground`       | 220 20% 14%        | Near-black blue-grey       | Primary text                |
| `primary`          | 210 85% 48%        | Fresh blue (#1277d4)       | Links, active states        |
| `primary-foreground` | 0 0% 100%        | White                      | Text on primary             |
| `secondary`        | 210 30% 94%        | Very light blue            | Badges, soft backgrounds    |
| `accent`           | 24 95% 56%         | Vibrant orange (#f28a18)   | CTA buttons only            |
| `muted`            | 220 14% 92%        | Light grey                 | Subtle backgrounds          |
| `muted-foreground` | 220 10% 46%        | Mid grey                   | Secondary/helper text       |
| `surface`          | 0 0% 100%          | Pure white                 | Card/section backgrounds    |
| `border`           | 220 14% 90%        | Light grey                 | Borders, dividers           |
| `destructive`      | 0 84% 60%          | Red                        | Error/danger states         |

Dark mode inverts these (dark blue-grey backgrounds, lighter text) while keeping accent orange constant.

## Border Radius

| Token | Value                         |
|-------|-------------------------------|
| `lg`  | 0.75rem (12px) — base radius  |
| `md`  | calc(0.75rem - 2px) = 10px    |
| `sm`  | calc(0.75rem - 4px) = 8px     |

Buttons use `rounded-lg` (default), `rounded-md` (sm), `rounded-xl` (xl size).

## Spacing & Layout

### Section Padding (`.section-padding`)

    px-5  py-16          (mobile)
    md:px-8  md:py-24    (tablet+)
    lg:py-28             (desktop)

### Container Widths

| Class              | Max Width |
|--------------------|-----------|
| `.container-narrow` | max-w-3xl (48rem / 768px) |
| `.container-wide`   | max-w-5xl (64rem / 1024px) |
| Default `container` | max-w-[1400px] at 2xl, 2rem padding |

All containers are horizontally centered (`mx-auto`).

### Navbar

- Sticky top, height `h-16` (4rem)
- `bg-background/80` with `backdrop-blur-lg`
- Bottom border `border-b border-border`

## Button Variants

| Variant           | Style                                                    |
|-------------------|----------------------------------------------------------|
| `default`         | Blue bg, white text, subtle shadow                       |
| `cta`             | Orange bg, white text, shadow-md, lifts on hover (-0.5)  |
| `outline-primary` | Blue 2px border, fills blue on hover                     |
| `secondary`       | Light blue bg, blue text                                 |
| `ghost`           | Transparent, accent bg on hover                          |
| `link`            | Blue text, underline on hover                            |

### Button Sizes

    sm:  h-9,  px-3
    default: h-10, px-4
    lg:  h-12, px-8,  text-base
    xl:  h-14, px-10, text-lg

## Animations

| Name        | Duration | Easing   | Effect                     |
|-------------|----------|----------|----------------------------|
| `fade-up`   | 0.5s     | ease-out | Opacity 0→1, translateY 20→0 |
| `accordion` | 0.2s     | ease-out | Height expand/collapse     |

Hero section uses Framer Motion for the initial `fade-up` entrance.

## Key Design Rules

1. **Orange is CTA-only** — never used for passive elements
2. **Blue is the trust color** — primary actions, links, active states
3. **Off-white background** — warm, not stark white
4. **Minimal, modern, energetic** — clean spacing, no clutter
5. **All global borders** default to `border-border` via the base layer reset
