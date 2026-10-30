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
- `/legal`: a contact and disclosure page; official legal documents were not supplied.
- Responsive layouts for phones, tablets, and desktop.
- CSS entrance, reveal, filter, hover, dialog, and accordion transitions, with reduced-motion support. Content remains visible without JavaScript.
- Native modal enrollment inquiries with keyboard dismissal, focus containment and restoration, and scroll locking.

## Integration boundaries

This is a frontend implementation. No authentication, payment, LMS, or lead-delivery backend was provided.

- Authentication controls clearly report that the provider is unavailable. They never simulate a successful login or claim an SMS was sent. Connect a real authentication provider before enabling account creation.
- Enrollment opens an inquiry dialog with the original course information and academy contact links. No payment is processed.
- The corporate form validates inputs and prepares an email draft. The user must open their email application and send it. No inquiry is silently stored or submitted.
- The lesson preview links to the Telegram channel named in the design. The Figma file supplied a poster, not a playable video source. Replace this handoff with a licensed video URL when supplied.
- Unspecified social destinations are displayed without fabricated profile links.
- The Figma design contains different phone numbers in the footer and final CTA; both were preserved.
- Copyright years are preserved from the respective Figma screens.

## Design source and remaining screens

[BIMPro Academy Figma copy](https://www.figma.com/design/rt3P3BklyRcvmLNQ67Qr6e/BIMPro-Academy--Copy-?node-id=3007-4146)

Implemented from high-fidelity design context for Home Page `5163:1718`, Registration `5166:8850`, and Sign in `5166:9018`. The hero artwork is an export of the original illustration node `5163:2201`; no page screenshot is used as an implementation asset.

Figma's Starter-plan tool limit blocked the high-fidelity context for the single-course, checkout, and success frames. Those screens have not been invented or marked complete. The dashboard section is explicitly marked “В РАЗРАБОТКЕ НЕ НАЧИНАТЬ!” in Figma and was left out of scope.

## Structure

- `src/app`: route composition, metadata, and shared styles.
- `src/components/home`: independent, section-level components.
- `src/components/auth`: shared registration/sign-in composition.
- `src/components/ui`: intrinsic-size SVG rendering and progressive scroll reveals.
- `src/lib/content.ts`: typed course and editorial content.
- `public/figma`: downloaded original assets; no temporary Figma URLs at runtime.

Server components are the default. Client components are limited to stateful interactions. Images use Next.js optimization and responsive sizes, and the hero image is preloaded.
