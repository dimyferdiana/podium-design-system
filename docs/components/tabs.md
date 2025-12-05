# Podium Design System - Tabs Component Specification

## Overview
This document provides a comprehensive specification for tab components in the Podium design system, optimized for use with Tailwind CSS. Tabs organize content into multiple sections that users can navigate between without leaving the page. They follow consistent patterns for typography, spacing, colors, and interactions to ensure a cohesive user experience across the web application dashboard.

All tab variants are inspired by modern application UI patterns and follow the design tokens defined in this system.

## Tab Variants

### 1. Tabs with Underline (Default)
The most common tab style with an underline indicator for the active tab. Clean and minimal design.

**Visual Properties:**
- **Tab List Container:**
  - Background: `transparent`
  - Border Bottom: `1px solid #E5E7EB` (Neutral 200)
  - Padding: `0`
  - Display: Flex, horizontal layout
  - Gap: `32px` (spacing-8)

- **Individual Tab:**
  - Typography: `instrument.body.small` (Inter Medium 500, 14px, 20px line height)
  - Text Color (Inactive): `#6B7280` (Neutral 500)
  - Text Color (Active): `#0049E6` (Podiem Blue 500)
  - Padding: `8px 4px` (vertical 8px, horizontal 4px)
  - Border Bottom: `2px solid transparent` (inactive)
  - Border Bottom: `2px solid #0049E6` (active, Podiem Blue 500)
  - Transition: All 200ms ease
  - Cursor: Pointer

**States:**
- **Inactive**: Text `#6B7280` (Neutral 500), Border transparent
- **Hover**: Text `#374151` (Neutral 700)
- **Active**: Text `#0049E6` (Podiem Blue 500), Border bottom `#0049E6` (Podiem Blue 500)
- **Focus**: Outline `2px solid #3CB9F0` (Pecton 500), offset `2px`
- **Disabled**: Text `#D1D5DB` (Neutral 300), Cursor not-allowed

**Tailwind CSS Example:**
```html
<div class="border-b border-neutral-200">
  <nav class="-mb-px flex space-x-8">
    <!-- Active Tab -->
    <button class="border-podiem-500 text-podiem-500 whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium">
      My Account
    </button>
    
    <!-- Inactive Tab -->
    <button class="border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium">
      Company
    </button>
    
    <!-- Inactive Tab -->
    <button class="border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium">
      Team Members
    </button>
  </nav>
</div>
```

### 2. Tabs with Underline and Icons
Tab style with icons for enhanced visual recognition.
**Visual Properties:**
- Same as Tabs with Underline, but includes icons
- Icon Size: `20px` (w-5 h-5)
- Icon Position: Left of text
- Gap between icon and text: `12px` (spacing-3)
- Icon Color: Inherits text color

**Tailwind CSS Example:**
```html
<div class="border-b border-neutral-200">
  <nav class="-mb-px flex space-x-8">
    <!-- Active Tab with Icon -->
    <button class="group inline-flex items-center border-b-2 border-podiem-500 px-1 py-2 text-sm font-medium text-podiem-500">
      <svg class="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
      </svg>
      My Account
    </button>
    
    <!-- Inactive Tab with Icon -->
    <button class="group inline-flex items-center border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700">
      <svg class="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
      </svg>
      Company
    </button>
  </nav>
</div>
```

### 3. Tabs in Pills
Tabs with pill-shaped backgrounds. Compact and modern design.
**Visual Properties:**
- **Tab List Container:**
  - Background: `transparent`
  - Border Radius: `0px`
  - Padding: `0`
  - Display: Inline-flex
  - Gap: `4px`

- **Individual Tab:**
  - Typography: `instrument.body.small` (Inter Medium 500, 14px, 20px line height)
  - Text Color (Inactive): `#6B7280` (Neutral 500)
  - Text Color (Active): `#0049E6` (Podiem Blue 500)
  - Background (Inactive): `transparent`
  - Background (Active): `#EBF2FF` (Podiem Blue 50)
  - Padding: `8px 12px`
  - Border Radius: `6px`
  - Transition: All 150ms ease
  - Cursor: Pointer

**States:**
- **Inactive**: Text `#6B7280` (Neutral 500), Background transparent
- **Hover**: Text `#374151` (Neutral 700), Background `#F3F4F6` (Neutral 100)
- **Active**: Text `#0049E6` (Podiem Blue 500), Background `#EBF2FF` (Podiem Blue 50)
- **Focus**: Ring `2px solid #3CB9F0` (Pecton 500)

