# Podium Design System - Tags/Chips Component Specification

## Overview
Tags (also known as chips or badges) are compact UI elements used to label, categorize, or organize content. They help users quickly identify attributes, statuses, or categories. Tags can be static (display-only) or interactive (dismissible/clickable).

## Common Properties

### Layout & Structure
- **Height:** 28px (default), 24px (small), 32px (large)
- **Border Radius:** 14px (fully rounded, pill shape)
- **Padding:** `6px 12px` (default), `4px 10px` (small), `8px 14px` (large)
- **Gap (Icon + Text):** `6px` (`--spacing-2`)
- **Border Width:** `1px` (outlined variant only)
- **Min Width:** Fit content (auto)
- **Max Width:** 200px (with text truncation)

### Typography
- **Default:** Use `instrument.body.small` (Inter, 14px, Regular 400)
- **Small:** 12px, Regular 400 (Inter)
- **Large:** 14px, Medium 500 (Inter)
- **Line Height:** 20px (default)
- **Letter Spacing:** 0

### Icon Properties
- **Size:** 16px x 16px (default), 14px (small), 18px (large)
- **Position:** Left or right of text
- **Close Icon:** 14px x 14px, right-aligned

## Tag Variants

### 1. Filled Tag (Primary)
Solid background with contrasting text, used for high emphasis.

**Default (Neutral):**
- **Background:** `#E5E7EB` (`--neutral-200`)
- **Text Color:** `#1F2937` (`--neutral-800`)
- **Border:** None

**Brand (Podiem):**
- **Background:** `#0049E6` (`--podiem-500`)
- **Text Color:** `#FFFFFF`
- **Border:** None

**Secondary (Pecton):**
- **Background:** `#3CB9F0` (`--pecton-500`)
- **Text Color:** `#FFFFFF`
- **Border:** None

**Accent (Electric):**
- **Background:** `#5EF9F6` (`--electric-500`)
- **Text Color:** `#0B4A4A` (`--electric-900`)
- **Border:** None

**States:**
- **Hover:** Darken background by 10% (e.g., Podiem 600)
- **Active:** Darken background by 20% (e.g., Podiem 700)
- **Focus:** Outline `2px solid #0049E6` (`--focus-ring`), offset `2px`
- **Disabled:** Background `#F3F4F6` (`--neutral-100`), Text `#9CA3AF` (`--neutral-400`)

### 2. Outlined Tag
Border with transparent background, used for medium emphasis.

**Default (Neutral):**
- **Background:** Transparent
- **Text Color:** `#374151` (`--neutral-700`)
- **Border:** `1px solid #D1D5DB` (`--neutral-300`)

**Brand (Podiem):**
- **Background:** Transparent
- **Text Color:** `#0049E6` (`--podiem-500`)
- **Border:** `1px solid #0049E6` (`--podiem-500`)

**Secondary (Pecton):**
- **Background:** Transparent
- **Text Color:** `#3CB9F0` (`--pecton-500`)
- **Border:** `1px solid #3CB9F0` (`--pecton-500`)

**States:**
- **Hover:** Background `#F9FAFB` (`--neutral-50`), Border darkens
- **Active:** Background `#F3F4F6` (`--neutral-100`)
- **Focus:** Outline `2px solid #0049E6`, offset `2px`
- **Disabled:** Border `#E5E7EB`, Text `#9CA3AF`

### 3. Subtle Tag (Light)
Very light background with colored text, used for low emphasis.

**Default (Neutral):**
- **Background:** `#F9FAFB` (`--neutral-50`)
- **Text Color:** `#6B7280` (`--neutral-500`)
- **Border:** None

**Brand (Podiem):**
- **Background:** `#EBF2FF` (`--podiem-50`)
- **Text Color:** `#00339E` (`--podiem-700`)
- **Border:** None

**Secondary (Pecton):**
- **Background:** `#F0FBFF` (`--pecton-50`)
- **Text Color:** `#1F7BA3` (`--pecton-700`)
- **Border:** None

**States:**
- **Hover:** Background darkens to 100 level (e.g., Podiem 100)
- **Active:** Background darkens to 200 level
- **Focus:** Outline `2px solid #0049E6`, offset `2px`

