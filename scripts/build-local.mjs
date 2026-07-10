import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Versione solo per la build locale: non tocca mai package.json né git.
// Basata su timestamp, quindi cambia (ed è sempre crescente) a ogni lancio,
// così ogni installer di test è riconoscibile e non si confonde col precedente.
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
const stamp = new Date()
  .toISOString()
  .replace(/[-:]/g, '')
  .replace(/\.\d+Z$/, '')
  .replace('T', '.');
const localVersion = `${pkg.version}-local.${stamp}`;
const outputDir = join(tmpdir(), 'quiz-concorso-release');

console.log(`\nBuild locale di test — versione ${localVersion}`);
console.log(`Output: ${outputDir}\n`);

execSync('npm run build', { stdio: 'inherit' });
execSync(
  `npx electron-builder --publish never -c.directories.output="${outputDir}" -c.extraMetadata.version=${localVersion}`,
  { stdio: 'inherit' }
);
