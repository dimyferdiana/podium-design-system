module.exports = {
  theme: {
    extend: {
      colors: {
        // --- Brand ---
        podiem: {
          50:  "#EBF2FF",
          100: "#D6E4FF",
          200: "#ADC8FF",
          300: "#84A9FF",
          400: "#6690FF",
          500: "#0049E6", // Primary
          600: "#003EC2",
          700: "#00339E",
          800: "#002879",
          900: "#001C55",
          950: "#001236",
        },
        pecton: {
          50:  "#F0FBFF",
          100: "#D8F4FE",
          200: "#B2E9FC",
          300: "#8CDEFB",
          400: "#65D2F8",
          500: "#3CB9F0", // Secondary
          600: "#2A9CCE",
          700: "#1F7BA3",
          800: "#145979",
          900: "#0A374F",
          950: "#041D2A",
        },
        electric: {
          50:  "#EEFFFE",
          100: "#CCFFFD",
          200: "#99FFFB",
          300: "#66FDF9",
          400: "#33FCF7",
          500: "#5EF9F6", // Accent
          600: "#2CDAD7",
          700: "#20AFAE",
          800: "#157D7D",
          900: "#0B4A4A",
          950: "#032424",
        },

        // --- Neutral ---
        neutral: {
          50:  "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#0B0F14",
        },

        // --- Semantic ---
        success: {
          50:  "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#16A34A",
          600: "#15803D",
          700: "#166534",
          800: "#14532D",
          900: "#0F3D23",
          950: "#062312",
        },
        warning: {
          50:  "#FFFBEB",
          100: "#FEF9C3",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#451A03",
        },
        error: {
          50:  "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#DC2626",
          600: "#B91C1C",
          700: "#991B1B",
          800: "#7F1D1D",
          900: "#611818",
          950: "#330C0C",
        },
        info: {
          50:  "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0284C7",
          600: "#0369A1",
          700: "#075985",
          800: "#0C4A6E",
          900: "#0A3A58",
          950: "#042232",
        },

        // --- Status (Map to semantic colors for better consistency) ---
        // Note: These are aliases to semantic colors following 60/30/10 rule
        pending: {
          // Using neutral for pending (less attention-grabbing)
          50:  "#F9FAFB", // neutral-50
          100: "#F3F4F6", // neutral-100
          200: "#E5E7EB", // neutral-200
          300: "#D1D5DB", // neutral-300
          400: "#9CA3AF", // neutral-400
          500: "#6B7280", // neutral-500 (Pending state)
          600: "#4B5563", // neutral-600
          700: "#374151", // neutral-700
          800: "#1F2937", // neutral-800
          900: "#111827", // neutral-900
          950: "#0B0F14", // neutral-950
        },
        progress: {
          // Using info colors for in-progress (informational blue)
          50:  "#F0F9FF", // info-50
          100: "#E0F2FE", // info-100
          200: "#BAE6FD", // info-200
          300: "#7DD3FC", // info-300
          400: "#38BDF8", // info-400
          500: "#0284C7", // info-500 (In Progress)
          600: "#0369A1", // info-600
          700: "#075985", // info-700
          800: "#0C4A6E", // info-800
          900: "#0A3A58", // info-900
          950: "#042232", // info-950
        },
        completed: {
          // Using success colors for completed (positive green)
          50:  "#F0FDF4", // success-50
          100: "#DCFCE7", // success-100
          200: "#BBF7D0", // success-200
          300: "#86EFAC", // success-300
          400: "#4ADE80", // success-400
          500: "#16A34A", // success-500 (Completed)
          600: "#15803D", // success-600
          700: "#166534", // success-700
          800: "#14532D", // success-800
          900: "#0F3D23", // success-900
          950: "#062312", // success-950
        },
        hold: {
          // Using warning colors for hold (cautionary yellow/amber)
          50:  "#FFFBEB", // warning-50
          100: "#FEF9C3", // warning-100
          200: "#FDE68A", // warning-200
          300: "#FCD34D", // warning-300
          400: "#FBBF24", // warning-400
          500: "#F59E0B", // warning-500 (On Hold)
          600: "#D97706", // warning-600
          700: "#B45309", // warning-700
          800: "#92400E", // warning-800
          900: "#78350F", // warning-900
          950: "#451A03", // warning-950
        },
        disabled: {
          // Using neutral for disabled (consistent with neutral palette)
          50:  "#F9FAFB", // neutral-50
          100: "#F3F4F6", // neutral-100
          200: "#E5E7EB", // neutral-200
          300: "#D1D5DB", // neutral-300
          400: "#9CA3AF", // neutral-400 (Disabled state)
          500: "#6B7280", // neutral-500
          600: "#4B5563", // neutral-600
          700: "#374151", // neutral-700
          800: "#1F2937", // neutral-800
          900: "#111827", // neutral-900
          950: "#0B0F14", // neutral-950
        },

        // --- Extra Accents ---
        mint: {
          50:  "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#022C22",
        },
        violet: {
          50:  "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          950: "#2E1065",
        },
        coral: {
          50:  "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
          950: "#4C0519",
        },
        lime: {
          50:  "#F7FEE7",
          100: "#ECFCCB",
          200: "#D9F99D",
          300: "#BEF264",
          400: "#A3E635",
          500: "#84CC16",
          600: "#65A30D",
          700: "#4D7C0F",
          800: "#3F6212",
          900: "#365314",
          950: "#1A2E05",
        },
      }
    }
  },

  /* Semantic Mapping (Usage Tokens) - Following 60/30/10 Rule */
  semanticTokens: {
    // --- PRIMARY (60%) - Dominant neutral colors for backgrounds & surfaces ---
    '--background-default': 'var(--neutral-50)',           // Main app background (60% of space)
    '--background-subtle': 'var(--neutral-100)',           // Section backgrounds
    '--background-elevated': '#FFFFFF',                    // Cards, modals, dropdowns
    '--background-overlay': 'rgba(17, 24, 39, 0.6)',      // Modal overlays
    '--background-disabled': 'var(--neutral-200)',
    
    '--surface-default': '#FFFFFF',                        // Primary surface (60% usage)
    '--surface-alt': 'var(--neutral-50)',                 // Alternative surfaces
    '--surface-hover': 'var(--neutral-100)',              // Hover states
    '--surface-active': 'var(--neutral-200)',             // Active states
    '--surface-selected': 'var(--podiem-50)',             // Selected items (subtle brand)
    '--surface-disabled': 'var(--neutral-100)',
    
    // --- SECONDARY (30%) - Supporting elements, text, and navigation ---
    '--text-primary': 'var(--neutral-900)',               // Main text (30% of visual weight)
    '--text-secondary': 'var(--neutral-600)',             // Supporting text
    '--text-tertiary': 'var(--neutral-500)',              // Less important text
    '--text-disabled': 'var(--neutral-400)',              // Disabled text
    '--text-inverse': 'var(--neutral-50)',                // Text on dark backgrounds
    '--text-brand': 'var(--podiem-700)',                  // Brand text (readable)
    '--text-link': 'var(--podiem-600)',                   // Links
    '--text-link-hover': 'var(--podiem-700)',             // Link hover
    
    '--border-default': 'var(--neutral-200)',             // Default borders (30% usage)
    '--border-subtle': 'var(--neutral-100)',              // Subtle borders
    '--border-strong': 'var(--neutral-300)',              // Strong borders
    '--border-interactive': 'var(--neutral-300)',         // Interactive element borders
    
    // Secondary buttons (30% usage frequency)
    '--button-secondary-bg': 'var(--neutral-100)',
    '--button-secondary-hover': 'var(--neutral-200)',
    '--button-secondary-active': 'var(--neutral-300)',
    '--button-secondary-text': 'var(--neutral-900)',
    '--button-secondary-border': 'var(--neutral-200)',
    
    // Tertiary/Ghost buttons
    '--button-tertiary-bg': 'transparent',
    '--button-tertiary-hover': 'var(--neutral-100)',
    '--button-tertiary-active': 'var(--neutral-200)',
    '--button-tertiary-text': 'var(--neutral-700)',
    
    // --- ACCENT (10%) - Call-to-action, focus states, and brand highlights ---
    // These should be used sparingly to maintain impact and visual hierarchy
    '--button-primary-bg': 'var(--podiem-500)',            // Primary CTA (10% usage max)
    '--button-primary-hover': 'var(--podiem-600)',         // Primary CTA hover
    '--button-primary-active': 'var(--podiem-700)',        // Primary CTA active
    '--button-primary-text': '#FFFFFF',                    // High contrast white text
    '--button-primary-border': 'var(--podiem-500)',
    '--button-primary-disabled-bg': 'var(--neutral-300)',
    '--button-primary-disabled-text': 'var(--neutral-500)',
    
    // Focus states (accent usage)
    '--border-focus': 'var(--podiem-500)',                 // Focus rings
    '--focus-ring': 'var(--podiem-500)',                   // Focus indicator
    '--focus-ring-offset': '#FFFFFF',                      // Focus ring offset
    
    // Brand accents (use sparingly - 10% rule)
    '--accent-primary': 'var(--podiem-500)',               // Primary brand accent
    '--accent-electric': 'var(--electric-500)',            // Special moments only
    
    // --- SEMANTIC FEEDBACK COLORS (Contextual, not counted in 60/30/10) ---
    // Success states
    '--success-bg': 'var(--success-50)',                   // Subtle success background
    '--success-bg-strong': 'var(--success-100)',           // Stronger success background
    '--success-text': 'var(--success-700)',                // Success text (readable)
    '--success-text-strong': 'var(--success-800)',         // Strong success text
    '--success-border': 'var(--success-200)',              // Success borders
    '--success-icon': 'var(--success-600)',                // Success icons
    
    // Warning states
    '--warning-bg': 'var(--warning-50)',
    '--warning-bg-strong': 'var(--warning-100)',
    '--warning-text': 'var(--warning-700)',
    '--warning-text-strong': 'var(--warning-800)',
    '--warning-border': 'var(--warning-200)',
    '--warning-icon': 'var(--warning-600)',
    
    // Error states
    '--error-bg': 'var(--error-50)',
    '--error-bg-strong': 'var(--error-100)',
    '--error-text': 'var(--error-700)',
    '--error-text-strong': 'var(--error-800)',
    '--error-border': 'var(--error-200)',
    '--error-icon': 'var(--error-600)',
    '--border-error': 'var(--error-500)',                  // Error input borders
    
    // Info states
    '--info-bg': 'var(--info-50)',
    '--info-bg-strong': 'var(--info-100)',
    '--info-text': 'var(--info-700)',
    '--info-text-strong': 'var(--info-800)',
    '--info-border': 'var(--info-200)',
    '--info-icon': 'var(--info-600)',
    
    // --- FORM ELEMENTS (Following 60/30/10 distribution) ---
    '--input-bg': '#FFFFFF',                               // White input backgrounds (primary)
    '--input-border': 'var(--neutral-300)',               // Default input borders
    '--input-border-focus': 'var(--podiem-500)',          // Focus borders (accent - 10%)
    '--input-border-hover': 'var(--neutral-400)',         // Hover borders
    '--input-text': 'var(--neutral-900)',                 // Input text (high contrast)
    '--input-placeholder': 'var(--neutral-500)',          // Placeholder text
    '--input-disabled-bg': 'var(--neutral-100)',          // Disabled input background
    '--input-disabled-text': 'var(--neutral-400)',        // Disabled input text
    '--input-disabled-border': 'var(--neutral-200)',      // Disabled input border
    
    // --- STATUS INDICATORS (Simplified to use main semantic colors) ---
    '--status-pending-bg': 'var(--neutral-100)',          // Using neutral for pending
    '--status-pending-text': 'var(--neutral-700)',
    '--status-pending-border': 'var(--neutral-200)',
    
    '--status-progress-bg': 'var(--info-100)',            // Using info blue for progress
    '--status-progress-text': 'var(--info-700)',
    '--status-progress-border': 'var(--info-200)',
    
    '--status-completed-bg': 'var(--success-100)',        // Using success green
    '--status-completed-text': 'var(--success-700)',
    '--status-completed-border': 'var(--success-200)',
    
    '--status-hold-bg': 'var(--warning-100)',             // Using warning amber
    '--status-hold-text': 'var(--warning-700)',
    '--status-hold-border': 'var(--warning-200)',
    
    '--status-disabled-bg': 'var(--neutral-200)',         // Using neutral for disabled
    '--status-disabled-text': 'var(--neutral-500)',
    '--status-disabled-border': 'var(--neutral-300)',
    
    // --- SUPPORTING UI ELEMENTS (Primary/Secondary distribution) ---
    // Navigation (Primary 60%)
    '--nav-bg': '#FFFFFF',                                 // Clean white navigation
    '--nav-border': 'var(--neutral-200)',
    '--nav-item-text': 'var(--neutral-700)',              // Secondary text weight
    '--nav-item-hover': 'var(--neutral-100)',
    '--nav-item-active': 'var(--podiem-100)',             // Subtle brand highlight
    '--nav-item-active-text': 'var(--podiem-700)',        // Brand text
    
    // Cards and surfaces (Primary 60%)
    '--card-bg': '#FFFFFF',                               // Pure white cards
    '--card-border': 'var(--neutral-200)',
    '--card-shadow': 'rgba(0, 0, 0, 0.04)',              // Very subtle shadows
    '--card-hover-shadow': 'rgba(0, 0, 0, 0.08)',        // Slightly stronger on hover
    '--card-elevated-shadow': 'rgba(0, 0, 0, 0.12)',     // For modals/dropdowns
    
    // Tables (Primary 60%)
    '--table-bg': '#FFFFFF',
    '--table-header-bg': 'var(--neutral-50)',
    '--table-header-text': 'var(--neutral-900)',
    '--table-row-even': 'var(--neutral-25)',             // Very subtle alternating rows
    '--table-row-hover': 'var(--neutral-50)',
    '--table-border': 'var(--neutral-200)',
    
    // Modals and overlays
    '--modal-bg': '#FFFFFF',
    '--modal-overlay': 'rgba(0, 0, 0, 0.6)',             // Stronger overlay for focus
    '--modal-border': 'var(--neutral-200)',
    '--modal-shadow': 'rgba(0, 0, 0, 0.2)',
    
    // Tooltips (High contrast for readability)
    '--tooltip-bg': 'var(--neutral-800)',
    '--tooltip-text': '#FFFFFF',
    '--tooltip-border': 'var(--neutral-700)',
    '--tooltip-shadow': 'rgba(0, 0, 0, 0.3)',
    
    // --- PROGRESS & FEEDBACK ELEMENTS ---
    '--progress-bg': 'var(--neutral-200)',               // Track background
    '--progress-fill': 'var(--podiem-500)',              // Brand color fill (accent)
    '--progress-text': 'var(--neutral-700)',             // Progress text
    
    // Badges (Accent usage - sparingly)
    '--badge-primary-bg': 'var(--podiem-500)',           // Brand badges (accent)
    '--badge-primary-text': '#FFFFFF',                   // High contrast
    '--badge-secondary-bg': 'var(--neutral-200)',        // Neutral badges
    '--badge-secondary-text': 'var(--neutral-800)',      // Good contrast
    '--badge-neutral-bg': 'var(--neutral-100)',          // Very subtle badges
    '--badge-neutral-text': 'var(--neutral-700)',
    
    // --- ILLUSTRATION ACCENTS (Use sparingly - follow 10% rule) ---
    // These should only be used for illustrations, charts, or special highlights
    '--illustration-mint': 'var(--mint-500)',            // Chart colors
    '--illustration-violet': 'var(--violet-500)',        // Chart colors
    '--illustration-coral': 'var(--coral-500)',          // Chart colors
    '--illustration-lime': 'var(--lime-500)',            // Chart colors
    '--illustration-pecton': 'var(--pecton-500)',        // Secondary brand
    
    // --- DIVIDERS & SEPARATORS (Primary 60% usage) ---
    '--divider-subtle': 'var(--neutral-100)',            // Very subtle dividers
    '--divider-default': 'var(--neutral-200)',           // Default dividers
    '--divider-strong': 'var(--neutral-300)',            // Strong dividers
  }
}