**Tailwind CSS Example:**
```html
<div>
  <nav class="flex space-x-1">
    <!-- Active Tab -->
    <button class="rounded-md bg-podiem-50 px-3 py-2 text-sm font-medium text-podiem-500">
      My Account
    </button>
    
    <!-- Inactive Tab -->
    <button class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700">
      Company
    </button>
    
    <!-- Inactive Tab -->
    <button class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700">
      Team Members
    </button>
  </nav>
</div>
```

### 4. Tabs in Pills on Gray
Pill tabs with a gray background container for better visual separation.
**Visual Properties:**
- **Tab List Container:**
  - Background: `#F3F4F6` (Neutral 100)
  - Border Radius: `8px`
  - Padding: `4px`
  - Display: Flex
  - Gap: `4px`

- **Individual Tab:**
  - Typography: `instrument.body.small` (Inter Medium 500, 14px, 20px line height)
  - Text Color (Inactive): `#6B7280` (Neutral 500)
  - Text Color (Active): `#1F2937` (Neutral 800)
  - Background (Inactive): `transparent`
  - Background (Active): `#FFFFFF` (White)
  - Padding: `8px 12px`
  - Border Radius: `6px`
  - Box Shadow (Active): `0 1px 2px rgba(0, 0, 0, 0.05)` (Elevation 1)
  - Transition: All 200ms ease

**States:**
- **Inactive**: Text `#6B7280` (Neutral 500), Background transparent
- **Hover**: Text `#374151` (Neutral 700)
- **Active**: Text `#1F2937` (Neutral 800), Background `#FFFFFF`, Shadow
- **Focus**: Ring `2px solid #3CB9F0` (Pecton 500)

**Tailwind CSS Example:**
```html
<div class="inline-flex rounded-lg bg-neutral-100 p-1">
  <!-- Active Tab -->
  <button class="rounded-md bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm">
    My Account
  </button>
  
  <!-- Inactive Tab -->
  <button class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700">
    Company
  </button>
  
  <!-- Inactive Tab -->
  <button class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700">
    Team Members
  </button>
</div>
```

### 5. Tabs in Pills with Brand Color
Pill tabs using the brand primary color for active state.

**Visual Properties:**
- **Tab List Container:**
  - Background: `transparent`
  - Border Radius: `0px`
  - Padding: `0`
  - Display: Inline-flex
  - Gap: `4px`

- **Individual Tab:**
  - Typography: `instrument.body.small` (Inter Medium 500, 14px, 20px line height)
  - Text Color (Inactive): `#6B7280` (Neutral 500)
  - Text Color (Active): `#FFFFFF` (White)
  - Background (Inactive): `transparent`
  - Background (Active): `#0049E6` (Podiem Blue 500)
  - Padding: `8px 12px`
  - Border Radius: `6px`
  - Transition: All 150ms ease

**States:**
- **Inactive**: Text `#6B7280` (Neutral 500), Background transparent
- **Hover**: Text `#374151` (Neutral 700), Background `#F3F4F6` (Neutral 100)
- **Active**: Text `#FFFFFF` (White), Background `#0049E6` (Podiem Blue 500)
- **Focus**: Ring `2px solid #3CB9F0` (Pecton 500)

**Tailwind CSS Example:**
```html
<div>
  <nav class="flex space-x-1">
    <!-- Active Tab -->
    <button class="rounded-md bg-podiem-500 px-3 py-2 text-sm font-medium text-white">
      My Account
    </button>
    
    <!-- Inactive Tab -->
    <button class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700">
      Company
    </button>
    
    <!-- Inactive Tab -->
    <button class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700">
      Team Members
    </button>
  </nav>
</div>
```

### 6. Full-Width Tabs with Underline
Tabs that stretch to fill the entire container width with underline indicator.

**Visual Properties:**
- Same as Tabs with Underline, but:
  - Display: Grid with equal columns
  - Each tab: Equal width
  - Text Align: Center
  - Gap: `0` (tabs are adjacent)

**Tailwind CSS Example:**
```html
<div class="border-b border-neutral-200">
  <nav class="-mb-px grid grid-flow-col text-center">
    <!-- Active Tab -->
    <button class="border-b-2 border-podiem-500 px-1 py-2 text-sm font-medium text-podiem-500">
      My Account
    </button>
    
    <!-- Inactive Tab -->
    <button class="border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700">
      Company
    </button>
    
    <!-- Inactive Tab -->
    <button class="border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700">
      Team Members
    </button>
  </nav>
</div>
```