### 4. Semantic Tags
Tags for status and feedback purposes.

**Success:**
- **Background (Filled):** `#16A34A` (`--success-500`)
- **Background (Subtle):** `#F0FDF4` (`--success-50`)
- **Text (Filled):** `#FFFFFF`
- **Text (Subtle):** `#166534` (`--success-700`)
- **Icon Color:** Matches text color

**Warning:**
- **Background (Filled):** `#F59E0B` (`--warning-500`)
- **Background (Subtle):** `#FFFBEB` (`--warning-50`)
- **Text (Filled):** `#FFFFFF`
- **Text (Subtle):** `#B45309` (`--warning-700`)

**Error:**
- **Background (Filled):** `#DC2626` (`--error-500`)
- **Background (Subtle):** `#FEF2F2` (`--error-50`)
- **Text (Filled):** `#FFFFFF`
- **Text (Subtle):** `#991B1B` (`--error-700`)

**Info:**
- **Background (Filled):** `#0284C7` (`--info-500`)
- **Background (Subtle):** `#F0F9FF` (`--info-50`)
- **Text (Filled):** `#FFFFFF`
- **Text (Subtle):** `#075985` (`--info-700`)

## Size Variants

### Small Tag
**Dimensions:**
- **Height:** 24px
- **Padding:** `4px 10px`
- **Font Size:** 12px
- **Icon Size:** 14px x 14px
- **Border Radius:** 12px

**Use Cases:** Compact lists, dense tables, inline tags

### Default Tag
**Dimensions:**
- **Height:** 28px
- **Padding:** `6px 12px`
- **Font Size:** 14px
- **Icon Size:** 16px x 16px
- **Border Radius:** 14px

**Use Cases:** General purpose, cards, filters

### Large Tag
**Dimensions:**
- **Height:** 32px
- **Padding:** `8px 14px`
- **Font Size:** 14px (Medium 500)
- **Icon Size:** 18px x 18px
- **Border Radius:** 16px

**Use Cases:** Hero sections, prominent categorization

## Interactive Features

### Dismissible Tag
Tags with a close button for removal.

**Close Button:**
- **Size:** 14px x 14px
- **Color:** `#6B7280` (`--text-secondary`)
- **Position:** Right side, `4px` margin from edge
- **Hover:** Background `rgba(0, 0, 0, 0.1)`, rounded `50%`
- **Active:** Background `rgba(0, 0, 0, 0.15)`

**Layout:**
```
┌─────────────────────────┐
│ [Icon] Label Text    [×]│
└─────────────────────────┘
```

### Clickable Tag
Tags that act as buttons or links.

**Properties:**
- **Cursor:** Pointer
- **Transition:** All 150ms ease
- **Hover:** Scale slightly (1.02), add shadow
- **Active:** Scale down (0.98)
- **Focus:** Add focus ring

### With Icon
Tags with leading or trailing icons.

**Icon Positions:**
- **Leading:** Icon on left, `6px` gap before text
- **Trailing:** Icon on right, `6px` gap after text
- **Icon Only:** No text, `8px` padding on all sides, square aspect

**Common Icons:**
- Status indicators (checkmark, warning, info)
- Categories (tag, folder, user)
- Actions (link, download, share)

## Accessibility (WCAG 2.1 AA)

### Requirements
- **Color Contrast:** Text meets 4.5:1 ratio against background
- **Focus Indicator:** Visible focus ring with 3:1 contrast
- **Screen Reader:** Use `role="status"` for status tags
- **Keyboard:** Tab to focus, Enter/Space to activate, Delete to dismiss
- **Size:** Minimum touch target 24px x 24px (already met)

### ARIA Attributes
```html
<!-- Static tag -->
<span class="tag" role="status">Label</span>

<!-- Clickable tag -->
<button class="tag" aria-label="Filter by category">Category</button>

<!-- Dismissible tag -->
<div class="tag">
  <span>Label</span>
  <button aria-label="Remove tag" class="tag-close">×</button>
</div>
```

## Figma Implementation Guide

### Building in Figma

