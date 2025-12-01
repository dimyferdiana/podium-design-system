# Podium Design System - Input Text Component Specification

## Overview
This document provides a comprehensive specification for input text components in the Podium design system, with a focus on long input fields (textarea). Input components enable users to enter and edit text data, from single-line entries to multi-line long-form content. All inputs follow consistent patterns for typography, spacing, colors, states, and validation to ensure a cohesive user experience across the web application dashboard.

## Input Text Variants

### Long Input (Textarea)
Used for multi-line text entry such as comments, descriptions, notes, feedback, and any content that requires more than one line.

**Visual Properties:**
- Typography: `instrument.body.default` (Inter Regular 400, 16px, 24px line height)
- Text Color: `#1F2937` (Neutral 800)
- Placeholder Color: `#9CA3AF` (Neutral 400)
- Background: `#FFFFFF` (White)
- Border: `1px solid #D1D5DB` (Neutral 300)
- Border Radius: `6px`
- Padding: `12px 16px` (spacing-3 spacing-4)
- Min Height: `120px` (5 lines of text)
- Resize: Vertical only
- Max Width: `100%` (responsive to container)

**Label Properties:**
- Typography: `instrument.ui.input-label` (Source Sans Pro Regular 400, 14px, 20px line height)
- Text Color: `#374151` (Neutral 700)
- Margin Bottom: `--spacing-2` (8px)
- Optional Indicator: " (optional)" in `#6B7280` (Neutral 500)
- Required Indicator: Red asterisk `*` in `#DC2626` (Error 500)

**Helper Text Properties:**
- Typography: `instrument.ui.caption` (Source Sans Pro Regular 400, 12px, 16px line height)
- Text Color: `#6B7280` (Neutral 500)
- Margin Top: `--spacing-2` (8px)
- Icon: 16px info icon with `--spacing-1` (4px) gap

**Character Counter:**
- Typography: `instrument.ui.caption` (Source Sans Pro Regular 400, 12px, 16px line height)
- Text Color: `#6B7280` (Neutral 500)
- Position: Bottom right, absolute
- Format: "250 / 500 characters"
- Warning State (>80% limit): `#F59E0B` (Warning 500)
- Error State (at limit): `#DC2626` (Error 500)

**States:**
- **Default**: Border `#D1D5DB` (Neutral 300), Background `#FFFFFF`
- **Hover**: Border `#9CA3AF` (Neutral 400)
- **Focus**: Border `2px solid #0049E6` (Podiem Blue 500), Outline none, Padding adjusted to `11px 15px` to account for thicker border
- **Disabled**: Background `#F3F4F6` (Neutral 100), Border `#E5E7EB` (Neutral 200), Text `#9CA3AF` (Neutral 400), Cursor not-allowed
- **Read-only**: Background `#F9FAFB` (Neutral 50), Border `#E5E7EB` (Neutral 200), Cursor default
- **Error**: Border `2px solid #DC2626` (Error 500), Background `#FFFFFF`, Helper text in `#DC2626` (Error 500) with error icon
- **Success**: Border `2px solid #16A34A` (Success 500), Background `#FFFFFF`, Helper text in `#16A34A` (Success 500) with check icon
- **Warning**: Border `2px solid #F59E0B` (Warning 500), Background `#FFFFFF`, Helper text in `#F59E0B` (Warning 500) with warning icon

### Standard Input (Single Line)
Used for single-line text entry such as names, titles, short descriptions, and form fields.

**Visual Properties:**
- Typography: `instrument.body.default` (Inter Regular 400, 16px, 24px line height)
- Text Color: `#1F2937` (Neutral 800)
- Placeholder Color: `#9CA3AF` (Neutral 400)
- Background: `#FFFFFF` (White)
- Border: `1px solid #D1D5DB` (Neutral 300)
- Border Radius: `6px`
- Padding: `10px 16px` (spacing-2.5 spacing-4)
- Height: `44px`
- Max Width: `100%` (responsive to container)

**Label & Helper Text:**
- Same properties as Long Input variant

**States:**
- Same states as Long Input variant

### Compact Input
Used in dense interfaces, tables, or inline editing scenarios.

**Visual Properties:**
- Typography: `instrument.body.small` (Inter Regular 400, 14px, 20px line height)
- Text Color: `#1F2937` (Neutral 800)
- Placeholder Color: `#9CA3AF` (Neutral 400)
- Background: `#FFFFFF` (White)
- Border: `1px solid #D1D5DB` (Neutral 300)
- Border Radius: `4px`
- Padding: `6px 12px` (spacing-1.5 spacing-3)
- Height: `32px`