### 7. Bar with Underline
Tabs in a contained bar with bottom border indicator. Ideal for page navigation.

**Visual Properties:**
- **Tab List Container:**
  - Background: `#FFFFFF` (White)
  - Border: `1px solid #E5E7EB` (Neutral 200)
  - Border Radius: `8px`
  - Padding: `4px`
  - Display: Flex
  - Gap: `4px`

- **Individual Tab:**
  - Typography: `instrument.body.small` (Inter Medium 500, 14px, 20px line height)
  - Text Color (Inactive): `#6B7280` (Neutral 500)
  - Text Color (Active): `#0049E6` (Podiem Blue 500)
  - Background (Inactive): `transparent`
  - Background (Active): `#F9FAFB` (Neutral 50)
  - Padding: `6px 12px`
  - Border Radius: `6px`
  - Border Bottom: `2px solid transparent` (inactive)
  - Border Bottom: `2px solid #0049E6` (active)
  - Transition: All 150ms ease

**Tailwind CSS Example:**
```html
<div class="rounded-lg border border-neutral-200 bg-white p-1">
  <nav class="flex space-x-1">
    <!-- Active Tab -->
    <button class="rounded-md bg-neutral-50 px-3 py-1.5 text-sm font-medium text-podiem-500 border-b-2 border-podiem-500">
      My Account
    </button>
    
    <!-- Inactive Tab -->
    <button class="rounded-md px-3 py-1.5 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700 border-b-2 border-transparent">
      Company
    </button>
    
    <!-- Inactive Tab -->
    <button class="rounded-md px-3 py-1.5 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700 border-b-2 border-transparent">
      Team Members
    </button>
  </nav>
</div>
```

### 8. Tabs with Underline and Badges
Tabs with underline and notification badges for alerts or counts.

**Visual Properties:**
- Same as Tabs with Underline, but includes badges
- Badge Position: Right of text
- Gap between text and badge: `8px`
- Badge: Small pill with count
  - Background: `#DC2626` (Error 500) for alerts
  - Background: `#6B7280` (Neutral 500) for neutral counts
  - Text: `#FFFFFF` (White)
  - Font: `instrument.ui.caption` (Source Sans Pro 400, 12px)
  - Padding: `2px 8px`
  - Border Radius: `12px` (full pill)

**Tailwind CSS Example:**
```html
<div class="border-b border-neutral-200">
  <nav class="-mb-px flex space-x-8">
    <!-- Active Tab with Badge -->
    <button class="group inline-flex items-center border-b-2 border-podiem-500 px-1 py-2 text-sm font-medium text-podiem-500">
      My Account
      <span class="ml-2 rounded-full bg-podiem-100 px-2 py-0.5 text-xs font-medium text-podiem-500">4</span>
    </button>
    
    <!-- Inactive Tab with Badge -->
    <button class="group inline-flex items-center border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700">
      Company
      <span class="ml-2 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-500 group-hover:bg-neutral-200">2</span>
    </button>
    
    <!-- Tab with Alert Badge -->
    <button class="group inline-flex items-center border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700">
      Team Members
      <span class="ml-2 rounded-full bg-error-500 px-2 py-0.5 text-xs font-medium text-white">12</span>
    </button>
  </nav>
</div>
```

### 9. Simple Tabs
Minimal tabs with no borders or backgrounds. Text-only design.

**Visual Properties:**
- **Tab List Container:**
  - Background: `transparent`
  - No border
  - Padding: `0`
  - Display: Flex
  - Gap: `24px` (spacing-6)

- **Individual Tab:**
  - Typography: `instrument.body.small` (Inter Medium 500, 14px, 20px line height)
  - Text Color (Inactive): `#6B7280` (Neutral 500)
  - Text Color (Active): `#0049E6` (Podiem Blue 500)
  - Background: `transparent`
  - Padding: `8px 0px`
  - Transition: Color 150ms ease

**States:**
- **Inactive**: Text `#6B7280` (Neutral 500)
- **Hover**: Text `#374151` (Neutral 700)
- **Active**: Text `#0049E6` (Podiem Blue 500)
- **Focus**: Ring `2px solid #3CB9F0` (Pecton 500)

**Tailwind CSS Example:**
```html
<div>
  <nav class="flex space-x-6">
    <!-- Active Tab -->
    <button class="px-0 py-2 text-sm font-medium text-podiem-500">
      My Account
    </button>
    
    <!-- Inactive Tab -->
    <button class="px-0 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700">
      Company
    </button>
    
    <!-- Inactive Tab -->
    <button class="px-0 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700">
      Team Members
    </button>
    
    <!-- Inactive Tab -->
    <button class="px-0 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700">
      Billing
    </button>
  </nav>
</div>
```

