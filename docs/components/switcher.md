# Podium Design System - Switcher Component Specification

## Overview
The switcher (toggle switch) is used to represent a boolean option, allowing users to turn settings or features on or off. It should be accessible, visually clear, and consistent with the Podium design system’s color, spacing, and elevation guidelines.

## Visual Properties

- **Width:** 40px
- **Height:** 24px
- **Track Border Radius:** 12px (fully rounded)
- **Thumb Size:** 20px x 20px (circular)
- **Thumb Border Radius:** 50%
- **Track Padding:** 2px (space between track and thumb)
- **Elevation:** None (default), `--elevation-1` (focus)

## States

### Off (Default)
- **Track Color:** `#D1D5DB` (Neutral 300)
- **Thumb Color:** `#FFFFFF` (Neutral 0)
- **Border:** None
- **Shadow:** None

### On (Checked)
- **Track Color:** `#0049E6` (Podiem Blue 500)
- **Thumb Color:** `#FFFFFF` (Neutral 0)
- **Border:** None
- **Shadow:** None

### Hover (Off)
- **Track Color:** `#E5E7EB` (Neutral 200)
- **Thumb Color:** `#F3F4F6` (Neutral 100)

### Hover (On)
- **Track Color:** `#00339E` (Podiem Blue 700)
- **Thumb Color:** `#F3F4F6` (Neutral 100)

### Focus (Both States)
- **Outline:** `2px solid #3CB9F0` (Pecton Blue 500), offset `2px`
- **Elevation:** `--elevation-1` (0px 1px 2px rgba(0, 0, 0, 0.1))

### Disabled (Both States)
- **Track Color:** `#F3F4F6` (Neutral 100)
- **Thumb Color:** `#D1D5DB` (Neutral 300)
- **Opacity:** 0.6
- **Cursor:** not-allowed

## Typography

- **Label Font:** Inter, 16px, Medium (500)
- **Label Color:** `#374151` (Neutral 700)
- **Label Spacing:** 8px (spacing-2) between switch and label

## Spacing

- **Margin:** Use spacing scale from design system (typically spacing-3 or spacing-4 for vertical/horizontal separation)
- **Padding:** Track padding is 2px

## Accessibility

- Must be operable with keyboard (Tab, Space, Enter)
- Must have visible focus state
- Must use semantic `<input type="checkbox" role="switch">`
- Must have an accessible label (visible or via `aria-label`)
- Sufficient color contrast in all states

## Usage Guidelines

1. Use for binary options (on/off, enable/disable).
2. Place label to the right of the switch.
3. Do not use for mutually exclusive options (use radio buttons instead).
4. Provide clear labels for both states if possible.
5. Avoid using switches for actions that take immediate effect without confirmation, unless clearly indicated.

## Example

```html
<label class="switcher">
  <input type="checkbox" role="switch" />
  <span class="switcher-track">
    <span class="switcher-thumb"></span>
  </span>
  <span class="switcher-label">Enable notifications</span>
</label>
```

---

By following this specification, the switcher component will be visually consistent, accessible, and easy to use within the Podium design system.
