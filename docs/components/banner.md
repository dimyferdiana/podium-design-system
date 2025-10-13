# Podium Design System – Banner Component Specification

## Overview
A banner is a prominent UI element used to communicate important information, feedback, or status to users. Banners appear at the top of a page or section and can be used for info, success, warning, or error messages. They should be visually distinct, accessible, and consistent with the Podium design system.

## Common Properties
- **Width:** 100% of container (responsive)
- **Min Height:** 48px
- **Border Radius:** 8px
- **Padding:** 16px 24px (spacing-4 spacing-5)
- **Margin:** 0 0 16px 0 (spacing-4 below)
- **Elevation:** Level 4 (`0 8px 24px rgba(0, 0, 0, 0.25)`)
- **Layout:** Flex, align-items: center, gap: 16px (spacing-4)
- **Icon Size:** 24px x 24px
- **Dismiss Button:** Optional, right-aligned, icon-only, 24px

## Typography
- **Title:** Use `instrument.body.default` (Inter, 16px, Regular 400) for the banner title. If a distinct style is needed, create `instrument.banner.title` following the type scale and naming convention.
- **Message:** Use `instrument.body.small` (Inter, 14px, Regular 400) for the banner message. If a distinct style is needed, create `instrument.banner.message` following the type scale and naming convention.
  
Colors for both depend on the banner variant (see below).

## Variants

### Info Banner
- **Background:** `#F0F9FF` (Info 50)
- **Border:** `1px solid #38BDF8` (Info 400)
- **Icon:** Info icon, `#0284C7` (Info 500)
- **Title/Message Color:** `#075985` (Info 700)

### Success Banner
- **Background:** `#F0FDF4` (Success 50)
- **Border:** `1px solid #4ADE80` (Success 400)
- **Icon:** Success icon, `#16A34A` (Success 500)
- **Title/Message Color:** `#166534` (Success 700)

### Warning Banner
- **Background:** `#FFFBEB` (Warning 50)
- **Border:** `1px solid #FBBF24` (Warning 400)
- **Icon:** Warning icon, `#F59E0B` (Warning 500)
- **Title/Message Color:** `#B45309` (Warning 700)

### Error Banner
- **Background:** `#FEF2F2` (Error 50)
- **Border:** `1px solid #F87171` (Error 400)
- **Icon:** Error icon, `#DC2626` (Error 500)
- **Title/Message Color:** `#991B1B` (Error 700)

## States
- **Default:** As above
- **Hover:** Slightly darken background (e.g., +5% to color)
- **Focus:** Outline `2px solid #3CB9F0` (Pecton Blue 500), offset `2px`
- **Dismissed:** Hidden/removed from DOM

## Accessibility
- Must be keyboard accessible
- Must have visible focus state
- Use semantic roles: `role="status"` for info/success, `role="alert"` for error/warning
- Dismiss button must have `aria-label` (e.g., "Close banner")
- Sufficient color contrast for all text and icons

## Example
```html
<div class="banner banner--info" role="status">
  <span class="banner__icon">[info icon]</span>
  <div class="banner__content">
    <span class="banner__title">Information</span>
    <span class="banner__message">This is an informational banner.</span>
  </div>
  <button class="banner__dismiss" aria-label="Close banner">&times;</button>
</div>
```

---

By following this specification, banners will be visually consistent, accessible, and effective for communicating important information in the Podium design system.
