const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: 'Q_DIR_CAD_051',
    question: "Ai sensi dell'art. 17 del D.Lgs. 82/2005 (CAD), chi è il Responsabile per la Transizione al Digitale (RTD)?",
    options: [
      { id: 'A', text: "Un dirigente a cui ciascuna pubblica amministrazione affida la transizione alla modalità operativa digitale e i conseguenti processi di riorganizzazione dei servizi." },
      { id: 'B', text: "Un consulente informatico esterno nominato a tempo determinato previa gara europea espletata da Consip." },
      { id: 'C', text: "Il Responsabile della Protezione dei Dati (DPO) dell'ente che cumula per legge entrambe le funzioni." },
      { id: 'D', text: "Il Presidente del Consiglio di Indirizzo e Vigilanza (CIV) di ciascun ente previdenziale." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 17, comma 1, del CAD prevede che le pubbliche amministrazioni individuino un unico ufficio dirigenziale cui affidare la transizione al digitale e ne affidino la direzione a un dirigente, denominato Responsabile per la Transizione al Digitale (RTD).",
    hint: "È una figura dirigenziale interna responsabile di guidare la trasformazione digitale dell'ente.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_052',
    question: "Quale tra le seguenti attribuzioni rientra tra le competenze espresse del Responsabile per la Transizione al Digitale (RTD) ex art. 17, comma 1, del CAD?",
    options: [
      { id: 'A', text: "Il coordinamento strategico dello sviluppo dei sistemi informativi, dell'accessibilità e dell'interoperabilità, e la pianificazione degli acquisti ICT." },
      { id: 'B', text: "L'erogazione materiale dei trattamenti pensionistici e il calcolo del montante contributivo individuale." },
      { id: 'C', text: "L'istruzione dei ricorsi giurisdizionali dinanzi al Giudice del Lavoro in materia contributiva." },
      { id: 'D', text: "La presidenza esclusiva di tutte le commissioni di concorso per l'assunzione di personale amministrativo." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 17, comma 1, del CAD attribuisce al RTD la definizione di criteri di modernizzazione, coordinamento dei sistemi informativi, telecomunicazioni, sicurezza informatica, accessibilità e conformità alle Linee guida AgID.",
    hint: "Il RTD governa l'innovazione tecnologica, l'accessibilità, i sistemi informativi e la conformità digitale dell'ente.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_053',
    question: "Presso quale organo è istituito il \"Difensore Civico per il Digitale\" ai sensi dell'art. 17, comma 1-quater, del CAD?",
    options: [
      { id: 'A', text: "Presso l'Agenzia per l'Italia Digitale (AgID)." },
      { id: 'B', text: "Presso la Presidenza della Repubblica." },
      { id: 'C', text: "Presso il Ministero della Giustizia." },
      { id: 'D', text: "Presso l'Autorità Nazionale Anticorruzione (ANAC)." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 17, comma 1-quater, del CAD istituisce presso l'AgID il Difensore Civico per il Digitale, al quale chiunque può presentare segnalazioni relative a presunte violazioni del CAD o di ogni altra norma in materia di digitalizzazione della PA.",
    hint: "Il Difensore Civico per il Digitale opera all'interno dell'AgID.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_054',
    question: "Cosa può fare il Difensore Civico per il Digitale a seguito di una segnalazione fondata presentata da un cittadino ex art. 17 del CAD?",
    options: [
      { id: 'A', text: "Invita il soggetto responsabile a conformarsi tempestivamente, e in caso di inottemperanza segnala la violazione all'organo di indirizzo politico e attiva i poteri sanzionatori di AgID ex art. 18-bis." },
      { id: 'B', text: "Emette una sentenza di condanna immediatamente esecutiva al risarcimento del danno biologico." },
      { id: 'C', text: "Dispone il licenziamento immediato senza preavviso del Responsabile del Procedimento." },
      { id: 'D', text: "Annulla d'ufficio tutti gli atti amministrativi emanati dall'ente nell'anno solare precedente." }
    ],
    correctAnswerId: 'A',
    explanation: "Il Difensore Civico per il Digitale, se ritiene fondata la segnalazione, invita il responsabile a porvi rimedio entro un termine; in caso di inadempienza, segnala all'organo di vertice e all'ufficio procedimenti disciplinari, nonché all'AgID per le sanzioni amministrative ex art. 18-bis CAD.",
    hint: "Diffida a conformarsi e trasmissione per provvedimenti disciplinari e sanzioni AgID.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_055',
    question: "Quali sanzioni può irrogare l'AgID ai sensi dell'art. 18-bis del CAD alle pubbliche amministrazioni inadempienti agli obblighi di transizione digitale?",
    options: [
      { id: 'A', text: "Sanzioni amministrative pecuniarie da un minimo di 10.000 euro a un massimo di 100.000 euro nei confronti dei soggetti inadempienti." },
      { id: 'B', text: "L'arresto dei componenti della giunta o del comitato di presidenza fino a sei mesi." },
      { id: 'C', text: "La chiusura forzata di tutte le sedi territoriali dell'amministrazione fino al ripristino del servizio." },
      { id: 'D', text: "La decurtazione del 50% dell'assegno pensionistico erogato ai residenti del comune inadempiente." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 18-bis del CAD (introdotto dal D.L. 76/2020 e sanzionato dal D.L. 77/2021) conferisce ad AgID il potere di irrogare sanzioni amministrative pecuniarie da euro 10.000 a euro 100.000 in caso di violazione degli obblighi di transizione al digitale.",
    hint: "Sanzioni pecuniarie da 10.000 a 100.000 euro per mancata attuazione delle norme CAD.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_CAD_056',
    question: "Che cos'è la Piattaforma Digitale Nazionale Dati (PDND) disciplinata dall'art. 50-ter del CAD?",
    options: [
      { id: 'A', text: "L'infrastruttura tecnologica che rende possibile l'interoperabilità dei sistemi informativi e delle basi di dati delle pubbliche amministrazioni mediante API standardizzate." },
      { id: 'B', text: "Il portale unico per l'acquisto di materiale di cancelleria e arredi per gli uffici pubblici." },
      { id: 'C', text: "Il sistema operativo proprietario nazionale obbligatorio per tutti i personal computer della PA." },
      { id: 'D', text: "La piattaforma di condivisione di video istituzionali ad accesso riservato per i dipendenti dello Stato." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 50-ter del CAD disciplina la PDND: la piattaforma abilita lo scambio di informazioni tra le PA e con i privati tramite API secondo il modello di interoperabilità (ModI), attuando il principio \"once only\" (il cittadino non deve fornire dati già in possesso della PA).",
    hint: "Interoperabilità delle banche dati della PA tramite API per evitare che il cittadino debba ripresentare dati già noti allo Stato.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_057',
    question: "In cosa consiste il principio europeo \"Once Only\" recepitò nella normativa italiana di digitalizzazione della PA?",
    options: [
      { id: 'A', text: "Le pubbliche amministrazioni non possono richiedere a cittadini e imprese informazioni e dati già in possesso di un'altra pubblica amministrazione." },
      { id: 'B', text: "Un dipendente pubblico può presentare domanda di mobilità volontaria solo una volta nella carriera." },
      { id: 'C', text: "Gli applicativi informatici della PA devono essere riavviati una sola volta per ciascun anno solare." },
      { id: 'D', text: "Il codice sorgente dei software open source può essere modificato un'unica volta dopo la pubblicazione." }
    ],
    correctAnswerId: 'A',
    explanation: "Il principio 'Once Only' (previsto a livello UE e recepito nel CAD e nell'art. 43 del D.P.R. 445/2000) impone che i dati siano comunicati dal cittadino una sola volta: le PA hanno l'obbligo di acquisire d'ufficio i dati già detenuti da altre PA tramite interoperabilità (PDND).",
    hint: "'Una volta sola': le PA condividono le informazioni invece di richiederle ogni volta al cittadino.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_058',
    question: "Cos'è l'INAD (Indice Nazionale dei Domicili Digitali) istituito ai sensi dell'art. 6-quater del CAD?",
    options: [
      { id: 'A', text: "Il pubblico elenco contenente i domicili digitali (PEC) delle persone fisiche, dei professionisti non iscritti in albi e degli enti di diritto privato non tenuti all'iscrizione in INI-PEC." },
      { id: 'B', text: "L'archivio catastale nazionale dei fabbricati adibiti a uffici della funzione pubblica." },
      { id: 'C', text: "Il registro anagrafico contenente le impronte digitali crittografiche dei funzionari INPS." },
      { id: 'D', text: "L'elenco degli indirizzi IP statici assegnati ai data center del Ministero dell'Interno." }
    ],
    correctAnswerId: 'A',
    explanation: "L'INAD (art. 6-quater CAD) raccoglie i domicili digitali delle persone fisiche e dei soggetti di diritto privato non iscritti in registri professionali. L'iscrizione è facoltativa per i cittadini ma, una volta registrato, le PA hanno l'obbligo di inviare ogni notifica e comunicazione a tale indirizzo.",
    hint: "Elenco ufficiale dei domicili digitali (PEC) dei cittadini per ricevere comunicazioni legali dalla PA.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_059',
    question: "Cosa si intende per \"SEND\" (Servizio Notifiche Digitali) disciplinato dall'art. 26 del D.L. 76/2020?",
    options: [
      { id: 'A', text: "La piattaforma nazionale delle notifiche digitali della PA che gestisce l'invio e la ricezione a valore legale degli atti amministrativi verso cittadini e imprese." },
      { id: 'B', text: "Il protocollo di cifratura quantistica utilizzato dalle forze armate per le trasmissioni radiofoniche." },
      { id: 'C', text: "Il software per la spedizione di posta raccomandata cartacea tradizionale a mezzo treno espresso." },
      { id: 'D', text: "Il sistema europeo per l'archiviazione di bilanci contabili in valuta estera." }
    ],
    correctAnswerId: 'A',
    explanation: "SEND (Piattaforma Notifiche Digitali, c.d. PND ex art. 26 D.L. 76/2020) digitalizza il processo di notifica a valore legale degli atti amministrativi, avvisando i cittadini tramite PEC/INAD, App IO o raccomandata analogica di cortesia qualora non abbiano un domicilio digitale.",
    hint: "È la Piattaforma Notifiche Digitali con pieno valore legale per gli atti della PA.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_060',
    question: "Ai sensi dell'art. 64 del CAD, quali sono i sistemi di identificazione digitale che consentono ai cittadini l'accesso ai servizi in rete della pubblica amministrazione?",
    options: [
      { id: 'A', text: "Il Sistema Pubblico di Identità Digitale (SPID), la Carta d'Identità Elettronica (CIE) e la Carta Nazionale dei Servizi (CNS)." },
      { id: 'B', text: "Esclusivamente l'inserimento manuale di username e password alfanumerica inviata per posta ordinaria." },
      { id: 'C', text: "Unicamente le credenziali rilasciate dai motori di ricerca commerciali multinazionali." },
      { id: 'D', text: "La firma olografa autenticata dal notaio prima di ogni singola sessione di accesso web." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 64 del CAD stabilisce che l'accesso ai servizi in rete delle PA avviene esclusivamente tramite SPID, Carta d'Identità Elettronica (CIE) e Carta Nazionale dei Servizi (CNS), conformemente al Regolamento UE eIDAS n. 910/2014.",
    hint: "La triade identitaria per l'accesso ai servizi online della PA: SPID, CIE, CNS.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_061',
    question: "Quanti e quali sono i livelli di sicurezza delle credenziali SPID previsti dalla normativa tecnica AgID e dal regolamento eIDAS?",
    options: [
      { id: 'A', text: "Tre livelli: Livello 1 (password semplice), Livello 2 (autenticazione a due fattori, es. OTP), Livello 3 (autenticazione a due fattori basata su certificati crittografici su supporto fisico, es. smart card o token hardware)." },
      { id: 'B', text: "Due livelli: Livello Base (accesso senza password) e Livello Avanzato (accesso con riconoscimento facciale biometrico obbligatorio)." },
      { id: 'C', text: "Quattro livelli: Basso, Moderato, Elevato e Militare/Governativo riservato alla Presidenza del Consiglio." },
      { id: 'D', text: "Cinque livelli coincidenti con i profili retributivi del personale delle amministrazioni centrali." }
    ],
    correctAnswerId: 'A',
    explanation: "I livelli di sicurezza SPID sono tre (basso, significativo, elevato ai sensi di eIDAS): SPID 1 (ID e password), SPID 2 (ID, password e secondo fattore/OTP, il più diffuso nei servizi PA come INPS), SPID 3 (certificato e supporto fisico crittografico).",
    hint: "Livello 1 (solo password), Livello 2 (password + OTP), Livello 3 (chiave/smartcard hardware).",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_062',
    question: "Ai sensi dell'art. 64-bis del CAD, che cos'è il \"punto di accesso telematico\" per i servizi della Pubblica Amministrazione?",
    options: [
      { id: 'A', text: "Un punto di accesso telematico attivato presso la Presidenza del Consiglio dei Ministri (attuato tramite l'applicazione 'IO') che rende fruibili tutti i servizi digitali della PA da dispositivi mobili." },
      { id: 'B', text: "Un totem multimediale installato obbligatoriamente all'ingresso di ogni ufficio postale comunale." },
      { id: 'C', text: "Uno sportello fisico riservato agli utenti privi di computer o connessione a banda larga." },
      { id: 'D', text: "Un software per la gestione automatizzata degli ordini di acquisto di beni mobili dello Stato." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 64-bis del CAD disciplina il punto di accesso telematico unico per smartphone, realizzato mediante l'App IO, attraverso cui le PA rendono disponibili i propri servizi e notifiche ai cittadini.",
    hint: "Il punto di accesso telematico su smartphone è l'App IO.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_063',
    question: "Che valore giuridico e probatorio ha il \"documento informatico\" sottoscritto con Firma Digitale o Firma Elettronica Qualificata (FEQ) ai sensi dell'art. 21 del CAD?",
    options: [
      { id: 'A', text: "Ha l'efficacia della scrittura privata prevista dall'art. 2702 del codice civile e soddisfa il requisito della forma scritta ad substantiam anche per gli atti di cui all'art. 1350 c.c." },
      { id: 'B', text: "Ha valore di mera presunzione semplice liberamente apprezzabile e ribaltabile dal giudice senza motivazione." },
      { id: 'C', text: "Non ha alcun valore probatorio finché non viene stampato su carta bollata e vidimato dal cancelliere." },
      { id: 'D', text: "Ha valore esclusivamente statistico ed è nullo per qualsiasi atto dispositivo di diritti reali." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 21, comma 2, del CAD stabilisce che il documento informatico sottoscritto con firma elettronica qualificata o firma digitale soddisfa il requisito della forma scritta e ha l'efficacia prevista dall'articolo 2702 del codice civile (fa piena prova fino a querela di falso della provenienza delle dichiarazioni).",
    hint: "Firma Digitale / FEQ = piena efficacia probatoria di scrittura privata ex art. 2702 c.c.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_064',
    question: "Cosa stabilisce l'art. 20, comma 1-bis, del CAD in merito all'efficacia probatoria del documento informatico cui non sia apposta una firma elettronica o che rechi una semplice firma elettronica ordinaria (FES)?",
    options: [
      { id: 'A', text: "L'idoneità del documento a soddisfare il requisito della forma scritta e il suo valore probatorio sono liberamente valutabili in giudizio, tenuto conto delle caratteristiche di sicurezza, integrità e immodificabilità." },
      { id: 'B', text: "Il documento è nullo di diritto e totalmente privo di qualsiasi rilievo anche come indizio." },
      { id: 'C', text: "Ha automaticamente il valore di atto pubblico redatto da notaio ai sensi dell'art. 2699 del codice civile." },
      { id: 'D', text: "Comporta l'irrogazione di una sanzione penale a carico di chi lo produce in giudizio." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 20, comma 1-bis, CAD prevede che l'idoneità del documento informatico a soddisfare il requisito della forma scritta e il suo valore probatorio siano liberamente valutabili in giudizio, tenuto conto delle caratteristiche oggettive di sicurezza, integrità e immodificabilità.",
    hint: "Per i documenti senza firma qualificata il valore probatorio è liberamente valutato dal giudice.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_065',
    question: "Qual è la differenza fondamentale tra \"Firma Elettronica Avanzata\" (FEA) e \"Firma Elettronica Qualificata\" (FEQ) ai sensi del Regolamento eIDAS e del CAD?",
    options: [
      { id: 'A', text: "La FEQ è basata su un certificato qualificato rilasciato da un prestatore di servizi fiduciari qualificato ed è creata mediante un dispositivo per la creazione di una firma qualificata (QSCD), a differenza della FEA." },
      { id: 'B', text: "La FEA può essere rilasciata solo da un notaio, mentre la FEQ è generata autonomamente da qualsiasi cittadino con un programma open source." },
      { id: 'C', text: "Non vi è alcuna differenza, trattandosi di sinonimi perfettamente intercambiabili nel diritto europeo." },
      { id: 'D', text: "La FEA si applica solo alle fatture cartacee, mentre la FEQ si applica esclusivamente alle e-mail non certificate." }
    ],
    correctAnswerId: 'A',
    explanation: "La FEA possiede requisiti di connessione univoca e controllo esclusivo (es. firma grafometrica). La FEQ aggiunge due garanzie fondamentali: è creata mediante un dispositivo sicuro per la creazione della firma (QSCD, token/smartcard) e poggia su un certificato qualificato emesso da un Qualified Trust Service Provider.",
    hint: "La FEQ richiede un dispositivo sicuro (QSCD) e un certificato qualificato rilasciato da ente accreditato.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_CAD_066',
    question: "Che cos'è la \"Firma Digitale\" nell'ordinamento giuridico italiano ai sensi dell'art. 1, comma 1, lett. s) del CAD?",
    options: [
      { id: 'A', text: "Un particolare tipo di firma qualificata basata su un sistema di chiavi crittografiche asimmetriche, una pubblica e una privata, che consente di rendere manifesta e verificare la provenienza e l'integrità del documento." },
      { id: 'B', text: "La scansione in formato JPG della firma autografa apposta a mano su un foglio bianco." },
      { id: 'C', text: "La digitazione del proprio nome e cognome in lettere maiuscole in calce a un messaggio di posta ordinaria." },
      { id: 'D', text: "L'indirizzo MAC della scheda di rete ethernet del computer su cui è stato redatto il file." }
    ],
    correctAnswerId: 'A',
    explanation: "La Firma Digitale è una species del genus FEQ, tipica dell'ordinamento italiano, basata su crittografia asimmetrica (coppia di chiavi: una privata per sottoscrivere e una pubblica per verificare).",
    hint: "Crittografia asimmetrica (chiave pubblica e chiave privata) = definizione di Firma Digitale.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_067',
    question: "Che cos'è la \"Marcatura Temporale\" (Time Stamping) apposta a un documento informatico?",
    options: [
      { id: 'A', text: "Una sequenza di dati in forma elettronica emessa da un certificatore accreditato che associa la data e l'ora certe a un documento informatico, consentendo di renderne opponibile a terzi l'esistenza temporale." },
      { id: 'B', text: "L'orologio visualizzato nell'angolo inferiore destro dello schermo del personal computer." },
      { id: 'C', text: "Il timbro a secco apposto sulla superficie del monitor dal funzionario addetto alla segreteria." },
      { id: 'D', text: "Il tempo impiegato dalla stampante laser per produrre una copia cartacea del file." }
    ],
    correctAnswerId: 'A',
    explanation: "La marcatura temporale è il processo con cui un certificatore qualificato genera una firma che attesta data e ora certe, opponibili a terzi, in cui il documento è stato generato o firmato (fondamentale anche dopo la scadenza del certificato di firma).",
    hint: "Attesta data e ora certe con opponibilità a terzi tramite certificatore qualificato.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_068',
    question: "Ai sensi dell'art. 23-bis del CAD, che valore probatorio hanno i \"duplicati informatici\" di documenti informatici?",
    options: [
      { id: 'A', text: "I duplicati informatici hanno il medesimo valore giuridico, ad ogni effetto di legge, del documento informatico da cui sono tratti, se prodotti in conformità alle Linee guida AgID." },
      { id: 'B', text: "I duplicati informatici hanno valore meramente indiziario e devono essere sempre confermati dall'originale analogico." },
      { id: 'C', text: "Sono nulli se creati su sistemi operativi diversi da quello originario." },
      { id: 'D', text: "Possono essere utilizzati esclusivamente per ricerche accademiche e storiche dopo 70 anni dalla creazione." }
    ],
    correctAnswerId: 'A',
    explanation: "Il duplicato informatico è ottenuto mediante la memorizzazione della medesima sequenza di bit dell'originale: avendo la stessa impronta hash, coincide perfettamente con l'originale e ha il suo identico valore legale (art. 23-bis, comma 1 CAD).",
    hint: "Il duplicato informatico ha la stessa sequenza di bit (stesso hash) ed ha il medesimo valore legale dell'originale.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_069',
    question: "Qual è la differenza fondamentale tra \"duplicato informatico\" e \"copia informatica di documento informatico\" ai sensi dell'art. 1 del CAD?",
    options: [
      { id: 'A', text: "Il duplicato ha la stessa sequenza di bit dell'originale (medesimo valore legale intrinseco), mentre la copia ha una sequenza di bit differente e richiede l'attestazione di conformità o verifica per avere la stessa efficacia probatoria dell'originale." },
      { id: 'B', text: "Il duplicato è cartaceo mentre la copia è sempre informatica." },
      { id: 'C', text: "Il duplicato può essere redatto solo dai dirigenti generali di prima fascia." },
      { id: 'D', text: "Non esiste alcuna distinzione tecnica né giuridica tra i due termini." }
    ],
    correctAnswerId: 'A',
    explanation: "Il duplicato è la clonazione bit a bit dell'originale (stesso hash). La copia informatica (es. conversione da Word a PDF) ha una diversa sequenza di bit e, per fare piena prova, necessita delle condizioni previste dall'art. 23-bis, comma 2, o dell'attestazione di conformità di un pubblico ufficiale.",
    hint: "Duplicato = stessi bit (stesso hash). Copia = bit diversi (necessita di attestazione di conformità o corrispondenza).",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_CAD_070',
    question: "Ai sensi dell'art. 41 del CAD, come è strutturato il \"fascicolo informatico\" della pubblica amministrazione?",
    options: [
      { id: 'A', text: "È gestito mediante sistemi informatici che ne garantiscono l'immodificabilità, l'integrità e la tracciabilità, reca un identificativo univoco e contiene l'elenco degli atti e dei documenti che lo compongono con i relativi metadati." },
      { id: 'B', text: "È una semplice cartella compressa .zip salvata sul desktop del singolo operatore." },
      { id: 'C', text: "È un raccoglitore ad anelli contenente le stampe dei file PDF vidimate a mano." },
      { id: 'D', text: "È un file di testo contenente esclusivamente i nomi e cognomi dei testimoni dell'istruttoria." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 41 del CAD prevede che la PA gestisca i procedimenti amministrativi attraverso il fascicolo informatico, caratterizzato da un identificativo univoco, indice dei contenuti, metadati, e accessibilità da parte delle amministrazioni interessate e dei cittadini legittimati.",
    hint: "Identificativo univoco, tracciabilità, integrità, indice e metadati a norma AgID.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_071',
    question: "Ai sensi dell'art. 44 del CAD e delle Linee Guida AgID, cosa si intende per \"Conservazione a norma\" del documento informatico?",
    options: [
      { id: 'A', text: "Il sistema che garantisce nel tempo l'autenticità, l'integrità, l'affidabilità, la leggibilità e la reperibilità dei documenti informatici e dei relativi fascicoli, proteggendoli dall'obsolescenza tecnologica." },
      { id: 'B', text: "Il semplice salvataggio manuale di una copia su chiavetta USB custodita in un cassetto blindato." },
      { id: 'C', text: "La scansione e successiva distruzione al macero degli archivi storici anteriori al 1948." },
      { id: 'D', text: "L'invio di allegati tramite posta elettronica ordinaria a cinque indirizzi differenti." }
    ],
    correctAnswerId: 'A',
    explanation: "La conservazione a norma assicura che il documento digitale rimanga integro, immodificabile, leggibile e legalmente valido per tutto il periodo obbligatorio per legge, affidandosi a processi certificati e al Responsabile della Conservazione.",
    hint: "Garantisce autenticità, integrità, leggibilità e reperibilità nel tempo a prova di obsolescenza.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_072',
    question: "Ai sensi dell'art. 5 del CAD, tutte le pubbliche amministrazioni (incluso l'INPS) sono obbligate ad accettare i pagamenti elettronici tramite:",
    options: [
      { id: 'A', text: "La piattaforma pagoPA gestita dalla società PagoPA S.p.A." },
      { id: 'B', text: "Esclusivamente bonifici postali compilati allo sportello in duplice copia cartacea." },
      { id: 'C', text: "Contanti recapitati a mano presso la tesoreria provinciale dello Stato." },
      { id: 'D', text: "Criptovalute decentralizzate prive di controllo bancario internazionale." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 5 del CAD impone a tutti i soggetti pubblici l'adesione alla piattaforma pagoPA per qualsiasi pagamento spettante all'ente, garantendo trasparenza, riconciliazione automatica e molteplicità di canali per il cittadino.",
    hint: "La piattaforma unica per i pagamenti elettronici della PA è pagoPA.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_073',
    question: "Cos'è la \"Strategia Cloud Italia\" e il Polo Strategico Nazionale (PSN) per le pubbliche amministrazioni?",
    options: [
      { id: 'A', text: "Il piano per la migrazione delle infrastrutture digitali della PA verso ambienti cloud qualificati da ACN, con i dati e servizi critici e strategici ospitati prioritariamente presso il Polo Strategico Nazionale." },
      { id: 'B', text: "Un progetto meteorologico per il monitoraggio satellitare delle precipitazioni atmosferiche." },
      { id: 'C', text: "Un programma per l'acquisto di server fisici da installare nei seminterrati di ciascuna sede provinciale." },
      { id: 'D', text: "Una rete di satelliti geostazionari ad uso esclusivo del Ministero dell'Agricoltura." }
    ],
    correctAnswerId: 'A',
    explanation: "La Strategia Cloud Italia (attuata anche con fondi PNRR M1C1) prevede il principio \"Cloud First\" e la classificazione dei dati (ordinari, critici, strategici), con l'infrastruttura del Polo Strategico Nazionale (PSN) destinata a garantire sicurezza e sovranità dei dati strategici della PA (tra cui quelli INPS).",
    hint: "Migrazione verso cloud sicuri e Polo Strategico Nazionale (PSN) per i dati critici e strategici.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_074',
    question: "Quale ruolo e competenze sono state attribuite all'Agenzia per la Cybersicurezza Nazionale (ACN), istituita con il D.L. 82/2021 conv. in L. 109/2021?",
    options: [
      { id: 'A', text: "È l'autorità nazionale competente per la cybersicurezza, responsabile della resilienza cibernetica, della qualificazione dei servizi cloud per la PA e dell'attuazione della strategia nazionale di cybersicurezza." },
      { id: 'B', text: "È un comitato con funzioni esclusivamente consultive in materia di acquisto di stampanti per le scuole statali." },
      { id: 'C', text: "È l'organo giurisdizionale speciale che giudica in via esclusiva sui reati di diffamazione a mezzo stampa." },
      { id: 'D', text: "È la società in-house del Ministero dell'Economia incaricata di gestire il gioco del Lotto." }
    ],
    correctAnswerId: 'A',
    explanation: "L'ACN (D.L. 82/2021) è l'autorità nazionale di cybersecurity che ha assorbito le funzioni di sicurezza cibernetica prima frammentate (tra cui la qualificazione dei cloud PA prima in capo ad AgID, la gestione del CSIRT Italia e la tutela della sicurezza delle reti).",
    hint: "ACN è l'autorità nazionale per la sicurezza cibernetica e qualificazione dei servizi cloud della PA.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_075',
    question: "Ai sensi dell'art. 65 del CAD, quando le istanze e le dichiarazioni presentate per via telematica alle pubbliche amministrazioni sono pienamente valide ed equivalenti a quelle sottoscritte con firma autografa apposta in presenza del dipendente addetto?",
    options: [
      { id: 'A', text: "Se sottoscritte con firma digitale, o quando l'istante è identificato attraverso SPID, CIE o CNS, ovvero inviate tramite la propria PEC purché le credenziali siano state rilasciate previa identificazione personale." },
      { id: 'B', text: "Solo se il mittente allega la fotocopia cartacea autenticata di tre documenti di riconoscimento diversi." },
      { id: 'C', text: "Esclusivamente qualora la domanda sia inviata di persona dal computer della biblioteca comunale." },
      { id: 'D', text: "Soltanto se l'utente richiede preventivamente l'autorizzazione scritta al Prefetto del capoluogo." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 65, comma 1, del CAD stabilisce che le istanze telematiche sono valide se: firmate digitalmente, o se l'autore è identificato tramite SPID/CIE/CNS, o trasmesse tramite PEC con determinate condizioni, o con firma elettronica avanzata.",
    hint: "SPID, CIE, CNS, Firma Digitale o PEC identificata rendono l'istanza telematica valida ed efficace senza firma olografa.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_076',
    question: "Cos'è l'Indice delle Pubbliche Amministrazioni (IPA) disciplinato dall'art. 6-ter del CAD?",
    options: [
      { id: 'A', text: "L'archivio ufficiale e pubblico contenente i riferimenti organizzativi, i recapiti telematici e i codici univoci per la fatturazione elettronica e le comunicazioni delle PA." },
      { id: 'B', text: "L'indice di gradimento espresso dai cittadini tramite questionari cartacei annuali." },
      { id: 'C', text: "L'indicatore economico per il calcolo del coefficiente di rivalutazione delle pensioni d'oro." },
      { id: 'D', text: "Il registro dei soli fornitori di servizi hardware che hanno sede operativa all'estero." }
    ],
    correctAnswerId: 'A',
    explanation: "L'IPA (art. 6-ter CAD) è il catalogo dei domicili digitali della PA e contiene la struttura organizzativa, i responsabili e i codici univoci per l'invio della fatturazione elettronica (Codice Univoco Ufficio).",
    hint: "IPA = Indice ufficiale delle PA con recapiti PEC, struttura organizzativa e codici univoci per fatture elettroniche.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_077',
    question: "Cosa stabilisce l'art. 1, comma 1, lett. p-bis) del CAD in ordine alla nozione di \"documento informatico\"?",
    options: [
      { id: 'A', text: "La rappresentazione informatica di atti, fatti o dati giuridicamente rilevanti." },
      { id: 'B', text: "Qualsiasi file avente estensione .doc o .docx generato da un editor commerciale." },
      { id: 'C', text: "Unicamente i file contenenti firme olografe scansionate ad alta risoluzione cromatica." },
      { id: 'D', text: "Il supporto fisico (hard disk o DVD) su cui sono impressi i dati magnetici." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 1, lett. p-bis) CAD definisce il documento informatico come 'la rappresentazione informatica di atti, fatti o dati giuridicamente rilevanti'.",
    hint: "Rappresentazione informatica di atti, fatti o dati giuridicamente rilevanti.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_078',
    question: "Che cos'è la \"Firma Elettronica Semplice\" (FES) ai sensi del Regolamento eIDAS n. 910/2014?",
    options: [
      { id: 'A', text: "Dati in forma elettronica, acclusi oppure connessi tramite associazione logica ad altri dati elettronici e utilizzati dal firmatario per firmare (es. PIN, coppia login/password, firma sul POS)." },
      { id: 'B', text: "La firma autografa tracciata a penna stilografica su pergamena speciale." },
      { id: 'C', text: "Un certificato emesso esclusivamente dal Presidente della Corte Costituzionale." },
      { id: 'D', text: "Una marca da bollo digitale acquistata presso le ricevitorie autorizzate." }
    ],
    correctAnswerId: 'A',
    explanation: "La Firma Elettronica (c.d. semplice o leggera) è l'insieme di dati elettronici allegati o connessi logicamente ad altri dati per autenticare. Non richiede certificati qualificati né dispositivi QSCD (es. codice OTP semplice, spunta di accettazione, PIN ordinario).",
    hint: "La FES è la forma più elementare di associazione di dati elettronici per manifestare volontà o firma.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_079',
    question: "Quali requisiti deve soddisfare una \"Firma Elettronica Avanzata\" (FEA) ai sensi dell'art. 26 del Regolamento eIDAS?",
    options: [
      { id: 'A', text: "Essere connessa unicamente al firmatario, idonea a identificarlo, creata con dati sotto il suo controllo esclusivo e collegata ai dati sottoscritti in modo da consentire l'identificazione di ogni successiva modifica." },
      { id: 'B', text: "Essere registrata presso l'Ufficio del Registro entro ventiquattro ore dalla creazione del file." },
      { id: 'C', text: "Prevedere obbligatoriamente l'invio di un fax di conferma a un numero verde istituzionale." },
      { id: 'D', text: "Essere crittografata con una chiave a 64 bit rilasciata dal Ministero della Difesa." }
    ],
    correctAnswerId: 'A',
    explanation: "I 4 requisiti della FEA (art. 26 eIDAS): 1) connessione univoca al firmatario; 2) idoneità a identificarlo; 3) creazione con dati sotto il controllo esclusivo del firmatario; 4) collegamento ai dati in modo che qualsiasi modifica successiva sia rilevabile.",
    hint: "Connessione univoca, identificazione, controllo esclusivo, rilevabilità di ogni modifica.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_CAD_080',
    question: "Ai sensi della Legge 4/2004 (c.d. Legge Stanca) e delle Linee Guida AgID sull'accessibilità degli strumenti informatici, cosa si intende per \"accessibilità\"?",
    options: [
      { id: 'A', text: "La capacità dei sistemi informatici di erogare servizi e fornire informazioni fruibili, senza discriminazioni, anche da parte di coloro che a causa di disabilità necessitano di tecnologie assistive o configurazioni particolari." },
      { id: 'B', text: "La possibilità di accedere agli uffici della sede INPS senza dover salire rampe di scale." },
      { id: 'C', text: "Il costo zero di abbonamento alla rete internet per i titolari di redditi ISEE inferiori a 10.000 euro." },
      { id: 'D', text: "L'orario continuato di apertura al pubblico degli sportelli per 24 ore al giorno, sette giorni su sette." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 1 della L. 4/2004 definisce l'accessibilità come la capacità dei sistemi informatici di erogare servizi e informazioni fruibili senza discriminazioni da chiunque, compresi coloro che usano tecnologie assistive per superare disabilità sensoriali o motorie.",
    hint: "Fruibilità dei siti e dei servizi digitali da parte di tutti, inclusi i disabili (tecnologie assistive).",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_081',
    question: "Cosa sono le Linee Guida WCAG (Web Content Accessibility Guidelines) adottate anche a livello europeo ed italiano per l'accessibilità dei siti web pubblici?",
    options: [
      { id: 'A', text: "Standard tecnici internazionali sviluppati dal W3C (World Wide Web Consortium) articolati nei principi: Percepibile, Utilizzabile, Comprensibile e Robusto." },
      { id: 'B', text: "Direttive emanate dal Ministero dell'Interno per il controllo dell'ordine pubblico su internet." },
      { id: 'C', text: "Regolamenti dell'Unione Postale Universale per il calcolo delle tariffe di spedizione aerea." },
      { id: 'D', text: "Istruzioni per l'installazione di condizionatori d'aria nelle sale server delle PA." }
    ],
    correctAnswerId: 'A',
    explanation: "Le WCAG (attualmente 2.1/2.2) fissano i requisiti di conformità (livelli A, AA, AAA) basati sui quattro principi cardine dell'accessibilità: percepibile, utilizzabile, comprensibile e robusto (POUR). La PA italiana deve garantire il livello AA.",
    hint: "I 4 principi WCAG: Percepibile, Utilizzabile, Comprensibile, Robusto.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_082',
    question: "Entro quale data le pubbliche amministrazioni sono tenute a pubblicare annualmente sul proprio sito web la \"Dichiarazione di Accessibilità\" ai sensi delle Linee Guida AgID?",
    options: [
      { id: 'A', text: "Entro il 23 settembre di ogni anno." },
      { id: 'B', text: "Entro il 31 dicembre di ogni anno solare." },
      { id: 'C', text: "Entro il 30 aprile in concomitanza con il bilancio d'esercizio." },
      { id: 'D', text: "Entro il primo lunedì del mese di agosto." }
    ],
    correctAnswerId: 'A',
    explanation: "Le Linee Guida AgID sull'accessibilità degli strumenti informatici impongono alle PA di pubblicare e aggiornare la dichiarazione di accessibilità dei propri siti web e applicazioni mobili entro il 23 settembre di ciascun anno.",
    hint: "Scadenza annuale fissa: 23 settembre.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_CAD_083',
    question: "Che cos'è il \"Piano Triennale per l'Informatica nella Pubblica Amministrazione\" redatto dall'AgID?",
    options: [
      { id: 'A', text: "Il documento di indirizzo strategico ed economico che guida la trasformazione digitale della PA italiana, definendo obiettivi, linee d'azione e risultati attesi per tutte le amministrazioni." },
      { id: 'B', text: "Il piano di ammortamento dei prestiti concessi dall'INPS ai dipendenti pubblici statali." },
      { id: 'C', text: "Un bando di concorso straordinario per l'arruolamento di programmatori militari." },
      { id: 'D', text: "L'inventario dei beni informatici dismessi da vendere all'asta pubblica." }
    ],
    correctAnswerId: 'A',
    explanation: "Il Piano Triennale AgID (aggiornato costantemente) è lo strumento fondamentale di programmazione operativa e strategica dell'evoluzione dell'ICT nella PA, articolato su componenti (servizi, dati, piattaforme, infrastrutture, interoperabilità, sicurezza, governo).",
    hint: "È la bussola strategica della digitalizzazione della PA redatta da AgID.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_084',
    question: "Ai sensi dell'art. 68 del CAD, quale criterio di priorità devono adottare le pubbliche amministrazioni nell'acquisizione di programmi informatici (software)?",
    options: [
      { id: 'A', text: "Devono effettuare una valutazione comparativa dando priorità a soluzioni software a codice sorgente aperto (Open Source) o al riuso di software già sviluppato da altre amministrazioni." },
      { id: 'B', text: "Devono acquistare tassativamente software commerciale proprietario con licenze a rinnovo mensile." },
      { id: 'C', text: "Devono commissionare solo software proprietario ad aziende con sede nella medesima provincia." },
      { id: 'D', text: "Non hanno alcun vincolo o valutazione comparativa da eseguire prima dell'acquisto." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 68 CAD obbliga le PA a svolgere una valutazione comparativa delle soluzioni disponibili (open source, riuso di software di altra PA, software proprietario, SaaS) privilegiando le soluzioni aperte e il riuso rispetto a software da creare da zero o proprietario.",
    hint: "Priorità per l'open source e il riuso di soluzioni della PA.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_085',
    question: "Cosa prevede l'art. 69 del CAD in materia di \"riuso dei programmi informatici\" tra pubbliche amministrazioni?",
    options: [
      { id: 'A', text: "Le PA che siano titolari di diritti su programmi informatici sviluppati su commessa devono renderne disponibile il codice sorgente, completo di documentazione, in un repository aperto (es. Developers Italia) per il riuso gratuito di altre PA." },
      { id: 'B', text: "Le PA devono vendere le licenze software ad altre amministrazioni applicando un ricarico commerciale del 20%." },
      { id: 'C', text: "È fatto espresso divieto alle PA di cedere programmi informatici ad altri enti pubblici." },
      { id: 'D', text: "I software possono essere ceduti solo decorsi 50 anni dal loro primo collaudo funzionale." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 69 del CAD sancisce il principio del riuso del software: i codici sorgente dei software commissionati dalle PA devono essere resi disponibili gratuitamente ad altre amministrazioni con licenza aperta (open source) tramite Developers Italia.",
    hint: "Codice aperto e gratuito a disposizione delle altre PA per evitare sprechi di risorse pubbliche.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_086',
    question: "Cos'è il \"Modello di Interoperabilità\" (ModI) definito nelle Linee Guida AgID?",
    options: [
      { id: 'A', text: "Il framework tecnologico e di governance che definisce gli standard per la progettazione, l'esposizione e l'utilizzo delle API (Application Programming Interface) sicure tra gli enti pubblici." },
      { id: 'B', text: "Il modello organizzativo dei turni di guardia notturna presso i varchi elettronici delle sedi." },
      { id: 'C', text: "La tipologia standard di scrivania ergonomica per i videoterminalisti dell'amministrazione." },
      { id: 'D', text: "Il formato di stampa dei bollettini postali per il versamento dei contributi volontari." }
    ],
    correctAnswerId: 'A',
    explanation: "Il ModI (Modello di Interoperabilità AgID) definisce le regole tecniche (REST, SOAP, OpenAPI, pattern di sicurezza come OAuth2, MTLS) affinché i sistemi informativi della PA possano scambiarsi dati in modo interoperabile e sicuro via PDND.",
    hint: "Framework di regole per le API della PA che permette la comunicazione tra banche dati.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_CAD_087',
    question: "Che valore legale attribuisce l'ordinamento italiano alla Posta Elettronica Certificata (PEC) ai sensi dell'art. 48 del CAD?",
    options: [
      { id: 'A', text: "La trasmissione del documento informatico per via telematica tramite PEC equivale, nei casi consentiti dalla legge, alla notificazione a mezzo posta raccomandata con ricevuta di ritorno." },
      { id: 'B', text: "Ha valore di mera comunicazione informale priva di alcuna valenza probatoria della data di spedizione o ricezione." },
      { id: 'C', text: "Equivale alla sola pubblicazione sulla Gazzetta Ufficiale della Repubblica Italiana." },
      { id: 'D', text: "Ha valore legale solo se la dimensione dell'allegato non supera i 50 Kilobyte." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 48 del CAD sancisce l'equiparazione della trasmissione via PEC alla notifica a mezzo posta raccomandata A/R: la ricevuta di accettazione e la ricevuta di avvenuta consegna costituiscono prova dell'invio e del recapito con data e ora certe.",
    hint: "PEC = raccomandata con ricevuta di ritorno (A/R).",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_088',
    question: "Quali ricevute rilascia il sistema di Posta Elettronica Certificata (PEC) al mittente per comprovare la trasmissione?",
    options: [
      { id: 'A', text: "La ricevuta di accettazione (rilasciata dal gestore del mittente) e la ricevuta di avvenuta consegna (rilasciata dal gestore del destinatario)." },
      { id: 'B', text: "Solo una fattura pro-forma emessa dalla Camera di Commercio della provincia." },
      { id: 'C', text: "Una notifica SMS sul cellulare del destinatario senza alcun riferimento orario." },
      { id: 'D', text: "Un codice alfanumerico da esibire a mano all'ufficiale giudiziario entro 3 giorni." }
    ],
    correctAnswerId: 'A',
    explanation: "Il funzionamento della PEC prevede due attestazioni fondamentali: la ricevuta di accettazione (attesta l'inoltro del messaggio dal mittente) e la ricevuta di avvenuta consegna (attesta che il messaggio è entrato nella casella del destinatario con data e ora certe).",
    hint: "Ricevuta di accettazione + ricevuta di avvenuta consegna.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_089',
    question: "Cos'è la \"REM\" (Registered Electronic Mail) o \"PEC Europea\" in corso di adozione in conformità allo standard ETSI EN 319 532-4?",
    options: [
      { id: 'A', text: "L'evoluzione della PEC tradizionale verso un servizio di recapito elettronico certificato qualificato conforme a eIDAS, con identificazione certa e a due fattori del mittente e del destinatario a livello europeo." },
      { id: 'B', text: "Un servizio di posta prioritario riservato alle comunicazioni diplomatiche del Vaticano." },
      { id: 'C', text: "Un software di compressione automatica delle immagini allegate ai messaggi di posta." },
      { id: 'D', text: "Il registro dei soli messaggi di posta contenenti allegati crittografati con algoritmi russi." }
    ],
    correctAnswerId: 'A',
    explanation: "La PEC europea (REM basata su standard ETSI) adegua la PEC italiana al Regolamento UE eIDAS, introducendo l'obbligo di identificazione certa del titolare e l'autenticazione a due fattori (2FA), garantendo interoperabilità in tutta l'UE.",
    hint: "Evoluzione europea della PEC con verifica di identità certa del mittente/destinatario e 2FA.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_CAD_090',
    question: "Ai sensi del D.P.R. 445/2000 e delle Linee Guida AgID sul protocollo informatico, quali elementi sono immodificabili e costituiscono la \"segnatura di protocollo\"?",
    options: [
      { id: 'A', text: "Numero progressivo di protocollo generato automaticamente, data e ora di registrazione, mittente e destinatario, e oggetto del documento." },
      { id: 'B', text: "Il nome e cognome del coniuge del funzionario addetto alla protocollazione." },
      { id: 'C', text: "L'importo economico del corrispettivo dell'appalto associato al documento." },
      { id: 'D', text: "Il numero di matricola della stampante ad aghi utilizzata per imprimere il timbro." }
    ],
    correctAnswerId: 'A',
    explanation: "La segnatura di protocollo (art. 53 D.P.R. 445/2000) associa al documento in modo immodificabile: numero progressivo univoco generato dal sistema, data di protocollazione, mittente/destinatario e oggetto.",
    hint: "Numero progressivo univoco, data/ora, mittente/destinatario e oggetto.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_091',
    question: "Cosa vieta tassativamente l'art. 53, comma 2, del D.P.R. 445/2000 in ordine alla numerazione di protocollo informatico?",
    options: [
      { id: 'A', text: "L'assegnazione dello stesso numero di protocollo a più documenti, l'utilizzo di numeri bis/ter o l'inserimento di registrazioni retrodatate." },
      { id: 'B', text: "L'utilizzo di numeri pari nei giorni dispari del calendario gregoriano." },
      { id: 'C', text: "La protocollazione di documenti aventi un'estensione diversa da .txt." },
      { id: 'D', text: "L'accesso al registro da parte dei dipendenti assunti con contratto a tempo indeterminato." }
    ],
    correctAnswerId: 'A',
    explanation: "È severamente vietato assegnare numeri retrodatati, creare 'buchi' di numerazione, utilizzare numeri frazionari (es. bis, ter) o cancellare registrazioni già effettuate: il registro è fidefacente e sequenziale.",
    hint: "Numerazione progressiva e sequenziale senza salti, bis o retrodatazioni.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_092',
    question: "Ai sensi dell'art. 50 del CAD, i dati delle pubbliche amministrazioni formati e raccolti nello svolgimento dei propri compiti istituzionali sono:",
    options: [
      { id: 'A', text: "Patrimonio della collettività e sono resi disponibili e accessibili con l'uso delle tecnologie informatiche, salvo i limiti di legge a tutela della privacy o del segreto." },
      { id: 'B', text: "Proprietà intellettuale privata esclusiva dei singoli funzionari che li hanno materialmente redatti." },
      { id: 'C', text: "Coperti automaticamente da segreto di Stato per i primi dieci anni dalla loro creazione." },
      { id: 'D', text: "Alienabili a titolo oneroso a società di marketing private previa delibera del direttore di sede." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 50, comma 1, del CAD sancisce il principio fondamentale secondo cui i dati delle PA sono patrimonio della collettività e devono essere resi disponibili, aperti e interoperabili (Open Data by default).",
    hint: "I dati pubblici sono patrimonio comune e aperti di default.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_093',
    question: "Cosa si intende per \"dati aperti\" (Open Data) ai sensi dell'art. 68, comma 3, del CAD?",
    options: [
      { id: 'A', text: "Dati disponibili con licenza che ne permetta l'uso libero da parte di chiunque, anche per fini commerciali, accessibili mediante tecnologie telematiche in formati aperti e privi di restrizioni brevettuali e leggibili meccanicamente." },
      { id: 'B', text: "Dati cartacei conservati in stanze con le porte aperte durante l'orario di servizio." },
      { id: 'C', text: "Dati personali e sanitari liberamente visibili sui social network senza filtri di sicurezza." },
      { id: 'D', text: "Informazioni riservate consultabili solo previo pagamento di un ticket di 100 euro per ogni record." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 68, comma 3, lett. b) CAD definisce i formati aperti e gli open data: formati aperti (non proprietari e documentati pubblicamente), leggibili da elaboratori automatici (machine-readable) e utilizzabili da chiunque anche a scopo commerciale.",
    hint: "Machine-readable, formato non proprietario e riutilizzabile liberamente da chiunque.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_094',
    question: "Quale licenza aperta è considerata lo standard raccomandato dalle Linee Guida Nazionali per la valorizzazione del patrimonio informativo pubblico per gli Open Data della PA?",
    options: [
      { id: 'A', text: "Creative Commons Attribuzione (CC-BY 4.0) o CC0 (pubblico dominio)." },
      { id: 'B', text: "Copyright commerciale con riserva assoluta di tutti i diritti economici." },
      { id: 'C', text: "Licenza Microsoft EULA a pagamento per singolo processore." },
      { id: 'D', text: "Brevetto industriale registrato presso l'ufficio marchi di Ginevra." }
    ],
    correctAnswerId: 'A',
    explanation: "Le Linee Guida AgID per l'Open Data raccomandano la licenza CC-BY (Creative Commons Attribution) o CC0 (Pubblico Dominio), che consente a chiunque di riutilizzare i dati con l'unico obbligo di citare la fonte della PA emittente.",
    hint: "Licenza CC-BY (Attribuzione) o CC0 (Pubblico Dominio).",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_095',
    question: "Che cos'è lo standard di interoperabilità \"REST\" ampiamente utilizzato nelle API della Pubblica Amministrazione e nella PDND?",
    options: [
      { id: 'A', text: "Un'architettura software stateless (senza stato) che sfrutta i metodi standard del protocollo HTTP (GET, POST, PUT, DELETE) per lo scambio di dati solitamente formattati in JSON." },
      { id: 'B', text: "Un dispositivo hardware per la ventilazione dei rack contenenti server ad alte prestazioni." },
      { id: 'C', text: "Una tipologia di connettore in fibra ottica monomodale per le trasmissioni sottomarine." },
      { id: 'D', text: "La pausa obbligatoria dal lavoro al videoterminale di 15 minuti ogni 120 minuti di lavoro continuativo." }
    ],
    correctAnswerId: 'A',
    explanation: "REST (Representational State Transfer) è il modello architetturale dominante per le API web: usa le chiamate standard HTTP (GET, POST, PUT, DELETE) scambiando carichi leggeri strutturati (JSON), conforme al ModI e alla PDND.",
    hint: "Architettura web stateless basata sui verbi HTTP standard per scambiare payload JSON.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_CAD_096',
    question: "Ai sensi dell'art. 52 del D.Lgs. 82/2005 (CAD), cosa prevede il principio dell'accesso telematico e riutilizzo dei dati delle pubbliche amministrazioni?",
    options: [
      { id: 'A', text: "L'accesso telematico a dati, documenti e procedimenti è garantito a cittadini e imprese, e le amministrazioni devono pubblicare nei propri cataloghi i metadati relativi ai dati disponibili." },
      { id: 'B', text: "I dati sono consultabili esclusivamente mediante rilascio di un floppy disk magnetico presso la portineria." },
      { id: 'C', text: "Il cittadino deve versare una cauzione infruttifera prima di visualizzare qualsiasi pagina web pubblica." },
      { id: 'D', text: "Le PA non possono pubblicare dati su internet senza autorizzazione preventiva dell'UNESCO." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 52 del CAD stabilisce che le PA pubblicano nei rispettivi siti e nel catalogo nazionale dei dati i metadati e rendono i dati accessibili telematicamente nel rispetto delle norme sulla protezione dei dati personali.",
    hint: "Accesso telematico garantito a tutti con pubblicazione dei cataloghi dei metadati.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_097',
    question: "Nel contesto della sicurezza informatica della PA, che cosa si intende per \"Disaster Recovery\" ai sensi dell'art. 50-bis del CAD?",
    options: [
      { id: 'A', text: "L'insieme delle misure tecnologiche, logistiche e organizzative atte a ripristinare sistemi, dati e infrastrutture necessari all'erogazione dei servizi a seguito di gravi calamità o guasti catastrofici." },
      { id: 'B', text: "La gestione economica dei risarcimenti assicurativi in caso di grandine sul parco autovetture di servizio." },
      { id: 'C', text: "L'evacuazione del personale dall'edificio in occasione delle prove antincendio periodiche." },
      { id: 'D', text: "La cancellazione preventiva dei file di archivio prima di procedere a una perquisizione giudiziaria." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 50-bis del CAD disciplina la continuità operativa e il disaster recovery: la capacità di un'organizzazione pubblica di ripristinare il funzionamento dei propri servizi ICT critici entro tempi prefissati (RTO) a fronte di disastri naturali o cyberattacchi.",
    hint: "Misure per il recupero e ripristino di sistemi e dati a fronte di gravi eventi catastrofici.",
    level: "base"
  },
  {
    id: 'Q_DIR_CAD_098',
    question: "Qual è la differenza tra i parametri RPO (Recovery Point Objective) e RTO (Recovery Time Objective) nei piani di continuità operativa della PA?",
    options: [
      { id: 'A', text: "RPO misura la quantità massima di dati tollerabile che può andare persa (espressa in tempo trascorso dall'ultimo backup), mentre RTO misura il tempo massimo necessario per ripristinare la piena operatività dei servizi." },
      { id: 'B', text: "RPO è il costo orario dei consulenti IT, mentre RTO è il rimborso chilometrico spettante ai tecnici." },
      { id: 'C', text: "RPO riguarda solo i server Linux, mentre RTO riguarda esclusivamente i database Oracle." },
      { id: 'D', text: "Non vi è differenza, sono sigle equivalenti utilizzate dai produttori di stampanti laser." }
    ],
    correctAnswerId: 'A',
    explanation: "RPO (Recovery Point Objective) indica la 'freschezza' del dato ripristinato (quanti dati/ore di lavoro siamo disposti a perdere). RTO (Recovery Time Objective) indica la rapidità di ripristino del servizio (dopo quanto tempo il sistema torna online).",
    hint: "RPO = quanti dati perdo (tempo dall'ultimo backup). RTO = quanto tempo impiego a ripartire.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_CAD_099',
    question: "Ai sensi del Regolamento UE 2024/1689 (Artificial Intelligence Act), come sono classificati i sistemi di IA impiegati dalle pubbliche amministrazioni per la concessione di prestazioni e servizi sociali pubblici (come sussidi o pensioni)?",
    options: [
      { id: 'A', text: "Sistemi a rischio elevato (High-risk AI systems), soggetti a rigorosi requisiti di conformità, tracciabilità, qualità dei dati, trasparenza e supervisione umana (Human-in-the-loop)." },
      { id: 'B', text: "Sistemi a rischio inesistente o minimo esenti da qualsiasi tipologia di obbligo di conformità o audit." },
      { id: 'C', text: "Pratiche di IA categoricamente proibite e punite con la reclusione immediata dei programmatori." },
      { id: 'D', text: "Sistemi di intrattenimento per il personale non rientranti nella disciplina dell'Unione Europea." }
    ],
    correctAnswerId: 'A',
    explanation: "L'allegato III dell'AI Act europeo classifica esplicitamente come 'ad alto rischio' i sistemi di IA utilizzati dalle autorità pubbliche per valutare l'ammissibilità a prestazioni e servizi di assistenza pubblica essenziale (es. prestazioni di welfare o sussidi INPS), imponendo standard rigorosi di audit e controllo umano.",
    hint: "I sistemi di IA per prestazioni sociali sono 'ad alto rischio' nell'AI Act (Allegato III).",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_CAD_100',
    question: "Quale principio di garanzia impone il Consiglio di Stato nell'uso dell'Intelligenza Artificiale e degli algoritmi da parte della pubblica amministrazione?",
    options: [
      { id: 'A', text: "Il principio di non esclusività della decisione algoritmica: la decisione amministrativa non può basarsi unicamente sull'algoritmo, dovendo sempre residuare uno spazio di controllo e valutazione umana discrezionale (regola del 'human in the loop')." },
      { id: 'B', text: "Il principio di insindacabilità tecnica assoluta del codice sorgente rispetto a qualunque autorità giudiziaria." },
      { id: 'C', text: "L'obbligo di sostituire integralmente tutti i funzionari di carriera con modelli linguistici di grandi dimensioni." },
      { id: 'D', text: "Il divieto per il cittadino di impugnare un atto se generato da un computer certificato ISO." }
    ],
    correctAnswerId: 'A',
    explanation: "La giurisprudenza amministrativa italiana (Consiglio di Stato, ad es. sez. VI, n. 8472/2019 e 2270/2019) stabilisce il principio della non esclusività della decisione algoritmica: l'algoritmo non può mai sostituire integralmente il funzionario umano, ma può solo assisterlo; l'istruttoria e la decisione finale devono sempre essere imputabili a una valutazione umana controllabile.",
    hint: "Human in the loop: la macchina assiste, ma l'uomo controlla e risponde della decisione.",
    level: "avanzato"
  }
];

const filePath = path.join(__dirname, '../public/db/master_bank/diritto/cad.json');
const bank = JSON.parse(fs.readFileSync(filePath, 'utf8'));
console.log('Initial count in cad.json:', bank.length);

bank.push(...questions);

// Balance the whole bank (100 questions) evenly across A, B, C, D
const letters = ['A', 'B', 'C', 'D'];
bank.forEach((q, idx) => {
  const targetLetter = letters[idx % 4];
  const currentCorrect = q.options.find(o => o.id === q.correctAnswerId);
  const others = q.options.filter(o => o.id !== q.correctAnswerId);
  
  const newOptions = [];
  let otherIdx = 0;
  for (let l of letters) {
    if (l === targetLetter) {
      newOptions.push({ id: l, text: currentCorrect.text });
    } else {
      newOptions.push({ id: l, text: others[otherIdx++].text });
    }
  }
  q.options = newOptions;
  q.correctAnswerId = targetLetter;
});

fs.writeFileSync(filePath, JSON.stringify(bank, null, 2), 'utf8');

const counts = { A: 0, B: 0, C: 0, D: 0 };
bank.forEach(q => counts[q.correctAnswerId]++);
console.log('Successfully updated cad.json! Total:', bank.length, 'Counts:', counts);
