# Podium Design System - Modal Component Specification

## Overview
Modals (also known as dialogs or overlays) are UI components that appear on top of the main content to focus user attention on a specific task or information. They temporarily block interaction with the underlying page until the user completes an action or dismisses the modal. Modals should be used sparingly for critical workflows, confirmations, or complex forms that require undivided attention.

## Common Properties

### Layout & Structure
- **Overlay Background:** `rgba(0, 0, 0, 0.6)` (`--modal-overlay`)
- **Modal Background:** `#FFFFFF` (`--modal-bg`)
- **Border Radius:** `12px`
- **Border:** `1px solid #E5E7EB` (`--modal-border`)
- **Elevation:** `--elevation-5` (0px 12px 24px rgba(0, 0, 0, 0.1))
- **Shadow:** `rgba(0, 0, 0, 0.2)` (`--modal-shadow`)
- **Z-index:** `1000` (or appropriate layer above main content)

### Sizing Variants
Modals come in predefined sizes to accommodate different content types:

| Size | Width | Min Height | Max Height | Use Case |
|------|-------|------------|------------|----------|
| **Small** | 400px | 200px | 90vh | Simple confirmations, alerts |
| **Medium** | 600px | 300px | 90vh | Forms with moderate content, settings |
| **Large** | 800px | 400px | 90vh | Complex forms, detailed information |
| **Full** | 95vw | 95vh | 95vh | Data tables, image galleries, editors |

**Note:** All modals have a maximum width of `95vw` and maximum height of `95vh` to ensure responsiveness on smaller screens.

## Anatomy

### 1. Header Section
- **Padding:** `24px` (`--spacing-5`)
- **Border Bottom:** `1px solid #E5E7EB` (`--border-default`)
- **Background:** `#FFFFFF` (`--modal-bg`)

**Header Title:**
- **Typography:** Inter, 20px, Semi-Bold (600) - Create `instrument.modal.title` following type scale
- **Color:** `#111827` (`--text-primary`)
- **Line Height:** `28px`

**Close Button:**
- **Position:** Top-right corner, absolute positioning
- **Size:** 32px x 32px
- **Icon:** Close/X icon, 20px
- **Icon Color:** `#6B7280` (`--text-secondary`)
- **Background:** Transparent
- **Border Radius:** `6px`
- **Padding:** `6px`
- **States:**
  - Hover: Background `#F3F4F6` (`--surface-hover`)
  - Active: Background `#E5E7EB` (`--surface-active`)
  - Focus: Outline `2px solid #0049E6` (`--focus-ring`), offset `2px`

### 2. Content Section
- **Padding:** `24px` (`--spacing-5`)
- **Background:** `#FFFFFF` (`--modal-bg`)
- **Overflow:** Auto (vertical scroll if content exceeds max height)
- **Max Height:** Calculated as modal height minus header and footer

**Content Typography:**
- **Body Text:** Use `instrument.body.default` (Inter, 16px, Regular 400)
- **Color:** `#374151` (`--text-primary`)
- **Line Height:** `24px`
- **Spacing:** `16px` (`--spacing-3`) between paragraphs

### 3. Footer Section
- **Padding:** `24px` (`--spacing-5`)
- **Border Top:** `1px solid #E5E7EB` (`--border-default`)
- **Background:** `#F9FAFB` (`--background-subtle`)
- **Layout:** Flex, justify-content: flex-end, gap: `12px` (`--spacing-2`)

**Footer Actions:**
- Use standard button components (Primary, Secondary, Tertiary)
- **Button Order:** Destructive/Cancel (left) → Primary Action (right)
- **Minimum Buttons:** 1 (typically "Close" or "Cancel")
- **Maximum Buttons:** 3 (to avoid decision paralysis)

## Modal Variants

### 1. Standard Modal
General-purpose modal for forms, content display, and user interactions.

**Properties:**
- **Header:** Always present with title and close button
- **Content:** Scrollable if needed
- **Footer:** Present with action buttons
- **Dismissible:** Yes (via close button, overlay click, or ESC key)

**Use Cases:**
- Forms (user settings, create/edit items)
- Content previews
- Multi-step workflows

