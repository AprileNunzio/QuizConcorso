const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/db/master_bank/diritto/amministrativo.json');
const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

const newQuestions = [
  {
    id: "Q_DIR_AMM_051",
    question: "Quale principio fondamentale regola i rapporti tra il cittadino e la pubblica amministrazione ai sensi del comma 2-bis dell'art. 1 della Legge 241/1990 (introdotto dal D.L. 76/2020)?",
    options: [
      { id: "A", text: "I rapporti tra il cittadino e la pubblica amministrazione sono improntati ai principi della collaborazione e della buona fede" },
      { id: "B", text: "Il principio dell'autorità assoluta e insindacabile dello Stato" },
      { id: "C", text: "Il principio del segreto d'ufficio come regola generale prevalente" },
      { id: "D", text: "Il principio della presunzione di colpevolezza dell'amministrato" }
    ],
    correctAnswerId: "A",
    explanation: "Il comma 2-bis dell'art. 1 della L. 241/1990 recepisce la clausola generale civilistica della buona fede oggettiva e della leale collaborazione, imponendo alla PA di agire con correttezza, trasparenza e rispetto dell'affidamento legittimo ingenerato nel cittadino.",
    hint: "Principi della collaborazione e della buona fede nei rapporti tra PA e cittadino.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_052",
    question: "Cosa stabilisce l'art. 2, comma 9-ter, della Legge 241/1990 in merito all'esercizio del 'potere sostitutivo' in caso di inerzia della PA nel concludere il procedimento?",
    options: [
      { id: "A", text: "L'organo di governo individua il soggetto cui attribuire il potere sostitutivo; decorso inutilmente il termine per la conclusione, il privato può rivolgersi al titolare del potere sostitutivo affinché entro un termine pari alla metà di quello originario concluda il procedimento" },
      { id: "B", text: "Il cittadino può nominare autonomamente un proprio dipendente per firmare l'atto pubblico" },
      { id: "C", text: "L'amministrazione è obbligata a risarcire immediatamente 100.000 euro" },
      { id: "D", text: "Il procedimento si estingue d'ufficio e non può più essere concluso" }
    ],
    correctAnswerId: "A",
    explanation: "In caso di mancata conclusione del procedimento nei termini, il cittadino può attivare il titolare del potere sostitutivo, che ha l'obbligo di concludere il procedimento entro un termine pari alla metà di quello originario attraverso le strutture competenti o nominando un commissario ad acta.",
    hint: "Conclusione del procedimento da parte del sostituto entro la metà del termine originario.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_053",
    question: "Cosa prevede l'art. 10-bis della Legge 241/1990 in materia di 'Comunicazione dei motivi ostativi all'accoglimento dell'istanza' (c.d. preavviso di rigetto)?",
    options: [
      { id: "A", text: "Nei procedimenti a istanza di parte il responsabile del procedimento, prima della formale adozione di un provvedimento negativo, comunica tempestivamente agli istanti i motivi ostativi, concedendo loro 10 giorni per presentare per iscritto le proprie osservazioni" },
      { id: "B", text: "Una telefonata informale priva di valore legale per avvertire l'utente" },
      { id: "C", text: "L'immediata archiviazione della domanda senza contraddittorio" },
      { id: "D", text: "Una sanzione pecuniaria a carico di chi ha presentato una domanda priva di requisiti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 10-bis L. 241/90 garantisce il contraddittorio endoprocedimentale: prima del diniego la PA deve comunicare i motivi ostativi; gli istanti hanno 10 giorni per presentare osservazioni ed eventuali documenti, dei quali l'amministrazione deve dare motivato conto se disattesi.",
    hint: "Comunicazione dei motivi ostativi prima del diniego con termine di 10 giorni per osservazioni.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_054",
    question: "Quale effetto produce la notifica della comunicazione dei motivi ostativi ex art. 10-bis L. 241/1990 sui termini di conclusione del procedimento?",
    options: [
      { id: "A", text: "Sospende i termini di conclusione del procedimento, che ricominciano a decorrere dieci giorni dopo la presentazione delle osservazioni o dalla scadenza del termine per presentarle" },
      { id: "B", text: "Azzera definitivamente i termini facendoli ripartire da zero per l'intera durata" },
      { id: "C", text: "Non produce alcun effetto temporale sui termini" },
      { id: "D", text: "Estingue il procedimento per perenzione d'ufficio" }
    ],
    correctAnswerId: "A",
    explanation: "A seguito della modifica introdotta dal D.L. 76/2020, la comunicazione dei motivi ostativi sospende i termini di conclusione (non più interruzione con decorso ex novo): i termini ricominciano a decorrere 10 giorni dopo la presentazione delle osservazioni o dalla scadenza del termine concesso.",
    hint: "Sospende i termini di conclusione (regime introdotto dal D.L. 76/2020).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_055",
    question: "In caso di mancato accoglimento delle osservazioni presentate dal cittadino a seguito del preavviso di rigetto ex art. 10-bis, cosa prevede la legge a carico dell'amministrazione?",
    options: [
      { id: "A", text: "L'amministrazione ha l'obbligo di dare adeguata motivazione nel provvedimento finale negativo, indicando le ragioni del mancato accoglimento delle osservazioni del privato" },
      { id: "B", text: "Può ignorare le osservazioni senza darne conto" },
      { id: "C", text: "Deve pagare una penale al cittadino" },
      { id: "D", text: "Deve trasmettere gli atti al Consiglio di Stato" }
    ],
    correctAnswerId: "A",
    explanation: "La norma impone un rafforzamento dell'onere di motivazione: nel provvedimento negativo conclusivo l'amministrazione è tenuta a spiegare analiticamente perché le argomentazioni o i documenti forniti dal cittadino non hanno superato i motivi ostativi.",
    hint: "Obbligo di motivare puntualmente nel provvedimento finale le ragioni del rigetto delle osservazioni.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_056",
    question: "Quali procedimenti sono espressamente esclusi dall'applicazione dell'art. 10-bis della Legge 241/1990?",
    options: [
      { id: "A", text: "Le procedure concorsuali e i procedimenti in materia previdenziale e assistenziale sorti a seguito di richiesta di parte e gestiti dagli enti previdenziali" },
      { id: "B", text: "Tutti i procedimenti dei comuni" },
      { id: "C", text: "I procedimenti per il rilascio del passaporto" },
      { id: "D", text: "I procedimenti tributari di rimborso" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 10-bis, comma 2, della L. 241/1990 stabilisce che le disposizioni sul preavviso di rigetto non si applicano alle procedure concorsuali e ai procedimenti in materia previdenziale e assistenziale sorti a seguito di richiesta di parte e gestiti dagli enti previdenziali (per i quali operano le tutele del contenzioso amministrativo).",
    hint: "Esclusi procedure concorsuali e procedimenti previdenziali/assistenziali a domanda.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_AMM_057",
    question: "Ai sensi dell'art. 6 della Legge 241/1990, se l'organo competente all'adozione del provvedimento finale è diverso dal responsabile del procedimento, può discostarsi dalle risultanze dell'istruttoria?",
    options: [
      { id: "A", text: "Non può discostarsene se non indicandone espressamente e analiticamente la motivazione nel provvedimento finale" },
      { id: "B", text: "Può discostarsene liberamente senza alcun obbligo di motivazione" },
      { id: "C", text: "Non può mai in nessun caso discostarsi dalle risultanze istruttorie" },
      { id: "D", text: "Deve richiedere la previa approvazione del TAR" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 6, comma 1, lett. e), L. 241/1990 stabilisce che l'organo competente all'adozione del provvedimento non può discostarsi dalle risultanze dell'istruttoria condotta dal responsabile del procedimento se non motivandone analiticamente le ragioni nel provvedimento finale.",
    hint: "Può discostarsene solo indicandone motivazione puntuale nel provvedimento finale.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_058",
    question: "Cosa stabilisce l'art. 6-bis della Legge 241/1990 in materia di conflitto di interessi del responsabile del procedimento e dei titolari degli uffici?",
    options: [
      { id: "A", text: "Devono astenersi in caso di conflitto di interessi, anche solo potenziale, segnalando ogni situazione di conflitto" },
      { id: "B", text: "Possono decidere purché informino a voce il richiedente" },
      { id: "C", text: "Devono astenersi solo se il conflitto riguarda un proprio figlio convivente" },
      { id: "D", text: "Non è prevista alcuna astensione per gli atti endoprocedimentali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 6-bis impone un obbligo generale e cogente di astensione per qualsiasi situazione di conflitto di interessi, anche solo potenziale, a garanzia dell'imparzialità dell'azione amministrativa sancita dall'art. 97 Cost.",
    hint: "Obbligo di astensione anche per conflitto solo potenziale.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_059",
    question: "Quali elementi essenziali devono essere indicati nella 'Comunicazione di avvio del procedimento' ai sensi dell'art. 8 della Legge 241/1990?",
    options: [
      { id: "A", text: "L'amministrazione competente, l'oggetto del procedimento, l'ufficio e il responsabile del procedimento, la data entro cui deve concludersi e i rimedi in caso di inerzia, nonché le modalità per visionare gli atti" },
      { id: "B", text: "Il reddito ISEE di tutti i dipendenti dell'ufficio" },
      { id: "C", text: "La marca da bollo necessaria per leggere l'atto" },
      { id: "D", text: "L'elenco degli orari dei mezzi pubblici per raggiungere la sede" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 8 L. 241/90 prescrive i contenuti obbligatori dell'avvio: amministrazione competente, oggetto, responsabile del procedimento, data di conclusione e rimedi sostitutivi per inerzia, ufficio in cui si può prendere visione degli atti.",
    hint: "Oggetto, responsabile, termine di conclusione, rimedi per inerzia e ufficio per visione atti.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_060",
    question: "In quali casi l'omessa comunicazione di avvio del procedimento NON determina l'annullabilità del provvedimento finale (art. 21-octies, comma 2, secondo periodo, L. 241/1990)?",
    options: [
      { id: "A", text: "Qualora l'amministrazione dimostri in giudizio che il contenuto del provvedimento non avrebbe potuto essere diverso da quello in concreto adottato" },
      { id: "B", text: "In qualsiasi procedimento a totale discrezione del giudice" },
      { id: "C", text: "Solo se l'atto è favorevole all'amministrazione" },
      { id: "D", text: "Solo se il procedimento è durato meno di 10 giorni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 21-octies, comma 2, sancisce il principio del raggiungimento dello scopo: il provvedimento amministrativo non è comunque annullabile per mancata comunicazione dell'avvio qualora la PA provi in giudizio che l'esito non avrebbe potuto essere diverso anche con la partecipazione del privato.",
    hint: "Se la PA dimostra in giudizio che il contenuto non avrebbe potuto essere diverso.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_061",
    question: "Cos'è la 'Conferenza di servizi decisoria' disciplinata dall'art. 14, comma 2, della Legge 241/1990?",
    options: [
      { id: "A", text: "Una conferenza sempre obbligatoria quando la conclusione del procedimento è subordinata all'acquisizione di più pareri, intese, concerti, nulla osta o altri atti di assenso resi da diverse amministrazioni pubbliche" },
      { id: "B", text: "Una riunione tra cittadini per votare una legge regionale" },
      { id: "C", text: "Un convegno scientifico organizzato da docenti universitari" },
      { id: "D", text: "Un'assemblea condominiale per la manutenzione delle strade" }
    ],
    correctAnswerId: "A",
    explanation: "La conferenza decisoria è lo strumento di semplificazione e accelerazione procedimentale volto a raccogliere contestualmente gli atti di assenso di più amministrazioni necessari per adottare il provvedimento finale.",
    hint: "Obbligatoria per acquisire intese, concerti, pareri o assensi di diverse PA.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_062",
    question: "Come si svolge in via ordinaria la Conferenza di Servizi decisoria ai sensi dell'art. 14-bis della Legge 241/1990?",
    options: [
      { id: "A", text: "In forma semplificata e in modalità asincrona (tramite trasmissione telematica delle comunicazioni e dei pareri entro termini perentori senza riunione fisica)" },
      { id: "B", text: "Esclusivamente con riunione fisica obbligatoria presso la Prefettura" },
      { id: "C", text: "Tramite sorteggio delle decisioni a maggioranza semplice" },
      { id: "D", text: "Mediante votazione palese in piazza" }
    ],
    correctAnswerId: "A",
    explanation: "La riforma Madia (D.Lgs. 127/2016) ha reso la modalità semplificata e asincrona il modello ordinario di conferenza: le amministrazioni comunicano per via telematica senza incontrarsi fisicamente; la modalità simultanea e sincrona (in presenza o video) è eccezionale.",
    hint: "Forma semplificata e modalità asincrona tramite trasmissione telematica.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_063",
    question: "Quale effetto si determina nella Conferenza di Servizi semplificata (art. 14-bis, comma 4, L. 241/90) in caso di mancata comunicazione della determinazione entro il termine o in caso di determinazione priva dei requisiti?",
    options: [
      { id: "A", text: "Equivale a silenzio assenso e accoglimento incondizionato della proposta (salvi i casi in cui disposizioni UE richiedano un provvedimento espresso)" },
      { id: "B", text: "Equivale a diniego insuperabile dell'opera" },
      { id: "C", text: "La pratica viene rinviata alla Commissione Europea" },
      { id: "D", text: "L'amministrazione silente viene commissariata d'ufficio" }
    ],
    correctAnswerId: "A",
    explanation: "Nella conferenza asincrona vige il silenzio assenso generalizzato: la mancata espressione del parere o dissenso motivato entro il termine equivale ad assenso senza condizioni, anche per amministrazioni preposte a interessi sensibili.",
    hint: "La mancata determinazione equivale a silenzio assenso incondizionato.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_064",
    question: "Cosa stabilisce l'art. 19 della Legge 241/1990 in ordine all'efficacia della Segnalazione Certificata di Inizio Attività (SCIA)?",
    options: [
      { id: "A", text: "L'attività oggetto della segnalazione può essere iniziata dalla data della presentazione della segnalazione all'amministrazione competente (efficacia immediata)" },
      { id: "B", text: "L'attività può iniziare solo dopo 60 giorni dalla presentazione" },
      { id: "C", text: "L'attività può iniziare solo previo rilascio di un'autorizzazione scritta in bollo" },
      { id: "D", text: "La SCIA ha valore meramente informativo e non consente alcun inizio lavori" }
    ],
    correctAnswerId: "A",
    explanation: "A differenza della vecchia DIA (che richiedeva 30 giorni di attesa), la SCIA consente l'avvio immediato dell'attività contestualmente alla sua presentazione, corredata dalle attestazioni e asseverazioni prescritte.",
    hint: "Efficacia immediata: l'attività può essere iniziata contestualmente alla presentazione.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_065",
    question: "Entro quale termine ordinario l'amministrazione competente può esercitare i poteri inibitori o di divieto di prosecuzione dell'attività a seguito della presentazione della SCIA (art. 19, comma 3, L. 241/90)?",
    options: [
      { id: "A", text: "Entro sessanta giorni dal ricevimento della segnalazione (o trenta giorni in materia edilizia)" },
      { id: "B", text: "Entro dieci giorni" },
      { id: "C", text: "Entro un anno solare" },
      { id: "D", text: "In qualsiasi momento senza limiti di tempo" }
    ],
    correctAnswerId: "A",
    explanation: "In caso di accertata carenza dei requisiti, la PA adotta motivati provvedimenti di divieto di prosecuzione dell'attività e rimozione degli effetti entro il termine di 60 giorni (ridotto a 30 giorni per la SCIA edilizia), assegnando se possibile un termine per conformarsi.",
    hint: "Entro 60 giorni ordinari (30 giorni per l'edilizia).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_066",
    question: "Decorso il termine di 60 giorni per l'esercizio dei poteri inibitori ordinari sulla SCIA, in quali casi l'amministrazione può ancora intervenire per vietare l'attività (art. 19, comma 4, L. 241/90)?",
    options: [
      { id: "A", text: "Esclusivamente in presenza delle condizioni previste per l'annullamento d'ufficio dall'art. 21-nonies (interesse pubblico attuale, comparazione degli interessi, termine massimo di 12 mesi, salvo falsità penali accertate)" },
      { id: "B", text: "Liberamente a totale discrezione del sindaco" },
      { id: "C", text: "In nessun caso, essendo la SCIA totalmente intangibile per sempre" },
      { id: "D", text: "Solo se il segnalante rinuncia spontaneamente all'attività" }
    ],
    correctAnswerId: "A",
    explanation: "Scaduti i 60 giorni, la PA può intervenire in via di autotutela tardiva solo nel rispetto rigoroso dei presupposti e dei termini dell'annullamento d'ufficio ex art. 21-nonies (max 12 mesi), salvo il caso di dichiarazioni mendaci o false attestazioni.",
    hint: "Solo nei limiti e alle condizioni dell'annullamento d'ufficio ex art. 21-nonies.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_AMM_067",
    question: "In quali materie e procedimenti l'art. 20, comma 4, della Legge 241/1990 ESCLUDE espressamente l'operatività del silenzio assenso?",
    options: [
      { id: "A", text: "Agli atti e procedimenti riguardanti il patrimonio culturale e paesaggistico, l'ambiente, la tutela dal rischio idrogeologico, la difesa nazionale, la pubblica sicurezza, l'immigrazione, l'asilo e la cittadinanza, la salute e la pubblica incolumità" },
      { id: "B", text: "A tutti i procedimenti del settore commercio" },
      { id: "C", text: "Ai soli procedimenti con valore economico inferiore a 100 euro" },
      { id: "D", text: "Non esiste alcuna eccezione al silenzio assenso" }
    ],
    correctAnswerId: "A",
    explanation: "Il silenzio assenso non opera per i c.d. interessi sensibili (ambiente, paesaggio, beni culturali, difesa, sicurezza, salute, immigrazione), per i quali è sempre richiesto un provvedimento espresso a tutela di valori costituzionali primari.",
    hint: "Escluso per interessi sensibili (ambiente, paesaggio, difesa, salute, sicurezza, cittadinanza).",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_068",
    question: "Quali sono le quattro cause tassative di 'Nullità del provvedimento amministrativo' sancite dall'art. 21-septies della Legge 241/1990?",
    options: [
      { id: "A", text: "Mancanza degli elementi essenziali, difetto assoluto di attribuzione, violazione o elusione del giudicato, e gli altri casi espressamente previsti dalla legge (nullità testuale)" },
      { id: "B", text: "Incompetenza relativa, errore di calcolo, difetto di stampa e firma illeggibile" },
      { id: "C", text: "Eccesso di potere, violazione di legge, tardività e mancata notifica" },
      { id: "D", text: "Mancata traduzione in inglese e assenza del codice a barre" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 21-septies L. 241/90 codifica la nullità dell'atto per: 1) mancanza elementi essenziali; 2) difetto assoluto di attribuzione (carenza di potere in astratto); 3) violazione o elusione del giudicato; 4) casi espressamente sanciti dalla legge.",
    hint: "Mancanza elementi essenziali, difetto assoluto di attribuzione, violazione/elusione giudicato, casi previsti dalla legge.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_069",
    question: "Quali sono i tre vizi di legittimità che determinano l' 'Annullabilità del provvedimento amministrativo' ai sensi dell'art. 21-octies, comma 1, della Legge 241/1990?",
    options: [
      { id: "A", text: "Incompetenza (relativa), violazione di legge ed eccesso di potere" },
      { id: "B", text: "Dolo, colpa grave e negligenza" },
      { id: "C", text: "Mancata convocazione dei sindacati, ritardo e mancata pubblicazione sul giornale" },
      { id: "D", text: "Difetto assoluto di attribuzione, violazione del giudicato e nullità testuale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 21-octies, comma 1, L. 241/90 ricalca la tradizionale tripartizione dell'annullabilità amministrativa: incompetenza relativa (vizio del soggetto organo), violazione di legge (difformità da norme vigenti) ed eccesso di potere (vizio della funzione).",
    hint: "Incompetenza, violazione di legge ed eccesso di potere.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_070",
    question: "Cosa si intende per 'Eccesso di potere' quale vizio di legittimità del provvedimento amministrativo?",
    options: [
      { id: "A", text: "Il cattivo uso del potere discrezionale da parte della pubblica amministrazione, che si manifesta attraverso figure sintomatiche (es. sviamento di potere, travisamento dei fatti, disparità di trattamento, illogicità manifesta, difetto di motivazione)" },
      { id: "B", text: "L'invasione delle competenze del potere legislativo o giudiziario" },
      { id: "C", text: "Il superamento dei limiti di spesa del bilancio comunale" },
      { id: "D", text: "L'adozione di un atto al di fuori dell'orario di apertura degli uffici" }
    ],
    correctAnswerId: "A",
    explanation: "L'eccesso di potere è il vizio tipico degli atti discrezionali: si configura quando l'atto persegue un fine diverso da quello stabilito dalla legge (sviamento) o presenta anomalie logiche rivelate dalle note figure sintomatiche elaborate dalla giurisprudenza.",
    hint: "Cattivo uso della discrezionalità desunto dalle figure sintomatiche (illogicità, disparità, travisamento).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_071",
    question: "Cosa stabilisce l'art. 21-octies, comma 2, primo periodo, della Legge 241/1990 in materia di violazione di norme sul procedimento o sulla forma degli atti vincolati?",
    options: [
      { id: "A", text: "Non è annullabile il provvedimento adottato in violazione di norme sul procedimento o sulla forma degli atti qualora, per la natura vincolata del provvedimento, sia palese che il suo contenuto dispositivo non avrebbe potuto essere diverso da quello in concreto adottato" },
      { id: "B", text: "L'atto è sempre radicalmente nullo a prescindere dal suo contenuto" },
      { id: "C", text: "Il dirigente viene rimosso automaticamente dall'incarico" },
      { id: "D", text: "Il privato ottiene sempre il risarcimento del danno biologico" }
    ],
    correctAnswerId: "A",
    explanation: "La norma introduce la dequotazione dei vizi formali per l'attività vincolata: se l'amministrazione non aveva alcuna discrezionalità e l'esito finale era obbligato per legge, l'omissione di formalità procedurali non giustifica l'annullamento dell'atto.",
    hint: "Non è annullabile per vizi di forma o procedura se il contenuto vincolato non poteva essere diverso.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_072",
    question: "Quali presupposti devono necessariamente sussistere per la legittimità dell' 'Annullamento d'ufficio' ai sensi dell'art. 21-nonies della Legge 241/1990?",
    options: [
      { id: "A", text: "Un provvedimento illegittimo ai sensi dell'art. 21-octies, la sussistenza di un interesse pubblico attuale alla sua rimozione, la valutazione comparativa degli interessi dei destinatari e dei controinteressati, ed entro un termine ragionevole (non superiore a 12 mesi per provvedimenti attributivi di vantaggi economici)" },
      { id: "B", text: "La semplice volontà del nuovo sindaco senza alcuna motivazione" },
      { id: "C", text: "Il parere favorevole obbligatorio della Commissione UE" },
      { id: "D", text: "Il decorso di almeno dieci anni dall'adozione dell'atto" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 21-nonies disciplina l'annullamento d'ufficio in autotutela: richiede l'originaria illegittimità, un interesse pubblico attuale (diverso dal mero ripristino della legalità), la ponderazione degli affidamenti dei destinatari ed entro 12 mesi per benefici economici.",
    hint: "Provvedimento illegittimo, interesse pubblico attuale, comparazione interessi e termine max 12 mesi.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_073",
    question: "Quale termine massimo è previsto per l'annullamento d'ufficio di provvedimenti amministrativi di autorizzazione o attributivi di vantaggi economici a seguito delle modifiche del D.L. 77/2021?",
    options: [
      { id: "A", text: "Non superiore a 12 mesi dal momento dell'adozione dei provvedimenti (termine ridotto rispetto ai precedenti 18 mesi)" },
      { id: "B", text: "Non superiore a 5 anni" },
      { id: "C", text: "Non superiore a 30 giorni" },
      { id: "D", text: "Non vi è alcun termine massimo prestabilito" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.L. 77/2021 (governance PNRR) ha ridotto da 18 a 12 mesi il termine perentorio entro il quale la PA può annullare d'ufficio provvedimenti ampliativi della sfera dei privati, a tutela della certezza giuridica e della stabilità degli investimenti.",
    hint: "Termine massimo di 12 mesi dall'adozione.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_074",
    question: "In presenza di false attestazioni o dichiarazioni mendaci accertate con sentenza penale passata in giudicato, quale termine si applica all'annullamento d'ufficio del provvedimento illegittimamente conseguito (art. 21-nonies, comma 2-bis, L. 241/90)?",
    options: [
      { id: "A", text: "I provvedimenti amministrativi conseguiti sulla base di false rappresentazioni dei fatti possono essere annullati dall'amministrazione anche dopo la scadenza del termine di 12 mesi" },
      { id: "B", text: "Devono comunque essere annullati entro 30 giorni" },
      { id: "C", text: "Non possono mai più essere toccati" },
      { id: "D", text: "Si prescrivono dopo un biennio" }
    ],
    correctAnswerId: "A",
    explanation: "Il dolo e la falsità escludono la tutela dell'affidamento del privato: se l'atto è stato ottenuto con dichiarazioni mendaci penalmente accertate, la PA può annullarlo in qualsiasi momento, anche oltre il limite dei 12 mesi.",
    hint: "Può essere annullato anche dopo la scadenza dei 12 mesi in caso di dichiarazioni false penalmente accertate.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_075",
    question: "In cosa differisce la 'Revoca' del provvedimento amministrativo (art. 21-quinquies L. 241/90) dall' 'Annullamento d'ufficio' (art. 21-nonies L. 241/90)?",
    options: [
      { id: "A", text: "La revoca agisce su un atto originariamente legittimo per sopravvenuti motivi di interesse pubblico o mutamento della situazione di fatto con efficacia ex nunc (irretroattiva); l'annullamento d'ufficio agisce su un atto originariamente illegittimo con efficacia ex tunc (retroattiva)" },
      { id: "B", text: "La revoca ha efficacia retroattiva e l'annullamento futuro" },
      { id: "C", text: "La revoca compete solo al giudice, l'annullamento solo alla polizia" },
      { id: "D", text: "Sono due istituti identici con lo stesso nome" }
    ],
    correctAnswerId: "A",
    explanation: "Annullamento = atto originariamente viziato, efficacia retroattiva (ex tunc). Revoca = atto valido all'origine che diviene inopportuno per mutamento della situazione o dell'interesse pubblico, con efficacia non retroattiva (ex nunc) e obbligo di indennizzo per i pregiudizi arrecati.",
    hint: "Revoca = atto originariamente valido con efficacia ex nunc; Annullamento = atto illegittimo ab origine con efficacia ex tunc.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_076",
    question: "Cosa stabilisce l'art. 21-quinquies L. 241/1990 qualora la revoca di un atto amministrativo determini pregiudizi in danno dei soggetti direttamente interessati?",
    options: [
      { id: "A", text: "L'amministrazione ha l'obbligo di provvedere al loro indennizzo economico" },
      { id: "B", text: "I soggetti subiscono il danno senza alcuna tutela risarcitoria" },
      { id: "C", text: "Il funzionario che firma la revoca viene arrestato" },
      { id: "D", text: "L'amministrazione deve cedere quote di bilancio ai danneggiati" }
    ],
    correctAnswerId: "A",
    explanation: "La revoca lede un affidamento legittimo incolpevole generato da un atto originariamente valido: l'art. 21-quinquies impone alla PA l'obbligo di corrispondere un indennizzo economico a ristoro del danno emergente patito dal privato.",
    hint: "Obbligo di corresponsione di un indennizzo a favore dei soggetti lesi.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_077",
    question: "Cosa si intende per 'Esecutorietà' del provvedimento amministrativo ai sensi dell'art. 21-ter della Legge 241/1990?",
    options: [
      { id: "A", text: "Il potere dell'amministrazione di imporre coattivamente l'adempimento degli obblighi nei confronti dei privati destinatari, nei casi e con le modalità stabiliti dalla legge, senza necessità di ricorrere previamente all'autorità giudiziaria" },
      { id: "B", text: "L'obbligo di far eseguire gli atti da un notaio" },
      { id: "C", text: "La pubblicazione del testo sul quotidiano a spese del cittadino" },
      { id: "D", text: "La firma dell'atto in presenza di testimoni giurati" }
    ],
    correctAnswerId: "A",
    explanation: "L'esecutorietà è l'autotutela esecutiva della PA: consente all'ente, previa diffida, di portare a esecuzione coattiva il provvedimento (es. sgombero, riscossione a ruolo) direttamente con la forza pubblica senza dover adire il giudice civile per ottenere un titolo esecutivo.",
    hint: "Esecuzione coattiva diretta dell'atto da parte della PA senza previa sentenza del giudice.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_078",
    question: "Quale nozione di 'Documento Amministrativo' accoglie l'art. 22, comma 1, lett. d), della Legge 241/1990 ai fini dell'accesso agli atti?",
    options: [
      { id: "A", text: "Ogni rappresentazione grafica, fotocinematografica, elettromagnetica o di qualunque altra specie del contenuto di atti, anche interni o non relativi ad uno specifico procedimento, detenuti da una pubblica amministrazione e concernenti attività di pubblico interesse" },
      { id: "B", text: "Esclusivamente i fogli di carta scritti a macchina con timbro ad inchiostro" },
      { id: "C", text: "I soli contratti pubblici approvati dalla Corte dei Conti" },
      { id: "D", text: "Solo le leggi pubblicate in Gazzetta Ufficiale" }
    ],
    correctAnswerId: "A",
    explanation: "La nozione di documento amministrativo è onnicomprensiva: abbraccia qualsiasi supporto materiale o digitale (file, database, email, registrazioni, mappe) detenuto dall'amministrazione per lo svolgimento di attività di interesse pubblico.",
    hint: "Ogni rappresentazione su qualunque supporto (grafico, digitale, ecc.) concernente attività pubblica.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_079",
    question: "Chi è titolare del diritto di 'Accesso Documentale Tradizionale' ai sensi dell'art. 22 della Legge 241/1990?",
    options: [
      { id: "A", text: "Tutti i soggetti privati, inclusi quelli portatori di interessi pubblici o diffusi, che abbiano un interesse diretto, concreto e attuale, corrispondente ad una situazione giuridicamente tutelata e collegata al documento al quale è chiesto l'accesso" },
      { id: "B", text: "Chiunque senza necessità di motivazione o interesse" },
      { id: "C", text: "I soli parlamentari e consiglieri regionali" },
      { id: "D", text: "Esclusivamente i giornalisti iscritti all'albo" }
    ],
    correctAnswerId: "A",
    explanation: "L'accesso documentale ex L. 241/90 (a differenza dell'accesso civico generalizzato FOIA) è ad accesso qualificato: richiede un interesse differenziato 'diretto, concreto e attuale' collegato alla tutela di una propria situazione giuridica.",
    hint: "Interesse qualificato: diretto, concreto e attuale collegato a situazione giuridicamente tutelata.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_080",
    question: "Cosa accade se la pubblica amministrazione non risponde a una richiesta di accesso documentale ex art. 22 L. 241/1990 entro il termine di 30 giorni?",
    options: [
      { id: "A", text: "La richiesta si intende respinta a tutti gli effetti (silenzio-diniego), aprendo la via al ricorso al TAR entro i successivi 30 giorni o al Difensore Civico/Commissione per l'accesso" },
      { id: "B", text: "La richiesta si intende accolta per silenzio assenso" },
      { id: "C", text: "L'amministrazione è obbligata a pagare 1.000 euro per ogni giorno di ritardo" },
      { id: "D", text: "La richiesta decade senza alcuna possibilità di tutela giudiziaria" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 25, comma 4, L. 241/1990, decorsi inutilmente trenta giorni dalla richiesta questa si intende respinta (silenzio-diniego); contro il diniego espresso o tacito il richiedente può ricorrere al TAR entro 30 giorni col rito speciale ex art. 116 c.p.a.",
    hint: "Silenzio-diniego dopo 30 giorni, con possibilità di ricorso al TAR entro 30 giorni.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_081",
    question: "Quale forma di tutela stragiudiziale può esperire il richiedente l'accesso agli atti contro gli atti delle amministrazioni centrali dello Stato e degli enti pubblici nazionali (come l'INPS) in caso di diniego o differimento?",
    options: [
      { id: "A", text: "Può presentare ricorso, entro 30 giorni, presso la Commissione per l'accesso ai documenti amministrativi istituita presso la Presidenza del Consiglio dei Ministri" },
      { id: "B", text: "Può ricorrere al Difensore Civico provinciale" },
      { id: "C", text: "Può presentare istanza al Prefetto" },
      { id: "D", text: "Non vi è alcuna tutela stragiudiziale per gli enti nazionali" }
    ],
    correctAnswerId: "A",
    explanation: "Per gli atti delle amministrazioni centrali o periferiche dello Stato e degli enti pubblici nazionali, l'art. 25 L. 241/90 prevede il riesame stragiudiziale dinanzi alla Commissione per l'accesso (Presidenza del Consiglio), mentre per gli enti locali si adisce il Difensore Civico.",
    hint: "Commissione per l'accesso ai documenti amministrativi presso la Presidenza del Consiglio.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_082",
    question: "In caso di conflitto tra diritto di accesso ai documenti amministrativi (art. 24, comma 7, L. 241/90) e diritto alla riservatezza di terzi, quale criterio di bilanciamento si applica?",
    options: [
      { id: "A", text: "Deve comunque essere garantito l'accesso ai documenti la cui conoscenza sia necessaria per curare o per difendere i propri interessi giuridici; in caso di dati sensibili/giudiziari l'accesso è consentito solo nei limiti della stretta indispensabilità, e per i dati sanitari/genetici solo se la situazione è di rango almeno pari" },
      { id: "B", text: "La privacy prevale sempre e comunque sull'accesso difensivo" },
      { id: "C", text: "L'accesso prevale sempre senza alcuna limitazione neppure per i dati sanitari" },
      { id: "D", text: "La decisione è rimessa a una votazione popolare su internet" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 24, comma 7, L. 241/90 stabilisce il principio della 'stretta indispensabilità': per curare interessi giuridici l'accesso è consentito, ma per dati sensibili solo se strettamente indispensabile e per dati supersensibili (salute, vita sessuale) solo per diritti di rango pari o superiore.",
    hint: "Stretta indispensabilità per difendere propri interessi, e pari rango per dati sanitari/genetici.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_AMM_083",
    question: "Cos'è la 'Discrezionalità Amministrativa'?",
    options: [
      { id: "A", text: "La facoltà di scelta e di ponderazione comparativa tra l'interesse pubblico primario e gli interessi secondari (pubblici, privati o collettivi), affidata dalla legge all'amministrazione per individuare la soluzione più idonea al soddisfacimento del fine pubblico" },
      { id: "B", text: "La libertà dell'impiegato di decidere secondo le proprie simpatie personali" },
      { id: "C", text: "L'arbitrio assoluto senza vincolo alcuno di legge o motivazione" },
      { id: "D", text: "L'obbligo di applicare la legge senza alcuna valutazione autonoma" }
    ],
    correctAnswerId: "A",
    explanation: "La discrezionalità amministrativa è l'essenza della funzione di governo: ponderare l'interesse pubblico affidato alla cura dell'ente con tutti gli altri interessi concorrenti, scegliendo l'opzione migliore nel rispetto dei principi di ragionevolezza e proporzionalità.",
    hint: "Ponderazione comparativa tra interesse pubblico primario e interessi secondari.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_084",
    question: "In cosa differisce la 'Discrezionalità Tecnica' dalla discrezionalità amministrativa pura?",
    options: [
      { id: "A", text: "Nella discrezionalità tecnica l'amministrazione non compie una ponderazione di interessi politici o di opportunità, ma applica regole, parametri e cognizioni scientifiche o tecniche specialistiche suscettibili di margini di opinabilità (es. giudizio medico-legale di invalidità)" },
      { id: "B", text: "La discrezionalità tecnica riguarda solo l'installazione di condizionatori d'aria" },
      { id: "C", text: "La discrezionalità tecnica non è sindacabile da alcun giudice" },
      { id: "D", text: "Non vi è alcuna differenza sostanziale tra le due" }
    ],
    correctAnswerId: "A",
    explanation: "Mentre la discrezionalità amministrativa pura implica un giudizio di opportunità e comparazione di interessi, la discrezionalità tecnica implica un accertamento e una valutazione di fatti complessi alla luce di scienze specialistiche (medicina, ingegneria, economia).",
    hint: "Applicazione di cognizioni tecniche e scientifiche specialistiche senza ponderazione di interessi politici.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_085",
    question: "In quale tipologia di discrezionalità rientra il giudizio espresso dalla Commissione Medica dell'INPS per il riconoscimento dell'invalidità civile?",
    options: [
      { id: "A", text: "Discrezionalità tecnica" },
      { id: "B", text: "Discrezionalità amministrativa pura" },
      { id: "C", text: "Attività meramente vincolata senza alcuna valutazione" },
      { id: "D", text: "Atto politico insindacabile" }
    ],
    correctAnswerId: "A",
    explanation: "La valutazione della percentuale di riduzione della capacità lavorativa o dell'inabilità alla deambulazione costituisce tipica espressione di discrezionalità tecnica medico-legale, fondata sull'applicazione di tabelle scientifiche a situazioni cliniche complesse.",
    hint: "Discrezionalità tecnica di natura medico-legale.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_086",
    question: "Quale sindacato esercita il Giudice Amministrativo (TAR / Consiglio di Stato) sugli atti espressione di discrezionalità tecnica?",
    options: [
      { id: "A", text: "Un sindacato non più limitato alla mera verifica estrinseca di illogicità, ma esteso alla verifica dell'attendibilità tecnica, della correttezza dei criteri scientifici utilizzati e della congruità del procedimento applicativo, senza tuttavia sostituire il proprio giudizio opinabile a quello della PA" },
      { id: "B", text: "Nessun sindacato, essendo gli atti tecnici totalmente insindacabili" },
      { id: "C", text: "Un controllo di merito con riscrittura diretta del voto o del giudizio" },
      { id: "D", text: "La sola verifica che l'atto sia stato firmato prima di mezzogiorno" }
    ],
    correctAnswerId: "A",
    explanation: "La giurisprudenza ha superato il vecchio sindacato 'estrinseco': oggi il giudice amministrativo compie un controllo 'intrinseco' sull'attendibilità delle scienze impiegate e sulla ragionevolezza del metodo tecnico utilizzato dall'amministrazione.",
    hint: "Sindacato sull'attendibilità tecnica e correttezza dei criteri applicati senza sostituzione di merito.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_AMM_087",
    question: "Cos'è la 'Motivazione del Provvedimento Amministrativo' ai sensi dell'art. 3 della Legge 241/1990?",
    options: [
      { id: "A", text: "L'indicazione obbligatoria dei presupposti di fatto e delle ragioni giuridiche che hanno determinato la decisione dell'amministrazione, in relazione alle risultanze dell'istruttoria" },
      { id: "B", text: "La firma in calce del responsabile dell'ufficio" },
      { id: "C", text: "La sintesi biografica del dirigente che adotta l'atto" },
      { id: "D", text: "L'elenco degli stipendi erogati nell'ultimo mese" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 3 L. 241/90 impone che ogni provvedimento amministrativo sia motivato indicando i presupposti di fatto (circostanze accertate) e le ragioni giuridiche (norme applicate) poste a fondamento della decisione.",
    hint: "Presupposti di fatto e ragioni giuridiche in relazione all'istruttoria.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_088",
    question: "Per quali atti amministrativi l'art. 3, comma 2, della Legge 241/1990 esclude l'obbligo di motivazione?",
    options: [
      { id: "A", text: "Per gli atti normativi e per quelli a contenuto generale" },
      { id: "B", text: "Per i provvedimenti di diniego di una pensione" },
      { id: "C", text: "Per le sanzioni disciplinari ai dipendenti" },
      { id: "D", text: "Per i licenziamenti dei dirigenti pubblici" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 3, comma 2, L. 241/90 stabilisce che la motivazione non è richiesta per gli atti normativi (es. regolamenti) e per gli atti a contenuto generale (es. bandi di gara, piani regolatori, direttive generali).",
    hint: "Esclusa per atti normativi e atti a contenuto generale.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_089",
    question: "Cos'è la 'Motivazione per relationem' ammessa dall'art. 3, comma 3, della Legge 241/1990?",
    options: [
      { id: "A", text: "La motivazione risultante da un altro atto dell'amministrazione richiamato dalla decisione stessa, a condizione che l'atto richiamato sia indicato e reso disponibile (allegato o notificato) al destinatario" },
      { id: "B", text: "Una motivazione orale comunicata per telefono" },
      { id: "C", text: "La motivazione scritta in lingua latina" },
      { id: "D", text: "Una motivazione inventata dopo la notifica del ricorso" }
    ],
    correctAnswerId: "A",
    explanation: "La motivazione per relationem consente alla PA di rinviare ad atti istruttori già formati (es. verbali di commissione, relazioni tecniche), purché tali atti siano espressamente indicati e resi accessibili all'interessato.",
    hint: "Richiamo motivazionale ad altro atto reso disponibile all'interessato.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_090",
    question: "Quale forma di invalidità determina l'assoluto difetto di motivazione in un provvedimento amministrativo che ne è obbligatoriamente soggetto?",
    options: [
      { id: "A", text: "Annullabilità del provvedimento per violazione di legge (art. 3 e art. 21-octies L. 241/90) ed eccesso di potere" },
      { id: "B", text: "Nullità radicale dell'atto" },
      { id: "C", text: "Mera irregolarità non impugnabile" },
      { id: "D", text: "Inesistenza giuridica dello Stato" }
    ],
    correctAnswerId: "A",
    explanation: "La violazione dell'obbligo di motivazione integra una violazione di legge (art. 3 L. 241/90) e l'eccesso di potere per difetto istruttorio, comportando l'annullabilità dell'atto dinanzi al TAR entro il termine di 60 giorni.",
    hint: "Annullabilità per violazione di legge ed eccesso di potere.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_091",
    question: "Cosa stabilisce l'art. 21-quater della Legge 241/1990 in materia di 'Efficacia ed esecutività del provvedimento amministrativo'?",
    options: [
      { id: "A", text: "I provvedimenti amministrativi efficaci sono eseguiti immediatamente, salvo che sia diversamente stabilito dalla legge o dal provvedimento medesimo" },
      { id: "B", text: "Gli atti hanno efficacia solo dopo che tutti i cittadini li hanno approvati con referendum" },
      { id: "C", text: "Gli atti sono efficaci solo nei giorni di luna piena" },
      { id: "D", text: "L'efficacia è sempre subordinata al pagamento di una tassa al TAR" }
    ],
    correctAnswerId: "A",
    explanation: "L'esecutività è la caratteristica per cui il provvedimento amministrativo efficace produce immediatamente i suoi effetti ed è portato a esecuzione senza indugio, salvo i casi di sospensione cautelare motivata disposta dalla stessa PA.",
    hint: "Immediata esecuzione dei provvedimenti efficaci salvo diversa disposizione.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_092",
    question: "Per gravi motivi e per il tempo strettamente necessario, l'efficacia o l'esecuzione di un provvedimento amministrativo può essere sospesa dall'organo che lo ha emanato?",
    options: [
      { id: "A", text: "Sì, la sospensione può essere disposta per gravi motivi dall'organo che lo ha emanato o da altro organo previsto dalla legge, per il termine indicato nell'atto e comunque per un periodo non prorogabile più di una volta" },
      { id: "B", text: "No, una volta adottato un provvedimento non può essere sospeso per nessun motivo" },
      { id: "C", text: "Sì, ma solo con decreto del Presidente della Repubblica" },
      { id: "D", text: "Solo se il privato versa una cauzione pari al triplo del valore dell'atto" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 21-quater, comma 2, L. 241/90 riconosce alla PA il potere cautelare di sospensione dell'efficacia o dell'esecuzione dell'atto per gravi motivi, motivandone le ragioni e prefissando un termine certo.",
    hint: "Sospensione cautelare disposta per gravi motivi per un termine certo.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_093",
    question: "Quale termine di decadenza è previsto per impugnare un provvedimento amministrativo illegittimo dinanzi al Tribunale Amministrativo Regionale (TAR) con azione di annullamento (art. 29 Codice del Processo Amministrativo)?",
    options: [
      { id: "A", text: "Sessanta giorni dalla notificazione, comunicazione o piena conoscenza dell'atto" },
      { id: "B", text: "Trenta giorni" },
      { id: "C", text: "Centoventi giorni" },
      { id: "D", text: "Un anno solare" }
    ],
    correctAnswerId: "A",
    explanation: "L'azione di annullamento per violazione di legge, incompetenza ed eccesso di potere dinanzi al TAR si propone nel termine di decadenza di 60 giorni decorrenti dalla notificazione o dalla piena conoscenza dell'atto lesivo.",
    hint: "Termine decadenziale di 60 giorni dinanzi al TAR.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_094",
    question: "Entro quale termine può essere proposto il 'Ricorso Straordinario al Presidente della Repubblica' contro provvedimenti amministrativi definitivi?",
    options: [
      { id: "A", text: "Entro centoventi giorni dalla notificazione o piena conoscenza dell'atto" },
      { id: "B", text: "Entro sessanta giorni" },
      { id: "C", text: "Entro trenta giorni" },
      { id: "D", text: "Entro tre anni" }
    ],
    correctAnswerId: "A",
    explanation: "Il ricorso straordinario al Capo dello Stato (D.P.R. 1199/1971) è un rimedio giustiziale alternativo al ricorso al TAR: è ammesso solo per motivi di legittimità contro atti definitivi ed è proponibile nel più ampio termine di 120 giorni.",
    hint: "Termine di 120 giorni per ricorso straordinario al Presidente della Repubblica.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_095",
    question: "Cosa stabilisce il principio di 'Alternatività' tra Ricorso al TAR e Ricorso Straordinario al Presidente della Repubblica?",
    options: [
      { id: "A", text: "La proposizione del ricorso giurisdizionale al TAR preclude la proposizione del ricorso straordinario, e la proposizione del ricorso straordinario preclude il ricorso al TAR contro il medesimo atto (salva la trasposizione al TAR chiesta dai controinteressati)" },
      { id: "B", text: "I due ricorsi devono essere presentati obbligatoriamente nello stesso giorno" },
      { id: "C", text: "Se si perde al TAR si può sempre fare il ricorso straordinario" },
      { id: "D", text: "Non vi è alcuna alternatività potendo svolgersi contemporaneamente" }
    ],
    correctAnswerId: "A",
    explanation: "Una volta proposto il ricorso giurisdizionale al TAR non è più ammesso il ricorso straordinario al Capo dello Stato per il medesimo atto (electa una via non datur recursus ad alteram), fermo restando il diritto di opposizione e trasposizione del controinteressato.",
    hint: "Principio di alternatività: l'uno esclude l'altro contro lo stesso atto.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_096",
    question: "Cosa sono i 'Ricorsi Amministrativi Ordinari' disciplinati dal D.P.R. 24 novembre 1971, n. 1199?",
    options: [
      { id: "A", text: "Il Ricorso Gerarchico (proprio e improprio) e il Ricorso in Opposizione" },
      { id: "B", text: "Il Ricorso per Cassazione e il Ricorso alla Corte dei Conti" },
      { id: "C", text: "L'istanza di fallimento e il reclamo fallimentare" },
      { id: "D", text: "La querela penale e l'esposto anonimo" }
    ],
    correctAnswerId: "A",
    explanation: "I ricorsi amministrativi ordinari si distinguono in: 1) Ricorso gerarchico proprio (all'autorità superiore); 2) Ricorso gerarchico improprio (a un organo diverso ma privo di superiorità gerarchica previsto dalla legge); 3) Ricorso in opposizione (alla stessa autorità che ha emanato l'atto).",
    hint: "Ricorso gerarchico (proprio/improprio) e ricorso in opposizione.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_097",
    question: "Qual è il termine perentorio ordinario per la presentazione del Ricorso Gerarchico ai sensi del D.P.R. 1199/1971?",
    options: [
      { id: "A", text: "Trenta giorni dalla notificazione o dalla comunicazione dell'atto o da quando l'interessato ne abbia avuto piena conoscenza" },
      { id: "B", text: "Sessanta giorni" },
      { id: "C", text: "Quindici giorni" },
      { id: "D", text: "Novanta giorni" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 2 del D.P.R. 1199/1971, il ricorso gerarchico deve essere proposto all'organo superiore nel termine perentorio di 30 giorni.",
    hint: "Termine perentorio di 30 giorni per il ricorso gerarchico.",
    level: "base"
  },
  {
    id: "Q_DIR_AMM_098",
    question: "Cosa accade se l'organo gerarchico superiore non decide sul ricorso gerarchico entro il termine di 90 giorni dalla presentazione?",
    options: [
      { id: "A", text: "Il ricorso si intende respinto a tutti gli effetti (silenzio-rigetto), e contro il provvedimento impugnato è possibile proporre ricorso giurisdizionale al TAR o straordinario al Capo dello Stato" },
      { id: "B", text: "Il ricorso si intende accolto per silenzio assenso" },
      { id: "C", text: "L'atto impugnato scompare automaticamente dal mondo giuridico" },
      { id: "D", text: "Il funzionario che ha redatto l'atto originario viene sospeso" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 6 D.P.R. 1199/1971 stabilisce che, decorsi novanta giorni senza che sia stata comunicata la decisione, il ricorso si intende respinto e l'interessato può adire la via giurisdizionale impugnando l'atto originario.",
    hint: "Formazione del silenzio-rigetto dopo 90 giorni.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_099",
    question: "In cosa consiste la figura della 'Convalida' del provvedimento amministrativo viziato (art. 21-nonies, comma 2, Legge 241/1990)?",
    options: [
      { id: "A", text: "In un provvedimento di secondo grado con cui l'amministrazione sana con efficacia retroattiva un atto viziato da annullabilità, eliminando il vizio di legittimità sussistente (es. ratifica dell'incompetenza relativa da parte dell'organo competente)" },
      { id: "B", text: "Nel pagamento di una sanzione da parte del cittadino" },
      { id: "C", text: "Nell'annullamento con cancellazione totale dell'atto" },
      { id: "D", text: "Nel timbro postale apposto sulla busta" }
    ],
    correctAnswerId: "A",
    explanation: "La convalida è un atto di conservazione dell'azione amministrativa: sana retroattivamente il provvedimento affetto da vizio di annullabilità (rimovibile) purché sussistano ragioni di interesse pubblico ed entro un termine ragionevole.",
    hint: "Provvedimento di autotutela conservativa che sana retroattivamente un vizio di annullabilità.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_AMM_100",
    question: "Cos'è la 'Sanatoria' nel diritto amministrativo?",
    options: [
      { id: "A", text: "L'intervento tardivo di un atto o adempimento procedimentale omesso (es. acquisizione successiva di un'autorizzazione, nulla osta o parere favorevole che doveva precedere l'atto), che integra ex post la fattispecie rendendo l'atto pienamente legittimo" },
      { id: "B", text: "La distruzione di documenti compromettenti nell'archivio" },
      { id: "C", text: "Il perdono giudiziale concesso per reati associativi" },
      { id: "D", text: "L'acquisto di medicinali per l'infermeria di sede" }
    ],
    correctAnswerId: "A",
    explanation: "La sanatoria si verifica quando un atto della sequenza procedimentale, omesso nella fase istruttoria preliminare, viene adottato successivamente, colmando il vuoto procedimentale ed eliminando la causa di illegittimità.",
    hint: "Intervento successivo dell'atto o requisito originariamente omesso nella sequenza procedimentale.",
    level: "avanzato"
  }
];

const merged = [...existing, ...newQuestions];
fs.writeFileSync(targetFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Successfully added ${newQuestions.length} questions to amministrativo.json. Total questions: ${merged.length}`);