**Step 1: Create Base Rectangle**
1. Create rectangle: 28px height, auto width
2. Set border radius: 14px
3. Add horizontal padding: 12px
4. Name layer: "Tag / Base"

**Step 2: Add Auto Layout**
1. Select rectangle
2. Add auto layout (Shift+A)
3. Set horizontal layout
4. Padding: 6px vertical, 12px horizontal
5. Gap between items: 6px
6. Set "Hug contents" for width

**Step 3: Add Text**
1. Add text layer: "Label"
2. Font: Inter Regular 400
3. Size: 14px
4. Line height: 20px
5. Color: Based on variant

**Step 4: Add Icon (Optional)**
1. Add icon frame: 16px x 16px
2. Place before or after text
3. Auto layout will maintain 6px gap

**Step 5: Create Component**
1. Select all layers
2. Create component (Ctrl+Alt+K / Cmd+Opt+K)
3. Name: "Tag / Filled / Default"

**Step 6: Create Variants**
1. Create variants for:
   - Style: Filled, Outlined, Subtle
   - Color: Default, Brand, Success, Warning, Error, Info
   - Size: Small, Default, Large
   - State: Default, Hover, Active, Disabled
   - Features: Default, With Icon, Dismissible

**Component Properties:**
- Boolean: `hasIcon`, `isDismissible`
- Variant: `style`, `color`, `size`, `state`
- Text: `label` (text content)

### Figma Component Structure
```
Tag Component Set
├── Filled
│   ├── Default (Neutral)
│   ├── Brand (Podiem)
│   ├── Secondary (Pecton)
│   ├── Success
│   ├── Warning
│   ├── Error
│   └── Info
├── Outlined
│   └── (Same color variants)
└── Subtle
    └── (Same color variants)

Each variant includes:
├── States: Default, Hover, Active, Disabled
└── Features: With Icon, Dismissible
```

### Design Tokens in Figma
Create Figma variables for:
```
- tag/padding-x: 12px
- tag/padding-y: 6px
- tag/radius: 14px
- tag/gap: 6px
- tag/height: 28px
- tag/font-size: 14px
- tag/icon-size: 16px
```

## CSS Implementation