### 2. Confirmation Modal (Alert)
Used for critical actions requiring user confirmation.

**Properties:**
- **Size:** Small (400px)
- **Header:** Title describing the action
- **Content:** Clear explanation of consequences
- **Footer:** Two buttons (Cancel + Confirm)
- **Icon:** Optional warning/info icon in content area
- **Dismissible:** Yes (defaults to "Cancel" action)

**Visual Emphasis:**
- **Confirm Button (Destructive):** Use error color `#DC2626` (`--error-icon`) for delete/destructive actions
- **Confirm Button (Non-destructive):** Use primary button style

**Example Actions:**
- "Delete Item?" → Cancel / Delete
- "Save Changes?" → Discard / Save
- "Leave Page?" → Stay / Leave

### 3. Information Modal
Displays read-only information without requiring significant user action.

**Properties:**
- **Size:** Medium (600px)
- **Header:** Informational title
- **Content:** Rich content (text, images, lists)
- **Footer:** Single button ("Close" or "Got It")
- **Dismissible:** Yes (any dismiss method)

**Use Cases:**
- Help documentation
- Terms and conditions
- Feature announcements
- Success messages with details

### 4. Form Modal
Contains input fields and form controls.

**Properties:**
- **Size:** Medium to Large (600px - 800px)
- **Header:** Form title
- **Content:** Form fields with validation
- **Footer:** Cancel + Submit buttons
- **Dismissible:** Yes (with unsaved changes warning)

**Validation:**
- Inline validation for fields
- Error messages below inputs
- Disable submit button until form is valid

### 5. Full-Screen Modal
Takes up most of the viewport for complex interfaces.

**Properties:**
- **Size:** Full (95vw x 95vh)
- **Header:** Always visible (sticky)
- **Content:** Complex layouts (tables, editors, galleries)
- **Footer:** Always visible (sticky)
- **Dismissible:** Yes (typically with confirmation if changes exist)

**Use Cases:**
- Data tables with filters
- Rich text editors
- Image galleries
- Multi-step wizards

## Behavior & Interactions

### Opening Animation
- **Duration:** 200ms
- **Easing:** Ease-out
- **Effects:**
  - Overlay: Fade in from 0 to 0.6 opacity
  - Modal: Scale from 0.95 to 1.0 + Fade in from 0 to 1 opacity

### Closing Animation
- **Duration:** 150ms
- **Easing:** Ease-in
- **Effects:**
  - Overlay: Fade out from 0.6 to 0 opacity
  - Modal: Scale from 1.0 to 0.95 + Fade out from 1 to 0 opacity

### Dismiss Methods
1. **Close Button:** Click the X button in header
2. **Overlay Click:** Click outside modal (configurable - can be disabled for critical modals)
3. **ESC Key:** Press ESC key (configurable)
4. **Cancel Button:** Click Cancel/Close in footer
5. **Completion:** Submit form or complete action

### Focus Management
- **On Open:** 
  - Focus moves to first focusable element (usually first input or close button)
  - Trap focus within modal (prevent tabbing to background)
  - Store previous focus location
- **On Close:** 
  - Return focus to the trigger element
  - Release focus trap

### Scroll Behavior
- **Background:** Disable scroll on `<body>` when modal is open
- **Modal Content:** Enable vertical scroll if content exceeds max height
- **Scroll Indicator:** Subtle shadow at top/bottom of content when scrollable

### Keyboard Navigation
- **TAB:** Move focus forward through focusable elements
- **SHIFT + TAB:** Move focus backward
- **ESC:** Close modal (if dismissible)
- **ENTER:** Submit form (when focus is on submit button or form input)

## Accessibility (WCAG 2.1 AA)

### ARIA Attributes
```html
<div role="dialog" 
     aria-modal="true" 
     aria-labelledby="modal-title" 
     aria-describedby="modal-description">
  <div id="modal-title">Modal Title</div>
  <div id="modal-description">Modal content description</div>
</div>
```