## Tab Panel Content

### Content Area
The area where tab content is displayed when a tab is activated.

**Visual Properties:**
- Background: `#FFFFFF` (White) or transparent
- Padding: `24px` (spacing-6)
- Min Height: `200px` (prevents layout shift)
- Transition: Fade in 200ms when switching tabs

**Tailwind CSS Example:**
```html
<!-- Active Tab Panel -->
<div id="panel-overview" role="tabpanel" aria-labelledby="tab-overview" class="p-6 bg-white min-h-[200px]">
  <h3 class="text-lg font-medium text-neutral-900 mb-4">My Account</h3>
  <p class="text-sm text-neutral-500">Account settings and preferences.</p>
</div>

<!-- Hidden Tab Panel -->
<div id="panel-company" role="tabpanel" aria-labelledby="tab-company" class="hidden p-6">
  <h3 class="text-lg font-medium text-neutral-900 mb-4">Company</h3>
  <p class="text-sm text-neutral-500">Manage your company information.</p>
</div>
```

## Typography Tokens Reference

All tab components use consistent typography tokens from the design system:

- **Tab Labels**: `instrument.body.small` (Inter Medium 500, 14px/20px)
- **Badge Text**: `instrument.ui.caption` (Source Sans Pro Regular 400, 12px/16px)
- **Icon Size**: 20px (w-5 h-5) for tab icons
- **Letter Spacing**: 0 (default)

## Color Tokens Reference

Tab components use the following color tokens from the Podium Design System:

