
# Podium Design System – Color Guidelines

## Color System Overview
The Podium Design System uses a comprehensive, token-based color palette for consistency, accessibility, and scalability. All colors are defined as multi-step scales and referenced via tokens, matching both our codebase (`podiem-color-palette.js`) and Figma Tokens.json structure.

## Brand Colors
| Token                | 50        | 100       | 200      | 300      | 400      | 500      | 600      | 700      | 800      | 900      | 950      |
|----------------------|-----------|-----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| **podiem**           | #EBF2FF   | #D6E4FF   | #ADC8FF  | #84A9FF  | #6690FF  | #0049E6  | #003EC2  | #00339E  | #002879  | #001C55  | #001236  |
| **pecton**           | #F0FBFF   | #D8F4FE   | #B2E9FC  | #8CDEFB  | #65D2F8  | #3CB9F0  | #2A9CCE  | #1F7BA3  | #145979  | #0A374F  | #041D2A  |
| **electric**         | #EEFFFE   | #CCFFFD   | #99FFFB  | #66FDF9  | #33FCF7  | #5EF9F6  | #2CDAD7  | #20AFAE  | #157D7D  | #0B4A4A  | #032424  |

## Neutral Colors
| Token                | 50        | 100       | 200      | 300      | 400      | 500      | 600      | 700      | 800      | 900      | 950      |
|----------------------|-----------|-----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| **neutral**          | #F9FAFB   | #F3F4F6   | #E5E7EB  | #D1D5DB  | #9CA3AF  | #6B7280  | #4B5563  | #374151  | #1F2937  | #111827  | #0B0F14  |

## Semantic Colors
| Token      | 50        | 100       | 200      | 300      | 400      | 500      | 600      | 700      | 800      | 900      | 950      |
|------------|-----------|-----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| **success**| #F0FDF4   | #DCFCE7   | #BBF7D0  | #86EFAC  | #4ADE80  | #16A34A  | #15803D  | #166534  | #14532D  | #0F3D23  | #062312  |
| **warning**| #FFFBEB   | #FEF9C3   | #FDE68A  | #FCD34D  | #FBBF24  | #F59E0B  | #D97706  | #B45309  | #92400E  | #78350F  | #451A03  |
| **error**  | #FEF2F2   | #FEE2E2   | #FECACA  | #FCA5A5  | #F87171  | #DC2626  | #B91C1C  | #991B1B  | #7F1D1D  | #611818  | #330C0C  |
| **info**   | #F0F9FF   | #E0F2FE   | #BAE6FD  | #7DD3FC  | #38BDF8  | #0284C7  | #0369A1  | #075985  | #0C4A6E  | #0A3A58  | #042232  |

## Extra Accent Colors
Tokens: `mint`, `violet`, `coral`, `lime` (see code for full scale)

## Status & Alias Tokens
Tokens like `pending`, `progress`, `completed`, `hold`, and `disabled` are mapped to neutral or semantic scales for consistent status representation.

## Token Usage & Naming
- **Reference all colors by token name and scale** (e.g., `podiem-500`, `success-50`).
- **Semantic tokens** (e.g., `--success-bg`, `--button-primary-bg`) are mapped in code and Figma Tokens.json for usage context.
- **Do not use raw hex values in UI code or Figma**—always use tokens for maintainability.

### Example: Button Primary
- Background: `--button-primary-bg` → `podiem-500`
- Text: `--button-primary-text` → `#FFFFFF`

### Example: Banner Success
- Background: `--success-bg` → `success-50`
- Border: `--success-border` → `success-200`
- Text: `--success-text` → `success-700`

## Figma & Code Token Alignment
All tokens are defined in both code (`podiem-color-palette.js`) and Figma (Tokens.json). Use the same naming and scale in both places for consistency. If you add or change a token in code, update Figma Tokens.json as well.

## Accessibility & Contrast
Always check color contrast ratios (WCAG 2.1 AA: 4.5:1 for text). Use semantic tokens for feedback/status to ensure clarity and accessibility.

## Color System Principles
1. **Token-First:** Always use tokens, never raw hex values.
2. **Multi-Step Scales:** Use the full scale for flexibility (50–950).
3. **Semantic Mapping:** Use semantic tokens for UI states and feedback.
4. **Consistency:** Keep Figma and code tokens in sync.
5. **Accessibility:** Prioritize contrast and clarity in all color choices.