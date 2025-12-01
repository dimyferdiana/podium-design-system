# Podium Design System - Long Text Component Specification

## Overview
This document provides a comprehensive specification for long text components in the Podium design system. Long text components are used to display extended content, articles, descriptions, documentation, and multi-paragraph text blocks. They follow consistent patterns for typography, spacing, and hierarchy to ensure optimal readability and user experience across the web application dashboard.

## Long Text Variants

### Article/Documentation Text
Used for article content, documentation, help text, and long-form content.

**Visual Properties:**
- Typography: `instrument.body.default` (Inter Regular 400, 16px, 24px line height)
- Text Color: `#374151` (Neutral 700)
- Max Width: `720px` (optimal reading width, ~75 characters per line)
- Paragraph Spacing: `--spacing-4` (24px)
- Section Spacing: `--spacing-6` (40px)

**Heading Hierarchy within Long Text:**
- H1 Title: `instrument.heading.page-title` (Poppins SemiBold 600, 30px, 40px line height)
  - Color: `#111827` (Neutral 900)
  - Margin Bottom: `--spacing-4` (24px)
  
- H2 Section: `instrument.heading.card-title` (Poppins Medium 500, 20px, 28px line height)
  - Color: `#1F2937` (Neutral 800)
  - Margin Top: `--spacing-6` (40px)
  - Margin Bottom: `--spacing-3` (16px)
  
- H3 Subsection: `instrument.heading.list-title` (Urbanist Medium 500, 18px, 24px line height)
  - Color: `#374151` (Neutral 700)
  - Margin Top: `--spacing-5` (32px)
  - Margin Bottom: `--spacing-2` (8px)

**List Styles:**
- Unordered/Ordered Lists: `instrument.body.default`
- List Item Spacing: `--spacing-2` (8px)
- Nested List Indent: `--spacing-5` (32px)
- List Margin: `--spacing-3` (16px) top and bottom

**Inline Elements:**
- Links: `#0049E6` (Podiem Blue 500), underline on hover
- Bold Text: Inter SemiBold (600), same color as body
- Italic Text: Inter Regular Italic (400), same color as body
- Code Inline: `instrument.ui.caption`, `#DC2626` (Error 500), `#FEF2F2` (Error 50) background, `4px` padding

**States:**
- Default: Neutral 700 text on white/neutral background
- Selected: Background `#EBF2FF` (Podiem Blue 50) with `#0049E6` (Podiem Blue 500) left border (4px)
- Link Hover: Underline with `#00339E` (Podiem Blue 700)

### Description Text (Compact)
Used for product descriptions, card details, and shorter multi-line text blocks.

**Visual Properties:**
- Typography: `instrument.body.small` (Inter Regular 400, 14px, 20px line height)
- Text Color: `#4B5563` (Neutral 600)
- Max Width: `600px`
- Paragraph Spacing: `--spacing-2` (8px)

**States:**
- Default: Neutral 600 text
- Truncated (with "Show More"): Display 3 lines with ellipsis, expand on interaction

### Helper/Instructional Text
Used for form help text, instructions, tooltips content, and guidance.

**Visual Properties:**
- Typography: `instrument.body.small` (Inter Regular 400, 14px, 20px line height)
- Text Color: `#6B7280` (Neutral 500)
- Max Width: `480px`
- Paragraph Spacing: `--spacing-2` (8px)
- Icon Integration: 16px icon with `--spacing-2` (8px) gap

**States:**
- Default: Neutral 500 text
- With Icon: Info icon `#0284C7` (Info 500) aligned to top

### Code Block Text
Used for displaying code snippets and technical content within long text.

**Visual Properties:**
- Typography: `Consolas, Monaco, 'Courier New', monospace` (400, 14px, 20px line height)
- Text Color: `#1F2937` (Neutral 800)
- Background: `#F3F4F6` (Neutral 100)
- Border: `1px solid #E5E7EB` (Neutral 200)
- Border Radius: `6px`
- Padding: `--spacing-3` (16px)
- Max Width: `100%` (scrollable if needed)
- Overflow: Horizontal scroll if content exceeds width

