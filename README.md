# Quiz & Concorsi

**Applicazione desktop per Windows per la preparazione a concorsi pubblici**, con un motore di ripasso a ripetizione dilazionata (spaced repetition, algoritmo SM-2), simulazioni d'esame configurabili e una dashboard statistica completa.

[![Build and Release](https://github.com/AprileNunzio/QuizConcorso/actions/workflows/build.yml/badge.svg)](https://github.com/AprileNunzio/QuizConcorso/actions/workflows/build.yml)
[![Latest Release](https://img.shields.io/github/v/release/AprileNunzio/QuizConcorso)](https://github.com/AprileNunzio/QuizConcorso/releases/latest)
[![Platform](https://img.shields.io/badge/platform-Windows-0891b2)](#installazione)
![Status](https://img.shields.io/badge/status-active-6d5bff)

---

## Indice

- [Cosa fa](#cosa-fa)
- [Funzionalità](#funzionalità)
- [Installazione](#installazione)
- [Stack tecnico](#stack-tecnico)
- [Sviluppo locale](#sviluppo-locale)
- [Script disponibili](#script-disponibili)
- [Struttura del progetto](#struttura-del-progetto)
- [Master Bank: come aggiungere domande](#master-bank-come-aggiungere-domande)
- [Rilascio di una nuova versione](#rilascio-di-una-nuova-versione)
- [Licenza](#licenza)

## Cosa fa

Quiz & Concorsi organizza lo studio per un concorso pubblico (o per qualsiasi banca dati a scelta multipla) in tre modalità: allenamento libero per materia, simulazione d'esame ufficiale e ripasso intelligente basato su ciò che stai davvero dimenticando. Ogni risposta alimenta un motore di analisi che stima un QI di preparazione, traccia l'andamento nel tempo e programma automaticamente quando ogni domanda deve ripresentarsi.

## Funzionalità

**Master Bank organizzata a livelli**
- Le materie sono raggruppate in Categorie → Sottocategorie, derivate automaticamente dalla struttura della banca dati
- Filtro per livello di difficoltà (Base / Intermedio / Avanzato) per ogni sottocategoria
- Indicatore di padronanza in tempo reale su ogni materia

**Simulazione d'esame**
- **Automatica**: mix casuale di domande da tutti i moduli previsti dal bando, a tempo
- **Personalizzata**: scegli quante domande e quale livello includere per ciascuna materia — le materie già padroneggiate vengono escluse in automatico dai suggerimenti

**Ripasso Intelligente (spaced repetition)**
- Motore di scheduling basato sull'algoritmo **SM-2** (lo stesso di Anki/SuperMemo): ogni domanda torna a farsi vedere esattamente quando stai per dimenticarla
- Livelli di padronanza per domanda (Nuova → In apprendimento → In consolidamento → Consolidata → Padroneggiata)
- Previsione del carico di ripasso nei prossimi 14 giorni, limite configurabile di "nuove domande al giorno"

**Dashboard statistiche**
- QI stimato con trend storico, precisione, streak di studio, tempo di risposta medio, tempo totale investito
- Grafici per ogni metrica: andamento nel tempo, radar per materia, heatmap di attività, ranking delle aree da migliorare
- Insight testuali generati automaticamente (punti di forza, punti deboli, segnali di miglioramento o calo)

**Altro**
- Aggiornamenti automatici in-app (electron-updater) con notifica e installazione con un click
- Interfaccia interamente in italiano, navigazione con "Indietro"/"Dashboard" coerente su ogni schermata

## Installazione

1. Vai alla pagina delle [Release](https://github.com/AprileNunzio/QuizConcorso/releases/latest)
2. Scarica l'ultimo installer `.exe`
3. Eseguilo e segui la procedura guidata (puoi scegliere la cartella di installazione)

L'app verifica automaticamente la presenza di aggiornamenti a ogni avvio e ti avvisa quando uno è pronto da installare.

## Stack tecnico

| Livello | Tecnologia |
|---|---|
| UI | React 19 + TypeScript, Vite |
| Grafici | Componenti SVG custom (nessuna libreria di charting esterna) |
| Desktop shell | Electron 43, `contextIsolation` attivo, nessuna integrazione Node lato renderer |
| Aggiornamenti | electron-updater + GitHub Releases |
| Persistenza dati | `localStorage` (statistiche, progressi, scheduling SM-2) |
| Dati domande | File JSON statici versionati nel repository (`public/db`) |
| CI/CD | GitHub Actions → build Windows + pubblicazione automatica della Release |

## Sviluppo locale

Requisiti: Node.js 22+ e npm.

```bash
git clone https://github.com/AprileNunzio/QuizConcorso.git
cd QuizConcorso
npm install
npm run start        # avvia Vite + Electron in modalità sviluppo
```

Per lavorare solo sull'interfaccia nel browser (senza Electron):

```bash
npm run dev
```

## Script disponibili

| Comando | Descrizione |
|---|---|
| `npm run dev` | Avvia il dev server Vite (solo browser) |
| `npm run start` / `npm run electron:dev` | Avvia l'app completa in Electron con hot reload |
| `npm run build` | Type-check + build di produzione del bundle web |
| `npm run electron:build` | Build completa + packaging dell'installer Windows in `release/` |
| `npm run lint` | Lint del codice con oxlint |
| `npm run preview` | Serve il bundle di produzione già buildato |

## Struttura del progetto

```
├── electron/              # Processo main + preload di Electron
├── public/db/             # Master Bank: manifest, concorsi, domande (JSON)
├── src/
│   ├── components/        # Pagine e componenti UI
│   │   └── charts/        # Grafici SVG custom (line, radar, gauge, heatmap, ...)
│   ├── services/           # Logica applicativa: motore quiz, statistiche, spaced repetition
│   ├── utils/               # Funzioni di supporto (shuffle, categorizzazione)
│   └── types.ts             # Tipi condivisi
└── .github/workflows/      # Pipeline di build e rilascio
```

## Master Bank: come aggiungere domande

Ogni concorso è descritto in `public/db/concorsi/<id>.json` e referenziato in `public/db/manifest.json`. Le domande vivono in `public/db/master_bank/<categoria>/<sottocategoria>.json`, come array di oggetti:

```json
{
  "id": "Q_ESEMPIO_001",
  "question": "Testo della domanda",
  "options": [
    { "id": "A", "text": "Opzione A" },
    { "id": "B", "text": "Opzione B" }
  ],
  "correctAnswerId": "A",
  "explanation": "Spiegazione mostrata dopo la risposta",
  "hint": "Suggerimento opzionale",
  "level": "base"
}
```

`level` è opzionale (`base` | `intermedio` | `avanzato`, default `base`). La categoria viene dedotta automaticamente dal percorso del file (es. `informatica/reti.json` → categoria "Informatica"), quindi basta creare una nuova sottocartella per introdurre una nuova categoria.

## Rilascio di una nuova versione

1. Aggiorna `version` in `package.json`
2. Commit e push su `main`
3. Crea e pusha un tag `vX.Y.Z` — la GitHub Action buildera l'installer Windows e pubblicherà automaticamente la Release con il file `.exe` allegato

```bash
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin vX.Y.Z
```

## Licenza

© 2026 NunzioTech. Tutti i diritti riservati.
