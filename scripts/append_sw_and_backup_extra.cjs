const fs = require('fs');
const path = require('path');

const swQuestions = [
  {
    id: 'Q_INF_SW_051',
    question: "Nel contesto delle tecnologie per il lavoro agile (smart working), che cos'è una soluzione 'VDI' (Virtual Desktop Infrastructure)?",
    options: [
      { id: 'A', text: "Una tecnologia che ospita e gestisce ambienti desktop utente completi su macchine virtuali residenti in un datacenter/server centrale, accessibili da remoto tramite thin client o PC personali (BYOD)" },
      { id: 'B', text: "Uno schermo a cristalli liquidi da collegare al portatile" },
      { id: 'C', text: "Un programma per inviare messaggi SMS pubblicitari ai dipendenti" },
      { id: 'D', text: "Un contratto di fornitura di arredi ergonomici per la casa" }
    ],
    correctAnswerId: 'A',
    explanation: "La VDI (es. Citrix Virtual Apps, VMware Horizon, Azure Virtual Desktop) centralizza i dati e l'elaborazione nei server aziendali sicuri: sui terminali remoti viaggiano solo flussi video dei pixel crittografati, evitando che dati riservati siano memorizzati su PC non gestiti.",
    hint: "Virtual Desktop Infrastructure: il desktop gira sui server del datacenter e l'utente vi accede da remoto.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_052',
    question: "Cosa stabilisce la Legge 81/2017 in ordine al 'diritto alla disconnessione' per il lavoratore agile nella Pubblica Amministrazione?",
    options: [
      { id: 'A', text: "L'accordo individuale deve individuare le fasce temporali di reperibilità e le misure tecniche e organizzative necessarie per garantire la disattivazione dei dispositivi e la disconnessione del lavoratore dalle comunicazioni aziendali al di fuori dell'orario stabilito" },
      { id: 'B', text: "Il lavoratore deve rimanere reperibile 24 ore su 24 inclusi i festivi" },
      { id: 'C', text: "Il lavoratore non può utilizzare la posta elettronica aziendale per più di trenta minuti al giorno" },
      { id: 'D', text: "La connessione Wi-Fi domestica viene pagata interamente dal Ministero della Difesa" }
    ],
    correctAnswerId: 'A',
    explanation: "Il diritto alla disconnessione (art. 19 L. 81/2017 e CCNL Funzioni Centrali) tutela la salute psicofisica del lavoratore, garantendo che non vi sia obbligo di rispondere a email, telefonate o messaggi nelle ore di riposo.",
    hint: "Fasce di disconnessione per tutelare i tempi di riposo al di fuori dell'orario di lavoro.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_053',
    question: "Che cos'è una soluzione 'MDM' (Mobile Device Management) nella sicurezza delle postazioni mobili della PA?",
    options: [
      { id: 'A', text: "Una piattaforma software che permette agli amministratori IT di monitorare, configurare, applicare criteri di sicurezza (crittografia, PIN, blocco installazioni) e cancellare dati da remoto (remote wipe) su smartphone, tablet e laptop aziendali" },
      { id: 'B', text: "Un caricabatterie a induzione magnetica da tavolo" },
      { id: 'C', text: "Un accordo sindacale per l'acquisto di auricolari Bluetooth" },
      { id: 'D', text: "Un'applicazione per il monitoraggio della frequenza cardiaca" }
    ],
    correctAnswerId: 'A',
    explanation: "I sistemi MDM (es. Microsoft Intune, VMware Workspace ONE) consentono di separare dati aziendali e personali (containerization) e di cancellare selettivamente i dati aziendali in caso di smarrimento o furto del dispositivo mobile.",
    hint: "Mobile Device Management per la gestione e sicurezza centralizzata dei dispositivi mobili.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_054',
    question: "Quale protocollo aperto standard per la telefonia e comunicazione multimediale su IP (VoIP) gestisce l'inizializzazione, la modifica e la terminazione delle sessioni di chiamata?",
    options: [
      { id: 'A', text: "SIP (Session Initiation Protocol)" },
      { id: 'B', text: "SNMP" },
      { id: 'C', text: "POP3" },
      { id: 'D', text: "IMAP4" }
    ],
    correctAnswerId: 'A',
    explanation: "SIP (RFC 3261) è il protocollo di segnalazione text-based per il VoIP: negozia i parametri audio/video (codec, porte tramite SDP), lasciando poi il trasporto dei flussi multimediali al protocollo RTP.",
    hint: "SIP (Session Initiation Protocol) stabilisce e gestisce le chiamate VoIP.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_055',
    question: "Quale protocollo di trasporto in tempo reale trasmette i flussi di dati audio e video digitalizzati durante le videochiamate e conferenze web?",
    options: [
      { id: 'A', text: "RTP (Real-time Transport Protocol) / SRTP" },
      { id: 'B', text: "FTP" },
      { id: 'C', text: "Telnet" },
      { id: 'D', text: "DHCP" }
    ],
    correctAnswerId: 'A',
    explanation: "RTP viaggia tipicamente su UDP e include timestamp e numeri di sequenza per consentire al ricevitore di ricostruire l'ordine e compensare il jitter. Nella versione sicura cifrata (SRTP) garantisce la riservatezza delle conversazioni.",
    hint: "RTP e Secure RTP (SRTP) trasportano audio e video in tempo reale.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_056',
    question: "In cosa consiste la tecnologia 'WebRTC' (Web Real-Time Communication) integrata nei moderni browser web?",
    options: [
      { id: 'A', text: "Uno standard e framework open source che consente la comunicazione audio/video peer-to-peer e la condivisione dati in tempo reale direttamente all'interno delle pagine web senza necessità di installare plugin proprietari" },
      { id: 'B', text: "Un software per la scansione di documenti cartacei in PDF" },
      { id: 'C', text: "Un protocollo per la trasmissione di file audio preregistrati via email" },
      { id: 'D', text: "Un connettore hardware USB per cuffie telefoniche" }
    ],
    correctAnswerId: 'A',
    explanation: "WebRTC permette videoconferenze dirette tra browser (usato da Google Meet, Microsoft Teams web, ecc.) sfruttando API JavaScript e protocolli standard (SDP, ICE, STUN, TURN, SRTP) senza estensioni aggiuntive.",
    hint: "Comunicazione audio/video in tempo reale tra browser senza plugin esterni.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_057',
    question: "Quale misura di sicurezza informatica è OBBLIGATORIA per consentire l'accesso da remoto ai dipendenti in smart working verso i sistemi informativi dell'INPS?",
    options: [
      { id: 'A', text: "Autenticazione a più fattori (MFA / 2FA) combinata con canale VPN cifrato e certificati digitali" },
      { id: 'B', text: "L'invio di un fax di autorizzazione prima di ogni connessione" },
      { id: 'C', text: "L'uso esclusivo di monitor con risoluzione a 4K" },
      { id: 'D', text: "L'obbligo di connettersi esclusivamente tramite reti Wi-Fi pubbliche aperte" }
    ],
    correctAnswerId: 'A',
    explanation: "Le Linee Guida AgID e ACN impongono l'adozione dell'autenticazione a più fattori (qualcosa che sai, qualcosa che hai, qualcosa che sei) e tunnel VPN cifrati per qualsiasi accesso remoto ai sistemi della PA.",
    hint: "Autenticazione a due fattori (MFA) e connessione cifrata VPN.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_058',
    question: "Cosa indica l'acronimo 'BYOD' nella gestione delle postazioni di lavoro e quali rischi comporta?",
    options: [
      { id: 'A', text: "'Bring Your Own Device' (uso di dispositivi personali del dipendente per lavoro): comporta rischi di fuga di dati riservati, presenza di malware non controllato e difficoltà di separazione tra sfera personale e professionale" },
      { id: 'B', text: "Un protocollo di backup notturno su nastro magnetico" },
      { id: 'C', text: "La consegna obbligatoria del computer portatile ogni venerdì sera" },
      { id: 'D', text: "Un tipo di connettore di alimentazione elettrica universale" }
    ],
    correctAnswerId: 'A',
    explanation: "Il BYOD consente ai dipendenti di usare PC o smartphone privati per lavorare, ma espone la PA a rischi di sicurezza se i dispositivi non sono governati da soluzioni MDM e sandbox isolate.",
    hint: "Bring Your Own Device: uso di dispositivi personali con rischi di sicurezza e privacy.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_059',
    question: "Quale modello architetturale di sicurezza informatica sostituisce la fiducia implicita nella rete interna con il principio 'Never Trust, Always Verify'?",
    options: [
      { id: 'A', text: "Zero Trust Architecture (ZTA)" },
      { id: 'B', text: "Perimeter Security tradizionale" },
      { id: 'C', text: "Default Allow Policy" },
      { id: 'D', text: "Open Access Network" }
    ],
    correctAnswerId: 'A',
    explanation: "Zero Trust non si fida di nessun utente o dispositivo anche se all'interno della LAN: richiede autenticazione continua, principio del minimo privilegio, micro-segmentazione e verifica costante dello stato del dispositivo.",
    hint: "Zero Trust: non fidarsi mai, verificare sempre ogni accesso.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_060',
    question: "Che cos'è un server 'STUN' (Session Traversal Utilities for NAT) utilizzato nelle videochiamate WebRTC e VoIP?",
    options: [
      { id: 'A', text: "Un server che consente ai client situati dietro a un router NAT di scoprire il proprio indirizzo IP pubblico e la porta esterna assegnata per stabilire comunicazioni peer-to-peer dirette" },
      { id: 'B', text: "Un generatore di rumore bianco per mascherare la voce" },
      { id: 'C', text: "Un software per il download di file torrent" },
      { id: 'D', text: "Un firewall per bloccare le email pubblicitarie" }
    ],
    correctAnswerId: 'A',
    explanation: "STUN permette al dispositivo di scoprire 'come viene visto da internet' all'esterno del NAT locale; se il NAT è di tipo simmetrico e blocca il peer-to-peer, si ricorre a un server di inoltro TURN (relay).",
    hint: "Aiuta i client dietro NAT a scoprire il proprio IP pubblico per videochiamate P2P.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_061',
    question: "In Microsoft Teams o piattaforme di Unified Communications, cos'è la 'Presence' (stato di presenza)?",
    options: [
      { id: 'A', text: "La funzionalità che indica la disponibilità in tempo reale dell'utente (Disponibile, Occupato, Non disturbare, In riunione, Assente), aggiornata automaticamente dal calendario e dall'attività sul computer" },
      { id: 'B', text: "La firma autografa sul registro cartaceo delle presenze dell'ufficio" },
      { id: 'C', text: "Il rilevamento delle impronte digitali all'ingresso della sala riunioni" },
      { id: 'D', text: "Un allarme acustico che suona ogni 30 minuti" }
    ],
    correctAnswerId: 'A',
    explanation: "La Presence segnala dinamicamente lo stato del collega (integrandosi con Outlook/Exchange), permettendo di sapere se è impegnato in una chiamata o se può essere contattato immediatamente.",
    hint: "Stato di disponibilità in tempo reale (Occupato, Disponibile, In riunione).",
    level: "base"
  },
  {
    id: 'Q_INF_SW_062',
    question: "Nel protocollo di desktop remoto 'RDP' (Remote Desktop Protocol - porta TCP 3389) di Microsoft, quale componente fa da gateway sicuro nella DMZ evitando l'esposizione diretta della porta 3389 su internet?",
    options: [
      { id: 'A', text: "Remote Desktop Gateway (RD Gateway) su porta HTTPS 443" },
      { id: 'B', text: "Server Telnet" },
      { id: 'C', text: "Proxy FTP anonimo" },
      { id: 'D', text: "Switch unmanaged a 10 Mbps" }
    ],
    correctAnswerId: 'A',
    explanation: "Esporre direttamente la porta 3389 su internet è un grave rischio di attacco brute force e ransomware. L'RD Gateway incapsula il traffico RDP in un tunnel HTTPS sicuro (porta 443) con autenticazione a due fattori.",
    hint: "RD Gateway incapsula il traffico RDP su HTTPS sicuro (porta 443).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_063',
    question: "Cosa si intende per 'E2EE' (End-to-End Encryption) nelle applicazioni di messaggistica e collaborazione aziendale?",
    options: [
      { id: 'A', text: "La crittografia in cui solo i dispositivi dei partecipanti alla conversazione possiedono le chiavi per decifrare i messaggi, impedendo a fornitori del servizio, intermediari di rete o terzi di accedere al contenuto in chiaro" },
      { id: 'B', text: "L'eliminazione dei messaggi dopo 5 secondi dalla lettura" },
      { id: 'C', text: "La stampa automatica dei messaggi su carta chimica" },
      { id: 'D', text: "L'invio di messaggi esclusivamente tramite codice Morse" }
    ],
    correctAnswerId: 'A',
    explanation: "Nella cifratura End-to-End, il messaggio viene cifrato sul dispositivo del mittente e decifrato solo su quello del destinatario: il server di transito vede solo dati cifrati incomprensibili.",
    hint: "Crittografia da estremo a estremo: solo mittente e destinatario possono leggere il messaggio.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_064',
    question: "Quale tipologia di attacco di ingegneria sociale mira specificamente a dipendenti pubblici in smart working fingendosi il reparto IT dell'INPS per sottrarre credenziali VPN o aziendali?",
    options: [
      { id: 'A', text: "Spear Phishing / Vishing (Voice Phishing)" },
      { id: 'B', text: "Attacco di tipo Brute Force offline" },
      { id: 'C', text: "Defacement di siti web" },
      { id: 'D', text: "SQL Injection manuale" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo Spear Phishing (e la variante telefonica Vishing) è mirato e contestualizzato: l'attaccante usa informazioni reali sull'ente per ingannare il dipendente inducendolo a inserire credenziali su finti portali di login.",
    hint: "Phishing mirato (Spear Phishing) o telefonico (Vishing) per rubare credenziali aziendali.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_065',
    question: "Cosa si intende per 'Remote Wipe' nelle policy di sicurezza MDM dei dispositivi mobili aziendali?",
    options: [
      { id: 'A', text: "La cancellazione remota dei dati e il ripristino delle impostazioni di fabbrica del dispositivo avviata dall'amministratore via rete in caso di furto, smarrimento o dimissioni del dipendente" },
      { id: 'B', text: "La pulizia dello schermo con un panno in microfibra" },
      { id: 'C', text: "Il riavvio della linea Wi-Fi casalinga" },
      { id: 'D', text: "La disattivazione del microfono durante le videochiamate" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Remote Wipe protegge i dati aziendali dal rischio di accesso non autorizzato: appena il dispositivo rubato si connette a internet, riceve il comando di cancellazione sicura e formattazione crittografica.",
    hint: "Cancellazione da remoto dei dati aziendali da un dispositivo smarrito o rubato.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_066',
    question: "In termini di ergonomia e tutela della salute del lavoratore agile al videoterminale (D.Lgs. 81/2008), quale pausa obbligatoria è prevista per chi utilizza continuativamente lo schermo?",
    options: [
      { id: 'A', text: "Una pausa di 15 minuti ogni 120 minuti (due ore) di applicazione continuativa al videoterminale" },
      { id: 'B', text: "Una pausa di un'ora ogni mezz'ora di digitazione" },
      { id: 'C', text: "Nessuna pausa se il monitor è dotato di filtro per la luce blu" },
      { id: 'D', text: "Una pausa di 5 minuti solo a fine turno" }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 175 del D.Lgs. 81/2008 prescrive che il lavoratore addetto a videoterminali ha diritto a un'interruzione della sua attività mediante pause o cambiamento di attività per almeno 15 minuti ogni due ore di lavoro continuo.",
    hint: "15 minuti di pausa ogni due ore (120 minuti) di lavoro al videoterminale.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_067',
    question: "Nel protocollo di videoconferenza e streaming multimediale, cos'è il 'Jitter'?",
    options: [
      { id: 'A', text: "La variazione statistica nel tempo di ritardo di propagazione (delay) dei pacchetti tra mittente e destinatario, che causa scatti o distorsioni audio se non compensata da un buffer" },
      { id: 'B', text: "Il tremolio fisico della webcam sulla cornice del monitor" },
      { id: 'C', text: "La compressione automatica delle immagini in formato PNG" },
      { id: 'D', text: "La disconnessione periodica della stampante di rete" }
    ],
    correctAnswerId: 'A',
    explanation: "Il jitter misura l'irregolarità con cui arrivano i pacchetti UDP; i client VoIP utilizzano un 'Jitter Buffer' per riordinare e ritardare leggermente i pacchetti prima della riproduzione vocale.",
    hint: "Variazione temporale del ritardo di ricezione dei pacchetti che degrada l'audio/video.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_068',
    question: "Che cos'è 'WireGuard' nel panorama delle reti private virtuali (VPN)?",
    options: [
      { id: 'A', text: "Un protocollo di comunicazione VPN moderno, estremamente snello (meno di 4000 righe di codice nel kernel Linux) e veloce, basato su crittografia all'avanguardia (ChaCha20, Curve25519) come alternativa a OpenVPN e IPsec" },
      { id: 'B', text: "Un cavo in acciaio per legare il portatile alla scrivania" },
      { id: 'C', text: "Un programma per bloccare le notifiche di Facebook" },
      { id: 'D', text: "Una rete di satelliti geostazionari commerciali" }
    ],
    correctAnswerId: 'A',
    explanation: "WireGuard è integrato direttamente nel kernel Linux: è molto più performante e semplice da configurare rispetto a IPsec e OpenVPN, ideale per connessioni mobili e smart working.",
    hint: "Protocollo VPN moderno, ultra-veloce e leggero basato su crittografia moderna.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_069',
    question: "Cosa si intende per 'Shadow IT' nel contesto del lavoro da remoto?",
    options: [
      { id: 'A', text: "L'utilizzo da parte dei dipendenti di dispositivi, software cloud, app di messaggistica o servizi di file-sharing personali non autorizzati né controllati dal reparto IT dell'amministrazione" },
      { id: 'B', text: "L'uso del computer con la luce della stanza spenta" },
      { id: 'C', text: "Un attacco di hacker che cancella le ombre dalle immagini fotografiche" },
      { id: 'D', text: "L'installazione di condizionatori d'aria nei datacenter sotterranei" }
    ],
    correctAnswerId: 'A',
    explanation: "La Shadow IT (es. inviare documenti istituzionali tramite account Gmail privato o WhatsApp) espone la PA a gravi rischi di violazione del GDPR, data leak e perdita di controllo sulle informazioni.",
    hint: "Uso di app e servizi cloud personali non autorizzati dal reparto IT per compiti d'ufficio.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_070',
    question: "Quale codec audio ad alta efficienza è diventato lo standard de facto per la voce e la musica in WebRTC e nelle piattaforme di comunicazione unificata?",
    options: [
      { id: 'A', text: "Opus" },
      { id: 'B', text: "MP3" },
      { id: 'C', text: "G.711 solo a 64 kbps" },
      { id: 'D', text: "WAV non compresso" }
    ],
    correctAnswerId: 'A',
    explanation: "Il codec Opus (RFC 6716) offre flessibilità ineguagliata: adatta dinamicamente il bitrate da 6 kbps a 510 kbps, gestisce audio a banda stretta e larga con bassissima latenza ed è royalty-free.",
    hint: "Opus è il codec audio moderno e versatile di riferimento per WebRTC.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_071',
    question: "In termini di sicurezza delle identità digitali in smart working, che cosa sono i sistemi 'SSO' (Single Sign-On)?",
    options: [
      { id: 'A', text: "Meccanismi di controllo accessi che consentono a un utente di autenticarsi una sola volta con le proprie credenziali per accedere a molteplici applicazioni e servizi aziendali indipendenti (es. via SAML 2.0 o OIDC)" },
      { id: 'B', text: "Password composte da un solo carattere numerico" },
      { id: 'C', text: "La firma su un unico modulo cartaceo all'atto dell'assunzione" },
      { id: 'D', text: "L'obbligo di usare il computer per un solo compito al giorno" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Single Sign-On (basato su SAML o OpenID Connect) migliora l'esperienza utente ed elimina la proliferazione di password deboli, centralizzando l'autenticazione su un Identity Provider (es. SPID/CIE, Azure AD/Entra ID).",
    hint: "Un'unica autenticazione per accedere a tutte le applicazioni autorizzate.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_072',
    question: "Cos'è una 'Smart Card' con certificato digitale utilizzata dai funzionari pubblici per la firma e l'accesso remoto protetto?",
    options: [
      { id: 'A', text: "Un dispositivo hardware sicuro (token o carta a microprocessore) contenente la chiave privata crittografica non esportabile dell'utente, protetta da un codice PIN segreto" },
      { id: 'B', text: "Una carta fedeltà del supermercato" },
      { id: 'C', text: "Un biglietto da visita plastificato con codice QR" },
      { id: 'D', text: "Una scheda di memoria per registrare video in formato MP4" }
    ],
    correctAnswerId: 'A',
    explanation: "La smart card (come la CNS o la CIE) garantisce l'autenticazione a due fattori basata su certificati: il chip esegue le operazioni crittografiche a bordo senza mai rivelare la chiave privata alla memoria del computer.",
    hint: "Dispositivo crittografico sicuro (microchip protetto da PIN) con chiave privata non estraibile.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_073',
    question: "In merito alla sicurezza delle reti Wi-Fi domestiche utilizzate dai lavoratori in smart working, quale configurazione è FORTEMENTE sconsigliata?",
    options: [
      { id: 'A', text: "Mantenere la password predefinita di fabbrica dell'amministratore del router e utilizzare protocolli di cifratura obsoleti come WEP o WPA-TKIP" },
      { id: 'B', text: "Impostare una password complessa di almeno 16 caratteri con cifratura WPA2/WPA3-AES" },
      { id: 'C', text: "Aggiornare regolarmente il firmware del modem router" },
      { id: 'D', text: "Disattivare il protocollo WPS (Wi-Fi Protected Setup) vulnerabile a brute-force" }
    ],
    correctAnswerId: 'A',
    explanation: "Lasciare le credenziali di fabbrica o usare WEP (compromesso in pochi minuti da tool banali) espone il modem ad accessi abusivi e dirottamento DNS, mettendo a rischio la sicurezza del lavoratore.",
    hint: "Password di default e WEP/TKIP rappresentano gravissime vulnerabilità di sicurezza.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_074',
    question: "Che cos'è un 'TURN' (Traversal Using Relays around NAT) server nel funzionamento delle comunicazioni audio/video in smart working?",
    options: [
      { id: 'A', text: "Un server di inoltro (relay) che instrada l'intero flusso multimediale audio/video quando i firewall o i NAT simmetrici dei client impediscono categoricamente la connessione peer-to-peer diretta" },
      { id: 'B', text: "Un interruttore per spegnere le luci dell'ufficio a distanza" },
      { id: 'C', text: "Un generatore di corrente di riserva" },
      { id: 'D', text: "Un'applicazione per calcolare i rimborsi chilometrici" }
    ],
    correctAnswerId: 'A',
    explanation: "Mentre STUN aiuta solo a scoprire l'indirizzo pubblico, TURN fa da ponte (relay) consumando banda: se i due computer remoti non riescono a parlarsi direttamente per colpa di firewall rigidi, tutto il traffico passa dal server TURN.",
    hint: "Server di ponte/relay per inoltrare i flussi quando la connessione diretta è bloccata.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_075',
    question: "Nel protocollo di condivisione file cloud (es. OneDrive, Google Drive), cosa si intende per 'Selective Sync' (Sincronizzazione selettiva)?",
    options: [
      { id: 'A', text: "La possibilità per l'utente di scegliere quali specifiche cartelle o file del cloud scaricare e mantenere memorizzati sul disco locale del proprio PC, lasciando gli altri accessibili solo on-demand" },
      { id: 'B', text: "La sincronizzazione di file musicali solo durante il weekend" },
      { id: 'C', text: "L'eliminazione forzata dei file creati da altri utenti" },
      { id: 'D', text: "La stampa automatica dei file con estensione .pdf" }
    ],
    correctAnswerId: 'A',
    explanation: "La sincronizzazione selettiva (o file su richiesta / Files On-Demand) evita di saturare lo spazio disco locale dei laptop dei dipendenti, scaricando i file solo al momento dell'apertura effettiva.",
    hint: "Permette di scegliere quali cartelle scaricare in locale per non esaurire lo spazio disco.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_076',
    question: "Cosa stabilisce l'approccio di sicurezza 'CASB' (Cloud Access Security Broker)?",
    options: [
      { id: 'A', text: "Un punto di controllo della sicurezza interposto tra gli utenti remoti e le applicazioni cloud (SaaS/IaaS), che applica policy di conformità, rilevamento minacce, crittografia e prevenzione della perdita dei dati (DLP)" },
      { id: 'B', text: "Un connettore metallico per il fissaggio dei monitor alle pareti" },
      { id: 'C', text: "Un tipo di assicurazione sanitaria per i dipendenti statali" },
      { id: 'D', text: "Un protocollo di trasmissione audio analogico" }
    ],
    correctAnswerId: 'A',
    explanation: "I CASB monitorano l'uso del cloud aziendale: individuano la Shadow IT, bloccano il download di dati riservati su dispositivi personali non sicuri e verificano la conformità normativa (GDPR).",
    hint: "Piattaforma di sicurezza che controlla e protegge l'accesso ai servizi cloud aziendali.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_SW_077',
    question: "Quale applicazione o tecnologia viene impiegata dai sistemi operativi per isolare le applicazioni di lavoro aziendali dai dati personali su dispositivi mobili (Android Enterprise / Apple MDM)?",
    options: [
      { id: 'A', text: "Profilo di lavoro (Work Profile / Containerization applicativa)" },
      { id: 'B', text: "Cancellazione dell'intera memoria microSD" },
      { id: 'C', text: "Blocco permanente della fotocamera dello smartphone" },
      { id: 'D', text: "Disattivazione della connessione dati 4G/5G" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Work Profile separa a livello crittografico le app personali (WhatsApp, foto private) dalle app gestite dall'INPS (email aziendale, intranet): l'amministratore può controllare solo il container di lavoro senza invadere la privacy dell'utente.",
    hint: "Work Profile / Containerization per separare dati aziendali e personali sullo smartphone.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_078',
    question: "Cosa indica il parametro 'Packet Loss' (Perdita di pacchetti) durante una sessione di smart working in videoconferenza?",
    options: [
      { id: 'A', text: "La percentuale di pacchetti di dati trasmessi attraverso la rete che non riescono a raggiungere la destinazione a causa di congestione, attenuazione o problemi hardware, provocando audio a scatti o video congelato" },
      { id: 'B', text: "Il numero di lettere dell'alfabeto scritte in modo errato" },
      { id: 'C', text: "La perdita della chiave crittografica di avvio" },
      { id: 'D', text: "Lo smarrimento fisico del computer portatile" }
    ],
    correctAnswerId: 'A',
    explanation: "La perdita di pacchetti (packet loss) superiore all'1-2% degrada sensibilmente le chiamate real-time; i codec moderni tentano di compensare con tecniche di Packet Loss Concealment (PLC).",
    hint: "Percentuale di pacchetti persi in transito che causa interruzioni audio/video.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_079',
    question: "In una VPN aziendale, a cosa serve il protocollo di scambio chiavi 'IKEv2' (Internet Key Exchange v2)?",
    options: [
      { id: 'A', text: "A negoziare in modo sicuro le associazioni di sicurezza (SA) e scambiare le chiavi crittografiche per il tunnel IPsec, garantendo riconnessioni ultra-rapide e stabili quando il dispositivo mobile cambia rete (MOBIKE)" },
      { id: 'B', text: "A sincronizzare i file audio tra smartphone e autoradio" },
      { id: 'C', text: "A cancellare i file temporanei dal disco C:" },
      { id: 'D', text: "A stampare i turni di lavoro dei dipendenti su carta A4" }
    ],
    correctAnswerId: 'A',
    explanation: "IKEv2 è ideale per lo smart working su dispositivi portatili: supporta la specifica MOBIKE, permettendo al tunnel VPN di rimanere attivo senza disconnettersi quando l'utente passa dal Wi-Fi di casa alla rete cellulare 4G/5G.",
    hint: "Negozia le chiavi per IPsec e supporta la mobilità tra reti Wi-Fi e cellulari (MOBIKE).",
    level: "avanzato"
  },
  {
    id: 'Q_INF_SW_080',
    question: "Quale misura organizzativa e tecnica è fondamentale per prevenire il fenomeno dell'isolamento e del sovraccarico psicologico (technostress) nei dipendenti in lavoro agile?",
    options: [
      { id: 'A', text: "La definizione chiara di obiettivi misurabili di risultato (Project Management), fasce orarie di contatto certe, alternanza equilibrata tra lavoro in sede e da remoto e canali di comunicazione strutturati" },
      { id: 'B', text: "L'obbligo di tenere la telecamera accesa ininterrottamente per 8 ore al giorno" },
      { id: 'C', text: "L'installazione di software spia per registrare i movimenti del mouse del lavoratore" },
      { id: 'D', text: "L'annullamento delle ferie annuali per i lavoratori da remoto" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo smart working si fonda sul management per obiettivi e sull'autonomia organizzativa (L. 81/2017); il controllo invasivo a distanza è vietato dallo Statuto dei Lavoratori (art. 4 L. 300/1970) e genera stress psicofisico.",
    hint: "Gestione per obiettivi, fasce orarie chiare e alternanza tra sede e remoto.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_081',
    question: "Cosa si intende per 'DLP' (Data Loss Prevention) installato sulle postazioni di lavoro dei dipendenti pubblici?",
    options: [
      { id: 'A', text: "Una tecnologia che monitora e blocca tentativi non autorizzati di copiare, stampare o inviare all'esterno dati sensibili o confidenziali (es. impedendo la copia di codici fiscali o numeri di carta su chiavette USB o email personali)" },
      { id: 'B', text: "Un programma per pulire le cartucce delle stampanti laser" },
      { id: 'C', text: "Un protocollo di backup giornaliero su disco rigido esterno" },
      { id: 'D', text: "Uno strumento per contare i caratteri digitati sulla tastiera" }
    ],
    correctAnswerId: 'A',
    explanation: "Il DLP analizza i dati sia a riposo (at rest), sia in transito (in transit), sia in uso (in use sull'endpoint), bloccando esfiltrazioni accidentali o malevole di dati protetti da privacy.",
    hint: "Tecnologia di sicurezza per prevenire la fuga e l'esfiltrazione non autorizzata di dati.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_082',
    question: "Nelle videochiamate con Microsoft Teams o Zoom, quale funzionalità riduce il rischio di violazione della privacy domestica del lavoratore inquadrato dalla webcam?",
    options: [
      { id: 'A', text: "La sfocatura dello sfondo (Background Blur) o la sostituzione con un'immagine di sfondo virtuale predefinita o istituzionale" },
      { id: 'B', text: "L'aumento della luminosità dello schermo del 100%" },
      { id: 'C', text: "La registrazione automatica della riunione sul cloud pubblico" },
      { id: 'D', text: "L'invio delle immagini alla stazione di polizia locale" }
    ],
    correctAnswerId: 'A',
    explanation: "La sfocatura dello sfondo o l'uso di background virtuali evita che dettagli della propria abitazione, familiari o informazioni private siano visibili agli altri partecipanti alla conferenza.",
    hint: "Sfocatura o sostituzione virtuale dello sfondo per tutelare la riservatezza domestica.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_083',
    question: "Che cos'è un attacco di tipo 'Credential Stuffing' a cui sono particolarmente esposti i servizi web aziendali accessibili da remoto?",
    options: [
      { id: 'A', text: "Un attacco automatizzato che testa milioni di coppie di username e password rubate da precedenti violazioni (data breach) su altri siti, sfruttando la pessima abitudine degli utenti di riutilizzare la medesima password su più servizi" },
      { id: 'B', text: "Un virus che blocca la rotellina del mouse del computer" },
      { id: 'C', text: "Il furto fisico di foglietti post-it attaccati allo schermo" },
      { id: 'D', text: "La distruzione di cavi telefonici sottomarini" }
    ],
    correctAnswerId: 'A',
    explanation: "I bot automatizzati iniettano elenchi massivi di credenziali leakate: se un dipendente usa per la VPN aziendale la stessa password usata su un forum violato, l'account viene compromesso (si neutralizza con MFA obbligatoria).",
    hint: "Test automatizzato di credenziali rubate altrove per violare account che riusano la stessa password.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_084',
    question: "Cosa stabilisce lo standard di sicurezza 'FIDO2 / WebAuthn' per l'autenticazione remota?",
    options: [
      { id: 'A', text: "Consente un'autenticazione robusta e senza password (passwordless) basata su crittografia a chiave pubblica e chiavi fisiche hardware (es. YubiKey) o biometria locale (Windows Hello), totalmente immune agli attacchi di phishing convenzionali" },
      { id: 'B', text: "Un software per la scansione antivirus di cartelle condivise" },
      { id: 'C', text: "Una licenza d'uso commerciale per server web Apache" },
      { id: 'D', text: "Un metodo per convertire i numeri binari in ottali" }
    ],
    correctAnswerId: 'A',
    explanation: "FIDO2 lega la crittografia al dominio del sito: l'autenticazione avviene tramite chiave privata custodita nel dispositivo (token hardware o TPM); anche se l'utente digita su un sito di phishing, il browser non invierà mai la firma.",
    hint: "Standard moderno passwordless immune al phishing basato su chiavi hardware (YubiKey) o biometria.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_SW_085',
    question: "Quale protocollo di posta elettronica permette di mantenere le cartelle e i messaggi costantemente sincronizzati sul server aziendale e consultabili in modo coerente da smartphone, portatile e webmail?",
    options: [
      { id: 'A', text: "IMAP4 (Internet Message Access Protocol) / Exchange ActiveSync" },
      { id: 'B', text: "POP3 semplice" },
      { id: 'C', text: "SNMP" },
      { id: 'D', text: "TFTP" }
    ],
    correctAnswerId: 'A',
    explanation: "A differenza di POP3 (che di default scarica i messaggi in locale e li elimina dal server), IMAP mantiene la posta sul server: lo stato 'letto', le cartelle e le bozze sono sincronizzate in tempo reale su tutti i dispositivi.",
    hint: "IMAP mantiene la posta sincronizzata sul server tra tutti i dispositivi del dipendente.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_086',
    question: "Nel lavoro agile, cosa indica il termine 'Asynchronous Communication' (Comunicazione Asincrona)?",
    options: [
      { id: 'A', text: "La modalità di collaborazione in cui mittente e destinatario non interagiscono nello stesso istante, consentendo di leggere e rispondere ai messaggi o documenti nei tempi più opportuni (es. tramite email, ticket, wiki o task board)" },
      { id: 'B', text: "La trasmissione di file audio a velocità raddoppiata" },
      { id: 'C', text: "Una telefonata vocale in cui entrambi parlano contemporaneamente" },
      { id: 'D', text: "Una connessione internet che si disconnette ogni 10 minuti" }
    ],
    correctAnswerId: 'A',
    explanation: "La comunicazione asincrona riduce le interruzioni continue e favorisce la produttività profonda (deep work): i collaboratori non devono attendere risposte istantanee, a differenza di chiamate e videochiamate sincrone.",
    hint: "Comunicazione non istantanea (email, ticket) che rispetta i tempi di lavoro di ciascuno.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_087',
    question: "Qual è il rischio informatico associato all'utilizzo di reti Wi-Fi pubbliche aperte (es. in stazioni ferroviarie, hotel o bar) senza l'uso di una VPN?",
    options: [
      { id: 'A', text: "Il traffico di rete non cifrato può essere intercettato (sniffing) da malintenzionati sulla stessa rete, o gli utenti possono essere ingannati da access point malevoli civetta (Evil Twin Attack)" },
      { id: 'B', text: "La batteria dello smartphone si scarica istantaneamente" },
      { id: 'C', text: "Il monitor del computer portatile perde la calibrazione dei colori" },
      { id: 'D', text: "I tasti della tastiera invertono automaticamente le funzioni" }
    ],
    correctAnswerId: 'A',
    explanation: "Nelle reti aperte non c'è crittografia a livello radio: un attaccante con software di packet sniffing (es. Wireshark) può catturare pacchetti in chiaro o allestire un hotspot gemello malevolo per rubare dati.",
    hint: "Intercettazione dati (sniffing) ed hotspot contraffatti (Evil Twin) su Wi-Fi pubbliche non protette.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_088',
    question: "In ambiente Windows, quale strumento nativo consente di eseguire l'accesso sicuro a un'altra macchina desktop visualizzandone lo schermo e controllando mouse e tastiera?",
    options: [
      { id: 'A', text: "Connessione Desktop remoto (mstsc.exe)" },
      { id: 'B', text: "Blocco note (notepad.exe)" },
      { id: 'C', text: "Calcolatrice (calc.exe)" },
      { id: 'D', text: "Paint (mspaint.exe)" }
    ],
    correctAnswerId: 'A',
    explanation: "`mstsc.exe` (Microsoft Terminal Services Client) è il client nativo di Windows per avviare sessioni grafiche remote basate sul protocollo RDP.",
    hint: "Comando nativo di Windows: mstsc per Connessione Desktop Remoto.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_089',
    question: "Cosa si intende per 'Session Hijacking' (dirottamento di sessione) nel contesto del lavoro su applicazioni web aziendali?",
    options: [
      { id: 'A', text: "Un attacco in cui un malintenzionato sottrae l'identificativo di sessione valido (Session ID o Cookie di sessione) di un utente autenticato, potendo così impersonare la vittima sull'applicazione senza conoscere la password" },
      { id: 'B', text: "L'abbandono anticipato di una riunione su Microsoft Teams" },
      { id: 'C', text: "Il blocco della stampante di rete dovuto a carta inceppata" },
      { id: 'D', text: "Un errore di battitura nell'indirizzo URL del sito web" }
    ],
    correctAnswerId: 'A',
    explanation: "Se l'ID di sessione viene catturato (tramite XSS, packet sniffing o cookie rubati), l'attaccante può navigare l'applicazione con i privilegi della vittima. Si previene con HTTPS forzato, flag Secure, HttpOnly e SameSite nei cookie.",
    hint: "Furto del cookie o ID di sessione per impersonare l'utente autenticato.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_090',
    question: "In merito alla conservazione dei dati in smart working, dove devono essere tassativamente salvati i documenti e le pratiche lavorate dal funzionario pubblico?",
    options: [
      { id: 'A', text: "Sui repository documentali, cartelle di rete o piattaforme cloud ufficiali e protette dell'ente, e MAI sul desktop locale o su supporti non cifrati del dispositivo personale" },
      { id: 'B', text: "Esclusivamente su chiavette USB promozionali trovate nei convegni" },
      { id: 'C', text: "Su canali Telegram pubblici per facilitare l'accesso ai colleghi" },
      { id: 'D', text: "Su CD-ROM non riscrivibili da conservare a casa propria" }
    ],
    correctAnswerId: 'A',
    explanation: "I dati della PA devono risiedere esclusivamente nell'infrastruttura sicura dell'ente (sottoposta a backup regolari, disaster recovery e controlli di accesso GDPR); archiviarli in locale espone a perdita o violazione del dato.",
    hint: "I file devono risiedere sempre nei repository istituzionali dell'amministrazione.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_091',
    question: "Cos'è il 'Push-based MFA' (notifica push di autenticazione a due fattori su smartphone con Authenticator)?",
    options: [
      { id: 'A', text: "Un metodo in cui l'utente riceve una notifica istantanea sull'app Authenticator con richiesta di approvazione e spesso accoppiamento numerico (number matching), più sicuro dei codici SMS intercettabili via SIM Swapping" },
      { id: 'B', text: "Una spinta fisica per allontanare un intruso dal computer" },
      { id: 'C', text: "L'invio di lettere raccomandate per ogni accesso al sistema" },
      { id: 'D', text: "Una telefonata preregistrata effettuata dalla segreteria" }
    ],
    correctAnswerId: 'A',
    explanation: "Le notifiche push con number matching (es. Microsoft Authenticator) impediscono il 'MFA Fatigue' (spam di approvazioni) e proteggono contro l'intercettazione degli SMS (vulnerabili a SIM swap e SS7 exploit).",
    hint: "Notifica su app con abbinamento numerico per approvare l'accesso sicuro.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_092',
    question: "In una rete domestica per lo smart working, a cosa serve configurare la 'Rete Ospiti' (Guest Network) sul modem Wi-Fi?",
    options: [
      { id: 'A', text: "Isolare i dispositivi smart/IoT di casa (Smart TV, telecamere, elettrodomestici) e i visitatori dalla rete principale a cui è collegato il computer di lavoro, prevenendo che malware su dispositivi IoT compromettano il PC aziendale" },
      { id: 'B', text: "Raddoppiare la velocità della connessione in fibra ottica" },
      { id: 'C', text: "Consentire ai vicini di casa di navigare gratis a spese del dipendente" },
      { id: 'D', text: "Spegnere automaticamente il computer alle ore 18:00" }
    ],
    correctAnswerId: 'A',
    explanation: "Molti dispositivi IoT domestici hanno firmware vulnerabili: confinarli sulla rete Guest isola il computer di lavoro, evitando attacchi laterali da dispositivi domestici compromessi verso la rete aziendale.",
    hint: "Isola i dispositivi IoT domestici e gli ospiti per proteggere il computer di lavoro.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_093',
    question: "Cosa stabilisce il protocollo di sicurezza 'OpenVPN'?",
    options: [
      { id: 'A', text: "Un protocollo VPN open source basato sulla libreria OpenSSL, che opera sia su UDP sia su TCP (utilizzando crittografia robusta e certificati X.509) per stabilire tunnel sicuri site-to-site o client-to-server" },
      { id: 'B', text: "Una rete sociale aperta per la condivisione di video musicali" },
      { id: 'C', text: "Un formato aperto per documenti di testo" },
      { id: 'D', text: "Un comando per formattare i dischi rigidi in Linux" }
    ],
    correctAnswerId: 'A',
    explanation: "OpenVPN è uno dei protocolli VPN più flessibili e collaudati al mondo: può essere incapsulato su porta TCP 443 per bypassare firewall restrittivi o su UDP per massimizzare la velocità.",
    hint: "Protocollo VPN open source ampiamente supportato basato su OpenSSL e certificati.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_094',
    question: "Che cos'è il fenomeno del 'MFA Fatigue' (o MFA Prompt Bombing)?",
    options: [
      { id: 'A', text: "Una tecnica di attacco in cui un hacker che possiede già le credenziali della vittima bombarda il suo smartphone con continue notifiche di approvazione push MFA finché l'utente esasperato preme 'Approva'" },
      { id: 'B', text: "La stanchezza fisica dovuta alla digitazione di password complesse" },
      { id: 'C', text: "Un difetto della batteria dello smartphone che si gonfia" },
      { id: 'D', text: "Un errore di compilazione in linguaggio C++" }
    ],
    correctAnswerId: 'A',
    explanation: "Sfrutta la stanchezza o confusione psicologica dell'utente. Si contrasta implementando il 'Number Matching' (l'utente deve digitare sul telefono lo specifico numero mostrato a schermo) e policy di blocco tentativi.",
    hint: "Invio ossessivo di notifiche push di autenticazione per spingere l'utente a cliccare 'Approva'.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_095',
    question: "Quale strumento di Microsoft 365 / Office permette di organizzare compiti, assegnare attività ai collaboratori in bacheche visive stile Kanban e monitorare lo stato di avanzamento dei progetti in smart working?",
    options: [
      { id: 'A', text: "Microsoft Planner (o To Do)" },
      { id: 'B', text: "Microsoft Paint" },
      { id: 'C', text: "Blocco note" },
      { id: 'D', text: "Windows Media Player" }
    ],
    correctAnswerId: 'A',
    explanation: "Planner consente ai team di lavoro di creare bacheche con schede di attività, scadenze, etichette di priorità e grafici di avanzamento, integrandosi perfettamente all'interno di Microsoft Teams.",
    hint: "Strumento di project management visuale a schede Kanban integrato in Teams.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_096',
    question: "Cosa si intende per 'Watermarking' (marcatura visibile o invisibile) sui documenti visualizzati da remoto in smart working?",
    options: [
      { id: 'A', text: "L'apposizione automatica di un testo in sovrimpressione (es. nome del dipendente, data, ora e indirizzo IP) su schermate e documenti per scoraggiare e tracciare eventuali fotografie non autorizzate allo schermo o fughe di notizie" },
      { id: 'B', text: "La verifica che il computer sia impermeabile all'acqua" },
      { id: 'C', text: "La pulizia automatica dei cookie dal browser" },
      { id: 'D', text: "Un timbro digitale per la cancellazione definitiva dei file" }
    ],
    correctAnswerId: 'A',
    explanation: "Nei sistemi VDI enterprise o di consultazione fascicoli sensibili, il dynamic watermarking mostra in trasparenza l'identità di chi visualizza la pratica, disincentivando scatti fotografici con lo smartphone.",
    hint: "Sovrimpressione dell'identità dell'operatore per tracciare ed evitare fughe di documenti.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_097',
    question: "In caso di furto del computer portatile aziendale con cui si lavora da remoto, qual è la prima misura tempestiva che il dipendente deve compiere?",
    options: [
      { id: 'A', text: "Segnalare immediatamente l'accaduto al referente della sicurezza IT aziendale (CISO/CSIRT/Help Desk) e al Responsabile Protezione Dati (DPO) per avviare il blocco dell'account, il wipe da remoto e la notifica di Data Breach entro 72 ore, oltre a sporgere denuncia alle autorità di polizia" },
      { id: 'B', text: "Acquistare un computer identico al centro commerciale per sostituirlo senza dire nulla" },
      { id: 'C', text: "Attendere 30 giorni per verificare se il ladro restituisce la macchina" },
      { id: 'D', text: "Cambiare solo la password di Facebook dal proprio cellulare" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo smarrimento di un asset aziendale contenente dati personali è un potenziale Data Breach (art. 33 GDPR): la tempestività è vitale per revocare certificati, bloccare sessioni e notificare il Garante entro 72 ore.",
    hint: "Segnalazione immediata a IT e DPO per blocco/remote wipe e gestione Data Breach.",
    level: "base"
  },
  {
    id: 'Q_INF_SW_098',
    question: "Che cos'è una scheda di rete virtuale 'TAP' rispetto a una 'TUN' utilizzata dai client VPN?",
    options: [
      { id: 'A', text: "TAP simula un dispositivo di rete a livello 2 (Data Link - frame ethernet, supportando broadcast e bridging); TUN simula un dispositivo di rete a livello 3 (Network - pacchetti IP punto-a-punto)" },
      { id: 'B', text: "TAP funziona solo senza connessione a internet" },
      { id: 'C', text: "TUN serve solo per la trasmissione di musica in streaming" },
      { id: 'D', text: "Non esiste alcuna distinzione tecnica" }
    ],
    correctAnswerId: 'A',
    explanation: "TUN (network TUNnel) opera a livello IP puro (Layer 3), più veloce e adatto al routing; TAP (network TAP) simula una scheda ethernet completa (Layer 2), permettendo di trasportare traffico non-IP e broadcast.",
    hint: "TUN opera al livello 3 (pacchetti IP); TAP opera al livello 2 (frame Ethernet).",
    level: "avanzato"
  },
  {
    id: 'Q_INF_SW_099',
    question: "In termini di protezione dei dati sul cloud, qual è il significato del modello di 'Responsabilità Condivisa' (Shared Responsibility Model) tra cliente PA e Cloud Provider?",
    options: [
      { id: 'A', text: "Il provider cloud è responsabile della sicurezza 'DEL' cloud (infrastruttura fisica, datacenter, hypervisor, reti di base); la PA cliente è responsabile della sicurezza 'NEL' cloud (dati, gestione accessi e identità, configurazioni e aggiornamenti applicativi)" },
      { id: 'B', text: "Il cloud provider risponde penalmente di tutti gli errori commessi dai dipendenti pubblici" },
      { id: 'C', text: "La PA è esentata da qualsiasi obbligo di sicurezza informatica" },
      { id: 'D', text: "Tutte le spese di sicurezza vengono addebitate ai cittadini" }
    ],
    correctAnswerId: 'A',
    explanation: "Anche usando cloud qualificati da ACN, la PA non può disinteressarsi della sicurezza: configurare male i permessi, usare password deboli o non applicare cifratura ai dati ricade sotto la piena responsabilità della PA.",
    hint: "Provider responsabile della sicurezza 'del' cloud; cliente responsabile della sicurezza 'nel' cloud.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_SW_100',
    question: "Quale strumento software installato sugli endpoint aziendali raccoglie telemetria continua, rileva comportamenti anomali basati su intelligenza artificiale e consente l'isolamento automatico del PC in caso di infezione ransomware?",
    options: [
      { id: 'A', text: "EDR (Endpoint Detection and Response) / XDR" },
      { id: 'B', text: "Un semplice salvaschermo animato" },
      { id: 'C', text: "Un editor di fogli di calcolo" },
      { id: 'D', text: "Un lettore di file musicali MP3" }
    ],
    correctAnswerId: 'A',
    explanation: "Gli agenti EDR (es. Microsoft Defender for Endpoint, CrowdStrike) superano i vecchi antivirus a sole firme: monitorano processi e memorie, bloccano attacchi 'fileless' e isolano istantaneamente la macchina dalla rete per bloccare la diffusione di ransomware.",
    hint: "EDR monitora in tempo reale gli endpoint e risponde isolando la macchina infetta.",
    level: "intermedio"
  }
];

// Append to smart_working.json
const swPath = path.join(__dirname, '../public/db/master_bank/informatica/smart_working.json');
const swData = JSON.parse(fs.readFileSync(swPath, 'utf8'));
swData.push(...swQuestions);

const letters = ['A', 'B', 'C', 'D'];
swData.forEach((q, idx) => {
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

fs.writeFileSync(swPath, JSON.stringify(swData, null, 2), 'utf8');
const swCounts = { A: 0, B: 0, C: 0, D: 0 };
swData.forEach(q => swCounts[q.correctAnswerId]++);
console.log('Smart Working updated! Total:', swData.length, 'Counts:', swCounts);

// Now Backup Questions (Q_INF_BK_051 to 100)
const bkQuestions = [
  {
    id: 'Q_INF_BK_051',
    question: "Nel settore dell'archiviazione dati e sicurezza, cosa prescrive la celebre 'Regola del 3-2-1' per la gestione dei backup aziendali?",
    options: [
      { id: 'A', text: "Mantenere almeno 3 copie dei dati (quella di produzione più due backup), su almeno 2 supporti di memorizzazione differenti (es. disco e nastro/cloud), con almeno 1 copia conservata off-site (fuori sede o in cloud separato)" },
      { id: 'B', text: "Eseguire il backup solo 3 volte all'anno su 2 computer per 1 ora" },
      { id: 'C', text: "Richiedere la firma di 3 dirigenti su 2 moduli cartacei entro 1 giorno" },
      { id: 'D', text: "Salvare 3 file identici sulla stessa chiavetta USB" }
    ],
    correctAnswerId: 'A',
    explanation: "La regola aurea del backup 3-2-1 (oggi estesa a 3-2-1-1-0 con una copia immutabile/air-gapped e zero errori verificati) protegge da furti, incendi, guasti hardware contemporanei e attacchi ransomware.",
    hint: "3 copie, 2 supporti diversi, 1 copia remota (off-site).",
    level: "base"
  },
  {
    id: 'Q_INF_BK_052',
    question: "Qual è la differenza fondamentale tra un backup 'Incrementale' e un backup 'Differenziale'?",
    options: [
      { id: 'A', text: "Il backup incrementale salva solo i dati modificati rispetto all'ULTIMO backup eseguito (sia esso completo o incrementale); il backup differenziale salva tutti i dati modificati rispetto all'ultimo backup COMPLETO" },
      { id: 'B', text: "Il backup incrementale salva solo file musicali" },
      { id: 'C', text: "Il backup differenziale richiede il riavvio del computer" },
      { id: 'D', text: "Non vi è alcuna differenza, sono sinonimi" }
    ],
    correctAnswerId: 'A',
    explanation: "L'incrementale è più veloce e consuma meno spazio su disco, ma per il ripristino richiede il completo + tutti gli incrementali in sequenza. Il differenziale consuma più spazio progressivo, ma per il ripristino richiede solo il completo + l'ultimo differenziale.",
    hint: "Incrementale: modifiche dall'ultimo backup qualsiasi. Differenziale: modifiche dall'ultimo completo.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_053',
    question: "Nei piani di Disaster Recovery (DRP), che cosa misura il parametro 'RTO' (Recovery Time Objective)?",
    options: [
      { id: 'A', text: "Il tempo massimo tollerabile necessario per ripristinare il funzionamento e la piena operatività dei sistemi e dei servizi a seguito di un incidente o disastro" },
      { id: 'B', text: "La quantità di dati che si possono perdere espressa in ore" },
      { id: 'C', text: "Il costo orario dell'energia elettrica del datacenter" },
      { id: 'D', text: "La data di scadenza della garanzia dei server" }
    ],
    correctAnswerId: 'A',
    explanation: "RTO indica 'quanto tempo ci mettiamo a ripartire': è l'obiettivo temporale massimo entro cui il sistema deve tornare online dopo un blackout o un attacco informatico.",
    hint: "Recovery Time Objective = tempo massimo impiegabile per ripristinare il servizio.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_054',
    question: "Nei piani di Business Continuity, che cosa misura il parametro 'RPO' (Recovery Point Objective)?",
    options: [
      { id: 'A', text: "La quantità massima tollerabile di dati che un'organizzazione può permettersi di perdere in caso di disastro, misurata a ritroso nel tempo dall'istante dell'evento fino all'ultimo backup valido" },
      { id: 'B', text: "Il numero di tecnici necessari per montare un armadio rack" },
      { id: 'C', text: "Il prezzo di acquisto di una licenza software commerciale" },
      { id: 'D', text: "La distanza chilometrica tra due sedi aziendali" }
    ],
    correctAnswerId: 'A',
    explanation: "RPO indica 'quanti dati siamo disposti a perdere': se si fa backup una volta al giorno a mezzanotte e il disastro avviene alle 23:00, si rischia di perdere 23 ore di transazioni (RPO = 24h). Per sistemi finanziari o previdenziali l'RPO deve avvicinarsi a zero.",
    hint: "Recovery Point Objective = perdita massima tollerabile di dati espressa in tempo.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_055',
    question: "Cosa si intende per 'Backup Immutabile' (o storage WORM - Write Once, Read Many) come protezione contro il Ransomware?",
    options: [
      { id: 'A', text: "I dati del backup, una volta scritti, vengono bloccati a livello logico o hardware per un periodo prefissato (retention lock) e non possono essere modificati, crittografati o cancellati da nessuno, nemmeno da un account con privilegi di amministratore" },
      { id: 'B', text: "Un file di backup stampato su pergamena e chiuso in cassaforte" },
      { id: 'C', text: "Un backup che non può essere letto da alcun computer" },
      { id: 'D', text: "Un disco rigido montato al contrario nel case del computer" }
    ],
    correctAnswerId: 'A',
    explanation: "Dato che i ransomware moderni prendono di mira ed eliminano i backup prima di cifrare i server di produzione, l'immutabilità garantisce che le copie di backup non possano essere corrotte o distrutte da malware o credenziali rubate.",
    hint: "Write Once Read Many: dati protetti e impossibili da alterare o cancellare per N giorni.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_056',
    question: "Che cos'è la 'Deduplicazione' (Data Deduplication) nei sistemi di backup storage aziendali?",
    options: [
      { id: 'A', text: "Una tecnica intelligente che analizza i blocchi di dati, identifica ed elimina le copie ridondanti identiche, memorizzando una sola istanza del blocco e sostituendo i duplicati con puntatori, riducendo drasticamente lo spazio disco necessario" },
      { id: 'B', text: "La duplicazione di tutti i file su tre dischi per sicurezza" },
      { id: 'C', text: "La cancellazione automatica dei file con nomi che iniziano per la stessa lettera" },
      { id: 'D', text: "L'eliminazione delle email non lette da più di un anno" }
    ],
    correctAnswerId: 'A',
    explanation: "Nei backup periodici di migliaia di VM o PC con lo stesso sistema operativo (es. Windows 11), il 90% dei blocchi è identico: la deduplicazione a livello di blocco fa risparmiare fino all'80-95% dello spazio di storage.",
    hint: "Eliminazione delle ridondanze a livello di blocco per risparmiare fino al 90% di spazio.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_057',
    question: "Qual è la differenza tra un backup 'Crash-Consistent' e un backup 'Application-Consistent'?",
    options: [
      { id: 'A', text: "Il backup crash-consistent cattura lo stato dei dati come apparirebbero dopo un arresto improvviso di corrente; il backup application-consistent si interfaccia con le applicazioni e database (es. tramite VSS) per svuotare i buffer di memoria su disco prima dello snapshot, garantendo zero corruzioni" },
      { id: 'B', text: "Il backup application-consistent salva solo le icone del desktop" },
      { id: 'C', text: "Il backup crash-consistent elimina il sistema operativo" },
      { id: 'D', text: "Non esiste alcuna differenza per i database relazionali" }
    ],
    correctAnswerId: 'A',
    explanation: "Per database transazionali (Oracle, SQL Server, Active Directory), un backup application-consistent usa i VSS Writer per coordinare la memoria e i log, garantendo che al ripristino il DB si avvii senza errori transazionali.",
    hint: "Application-consistent garantisce coerenza svuotando cache e transazioni in memoria prima del backup.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_058',
    question: "In termini di architettura di Disaster Recovery per datacenter, che cos'è un 'Sito Caldo' (Hot Site)?",
    options: [
      { id: 'A', text: "Un datacenter secondario geograficamente separato, completamente equipaggiato con hardware, connettività e dati replicati in tempo reale (o quasi reale), pronto a subentrare istantaneamente nel carico di lavoro con RTO e RPO minimi" },
      { id: 'B', text: "Una stanza server con temperatura superiore a 40 gradi Celsius" },
      { id: 'C', text: "Un sito web con molti visitatori contemporanei" },
      { id: 'D', text: "Una centrale termoelettrica che alimenta i computer" }
    ],
    correctAnswerId: 'A',
    explanation: "L'Hot Site è costoso ma garantisce failover immediato; a differenza del Cold Site (locale vuoto privo di hardware acceso) e del Warm Site (hardware presente ma dati da ripristinare dai backup).",
    hint: "Datacenter secondario attivo e sincronizzato pronto per il failover istantaneo.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_059',
    question: "Cosa si intende per copia di backup 'Air-Gapped' (o Air Gap)?",
    options: [
      { id: 'A', text: "Una copia di backup fisicamente o logicamente isolata e disconnessa da qualsiasi rete, internet o infrastruttura locale (es. nastri magnetici custoditi in un caveau o dischi offline), inaccessibile via software a qualsiasi cyber-attaccante" },
      { id: 'B', text: "Un backup trasmesso via onde radio FM" },
      { id: 'C', text: "La ventilazione forzata dei dischi rigidi meccanici" },
      { id: 'D', text: "Un backup conservato all'interno di un aereo di linea" }
    ],
    correctAnswerId: 'A',
    explanation: "L'Air Gap crea una barriera invalicabile: non essendoci connessione fisica o logica via cavo o wireless tra il sistema di produzione e il supporto di backup disconnesso, nessun hacker o ransomware può raggiungerlo e cancellarlo.",
    hint: "Isolamento fisico totale dalla rete: se non è collegato, non può essere hackerato.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_060',
    question: "Quale tecnologia di storage su nastro magnetico a cartuccia aperta (Linear Tape-Open) è ampiamente utilizzata nei grandi datacenter pubblici per l'archiviazione a lungo termine a costi contenuti e durata trentennale?",
    options: [
      { id: 'A', text: "Nastri LTO (Linear Tape-Open, es. LTO-8 / LTO-9)" },
      { id: 'B', text: "Cassette audio a nastro magnetico da 60 minuti" },
      { id: 'C', text: "Floppy disk magnetici da 5,25 pollici" },
      { id: 'D', text: "Schede microSD classe 4" }
    ],
    correctAnswerId: 'A',
    explanation: "La tecnologia LTO-Ultrium (supportata da consorzi IBM, HPE, Quantum) offre fino a decine di Terabyte compressi per singola cartuccia, non consuma energia quando riposta negli scaffali, dura oltre 30 anni e fornisce un air-gap naturale.",
    hint: "Standard LTO (Linear Tape-Open) per archiviazione e conservazione a lungo termine.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_061',
    question: "Cosa si intende per 'Backup Sintetico Completo' (Synthetic Full Backup)?",
    options: [
      { id: 'A', text: "Un backup completo generato direttamente sul server di backup assemblando l'ultimo backup completo precedente insieme a tutti i backup incrementali successivi, senza sovraccaricare la rete e il server di produzione" },
      { id: 'B', text: "Un backup creato artificialmente con un modello linguistico di IA" },
      { id: 'C', text: "Un file compresso vuoto utilizzato solo per test di velocità" },
      { id: 'D', text: "La stampa dei metadati di un file su foglio di carta sintetico" }
    ],
    correctAnswerId: 'A',
    explanation: "Il backup sintetico ricompone un nuovo punto di ripristino 'full' operando unicamente all'interno dello storage di backup (leggendo i blocchi incrementali già presenti), eliminando l'onere di trasmettere decine di terabyte di dati dal server di produzione.",
    hint: "Crea un nuovo full backup combinando i dati già presenti nello storage di backup senza pesare sulla rete.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_BK_062',
    question: "In cosa consiste il test periodico di 'Ripristino' (Restore Drill / Recovery Testing) in una strategia aziendale di backup?",
    options: [
      { id: 'A', text: "La procedura operativa periodica che verifica l'effettiva capacità di ripristinare con successo i dati dai backup su ambienti di test e che i dati siano realmente integri, leggibili e coerenti con le applicazioni nei tempi RTO/RPO previsti" },
      { id: 'B', text: "Il conteggio visivo delle cartucce di nastro presenti negli armadi" },
      { id: 'C', text: "L'eliminazione dei backup più vecchi di un anno per fare pulizia" },
      { id: 'D', text: "L'invio di un questionario di gradimento ai cittadini utenti" }
    ],
    correctAnswerId: 'A',
    explanation: "Un backup di cui non è mai stato testato il ripristino è un backup inaffidabile. Solo simulando il restore effettivo si scoprono supporti corrotti, password di decifratura smarrite o incompatibilità di sistema operativo.",
    hint: "Verifica pratica che i dati salvati possano essere effettivamente e tempestivamente ripristinati.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_063',
    question: "Cosa stabilisce lo standard 'CBT' (Changed Block Tracking) nei backup moderni delle macchine virtuali (VMware vSphere / Hyper-V)?",
    options: [
      { id: 'A', text: "Traccia a livello di hypervisor solo i blocchi del disco virtuale (VMDK/VHDX) che sono effettivamente cambiati dall'ultimo snapshot, consentendo al software di backup di leggere e salvare solo quei blocchi specifici anziché scansionare l'intero disco" },
      { id: 'B', text: "Un programma per la gestione dei turni del personale di segreteria" },
      { id: 'C', text: "Un protocollo di crittografia per le connessioni Wi-Fi protette" },
      { id: 'D', text: "Un sistema di numerazione per le prese elettriche dell'ufficio" }
    ],
    correctAnswerId: 'A',
    explanation: "CBT riduce i tempi di backup incrementale delle VM da ore a pochi secondi o minuti, poiché l'hypervisor sa già quali settori sono stati modificati senza dover scansionare terabyte di file.",
    hint: "Changed Block Tracking: identifica solo i blocchi modificati per velocizzare i backup delle VM.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_064',
    question: "Che cos'è la 'Continuous Data Protection' (CDP - Protezione continua dei dati)?",
    options: [
      { id: 'A', text: "Una tecnologia di replica e memorizzazione continua che registra e memorizza istantaneamente ogni singola operazione di scrittura su disco (o a intervalli di secondi), consentendo di ripristinare il sistema a qualsiasi punto esatto nel tempo (Point-In-Time Recovery)" },
      { id: 'B', text: "Un antivirus che scansiona la memoria RAM 24 ore su 24" },
      { id: 'C', text: "L'alimentazione a batteria ininterrotta del server rack" },
      { id: 'D', text: "La registrazione video delle postazioni di lavoro dei dipendenti" }
    ],
    correctAnswerId: 'A',
    explanation: "A differenza dei backup tradizionali pianificati ad orari fissi (es. ogni notte), la CDP cattura ogni scrittura attraverso journal continui: l'RPO si riduce a zero o a pochi secondi prima dell'incidente.",
    hint: "Salvataggio continuo di ogni scrittura per consentire il ripristino a qualsiasi secondo del passato.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_065',
    question: "In termini di replica di database e storage, qual è la differenza tra replica 'Sincrona' e replica 'Asincrona' verso il sito di Disaster Recovery?",
    options: [
      { id: 'A', text: "La replica sincrona conferma la scrittura solo dopo che il dato è stato salvato sia sul sito primario sia su quello secondario (RPO=0, ma richiede distanze brevi e bassissima latenza); l'asincrona conferma subito sul primario e invia i dati dopo (permette lunghe distanze con minimo disallineamento temporale)" },
      { id: 'B', text: "La replica asincrona cancella i dati ogni 60 minuti per sicurezza" },
      { id: 'C', text: "La replica sincrona può funzionare solo via cavo seriale RS-232" },
      { id: 'D', text: "Non vi è alcuna differenza architetturale o di tolleranza alla latenza" }
    ],
    correctAnswerId: 'A',
    explanation: "La replica sincrona elimina la perdita di dati (RPO zero) ma è limitata fisicamente dalla velocità della luce nella fibra (massimo qualche decina di km per non rallentare l'I/O). Oltre certe distanze metropolitane si usa obbligatoriamente la replica asincrona.",
    hint: "Sincrona: attende conferma da entrambi i siti (RPO=0, distanze brevi). Asincrona: per lunghe distanze.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_066',
    question: "Cosa si intende per 'Snapshot' di un volume storage o di una macchina virtuale rispetto a un vero 'Backup'?",
    options: [
      { id: 'A', text: "Lo snapshot è un'immagine istantanea dello stato dei puntatori e dei blocchi disco memorizzata sullo stesso storage di produzione (dipendente dal disco originale); il backup è una copia indipendente e disaccoppiata salvata su un supporto o sistema separato" },
      { id: 'B', text: "Lo snapshot cancella tutti i file modificati nell'ultima settimana" },
      { id: 'C', text: "Uno snapshot non può mai essere ripristinato" },
      { id: 'D', text: "Snapshot e backup sono sinonimi perfettamente identici sotto ogni profilo" }
    ],
    correctAnswerId: 'A',
    explanation: "Uno snapshot NON è un backup: se si guasta lo storage sottostante, sia i dati di produzione sia lo snapshot vanno irrimediabilmente persi. Lo snapshot è solo un punto di ripristino rapido temporaneo (es. prima di un aggiornamento).",
    hint: "Lo snapshot risiede sullo stesso storage ed è dipendente dall'originale; il backup è una copia isolata e indipendente.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_067',
    question: "Quale software open source multipiattaforma è ampiamente utilizzato nei sistemi Linux per la sincronizzazione unidirezionale efficiente e il backup incrementale di file tramite riga di comando?",
    options: [
      { id: 'A', text: "rsync" },
      { id: 'B', text: "wget" },
      { id: 'C', text: "curl" },
      { id: 'D', text: "ping" }
    ],
    correctAnswerId: 'A',
    explanation: "`rsync` (Remote Sync) implementa un algoritmo delta che trasmette solo le differenze tra i file sorgente e destinazione, minimizzando la banda consumata su canali SSH sicuri.",
    hint: "rsync sincronizza file e directory trasferendo solo le parti modificate.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_068',
    question: "Cosa si intende per 'Bare-Metal Restore' (BMR) nel ripristino di emergenza di un server?",
    options: [
      { id: 'A', text: "Il ripristino completo del sistema operativo, dei driver, delle configurazioni, delle applicazioni e dei dati direttamente su un hardware vergine (metallo nudo) o privo di qualsiasi installazione preventiva" },
      { id: 'B', text: "La verniciatura delle parti metalliche della carcassa del server" },
      { id: 'C', text: "La sostituzione del metallo dei connettori con plastica riciclata" },
      { id: 'D', text: "La formattazione manuale di un floppy disk da 1,44 MB" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Bare-Metal Restore consente di ricostruire un server da zero a partire da una ISO avviabile (WinPE o Linux live) e dall'immagine di backup, senza dover installare prima manualmente Windows o Linux.",
    hint: "Ripristino totale su hardware nuovo o vergine (metallo nudo) senza pre-installazioni.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_069',
    question: "Nel contesto dei backup dei database SQL (es. Microsoft SQL Server, PostgreSQL, MySQL), a cosa serve il backup dei 'Transaction Log' (o Write-Ahead Log - WAL)?",
    options: [
      { id: 'A', text: "A registrare tutte le transazioni eseguite tra un backup e l'altro, permettendo di ripristinare il database a uno specifico minuto o secondo esatto (Point-In-Time Recovery) e di troncare i file di log per evitarne la saturazione" },
      { id: 'B', text: "A stampare l'elenco delle password degli utenti" },
      { id: 'C', text: "A cancellare automaticamente le tabelle vuote" },
      { id: 'D', text: "A convertire i numeri decimali in numeri romani" }
    ],
    correctAnswerId: 'A',
    explanation: "Il backup della catena dei log di transazione (Transaction Log) consente di ripristinare il database allo stato esatto immediatamente precedente a un errore umano o crash (es. 'ore 14:27:03'), minimizzando l'RPO.",
    hint: "Permette il ripristino a un punto esatto nel tempo (Point-In-Time Recovery).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_070',
    question: "Quale tipologia di supporto per l'archiviazione di backup cloud (es. Amazon S3 Glacier Flexible Deep Archive o Azure Blob Archive) offre costi bassissimi per Terabyte a fronte di tempi di recupero (retrieval time) di alcune ore?",
    options: [
      { id: 'A', text: "Archival Storage / Cold Tier" },
      { id: 'B', text: "Hot Tier ad accesso istantaneo" },
      { id: 'C', text: "Memoria RAM distribuita NVMe" },
      { id: 'D', text: "Cache L3 condivisa" }
    ],
    correctAnswerId: 'A',
    explanation: "I livelli di archiviazione 'Cold' o 'Archive' sono progettati per dati storici o di conformità legale (compliance) a cui si accede raramente: costano pochissimi centesimi al GB ma richiedono ore per de-congelare i dati.",
    hint: "Cold / Archive Storage per conservazione a lungo termine a costi minimi.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_071',
    question: "Cosa stabilisce la metrica 'MTBF' (Mean Time Between Failures) nell'affidabilità dei componenti di memorizzazione?",
    options: [
      { id: 'A', text: "Il tempo medio stimato di corretto funzionamento tra due guasti successivi di un componente riparabile" },
      { id: 'B', text: "Il costo orario dell'abbonamento alla linea internet" },
      { id: 'C', text: "Il numero massimo di utenti connessi simultaneamente" },
      { id: 'D', text: "La dimensione in millimetri della ventola di raffreddamento" }
    ],
    correctAnswerId: 'A',
    explanation: "MTBF è una stima statistica dell'affidabilità hardware: dischi per server enterprise vantano tipicamente MTBF di 1,5-2,5 milioni di ore di funzionamento.",
    hint: "Mean Time Between Failures: tempo medio di funzionamento tra un guasto e l'altro.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_072',
    question: "Che cosa si intende per 'BIA' (Business Impact Analysis) nella pianificazione della continuità operativa di una PA?",
    options: [
      { id: 'A', text: "Il processo sistematico di analisi che valuta gli impatti finanziari, legali, operativi e reputazionali causati dall'interruzione dei diversi processi aziendali/istituzionali, identificando i servizi critici e i rispettivi requisiti di RTO ed RPO" },
      { id: 'B', text: "La stima dell'impatto ambientale dei gas di scarico delle autovetture" },
      { id: 'C', text: "Un software per la fatturazione elettronica dei fornitori" },
      { id: 'D', text: "La graduatoria dei vincitori del concorso pubblico" }
    ],
    correctAnswerId: 'A',
    explanation: "La BIA (Business Impact Analysis) è la fase preliminare e fondamentale del Disaster Recovery: classifica i servizi (es. pagamento pensioni = critico, portale formazione = differibile) stabilendo le priorità di ripristino.",
    hint: "Analisi di impatto sui processi aziendali per definire priorità, RTO e RPO.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_073',
    question: "In cosa consiste la tecnica di backup 'Copy-on-Write' (CoW) utilizzata da moderni filesystem come ZFS o Btrfs?",
    options: [
      { id: 'A', text: "Quando un blocco di dati viene modificato, il filesystem non sovrascrive il blocco originale ma scrive i nuovi dati in una locazione libera e aggiorna i puntatori, consentendo la creazione di snapshot istantanei a costo zero di spazio iniziale" },
      { id: 'B', text: "Copia automaticamente tutti i file su un floppy disk ogni volta che si preme un tasto" },
      { id: 'C', text: "Stampa una copia cartacea di ogni documento salvato" },
      { id: 'D', text: "Elimina i file duplicati senza chiedere conferma" }
    ],
    correctAnswerId: 'A',
    explanation: "Copy-on-Write mantiene intatto il vecchio blocco finché c'è uno snapshot che vi fa riferimento: gli snapshot sono immediati perché copiano solo puntatori a metadati, consumando spazio solo man mano che i dati cambiano.",
    hint: "Scrittura su nuovi blocchi senza sovrascrivere l'originale, consentendo snapshot istantanei.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_BK_074',
    question: "Quale strumento nativo da riga di comando in Windows consente di creare copie di sicurezza speculari di cartelle e file preservando permessi NTFS, timestamp e attributi (con opzioni di mirroring /MIR)?",
    options: [
      { id: 'A', text: "Robocopy (Robust File Copy)" },
      { id: 'B', text: "copy" },
      { id: 'C', text: "move" },
      { id: 'D', text: "del" }
    ],
    correctAnswerId: 'A',
    explanation: "`robocopy` è l'utilità avanzata di Windows per la replica di directory: supporta mirroring (`/MIR`), ripresa in caso di interruzione di rete (`/Z`), conservazione di permessi ACL (`/SEC` o `/COPYALL`) e multithreading (`/MT`).",
    hint: "Robocopy (Robust File Copy) per il mirroring robusto di directory in Windows.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_075',
    question: "Cosa si intende per 'Silent Data Corruption' (o Bit Rot) nell'archiviazione dati a lungo termine?",
    options: [
      { id: 'A', text: "Il deterioramento impercettibile e progressivo dei bit memorizzati su supporti magnetici o flash dovuto a usura, decadimento di carica o radiazioni, che rende i file illeggibili o corrotti senza che il sistema operativo segnali alcun errore hardware" },
      { id: 'B', text: "La rottura della ventola dell'alimentatore senza emissione di rumore" },
      { id: 'C', text: "La perdita della password di accesso da parte dell'utente" },
      { id: 'D', text: "La cancellazione programmata dei cookie ogni 30 giorni" }
    ],
    correctAnswerId: 'A',
    explanation: "Il bit rot si verifica silenziosamente: i filesystem tradizionali non se ne accorgono finché non si tenta di aprire il file corrotto. Filesystem avanzati come ZFS o ReFS integrano checksum a livello di blocco e scrub periodici per ripararlo.",
    hint: "Degrado silenzioso dei dati sui supporti nel tempo senza errori hardware apparenti.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_076',
    question: "Quale livello di crittografia è raccomandato per proteggere i dati di backup sia 'a riposo' (at rest sullo storage) sia 'in transito' (in transit sulla rete)?",
    options: [
      { id: 'A', text: "Crittografia AES a 256 bit (AES-256) per i dati a riposo e protocolli TLS 1.3 / IPsec per i dati in transito" },
      { id: 'B', text: "Cifrario di Cesare con spostamento di 3 lettere" },
      { id: 'C', text: "Nessuna crittografia per rendere il backup più veloce" },
      { id: 'D', text: "Crittografia DES a 56 bit" }
    ],
    correctAnswerId: 'A',
    explanation: "La cifratura AES-256 è lo standard industriale per la protezione dei backup: impedisce a chiunque sottragga fisicamente i dischi o le cartucce nastro di decifrare i dati senza la chiave crittografica master.",
    hint: "AES-256 per l'archiviazione e TLS 1.3/IPsec per il transito.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_077',
    question: "In termini di pianificazione del Disaster Recovery, che cos'è un 'Cold Site' (Sito Freddo)?",
    options: [
      { id: 'A', text: "Uno spazio fisico alternativo predisposto con alimentazione elettrica, condizionamento e connettività di rete, ma privo di apparati server accesi e dati precaricati, che richiede giorni o settimane per diventare operativo" },
      { id: 'B', text: "Un datacenter situato all'interno di una cella frigorifera industriale" },
      { id: 'C', text: "Un computer portatile spento e conservato in un armadio blindato" },
      { id: 'D', text: "Un server che non riceve email da oltre sei mesi" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Cold Site è la soluzione più economica ma con i tempi di recupero (RTO) più lunghi: prima di ripartire occorre approvvigionare l'hardware, installare i sistemi operativi e ripristinare i dati dai nastri/backup.",
    hint: "Sito secondario con locali ed energia predisposti ma senza hardware o dati attivi (RTO lungo).",
    level: "base"
  },
  {
    id: 'Q_INF_BK_078',
    question: "Cosa stabilisce il protocollo di storage di rete 'iSCSI' (Internet Small Computer System Interface)?",
    options: [
      { id: 'A', text: "Consente il trasporto di comandi SCSI a livello di blocco (Block Storage) su reti IP/Ethernet standard mediante porte TCP (porta 3260), permettendo a server di collegarsi a SAN (Storage Area Network) senza costosi switch Fibre Channel" },
      { id: 'B', text: "Un'interfaccia per collegare scanner cartacei ad alta velocità" },
      { id: 'C', text: "Un protocollo di condivisione di video in streaming" },
      { id: 'D', text: "Una licenza per database relazionali open source" }
    ],
    correctAnswerId: 'A',
    explanation: "iSCSI connette iniziatori (server) e target (storage array) su normale cavo di rete ethernet: il sistema operativo vede il disco remoto come se fosse un disco locale collegato direttamente al bus della macchina.",
    hint: "Storage a blocchi (SAN) trasportato su reti IP/Ethernet standard (porta TCP 3260).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_079',
    question: "Qual è il compito del 'Catalog' (o Catalogo/Database di metadati) in un software di backup aziendale (es. Veeam, Bacula, Commvault)?",
    options: [
      { id: 'A', text: "Memorizzare l'indice dettagliato di tutti i backup eseguiti, le date, le versioni dei file, le cartucce/supporti su cui risiedono e i blocchi di deduplicazione, consentendo di ricercare e ripristinare rapidamente singoli file o intere macchine" },
      { id: 'B', text: "Mostrare il catalogo dei prodotti hardware in vendita sui siti di e-commerce" },
      { id: 'C', text: "Elencare le email inviate dai dipendenti durante la giornata lavorativa" },
      { id: 'D', text: "Conservare le foto del personale scattate per il tesserino aziendale" }
    ],
    correctAnswerId: 'A',
    explanation: "Senza il catalogo di metadati, trovare un file perso richiederebbe di scansionare manualmente decine di nastri o dischi: il catalogo sa esattamente su quale supporto e in quale punto risiede ciascuna versione del file.",
    hint: "Indice centrale che traccia la posizione e le versioni di tutti i file archiviati nei backup.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_080',
    question: "Nel contesto dei filesystem avanzati per backup (come ZFS), che cos'è lo 'Scrubbing' dei dati?",
    options: [
      { id: 'A', text: "Un'operazione periodica in background che legge tutti i blocchi del pool, ne verifica l'integrità confrontando il dato con il relativo checksum crittografico e, se rileva un errore o bit rot, lo ripara automaticamente usando le copie di parità o mirror" },
      { id: 'B', text: "La pulizia della polvere dai connettori SAS con un getto d'aria compressa" },
      { id: 'C', text: "La cancellazione forzata di tutti i file dei dipendenti licenziati" },
      { id: 'D', text: "La scansione per verificare che non vi siano canzoni MP3 sul disco" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo scrub di ZFS garantisce l'auto-riparazione (self-healing): scova corruzioni silenti sui dischi prima che si verifichi la rottura di un secondo disco nel pool RAID, riparando il blocco al volo.",
    hint: "Controllo periodico dei checksum con riparazione automatica dei blocchi corrotti.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_BK_081',
    question: "In caso di ripristino da un attacco Ransomware, quale precauzione è FONDAMENTALE prima di collegare i sistemi ripristinati alla rete di produzione?",
    options: [
      { id: 'A', text: "Isolare i sistemi ripristinati in una Sandbox/VLAN di quarantena, eseguire scansioni forensi approfondite, individuare e patchare la falla d'ingresso iniziale e verificare che i backup ripristinati non contengano backdoor o malware dormiente" },
      { id: 'B', text: "Ricollegare immediatamente tutti i computer per riprendere il lavoro" },
      { id: 'C', text: "Spegnere il firewall aziendale per velocizzare i download" },
      { id: 'D', text: "Pagare il riscatto richiesto dai criminali informatici senza fare verifiche" }
    ],
    correctAnswerId: 'A',
    explanation: "Se si ripristinano i server senza isolarli e senza aver chiuso la vulnerabilità di accesso iniziale (o se il ransomware era già presente latente nel backup), l'attaccante rieseguirà la cifratura in pochi minuti.",
    hint: "Ripristino in ambiente isolato di quarantena per verificare l'assenza di malware prima della riconnessione.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_082',
    question: "Cosa si intende per 'Live Migration' (o vMotion in ambiente VMware) delle macchine virtuali?",
    options: [
      { id: 'A', text: "Lo spostamento di una macchina virtuale attiva da un host fisico a un altro senza alcuna interruzione percepibile del servizio o perdita di sessione per gli utenti connessi" },
      { id: 'B', text: "L'esodo del personale dell'ufficio verso un'altra sede provinciale" },
      { id: 'C', text: "La migrazione automatica di file musicali su un lettore portatile" },
      { id: 'D', text: "Lo spegnimento programmato del server durante le ore notturne" }
    ],
    correctAnswerId: 'A',
    explanation: "La Live Migration copia la RAM della VM via rete mentre è accesa, trasferendo l'esecuzione istantaneamente con un freeze di pochi millisecondi, consentendo la manutenzione hardware senza downtime.",
    hint: "Spostamento a caldo di una macchina virtuale tra server fisici con zero interruzioni di servizio.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_083',
    question: "Che cos'è la politica di conservazione dei backup 'GFS' (Grandfather-Father-Son)?",
    options: [
      { id: 'A', text: "Uno schema gerarchico di rotazione dei backup basato su copie Giornaliere (Son - figli, conservati per giorni/settimane), Settimanali/Mensili (Father - padri, conservati per mesi) e Annuali (Grandfather - nonni, conservati per anni per conformità normativa)" },
      { id: 'B', text: "Un albero genealogico dei fondatori dell'istituto di previdenza" },
      { id: 'C', text: "Un algoritmo di compressione basato sulla data di nascita dell'utente" },
      { id: 'D', text: "Una sequenza di tasti di scelta rapida sulla tastiera" }
    ],
    correctAnswerId: 'A',
    explanation: "Il metodo GFS ottimizza l'uso dello storage e garantisce il rispetto degli obblighi di conservazione legale (compliance), mantenendo molti punti di ripristino recenti e una cadenza più rada nel passato.",
    hint: "Rotazione gerarchica dei backup: giornalieri (Son), mensili (Father), annuali (Grandfather).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_084',
    question: "Cosa stabilisce la metrica 'MTTR' (Mean Time To Repair) nella gestione degli incidenti sistemistici?",
    options: [
      { id: 'A', text: "Il tempo medio necessario per riparare o ripristinare un componente guasto o un sistema interrotto a partire dal momento in cui si verifica il disservizio" },
      { id: 'B', text: "Il costo medio della sostituzione della cartuccia del toner" },
      { id: 'C', text: "Il tempo di garanzia fornito dal produttore dello schermo" },
      { id: 'D', text: "Il numero massimo di riavvii consentiti in un mese" }
    ],
    correctAnswerId: 'A',
    explanation: "MTTR misura la rapidità di intervento del team IT: include diagnosi, reperimento ricambi, ripristino backup e collaudo finale del servizio.",
    hint: "Mean Time To Repair = tempo medio necessario per riparare e ripristinare il sistema guasto.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_085',
    question: "In una SAN (Storage Area Network) basata su protocollo Fibre Channel, a cosa serve la tecnica di 'Zoning' sugli switch SAN?",
    options: [
      { id: 'A', text: "A suddividere la SAN in partizioni logiche isolate, limitando la visibilità e la comunicazione solo tra specifici server (iniziatori) e specifici controller di storage (target), per sicurezza e prevenzione di interferenze" },
      { id: 'B', text: "A regolare la temperatura dei condizionatori d'aria della stanza server" },
      { id: 'C', text: "A calcolare il fuso orario del datacenter secondario" },
      { id: 'D', text: "A bloccare l'accesso al web dei dipendenti non autorizzati" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo Zoning (es. per WWPN o porta) garantisce che un server Windows veda solo i propri dischi dedicati, evitando che provi a formattare o corrompere i volumi appartenenti a server Linux o VMware sullo stesso storage array.",
    hint: "Isola server e storage target all'interno della SAN tramite regole di accesso logiche.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_BK_086',
    question: "Quale comando Linux a basso livello consente di creare una copia speculare 'bit per bit' (immagine esatta) di un intero disco fisso o partizione su un file o su un altro disco?",
    options: [
      { id: 'A', text: "dd if=/dev/sda of=/backup/disco.img bs=4M status=progress" },
      { id: 'B', text: "cp /dev/sda /backup" },
      { id: 'C', text: "mv /dev/sda /backup" },
      { id: 'D', text: "cat /dev/sda > text.txt" }
    ],
    correctAnswerId: 'A',
    explanation: "`dd` (Data Duplicator o Disk Dump) legge e scrive blocchi grezzi a basso livello byte per byte (`if` = input file, `of` = output file), utilizzato per clonazione forense e immagini di dischi.",
    hint: "Il comando dd (disk dump) clona a basso livello blocchi fisici di dischi e partizioni.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_087',
    question: "In termini di Business Continuity, qual è la differenza fondamentale tra 'Disaster Recovery' (DR) e 'Alta Disponibilità' (High Availability - HA)?",
    options: [
      { id: 'A', text: "L'Alta Disponibilità (HA) è progettata per gestire guasti locali di singoli componenti (es. un alimentatore, un disco o un server) con failover automatico locale immediato; il Disaster Recovery gestisce eventi catastrofici che colpiscono l'intero datacenter o l'intera sede, ripristinando i servizi su un sito geografico alternativo" },
      { id: 'B', text: "L'Alta Disponibilità non richiede alcun hardware ridondante" },
      { id: 'C', text: "Il Disaster Recovery si occupa solo di recuperare file di testo Word cancellati per errore" },
      { id: 'D', text: "Non vi è alcuna differenza, sono due termini commerciali identici" }
    ],
    correctAnswerId: 'A',
    explanation: "L'HA garantisce la resilienza locale a guasti ordinari (ridondanza N+1 nel rack). Il DR risponde a disastri gravi (alluvioni, terremoti, blackout regionale, attacco ransomware massivo) attivando il datacenter secondario.",
    hint: "HA protegge da guasti locali interni al sito; DR protegge dalla perdita dell'intero datacenter o sede.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_088',
    question: "Cosa si intende per 'Reverse Incremental Backup'?",
    options: [
      { id: 'A', text: "Una tecnica in cui l'ultimo backup eseguito viene trasformato immediatamente nel nuovo backup COMPLETO iniettandovi i blocchi modificati, mentre i blocchi precedenti vengono archiviati come differenze a ritroso (reverse), consentendo il restore istantaneo dell'ultimo stato" },
      { id: 'B', text: "Un backup che cancella i dati invece di salvarli" },
      { id: 'C', text: "Un backup che salva i file dall'ultimo carattere al primo" },
      { id: 'D', text: "Un salvataggio eseguito solo durante il periodo di vacanze estive" }
    ],
    correctAnswerId: 'A',
    explanation: "Con il reverse incremental, il punto di ripristino più recente è sempre un file full completo autosufficiente, massimizzando la velocità del restore nel 99% dei casi reali.",
    hint: "Mantiene l'ultimo punto di ripristino sempre come full completo, archiviando le modifiche passate all'indietro.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_BK_089',
    question: "Quale tipologia di test di Disaster Recovery simula la chiusura improvvisa del datacenter principale commutando effettivamente tutti i carichi di lavoro e il traffico degli utenti sul sito secondario durante una finestra concordata?",
    options: [
      { id: 'A', text: "Test di Cutover / Full Interruption Test" },
      { id: 'B', text: "Tabletop Exercise (discussione teorica attorno a un tavolo)" },
      { id: 'C', text: "Verifica visiva delle etichette sui cavi" },
      { id: 'D', text: "Test del tasto di accensione del monitor" }
    ],
    correctAnswerId: 'A',
    explanation: "Il test di cutover reale è la verifica più rigorosa: devia il traffico reale (o simulated workload) sul sito secondario per certificare che connettività DNS, routing e sincronizzazione database rispondano nei tempi RTO/RPO stabiliti.",
    hint: "Test di failover reale con commutazione effettiva del carico sul sito di Disaster Recovery.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_090',
    question: "In ambiente Microsoft Windows Server, cosa fa lo strumento 'Windows Server Backup' (wbadmin)?",
    options: [
      { id: 'A', text: "Consente di eseguire backup e ripristini completi del sistema operativo (Bare Metal Recovery), dello stato del sistema (System State), di volumi specifici o di singoli file e cartelle" },
      { id: 'B', text: "Formatta automaticamente la scheda madre ogni mese" },
      { id: 'C', text: "Calcola le buste paga dei programmatori Microsoft" },
      { id: 'D', text: "Invia una notifica SMS al prefetto in caso di errore" }
    ],
    correctAnswerId: 'A',
    explanation: "`wbadmin` è il motore nativo di backup di Windows Server: consente di salvare il System State (comprensivo del database di Active Directory ntds.dit) e immagini Bare Metal su dischi dedicati o share di rete.",
    hint: "Utility nativa per backup di volumi, bare-metal e system state in Windows Server.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_091',
    question: "Che cos'è la 'Storage Tiering' automatica nei sistemi di archiviazione dati aziendali?",
    options: [
      { id: 'A', text: "Lo spostamento automatico dei blocchi di dati tra diversi livelli di archiviazione con prestazioni e costi diversi (es. NVMe veloci per dati 'caldi' usati frequentemente, dischi meccanici o cloud archive per dati 'freddi' inattivi)" },
      { id: 'B', text: "L'impilamento fisico dei dischi sul pavimento della stanza server" },
      { id: 'C', text: "Un protocollo di cancellazione forzata dei file non utilizzati da 7 giorni" },
      { id: 'D', text: "La sostituzione delle memorie RAM ogni 24 mesi" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo Storage Tiering ottimizza i costi: i dati caldi ad alta transazionalità risiedono su SSD veloci, mentre file storici o vecchi backup vengono migrati in background verso dischi capienti a basso costo o cloud.",
    hint: "Migrazione automatica dei dati tra storage veloce (dati caldi) e storage economico (dati freddi).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_092',
    question: "Cosa si intende per 'Delta Backup'?",
    options: [
      { id: 'A', text: "Un backup che salva unicamente le porzioni o blocchi di dati modificati all'interno di un file di grandi dimensioni, anziché ricopiare l'intero file per intero" },
      { id: 'B', text: "Un backup che funziona solo a bordo di imbarcazioni fluviali" },
      { id: 'C', text: "Un salvataggio eseguito esclusivamente nella quarta settimana del mese" },
      { id: 'D', text: "La cancellazione delle lettere greche dai documenti di testo" }
    ],
    correctAnswerId: 'A',
    explanation: "Il delta backup (sub-file level) è ideale per dischi virtuali da 500 GB o database: se cambia solo l'1% dei blocchi, salva solo quell'1% evitando di trasferire 500 GB attraverso la rete.",
    hint: "Salva solo i blocchi modificati all'interno del file (a livello di blocco).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_093',
    question: "Quale tipologia di nastro magnetico include la funzionalità 'WORM' (Write Once, Read Many) a livello hardware?",
    options: [
      { id: 'A', text: "Cartucce a nastro LTO WORM con chip di fabbrica bloccato che impedisce la sovrascrittura o la cancellazione dei dati già incisi" },
      { id: 'B', text: "Nastri a cassetta musicale VHS" },
      { id: 'C', text: "Rotoli di carta termica per registratori di cassa" },
      { id: 'D', text: "Nastri isolanti per cavi elettrici" }
    ],
    correctAnswerId: 'A',
    explanation: "Le cartucce LTO WORM integrano controlli fisici e firmware nel drive: il nastro non può essere formattato né sovrascritto, garantendo conformità legale a prova di attacco ransomware.",
    hint: "Cartucce nastro LTO WORM con blocco fisico e firmware contro la sovrascrittura.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_094',
    question: "In caso di ripristino di un Domain Controller Active Directory da un backup obsoleto, quale grave anomalia logica può verificarsi se non si esegue un ripristino autorevole o supportato da VM Generation ID?",
    options: [
      { id: 'A', text: "USN Rollback (con conseguente blocco della replica tra Domain Controller e inconsistenza degli oggetti e password di dominio)" },
      { id: 'B', text: "Lo spegnimento immediato del monitor del server" },
      { id: 'C', text: "L'eliminazione automatica della connessione internet" },
      { id: 'D', text: "L'inversione delle lettere della tastiera da QWERTY a AZERTY" }
    ],
    correctAnswerId: 'A',
    explanation: "L'USN Rollback si verifica se un DC ripristina un numero di sequenza di aggiornamento (USN) già usato nel passato, causando divergenza irreversibile nel database di Active Directory.",
    hint: "USN Rollback: grave anomalia che corrompe la replica di Active Directory.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_BK_095',
    question: "Quale funzione svolge la 'Retention Policy' (Criterio di conservazione) configurata all'interno di un software di backup aziendale?",
    options: [
      { id: 'A', text: "Definisce per quanto tempo (giorni, mesi o anni) e quante versioni di ciascun backup devono essere conservate prima di essere eliminate o archiviate automaticamente, garantendo conformità alle normative ed evitando la saturazione dello spazio di memoria" },
      { id: 'B', text: "Stabilisce l'orario di pausa caffè dei sistemisti di turno" },
      { id: 'C', text: "Imposta il colore predefinito delle finestre di dialogo" },
      { id: 'D', text: "Cancella tutti i dati ogni volta che un dipendente va in pensione" }
    ],
    correctAnswerId: 'A',
    explanation: "La retention policy gestisce il ciclo di vita dei dati (es. mantieni gli ultimi 14 backup giornalieri, 12 mensili e 7 annuali), eliminando le copie non più necessarie in modo controllato.",
    hint: "Regole che stabiliscono per quanto tempo conservare i punti di ripristino prima dell'eliminazione.",
    level: "base"
  },
  {
    id: 'Q_INF_BK_096',
    question: "Cosa si intende per 'Warm Site' rispetto a un 'Hot Site' in un piano di Disaster Recovery?",
    options: [
      { id: 'A', text: "Un sito secondario in cui sono già presenti e configurati server, apparati di rete e sistemi di storage, ma in cui i dati e i carichi di lavoro non sono attivi in tempo reale e devono essere ripristinati dagli ultimi backup prima di erogare il servizio (RTO di alcune ore)" },
      { id: 'B', text: "Un datacenter dotato di riscaldamento a pavimento" },
      { id: 'C', text: "Un computer portatile con la batteria costantemente calda" },
      { id: 'D', text: "Una connessione internet che funziona solo nei mesi estivi" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Warm Site rappresenta il compromesso ideale tra costi e prestazioni: l'hardware c'è già ed è pronto, ma i dati si allineano periodicamente (non in replica continua istantanea come nell'Hot Site), garantendo ripristini in poche ore anziché minuti.",
    hint: "Hardware presente e pronto, ma dati da ripristinare dai backup (RTO di qualche ora).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_097',
    question: "In ambiente Linux, qual è la funzione del comando 'rsync -avz --delete /sorgente/ /destinazione/'?",
    options: [
      { id: 'A', text: "Sincronizza in modo ricorsivo preservando permessi, proprietari e timestamp (-a), visualizzando l'output dettagliato (-v), comprimendo i dati in transito (-z) ed eliminando nella destinazione i file che non esistono più nella sorgente (--delete)" },
      { id: 'B', text: "Cancella permanentemente sia la cartella sorgente sia la cartella destinazione" },
      { id: 'C', text: "Converte tutti i file in formato Microsoft Word" },
      { id: 'D', text: "Invia una notifica email a tutti gli utenti del sistema" }
    ],
    correctAnswerId: 'A',
    explanation: "Le opzioni `-avz --delete` realizzano una replica speculare perfetta (mirror): i file cancellati nella sorgente vengono rimossi anche nella destinazione, mantenendo le due directory perfettamente allineate.",
    hint: "-a (archivio/permessi), -v (verbose), -z (compressione), --delete (mirroring speculare).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_098',
    question: "Che cos'è una SAN di replica asincrona basata su protocollo 'FCIP' (Fibre Channel over IP)?",
    options: [
      { id: 'A', text: "Una tecnologia che incapsula frame Fibre Channel nativi all'interno di pacchetti TCP/IP per estendere la connettività SAN e replicare i dati tra datacenter geograficamente distanti attraverso reti WAN a banda larga" },
      { id: 'B', text: "Un cavo telefonico in rame per chiamate internazionali" },
      { id: 'C', text: "Un programma per masterizzare CD musicali" },
      { id: 'D', text: "Un software per la navigazione su siti internet governativi" }
    ],
    correctAnswerId: 'A',
    explanation: "FCIP supera il limite chilometrico dei cavi in fibra ottica scuri dedicati, incapsulando il protocollo Fibre Channel su connessioni IP standard per collegare SAN e replicare dati a centinaia di km di distanza.",
    hint: "Fibre Channel incapsulato in TCP/IP per collegare SAN remote a lunghe distanze.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_BK_099',
    question: "Quale standard e framework internazionale definisce i requisiti per progettare, stabilire, implementare e gestire un Sistema di Gestione della Continuità Operativa (Business Continuity Management System)?",
    options: [
      { id: 'A', text: "ISO 22301" },
      { id: 'B', text: "ISO 9001" },
      { id: 'C', text: "ISO 14001" },
      { id: 'D', text: "RFC 1918" }
    ],
    correctAnswerId: 'A',
    explanation: "La norma ISO 22301 è lo standard internazionale di riferimento per la Continuità Operativa (Business Continuity), specificando requisiti per piani di emergenza, BIA, DRP e gestione delle crisi.",
    hint: "ISO 22301 è lo standard mondiale per la Continuità Operativa e il Disaster Recovery.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_BK_100',
    question: "Cosa si intende per 'Backup Consistency Check' (Verifica di coerenza del backup) eseguita periodicamente dai software di backup enterprise?",
    options: [
      { id: 'A', text: "Una procedura automatica che calcola e confronta i checksum crittografici dei blocchi salvati sul repository di backup con gli hash originali, per assicurarsi che i file non abbiano subito corruzioni fisiche o logiche prima di dichiarare il backup integro e ripristinabile" },
      { id: 'B', text: "La verifica dell'accensione del monitor durante il salvataggio" },
      { id: 'C', text: "Il controllo del colore della vernice del server rack" },
      { id: 'D', text: "Il calcolo automatico dello stipendio del responsabile della sicurezza" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Consistency Check verifica matematicamente l'integrità dei blocchi nello storage di backup tramite algoritmi crittografici di hashing (SHA-256), assicurando che nessun bit sia corrotto e che il ripristino vada a buon fine.",
    hint: "Verifica crittografica dei checksum dei blocchi per garantire l'integrità del salvataggio.",
    level: "base"
  }
];

// Append to backup.json
const bkPath = path.join(__dirname, '../public/db/master_bank/informatica/backup.json');
const bkData = JSON.parse(fs.readFileSync(bkPath, 'utf8'));
bkData.push(...bkQuestions);

bkData.forEach((q, idx) => {
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

fs.writeFileSync(bkPath, JSON.stringify(bkData, null, 2), 'utf8');
const bkCounts = { A: 0, B: 0, C: 0, D: 0 };
bkData.forEach(q => bkCounts[q.correctAnswerId]++);
console.log('Backup updated! Total:', bkData.length, 'Counts:', bkCounts);
