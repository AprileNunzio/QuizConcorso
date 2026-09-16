const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/db/master_bank/diritto/anticorruzione.json');
const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

const newQuestions = [
  {
    id: "Q_DIR_ANTI_051",
    question: "Cos'è il Piano Nazionale Anticorruzione (PNA) adottato dall'Autorità Nazionale Anticorruzione (ANAC) ai sensi della Legge 190/2012?",
    options: [
      { id: "A", text: "L'atto di indirizzo strategico nazionale che contiene gli obiettivi, le linee guida e i criteri generali per l'elaborazione dei piani anticorruzione e della sezione anticorruzione del PIAO da parte di tutte le pubbliche amministrazioni" },
      { id: "B", text: "Un elenco dei funzionari condannati per corruzione" },
      { id: "C", text: "Il bilancio consuntivo dell'ANAC" },
      { id: "D", text: "Un trattato internazionale di estradizione con paesi extraeuropei" }
    ],
    correctAnswerId: "A",
    explanation: "Il PNA è lo strumento quadro dell'ANAC: ha durata triennale ed è aggiornato annualmente, fornendo indirizzi metodologici vincolanti per la gestione del rischio e la mappatura dei processi in tutte le pubbliche amministrazioni.",
    hint: "Atto generale di indirizzo dell'ANAC per guidare le amministrazioni nella prevenzione della corruzione.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_052",
    question: "Quale responsabilità grava sul Responsabile della Prevenzione della Corruzione e della Trasparenza (RPCT) in caso di commissione di un reato di corruzione all'interno dell'amministrazione accertato con sentenza passata in giudicato (art. 1, comma 12, L. 190/2012)?",
    options: [
      { id: "A", text: "Risponde per responsabilità dirigenziale, disciplinare ed erariale per danno all'immagine della PA, salvo che provi di aver predisposto il piano prima del fatto e di aver vigilato sul suo funzionamento e sulla sua osservanza" },
      { id: "B", text: "Viene arrestato automaticamente senza possibilità di difesa" },
      { id: "C", text: "Non risponde mai in nessun caso di reati commessi da altri" },
      { id: "D", text: "Risponde solo se è parente del dipendente corrotto" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 12, L. 190/2012 prevede una presunzione di colpa in capo al RPCT: risponde per responsabilità dirigenziale ed erariale (con revoca dell'incarico e decurtazione retributiva), a meno che non dimostri l'adeguatezza del piano e la concreta vigilanza svolta.",
    hint: "Responsabilità dirigenziale ed erariale salvo prova contraria di adeguatezza del piano e vigilanza.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_053",
    question: "Cosa stabilisce l'art. 1 del D.Lgs. 14 marzo 2013, n. 33 in merito al principio della 'Trasparenza' nella Pubblica Amministrazione?",
    options: [
      { id: "A", text: "La trasparenza è intesa come accessibilità totale dei dati e documenti detenuti dalle pubbliche amministrazioni, allo scopo di tutelare i diritti dei cittadini, promuovere la partecipazione e favorire forme diffuse di controllo sul perseguimento delle funzioni istituzionali e sull'utilizzo delle risorse pubbliche" },
      { id: "B", text: "La trasparenza riguarda solo le dichiarazioni dei redditi dei parlamentari" },
      { id: "C", text: "L'obbligo di consentire l'accesso agli uffici solo attraverso pareti di vetro" },
      { id: "D", text: "La pubblicazione sul sito web delle foto personali dei dipendenti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1 D.Lgs. 33/2013 definisce la trasparenza come 'accessibilità totale', finalizzata a garantire il controllo diffuso dei cittadini sull'azione amministrativa e sull'impiego delle risorse della collettività.",
    hint: "Accessibilità totale per favorire il controllo diffuso e la partecipazione dei cittadini.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_054",
    question: "In cosa differisce l' 'Accesso Civico Semplice' (art. 5, comma 1, D.Lgs. 33/2013) dall' 'Accesso Civico Generalizzato / FOIA' (art. 5, comma 2, D.Lgs. 33/2013)?",
    options: [
      { id: "A", text: "L'accesso civico semplice riguarda documenti, informazioni o dati per i quali sussiste un obbligo di pubblicazione di legge non adempiuto dall'ente; l'accesso civico generalizzato (FOIA) riguarda dati e documenti ulteriori detenuti dalla PA, consentito a chiunque senza obbligo di motivazione né titolarità di interesse qualificato" },
      { id: "B", text: "L'accesso civico semplice è a pagamento, il FOIA è gratuito" },
      { id: "C", text: "L'accesso civico generalizzato può essere esercitato solo dai magistrati" },
      { id: "D", text: "Non vi è alcuna differenza, sono due nomi per la stessa procedura" }
    ],
    correctAnswerId: "A",
    explanation: "Accesso civico semplice = rimedia a un'omessa pubblicazione obbligatoria nella sezione Amministrazione Trasparente. Accesso civico generalizzato (Freedom of Information Act - FOIA) = diritto universale di conoscere qualsiasi documento pubblico non soggetto a pubblicazione obbligatoria.",
    hint: "Semplice = per atti soggetti a pubblicazione omessa; Generalizzato (FOIA) = per dati ulteriori detenuti dalla PA.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_055",
    question: "Per esercitare il diritto di Accesso Civico Generalizzato (FOIA) ex art. 5, comma 2, D.Lgs. 33/2013 è necessario che il richiedente sia titolare di un interesse diretto, concreto e attuale?",
    options: [
      { id: "A", text: "No, chiunque ha diritto di accedere ai dati e ai documenti detenuti dalle PA senza necessità di motivare la richiesta e senza dover dimostrare la titolarità di un interesse qualificato" },
      { id: "B", text: "Sì, è necessaria la medesima motivazione dell'accesso documentale ex L. 241/1990" },
      { id: "C", text: "Solo se il richiedente è cittadino straniero non comunitario" },
      { id: "D", text: "È richiesta l'autorizzazione preventiva del Tribunale" }
    ],
    correctAnswerId: "A",
    explanation: "Il FOIA italiano si caratterizza per la legittimazione universale: spetta a chiunque senza obbligo di motivare e senza dover vantare un interesse qualificato o differenziato rispetto alla collettività.",
    hint: "Nessun obbligo di motivazione né di dimostrare un interesse qualificato (legittimazione universale).",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_056",
    question: "Quali sono le 'Eccezioni Assolute' che precludono inderogabilmente l'Accesso Civico Generalizzato ai sensi dell'art. 5-bis, comma 3, del D.Lgs. 33/2013?",
    options: [
      { id: "A", text: "I casi di segreto di Stato e gli altri casi di divieto di accesso o divulgazione previsti espressamente dalla legge (es. procedimenti tributari, attività diretta all'emanazione di atti normativi o generali)" },
      { id: "B", text: "Tutti gli atti relativi a concorsi pubblici già conclusi" },
      { id: "C", text: "Le spese per la cancelleria degli uffici" },
      { id: "D", text: "I bilanci degli enti pubblici non economici" }
    ],
    correctAnswerId: "A",
    explanation: "I limiti assoluti sono stabiliti per legge a presidio di interessi statali primari: segreto di Stato, divieti espressi di ostensione, procedimenti tributari (art. 24 L. 241/90 richiamato dall'art. 5-bis, comma 3, D.Lgs. 33/2013).",
    hint: "Segreto di Stato e divieti espressi di divulgazione previsti dalla legge.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_057",
    question: "Quali sono i limiti qualificati ('Eccezioni Relative') posti a tutela degli interessi pubblici e privati che giustificano il rifiuto motivato dell'accesso civico generalizzato (art. 5-bis, commi 1 e 2, D.Lgs. 33/2013)?",
    options: [
      { id: "A", text: "La tutela della sicurezza pubblica, difesa nazionale, relazioni internazionali, politica monetaria, investigazioni penali; e per gli interessi privati: protezione dei dati personali, libertà e segretezza della corrispondenza, interessi economici e commerciali/proprietà intellettuale" },
      { id: "B", text: "Il semplice fastidio arrecato agli impiegati per la ricerca del file" },
      { id: "C", text: "Il fatto che il documento contenga critiche all'operato del dirigente" },
      { id: "D", text: "La mancanza di carta per la stampante dell'ufficio" }
    ],
    correctAnswerId: "A",
    explanation: "I limiti relativi impongono alla PA di verificare se la divulgazione arrechi un pregiudizio concreto e rilevante a interessi pubblici (sicurezza, relazioni internazionali, indagini penali) o privati (privacy, segreti d'impresa, proprietà industriale).",
    hint: "Interessi pubblici (sicurezza, difesa) e privati (dati personali, segreto commerciale) con prova del pregiudizio concreto.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_058",
    question: "Quale procedura deve seguire l'amministrazione in caso di istanza di accesso civico generalizzato che coinvolga dati personali di soggetti 'controinteressati' (art. 5, comma 5, D.Lgs. 33/2013)?",
    options: [
      { id: "A", text: "Deve notificare tempestivamente l'istanza ai controinteressati mediante raccomandata o PEC, i quali hanno 10 giorni dalla ricezione per presentare motivata opposizione all'accesso; i termini di conclusione sono sospesi fino all'eventuale opposizione" },
      { id: "B", text: "Deve rifiutare immediatamente l'accesso senza avvisare nessuno" },
      { id: "C", text: "Deve concedere l'accesso ignorando i controinteressati" },
      { id: "D", text: "Deve pubblicare l'indirizzo di casa dei controinteressati sui social" }
    ],
    correctAnswerId: "A",
    explanation: "L'amministrazione è obbligata a tutelare il contraddittorio con i controinteressati: invia loro comunicazione e assegna 10 giorni per presentare opposizione motivata a tutela dei loro dati personali o commerciali.",
    hint: "Notifica ai controinteressati con termine di 10 giorni per proporre motivata opposizione.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_059",
    question: "Entro quale termine deve concludersi il procedimento di accesso civico generalizzato ai sensi dell'art. 5, comma 6, del D.Lgs. 33/2013?",
    options: [
      { id: "A", text: "Con provvedimento espresso e motivato entro trenta giorni dalla presentazione dell'istanza (salvo la sospensione di dieci giorni per la notifica ai controinteressati)" },
      { id: "B", text: "Entro novanta giorni" },
      { id: "C", text: "Entro sei mesi" },
      { id: "D", text: "Entro 48 ore lavorative" }
    ],
    correctAnswerId: "A",
    explanation: "Il procedimento FOIA deve concludersi con provvedimento espresso e motivato nel termine celere di 30 giorni (sospeso per il tempo accordato ai controinteressati per opporsi).",
    hint: "Provvedimento espresso e motivato entro trenta giorni.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_060",
    question: "Cosa può fare il richiedente in caso di diniego totale o parziale dell'accesso civico generalizzato o di mancata risposta nei termini (art. 5, commi 7 e 8, D.Lgs. 33/2013)?",
    options: [
      { id: "A", text: "Può presentare richiesta di riesame al Responsabile della Prevenzione della Corruzione e della Trasparenza (RPCT), che decide con provvedimento motivato entro venti giorni, ferma restando la possibilità di adire il TAR o il Garante Privacy" },
      { id: "B", text: "Non vi è alcuna tutela contro le decisioni della PA" },
      { id: "C", text: "Può ricorrere solo alla Corte dell'Aia" },
      { id: "D", text: "Può occupare gli uffici dell'amministrazione con la forza" }
    ],
    correctAnswerId: "A",
    explanation: "La legge prevede il rimedio giustiziale interno gratuito della richiesta di riesame al RPCT, il quale decide entro 20 giorni (sentito il Garante per la protezione dei dati personali qualora il diniego sia motivato a tutela della privacy).",
    hint: "Richiesta di riesame al RPCT che decide entro 20 giorni (o ricorso al TAR).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_061",
    question: "Cos'è il 'Registro degli Accessi' raccomandato dalle Linee Guida ANAC n. 1309/2016 per tutte le pubbliche amministrazioni?",
    options: [
      { id: "A", text: "L'elenco pubblicato e periodicamente aggiornato contenente l'elenco delle richieste di accesso pervenute (documentale, civico semplice e FOIA), l'oggetto della richiesta, la data e l'esito della decisione (accoglimento, diniego parziale, diniego totale)" },
      { id: "B", text: "Il registro dei visitatori che entrano nel portone dell'ufficio" },
      { id: "C", text: "L'elenco dei siti internet visitati dai dipendenti durante la pausa" },
      { id: "D", text: "La lista dei candidati ammessi alle prove orali" }
    ],
    correctAnswerId: "A",
    explanation: "Il Registro degli Accessi garantisce la trasparenza e l'omogeneità dei comportamenti della PA: elenca tutte le istanze di accesso e il relativo esito oscurando i dati personali, consentendo ai cittadini di verificare la prassi applicativa dell'ente.",
    hint: "Elenco pubblico aggiornato delle istanze di accesso presentate con oggetto ed esito della decisione.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_062",
    question: "Quale sezione speciale deve essere obbligatoriamente presente sulla homepage del sito internet istituzionale dell'INPS e di tutte le amministrazioni pubbliche ex art. 9 D.Lgs. 33/2013?",
    options: [
      { id: "A", text: "La sezione denominata 'Amministrazione Trasparente'" },
      { id: "B", text: "La sezione denominata 'Offerte Commerciali'" },
      { id: "C", text: "La sezione denominata 'Curiosità e Notizie'" },
      { id: "D", text: "La sezione 'Bacheca Solidale'" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 9 D.Lgs. 33/2013 impone a tutte le amministrazioni di collocare nella prima pagina del sito istituzionale un'apposita sezione denominata 'Amministrazione Trasparente', articolata secondo le sottosezioni stabilite dall'allegato alla norma.",
    hint: "Sezione 'Amministrazione Trasparente'.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_063",
    question: "Qual è la durata ordinaria di pubblicazione obbligatoria dei dati e delle informazioni nella sezione 'Amministrazione Trasparente' ai sensi dell'art. 8, comma 3, del D.Lgs. 33/2013?",
    options: [
      { id: "A", text: "Cinque anni, decorrenti dal 1° gennaio dell'anno successivo a quello da cui decorre l'obbligo di pubblicazione, salvi i diversi termini previsti dalla legge" },
      { id: "B", text: "Sei mesi non rinnovabili" },
      { id: "C", text: "A tempo indeterminato per tutta la vita dell'ente" },
      { id: "D", text: "Trenta giorni solari" }
    ],
    correctAnswerId: "A",
    explanation: "La regola generale di retention stabilisce che i dati pubblicati per obbligo di trasparenza rimangano accessibili per 5 anni dal 1° gennaio successivo alla pubblicazione; decorsi i 5 anni i dati sono rimossi o conservati secondo le regole dell'accesso documentale ordinario.",
    hint: "Cinque anni dal 1° gennaio dell'anno successivo.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_064",
    question: "Cosa stabilisce l'art. 14 del D.Lgs. 33/2013 in merito agli obblighi di pubblicazione concernenti i titolari di incarichi politici e di amministrazione o di direzione e i dirigenti?",
    options: [
      { id: "A", text: "L'obbligo di pubblicazione dell'atto di nomina o proclamazione, del curriculum vitae, dei compensi di qualsiasi natura connessi all'assunzione della carica, dei dati relativi all'assunzione di altre cariche e della situazione patrimoniale (nei limiti fissati dalla Consulta con sent. 20/2019)" },
      { id: "B", text: "La segretezza totale di qualsiasi compenso o indennità" },
      { id: "C", text: "La pubblicazione dei soli titoli nobiliari" },
      { id: "D", text: "La pubblicazione del codice pin delle carte di credito personali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 14 impone la trasparenza su curricula, compensi e gettoni dei vertici e dei dirigenti; la Corte Costituzionale (sent. 20/2019) ha modulato la pubblicazione della situazione patrimoniale complessiva limitandola ai soli dirigenti apicali.",
    hint: "Pubblicazione di curricula, compensi, altre cariche e situazione reddituale/patrimoniale.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_065",
    question: "Cos'è l' 'Inconferibilità' di incarichi nella Pubblica Amministrazione ai sensi del D.Lgs. 8 aprile 2013, n. 39?",
    options: [
      { id: "A", text: "La preclusione, permanente o temporanea, a conferire determinati incarichi amministrativi o dirigenziali a coloro che abbiano riportato condanne penali per reati contro la PA ovvero che abbiano svolto incarichi politici o cariche in enti di diritto privato regolati o finanziati dalla PA" },
      { id: "B", text: "L'obbligo di accettare qualsiasi incarico senza stipendio" },
      { id: "C", text: "La facoltà di rifiutare il lavoro durante le giornate di pioggia" },
      { id: "D", text: "L'impossibilità di conferire la laurea ai residenti all'estero" }
    ],
    correctAnswerId: "A",
    explanation: "L'inconferibilità (D.Lgs. 39/2013) è una causa ostativa assoluta che impedisce ab origine l'assunzione di incarichi dirigenziali o di vertice in caso di condanna penale o di provenienza politica/privata recente (periodi di 'cooling-off').",
    hint: "Preclusione temporanea o permanente all'assunzione di incarichi per condanne o cariche pregresse.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_066",
    question: "In cosa differisce l' 'Incompatibilità' (D.Lgs. 39/2013) rispetto all'inconferibilità?",
    options: [
      { id: "A", text: "L'incompatibilità non preclude l'assunzione dell'incarico all'origine, ma comporta l'obbligo per l'interessato di scegliere, entro il termine perentorio di 15 giorni, tra il mantenimento dell'incarico pubblico e lo svolgimento di altre cariche o attività professionali incompatibili" },
      { id: "B", text: "L'incompatibilità è una sanzione penale con reclusione" },
      { id: "C", text: "Non vi è alcuna differenza, sono termini perfettamente sinonimi" },
      { id: "D", text: "L'incompatibilità si applica solo per un'ora al giorno" }
    ],
    correctAnswerId: "A",
    explanation: "Inconferibilità = vizio genetico che rende nullo l'atto di nomina. Incompatibilità = coesistenza di due cariche durante il mandato che impone l'esercizio dell'opzione entro 15 giorni a pena di decadenza dall'incarico conferito.",
    hint: "L'incompatibilità impone l'obbligo di opzione entro 15 giorni a pena di decadenza.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_067",
    question: "Cosa comporta l'atto di conferimento di un incarico dirigenziale adottato in violazione delle disposizioni del D.Lgs. 39/2013 in materia di inconferibilità?",
    options: [
      { id: "A", text: "L'atto è nullo di diritto e i componenti dell'organo che lo hanno conferito non possono per tre mesi conferire gli incarichi di loro competenza" },
      { id: "B", text: "L'atto è sanabile con il consenso del lavoratore" },
      { id: "C", text: "L'amministrazione deve pagare un premio al soggetto nominato" },
      { id: "D", text: "L'atto resta valido purché non sia impugnato entro 5 giorni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 17 e l'art. 18 del D.Lgs. 39/2013 stabiliscono la nullità radicale della nomina e una sanzione interdittiva per l'organo conferente (divieto di conferire incarichi per 3 mesi).",
    hint: "Nullità di diritto della nomina e divieto trimestrale di nomina per i responsabili.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_ANTI_068",
    question: "Quale ruolo svolge la 'Rotazione del Personale' nelle misure di prevenzione della corruzione (Legge 190/2012 e PNA)?",
    options: [
      { id: "A", text: "Una misura organizzativa fondamentale finalizzata a evitare che un dipendente o dirigente consolidi posizioni di potere e relazioni continuative con determinati utenti o imprese nelle aree a più elevato rischio corruttivo (es. acquisti, concessioni, erogazioni contributi)" },
      { id: "B", text: "Un esercizio fisico da svolgere alla scrivania ogni mattina" },
      { id: "C", text: "La sostituzione forzata dei computer ogni sei mesi" },
      { id: "D", text: "L'obbligo di cambiare scrivania ogni due ore" }
    ],
    correctAnswerId: "A",
    explanation: "La rotazione (ordinaria del personale nelle aree a rischio e straordinaria in caso di avvio di procedimenti penali o disciplinari) è una delle principali misure oggettive per prevenire il radicamento di rapporti opachi tra dipendenti e soggetti esterni.",
    hint: "Misura preventiva per evitare la concentrazione e il consolidamento di posizioni di potere opache nelle aree a rischio.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_069",
    question: "Cos'è la 'Rotazione Straordinaria' del personale pubblico prevista dall'art. 16, comma 1, lett. l-quater, del D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "Il trasferimento obbligatorio del dipendente ad altro ufficio o servizio a seguito dell'avvio di procedimenti penali o disciplinari per condotte di natura corruttiva" },
      { id: "B", text: "La mobilità volontaria per cambio di residenza" },
      { id: "C", text: "Il lavoro straordinario notturno svolto a turno" },
      { id: "D", text: "La rotazione delle ferie nei mesi estivi" }
    ],
    correctAnswerId: "A",
    explanation: "La rotazione straordinaria è una misura cautelare interna obbligatoria: scatta in presenza di indagini penali o procedimenti disciplinari per reati contro la PA, allontanando il dipendente dall'area a rischio a presidio del prestigio e dell'imparzialità dell'ente.",
    hint: "Misura cautelare obbligatoria in caso di avvio di procedimenti penali o disciplinari per corruzione.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_070",
    question: "Quale compito di vigilanza è attribuito all'ANAC in merito ai contratti pubblici e agli appalti delle pubbliche amministrazioni (D.Lgs. 36/2023)?",
    options: [
      { id: "A", text: "Vigila sui contratti pubblici di lavori, servizi e forniture, sulla conformità alla disciplina di settore, sulla trasparenza delle procedure di gara e sulla prevenzione di fenomeni corruttivi e di infiltrazioni criminali, gestendo la Banca Dati Nazionale dei Contratti Pubblici (BDNCP)" },
      { id: "B", text: "Stabilisce i prezzi di vendita del carburante per lo Stato" },
      { id: "C", text: "Svolge compiti di polizia doganale" },
      { id: "D", text: "Finanzia direttamente gli appalti pubblici con fondi propri" }
    ],
    correctAnswerId: "A",
    explanation: "L'ANAC vigila sul mercato dei contratti pubblici per garantire trasparenza, concorrenza e legalità; con il nuovo Codice dei Contratti Pubblici (D.Lgs. 36/2023) governa la digitalizzazione del ciclo di vita dei contratti tramite la BDNCP e il fascicolo virtuale dell'operatore economico (FVOE).",
    hint: "Vigilanza sui contratti pubblici e gestione della Banca Dati Nazionale dei Contratti Pubblici (BDNCP).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_071",
    question: "Cos'è il 'Fascicolo Virtuale dell'Operatore Economico' (FVOE) gestito dall'ANAC per la verifica dei requisiti nelle gare pubbliche?",
    options: [
      { id: "A", text: "La piattaforma digitale interoperabile che consente alle stazioni appaltanti di verificare in tempo reale i requisiti generali e speciali delle imprese partecipanti (DURC, casellario giudiziale, regolarità fiscale, antimafia)" },
      { id: "B", text: "Un archivio cartaceo depositato presso ciascun comune" },
      { id: "C", text: "Il profilo social network delle imprese commerciali" },
      { id: "D", text: "Una cartella clinica dei dirigenti aziendali" }
    ],
    correctAnswerId: "A",
    explanation: "Il FVOE è uno dei pilastri della digitalizzazione degli appalti (D.Lgs. 36/2023): centralizza e rende accessibili i certificati attestanti il possesso dei requisiti di partecipazione alle gare (compreso il DURC rilasciato dall'INPS).",
    hint: "Piattaforma digitale per la verifica telematica centralizzata dei requisiti delle imprese.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_072",
    question: "Cos'è il 'Patto di Integrità' che le amministrazioni possono richiedere ai concorrenti nelle procedure di affidamento di contratti pubblici?",
    options: [
      { id: "A", text: "Un accordo obbligatorio con cui l'amministrazione e i partecipanti alla gara si impegnano reciprocamente al rispetto dei principi di lealtà, trasparenza e correttezza, prevedendo specifiche sanzioni ed esclusione dalla gara in caso di violazione o accordi corruttivi" },
      { id: "B", text: "Un contratto di assicurazione contro gli incendi" },
      { id: "C", text: "La dichiarazione di amicizia tra il sindaco e l'imprenditore" },
      { id: "D", text: "Un prestito bancario erogato dalla stazione appaltante" }
    ],
    correctAnswerId: "A",
    explanation: "Il Patto di Integrità (previsto dalla L. 190/2012 e dal Codice dei Contratti) vincola stazione appaltante e concorrenti all'osservanza di rigide clausole anticorruzione; il rifiuto di sottoscrizione o la sua violazione comporta l'esclusione immediata dalla procedura.",
    hint: "Accordo reciproco di lealtà e trasparenza la cui violazione comporta l'esclusione dalla gara.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_073",
    question: "In caso di mancata o incompleta comunicazione delle informazioni e dei dati da pubblicare obbligatoriamente ex D.Lgs. 33/2013, quale potere sanzionatorio compete all'ANAC?",
    options: [
      { id: "A", text: "L'ANAC ordina all'amministrazione l'adempimento entro un termine perentorio e, in caso di mancata pubblicazione di dati specifici (es. patrimoniali), può irrogare sanzioni amministrative pecuniarie a carico del responsabile (da 500 a 10.000 euro)" },
      { id: "B", text: "L'ANAC può arrestare i dipendenti dell'ufficio" },
      { id: "C", text: "L'ANAC ordina lo scioglimento immediato dell'ente" },
      { id: "D", text: "L'ANAC non ha alcun potere sanzionatorio" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 45 e 47 D.Lgs. 33/2013, l'ANAC esercita poteri di ordine nei confronti dell'ente inadempiente e può irrogare direttamente sanzioni pecuniarie per omessa pubblicazione di dati sensibili sulla trasparenza.",
    hint: "Ordine di adempimento e sanzioni amministrative pecuniarie dirette da 500 a 10.000 euro.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_074",
    question: "Quale principio stabilisce l'ANAC in ordine al riutilizzo dei dati pubblicati nella sezione 'Amministrazione Trasparente'?",
    options: [
      { id: "A", text: "I dati sono pubblicati in formato aperto (open data) e sono liberamente riutilizzabili da chiunque per qualsiasi fine, anche commerciale, nel rispetto delle norme sulla protezione dei dati personali" },
      { id: "B", text: "È fatto divieto assoluto di scaricare o leggere i file pubblicati" },
      { id: "C", text: "I dati possono essere consultati solo a pagamento previa autorizzazione prefettizia" },
      { id: "D", text: "I dati possono essere letti solo da funzionari pubblici laureati" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 7 D.Lgs. 33/2013 stabilisce che i documenti, le informazioni e i dati oggetto di pubblicazione obbligatoria sono resi disponibili in formato aperto (open data), riutilizzabili senza ulteriori restrizioni salvo l'obbligo di citare la fonte e tutelare la privacy.",
    hint: "Formato aperto (open data) e libero riutilizzo nel rispetto della protezione dei dati.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_075",
    question: "Chi adotta la 'Sezione Rischi Corruttivi e Trasparenza' all'interno del PIAO dell'INPS?",
    options: [
      { id: "A", text: "Il Consiglio di Amministrazione dell'INPS, su proposta del Responsabile della Prevenzione della Corruzione e della Trasparenza (RPCT)" },
      { id: "B", text: "Il più giovane tra i funzionari PECS" },
      { id: "C", text: "I fornitori esterni di servizi informatici" },
      { id: "D", text: "La Corte dei Conti con propria sentenza" }
    ],
    correctAnswerId: "A",
    explanation: "La sottosezione Anticorruzione e Trasparenza del PIAO (che ha sostituito il PTPCT) è predisposta dal RPCT e sottoposta all'approvazione formale dell'organo di indirizzo politico-amministrativo dell'ente (il CdA dell'INPS).",
    hint: "Adottata dal CdA su proposta motivata del RPCT.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_076",
    question: "Cosa si intende per 'Conflitto di Interessi Potenziale' nella Pubblica Amministrazione?",
    options: [
      { id: "A", text: "Una situazione in cui l'interesse personale del dipendente (anche non patrimoniale) potrebbe in astratto divergere dall'interesse pubblico primario o apparire idoneo a condizionarne l'imparzialità del giudizio" },
      { id: "B", text: "Una rissa fisica tra due dipendenti dell'ufficio" },
      { id: "C", text: "La richiesta di ferie nello stesso giorno da parte di due colleghi" },
      { id: "D", text: "Una contestazione sindacale sui buoni pasto" }
    ],
    correctAnswerId: "A",
    explanation: "La legge anticorruzione e il codice di comportamento estendono l'obbligo di astensione anche al conflitto solo potenziale o apparente: è sufficiente il pericolo astratto che l'interesse privato influenzi la serenità e l'imparzialità della decisione.",
    hint: "Situazione in cui l'interesse privato appare in astratto idoneo a minacciare l'imparzialità del funzionario.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_077",
    question: "Quale effetto produce la violazione dell'obbligo di astensione da parte del funzionario in situazione di conflitto di interessi sull'atto amministrativo adottato?",
    options: [
      { id: "A", text: "L'atto è viziato da illegittimità per eccesso di potere (disparità o sviamento) e violazione di legge (art. 6-bis L. 241/90), con conseguente annullabilità dell'atto e responsabilità disciplinare dell'agente" },
      { id: "B", text: "L'atto resta perfettamente valido e irrevocabile" },
      { id: "C", text: "L'atto diventa una legge dello Stato" },
      { id: "D", text: "Comporta unicamente la revoca del computer di servizio" }
    ],
    correctAnswerId: "A",
    explanation: "L'adozione di un atto in conflitto di interessi vizia l'atto amministrativo per violazione di legge ed eccesso di potere, rendendolo annullabile dal giudice o in autotutela, oltre a configurare un illecito disciplinare grave.",
    hint: "Annullabilità del provvedimento per eccesso di potere e illecito disciplinare del dipendente.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_078",
    question: "Cos'è la 'Trasparenza Proattiva' promossa dalle recenti linee guida ANAC?",
    options: [
      { id: "A", text: "La pubblicazione volontaria e organizzata da parte della PA di dati, informazioni e documenti ulteriori rispetto a quelli obbligatori per legge, per favorire una conoscenza ancora più profonda dei servizi erogati e del valore pubblico generato" },
      { id: "B", text: "L'obbligo per i dipendenti di pubblicare la propria dichiarazione dei redditi sui social" },
      { id: "C", text: "La vendita a pagamento delle circolari ministeriali" },
      { id: "D", text: "L'installazione di webcam nelle case degli impiegati" }
    ],
    correctAnswerId: "A",
    explanation: "La trasparenza proattiva va oltre il mero adempimento formale degli obblighi del D.Lgs. 33/2013: consiste nell'iniziativa spontanea dell'amministrazione di rendere fruibili dataset aperti, analisi statistiche e monitoraggi per rendere i cittadini pienamente partecipi dell'attività pubblica.",
    hint: "Pubblicazione volontaria e aperta di dati ulteriori oltre gli obblighi minimi di legge.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_079",
    question: "Nel modello di Whistleblowing ex D.Lgs. 24/2023, quando è consentita la 'Divulgazione Pubblica' tramite la stampa o i social network?",
    options: [
      { id: "A", text: "Solo in casi eccezionali e tassativi: quando la persona ha già effettuato segnalazioni interna ed esterna senza riscontro nei termini, o quando vi è un fondato motivo di ritenere che la violazione costituisca un pericolo imminente o palese per il pubblico interesse, ovvero rischio di ritorsioni o occultamento delle prove" },
      { id: "B", text: "In qualsiasi momento a scelta libera del dipendente" },
      { id: "C", text: "Solo dietro compenso da parte delle testate giornalistiche" },
      { id: "D", text: "È sempre severamente vietata e punita penalmente in ogni caso" }
    ],
    correctAnswerId: "A",
    explanation: "La divulgazione pubblica (tramite media) è ammessa come rimedio sussidiario estremo solo quando i canali interni ed esterni non hanno funzionato, oppure di fronte a emergenze manifeste o pericoli imminenti per la salute, la sicurezza o l'incolumità pubblica.",
    hint: "Ammessa solo dopo il fallimento dei canali ordinari o per pericolo imminente/palese per l'interesse pubblico.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_ANTI_080",
    question: "Quale sanzione si applica a chi effettua una segnalazione di Whistleblowing con dolo o colpa grave sapendo che i fatti segnalati sono totalmente falsi?",
    options: [
      { id: "A", text: "Perde totalmente la protezione contro le ritorsioni e risponde penalmente per calunnia o diffamazione, nonché sul piano disciplinare e per responsabilità risarcitoria civile" },
      { id: "B", text: "Mantiene la protezione anonima e non è mai punibile" },
      { id: "C", text: "Riceve un encomio formale dall'amministrazione" },
      { id: "D", text: "Ha diritto a un trasferimento di sede a spese dell'ente" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.Lgs. 24/2023 protegge la buona fede e non il mendacio: chi segnala fatti falsi con dolo perde qualsiasi scudo protettivo, incorrendo nei reati di calunnia (art. 368 c.p.) o diffamazione e in licenziamento disciplinare.",
    hint: "Perdita delle tutele e responsabilità penale per calunnia/diffamazione e disciplinare.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_081",
    question: "Cos'è la 'Mappatura dei Processi' nell'analisi del rischio corruttivo?",
    options: [
      { id: "A", text: "La scomposizione e l'analisi dettagliata di tutte le attività e procedimenti svolti dall'ente per identificare le fasi sensibili, le criticità organizzative e i punti di vulnerabilità a fenomeni di illegalità o cattiva amministrazione" },
      { id: "B", text: "La cartografia geografica degli edifici dell'amministrazione" },
      { id: "C", text: "L'elenco degli indirizzi IP dei computer dell'ufficio" },
      { id: "D", text: "Il percorso stradale compiuto dai furgoni postali" }
    ],
    correctAnswerId: "A",
    explanation: "La mappatura dei processi è il presupposto metodologico del risk management pubblico: analizza l'iter logico-operativo di ogni procedimento per quantificare la vulnerabilità e pianificare contromisure adeguate.",
    hint: "Identificazione delle attività dell'ente per analizzarne i punti di vulnerabilità corruttiva.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_082",
    question: "Quali aree di attività delle pubbliche amministrazioni sono considerate a 'Rischio Corruttivo Obbligatorio/Generale' dal Piano Nazionale Anticorruzione?",
    options: [
      { id: "A", text: "Acquisizione di beni, servizi e lavori (appalti); concessione ed erogazione di sovvenzioni, contributi e sussidi; autorizzazioni e concessioni; gestione delle entrate e del patrimonio; controlli e verifiche ispettive; reclutamento e progressioni del personale" },
      { id: "B", text: "Esclusivamente l'acquisto dei giornali per l'emeroteca" },
      { id: "C", text: "Solo la pulizia delle finestre della sede" },
      { id: "D", text: "La gestione delle macchinette distributrici di bevande" }
    ],
    correctAnswerId: "A",
    explanation: "Il PNA individua come aree obbligatorie a rischio quelle in cui si gestiscono risorse economiche, si concedono vantaggi a privati o si esercitano poteri di controllo: contratti pubblici, erogazione prestazioni, concorsi e vigilanza.",
    hint: "Appalti, contributi/sussidi, autorizzazioni, gestione entrate/patrimonio, ispezioni e concorsi.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_083",
    question: "In materia di trasparenza, cosa sono i 'Dati Aperti' (Open Data) disciplinati dal Codice dell'Amministrazione Digitale (D.Lgs. 82/2005)?",
    options: [
      { id: "A", text: "Dati disponibili in formati aperti, leggibili meccanicamente da computer (machine-readable), provvisti di metadati e rilasciati con licenze che ne consentono il libero utilizzo e riutilizzo da parte di chiunque" },
      { id: "B", text: "Dati stampati su cartoncino conservati in scatole aperte" },
      { id: "C", text: "Dati personali riservati pubblicati per errore" },
      { id: "D", text: "File protetti da password cifrata a 256 bit inaccessibili" }
    ],
    correctAnswerId: "A",
    explanation: "Gli Open Data (art. 68 CAD) sono dataset pubblici rilasciati in formati non proprietari (CSV, XML, JSON), accessibili telematicamente senza discriminazioni e liberamente rielaborabili tramite software.",
    hint: "Formati aperti machine-readable, documentati con metadati e liberamente riutilizzabili.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_084",
    question: "Quale funzione svolgono le 'Checklist di controllo' adottate nei processi di erogazione delle prestazioni INPS ai fini dell'anticorruzione?",
    options: [
      { id: "A", text: "Garantiscono la tracciabilità e la verificabilità dell'istruttoria, riducendo l'arbitrio individuale e assicurando che tutti i controlli formali e sostanziali previsti siano stati effettivamente eseguiti prima della liquidazione" },
      { id: "B", text: "Rallentano volontariamente le pratiche per creare attesa" },
      { id: "C", text: "Servono a memorizzare le password del computer" },
      { id: "D", text: "Sostituiscono la firma del direttore con un timbro anonimo" }
    ],
    correctAnswerId: "A",
    explanation: "Le checklist standardizzate sono una tipica misura specifica di prevenzione della corruzione e dell'errore: formalizzano i controlli obbligatori e rendono l'iter istruttorio oggettivo, verificabile e conforme.",
    hint: "Tracciabilità e standardizzazione dei controlli istruttori per ridurre la discrezionalità arbitraria.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_085",
    question: "Cosa si intende per 'Segregazione delle Funzioni' (Segregation of Duties) nei processi di spesa ed erogazione delle prestazioni dell'INPS?",
    options: [
      { id: "A", text: "Il principio organizzativo per cui le diverse fasi di un processo critico (es. istruttoria, autorizzazione, liquidazione ed emissione del mandato) non devono essere affidate a un unico operatore ma ripartite tra soggetti distinti per prevenire frodi o errori" },
      { id: "B", text: "L'obbligo di lavorare in stanze separate senza comunicare" },
      { id: "C", text: "La cancellazione delle email a fine giornata" },
      { id: "D", text: "La divisione dei dipendenti in base all'età anagrafica" }
    ],
    correctAnswerId: "A",
    explanation: "La segregazione delle funzioni è un principio fondamentale di controllo interno: chi istruisce la pratica non deve essere il medesimo soggetto che ne autorizza il pagamento né chi dispone l'accredito, garantendo controlli incrociati efficaci.",
    hint: "Ripartizione delle fasi del processo tra operatori distinti (istruttoria, autorizzazione, liquidazione).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_086",
    question: "Quale obbligo grava sulle pubbliche amministrazioni in materia di pubblicazione degli 'Atti di concessione di sovvenzioni, contributi, sussidi ed ausili finanziari' (artt. 26 e 27 D.Lgs. 33/2013)?",
    options: [
      { id: "A", text: "La pubblicazione obbligatoria dei criteri e delle modalità di assegnazione e dell'elenco dei soggetti beneficiari per importi superiori a mille euro, costituendo la pubblicazione condizione legale di efficacia per le erogazioni di importo superiore" },
      { id: "B", text: "Nessun obbligo di pubblicazione per tutelare il segreto bancario" },
      { id: "C", text: "La pubblicazione solo se il beneficiario acconsente per iscritto" },
      { id: "D", text: "La pubblicazione unicamente sui muri esterni della sede comunale" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 26 D.Lgs. 33/2013, la pubblicazione tempestiva degli atti di concessione di vantaggi economici sopra i 1.000 euro costituisce condizione legale di efficacia del provvedimento stesso di liquidazione.",
    hint: "Pubblicazione obbligatoria sopra i 1.000 euro quale condizione legale di efficacia del pagamento.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_087",
    question: "In caso di pubblicazione degli atti di concessione di sussidi economici ex art. 26 D.Lgs. 33/2013, quali dati personali dei beneficiari è VIETATO pubblicare a tutela della riservatezza?",
    options: [
      { id: "A", text: "È vietata la pubblicazione di dati identificativi da cui sia possibile ricavare informazioni relative allo stato di salute o alla situazione di disagio economico-sociale degli interessati (art. 26, comma 4)" },
      { id: "B", text: "È vietato pubblicare il nome dell'ente erogatore" },
      { id: "C", text: "È vietato pubblicare l'importo della prestazione" },
      { id: "D", text: "È vietato pubblicare la data del provvedimento" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 26, comma 4, D.Lgs. 33/2013 vieta espressamente la pubblicazione di dati da cui si desuma lo stato di salute o il disagio economico-sociale del beneficiario (es. assegni di cura, sussidi di indigenza), garantendo l'anonimizzazione dei soggetti vulnerabili.",
    hint: "Divieto assoluto di pubblicare dati da cui desumere lo stato di salute o di disagio economico.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_088",
    question: "Cos'è il 'Monitoraggio dei Tempi Procedimentali' pubblicato nella sezione Amministrazione Trasparente (art. 24 D.Lgs. 33/2013)?",
    options: [
      { id: "A", text: "La pubblicazione periodica dei dati relativi ai tempi medi effettivi di conclusione dei procedimenti amministrativi rispetto ai termini stabiliti dalla legge o dai regolamenti" },
      { id: "B", text: "L'orario dei treni utilizzati dai dipendenti per recarsi al lavoro" },
      { id: "C", text: "Il cronometraggio delle pause pranzo del personale" },
      { id: "D", text: "Il conto delle ore di sonno dei funzionari" }
    ],
    correctAnswerId: "A",
    explanation: "La trasparenza sui tempi procedimentali serve a contrastare l'inerzia e i ritardi burocratici: l'amministrazione pubblica i tempi medi di lavorazione di ciascuna tipologia di procedimento a confronto con i termini legali.",
    hint: "Pubblicazione dei tempi medi effettivi di conclusione rispetto ai termini legali di legge.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_089",
    question: "Quale autorità indipendente adotta le Linee Guida in materia di Accesso Civico Generalizzato (FOIA)?",
    options: [
      { id: "A", text: "L'Autorità Nazionale Anticorruzione (ANAC), d'intesa con il Garante per la protezione dei dati personali" },
      { id: "B", text: "Il Consiglio Nazionale Forense" },
      { id: "C", text: "L'Ufficio Stampa del Quirinale" },
      { id: "D", text: "L'Automobile Club d'Italia" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 5-bis, comma 6, D.Lgs. 33/2013 affida all'ANAC, d'intesa con il Garante della Privacy, il compito di adottare linee guida operative (Delibera ANAC 1309/2016) per orientare le amministrazioni nella gestione delle richieste FOIA.",
    hint: "ANAC d'intesa con il Garante per la protezione dei dati personali.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_090",
    question: "Cosa stabilisce il Codice di Comportamento in materia di trasparenza nei rapporti con i soggetti privati e i mass-media (art. 12 D.P.R. 62/2013)?",
    options: [
      { id: "A", text: "Il dipendente pubblico non intrattiene rapporti con i mass media per conto dell'amministrazione senza espressa autorizzazione, e garantisce nei rapporti con i cittadini un trattamento paritario e informazioni chiare e complete" },
      { id: "B", text: "Il dipendente può rilasciare interviste retribuite parlando a nome dell'Istituto" },
      { id: "C", text: "Il dipendente è obbligato ad aprire un canale social per commentare l'operato dei colleghi" },
      { id: "D", text: "Il dipendente deve rifiutarsi di rispondere a qualsiasi richiesta dei cittadini" }
    ],
    correctAnswerId: "A",
    explanation: "I rapporti con la stampa sono riservati agli uffici di comunicazione autorizzati: il singolo dipendente non può esprimere giudizi o rilasciare dichiarazioni ufficiali sui media senza delega, mantenendo con gli utenti cortesia e imparzialità.",
    hint: "Divieto di rapporti non autorizzati con i mass media e dovere di parità di trattamento verso i cittadini.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_091",
    question: "Quale effetto si determina qualora il Responsabile della Trasparenza rifiuti ingiustificatamente di pubblicare dati o documenti previsti dal D.Lgs. 33/2013?",
    options: [
      { id: "A", text: "L'inadempimento costituisce elemento di valutazione della responsabilità dirigenziale, eventuale causa di responsabilità per danno all'immagine dell'amministrazione e comporta l'apertura del procedimento disciplinare" },
      { id: "B", text: "Nessun effetto, trattandosi di violazione irrilevante" },
      { id: "C", text: "L'attribuzione automatica di un premio monetario" },
      { id: "D", text: "La cancellazione dell'obbligo di trasparenza per l'ente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 46 D.Lgs. 33/2013 sanziona l'omessa pubblicazione: integra illecito disciplinare, concorre alla valutazione negativa della performance del dirigente e genera responsabilità risarcitoria per danno all'immagine.",
    hint: "Elemento di responsabilità dirigenziale, disciplinare ed erariale per danno all'immagine.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_092",
    question: "Cos'è la 'Trasparenza Sostanziale' rispetto alla 'Trasparenza Formale'?",
    options: [
      { id: "A", text: "La trasparenza sostanziale mira all'effettiva comprensibilità, usabilità e fruibilità delle informazioni da parte dei cittadini, evitando il c.d. 'information overload' o la pubblicazione caotica di documenti illeggibili finalizzata solo a rispettare formalmente la legge" },
      { id: "B", text: "La trasparenza sostanziale riguarda solo i contratti scritti a mano" },
      { id: "C", text: "La trasparenza formale è vietata dalla legge" },
      { id: "D", text: "Non vi è alcuna differenza concettuale" }
    ],
    correctAnswerId: "A",
    explanation: "L'ANAC ribadisce che la trasparenza non deve risolversi in mero adempimento burocratico formale con accumulo di file oscuri: deve rendere le informazioni chiare, leggibili, facilmente reperibili e realmente utili ai cittadini.",
    hint: "Effettiva comprensibilità e usabilità delle informazioni contro il mero formalismo burocratico.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_093",
    question: "In materia di appalti pubblici, cosa prevede l'art. 28 del Codice dei Contratti Pubblici (D.Lgs. 36/2023) in tema di trasparenza delle procedure di gara?",
    options: [
      { id: "A", text: "Le informazioni, i dati e gli atti relativi alla programmazione, all'affidamento e all'esecuzione dei contratti pubblici sono trasmessi tempestivamente alla Banca Dati Nazionale dei Contratti Pubblici (BDNCP) e resi disponibili in open data" },
      { id: "B", text: "Tutti gli atti di gara sono segretati fino alla fine dei lavori" },
      { id: "C", text: "I dati sono pubblicati solo se l'appalto ha un valore superiore a 50 milioni di euro" },
      { id: "D", text: "I dati vengono distrutti subito dopo la proclamazione del vincitore" }
    ],
    correctAnswerId: "A",
    explanation: "Il nuovo Codice degli Appalti (D.Lgs. 36/2023) digitalizza l'intero ciclo degli appalti: la pubblicazione legale non avviene più su gazzette cartacee ma mediante interoperabilità e trasmissione automatica dei dati alla BDNCP dell'ANAC.",
    hint: "Trasmissione telematica tempestiva alla BDNCP di ANAC e rilascio in formato aperto.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_094",
    question: "Quale principio governa la tutela della riservatezza dei partecipanti ai concorsi pubblici nella pubblicazione delle graduatorie finali di merito?",
    options: [
      { id: "A", text: "La graduatoria deve riportare i nominativi dei candidati e il punteggio complessivo, ma è rigorosamente vietato pubblicare dati eccedenti e sensibili (es. titoli di preferenza per invalidità, residenza, codici fiscali completi, recapiti telefonici)" },
      { id: "B", text: "È obbligatorio pubblicare la cartella clinica di ciascun vincitore" },
      { id: "C", text: "Le graduatorie devono essere totalmente anonime senza nemmeno il cognome" },
      { id: "D", text: "La graduatoria non può essere mai resa pubblica" }
    ],
    correctAnswerId: "A",
    explanation: "Il Garante della Privacy e l'art. 19 D.Lgs. 33/2013 stabiliscono che la pubblicazione delle graduatorie deve rispettare il principio di minimizzazione: legittima la pubblicazione di nome, cognome e punteggio, ma vietata la diffusione di dati sensibili (es. riserve per disabilità).",
    hint: "Pubblicazione di nome e punteggio ma divieto di diffusione di dati sensibili o titoli di riserva/disabilità.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_095",
    question: "Cos'è il 'Piano Triennale di Formazione' obbligatorio per i dipendenti pubblici sui temi dell'integrità e della legalità?",
    options: [
      { id: "A", text: "Un percorso formativo periodico e obbligatorio sui temi dell'etica pubblica, della trasparenza, dell'anticorruzione e del codice di comportamento, rivolto a tutti i dipendenti e in particolare ai neoassunti e al personale operante nelle aree a rischio" },
      { id: "B", text: "Un corso di addestramento sportivo per guardie giurate" },
      { id: "C", text: "Un master a pagamento all'estero riservato ai soli dirigenti" },
      { id: "D", text: "Un esame universitario annuale a pena di decadenza" }
    ],
    correctAnswerId: "A",
    explanation: "La formazione continua in materia di anticorruzione e integrità è una misura obbligatoria prescritta dalla L. 190/2012 e confluita nel PIAO: aggiorna le competenze etiche e operative del personale riducendo il rischio di devianze.",
    hint: "Formazione obbligatoria periodica su etica, legalità e trasparenza per tutto il personale.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_096",
    question: "Cosa stabilisce l'ANAC in ordine al 'Riesame' da parte del Garante Privacy nei casi di diniego di accesso civico generalizzato motivato da ragioni di tutela dei dati personali?",
    options: [
      { id: "A", text: "Il RPCT, prima di decidere sul riesame, è tenuto ad acquisire il parere vincolante/obbligatorio del Garante per la protezione dei dati personali, il quale si pronuncia entro il termine di dieci giorni" },
      { id: "B", text: "Il Garante Privacy non può mai essere interpellato" },
      { id: "C", text: "La decisione è rimessa al Ministero dell'Interno" },
      { id: "D", text: "Il parere del Garante costa 5.000 euro a carico del richiedente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 5, comma 7, D.Lgs. 33/2013 prevede che se l'accesso civico è stato negato a tutela della privacy dei terzi, il RPCT interpella obbligatoriamente il Garante Privacy, che rende il proprio parere entro 10 giorni a tutela dei diritti fondamentali.",
    hint: "Parere obbligatorio del Garante Privacy reso entro dieci giorni.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_ANTI_097",
    question: "Quale differenza intercorre tra 'Accesso Documentale' (L. 241/90) e 'Accesso Civico' (D.Lgs. 33/2013) in ordine al regime dei costi per il richiedente?",
    options: [
      { id: "A", text: "In entrambi i casi il rilascio di dati o documenti in formato elettronico è totalmente gratuito, salvo l'eventuale rimborso dei soli costi effettivi sostenuti e documentati per la riproduzione su supporto materiale (es. fotocopie o cd)" },
      { id: "B", text: "L'accesso documentale costa 500 euro, quello civico 1.000 euro" },
      { id: "C", text: "L'accesso civico è sempre a pagamento con bollettino postale da 50 euro" },
      { id: "D", text: "È vietato chiedere qualsiasi rimborso anche per le fotocopie cartacee" }
    ],
    correctAnswerId: "A",
    explanation: "La legge sancisce la gratuità dell'accesso telematico: l'amministrazione non può imporre tariffe o diritti di ricerca; è ammesso solo il ristoro del costo vivo materiale (carta e toner) qualora il richiedente pretenda copie cartacee.",
    hint: "Gratuità totale dell'accesso elettronico, con rimborso dei soli costi vivi di riproduzione materiale.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_098",
    question: "Cos'è la 'Corruzione Sistemica' o 'Mala gestio' che le misure della Legge 190/2012 e del PIAO mirano a prevenire, al di là dei singoli reati del codice penale?",
    options: [
      { id: "A", text: "L'insieme dei fenomeni di cattiva amministrazione, deviazione dai canoni di imparzialità e buon andamento, inefficienze, sprechi o asservimento dell'interesse pubblico a fini particolari o di parte, anche laddove non integrino una fattispecie di reato penale" },
      { id: "B", text: "Un virus informatico che cancella i database degli stipendi" },
      { id: "C", text: "Il mancato raggiungimento del pareggio di bilancio statale" },
      { id: "D", text: "La perdita di documenti storici durante un trasloco" }
    ],
    correctAnswerId: "A",
    explanation: "La nozione di corruzione accolta dalla L. 190/2012 è più ampia del diritto penale: comprende la 'maladministration', ossia qualsiasi condotta scorretta che svii l'azione pubblica dal perseguimento imparziale dell'interesse della collettività.",
    hint: "Nozione ampia di cattiva amministrazione e deviazione dai canoni di imparzialità (maladministration).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_ANTI_099",
    question: "Quale adempimento annuale spetta al RPCT entro il 15 dicembre (o data prorogata da ANAC)?",
    options: [
      { id: "A", text: "La pubblicazione della 'Relazione annuale del RPCT' sull'efficacia delle misure di prevenzione della corruzione e della trasparenza definite e attuate nell'anno precedente" },
      { id: "B", text: "La redazione del menù della mensa per le feste natalizie" },
      { id: "C", text: "Il licenziamento del 10% del personale per sorteggio" },
      { id: "D", text: "La presentazione del bilancio consolidato delle banche private" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 14, L. 190/2012 impone al RPCT di redigere e pubblicare annualmente sul sito istituzionale la Relazione annuale che dà conto dell'attività svolta, delle misure attuate, delle segnalazioni di whistleblowing pervenute e delle criticità riscontrate.",
    hint: "Relazione annuale del RPCT pubblicata nella sezione Amministrazione Trasparente.",
    level: "base"
  },
  {
    id: "Q_DIR_ANTI_100",
    question: "Cosa stabilisce l'ANAC circa la nomina del RPCT negli enti pubblici di grandi dimensioni e negli enti previdenziali come l'INPS?",
    options: [
      { id: "A", text: "Deve essere individuato di norma in un dirigente di ruolo di prima fascia che non si trovi in situazioni di conflitto di interessi, dotato di adeguata autonomia, indipendenza di giudizio e autorità organizzativa" },
      { id: "B", text: "Deve essere obbligatoriamente un magistrato in pensione" },
      { id: "C", text: "Deve essere nominato tra i neolaureati senza esperienza" },
      { id: "D", text: "La carica deve essere affidata a un'agenzia privata esterna a pagamento" }
    ],
    correctAnswerId: "A",
    explanation: "L'ANAC raccomanda che il RPCT sia un dirigente generale di ruolo apicale dotato di effettivo potere di interlocuzione con il vertice e con le strutture territoriali, privo di incarichi nei settori più esposti a rischio per evitare commistioni tra controllore e controllato.",
    hint: "Dirigente di ruolo di prima fascia dotato di autonomia, indipendenza e autorità organizzativa.",
    level: "intermedio"
  }
];

const merged = [...existing, ...newQuestions];
fs.writeFileSync(targetFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Successfully added ${newQuestions.length} questions to anticorruzione.json. Total questions: ${merged.length}`);
