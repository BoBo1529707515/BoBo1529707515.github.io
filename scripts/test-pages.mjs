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
    if (route === 'publications' || route === 'talks') assert.ok(html.indexOf('id="talks"') < html.indexOf('id="publication"'), 'Talks precede papers');
    if (route === 'experience') assert.ok(html.indexOf('id="experience"') < html.indexOf('id="collaborations"'), 'Earlier experience precedes collaborations');
    assert.equal((html.match(/aria-current="page"/g) || []).length, 1);
    assert.ok(html.includes('portfolio-umami'));
    if (route === 'talks') assert.ok(html.includes('/assets/previews/talk-emotionally-intelligent-ai-'));
  });
}
test('talk photograph and CV are present in the static export', () => {
  assert.ok(existsSync('docs/assets/talk-emotionally-intelligent-ai.png'));
  assert.ok(existsSync('docs/Yibo_Yuan_Academic_CV_2026.pdf'));
});

test('MORI homepage includes the bilingual rednote collaboration update', () => {
  const home = readFileSync('docs/index.html', 'utf8');
  assert.ok(home.includes('I am also collaborating with rednote on the next phase of MORI.'));
  assert.ok(home.includes('同时，我正与小红书合作推进 MORI 项目的下一阶段。'));
  assert.ok(home.includes('src="/assets/rednote-icon.png"'));
  assert.ok(existsSync('docs/assets/rednote-icon.png'));
});
test('circuit explorer screenshot is available from the tools page', () => {
  assert.ok(existsSync('docs/assets/circuit-explorer-network.png'));
  assert.ok(readFileSync('docs/tools/index.html', 'utf8').includes('class="circuit-tool-preview" href="https://circuit-visualizer-fly.fly.dev/"'));
});
test('overview images open details, with an explicit external-tool exception', () => {
  const talks = readFileSync('docs/publications/index.html', 'utf8');
  assert.ok(talks.includes('aria-label="View talk details"'));
  assert.ok(!talks.includes('aria-label="Enlarge talk photograph"'));
  const experience = readFileSync('docs/experience/index.html', 'utf8');
  assert.ok(!experience.includes('href="/assets/tailin-wu-phase-gradient.png"'));
  assert.ok(experience.includes('View details'));
  assert.ok(readFileSync('docs/tools/index.html', 'utf8').includes('Open tool'));
});
test('collaboration summaries and future plans use consistent presentation', () => {
  const experience = readFileSync('docs/experience/index.html', 'utf8');
  assert.ok(experience.includes('Illinois Institute of Technology (IIT)'));
  assert.ok(experience.includes('REMOTE RESEARCH COLLABORATION'));
  assert.ok(experience.includes('伊利诺伊理工学院（IIT）'));
  assert.ok(experience.includes('远程科研合作'));
  assert.equal((experience.match(/class="text-details-trigger"/g) || []).length, 2);
  assert.ok(experience.includes('class="collaboration-image-trigger"'));
  assert.ok(experience.includes('/assets/previews/tailin-wu-phase-gradient-'));
  assert.ok(!experience.includes('Open experimental systems'));
  assert.ok(!experience.includes('class="breadth-figure'));
  const future = readFileSync('docs/future/index.html', 'utf8');
  assert.ok(!future.includes('<details class="future-'));
  assert.ok(future.includes('<section class="future-horizon"'));
});

test('large images have static responsive previews and keep full-resolution originals', () => {
  const manifest = JSON.parse(readFileSync('lib/image-previews.json', 'utf8'));
  for (const [original, item] of Object.entries(manifest)) {
    assert.ok(existsSync(`docs${original}`), `Original retained: ${original}`);
    for (const variant of item.variants) {
      assert.ok(existsSync(`docs${variant.src}`), `Preview exported: ${variant.src}`);
      assert.ok(variant.width <= item.width, 'No upscaling');
    }
  }
  const home = readFileSync('docs/index.html', 'utf8');
  const tags = [...home.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
  for (const name of ['mori-relational-power-overview', 'robotic-mouse-prototype', 'yibo-yuan']) {
    const tag = tags.find(tag => tag.includes(`/assets/previews/${name}-`));
    assert.ok(tag, `Optimized homepage image: ${name}`);
    assert.ok(tag.includes('srcSet=') || tag.includes('srcset='));
    assert.ok(tag.includes('sizes='));
    const asset = Object.entries(manifest).find(([path]) => path.includes(name))[1];
    const desktop = asset.variants.find(v => v.width >= 1600) ?? asset.variants.at(-1);
    assert.ok(desktop.bytes < asset.originalBytes * 0.4, `${name}: meaningful size reduction`);
  }
  assert.ok(tags.find(tag => tag.includes('/previews/yibo-yuan-')).includes('fetchPriority="high"'));
  const viewer = readFileSync('components/FigureViewer.tsx', 'utf8');
  assert.ok(viewer.includes('original={zoomed}'));
  assert.ok(viewer.includes('href={src}'));
});
