import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const expected = {
  '': ['research', 'companions'],
  tools: ['neuroengineering', 'tools', 'circuit-explorer'],
  experience: ['collaborations', 'experience'],
  publications: ['publication', 'talks'],
  future: ['future-plans'],
  talks: ['publication', 'talks'],
};
const allIds = Object.values(expected).flat();
for (const [route, ids] of Object.entries(expected)) {
  test(`exported /${route} has the correct content and working navigation`, () => {
    const html = readFileSync(`docs/${route ? route + '/' : ''}index.html`, 'utf8');
    for (const id of allIds) assert.equal(html.includes(`id="${id}"`), ids.includes(id), `${route}: ${id}`);
    for (const path of Object.keys(expected).filter(path => path !== 'talks')) assert.ok(html.includes(`href="/${path ? path + '/' : ''}"`), `Missing link to ${path}`);
    assert.ok(!html.includes('href="/talks/"'), 'Talks must no longer be a separate navigation item');
    const nav = html.match(/<nav\b[^>]*aria-label="Primary navigation"[^>]*>([\s\S]*?)<\/nav>/)?.[1] || '';
    assert.deepEqual([...nav.matchAll(/href="([^"]+)"/g)].map(match => match[1]), ['/', '/experience/', '/publications/', '/tools/', '/future/']);
    if (route === 'publications') assert.ok(html.indexOf('id="publication"') < html.indexOf('id="talks"'), 'Papers precede talks');
    assert.equal((html.match(/aria-current="page"/g) || []).length, 1);
    assert.ok(html.includes('portfolio-plausible'));
    if (route === 'talks') assert.ok(html.includes('/assets/talk-emotionally-intelligent-ai.png'));
  });
}
test('talk photograph and CV are present in the static export', () => {
  assert.ok(existsSync('docs/assets/talk-emotionally-intelligent-ai.png'));
  assert.ok(existsSync('docs/Yibo_Yuan_Academic_CV_2026.pdf'));
});
test('circuit explorer screenshot is available from the tools page', () => {
  assert.ok(existsSync('docs/assets/circuit-explorer-interface.png'));
  assert.ok(readFileSync('docs/tools/index.html', 'utf8').includes('class="circuit-tool-preview" href="https://circuit-visualizer-fly.fly.dev/"'));
});
