import { execSync } from 'node:child_process';
import { mkdirSync, readdirSync, readFileSync, rmSync, statSync, copyFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Usa la versione reale di package.json — stesso nome installer del rilascio
// ufficiale (es. "Quiz_Concorso Setup 1.0.2.exe"). release/ viene svuotata e
// riscritta a ogni lancio, quindi non serve un suffisso per distinguere le
// build locali: c'è sempre solo l'ultima.
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));
const version = pkg.version;

// electron-builder estrae ed effettua il rename dell'intero pacchetto Electron
// (win-unpacked/, migliaia di file): dentro una cartella sincronizzata da
// Google Drive/OneDrive/Dropbox questo va spesso in errore EPERM perché il
// client di sync blocca i file appena scritti. Per questo la build "pesante"
// avviene fuori, in una cartella temporanea; alla fine copiamo solo
// l'installer finale (pochi file) dentro release/, dove ci si aspetta di
// trovarlo — quella è un'operazione leggera e non soffre dello stesso problema.
const tempOutputDir = join(tmpdir(), 'quiz-concorso-release');
const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const releaseDir = join(projectRoot, 'release');

console.log(`\nBuild locale di test — versione ${version}`);
console.log(`Build temporanea: ${tempOutputDir}`);
console.log(`Installer finale: ${releaseDir}\n`);

// Pulizia della cartella temporanea: electron-builder non la svuota da solo,
// quindi senza questo passaggio gli installer delle build precedenti si
// accumulerebbero e finirebbero copiati anche loro in release/.
rmSync(tempOutputDir, { recursive: true, force: true });

execSync('npm run build', { stdio: 'inherit' });
execSync(
  `npx electron-builder --publish never -c.directories.output="${tempOutputDir}"`,
  { stdio: 'inherit' }
);

rmSync(releaseDir, { recursive: true, force: true });
mkdirSync(releaseDir, { recursive: true });

const copied = [];
for (const entry of readdirSync(tempOutputDir)) {
  const fullPath = join(tempOutputDir, entry);
  // Solo l'installer e il suo blockmap: niente file di debug/metadata di electron-builder.
  if (statSync(fullPath).isFile() && /\.exe(\.blockmap)?$/i.test(entry)) {
    copyFileSync(fullPath, join(releaseDir, entry));
    copied.push(entry);
  }
}

if (copied.length === 0) {
  console.warn(`\nAttenzione: nessun file trovato in ${tempOutputDir} da copiare in release/.`);
} else {
  console.log(`\nCopiati in release/:`);
  for (const name of copied) console.log(`  - ${name}`);
}