### Base CSS Structure
```css
/* Base Tag Styles */
.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1, 6px);
  height: 28px;
  padding: 6px 12px;
  border-radius: 14px;
  font-family: var(--font-family-inter);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  transition: all 150ms ease;
  user-select: none;
}

/* Filled Variants */
.tag-filled-default {
  background-color: var(--neutral-200, #E5E7EB);
  color: var(--neutral-800, #1F2937);
  border: none;
}

.tag-filled-brand {
  background-color: var(--podiem-500, #0049E6);
  color: #FFFFFF;
  border: none;
}

.tag-filled-secondary {
  background-color: var(--pecton-500, #3CB9F0);
  color: #FFFFFF;
  border: none;
}

.tag-filled-accent {
  background-color: var(--electric-500, #5EF9F6);
  color: var(--electric-900, #0B4A4A);
  border: none;
}

.tag-filled-success {
  background-color: var(--success-500, #16A34A);
  color: #FFFFFF;
  border: none;
}

.tag-filled-warning {
  background-color: var(--warning-500, #F59E0B);
  color: #FFFFFF;
  border: none;
}

.tag-filled-error {
  background-color: var(--error-500, #DC2626);
  color: #FFFFFF;
  border: none;
}

.tag-filled-info {
  background-color: var(--info-500, #0284C7);
  color: #FFFFFF;
  border: none;
}

/* Outlined Variants */
.tag-outlined-default {
  background-color: transparent;
  color: var(--neutral-700, #374151);
  border: 1px solid var(--neutral-300, #D1D5DB);
  padding: 5px 11px; /* Adjust for border */
}

.tag-outlined-brand {
  background-color: transparent;
  color: var(--podiem-500, #0049E6);
  border: 1px solid var(--podiem-500, #0049E6);
  padding: 5px 11px;
}

.tag-outlined-secondary {
  background-color: transparent;
  color: var(--pecton-500, #3CB9F0);
  border: 1px solid var(--pecton-500, #3CB9F0);
  padding: 5px 11px;
}

.tag-outlined-success {
  background-color: transparent;
  color: var(--success-600, #15803D);
  border: 1px solid var(--success-500, #16A34A);
  padding: 5px 11px;
}

.tag-outlined-warning {
  background-color: transparent;
  color: var(--warning-600, #D97706);
  border: 1px solid var(--warning-500, #F59E0B);
  padding: 5px 11px;
}

.tag-outlined-error {
  background-color: transparent;
  color: var(--error-600, #B91C1C);
  border: 1px solid var(--error-500, #DC2626);
  padding: 5px 11px;
}

.tag-outlined-info {
  background-color: transparent;
  color: var(--info-600, #0369A1);
  border: 1px solid var(--info-500, #0284C7);
  padding: 5px 11px;
}

/* Subtle Variants */
.tag-subtle-default {
  background-color: var(--neutral-50, #F9FAFB);
  color: var(--neutral-500, #6B7280);
  border: none;
}

.tag-subtle-brand {
  background-color: var(--podiem-50, #EBF2FF);
  color: var(--podiem-700, #00339E);
  border: none;
}

.tag-subtle-secondary {
  background-color: var(--pecton-50, #F0FBFF);
  color: var(--pecton-700, #1F7BA3);
  border: none;
}

.tag-subtle-success {
  background-color: var(--success-50, #F0FDF4);
  color: var(--success-700, #166534);
  border: none;
}

.tag-subtle-warning {
  background-color: var(--warning-50, #FFFBEB);
  color: var(--warning-700, #B45309);
  border: none;
}

.tag-subtle-error {
  background-color: var(--error-50, #FEF2F2);
  color: var(--error-700, #991B1B);
  border: none;
}

.tag-subtle-info {
  background-color: var(--info-50, #F0F9FF);
  color: var(--info-700, #075985);
  border: none;
}

/* Size Variants */
.tag-small {
  height: 24px;
  padding: 4px 10px;
  font-size: 12px;
  line-height: 16px;
  border-radius: 12px;
}

.tag-small.tag-outlined-default,
.tag-small.tag-outlined-brand,
.tag-small.tag-outlined-secondary,
.tag-small.tag-outlined-success,
.tag-small.tag-outlined-warning,
.tag-small.tag-outlined-error,
.tag-small.tag-outlined-info {
  padding: 3px 9px;
}

.tag-large {
  height: 32px;
  padding: 8px 14px;
  font-weight: 500;
  border-radius: 16px;
}

.tag-large.tag-outlined-default,
.tag-large.tag-outlined-brand,
.tag-large.tag-outlined-secondary,
.tag-large.tag-outlined-success,
.tag-large.tag-outlined-warning,
.tag-large.tag-outlined-error,
.tag-large.tag-outlined-info {
  padding: 7px 13px;
}

/* Interactive States */
.tag-clickable {
  cursor: pointer;
}

.tag-clickable:hover {
  transform: scale(1.02);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tag-clickable:active {
  transform: scale(0.98);
}

.tag-clickable:focus {
  outline: 2px solid var(--focus-ring, #0049E6);
  outline-offset: 2px;
}

/* Filled hover states */
.tag-filled-brand.tag-clickable:hover {
  background-color: var(--podiem-600, #003EC2);
}

.tag-filled-secondary.tag-clickable:hover {
  background-color: var(--pecton-600, #2A9CCE);
}

.tag-filled-success.tag-clickable:hover {
  background-color: var(--success-600, #15803D);
}

.tag-filled-warning.tag-clickable:hover {
  background-color: var(--warning-600, #D97706);
}

.tag-filled-error.tag-clickable:hover {
  background-color: var(--error-600, #B91C1C);
}

.tag-filled-info.tag-clickable:hover {
  background-color: var(--info-600, #0369A1);
}

/* Outlined hover states */
.tag-outlined-default.tag-clickable:hover {
  background-color: var(--neutral-50, #F9FAFB);
  border-color: var(--neutral-400, #9CA3AF);
}

.tag-outlined-brand.tag-clickable:hover {
  background-color: var(--podiem-50, #EBF2FF);
  border-color: var(--podiem-600, #003EC2);
}

/* Disabled State */
.tag-disabled,
.tag:disabled {
  background-color: var(--neutral-100, #F3F4F6);
  color: var(--neutral-400, #9CA3AF);
  border-color: var(--neutral-200, #E5E7EB);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Icon Styles */
.tag-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.tag-small .tag-icon {
  width: 14px;
  height: 14px;
}

.tag-large .tag-icon {
  width: 18px;
  height: 18px;
}

/* Close Button */
.tag-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  margin-left: 4px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: currentColor;
  cursor: pointer;
  transition: background-color 150ms ease;
}

.tag-close:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.tag-close:active {
  background-color: rgba(0, 0, 0, 0.15);
}

.tag-close:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 73, 230, 0.5);
}

/* Dismissible tag wrapper */
.tag-dismissible {
  display: inline-flex;
  align-items: center;
}
```

