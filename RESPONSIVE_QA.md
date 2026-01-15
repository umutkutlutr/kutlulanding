# Responsive QA Checklist

## Manual Viewport Testing

Test the following viewport widths:
- [ ] 320px (iPhone SE)
- [ ] 360px (Small Android)
- [ ] 390px (iPhone 12/13/14)
- [ ] 412px (Pixel 5)
- [ ] 768px (iPad Portrait)
- [ ] 1024px (iPad Landscape / Small Desktop)
- [ ] 1440px (Desktop)

## Critical Checks

### 1. No Horizontal Scrolling
- [ ] Scroll entire page at each breakpoint
- [ ] Verify `document.body.scrollWidth <= window.innerWidth`
- [ ] Check for any overflow-x issues

### 2. Navigation
- [ ] Mobile menu opens/closes correctly (≤768px)
- [ ] Hamburger icon visible on mobile
- [ ] Menu closes on route change
- [ ] Menu closes on outside click
- [ ] All nav links have ≥44px tap targets
- [ ] Language toggle works on mobile
- [ ] CTA button accessible on mobile

### 3. Typography
- [ ] All headings scale properly with clamp()
- [ ] Text remains readable at 320px
- [ ] Line length doesn't exceed 75ch on desktop
- [ ] Line-height appropriate (1.5-1.7 for body)

### 4. Forms
- [ ] All inputs full width on mobile
- [ ] Inputs have min-height of 44px
- [ ] Labels readable
- [ ] Submit buttons full width on mobile
- [ ] Keyboard types correct (email, tel)
- [ ] Focus states visible

### 5. Grids & Cards
- [ ] Expertise: 1 col mobile, 2 col tablet, 2 col desktop
- [ ] Industries: 1 col mobile, 2 col tablet, 3 col desktop
- [ ] Work/References: 2 col mobile, 3 col tablet, 4 col desktop
- [ ] Cards don't have fixed heights that break on mobile
- [ ] Card content doesn't overflow

### 6. Hero Section
- [ ] Buttons stack vertically on mobile
- [ ] Buttons full width on mobile
- [ ] Typography scales properly
- [ ] Background elements don't overflow

### 7. Footer
- [ ] Columns stack on mobile
- [ ] All links have ≥44px tap targets
- [ ] Email address doesn't overflow
- [ ] Addresses readable on mobile

### 8. Process Section
- [ ] Steps stack properly on mobile
- [ ] Connecting line hidden on mobile
- [ ] Number circles scale appropriately
- [ ] Content readable

### 9. Section Spacing
- [ ] Consistent padding: py-14 md:py-20 lg:py-32
- [ ] Container padding: px-4 md:px-6 lg:px-8
- [ ] No excessive white space on mobile

### 10. Background Elements
- [ ] Decorative orbs scale down on mobile
- [ ] Don't cause overflow
- [ ] Don't interfere with content

## Browser Testing
- [ ] Chrome (mobile & desktop)
- [ ] Safari (iOS & macOS)
- [ ] Firefox
- [ ] Edge

## Performance
- [ ] No layout shift on load
- [ ] Smooth scrolling
- [ ] Animations don't cause jank
- [ ] Touch interactions responsive

## Accessibility
- [ ] All interactive elements ≥44px
- [ ] Focus states visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