**Label Properties:**
- Typography: `instrument.ui.caption` (Source Sans Pro Regular 400, 12px, 16px line height)
- Text Color: `#374151` (Neutral 700)
- Margin Bottom: `--spacing-1` (4px)

**States:**
- Same states as Long Input variant with adjusted padding

### Search Input
Specialized input for search functionality with icon integration.

**Visual Properties:**
- Typography: `instrument.body.default` (Inter Regular 400, 16px, 24px line height)
- Text Color: `#1F2937` (Neutral 800)
- Placeholder Color: `#9CA3AF` (Neutral 400)
- Background: `#F9FAFB` (Neutral 50)
- Border: `1px solid #E5E7EB` (Neutral 200)
- Border Radius: `8px`
- Padding: `10px 16px 10px 44px` (spacing-2.5 spacing-4 spacing-2.5 spacing-7)
- Height: `44px`
- Icon: 20px search icon at left, `#6B7280` (Neutral 500), 16px from left edge
- Clear Button: 16px × icon on right when input has value

**States:**
- **Default**: Background `#F9FAFB` (Neutral 50), Border `#E5E7EB` (Neutral 200)
- **Hover**: Background `#FFFFFF`, Border `#D1D5DB` (Neutral 300)
- **Focus**: Background `#FFFFFF`, Border `2px solid #0049E6` (Podiem Blue 500), Icon `#0049E6` (Podiem Blue 500)
- **With Value**: Clear button appears, hover state `#DC2626` (Error 500)

## Input Sizes

### Large Input
For prominent forms and primary data entry.
- **Single Line**: Height `52px`, Padding `14px 20px`, Font Size `18px`
- **Textarea**: Min Height `160px`, Padding `16px 20px`, Font Size `18px`

### Default Input
Standard size for most use cases (specifications above).
- **Single Line**: Height `44px`
- **Textarea**: Min Height `120px`

### Small Input
For compact interfaces and dense forms.
- **Single Line**: Height `36px`, Padding `8px 12px`, Font Size `14px`
- **Textarea**: Min Height `80px`, Padding `8px 12px`, Font Size `14px`

## Input Field Anatomy

### Complete Input Structure
```
┌─ Label ────────────────────────────┐
│  Field Name *                      │
├────────────────────────────────────┤
│  ┌──────────────────────────────┐ │
│  │ User input text here...      │ │
│  │                              │ │
│  └──────────────────────────────┘ │
├────────────────────────────────────┤
│  Helper text or error message      │
│  Character count: 45 / 500         │
└────────────────────────────────────┘
```

### Required Components
1. **Label**: Identifies the field (required)
2. **Input Field**: The interactive text area/input (required)
3. **Helper Text**: Additional guidance (optional)
4. **Error/Validation Message**: Feedback on input validity (conditional)
5. **Character Counter**: Shows remaining characters (optional, recommended for limited inputs)

## Validation States

### Error State
Indicates invalid input that must be corrected.

**Visual Properties:**
- Border: `2px solid #DC2626` (Error 500)
- Icon: 16px error icon (circle with X) in `#DC2626` (Error 500)
- Message Color: `#DC2626` (Error 500)
- Message Typography: `instrument.ui.caption`

**Error Message Examples:**
- "This field is required"
- "Please enter a valid email address"
- "Maximum 500 characters allowed"
- "Minimum 10 characters required"

### Success State
Indicates valid input or successful validation.

**Visual Properties:**
- Border: `2px solid #16A34A` (Success 500)
- Icon: 16px success icon (checkmark) in `#16A34A` (Success 500)
- Message Color: `#16A34A` (Success 500)
- Message Typography: `instrument.ui.caption`

**Success Message Examples:**
- "Username available"
- "Valid format"
- "Saved successfully"

### Warning State
Indicates input that may need attention but isn't invalid.

**Visual Properties:**
- Border: `2px solid #F59E0B` (Warning 500)
- Icon: 16px warning icon (triangle with !) in `#F59E0B` (Warning 500)
- Message Color: `#F59E0B` (Warning 500)
- Message Typography: `instrument.ui.caption`

**Warning Message Examples:**
- "This username is similar to existing accounts"
- "Consider adding more detail"
- "Approaching character limit"

## Typography Tokens Reference

All input text components use the following typography tokens:

