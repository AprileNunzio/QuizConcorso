<div align="center">

# 🏛️ Quiz & Concorsi v2.0.0
### *Enterprise Public Exam Simulator & Adaptive Spaced Repetition Platform*

[![Release](https://img.shields.io/badge/release-v2.0.0-6366f1?style=for-the-badge&logo=github)](https://github.com/AprileNunzio/QuizConcorso/releases/latest)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Electron](https://img.shields.io/badge/Electron-43.0-47848f?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](LICENSE)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows_x64-0284c7?style=for-the-badge&logo=windows)](https://github.com/AprileNunzio/QuizConcorso/releases/latest)

<p align="center">
  <b>Simulatore d'esame professionale per concorsi pubblici</b>, potenziato da algoritmi di ripetizione spaziata <b>SM-2</b>, stima predittiva del <b>Quoziente Intellettivo d'esame (QI)</b>, sincronizzazione banche dati anti-cache e architettura desktop ad altissime prestazioni.
</p>

[📥 Scarica Installer v2.0.0](https://github.com/AprileNunzio/QuizConcorso/releases/latest) • [📖 Documentazione](#-architettura-del-software) • [🎯 Concorsi Catalogati](#-concorsi-supportati--syllabus) • [🛠️ Sviluppo](#-quick-start-locale)

---

</div>

## ✨ Perché Quiz & Concorsi 2.0?

Quiz & Concorsi v2.0 è stato riprogettato da zero secondo i principi della **Clean Architecture** per eliminare ogni collo di bottiglia prestazionale, garantire avvii istantanei e aggiornamenti trasparenti della banca dati senza richiedere la reinstallazione continua del software.

| Caratteristica | Quiz & Concorsi v2.0.0 | Simulatori Tradizionali |
| :--- | :--- | :--- |
| ⚡ **Tempo di Avvio (Boot)** | **< 50ms** (Zero-blocking, cache IndexedDB offline) | 3 - 8 secondi |
| 🧠 **Algoritmo di Apprendimento** | **SuperMemo SM-2** con 5 stadi di padronanza | Domande statiche o casuali |
| 🔄 **Aggiornamento Banche Dati** | **Online Sync Anti-Cache** con manifest incrementale | Reinstallazione obbligatoria dell'app |
| 🎯 **Livelli di Difficoltà** | **Base • Ufficiale • Avanzato • Completo** | Difficoltà fissa indifferenziata |
| 🛡️ **Auto-Updater Desktop** | **Enterprise Download Engine** (MB/s, ETA, bar progress) | Crash o popup bloccanti |
| 📊 **Dashboard Analitica** | Stima QI storico, SVG custom zero-dependency, Heatmap | Semplice percentuale di risposte |

---

## 🚀 Funzionalità Chiave

### 🧠 1. Spaced Repetition (SuperMemo SM-2)
* **Algoritmo Euristico di Memoria**: Programma automaticamente il ripasso delle domande esattamente quando la curva dell'oblio di Ebbinghaus ne prevede il decadimento mnemonico.
* **Ciclo a 5 Stadi**: `Nuova` ➔ `In Apprendimento` ➔ `In Consolidamento` ➔ `Consolidata` ➔ `Padroneggiata`.
* **Protezione da Sovraccarico**: Stima predittiva del carico cognitivo sui 14 giorni successivi con limite configurabile di nuove schede giornaliere.

### ⚡ 2. Zero-Blocking Boot Architecture
* **Stale-While-Revalidate Engine**: L'interfaccia si attiva all'istante visualizzando i dati memorizzati in locale (IndexedDB con fallback trasparente a `localStorage`).
* **Resilienza di Rete**: Timeout hardware a 1200ms sulla sincronizzazione di rete all'avvio. La UI non congela mai, garantendo reattività costante a 60fps.

### 🔄 3. Aggiornamento Banche Dati Online & Menu Nativo
* **Anti-Cache Nonce Pipeline**: Scarica solo le domande modificate o i nuovi moduli tramite query string univoche anti-proxy.
* **Integrazione Menu Windows**: Scorciatoia rapida `Ctrl+Shift+D` per sincronizzare all'istante l'archivio senza riavviare l'applicazione.

### 🎯 4. Concorsi & Calibrazione della Difficoltà
* **Deduplicazione Universale**: Ogni quesito possiede un identificativo hash univoco per prevenire qualsiasi ridondanza tra moduli diversi.
* **Filtro Livelli**: Gli aspiranti candidati possono isolare i quesiti ufficiali di concorso, esercitarsi sui fondamenti (Base) o spingersi su domande iper-specialistiche (Avanzate).

---

## 🏛️ Concorsi Supportati & Syllabus

Quiz & Concorsi include banche dati costantemente aggiornate e pronte all'uso:

```
📦 public/db/
 ┣ 📂 concorsi/
 ┃ ┣ 📜 inps-1695-funzionari.json     # INPS - 1.695 Funzionari PECS
 ┃ ┗ 📜 inps-499-informatici.json     # INPS - 499 Assistenti Informatici
 ┗ 📂 master_bank/
   ┣ 📂 diritto/                      # Costituzionale, Amministrativo, Lavoro
   ┣ 📂 economia/                     # Economia Politica, Contabilità Pubblica
   ┣ 📂 informatica/                  # Reti, DBMS, Cybersecurity, Architetture
   ┣ 📂 inglese/                      # Comprensione del testo & Grammatica
   ┗ 📂 logica/                       # Deduttiva, Numerica, Comprensione Verbale
```

---

## 🏗️ Architettura del Software

Il progetto adotta la **Clean Architecture** con **Separation of Concerns (SoC)** e suddivisione modulare per cartelle verticali:

```
src/
 ┣ 📂 features/
 ┃ ┣ 📂 boot/            # Inizializzazione applicativa zero-blocking (<50ms)
 ┃ ┣ 📂 database/        # IndexedDB Client, Sync Worker, Repository
 ┃ ┗ 📂 updater/         # Enterprise Auto-Updater UI & download manager
 ┣ 📂 components/        # Layout reattivo, Navbar, Modali e Dashboard
 ┃ ┗ 📂 charts/          # SVG Chart Engines (Line, Radar, Gauge, Heatmap)
 ┣ 📂 services/          # QuizEngine, SM-2 Scheduler, QI Evaluator
 ┣ 📂 utils/             # Helper di hashing, categorizzazione, shuffle
 ┗ 📂 types/             # Domain Types & Model Interfaces
```

---

## ⌨️ Scorciatoie da Tastiera

| Tasto Rapido | Azione |
| :--- | :--- |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> | **Sincronizzazione Forzata Banche Dati** (Bypassa cache locale) |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | **Ripristino Database Predefinito** |
| <kbd>F11</kbd> | Attiva / Disattiva Schermo Intero |
| <kbd>Esc</kbd> | Chiudi finestre di dialogo o torna al menu |

---

## 🛠️ Quick Start Locale

### Prerequisiti
* **Node.js** v22.x LTS o superiore
* **npm** v10.x o superiore

### Installazione ed Esecuzione
```bash
# 1. Clona il repository
git clone https://github.com/AprileNunzio/QuizConcorso.git
cd QuizConcorso

# 2. Installa le dipendenze
npm install

# 3. Avvia l'applicazione completa (React + Electron con Hot-Reload)
npm run start
```

### Script di Build & Packaging
```bash
# Compilazione e validazione TypeScript
npm run build

# Creazione pacchetto installer Windows (.exe)
npm run electron:build
```

---

## 📦 Pipeline di Rilascio Zero-Bloat

Il build system è configurato per produrre installer compatti ed efficienti:
* **Esclusione dei file non necessari**: I sorgenti TypeScript (`src/`), file temporanei e log di sviluppo vengono esclusi dal pacchetto finale tramite whitelist nativa in `electron-builder`.
* **Continuous Integration**: GitHub Actions compila su runner isolati `windows-latest` e pubblica automaticamente la release ufficiale con il relativo blocco crittografico di verifica (`latest.yml`).

---

## 👥 Governance & Community

* [Linee Guida di Contribuzione (CONTRIBUTING.md)](CONTRIBUTING.md)
* [Codice di Condotta (CODE_OF_CONDUCT.md)](CODE_OF_CONDUCT.md)
* [Politica di Sicurezza (SECURITY.md)](SECURITY.md)

---

## 📄 Licenza

Distribuito sotto licenza **MIT**. Consulta il file [`LICENSE`](LICENSE) per ulteriori dettagli.

Copyright © 2026 **Aprile Nunzio** ([NunzioTech](https://github.com/AprileNunzio)). Tutti i diritti riservati.
