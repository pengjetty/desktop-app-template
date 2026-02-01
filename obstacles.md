# Obstacles & Solutions Log

## 1. Disappearing Dropdown Menu
**Issue:** The theme dropdown in the header would close instantly when moving the mouse from the trigger button to the menu content. This was caused by a small pixel gap (margin) between the elements, triggering the `onMouseLeave` event.
**Solution:** Implemented a "Hover Tunnel" mechanism:
- Added a `150ms` grace period delay before closing on mouse leave.
- Added a transparent `::before` pseudo-element ("Safety Bridge") to visually and interactively fill the gap between the trigger and content.
