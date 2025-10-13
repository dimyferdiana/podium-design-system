# Podium Design System - Button Component Specification

## Overview
This document provides a comprehensive specification for button components in the Podium design system. All buttons follow consistent patterns for typography, spacing, colors, and interactions to ensure a cohesive user experience across the web application dashboard.

## Button Variants

### Primary Button
The primary button is used for main actions and calls-to-action.

**Visual Properties:**
- Background: `#0049E6` (Podiem Blue 500)
- Text Color: `#FFFFFF` (Neutral 0)
- Border: None
- Border Radius: `6px`
- Typography: Medium weight (500), 16px
- Padding: `12px 24px` (spacing-3 spacing-5)
- Elevation: `--elevation-1` (0px 1px 2px rgba(0, 0, 0, 0.1))
- Minimum Width: `120px`
- Height: `44px`

**States:**
- Hover: Background `#00339E` (Podiem Blue 700), Elevation `--elevation-2`
- Active: Background `#001C55` (Podiem Blue 900), Elevation `--elevation-1`
- Focus: Outline `2px solid #3CB9F0` (Pecton Blue 500), offset `2px`
- Disabled: Background `#D1D5DB` (Neutral 300), Text `#9CA3AF` (Neutral 400)

### Secondary Button
Used for secondary actions that complement the primary action.

**Visual Properties:**
- Background: Transparent
- Text Color: `#0049E6` (Podiem Blue 500)
- Border: `2px solid #0049E6` (Podiem Blue 500)
- Border Radius: `6px`
- Typography: Medium weight (500), 16px
- Padding: `10px 22px` (accounting for 2px border)
- Elevation: None
- Minimum Width: `120px`
- Height: `44px`

**States:**
- Hover: Background `#EBF2FF` (Podiem Blue 50), Border `#00339E` (Podiem Blue 700), Text `#00339E` (Podiem Blue 700)
- Active: Background `#D6E4FF` (Podiem Blue 100), Border `#001C55` (Podiem Blue 900), Text `#001C55` (Podiem Blue 900)
- Focus: Outline `2px solid #3CB9F0` (Pecton Blue 500), offset `2px`
- Disabled: Border `#D1D5DB` (Neutral 300), Text `#9CA3AF` (Neutral 400)

### Alternative Secondary Button
Used for secondary actions with a more neutral appearance.

**Visual Properties:**
- Background: Transparent
- Text Color: `#0049E6` (Podiem Blue 500)
- Border: `2px solid #D1D5DB` (Neutral 300)
- Border Radius: `6px`
- Typography: Medium weight (500), 16px
- Padding: `10px 22px` (accounting for 2px border)
- Elevation: None
- Minimum Width: `120px`
- Height: `44px`

**States:**
- Hover: Background `#EBF2FF` (Podiem Blue 50), Border `#0049E6` (Podiem Blue 500), Text `#0049E6` (Podiem Blue 500)
- Active: Background `#0049E6` (Podiem Blue 500), Border `#0049E6` (Podiem Blue 500), Text `#FFFFFF` (Neutral 0)
- Focus: Outline `2px solid #3CB9F0` (Pecton Blue 500), offset `2px`
- Disabled: Border `#D1D5DB` (Neutral 300), Text `#9CA3AF` (Neutral 400)

### Ghost/Tertiary Button
Subtle button for tertiary actions with minimal visual weight.

**Visual Properties:**
- Background: Transparent
- Text Color: `#374151` (Neutral 700)
- Border: None
- Border Radius: `6px`
- Typography: Medium weight (500), 16px
- Padding: `12px 24px` (spacing-3 spacing-5)
- Elevation: None
- Minimum Width: `120px`
- Height: `44px`

**States:**
- Hover: Background `#F3F4F6` (Neutral 100), Text `#111827` (Neutral 900)
- Active: Background `#E5E7EB` (Neutral 200), Text `#111827` (Neutral 900)
- Focus: Outline `2px solid #3CB9F0` (Pecton Blue 500), offset `2px`
- Disabled: Text `#9CA3AF` (Neutral 400)
### Text Button
Minimal button for low-priority actions, appearing as interactive text.

**Visual Properties:**
- Background: Transparent
- Text Color: `#0049E6` (Podiem Blue 500)
- Border: None
- Border Radius: `4px`
- Typography: Medium weight (500), 16px
- Padding: `8px 16px` (spacing-2 spacing-4)
- Elevation: None
- Minimum Width: None
- Height: `36px`