**Syntax Highlighting (Optional):**
- Keywords: `#DC2626` (Error 500)
- Strings: `#16A34A` (Success 500)
- Comments: `#6B7280` (Neutral 500)
- Functions: `#0049E6` (Podiem Blue 500)

### Quote/Callout Text
Used for blockquotes, important callouts, and highlighted information.

**Visual Properties:**
- Typography: `instrument.body.default` (Inter Regular 400, 16px, 24px line height)
- Text Color: `#1F2937` (Neutral 800)
- Background: `#F9FAFB` (Neutral 50)
- Border Left: `4px solid #0049E6` (Podiem Blue 500)
- Border Radius: `4px`
- Padding: `--spacing-3 --spacing-4` (16px 24px)
- Max Width: `680px`
- Font Style: Italic (optional)

**Variants:**
- Info Callout: Border `#0284C7` (Info 500), Background `#F0F9FF` (Info 50)
- Warning Callout: Border `#F59E0B` (Warning 500), Background `#FFFBEB` (Warning 50)
- Success Callout: Border `#16A34A` (Success 500), Background `#F0FDF4` (Success 50)
- Error Callout: Border `#DC2626` (Error 500), Background `#FEF2F2` (Error 50)

## Typography Tokens Reference

All long text components use the following typography tokens from the design system:

- **Primary Body**: `instrument.body.default` (Inter 400, 16px/24px)
- **Small Body**: `instrument.body.small` (Inter 400, 14px/20px)
- **Page Title**: `instrument.heading.page-title` (Poppins 600, 30px/40px)
- **Section Title**: `instrument.heading.card-title` (Poppins 500, 20px/28px)
- **Subsection Title**: `instrument.heading.list-title` (Urbanist 500, 18px/24px)
- **Caption/Helper**: `instrument.ui.caption` (Source Sans Pro 400, 12px/16px)

## Color Tokens Reference

Long text components use the following color tokens:

