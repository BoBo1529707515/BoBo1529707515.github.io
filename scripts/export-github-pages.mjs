import { spawn, spawnSync } from 'node:child_process';
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const projectRoot = process.cwd();
const clientDir = path.resolve(projectRoot, 'dist', 'client');
const outputDir = path.resolve(projectRoot, 'docs');
const localUrl = 'http://127.0.0.1:8787/';
const productionUrl = 'https://bobo1529707515.github.io';

if (path.dirname(outputDir) !== projectRoot) {
  throw new Error('Refusing to replace an output directory outside the project root.');
}

async function readRenderedPage() {
  try {
    const existing = await fetch(localUrl);
    if (existing.ok) return { html: await existing.text(), server: null };
  } catch {
    // Start a temporary local Worker below.
  }

  const executable = 'npx';
  const server = spawn(
    executable,
    ['wrangler', 'dev', '--config', 'dist/server/wrangler.json', '--ip', '127.0.0.1', '--port', '8787'],
    {
      cwd: projectRoot,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: process.platform === 'win32',
      detached: process.platform !== 'win32',
    },
  );

  let diagnostics = '';
  server.stdout.on('data', (chunk) => { diagnostics += chunk.toString(); });
  server.stderr.on('data', (chunk) => { diagnostics += chunk.toString(); });

  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Local render server exited early.\n${diagnostics}`);
    }
    try {
      const response = await fetch(localUrl);
      if (response.ok) return { html: await response.text(), server };
    } catch {
      // The Worker is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  server.kill();
  throw new Error(`Timed out while rendering the static homepage.\n${diagnostics}`);
}

function rewriteForStaticHosting(html) {
  const directImages = html.replace(
    /\/_next\/image\?url=([^&"']+)(?:&amp;|&)w=\d+(?:&amp;|&)q=\d+/g,
    (_, encodedUrl) => decodeURIComponent(encodedUrl),
  );

  return directImages
    .replaceAll('http://localhost:3000', productionUrl)
    .replaceAll('http://127.0.0.1:8787', productionUrl);
}

const { html, server } = await readRenderedPage();

try {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await cp(clientDir, outputDir, { recursive: true });
  const staticHtml = rewriteForStaticHosting(html);
  await writeFile(path.join(outputDir, 'index.html'), staticHtml, 'utf8');
  await writeFile(path.join(outputDir, '404.html'), staticHtml, 'utf8');
  await writeFile(path.join(outputDir, '.nojekyll'), '', 'utf8');
  console.log(`GitHub Pages export ready: ${outputDir}`);
} finally {
  if (server) {
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
    } else {
      try {
        process.kill(-server.pid, 'SIGTERM');
      } catch {
        server.kill('SIGTERM');
      }
    }
    server.stdout.destroy();
    server.stderr.destroy();
  }
}
