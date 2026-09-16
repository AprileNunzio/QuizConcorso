const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/db/master_bank/gestione_pa/pianificazione_controllo.json');
const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

const newQuestions = [
  {
    id: "Q_PECS_GEST_051",
    question: "Cos'è il PIAO (Piano Integrato di Attività e Organizzazione) introdotto dall'art. 6 del D.L. 9 giugno 2021, n. 80 (conv. in L. 113/2021)?",
    options: [
      { id: "A", text: "Il documento unico di programmazione e governance che assorbe e unifica molteplici piani precedentemente autonomi (Piano della Performance, PTPCT, Fabbisogni di personale, Lavoro agile e Formazione)" },
      { id: "B", text: "Un piano di emergenza per la sicurezza antincendio degli uffici pubblici" },
      { id: "C", text: "Il bilancio consuntivo dello Stato approvato dalla Ragioneria Generale" },
      { id: "D", text: "Un elenco dei dipendenti pubblici prossimi alla pensione" }
    ],
    correctAnswerId: "A",
    explanation: "Il PIAO è lo strumento di semplificazione e pianificazione strategica integrata della PA che assorbe il Piano della Performance, il Piano Triennale di Prevenzione della Corruzione e Trasparenza, il Piano dei Fabbisogni (PTFP), il Piano Organizzativo del Lavoro Agile (POLA) e il Piano di Formazione.",
    hint: "Documento unico integrato che accorpa Performance, Anticorruzione, Fabbisogni e Lavoro agile.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_052",
    question: "Entro quale termine ordinario le pubbliche amministrazioni con più di 50 dipendenti devono adottare il PIAO ai sensi dell'art. 6 del D.L. 80/2021 e del D.P.R. 81/2022?",
    options: [
      { id: "A", text: "Entro il 31 gennaio di ciascun anno (o comunque entro 30 giorni dall'approvazione del bilancio di previsione)" },
      { id: "B", text: "Entro il 31 dicembre a consuntivo dell'esercizio" },
      { id: "C", text: "Entro il 30 giugno congiuntamente alla dichiarazione dei redditi" },
      { id: "D", text: "Ogni cinque anni all'inizio della legislatura" }
    ],
    correctAnswerId: "A",
    explanation: "Il termine ordinario per l'adozione del PIAO è fissato al 31 gennaio di ciascun anno, ovvero entro trenta giorni dall'approvazione del bilancio di previsione da parte dell'organo competente.",
    hint: "31 gennaio di ogni anno (o 30 giorni dal bilancio di previsione).",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_053",
    question: "Quali sono le quattro sezioni fondamentali in cui si articola la struttura del PIAO secondo lo schema tipo definito dal D.M. 132/2022?",
    options: [
      { id: "A", text: "1. Scheda anagrafica; 2. Valore Pubblico, Performance e Anticorruzione; 3. Organizzazione e Capitale Umano; 4. Monitoraggio" },
      { id: "B", text: "1. Spese militari; 2. Spese sanitarie; 3. Spese scolastiche; 4. Tasse" },
      { id: "C", text: "1. Contratti; 2. Gare d'appalto; 3. Fallimenti; 4. Contenzioso" },
      { id: "D", text: "1. Protocollo; 2. Archivio; 3. Magazzino; 4. Autoparco" }
    ],
    correctAnswerId: "A",
    explanation: "La struttura standard del PIAO definita dalle linee guida ministeriali è composta da 4 sezioni: Sezione 1 (Scheda anagrafica), Sezione 2 (Valore Pubblico, Performance e Anticorruzione), Sezione 3 (Organizzazione e Capitale Umano) e Sezione 4 (Monitoraggio).",
    hint: "Anagrafica, Valore pubblico/Performance/Anticorruzione, Organizzazione/Capitale umano, Monitoraggio.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_054",
    question: "Cosa si intende per 'Valore Pubblico' generato da una Pubblica Amministrazione come l'INPS nella Sezione 2 del PIAO?",
    options: [
      { id: "A", text: "Il miglioramento complessivo e misurabile del livello di benessere economico, sociale, civile o ambientale dei cittadini, delle imprese e della comunità rispetto alle condizioni di partenza" },
      { id: "B", text: "Il valore delle azioni societarie quotate in borsa detenute dall'ente" },
      { id: "C", text: "Il profitto monetario netto versato all'erario statale a fine anno" },
      { id: "D", text: "Il totale delle sanzioni pecuniarie riscosse dall'ente" }
    ],
    correctAnswerId: "A",
    explanation: "Il Valore Pubblico rappresenta l'impatto positivo tangibile prodotto dall'amministrazione sulla vita della collettività: riduzione delle disuguaglianze, semplificazione della vita dei cittadini, tempestività e accessibilità delle prestazioni erogate.",
    hint: "Miglioramento misurabile del benessere economico e sociale della collettività.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_055",
    question: "Cosa comporta per un'amministrazione pubblica la mancata adozione del PIAO entro i termini di legge?",
    options: [
      { id: "A", text: "Il divieto di erogare la retribuzione di risultato ai dirigenti che abbiano concorso alla mancata adozione, il divieto di procedere ad assunzioni di personale e il divieto di conferire incarichi di consulenza o collaborazione" },
      { id: "B", text: "Lo scioglimento immediato del Parlamento" },
      { id: "C", text: "La privatizzazione forzata dell'amministrazione inadempiente" },
      { id: "D", text: "Nessuna sanzione, trattandosi di un atto meramente facoltativo" }
    ],
    correctAnswerId: "A",
    explanation: "La mancata adozione del PIAO comporta pesanti sanzioni: divieto di erogazione della retribuzione di risultato ai dirigenti responsabili, divieto di assunzione di nuovo personale a qualsiasi titolo e divieto di affidare incarichi individuali di consulenza o collaborazione.",
    hint: "Blocco delle assunzioni e blocco della retribuzione di risultato per i dirigenti responsabili.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_GEST_056",
    question: "Quali sono le quattro tipologie di controllo interno individuate dal D.Lgs. 30 luglio 1999, n. 286?",
    options: [
      { id: "A", text: "Controllo di regolarità amministrativa e contabile, controllo di gestione, controllo strategico e valutazione della dirigenza" },
      { id: "B", text: "Controllo di polizia, controllo doganale, controllo sanitario e controllo valutario" },
      { id: "C", text: "Controllo preliminare, controllo concomitante, controllo successivo e controllo suppletivo" },
      { id: "D", text: "Controllo orario, controllo mensa, controllo permessi e controllo badge" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.Lgs. 286/1999 disciplina quattro controlli interni distinti: 1) regolarità amministrativo-contabile; 2) controllo di gestione (efficienza ed economicità); 3) valutazione della dirigenza; 4) controllo strategico (attuazione degli indirizzi politici).",
    hint: "Regolarità amministrativa/contabile, gestione, strategico e valutazione dirigenza.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_057",
    question: "Qual è la finalità specifica del 'Controllo di Gestione' ai sensi dell'art. 4 del D.Lgs. 286/1999?",
    options: [
      { id: "A", text: "Verificare l'efficacia, l'efficienza e l'economicità dell'azione amministrativa al fine di ottimizzare, anche mediante tempestivi interventi correttivi, il rapporto tra costi e risultati" },
      { id: "B", text: "Sanzionare penalmente i funzionari per ritardi nell'istruttoria" },
      { id: "C", text: "Controllare la legittimità formale di ogni singolo atto amministrativo" },
      { id: "D", text: "Autorizzare le ferie estive del personale" }
    ],
    correctAnswerId: "A",
    explanation: "Il controllo di gestione è uno strumento di guida manageriale: monitora l'utilizzo delle risorse, confronta gli indicatori di costo con i risultati raggiunti e supporta i dirigenti nell'adozione di misure correttive per massimizzare efficacia ed efficienza.",
    hint: "Ottimizzare il rapporto tra costi e risultati (efficacia, efficienza, economicità).",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_058",
    question: "In cosa differisce l'indicatore di 'Efficienza' dall'indicatore di 'Efficacia' nel controllo di gestione dell'INPS?",
    options: [
      { id: "A", text: "L'efficienza misura il rapporto tra risorse impiegate (input) e risultati/prodotti ottenuti (output); l'efficacia misura il grado di raggiungimento degli obiettivi prefissati e la capacità di soddisfare il bisogno dell'utenza (outcome)" },
      { id: "B", text: "L'efficienza riguarda solo la velocità dei computer, l'efficacia il numero di dipendenti assunti" },
      { id: "C", text: "Sono termini identici e perfettamente intercambiabili nella contabilità pubblica" },
      { id: "D", text: "L'efficienza si applica solo al settore privato, l'efficacia alla sola magistratura" }
    ],
    correctAnswerId: "A",
    explanation: "Efficienza = fare le cose nel miglior modo col minor impiego di risorse (rapporto input/output). Efficacia = fare le cose giuste, ossia raggiungere gli obiettivi programmati soddisfacendo la domanda sociale dei cittadini (output/outcome).",
    hint: "Efficienza = rapporto risorse/prodotti; Efficacia = raggiungimento degli obiettivi programmati.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_059",
    question: "Cosa si intende per indicatore di 'Economicità' nell'azione amministrativa?",
    options: [
      { id: "A", text: "La capacità di procurarsi le risorse necessarie della migliore qualità disponibile al minor costo possibile" },
      { id: "B", text: "La riduzione indiscriminata di qualsiasi servizio pubblico per risparmiare" },
      { id: "C", text: "Il mancato pagamento delle prestazioni ai pensionati" },
      { id: "D", text: "L'obbligo di scegliere sempre il prodotto con il prezzo più alto" }
    ],
    correctAnswerId: "A",
    explanation: "L'economicità è il principio che impone l'acquisizione delle risorse (umane, materiali, finanziarie) al minimo costo compatibile con gli standard qualitativi richiesti, operando senza sprechi nel rispetto del vincolo di bilancio.",
    hint: "Acquisire risorse idonee al minor costo possibile senza sprechi.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_060",
    question: "Cosa stabilisce l'acronimo 'S.M.A.R.T.' utilizzato per la formulazione degli obiettivi nel ciclo di gestione della performance (D.Lgs. 150/2009)?",
    options: [
      { id: "A", text: "Specific (specifici), Measurable (misurabili), Achievable (raggiungibili), Relevant (rilevanti rispetto ai bisogni), Time-bound (ancorati a scadenze temporali certe)" },
      { id: "B", text: "Secret, Minimal, Automatic, Random, Temporary" },
      { id: "C", text: "Standard, Multiplo, Amministrativo, Regionale, Tecnologico" },
      { id: "D", text: "Semplice, Monocratico, Annuale, Rigoroso, Tradizionale" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 5 del D.Lgs. 150/2009, gli obiettivi devono essere SMART: Specifici (chiari e non generici), Misurabili (tramite indicatori precisi), Raggiungibili (sfidanti ma realistici), Rilevanti (coerenti con le finalità istituzionali) e Temporalmente definiti.",
    hint: "Specifici, Misurabili, Raggiungibili, Rilevanti e Temporalmente definiti.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_061",
    question: "Chi adotta la 'Relazione annuale sulla performance' nelle pubbliche amministrazioni e chi ha il compito di validarla obbligatoriamente (art. 10 e art. 14 D.Lgs. 150/2009)?",
    options: [
      { id: "A", text: "È adottata dall'organo di indirizzo politico-amministrativo (CdA nell'INPS) e validata dall'Organismo Indipendente di Valutazione (OIV)" },
      { id: "B", text: "È adottata dal Prefetto e validata dall'Istat" },
      { id: "C", text: "È redatta dai singoli funzionari e validata dai sindacati" },
      { id: "D", text: "È approvata con legge dal Parlamento senza alcuna validazione tecnica" }
    ],
    correctAnswerId: "A",
    explanation: "La Relazione annuale sulla performance evidenzia i risultati organizzativi e individuali raggiunti nell'anno precedente rispetto agli obiettivi programmati; è deliberata dall'organo di vertice politico-amministrativo ed è validata dall'OIV quale condizione inderogabile per la retribuzione di risultato.",
    hint: "Adottata dall'organo di vertice politico-amministrativo e validata dall'OIV.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_062",
    question: "Cosa accade ai fini dell'erogazione della retribuzione di risultato ai dirigenti qualora l'OIV non convalidi la Relazione sulla Performance?",
    options: [
      { id: "A", text: "La retribuzione di risultato non può essere erogata, essendo la validazione dell'OIV condizione legale di efficacia per l'accesso ai premi" },
      { id: "B", text: "Viene erogata comunque in misura raddoppiata" },
      { id: "C", text: "Viene sostituita con un buono vacanze" },
      { id: "D", text: "I dirigenti possono riscuoterla direttamente dal conto dell'Istituto" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 14, comma 6, del D.Lgs. 150/2009 stabilisce espressamente che la validazione della Relazione sulla performance da parte dell'OIV è condizione inderogabile per l'accesso agli strumenti premiali e per l'erogazione della retribuzione di risultato.",
    hint: "La mancata validazione blocca inderogabilmente i premi e la retribuzione di risultato.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_063",
    question: "Come sono nominati i componenti dell'Organismo Indipendente di Valutazione (OIV) ai sensi del D.P.R. 105/2016 e del D.Lgs. 150/2009?",
    options: [
      { id: "A", text: "Dall'organo di vertice politico-amministrativo tra i soggetti iscritti nell'Elenco Nazionale dei componenti degli OIV tenuto presso il Dipartimento della Funzione Pubblica, previo avviso pubblico e procedura selettiva" },
      { id: "B", text: "Con concorso pubblico gestito dal Ministero della Difesa" },
      { id: "C", text: "Per anzianità anagrafica tra i pensionati dell'amministrazione" },
      { id: "D", text: "Su designazione diretta e insindacabile del Presidente della Camera" }
    ],
    correctAnswerId: "A",
    explanation: "I membri degli OIV devono possedere elevata professionalità ed esperienza nel campo del management e della valutazione, essere iscritti all'Elenco Nazionale del Dipartimento della Funzione Pubblica ed essere selezionati mediante avviso pubblico.",
    hint: "Scelti tra gli iscritti all'Elenco Nazionale della Funzione Pubblica previo avviso pubblico.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_064",
    question: "Cos'è la 'Balanced Scorecard' (Scheda di Valutazione Bilanciata) impiegata nei moderni sistemi di controllo strategico delle pubbliche amministrazioni?",
    options: [
      { id: "A", text: "Un modello di controllo strategico che misura le performance dell'ente integrando quattro prospettive: economico-finanziaria, utenti/cittadini, processi interni, apprendimento e crescita del capitale umano" },
      { id: "B", text: "Un modulo per il calcolo delle trattenute previdenziali dei marittimi" },
      { id: "C", text: "Una scheda magnetica per l'apertura delle porte blindate" },
      { id: "D", text: "Un software per il gioco degli scacchi tra impiegati" }
    ],
    correctAnswerId: "A",
    explanation: "La Balanced Scorecard (Kaplan e Norton) consente di superare i limiti dei soli indicatori finanziari, monitorando l'organizzazione su 4 dimensioni connesse: economico-finanziaria, soddisfazione dell'utente, eccellenza dei processi interni, innovazione e sviluppo delle persone.",
    hint: "Quattro prospettive: finanziaria, utenti, processi interni, apprendimento e crescita.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_GEST_065",
    question: "Nel controllo di gestione, cosa rappresenta un 'Centro di Costo' (CdC)?",
    options: [
      { id: "A", text: "Un'unità organizzativa o fase del processo a cui vengono imputati i costi diretti e indiretti generati per lo svolgimento delle attività, al fine di rilevarne l'assorbimento di risorse" },
      { id: "B", text: "L'ufficio acquisti centralizzato" },
      { id: "C", text: "Un conto corrente postale dedicato alle sole multe stradali" },
      { id: "D", text: "La stanza dei server informatici" }
    ],
    correctAnswerId: "A",
    explanation: "Il Centro di Costo è l'entità contabile elementare che aggrega i costi delle risorse utilizzate da una specifica unità o servizio, consentendo la contabilità analitica e la determinazione del costo unitario del servizio erogato.",
    hint: "Unità a cui sono attribuiti i costi per monitorare l'assorbimento delle risorse.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_066",
    question: "In cosa differisce un 'Centro di Responsabilità Amministrativa' (CdR) da un 'Centro di Costo'?",
    options: [
      { id: "A", text: "Il Centro di Responsabilità è una struttura organizzativa di livello dirigenziale cui sono formalmente assegnati specifici obiettivi e le relative risorse di budget da gestire, con responsabilità sui risultati conseguiti" },
      { id: "B", text: "Il Centro di Responsabilità si occupa solo delle sanzioni disciplinari" },
      { id: "C", text: "Non vi è alcuna differenza tra i due concetti" },
      { id: "D", text: "Il Centro di Costo è guidato da un magistrato, il CdR da un funzionario di terza area" }
    ],
    correctAnswerId: "A",
    explanation: "Mentre il Centro di Costo è un aggregatore contabile di spesa, il Centro di Responsabilità identifica una struttura guidata da un dirigente formalmente investito dell'autorità di spesa e della responsabilità sul raggiungimento degli obiettivi assegnati dal vertice.",
    hint: "Struttura dirigenziale a cui è affidata la gestione del budget e il conseguimento degli obiettivi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_067",
    question: "Qual è il principio contabile fondamentale della 'competenza finanziaria potenziata' introdotto dalle norme di armonizzazione contabile (D.Lgs. 91/2011 e D.Lgs. 118/2011)?",
    options: [
      { id: "A", text: "Le obbligazioni giuridicamente perfezionate attive e passive devono essere registrate nelle scritture contabili al momento in cui l'obbligazione sorge, ma sono imputate all'esercizio finanziario in cui esse vengono a scadenza ed esigibilità" },
      { id: "B", text: "Tutte le spese possono essere pagate solo in contanti alla consegna" },
      { id: "C", text: "I debiti si cancellano automaticamente se non pagati entro sei mesi" },
      { id: "D", text: "L'ente può spendere liberamente senza preventivo di spesa" }
    ],
    correctAnswerId: "A",
    explanation: "La competenza finanziaria potenziata impone che le entrate e le spese siano imputate all'esercizio in cui l'obbligazione diventa esigibile (ossia quando scade il diritto a riscuotere o l'obbligo a pagare), impedendo la formazione fittizia di residui passivi e attivi non esigibili.",
    hint: "Imputazione delle obbligazioni all'esercizio in cui vengono a scadenza ed esigibilità.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_GEST_068",
    question: "Quali sono le quattro fasi sequenziali del procedimento di spesa nella contabilità pubblica degli enti pubblici non economici?",
    options: [
      { id: "A", text: "Impegno, liquidazione, ordinazione e pagamento" },
      { id: "B", text: "Proposta, delibera, fattura e bonifico" },
      { id: "C", text: "Accertamento, riscossione, versamento e quietanza" },
      { id: "D", text: "Acquisto, collaudo, consumo e smaltimento" }
    ],
    correctAnswerId: "A",
    explanation: "Le quattro fasi della spesa pubblica sono tassative: 1) Impegno (vincolo della risorsa su un capitolo di bilancio); 2) Liquidazione (determinazione dell'importo certo da pagare verificata la regolarità della fornitura); 3) Ordinazione (emissione del mandato di pagamento); 4) Pagamento (erogazione fisica da parte del tesoriere).",
    hint: "Impegno, liquidazione, ordinazione, pagamento.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_069",
    question: "In cosa consiste la fase dell' 'Impegno di spesa' nella gestione del bilancio pubblico?",
    options: [
      { id: "A", text: "Nella fase in cui viene accertata la sussistenza di un'obbligazione giuridica perfezionata, vengono determinati la somma da pagare e il soggetto creditore, e viene vincolata la relativa dotazione finanziaria sul corrispondente capitolo di bilancio" },
      { id: "B", text: "Nel bonifico effettuato sul conto corrente del fornitore" },
      { id: "C", text: "Nel controllo svolto dalla Guardia di Finanza" },
      { id: "D", text: "Nell'archiviazione del documento in soffitta" }
    ],
    correctAnswerId: "A",
    explanation: "L'impegno è la prima fase del ciclo della spesa: sorge a seguito di un'obbligazione giuridicamente perfezionata e comporta la destinazione e l'indisponibilità della somma necessaria sul capitolo di bilancio assegnato.",
    hint: "Vincolo delle risorse su capitolo di bilancio a fronte di obbligazione perfezionata.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_070",
    question: "Quali sono le fasi del procedimento dell' 'Entrata' nella contabilità degli enti pubblici?",
    options: [
      { id: "A", text: "Accertamento, riscossione e versamento" },
      { id: "B", text: "Impegno, liquidazione e pagamento" },
      { id: "C", text: "Richiesta, autorizzazione e quietanza" },
      { id: "D", text: "Notifica, ingiunzione e pignoramento" }
    ],
    correctAnswerId: "A",
    explanation: "Il procedimento delle entrate pubbliche si articola in tre fasi successive: 1) Accertamento (sussistenza del titolo giuridico che dà diritto all'entrata, quantificazione della somma e individuazione del debitore); 2) Riscossione (materiale esazione delle somme da parte degli incaricati); 3) Versamento (trasferimento delle somme nella cassa dell'ente/tesoreria).",
    hint: "Accertamento, riscossione e versamento.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_071",
    question: "Cosa sono i 'Residui Attivi' nel conto del bilancio di un ente pubblico?",
    options: [
      { id: "A", text: "Le entrate accertate ma non ancora riscosse ovvero riscosse ma non ancora versate nelle casse dell'ente entro il termine dell'esercizio finanziario" },
      { id: "B", text: "Le spese impegnate ma non ancora pagate" },
      { id: "C", text: "I fondi segreti del Ministero dell'Interno" },
      { id: "D", text: "I materiali di scarto conservati nei magazzini" }
    ],
    correctAnswerId: "A",
    explanation: "I residui attivi rappresentano crediti dell'amministrazione nei confronti di terzi: sono somme formalmente accertate durante l'esercizio per le quali, alla data di chiusura al 31 dicembre, non si è ancora perfezionata la riscossione o il versamento.",
    hint: "Entrate accertate ma non ancora riscosse al termine dell'esercizio (crediti dell'ente).",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_072",
    question: "Cosa sono i 'Residui Passivi' nel bilancio di un ente pubblico?",
    options: [
      { id: "A", text: "Le spese legalmente impegnate durante l'esercizio finanziario ma non ancora pagate (o non ancora liquidate) entro la chiusura dell'esercizio" },
      { id: "B", text: "I debiti caduti in prescrizione per decorso decennale" },
      { id: "C", text: "Le perdite azionarie della banca tesoriera" },
      { id: "D", text: "Le retribuzioni rifiutate dai dipendenti" }
    ],
    correctAnswerId: "A",
    explanation: "I residui passivi costituiscono debiti dell'amministrazione: rappresentano somme impegnate legittimamente a fronte di obbligazioni contratte nell'esercizio, per le quali al termine dell'anno non si è proceduto alla liquidazione o all'effettivo pagamento.",
    hint: "Spese impegnate ma non ancora pagate al termine dell'esercizio (debiti dell'ente).",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_073",
    question: "Cos'è l'operazione di 'Riaccertamento straordinario dei residui' introdotta con l'armonizzazione contabile?",
    options: [
      { id: "A", text: "La revisione analitica di tutti i residui attivi e passivi finalizzata a cancellare i crediti inesigibili, eliminare i debiti insussistenti e re-imputare le somme esigibili agli esercizi in cui vengono a scadenza" },
      { id: "B", text: "Un condono fiscale riservato ai debitori della pubblica amministrazione" },
      { id: "C", text: "Il ricalcolo delle pensioni di guerra" },
      { id: "D", text: "L'inventario dei mobili e arredi storici" }
    ],
    correctAnswerId: "A",
    explanation: "Il riaccertamento dei residui serve a garantire la veridicità dei conti pubblici: verifica che i residui attivi e passivi corrispondano ad effettive obbligazioni esigibili, eliminando perenti o inesigibili e re-imputando correttamente le partite secondo il principio della competenza finanziaria potenziata.",
    hint: "Verifica e pulizia contabile dei crediti e debiti per cancellare inesigibili o re-imputare le scadenze.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_GEST_074",
    question: "Quale funzione svolge il 'Fondo Crediti di Dubbia Esigibilità' (FCDE) iscritto nel bilancio di previsione?",
    options: [
      { id: "A", text: "Un fondo contabile di accantonamento che sterilizza una quota di entrate di dubbia o difficile riscossione per evitare che siano spese risorse non effettivamente incassate, salvaguardando gli equilibri di cassa" },
      { id: "B", text: "Un conto corrente privato per gli investimenti speculativi dei dirigenti" },
      { id: "C", text: "Un premio speciale assegnato ai debitori insolventi" },
      { id: "D", text: "Una riserva per il pagamento di rimborsi per furti d'auto" }
    ],
    correctAnswerId: "A",
    explanation: "Il FCDE è un presidio prudenziale di finanza pubblica obbligatorio: a fronte di entrate ad elevato tasso di morosità o insolvenza (es. contributi evasi, sanzioni), accantona una corrispondente quota di spesa per impedire che l'ente impegni fondi non effettivamente liquidi.",
    hint: "Accantonamento prudenziale a tutela degli equilibri di bilancio contro crediti a rischio.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_075",
    question: "Cos'è il 'Service Level Agreement' (SLA) applicato ai procedimenti erogati dal funzionario PECS dell'INPS?",
    options: [
      { id: "A", text: "L'accordo o standard di livello di servizio che definisce contrattualmente e operativamente i tempi massimi garantiti e la qualità minima attesa per la lavorazione e l'erogazione di una prestazione o risposta all'utente" },
      { id: "B", text: "Un contratto di compravendita di software internazionale" },
      { id: "C", text: "Una licenza d'uso per marchi commerciali" },
      { id: "D", text: "La clausola di salvaguardia contro gli aumenti dei carburanti" }
    ],
    correctAnswerId: "A",
    explanation: "Gli SLA (Accordi sui Livelli di Servizio) definiscono le metriche oggettive di prestazione delle strutture INPS (es. liquidazione domanda NASpI entro 15 giorni, evasione quesito cassetto entro 5 giorni), fungendo da base per il monitoraggio della performance operativa.",
    hint: "Standard prestabiliti di qualità e tempi massimi garantiti di lavorazione.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_076",
    question: "Quale ruolo ha la 'Customer Satisfaction' (rilevazione della soddisfazione degli utenti) nel ciclo di gestione della performance dell'INPS?",
    options: [
      { id: "A", text: "Rappresenta una componente fondamentale della misurazione dell'efficacia qualitativa esterna, obbligatoriamente considerata nella valutazione della performance organizzativa dell'Istituto" },
      { id: "B", text: "Ha mero valore pubblicitario senza alcun legame con la valutazione delle sedi" },
      { id: "C", text: "È vietata dalla legge sulla privacy per evitare giudizi negativi" },
      { id: "D", text: "Viene compilata unicamente dai dirigenti per conto degli utenti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 8 e l'art. 19-bis del D.Lgs. 150/2009 pongono la valutazione dei cittadini e degli utenti al centro della misurazione della performance organizzativa: l'INPS raccoglie costantemente feedback (totem in sede, sondaggi web post-servizio, contact center) che concorrono alla valutazione dei risultati delle sedi.",
    hint: "Misura fondamentale dell'efficacia qualitativa esterna e della performance organizzativa.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_077",
    question: "Cosa si intende per 'Process Reengineering' (BPR - Business Process Reengineering) nella progettazione dei servizi INPS affidata ai funzionari PECS?",
    options: [
      { id: "A", text: "Il ripensamento e la riprogettazione radicale dei flussi e dei processi operativi, sfruttando la digitalizzazione per eliminare colli di bottiglia, passaggi burocratici ridondanti e ridurre drasticamente i tempi di servizio" },
      { id: "B", text: "La riverniciatura periodica degli arredi d'ufficio" },
      { id: "C", text: "La sostituzione degli schermi dei computer con modelli più grandi" },
      { id: "D", text: "La modifica delle date delle festività nazionali" }
    ],
    correctAnswerId: "A",
    explanation: "Il Funzionario Progettazione, Erogazione e Controllo dei Servizi applica il Business Process Reengineering per analizzare i processi 'as is' (stato di fatto), individuare gli sprechi temporali e operativi, e ridisegnare il processo 'to be' ottimizzato e automatizzato con strumenti digitali.",
    hint: "Riprogettazione radicale dei processi per eliminare inefficienze e valorizzare il digitale.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_078",
    question: "Nel monitoraggio della performance operativa di una Direzione Provinciale INPS, cosa indica l'indice di 'Giacenza' delle pratiche?",
    options: [
      { id: "A", text: "Il numero delle istanze pervenute e non ancora concluse con provvedimento formale, presenti nei carichi di lavoro alla data di rilevazione" },
      { id: "B", text: "Il quantitativo di risme di carta presenti in magazzino" },
      { id: "C", text: "Il totale dei dipendenti presenti in servizio" },
      { id: "D", text: "L'ammontare dei tributi non pagati dallo Stato" }
    ],
    correctAnswerId: "A",
    explanation: "La giacenza misura l'arretrato o lo stock di pratiche pendenti in attesa di lavorazione; un aumento incontrollato dell'indice di giacenza è segnale di criticità organizzativa, insufficienza di risorse o inefficienza del flusso istruttorio.",
    hint: "Numero di istanze pendenti non ancora definite nei carichi di lavoro.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_079",
    question: "Cos'è il 'Tempo Medio di Attraversamento' di un procedimento di erogazione di una prestazione (es. liquidazione NASpI o pensione)?",
    options: [
      { id: "A", text: "L'intervallo temporale medio che intercorre tra la data di ricezione della domanda da parte dell'INPS e la data di emissione del provvedimento finale (liquidazione o diniego)" },
      { id: "B", text: "Il tempo necessario all'utente per attraversare a piedi la sala d'aspetto della sede" },
      { id: "C", text: "La durata del viaggio dei funzionari tra la sede provinciale e quella regionale" },
      { id: "D", text: "La durata media del mandato del Presidente dell'Istituto" }
    ],
    correctAnswerId: "A",
    explanation: "Il tempo di attraversamento (lead time) è uno dei principali KPI (Key Performance Indicator) dell'INPS: misura la rapidità della tecnostruttura nel trasformare la richiesta del cittadino in provvedimento ed erogazione economica effettiva.",
    hint: "Tempo tra la ricezione dell'istanza e l'adozione del provvedimento finale.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_080",
    question: "Cosa sono le 'Azioni Correttive' attivate in sede di monitoraggio infrannuale del controllo di gestione?",
    options: [
      { id: "A", text: "Interventi organizzativi tempestivi (es. mobilità interna temporanea, affiancamento formativo, task force di supporto) decisi per colmare scostamenti negativi rispetto agli obiettivi di piano prima della chiusura dell'esercizio" },
      { id: "B", text: "Sanzioni disciplinari automatiche a tutti i lavoratori del reparto" },
      { id: "C", text: "Cancellazione d'ufficio di tutte le pratiche non lavorate" },
      { id: "D", text: "Diminuzione automatica dello stipendio dei funzionari della provincia" }
    ],
    correctAnswerId: "A",
    explanation: "La funzione essenziale del controllo di gestione concomitante è individuare tempestivamente gli scostamenti rispetto ai target per consentire alla dirigenza di attuare azioni correttive organizzative prima che il disservizio diventi irreversibile.",
    hint: "Interventi organizzativi tempestivi per riallineare i risultati ai target prefissati.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_081",
    question: "Cos'è il principio del 'Valore Pubblico Aggiunto' generato dalla digitalizzazione dei servizi INPS?",
    options: [
      { id: "A", text: "Il risparmio di tempo, di costi di spostamento e di oneri burocratici per i cittadini e per le imprese garantito dalla disponibilità online continua e accessibile dei servizi (es. proattività e precompilazione)" },
      { id: "B", text: "Una tassa supplementare applicata alle transazioni su internet" },
      { id: "C", text: "Il guadagno ricavato dalla vendita dei dati personali ad agenzie pubblicitarie" },
      { id: "D", text: "L'aumento dell'IVA per le spese di spedizione" }
    ],
    correctAnswerId: "A",
    explanation: "La transizione digitale dell'INPS genera valore pubblico abbattendo i costi di transazione per l'utenza: la digitalizzazione dei servizi evita code fisiche, riduce gli errori e introduce servizi 'proattivi' anticipando le esigenze del cittadino.",
    hint: "Risparmio di tempo e costi per l'utenza mediante servizi digitali accessibili e proattivi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_082",
    question: "Cosa prevede l'approccio dei 'Servizi Proattivi' sviluppato dall'INPS nell'ambito dei progetti del PNRR?",
    options: [
      { id: "A", text: "L'Istituto, attraverso l'interoperabilità dei dati e l'intelligenza artificiale, individua in anticipo i diritti maturati dal cittadino e gli propone direttamente la fruizione della prestazione senza attendere la sua domanda formale" },
      { id: "B", text: "L'obbligo per l'utente di presentare domanda ogni 15 giorni per confermare l'interesse" },
      { id: "C", text: "L'invio di messaggi pubblicitari commerciali di terzi" },
      { id: "D", text: "L'erogazione casuale di bonus monetari per sorteggio informatico" }
    ],
    correctAnswerId: "A",
    explanation: "I servizi proattivi dell'INPS (finanziati dal PNRR) rovesciano il paradigma tradizionale della PA: l'ente non attende più l'istanza passiva del cittadino, ma segnala attivamente (via App IO, email o SMS) l'apertura del diritto (es. accredito figurativo per nascita figli, accesso a bonus o pensione).",
    hint: "L'INPS individua i diritti maturati e propone attivamente la prestazione all'utente.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_083",
    question: "Quale organo approva il 'Piano dei Fabbisogni di Personale' (PTFP) dell'INPS, ora confluito nella Sezione 3 del PIAO?",
    options: [
      { id: "A", text: "Il Consiglio di Amministrazione dell'INPS, previa informativa sindacale e successiva autorizzazione dei Ministeri vigilanti (Lavoro e MEF) e Dipartimento Funzione Pubblica" },
      { id: "B", text: "I singoli sindacati di categoria a maggioranza semplice" },
      { id: "C", text: "La Corte di Giustizia dell'Unione Europea" },
      { id: "D", text: "I sindaci dei comuni capoluogo di regione" }
    ],
    correctAnswerId: "A",
    explanation: "Il PTFP determina il fabbisogno triennale di risorse umane nel rispetto dei vincoli di finanza pubblica e spesa di personale; è approvato dal CdA dell'ente e validato dagli organi di vigilanza ministeriali.",
    hint: "Approvato dal CdA dell'ente previa approvazione dei ministeri vigilanti (MEF e Lavoro).",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_084",
    question: "Quale vincolo fondamentale di bilancio deve essere inderogabilmente rispettato nell'elaborazione del Piano dei Fabbisogni di Personale?",
    options: [
      { id: "A", text: "Il limite della spesa per il personale stabilito dalla legge e la copertura finanziaria sui capitoli del bilancio di previsione (sostenibilità economico-finanziaria a regime)" },
      { id: "B", text: "L'assunzione di un numero pari di dipendenti in tutte le province italiane a prescindere dal bacino d'utenza" },
      { id: "C", text: "L'obbligo di assumere solo residenti nella capitale" },
      { id: "D", text: "Nessun vincolo, potendo l'ente stampare moneta propria" }
    ],
    correctAnswerId: "A",
    explanation: "Le amministrazioni pubbliche non possono programmare assunzioni che eccedano le disponibilità finanziarie o i tetti di spesa di personale fissati annualmente dal legislatore, a presidio della sostenibilità dei conti pubblici.",
    hint: "Rispetto del tetto di spesa per il personale e sostenibilità di bilancio pluriennale.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_085",
    question: "Qual è il ruolo del 'Controllo Strategico' ai sensi del D.Lgs. 286/1999 all'interno di un grande ente pubblico come l'INPS?",
    options: [
      { id: "A", text: "Valutare l'adeguatezza delle scelte compiute in sede di attuazione dei piani rispetto agli indirizzi e agli obiettivi politici stabiliti, verificando la reale congruenza tra risultati conseguiti e linee programmatiche" },
      { id: "B", text: "Svolgere attività di spionaggio industriale contro altri enti europei" },
      { id: "C", text: "Verificare gli scontrini fiscali del carburante delle auto di servizio" },
      { id: "D", text: "Controllare gli orari di apertura dei bar convenzionati" }
    ],
    correctAnswerId: "A",
    explanation: "Il controllo strategico opera a livello macro: supporta l'organo di governo nell'accertare se l'attuazione delle politiche dell'ente stia realmente realizzando la missione e gli obiettivi istituzionali stabiliti dalle linee guida del CIV e del Governo.",
    hint: "Verifica della congruenza tra scelte attuative e obiettivi strategici di indirizzo.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_086",
    question: "Cos'è il 'Piano Organizzativo del Lavoro Agile' (POLA), ora confluito nella Sezione 3 del PIAO?",
    options: [
      { id: "A", text: "Il piano che disciplina le modalità attuative, organizzative e tecnologiche dello smart working, individuando le attività che possono essere svolte a distanza e gli indicatori di prestazione per salvaguardare la qualità del servizio all'utenza" },
      { id: "B", text: "Un manuale per la ginnastica da camera dei lavoratori sedentari" },
      { id: "C", text: "L'orario dei treni per i pendolari" },
      { id: "D", text: "Il regolamento delle missioni estere dei direttori" }
    ],
    correctAnswerId: "A",
    explanation: "Il POLA programma il lavoro agile nella PA definendo i presidi tecnologici, la sicurezza dei dati, le modalità di conciliazione vita-lavoro e garantendo che lo smart working non pregiudichi mai i servizi resi ai cittadini.",
    hint: "Disciplina organizzativa e tecnologica del lavoro agile senza calo del servizio all'utenza.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_087",
    question: "Cosa stabiliscono le norme sul ciclo della performance in ordine alla 'Differenziazione dei giudizi' nella valutazione individuale dei dipendenti (art. 9 D.Lgs. 150/2009)?",
    options: [
      { id: "A", text: "I sistemi di valutazione devono garantire una reale e motivata differenziazione dei giudizi e dei premi, vietando distribuzioni a pioggia o generalizzate delle risorse incentivanti" },
      { id: "B", text: "Tutti i dipendenti devono ricevere obbligatoriamente lo stesso identico punteggio massimo" },
      { id: "C", text: "La valutazione deve avvenire per estrazione a sorte pubblica" },
      { id: "D", text: "Il punteggio è assegnato in base alla statura fisica del lavoratore" }
    ],
    correctAnswerId: "A",
    explanation: "Uno dei pilastri della riforma Brunetta è il divieto di distribuzione 'a pioggia' delle risorse del fondo per la retribuzione accessoria: la valutazione deve essere selettiva, premiando l'effettivo merito e il livello di conseguimento dei target individuali e di gruppo.",
    hint: "Divieto assoluto di premi a pioggia: valutazione motivata e differenziata.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_088",
    question: "Chi valuta annualmente la performance individuale dei dirigenti di livello generale all'interno dell'INPS?",
    options: [
      { id: "A", text: "L'Organo di vertice politico-amministrativo, sulla base della proposta formulata dall'Organismo Indipendente di Valutazione (OIV)" },
      { id: "B", text: "L'assemblea dei dipendenti della sede di appartenenza" },
      { id: "C", text: "I patronati sindacali territoriali" },
      { id: "D", text: "I cittadini mediante voto sul portale web" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 14, comma 4, lett. e), del D.Lgs. 150/2009, la valutazione dei dirigenti di vertice spetta all'organo di indirizzo politico-amministrativo (Presidente/CdA), che delibera su proposta motivata predisposta dall'OIV.",
    hint: "Vertice politico-amministrativo su proposta dell'OIV.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_089",
    question: "Cos'è il 'Fondo per la Retribuzione di Posizione e di Risultato' della dirigenza pubblica?",
    options: [
      { id: "A", text: "Il fondo contrattuale destinato a remunerare la complessità e responsabilità della posizione ricoperta dal dirigente e il grado di raggiungimento degli obiettivi assegnati annualmente" },
      { id: "B", text: "Una cassa segreta per le spese di rappresentanza all'estero" },
      { id: "C", text: "Il fondo destinato al rimborso dei taxi urbani" },
      { id: "D", text: "Un prestito d'onore erogato dall'INPS ai dirigenti per acquisto casa" }
    ],
    correctAnswerId: "A",
    explanation: "La retribuzione dirigenziale si articola in: trattamento tabellare (stipendio base), retribuzione di posizione (legata al peso della struttura diretta) e retribuzione di risultato (variabile, legata al grado di raggiungimento degli obiettivi concordati).",
    hint: "Remunera la responsabilità della posizione e i risultati effettivamente raggiunti.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_090",
    question: "Cos'è l' 'Audit Interno' (Internal Audit) all'interno dell'INPS e quali finalità persegue?",
    options: [
      { id: "A", text: "Una funzione indipendente di valutazione e consulenza volta a verificare l'efficacia e l'adeguatezza dei sistemi di gestione dei rischi, del controllo interno e dei processi di governance aziendale" },
      { id: "B", text: "L'ascolto delle telefonate private tra dipendenti" },
      { id: "C", text: "Il controllo della musica trasmessa nelle sale d'attesa" },
      { id: "D", text: "Una perquisizione personale dei funzionari all'uscita dal lavoro" }
    ],
    correctAnswerId: "A",
    explanation: "L'Audit interno (Direzione Centrale Audit) opera in modo indipendente a garanzia del vertice: conduce verifiche ispettive e metodologiche per accertare se i processi operativi e informatici dell'INPS siano conformi alle normative e protetti contro rischi di errore o frode.",
    hint: "Funzione indipendente di garanzia e controllo sull'adeguatezza del sistema di controllo interno e rischi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_091",
    question: "Cos'è la 'Matrice dei Rischi' (Risk Assessment) elaborata nell'ambito della sottosezione Rischi Corruttivi e Trasparenza del PIAO?",
    options: [
      { id: "A", text: "Uno strumento metodologico che mappa tutti i processi dell'amministrazione, stimando per ciascuno il livello di rischio corruttivo o di anomalia (probabilità e impatto) e definendo le conseguenti misure preventive" },
      { id: "B", text: "Una tabella delle probabilità di terremoto per ciascun edificio" },
      { id: "C", text: "L'elenco degli investimenti finanziari a rischio della banca tesoriera" },
      { id: "D", text: "Un test psicologico obbligatorio per i neo-assunti" }
    ],
    correctAnswerId: "A",
    explanation: "La matrice di gestione del rischio corruzione analizza ogni processo (es. erogazione sussidi, appalti, vigilanza ispettiva), calcola il livello di vulnerabilità (probabilità x impatto) e fissa le misure obbligatorie di neutralizzazione (doppio controllo, rotazione del personale, tracciabilità telematica).",
    hint: "Mappatura dei processi con stima di probabilità e impatto del rischio ed individuazione delle contromisure.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_092",
    question: "Qual è la distinzione contabile tra 'Fondo Cassa' e 'Risultato di Amministrazione' nel rendiconto generale dell'INPS?",
    options: [
      { id: "A", text: "Il Fondo Cassa rappresenta le disponibilità liquide effettivamente presenti in tesoreria al 31 dicembre; il Risultato di Amministrazione considera il fondo cassa sommando i residui attivi e sottraendo i residui passivi" },
      { id: "B", text: "Il Fondo Cassa è virtuale, mentre il Risultato di Amministrazione è sempre in banconote contanti" },
      { id: "C", text: "Non vi è alcuna differenza, coincidono sempre matematicamente" },
      { id: "D", text: "Il Risultato di Amministrazione viene calcolato ogni dieci anni" }
    ],
    correctAnswerId: "A",
    explanation: "Fondo cassa = mera liquidità effettiva (incassi meno pagamenti). Risultato di amministrazione = grandezza finanziaria complessiva calcolata come: Fondo cassa finale + Residui attivi (crediti) - Residui passivi (debiti).",
    hint: "Fondo cassa = liquidità effettiva; Risultato di amministrazione = Cassa + Residui attivi - Residui passivi.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_GEST_093",
    question: "Cosa si intende per 'Avanzo Primario' della spesa pubblica?",
    options: [
      { id: "A", text: "La differenza positiva tra le entrate pubbliche complessive e le spese pubbliche totali al netto della spesa per interessi sul debito pubblico" },
      { id: "B", text: "L'eccedenza di risorse alimentari donate dalle mense aziendali" },
      { id: "C", text: "Il residuo di bilancio dopo il pagamento degli stipendi di gennaio" },
      { id: "D", text: "Il totale dei prestiti concessi da stati stranieri" }
    ],
    correctAnswerId: "A",
    explanation: "L'avanzo primario si ottiene sottraendo dalla spesa pubblica totale la quota destinata al pagamento degli interessi sul debito pubblico: se le entrate superano le spese non legate agli interessi, il bilancio registra un avanzo primario positivo.",
    hint: "Differenza positiva tra entrate e uscite al netto della spesa per interessi sul debito.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_094",
    question: "Quale principio di contabilità pubblica vieta l'iscrizione in bilancio delle entrate al netto delle relative spese di riscossione o delle spese al netto delle relative entrate?",
    options: [
      { id: "A", text: "Il principio dell'Integrità del bilancio" },
      { id: "B", text: "Il principio della Pubblicità" },
      { id: "C", text: "Il principio dell'Annualità" },
      { id: "D", text: "Il principio della Continuità" }
    ],
    correctAnswerId: "A",
    explanation: "Il principio di integrità impone che tutte le entrate siano iscritte in bilancio al lordo delle spese di riscossione e che tutte le uscite siano iscritte per il loro importo integrale senza compensazioni contabili tra entrate e uscite.",
    hint: "Principio dell'Integrità (divieto di compensazione e iscrizione al lordo).",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_095",
    question: "Cosa stabilisce il principio contabile dell' 'Universalità' del bilancio?",
    options: [
      { id: "A", text: "Tutte le entrate e tutte le uscite della gestione devono essere obbligatoriamente iscritte in bilancio, vietando gestioni fuori bilancio o fondi speciali non autorizzati dalla legge" },
      { id: "B", text: "Il bilancio deve essere redatto in tutte le lingue dell'Unione Europea" },
      { id: "C", text: "Il bilancio deve essere condiviso con tutte le nazioni dell'ONU" },
      { id: "D", text: "Le spese devono riguardare l'intero sistema solare" }
    ],
    correctAnswerId: "A",
    explanation: "Il principio di universalità esige che la totalità delle operazioni finanziarie dell'amministrazione trovi collocazione all'interno del bilancio, impedendo la creazione di gestioni fuori bilancio che sfuggirebbero al controllo degli organi di vertice e della Corte dei Conti.",
    hint: "Tutte le entrate e uscite devono essere in bilancio: divieto assoluto di gestioni fuori bilancio.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_096",
    question: "Cosa sancisce il principio dell' 'Unità' del bilancio pubblico?",
    options: [
      { id: "A", text: "Tutte le entrate affluiscono a un unico fondo comune indistinto che serve a finanziare la totalità delle spese pubbliche, vietando (salvo deroghe di legge) l'assegnazione di specifiche entrate a determinate spese" },
      { id: "B", text: "Il bilancio deve essere stampato su un unico foglio di carta" },
      { id: "C", text: "Tutti gli stipendi devono essere unificati alla stessa cifra" },
      { id: "D", text: "L'ente può avere un solo conto corrente per tutto il personale" }
    ],
    correctAnswerId: "A",
    explanation: "Il principio dell'unità stabilisce l'universalità della cassa comune: non è consentito vincolare determinate entrate a specifiche spese (c.d. divieto di tributi o entrate di scopo), poiché l'insieme delle risorse finanzia indistintamente il complesso delle attività.",
    hint: "Tutte le entrate finanziano indistintamente tutte le spese (divieto di destinazione specifica).",
    level: "intermedio"
  },
  {
    id: "Q_PECS_GEST_097",
    question: "In materia di contabilità economico-patrimoniale degli enti pubblici, cosa sono i 'Costi di competenza economica' rispetto alle 'Spese di competenza finanziaria'?",
    options: [
      { id: "A", text: "I costi di competenza economica misurano il valore delle risorse e dei fattori produttivi effettivamente consumati e impiegati nell'anno per la produzione dei servizi (indipendentemente dall'esborso monetario)" },
      { id: "B", text: "I costi coincidono sempre esattamente con gli impegni finanziari dell'anno" },
      { id: "C", text: "I costi sono solo le imposte pagate dall'ente" },
      { id: "D", text: "I costi riguardano solo l'acquisto di fabbricati e terreni" }
    ],
    correctAnswerId: "A",
    explanation: "Mentre la spesa finanziaria sorge con l'impegno e si estingue con il pagamento del debito, il costo economico misura il consumo effettivo di beni e servizi nell'esercizio (es. quota di ammortamento dei beni pluriennali, consumi effettivi di materiali, ratei e risconti).",
    hint: "Misurano l'impiego e il consumo effettivo dei fattori produttivi nell'esercizio.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_GEST_098",
    question: "Cosa rappresenta l' 'Ammortamento' economico nei bilanci dell'INPS?",
    options: [
      { id: "A", text: "Il procedimento contabile ed economico mediante il quale il costo originario di acquisizione di un bene a utilità pluriennale viene ripartito gradualmente tra i diversi esercizi in cui il bene produce la sua utilità" },
      { id: "B", text: "L'estinzione anticipata di un mutuo fondiario" },
      { id: "C", text: "La distruzione fisica di beni informatici obsoleti" },
      { id: "D", text: "Il rimborso delle tasse universitarie ai funzionari meritevoli" }
    ],
    correctAnswerId: "A",
    explanation: "L'ammortamento imputa per quote annuali a conto economico il costo di un'immobilizzazione materiale o immateriale (es. immobili, software, licenze) lungo la durata della sua vita utile economica stimata.",
    hint: "Ripartizione graduale del costo di un bene pluriennale lungo gli esercizi della sua vita utile.",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_099",
    question: "Quale autorità giudiziaria è competente a giudicare sui giudizi di conto, sui giudizi di responsabilità amministrativo-contabile dei dipendenti pubblici e sulle pensioni dei dipendenti statali?",
    options: [
      { id: "A", text: "La Corte dei Conti" },
      { id: "B", text: "Il Tribunale Amministrativo Regionale (TAR)" },
      { id: "C", text: "La Corte di Cassazione a sezioni semplici" },
      { id: "D", text: "Il Giudice di Pace" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 103 Cost., la Corte dei Conti ha giurisdizione nelle materie di contabilità pubblica, sui giudizi di responsabilità per danno erariale cagionato da amministratori o dipendenti pubblici con dolo o colpa grave, sui giudizi di conto degli agenti contabili e sui giudizi in materia di pensioni pubbliche.",
    hint: "La Corte dei Conti (art. 103 della Costituzione).",
    level: "base"
  },
  {
    id: "Q_PECS_GEST_100",
    question: "Quali elementi costitutivi devono necessariamente sussistere affinché la Corte dei Conti possa condannare un dipendente pubblico per 'Danno Erariale'?",
    options: [
      { id: "A", text: "Una condotta attiva od omissiva illecita, l'elemento soggettivo del dolo o della colpa grave, un danno economico patrimoniale effettivo, certo e attuale all'amministrazione, e il nesso di causalità diretto tra condotta ed evento" },
      { id: "B", text: "La sola colpa lieve senza necessità di alcun danno patrimoniale" },
      { id: "C", text: "La querela di parte sporta dal cittadino" },
      { id: "D", text: "La firma su una petizione sindacale non autorizzata" }
    ],
    correctAnswerId: "A",
    explanation: "In base alla Legge 20/1994, la responsabilità amministrativo-contabile per danno erariale richiede cumulativamente: 1) condotta illecita; 2) elemento soggettivo qualificato (dolo o colpa grave: la colpa lieve è esclusa); 3) danno erariale patrimoniale certo, effettivo e attuale; 4) nesso causale tra condotta e danno.",
    hint: "Condotta, dolo o colpa grave, danno certo e attuale, e nesso di causalità.",
    level: "intermedio"
  }
];

const merged = [...existing, ...newQuestions];
fs.writeFileSync(targetFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Successfully added ${newQuestions.length} questions to pianificazione_controllo.json. Total questions: ${merged.length}`);
