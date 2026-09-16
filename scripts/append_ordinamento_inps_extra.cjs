const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/db/master_bank/diritto/ordinamento_inps.json');
const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

const newQuestions = [
  {
    id: "Q_PECS_INPS_051",
    question: "Quale importante riforma della governance dell'INPS è stata introdotta con il Decreto-Legge 10 maggio 2023, n. 51 (convertito in Legge 3 luglio 2023, n. 87)?",
    options: [
      { id: "A", text: "La privatizzazione dell'Istituto trasformato in società per azioni" },
      { id: "B", text: "La soppressione della figura del Vicepresidente e la rimodulazione della composizione del Consiglio di Amministrazione, con decadenza dei precedenti organi di vertice" },
      { id: "C", text: "L'accorpamento obbligatorio dell'INAIL e dell'ISTAT all'interno dell'INPS" },
      { id: "D", text: "L'eliminazione definitiva del Consiglio di Indirizzo e Vigilanza (CIV)" }
    ],
    correctAnswerId: "B",
    explanation: "Il D.L. 51/2023 (conv. in L. 87/2023) ha riorganizzato la governance di INPS e INAIL, eliminando la carica del Vicepresidente, ridisegnando la composizione del CdA e disponendo la nomina di un Commissario straordinario nelle more della nomina dei nuovi vertici.",
    hint: "Riorganizzazione del CdA e soppressione del Vicepresidente.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_052",
    question: "Quanti componenti compongono attualmente il Consiglio di Amministrazione dell'INPS ai sensi della normativa vigente?",
    options: [
      { id: "A", text: "Tre membri compreso il Presidente" },
      { id: "B", text: "Cinque componenti, compreso il Presidente dell'Istituto" },
      { id: "C", text: "Dodici consiglieri eletti dai sindacati" },
      { id: "D", text: "Unico amministratore monocratico" }
    ],
    correctAnswerId: "B",
    explanation: "Ai sensi dell'art. 1 del D.L. 51/2023, il Consiglio di Amministrazione dell'INPS è composto da cinque membri: il Presidente dell'Istituto e altri quattro consiglieri nominati con D.P.R.",
    hint: "Composto da cinque componenti compreso il Presidente.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_053",
    question: "Quale organo dell'INPS approva in via definitiva il bilancio preventivo e il rendiconto generale consuntivo dell'Istituto?",
    options: [
      { id: "A", text: "Il Consiglio di Indirizzo e Vigilanza (CIV)" },
      { id: "B", text: "Il Direttore Generale in via esclusiva" },
      { id: "C", text: "Il Collegio dei Sindaci" },
      { id: "D", text: "La sola Corte dei Conti" }
    ],
    correctAnswerId: "A",
    explanation: "In base all'art. 3 del D.Lgs. 479/1994, rientra tra le competenze esclusive del CIV (Consiglio di Indirizzo e Vigilanza) l'approvazione del bilancio preventivo, del rendiconto consuntivo (deliberati dal CdA) e delle linee di indirizzo strategico.",
    hint: "Il bilancio è approvato dal CIV, organo di indirizzo delle parti sociali.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_054",
    question: "Da chi è composto il Consiglio di Indirizzo e Vigilanza (CIV) dell'INPS?",
    options: [
      { id: "A", text: "Da rappresentanti delle organizzazioni sindacali dei lavoratori dipendenti, dei lavoratori autonomi e delle associazioni dei datori di lavoro" },
      { id: "B", text: "Esclusivamente da dirigenti di prima fascia dell'Istituto" },
      { id: "C", text: "Da docenti universitari di diritto pubblico nominati dal Parlamento" },
      { id: "D", text: "Da tutti i Direttori Regionali in carica" }
    ],
    correctAnswerId: "A",
    explanation: "Il CIV esprime la rappresentanza sociale nell'ente ed è composto da membri designati dalle confederazioni sindacali dei lavoratori dipendenti, dalle organizzazioni dei datori di lavoro e dei lavoratori autonomi comparativamente più rappresentative.",
    hint: "Rappresenta le parti sociali (sindacati, datori di lavoro e autonomi).",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_055",
    question: "Quale durata ha il mandato degli organi collegiali di governo dell'INPS (CdA e CIV)?",
    options: [
      { id: "A", text: "Due anni non rinnovabili" },
      { id: "B", text: "Quattro anni" },
      { id: "C", text: "Sette anni come il Presidente della Repubblica" },
      { id: "D", text: "A tempo indeterminato fino al collocamento a riposo" }
    ],
    correctAnswerId: "B",
    explanation: "Ai sensi del D.Lgs. 479/1994 e del D.P.R. 366/2001, la durata in carica del Presidente, del Consiglio di Amministrazione e del Consiglio di Indirizzo e Vigilanza dell'INPS è di quattro anni.",
    hint: "Mandato istituzionale di 4 anni.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_056",
    question: "A chi compete la legale rappresentanza dell'INPS di fronte ai terzi e in giudizio?",
    options: [
      { id: "A", text: "Al Direttore Generale" },
      { id: "B", text: "Al Presidente dell'Istituto" },
      { id: "C", text: "Al Presidente del CIV" },
      { id: "D", text: "Al Ministro del Lavoro" }
    ],
    correctAnswerId: "B",
    explanation: "Ai sensi dell'art. 3, comma 3, del D.Lgs. 479/1994, il Presidente ha la legale rappresentanza dell'Istituto, presiede il CdA, ne promuove l'attività e vigila sull'esecuzione delle deliberazioni.",
    hint: "La legale rappresentanza spetta al Presidente.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_057",
    question: "Quali funzioni e compiti sono attribuiti al Direttore Generale dell'INPS?",
    options: [
      { id: "A", text: "La gestione amministrativa complessiva dell'Istituto, il coordinamento delle strutture e dei dirigenti, l'adozione degli atti di organizzazione e la responsabilità del conseguimento degli obiettivi fissati dal CdA" },
      { id: "B", text: "Esclusivamente compiti di rappresentanza cerimoniale e protocollare" },
      { id: "C", text: "L'approvazione delle leggi di bilancio in Parlamento" },
      { id: "D", text: "L'esercizio del potere giurisdizionale sulle controversie previdenziali" }
    ],
    correctAnswerId: "A",
    explanation: "Il Direttore Generale è il vertice gestionale della tecnostruttura INPS: cura l'attuazione delle linee guida del CdA, è responsabile della gestione finanziaria, tecnica e amministrativa, stipula contratti e coordina l'attività dell'intera dirigenza.",
    hint: "È il responsabile della gestione amministrativa e tecnica operativa.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_058",
    question: "Come viene nominato il Direttore Generale dell'INPS?",
    options: [
      { id: "A", text: "Con Decreto del Presidente della Repubblica, previa delibera del Consiglio dei Ministri, su proposta del Ministro del Lavoro di concerto con il MEF, sentito il CdA dell'INPS" },
      { id: "B", text: "Eletto direttamente a maggioranza assoluta dai dipendenti dell'Istituto" },
      { id: "C", text: "Con bando di concorso aperto per titoli ed esami gestito dal Formez" },
      { id: "D", text: "Nominato dal Sindaco di Roma Capitale" }
    ],
    correctAnswerId: "A",
    explanation: "La nomina del Direttore Generale dell'INPS è disposta con D.P.R. su deliberazione del Consiglio dei Ministri, su proposta del Ministro del Lavoro e delle Politiche Sociali di concerto con il Ministro dell'Economia, su designazione/sentito del CdA.",
    hint: "Nomina con D.P.R. su delibera del Consiglio dei Ministri.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_059",
    question: "Quali funzioni svolge il Collegio dei Sindaci presso l'INPS?",
    options: [
      { id: "A", text: "Esercita il controllo di regolarità contabile, amministrativa e di gestione sull'attività dell'Istituto, vigilando sull'osservanza delle leggi e dei regolamenti" },
      { id: "B", text: "Decide in sede giurisdizionale sui ricorsi per mobbing dei dipendenti" },
      { id: "C", text: "Nomina i direttori provinciali e i medici legali" },
      { id: "D", text: "Stabilisce le aliquote contributive delle gestioni autonome" }
    ],
    correctAnswerId: "A",
    explanation: "Il Collegio dei Sindaci dell'INPS è l'organo di controllo contabile e finanziario: esamina i bilanci e i rendiconti, vigila sulla gestione economica e patrimoniale e redige apposite relazioni per i ministeri vigilanti.",
    hint: "Controllo di regolarità amministrativo-contabile e finanziaria.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_060",
    question: "Quale organo di controllo esterno dello Stato vigila in modo permanente sulla gestione finanziaria dell'INPS ex Legge 259/1958?",
    options: [
      { id: "A", text: "La Corte dei Conti, tramite un magistrato delegato che assiste alle sedute degli organi collegiali" },
      { id: "B", text: "L'Autorità Garante della Concorrenza e del Mercato" },
      { id: "C", text: "La Banca d'Italia" },
      { id: "D", text: "L'Ufficio Parlamentare di Bilancio" }
    ],
    correctAnswerId: "A",
    explanation: "La Corte dei Conti esercita il controllo sulla gestione finanziaria dell'INPS ai sensi della L. 259/1958 attraverso un Consigliere delegato che assiste alle adunanze del CdA e del CIV, riferendo annualmente al Parlamento sui risultati del controllo.",
    hint: "Controllo finanziario permanente esercitato dalla Corte dei Conti.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_061",
    question: "Qual è l'articolazione territoriale periferica ordinaria dell'INPS?",
    options: [
      { id: "A", text: "Direzioni Regionali (DR), Direzioni di Coordinamento Metropolitano (DCM), Direzioni Provinciali (DP), Agenzie Complesse, Agenzie Territoriali e Punti INPS" },
      { id: "B", text: "Prefetture, Questure e Comandi dei Vigili del Fuoco" },
      { id: "C", text: "Unico sportello centrale situato a Roma con recapiti postali comunali" },
      { id: "D", text: "Ambasciate e Consolati provinciali" }
    ],
    correctAnswerId: "A",
    explanation: "L'INPS si struttura a livello territoriale in: Direzioni Regionali (DR) e Direzioni di Coordinamento Metropolitano (DCM - Roma, Milano, Napoli), Direzioni Provinciali (DP), Agenzie Complesse, Agenzie Territoriali e presidi leggeri denominati Punti INPS.",
    hint: "Dalle Direzioni Regionali/Metropolitane alle Direzioni Provinciali, Agenzie e Punti INPS.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_062",
    question: "In quali città italiane sono state istituite le Direzioni di Coordinamento Metropolitano (DCM) dell'INPS in considerazione dell'elevata densità di popolazione e bacino d'utenza?",
    options: [
      { id: "A", text: "Roma, Milano e Napoli" },
      { id: "B", text: "Torino, Genova e Palermo" },
      { id: "C", text: "Bologna, Firenze e Bari" },
      { id: "D", text: "Venezia, Trieste e Cagliari" }
    ],
    correctAnswerId: "A",
    explanation: "Le Direzioni di Coordinamento Metropolitano (DCM) dell'INPS sono strutture dirigenziali equiparate a Direzioni Regionali, previste espressamente per le tre maggiori aree metropolitane: Roma, Milano e Napoli.",
    hint: "Le tre maggiori aree metropolitane: Roma, Milano e Napoli.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_063",
    question: "Qual è il compito principale della Direzione Regionale (DR) dell'INPS rispetto alle strutture territoriali di sua competenza?",
    options: [
      { id: "A", text: "Svolge funzioni di pianificazione, coordinamento, indirizzo strategico e controllo di gestione nei confronti delle Direzioni Provinciali della regione, senza erogare direttamente prestazioni al pubblico" },
      { id: "B", text: "Eroga direttamente allo sportello tutte le pensioni dei residenti della regione" },
      { id: "C", text: "Svolge funzioni di polizia giudiziaria penale autonoma" },
      { id: "D", text: "Sostituisce il Tribunale fallimentare nelle crisi d'impresa" }
    ],
    correctAnswerId: "A",
    explanation: "La Direzione Regionale è una struttura di secondo livello gerarchico-funzionale: non ha sportelli diretti al pubblico, ma governa, programma e controlla le risorse umane, finanziarie e tecnologiche delle Direzioni Provinciali e Agenzie dell'ambito regionale.",
    hint: "Funzione di coordinamento, pianificazione e controllo, senza sportelli al pubblico.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_064",
    question: "Quale struttura dell'INPS costituisce il presidio principale per l'erogazione dei servizi, la gestione dei flussi contributivi e il rapporto con l'utenza e le imprese?",
    options: [
      { id: "A", text: "La Direzione Provinciale (DP)" },
      { id: "B", text: "La Direzione Centrale Bilanci" },
      { id: "C", text: "L'Ufficio di Gabinetto del Presidente" },
      { id: "D", text: "La Consulta Giuridica del Ministero" }
    ],
    correctAnswerId: "A",
    explanation: "La Direzione Provinciale (DP) è il fulcro della produzione dell'INPS a livello locale: vi operano le linee di servizio (prestazioni a sostegno del reddito, pensioni, conto assicurativo, entrate e vigilanza documentale/ispettiva).",
    hint: "La Direzione Provinciale è il polo produttivo territoriale principale.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_065",
    question: "Cos'è il Fondo Pensioni Lavoratori Dipendenti (FPLD) gestito dall'INPS?",
    options: [
      { id: "A", text: "La gestione previdenziale principale dell'INPS, ad alimentazione obbligatoria, che eroga i trattamenti pensionistici IVS alla generalità dei lavoratori subordinati del settore privato" },
      { id: "B", text: "Un fondo facoltativo di previdenza complementare per bancari" },
      { id: "C", text: "Un sussidio di beneficenza per residenti privi di dimora" },
      { id: "D", text: "Il conto corrente dedicato alle spese di cancelleria dell'Istituto" }
    ],
    correctAnswerId: "A",
    explanation: "Il FPLD (Fondo Pensioni Lavoratori Dipendenti), istituito presso l'INPS con R.D.L. 1827/1935, è il pilastro del sistema pensionistico italiano di base, che assicura la quasi totalità dei lavoratori subordinati privati.",
    hint: "È il fondo pensionistico generale obbligatorio dei lavoratori dipendenti privati.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_066",
    question: "Quale organo decide sui ricorsi amministrativi avverso i provvedimenti di diniego o di riliquidazione delle pensioni a carico del Fondo Pensioni Lavoratori Dipendenti?",
    options: [
      { id: "A", text: "Il Comitato Amministratore del Fondo Pensioni Lavoratori Dipendenti (FPLD)" },
      { id: "B", text: "Il Giudice di Pace del capoluogo di provincia" },
      { id: "C", text: "Il Presidente della Regione" },
      { id: "D", text: "Il Garante per la Privacy" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 46 della L. 88/1989, i ricorsi concernenti le prestazioni a carico del FPLD sono decisi dal Comitato Amministratore del medesimo Fondo, istituito presso la Direzione Generale dell'INPS.",
    hint: "Comitato Amministratore del FPLD.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_067",
    question: "Chi presiede il Comitato Provinciale dell'INPS, competente a decidere su una vasta platea di ricorsi amministrativi territoriali?",
    options: [
      { id: "A", text: "Un membro eletto dal comitato stesso tra i rappresentanti dei lavoratori dipendenti" },
      { id: "B", text: "Il Prefetto della provincia" },
      { id: "C", text: "Il Direttore Provinciale dell'INPS" },
      { id: "D", text: "Il Presidente del Tribunale" }
    ],
    correctAnswerId: "A",
    explanation: "In base all'art. 34 del D.P.R. 30 aprile 1970, n. 639 e all'art. 44 della L. 88/1989, il Comitato Provinciale elegge il proprio Presidente tra i rappresentanti dei lavoratori dipendenti presenti nel comitato.",
    hint: "Eletto tra i rappresentanti dei lavoratori dipendenti.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_INPS_068",
    question: "Quale ruolo svolge il Direttore Provinciale dell'INPS in seno al Comitato Provinciale?",
    options: [
      { id: "A", text: "Partecipa alle sedute del comitato con voto consultivo" },
      { id: "B", text: "È il presidente con diritto di veto assoluto" },
      { id: "C", text: "Non può partecipare alle sedute" },
      { id: "D", text: "Vota due volte in caso di parità" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 44 della L. 88/1989, il Direttore Provinciale dell'INPS partecipa di diritto alle adunanze del Comitato Provinciale con voto consultivo, garantendo il supporto tecnico e di legalità amministrativa.",
    hint: "Partecipa di diritto con voto consultivo.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_069",
    question: "Cosa può fare il Direttore Provinciale qualora ritenga che una delibera del Comitato Provinciale sia contraria a leggi, regolamenti o direttive generali?",
    options: [
      { id: "A", text: "Può sospendere l'esecuzione della delibera e trasmettere il provvedimento con relazione motivata alla Direzione Regionale per la decisione finale" },
      { id: "B", text: "Deve arrestare immediatamente i membri del comitato" },
      { id: "C", text: "Non ha alcun potere e deve eseguire la delibera senza indugio" },
      { id: "D", text: "Può impugnarla unicamente dinanzi alla Corte Europea dei Diritti dell'Uomo" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 46 L. 88/1989 prevede il potere di sospensiva: qualora il Direttore ritenga che la decisione del comitato provinciale presenti profili di illegittimità, sospende l'efficacia del provvedimento entro un termine perentorio e rimette gli atti alla Direzione Regionale/Centrale.",
    hint: "Potere di sospensiva della delibera con rinvio motivato alla Direzione Regionale.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_INPS_070",
    question: "Quali gestioni speciali sono state incorporate nell'INPS nel corso dell'ultimo quindicennio determinando la c.d. concentrazione del polo previdenziale unico?",
    options: [
      { id: "A", text: "L'INPDAP (previdenza dipendenti pubblici) e l'ENPALS (lavoratori dello spettacolo e dello sport), soppressi dal D.L. 201/2011" },
      { id: "B", text: "L'ACI e il CONI" },
      { id: "C", text: "La Banca Popolare di Milano e le Poste Italiane" },
      { id: "D", text: "L'Istat e l'Enea" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 21 del D.L. 201/2011 (decreto Salva Italia) ha soppresso con effetto dal 1° gennaio 2012 l'INPDAP e l'ENPALS, trasferendone integralmente all'INPS tutte le funzioni, il patrimonio e le posizioni assicurative dei dipendenti pubblici e dello spettacolo.",
    hint: "INPDAP ed ENPALS sono confluite nell'INPS dal 2012.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_071",
    question: "Qual è la collocazione del profilo 'Funzionario PECS' nella classificazione professionale del personale introdotta dal CCNL Funzioni Centrali 2019-2021?",
    options: [
      { id: "A", text: "Area dei Funzionari (ex Area C), Famiglia Professionale 'Funzionario Progettazione, Erogazione e Controllo dei Servizi'" },
      { id: "B", text: "Area degli Operatori (ex Area A)" },
      { id: "C", text: "Area della Dirigenza Generale di prima fascia" },
      { id: "D", text: "Area dei Collaboratori Ausiliari tecnici" }
    ],
    correctAnswerId: "A",
    explanation: "Il nuovo ordinamento professionale del CCNL Funzioni Centrali 2019-2021 ha riformato le aree: il funzionario PECS appartiene alla terza area, ridenominata 'Area dei Funzionari' (precedentemente Area C), con compiti ad elevata autonomia specialistica e gestionale.",
    hint: "Area dei Funzionari, famiglia professionale PECS.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_072",
    question: "Quali competenze caratterizzano specificamente la Famiglia Professionale 'Funzionario PECS' nell'organizzazione dell'INPS?",
    options: [
      { id: "A", text: "Progettazione dei processi operativi, istruttoria complessa ed erogazione delle prestazioni previdenziali e assistenziali, presidio della conformità e controllo della regolarità dei conti contributivi e contrasto alle frodi" },
      { id: "B", text: "Esclusivamente la vigilanza armata degli ingressi degli edifici dell'ente" },
      { id: "C", text: "La manutenzione dei server fisici e delle centrali elettriche" },
      { id: "D", text: "La guida degli autoveicoli di servizio del Presidente" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario PECS è il fulcro specialistico del servizio pubblico INPS: progetta i percorsi di erogazione, istruisce e liquida pratiche complesse, gestisce il rapporto con l'utenza e i patronati, e presiede al controllo di regolarità e legalità dei flussi.",
    hint: "Progettazione, erogazione e controllo di prestazioni e flussi contributivi.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_073",
    question: "Cos'è il 'Cassetto Previdenziale' gestito dalle strutture operative dell'INPS?",
    options: [
      { id: "A", text: "L'ambiente digitale integrato attraverso il quale cittadini, aziende, artigiani, commercianti e intermediari abilitati possono consultare la posizione contributiva, inviare istanze e comunicare bidirezionalmente con l'Istituto" },
      { id: "B", text: "Una cassaforte blindata collocata presso le agenzie per la custodia del denaro contante" },
      { id: "C", text: "Un archivio cartaceo storico dei registri del Novecento" },
      { id: "D", text: "Una cartella clinica ospedaliera riservata" }
    ],
    correctAnswerId: "A",
    explanation: "Il Cassetto Previdenziale (del Cittadino, dell'Azienda, degli Artigiani/Commercianti, del Lavoro Domestico) è la piattaforma telematica ufficiale di interscambio e tracciabilità tra l'INPS e gli utenti/intermediari, dotata del canale di comunicazione 'Comunicazione Bidirezionale'.",
    hint: "Piattaforma digitale per consultare posizioni e dialogare con l'INPS.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_074",
    question: "Cosa si intende per 'Comunicazione Bidirezionale' all'interno del Cassetto Previdenziale per aziende e intermediari?",
    options: [
      { id: "A", text: "Uno strumento telematico tracciato con protocollo univoco che consente alle aziende e ai consulenti di inviare quesiti e documenti e al Funzionario INPS di rispondere formalmente entro standard temporali prestabiliti" },
      { id: "B", text: "Una linea telefonica riservata ai soli giornalisti" },
      { id: "C", text: "Uno scambio informale di messaggi WhatsApp" },
      { id: "D", text: "Un sistema di altoparlanti diffuso nelle sale d'attesa" }
    ],
    correctAnswerId: "A",
    explanation: "La Comunicazione Bidirezionale consente di gestire in modo certificato e tracciato le richieste di chiarimento o di rettifica su matricole aziendali, DURC, sgravi o note di rettifica, monitorando il tempo medio di evasione della risposta (SLA della sede).",
    hint: "Canale telematico tracciato con protocollo per gestire istanze e risposte entro SLA definiti.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_075",
    question: "Quale ruolo svolge la 'Vigilanza Documentale' svolta dai funzionari amministrativi PECS all'interno delle Direzioni Provinciali?",
    options: [
      { id: "A", text: "L'analisi preventiva incrociata delle banche dati, dei flussi Uniemens e delle denunce contributive per individuare aziende fittizie, rapporti di lavoro simulati o indebite compensazioni prima dell'erogazione delle prestazioni" },
      { id: "B", text: "La fotocopiatura dei certificati anagrafici presentati agli sportelli" },
      { id: "C", text: "Il controllo della temperatura corporea all'ingresso degli uffici" },
      { id: "D", text: "La rilegatura manuale dei registri di presenza" }
    ],
    correctAnswerId: "A",
    explanation: "La vigilanza documentale è l'attività di controllo di intelligence amministrativa: incrocia le banche dati fiscali, anagrafiche e camerali per intercettare frodi, aziende 'cartiere' e indebite percezioni prima che si consolidino i pagamenti.",
    hint: "Controllo incrociato di intelligence amministrativa sui dati per prevenire frodi e aziende fittizie.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_076",
    question: "A quale autorità deve essere inoltrata tempestiva denuncia qualora il funzionario INPS, nell'esercizio delle sue funzioni, rilevi elementi di reato perseguibili d'ufficio (es. truffa aggravata per il conseguimento di erogazioni pubbliche)?",
    options: [
      { id: "A", text: "Alla Procura della Repubblica presso il Tribunale competente per territorio (art. 331 c.p.p.), tramite i canali di vertice della sede" },
      { id: "B", text: "Alla redazione dei quotidiani locali" },
      { id: "C", text: "Al Garante dell'Antitrust" },
      { id: "D", text: "Al comitato di quartiere" }
    ],
    correctAnswerId: "A",
    explanation: "In base all'art. 331 c.p.p., i pubblici ufficiali e gli incaricati di pubblico servizio che hanno notizia di un reato perseguibile d'ufficio nell'esercizio delle loro funzioni hanno l'obbligo giuridico di farne denuncia per iscritto senza ritardo al pubblico ministero o a un ufficiale di polizia giudiziaria.",
    hint: "Obbligo di denuncia alla Procura della Repubblica ex art. 331 c.p.p.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_077",
    question: "Cos'è il Contact Center Multicanale (CCM) integrato INPS-INAIL?",
    options: [
      { id: "A", text: "Il servizio telefonico e telematico nazionale di primo livello che fornisce informazioni generali, assistenza sulla navigazione del portale e presa in carico delle istanze degli utenti" },
      { id: "B", text: "Un'agenzia pubblicitaria privata esterna" },
      { id: "C", text: "L'ufficio stampa della Presidenza del Consiglio" },
      { id: "D", text: "Il centralino di emergenza dei vigili urbani" }
    ],
    correctAnswerId: "A",
    explanation: "Il Contact Center Multicanale (numero verde 803.164 da rete fissa e 06.164.164 da mobile) gestisce le richieste informative e di prima assistenza degli utenti, smistando le problematiche complesse alle sedi territoriali competenti tramite il sistema 'Linea INPS'.",
    hint: "Canale nazionale telefonico e telematico di accoglienza e informazione di primo livello.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_078",
    question: "Cosa accade quando una richiesta pervenuta al Contact Center non può essere risolta al primo livello?",
    options: [
      { id: "A", text: "Viene aperto un ticket 'Linea INPS' inoltrato telematicamente alla sede territoriale competente per la presa in carico e la risposta da parte del funzionario PECS entro i tempi di servizio concordati" },
      { id: "B", text: "La richiesta viene archiviata definitivamente" },
      { id: "C", text: "L'utente viene diffidato dal richiamare per almeno tre mesi" },
      { id: "D", text: "Viene addebitato un costo fisso di 50 euro sulla bolletta dell'utente" }
    ],
    correctAnswerId: "A",
    explanation: "Le richieste complesse di secondo livello generano una pratica di 'back-office Linea INPS' assegnata alla sede provinciale territorialmente competente, dove il funzionario PECS risponde via email, telefono o aggiornamento del cassetto.",
    hint: "Apertura ticket di secondo livello 'Linea INPS' alla sede territoriale.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_079",
    question: "Quale principio organizzativo ispira la 'Carta dei Servizi' approvata periodicamente dall'INPS?",
    options: [
      { id: "A", text: "La trasparenza degli standard di qualità, la certezza dei tempi di liquidazione delle prestazioni, la semplificazione procedurale e la tutela del diritto di reclamo del cittadino utente" },
      { id: "B", text: "La massimizzazione dei profitti societari dell'ente" },
      { id: "C", text: "L'obbligo di recarsi personalmente allo sportello per ogni tipo di adempimento" },
      { id: "D", text: "L'applicazione di tariffe differenziate per ceto sociale" }
    ],
    correctAnswerId: "A",
    explanation: "La Carta dei Servizi è il patto fondamentale tra l'INPS e la collettività: fissa gli standard qualitativi e quantitativi delle prestazioni (es. tempi massimi di erogazione pensione, NASpI, maternità), garantendo uguaglianza, imparzialità e diritto di reclamo.",
    hint: "Fissa standard di qualità, tempi massimi di erogazione e tutela del diritto di reclamo.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_080",
    question: "In caso di mancato rispetto dei tempi massimi di conclusione del procedimento previsti dalla Carta dei Servizi o dalla legge, quale rimedio interno può attivare il cittadino?",
    options: [
      { id: "A", text: "La richiesta di intervento del titolare del potere sostitutivo per la conclusione del procedimento entro un termine dimezzato rispetto a quello originario (art. 2, comma 9-ter, L. 241/1990)" },
      { id: "B", text: "La richiesta di sequestro conservativo dell'edificio della sede INPS" },
      { id: "C", text: "Il licenziamento immediato del direttore provinciale" },
      { id: "D", text: "L'esenzione a vita dal pagamento di qualsiasi imposta" }
    ],
    correctAnswerId: "A",
    explanation: "In caso di inerzia o mancato rispetto del termine di conclusione del procedimento amministrativo, il privato può rivolgersi al titolare del potere sostitutivo designato dall'amministrazione, che deve concludere il procedimento entro un termine pari alla metà di quello originario.",
    hint: "Attivazione del titolare del potere sostitutivo ex art. 2 L. 241/1990.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_081",
    question: "Quale natura hanno le 'Circolari' emanate dalla Direzione Generale dell'INPS?",
    options: [
      { id: "A", text: "Atti a rilevanza interna che contengono istruzioni interpretative, disposizioni applicative delle norme di legge e linee operative vincolanti per tutte le strutture dell'Istituto" },
      { id: "B", text: "Fonti primarie del diritto aventi valore di legge costituzionale" },
      { id: "C", text: "Sentenze definitive emesse dalla magistratura contabile" },
      { id: "D", text: "Trattati diplomatici internazionali vincolanti per gli Stati esteri" }
    ],
    correctAnswerId: "A",
    explanation: "Le circolari INPS non sono fonti del diritto con efficacia erga omnes, ma costituiscono atti amministrativi generali interni con cui il vertice dell'Istituto impartisce ai propri funzionari istruzioni vincolanti sull'applicazione uniforme della normativa.",
    hint: "Atti interni contenenti istruzioni operative e interpretative vincolanti per la tecnostruttura.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_082",
    question: "Cosa sono i 'Messaggi Hermes' diffusi quotidianamente nella rete intranet dell'INPS?",
    options: [
      { id: "A", text: "Comunicazioni operative e disposizioni tecniche a diffusione immediata emanate dalle Direzioni Centrali per aggiornare procedure informatiche, scadenze e chiarimenti urgenti" },
      { id: "B", text: "Messaggi pubblicitari commerciali visualizzati sul sito web" },
      { id: "C", text: "Poesie e testi culturali per i dipendenti in quiescenza" },
      { id: "D", text: "Bollettini meteo per le sedi montane" }
    ],
    correctAnswerId: "A",
    explanation: "I Messaggi Hermes sono lo strumento di comunicazione tecnica e operativa tempestiva con cui l'INPS comunica alla propria rete di funzionari rilasci software, istruzioni procedurali, scadenze contabili e note di chiarimento normative.",
    hint: "Disposizioni tecniche e operative urgenti diffuse sulla rete intranet dell'ente.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_083",
    question: "A quale Direzione Centrale dell'INPS fa capo il coordinamento generale dell'istruttoria delle prestazioni pensionistiche e del conto assicurativo individuale?",
    options: [
      { id: "A", text: "Direzione Centrale Pensioni" },
      { id: "B", text: "Direzione Centrale Acquisti e Appalti" },
      { id: "C", text: "Direzione Centrale Risorse Umane" },
      { id: "D", text: "Direzione Centrale Relazioni Esterne" }
    ],
    correctAnswerId: "A",
    explanation: "La Direzione Centrale Pensioni sovrintende all'impianto normativo, procedurale e applicativo relativo a tutti i trattamenti di vecchiaia, anticipati, invalidità e superstiti delle gestioni private e pubbliche.",
    hint: "Direzione Centrale Pensioni.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_084",
    question: "A quale Direzione Centrale dell'INPS compete la gestione della NASpI, della Cassa Integrazione, della maternità e dell'Assegno Unico?",
    options: [
      { id: "A", text: "Direzione Centrale Ammortizzatori Sociali e Direzione Centrale Inclusione e Sostegno alla Famiglia" },
      { id: "B", text: "Direzione Centrale Vigilanza Armata" },
      { id: "C", text: "Direzione Centrale Riscossione Tributaria Statale" },
      { id: "D", text: "Direzione Centrale Affari Consolari" }
    ],
    correctAnswerId: "A",
    explanation: "Le prestazioni a sostegno del reddito e di welfare familiare sono governate a livello centrale dalla Direzione Centrale Ammortizzatori Sociali (CIG, NASpI, fondi di solidarietà) e dalla Direzione Centrale Inclusione e Sostegno alla Famiglia (Assegno Unico, ADI, SFL, maternità).",
    hint: "Direzioni Centrali dedicate agli ammortizzatori sociali e al sostegno alla famiglia.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_085",
    question: "Quale organo collegiale interno valuta la performance organizzativa e individuale di primo livello all'INPS validando la Relazione Annuale sulla Performance?",
    options: [
      { id: "A", text: "L'Organismo Indipendente di Valutazione della Performance (OIV)" },
      { id: "B", text: "L'assemblea generale degli iscritti" },
      { id: "C", text: "Il Consiglio Nazionale dell'Economia e del Lavoro (CNEL)" },
      { id: "D", text: "La Commissione Difesa della Camera dei Deputati" }
    ],
    correctAnswerId: "A",
    explanation: "L'OIV dell'INPS, nominato ai sensi del D.Lgs. 150/2009, monitora il funzionamento complessivo del sistema di misurazione e valutazione delle performance, garantendo la correttezza metodologica e validando la relazione annuale.",
    hint: "OIV (Organismo Indipendente di Valutazione).",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_086",
    question: "Chi svolge le funzioni di Responsabile della Prevenzione della Corruzione e della Trasparenza (RPCT) all'interno dell'INPS?",
    options: [
      { id: "A", text: "Un dirigente generale di prima fascia individuato con deliberazione del CdA, conformemente alla Legge 190/2012 e al Piano Nazionale Anticorruzione" },
      { id: "B", text: "Il più anziano tra i funzionari PECS di ciascuna regione" },
      { id: "C", text: "Un avvocato esterno nominato dal Tribunale di Roma" },
      { id: "D", text: "Il rappresentante sindacale aziendale maggioritario" }
    ],
    correctAnswerId: "A",
    explanation: "Nelle amministrazioni statali ed enti pubblici non economici di grandi dimensioni il RPCT deve essere individuato, di norma, tra i dirigenti di ruolo di prima fascia dotati di autonomia e indipendenza, nominato dall'organo di indirizzo politico-amministrativo (il CdA).",
    hint: "Dirigente di prima fascia nominato dal CdA conformemente alla Legge 190/2012.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_087",
    question: "Quale funzione svolgono gli 'Ispettori di Vigilanza' dell'INPS e quale coordinamento sussiste con l'Ispettorato Nazionale del Lavoro (INL)?",
    options: [
      { id: "A", text: "Svolgono attività ispettiva in materia di previdenza e contribuzione obbligatoria, operando sotto il coordinamento dell'Ispettorato Nazionale del Lavoro istituito dal D.Lgs. 149/2015" },
      { id: "B", text: "Non esistono più ispettori presso l'INPS, essendo stati tutti trasferiti all'ANAC" },
      { id: "C", text: "Svolgono solo verifiche all'interno degli uffici INPS sui dipendenti" },
      { id: "D", text: "Operano unicamente come guardie giurate per la vigilanza degli stabili" }
    ],
    correctAnswerId: "A",
    explanation: "Con il D.Lgs. 149/2015 è stato istituito l'Ispettorato Nazionale del Lavoro (INL), che integra e coordina l'attività del personale ispettivo del Ministero del Lavoro, dell'INPS e dell'INAIL, mantenendo per il personale ispettivo INPS il focus sulla contribuzione e legalità previdenziale.",
    hint: "Coordinamento dell'attività ispettiva da parte dell'INL (D.Lgs. 149/2015).",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_088",
    question: "I verbali redatti dai funzionari di vigilanza INPS nell'esercizio delle loro attribuzioni quale valore probatorio possiedono?",
    options: [
      { id: "A", text: "Fanno piena prova fino a querela di falso limitatamente ai fatti che il pubblico ufficiale attesta avvenuti in sua presenza o da lui compiuti (art. 2700 c.c.)" },
      { id: "B", text: "Hanno mero valore di semplice indizio privo di qualsiasi rilevanza in giudizio" },
      { id: "C", text: "Costituiscono sentenza penale definitiva di primo grado inappellabile" },
      { id: "D", text: "Hanno valore probatorio solo se controfirmati dal sindaco del comune" }
    ],
    correctAnswerId: "A",
    explanation: "I verbali ispettivi redatti dagli ispettori INPS costituiscono atti pubblici ai sensi dell'art. 2699 c.c. e hanno efficacia di piena prova fino a querela di falso per quanto riguarda la provenienza e i fatti attestati come avvenuti in loro presenza.",
    hint: "Piena prova fino a querela di falso per i fatti attestati come avvenuti in loro presenza.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_INPS_089",
    question: "Cos'è il sistema 'AGENDA APPUNTAMENTI' dell'INPS introdotto per la gestione dell'accesso agli sportelli delle sedi?",
    options: [
      { id: "A", text: "Il modello di accesso prenotato che consente all'utente di selezionare giorno, ora e motivo del contatto (in presenza, via telefono o in video-chiamata), eliminando le code e garantendo la previa istruttoria del fascicolo" },
      { id: "B", text: "Un diario cartaceo tenuto a mano dal portiere della sede" },
      { id: "C", text: "Un concorso a premi per gli utenti più puntuali" },
      { id: "D", text: "L'elenco telefonico dei pensionati ultranovantenni" }
    ],
    correctAnswerId: "A",
    explanation: "Il servizio di sportello su appuntamento permette all'utente di prenotare l'accesso (tramite app INPS Mobile, portale web, contact center o totem di sede) specificando l'oggetto dell'istanza, consentendo al funzionario PECS di esaminare la pratica prima dell'incontro.",
    hint: "Sistema telematico di prenotazione personalizzata (sportello, telefono o video).",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_090",
    question: "Cosa prevede il servizio 'Sportello Video' dell'INPS?",
    options: [
      { id: "A", text: "Un colloquio web personalizzato in video-chiamata tra l'utente e il funzionario INPS di sede per la gestione di consulenze complesse senza necessità di spostamento fisico" },
      { id: "B", text: "La trasmissione di spot televisivi nelle sale d'aspetto" },
      { id: "C", text: "La registrazione segreta dell'utenza per fini commerciali" },
      { id: "D", text: "Uno spettacolo teatrale organizzato dai circoli ricreativi dell'ente" }
    ],
    correctAnswerId: "A",
    explanation: "Lo Sportello Video è uno dei canali innovativi erogati dal PECS: consente all'utente di interagire via webcam con il funzionario territoriale competente, condividere documenti sullo schermo e risolvere problematiche senza recarsi fisicamente in sede.",
    hint: "Colloquio digitale in video-chiamata per consulenze a distanza.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_091",
    question: "Cosa stabilisce il Regolamento di contabilità dell'INPS in ordine alla gestione del patrimonio immobiliare da reddito?",
    options: [
      { id: "A", text: "La dismissione, la gestione o la valorizzazione devono avvenire secondo criteri di economicità, redditività e trasparenza, nel rispetto dei vincoli di legge per la sostenibilità dei fondi pensionistici" },
      { id: "B", text: "Gli immobili possono essere ceduti a titolo gratuito agli amici dei dirigenti" },
      { id: "C", text: "Gli immobili devono rimanere obbligatoriamente sfitti e non manutenuti" },
      { id: "D", text: "Tutti gli stabili devono essere trasformati in caserme militari" }
    ],
    correctAnswerId: "A",
    explanation: "Il patrimonio immobiliare dell'INPS è destinato a generare reddito a supporto degli equilibri tecnici dei fondi di previdenza, gestito direttamente o mediante fondi immobiliari specializzati (es. SGR) secondo stringenti criteri pubblicistici e di mercato.",
    hint: "Criteri di economicità, trasparenza e redditività a tutela dei fondi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_092",
    question: "Cos'è il 'Bilancio Sociale' che l'INPS redige annualmente a consuntivo della propria attività?",
    options: [
      { id: "A", text: "Un documento pubblico di rendicontazione non finanziaria che illustra l'impatto sociale, economico e territoriale degli interventi dell'Istituto a favore della collettività, delle famiglie e delle imprese" },
      { id: "B", text: "L'elenco dei sussidi erogati ai soli dipendenti dell'Istituto" },
      { id: "C", text: "Una raccolta di interviste rilasciate dai ministri alla stampa" },
      { id: "D", text: "La dichiarazione IVA presentata all'Agenzia delle Entrate" }
    ],
    correctAnswerId: "A",
    explanation: "Il Bilancio Sociale INPS rende conto agli stakeholder (cittadini, imprese, istituzioni) del 'valore pubblico' generato dall'Istituto, quantificando l'impatto delle prestazioni (pensioni, ammortizzatori, sostegni al reddito) sulla coesione sociale e sul contrasto alla povertà.",
    hint: "Rendicontazione non finanziaria dell'impatto economico e sociale sulla collettività.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_093",
    question: "Cos'è il 'Bilancio di Genere' dell'INPS?",
    options: [
      { id: "A", text: "Uno strumento di analisi e valutazione che misura l'impatto differenziato delle politiche previdenziali, assistenziali e delle scelte organizzative dell'ente su donne e uomini" },
      { id: "B", text: "La lista delle assunzioni riservate per legge esclusivamente a candidati uomini" },
      { id: "C", text: "Un fondo speciale per il rimborso delle spese estetiche" },
      { id: "D", text: "Il conto economico dei soli contratti di fornitura stipulati con donne" }
    ],
    correctAnswerId: "A",
    explanation: "Il Bilancio di Genere analizza l'effetto delle politiche dell'Istituto e della spesa pubblica previdenziale sulle disuguaglianze di genere (es. gender pension gap, fruizione dei congedi parentali, composizione del personale e pari opportunità).",
    hint: "Valuta l'impatto differenziato delle politiche e prestazioni su donne e uomini.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_094",
    question: "Cosa sono le 'Linee di Servizio' nell'articolazione organizzativa interna di una Direzione Provinciale INPS?",
    options: [
      { id: "A", text: "I raggruppamenti funzionali omogenei di prodotti e processi (es. Linea Servizi all'Utenza, Linea Prestazioni Individuali, Linea Soggetto Contribuente)" },
      { id: "B", text: "I binari ferroviari riservati al trasporto del personale" },
      { id: "C", text: "Le linee telefoniche per chiamate intercontinentali" },
      { id: "D", text: "I canali di sfogo per le acque reflue degli edifici" }
    ],
    correctAnswerId: "A",
    explanation: "L'organizzazione della produzione delle sedi INPS è articolata per macro 'Linee di Servizio' che presidiano in modo specialistico le diverse tipologie di utenti: assicurato/pensionato (prestazioni individuali) o azienda/intermediario (soggetto contribuente).",
    hint: "Raggruppamenti operativi omogenei per tipologia di utenza e processo.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_095",
    question: "Quale funzione svolgono i 'Punti Utente Evoluti' (PUE) e i 'Punti INPS' istituiti in convenzione con enti locali o zone montane?",
    options: [
      { id: "A", text: "Presidi territoriali di prossimità per facilitare l'accesso ai servizi dell'Istituto ai cittadini di comuni decentrati, montani o a forte rischio di digital divide" },
      { id: "B", text: "Distributori automatici di bevande e snack per i dipendenti" },
      { id: "C", text: "Postazioni per scommesse sulle gare sportive" },
      { id: "D", text: "Uffici per la vendita di immobili storici dell'ente" }
    ],
    correctAnswerId: "A",
    explanation: "I Punti INPS e i Punti Utente Evoluti sono sportelli di prossimità istituiti in collaborazione con i Comuni per garantire il diritto all'accesso previdenziale nei piccoli centri e nelle aree interne, contrastando lo spopolamento e il divario digitale.",
    hint: "Presidi di prossimità per aree interne e piccoli comuni contro il digital divide.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_096",
    question: "Quale principio stabilisce il Regolamento UE 2016/679 (GDPR) in relazione all'accesso alle banche dati dell'INPS da parte del personale?",
    options: [
      { id: "A", text: "L'accesso è consentito unicamente per ragioni di servizio documentate e pertinenti alle pratiche assegnate al funzionario, tracciando ogni singola consultazione a fini di audit e responsabilità disciplinare/penale" },
      { id: "B", text: "Qualsiasi dipendente può consultare liberamente i dati patrimoniali di parenti e personaggi famosi per curiosità" },
      { id: "C", text: "Le banche dati sono liberamente accessibili senza credenziali né password" },
      { id: "D", text: "L'INPS non è soggetta alle norme del regolamento europeo sulla privacy" }
    ],
    correctAnswerId: "A",
    explanation: "L'accesso alle banche dati dell'Istituto è tracciato (log di accesso) ed è strettamente subordinato al principio di necessità e pertinenza rispetto ai compiti assegnati (need-to-know); l'accesso per motivi personali o di mera curiosità integra grave illecito disciplinare e reato penale (art. 615-ter c.p.).",
    hint: "Accesso tracciato limitato a motivate e specifiche ragioni di servizio.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_097",
    question: "Cosa si intende per 'Indebita percezione di prestazioni previdenziali' e quale procedura attiva l'INPS per il relativo recupero?",
    options: [
      { id: "A", text: "L'erogazione di somme non spettanti all'utente, per le quali l'INPS attiva l'azione di recupero crediti tramite notifica dell'indebito, trattenute sulla pensione o iscrizione a ruolo esattoriale, salvi i casi di sanatoria per errore incolpevole dell'ente (art. 52 L. 88/1989)" },
      { id: "B", text: "Il mancato pagamento dello stipendio ai dipendenti dell'ente" },
      { id: "C", text: "La vincita di un premio assicurativo privato" },
      { id: "D", text: "L'azzeramento del debito mediante semplice dichiarazione verbale" }
    ],
    correctAnswerId: "A",
    explanation: "In caso di indebito pensionistico o assistenziale, l'Istituto notifica la motivazione del recupero; per le pensioni vige il principio dell'art. 52 L. 88/1989 che tutela il pensionato in buona fede in caso di errore imputabile all'INPS, purché non vi sia stato dolo del percipiente.",
    hint: "Recupero tramite trattenute o riscossione coattiva, con tutela per errore incolpevole.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_INPS_098",
    question: "In caso di indebito su prestazioni pensionistiche generato da mancata comunicazione di fatti incidenti sul reddito (es. modello RED non inviato), quale conseguenza si determina?",
    options: [
      { id: "A", text: "La totale recuperabilità delle somme indebitamente percepite, in quanto la mancata comunicazione integra colpa o dolo dell'interessato che esclude la sanatoria" },
      { id: "B", text: "La totale prescrizione del debito dopo 30 giorni" },
      { id: "C", text: "Il raddoppio della pensione come incentivo a collaborare" },
      { id: "D", text: "La cancellazione dell'ISEE del coniuge" }
    ],
    correctAnswerId: "A",
    explanation: "La giurisprudenza della Cassazione stabilisce che l'omessa comunicazione dei redditi tramite modello RED o dichiarazione dovuta impedisce l'applicazione dell'esenzione dal recupero, legittimando l'Istituto a recuperare integralmente tutte le somme erogate in eccedenza.",
    hint: "La mancata presentazione del RED esclude la buona fede e rende l'indebito integralmente recuperabile.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_INPS_099",
    question: "Quale regime fiscale si applica alle pensioni erogate dall'INPS ai cittadini residenti in Italia?",
    options: [
      { id: "A", text: "Sono assoggettate all'IRPEF ordinaria e alle addizionali regionali e comunali, operando l'INPS in qualità di sostituto d'imposta" },
      { id: "B", text: "Sono completamente esenti da qualsiasi imposta diretta o indiretta" },
      { id: "C", text: "Sono tassate con un'aliquota unica del 50% alla fonte" },
      { id: "D", text: "Sono soggette unicamente all'imposta di bollo sui conti correnti" }
    ],
    correctAnswerId: "A",
    explanation: "L'INPS opera come sostituto d'imposta: effettua le ritenute IRPEF a titolo di acconto o saldo sulle pensioni imponibili, applica le detrazioni per redditi di pensione e carichi di famiglia ed emette annualmente la Certificazione Unica (CU).",
    hint: "L'INPS opera come sostituto d'imposta applicando IRPEF e addizionali con rilascio della CU.",
    level: "base"
  },
  {
    id: "Q_PECS_INPS_100",
    question: "Quale documento fiscale rilascia annualmente l'INPS a tutti i pensionati e percettori di ammortizzatori sociali utile per la dichiarazione dei redditi?",
    options: [
      { id: "A", text: "La Certificazione Unica (CU)" },
      { id: "B", text: "La fattura elettronica di prestazione" },
      { id: "C", text: "Il verbale di accertamento tributario" },
      { id: "D", text: "Il certificato penale generale" }
    ],
    correctAnswerId: "A",
    explanation: "La Certificazione Unica (CU) attesta l'ammontare complessivo dei redditi da pensione, lavoro dipendente o prestazioni a sostegno del reddito corrisposti dall'INPS nell'anno d'imposta precedente, nonché le ritenute fiscali e le detrazioni operate.",
    hint: "La Certificazione Unica (CU).",
    level: "base"
  }
];

const merged = [...existing, ...newQuestions];
fs.writeFileSync(targetFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Successfully added ${newQuestions.length} questions to ordinamento_inps.json. Total questions: ${merged.length}`);
