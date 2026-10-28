import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const slugs = ['pljeskovac-016', 'andjini-sladoledi', 'andja-i-kolaci', 'meetogy'];
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
  if (slug === 'meetogy') {
    assert.ok(page.includes('Currently a private project idea.'), 'Private project note missing');
    assert.ok(!page.includes('WHAT') && !page.includes('GALLERY'), 'Private project exposes extra sections');
  } else {
    assert.ok(page.includes('WHAT') && page.includes('INSIDE'), `Missing features: ${slug}`);
  }
}
assert.equal((await fetch(`${base}/projects/amongmp`)).status, 200, 'Archived URL should remain accessible');
assert.ok(html.includes('MeetOgy') && !html.includes('AmongMP'), 'Featured project replacement failed');
for (const language of ['C#', 'C++', 'PHP', 'Python']) assert.ok(html.includes(language), `Missing language: ${language}`);
const archive = await fetch(`${base}/projects`);
assert.equal(archive.status, 200, 'Project archive route failed');
assert.ok((await archive.text()).includes('Filter projects'), 'Archive filters missing');
assert.equal((await fetch(`${base}/projects/does-not-exist`)).status, 404);
const sources = await Promise.all(['src/data/projects.js', 'src/data/projectPreviews.js', 'src/components/ProjectCard.js', 'src/app/page.js'].map(file => readFile(new URL(`../${file}`, import.meta.url), 'utf8')));
const assets = new Set(sources.join('\n').match(/\/(?:projects|images)\/[^"\s]+\.(?:png|jpg)/g));
for (const asset of assets) {
  await access(new URL(`../public${asset}`, import.meta.url));
  assert.equal((await fetch(`${base}${asset}`)).status, 200, `Missing asset: ${asset}`);
}
console.log(`PASS: home, 5 sections, project archive, ${slugs.length} project routes, unknown-route 404, ${assets.size} image assets.`);
