# BIMPro Academy

Responsive implementation of the supplied BIMPro Academy Figma design, built with Next.js App Router, React, strict TypeScript, and plain CSS. Fonts and original Figma assets are served locally.

## Run

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000.

```sh
npm run typecheck
npm run build
npm run start
npm run format:check
```

## Implemented

- `/`: complete Home Page, including six courses, category filters, mentor, lesson preview, corporate inquiry form, FAQ, and footer.
- `/register` and `/sign-in`: authentication screens from the design, with accessible labels, native validation, and account-mode navigation.
- `/checkout`: Revit MEP purchase screen with customer validation, four payment methods, promo-code handling, and reactive order totals.
- `/checkout/success`: clearly labeled design preview of the purchase confirmation, receipt, package, and device-license layout.
- `/legal`: a contact and disclosure page; official legal documents were not supplied.
- Responsive layouts for phones, tablets, and desktop.
- CSS entrance, reveal, filter, hover, dialog, and accordion transitions, with reduced-motion support. Content remains visible without JavaScript.
- Native modal enrollment inquiries with keyboard dismissal, focus containment and restoration, and scroll locking.

## Integration boundaries

This is a frontend implementation. No authentication, payment, LMS, or lead-delivery backend was provided.

- Authentication controls clearly report that the provider is unavailable. They never simulate a successful login or claim an SMS was sent. Connect a real authentication provider before enabling account creation.
- Enrollment opens an inquiry dialog with the original course information and academy contact links. The OViK course links to its checkout offer; the differing catalog and checkout prices are preserved from their respective Figma screens. No payment is processed.
- Checkout validates customer details and consent locally, then explicitly reports that the payment provider is unavailable. No personal data is sent or persisted, and no successful payment is simulated. The success route is a static, no-index preview using Figma sample data; real receipts require server-verified payment callbacks.
- The source contains conflicting installment amounts and periods. Checkout directs installment questions to the academy rather than computing a misleading financing schedule.
- PDF receipts, RTE files, device enforcement, Telegram delivery, and LMS access require actual services/assets. Download and bot controls report their unavailable state; the LMS action opens sign-in.
- The corporate form validates inputs and prepares an email draft. The user must open their email application and send it. No inquiry is silently stored or submitted.
- The lesson preview links to the Telegram channel named in the design. The Figma file supplied a poster, not a playable video source. Replace this handoff with a licensed video URL when supplied.
- Unspecified social destinations are displayed without fabricated profile links.
- The Figma design contains different phone numbers in the footer and final CTA; both were preserved.
- Copyright years are preserved from the respective Figma screens.

## Design source and remaining screens

[BIMPro Academy Figma copy](https://www.figma.com/design/rt3P3BklyRcvmLNQ67Qr6e/BIMPro-Academy--Copy-?node-id=3007-4146)

Implemented from high-fidelity design context for Home Page `5163:1718`, Registration `5166:8850`, and Sign in `5166:9018`. The hero artwork is an export of the original illustration node `5163:2201`; no page screenshot is used as an implementation asset.

Checkout `5166:7388` and checkout success `5166:8396` were added from high-fidelity context in the follow-up. The original file still denies access; the user-shared copy remains the accessible source. Figma’s Starter-plan tool limit returned before the full single-course and freemium contexts could be retrieved. Those two pages remain pending; sparse metadata was not treated as a complete implementation specification. The dashboard section is explicitly marked “В РАЗРАБОТКЕ НЕ НАЧИНАТЬ!” in Figma and was left out of scope.

## Structure

- `src/app`: route composition, metadata, and shared styles.
- `src/components/home`: independent, section-level components.
- `src/components/auth`: shared registration/sign-in composition.
- `src/components/checkout`: shared purchase shell, interactive checkout, order summary, and success preview.
- `src/lib/checkout.ts`: typed checkout offer and payment-method definitions.
- `src/components/ui`: intrinsic-size SVG rendering and progressive scroll reveals.
- `src/lib/content.ts`: typed course and editorial content.
- `public/figma`: downloaded original assets; no temporary Figma URLs at runtime.

Server components are the default. Client components are limited to stateful interactions. Images use Next.js optimization and responsive sizes, and the hero image is preloaded.