### HTML Examples

**Basic Filled Tag:**
```html
<span class="tag tag-filled-brand">Category</span>
```

**Outlined Tag with Icon:**
```html
<span class="tag tag-outlined-success">
  <svg class="tag-icon" viewBox="0 0 16 16">
    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
  </svg>
  Verified
</span>
```

**Dismissible Tag:**
```html
<span class="tag tag-subtle-brand tag-dismissible">
  <span>JavaScript</span>
  <button class="tag-close" aria-label="Remove tag">
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>
</span>
```

**Clickable Tag:**
```html
<button class="tag tag-outlined-brand tag-clickable">
  Filter
</button>
```

**Small Tag:**
```html
<span class="tag tag-filled-warning tag-small">New</span>
```

**Large Tag:**
```html
<span class="tag tag-subtle-info tag-large">Featured</span>
```

## Usage Guidelines

### When to Use
- **Categorization:** Labeling content with categories or types
- **Status Indicators:** Showing completion, progress, or state
- **Filters:** Displaying active filters or search terms
- **Attributes:** Highlighting key features or properties
- **Keywords:** Displaying tags or keywords for content

### When Not to Use
- **Primary Actions:** Use buttons instead
- **Long Text:** Keep labels concise (1-3 words max)
- **Critical Alerts:** Use banners or modals instead
- **Navigation:** Use tabs or navigation components

### Best Practices
1. **Keep labels short** - Maximum 20 characters
2. **Use consistent colors** - Semantic colors for status, neutral for categories
3. **Limit quantity** - Show 3-5 tags max, use "+2 more" for overflow
4. **Make interactive tags obvious** - Use hover states and cursor changes
5. **Provide context** - Use icons to clarify tag meaning
6. **Ensure accessibility** - Maintain contrast ratios and keyboard navigation

### Tag Groups
When displaying multiple tags:
```css
.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
```

```html
<div class="tag-group">
  <span class="tag tag-subtle-brand">React</span>
  <span class="tag tag-subtle-brand">TypeScript</span>
  <span class="tag tag-subtle-brand">CSS</span>
  <button class="tag tag-outlined-default tag-small">+3 more</button>
</div>
```

## Responsive Behavior

### Mobile (<768px)
- Use small variant by default for space efficiency
- Stack tags vertically in tight spaces
- Increase touch target to minimum 44px x 44px for dismissible tags
- Consider horizontal scrolling for tag groups

### Tablet (768px - 1023px)
- Use default size
- Wrap tags in flexible containers
- Maintain spacing between tags

### Desktop (≥1024px)
- Use default or large sizes
- Display inline with content
- Allow hover interactions

## Design Tokens Reference

### Spacing
- `--spacing-1`: 6px (gap, close button margin)
- `--spacing-2`: 8px (tag group gap)
- `--spacing-3`: 12px (padding horizontal)

### Colors
- Reference `podiem-color-palette.js` for all color variants
- Use semantic colors for status tags
- Use neutral colors for category tags

### Typography
- `instrument.body.small`: 14px, Regular 400 (default tag text)
- 12px Regular for small tags
- 14px Medium 500 for large tags

## Related Components
- **Badge:** For notification counts
- **Chip:** Similar to tags (same component)
- **Pill:** Rounded button-like element
- **Label:** Form field labels (different purpose)
