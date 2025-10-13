# Podium Design System - Examples

This document provides examples of how to implement the design guidelines and components in a web application dashboard. The examples are based on the established design principles outlined in the Podium design system.

## Spacing Guidelines

### Spacing Scale

The spacing scale is defined to maintain consistency throughout the application. The following values are recommended:

- **Small**: 4px
- **Medium**: 8px
- **Large**: 16px
- **Extra Large**: 32px

### Recommended Padding and Margin Values

- **Padding**: Use the spacing scale to define padding for components. For example:
  - Buttons: 8px (top/bottom), 16px (left/right)
  - Cards: 16px (all sides)

- **Margin**: Use the spacing scale for margins between components. For example:
  - Between buttons: 8px
  - Between cards: 16px

## Elevation Levels

Elevation is used to create a sense of hierarchy and depth in the interface. The following elevation levels are defined:

- **Level 1**: 2px shadow for subtle elevation (e.g., cards)
- **Level 2**: 4px shadow for moderate elevation (e.g., modals)
- **Level 3**: 8px shadow for high elevation (e.g., dropdowns)

### Example Implementations

1. **Button Example**
   ```html
   <button style="padding: 8px 16px; margin: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
     Click Me
   </button>
   ```

2. **Card Example**
   ```html
   <div style="padding: 16px; margin: 16px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
     <h2>Card Title</h2>
     <p>This is a card example.</p>
   </div>
   ```

3. **Modal Example**
   ```html
   <div style="padding: 32px; margin: 32px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);">
     <h2>Modal Title</h2>
     <p>This is a modal example.</p>
   </div>
   ```

By following these guidelines, you can ensure a consistent and visually appealing layout in your web application dashboard.