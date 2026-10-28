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

- Reference-matched neon blue hero with edge-to-edge desk artwork, compact typography, pill buttons and section shortcuts.
- Four illustrated Selected Work cards in one desktop row; separate /projects archive preserves category filters. Pljeskovac 016 retains real desktop and mobile screenshots in its detail gallery.
- Existing three project routes, descriptions, features and screenshot galleries retained.
- Combined About / Services & Skills row, individual technology icons, animated constellation, email contact and a compact footer with a glowing blue divider.
- OGY local V1 assistant retained, with Pljeskovac support and accessible closed-panel behavior.
- Responsive layout, mobile navigation, expandable About content, visible keyboard focus, skip link, reduced-motion support and locally served Inter typography.
- Next.js updated to 16.4.3 and dependency fixes locked in package-lock.json.

Contact uses the original mailto email link. It opens the visitor’s email application; no form backend is implied. OGY V1 remains the original local rules-based assistant.

Pljeskovac is showcased as a project. Its PHP/BizCore services are separate from this Next.js app. See ASSET_CREDITS.md for image provenance.

Current illustrations were generated using built-in ImageGen from the supplied neon reference. IMAGE_PROMPTS.md records the saved asset paths and exact briefs. They are decorative covers, while project galleries retain actual website captures. The homepage count uses four showcased projects rather than an unverified completion statistic.

Work belongs on feature/portfolio-redesign. The main branch is not a deployment target for this handoff.