- **Primary Text**: `neutral-700` (#374151)
- **Secondary Text**: `neutral-600` (#4B5563)
- **Tertiary Text**: `neutral-500` (#6B7280)
- **Heading Text**: `neutral-900` (#111827), `neutral-800` (#1F2937)
- **Link Default**: `podiem-500` (#0049E6)
- **Link Hover**: `podiem-700` (#00339E)
- **Background Light**: `neutral-50` (#F9FAFB)
- **Border Subtle**: `neutral-200` (#E5E7EB)
- **Highlight/Selection**: `podiem-50` (#EBF2FF)

## Spacing Tokens Reference

Long text components use the following spacing tokens:

- `--spacing-2` (8px): List item spacing, small paragraph gaps
- `--spacing-3` (16px): Standard padding, list margins
- `--spacing-4` (24px): Paragraph spacing, heading bottom margin
- `--spacing-5` (32px): Nested list indent, H3 top margin
- `--spacing-6` (40px): Section spacing, H2 top margin

## Accessibility Guidelines

### Readability
- **Line Length**: Keep optimal reading width at 50-75 characters per line (max-width: 720px for body text)
- **Line Height**: Use 1.5x (24px for 16px text) for comfortable reading
- **Contrast Ratio**: Maintain WCAG 2.1 AA compliance (4.5:1 minimum for body text)
  - Neutral 700 on white: 7.3:1 ✓
  - Neutral 600 on white: 5.2:1 ✓
  - Neutral 500 on white: 4.6:1 ✓

### Focus & Navigation
- **Link Focus**: 2px solid outline with `#3CB9F0` (Pecton 500), 2px offset
- **Skip Links**: Provide skip-to-content links for long articles
- **Keyboard Navigation**: Ensure all interactive elements (links, expandable sections) are keyboard accessible

### Screen Readers
- Use semantic HTML (`<article>`, `<section>`, `<p>`, `<h1>-<h6>`)
- Provide alt text for images within long text
- Use proper heading hierarchy (don't skip levels)
- Mark up code blocks with `<pre><code>` tags

## Responsive Behavior

### Desktop (≥1024px)
- Max Width: `720px` for article text
- Font Size: `16px` (body), `14px` (small)
- Paragraph Spacing: `24px`

### Tablet (768px - 1023px)
- Max Width: `90%` of container
- Font Size: `16px` (body), `14px` (small)
- Paragraph Spacing: `20px`

### Mobile (≤767px)
- Max Width: `100%` with `16px` side padding
- Font Size: `16px` (body, maintain for readability), `14px` (small)
- Paragraph Spacing: `16px`
- Reduced heading sizes:
  - H1: `24px` (down from 30px)
  - H2: `18px` (down from 20px)
  - H3: `16px` (down from 18px)

## Best Practices

1. **Maintain Hierarchy**: Use heading levels consistently and in order (H1 → H2 → H3)
2. **Chunk Content**: Break long content into digestible sections with headings
3. **Optimal Line Length**: Limit line length to 50-75 characters for readability
4. **Consistent Spacing**: Use design tokens for all spacing to maintain visual rhythm
5. **Clear Links**: Make links visually distinct and descriptive
6. **White Space**: Use generous white space between sections to reduce cognitive load
7. **Scannable Content**: Use lists, bold text, and headings to make content scannable
8. **Accessible Colors**: Ensure text colors meet WCAG contrast requirements
9. **Responsive Typography**: Adjust font sizes appropriately for mobile devices while maintaining readability

## Usage Examples

### Article with Mixed Content
```html
<article class="long-text-article">
  <h1 class="instrument-heading-page-title">Getting Started with Podium</h1>
  
  <p class="instrument-body-default">
    Podium is a comprehensive design system that helps you build 
    consistent and accessible user interfaces. This guide will walk 
    you through the core concepts and components.
  </p>
  
  <h2 class="instrument-heading-card-title">Core Principles</h2>
  
  <p class="instrument-body-default">
    Our design system is built on three foundational principles:
  </p>
  
  <ul>
    <li>Consistency across all touchpoints</li>
    <li>Accessibility for all users</li>
    <li>Scalability for growing teams</li>
  </ul>
  
  <blockquote class="callout-info">
    <p>Remember to always use design tokens instead of hardcoded values 
    for colors, spacing, and typography.</p>
  </blockquote>
  
  <h3 class="instrument-heading-list-title">Design Tokens</h3>
  
  <p class="instrument-body-default">
    Design tokens are the visual design atoms of the system. They include
    <strong>colors</strong>, <strong>spacing</strong>, and 
    <strong>typography</strong> values that ensure consistency across 
    your application.
  </p>
</article>
```

### Description Text with Expand
```html
<div class="long-text-description">
  <p class="instrument-body-small">
    This product includes a comprehensive set of tools for managing 
    your sales pipeline, tracking customer interactions, and analyzing 
    performance metrics across your entire organization.
  </p>
  <button class="text-button">Show more</button>
</div>
```

### Code Block Example
```html
<div class="long-text-code-block">
  <pre><code>
const button = {
  background: 'var(--podiem-500)',
  color: 'var(--neutral-0)',
  padding: 'var(--spacing-3) var(--spacing-5)',
  borderRadius: '6px'
};
  </code></pre>
</div>
```

## Component Status

- ✅ Specification Complete
- ⏳ Implementation In Progress
- ⏳ Figma Components Pending
- ⏳ Code Examples Pending

## Related Components

- [Typography Guidelines](../guidelines/typography.md)
- [Color Guidelines](../guidelines/colors.md)
- [Spacing & Elevation](../guidelines/spacing-elevation.md)
- [Button Component](buttons.md)
- [Banner Component](banner.md)

## Version History

- **v1.0** (December 2025): Initial specification created