- **Input Text**: `instrument.body.default` (Inter 400, 16px/24px)
- **Compact Input Text**: `instrument.body.small` (Inter 400, 14px/20px)
- **Large Input Text**: Inter 400, 18px/26px
- **Label**: `instrument.ui.input-label` (Source Sans Pro 400, 14px/20px)
- **Helper/Error Text**: `instrument.ui.caption` (Source Sans Pro 400, 12px/16px)
- **Placeholder**: Same as input text but with lower opacity

## Color Tokens Reference

Input text components use the following color tokens:

### Text Colors
- **Input Text**: `neutral-800` (#1F2937)
- **Placeholder**: `neutral-400` (#9CA3AF)
- **Label**: `neutral-700` (#374151)
- **Helper Text**: `neutral-500` (#6B7280)
- **Disabled Text**: `neutral-400` (#9CA3AF)

### Background Colors
- **Default Background**: `#FFFFFF` (White)
- **Disabled Background**: `neutral-100` (#F3F4F6)
- **Read-only Background**: `neutral-50` (#F9FAFB)
- **Search Background**: `neutral-50` (#F9FAFB)

### Border Colors
- **Default Border**: `neutral-300` (#D1D5DB)
- **Hover Border**: `neutral-400` (#9CA3AF)
- **Focus Border**: `podiem-500` (#0049E6)
- **Disabled Border**: `neutral-200` (#E5E7EB)
- **Error Border**: `error-500` (#DC2626)
- **Success Border**: `success-500` (#16A34A)
- **Warning Border**: `warning-500` (#F59E0B)

### Status Colors
- **Error**: `error-500` (#DC2626)
- **Success**: `success-500` (#16A34A)
- **Warning**: `warning-500` (#F59E0B)
- **Info**: `info-500` (#0284C7)

## Spacing Tokens Reference

Input text components use the following spacing tokens:

- `--spacing-1` (4px): Small gaps, compact elements
- `--spacing-2` (8px): Label-to-input gap, helper text margin
- `--spacing-3` (16px): Standard vertical padding in textarea
- `--spacing-4` (24px): Standard horizontal padding, form field spacing
- `--spacing-5` (32px): Large spacing between form sections

## Accessibility Guidelines

### Keyboard Navigation
- **Tab**: Move focus between input fields
- **Shift + Tab**: Move focus backward
- **Enter**: Submit form (single-line inputs)
- **Escape**: Clear focus (optional)
- **Textarea**: Enter creates new line, does not submit form

### Focus Management
- **Focus Ring**: 2px solid `#0049E6` (Podiem Blue 500) border, no separate outline
- **Focus Visible**: Clearly indicate focused input with color change
- **Focus Order**: Logical tab order matching visual layout

### Labels & ARIA
- **Required**: Use `aria-required="true"` and visual asterisk
- **Error**: Use `aria-invalid="true"` and `aria-describedby` linking to error message
- **Disabled**: Use `disabled` attribute and `aria-disabled="true"`
- **Helper Text**: Link with `aria-describedby` for screen reader context
- **Label Association**: Always use `<label for="input-id">` or wrap input in label

### Screen Readers
- Announce label, input type, current value, and validation state
- Error messages should be announced immediately when validation fails
- Use `aria-live="polite"` for dynamic validation messages
- Provide clear, descriptive labels (avoid "Enter text here")

### Contrast Requirements
- **Text to Background**: 4.5:1 minimum (WCAG AA)
  - Neutral 800 on white: 10.4:1 ✓
  - Neutral 400 on white: 4.6:1 ✓ (placeholder)
- **Border to Background**: 3:1 minimum
  - Neutral 300 on white: 1.9:1 (requires hover/focus for clarity)
  - Focus border (Podiem 500): 8.6:1 ✓

### Touch Targets
- Minimum touch target size: 44px × 44px (meets WCAG AAA)
- Adequate spacing between inputs (minimum 8px)

## Responsive Behavior

### Desktop (≥1024px)
- Default input height: `44px`
- Textarea min height: `120px`
- Max width: `100%` of container or explicit width
- Font size: `16px`

### Tablet (768px - 1023px)
- Same as desktop specifications
- Consider stacking form layouts for better use of space

### Mobile (≤767px)
- Input height: Maintain `44px` for touch accessibility
- Textarea min height: `100px`
- Font size: `16px` (prevents zoom on iOS)
- Full width inputs: `100%` with appropriate container padding
- Stack labels above inputs (avoid side-by-side layouts)

## Auto-Complete & Input Modes

### HTML5 Input Types
- Use appropriate `type` attribute: `text`, `email`, `tel`, `url`, `number`
- Enables native keyboard on mobile devices

### Auto-Complete
- Use `autocomplete` attribute for common fields:
  - `name`, `email`, `tel`, `address-line1`, `postal-code`, etc.
- Improves user experience and form completion speed

### Input Modes (Mobile)
- `inputmode="text"`: Default text keyboard
- `inputmode="numeric"`: Numeric keypad
- `inputmode="email"`: Email keyboard with @ key
- `inputmode="tel"`: Telephone keypad
- `inputmode="url"`: URL keyboard with .com

## Best Practices

### Design
1. **Clear Labels**: Use descriptive, concise labels positioned above inputs
2. **Helpful Placeholders**: Provide examples, not instructions (use helper text for instructions)
3. **Appropriate Size**: Use textarea for multi-line content, standard input for single line
4. **Visual Hierarchy**: Group related inputs, use spacing to create clear sections
5. **Validation Timing**: Validate on blur or submit, not on every keystroke (unless real-time is needed)
6. **Error Recovery**: Provide clear, actionable error messages

### Content
1. **Label Text**: Be specific ("Email address" not "Email")
2. **Placeholder Text**: Show format examples ("john@example.com")
3. **Helper Text**: Provide context before user interaction
4. **Error Messages**: Be clear and solution-oriented ("Enter your email address" not "Invalid")
5. **Character Limits**: Show counter when limits exist
6. **Required Fields**: Mark clearly with asterisk and label

### Technical
1. **Use Semantic HTML**: `<label>`, `<input>`, `<textarea>` elements
2. **Associate Labels**: Use `for` attribute or wrap inputs
3. **Validate Client-Side**: Provide immediate feedback, but always validate server-side
4. **Prevent Layout Shift**: Reserve space for error messages
5. **Debounce Validation**: For real-time validation, debounce by 300-500ms
6. **Preserve Input**: Don't clear valid input on form errors

## Usage Examples

### Long Input (Textarea) with Character Counter
```html
<div class="input-group">
  <label for="description" class="input-label">
    Description <span class="required">*</span>
  </label>
  
  <div class="input-wrapper">
    <textarea 
      id="description"
      class="input-textarea"
      placeholder="Enter a detailed description..."
      rows="5"
      maxlength="500"
      required
      aria-describedby="description-helper description-counter"
    ></textarea>
    <span id="description-counter" class="character-counter">
      0 / 500 characters
    </span>
  </div>
  
  <span id="description-helper" class="helper-text">
    Provide a clear and detailed description of your request.
  </span>
</div>
```

### Single Line Input with Error State
```html
<div class="input-group input-error">
  <label for="email" class="input-label">
    Email Address <span class="required">*</span>
  </label>
  
  <div class="input-wrapper">
    <input 
      type="email"
      id="email"
      class="input-text"
      placeholder="john@example.com"
      value="invalidemail"
      required
      aria-invalid="true"
      aria-describedby="email-error"
    />
  </div>
  
  <span id="email-error" class="error-message" role="alert">
    <svg class="error-icon" aria-hidden="true">...</svg>
    Please enter a valid email address
  </span>
</div>
```

### Search Input with Icon
```html
<div class="input-group input-search">
  <label for="search" class="input-label visually-hidden">
    Search
  </label>
  
  <div class="input-wrapper">
    <svg class="search-icon" aria-hidden="true">...</svg>
    <input 
      type="search"
      id="search"
      class="input-text"
      placeholder="Search..."
      aria-label="Search"
    />
    <button type="button" class="clear-button" aria-label="Clear search">
      <svg aria-hidden="true">×</svg>
    </button>
  </div>
</div>
```

### Disabled Input
```html
<div class="input-group">
  <label for="username" class="input-label">
    Username
  </label>
  
  <input 
    type="text"
    id="username"
    class="input-text"
    value="johndoe"
    disabled
    aria-disabled="true"
  />
  
  <span class="helper-text">
    Username cannot be changed after registration
  </span>
</div>
```

## Component Status

- ✅ Specification Complete
- ⏳ Implementation In Progress
- ⏳ Figma Components Pending
- ⏳ Code Examples Pending
- ⏳ Accessibility Testing Pending

## Related Components

- [Typography Guidelines](../guidelines/typography.md)
- [Color Guidelines](../guidelines/colors.md)
- [Spacing & Elevation](../guidelines/spacing-elevation.md)
- [Button Component](buttons.md)
- [Long Text Component](long-text.md)

## Version History

- **v1.0** (December 2025): Initial specification created with focus on long input (textarea) and comprehensive input variants
