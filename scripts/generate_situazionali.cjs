const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/db/master_bank/situazionali');
fs.mkdirSync(dir, { recursive: true });

const questions = [
  {
    id: "Q_PECS_SIT_001",
    question: "Un utente anziano si presenta allo sportello visibilmente confuso e allarmato perché la sua pensione del mese corrente risulta decurtata. Qual è il comportamento più professionale ed efficace da adottare per il funzionario PECS?",
    options: [
      { id: "A", text: "Accogliere l'utente con empatia e calma, farlo accomodare, consultare immediatamente il fascicolo previdenziale per verificare la causale della variazione (es. conguaglio fiscale o recupero indebito) e spiegargli la situazione con un linguaggio chiaro e privo di gerghi tecnici incomprensibili, rilasciandogli un promemoria scritto" },
      { id: "B", text: "Invitare sbrigativamente l'utente a rivolgersi al proprio CAF o Patronato perché lo sportello non è tenuto a dare spiegazioni sui cedolini" },
      { id: "C", text: "Liquidare la questione dicendo che si tratta sicuramente delle tasse comunali e che l'INPS non ha alcuna responsabilità" },
      { id: "D", text: "Chiedergli di tornare solo dopo aver presentato un ricorso formale cartaceo con marca da bollo" }
    ],
    correctAnswerId: "A",
    explanation: "Nel profilo PECS l'orientamento all'utenza e la capacità di de-escalation dell'ansia sono fondamentali: ascolto attivo, verifica tempestiva nei sistemi gestionali, spiegazione trasparente e supporto documentale concreto al cittadino fragile.",
    hint: "Ascolto empatico, verifica puntuale sul sistema e spiegazione con linguaggio accessibile.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_002",
    question: "Un operatore di un patronato locale alza la voce allo sportello di front-office, contestando animatamente davanti ad altri utenti il rigetto di un'istanza di Assegno di Inclusione. Come deve gestire la situazione il funzionario?",
    options: [
      { id: "A", text: "Mantenere un tono fermo, calmo e professionale, evitare di rispondere con aggressività, invitare l'operatore in un'area riservata di consulenza per esaminare congiuntamente le motivazioni ostative dell'istruttoria ed eventualmente indicare le modalità per presentare istanza di riesame in autotutela con documentazione integrativa" },
      { id: "B", text: "Urlare a propria volta per farsi rispettare ed espellere immediatamente l'operatore con la forza pubblica" },
      { id: "C", text: "Accogliere subito la domanda annullando il rigetto pur di far cessare la protesta" },
      { id: "D", text: "Allontanarsi dalla postazione lasciando l'operatore e gli altri utenti senza presidio" }
    ],
    correctAnswerId: "A",
    explanation: "La gestione del conflitto richiede autocontrollo, tutela della riservatezza e della tranquillità della sala d'attesa (isolando la discussione in un ufficio dedicato) e ricerca di una soluzione tecnica fondata sulla normativa (riesame motivato).",
    hint: "Autocontrollo, spostamento del confronto in area riservata ed esame tecnico delle cause del diniego.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_003",
    question: "Durante l'istruttoria di una domanda di ricostituzione della pensione, il funzionario PECS si accorge che il richiedente è il proprio suocero. Cosa deve fare conformemente al Codice di Comportamento dei dipendenti pubblici?",
    options: [
      { id: "A", text: "Astenersi immediatamente dalla trattazione della pratica, comunicando tempestivamente per iscritto la sussistenza della relazione di parentela/affinità al proprio responsabile di unità affinché la pratica sia riassegnata ad altro funzionario" },
      { id: "B", text: "Lavorare la pratica con la massima rapidità possibile per fare un favore alla famiglia" },
      { id: "C", text: "Rigettare la domanda a prescindere per evitare qualsiasi sospetto di favoritismo" },
      { id: "D", text: "Trattare la pratica senza dire nulla a nessuno purché i calcoli siano corretti" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 6-bis L. 241/1990 e dell'art. 7 D.P.R. 62/2013, sussiste l'obbligo assoluto di astensione in caso di conflitto di interessi, anche solo potenziale, che coinvolga parenti o affini fino al secondo grado.",
    hint: "Obbligo immediato di astensione e segnalazione scritta al superiore.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_004",
    question: "Un utente, per manifestare la propria gratitudine per la sollecita liquidazione di una prestazione di invalidità civile, recapita al funzionario un cesto natalizio con prodotti gastronomici del valore approssimativo di 250 euro. Come deve agire il funzionario?",
    options: [
      { id: "A", text: "Rifiutare il dono spiegando con garbo che il Codice di Comportamento vieta di accettare regali di valore non modico (superiore a 150 euro o diverso limite fissato dall'ente) e che il servizio reso rientrava nei normali doveri d'ufficio; qualora il regalo non possa essere restituito, metterlo a disposizione dell'amministrazione" },
      { id: "B", text: "Accettare il regalo e portarlo a casa propria ringraziando calorosamente l'utente" },
      { id: "C", text: "Accettare il regalo e dividerlo clandestinamente solo con i colleghi della propria stanza" },
      { id: "D", text: "Chiedere all'utente di sostituire il cibo con denaro contante" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 4 del D.P.R. 62/2013 vieta al dipendente pubblico di accettare regali, compensi o altre utilità che superino il valore modico (fissato normalmente in 150 euro o inferiore da regolamento interno) e comunque connessi all'attività d'ufficio.",
    hint: "Divieto di accettare regali di valore non modico: rifiuto cortese o messa a disposizione dell'ente.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_005",
    question: "Il funzionario PECS riscontra che un collega della stessa linea di prodotto si trova in forte affanno a causa di un improvviso carico di domande di NASpI, con il rischio di sforare i tempi standard della Carta dei Servizi. Qual è l'atteggiamento collaborativo più idoneo?",
    options: [
      { id: "A", text: "Concordare con il responsabile di team una temporanea redistribuzione dei carichi di lavoro, offrendo il proprio supporto per smaltire le pratiche standardizzate e condividere buone prassi operative" },
      { id: "B", text: "Disinteressarsi completamente del problema poiché ciascuno deve occuparsi solo delle proprie pratiche assegnate" },
      { id: "C", text: "Denunciare pubblicamente il collega per scarso rendimento davanti agli utenti" },
      { id: "D", text: "Rallentare appositamente il proprio lavoro per solidarietà" }
    ],
    correctAnswerId: "A",
    explanation: "Il lavoro di squadra e l'orientamento al risultato comune sono parametri centrali della performance organizzativa: supportare i colleghi in difficoltà tutela il livello di servizio garantito all'utenza.",
    hint: "Collaborazione proattiva e riallineamento dei carichi in accordo con il responsabile.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_006",
    question: "Un utente privo di strumenti informatici e di SPID/CIE si reca all'INPS per richiedere l'Assegno Unico per i suoi due figli minori. Come deve supportarlo il funzionario di accoglienza?",
    options: [
      { id: "A", text: "Informarlo sulla possibilità di utilizzare il servizio di delega dell'identità digitale o di rivolgersi gratuitamente a un Patronato convenzionato, oppure supportarlo nell'accesso assistito presso la postazione di prossimità 'Punto Digitale Facile' della sede" },
      { id: "B", text: "Respingere l'utente intimandogli di comprarsi uno smartphone o rinunciare all'assegno" },
      { id: "C", text: "Farsi consegnare la carta bancomat con il codice PIN per compilare la domanda per suo conto" },
      { id: "D", text: "Compilare un modulo cartaceo obsoleto non più protocollabile a sistema" }
    ],
    correctAnswerId: "A",
    explanation: "La transizione digitale della PA non deve tradursi in esclusione sociale: il funzionario deve orientare i cittadini verso gli strumenti di facilitazione digitale istituzionali (delega digitale, patronati, sportelli assistiti).",
    hint: "Supporto all'inclusione digitale tramite strumenti autorizzati (delega, patronati, postazioni assistite).",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_007",
    question: "Un conoscente personale contatta informalmente via chat privata un funzionario INPS chiedendogli di controllare la posizione pensionistica e lo stipendio di una terza persona per motivi di curiosità. Come deve reagire il funzionario?",
    options: [
      { id: "A", text: "Rifiutare fermamente la richiesta, ricordando che l'accesso ai sistemi informativi dell'INPS per fini personali estranei ai compiti d'ufficio è severamente vietato, costituisce violazione del GDPR e integra il delitto di accesso abusivo a sistema informatico" },
      { id: "B", text: "Accedere al database e inviare uno screenshot dei dati dell'utente su WhatsApp" },
      { id: "C", text: "Farsi pagare una pizza per il favore concesso" },
      { id: "D", text: "Chiedere la password del profilo MyINPS del soggetto terzo per curiosare insieme" }
    ],
    correctAnswerId: "A",
    explanation: "La consultazione delle banche dati dell'INPS per finalità private o di terzi è penalmente perseguibile ex art. 615-ter c.p., viola il GDPR e il dovere di riservatezza, esponendo al licenziamento disciplinare.",
    hint: "Rifiuto categorico nel rispetto del segreto d'ufficio e delle normative penali e privacy.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_008",
    question: "A metà mattinata, durante l'orario di apertura dello sportello, la rete internet nazionale dell'INPS subisce un improvviso guasto tecnico bloccando i terminali per circa un'ora. Come deve gestire l'attesa degli utenti il responsabile di front-office?",
    options: [
      { id: "A", text: "Informare tempestivamente e con chiarezza tutti i presenti sull'accaduto e sui tempi stimati di ripristino, verificare se vi siano richieste urgenti gestibili con ricevuta manuale provvisoria e, per chi non può attendere, concordare un nuovo appuntamento prioritario o acquisire i contatti per ricontattarli a sistema ripristinato" },
      { id: "B", text: "Chiudere a chiave le porte dell'ufficio senza dare alcuna spiegazione e attendere in silenzio" },
      { id: "C", text: "Dire agli utenti di andare via e rifare la prenotazione dal sito da capo" },
      { id: "D", text: "Attribuire la colpa al governo e consigliare di protestare in piazza" }
    ],
    correctAnswerId: "A",
    explanation: "La trasparenza, la comunicazione tempestiva e l'orientamento alla soluzione (riprogrammazione prioritaria e gestione manuale delle urgenze) mantengono la calma e preservano la fiducia istituzionale anche in caso di disservizio tecnico.",
    hint: "Comunicazione immediata, gestione alternativa delle urgenze e riprogrammazione facilitata.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_009",
    question: "Un utente al telefono appare in gravissimo stato di disperazione ed esprime intenti autolesionistici dopo la comunicazione della sospensione dell'Assegno di Inclusione per mancata presentazione al centro per l'impiego. Qual è il comportamento corretto da tenere?",
    options: [
      { id: "A", text: "Ascoltare con grande attenzione e tono calmo senza interrompere bruscamente, rassicurare la persona sulla possibilità di verificare la pratica e presentare giustificativi formali, trattenere la persona al telefono cercando di farsi dare la localizzazione e contemporaneamente allertare i colleghi affinché avvisino i servizi di emergenza (112) e i servizi sociali" },
      { id: "B", text: "Riattaccare immediatamente la cornetta dicendo che l'INPS non è un pronto soccorso psicologico" },
      { id: "C", text: "Promettere verbalmente il pagamento immediato dell'assegno anche se non è vero" },
      { id: "D", text: "Prendere in giro l'utente accusandolo di fare una sceneggiata" }
    ],
    correctAnswerId: "A",
    explanation: "La tutela della vita umana prevale su ogni procedura burocratica: ascolto attivo, de-escalation emotiva e attivazione immediata dei soccorsi tramite il numero unico europeo di emergenza 112.",
    hint: "Ascolto rassicurante, de-escalation e immediata attivazione dei soccorsi tramite colleghi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_010",
    question: "Durante il controllo delle denunce mensili Uniemens, un funzionario addetto alla conformità rileva che un'azienda neocostituita ha assunto improvvisamente 40 dipendenti per sole due settimane, licenziandoli subito dopo per consentire loro di richiedere la NASpI. Qual è la condotta doverosa?",
    options: [
      { id: "A", text: "Segnalare tempestivamente l'anomalia al proprio dirigente e all'Unità di Controllo del Territorio/Antifrode dell'INPS per l'attivazione di una verifica ispettiva congiunta e l'eventuale blocco cautelativo della liquidazione delle prestazioni a rischio frode" },
      { id: "B", text: "Liquidare immediatamente tutte le indennità di disoccupazione per non far salire l'indice di giacenza" },
      { id: "C", text: "Telefonare al titolare dell'azienda per avvisarlo dell'anomalia prima di procedere" },
      { id: "D", text: "Cancellare i dati dal sistema per evitare lavoro aggiuntivo" }
    ],
    correctAnswerId: "A",
    explanation: "La vigilanza e il controllo antifrode sono compiti cardine del funzionario PECS: in presenza di indici di rischio di assunzioni fittizie occorre attivare i canali ispettivi e i blocchi procedurali a salvaguardia delle risorse pubbliche.",
    hint: "Segnalazione tempestiva agli organi ispettivi e antifrode e blocco cautelare dei pagamenti sospetti.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_011",
    question: "In un ufficio di gestione delle prestazioni a sostegno del reddito si crea una forte divergenza tra due funzionari sull'interpretazione di una recente circolare INPS inerente ai requisiti del congedo parentale. Come deve essere risolta la controversia tecnica?",
    options: [
      { id: "A", text: "Confrontarsi sui riferimenti normativi e sui messaggi applicativi emanati dalla Direzione Centrale, richiedendo se necessario un chiarimento al responsabile di unità o al referente regionale della materia, garantendo l'omogeneità di trattamento per tutti gli utenti" },
      { id: "B", text: "Lasciare che ciascun funzionario applichi la propria interpretazione personale a seconda del richiedente" },
      { id: "C", text: "Tirare a sorte la decisione con una moneta" },
      { id: "D", text: "Rigettare tutte le domande in attesa che i cittadini facciano ricorso al TAR" }
    ],
    correctAnswerId: "A",
    explanation: "L'omogeneità dell'azione amministrativa e la parità di trattamento impongono di risolvere i dubbi ermeneutici attraverso il confronto sui documenti di prassi e la consultazione della linea gerarchica specialistica.",
    hint: "Confronto sulla prassi ufficiale e interpello della direzione specialistica per garantire omogeneità.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_012",
    question: "Un utente lamenta con toni accesi che una pratica di maternità presentata due mesi prima non è stata ancora liquidata, causando gravi difficoltà economiche alla famiglia. Il funzionario riscontra che la pratica era rimasta bloccata per un banale errore di protocollo. Come deve porsi?",
    options: [
      { id: "A", text: "Riconoscere con trasparenza il disguido senza scaricare la colpa su singoli colleghi, scusarsi per il disagio arrecato, sbloccare ed elaborare la pratica in via prioritaria nella medesima giornata e comunicare all'utente i tempi certi di emissione del mandato di pagamento" },
      { id: "B", text: "Negare l'errore e sostenere che la colpa è della posta elettronica dell'utente" },
      { id: "C", text: "Invitare l'utente a ripresentare la domanda da capo perdendo l'anzianità di presentazione" },
      { id: "D", text: "Dire che due mesi di ritardo sono la normalità e che non c'è nulla da protestare" }
    ],
    correctAnswerId: "A",
    explanation: "La responsabilità pubblica e l'etica del servizio impongono di ammettere il disservizio, scusarsi a nome dell'amministrazione e adoperarsi immediatamente per risolvere il problema e disporre il pagamento prioritario.",
    hint: "Trasparenza, scuse per il disguido e lavorazione prioritaria immediata della prestazione.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_013",
    question: "Quale misura deve adottare il funzionario istruttore nel caso in cui rilevi una discrepanza tra la retribuzione dichiarata nel modello Uniemens dal datore di lavoro e quella risultante dal contratto individuale allegato dal dipendente?",
    options: [
      { id: "A", text: "Attivare il soccorso istruttorio richiedendo chiarimenti formali ed estratti paga sia al datore di lavoro che al lavoratore, segnalando se necessario la posizione per un controllo di conformità contributiva all'area vigilanza" },
      { id: "B", text: "Modificare d'ufficio i numeri a propria discrezione senza alcuna documentazione" },
      { id: "C", text: "Cancellare la posizione assicurativa del dipendente" },
      { id: "D", text: "Ignorare la differenza e procedere a caso" }
    ],
    correctAnswerId: "A",
    explanation: "In presenza di dati discordanti il principio del contraddittorio e il dovere di istruttoria (L. 241/1990) impongono di richiedere chiarimenti documentali e coinvolgere gli organi ispettivi in caso di anomalie retributive.",
    hint: "Soccorso istruttorio, richiesta documentale di chiarimenti e presidio ispettivo.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_014",
    question: "Un funzionario PECS è assegnato al gruppo di lavoro per la reingegnerizzazione di un servizio telematico di erogazione bonus. Qual è il contributo più efficace che può apportare?",
    options: [
      { id: "A", text: "Analizzare i motivi più frequenti di errore da parte degli utenti, proporre la semplificazione dei campi di compilazione con precompilazione automatica dai database INPS e suggerire controlli formali bloccanti preventivi per evitare il rifiuto a valle delle domande" },
      { id: "B", text: "Proporre di rendere la procedura più complicata per scoraggiare le richieste dei cittadini" },
      { id: "C", text: "Rifiutarsi di partecipare sostenendo che i software competono solo ai programmatori" },
      { id: "D", text: "Suggerire di ripristinare i moduli cartacei consegnati a mano" }
    ],
    correctAnswerId: "A",
    explanation: "La progettazione dei servizi (componente 'P' del profilo PECS) mira a semplificare i processi: l'esperienza di chi gestisce le pratiche serve a eliminare i punti critici, precaricare i dati e rendere il portale intuitivo.",
    hint: "Semplificazione, precompilazione automatica e riduzione degli errori ricorrenti degli utenti.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_015",
    question: "In caso di introduzione di una nuova normativa che modifica i requisiti per un ammortizzatore sociale, quale azione preliminare deve intraprendere il funzionario per assicurare la qualità del servizio?",
    options: [
      { id: "A", text: "Studiare attentamente la circolare esplicativa e il messaggio operativo dell'Istituto, partecipare ai momenti di briefing di reparto e predisporre schede sinottiche o FAQ per agevolare il lavoro comune e l'informazione all'utenza" },
      { id: "B", text: "Attendere che arrivino i primi reclami per capire come funziona la legge" },
      { id: "C", text: "Ignorare la novità continuando ad applicare la vecchia legge abrogata" },
      { id: "D", text: "Chiedere agli utenti allo sportello come intendono interpretare la legge" }
    ],
    correctAnswerId: "A",
    explanation: "L'aggiornamento professionale continuo e la condivisione della conoscenza con il gruppo di lavoro sono requisiti professionali imprescindibili del funzionario pubblico direttivo.",
    hint: "Studio approfondito della prassi ufficiale e condivisione operativa con il team.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_016",
    question: "Un utente straniero che parla a stento la lingua italiana si rivolge allo sportello per presentare domanda di pensione di reversibilità estera. Come deve comportarsi il funzionario?",
    options: [
      { id: "A", text: "Adottare un atteggiamento accogliente e paziente, verificare la possibilità di utilizzare moduli multilingue o l'assistenza linguistica prevista dal Contact Center/sportello, e indirizzarlo in modo chiaro verso il polo territoriale INPS per le convenzioni internazionali" },
      { id: "B", text: "Rifiutarsi di parlare dicendo che in Italia si parla solo italiano" },
      { id: "C", text: "Fargli firmare documenti in bianco senza spiegargli il contenuto" },
      { id: "D", text: "Allontanarlo chiamando la sicurezza della sede" }
    ],
    correctAnswerId: "A",
    explanation: "L'inclusione, il rispetto della dignità umana e l'uso degli strumenti multilingue per le convenzioni internazionali garantiscono l'accesso ai diritti previdenziali a tutti gli aventi diritto.",
    hint: "Pazienza, supporto con strumenti multilingue e orientamento verso il polo specializzato.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_017",
    question: "Un funzionario si accorge che nei registri cartacei storici e nell'estratto conto telematico di un lavoratore prossimo alla pensione mancano due anni di contributi effettivamente versati e documentati con buste paga e modelli O1/M originali. Come deve procedere?",
    options: [
      { id: "A", text: "Avviare tempestivamente la procedura di regolarizzazione della posizione assicurativa (RVPA), acquisire copia dei documenti storici probatori, effettuare le necessarie verifiche di cassa e accreditare i periodi spettanti prima della liquidazione della pensione" },
      { id: "B", text: "Dire al lavoratore che ormai i dati sono persi e che non si può fare nulla" },
      { id: "C", text: "Chiedere al lavoratore di pagare un riscatto oneroso per i periodi già lavorati" },
      { id: "D", text: "Cancellare la domanda di pensione per evitare contenziosi" }
    ],
    correctAnswerId: "A",
    explanation: "La ricostruzione della carriera assicurativa tramite la procedura RVPA (Richiesta Variazione Posizione Assicurativa) tutela il diritto soggettivo del cittadino alla corretta valorizzazione di tutti i periodi lavorati e coperti da contribuzione.",
    hint: "Regolarizzazione della posizione assicurativa (RVPA) su base documentale probatoria.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_018",
    question: "Nel corso di una riunione operativa di sede, emerge che i tempi medi di lavorazione dell'invalidità civile hanno superato la soglia critica dei 60 giorni. Il responsabile chiede proposte di intervento ai funzionari. Quale proposta appare più coerente con i principi di efficienza?",
    options: [
      { id: "A", text: "Proporre l'attivazione di sedute straordinarie delle commissioni mediche integrate, la digitalizzazione preventiva di tutti i certificati sanitari mediante fascicolo elettronico e l'adozione di un sistema di pre-istruttoria documentale prima della visita" },
      { id: "B", text: "Proporre di bocciare a tavolino tutte le domande giacenti per azzerare l'arretrato" },
      { id: "C", text: "Proporre di non accettare più nuove domande fino al prossimo anno" },
      { id: "D", text: "Chiedere di ridurre l'orario di lavoro per diminuire lo stress" }
    ],
    correctAnswerId: "A",
    explanation: "La soluzione organizzativa efficace interviene sui colli di bottiglia: potenziamento delle sedute mediche, dematerializzazione dei referti e valutazione preliminare sugli atti sanitari (art. 29-ter D.L. 76/2020).",
    hint: "Ottimizzazione dei processi, valutazione documentale e potenziamento delle commissioni sanitarie.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_019",
    question: "Un utente telefona in sede affermando di aver ricevuto un SMS a nome 'INPS' in cui gli si chiede di cliccare su un link e inserire le credenziali bancarie per sbloccare un pagamento di 500 euro. Cosa deve fare il funzionario?",
    options: [
      { id: "A", text: "Avvisare immediatamente l'utente che si tratta di un tentativo di truffa informatica (phishing/smishing), intimargli di non cliccare e non inserire alcun dato, ricordando che l'INPS non chiede mai dati bancari via SMS o email, e segnalare il messaggio all'area sicurezza informatica dell'Istituto" },
      { id: "B", text: "Consigliare all'utente di cliccare sul link per vedere se arrivano i soldi" },
      { id: "C", text: "Chiedere all'utente di fornire le proprie credenziali telefonicamente al funzionario" },
      { id: "D", text: "Dire che non riguarda l'INPS e riattaccare" }
    ],
    correctAnswerId: "A",
    explanation: "La prevenzione delle truffe telematiche e la protezione dell'utenza sono doveri primari: l'INPS conduce costanti campagne contro il phishing e il personale deve allertare tempestivamente i cittadini e la sicurezza interna.",
    hint: "Allerta immediata contro il phishing, chiarimento che l'INPS non chiede mai dati bancari via SMS e segnalazione alla sicurezza.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_020",
    question: "In presenza di un'istanza di riesame in autotutela presentata da un cittadino contro un provvedimento di rigetto, il funzionario istruttore si accorge che il precedente rigetto era dovuto a un errore di interpretazione della norma commesso dall'ufficio. Come deve agire?",
    options: [
      { id: "A", text: "Procedere in autotutela all'annullamento del provvedimento errato e all'adozione del nuovo provvedimento di accoglimento con liquidazione degli arretrati spettanti, motivando il riesame e notificandolo formalmente all'interessato" },
      { id: "B", text: "Confermare il rigetto per non ammettere che l'ufficio ha sbagliato" },
      { id: "C", text: "Consigliare all'utente di fare causa al TAR spendendo soldi in avvocati" },
      { id: "D", text: "Cestinare l'istanza di autotutela senza rispondere" }
    ],
    correctAnswerId: "A",
    explanation: "L'autotutela amministrativa serve proprio a correggere tempestivamente gli errori propri della PA senza costringere il cittadino a defatiganti e costose azioni giudiziarie.",
    hint: "Annullamento in autotutela del rigetto errato, accoglimento dell'istanza e pagamento degli arretrati.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_021",
    question: "Un funzionario si trova a dover gestire contemporaneamente tre compiti urgenti: l'istruttoria di una pratica di pensione con scadenza termini domani, la risposta a un'interrogazione urgente della Direzione Regionale e l'assistenza allo sportello di secondo livello su appuntamento. Come deve organizzare le priorità?",
    options: [
      { id: "A", text: "Garantire con puntualità gli appuntamenti prefissati con gli utenti (front-office), concordare con i colleghi o il responsabile un supporto per l'istruttoria in scadenza e pianificare la risposta alla Direzione Regionale nella prima fascia oraria disponibile, assicurando il rispetto di tutti gli impegni" },
      { id: "B", text: "Annullare tutti gli appuntamenti con i cittadini senza preavviso" },
      { id: "C", text: "Ignorare l'interrogazione della Direzione Regionale" },
      { id: "D", text: "Andarsene a casa prima per non affrontare lo stress" }
    ],
    correctAnswerId: "A",
    explanation: "La gestione delle priorità operative (time management) esige il rispetto del cittadino che ha prenotato l'appuntamento, unito alla cooperazione con il team per non far decadere i termini legali.",
    hint: "Presidio puntuale degli impegni con il pubblico e coordinamento con il team per le scadenze interne.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_022",
    question: "Durante l'attività di controllo a campione sui percettori di Assegno di Inclusione, il funzionario rileva che un beneficiario ha omesso di dichiarare l'avvio di un'attività lavorativa autonoma con introiti superiori al limite di legge. Qual è la corretta procedura operativa?",
    options: [
      { id: "A", text: "Disporre la decadenza immediata dal beneficio economico, comunicare l'avvio del recupero dell'indebito delle somme non spettanti e trasmettere gli atti all'autorità giudiziaria per le eventuali fattispecie penali di indebita percezione" },
      { id: "B", text: "Telefonare al cittadino suggerendogli di chiudere subito la partita IVA per non essere scoperto" },
      { id: "C", text: "Aumentare l'importo dell'assegno per incoraggiarlo nel lavoro" },
      { id: "D", text: "Archiviare la pratica senza alcuna azione" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi del D.L. 48/2023, la falsa o omessa dichiarazione di variazioni reddituali comporta la decadenza della misura, il recupero delle somme indebite e la segnalazione obbligatoria alla Procura della Repubblica.",
    hint: "Decadenza dal beneficio, recupero delle somme erogate e segnalazione penale.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_023",
    question: "Un avvocato si presenta in sede chiedendo di consultare immediatamente il fascicolo personale di una lavoratrice per una vertenza di separazione coniugale, senza esibire alcuna delega o procura sottoscritta dalla lavoratrice stessa. Come deve comportarsi il funzionario PECS?",
    options: [
      { id: "A", text: "Rifiutare l'accesso ai documenti in assenza di procura o mandato espresso della parte interessata o di provvedimento del giudice, a tutela della riservatezza dei dati personali sensibili (GDPR e L. 241/1990)" },
      { id: "B", text: "Consegnare l'intero fascicolo solo perché il richiedente è un avvocato iscritto all'albo" },
      { id: "C", text: "Permettere la visione ma vietare di fare fotocopie" },
      { id: "D", text: "Chiedere 50 euro in contanti all'avvocato per consentire l'accesso" }
    ],
    correctAnswerId: "A",
    explanation: "Il diritto di accesso ai dati personali di terzi richiede titolo legittimo, procura scritta autenticata o specifico interesse diretto, concreto e attuale legalmente tutelato; in assenza di mandato, l'ostensione violerebbe la privacy e il segreto d'ufficio.",
    hint: "Diniego di accesso in assenza di delega espressa, a tutela della riservatezza dei dati (GDPR).",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_024",
    question: "Un utente disabile con difficoltà di deambulazione si presenta in agenzia ma l'ascensore risulta temporaneamente guasto e gli sportelli sono collocati al primo piano. Come deve agire il personale dell'INPS?",
    options: [
      { id: "A", text: "Attivarsi immediatamente affinché un funzionario scenda al piano terra per accogliere l'utente in una stanza riservata accessibile, fornendo tutta l'assistenza necessaria e avviando la pratica senza fargli salire le scale" },
      { id: "B", text: "Dire all'utente di tornare quando l'ascensore sarà riparato" },
      { id: "C", text: "Consigliare all'utente di salire a piedi lentamente" },
      { id: "D", text: "Ignorare l'utente lasciandolo all'ingresso" }
    ],
    correctAnswerId: "A",
    explanation: "L'eliminazione delle barriere architettoniche e l'accomodamento ragionevole impongono alla PA di farsi carico delle esigenze dell'utente con disabilità, garantendo il servizio a piano terra.",
    hint: "Accoglienza a piano terra in locale accessibile garantendo la completa assistenza.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_025",
    question: "Un funzionario neoassunto riscontra difficoltà nella comprensione delle maschere applicative di una nuova procedura software di liquidazione delle pensioni estere. Qual è il comportamento più professionale da tenere?",
    options: [
      { id: "A", text: "Consultare i manuali operativi e le videolezioni disponibili sull'intranet dell'ente, confrontarsi con il collega senior tutor di affiancamento e richiedere al responsabile la partecipazione ai moduli formativi specifici" },
      { id: "B", text: "Iniziare a cliccare tasti a caso sulle pratiche reali dei cittadini sperando che vada bene" },
      { id: "C", text: "Rifiutare l'assegnazione di tutte le pratiche estere per l'intera durata del servizio" },
      { id: "D", text: "Dire all'utenza che le pensioni estere sono state abolite" }
    ],
    correctAnswerId: "A",
    explanation: "L'apprendimento continuo, l'uso degli strumenti formativi aziendali e il confronto con i colleghi tutor assicurano l'acquisizione delle competenze senza commettere errori dannosi per gli utenti.",
    hint: "Consultazione delle guide, confronto con il tutor e formazione mirata.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_026",
    question: "Durante un periodo di ferie estive con personale ridotto, si verifica un picco imprevedibile di richieste di indennità di malattia per lavoratori del settore balneare. Qual è la strategia di risposta più efficace del team?",
    options: [
      { id: "A", text: "Rimodulare provvisoriamente le attività interne, dando precedenza alla lavorazione dei flussi a maggiore impatto sociale e programmando l'uso delle automazioni informatiche, coordinandosi con il dirigente di sede" },
      { id: "B", text: "Sospendere il pagamento delle pensioni per pagare le malattie" },
      { id: "C", text: "Bocciare tutte le malattie per ridurre il carico" },
      { id: "D", text: "Revocare unilateralmente tutte le ferie dei colleghi senza consultare il dirigente" }
    ],
    correctAnswerId: "A",
    explanation: "La flessibilità operativa e la concentrazione sui servizi prioritari consentono di superare i picchi di lavoro stagionali preservando gli standard essenziali di servizio.",
    hint: "Rimodulazione delle priorità e ottimizzazione dei flussi automatici in coordinamento con la direzione.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_027",
    question: "Un utente minaccia di sporgere denuncia ai carabinieri perché la sua richiesta di assegno di invalidità civile non è stata ancora definita entro 30 giorni. Come deve chiarirgli il quadro normativo il funzionario?",
    options: [
      { id: "A", text: "Spiegare con calma che il procedimento per l'invalidità civile prevede fasi integrate sanitarie e amministrative con un termine massimo legale fissato in 120 o 180 giorni, verificare lo stato esatto della pratica (es. attesa visita o validazione sanitaria) e fornirgli la data prevista per il passaggio successivo" },
      { id: "B", text: "Rispondere che i carabinieri non capiscono nulla di pensioni" },
      { id: "C", text: "Sfregiarsi della minaccia e sfidarlo ad andare subito in caserma" },
      { id: "D", text: "Pagare la prestazione di tasca propria per non avere problemi con la giustizia" }
    ],
    correctAnswerId: "A",
    explanation: "Spesso la rabbia dell'utente nasce dall'ignoranza dei tempi del procedimento amministrativo: spiegare con professionalità l'iter e i termini reali di legge rasserena l'interlocutore.",
    hint: "Spiegazione professionale dei termini procedurali di legge e trasparenza sullo stato reale della pratica.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_028",
    question: "Un funzionario si avvede che un collega utilizza costantemente le stampanti dell'ufficio per stampare centinaia di pagine di tesi di laurea e volantini pubblicitari di un'attività privata del coniuge. Cosa prevede il codice etico?",
    options: [
      { id: "A", text: "I beni e le strumentazioni dell'amministrazione devono essere utilizzati esclusivamente per ragioni di servizio; il funzionario deve invitare il collega a cessare la condotta illecita e, se reiterata, segnalare il fatto al dirigente per abuso di beni pubblici" },
      { id: "B", text: "Chiedere una percentuale sui guadagni dell'attività privata" },
      { id: "C", text: "Iniziare a stampare anche i propri documenti personali per par condicio" },
      { id: "D", text: "Aiutare il collega a rilegare le tesi di laurea" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 11 del D.P.R. 62/2013 impone al dipendente di avere cura dei beni strumentali e materiali dell'amministrazione e vieta categoricamente l'uso di risorse pubbliche per fini privati o commerciali.",
    hint: "I beni della PA si usano solo per il servizio: dovere di non tollerare abusi a danno dell'ente.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_029",
    question: "Nel corso della verifica di un'istanza di ricongiunzione dei contributi ex L. 29/1979, il funzionario riscontra che il software di calcolo della riserva matematica attuariale restituisce un errore di sistema bloccante. Come deve intervenire?",
    options: [
      { id: "A", text: "Aprire un ticket formale di assistenza tecnica all'help desk informatico della Direzione Centrale Tecnologia, dettagliando l'errore e i dati della pratica, e monitorare la risoluzione per non far decorrere inutilmente i termini a danno del cittadino" },
      { id: "B", text: "Inventare un importo approssimativo e inviarlo al cittadino" },
      { id: "C", text: "Archiviare la pratica come non lavorabile" },
      { id: "D", text: "Spegnere il computer e non riaccenderlo più per tutta la settimana" }
    ],
    correctAnswerId: "A",
    explanation: "La corretta canalizzazione delle anomalie informatiche verso l'assistenza specialistica e il tracciamento del ticket sono essenziali per risolvere i blocchi procedurali nel rispetto dei termini di legge.",
    hint: "Apertura tempestiva di un ticket formale e monitoraggio della risoluzione dell'anomalia tecnica.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_030",
    question: "Un utente si presenta allo sportello privo di un documento fondamentale (es. codice IBAN timbrato dalla banca per l'accredito). Come deve applicarsi il principio del 'soccorso istruttorio' (art. 6 L. 241/1990)?",
    options: [
      { id: "A", text: "Accogliere la domanda con riserva, spiegare chiaramente quale documento manca e concedere un congruo termine per l'integrazione, spiegando le modalità semplificate di invio telematico senza obbligo di tornare di persona" },
      { id: "B", text: "Rigettare immediatamente la domanda in modo definitivo e irrecuperabile" },
      { id: "C", text: "Strappare i fogli davanti all'utente" },
      { id: "D", text: "Obbligare l'utente ad aprire un conto corrente presso la banca del funzionario" }
    ],
    correctAnswerId: "A",
    explanation: "Il soccorso istruttorio (art. 6 L. 241/1990) impone al responsabile del procedimento di consentire al cittadino di sanare vizi e integrare documenti incompleti, evitando decadenze ingiuste.",
    hint: "Applicazione del soccorso istruttorio con concessione di termine per l'integrazione documentale.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_031",
    question: "Il funzionario PECS si accorge che in diverse domande di assegno di maternità del comune (art. 74 D.Lgs. 151/2001) viene allegata documentazione incompleta a causa di un'errata informazione fornita da un ufficio anagrafe comunale. Qual è l'azione proattiva da proporre?",
    options: [
      { id: "A", text: "Proporre al proprio dirigente di contattare formalmente i responsabili dell'ufficio anagrafe comunale per condividere le linee guida corrette, organizzando un incontro di coordinamento per prevenire a monte le anomalie" },
      { id: "B", text: "Bocciare tutte le future domande provenienti da quel comune per punizione" },
      { id: "C", text: "Presentare una denuncia penale contro tutti gli impiegati comunali" },
      { id: "D", text: "Non fare nulla e attendere che i cittadini se ne accorgano da soli" }
    ],
    correctAnswerId: "A",
    explanation: "La cooperazione istituzionale e la risoluzione delle criticità alla fonte (co-progettazione e raccordo con i Comuni) riducono il contenzioso e velocizzano i pagamenti per i cittadini.",
    hint: "Raccordo istituzionale con il Comune per risolvere l'errore alla radice.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_032",
    question: "Un utente dichiara di aver smarrito la credenziale SPID e di non poter accedere al proprio Fascicolo Previdenziale del Cittadino. Il funzionario può accedere con le proprie credenziali per stampargli l'estratto conto?",
    options: [
      { id: "A", text: "Sì, il funzionario può stampare l'estratto conto accedendo ai programmi di back-office d'ufficio previa identificazione certa dell'utente a mezzo documento di riconoscimento in corso di validità" },
      { id: "B", text: "No, il cittadino che perde lo SPID perde ogni diritto alle informazioni previdenziali" },
      { id: "C", text: "Sì, ma solo se l'utente gli fornisce la propria password personale della mail" },
      { id: "D", text: "Solo dietro autorizzazione del Prefetto" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario INPS allo sportello opera tramite le procedure autorizzate di back-office e ha il potere/dovere di rilasciare estratti e certificazioni all'interessato, previa corretta e rigorosa identificazione a vista con documento valido.",
    hint: "Rilascio dell'estratto conto d'ufficio previa esibizione di documento di identità valido.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_033",
    question: "Un rappresentante sindacale chiede di ottenere l'elenco nominativo e i dati anagrafici di tutti i lavoratori dipendenti di un'azienda del territorio iscritti all'INPS. Come deve rispondere l'ufficio?",
    options: [
      { id: "A", text: "Negare l'ostensione dei dati nominativi individuali per difetto di legittimazione e violazione della privacy (GDPR), potendo fornire solo dati aggregati o statistici privi di elementi identificativi" },
      { id: "B", text: "Inviare l'elenco completo con codici fiscali e indirizzi di residenza" },
      { id: "C", text: "Pubblicare l'elenco sull'albo pretorio del comune" },
      { id: "D", text: "Farsi promettere voti elettorali in cambio dell'elenco" }
    ],
    correctAnswerId: "A",
    explanation: "I dati retributivi e contributivi dei lavoratori sono dati personali riservati: non possono essere divulgati a terzi (nemmeno a organizzazioni sindacali) senza il consenso espresso dei lavoratori, salvo dati puramente statistici aggregati.",
    hint: "Diniego a tutela della riservatezza dei lavoratori: concedibili solo dati aggregati o statistici.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_034",
    question: "Un funzionario PECS rileva che in una domanda di riscatto della laurea è stato allegato un certificato universitario che presenta chiari segni di contraffazione materiale del voto di laurea. Come deve comportarsi?",
    options: [
      { id: "A", text: "Sospendere l'istruttoria, effettuare una verifica immediata d'ufficio presso l'Ateneo ai sensi dell'art. 71 D.P.R. 445/2000 e, in caso di conferma della falsità, denunciare il fatto alla Procura della Repubblica e rigettare la domanda" },
      { id: "B", text: "Accettare il certificato purché l'utente paghi il riscatto più alto" },
      { id: "C", text: "Restituire il foglio falso all'utente dicendogli di non farlo più" },
      { id: "D", text: "Correggere il voto a penna per conto del cittadino" }
    ],
    correctAnswerId: "A",
    explanation: "Il controllo della veridicità delle dichiarazioni e la segnalazione delle falsità documentali (art. 71 D.P.R. 445/2000 e art. 361 c.p.) sono obblighi giuridici inderogabili per il funzionario pubblico.",
    hint: "Verifica presso l'Università, denuncia penale per falso documentale e diniego dell'istanza.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_035",
    question: "In sede di pianificazione settimanale del lavoro, un team di controllo servizi rileva una sovrapposizione di scadenze tra il monitoraggio del PIAO e la liquidazione di un lotto di pratiche di assegno unico. Come deve procedere il gruppo?",
    options: [
      { id: "A", text: "Definire un cronoprogramma condiviso concordato con il responsabile, suddividendo i compiti in base alle competenze specifiche e stabilendo priorità temporali per garantire il rispetto di entrambe le scadenze" },
      { id: "B", text: "Abbandonare uno dei due compiti senza avvisare nessuno" },
      { id: "C", text: "Iniziare entrambi i lavori all'ultimo minuto della scadenza" },
      { id: "D", text: "Chiedere il rinvio della legge al Parlamento" }
    ],
    correctAnswerId: "A",
    explanation: "L'efficacia organizzativa e la gestione del tempo (problem solving di squadra) richiedono pianificazione, chiara suddivisione dei ruoli e monitoraggio congiunto delle tappe operative.",
    hint: "Cronoprogramma condiviso, suddivisione dei ruoli e coordinamento costante.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_036",
    question: "Durante l'erogazione di un servizio allo sportello, un utente in stato di ebbrezza comincia a insultare pesantemente il personale e tenta di danneggiare i monitor dell'ufficio. Qual è la corretta sequenza di azioni?",
    options: [
      { id: "A", text: "Mettere in sicurezza se stessi e gli altri utenti allontanandosi dalla linea di contatto, attivare immediatamente il dispositivo di allarme di sede o chiamare la vigilanza giurata interna e le forze dell'ordine (112), redigendo poi apposita relazione d'incidente per la direzione" },
      { id: "B", text: "Affrontare fisicamente l'utente tentando di immobilizzarlo con la forza" },
      { id: "C", text: "Offrire un caffè all'utente per calmarlo" },
      { id: "D", text: "Fingere di svenire per attirare l'attenzione" }
    ],
    correctAnswerId: "A",
    explanation: "La sicurezza sul lavoro (D.Lgs. 81/2008) mette al primo posto l'incolumità delle persone: non esporsi a rischi fisici, chiamare immediatamente le forze dell'ordine e documentare l'accaduto.",
    hint: "Messa in sicurezza, allertamento della vigilanza/112 e redazione della relazione formale.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_037",
    question: "Un funzionario si accorge che in sede di liquidazione di una pensione di reversibilità è stata applicata la riduzione della Tabella F per redditi superiori alla soglia, omettendo però di considerare che nel nucleo familiare è presente un figlio inabile. Cosa deve fare?",
    options: [
      { id: "A", text: "Disporre immediatamente la rettifica in autotutela della prestazione, eliminando la riduzione reddituale non applicabile in presenza di figli inabili e riliquidando l'assegno al 100% con arretrati" },
      { id: "B", text: "Non fare nulla perché il calcolo del computer è insindacabile" },
      { id: "C", text: "Consigliare alla vedova di rinunciare all'assistenza del figlio inabile" },
      { id: "D", text: "Attendere dieci anni per vedere se il figlio guarisce" }
    ],
    correctAnswerId: "A",
    explanation: "La legge esclude espressamente i tagli della Tabella F in presenza di figli inabili, minori o studenti: accertata la condizione sanitaria, il funzionario deve rettificare d'ufficio la prestazione.",
    hint: "Rettifica d'ufficio: in presenza di figli inabili la pensione di reversibilità non subisce decurtazioni da reddito.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_038",
    question: "Un utente chiede di poter visionare gli atti relativi all'assegnazione di un bando di locazione di un immobile INPS a cui ha partecipato, risultando secondo classificato. Come si configura la sua richiesta?",
    options: [
      { id: "A", text: "Come istanza legittima di accesso documentale difensivo ai sensi della L. 241/1990, avendo l'utente un interesse diretto, concreto e attuale alla tutela della propria posizione giuridica" },
      { id: "B", text: "Come un'ingerenza abusiva nella vita privata del vincitore da respingere a priori" },
      { id: "C", text: "Come una curiosità immotivata soggetta a sanzione" },
      { id: "D", text: "Come un atto di diffamazione verso la commissione" }
    ],
    correctAnswerId: "A",
    explanation: "Il concorrente secondo classificato a una gara o bando pubblico vanta un interesse diretto, concreto e attuale a prendere visione degli atti di gara per verificare la legittimità della graduatoria ed eventualmente tutelarsi in giudizio.",
    hint: "Diritto di accesso difensivo legittimo ex L. 241/1990 per il concorrente secondo classificato.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_039",
    question: "Quale atteggiamento relazionale deve mantenere il funzionario INPS nei rapporti con i rappresentanti sindacali e gli operatori dei Patronati durante i tavoli di confronto periodici?",
    options: [
      { id: "A", text: "Collaborazione leale, rispetto reciproco dei ruoli, ascolto delle criticità segnalate sul territorio e orientamento condiviso alla risoluzione dei problemi nell'interesse comune dei cittadini assistiti" },
      { id: "B", text: "Chiusura pregiudiziale e rifiuto di qualsiasi dialogo" },
      { id: "C", text: "Totale accondiscendenza acritica a tutte le richieste avanzate" },
      { id: "D", text: "Confronto basato su simpatie e antipatie personali" }
    ],
    correctAnswerId: "A",
    explanation: "I Patronati e i Sindacati sono partner istituzionali qualificati: il funzionario PECS cura relazioni basate su trasparenza tecnica, lealtà collaborativa e rispetto dei protocolli e convenzioni vigenti.",
    hint: "Collaborazione leale, rispetto dei ruoli e orientamento congiunto alla qualità dei servizi per i cittadini.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_040",
    question: "In caso di smarrimento o sottrazione di una chiavetta USB aziendale contenente elenchi di dati personali di pensionati (data breach), quale obbligo immediato scatta per il funzionario ai sensi del GDPR (Reg. UE 2016/679)?",
    options: [
      { id: "A", text: "Segnalare immediatamente l'accaduto al Responsabile della Protezione dei Dati (DPO) dell'INPS e al proprio dirigente, dettagliando la tipologia di dati compromessi per consentire la notifica al Garante Privacy entro 72 ore" },
      { id: "B", text: "Non dire nulla a nessuno sperando che nessuno trovi la chiavetta" },
      { id: "C", text: "Comprare una nuova chiavetta identica per nascondere lo smarrimento" },
      { id: "D", text: "Pubblicare un annuncio su un giornale locale" }
    ],
    correctAnswerId: "A",
    explanation: "Il data breach (violazione dei dati personali) comporta per legge l'obbligo di tempestiva notifica interna al DPO per valutare il rischio per i diritti degli interessati e notificare l'evento al Garante Privacy entro 72 ore.",
    hint: "Segnalazione immediata dell'incidente di sicurezza al DPO e al dirigente per le notifiche di legge.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_041",
    question: "Un funzionario addetto al controllo riscontra che un pensionato titolare di pensione ai superstiti con assegno ridotto per la presenza di redditi non ha inviato il modello RED annuale per due anni consecutivi. Qual è la procedura corretta?",
    options: [
      { id: "A", text: "Inviare un sollecito formale con preavviso di sospensione, invitando l'utente a trasmettere i dati reddituali entro un termine perentorio e, in caso di persistente inadempimento, disporre la sospensione temporanea e la successiva revoca della quota aggiuntiva" },
      { id: "B", text: "Cancellare definitivamente la pensione con effetto immediato senza alcun avviso" },
      { id: "C", text: "Ignorare l'omissione continuando a pagare per sempre" },
      { id: "D", text: "Inviare la Guardia di Finanza ad arrestare il pensionato" }
    ],
    correctAnswerId: "A",
    explanation: "Il mancato invio della dichiarazione reddituale (RED) comporta prima il sollecito, poi la sospensione cautelativa della quota legata al reddito e solo infine la decadenza definitiva in caso di mancata risposta.",
    hint: "Sollecito formale, preavviso, sospensione cautelare e revoca solo in caso di persistente inerzia.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_042",
    question: "Un collega propone di modificare la data di ricezione di un'istanza per far risultare rispettato il termine della Carta dei Servizi ed evitare una penalizzazione nel punteggio di performance. Come deve reagire il funzionario?",
    options: [
      { id: "A", text: "Rifiutare fermamente e categoricamente la proposta, ricordando che alterare la data o il protocollo costituisce reato di falso ideologico e materiale in atto pubblico commesso dal pubblico ufficiale, oltre a violare gravemente l'etica istituzionale" },
      { id: "B", text: "Accettare entusiasta la proposta per avere il premio massimo di risultato" },
      { id: "C", text: "Far finta di nulla e lasciare che il collega modifichi tutte le date" },
      { id: "D", text: "Chiedere un compenso in denaro per mantenere il segreto" }
    ],
    correctAnswerId: "A",
    explanation: "L'integrità e la legalità dell'azione amministrativa non ammettono compromessi: alterare date di protocollazione o registri è reato di falso in atto pubblico (art. 476/479 c.p.) e comporta il licenziamento.",
    hint: "Rifiuto categorico: l'alterazione del protocollo o delle date costituisce reato di falso in atto pubblico.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_043",
    question: "Nel corso della lavorazione delle pratiche di TFS (Trattamento di Fine Servizio) per i dipendenti pubblici, si constata un ritardo imputabile alla mancata trasmissione del prospetto economico da parte dell'amministrazione datrice di lavoro di provenienza (es. una scuola). Come deve agire il funzionario INPS?",
    options: [
      { id: "A", text: "Inviare un sollecito formale all'amministrazione di appartenenza tramite canali istituzionali telematici, informando contestualmente il lavoratore dello stato dell'istruttoria e delle azioni intraprese per sbloccare la pratica" },
      { id: "B", text: "Rigettare la richiesta di TFS del pensionato per colpa della scuola" },
      { id: "C", text: "Dire al lavoratore che non riceverà mai la liquidazione" },
      { id: "D", text: "Calcolare il TFS sulla base di una cifra a piacere" }
    ],
    correctAnswerId: "A",
    explanation: "Il funzionario diligente applica il principio di cooperazione tra PA (art. 14 L. 241/1990): sollecita l'ente inadempiente e informa con trasparenza il cittadino che attende la propria liquidazione.",
    hint: "Sollecito formale all'ente datore di lavoro e informazione trasparente al pensionato.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_044",
    question: "Un utente anziano chiede di essere ricevuto senza appuntamento perché deve prendere un treno a breve distanza di tempo e necessita con urgenza del duplicato del modello CU per il ricovero ospedaliero del coniuge. Come deve valutare la situazione il personale di front-office?",
    options: [
      { id: "A", text: "Valutare la situazione di urgenza reale ed eccezionalità con flessibilità e buon senso, rilasciando tempestivamente il documento a vista senza costringere la persona a perdere il ricovero o il treno" },
      { id: "B", text: "Allontanare tassativamente l'utente intimandogli di prenotare online per il mese successivo" },
      { id: "C", text: "Chiedere l'intervento della polizia per violazione del sistema di appuntamenti" },
      { id: "D", text: "Farsi pagare il biglietto del treno in cambio della stampa del foglio" }
    ],
    correctAnswerId: "A",
    explanation: "Il buon senso, la proporzionalità e l'orientamento al cittadino (particolarmente per adempimenti istantanei come la stampa di una CU per ricoveri ospedalieri urgenti) prevalgono sulla rigidità burocratica.",
    hint: "Flessibilità e buon senso per venire incontro a una comprovata situazione di urgenza sociale.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_045",
    question: "Durante un audit interno viene rilevato un errore sistematico nell'attribuzione delle detrazioni fiscali su un gruppo di 50 pensioni. Qual è la reazione corretta del responsabile e dei funzionari della linea?",
    options: [
      { id: "A", text: "Collaborare pienamente con i colleghi dell'audit, analizzare le cause dell'anomalia (es. bug informatico o prassi errata), predisporre la tempestiva riliquidazione con conguaglio fiscale a favore dei pensionati e aggiornare le linee guida interne per evitare il ripetersi dell'evento" },
      { id: "B", text: "Nascondere i faldoni dell'audit e negare l'evidenza" },
      { id: "C", text: "Accusare la Direzione Generale di aver inventato l'errore" },
      { id: "D", text: "Minacciare di sciopero se l'errore viene verbalizzato" }
    ],
    correctAnswerId: "A",
    explanation: "L'audit è un'opportunità di miglioramento e controllo della qualità: trasparenza, cooperazione, tempestiva correzione e revisione delle prassi consolidano l'affidabilità dell'ente.",
    hint: "Piena collaborazione con l'audit, correzione immediata degli errori e revisione delle prassi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_046",
    question: "Un funzionario addetto alla gestione delle posizioni contributive dei lavoratori autonomi commercianti riceve la richiesta di annullamento di cartelle esattoriali prescritte. Cosa deve verificare prima di disporre lo sgravio?",
    options: [
      { id: "A", text: "Verificare analiticamente l'assenza di atti interruttivi della prescrizione (es. intimazioni di pagamento, notifiche o rateizzazioni) e, accertata l'effettiva maturazione della prescrizione quinquennale, emettere il provvedimento di sgravio a sistema" },
      { id: "B", text: "Sgravare tutto automaticamente senza alcun controllo per accontentare il commerciante" },
      { id: "C", text: "Rifiutare sempre lo sgravio anche se il credito risale a 40 anni fa" },
      { id: "D", text: "Chiedere al contribuente di fare una donazione alla cassa mutua" }
    ],
    correctAnswerId: "A",
    explanation: "Lo sgravio di cartelle o crediti previdenziali richiede il rigoroso accertamento dell'assenza di atti interruttivi notificati dall'agente della riscossione: solo dopo aver verificato l'infruttuoso decorso del termine si può disporre l'annullamento.",
    hint: "Verifica rigorosa dell'assenza di atti interruttivi prima di concedere lo sgravio per prescrizione.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_047",
    question: "In quale modo il funzionario PECS può contribuire attivamente al miglioramento dell'indice di 'customer satisfaction' della propria sede?",
    options: [
      { id: "A", text: "Ascoltando con attenzione i feedback degli utenti, proponendo semplificazioni del linguaggio delle comunicazioni scritte e garantendo puntualità e chiarezza nelle risposte e negli appuntamenti" },
      { id: "B", text: "Chiedendo a parenti e amici di compilare questionari falsi di gradimento eccellente" },
      { id: "C", text: "Offrendo caramelle a chi esce dallo sportello" },
      { id: "D", text: "Cancellando dal sistema i reclami degli utenti scontenti" }
    ],
    correctAnswerId: "A",
    explanation: "La qualità percepita migliora con la chiarezza del linguaggio (abbandonando il burocratese), l'accuratezza delle risposte, il rispetto degli orari di appuntamento e la presa in carico responsabile.",
    hint: "Ascolto attivo, linguaggio chiaro, puntualità e risposte esaustive all'utenza.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_048",
    question: "Un utente presenta una richiesta di congedo straordinario biennale per assistere la madre disabile grave, ma dalla documentazione anagrafica risulta che il richiedente non risiede né convive con la madre. Qual è l'istruttoria corretta?",
    options: [
      { id: "A", text: "Informare il cittadino che la convivenza anagrafica con il disabile è requisito essenziale stabilito dalla legge per il congedo straordinario, invitandolo eventualmente a regolarizzare il cambio di residenza/dimora temporanea prima di concedere la prestazione" },
      { id: "B", text: "Accogliere la domanda fingendo di non aver visto l'indirizzo diverso" },
      { id: "C", text: "Rigettare e denunciare l'utente per truffa aggravata allo Stato" },
      { id: "D", text: "Concedere il congedo ma dimezzando lo stipendio" }
    ],
    correctAnswerId: "A",
    explanation: "Il congedo straordinario (art. 42 D.Lgs. 151/2001) esige il requisito della convivenza: il funzionario deve spiegare il quadro normativo e indicare la possibilità di instaurare la convivenza o la dimora temporanea per perfezionare il diritto.",
    hint: "Chiarire l'inderogabilità del requisito di convivenza e illustrare le modalità di regolarizzazione anagrafica.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_SIT_049",
    question: "Come deve essere gestito l'errore materiale commesso da un collega nella redazione di una determina amministrativa di liquidazione prima che l'atto sia notificato all'esterno?",
    options: [
      { id: "A", text: "Segnalare l'errore con discrezione e spirito di collaborazione direttamente al collega o al responsabile per procedere alla correzione immediata del testo prima dell'emissione definitiva" },
      { id: "B", text: "Deridere il collega inviando l'atto errato a tutti i dipendenti dell'ufficio in allegato email" },
      { id: "C", text: "Notificare ugualmente l'atto errato per far fare brutta figura al collega" },
      { id: "D", text: "Chiamare immediatamente la televisione per denunciare l'errore" }
    ],
    correctAnswerId: "A",
    explanation: "La cooperazione interna e il controllo reciproco costruttivo prima dell'adozione definitiva tutelano il buon andamento e l'immagine dell'istituzione.",
    hint: "Segnalazione discreta e collaborativa prima dell'adozione formale per correggere l'errore.",
    level: "base"
  },
  {
    id: "Q_PECS_SIT_050",
    question: "Qual è il valore aggiunto fondamentale che il funzionario PECS apporta alla missione pubblica dell'INPS?",
    options: [
      { id: "A", text: "La capacità di coniugare il rigore tecnico-normativo e l'efficienza dei flussi di controllo con un elevato senso di responsabilità sociale, empatia e orientamento al cittadino, trasformando le norme previdenziali in tutele concrete e tempestive per la vita delle persone" },
      { id: "B", text: "La rigida applicazione cieca di formalismi senza guardare agli effetti sulle persone" },
      { id: "C", text: "La ricerca del massimo risparmio economico a scapito dei diritti dei più deboli" },
      { id: "D", text: "La presenza passiva in ufficio fino all'orario di uscita" }
    ],
    correctAnswerId: "A",
    explanation: "La figura del funzionario PECS rappresenta l'evoluzione moderna del pubblico dipendente: non mero esecutore passivo, ma professionista competente, proattivo, attento ai processi e consapevole del valore sociale delle prestazioni INPS per la coesione del Paese.",
    hint: "Sintesi tra rigore normativo, efficienza dei processi e profonda responsabilità sociale verso i cittadini.",
    level: "base"
  }
];

const dest = path.join(dir, 'casi_operativi.json');
fs.writeFileSync(dest, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Generated ${questions.length} questions in ${dest}`);
