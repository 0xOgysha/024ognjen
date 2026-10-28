# 024ognjen responsive/CSS cleanup

- `src/app/globals.css` now contains only global variables/reset/base styles.
- Component/page CSS lives in `src/styles/` and is imported by the matching component/page.
- Added mobile fullscreen navigation to the home hero.
- Added phone breakpoints for Hero, Projects, About, Contact, Ogy and project detail pages.
- Existing desktop styling was preserved as the base layer; mobile rules override it below 768px, with extra tuning below 430/380/360px where needed.
- Footer retains its existing responsive rules because it was already working well.
