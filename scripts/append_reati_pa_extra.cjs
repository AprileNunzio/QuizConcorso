const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/db/master_bank/penale/reati_pa.json');
const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

const newQuestions = [
  {
    id: "Q_PECS_PEN_051",
    question: "Quale rilevante novità normativa è stata introdotta dalla Legge 9 agosto 2024, n. 114 (c.d. Riforma Nordio) in ordine ai delitti contro la Pubblica Amministrazione?",
    options: [
      { id: "A", text: "L'abrogazione espressa dell'art. 323 c.p. (Abuso d'ufficio) e l'introduzione dell'art. 314-bis c.p. (Indebita destinazione di denaro o cose mobili - peculato per distrazione)" },
      { id: "B", text: "La depenalizzazione totale del peculato e della concussione" },
      { id: "C", text: "L'introduzione della pena di morte per i reati di corruzione" },
      { id: "D", text: "L'abrogazione del reato di truffa ai danni dello Stato" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge 114/2024 ha abrogato formalmente il reato di abuso d'ufficio (art. 323 c.p.) e ha contestualmente introdotto nel codice penale il nuovo delitto di cui all'art. 314-bis c.p. ('Indebita destinazione di denaro o cose mobili', c.d. peculato per distrazione).",
    hint: "Abrogazione dell'abuso d'ufficio e introduzione dell'art. 314-bis c.p.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_052",
    question: "A seguito dell'abrogazione dell'art. 323 c.p. ad opera della Legge 114/2024, quale effetto processuale si determina sulle sentenze irrevocabili di condanna precedentemente pronunciate per abuso d'ufficio?",
    options: [
      { id: "A", text: "Si applica l'art. 2, comma 2, c.p. (abolitio criminis) con conseguente revoca della sentenza di condanna e cessazione dell'esecuzione e di tutti gli effetti penali da parte del giudice dell'esecuzione ex art. 673 c.p.p." },
      { id: "B", text: "La condanna resta pienamente efficace e non può subire alcuna modifica" },
      { id: "C", text: "La pena viene trasformata automaticamente in una multa amministrativa di 500 euro" },
      { id: "D", text: "Il condannato deve comunque scontare almeno la metà della pena inflitta" }
    ],
    correctAnswerId: "A",
    explanation: "Trattandosi di abolitio criminis (art. 2, comma 2, c.p.), nessuno può essere punito per un fatto che, secondo una legge posteriore, non costituisce reato; se vi è stata condanna, ne cessano l'esecuzione e gli effetti penali con ordinanza del giudice dell'esecuzione ex art. 673 c.p.p.",
    hint: "Abolitio criminis e revoca della condanna ex art. 673 c.p.p.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_053",
    question: "Cosa punisce il nuovo delitto di 'Indebita destinazione di denaro o cose mobili' introdotto all'art. 314-bis c.p.?",
    options: [
      { id: "A", text: "Il pubblico ufficiale o l'incaricato di pubblico servizio che, avendo la disponibilità di denaro o cose mobili per ragioni d'ufficio, li destina a un uso diverso da quello previsto da disposizioni di legge o da atti aventi forza di legge, procurando a sé o ad altri un ingiusto vantaggio patrimoniale o ad altri un danno ingiusto" },
      { id: "B", text: "Il furto di materiale cartaceo commesso da persone estranee alla PA" },
      { id: "C", text: "Il ritardo nel pagamento delle imposte comunali" },
      { id: "D", text: "L'accettazione di regali di valore inferiore a 10 euro" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 314-bis c.p. sanziona la distrazione di fondi pubblici o beni da parte del pubblico agente che, avendone il possesso/disponibilità per ufficio o servizio, li destini intenzionalmente a un uso diverso rispetto a quello prescritto da leggi o atti aventi forza di legge, con profitto o danno ingiusto.",
    hint: "Destinazione di risorse a uso diverso da quello di legge con ingiusto vantaggio patrimoniale o danno.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_054",
    question: "Quale elemento distingue il Peculato ordinario (art. 314, comma 1, c.p.) dal Peculato d'uso (art. 314, comma 2, c.p.)?",
    options: [
      { id: "A", text: "Nel peculato ordinario l'agente si appropria definitivamente del bene; nel peculato d'uso l'agente agisce al solo scopo di fare uso momentaneo della cosa e, dopo l'uso momentaneo, questa è immediatamente restituita" },
      { id: "B", text: "Il peculato d'uso riguarda solo somme di denaro superiori a 100.000 euro" },
      { id: "C", text: "Il peculato ordinario è punito a querela di parte, quello d'uso d'ufficio" },
      { id: "D", text: "Non vi è alcuna differenza edittale né di condotta" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 314, comma 2, c.p. punisce con pena attenuata (reclusione da sei mesi a tre anni) il pubblico ufficiale o incaricato di pubblico servizio che ha agito al solo scopo di fare uso momentaneo della cosa e questa, dopo l'uso momentaneo, è stata immediatamente restituita.",
    hint: "Nel peculato d'uso il bene viene utilizzato momentaneamente e subito restituito.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_055",
    question: "Nel delitto di Peculato ex art. 314 c.p., cosa si intende per 'possesso o disponibilità per ragione del suo ufficio o servizio'?",
    options: [
      { id: "A", text: "Non solo il possesso materiale o la detenzione fisica, ma anche la disponibilità giuridica della cosa derivante dall'esercizio delle funzioni attribuite all'agente pubblico (es. potere di disporre bonifici o impegni)" },
      { id: "B", text: "La proprietà privata personale dell'oggetto registrata a catasto" },
      { id: "C", text: "Il possesso abusivo acquisito mediante scasso notturno" },
      { id: "D", text: "La semplice presenza fisica dell'oggetto nella stessa città" }
    ],
    correctAnswerId: "A",
    explanation: "La giurisprudenza della Cassazione afferma che la disponibilità del bene nel peculato comprende anche la disponibilità giuridica, ossia il potere dispositivo autonomo inerente alla qualifica o alla competenza funzionale (es. facoltà di ordinare pagamenti o liquidazioni telematiche).",
    hint: "Comprende anche la disponibilità giuridica e dispositiva connessa alla funzione.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_056",
    question: "Cosa caratterizza la condotta di 'Concussione' disciplinata dall'art. 317 del Codice Penale?",
    options: [
      { id: "A", text: "La costrizione esercitata dal pubblico ufficiale o dall'incaricato di pubblico servizio che, abusando della sua qualità o dei suoi poteri, costringe taluno a dare o a promettere indebitamente, a lui o a un terzo, denaro o altra utilità" },
      { id: "B", text: "Un accordo paritario e spontaneo tra il funzionario e il cittadino" },
      { id: "C", text: "La distrazione di fondi per pagare debiti personali del sindaco" },
      { id: "D", text: "Il rifiuto immotivato di rispondere a una telefonata" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 317 c.p. punisce la costrizione (metus publicae potestatis): il pubblico agente pone la vittima in uno stato di soggezione e di alternativa obbligata (subire un male ingiusto o dare/promettere denaro o utilità indebita). La vittima concussa è persona offesa e non è punibile.",
    hint: "Costrizione della vittima mediante abuso di qualità o poteri.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_057",
    question: "In cosa differisce il delitto di 'Induzione indebita a dare o promettere utilità' (art. 319-quater c.p.) dalla Concussione (art. 317 c.p.)?",
    options: [
      { id: "A", text: "Nell'induzione indebita il pubblico agente non costringe ma induce (persuade, condiziona o blandisce) il privato, il quale accetta la dazione per conseguire un proprio vantaggio indebito ed è conseguentemente punito anche lui dalla legge (fino a 3 anni)" },
      { id: "B", text: "Nell'induzione indebita il privato è punito con la pena di morte" },
      { id: "C", text: "La concussione riguarda solo i funzionari INPS, l'induzione i soli carabinieri" },
      { id: "D", text: "Non vi è alcuna differenza, l'art. 319-quater è una ripetizione dell'art. 317" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge Severino (L. 190/2012) ha scisso la vecchia concussione per induzione nel nuovo art. 319-quater c.p.: se il privato cede per evitare un danno ingiusto è concussione (ed è vittima impunita); se cede per ottenere un vantaggio indebito è induzione e anche il privato è punito penalmente.",
    hint: "Nell'induzione indebita anche il privato è punito perché mira a un vantaggio indebito.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_058",
    question: "Cosa distingue la 'Corruzione per l'esercizio della funzione' (art. 318 c.p.) dalla 'Corruzione per un atto contrario ai doveri d'ufficio' (art. 319 c.p.)?",
    options: [
      { id: "A", text: "Nell'art. 318 la tangente è data per remunerare l'esercizio generale della funzione pubblica o per un atto conforme ai doveri d'ufficio; nell'art. 319 la retribuzione illecita è finalizzata a omettere o ritardare un atto d'ufficio o a compiere un atto contrario ai doveri" },
      { id: "B", text: "L'art. 318 punisce solo il corruttore, l'art. 319 solo il corrotto" },
      { id: "C", text: "L'art. 319 si applica solo ai parlamentari in carica" },
      { id: "D", text: "L'art. 318 è un reato contravvenzionale, l'art. 319 è un illecito civile" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 318 c.p. (c.d. corruzione impropria o per asservimento della funzione) punisce la ricezione indebita di denaro/utilità per l'esercizio delle funzioni; l'art. 319 c.p. (corruzione propria) è più grave poiché punisce l'accordo per compiere un atto contrario ai doveri o omettere/ritardare un atto dovuto.",
    hint: "Art. 318 = per la funzione o atto dovuto; Art. 319 = per atto contrario ai doveri d'ufficio.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_059",
    question: "Chi risponde a titolo di concorso nel reato di corruzione ai sensi dell'art. 321 del Codice Penale?",
    options: [
      { id: "A", text: "Il corruttore (il soggetto privato che dà o promette al pubblico ufficiale o all'incaricato di pubblico servizio il denaro o altra utilità), a cui si applicano le medesime pene stabilite per il corrotto" },
      { id: "B", text: "Solo il coniuge del pubblico ufficiale" },
      { id: "C", text: "Il direttore della banca da cui proviene il bonifico" },
      { id: "D", text: "Il corruttore non è mai punibile penalmente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 321 c.p. stabilisce il principio di parità sanzionatoria: le pene stabilite per gli artt. 318, 319, 319-bis, 319-ter e 320 c.p. si applicano anche a chi dà o promette il denaro o l'utilità indebita.",
    hint: "Al corruttore si applicano le stesse pene stabilite per il pubblico funzionario corrotto.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_060",
    question: "Cosa disciplina la speciale causa di non punibilità per i delitti di corruzione introdotta dalla Legge 'Spazzacorrotti' (art. 323-ter c.p.)?",
    options: [
      { id: "A", text: "La non punibilità per chi ha commesso i delitti di corruzione se denuncia volontariamente il fatto all'autorità giudiziaria prima di avere notizia di indagini, entro quattro mesi dalla commissione, e fornisce indicazioni utili e concrete per l'accertamento del reato" },
      { id: "B", text: "L'amnistia automatica per tutte le tangenti inferiori a 50.000 euro" },
      { id: "C", text: "L'estinzione del reato per chi si iscrive a un corso di etica pubblica" },
      { id: "D", text: "La grazia concessa direttamente dal Prefetto" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 323-ter c.p. premia il ravvedimento operoso: non è punibile chi denuncia spontaneamente il fatto entro 4 mesi prima di essere formalmente indagato, fornendo elementi utili ad assicurare le prove e individuare gli altri responsabili.",
    hint: "Non punibilità per chi autodenuncia spontaneamente il reato entro 4 mesi prima di indagini.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PEN_061",
    question: "Quali sono gli elementi costitutivi del delitto di 'Truffa aggravata per il conseguimento di erogazioni pubbliche' (art. 640-bis c.p.) commessa ai danni dell'INPS?",
    options: [
      { id: "A", text: "L'impiego di artifici o raggiri che inducono l'ente in errore, procurando a sé o ad altri un ingiusto profitto con pari danno per l'INPS, avente ad oggetto contributi, finanziamenti, mutui agevolati o altre erogazioni concesse dallo Stato o da enti pubblici" },
      { id: "B", text: "La mera dimenticanza di inviare un modello cartaceo senza malafede" },
      { id: "C", text: "Il furto con scasso di computer presso la sede provinciale" },
      { id: "D", text: "La richiesta di ferie non spettanti da parte del dipendente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 640-bis c.p. è una figura autonoma di reato che punisce la truffa caratterizzata da artifici o raggiri (es. false dichiarazioni, buste paga fasulle, fittizie iscrizioni aziendali) volti a ottenere indebitamente prestazioni previdenziali o assistenziali a carico dell'INPS.",
    hint: "Artifici e raggiri per ottenere indebite erogazioni pubbliche con danno per l'ente.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_062",
    question: "In che rapporto si pone il delitto di 'Indebita percezione di erogazioni pubbliche' (art. 316-ter c.p.) rispetto alla Truffa aggravata (art. 640-bis c.p.)?",
    options: [
      { id: "A", text: "Ha natura sussidiaria: l'art. 316-ter c.p. si applica solo quando la condotta di indebita percezione non integri gli estremi della truffa (ossia in assenza di veri e propri artifici o raggiri, essendovi solo la produzione di atti falsi o l'omissione di informazioni dovute)" },
      { id: "B", text: "L'art. 316-ter c.p. prevale sempre su qualsiasi altra norma penale" },
      { id: "C", text: "Si applicano contemporaneamente raddoppiando la pena della truffa" },
      { id: "D", text: "Non hanno alcuna attinenza reciproca" }
    ],
    correctAnswerId: "A",
    explanation: "La clausola di apertura 'Salvo che il fatto costituisca il reato previsto dall'art. 640-bis' sancisce la sussidiarietà dell'art. 316-ter c.p.: se vi sono artifici, raggiri e induzione in errore scatta la più grave truffa aggravata; se manca l'artificio e vi è mera falsa attestazione scatta il 316-ter c.p.",
    hint: "Rapporto di sussidiarietà espressa: si applica in assenza degli estremi della truffa aggravata.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_063",
    question: "Quale soglia economica di valore determina la punibilità penale nell' 'Indebita percezione di erogazioni pubbliche' ex art. 316-ter c.p.?",
    options: [
      { id: "A", text: "La somma indebitamente percepita deve essere superiore a euro 3.999,96; al di sotto di tale importo il fatto non costituisce reato ma è sanzionato solo con sanzione amministrativa pecuniaria" },
      { id: "B", text: "Qualsiasi cifra anche di un solo centesimo è punita con reclusione minima di 5 anni" },
      { id: "C", text: "La soglia minima è di 50.000 euro" },
      { id: "D", text: "Non esiste alcuna soglia quantitativa" }
    ],
    correctAnswerId: "A",
    explanation: "Il secondo comma dell'art. 316-ter c.p. prevede che quando la somma indebitamente percepita è pari o inferiore a euro 3.999,96 si applica soltanto una sanzione amministrativa pecuniaria da 5.164 euro a 25.822 euro.",
    hint: "Soglia di euro 3.999,96: al di sotto è mera sanzione amministrativa.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_064",
    question: "Cosa punisce il delitto di 'Malversazione di erogazioni pubbliche' di cui all'art. 316-bis del Codice Penale?",
    options: [
      { id: "A", text: "La condotta di chi, estraneo alla PA, avendo ottenuto dallo Stato, da enti pubblici o dall'UE contributi, sovvenzioni o finanziamenti destinati a favorire specifiche opere o attività di pubblico interesse, non li destina a tali finalità" },
      { id: "B", text: "Il furto commesso ai danni di un dipendente dell'Istituto" },
      { id: "C", text: "La mancata riscossione dei tributi comunali" },
      { id: "D", text: "La vendita abusiva di contrassegni assicurativi" }
    ],
    correctAnswerId: "A",
    explanation: "A differenza dell'indebita percezione (dove i fondi sono ottenuti illecitamente ab origine), nella malversazione il privato ottiene i fondi legittimamente, ma successivamente distoglie le risorse dalla finalità pubblica vincolata cui erano destinate.",
    hint: "Mancata destinazione dei fondi legittimamente ottenuti alle finalità pubbliche prescritte.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_065",
    question: "In base all'art. 357 del Codice Penale, chi è considerato 'Pubblico Ufficiale'?",
    options: [
      { id: "A", text: "Colui che esercita una pubblica funzione legislativa, giudiziaria o amministrativa, intendendosi per funzione amministrativa quella disciplinata da norme di diritto pubblico e da atti autoritativi e caratterizzata dalla formazione o manifestazione della volontà della PA o da poteri autoritativi o certificativi" },
      { id: "B", text: "Esclusivamente i ministri e i parlamentari" },
      { id: "C", text: "Qualsiasi lavoratore dipendente privato iscritto a un sindacato" },
      { id: "D", text: "Chiunque indossi una divisa militare" }
    ],
    correctAnswerId: "A",
    explanation: "La nozione codicistica di pubblico ufficiale è funzionale e oggettiva: rileva la titolarità di poteri autoritativi (di comando), certificativi (attestazione con efficacia probatoria privilegiata) o di concorso alla formazione della volontà della PA disciplinati da norme di diritto pubblico.",
    hint: "Esercizio di poteri autoritativi, certificativi o di formazione della volontà della PA.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_066",
    question: "In base all'art. 358 del Codice Penale, chi è considerato 'Incaricato di Pubblico Servizio'?",
    options: [
      { id: "A", text: "Colui che, a qualunque titolo, presta un pubblico servizio, ossia un'attività disciplinata nelle stesse forme della pubblica funzione ma caratterizzata dalla mancanza dei poteri tipici di questa (poteri autoritativi e certificativi), con esclusione dello svolgimento di semplici mansioni d'ordine e della prestazione di opera meramente materiale" },
      { id: "B", text: "Solo il personale che si occupa delle pulizie degli stabili" },
      { id: "C", text: "I liberi professionisti iscritti ad albi privati senza convenzione pubblica" },
      { id: "D", text: "Tutti i cittadini maggiorenni residenti nello Stato" }
    ],
    correctAnswerId: "A",
    explanation: "L'incaricato di pubblico servizio svolge un'attività di interesse generale disciplinata da norme di diritto pubblico, priva dei poteri autoritativi e certificativi propri del pubblico ufficiale, ma superiore alle mere mansioni d'ordine o prestazioni materiali.",
    hint: "Attività pubblica senza poteri autoritativi/certificativi, esclusi mansioni d'ordine e lavori meramente materiali.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_067",
    question: "Il Funzionario PECS dell'INPS, durante l'istruttoria delle istanze di prestazione, la liquidazione dei trattamenti e l'attestazione della regolarità contributiva, quale qualifica soggettiva penalistica riveste?",
    options: [
      { id: "A", text: "Riveste la qualifica di Pubblico Ufficiale, in quanto esercita poteri deliberativi, certificativi e di formazione della volontà dell'ente pubblico nell'ambito di procedimenti disciplinati da norme di diritto pubblico" },
      { id: "B", text: "Riveste la qualifica di semplice cittadino privato" },
      { id: "C", text: "È un esercente un servizio di pubblica necessità" },
      { id: "D", text: "Non ha alcuna rilevanza penalistica speciale" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario INPS concorre alla formazione della volontà dell'ente, adotta atti autoritativi di liquidazione/recupero ed emette attestazioni certificative (DURC, estratti conto con valore probatorio): assume a tutti gli effetti la qualifica di Pubblico Ufficiale ex art. 357 c.p.",
    hint: "Pubblico Ufficiale a tutti gli effetti per l'esercizio di poteri certificativi e deliberativi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_068",
    question: "Cosa punisce il delitto di 'Rifiuto di atti d'ufficio. Omissione' previsto dall'art. 328, primo comma, c.p.?",
    options: [
      { id: "A", text: "Il pubblico ufficiale o incaricato di pubblico servizio che indebitamente rifiuta un atto del suo ufficio che, per ragioni di giustizia o di sicurezza pubblica, o di ordine pubblico o di igiene e sanità, deve essere compiuto senza ritardo" },
      { id: "B", text: "La risposta inviata all'utente con un giorno di ritardo per motivi tecnici" },
      { id: "C", text: "La mancata autorizzazione di ferie non concordate" },
      { id: "D", text: "Il mancato ritiro della posta raccomandata da parte del cittadino" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 328, comma 1, c.p. punisce il rifiuto indebito di atti qualificati e indifferibili (ragioni di giustizia, sicurezza, ordine pubblico, sanità), configurandosi come reato di pericolo a dolo generico che non richiede alcuna messa in mora preventiva.",
    hint: "Rifiuto indebito di atto urgente per ragioni di giustizia, sicurezza, ordine o sanità.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_069",
    question: "Come si perfeziona il delitto di omissione di atti d'ufficio ai sensi del secondo comma dell'art. 328 c.p. per gli atti diversi da quelli qualificati del primo comma?",
    options: [
      { id: "A", text: "Il pubblico funzionario che entro 30 giorni dalla richiesta di chi vi abbia interesse non compie l'atto del suo ufficio e non risponde per esporre le ragioni del ritardo, a seguito di formale diffida scritta della parte" },
      { id: "B", text: "Decorsi 5 giorni da una richiesta verbale informale" },
      { id: "C", text: "Automaticamente se non risponde al telefono entro tre squilli" },
      { id: "D", text: "Solo se l'utente sporge querela entro 48 ore" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 328, comma 2, c.p., fuori dei casi di urgenza qualificata, il reato si consuma solo dopo che l'interessato ha formulato formale richiesta scritta di adempimento e sono decorsi inutilmente 30 giorni senza che il funzionario abbia adottato l'atto o comunicato le ragioni del ritardo.",
    hint: "Formale diffida scritta e decorso di 30 giorni senza adozione dell'atto né risposta motivata.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_070",
    question: "Cosa punisce il delitto di 'Rivelazione ed utilizzazione di segreti d'ufficio' (art. 326 c.p.)?",
    options: [
      { id: "A", text: "Il pubblico ufficiale o incaricato di pubblico servizio che, violando i doveri inerenti alle funzioni o al servizio, o comunque abusando della sua qualità, rivela notizie d'ufficio le quali debbano rimanere segrete, o ne agevola in qualsiasi modo la conoscenza" },
      { id: "B", text: "La pubblicazione dei bandi di concorso sulla Gazzetta Ufficiale" },
      { id: "C", text: "La diffusione di dati aggregati anonimi a fini statistici" },
      { id: "D", text: "La consegna del modello ISEE al richiedente intestatario" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 326 c.p. tutela il buon andamento e la riservatezza dell'amministrazione punendo la divulgazione illegittima o l'utilizzazione indebita a proprio o altrui profitto patrimoniale di notizie riservate o segrete di cui il dipendente sia venuto a conoscenza per ragioni d'ufficio.",
    hint: "Rivelazione indebita di notizie d'ufficio destinate a rimanere segrete.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_071",
    question: "Cosa integra la fattispecie di 'Accesso abusivo ad un sistema informatico o telematico' ex art. 615-ter c.p. commesso dal funzionario pubblico sulle banche dati dell'Istituto?",
    options: [
      { id: "A", text: "L'introduzione o il trattenimento nel sistema informatico protetto da misure di sicurezza effettuati per finalità estranee a quelle di servizio, violando le condizioni e i limiti posti dalle prescrizioni organizzative interne (Cass. Sez. Unite n. 4694/2012 e n. 41210/2017)" },
      { id: "B", text: "L'ordinaria consultazione di pratiche regolarmente assegnate dal responsabile del team" },
      { id: "C", text: "Il cambio periodico della password su invito del sistema" },
      { id: "D", text: "Lo spegnimento del computer a fine turno di lavoro" }
    ],
    correctAnswerId: "A",
    explanation: "Le Sezioni Unite della Cassazione hanno chiarito che integra il reato di cui all'art. 615-ter c.p. anche il soggetto formalmente abilitato con credenziali che acceda o si trattenga nel sistema per scopi personali, privatistici o illeciti ontologicamente estranei alla funzione assegnata.",
    hint: "Accesso anche con proprie credenziali ma per finalità estranee a quelle di servizio.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PEN_072",
    question: "Quale aggravante specifica prevede l'art. 615-ter, comma 2, c.p. per l'accesso abusivo a sistema informatico?",
    options: [
      { id: "A", text: "Se il fatto è commesso da un pubblico ufficiale o da un incaricato di un pubblico servizio con abuso dei poteri o con violazione dei doveri inerenti alla funzione o al servizio, ovvero se il sistema riguarda la sicurezza pubblica o la difesa" },
      { id: "B", text: "Se il computer utilizzato è portatile anziché fisso" },
      { id: "C", text: "Se l'accesso avviene durante i giorni festivi" },
      { id: "D", text: "Se l'utente utilizza una tastiera senza fili" }
    ],
    correctAnswerId: "A",
    explanation: "La qualità di pubblico ufficiale o incaricato di pubblico servizio costituisce circostanza aggravante ad effetto speciale (pena aumentata da uno a cinque anni di reclusione) qualora l'accesso abusivo sia commesso abusando dei poteri o violando i doveri d'ufficio.",
    hint: "Aggravante per reato commesso da pubblico agente con abuso dei poteri o violazione dei doveri.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_073",
    question: "In cosa differisce la 'Falsità materiale' (art. 476 c.p.) dalla 'Falsità ideologica' (art. 479 c.p.) commessa dal pubblico ufficiale in atti pubblici?",
    options: [
      { id: "A", text: "La falsità materiale riguarda la genuinità dell'atto (contraffazione dell'autore o alterazione del testo); la falsità ideologica riguarda la veridicità del contenuto (l'atto proviene dall'autore effettivo ma attesta fatti non veri o omette fatti avvenuti in sua presenza)" },
      { id: "B", text: "La falsità materiale riguarda solo atti privati, l'ideologica solo leggi costituzionali" },
      { id: "C", text: "La falsità ideologica è punita solo se commessa per iscritto a matita" },
      { id: "D", text: "Non esiste alcuna distinzione dogmatica tra le due fattispecie" }
    ],
    correctAnswerId: "A",
    explanation: "Falsità materiale = difetto di genuinità (alterazione fisica del documento o formazione ad opera di autore diverso da quello apparente). Falsità ideologica = difetto di veridicità (il documento è autentico ma il pubblico ufficiale vi attesta falsamente fatti o dichiarazioni).",
    hint: "Falso materiale = alterazione o contraffazione; Falso ideologico = attestazione di fatti non veri in atto autentico.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_074",
    question: "Quale reato commette il funzionario INPS che attesta falsamente in un verbale o in un provvedimento di aver eseguito un controllo o una verifica di requisiti che in realtà non ha mai compiuto?",
    options: [
      { id: "A", text: "Falsità ideologica commessa dal pubblico ufficiale in atti pubblici (art. 479 c.p.)" },
      { id: "B", text: "Inadempimento di contratti di pubbliche forniture (art. 355 c.p.)" },
      { id: "C", text: "Peculato mediante profitto dell'errore altrui (art. 316 c.p.)" },
      { id: "D", text: "Turbata libertà degli incanti (art. 353 c.p.)" }
    ],
    correctAnswerId: "A",
    explanation: "Il pubblico ufficiale che attesta falsamente in un atto destinato a provare la verità fatti dei quali l'atto è destinato a provare la verità (es. esito positivo di controlli mai svolti) risponde di falso ideologico in atto pubblico ai sensi dell'art. 479 c.p.",
    hint: "Falsità ideologica in atto pubblico ex art. 479 c.p.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_075",
    question: "Cos'è il delitto di 'Traffico di influenze illecite' (art. 346-bis c.p.) novellato dalla Legge 114/2024?",
    options: [
      { id: "A", text: "La condotta di chi, sfruttando o vantando relazioni esistenti con un pubblico funzionario, indebitamente fa dare o promettere a sé o ad altri denaro o altra utilità patrimoniale per remunerare un'intermediazione illecita o per remunerare il pubblico agente in relazione all'esercizio delle sue funzioni" },
      { id: "B", text: "L'attività lecita di lobbying regolamentata dalla legge" },
      { id: "C", text: "Il contrabbando di merci su navi commerciali" },
      { id: "D", text: "La compravendita di farmaci scaduti" }
    ],
    correctAnswerId: "A",
    explanation: "La Riforma Nordio (L. 114/2024) ha circoscritto il traffico di influenze illecite, richiedendo che le relazioni con il pubblico ufficiale siano effettivamente esistenti (e non solo meramente asserite) e che l'utilità promessa sia di natura patrimoniale, escludendo la punibilità per mere relazioni vantate.",
    hint: "Sfruttamento di relazioni esistenti con richiesta di utilità patrimoniale per intermediazione illecita.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PEN_076",
    question: "Cosa punisce il delitto di 'Peculato mediante profitto dell'errore altrui' disciplinato dall'art. 316 c.p.?",
    options: [
      { id: "A", text: "Il pubblico ufficiale o incaricato di pubblico servizio che, nell'esercizio delle funzioni, giovandosi dell'errore altrui, riceve o ritiene indebitamente, per sé o per un terzo, denaro o altra utilità" },
      { id: "B", text: "La truffa ai danni di un anziano per strada" },
      { id: "C", text: "L'acquisto sbadato di un bene difettoso" },
      { id: "D", text: "La perdita fortuita delle chiavi della cassaforte" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 316 c.p. sanziona il pubblico funzionario che riceve o trattiene somme o utilità versategli per errore spontaneo di un terzo (errore non cagionato dall'agente, altrimenti sarebbe truffa) e, consapevole dell'indebito, se ne appropria anziché riversarlo all'ente.",
    hint: "Appropriazione di somme ricevute approfittando dell'errore spontaneo altrui.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_077",
    question: "Quale reato commette chiunque usa violenza o minaccia per costringere un pubblico ufficiale o un incaricato di pubblico servizio a compiere un atto contrario ai propri doveri o ad omettere un atto d'ufficio?",
    options: [
      { id: "A", text: "Violenza o minaccia a un pubblico ufficiale (art. 336 c.p.)" },
      { id: "B", text: "Concussione (art. 317 c.p.)" },
      { id: "C", text: "Insubordinazione con vie di fatto" },
      { id: "D", text: "Esercizio arbitrario delle proprie ragioni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 336 c.p. punisce chiunque usa violenza o minaccia a un pubblico ufficiale o a un incaricato di un pubblico servizio per costringerlo a fare un atto contrario ai propri doveri, o a omettere un atto dell'ufficio o del servizio.",
    hint: "Violenza o minaccia a un pubblico ufficiale ex art. 336 c.p.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_078",
    question: "In cosa differisce il reato di 'Resistenza a pubblico ufficiale' (art. 337 c.p.) dal reato di 'Violenza o minaccia a pubblico ufficiale' (art. 336 c.p.)?",
    options: [
      { id: "A", text: "L'art. 336 punisce la violenza/minaccia preventiva finalizzata a condizionare l'atto futuro del pubblico ufficiale; l'art. 337 punisce la violenza/minaccia contestuale usata per opporsi al pubblico ufficiale mentre questi sta compiendo l'atto d'ufficio" },
      { id: "B", text: "L'art. 337 si applica solo alle forze armate, l'art. 336 a tutti i cittadini" },
      { id: "C", text: "L'art. 336 è punito solo con la sanzione amministrativa di 100 euro" },
      { id: "D", text: "Non vi è alcuna differenza edittale né cronologica" }
    ],
    correctAnswerId: "A",
    explanation: "Il discrimine cronologico è pacifico: l'art. 336 c.p. ha natura coartante preventiva (indurre il pubblico agente a compiere un atto contrario o ad omettere un atto futuro); l'art. 337 c.p. ha natura impeditiva contestuale (opporsi all'atto legittimo mentre è in corso di esecuzione).",
    hint: "Art. 336 = preventiva per condizionare l'atto; Art. 337 = contestuale per opporsi all'atto in corso.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_079",
    question: "Cosa punisce l'art. 340 del Codice Penale ('Interruzione di un ufficio o servizio pubblico o di un servizio di pubblica necessità')?",
    options: [
      { id: "A", text: "Chiunque cagiona un'interruzione o turba la regolarità di un ufficio o servizio pubblico o di un servizio di pubblica necessità" },
      { id: "B", text: "La pausa caffè fruita conformemente al contratto collettivo" },
      { id: "C", text: "Lo sciopero legittimo proclamato nel rispetto della legge 146/1990" },
      { id: "D", text: "La chiusura programmata della sede per festività patronale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 340 c.p. punisce chi cagiona un'interruzione o altera la complessiva regolarità e continuità di un servizio pubblico o ufficio (es. blocco degli sportelli o delle reti informatiche mediante azioni illecite non coperte dal diritto di sciopero).",
    hint: "Cagionare l'interruzione o turbare la regolarità del servizio pubblico.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_080",
    question: "Cosa prevede l'art. 32-quater del Codice Penale circa le conseguenze accessorie in caso di condanna per taluni delitti contro la Pubblica Amministrazione (es. peculato, concussione, corruzione)?",
    options: [
      { id: "A", text: "L'incapacità di contrattare con la pubblica amministrazione per la durata stabilita dalla legge" },
      { id: "B", text: "L'espulsione immediata dal territorio dell'Unione Europea" },
      { id: "C", text: "Il divieto di contrarre matrimonio civile per 10 anni" },
      { id: "D", text: "La revoca della patente di guida di categoria B" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 32-quater c.p. elenca i delitti (tra cui peculato, concussione, corruzione, truffa ai danni dello Stato) la cui condanna importa l'incapacità di contrattare con la pubblica amministrazione, salvo che per ottenere prestazioni di pubblici servizi.",
    hint: "Incapacità di contrattare con la pubblica amministrazione.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_081",
    question: "Cosa stabilisce l'art. 317-bis del Codice Penale in materia di pene accessorie per i delitti di peculato e corruzione?",
    options: [
      { id: "A", text: "La condanna per i delitti di cui agli artt. 314, 317, 319 e 319-ter c.p. importa l'interdizione perpetua dai pubblici uffici (e l'estinzione del rapporto di lavoro ex art. 32-quinquies c.p.) se la pena inflitta non è inferiore a due anni" },
      { id: "B", text: "La sola sospensione dalla patente per tre mesi" },
      { id: "C", text: "Un ammonimento verbale pronunciato dal Presidente del Tribunale" },
      { id: "D", text: "Nessuna pena accessoria può essere applicata senza querela della parte lesa" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 317-bis c.p. prevede la pena accessoria dell'interdizione perpetua dai pubblici uffici per i principali reati contro la PA con condanna non inferiore a 2 anni (interdizione temporanea da 5 a 7 anni se pena inferiore), cui si aggiunge l'estinzione automatica del rapporto di impiego pubblico (art. 32-quinquies c.p.).",
    hint: "Interdizione perpetua dai pubblici uffici ed estinzione del rapporto di lavoro con la PA.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_082",
    question: "Cosa punisce il reato di 'Istigazione alla corruzione' disciplinato dall'art. 322 del Codice Penale?",
    options: [
      { id: "A", text: "L'offerta o promessa di denaro o altra utilità non dovuta a un pubblico ufficiale per indurlo a compiere o omettere un atto d'ufficio, qualora l'offerta NON sia accettata dal funzionario" },
      { id: "B", text: "La corruzione andata a buon fine con regolare pagamento e adempimento" },
      { id: "C", text: "La discussione teorica sulla corruzione durante un esame universitario" },
      { id: "D", text: "L'incitamento a manifestazioni pubbliche non autorizzate" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 322 c.p. punisce il tentativo unilaterale di corruzione: si applica quando l'offerta o la sollecitazione corruttiva non viene accettata dalla controparte, esaurendosi nell'atto di tentata compravendita della funzione pubblica.",
    hint: "Offerta corruttiva non accettata dal pubblico funzionario.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_083",
    question: "Quale reato si configura qualora il funzionario pubblico solleciti al privato una promessa o dazione di denaro per compiere un atto d'ufficio, ma il privato respinga sdegnosamente la proposta (art. 322, commi 3 e 4, c.p.)?",
    options: [
      { id: "A", text: "Istigazione alla corruzione attiva da parte del pubblico funzionario (sollecitazione non accolta)" },
      { id: "B", text: "Concussione consumata" },
      { id: "C", text: "Truffa contrattuale" },
      { id: "D", text: "Nessun reato, poiché l'accordo non si è perfezionato" }
    ],
    correctAnswerId: "A",
    explanation: "I commi 3 e 4 dell'art. 322 c.p. puniscono il pubblico ufficiale o incaricato di pubblico servizio che sollecita al privato una dazione o promessa indebita per l'esercizio delle funzioni o per un atto contrario, qualora la sollecitazione non sia accolta dal privato.",
    hint: "Istigazione alla corruzione per sollecitazione respinta dal privato.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_084",
    question: "Cos'è la 'Confisca obbligatoria' prevista dall'art. 322-ter c.p. in caso di condanna per delitti contro la Pubblica Amministrazione?",
    options: [
      { id: "A", text: "L'obbligo per il giudice di disporre la confisca dei beni che costituiscono il prezzo o il profitto del reato, ovvero, quando essa non è possibile, la confisca di beni di valore equivalente di cui il reo ha la disponibilità (confisca per equivalente)" },
      { id: "B", text: "La vendita all'asta dei beni di proprietà del comune" },
      { id: "C", text: "La restituzione del bene confiscato al corrotto dopo cinque anni" },
      { id: "D", text: "Il sequestro facoltativo della sola automobile aziendale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 322-ter c.p. stabilisce che in caso di condanna per i delitti di corruzione, concussione e peculato è sempre ordinata la confisca diretta del prezzo o profitto del reato, oppure, ove non sia possibile aggredire direttamente il bene illecito, la confisca per equivalente di altri beni nella disponibilità del condannato.",
    hint: "Confisca obbligatoria diretta del profitto/prezzo o per equivalente.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_085",
    question: "Quale obbligo grava sul pubblico ufficiale che riceve notizie di reato nell'esercizio o a causa delle sue funzioni (art. 361 c.p.)?",
    options: [
      { id: "A", text: "L'obbligo penalmente sanzionato di presentare tempestiva denuncia per iscritto alla Procura della Repubblica o a un ufficiale di polizia giudiziaria (Omessa denuncia di reato da parte del pubblico ufficiale)" },
      { id: "B", text: "Il dovere di cancellare ogni traccia informatica per tutelare l'ente" },
      { id: "C", text: "La facoltà di negoziare una transazione economica con l'autore del reato" },
      { id: "D", text: "Nessun obbligo, spettando la denuncia solo ai cittadini lesi" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 361 c.p. punisce il pubblico ufficiale che omette o ritarda di denunciare all'Autorità Giudiziaria o ad un'altra Autorità che a quella abbia obbligo di riferirne un reato di cui ha avuto notizia nell'esercizio o a causa delle sue funzioni, perseguibile d'ufficio.",
    hint: "Omessa denuncia di reato da parte del pubblico ufficiale punita dall'art. 361 c.p.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_086",
    question: "In presenza di quali presupposti sussiste l'obbligo di denuncia ex art. 361 c.p. per il funzionario INPS?",
    options: [
      { id: "A", text: "Quando il reato di cui ha notizia è perseguibile d'ufficio e la notizia è stata acquisita nell'esercizio o a causa delle funzioni o del servizio prestato" },
      { id: "B", text: "Solo quando il reato è punibile a querela di parte della persona offesa" },
      { id: "C", text: "Solo se il valore del danno erariale supera un milione di euro" },
      { id: "D", text: "Solo previa autorizzazione unanime dei colleghi di stanza" }
    ],
    correctAnswerId: "A",
    explanation: "L'obbligo di denuncia sorge per i soli reati perseguibili d'ufficio (es. truffa aggravata, corruzione, falsità ideologica) appresi a causa o nell'esercizio delle funzioni; non sussiste invece per i reati perseguibili a querela di parte (salvo che la legge disponga diversamente).",
    hint: "Reati perseguibili d'ufficio appresi a causa o nell'esercizio delle funzioni.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_087",
    question: "Cosa punisce il delitto di 'Oltraggio a pubblico ufficiale' (art. 341-bis c.p.)?",
    options: [
      { id: "A", text: "Chiunque, in luogo pubblico o aperto al pubblico e in presenza di più persone, offende l'onore e il prestigio di un pubblico ufficiale mentre compie un atto d'ufficio ed a causa o nell'esercizio delle sue funzioni" },
      { id: "B", text: "Qualsiasi critica politica rivolta al governo sui giornali" },
      { id: "C", text: "La mancata presentazione di un saluto formale al dirigente" },
      { id: "D", text: "L'invio di un ricorso amministrativo con toni formali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 341-bis c.p. richiede per la configurabilità dell'oltraggio: 1) luogo pubblico o aperto al pubblico; 2) presenza di più persone; 3) contestualità tra l'offesa all'onore/prestigio e il compimento dell'atto d'ufficio.",
    hint: "Offesa in luogo pubblico in presenza di più persone contestuale al compimento dell'atto d'ufficio.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_088",
    question: "Quale causa di estinzione del reato prevede l'art. 341-bis, comma 3, c.p. per il delitto di oltraggio a pubblico ufficiale?",
    options: [
      { id: "A", text: "Ove l'imputato, prima del giudizio, abbia riparato interamente il danno mediante risarcimento sia nei confronti della persona offesa sia nei confronti dell'ente di appartenenza della medesima" },
      { id: "B", text: "Il decorso di 15 giorni senza citazione a giudizio" },
      { id: "C", text: "La redazione di una poesia encomiastica verso il pubblico ufficiale" },
      { id: "D", text: "L'adesione a un partito politico legalmente riconosciuto" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 341-bis, terzo comma, c.p., il reato di oltraggio si estingue se l'autore risarcisce integralmente il danno cagionato, prima del giudizio, sia al funzionario offeso sia all'amministrazione di appartenenza.",
    hint: "Risarcimento integrale del danno prima del giudizio al funzionario e all'ente.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_089",
    question: "Quale principio si applica in tema di reato continuato (art. 81, comma 2, c.p.) in caso di reiterazione di indebite percezioni o truffe all'INPS?",
    options: [
      { id: "A", text: "Chi con più azioni od omissioni, esecutive di un medesimo disegno criminoso, commette più violazioni della stessa o di diverse disposizioni di legge è punito con la pena stabilita per la violazione più grave aumentata fino al triplo" },
      { id: "B", text: "Si sommano matematicamente tutte le pene massime previste senza alcun limite" },
      { id: "C", text: "Si applica solo la pena dell'ultimo episodio ignorando tutti i precedenti" },
      { id: "D", text: "Il reato continuato è vietato per i delitti contro la PA" }
    ],
    correctAnswerId: "A",
    explanation: "Il reato continuato (cumulo giuridico) si applica quando plurimi reati (es. riscossione mensile di pensione indebita) sono legati dall'identità del medesimo disegno criminoso, applicando la pena della violazione più grave aumentata fino al triplo.",
    hint: "Cumulo giuridico: pena per la violazione più grave aumentata fino al triplo.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_090",
    question: "Cos'è la 'Circostanza attenuante della riparazione del danno' nei delitti contro la Pubblica Amministrazione ex art. 323-bis c.p.?",
    options: [
      { id: "A", text: "Una diminuzione della pena da un terzo a due terzi per chi, prima del giudizio, si è adoperato per evitare che l'attività delittuosa sia portata a conseguenze ulteriori o ha risarcito interamente il danno patrimoniale" },
      { id: "B", text: "La cancellazione automatica della fedina penale" },
      { id: "C", text: "Un premio economico concesso dalla Corte d'Appello" },
      { id: "D", text: "La promozione immediata a qualifica superiore" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 323-bis c.p. prevede speciali attenuanti per i delitti contro la PA per fatti di particolare tenuità o qualora il colpevole provveda prima del giudizio all'integrale riparazione del danno economico e alla restituzione delle somme sottratte.",
    hint: "Attenuante speciale per risarcimento integrale o particolare tenuità del fatto.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_091",
    question: "Quale reato commette chiunque, fuori dei casi di concorso nel reato, aiuta taluno ad eludere le investigazioni dell'Autorità giudiziaria o a sottrarsi alle ricerche di questa (art. 378 c.p.)?",
    options: [
      { id: "A", text: "Favoreggiamento personale" },
      { id: "B", text: "Favoreggiamento reale" },
      { id: "C", text: "Ricettazione" },
      { id: "D", text: "Subornazione" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 378 c.p. punisce il favoreggiamento personale, che si configura aiutando taluno ad eludere le indagini o sottrarsi alle ricerche; se l'aiuto è finalizzato ad assicurare il prodotto, profitto o prezzo del reato si configura invece il favoreggiamento reale (art. 379 c.p.).",
    hint: "Favoreggiamento personale ex art. 378 c.p.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_092",
    question: "In cosa si differenzia la 'Ricettazione' (art. 648 c.p.) dal 'Riciclaggio' (art. 648-bis c.p.) in materia di proventi derivanti da truffe ai danni dell'INPS?",
    options: [
      { id: "A", text: "Nella ricettazione l'agente acquista, riceve o occulta denaro o cose provenienti da delitto al fine di procurare a sé o ad altri un profitto; nel riciclaggio l'agente compie operazioni dirette a ostacolare l'identificazione della provenienza delittuosa del denaro" },
      { id: "B", text: "La ricettazione riguarda solo opere d'arte rubate nei musei" },
      { id: "C", text: "Il riciclaggio è applicabile unicamente agli istituti bancari e non alle persone fisiche" },
      { id: "D", text: "Non vi è alcuna differenza giurisprudenziale" }
    ],
    correctAnswerId: "A",
    explanation: "Mentre la ricettazione punisce la semplice ricezione/occultamento del provento delittuoso per trarne profitto, il riciclaggio si caratterizza per il compimento di condotte simulatorie o di trasformazione specificamente volte ad ostacolare la tracciabilità e l'origine illecita del denaro.",
    hint: "Riciclaggio = condotta specificamente diretta ad ostacolare l'identificazione della provenienza illecita.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PEN_093",
    question: "Cos'è il delitto di 'Autoriciclaggio' introdotto dall'art. 648-ter.1 del Codice Penale?",
    options: [
      { id: "A", text: "La condotta di chi, avendo commesso o concorso a commettere un delitto non colposo (es. truffa aggravata all'INPS), impiega, sostituisce, trasferisce in attività economiche, finanziarie, imprenditoriali o speculative il denaro o i beni provenienti da tale delitto, in modo da ostacolare concretamente l'identificazione della loro provenienza illecita" },
      { id: "B", text: "Il lavaggio personale di banconote danneggiate" },
      { id: "C", text: "L'apertura di un conto corrente all'estero senza autorizzazione prefettizia" },
      { id: "D", text: "Il prestito di denaro ad amici e parenti a tasso zero" }
    ],
    correctAnswerId: "A",
    explanation: "L'autoriciclaggio supera la tradizionale non punibilità del soggetto che ha commesso il delitto presupposto: punisce chi reimmette i proventi del proprio reato in attività economiche o finanziarie con modalità idonee a dissimularne l'origine.",
    hint: "Reimpiego in attività economiche dei proventi del proprio delitto con ostacolo all'identificazione.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PEN_094",
    question: "Quale responsabilità è prevista dal D.Lgs. 8 giugno 2001, n. 231 per gli enti e le società in relazione ai reati contro la Pubblica Amministrazione commessi nel loro interesse o vantaggio?",
    options: [
      { id: "A", text: "Una responsabilità amministrativa da reato autonoma dell'ente (avente natura sostanzialmente para-penale), sanzionata con sanzioni pecuniarie e interdittive (es. divieto di contrattare con la PA, revoca di finanziamenti)" },
      { id: "B", text: "L'arresto dei soci di minoranza" },
      { id: "C", text: "L'obbligo di fallimento coatto entro 10 giorni" },
      { id: "D", text: "Nessuna responsabilità per gli enti, rispondendo solo la persona fisica" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.Lgs. 231/2001 sancisce la responsabilità diretta dell'ente per reati commessi a suo vantaggio da soggetti apicali o sottoposti (tra cui corruzione, concussione, truffa ai danni dello Stato/INPS), superando il brocardo societas delinquere non potest.",
    hint: "Responsabilità autonoma dell'ente (D.Lgs. 231/2001) con sanzioni pecuniarie e interdittive.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_095",
    question: "Come può una società o ente andare esente da responsabilità ex D.Lgs. 231/2001 in caso di reato contro la PA commesso da un suo dipendente o amministratore?",
    options: [
      { id: "A", text: "Dimostrando di aver adottato ed efficacemente attuato, prima della commissione del fatto, un Modello di Organizzazione, Gestione e Controllo (MOGC) idoneo a prevenire reati della specie verificatasi, affidandone la vigilanza a un OdV indipendente" },
      { id: "B", text: "Dichiarando di non conoscere il dipendente autore del fatto" },
      { id: "C", text: "Trasferendo la sede legale della società all'estero dopo il reato" },
      { id: "D", text: "Chiudendo il bilancio in perdita nell'anno del reato" }
    ],
    correctAnswerId: "A",
    explanation: "L'esimente ex art. 6 D.Lgs. 231/2001 richiede la prova che l'organo dirigente ha adottato ed efficacemente attuato modelli organizzativi idonei e vigilati da un Organismo di Vigilanza autonomo, e che il reo ha agito eludendo fraudolentemente i protocolli.",
    hint: "Adozione ed efficace attuazione preventiva del Modello 231 vigilato dall'OdV.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PEN_096",
    question: "Cos'è il delitto di 'Millantato credito' disciplinato dall'originario art. 346 c.p. prima della sua abrogazione e riassorbimento nel traffico di influenze illecite?",
    options: [
      { id: "A", text: "La millanteria di un credito o di una relazione inesistente con un pubblico ufficiale per farsi dare o promettere denaro come prezzo della mediazione o col pretesto di dover comprare il favore dell'ufficiale" },
      { id: "B", text: "Il mancato pagamento delle rate di un mutuo fondiario" },
      { id: "C", text: "L'emissione di assegni a vuoto per spese personali" },
      { id: "D", text: "L'apertura abusiva di una linea di credito bancario" }
    ],
    correctAnswerId: "A",
    explanation: "Il millantato credito puniva chi millantava conoscenze fittizie presso pubblici funzionari facendosi consegnare denaro; la figura è stata abrogata dalla L. 3/2019 e ricondotta nella fattispecie generale del traffico di influenze illecite (art. 346-bis c.p.).",
    hint: "Millanteria di relazioni fittizie per ottenere denaro, ora confluita nel traffico di influenze.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PEN_097",
    question: "Cosa punisce il delitto di 'Usurpazione di funzioni pubbliche' di cui all'art. 347 del Codice Penale?",
    options: [
      { id: "A", text: "Chiunque usurpa una pubblica funzione o le attribuzioni inerenti a un pubblico impiego, ovvero chiunque, essendo cessato dalle funzioni o dall'impiego, continua a esercitarli indebitamente" },
      { id: "B", text: "Il dipendente che timbra il cartellino per il collega" },
      { id: "C", text: "La critica pubblica all'operato di un ministro" },
      { id: "D", text: "La presentazione di una domanda di concorso senza possedere la laurea" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 347 c.p. punisce sia chi esercita una pubblica funzione senza averne alcun titolo né investitura formale (usurpazione in senso stretto), sia chi continua arbitrariamente ad esercitarla dopo la decadenza, revoca, sospensione o collocamento a riposo.",
    hint: "Esercizio arbitrario di funzioni pubbliche senza titolo o prosecuzione indebita dopo la cessazione.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_098",
    question: "Cosa si intende per 'Danno patrimoniale di rilevante gravità' quale circostanza aggravante comune nei delitti contro il patrimonio e contro la PA (art. 61 n. 7 c.p.)?",
    options: [
      { id: "A", text: "Una circostanza aggravante che comporta l'aumento della pena qualora il danno economico cagionato alla persona offesa o all'ente pubblico sia di entità oggettivamente straordinaria e ingente" },
      { id: "B", text: "Un danno superiore a 100 euro" },
      { id: "C", text: "Il mancato raggiungimento degli obiettivi del piano di performance" },
      { id: "D", text: "Una discussione animata tra utenti in sala d'attesa" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 61 n. 7 c.p. aggrava la pena qualora l'azione delittuosa abbia cagionato alla persona offesa o all'amministrazione pubblica un danno patrimoniale di particolare ed elevata entità oggettiva.",
    hint: "Circostanza aggravante comune per danno patrimoniale di rilevante entità.",
    level: "base"
  },
  {
    id: "Q_PECS_PEN_099",
    question: "Quale reato commette chiunque, con dichiarazioni o attestazioni false, ottiene indebitamente l'Assegno di Inclusione (ADI) o il Supporto per la Formazione e il Lavoro (SFL) ex art. 8 D.L. 48/2023?",
    options: [
      { id: "A", text: "Un delitto specifico punito con la reclusione da due a sei anni (per utilizzo o presentazione di dichiarazioni false o documenti falsi) e da uno a tre anni per omessa comunicazione delle variazioni di reddito o patrimonio" },
      { id: "B", text: "Una mera sanzione amministrativa pecuniaria di 50 euro" },
      { id: "C", text: "L'obbligo di svolgere un'ora di volontariato sociale" },
      { id: "D", text: "Non è punibile se dichiara di aver speso i soldi per beni di prima necessità" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 8 del D.L. 48/2023 punisce severamente chiunque presenti dichiarazioni o documenti falsi per fruire indebitamente di ADI o SFL (reclusione da 2 a 6 anni) e chi omette di comunicare variazioni rilevanti entro i termini (reclusione da 1 a 3 anni), con revoca retroattiva e restituzione dell'indebito.",
    hint: "Falsa attestazione per ADI punita con reclusione da due a sei anni ex art. 8 D.L. 48/2023.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PEN_100",
    question: "In caso di condanna penale definitiva per il reato di percezione indebita di ADI o truffa aggravata ai danni dell'INPS, quali sanzioni accessorie conseguono per il beneficiario?",
    options: [
      { id: "A", text: "La revoca immediata retroattiva del beneficio, la restituzione di tutte le somme indebitamente percepite e l'impossibilità di richiedere nuovamente la misura per dieci anni dalla condanna definitiva" },
      { id: "B", text: "L'obbligo di risiedere in un'altra regione" },
      { id: "C", text: "Il blocco del conto corrente per venti giorni" },
      { id: "D", text: "La perdita automatica della patente di guida nautica" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 8, comma 3, D.L. 48/2023 prevede che alla condanna penale o patteggiamento consegua di diritto l'immediata revoca con efficacia retroattiva, il recupero integrale delle somme erogate e l'interdizione per dieci anni dalla possibilità di richiedere nuovamente l'ADI o il SFL.",
    hint: "Revoca retroattiva, recupero integrale e divieto decennale di nuova richiesta.",
    level: "intermedio"
  }
];

const merged = [...existing, ...newQuestions];
fs.writeFileSync(targetFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Successfully added ${newQuestions.length} questions to reati_pa.json. Total questions: ${merged.length}`);
