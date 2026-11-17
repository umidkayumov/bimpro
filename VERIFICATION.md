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

## Additional purchase screens

Implemented `/checkout` from Figma `5166:7388` and `/checkout/success` from `5166:8396`, using the accessible user-shared copy. Original file access was denied. The course-page and freemium contexts remain incomplete because Figma's Starter-plan tool limit returned.

- Checkout checked at 320, 390, 768, 1280, and 1440px: document width equals viewport width, zero broken images.
- Success preview checked at 320, 390, 768, 1280, and 1440px: no horizontal overflow. Original asset slots and intrinsic dimensions inspected on desktop.
- Switched to Payme: selected radio, explanation, and payment-button name updated.
- Invalid promo removes discount and changes total to 3,800,000 UZS; lowercase valid promo restores 2,900,000 UZS.
- Customer fields accept a formatted Uzbek phone number. Native required fields and consent gate submission. A valid local submission explicitly reports provider unavailability; no request or transaction is made.
- Success RTE download explicitly reports an unavailable sample asset. Static receipt/device details remain labeled as a design preview.
- No browser warnings or errors were captured for the checkout.
- Screenshots: `artifacts/checkout-desktop.jpg`, `artifacts/checkout-success-desktop.jpg`.
- The official npm audit reports one moderate inherited Next.js advisory, GHSA-mfr8-8qww-v76h, affecting Next 16.4.3, with no fix reported by npm. The described `unstable_cache`/`use cache` combination is not used in this project. No deployment was performed.
