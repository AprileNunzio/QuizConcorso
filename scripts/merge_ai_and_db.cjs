const fs = require('fs');
const path = require('path');

// 1. Process AI
const aiPath = path.join(__dirname, '../public/db/master_bank/informatica/ai.json');
const aiExtraPath = path.join(__dirname, '../public/db/master_bank/informatica/ai_extra_1.json');

const aiData = JSON.parse(fs.readFileSync(aiPath, 'utf8'));
const aiExtra = JSON.parse(fs.readFileSync(aiExtraPath, 'utf8'));

// Take first 50 from aiExtra to get Q_INF_AI_051 to Q_INF_AI_100
const aiToAdd = aiExtra.slice(0, 50);
aiData.push(...aiToAdd);

// Balance options
const letters = ['A', 'B', 'C', 'D'];
aiData.forEach((q, idx) => {
  const targetLetter = letters[idx % 4];
  const currentCorrect = q.options.find(o => o.id === q.correctAnswerId);
  const others = q.options.filter(o => o.id !== q.correctAnswerId);
  
  const newOptions = [];
  let otherIdx = 0;
  for (let l of letters) {
    if (l === targetLetter) {
      newOptions.push({ id: l, text: currentCorrect.text });
    } else {
      newOptions.push({ id: l, text: others[otherIdx++].text });
    }
  }
  q.options = newOptions;
  q.correctAnswerId = targetLetter;
});

fs.writeFileSync(aiPath, JSON.stringify(aiData, null, 2), 'utf8');
fs.unlinkSync(aiExtraPath); // remove extra file

const aiCounts = { A: 0, B: 0, C: 0, D: 0 };
aiData.forEach(q => aiCounts[q.correctAnswerId]++);
console.log('AI updated:', aiData.length, 'Counts:', aiCounts);

// 2. Process Database
const dbPath = path.join(__dirname, '../public/db/master_bank/informatica/database.json');
const dbExtraPath = path.join(__dirname, '../public/db/master_bank/informatica/database_extra_1.json');

const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const dbExtra = JSON.parse(fs.readFileSync(dbExtraPath, 'utf8'));

// Take first 50 from dbExtra to get Q_INF_DB_051 to Q_INF_DB_100
const dbToAdd = dbExtra.slice(0, 50);
dbData.push(...dbToAdd);

// Balance options
dbData.forEach((q, idx) => {
  const targetLetter = letters[idx % 4];
  const currentCorrect = q.options.find(o => o.id === q.correctAnswerId);
  const others = q.options.filter(o => o.id !== q.correctAnswerId);
  
  const newOptions = [];
  let otherIdx = 0;
  for (let l of letters) {
    if (l === targetLetter) {
      newOptions.push({ id: l, text: currentCorrect.text });
    } else {
      newOptions.push({ id: l, text: others[otherIdx++].text });
    }
  }
  q.options = newOptions;
  q.correctAnswerId = targetLetter;
});

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
fs.unlinkSync(dbExtraPath); // remove extra file

const dbCounts = { A: 0, B: 0, C: 0, D: 0 };
dbData.forEach(q => dbCounts[q.correctAnswerId]++);
console.log('Database updated:', dbData.length, 'Counts:', dbCounts);