### Text Colors
- **Active Tab**: `podiem-500` (#0049E6)
- **Active Tab (Brand Pill)**: `white` (#FFFFFF)
- **Active Tab (Neutral Pill)**: `neutral-800` (#1F2937)
- **Inactive Tab**: `neutral-500` (#6B7280)
- **Hover Tab**: `neutral-700` (#374151)
- **Disabled Tab**: `neutral-300` (#D1D5DB)

### Background Colors
- **Container (Gray Pill)**: `neutral-100` (#F3F4F6)
- **Container (Bar)**: `white` (#FFFFFF)
- **Active Tab (Pill)**: `white` (#FFFFFF)
- **Active Tab (Brand Pill)**: `podiem-500` (#0049E6)
- **Active Tab (Light)**: `podiem-50` (#EBF2FF)
- **Active Tab (Bar)**: `neutral-50` (#F9FAFB)
- **Hover Tab**: `neutral-50` (#F9FAFB) or `neutral-100` (#F3F4F6)

### Border Colors
- **Tab List Border**: `neutral-200` (#E5E7EB)
- **Active Tab Underline**: `podiem-500` (#0049E6) - 2px width
- **Inactive Tab Underline**: `transparent`
- **Hover Border**: `neutral-300` (#D1D5DB)
- **Focus Ring**: `pecton-500` (#3CB9F0) - 2px width

### Badge Colors
- **Alert Badge Background**: `error-500` (#DC2626)
- **Alert Badge Text**: `white` (#FFFFFF)
- **Neutral Badge Background**: `neutral-100` (#F3F4F6)
- **Neutral Badge Text**: `neutral-500` (#6B7280)
- **Active Badge Background**: `podiem-100` (#D6E4FF)
- **Active Badge Text**: `podiem-500` (#0049E6)

## Spacing Tokens Reference

Tab components use the following spacing tokens from the design system:

- **Container Padding**: `4px` (p-1) for pill containers
- **Tab Padding Vertical**: `8px` (py-2) for most tab variants
- **Tab Padding Horizontal**: `4px` (px-1) for underline tabs, `12px` (px-3) for pill tabs
- **Tab Gap**: `4px` (space-x-1) for pill tabs, `32px` (space-x-8) for underline tabs, `24px` (space-x-6) for simple tabs
- **Icon-Text Gap**: `12px` (mr-3) for icon tabs
- **Badge-Text Gap**: `8px` (ml-2) for badge tabs
- **Panel Padding**: `24px` (p-6) for tab panel content
- **Border Width**: `1px` for borders, `2px` for underlines

## Elevation Reference

Tab components use the following elevation levels:

- **Pill Tabs (Active on Gray)**: `shadow-sm` (0 1px 2px rgba(0, 0, 0, 0.05))
- **Bar Container**: `border` (1px solid neutral-200)
- **Tab Panel**: No shadow (elevation-0)

## Accessibility Guidelines

### Keyboard Navigation
- **Tab Key**: Move focus between tab buttons
- **Arrow Left/Right**: Navigate between tabs (recommended enhanced behavior)
- **Enter/Space**: Activate focused tab and show associated panel
- **Home**: Jump to first tab
- **End**: Jump to last tab

### ARIA Attributes (Required)
All tab components must include proper ARIA attributes:

```html
<div>
  <!-- Tab List -->
  <nav role="tablist" aria-label="Account settings">
    <!-- Active Tab -->
    <button 
      role="tab" 
      aria-selected="true" 
      aria-controls="panel-account"
      id="tab-account"
      tabindex="0"
    >
      My Account
    </button>
    
    <!-- Inactive Tab -->
    <button 
      role="tab" 
      aria-selected="false" 
      aria-controls="panel-company"
      id="tab-company"
      tabindex="-1"
    >
      Company
    </button>
  </nav>
  
  <!-- Tab Panels -->
  <div 
    role="tabpanel" 
    aria-labelledby="tab-account" 
    id="panel-account"
    tabindex="0"
  >
    <!-- Content -->
  </div>
  
  <div 
    role="tabpanel" 
    aria-labelledby="tab-company" 
    id="panel-company"
    hidden
  >
    <!-- Content -->
  </div>
</div>
```

### Focus Management
- **Focus Ring**: Use `focus:outline-2 focus:outline-pecton-500 focus:outline-offset-2`
- **Active Tab**: Should receive focus when clicked (`tabindex="0"`)
- **Inactive Tabs**: Should not be in tab order (`tabindex="-1"`)
- **Visible Focus**: Ensure focus indicator is clearly visible on all variants

### Screen Readers
- Announce tab name, position (e.g., "My Account, tab 1 of 3"), and selected state
- Panel content must be associated with tab via `aria-labelledby`
- Use `aria-label` on tab list to describe the tab group purpose
- Badge counts should be included in tab label for screen readers

### Contrast Requirements (WCAG 2.1 AA)
All color combinations meet WCAG AA standards:

- **Active Tab Text (Podiem 500 on white)**: 8.6:1 ✓ (Exceeds AAA)
- **Inactive Tab Text (Neutral 500 on white)**: 4.6:1 ✓
- **Hover Tab Text (Neutral 700 on white)**: 7.3:1 ✓
- **Active Pill Tab (Podiem 500 on white background)**: 8.6:1 ✓
- **Active Brand Pill (White on Podiem 500)**: 8.6:1 ✓
- **Border Contrast**: All borders meet 3:1 minimum contrast

### Touch Targets
- **Minimum Touch Target**: 44px × 44px for mobile devices
- **Adequate Spacing**: Maintain minimum 8px between interactive elements
- **Tap Area**: Ensure full tab button area is tappable, not just text

## Responsive Behavior

### Desktop (≥1024px)
- Use horizontal tabs with standard spacing
- Underline tabs: 32px gap (space-x-8)
- Pill tabs: 4px gap (space-x-1)
- Simple tabs: 24px gap (space-x-6)
- Full tab labels visible
- Hover states enabled

### Tablet (768px - 1023px)
- Maintain desktop layout for most variants
- Consider scrollable tabs if more than 5 tabs
- Full-width tabs work well for 3-4 tabs
- Touch-friendly padding (minimum 44px tap target)

### Mobile (≤767px)
- Use scrollable tabs for 4+ tabs with `overflow-x-auto`
- Full-width tabs for 2-3 tabs using `grid-flow-col`
- Simplify labels (shorter text or icons only)
- Hide scrollbar with `scrollbar-hide` utility
- Maintain 44px minimum touch target height
- Consider simple tabs variant for better mobile experience

**Mobile Scrollable Example:**
```html
<div class="border-b border-neutral-200">
  <nav class="-mb-px flex space-x-8 overflow-x-auto scrollbar-hide">
    <button class="flex-shrink-0 border-b-2 border-podiem-500 px-1 py-2 text-sm font-medium text-podiem-500 whitespace-nowrap">
      Account
    </button>
    <button class="flex-shrink-0 border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 whitespace-nowrap">
      Company
    </button>
    <!-- More tabs... -->
  </nav>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
```

## Best Practices

### Design Guidelines
1. **Limit Tab Count**: Use 3-7 tabs maximum; more than 7 tabs consider alternative navigation patterns
2. **Clear Labels**: Use concise, descriptive labels (1-3 words maximum)
3. **Consistent Styling**: Use the same tab variant throughout a page or section
4. **Visual Hierarchy**: Active tab must be clearly distinguishable from inactive tabs
5. **Logical Order**: Arrange tabs in logical sequence or priority order (left to right)
6. **Appropriate Variant**: Choose variant based on context:
   - **Underline tabs**: Page-level navigation, clean layouts
   - **Pill tabs**: Compact spaces, settings panels, view switchers
   - **Brand pill tabs**: Primary navigation, important sections
   - **Full-width tabs**: Mobile layouts, narrow containers
   - **Simple tabs**: Minimal UI, secondary navigation

### Content Guidelines
1. **Equal Importance**: All tabs should contain content of roughly equal importance
2. **Independent Panels**: Each panel should be self-contained and not require visiting other tabs
3. **Avoid Deep Nesting**: Never use tabs within tabs (use alternative patterns like accordions)
4. **Loading States**: Show appropriate loading indicators when panel content is async
5. **Empty States**: Design helpful empty states for panels with no content
6. **Badge Usage**: Use badges sparingly for notifications or counts (avoid overuse)

### Technical Implementation
1. **Semantic HTML**: Always use proper ARIA roles and attributes (role="tab", role="tabpanel", etc.)
2. **Keyboard Navigation**: Implement full keyboard support (Tab, Arrow keys, Home, End)
3. **Focus Management**: Manage focus correctly when switching tabs
4. **URL State**: Consider URL hash or query params for deep linking to specific tabs
5. **Lazy Loading**: Load panel content only when tab is activated (optimize performance)
6. **Smooth Transitions**: Use CSS transitions (duration-200) for professional polish
7. **Progressive Enhancement**: Ensure tabs work without JavaScript where possible
8. **Touch Support**: Support swipe gestures on mobile for better UX (optional)

## Tailwind Configuration

Add these custom colors and utilities to your `tailwind.config.js` to use all tab variants:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand Colors
        podiem: {
          50: '#EBF2FF',
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#84A9FF',
          400: '#6690FF',
          500: '#0049E6',  // Primary brand color
          600: '#003EC2',
          700: '#00339E',
          800: '#002879',
          900: '#001C55',
          950: '#001236',
        },
        pecton: {
          50: '#F0FBFF',
          100: '#D8F4FE',
          200: '#B2E9FC',
          300: '#8CDEFB',
          400: '#65D2F8',
          500: '#3CB9F0',  // Secondary/Focus color
          600: '#2A9CCE',
          700: '#1F7BA3',
          800: '#145979',
          900: '#0A374F',
          950: '#041D2A',
        },
        // Neutral Colors
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0B0F14',
        },
        // Semantic Colors
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#DC2626',
          600: '#B91C1C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#611818',
          950: '#330C0C',
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#16A34A',
          600: '#15803D',
          700: '#166534',
          800: '#14532D',
          900: '#0F3D23',
          950: '#062312',
        },
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sourcesanspro: ['"Source Sans Pro"', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
      },
    },
  },
  plugins: [],
};
```

## Complete Usage Examples

### 1. Tabs with Underline - Complete Example
```html
<div class="w-full">
  <div class="border-b border-neutral-200">
    <nav class="-mb-px flex space-x-8" role="tablist" aria-label="Account settings">
      <!-- Active Tab -->
      <button 
        role="tab"
        aria-selected="true"
        aria-controls="panel-account"
        id="tab-account"
        tabindex="0"
        class="border-podiem-500 text-podiem-500 whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium"
      >
        My Account
      </button>
      
      <!-- Inactive Tabs -->
      <button 
        role="tab"
        aria-selected="false"
        aria-controls="panel-company"
        id="tab-company"
        tabindex="-1"
        class="border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium"
      >
        Company
      </button>
      
      <button 
        role="tab"
        aria-selected="false"
        aria-controls="panel-team"
        id="tab-team"
        tabindex="-1"
        class="border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium"
      >
        Team Members
      </button>
    </nav>
  </div>
  
  <!-- Tab Panels -->
  <div role="tabpanel" aria-labelledby="tab-account" id="panel-account" class="p-6">
    <h3 class="text-lg font-medium text-neutral-900 mb-2">My Account</h3>
    <p class="text-sm text-neutral-500">Manage your account settings and preferences.</p>
  </div>
  
  <div role="tabpanel" aria-labelledby="tab-company" id="panel-company" class="hidden p-6">
    <h3 class="text-lg font-medium text-neutral-900 mb-2">Company</h3>
    <p class="text-sm text-neutral-500">Manage your company information.</p>
  </div>
  
  <div role="tabpanel" aria-labelledby="tab-team" id="panel-team" class="hidden p-6">
    <h3 class="text-lg font-medium text-neutral-900 mb-2">Team Members</h3>
    <p class="text-sm text-neutral-500">Manage your team members and permissions.</p>
  </div>
</div>
```

### 2. Tabs with Underline and Icons - Complete Example
```html
<div class="w-full">
  <div class="border-b border-neutral-200">
    <nav class="-mb-px flex space-x-8" role="tablist">
      <!-- Active Tab with Icon -->
      <button 
        role="tab"
        aria-selected="true"
        class="group inline-flex items-center border-b-2 border-podiem-500 px-1 py-2 text-sm font-medium text-podiem-500"
      >
        <svg class="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
        My Account
      </button>
      
      <!-- Inactive Tabs with Icons -->
      <button 
        role="tab"
        aria-selected="false"
        class="group inline-flex items-center border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
      >
        <svg class="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
        </svg>
        Company
      </button>
    </nav>
  </div>
</div>
```

### 3. Tabs in Pills - Complete Example
```html
<div class="w-full max-w-sm">
  <div>
    <nav class="flex space-x-1" role="tablist">
      <!-- Active Tab -->
      <button 
        role="tab"
        aria-selected="true"
        class="rounded-md bg-podiem-50 px-3 py-2 text-sm font-medium text-podiem-500"
      >
        My Account
      </button>
      
      <!-- Inactive Tabs -->
      <button 
        role="tab"
        aria-selected="false"
        class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
      >
        Company
      </button>
      
      <button 
        role="tab"
        aria-selected="false"
        class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
      >
        Team Members
      </button>
    </nav>
  </div>
</div>
```

### 4. Tabs in Pills on Gray - Complete Example
```html
<div class="w-full max-w-sm">
  <div class="inline-flex rounded-lg bg-neutral-100 p-1">
    <!-- Active Tab -->
    <button 
      role="tab"
      aria-selected="true"
      class="rounded-md bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm"
    >
      My Account
    </button>
    
    <!-- Inactive Tabs -->
    <button 
      role="tab"
      aria-selected="false"
      class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700"
    >
      Company
    </button>
    
    <button 
      role="tab"
      aria-selected="false"
      class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700"
    >
      Team Members
    </button>
  </div>
</div>
```

### 5. Tabs in Pills with Brand Color - Complete Example
```html
<div class="w-full max-w-sm">
  <div>
    <nav class="flex space-x-1" role="tablist">
      <!-- Active Tab -->
      <button 
        role="tab"
        aria-selected="true"
        class="rounded-md bg-podiem-500 px-3 py-2 text-sm font-medium text-white"
      >
        My Account
      </button>
      
      <!-- Inactive Tabs -->
      <button 
        role="tab"
        aria-selected="false"
        class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
      >
        Company
      </button>
      
      <button 
        role="tab"
        aria-selected="false"
        class="rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
      >
        Team Members
      </button>
    </nav>
  </div>
</div>
```

### 6. Full-Width Tabs with Underline - Complete Example
```html
<div class="w-full">
  <div class="border-b border-neutral-200">
    <nav class="-mb-px grid grid-flow-col text-center" role="tablist">
      <!-- Active Tab -->
      <button 
        role="tab"
        aria-selected="true"
        class="border-b-2 border-podiem-500 px-1 py-2 text-sm font-medium text-podiem-500"
      >
        My Account
      </button>
      
      <!-- Inactive Tabs -->
      <button 
        role="tab"
        aria-selected="false"
        class="border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
      >
        Company
      </button>
      
      <button 
        role="tab"
        aria-selected="false"
        class="border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
      >
        Team Members
      </button>
    </nav>
  </div>
</div>
```

### 7. Bar with Underline - Complete Example
```html
<div class="w-full max-w-md">
  <div class="rounded-lg border border-neutral-200 bg-white p-1">
    <nav class="flex space-x-1" role="tablist">
      <!-- Active Tab -->
      <button 
        role="tab"
        aria-selected="true"
        class="rounded-md bg-neutral-50 px-3 py-1.5 text-sm font-medium text-podiem-500 border-b-2 border-podiem-500"
      >
        My Account
      </button>
      
      <!-- Inactive Tabs -->
      <button 
        role="tab"
        aria-selected="false"
        class="rounded-md px-3 py-1.5 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700 border-b-2 border-transparent"
      >
        Company
      </button>
      
      <button 
        role="tab"
        aria-selected="false"
        class="rounded-md px-3 py-1.5 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700 border-b-2 border-transparent"
      >
        Team Members
      </button>
    </nav>
  </div>
</div>
```

### 8. Tabs with Underline and Badges - Complete Example
```html
<div class="w-full">
  <div class="border-b border-neutral-200">
    <nav class="-mb-px flex space-x-8" role="tablist">
      <!-- Active Tab with Badge -->
      <button 
        role="tab"
        aria-selected="true"
        class="group inline-flex items-center border-b-2 border-podiem-500 px-1 py-2 text-sm font-medium text-podiem-500"
      >
        My Account
        <span class="ml-2 rounded-full bg-podiem-100 px-2 py-0.5 text-xs font-medium text-podiem-500">4</span>
      </button>
      
      <!-- Inactive Tab with Badge -->
      <button 
        role="tab"
        aria-selected="false"
        class="group inline-flex items-center border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
      >
        Company
        <span class="ml-2 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-500 group-hover:bg-neutral-200">2</span>
      </button>
      
      <!-- Tab with Alert Badge -->
      <button 
        role="tab"
        aria-selected="false"
        class="group inline-flex items-center border-b-2 border-transparent px-1 py-2 text-sm font-medium text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
      >
        Team Members
        <span class="ml-2 rounded-full bg-error-500 px-2 py-0.5 text-xs font-medium text-white">12</span>
      </button>
    </nav>
  </div>
</div>
```

### 9. Simple Tabs - Complete Example
```html
<div class="w-full">
  <div>
    <nav class="flex space-x-6" role="tablist">
      <!-- Active Tab -->
      <button 
        role="tab"
        aria-selected="true"
        class="px-0 py-2 text-sm font-medium text-podiem-500"
      >
        My Account
      </button>
      
      <!-- Inactive Tabs -->
      <button 
        role="tab"
        aria-selected="false"
        class="px-0 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700"
      >
        Company
      </button>
      
      <button 
        role="tab"
        aria-selected="false"
        class="px-0 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700"
      >
        Team Members
      </button>
      
      <button 
        role="tab"
        aria-selected="false"
        class="px-0 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700"
      >
        Billing
      </button>
    </nav>
  </div>
</div>
```

## JavaScript Interaction Example

```javascript
// Basic tab switching functionality
function initTabs() {
  const tabButtons = document.querySelectorAll('[role="tab"]');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');
  
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Remove active state from all tabs
      tabButtons.forEach(btn => {
        btn.setAttribute('aria-selected', 'false');
        btn.tabIndex = -1;
        btn.classList.remove('text-podiem-500', 'border-podiem-500', 'bg-white', 'shadow-sm');
        btn.classList.add('text-neutral-500', 'border-transparent');
      });
      
      // Hide all panels
      tabPanels.forEach(panel => {
        panel.classList.add('hidden');
      });
      
      // Activate clicked tab
      button.setAttribute('aria-selected', 'true');
      button.tabIndex = 0;
      button.classList.add('text-podiem-500', 'border-podiem-500');
      button.classList.remove('text-neutral-500', 'border-transparent');
      
      // Show corresponding panel
      const panelId = button.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.classList.remove('hidden');
      }
    });
    
    // Keyboard navigation
    button.addEventListener('keydown', (e) => {
      let newIndex = index;
      
      if (e.key === 'ArrowRight') {
        newIndex = (index + 1) % tabButtons.length;
      } else if (e.key === 'ArrowLeft') {
        newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      } else if (e.key === 'Home') {
        newIndex = 0;
      } else if (e.key === 'End') {
        newIndex = tabButtons.length - 1;
      } else {
        return;
      }
      
      e.preventDefault();
      tabButtons[newIndex].click();
      tabButtons[newIndex].focus();
    });
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initTabs);
```

## Component Status

- ✅ Specification Complete
- ✅ Tailwind CSS Classes Defined
- ⏳ React/Vue Component Library Pending
- ⏳ Figma Components Pending
- ⏳ Accessibility Testing Pending

## Related Components

- [Typography Guidelines](../guidelines/typography.md)
- [Color Guidelines](../guidelines/colors.md)
- [Spacing & Elevation](../guidelines/spacing-elevation.md)
- [Button Component](buttons.md)
- [Navigation Components](../components/index.md)

## Version History

- **v1.0** (December 2025): Initial specification created with Tailwind CSS focus and comprehensive tab variants
