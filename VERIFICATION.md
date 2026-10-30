# Verification

- `npm run typecheck`: passed with strict TypeScript.
- `npm run build`: passed; `/`, `/register`, `/sign-in`, and `/legal` are statically prerendered.
- `npm run format:check`: passed.
- Browser checks at 320, 390, 768, 1280, and 1440 CSS pixels: no horizontal page overflow; course layout changes from one to two to three columns.
- All 64 rendered homepage image instances loaded successfully from local files. All 71 downloaded asset files are non-empty.
- Checked course filtering, native enrollment-dialog opening, Escape dismissal and focus restoration, and FAQ expansion/collapse.
- Checked corporate inquiry preparation using synthetic data; email-draft content and recipient were correct. No email was sent.
- Checked phone inputs reject invalid text and accept the displayed phone format.
- Checked account-mode and legal-page navigation. Unconfigured authentication displays an explicit unavailable state.
- Compared the desktop page against the Figma reference and inspected mobile layouts.

Saved previews are in `artifacts/`: `home-desktop.png`, `home-desktop-full.png`, `home-mobile.png`, and `sign-in-desktop.png`.

These were browser checks through the connected preview, not a committed automated end-to-end test suite. Authentication, payment processing, lead delivery, and playable video are not backed by services and were not represented as working integrations. See README.md for the design-access limitation affecting the remaining course and checkout screens.
