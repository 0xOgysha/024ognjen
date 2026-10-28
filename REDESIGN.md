# 024ognjen portfolio redesign

## Run locally

Use Node.js 20.9 or newer (validated with Node 24).

```sh
npm ci
npm run build
npm start
```

Development: `npm run dev`. Production checks, after starting the production server: `npm run test:smoke`.

## Included

- Navy split-screen hero, local workspace photo and restrained connecting animations.
- Selected Work with category filters; Pljeskovac 016 featured with real desktop and mobile screenshots.
- Existing three project routes, descriptions, features and screenshot galleries retained.
- About with supplied raven emblem, Services & Skills, Tech Stack, email contact and separate footer.
- OGY local V1 assistant retained, with Pljeskovac support and accessible closed-panel behavior.
- Responsive layout, mobile navigation, visible keyboard focus, skip link, reduced-motion support.
- Next.js updated to 16.4.3 and dependency fixes locked in package-lock.json.

Contact uses the original mailto email link. It opens the visitor’s email application; no form backend is implied. OGY V1 remains the original local rules-based assistant.

Pljeskovac is showcased as a project. Its PHP/BizCore services are separate from this Next.js app. See ASSET_CREDITS.md for image provenance.

Work belongs on feature/portfolio-redesign. The main branch is not a deployment target for this handoff.
