const fs = require('fs');
const path = require('path');

const dbDir = path.join(__dirname, '../public/db');
const masterBankDir = path.join(dbDir, 'master_bank');

console.log('--- STARTING VERIFICATION ---');

// 1. Check manifest.json
const manifestPath = path.join(dbDir, 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
console.log(`Manifest loaded: ${manifest.length} concorsi registered.`);
for (const c of manifest) {
  const concorsoFile = path.join(dbDir, 'concorsi', `${c.id}.json`);
  if (!fs.existsSync(concorsoFile)) {
    throw new Error(`Concorso file missing: ${concorsoFile}`);
  }
  const concorsoData = JSON.parse(fs.readFileSync(concorsoFile, 'utf8'));
  console.log(`  - Concorso ${c.id}: ${concorsoData.titolo} (${concorsoData.moduli_esame.length} moduli)`);

  // Verify all sorgenti_dati
  for (const mod of concorsoData.moduli_esame) {
    for (const src of mod.sorgenti_dati) {
      const srcPath = path.join(masterBankDir, src);
      if (!fs.existsSync(srcPath)) {
        throw new Error(`Missing source file: ${src} for modulo ${mod.modulo_id}`);
      }
    }
  }
}

// 2. Scan all question files and verify schema and uniqueness
const allIds = new Set();
let totalQuestions = 0;
let fileCount = 0;

function checkQuestionsDir(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      checkQuestionsDir(full);
    } else if (item.name.endsWith('.json')) {
      fileCount++;
      const data = JSON.parse(fs.readFileSync(full, 'utf8'));
      console.log(`Checking ${path.relative(masterBankDir, full)}: ${data.length} questions`);
      for (const q of data) {
        totalQuestions++;
        if (!q.id) throw new Error(`Question missing id in ${full}`);
        if (allIds.has(q.id)) throw new Error(`DUPLICATE ID DETECTED: ${q.id} in ${full}`);
        allIds.add(q.id);

        if (!q.question && !q.text) throw new Error(`Missing question prompt in ${q.id}`);
        if (!Array.isArray(q.options) || q.options.length < 2) {
          throw new Error(`Invalid options in ${q.id}`);
        }
        if (!q.correctAnswerId) throw new Error(`Missing correctAnswerId in ${q.id}`);
        const validOptionIds = q.options.map(o => o.id);
        if (!validOptionIds.includes(q.correctAnswerId)) {
          throw new Error(`correctAnswerId ${q.correctAnswerId} not in options for ${q.id}`);
        }
        if (!q.level || !['base', 'intermedio', 'avanzato'].includes(q.level)) {
          console.warn(`Warning: unstandardized level ${q.level} in ${q.id}`);
        }
      }
    }
  }
}

checkQuestionsDir(masterBankDir);

console.log('--- VERIFICATION SUCCESSFUL ---');
console.log(`Total Master Bank Files: ${fileCount}`);
console.log(`Total Unique Questions: ${totalQuestions}`);
console.log(`Total Unique IDs in Set: ${allIds.size}`);
