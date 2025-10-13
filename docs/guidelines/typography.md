
# Podium Design System – Typography Guidelines

## Naming Convention
`instrument.[category].[variant]` (e.g., `instrument.heading.page-title`)

## Font Families
- **Poppins**: Used for H1 (Page Title) and H2 (Card/Widget Title)
- **Urbanist**: Used for H3 (Table/List Title), KPI/Big Number, Button
- **Inter**: Used for Body, Body Small/Table Cell
- **Source Sans Pro**: Used for Table Header, Input Label, Caption/Helper Text

## Type Scale & Styles

| Name / Token                              | Font Family           | Weight   | Size  | Line Height | Letter Spacing | Usage Example                                 |
|-------------------------------------------|-----------------------|----------|-------|-------------|---------------|-----------------------------------------------|
| instrument.heading.page-title             | Poppins               | 600      | 30px  | 40px        | -0.5%         | H1 Page Title (e.g., "Sales Dashboard")       |
| instrument.heading.card-title             | Poppins               | 500      | 20px  | 28px        | 0%            | H2 Card/Widget Title                          |
| instrument.heading.list-title             | Urbanist              | 500      | 18px  | 24px        | 0%            | H3 Table/List Title                           |
| instrument.body.default                   | Inter                 | 400      | 16px  | 24px        | 0%            | Body text, data tables                        |
| instrument.body.small                     | Inter                 | 400      | 14px  | 20px        | 0%            | Body Small/Table Cell                         |
| instrument.special.kpi                    | Urbanist              | 400      | 48px  | 56px        | -1%           | KPI/Big Number                                |
| instrument.ui.table-header                | Source Sans Pro       | 600      | 14px  | 20px        | 1% (uppercase) | Table Header                                  |
| instrument.ui.input-label                 | Source Sans Pro       | 400      | 14px  | 20px        | 0%            | Input Label/Form Field                        |
| instrument.ui.button-text                 | Urbanist              | 600      | 14px  | 20px        | 0%            | Button                                        |
| instrument.ui.caption                     | Source Sans Pro       | 400      | 12px  | 16px        | 0%            | Caption/Helper Text                           |

## Detailed Type Specs

### Headings
- **H1 Page Title** (`instrument.heading.page-title`)
	- Font: Poppins SemiBold (600)
	- Size: 30px
	- Line Height: 40px
	- Letter Spacing: -0.5%

- **H2 Card/Widget Title** (`instrument.heading.card-title`)
	- Font: Poppins Medium (500)
	- Size: 20px
	- Line Height: 28px
	- Letter Spacing: 0%

- **H3 Table/List Title** (`instrument.heading.list-title`)
	- Font: Urbanist Medium (500)
	- Size: 18px
	- Line Height: 24px
	- Letter Spacing: 0%

### Body & Data Text
- **Body** (`instrument.body.default`)
	- Font: Inter Regular (400)
	- Size: 16px
	- Line Height: 24px
	- Letter Spacing: 0%

- **Body Small / Table Cell** (`instrument.body.small`)
	- Font: Inter Regular (400)
	- Size: 14px
	- Line Height: 20px
	- Letter Spacing: 0%

### UI & Control Styles
- **KPI / Big Number** (`instrument.special.kpi`)
	- Font: Urbanist Regular (400)
	- Size: 48px
	- Line Height: 56px
	- Letter Spacing: -1%

- **Table Header** (`instrument.ui.table-header`)
	- Font: Source Sans Pro SemiBold (600)
	- Size: 14px
	- Line Height: 20px
	- Letter Spacing: 1% (often uppercased)

- **Input Label / Form Field** (`instrument.ui.input-label`)
	- Font: Source Sans Pro Regular (400)
	- Size: 14px
	- Line Height: 20px
	- Letter Spacing: 0%

- **Button** (`instrument.ui.button-text`)
	- Font: Urbanist SemiBold (600)
	- Size: 14px
	- Line Height: 20px
	- Letter Spacing: 0%

- **Caption / Helper Text** (`instrument.ui.caption`)
	- Font: Source Sans Pro Regular (400)
	- Size: 12px
	- Line Height: 16px
	- Letter Spacing: 0%

## Font Weights
| Name    | Value |
|---------|-------|
| Regular | 400   |
| Medium  | 500   |
| SemiBold| 600   |
| Bold    | 700   |

## Accessibility
All text must meet a minimum contrast ratio of 4.5:1 against its background for readability.

## Usage
Always use the specified font family, size, weight, and spacing for each type token. Use the naming convention for referencing type styles in code, Figma, and documentation. If a new type style is needed, follow the established naming and scaling pattern.