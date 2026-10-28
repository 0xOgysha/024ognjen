import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const slugs = ['pljeskovac-016', 'andjini-sladoledi', 'andja-i-kolaci', 'amongmp'];
const home = await fetch(base);
assert.equal(home.status, 200);
const html = await home.text();
for (const section of ['projects', 'about', 'services', 'stack', 'contact']) {
  assert.ok(html.includes(`id="${section}"`), `Missing section: ${section}`);
}
for (const slug of slugs) {
  const response = await fetch(`${base}/projects/${slug}`);
  assert.equal(response.status, 200, `Project route failed: ${slug}`);
  const page = await response.text();
  assert.ok(page.includes('WHAT') && page.includes('INSIDE'), `Missing features: ${slug}`);
}
assert.equal((await fetch(`${base}/projects/does-not-exist`)).status, 404);
const source = await readFile(new URL('../src/data/projects.js', import.meta.url), 'utf8');
const assets = new Set(source.match(/\/projects\/[^"\s]+\.(?:png|jpg)/g));
for (const asset of assets) {
  await access(new URL(`../public${asset}`, import.meta.url));
  assert.equal((await fetch(`${base}${asset}`)).status, 200, `Missing asset: ${asset}`);
}
console.log(`PASS: home, 5 sections, ${slugs.length} project routes, unknown-route 404, ${assets.size} image assets.`);