### Requirements
- **Focus Trap:** Focus must remain within modal
- **Focus Return:** Focus returns to trigger on close
- **Screen Reader:** Announce modal opening
- **Keyboard:** All functionality accessible via keyboard
- **Color Contrast:** Text meets 4.5:1 contrast ratio
- **Close Methods:** Provide multiple ways to dismiss

### Best Practices
- Limit modals to one at a time (avoid stacking)
- Provide clear, descriptive titles
- Use concise, actionable button labels
- Avoid auto-opening modals
- Ensure mobile responsiveness

## Responsive Behavior

### Desktop (≥1024px)
- Use specified width variants (400px, 600px, 800px)
- Centered in viewport
- Padding: 24px on all sides

### Tablet (768px - 1023px)
- Max width: 90vw
- Padding: 20px
- Adjust content layout if needed

### Mobile (≤767px)
- **Width:** 95vw
- **Height:** Auto (can go up to 95vh)
- **Border Radius:** 12px (maintain visual consistency)
- **Padding:** 16px (`--spacing-3`)
- **Footer:** Stack buttons vertically on very small screens (<400px)
- **Full-Screen Option:** Consider full-screen takeover for complex modals

## Examples

### Example 1: Confirmation Modal (Delete Action)
```
┌─────────────────────────────────────┐
│ Delete Project                    × │ ← Header
├─────────────────────────────────────┤
│                                     │
│ ⚠️ Are you sure you want to delete  │
│    "Website Redesign"?              │ ← Content
│                                     │
│ This action cannot be undone.       │
│                                     │
├─────────────────────────────────────┤
│                 [Cancel] [Delete]   │ ← Footer
└─────────────────────────────────────┘
          ↑ Overlay (60% black)
```

### Example 2: Form Modal (Edit User)
```
┌──────────────────────────────────────────┐
│ Edit User Profile                      × │
├──────────────────────────────────────────┤
│                                          │
│ Name                                     │
│ [John Doe...........................]    │
│                                          │
│ Email                                    │
│ [john.doe@example.com...............]    │
│                                          │
│ Role                                     │
│ [Administrator ▼]                        │
│                                          │
├──────────────────────────────────────────┤
│                       [Cancel] [Save]    │
└──────────────────────────────────────────┘
```

## Design Tokens Reference

### Spacing
- `--spacing-2`: 8px (button gap)
- `--spacing-3`: 16px (content spacing)
- `--spacing-4`: 24px (section padding)
- `--spacing-5`: 32px (large padding)

### Elevation
- `--elevation-5`: 0px 12px 24px rgba(0, 0, 0, 0.1)

### Colors
- `--modal-bg`: #FFFFFF
- `--modal-overlay`: rgba(0, 0, 0, 0.6)
- `--modal-border`: #E5E7EB
- `--modal-shadow`: rgba(0, 0, 0, 0.2)
- `--text-primary`: #111827
- `--text-secondary`: #6B7280
- `--border-default`: #E5E7EB
- `--background-subtle`: #F9FAFB

## Implementation Notes

### HTML Structure
```html
<div class="modal-overlay" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal-header">
      <h2 id="modal-title" class="modal-title">Modal Title</h2>
      <button class="modal-close" aria-label="Close modal">×</button>
    </div>
    <div class="modal-content" id="modal-description">
      <!-- Modal content here -->
    </div>
    <div class="modal-footer">
      <button class="button-secondary">Cancel</button>
      <button class="button-primary">Confirm</button>
    </div>
  </div>
</div>
```

### CSS Classes
- `.modal-overlay`: Full-screen overlay
- `.modal`: Modal container
- `.modal-header`: Header section
- `.modal-title`: Title text
- `.modal-close`: Close button
- `.modal-content`: Content section
- `.modal-footer`: Footer section
- `.modal-small`: 400px width
- `.modal-medium`: 600px width
- `.modal-large`: 800px width
- `.modal-full`: 95vw x 95vh

### JavaScript Behavior
- Manage focus trap
- Handle ESC key
- Handle overlay click
- Prevent body scroll
- Animate open/close
- Return focus on close

## Related Components
- **Banner:** For non-blocking notifications
- **Tooltip:** For contextual help without blocking
- **Drawer:** For side panels that slide in
- **Popover:** For lightweight overlays tied to specific elements
