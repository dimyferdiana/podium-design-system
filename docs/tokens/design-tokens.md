# Podium Design System - Design Tokens

## Overview
This document outlines the design tokens used throughout the Podium design system. Design tokens are the visual design atoms of the system, representing spacing, colors, typography, and elevation values. They ensure consistency and scalability across the web application dashboard.

## Spacing Tokens
Spacing tokens define the spacing scale used for margins and padding throughout the application. The following scale is recommended:

| Token Name      | Value   |
|------------------|---------|
| `--spacing-0`    | 0px     |
| `--spacing-1`    | 4px     |
| `--spacing-2`    | 8px     |
| `--spacing-3`    | 16px    |
| `--spacing-4`    | 24px    |
| `--spacing-5`    | 32px    |
| `--spacing-6`    | 40px    |
| `--spacing-7`    | 48px    |
| `--spacing-8`    | 64px    |

### Recommended Usage
- **Padding**: Use `--spacing-3` for standard padding in components.
- **Margin**: Use `--spacing-2` for small margins and `--spacing-4` for larger separations between elements.

## Elevation Tokens
Elevation tokens represent the depth of components through shadows, providing a sense of hierarchy and focus. The following elevation levels are defined:

| Token Name          | Shadow Effect                          |
|---------------------|----------------------------------------|
| `--elevation-1`     | 0px 1px 2px rgba(0, 0, 0, 0.1)       |
| `--elevation-2`     | 0px 2px 4px rgba(0, 0, 0, 0.1)       |
| `--elevation-3`     | 0px 4px 8px rgba(0, 0, 0, 0.1)       |
| `--elevation-4`     | 0px 8px 16px rgba(0, 0, 0, 0.1)      |
| `--elevation-5`     | 0px 12px 24px rgba(0, 0, 0, 0.1)     |

### Recommended Usage
- **Cards**: Use `--elevation-2` for standard card components.
- **Modals**: Use `--elevation-4` for modal dialogs to create a prominent overlay effect.

## Conclusion
Utilizing these design tokens for spacing and elevation will help maintain a cohesive and user-friendly interface across the Podium web application dashboard. Consistency in spacing and elevation enhances usability and visual hierarchy, contributing to an overall better user experience.