**States:**
- Hover: Background `#EBF2FF` (Podiem Blue 50), Text `#00339E` (Podiem Blue 700)
- Active: Background `#D6E4FF` (Podiem Blue 100), Text `#001C55` (Podiem Blue 900)
- Focus: Outline `2px solid #3CB9F0` (Pecton Blue 500), offset `2px`
- Disabled: Text `#9CA3AF` (Neutral 400)

### Link Button
Appears as a standard hyperlink but behaves as a button.

**Visual Properties:**
- Background: Transparent
- Text Color: `#0049E6` (Podiem Blue 500)
- Border: None
- Border Radius: None
- Typography: Regular weight (400), 16px, underlined
- Padding: `4px 0px` (spacing-1 spacing-0)
- Elevation: None
- Minimum Width: None
- Height: Auto (based on line height)

**States:**
- Hover: Text `#00339E` (Podiem Blue 700), underline style: solid
- Active: Text `#001C55` (Podiem Blue 900)
- Focus: Outline `2px solid #3CB9F0` (Pecton Blue 500), offset `2px`, border-radius `2px`
- Disabled: Text `#9CA3AF` (Neutral 400), no underline

## Button Sizes

### Large Button
For prominent actions and hero sections.
- Padding: `16px 32px` (spacing-4 spacing-6)
- Typography: Medium weight (500), 18px
- Height: `52px`

### Default Button
Standard size for most use cases (specifications above).
- Height: `44px`

### Small Button
For compact interfaces and secondary actions.
- Padding: `8px 16px` (spacing-2 spacing-4)
- Typography: Medium weight (500), 14px
- Height: `36px`
## Semantic Button Variants

### Success Button
**Visual Properties:**
- Background: `#16A34A` (Success 500)
- Text Color: `#FFFFFF` (Neutral 0)
- Other properties same as Primary Button

**States:**
- Hover: Background `#15803D` (Success 600)
- Active: Background `#14532D` (Success 800)

### Warning Button
**Visual Properties:**
- Background: `#F59E0B` (Warning 500)
- Text Color: `#FFFFFF` (Neutral 0)
- Other properties same as Primary Button

**States:**
- Hover: Background `#D97706` (Warning 600)
- Active: Background `#92400E` (Warning 800)

### Error/Danger Button
**Visual Properties:**
- Background: `#DC2626` (Error 500)
- Text Color: `#FFFFFF` (Neutral 0)
- Other properties same as Primary Button

**States:**
- Hover: Background `#B91C1C` (Error 600)
- Active: Background `#7F1D1D` (Error 800)

## Icon Buttons

### With Leading Icon
- Icon size: `20px`
- Icon spacing: `8px` (spacing-2) from text
- Icon color matches text color

### With Trailing Icon
- Icon size: `20px`
- Icon spacing: `8px` (spacing-2) from text
- Icon color matches text color

### Icon Only
- Padding: `12px` (spacing-3) all sides
- Width: `44px`
- Height: `44px`
- Icon size: `20px`
- Centered icon

## Implementation Guidelines

### CSS Custom Properties
```css
:root {
  --button-border-radius: 6px;
  --button-font-weight: 500;
  --button-font-size: 16px;
  --button-transition: all 0.2s ease-in-out;
}
```

### Accessibility Requirements
- All buttons must have sufficient color contrast (4.5:1 minimum)
- Focus states must be clearly visible
- Buttons must be keyboard accessible
- Use semantic HTML `<button>` elements
- Include appropriate ARIA labels when text is not descriptive

### Animation and Transitions
- All state changes should animate with `transition: all 0.2s ease-in-out`
- Hover effects should be immediate
- Focus outlines should appear instantly
- Elevation changes should be smooth

### Usage Guidelines
1. Use Primary buttons for the main action on a page or section
2. Use Secondary buttons for important but not primary actions
3. Use Ghost buttons for tertiary actions or in button groups
4. Use Text buttons for low-priority actions like "Cancel" or "Skip"
5. Use Link buttons for navigation that looks like a link but needs button behavior
6. Maintain consistent button sizes within the same context
7. Provide adequate spacing between multiple buttons (`16px` minimum)

## Button Groups
When displaying multiple buttons together:
- Space buttons `16px` apart (spacing-4)
- Align buttons to the same baseline
- Place primary action on the right in LTR languages
- Use consistent button sizes within the same group