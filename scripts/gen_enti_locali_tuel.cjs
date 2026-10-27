const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: "Q_ENTI_LOC_001",
    question: "Ai sensi dell'art. 2 del D.Lgs. 267/2000 (TUEL), quali enti rientrano nella definizione di 'enti locali'?",
    options: [
      { id: "A", text: "I Comuni, le Province, le Città Metropolitane, le Comunità Montane, le Comunità Isolane e le Unioni di Comuni" },
      { id: "B", text: "Esclusivamente i Comuni e le Province" },
      { id: "C", text: "Tutti gli enti pubblici compresi le Regioni e le Aziende Sanitarie Locali" },
      { id: "D", text: "Solo i Comuni con popolazione superiore a 15.000 abitanti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2, comma 1, TUEL definisce enti locali: i Comuni, le Province, le Città metropolitane, le Comunità montane, le Comunità isolane e le Unioni di comuni. Le Regioni sono enti territoriali ma non 'enti locali' ai sensi del TUEL.",
    hint: "Comprende enti di base, intermedi e forme associative montane/isolane/unioni.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_002",
    question: "Quale organo dell'ente locale adotta lo Statuto comunale ai sensi dell'art. 6 del TUEL?",
    options: [
      { id: "A", text: "Il Consiglio comunale con maggioranza qualificata dei due terzi dei consiglieri assegnati" },
      { id: "B", text: "La Giunta comunale su proposta del Sindaco" },
      { id: "C", text: "Il Sindaco con proprio decreto non impugnabile" },
      { id: "D", text: "Il Segretario comunale sentito il Prefetto" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 6, comma 4, TUEL, gli statuti sono deliberati dal Consiglio con il voto favorevole dei due terzi dei consiglieri assegnati (oppure con doppia votazione a maggioranza assoluta entro trenta giorni).",
    hint: "Lo Statuto è la fonte fondamentale dell'autonomia locale e spetta all'organo assembleare di indirizzo.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_003",
    question: "Se nella prima votazione dello Statuto non si raggiunge la maggioranza dei due terzi dei consiglieri assegnati, come si procede ex art. 6 TUEL?",
    options: [
      { id: "A", text: "La votazione è ripetuta in successive sedute da tenersi entro 30 giorni ed è approvato se ottiene per due volte la maggioranza assoluta" },
      { id: "B", text: "La proposta statutaria si intende definitivamente respinta" },
      { id: "C", text: "Lo statuto viene rimesso al Presidente della Regione per l'approvazione d'ufficio" },
      { id: "D", text: "Viene indetto obbligatoriamente un referendum confermativo popolare entro 60 giorni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 6, comma 4, TUEL stabilisce che se tale maggioranza non viene raggiunta, la votazione è ripetuta in successive sedute da tenersi entro trenta giorni e lo statuto è approvato se la proposta ottiene, per due volte, il voto favorevole della maggioranza assoluta dei consiglieri assegnati.",
    hint: "Doppia deliberazione a maggioranza assoluta entro un mese.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_004",
    question: "Qual è il ruolo istituzionale del Consiglio Comunale ai sensi dell'art. 42 del TUEL?",
    options: [
      { id: "A", text: "È l'organo di indirizzo e di controllo politico-amministrativo con competenza limitata agli atti fondamentali tassativamente indicati dalla legge" },
      { id: "B", text: "È l'organo esecutivo con competenza residuale per tutti gli atti non riservati al Sindaco" },
      { id: "C", text: "È l'organo di gestione amministrativa e tecnica del patrimonio comunale" },
      { id: "D", text: "È l'organo incaricato di vigilare sull'attività del Segretario generale e del personale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 42 TUEL definisce il Consiglio quale organo di indirizzo e di controllo politico-amministrativo, con competenza tassativa ed esclusiva limitata agli atti fondamentali indicati al comma 2 (statuti, bilanci, piani urbanistici, tributi, convenzioni, ecc.).",
    hint: "Ha competenza 'tassativa ed enumerata', a differenza della competenza 'residuale' della Giunta.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_005",
    question: "Quale dei seguenti atti rientra nella competenza esclusiva del Consiglio Comunale ex art. 42 TUEL?",
    options: [
      { id: "A", text: "L'approvazione del bilancio di previsione e del rendiconto della gestione" },
      { id: "B", text: "L'approvazione del Piano Esecutivo di Gestione (PEG)" },
      { id: "C", text: "L'approvazione del regolamento sull'ordinamento degli uffici e dei servizi" },
      { id: "D", text: "La stipula dei singoli contratti d'appalto" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 42, comma 2, lett. b), TUEL attribuisce al Consiglio comunale l'approvazione dei bilanci annuali e pluriennali e relative variazioni, del rendiconto, del DUP. Il PEG e l'ordinamento uffici e servizi spettano invece alla Giunta (art. 48 e 169).",
    hint: "I documenti fondamentali di programmazione finanziaria spettano sempre al Consiglio.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_006",
    question: "Qual è la natura della competenza della Giunta comunale ai sensi dell'art. 48 del TUEL?",
    options: [
      { id: "A", text: "Competenza residuale: compie tutti gli atti di governo non riservati dalla legge al Consiglio e che non ricadano nelle competenze del Sindaco o dei dirigenti" },
      { id: "B", text: "Competenza tassativa limitata agli atti espressamente elencati nel TUEL" },
      { id: "C", text: "Competenza consultiva facoltativa senza potere deliberativo" },
      { id: "D", text: "Competenza esclusiva in materia tributaria e tariffaria" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 48, comma 2, TUEL stabilisce: 'La giunta compie tutti gli atti rientranti ai sensi dell'articolo 107, commi 1 e 2, nelle funzioni degli organi di governo, che non siano riservati dalla legge al consiglio e che non ricadano nelle competenze, previste dalle leggi o dallo statuto, del sindaco o del presidente della provincia o degli organi di decentramento'.",
    hint: "La Giunta è l'organo esecutivo a competenza generale/residuale.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_007",
    question: "Chi nomina e può revocare i componenti della Giunta comunale (assessori)?",
    options: [
      { id: "A", text: "Il Sindaco, che ne dà motivata comunicazione al Consiglio nella prima seduta successiva" },
      { id: "B", text: "Il Consiglio comunale con votazione a scrutinio segreto" },
      { id: "C", text: "Il Prefetto della provincia sentita la commissione elettorale" },
      { id: "D", text: "Gli assessori sono eletti direttamente dai cittadini" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 46, comma 2 e 4, TUEL, il Sindaco nomina i componenti della Giunta, tra cui un vicesindaco, e può revocare uno o più assessori dandone motivata comunicazione al Consiglio.",
    hint: "Rapporto fiduciario diretto tra Sindaco e assessori nominati.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_008",
    question: "Quale duplice ruolo riveste il Sindaco nell'ordinamento degli enti locali italiani?",
    options: [
      { id: "A", text: "Capo dell'amministrazione comunale e Ufficiale di Governo per le funzioni statali delegate" },
      { id: "B", text: "Presidente del Consiglio comunale e organo di revisione contabile" },
      { id: "C", text: "Rappresentante della Regione e titolare del potere giurisdizionale locale" },
      { id: "D", text: "Dirigente generale di tutti i settori e datore di lavoro sindacale" }
    ],
    correctAnswerId: "A",
    explanation: "Il Sindaco è al contempo organo responsabile dell'amministrazione del Comune (art. 50 TUEL) e Ufficiale di Governo (art. 54 TUEL) per materie statali quali anagrafe, stato civile, elettorale, ordine pubblico e pubblica sicurezza.",
    hint: "Distingui le funzioni di capo dell'ente locale da quelle statali delegate di ufficiale del Governo.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_009",
    question: "In quali materie il Sindaco può adottare ordinanze contingibili e urgenti nella veste di Ufficiale di Governo ex art. 54 TUEL?",
    options: [
      { id: "A", text: "Al fine di prevenire e di eliminare gravi pericoli che minacciano l'incolumità pubblica e la sicurezza urbana" },
      { id: "B", text: "Per modificare le tariffe dei tributi comunali in corso d'anno" },
      { id: "C", text: "Per assumere personale a tempo indeterminato in deroga al concorso" },
      { id: "D", text: "Per approvare il rendiconto di bilancio in caso di disaccordo politico" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 54, comma 4, TUEL attribuisce al Sindaco, quale ufficiale del Governo, il potere di adottare con atto motivato provvedimenti contingibili e urgenti per prevenire ed eliminare gravi pericoli che minacciano l'incolumità pubblica e la sicurezza urbana, previa comunicazione al Prefetto.",
    hint: "Incolumità pubblica e sicurezza urbana sono i presupposti tipici dell'art. 54.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_010",
    question: "Chi adotta le ordinanze ordinarie per l'amministrazione del Comune (es. viabilità o orari degli uffici) ai sensi dell'art. 50 TUEL?",
    options: [
      { id: "A", text: "Il Sindaco quale capo dell'amministrazione comunale" },
      { id: "B", text: "Il Segretario comunale d'intesa con il Prefetto" },
      { id: "C", text: "La Giunta comunale collegialmente" },
      { id: "D", text: "Il Comandante della Polizia Locale in via esclusiva" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 50, commi 2 e 7, TUEL riserva al Sindaco l'emanazione di ordinanze ordinarie in conformità alle leggi e ai regolamenti (es. orari dei servizi, coordinamento orari commerciali, ecc.).",
    hint: "Rientra nelle competenze proprie del Sindaco ex art. 50.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_011",
    question: "Ai sensi dell'art. 107 del TUEL, a chi spetta la gestione amministrativa, finanziaria e tecnica dell'ente locale?",
    options: [
      { id: "A", text: "Ai dirigenti o responsabili dei servizi mediante autonomi poteri di spesa, di organizzazione delle risorse e di gestione" },
      { id: "B", text: "Agli assessori componenti della Giunta municipale" },
      { id: "C", text: "Al Consiglio comunale in seduta pubblica" },
      { id: "D", text: "Al Sindaco e ai singoli consiglieri delegati" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 107 TUEL sancisce la netta separazione tra funzione di indirizzo politico (spettante agli organi di governo) e gestione amministrativa (spettante in via esclusiva ai dirigenti, mediante determinazioni e atti di gestione).",
    hint: "Principio fondamentale di separazione tra politica e gestione amministrativa.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_012",
    question: "Nei Comuni privi di personale con qualifica dirigenziale, a chi possono essere attribuite le funzioni dirigenziali ex art. 109, comma 2, TUEL?",
    options: [
      { id: "A", text: "Ai responsabili degli uffici o dei servizi (funzionari di categoria D/EQ), indipendentemente dalla loro qualifica funzionale" },
      { id: "B", text: "Direttamente al Sindaco e agli assessori" },
      { id: "C", text: "Esclusivamente al Prefetto della Provincia" },
      { id: "D", text: "A consulenti esterni con contratto d'opera professionale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 109, comma 2, TUEL prevede che nei Comuni privi di personale di qualifica dirigenziale le funzioni di cui all'art. 107 possono essere attribuite a seguito di provvedimento motivato del Sindaco ai responsabili degli uffici o dei servizi (funzionari titolari di Elevata Qualificazione).",
    hint: "Tipico dei Comuni medi e piccoli dove i funzionari svolgono compiti gestionali/apicali.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_013",
    question: "Quali pareri preventivi devono essere obbligatoriamente acquisiti su ogni proposta di deliberazione ex art. 49 TUEL?",
    options: [
      { id: "A", text: "Il parere di regolarità tecnica del responsabile del servizio e, ove comporti riflessi diretti o indiretti sulla situazione economico-finanziaria, il parere di regolarità contabile del responsabile di ragioneria" },
      { id: "B", text: "Il parere di conformità politica del capogruppo di maggioranza" },
      { id: "C", text: "Il visto del Difensore Civico Regionale" },
      { id: "D", text: "Il parere vincolante della Prefettura" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 49 TUEL (richiamato dall'art. 147-bis) stabilisce che su ogni proposta di deliberazione della Giunta e del Consiglio deve essere espresso il parere di regolarità tecnica del responsabile del servizio competente e il parere di regolarità contabile del responsabile finanziario se comporta riflessi finanziari.",
    hint: "Parere tecnico e parere contabile sono i due visti cardine sulle delibere comunali.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_014",
    question: "Qual è il termine ordinario di pubblicazione delle deliberazioni comunali all'Albo Pretorio online per l'esecutività?",
    options: [
      { id: "A", text: "15 giorni consecutivi, divenendo esecutive dopo il decimo giorno dall'inizio della pubblicazione" },
      { id: "B", text: "30 giorni consecutivi, con esecutività al trentesimo giorno" },
      { id: "C", text: "60 giorni lavorativi" },
      { id: "D", text: "5 giorni non festivi" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 124 TUEL dispone che tutte le deliberazioni del comune e della provincia sono pubblicate mediante affissione all'albo pretorio per 15 giorni consecutivi. L'art. 134, comma 3, stabilisce che diventano esecutive dopo il decimo giorno dall'inizio della pubblicazione.",
    hint: "Pubblicazione per 15 giorni con esecutività ordinaria al decimo giorno.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_015",
    question: "A quali condizioni una deliberazione della Giunta o del Consiglio può essere dichiarata immediatamente eseguibile ex art. 134, comma 4, TUEL?",
    options: [
      { id: "A", text: "Nel caso di urgenza, con il voto espresso della maggioranza dei componenti" },
      { id: "B", text: "Con la semplice firma del Sindaco apposta in calce all'atto" },
      { id: "C", text: "Solo previa ratifica scritta del Prefetto" },
      { id: "D", text: "Solo se approvata all'unanimità dei votanti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 134, comma 4, TUEL stabilisce: 'Nel caso di urgenza le deliberazioni del consiglio o della giunta possono essere dichiarate immediatamente eseguibili con il voto espresso dalla maggioranza dei componenti'.",
    hint: "Serve una votazione separata ed espressa a maggioranza dei componenti.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_016",
    question: "Chi nomina il Segretario comunale ai sensi dell'art. 99 del TUEL?",
    options: [
      { id: "A", text: "Il Sindaco (o Presidente della Provincia), che lo sceglie tra gli iscritti all'Albo nazionale dei segretari comunali e provinciali" },
      { id: "B", text: "Il Consiglio comunale su terna proposta dalla Giunta" },
      { id: "C", text: "Il Ministero dell'Interno tramite sorteggio automatizzato" },
      { id: "D", text: "Il Presidente della Corte dei Conti regionale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 99, comma 1, TUEL prevede che il Sindaco e il Presidente della Provincia nominano il segretario, che dipende funzionalmente dal capo dell'amministrazione, scegliendolo tra gli iscritti all'albo.",
    hint: "Nomina fiduciaria-funzionale da parte del Sindaco tra gli iscritti all'Albo.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_017",
    question: "Quanto dura l'incarico del Segretario comunale presso l'ente locale?",
    options: [
      { id: "A", text: "La nomina ha durata corrispondente a quella del mandato del Sindaco o del Presidente della Provincia che lo ha nominato" },
      { id: "B", text: "Dura a tempo indeterminato e non può essere revocato dal nuovo Sindaco" },
      { id: "C", text: "Dura obbligatoriamente 3 anni senza possibilità di proroga" },
      { id: "D", text: "Dura un anno rinnovabile annualmente dalla Giunta" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 99, comma 2, TUEL stabilisce che la nomina ha durata corrispondente a quella del mandato del sindaco che l'ha effettuata. Il segretario continua ad esercitare le funzioni fino alla riconferma o alla nomina del nuovo segretario (tra i 60 e i 120 giorni dall'insediamento).",
    hint: "La durata è legata al mandato politico del capo dell'amministrazione (spoil system attenuato).",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_018",
    question: "Quale delle seguenti funzioni spetta tipicamente al Segretario comunale ai sensi dell'art. 97 TUEL?",
    options: [
      { id: "A", text: "Partecipare con funzioni consultive, referenti e di assistenza alle riunioni del consiglio e della giunta e curarne la verbalizzazione" },
      { id: "B", text: "Emanare ordinanze contingibili e urgenti in materia di viabilità" },
      { id: "C", text: "Rappresentare l'ente in giudizio al posto del Sindaco senza procura" },
      { id: "D", text: "Approvare le variazioni di bilancio in via d'urgenza" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 97, comma 4, lett. a), TUEL, il segretario partecipa con funzioni consultive, referenti e di assistenza alle riunioni del consiglio e della giunta e ne cura la verbalizzazione.",
    hint: "È il garante della legalità e segretario verbalizzante degli organi collegiali.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_019",
    question: "In quali Comuni può essere nominato il Direttore Generale ex art. 108 del TUEL?",
    options: [
      { id: "A", text: "Nei Comuni con popolazione superiore a 100.000 abitanti (oppure in forma associata tra Comuni la cui popolazione complessiva superi tale soglia)" },
      { id: "B", text: "In tutti i Comuni capoluogo di Provincia indipendentemente dal numero di abitanti" },
      { id: "C", text: "In ogni Comune con almeno 5.000 abitanti" },
      { id: "D", text: "Esclusivamente nelle Regioni a statuto speciale" }
    ],
    correctAnswerId: "A",
    explanation: "A seguito delle modifiche introdotte dalla L. 191/2009 (Finanziaria 2010), la facoltà di nominare il Direttore Generale è stata limitata ai soli Comuni con popolazione superiore a 100.000 abitanti (e consorzi/unioni con pari popolazione).",
    hint: "La soglia è fissata a 100.000 abitanti.",
    level: "avanzato"
  },
  {
    id: "Q_ENTI_LOC_020",
    question: "Quale causa determina lo scioglimento del Consiglio comunale ai sensi dell'art. 141, comma 1, lett. b), n. 2, del TUEL?",
    options: [
      { id: "A", text: "Le dimissioni contestuali della metà più uno dei membri assegnati, non computando a tal fine il Sindaco" },
      { id: "B", text: "La mancata approvazione di un regolamento comunale entro 30 giorni" },
      { id: "C", text: "Il dissenso espresso da un assessore durante la seduta di Giunta" },
      { id: "D", text: "La riduzione dei consiglieri di un solo componente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 141, comma 1, lett. b), n. 3, TUEL prevede lo scioglimento del consiglio per cessazione dalla carica per dimissioni contestuali, ovvero rese anche con atti separati contemporaneamente presentati, della metà più uno dei consiglieri assegnati, non computando a tal fine il sindaco.",
    hint: "Le dimissioni ultra-dimidiarie contestuali provocano lo scioglimento automatico dell'organo assembleare.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_021",
    question: "Cosa comporta l'approvazione di una mozione di sfiducia nei confronti del Sindaco ex art. 52 TUEL?",
    options: [
      { id: "A", text: "La cessazione del Sindaco e della Giunta e lo scioglimento del Consiglio comunale, con conseguente nomina di un commissario prefettizio" },
      { id: "B", text: "Le dimissioni del solo Sindaco, mentre il vicesindaco assume la carica a tempo indeterminato" },
      { id: "C", text: "La decadenza della sola Giunta municipale" },
      { id: "D", text: "La sospensione del Consiglio comunale per sei mesi" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 52, comma 2, TUEL, l'approvazione della mozione di sfiducia (votata per appello nominale dalla maggioranza assoluta dei componenti) comporta la cessazione dalla carica del Sindaco e della Giunta e lo scioglimento del Consiglio, in virtù del principio simul stabunt, simul cadent.",
    hint: "Principio 'simul stabunt simul cadent': cade il Sindaco, cade anche il Consiglio.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_022",
    question: "Entro quanti giorni dalla presentazione può essere messa in discussione e votata la mozione di sfiducia al Sindaco?",
    options: [
      { id: "A", text: "Non prima di 10 giorni e non oltre 30 giorni dalla sua presentazione" },
      { id: "B", text: "Immediatamente nella stessa seduta in cui viene depositata" },
      { id: "C", text: "Entro 5 giorni lavorativi" },
      { id: "D", text: "Non prima di 60 giorni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 52, comma 2, TUEL stabilisce che la mozione di sfiducia deve essere motivata e sottoscritta da almeno due quinti dei consiglieri e viene messa in discussione non prima di 10 giorni e non oltre 30 giorni dalla sua presentazione.",
    hint: "Termine dilatorio di 10 giorni (per consentire la riflessione) ed esiziale di 30 giorni.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_023",
    question: "Ai sensi dell'art. 143 del TUEL, da chi è disposto lo scioglimento dei consigli comunali per fenomeni di infiltrazione o condizionamento di tipo mafioso?",
    options: [
      { id: "A", text: "Con decreto del Presidente della Repubblica, su proposta del Ministro dell'Interno, previa deliberazione del Consiglio dei Ministri" },
      { id: "B", text: "Con ordinanza del Prefetto competente territorialmente" },
      { id: "C", text: "Con sentenza del Tribunale Amministrativo Regionale (TAR)" },
      { id: "D", text: "Con delibera unanime dell'Autorità Nazionale Anticorruzione (ANAC)" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 143, comma 1, TUEL stabilisce che lo scioglimento per infiltrazioni mafiose è disposto con D.P.R., su proposta del Ministro dell'Interno, previa deliberazione del Consiglio dei Ministri entro 3 mesi dalla relazione prefettizia.",
    hint: "Atto di massima gravità istituzionale adottato con D.P.R. su delibera del Governo.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_024",
    question: "Quanto dura la gestione straordinaria della commissione nominata a seguito dello scioglimento ex art. 143 TUEL?",
    options: [
      { id: "A", text: "Da 12 a 18 mesi, prorogabili fino ad un massimo di 24 mesi" },
      { id: "B", text: "6 mesi non prorogabili" },
      { id: "C", text: "Esattamente 5 anni corrispondenti ad una legislatura ordinaria" },
      { id: "D", text: "Fino alle prime elezioni europee utili" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 143, comma 2, TUEL prevede che la durata dello scioglimento è determinata da 12 a 18 mesi, prorogabili per un periodo ulteriore fino a un massimo di 24 mesi in casi eccezionali.",
    hint: "Da uno a un anno e mezzo, estendibile al massimo a due anni.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_025",
    question: "Che cos'è l'Unione di Comuni ai sensi dell'art. 32 del TUEL?",
    options: [
      { id: "A", text: "L'ente locale costituito da due o più comuni, di norma contermini, finalizzato all'esercizio associato di funzioni e servizi" },
      { id: "B", text: "Un consorzio commerciale a scopo di lucro tra municipi" },
      { id: "C", text: "Una mera associazione di fatto senza personalità giuridica" },
      { id: "D", text: "L'organo provinciale deputato alla raccolta dei tributi" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 32, comma 1, TUEL definisce l'Unione di comuni quale ente locale costituito da due o più comuni, di norma contermini, allo scopo di esercitare congiuntamente una pluralità di funzioni di loro competenza. È dotata di potestà statutaria e regolamentare.",
    hint: "È un vero e proprio ente locale con personalità giuridica autonoma.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_026",
    question: "Cosa stabilisce l'art. 30 del TUEL in tema di convenzioni tra enti locali?",
    options: [
      { id: "A", text: "I comuni e le province possono stipulare tra loro apposite convenzioni al fine di svolgere in modo coordinato funzioni e servizi determinati" },
      { id: "B", text: "Le convenzioni creano automaticamente un nuovo ente dotato di Consiglio e Giunta" },
      { id: "C", text: "Le convenzioni possono avere una durata massima inderogabile di un mese" },
      { id: "D", text: "È vietata qualsiasi forma convenzionale tra enti di province diverse" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 30 TUEL prevede la stipula di convenzioni per gestire in modo coordinato specifici servizi e funzioni. La convenzione deve stabilire fini, durata, forme di consultazione, rapporti finanziari e reciproci obblighi e garanzie.",
    hint: "È lo strumento contrattuale più flessibile per la gestione associata senza creare un nuovo ente.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_027",
    question: "Che cos'è l'Accordo di Programma disciplinato dall'art. 34 del TUEL?",
    options: [
      { id: "A", text: "Uno strumento per la definizione e attuazione di opere, interventi o programmi che richiedono l'azione integrata e coordinata di comuni, province, regioni e amministrazioni statali" },
      { id: "B", text: "L'intesa sindacale per il rinnovo del contratto decentrato integrativo" },
      { id: "C", text: "Il patto elettorale stipulato tra i partiti della coalizione del Sindaco" },
      { id: "D", text: "Il regolamento interno di contabilità finanziaria approvato dalla Giunta" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 34 TUEL disciplina l'Accordo di Programma per promuovere e coordinare la realizzazione di opere e interventi complessi che coinvolgono molteplici livelli istituzionali. È promosso dal Presidente della Regione, della Provincia o dal Sindaco.",
    hint: "Coinvolge più livelli istituzionali per realizzare interventi pubblici complessi.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_028",
    question: "Quale organo presiede il Consiglio Comunale nei Comuni con popolazione superiore a 15.000 abitanti?",
    options: [
      { id: "A", text: "Un Presidente eletto tra i consiglieri comunali nella prima seduta del consiglio" },
      { id: "B", text: "Obbligatoriamente il Sindaco in carica" },
      { id: "C", text: "Il consigliere comunale più anziano di età" },
      { id: "D", text: "Il Segretario comunale" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 39, comma 1, TUEL, i consigli comunali dei comuni con popolazione superiore a 15.000 abitanti sono presieduti da un presidente eletto tra i consiglieri nella prima seduta. Nei comuni sotto i 15.000 abitanti è presieduto dal sindaco salvo diversa previsione statutaria.",
    hint: "Sopra i 15.000 abitanti la figura del Presidente del Consiglio è obbligatoria per legge.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_029",
    question: "In materia di controlli interni negli enti locali, quale articolo del TUEL è stato introdotto per disciplinare il controllo di regolarità amministrativa e contabile?",
    options: [
      { id: "A", text: "Articolo 147-bis" },
      { id: "B", text: "Articolo 49-bis" },
      { id: "C", text: "Articolo 12" },
      { id: "D", text: "Articolo 200" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 147-bis TUEL (introdotto dal D.L. 174/2012) disciplina il controllo di regolarità amministrativa e contabile, che si articola in una fase preventiva (rilascio pareri) e in una fase successiva (controlli a campione sulle determinazioni e contratti).",
    hint: "Articolo cardine sui controlli di legalità preventiva e successiva post DL 174/2012.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_030",
    question: "Chi effettua il controllo successivo di regolarità amministrativa sulle determinazioni dirigenziali ex art. 147-bis, comma 2, TUEL?",
    options: [
      { id: "A", text: "Il Segretario comunale, sotto la cui direzione sono eseguite le verifiche a campione" },
      { id: "B", text: "Il Difensore Civico provinciale" },
      { id: "C", text: "L'OIV del Ministero dell'Interno" },
      { id: "D", text: "I singoli assessori di settore" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 147-bis, comma 2, TUEL stabilisce che il controllo successivo di regolarità amministrativa è assicurato, secondo i principi generali dell'ordinamento, sotto la direzione del segretario comunale.",
    hint: "Il Segretario generale coordina il campionamento e le risultanze del controllo successivo.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_031",
    question: "In che cosa consiste il controllo strategico negli enti locali di maggiori dimensioni (art. 147-ter TUEL)?",
    options: [
      { id: "A", text: "Nella verifica dello stato di attuazione dei programmi e dell'effettiva realizzazione degli obiettivi strategici stabiliti nelle linee programmatiche e nel DUP" },
      { id: "B", text: "Nel controllo preventivo di legittimità su tutte le fatture dei fornitori" },
      { id: "C", text: "Nel controllo delle presenze del personale dipendente" },
      { id: "D", text: "Nella vigilanza sulle elezioni del Consiglio" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 147-ter TUEL definisce il controllo strategico come la metodologia volta a rilevare i risultati conseguiti rispetto agli obiettivi predefiniti, la congruenza tra gli obiettivi e le scelte operative, nonché lo stato di attuazione dei piani programmatici.",
    hint: "Misura l'efficacia delle politiche pubbliche rispetto al mandato programmatico.",
    level: "avanzato"
  },
  {
    id: "Q_ENTI_LOC_032",
    question: "Cos'è il controllo sugli equilibri finanziari disciplinato dall'art. 147-quinquies del TUEL?",
    options: [
      { id: "A", text: "Il controllo svolto sotto la direzione del responsabile del servizio finanziario e mediante la vigilanza dell'organo di revisione per garantire il costante pareggio di bilancio e la salvaguardia degli equilibri finanziari" },
      { id: "B", text: "L'ispezione della Guardia di Finanza su base semestrale" },
      { id: "C", text: "La revisione della pianta organica del personale" },
      { id: "D", text: "Il monitoraggio delle sole spese di rappresentanza del Sindaco" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 147-quinquies TUEL prevede che il controllo sugli equilibri finanziari sia svolto sotto la direzione e il coordinamento del responsabile dei servizi finanziari e mediante la vigilanza dell'organo di revisione, con il costante monitoraggio della gestione di cassa, competenza e residui.",
    hint: "Previene squilibri di bilancio ed evita il disavanzo.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_033",
    question: "Quale maggioranza è richiesta per l'approvazione delle deliberazioni del Consiglio comunale, in assenza di diversa specifica disposizione?",
    options: [
      { id: "A", text: "La maggioranza assoluta dei votanti, salvo disposizioni di legge o di statuto che richiedano maggioranze qualificate" },
      { id: "B", text: "L'unanimità dei consiglieri presenti" },
      { id: "C", text: "I due terzi dei componenti assegnati" },
      { id: "D", text: "Il voto favorevole di almeno tre consiglieri di minoranza" }
    ],
    correctAnswerId: "A",
    explanation: "Nelle sedute consiliari la regola ordinaria è la maggioranza semplice dei votanti (o assoluta dei presenti secondo le norme statutarie e regolamentari dell'ente), fermo restando il quorum strutturale di validità della seduta (un terzo dei consiglieri ex art. 38 TUEL).",
    hint: "La regola standard è la maggioranza ordinaria dei voti validamente espressi.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_034",
    question: "Cosa stabilisce l'art. 38, comma 2, del TUEL in merito al numero minimo di consiglieri per la validità delle sedute del Consiglio comunale?",
    options: [
      { id: "A", text: "Il regolamento deve prevedere un numero di consiglieri non inferiore ad un terzo dei consiglieri assegnati per la validità delle sedute" },
      { id: "B", text: "Devono essere presenti tutti i consiglieri assegnati" },
      { id: "C", text: "È sufficiente la presenza del solo Presidente del Consiglio e del Sindaco" },
      { id: "D", text: "Occorre sempre la presenza della metà più uno in ogni circostanza" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 38, comma 2, TUEL stabilisce che i consigli sono disciplinati da apposito regolamento, ma il regolamento deve comunque prevedere un numero di consiglieri non inferiore ad un terzo di quelli assegnati (quorum strutturale minimo di legge).",
    hint: "Il limite minimo inderogabile fissato dalla legge è 1/3 dei consiglieri assegnati.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_035",
    question: "Cosa accade se il Consiglio comunale non approva il bilancio di previsione nei termini stabiliti dalla legge?",
    options: [
      { id: "A", text: "Il Prefetto assegna al Consiglio un termine non superiore a 20 giorni per provvedere; decorso inutilmente tale termine, avvia la procedura per lo scioglimento del Consiglio e nomina un commissario" },
      { id: "B", text: "Il bilancio si intende tacitamente approvato per silenzio assenso" },
      { id: "C", text: "La Giunta decade ma il Consiglio rimane in carica fino alla scadenza naturale" },
      { id: "D", text: "L'ente viene automaticamente soppresso e fuso con il Comune contermine" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 141, comma 2 e 7, TUEL prevede che in caso di mancata approvazione del bilancio entro i termini, il Prefetto diffida il consiglio assegnando un termine non superiore a 20 giorni, decorso il quale il consiglio viene sciolto e nominato un commissario.",
    hint: "Diffida prefettizia con termine ad horas (max 20 giorni) pena lo scioglimento dell'ente.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_036",
    question: "A chi spetta l'adozione delle 'determinazioni' nell'organizzazione comunale?",
    options: [
      { id: "A", text: "Ai dirigenti e ai titolari di posizioni apicali/elevata qualificazione nell'esercizio delle loro funzioni di gestione" },
      { id: "B", text: "Ai singoli assessori municipali con delega di firma" },
      { id: "C", text: "Al Consiglio comunale riunito in commissione" },
      { id: "D", text: "Esclusivamente al Sindaco in via straordinaria" }
    ],
    correctAnswerId: "A",
    explanation: "La determinazione è l'atto tipico a rilevanza esterna adottato dal dirigente o dal responsabile del servizio nell'esercizio delle attribuzioni gestionali previste dall'art. 107 del TUEL.",
    hint: "Le 'deliberazioni' sono collegiali (Giunta/Consiglio); le 'determinazioni' sono dirigenziali/monocratiche.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_037",
    question: "Quale efficacia acquista la determinazione dirigenziale che comporta impegno di spesa ex art. 151, comma 4, TUEL?",
    options: [
      { id: "A", text: "Diventa esecutiva con l'apposizione del visto di regolarità contabile attestante la copertura finanziaria" },
      { id: "B", text: "È esecutiva immediatamente al momento della firma del dirigente senza alcun visto" },
      { id: "C", text: "Diventa esecutiva dopo 30 giorni di affissione all'albo" },
      { id: "D", text: "Diventa esecutiva solo con la convalida della Giunta" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 151, comma 4, e art. 183, comma 7, TUEL stabiliscono che i provvedimenti dei responsabili dei servizi che comportano impegni di spesa sono esecutivi con l'apposizione del visto di regolarità contabile attestante la copertura finanziaria da parte del responsabile dei servizi finanziari.",
    hint: "Il visto contabile di copertura finanziaria è condizione di esecutività dell'impegno.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_038",
    question: "Che cosa si intende per 'ineleggibilità' alla carica di Sindaco o consigliere comunale ai sensi del TUEL?",
    options: [
      { id: "A", text: "Una causa impeditiva originaria all'elezione, volta a tutelare la par condicio tra i candidati e la libertà di voto degli elettori (es. cariche e funzioni incompatibili prima del voto)" },
      { id: "B", text: "Una situazione sopravvenuta che impedisce il cumulo contemporaneo di due cariche pubbliche" },
      { id: "C", text: "Il divieto di partecipare alle sedute per motivi di parentela con un fornitore" },
      { id: "D", text: "L'assenza di cittadinanza europea" }
    ],
    correctAnswerId: "A",
    explanation: "L'ineleggibilità (artt. 60 e ss. TUEL) impedisce l'accesso valido alla carica per via della posizione o funzione ricoperta dal soggetto che potrebbe alterare la parità di condizioni o la libertà del voto degli elettori. Rende nulla l'elezione se non rimossa nei termini.",
    hint: "Distingui l'ineleggibilità (vizio genetico dell'elezione) dall'incompatibilità (divieto di cumulo sopravvenuto o contestuale).",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_039",
    question: "Qual è la differenza fondamentale tra 'incompatibilità' e 'ineleggibilità' nel TUEL?",
    options: [
      { id: "A", text: "L'incompatibilità consente l'elezione ma impone all'eletto di scegliere tra la carica locale e l'altra posizione; l'ineleggibilità invalida l'elezione alla radice" },
      { id: "B", text: "L'incompatibilità riguarda solo i consiglieri provinciali, l'ineleggibilità i soli sindaci" },
      { id: "C", text: "L'ineleggibilità è sanabile in qualsiasi momento dopo la proclamazione, l'incompatibilità no" },
      { id: "D", text: "Non vi è alcuna differenza giuridica tra i due istituti" }
    ],
    correctAnswerId: "A",
    explanation: "L'incompatibilità (artt. 63 e ss. TUEL) non inficia l'elezione, ma pone l'amministratore nella condizione di dover optare entro 10 giorni tra la carica locale e l'attività/funzione incompatibile (es. contenzioso aperto con l'ente), pena la decadenza.",
    hint: "Incompatibilità = opzione obbligatoria tra le due cariche/situazioni.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_040",
    question: "Quale organo è competente a convalidare l'elezione del Sindaco e dei consiglieri comunali nella prima seduta?",
    options: [
      { id: "A", text: "Il Consiglio comunale medesimo" },
      { id: "B", text: "La Corte d'Appello territorialmente competente" },
      { id: "C", text: "Il Prefetto della Provincia" },
      { id: "D", text: "La Commissione elettorale circondariale" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 41, comma 1, TUEL, nella prima seduta il Consiglio comunale, prima di deliberare su qualsiasi altro oggetto, procede alla convalida degli eletti, esaminando le condizioni di eleggibilità e di compatibilità.",
    hint: "È il consiglio stesso che verifica la regolarità delle condizioni soggettive dei suoi componenti.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_041",
    question: "Quale tutela economica spetta ai componenti della Giunta comunale e al Sindaco in virtù della loro carica?",
    options: [
      { id: "A", text: "Un'indennità di funzione mensile onnicomprensiva" },
      { id: "B", text: "Un gettone di presenza per ogni ora di presenza in municipio" },
      { id: "C", text: "Lo stipendio tabellare previsto dal CCNL Comparto Funzioni Centrali" },
      { id: "D", text: "Una percentuale sugli incassi dei tributi riscossi dall'ente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 82 TUEL prevede che al Sindaco, al vicesindaco e agli assessori spetti un'indennità di funzione, la cui misura è parametrata alla classe demografica dell'ente. Ai consiglieri comunali spetta invece il gettone di presenza per la partecipazione alle sedute.",
    hint: "Indennità di funzione per gli organi esecutivi, gettone di presenza per i consiglieri.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_042",
    question: "I consiglieri comunali hanno diritto di ottenere dagli uffici del comune tutte le notizie e informazioni utili all'espletamento del proprio mandato (art. 43 TUEL)?",
    options: [
      { id: "A", text: "Sì, senza che possa essere loro opposto il segreto d'ufficio, ma sono tenuti al segreto nei casi specificamente previsti dalla legge" },
      { id: "B", text: "No, devono presentare apposita istanza di accesso documentale pagando i diritti di segreteria" },
      { id: "C", text: "Solo se autorizzati preventivamente dal Sindaco con visto formale" },
      { id: "D", text: "Esclusivamente sui documenti già pubblicati sul sito web istituzionale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 43, comma 2, TUEL sancisce l'ampio diritto di accesso dei consiglieri per l'esercizio del loro mandato politico: 'I consiglieri comunali e provinciali hanno diritto di ottenere dagli uffici [...] tutte le notizie e le informazioni in loro possesso, utili all'espletamento del proprio mandato. Essi sono tenuti al segreto nei casi specificamente determinati dalla legge'.",
    hint: "Diritto di accesso pieno e incondizionato, funzionale al controllo politico.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_043",
    question: "Che cosa sono le Commissioni Consiliari permanenti nel Comune?",
    options: [
      { id: "A", text: "Organi collegiali interni al Consiglio comunale con funzioni preparatorie, referenti, redigenti o di controllo, composti secondo criteri di proporzionalità rispetto ai gruppi consiliari" },
      { id: "B", text: "Uffici amministrativi guidati da dirigenti di nomina prefettizia" },
      { id: "C", text: "Organismi di vigilanza nominati dall'ANAC" },
      { id: "D", text: "Comitati di cittadini sorteggiati annualmente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 38, comma 6, TUEL prevede che lo statuto e i regolamenti possano istituire commissioni consiliari permanenti costituite nel proprio seno con criterio proporzionale, per svolgere compiti istruttori, referenti o di controllo.",
    hint: "Riflettono la consistenza politica dei gruppi presenti in Consiglio.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_044",
    question: "Che cosa si intende per 'fusione di Comuni' ai sensi dell'art. 15 del TUEL e dell'art. 133 Cost.?",
    options: [
      { id: "A", text: "L'istituzione di un nuovo Comune mediante l'unificazione di due o più comuni contigui, disposta con legge regionale sentite le popolazioni interessate mediante referendum" },
      { id: "B", text: "L'accordo temporaneo tra sindaci per condividere la polizia municipale" },
      { id: "C", text: "Un decreto del Presidente del Consiglio dei Ministri senza consultazione popolare" },
      { id: "D", text: "L'annessione forzata di un comune in dissesto finanziario" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 15 TUEL e dell'art. 133, comma 2, Cost., la fusione di Comuni è disposta con legge regionale, sentite obbligatoriamente le popolazioni interessate mediante referendum consultivo.",
    hint: "Intervento legislativo regionale preceduto dal referendum tra le popolazioni coinvolte.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_045",
    question: "Quale natura giuridica hanno i Regolamenti comunali ex art. 7 del TUEL?",
    options: [
      { id: "A", text: "Fonti normative secondarie subordinate alla legge statale, regionale e allo Statuto dell'ente" },
      { id: "B", text: "Atti aventi forza di legge equiparati ai decreti legislativi" },
      { id: "C", text: "Mero atto amministrativo interno non vincolante per i cittadini" },
      { id: "D", text: "Fonti primarie prevalenti sulla legislazione regionale" }
    ],
    correctAnswerId: "A",
    explanation: "I regolamenti comunali (art. 7 TUEL) sono fonti del diritto di grado secondario. Devono rispettare i principi generali fissati dalla legge e le disposizioni dello Statuto comunale, che costituisce la fonte primaria dell'ordinamento locale.",
    hint: "I regolamenti sono subordinati sia alla legge che allo Statuto comunale.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_046",
    question: "A quale organo spetta l'approvazione del Regolamento sull'ordinamento generale degli uffici e dei servizi?",
    options: [
      { id: "A", text: "Alla Giunta comunale, nel rispetto dei criteri generali stabiliti dal Consiglio" },
      { id: "B", text: "Al Consiglio comunale in via esclusiva" },
      { id: "C", text: "Al Segretario comunale sentito il Collegio dei Revisori" },
      { id: "D", text: "Alle organizzazioni sindacali firmatarie del contratto decentrato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 48, comma 3, TUEL stabilisce: 'È, altresì, di competenza della giunta l'adozione dei regolamenti sull'ordinamento degli uffici e dei servizi, nel rispetto dei criteri generali stabiliti dal consiglio'.",
    hint: "Spetta alla Giunta, diversamente da quasi tutti gli altri regolamenti che spettano al Consiglio ex art. 42.",
    level: "intermedio"
  },
  {
    id: "Q_ENTI_LOC_047",
    question: "Quale sanzione si applica alle deliberazioni approvate da Giunta o Consiglio in caso di violazione dell'obbligo di astensione di un componente in conflitto di interessi (art. 78 TUEL)?",
    options: [
      { id: "A", text: "La deliberazione è annullabile per illegittimità ove il voto del soggetto astenendo sia stato determinante (prova di resistenza)" },
      { id: "B", text: "La deliberazione è nulla di diritto e inesistente senza bisogno di ricorso" },
      { id: "C", text: "Nessuna, l'obbligo di astensione ha mero valore morale" },
      { id: "D", text: "La sospensione d'ufficio di tutti i componenti presenti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 78, comma 2, TUEL impone agli amministratori di astenersi dal prendere parte alla discussione e alla votazione di delibere riguardanti interessi propri o di loro parenti o affini sino al quarto grado. La violazione comporta l'annullabilità dell'atto se il voto è stato determinante.",
    hint: "Obbligo di astensione per conflitto di interessi e principio della prova di resistenza.",
    level: "avanzato"
  },
  {
    id: "Q_ENTI_LOC_048",
    question: "Che cos'è l'Albo Pretorio online del Comune ai sensi della Legge n. 69/2009 e del TUEL?",
    options: [
      { id: "A", text: "Lo spazio digitale sul sito web istituzionale dell'ente destinato alla pubblicazione degli atti amministrativi che per legge devono essere resi noti al pubblico con effetti di pubblicità legale" },
      { id: "B", text: "Un archivio cartaceo segreto accessibile solo ai giudici tributari" },
      { id: "C", text: "Una bacheca riservata unicamente agli annunci di concorso e bandi di gara" },
      { id: "D", text: "La sede notarile per la registrazione dei contratti del Comune" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 32 della L. 69/2009 ha sancito che gli obblighi di pubblicazione di atti e provvedimenti amministrativi aventi effetto di pubblicità legale si intendono assolti esclusivamente con la pubblicazione nei propri siti informatici (Albo Pretorio telematico/online).",
    hint: "La pubblicazione sul sito web istituzionale ha valore di pubblicità legale a tutti gli effetti.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_049",
    question: "Chi esercita le funzioni vicarie in caso di assenza, impedimento temporaneo o sospensione del Sindaco ex art. 53 TUEL?",
    options: [
      { id: "A", text: "Il Vicesindaco" },
      { id: "B", text: "Il consigliere comunale con più preferenze" },
      { id: "C", text: "L'assessore con maggiore anzianità anagrafica" },
      { id: "D", text: "Il Segretario comunale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 53, comma 2, TUEL dispone espressamente che il vicesindaco sostituisce il sindaco in caso di assenza o di impedimento temporaneo, nonché nel caso di sospensione dall'esercizio della funzione adottata ai sensi di legge.",
    hint: "È il vicario naturale designato dal Sindaco.",
    level: "base"
  },
  {
    id: "Q_ENTI_LOC_050",
    question: "In caso di decesso, decadenza o dimissioni irrevocabili del Sindaco, cosa prevede l'art. 53, comma 1, del TUEL?",
    options: [
      { id: "A", text: "La Giunta decade e si procede allo scioglimento del Consiglio; il Consiglio e la Giunta rimangono in carica fino alle nuove elezioni e le funzioni di Sindaco sono svolte dal Vicesindaco" },
      { id: "B", text: "Il Consiglio elegge a maggioranza un nuovo Sindaco tra i propri membri per concludere il mandato" },
      { id: "C", text: "L'ente viene soppresso e commissariato per 5 anni" },
      { id: "D", text: "Il Prefetto assume direttamente la carica di Sindaco provvisorio" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 53, comma 1, TUEL stabilisce che in caso di dimissioni, impedimento permanente, rimozione, decadenza o decesso del sindaco, la giunta decade e si procede allo scioglimento del consiglio. Il consiglio e la giunta rimangono tuttavia in carica sino alla elezione del nuovo sindaco e del nuovo consiglio e le funzioni del sindaco sono svolte dal vicesindaco.",
    hint: "La prorogatio degli organi fino alle successive elezioni è retta dal Vicesindaco.",
    level: "intermedio"
  }
];

const dest = path.join(__dirname, '../public/db/master_bank/diritto/enti_locali_tuel.json');
fs.writeFileSync(dest, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Generated ${questions.length} questions in ${dest}`);
