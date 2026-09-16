const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/db/master_bank/situazionali/casi_operativi.json');
const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

const newQuestions = [
  {
    id: "Q_PECS_SIT_051",
    question: "Un utente anziano si presenta allo sportello visibilmente disorientato e agitato, lamentando di non riuscire a scaricare il cedolino della pensione perché privo di smartphone e di credenziali SPID o CIE. Qual è il comportamento più efficace e orientato all'utenza da parte del Funzionario PECS?",
    options: [
      { id: "A", text: "Accogliere l'utente con empatia, verificare la sua identità tramite documento di riconoscimento in corso di validità, stampargli il cedolino richiesto e illustrargli la possibilità di attivare il servizio di delega digitale dell'identità per un familiare di sua fiducia" },
      { id: "B", text: "Spiegargli bruscamente che l'INPS è ormai totalmente digitale e invitarlo ad acquistare un computer prima di tornare" },
      { id: "C", text: "Rifiutare qualsiasi assistenza cartacea rimandandolo all'assistenza postale" },
      { id: "D", text: "Farsi consegnare la sua tessera sanitaria e impostare una password con il proprio nome" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario PECS unisce legalità e orientamento al servizio: garantisce l'accesso immediato alla prestazione essenziale (stampa del cedolino previa identificazione certa) e risolve strutturalmente il digital divide proponendo la delega dell'identità digitale a un fiduciario.",
    hint: "Assistenza immediata previa identificazione e attivazione della delega digitale per il futuro.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_052",
    question: "Durante l'istruttoria di una richiesta di NASpI, il Funzionario PECS nota che l'azienda datrice ha inserito nel flusso Uniemens un codice di cessazione relativo a 'dimissioni volontarie', mentre il lavoratore ha allegato alla domanda telematica una lettera di licenziamento per giustificato motivo oggettivo firmata dal datore. Qual è l'azione corretta?",
    options: [
      { id: "A", text: "Respingere immediatamente la domanda senza effettuare alcun riscontro" },
      { id: "B", text: "Liquidare subito l'indennità senza porsi il problema della discordanza dei flussi informativi" },
      { id: "C", text: "Sospendere cautelativamente la lavorazione, inviare una comunicazione formale via Cassetto Previdenziale all'azienda richiedendo conferma e rettifica del flusso Uniemens e informare l'utente della discordanza riscontrata" },
      { id: "D", text: "Cancellare la lettera di licenziamento dall'archivio telematico" }
    ],
    correctAnswerId: "C",
    explanation: "La discordanza tra il motivo di cessazione Uniemens e la documentazione del lavoratore impone un approfondimento istruttorio (art. 6 L. 241/90): il funzionario non respinge a priori né liquida al buio, ma sospende e attiva la verifica con l'azienda per la rettifica del flusso.",
    hint: "Sospensione istruttoria, richiesta di rettifica all'azienda tramite cassetto e tutela dell'utente.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_053",
    question: "Un consulente del lavoro, intermediario abituale della sede, contatta privatamente il Funzionario PECS chiedendogli di velocizzare l'istruttoria della cassa integrazione di una sua azienda cliente scavalcando le pratiche di altri colleghi, accennando alla promessa di un invito a cena. Come deve reagire il funzionario?",
    options: [
      { id: "A", text: "Rifiutare fermamente l'invito, rammentare all'intermediario il dovere inderogabile di rispetto dell'ordine cronologico di trattazione delle istanze e segnalare tempestivamente l'episodio al proprio Responsabile di linea e al RPCT" },
      { id: "B", text: "Accettare l'invito a cena purché l'istruttoria sia formalmente corretta" },
      { id: "C", text: "Accogliere la richiesta ma chiedere in cambio un favore personale per un parente" },
      { id: "D", text: "Ignorare l'accaduto e cancellare la pratica per ritorsione" }
    ],
    correctAnswerId: "A",
    explanation: "Il Codice di Comportamento dei dipendenti pubblici (D.P.R. 62/2013 e D.P.R. 81/2023) e la Legge 190/2012 impongono il rigetto di qualsiasi regalia o utilità, il rispetto dell'imparzialità e dell'ordine cronologico e la segnalazione immediata dei tentativi di pressione indebita al dirigente e al RPCT.",
    hint: "Rifiuto categorico, rispetto dell'ordine cronologico e segnalazione al dirigente/RPCT.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_054",
    question: "A fine trimestre, la linea 'Prestazioni a sostegno del reddito' registra un picco straordinario di domande di Assegno di Inclusione (+50%), mettendo a rischio il rispetto degli SLA della sede. In qualità di Funzionario coordinatore di processo PECS, come affronti la situazione?",
    options: [
      { id: "A", text: "Convocare un breve briefing operativo con il team, mappare i colli di bottiglia, redistribuire temporaneamente le attività standardizzabili e proporre al Responsabile di sede una rimodulazione concordata dei carichi e il ricorso a task-force mirate" },
      { id: "B", text: "Chiudere gli sportelli al pubblico per tutto il mese senza avvisare nessuno" },
      { id: "C", text: "Respingere a campione la metà delle domande per abbassare il volume della giacenza" },
      { id: "D", text: "Ignorare il problema fino alla scadenza formale della performance annuale" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario PECS dimostra visione per processi, leadership collaborativa e orientamento ai risultati: analizza le cause del ritardo, riorganizza il flusso di lavoro nel gruppo e concorda con la dirigenza misure straordinarie a salvaguardia dei livelli di servizio per la cittadinanza fragile.",
    hint: "Briefing con il team, mappatura colli di bottiglia, redistribuzione carichi e proposta al dirigente.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_055",
    question: "Nell'esaminare un fascicolo pensionistico, il Funzionario PECS scopre che una pensione ai superstiti continua ad essere regolarmente accreditata sul conto corrente di una titolare deceduta da 8 mesi, non essendo pervenuta la comunicazione di morte da parte dell'anagrafe comunale estera. Qual è l'intervento immediato?",
    options: [
      { id: "A", text: "Attivare immediatamente la procedura informatica di blocco dei pagamenti, avviare l'istruttoria di accertamento dell'indebito, richiedere all'istituto bancario il recupero dei ratei non spettanti e relazionare al Responsabile per la denuncia all'Autorità Giudiziaria" },
      { id: "B", text: "Attendere che gli eredi si presentino spontaneamente in sede nei successivi 10 anni" },
      { id: "C", text: "Inviare una lettera cartacea ordinaria all'indirizzo della defunta chiedendo chiarimenti" },
      { id: "D", text: "Cancellare la scheda anagrafica senza lasciare traccia del debito" }
    ],
    correctAnswerId: "A",
    explanation: "Di fronte all'erogazione indebita post-mortem occorre tempestività per bloccare l'emorragia di denaro pubblico: blocco immediato dei pagamenti, attivazione del recall bancario dei ratei, quantificazione dell'indebito e informativa per i profili penali (art. 640-bis c.p.).",
    hint: "Blocco immediato dei pagamenti, recall bancario dei ratei e avvio dell'accertamento dell'indebito.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_056",
    question: "Allo sportello di sede, un utente visibilmente alterato grida insulti e minaccia di rompere le vetrate perché la sua domanda di indennità di accompagnamento è stata respinta dalla Commissione Medica. Qual è il comportamento deontologico corretto del funzionario?",
    options: [
      { id: "A", text: "Mantenere un tono di voce calmo e fermo, ascoltare le rimostranze senza reagire alle provocazioni, spiegargli con chiarezza la natura medica del giudizio e le vie legali di ricorso giudiziale (art. 445-bis c.p.c.), allertando con discrezione la sicurezza interna qualora la violenza persista" },
      { id: "B", text: "Rispondere insultando a sua volta l'utente per far valere l'autorità dell'Istituto" },
      { id: "C", text: "Promettergli falsamente l'immediato pagamento dell'indennità per farlo allontanare" },
      { id: "D", text: "Abbandonare l'edificio lasciando lo sportello incustodito" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario PECS applica tecniche di de-escalation del conflitto: mantiene autocontrollo, empatia e professionalità, illustra le motivazioni amministrative del provvedimento e i rimedi di legge (accertamento tecnico preventivo ex art. 445-bis c.p.c.), tutelando la sicurezza propria e degli altri utenti.",
    hint: "Calma, de-escalation, spiegazione delle vie legali di ricorso e allerta discreta della sicurezza.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_057",
    question: "Un collega neoassunto nel reparto 'Gestione Conto Assicurativo' compie frequenti errori materiali nell'accredito dei contributi figurativi di maternità, provocando rallentamenti nei conguagli. Come interviene il Funzionario PECS esperto?",
    options: [
      { id: "A", text: "Offrirsi di affiancare il collega con un percorso di coaching operativo, condividere con lui un vademecum pratico con le casistiche più ricorrenti e suggerire al Responsabile di team un breve momento di allineamento tecnico per tutto il reparto" },
      { id: "B", text: "Deridere il collega sui social network o nei corridoi dell'ufficio" },
      { id: "C", text: "Inviare immediatamente un esposto alla Procura della Repubblica contro il collega" },
      { id: "D", text: "Rifiutarsi categoricamente di lavorare finché il collega non viene trasferito" }
    ],
    correctAnswerId: "A",
    explanation: "La competenza relazionale e di leadership orizzontale del funzionario si manifesta nello spirito di squadra e nel miglioramento continuo dei processi: affiancamento, condivisione delle best practice e supporto formativo per prevenire gli errori alla radice.",
    hint: "Coaching operativo, condivisione di vademecum e allineamento di squadra.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_058",
    question: "Un'impresa edile chiede con estrema urgenza l'emissione del DURC online per riscuotere uno stato di avanzamento lavori dal Comune. Dal controllo dei sistemi risulta un'omissione contributiva di soli 180 euro relativa a un mese pregresso. Qual è la procedura operativa corretta?",
    options: [
      { id: "A", text: "Emettere tempestivamente l' 'Invito a regolarizzare' indicando analiticamente la causale e l'importo del debito, e contattare contestualmente il consulente tramite Cassetto Bidirezionale per spiegargli che versando tempestivamente con F24 il DURC potrà essere rilasciato positivo entro 15 giorni" },
      { id: "B", text: "Rilasciare subito un DURC positivo falso per favorire l'impresa" },
      { id: "C", text: "Emettere seduta stante un DURC negativo definitivo senza concedere alcun termine" },
      { id: "D", text: "Chiedere una percentuale sull'appalto comunale per sanare la pratica" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi del D.M. 30 gennaio 2015, prima di dichiarare l'irregolarità l'INPS deve obbligatoriamente emettere l'invito a regolarizzare concedendo 15 giorni di tempo. La proattività del PECS consiste nel segnalare tempestivamente la piccola anomalia per consentire il pronto pagamento con F24.",
    hint: "Invito a regolarizzare con spiegazione via cassetto dell'importo esatto da pagare per evitare il diniego.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_059",
    question: "Durante l'istruttoria di una pensione in totalizzazione internazionale (Reg. CE 883/2004), il Funzionario PECS si accorge che all'utente mancano 12 mesi di contributi italiani ma risultano 5 anni di contribuzione accreditata in Germania non ancora confermati dall'organismo estero. La pensione interna sarebbe respinta. Come opera il funzionario?",
    options: [
      { id: "A", text: "Inviare con urgenza il formulario comunitario di collegamento (E205/SED) all'ente previdenziale tedesco (Deutsche Rentenversicherung), informare il lavoratore dello stato dell'istruttoria e verificare l'eventuale liquidazione di un acconto/pensione provvisoria secondo le circolari INPS di settore" },
      { id: "B", text: "Respingere la domanda di pensione dicendo all'utente di trasferirsi in Germania" },
      { id: "C", text: "Inventare 12 mesi di contributi italiani fittizi sul terminale" },
      { id: "D", text: "Archiviare la pratica per sempre senza alcuna risposta" }
    ],
    correctAnswerId: "A",
    explanation: "Nella previdenza internazionale, il coordinamento comunitario impone l'attivazione dei formulari di collegamento (SED/E205) per acquisire i periodi esteri utili alla totalizzazione, salvaguardando il diritto alla prestazione dell'assicurato con trasparenza procedimentale.",
    hint: "Attivazione dei formulari UE con l'ente estero e comunicazione dello stato d'avanzamento all'utente.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_SIT_060",
    question: "Un cittadino presenta un'istanza di Accesso Documentale ex Legge 241/1990 chiedendo di visionare l'intero fascicolo contributivo e le denunce retributive dell'ex coniuge, adducendo generiche motivazioni patrimoniali in vista di una separazione. Qual è il comportamento del Funzionario PECS responsabile del procedimento?",
    options: [
      { id: "A", text: "Valutare la sussistenza di un interesse diretto, concreto e attuale, notificare obbligatoriamente l'istanza all'ex coniuge in qualità di controinteressato (art. 3 D.P.R. 184/2006) assegnandogli 10 giorni per opporsi, e limitare l'eventuale ostensione ai soli documenti strettamente indispensabili alla tutela giudiziale" },
      { id: "B", text: "Consegnare immediatamente tutti i documenti e le cartelle cliniche dell'ex coniuge senza preavviso" },
      { id: "C", text: "Cestinare l'istanza senza redigere alcun provvedimento formale" },
      { id: "D", text: "Chiamare l'ex coniuge al telefono per riferirgli pettegolezzi sulla richiesta" }
    ],
    correctAnswerId: "A",
    explanation: "L'accesso a dati di terzi impone la rigorosa tutela del contraddittorio con i controinteressati (art. 3 D.P.R. 184/2006) e il bilanciamento tra diritto di difesa e riservatezza: l'accesso è consentito solo nei limiti della stretta indispensabilità previa notifica al titolare dei dati.",
    hint: "Notifica al controinteressato con termine di 10 giorni e verifica della stretta indispensabilità difensiva.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_061",
    question: "Il Funzionario PECS rileva sui propri applicativi un'anomalia statistica: una neo-costituita cooperativa di logistica con capitale di 500 euro ha assunto in una sola settimana 120 lavoratori, richiedendo contestualmente la cassa integrazione per tutti. Qual è l'intervento più efficace di vigilanza documentale e contrasto alle frodi?",
    options: [
      { id: "A", text: "Sospendere cautelarmente l'autorizzazione dell'ammortizzatore, avviare un controllo incrociato sulle banche dati camerali e fiscali, predisporre un report dettagliato per il Direttore di sede e trasmettere gli atti al nucleo ispettivo INPS/INL per l'avvio immediato di un'ispezione sul campo" },
      { id: "B", text: "Autorizzare immediatamente il pagamento per non scontentare i lavoratori" },
      { id: "C", text: "Cancellare l'azienda dai database senza motivazione formale" },
      { id: "D", text: "Telefonare al titolare della cooperativa per avvisarlo di nascondere i documenti" }
    ],
    correctAnswerId: "A",
    explanation: "Il caso presenta tipici indicatori di rischio di 'azienda cartiera' e frode contributiva. Il funzionario PECS esercita il presidio di controllo di legalità: sospensione prudenziale, audit documentale e tempestiva attivazione della vigilanza ispettiva.",
    hint: "Sospensione cautelare dei pagamenti, incrocio banche dati e invio al nucleo ispettivo.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_062",
    question: "Un utente disabile lamenta l'impossibilità di accedere fisicamente alla sede INPS a causa di un guasto temporaneo dell'ascensore. In qualità di funzionario PECS addetto all'accoglienza, cosa fai?",
    options: [
      { id: "A", text: "Raggiungere personalmente l'utente al piano terra in una postazione idonea e riservata per raccogliere la sua istanza e completare la pratica, scusandosi per il disagio e segnalando immediatamente il guasto all'Ufficio Tecnico per la riparazione urgente" },
      { id: "B", text: "Dire all'utente di salire le scale a piedi o di tornare il mese successivo" },
      { id: "C", text: "Chiamare i carabinieri per allontanare l'utente dalla porta d'ingresso" },
      { id: "D", text: "Chiudere a chiave l'ufficio e fingere che la sede sia vuota" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario pubblico adempie ai doveri di accessibilità, non discriminazione ed eguaglianza sostanziale (art. 3 Cost.): supera la barriera architettonica scendendo al piano terra per garantire il servizio al cittadino con disabilità.",
    hint: "Assistenza diretta al piano terra in postazione accessibile e segnalazione urgente del guasto.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_063",
    question: "Nel cassetto previdenziale aziendale perviene un'istanza di rateizzazione di un debito contributivo di 45.000 euro da parte di una PMI in crisi di liquidità temporanea. Qual è la corretta sequenza procedimentale per il Funzionario PECS?",
    options: [
      { id: "A", text: "Verificare la sussistenza dei requisiti formali, il versamento della quota di acconto prevista dal regolamento di rateazione, la regolarità delle garanzie fideiussorie richieste (se previste) e istruire la delibera di accoglimento con il piano di ammortamento delle rate nel rispetto dei termini di legge" },
      { id: "B", text: "Cancellare il debito dell'azienda per sostenere l'economia locale" },
      { id: "C", text: "Rifiutare a prescindere la rateizzazione sostenendo che l'INPS accetta solo pagamenti in contanti" },
      { id: "D", text: "Accogliere l'istanza solo a condizione che l'azienda assuma un conoscente" }
    ],
    correctAnswerId: "A",
    explanation: "La rateazione dei debiti contributivi (art. 2 D.L. 338/1989 e regolamenti INPS) segue una procedura tassativa: verifica dell'acconto, idoneità delle garanzie, calcolo degli interessi legali e approvazione del piano rateale (fino a 24 o 36 rate).",
    hint: "Istruttoria formale dei requisiti di rateazione, verifica dell'acconto e adozione del piano di ammortamento.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_064",
    question: "Un funzionario PECS si accorge che un collega di stanza ha lasciato aperta sul computer la procedura del cassetto previdenziale allontanandosi per la pausa pranzo, con la postazione priva di blocco schermo. Qual è l'azione immediata e corretta secondo le regole di sicurezza informatica dell'ente?",
    options: [
      { id: "A", text: "Bloccare immediatamente la postazione del collega (es. con Windows+L) per impedire accessi non autorizzati a dati personali di terzi e ricordargli amichevolmente al suo rientro l'obbligo di blocco dello schermo secondo le policy di sicurezza" },
      { id: "B", text: "Approfittarne per consultare i dati riservati dei propri vicini di casa" },
      { id: "C", text: "Inviare email scherzose ai dirigenti dal profilo del collega" },
      { id: "D", text: "Staccare la spina della corrente del palazzo" }
    ],
    correctAnswerId: "A",
    explanation: "La sicurezza informatica e la conformità al GDPR impongono la tutela continua dei dati trattati: bloccare la sessione lasciata incustodita previene data breach e violazioni dell'art. 615-ter c.p., promuovendo una cultura condivisa della sicurezza.",
    hint: "Blocco immediato della sessione a tutela dei dati e promemoria delle policy di sicurezza al collega.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_065",
    question: "Durante l'istruttoria di una prestazione assistenziale (ADI), il sistema informatico segnala un'anomalia bloccante per 'difformità anagrafica' tra il codice fiscale del richiedente registrato in Anagrafe Tributaria e quello censito nell'anagrafe comunale. Come procede il Funzionario PECS?",
    options: [
      { id: "A", text: "Interrogare la Piattaforma Digitale Nazionale Dati (PDND) o l'ANPR (Anagrafe Nazionale della Popolazione Residente) per verificare il dato corretto, allineare le banche dati tramite la procedura di gestione anagrafica e rimuovere lo scarto istruttorio senza onerare ingiustamente l'utente" },
      { id: "B", text: "Respingere la domanda e imporre all'utente di cambiare nome all'anagrafe" },
      { id: "C", text: "Sospendere la pratica a tempo indeterminato senza fare nulla" },
      { id: "D", text: "Assegnare all'utente un codice fiscale inventato" }
    ],
    correctAnswerId: "A",
    explanation: "In applicazione del principio 'once only' e dell'art. 6 L. 241/90 (soccorso istruttorio), il funzionario della PA digitale consulta direttamente l'ANPR/PDND per verificare d'ufficio il dato corretto e sanare l'anomalia anagrafica senza gravare sul cittadino.",
    hint: "Verifica d'ufficio tramite ANPR/PDND e allineamento anagrafico in autotutela senza aggravi per l'utente.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_066",
    question: "Un utente presenta formale ricorso amministrativo al Comitato Provinciale avverso il mancato riconoscimento della disoccupazione agricola. Il Funzionario PECS incaricato della redazione della relazione istruttoria per il Comitato cosa deve fare?",
    options: [
      { id: "A", text: "Riesaminare serenamente e obiettivamente gli atti, verificare la sussistenza delle giornate lavorative richieste, redigere una relazione chiara e imparziale evidenziando i presupposti di fatto e di diritto e formulare una proposta motivata (di accoglimento o reiezione) per i membri del Comitato" },
      { id: "B", text: "Proporre sempre la reiezione per difendere aprioristicamente l'operato dell'ufficio anche in presenza di un palese errore materiale precedente" },
      { id: "C", text: "Distruggere il ricorso per evitare lavoro supplementare" },
      { id: "D", text: "Far decidere l'esito del ricorso con un sondaggio online sui social" }
    ],
    correctAnswerId: "A",
    explanation: "La relazione istruttoria per gli organi di ricorso deve essere rigorosa, trasparente e imparziale: se emerge un errore materiale della sede, il funzionario deve proporre in autotutela l'accoglimento del ricorso, garantendo il rispetto della legalità e la deflazione del contenzioso.",
    hint: "Istruttoria obiettiva, trasparente e motivata con proposta imparziale al Comitato.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_067",
    question: "Nel corso della riunione periodica di monitoraggio della performance, il Direttore Provinciale evidenzia che i tempi di risposta ai ticket di 'Linea INPS' della sede superano di 3 giorni il target contrattuale. Come può contribuire costruttivamente il Funzionario PECS?",
    options: [
      { id: "A", text: "Proporre una classificazione preventiva dei ticket per macro-tipologia di quesito, redigendo modelli di risposta standardizzati per le domande ricorrenti e dedicando fasce orarie giornaliere prestabilite alla lavorazione dei quesiti complessi" },
      { id: "B", text: "Cancellare tutti i ticket pendenti per azzerare i tempi medi" },
      { id: "C", text: "Inviare a tutti gli utenti la risposta automatica 'Non sappiamo aiutarla'" },
      { id: "D", text: "Accusare pubblicamente i colleghi di altri uffici senza proporre soluzioni" }
    ],
    correctAnswerId: "A",
    explanation: "L'approccio PECS mira all'efficientamento dei processi e alla standardizzazione della qualità: categorizzazione delle richieste (triage), adozione di template per risposte ricorrenti e pianificazione dell'attività di back-office.",
    hint: "Standardizzazione delle risposte frequenti, triage dei quesiti e pianificazione oraria dedicata.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_068",
    question: "Un patronato convenzionato trasmette telematicamente una domanda di reversibilità con allegata una dichiarazione sostitutiva dell'atto di notorietà in cui mancano la data e la sottoscrizione del richiedente. Qual è l'atto corretto del Funzionario PECS?",
    options: [
      { id: "A", text: "Attivare l'istituto del soccorso istruttorio ex art. 6 della Legge 241/1990, richiedendo al patronato di regolarizzare la dichiarazione priva di sottoscrizione entro un congruo termine, senza respingere pregiudizievolmente la domanda" },
      { id: "B", text: "Respingere immediatamente la domanda comminando una multa al richiedente" },
      { id: "C", text: "Firmare la dichiarazione al posto del cittadino" },
      { id: "D", text: "Mettere agli atti la dichiarazione invalida considerandola valida" }
    ],
    correctAnswerId: "A",
    explanation: "Il soccorso istruttorio (art. 6 L. 241/90) costituisce dovere generale dell'amministrazione: di fronte a mere omissioni formali o documentali sanabili (mancanza di firma su autocertificazione), il funzionario invita alla regolarizzazione.",
    hint: "Attivazione del soccorso istruttorio con termine perentorio per la regolarizzazione documentale.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_069",
    question: "Il Funzionario PECS riceve la richiesta di un parente stretto che gli chiede di controllare 'informalmente' la posizione contributiva e lo stipendio dell'ex fidanzata per verificare se ha trovato un nuovo lavoro. Come si comporta il funzionario?",
    options: [
      { id: "A", text: "Rifiutare categoricamente la richiesta, spiegando che l'accesso alle banche dati dell'Istituto è rigorosamente tracciato e consentito solo per motivate ragioni di servizio, configurando l'accesso per curiosità personale un grave illecito disciplinare e il reato di accesso abusivo ex art. 615-ter c.p." },
      { id: "B", text: "Accedere al fascicolo ma stampare i dati su carta per non lasciare tracce sul computer" },
      { id: "C", text: "Chiedere 50 euro al parente per eseguire il controllo" },
      { id: "D", text: "Farsi prestare la password di un collega per consultare la pratica a suo nome" }
    ],
    correctAnswerId: "A",
    explanation: "L'etica professionale, il GDPR e la legge penale vietano qualsiasi accesso non giustificato da un fascicolo regolarmente assegnato. L'accesso per scopi personali espone a sanzioni disciplinari espulsive e a responsabilità penale personale.",
    hint: "Rifiuto categorico nel rispetto della privacy e divieto assoluto di accesso abusivo alle banche dati.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_070",
    question: "Durante una verifica di conformità su pagamenti di conguagli per cassa integrazione, il Funzionario PECS rileva che a causa di un refuso di battitura nei mesi precedenti sono stati liquidati 1.200 euro in eccedenza a un lavoratore. Come interviene?",
    options: [
      { id: "A", text: "Avviare il procedimento di rettifica in autotutela, quantificare con esattezza l'indebito, inviare all'interessato formale comunicazione con le motivazioni del ricalcolo e proporre un piano di recupero rateale sostenibile trattenuto sulle future spettanze o con versamento F24" },
      { id: "B", text: "Trattenere l'intero stipendio del lavoratore senza alcuna spiegazione" },
      { id: "C", text: "Ignorare l'errore per paura di sanzioni personali" },
      { id: "D", text: "Pagare la differenza con i soldi della cassa economale dell'ufficio" }
    ],
    correctAnswerId: "A",
    explanation: "La rettifica in autotutela dell'indebito economico richiede trasparenza, motivazione e rispetto del principio di proporzionalità, consentendo al cittadino una rateizzazione per non intaccare le sue esigenze di sussistenza.",
    hint: "Rettifica in autotutela, comunicazione motivata e piano di recupero rateale sostenibile.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_071",
    question: "Nel corso della lavorazione di una pratica di ricongiunzione onerosa ex L. 29/1979, l'utente segnala che il bollettino MAV di pagamento della prima rata scade tra 2 giorni ma l'importo calcolato include un periodo di servizio militare che avrebbe dovuto essere accreditato figurativamente a titolo gratuito. Cosa fa il funzionario?",
    options: [
      { id: "A", text: "Sospendere temporaneamente l'efficacia del bollettino in scadenza, procedere d'urgenza all'accredito figurativo del servizio militare a titolo gratuito sul conto assicurativo e rideterminare immediatamente il corretto onere di ricongiunzione con emissione dei nuovi bollettini" },
      { id: "B", text: "Imporre all'utente di pagare comunque la somma errata per intero senza rimborsi" },
      { id: "C", text: "Respingere la domanda di ricongiunzione per colpa dell'utente" },
      { id: "D", text: "Consigliare all'utente di non fare il servizio militare" }
    ],
    correctAnswerId: "A",
    explanation: "L'accredito figurativo del servizio militare è gratuito e precede l'eventuale calcolo della ricongiunzione onerosa: il funzionario agisce con tempestività in autotutela correttiva prima che scadano i termini di pagamento a danno del contribuente.",
    hint: "Sospensione cautelare del bollettino, accredito figurativo gratuito e ricalcolo dell'onere corretto.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_SIT_072",
    question: "Un utente contatta la sede lamentando che da oltre due mesi non riceve riscontro a una richiesta di rettifica dell'estratto conto inviata tramite PEC. Il Funzionario PECS incaricato cosa deve verificare prioritariamente?",
    options: [
      { id: "A", text: "Verificare la corretta protocollazione dell'istanza nel sistema di gestione documentale, individuare il responsabile dell'istruttoria, accertare le cause del ritardo e provvedere a fornire tempestivo riscontro motivato all'utente informando il responsabile di linea" },
      { id: "B", text: "Cancellare l'email per evitare la registrazione di un ritardo nei KPI" },
      { id: "C", text: "Rispondere che le PEC non hanno valore legale" },
      { id: "D", text: "Inviare un messaggio vuoto per interrompere i termini" }
    ],
    correctAnswerId: "A",
    explanation: "Le istanze inviate tramite PEC hanno valore legale equivalente alla raccomandata A/R: il funzionario traccia la pratica nel protocollo informatico, individua la causa dell'inerzia e assicura la tempestiva conclusione del procedimento nel rispetto della L. 241/90.",
    hint: "Verifica protocollo, tracciabilità del fascicolo, individuazione delle cause e riscontro formale.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_073",
    question: "Al funzionario PECS viene assegnata una pratica di liquidazione di una prestazione assistenziale presentata da un proprio cugino di primo grado. Qual è il comportamento obbligatorio ai sensi dell'art. 6-bis della Legge 241/1990 e del Codice di Comportamento?",
    options: [
      { id: "A", text: "Astenersi immediatamente dalla trattazione della pratica dandone tempestiva comunicazione scritta al proprio dirigente, il quale assegnerà il fascicolo a un altro funzionario (dovere di astensione per conflitto di interessi)" },
      { id: "B", text: "Lavorare la pratica concedendo il massimo del beneficio economico possibile" },
      { id: "C", text: "Respingere la pratica per dimostrare di essere incorruttibile" },
      { id: "D", text: "Lavorare la pratica in segreto senza dirlo a nessuno" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 6-bis L. 241/1990 e l'art. 7 D.P.R. 62/2013 impongono al dipendente l'obbligo inderogabile di astenersi in caso di conflitto di interessi anche solo potenziale (coinvolgimento di parenti entro il quarto grado), rimettendo la gestione al dirigente.",
    hint: "Dovere inderogabile di astensione per conflitto di interessi con informativa al dirigente.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_074",
    question: "In sede di sportello telefonico programmato, l'utente dichiara di non poter completare una richiesta di riscatto perché privo di posta elettronica ordinaria e di connessione a internet. Come garantisce il Funzionario PECS l'erogazione del servizio?",
    options: [
      { id: "A", text: "Informare l'utente della possibilità di inoltrare la domanda tramite il Contact Center nazionale (con identificazione a codice OTP telefonico) oppure avvalendosi dell'assistenza gratuita di un Ente di Patronato legalmente riconosciuto" },
      { id: "B", text: "Dire all'utente che non ha diritto ad alcuna prestazione" },
      { id: "C", text: "Farsi dettare il numero della carta di credito dell'utente" },
      { id: "D", text: "Interrompere bruscamente la chiamata senza fornire alternative" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario PECS orienta l'utente sui canali alternativi omnicanale previsti dall'Istituto (Contact Center telefonico e Patronati convenzionati) per assicurare il pieno godimento dei diritti anche a chi è privo di strumenti informatici.",
    hint: "Orientamento verso canali alternativi: Contact Center telefonico e Patronati convenzionati.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_075",
    question: "Il Funzionario PECS scopre che un'azienda cliente, destinataria di un provvedimento di recupero crediti contributivi per 80.000 euro, ha presentato ricorso amministrativo ma nel frattempo ha avviato una procedura di liquidazione volontaria con rischio di dispersione del patrimonio. Come agisce?",
    options: [
      { id: "A", text: "Segnalare tempestivamente la situazione di pericolo nell'esazione all'Ufficio Legale e alla Direzione Provinciale per l'eventuale adozione di misure cautelari a tutela del credito (es. richiesta di sequestro conservativo o iscrizione ipotecaria)" },
      { id: "B", text: "Attendere con calma la decisione del comitato tra due anni" },
      { id: "C", text: "Cancellare il debito dell'azienda dal bilancio" },
      { id: "D", text: "Avvisare l'amministratore dell'azienda di prelevare tutti i soldi dalla banca" }
    ],
    correctAnswerId: "A",
    explanation: "Il controllo e la tutela del credito previdenziale impongono prontezza operativa: in caso di pericolo di dispersione delle garanzie patrimoniali, il funzionario attiva i canali legali per le opportune tutele conservative a salvaguardia delle risorse pubbliche.",
    hint: "Segnalazione tempestiva all'Ufficio Legale per l'attivazione di misure cautelari a tutela del credito.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_SIT_076",
    question: "Un utente lamenta che la propria domanda di Assegno Unico è bloccata da tre mesi con lo stato 'In evidenza alla sede'. Il Funzionario PECS apre il fascicolo e nota che l'anomalia è dovuta a un semplice codice Iban intestato a un libretto postale non riconosciuto automaticamente dalla banca dati delle Poste. Cosa fa il funzionario?",
    options: [
      { id: "A", text: "Effettuare la validazione manuale dell'IBAN incrociando i dati anagrafici del titolare con la certificazione di conto esibita e procedere allo sblocco immediato della liquidazione dell'assegno e dei relativi arretrati" },
      { id: "B", text: "Respingere la domanda obbligando l'utente a rifare tutto da capo" },
      { id: "C", text: "Lasciare la pratica bloccata in attesa di un aggiornamento generale del software" },
      { id: "D", text: "Inviare l'assegno in contanti per posta ordinaria" }
    ],
    correctAnswerId: "A",
    explanation: "Le competenze operative del funzionario PECS servono proprio a risolvere gli 'scarti istruttori': verifica manuale della titolarità del conto tramite i riscontri documentali e sblocco tempestivo dei pagamenti con accredito degli arretrati.",
    hint: "Validazione manuale della titolarità dell'IBAN e sblocco immediato dei pagamenti con arretrati.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_077",
    question: "Nel corso di un audit interno, viene chiesto al Funzionario PECS responsabile di un'unità operativa di illustrare le ragioni di un calo temporaneo dell'indice di evasione delle pratiche nel mese precedente. Qual è la risposta corretta e professionale?",
    options: [
      { id: "A", text: "Fornire un'analisi oggettiva dei dati (es. incremento imprevisto delle istanze, concomitanza di ferie o assenze per malattia del personale, complessità normativa di una nuova circolare) e illustrare il piano di recupero concordato per riassorbire la giacenza" },
      { id: "B", text: "Mentire dicendo che i computer sono stati distrutti da un virus inesistente" },
      { id: "C", text: "Rifiutarsi di rispondere sostenendo che l'audit non ha diritto di controllare i funzionari" },
      { id: "D", text: "Incolpare esclusivamente i colleghi più giovani" }
    ],
    correctAnswerId: "A",
    explanation: "La cultura della valutazione e del controllo interno si basa sulla trasparenza, sull'evidenza empirica e sul problem solving: motivare le cause oggettive dello scostamento e presentare le misure correttive intraprese per ristabilire i target di performance.",
    hint: "Analisi oggettiva basata sui dati e presentazione del piano di recupero per riallineare i target.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_078",
    question: "Un utente straniero regolarmente soggiornante in Italia si presenta allo sportello per chiedere l'Assegno Sociale ma non parla italiano. Con sé ha un conoscente che afferma di voler fare da interprete ma che sembra sollecitare la firma su deleghe in bianco. Come agisce con prudenza il Funzionario PECS?",
    options: [
      { id: "A", text: "Verificare con cautela l'effettiva comprensione dell'utente, avvalersi eventualmente del servizio di mediazione linguistica e culturale attivabile dall'Istituto, spiegare chiaramente i requisiti di residenza decennale continuativa e impedire la firma di deleghe o moduli in bianco" },
      { id: "B", text: "Far firmare qualsiasi modulo al conoscente senza controllare nulla" },
      { id: "C", text: "Cacciare entrambi dall'edificio chiamando la polizia" },
      { id: "D", text: "Concedere la prestazione seduta stante senza verificare i requisiti" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario protegge i soggetti vulnerabili e previene abusi o circonvenzioni: ricorso a mediatori culturali ufficiali, divieto assoluto di accettazione di atti in bianco e verifica rigorosa del requisito della residenza decennale.",
    hint: "Tutela dell'utente fragile, attivazione della mediazione linguistica e divieto di deleghe in bianco.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_079",
    question: "Al Funzionario PECS viene segnalato che un operatore economico fornitore della sede per contratti sotto-soglia ha inviato un cesto natalizio con prodotti di valore stimato di circa 300 euro indirizzato all'ufficio. Cosa prescrive il Codice di Comportamento?",
    options: [
      { id: "A", text: "Il regalo non può essere accettato in quanto eccede il modico valore (fissato orientativamente in 150 euro), deve essere immediatamente restituito al mittente o devoluto a fini benefici secondo le direttive dell'amministrazione, informando il RPCT" },
      { id: "B", text: "Dividere il cesto tra i dipendenti senza dire nulla" },
      { id: "C", text: "Vendere i prodotti e tenere il ricavato per le cene aziendali" },
      { id: "D", text: "Accettarlo solo se il fornitore promette di fare lo stesso ogni anno" }
    ],
    correctAnswerId: "A",
    explanation: "Il Codice di Comportamento (art. 4 D.P.R. 62/2013) vieta l'accettazione di regali o altre utilità che superino il modico valore (fissato nel limite massimo di 150 euro). Regali superiori devono essere rifiutati, restituiti o devoluti all'ente per fini istituzionali.",
    hint: "Superamento del limite di modico valore (150 euro): restituzione obbligatoria e informativa al RPCT.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_080",
    question: "Il Funzionario PECS addetto alla progettazione dei processi nota che una richiesta informativa cartacea inviata all'Agenzia delle Entrate per verificare rendite catastali richiede in media 45 giorni di attesa bloccando centinaia di pensioni. Qual è la proposta innovativa più corretta da avanzare?",
    options: [
      { id: "A", text: "Proporre al proprio dirigente di attivare un tavolo tecnico per l'integrazione di un servizio web di cooperazione applicativa (API) tramite la PDND (Piattaforma Digitale Nazionale Dati) per consentire l'interrogazione istantanea in tempo reale dei dati catastali" },
      { id: "B", text: "Smettere di verificare le rendite catastali ignorando la legge" },
      { id: "C", text: "Inviare un funzionario in bicicletta tutti i giorni presso l'Agenzia delle Entrate" },
      { id: "D", text: "Respingere d'ufficio tutte le domande di pensione per liberarsi del carico" }
    ],
    correctAnswerId: "A",
    explanation: "Il ruolo del Funzionario PECS è innovare i processi pubblici: di fronte a inefficienze di interscambio documentale tra PA, la soluzione strutturale è la cooperazione applicativa interoperabile tramite la PDND ai sensi del CAD.",
    hint: "Proposta di cooperazione applicativa digitale e interoperabilità dati tramite PDND.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_081",
    question: "Nel corso di una lavorazione di sgravi contributivi per nuove assunzioni a tempo indeterminato (Legge di Bilancio), il sistema scarta la richiesta dell'azienda per 'assenza di incremento occupazionale netto'. Il consulente invia memoria dimostrando che il calcolo ULA del sistema ha erroneamente conteggiato un lavoratore in congedo. Cosa fa il funzionario?",
    options: [
      { id: "A", text: "Riesaminare analiticamente il calcolo delle Unità di Lavoro Annuo (ULA) alla luce dei chiarimenti forniti, verificare l'effettiva base occupazionale e procedere in autotutela alla correzione manuale con accoglimento del legittimo sgravio spettante" },
      { id: "B", text: "Respingere la memoria senza leggerla per principio" },
      { id: "C", text: "Cancellare l'azienda dall'elenco delle imprese della provincia" },
      { id: "D", text: "Consigliare al consulente di fare causa all'INPS" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario PECS garantisce la correttezza sostanziale dell'azione amministrativa: valuta le memorie difensive aziendali, ricalcola le ULA correggendo l'algoritmo automatico e applica lo sgravio legittimamente spettante in autotutela.",
    hint: "Ricalcolo analitico delle ULA e correzione in autotutela a favore del contribuente.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_SIT_082",
    question: "Un utente in sala d'attesa manifesta improvvisamente un malore cardiaco accasciandosi a terra. In qualità di Funzionario incaricato del coordinamento dell'accoglienza di sede, quale procedura di emergenza attivi immediatamente?",
    options: [
      { id: "A", text: "Allertare immediatamente il Numero Unico Europeo per le Emergenze 112, attivare contestualmente gli addetti aziendali al primo soccorso presenti in sede per l'utilizzo del DAE (defibrillatore) e liberare l'area facilitando l'accesso ai sanitari" },
      { id: "B", text: "Chiedere all'utente di esibire il tesserino sanitario per verificare i contributi" },
      { id: "C", text: "Allontanarsi dall'edificio e chiudere le porte a chiave" },
      { id: "D", text: "Attendere la fine dell'orario di apertura prima di intervenire" }
    ],
    correctAnswerId: "A",
    explanation: "La sicurezza nei luoghi di lavoro e la tutela dell'incolumità pubblica prevalgono su qualsiasi adempimento burocratico: chiamata tempestiva al 112, attivazione degli addetti al primo soccorso e impiego del defibrillatore presente in sede.",
    hint: "Chiamata immediata al 112, attivazione della squadra di primo soccorso e uso del DAE.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_083",
    question: "Il Funzionario PECS riceve da un cittadino una segnalazione scritta e circostanziata su una presunta azienda fantasma che assumerebbe braccianti fittizi per percepire indennità di disoccupazione e maternità. Come tratta la segnalazione?",
    options: [
      { id: "A", text: "Assumerla formalmente agli atti, garantire la riservatezza dell'identità del segnalante, svolgere i riscontri preliminari sulle banche dati aziendali e trasmettere il fascicolo al Nucleo di Vigilanza Ispettiva e al Direttore di sede per le indagini di competenza" },
      { id: "B", text: "Pubblicare la segnalazione con nome e cognome del denunciante sui social network" },
      { id: "C", text: "Telefonare all'azienda per avvisarla di regolarizzare i braccianti" },
      { id: "D", text: "Distruggere la lettera ritenendola una perdita di tempo" }
    ],
    correctAnswerId: "A",
    explanation: "Le denunce di frode devono essere gestite con rigorosa riservatezza (tutela del whistleblower o segnalante), sottoposte a verifica documentale preliminare e trasmesse tempestivamente ai servizi ispettivi per le opportune verifiche di contrasto alle 'cartiere'.",
    hint: "Tutela della riservatezza, verifica documentale e inoltro tempestivo al nucleo ispettivo.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_084",
    question: "Nel predisporre la Sezione 'Valore Pubblico e Performance' del PIAO per la propria direzione provinciale, quale indicatore proporresti per misurare l'accessibilità dei servizi per l'utenza fragile?",
    options: [
      { id: "A", text: "La percentuale di appuntamenti garantiti a domicilio o tramite video-consulenza dedicata per persone con disabilità o non autosufficienti entro 5 giorni dalla richiesta" },
      { id: "B", text: "Il numero di multe elevate per divieto di sosta nel parcheggio aziendale" },
      { id: "C", text: "Il numero totale di caffè consumati dai visitatori" },
      { id: "D", text: "La spesa complessiva per cancelleria di sede" }
    ],
    correctAnswerId: "A",
    explanation: "Un indicatore di Valore Pubblico per l'utenza fragile deve misurare l'impatto reale sul benessere e sull'inclusione: monitorare l'accesso proattivo, la video-consulenza e gli interventi a domicilio garantiti a soggetti non deambulanti o fragili entro tempi certi.",
    hint: "Indicatore di impatto reale sull'inclusione e tempestività dei servizi dedicati ai fragili.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_085",
    question: "Durante l'orario di lavoro ordinario, un collega propone al Funzionario PECS di svolgere una consulenza retribuita per un sindacato locale che gestisce pratiche pensionistiche da presentare all'INPS. Qual è la risposta giuridicamente corretta?",
    options: [
      { id: "A", text: "Rifiutare fermamente la proposta, in quanto l'art. 53 del D.Lgs. 165/2001 sancisce il divieto assoluto per i dipendenti pubblici di assumere incarichi o collaborazioni con soggetti che abbiano rapporti diretti o interessi collegati con l'ufficio di appartenenza, configurando incompatibilità assoluta e conflitto di interessi" },
      { id: "B", text: "Accettare purché la consulenza venga pagata in contanti senza fattura" },
      { id: "C", text: "Accettare chiedendo solo uno sconto sulla tessera sindacale" },
      { id: "D", text: "Svolgere l'attività durante l'orario di servizio usando il computer dell'Istituto" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 53 D.Lgs. 165/2001 vieta in modo perentorio incarichi professionali retribuiti a favore di enti o soggetti (patronati, sindacati, consulenti) che intrattengono rapporti operativi costanti con l'amministrazione, integrando insanabile conflitto di interessi e causa di licenziamento.",
    hint: "Incompatibilità assoluta ex art. 53 D.Lgs. 165/2001 e divieto di consulenze a soggetti collegati.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_086",
    question: "Un utente presenta istanza di riesame di una domanda di pensione respinta 6 mesi prima, producendo nuova documentazione probatoria che attesta versamenti contributivi esteri precedentemente non noti alla sede. Come procede il funzionario?",
    options: [
      { id: "A", text: "Acquisire la nuova documentazione, accertare la fondatezza dell'istanza e, verificata la sussistenza del diritto, procedere in autotutela alla revoca o riforma del precedente diniego con liquidazione della pensione dalla data di maturazione del diritto" },
      { id: "B", text: "Rifiutarsi di esaminare la documentazione affermando che una decisione dell'INPS è per sempre immutabile" },
      { id: "C", text: "Imporre all'utente di fare ricorso alla Corte Costituzionale" },
      { id: "D", text: "Chiedere una penale di 500 euro per il ritardo nella consegna" }
    ],
    correctAnswerId: "A",
    explanation: "L'autotutela amministrativa positiva (art. 21-nonies L. 241/90 e prassi INPS) consente alla sede di rimediare tempestivamente al diniego pregresso a fronte di fatti nuovi documentati, riconoscendo la spettanza del diritto pensionistico senza costringere il cittadino al contenzioso.",
    hint: "Esercizio dell'autotutela con riforma del diniego e riconoscimento della prestazione.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_087",
    question: "Il Funzionario PECS rileva che in un comune montano la connessione internet della sede municipale è spesso assente, impedendo agli anziani di utilizzare il Punto INPS. Quale soluzione tecnica e organizzativa può proporre per non interrompere il servizio?",
    options: [
      { id: "A", text: "Proporre la fornitura al Punto INPS di un dispositivo di connettività mobile di backup (router 4G/5G protetto con VPN istituzionale) e concordare giornate di sportello in presenza cadenzate con il funzionario itinerante" },
      { id: "B", text: "Sopprimere definitivamente il Punto INPS risparmiando sui costi" },
      { id: "C", text: "Dire agli anziani di scendere a valle a piedi ogni settimana" },
      { id: "D", text: "Comunicare con il comune tramite segnali di fumo" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario per la progettazione ed erogazione dei servizi ricerca soluzioni resilienti e inclusive: connettività mobile di backup in VPN sicura e servizio itinerante programmato per non lasciare isolate le comunità montane.",
    hint: "Soluzione tecnologica di backup (router 4G/5G in VPN) e presidio itinerante a tutela delle comunità montane.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_088",
    question: "Nel corso della redazione del Bilancio Sociale di sede, al Funzionario PECS viene affidata l'analisi dell'impatto dell'Assegno di Inclusione nel territorio provinciale. Quali dati sintetici è opportuno valorizzare?",
    options: [
      { id: "A", text: "Il numero dei nuclei beneficiari, la ripartizione per tipologia di fragilità (minori, disabili, over 60), l'importo medio erogato, l'incidenza sulle famiglie sotto la soglia di povertà e il numero di patti di inclusione attivati con i servizi sociali" },
      { id: "B", text: "Il consumo di caffè del personale durante la lavorazione delle pratiche ADI" },
      { id: "C", text: "La marca dei computer utilizzati per inserire le domande" },
      { id: "D", text: "Il meteo registrato nei giorni di erogazione dei bonifici" }
    ],
    correctAnswerId: "A",
    explanation: "Il bilancio sociale quantifica il 'valore pubblico' generato dall'Istituto: famiglie sostenute, riduzione della povertà assoluta e territoriale, integrazione sociale tra INPS, Comuni e Terzo Settore.",
    hint: "Metriche di impatto sociale: nuclei fragili sostenuti, importo medio e integrazione con i servizi territoriali.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_089",
    question: "Un utente telefona in lacrime dicendo di aver ricevuto una notifica per 'indebito pensionistico' di 3.000 euro e di non essere in grado di restituire la somma in un'unica soluzione, temendo il pignoramento della casa. Come lo rassicura e lo guida operativamente il Funzionario PECS?",
    options: [
      { id: "A", text: "Rassicurarlo con calma spiegandogli che l'Istituto non procede al pignoramento della casa per tali fattispecie, che la legge consente un piano di rateizzazione dell'indebito fino a 24 o 36 rate mensili proporzionate al suo reddito, e invitarlo a presentare la richiesta tramite cassetto o patronato" },
      { id: "B", text: "Confermare con freddezza che la casa verrà venduta all'asta entro una settimana" },
      { id: "C", text: "Riagganciare il telefono per non ascoltare pianti" },
      { id: "D", text: "Consigliargli di fuggire all'estero sotto falso nome" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario pubblico unisce umanità e rispetto della norma: rassicura l'utente sulle tutele di legge, sfata allarmismi ingiustificati e illustra le opzioni concrete di dilazione e rateizzazione sostenibile del debito.",
    hint: "Rassicurazione sul piano umano, spiegazione della dilazione rateale sostenibile e guida operativa.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_090",
    question: "Durante l'istruttoria di una richiesta di indennità di maternità a favore di una lavoratrice autonoma della Gestione Separata, il Funzionario nota che manca il versamento di una mensilità contributiva nel periodo di riferimento per pochi euro. Cosa fa per non far decadere la prestazione?",
    options: [
      { id: "A", text: "Contattare tempestivamente la lavoratrice o l'intermediario segnalando la lieve carenza contributiva e indicando la modalità di regolarizzazione spontanea entro termini congrui, consentendo la liquidazione della tutela genitoriale appena perfezionato il versamento" },
      { id: "B", text: "Respingere la maternità irrevocabilmente per punire l'inadempimento" },
      { id: "C", text: "Fingere che il versamento ci sia e falsificare i registri contabili" },
      { id: "D", text: "Archiviare la pratica per 5 anni senza alcuna risposta" }
    ],
    correctAnswerId: "A",
    explanation: "La tutela costituzionale della maternità (art. 31 Cost.) e il dovere di leale collaborazione tra cittadino e PA impongono la tempestiva segnalazione dell'anomalia sanabile, permettendo la regolarizzazione del modesto debito e la salvaguardia del diritto alla prestazione.",
    hint: "Segnalazione tempestiva della carenza sanabile per salvaguardare la tutela della maternità.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_091",
    question: "Un dirigente chiede al Funzionario PECS di predisporre una sintesi delle procedure operative per il nuovo personale assegnato all'area ammortizzatori sociali. Quale strumento metodologico è più opportuno adottare?",
    options: [
      { id: "A", text: "Una Standard Operating Procedure (SOP) strutturata con flowchart di processo, checklist delle verifiche obbligatorie, riferimenti normativi e circolari applicabili e schermate guidate degli applicativi" },
      { id: "B", text: "Un elenco non ordinato di numeri di telefono di colleghi in pensione" },
      { id: "C", text: "Un riassunto a memoria scritto a mano su un foglio volante" },
      { id: "D", text: "Una raccolta di articoli di giornale sui licenziamenti" }
    ],
    correctAnswerId: "A",
    explanation: "La qualità del servizio e l'omogeneità dei comportamenti dipendono dalla standardizzazione: SOP, flow-chart di processo e checklist permettono l'inserimento rapido dei nuovi funzionari riducendo drasticamente il tasso di errore istruttorio.",
    hint: "SOP strutturata con flowchart di processo, checklist operative e richiamo alle circolari.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_092",
    question: "Nel monitorare la casella istituzionale PEC della sede, il Funzionario PECS individua la notifica di un ricorso giudiziale dinanzi al Tribunale del Lavoro con udienza fissata a breve scadenza. Qual è la prima operazione da compiere?",
    options: [
      { id: "A", text: "Protocollare immediatamente l'atto in entrata con marcatura di massima urgenza, trasmetterlo senza ritardo all'Ufficio Legale territoriale dell'INPS per la costituzione in giudizio e informare il responsabile di linea per la predisposizione del fascicolo amministrativo" },
      { id: "B", text: "Cancellare la PEC fingendo di non averla mai ricevuta" },
      { id: "C", text: "Rispondere all'avvocato che l'INPS non riconosce l'autorità del Tribunale" },
      { id: "D", text: "Conservare l'atto in un cassetto per leggerlo dopo le ferie" }
    ],
    correctAnswerId: "A",
    explanation: "Gli atti giudiziari hanno termini processuali perentori e decadenziali stringenti: immediata protocollazione, trasmissione urgente all'Ufficio Legale per consentire ai procuratori dell'ente di costituirsi tempestivamente e preparazione degli atti istruttori.",
    hint: "Protocollazione urgente, trasmissione immediata all'Ufficio Legale e predisposizione fascicolo.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_093",
    question: "Un utente si presenta allo sportello con una procura speciale autenticata conferitagli da un familiare allettato per riscuotere informazioni sul rateo di tredicesima. Il Funzionario PECS come deve procedere?",
    options: [
      { id: "A", text: "Verificare la validità formale della procura e del documento di identità del delegato e del delegante, acquisirne copia e fornire le informazioni richieste nel rispetto della normativa sul trattamento dei dati personali" },
      { id: "B", text: "Rifiutare l'assistenza pretendendo che il familiare allettato si alzi e venga di persona" },
      { id: "C", text: "Chiedere al delegato di pagare una tassa di procura di 100 euro all'ufficio" },
      { id: "D", text: "Chiamare la polizia municipale per allontanare il delegato" }
    ],
    correctAnswerId: "A",
    explanation: "La rappresentanza volontaria tramite delega o procura valida tutela l'accesso ai diritti delle persone impossibilitate a muoversi: verificata l'autenticità e l'identità delle parti, il funzionario eroga legittimamente il servizio.",
    hint: "Verifica della validità formale della delega/procura e identità delle parti, ed erogazione del servizio.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_094",
    question: "Nel corso di un progetto pilota per l'implementazione dell'intelligenza artificiale generativa nella classificazione automatica dei quesiti degli utenti, il Funzionario PECS è chiamato a validare i risultati del modello. Qual è il suo compito principale?",
    options: [
      { id: "A", text: "Verificare l'accuratezza semantica delle risposte proposte dall'algoritmo, assicurare che non vi siano allucinazioni o errori nell'interpretazione delle circolari, e garantire che l'intervento decisionale umano resti sempre l'elemento determinante della risposta finale ('human-in-the-loop')" },
      { id: "B", text: "Accettare tutte le risposte del computer senza verificarne alcuna" },
      { id: "C", text: "Spegnere i server per impedire l'uso di qualsiasi tecnologia moderna" },
      { id: "D", text: "Sostituire tutte le leggi dello Stato con le risposte dell'IA" }
    ],
    correctAnswerId: "A",
    explanation: "Nelle amministrazioni digitali avanzate l'IA assiste ma non sostituisce il funzionario pubblico: il principio 'human-in-the-loop' garantisce il controllo umano, la correttezza giuridica e la responsabilità amministrativa del provvedimento finale.",
    hint: "Controllo dell'accuratezza giuridica e garanzia del principio di supervisione umana (human-in-the-loop).",
    level: "avanzato"
  },
  {
    id: "Q_PECS_SIT_095",
    question: "Un utente presenta formale reclamo scritto lamentando un ritardo di oltre 90 giorni nella lavorazione della sua domanda di riscatto di laurea. Qual è il dovere del Funzionario PECS competente?",
    options: [
      { id: "A", text: "Istruire tempestivamente il reclamo, verificare le cause oggettive del ritardo, inviare all'utente una risposta formale motivata e trasparente scusandosi per il disservizio e contestualmente concludere e liquidare il provvedimento di riscatto" },
      { id: "B", text: "Cestinare il reclamo sostenendo che gli utenti non hanno diritto di lamentarsi" },
      { id: "C", text: "Minacciare l'utente di bocciare la sua pratica per ritorsione" },
      { id: "D", text: "Far rispondere dal portiere della sede" }
    ],
    correctAnswerId: "A",
    explanation: "La gestione dei reclami è un elemento cardine della Carta dei Servizi dell'INPS e della trasparenza: risposta motivata entro i tempi prescritti, assunzione di responsabilità per il disservizio e tempestiva evasione della pratica pendente.",
    hint: "Presa in carico tempestiva, risposta formale trasparente e conclusione immediata dell'istruttoria.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_096",
    question: "In sede di sportello territoriale, un rappresentante sindacale chiede di ottenere l'elenco nominativo con indirizzi di tutti i pensionati della provincia per invitarli a un'assemblea. Come deve comportarsi il Funzionario PECS?",
    options: [
      { id: "A", text: "Opporre un diniego motivato e fermo, in quanto la cessione a terzi di elenchi nominativi di pensionati con dati anagrafici e di contatto costituisce una gravissima violazione del Regolamento UE 2016/679 (GDPR) e della disciplina della privacy" },
      { id: "B", text: "Consegnare l'elenco su una chiavetta USB chiedendo in cambio un caffè" },
      { id: "C", text: "Pubblicare l'elenco dei pensionati sulla bacheca dell'ingresso" },
      { id: "D", text: "Farsi promettere che i dati non saranno mostrati a nessuno" }
    ],
    correctAnswerId: "A",
    explanation: "I dati personali dei pensionati sono protetti dal GDPR: non possono essere ceduti né comunicati a terzi (neppure organizzazioni sindacali o patronati) senza specifica base giuridica o consenso esplicito dell'interessato.",
    hint: "Diniego assoluto a tutela della privacy e conformità inderogabile al GDPR.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_097",
    question: "Durante l'aggiornamento periodico del fascicolo previdenziale aziendale, il Funzionario PECS nota che un'azienda ha continuato a conguagliare assegni familiari anche dopo l'entrata a regime dell'Assegno Unico e Universale per periodi successivi al 1° marzo 2022. Come agisce?",
    options: [
      { id: "A", text: "Emettere formale Nota di Rettifica per indebito conguaglio, richiedere all'azienda la restituzione delle somme illegittimamente portate a credito conguagliandole nel flusso Uniemens successivo, informando il datore di lavoro dell'errore normativo" },
      { id: "B", text: "Lasciare che l'azienda continui a conguagliare per sempre" },
      { id: "C", text: "Chiudere d'autorità l'attività aziendale senza contraddittorio" },
      { id: "D", text: "Pagare la differenza con i fondi del comitato provinciale" }
    ],
    correctAnswerId: "A",
    explanation: "Dall'entrata in vigore dell'Assegno Unico (marzo 2022) gli assegni al nucleo familiare (ANF) per i figli sono stati soppressi e non possono essere posti a conguaglio dai datori: la sede emette Nota di Rettifica per recuperare l'indebito credito.",
    hint: "Emissione di Nota di Rettifica per recupero dell'indebito credito conguagliato.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_098",
    question: "Un Funzionario PECS si accorge che in sede di calcolo di una pensione di vecchiaia il sistema automatico ha applicato i coefficienti di trasformazione dell'anno precedente anziché quelli biennali aggiornati vigenti alla data di decorrenza del trattamento. Qual è l'atto corretto?",
    options: [
      { id: "A", text: "Attivare immediatamente la procedura di ricalcolo del trattamento applicando i coefficienti corretti vigenti alla decorrenza, emettendo la rettifica d'ufficio e notificando all'assicurato il nuovo provvedimento conguagliando gli importi spettanti" },
      { id: "B", text: "Mantenere l'errore per non ammettere il difetto dell'algoritmo" },
      { id: "C", text: "Invitare il pensionato a fare causa civile per ottenere la rettifica" },
      { id: "D", text: "Cancellare la pensione revocando il diritto" }
    ],
    correctAnswerId: "A",
    explanation: "Il coefficiente di trasformazione deve essere inderogabilmente quello in vigore alla data di decorrenza della pensione: l'Istituto interviene d'ufficio in autotutela per ricalcolare l'assegno corretto liquidando i dovuti arretrati.",
    hint: "Ricalcolo in autotutela con applicazione dei coefficienti vigenti e liquidazione degli arretrati.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_099",
    question: "Nel contesto dell'attuazione degli obiettivi di parità di genere (Missione 5 PNRR), il Funzionario PECS coordina la campagna di sensibilizzazione sull'utilizzo paritario dei congedi parentali da parte dei padri lavoratori dipendenti. Quale azione operativa promuove?",
    options: [
      { id: "A", text: "Predisporre guide informative accessibili online e sui social istituzionali, inviare messaggi proattivi tramite App IO ai neogenitori evidenziando l'indennità maggiorata all'80% per i primi mesi e il congedo obbligatorio di 10 giorni" },
      { id: "B", text: "Vietare alle madri di fruire dei congedi per costringere i padri" },
      { id: "C", text: "Sanzionare le aziende che assumono personale femminile" },
      { id: "D", text: "Rifiutare l'erogazione dei congedi fino al compimento dei 18 anni" }
    ],
    correctAnswerId: "A",
    explanation: "Il valore pubblico dell'INPS promuove la coesione sociale e le pari opportunità: comunicazione omnicanale, messaggistica proattiva e valorizzazione delle tutele normative e retributive previste per la genitorialità condivisa.",
    hint: "Campagna informativa multicanale, notifiche proattive App IO e valorizzazione delle tutele di legge.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_100",
    question: "Quale tratto distintivo caratterizza l'identità professionale del 'Funzionario PECS' nella Pubblica Amministrazione del futuro?",
    options: [
      { id: "A", text: "Un professionista capace di combinare rigore giuridico-amministrativo, padronanza delle tecnologie digitali e dei processi organizzativi, orientamento all'inclusione dei cittadini fragili e costante tensione al contrasto delle frodi a tutela del bilancio pubblico" },
      { id: "B", text: "Un burocrate chiuso nel proprio ufficio indifferente ai bisogni dell'utenza" },
      { id: "C", text: "Un passacarte che si limita a timbrare documenti senza leggerli" },
      { id: "D", text: "Un venditore di polizze assicurative private a scopo di lucro personale" }
    ],
    correctAnswerId: "A",
    explanation: "Il profilo del Funzionario per la Progettazione, Erogazione e Controllo dei Servizi rappresenta il funzionario moderno della PA: legalità, innovazione tecnologica, orientamento all'utente e tutela dei beni comuni previdenziali.",
    hint: "Rigore giuridico, padronanza digitale, orientamento all'inclusione e contrasto all'illegalità.",
    level: "base"
  }
];

const merged = [...existing, ...newQuestions];
fs.writeFileSync(targetFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Successfully added ${newQuestions.length} questions to casi_operativi.json. Total questions: ${merged.length}`);
