const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: 'Q_PECS_LOG_051',
    question: "Si considerino le premesse: 'Tutti i funzionari INPS superano il periodo di prova' e 'Marco non ha superato il periodo di prova'. Quale conclusione si può dedurre con assoluta certezza logica?",
    options: [
      { id: 'A', text: "Marco non è un funzionario INPS." },
      { id: 'B', text: "Marco diventerà funzionario INPS con riserva." },
      { id: 'C', text: "Tutti coloro che non superano la prova si chiamano Marco." },
      { id: 'D', text: "Marco ha superato il concorso ma non la visita medica." }
    ],
    correctAnswerId: 'A',
    explanation: "Si applica il Modus Tollens: Se P (essere funzionario INPS), allora Q (superare il periodo di prova). Non Q (Marco non ha superato la prova), ergo Non P (Marco non è un funzionario INPS).",
    hint: "Modus Tollens: se A implica B, e non-B è vero, allora necessariamente non-A.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_052',
    question: "Qual è la corretta negazione logica della proposizione: 'Nessun ricorso amministrativo è stato respinto'?",
    options: [
      { id: 'A', text: "Almeno un ricorso amministrativo è stato respinto." },
      { id: 'B', text: "Tutti i ricorsi amministrativi sono stati accolti." },
      { id: 'C', text: "Nessun ricorso è stato mai presentato agli uffici." },
      { id: 'D', text: "Tutti i ricorsi amministrativi sono stati respinti." }
    ],
    correctAnswerId: 'A',
    explanation: "Nel quadrato delle opposizioni logiche, la negazione di una proposizione universale negativa (Nessun S è P) è la corrispondente particolare affermativa (Esiste almeno un S che è P / Qualche S è P).",
    hint: "Per smentire che 'nessuno lo è', basta che 'almeno uno lo sia'.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_053',
    question: "Individuare il numero che completa logicamente la serie numerica: 3, 7, 15, 31, 63, ?",
    options: [
      { id: 'A', text: "127" },
      { id: 'B', text: "126" },
      { id: 'C', text: "95" },
      { id: 'D', text: "128" }
    ],
    correctAnswerId: 'A',
    explanation: "La regola della serie è moltiplicare per 2 e aggiungere 1 (oppure raddoppiare l'incremento: +4, +8, +16, +32, +64). Quindi: 63 * 2 + 1 = 126 + 1 = 127 (oppure 63 + 64 = 127).",
    hint: "Ogni termine è il doppio del precedente più uno (oppure la differenza raddoppia ad ogni passo).",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_054',
    question: "Completare la sequenza alfanumerica: B2, D4, G7, K11, ?",
    options: [
      { id: 'A', text: "P16" },
      { id: 'B', text: "O15" },
      { id: 'C', text: "Q17" },
      { id: 'D', text: "N14" }
    ],
    correctAnswerId: 'A',
    explanation: "Le lettere avanzano secondo la loro posizione nell'alfabeto internazionale: B (2), D (4) [+2], G (7) [+3], K (11) [+4]. Il passo successivo deve incrementare di +5: 11 + 5 = 16, corrispondente alla lettera P e al numero 16 (P16).",
    hint: "La progressione degli incrementi è +2, +3, +4, +5 sia per la lettera che per il numero.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_055',
    question: "Si consideri l'affermazione: 'Se un operatore è abilitato, allora possiede il PIN di sicurezza'. Sapendo che l'affermazione è vera, quale delle seguenti è sicuramente vera?",
    options: [
      { id: 'A', text: "Se un operatore non possiede il PIN di sicurezza, allora non è abilitato." },
      { id: 'B', text: "Se un operatore possiede il PIN di sicurezza, allora è sicuramente abilitato." },
      { id: 'C', text: "Tutti gli operatori non abilitati non possiedono mai alcun PIN." },
      { id: 'D', text: "Solo gli operatori non abilitati possono richiedere il duplicato del PIN." }
    ],
    correctAnswerId: 'A',
    explanation: "L'implicazione A -> B è logicamente equivalente alla sua contronominale non-B -> non-A (se non ha il PIN, allora non è abilitato). L'opzione B commette la fallacia dell'affermazione del conseguente.",
    hint: "Regola della contronominale: 'Se A allora B' equivale a 'Se non B allora non A'.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_056',
    question: "Individuare il termine che completa la proporzione verbale: Sentenza : Giudice = Determina : ?",
    options: [
      { id: 'A', text: "Dirigente" },
      { id: 'B', text: "Testimone" },
      { id: 'C', text: "Cancelleria" },
      { id: 'D', text: "Ricorrente" }
    ],
    correctAnswerId: 'A',
    explanation: "La sentenza è l'atto tipico adottato dall'organo giudicante (il Giudice), così come la determina (o determinazione dirigenziale) è l'atto tipico di gestione adottato dal Dirigente pubblico.",
    hint: "Relazione di corrispondenza tra atto tipico e organo istituzionale che lo adotta.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_057',
    question: "In una sede INPS ci sono 5 sportelli. Se ciascuno sportello lavora in media 12 pratiche ogni ora, quante pratiche complessive verranno lavorate dall'ufficio in una giornata lavorativa di 6 ore?",
    options: [
      { id: 'A', text: "360" },
      { id: 'B', text: "300" },
      { id: 'C', text: "420" },
      { id: 'D', text: "280" }
    ],
    correctAnswerId: 'A',
    explanation: "5 sportelli lavorano ciascuno 12 pratiche all'ora, quindi 5 * 12 = 60 pratiche all'ora in totale. In 6 ore di servizio: 60 * 6 = 360 pratiche complessive.",
    hint: "Calcolo: 5 * 12 * 6 = 360.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_058',
    question: "Individuare il numero mancante nella sequenza: 2, 6, 12, 20, 30, 42, ?",
    options: [
      { id: 'A', text: "56" },
      { id: 'B', text: "54" },
      { id: 'C', text: "48" },
      { id: 'D', text: "60" }
    ],
    correctAnswerId: 'A',
    explanation: "Si osservano le differenze tra termini successivi: 6 - 2 = 4; 12 - 6 = 6; 20 - 12 = 8; 30 - 20 = 10; 42 - 30 = 12. La differenza successiva deve essere 14: 42 + 14 = 56. (Alternativamente: n*(n+1): 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30, 6*7=42, 7*8=56).",
    hint: "Le differenze tra i termini aumentano di 2: +4, +6, +8, +10, +12, +14.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_059',
    question: "Se l'affermazione 'Tutti i dossier urgenti sono stati protocollati' è FALSA, quale delle seguenti affermazioni è NECESSARIAMENTE VERA?",
    options: [
      { id: 'A', text: "Almeno un dossier urgente non è stato protocollato." },
      { id: 'B', text: "Nessun dossier urgente è stato protocollato." },
      { id: 'C', text: "Tutti i dossier non urgenti sono stati protocollati." },
      { id: 'D', text: "La maggior parte dei dossier è stata smarrita." }
    ],
    correctAnswerId: 'A',
    explanation: "Se l'universale affermativa (Tutti gli A sono B) è falsa, la sua contraddittoria particolare negativa (Almeno un A non è B) è necessariamente vera.",
    hint: "La contraddittoria di 'tutti lo sono' è 'almeno uno non lo è'.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_060',
    question: "Un fondo previdenziale rende il 10% il primo anno e subisce una perdita del 10% il secondo anno. Rispetto al capitale iniziale, al termine del biennio il fondo:",
    options: [
      { id: 'A', text: "È diminuito dell'1%." },
      { id: 'B', text: "È rimasto invariato (0%)." },
      { id: 'C', text: "È aumentato dell'1%." },
      { id: 'D', text: "È diminuito del 2%." }
    ],
    correctAnswerId: 'A',
    explanation: "Partendo da 100: dopo il primo anno sale del 10% -> 100 * 1,10 = 110. Il secondo anno perde il 10% sul nuovo valore: 110 * 0,90 = 99. Da 100 a 99 la perdita netta è di 1 (pari all'1%).",
    hint: "1,10 * 0,90 = 0,99, ovvero -1% rispetto al capitale originario.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_061',
    question: "Cinque colleghi (A, B, C, D, E) lavorano in uffici contigui numerati da 1 a 5. A lavora nella stanza 1; C lavora accanto ad A; D lavora tra C ed E. In quale stanza lavora B?",
    options: [
      { id: 'A', text: "Nella stanza 5." },
      { id: 'B', text: "Nella stanza 2." },
      { id: 'C', text: "Nella stanza 3." },
      { id: 'D', text: "Nella stanza 4." }
    ],
    correctAnswerId: 'A',
    explanation: "A = 1. C è accanto ad A, quindi C = 2. D lavora tra C ed E: l'unica sequenza possibile è C(2) - D(3) - E(4). L'unica stanza rimasta libera per B è la stanza 5.",
    hint: "Disporre le stanze in sequenza: 1:A, 2:C, 3:D, 4:E, 5:B.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_062',
    question: "Qual è il numero che completa la serie: 1, 8, 27, 64, 125, ?",
    options: [
      { id: 'A', text: "216" },
      { id: 'B', text: "196" },
      { id: 'C', text: "256" },
      { id: 'D', text: "225" }
    ],
    correctAnswerId: 'A',
    explanation: "La sequenza è data dai cubi dei numeri interi naturali: 1^3 = 1; 2^3 = 8; 3^3 = 27; 4^3 = 64; 5^3 = 125; 6^3 = 216.",
    hint: "Serie dei cubi: 1³, 2³, 3³, 4³, 5³, 6³ = 216.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_063',
    question: "Tutti i matematici sono precisi. Nessun distratto è preciso. Alcuni funzionari sono distratti. Quale conclusione è corretta?",
    options: [
      { id: 'A', text: "Alcuni funzionari non sono matematici." },
      { id: 'B', text: "Nessun funzionario è matematico." },
      { id: 'C', text: "Tutti i matematici sono funzionari." },
      { id: 'D', text: "Tutti i funzionari sono distratti." }
    ],
    correctAnswerId: 'A',
    explanation: "Se nessun distratto è preciso e tutti i matematici sono precisi, allora nessun distratto è matematico. Poiché alcuni funzionari sono distratti, quei funzionari distratti non possono essere matematici. Pertanto: alcuni funzionari non sono matematici.",
    hint: "Chi è distratto non è preciso, quindi non può essere un matematico.",
    level: "avanzato"
  },
  {
    id: 'Q_PECS_LOG_064',
    question: "Completare la sequenza: 4, 9, 19, 39, 79, ?",
    options: [
      { id: 'A', text: "159" },
      { id: 'B', text: "149" },
      { id: 'C', text: "169" },
      { id: 'D', text: "158" }
    ],
    correctAnswerId: 'A',
    explanation: "La regola è: ogni termine si ottiene moltiplicando il precedente per 2 e aggiungendo 1. 4*2+1=9; 9*2+1=19; 19*2+1=39; 39*2+1=79; 79*2+1 = 158 + 1 = 159.",
    hint: "Operazione fissa: (termine * 2) + 1.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_065',
    question: "In una commissione di 4 membri bisogna scegliere un Presidente e un Segretario. In quanti modi diversi possono essere assegnati questi due ruoli distinti?",
    options: [
      { id: 'A', text: "12" },
      { id: 'B', text: "6" },
      { id: 'C', text: "16" },
      { id: 'D', text: "24" }
    ],
    correctAnswerId: 'A',
    explanation: "Trattandosi di ruoli distinti (l'ordine conta), si calcolano le disposizioni semplici di 4 elementi presi a 2 a 2: D(4,2) = 4 * 3 = 12 modi possibili.",
    hint: "4 possibilità per il Presidente * 3 possibilità residue per il Segretario = 12.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_066',
    question: "Individuare la parola da scartare perché non affine alle altre: Determina, Decreto, Delibera, Sinallagma.",
    options: [
      { id: 'A', text: "Sinallagma" },
      { id: 'B', text: "Determina" },
      { id: 'C', text: "Decreto" },
      { id: 'D', text: "Delibera" }
    ],
    correctAnswerId: 'A',
    explanation: "Determina, decreto e delibera sono tipologie di provvedimenti e atti della Pubblica Amministrazione. Il sinallagma è invece un concetto civilistico che esprime il nesso di reciprocità delle prestazioni contrattuali.",
    hint: "I primi tre sono atti amministrativi, il quarto è un concetto civilistico contrattuale.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_067',
    question: "La somma dell'età di un dirigente e del suo assistente è 70 anni. Il dirigente ha 24 anni più del suo assistente. Quanti anni ha l'assistente?",
    options: [
      { id: 'A', text: "23" },
      { id: 'B', text: "25" },
      { id: 'C', text: "21" },
      { id: 'D', text: "24" }
    ],
    correctAnswerId: 'A',
    explanation: "Sia x l'età dell'assistente. Il dirigente ha x + 24 anni. x + (x + 24) = 70 -> 2x + 24 = 70 -> 2x = 46 -> x = 23 anni. (Il dirigente ha 23 + 24 = 47 anni; 47 + 23 = 70).",
    hint: "Impostare l'equazione: 2x + 24 = 70, da cui x = (70 - 24) / 2 = 23.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_068',
    question: "Se 'Tutti gli auditors sono meticolosi' e 'Chi è meticoloso non commette omissioni colpose', quale affermazione è ERRATA?",
    options: [
      { id: 'A', text: "Alcuni auditors possono commettere omissioni colpose." },
      { id: 'B', text: "Nessun auditor commette omissioni colpose." },
      { id: 'C', text: "Chi commette omissioni colpose non è un auditor." },
      { id: 'D', text: "Chi commette omissioni colpose non è meticoloso." }
    ],
    correctAnswerId: 'A',
    explanation: "Dalle premesse discende necessariamente che tutti gli auditors, essendo meticolosi, non commettono omissioni colpose (Nessun auditor commette omissioni colpose). Pertanto, sostenere che 'alcuni auditors possono commettere omissioni colpose' è logicamente falso ed errato.",
    hint: "La proprietà transitiva esclude categoricamente che un auditor possa commettere omissioni colpose.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_069',
    question: "Completare la serie numerica: 100, 96, 88, 72, 40, ?",
    options: [
      { id: 'A', text: "-24" },
      { id: 'B', text: "0" },
      { id: 'C', text: "8" },
      { id: 'D', text: "-16" }
    ],
    correctAnswerId: 'A',
    explanation: "I decrementi raddoppiano ad ogni passaggio: 100 - 4 = 96; 96 - 8 = 88; 88 - 16 = 72; 72 - 32 = 40. Il passo successivo prevede di sottrarre 64 (32 * 2): 40 - 64 = -24.",
    hint: "Le sottrazioni raddoppiano progressivamente: -4, -8, -16, -32, -64.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_070',
    question: "In un ufficio, 3 stampanti impiegano 6 minuti per stampare 90 relazioni. Quanti minuti impiegheranno 6 stampanti con la medesima velocità per stampare 180 relazioni?",
    options: [
      { id: 'A', text: "6 minuti" },
      { id: 'B', text: "12 minuti" },
      { id: 'C', text: "3 minuti" },
      { id: 'D', text: "9 minuti" }
    ],
    correctAnswerId: 'A',
    explanation: "Se il numero di macchine raddoppia (da 3 a 6) e contemporaneamente raddoppia anche il lavoro da eseguire (da 90 a 180 relazioni), la capacità produttiva oraria raddoppia esattamente di pari passo con la mole di lavoro, lasciando invariato il tempo complessivo di 6 minuti.",
    hint: "Raddoppiando sia i fattori produttivi sia il prodotto richiesto, il tempo necessario rimane identico.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_071',
    question: "Trovare l'intruso tra le seguenti coppie: (2, 8), (3, 27), (4, 64), (5, 100).",
    options: [
      { id: 'A', text: "(5, 100)" },
      { id: 'B', text: "(2, 8)" },
      { id: 'C', text: "(3, 27)" },
      { id: 'D', text: "(4, 64)" }
    ],
    correctAnswerId: 'A',
    explanation: "Nelle prime tre coppie il secondo elemento è il cubo del primo (2^3 = 8; 3^3 = 27; 4^3 = 64). Per 5 il cubo è 125, mentre 100 è 5 * 20 o 10^2, rendendo la coppia (5, 100) l'unica non coerente con la regola.",
    hint: "Relazione del cubo: 2³=8, 3³=27, 4³=64, mentre 5³=125 (non 100).",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_072',
    question: "Se 'Solo chi possiede la PEC può accedere al fascicolo telematico', quale deduzione è corretta?",
    options: [
      { id: 'A', text: "Chi non possiede la PEC non può accedere al fascicolo telematico." },
      { id: 'B', text: "Chiunque possiede la PEC accede automaticamente al fascicolo telematico." },
      { id: 'C', text: "L'accesso al fascicolo telematico comporta l'obbligo di acquistare una PEC." },
      { id: 'D', text: "La PEC è rilasciata solo a chi ha un fascicolo telematico attivo." }
    ],
    correctAnswerId: 'A',
    explanation: "'Solo se P allora Q' significa che P è condizione necessaria per Q. Quindi, in assenza di P (non avere la PEC), non può verificarsi Q (non si può accedere al fascicolo).",
    hint: "La clausola 'Solo chi...' indica una condizione necessaria inderogabile.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_073',
    question: "Individuare il numero mancante nella matrice: \n[ 3  |  5  | 15 ]\n[ 4  |  6  | 24 ]\n[ 7  |  8  |  ? ]",
    options: [
      { id: 'A', text: "56" },
      { id: 'B', text: "49" },
      { id: 'C', text: "64" },
      { id: 'D', text: "15" }
    ],
    correctAnswerId: 'A',
    explanation: "La terza colonna è il prodotto delle prime due colonne per ciascuna riga: 3 * 5 = 15; 4 * 6 = 24; 7 * 8 = 56.",
    hint: "Moltiplicare il primo elemento per il secondo lungo ogni riga: 7 * 8 = 56.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_074',
    question: "Qual è il significato più aderente dell'aggettivo 'Perentorio' riferito a un termine amministrativo o processuale?",
    options: [
      { id: 'A', text: "Un termine la cui inosservanza comporta la decadenza insanabile dal potere di compiere l'atto." },
      { id: 'B', text: "Un termine puramente indicativo e prorogabile all'infinito senza conseguenze." },
      { id: 'C', text: "Un termine che si applica esclusivamente nei mesi con 31 giorni." },
      { id: 'D', text: "Un termine subordinato alla previa autorizzazione dell'organo di revisione contabile." }
    ],
    correctAnswerId: 'A',
    explanation: "Il termine perentorio è fissato a pena di decadenza: decorso inutilmente, il soggetto perde irrimediabilmente la facoltà di compiere l'atto o l'impugnazione, a differenza del termine ordinatorio.",
    hint: "Perentorio = decadenza insanabile al decorso del tempo.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_075',
    question: "In un sacchetto ci sono 12 gettoni numerati da 1 a 12. Qual è la probabilità di estrarre un numero multiplo di 3?",
    options: [
      { id: 'A', text: "1/3" },
      { id: 'B', text: "1/4" },
      { id: 'C', text: "1/2" },
      { id: 'D', text: "5/12" }
    ],
    correctAnswerId: 'A',
    explanation: "I multipli di 3 compresi tra 1 e 12 sono: 3, 6, 9, 12 (in totale 4 casi favorevoli). I casi possibili sono 12. La probabilità è 4/12 = 1/3.",
    hint: "Casi favorevoli (3, 6, 9, 12) = 4 su 12 = 1/3.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_076',
    question: "Completare la serie: 5, 11, 23, 47, 95, ?",
    options: [
      { id: 'A', text: "191" },
      { id: 'B', text: "189" },
      { id: 'C', text: "190" },
      { id: 'D', text: "195" }
    ],
    correctAnswerId: 'A',
    explanation: "La progressione segue la formula: (x * 2) + 1. Infatti: 5*2+1=11; 11*2+1=23; 23*2+1=47; 47*2+1=95; 95*2+1 = 190 + 1 = 191.",
    hint: "Raddoppiare e aggiungere 1: 95 * 2 + 1 = 191.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_077',
    question: "Si consideri l'enunciato: 'Condizione necessaria ma non sufficiente per vincere il concorso è superare la prova scritta'. Cosa significa formalmente?",
    options: [
      { id: 'A', text: "Se non si supera la prova scritta non si può vincere il concorso, ma superare la prova scritta non garantisce di per sé la vittoria finale." },
      { id: 'B', text: "Chi supera la prova scritta è automaticamente vincitore del concorso." },
      { id: 'C', text: "Si può vincere il concorso anche venendo bocciati alla prova scritta." },
      { id: 'D', text: "La prova scritta è facoltativa per i candidati con lode." }
    ],
    correctAnswerId: 'A',
    explanation: "La condizione necessaria è indispensabile (se manca, l'evento non si realizza: no scritto = no vittoria); ma non essendo sufficiente, da sola non basta (occorre ad esempio superare anche la prova orale e rientrare nei posti disponibili).",
    hint: "Necessaria = senza di essa non si vince; non sufficiente = da sola non garantisce la vittoria.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_078',
    question: "Individuare il numero mancante nella serie: 720, 120, 24, 6, 2, ?",
    options: [
      { id: 'A', text: "1" },
      { id: 'B', text: "0" },
      { id: 'C', text: "0.5" },
      { id: 'D', text: "1.5" }
    ],
    correctAnswerId: 'A',
    explanation: "La serie procede a ritroso attraverso le divisioni per numeri decrescenti: 720 / 6 = 120; 120 / 5 = 24; 24 / 4 = 6; 6 / 3 = 2; 2 / 2 = 1. (È la serie inversa dei fattoriali da 6! a 1!).",
    hint: "Divisioni progressive: /6, /5, /4, /3, /2. Quindi 2 / 2 = 1.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_079',
    question: "La proposizione 'Se e solo se l'utente ha SPID di livello 2, la procedura web si avvia' esprime una relazione di:",
    options: [
      { id: 'A', text: "Coimplicazione o equivalenza logica (condizione sia necessaria sia sufficiente)." },
      { id: 'B', text: "Disgiunzione inclusiva non esclusiva." },
      { id: 'C', text: "Implicazione unilaterale semplice." },
      { id: 'D', text: "Incompatibilità radicale tra i due eventi." }
    ],
    correctAnswerId: 'A',
    explanation: "'Se e solo se' (doppia freccia <->) è la bi-condizionale / coimplicazione, il che significa che il possesso di SPID 2 è condizione al contempo necessaria E sufficiente per l'avvio della procedura web.",
    hint: "'Se e solo se' stabilisce una condizione necessaria E sufficiente (coimplicazione).",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_080',
    question: "In un ufficio di 60 dipendenti, 35 parlano inglese, 25 parlano francese e 10 parlano entrambe le lingue. Quanti dipendenti non parlano nessuna delle due lingue?",
    options: [
      { id: 'A', text: "10" },
      { id: 'B', text: "15" },
      { id: 'C', text: "5" },
      { id: 'D', text: "20" }
    ],
    correctAnswerId: 'A',
    explanation: "Si applica il principio di inclusione-esclusione insiemistico: |Inglese U Francese| = |Inglese| + |Francese| - |Intersezione| = 35 + 25 - 10 = 50 dipendenti parlano almeno una lingua. Poiché i dipendenti totali sono 60, quelli che non parlano nessuna delle due lingue sono 60 - 50 = 10.",
    hint: "Formula degli insiemi: 35 + 25 - 10 = 50 che parlano almeno una lingua. 60 - 50 = 10.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_081',
    question: "Completare la proporzione: Lettera : Alfabeto = Giorno : ?",
    options: [
      { id: 'A', text: "Mese" },
      { id: 'B', text: "Notte" },
      { id: 'C', text: "Tramonto" },
      { id: 'D', text: "Ora" }
    ],
    correctAnswerId: 'A',
    explanation: "La lettera è l'unità costituente ordinata dell'alfabeto, così come il giorno è l'unità costituente ordinata del mese (o dell'anno). L'ora sarebbe invece una parte interna del giorno.",
    hint: "Relazione di appartenenza/costituzione di un insieme temporale più ampio.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_082',
    question: "Un funzionario esamina 15 pratiche in 3 ore. Un secondo funzionario ne esamina 15 in 6 ore. Lavorando insieme, in quante ore esamineranno complessivamente 15 pratiche?",
    options: [
      { id: 'A', text: "2 ore" },
      { id: 'B', text: "4,5 ore" },
      { id: 'C', text: "1,5 ore" },
      { id: 'D', text: "2,5 ore" }
    ],
    correctAnswerId: 'A',
    explanation: "La velocità del primo è 15/3 = 5 pratiche/ora. La velocità del secondo è 15/6 = 2,5 pratiche/ora. Velocità congiunta = 5 + 2,5 = 7,5 pratiche/ora. Per fare 15 pratiche: 15 / 7,5 = 2 ore esatte.",
    hint: "Velocità congiunta = 5 + 2,5 = 7,5 pratiche all'ora. 15 / 7,5 = 2 ore.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_083',
    question: "Trovare il numero che completa la serie a due livelli: 1, 3, 7, 13, 21, 31, ?",
    options: [
      { id: 'A', text: "43" },
      { id: 'B', text: "41" },
      { id: 'C', text: "45" },
      { id: 'D', text: "39" }
    ],
    correctAnswerId: 'A',
    explanation: "Calcolando le differenze prime: 3-1=2; 7-3=4; 13-7=6; 21-13=8; 31-21=10. Le differenze aumentano di 2 a ogni passo. La differenza successiva deve essere 12: 31 + 12 = 43.",
    hint: "Gli incrementi sono numeri pari crescenti: +2, +4, +6, +8, +10, +12.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_084',
    question: "Quale tra le seguenti è una tautologia (proposizione sempre vera, indipendentemente dal valore di verità delle sue componenti)?",
    options: [
      { id: 'A', text: "P oppure non-P (Principio del terzo escluso)." },
      { id: 'B', text: "P e non-P contemporaneamente." },
      { id: 'C', text: "Se P è vero, allora anche Q è sempre falso." },
      { id: 'D', text: "P implica necessariamente la negazione di P." }
    ],
    correctAnswerId: 'A',
    explanation: "'P oppure non-P' (tertium non datur) è la classica tautologia fondamentale della logica proposizionale: assume sempre il valore Vero (V) per qualunque valore di verità attribuito a P.",
    hint: "Una cosa o è vera o non è vera: 'P o non-P' è sempre vera per definizione.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_085',
    question: "Se 'Nessun mammifero è oviparo' e 'L'ornitorinco è oviparo', cosa ne consegue inconfutabilmente?",
    options: [
      { id: 'A', text: "In base a tali premesse, l'ornitorinco non è un mammifero." },
      { id: 'B', text: "Tutti gli ovipari sono ornitorinchi." },
      { id: 'C', text: "I mammiferi depongono le uova." },
      { id: 'D', text: "L'ornitorinco non appartiene al regno animale." }
    ],
    correctAnswerId: 'A',
    explanation: "Nei sillogismi formali si deve dedurre unicamente dalle premesse fornite: se nessun M è O, e X è O, per necessità logica X non può essere M. (Anche se la biologia reale classifica l'ornitorinco come mammifero monotremo, la logica formale deduce rigorosamente dalle premesse enunciate).",
    hint: "Rigorosa coerenza logica interna tra premesse e conclusione, a prescindere dalle conoscenze empiriche esterne.",
    level: "avanzato"
  },
  {
    id: 'Q_PECS_LOG_086',
    question: "Individuare la serie decrescente regolare: 81, 27, 9, 3, ?",
    options: [
      { id: 'A', text: "1" },
      { id: 'B', text: "0" },
      { id: 'C', text: "1/3" },
      { id: 'D', text: "2" }
    ],
    correctAnswerId: 'A',
    explanation: "Ogni termine è ottenuto dividendo per 3 il precedente (potenze decrescenti di 3: 3^4=81, 3^3=27, 3^2=9, 3^1=3, 3^0=1).",
    hint: "Progressione geometrica con ragione 1/3: 3 diviso 3 fa 1.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_087',
    question: "Cosa si intende in logica per 'Fallacia della negazione dell'antecedente'?",
    options: [
      { id: 'A', text: "L'errore logico che consiste nel dedurre 'non Q' dalla premessa 'Se P allora Q' unitamente a 'non P'." },
      { id: 'B', text: "L'applicazione corretta del Modus Ponens." },
      { id: 'C', text: "La conclusione valida che scaturisce da due premesse particolari." },
      { id: 'D', text: "L'inversione lecita dei termini di una proposizione universale negativa." }
    ],
    correctAnswerId: 'A',
    explanation: "La fallacia della negazione dell'antecedente afferma: 'Se piove (P) allora la strada è bagnata (Q). Non piove (non P), dunque la strada non è bagnata (non Q)'. Questo è fallace perché la strada potrebbe essere bagnata per altri motivi (es. lavaggio strade).",
    hint: "Negare l'antecedente non permette di inferire la negazione del conseguente.",
    level: "avanzato"
  },
  {
    id: 'Q_PECS_LOG_088',
    question: "Se 4 funzionari redigono 4 verbali in 4 ore, quanti verbali redigono 8 funzionari con la stessa produttività in 8 ore?",
    options: [
      { id: 'A', text: "16 verbali" },
      { id: 'B', text: "8 verbali" },
      { id: 'C', text: "32 verbali" },
      { id: 'D', text: "12 verbali" }
    ],
    correctAnswerId: 'A',
    explanation: "4 funzionari in 4 ore fanno 4 verbali, il che significa che 1 funzionario fa 1 verbale in 4 ore (produttività = 0,25 verbali/ora a testa). 8 funzionari in 8 ore: 8 funzionari * 8 ore = 64 ore-uomo complessive. 64 * 0,25 = 16 verbali.",
    hint: "Un funzionario produce 1 verbale ogni 4 ore. In 8 ore 1 funzionario produce 2 verbali. 8 funzionari * 2 = 16.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_089',
    question: "Completare la sequenza di lettere: C, F, I, L, O, ?",
    options: [
      { id: 'A', text: "R" },
      { id: 'B', text: "Q" },
      { id: 'C', text: "S" },
      { id: 'D', text: "P" }
    ],
    correctAnswerId: 'A',
    explanation: "Le lettere avanzano di 3 posizioni nell'alfabeto internazionale: C(3), F(6), I(9), L(12), O(15). La successiva è 15 + 3 = 18, che corrisponde alla lettera R.",
    hint: "Avanzamento a salti di 3 lettere: C, F, I, L, O, R.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_090',
    question: "Quale tra le seguenti affermazioni equivale logicamente a: 'Non tutti i cittadini sono informati'?",
    options: [
      { id: 'A', text: "Almeno un cittadino non è informato." },
      { id: 'B', text: "Tutti i cittadini sono disinformati." },
      { id: 'C', text: "Nessun cittadino è informato." },
      { id: 'D', text: "Tutti i cittadini sanno di essere disinformati." }
    ],
    correctAnswerId: 'A',
    explanation: "'Non tutti sono X' equivale per definizione a dire che 'esiste almeno uno che non è X'.",
    hint: "'Non tutti' = 'Almeno uno non lo è'.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_091',
    question: "Un questionario è composto da 3 domande, ciascuna con risposta Vero o Falso. In quanti modi diversi è possibile compilare complessivamente la sequenza delle risposte?",
    options: [
      { id: 'A', text: "8" },
      { id: 'B', text: "6" },
      { id: 'C', text: "9" },
      { id: 'D', text: "12" }
    ],
    correctAnswerId: 'A',
    explanation: "Per ciascuna delle 3 domande ci sono 2 possibili esiti indipendenti. Il numero totale di combinazioni è 2^3 = 2 * 2 * 2 = 8 modi diversi.",
    hint: "Disposizioni con ripetizione: 2³ = 8.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_092',
    question: "Se 'Chiunque ami la giustizia rispetta la legge' e 'Chi rispetta la legge tutela i deboli', cosa si deduce necessariamente?",
    options: [
      { id: 'A', text: "Chiunque ami la giustizia tutela i deboli." },
      { id: 'B', text: "Chi tutela i deboli ama necessariamente la giustizia." },
      { id: 'C', text: "Tutti coloro che non amano la giustizia violano la legge." },
      { id: 'D', text: "Solo i deboli amano la giustizia." }
    ],
    correctAnswerId: 'A',
    explanation: "Sillogismo ipotetico (proprietà transitiva dell'implicazione): A -> B e B -> C implica A -> C (Chi ama la giustizia -> tutela i deboli). L'inverso non è deducibile.",
    hint: "Proprietà transitiva: se A implica B e B implica C, allora A implica C.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_093',
    question: "Individuare il numero mancante nella serie: 2, 3, 5, 8, 13, 21, ?",
    options: [
      { id: 'A', text: "34" },
      { id: 'B', text: "33" },
      { id: 'C', text: "35" },
      { id: 'D', text: "29" }
    ],
    correctAnswerId: 'A',
    explanation: "È la celebre successione di Fibonacci: ogni termine è la somma dei due che lo precedono immediatamente. 2+3=5; 3+5=8; 5+8=13; 8+13=21; 13+21 = 34.",
    hint: "Serie di Fibonacci: 13 + 21 = 34.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_094',
    question: "Cosa si intende per 'sillogismo disgiuntivo' in logica classica?",
    options: [
      { id: 'A', text: "La forma valida di ragionamento che, data una disgiunzione (P oppure Q) e la negazione di uno dei disgiunti (non P), conclude affermando l'altro (dunque Q)." },
      { id: 'B', text: "Un sillogismo privo di conclusione verificabile." },
      { id: 'C', text: "Una discussione dialettica in cui entrambi gli interlocutori hanno torto." },
      { id: 'D', text: "L'affermazione congiunta di due contrari assoluti." }
    ],
    correctAnswerId: 'A',
    explanation: "Il sillogismo disgiuntivo (Modus Tollendo Ponens) ha la struttura: P v Q; non P; ergo Q. Se una delle due opzioni deve verificarsi e la prima è esclusa, la seconda è necessariamente vera.",
    hint: "O questo o quello. Non questo, dunque per forza quello.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_095',
    question: "In una scatola vi sono 4 palline bianche e 6 palline nere. Estraendo una pallina a caso, qual è la probabilità che essa sia bianca?",
    options: [
      { id: 'A', text: "40% (o 2/5)" },
      { id: 'B', text: "50% (o 1/2)" },
      { id: 'C', text: "60% (o 3/5)" },
      { id: 'D', text: "30% (o 3/10)" }
    ],
    correctAnswerId: 'A',
    explanation: "Le palline totali sono 4 + 6 = 10. I casi favorevoli (palline bianche) sono 4. La probabilità è 4/10 = 2/5 = 40%.",
    hint: "4 bianche su 10 totali = 40%.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_096',
    question: "Individuare l'intruso tra i seguenti termini: Oculato, Accorto, Avveduto, Dissennato.",
    options: [
      { id: 'A', text: "Dissennato" },
      { id: 'B', text: "Oculato" },
      { id: 'C', text: "Accorto" },
      { id: 'D', text: "Avveduto" }
    ],
    correctAnswerId: 'A',
    explanation: "Oculato, accorto e avveduto sono sinonimi che denotano prudenza, saggezza e lungimiranza. Dissennato è il termine opposto (antònimo), significando privo di senno, sconsiderato o stolto.",
    hint: "Tre aggettivi indicano prudenza e giudizio, uno solo indica sconsideratezza.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_097',
    question: "Completare la serie: 1, 4, 16, 64, 256, ?",
    options: [
      { id: 'A', text: "1024" },
      { id: 'B', text: "512" },
      { id: 'C', text: "768" },
      { id: 'D', text: "2048" }
    ],
    correctAnswerId: 'A',
    explanation: "Progressione geometrica di ragione 4 (potenze di 4: 4^0=1, 4^1=4, 4^2=16, 4^3=64, 4^4=256). Il termine successivo è 256 * 4 = 1024 (4^5).",
    hint: "Moltiplicare per 4 ogni termine: 256 * 4 = 1024.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_098',
    question: "Se 'Paolo è più anziano di Giorgio' e 'Giorgio è più anziano di Silvia', ma 'Anna è più anziana di Paolo', chi è la persona più giovane del gruppo?",
    options: [
      { id: 'A', text: "Silvia" },
      { id: 'B', text: "Giorgio" },
      { id: 'C', text: "Paolo" },
      { id: 'D', text: "Anna" }
    ],
    correctAnswerId: 'A',
    explanation: "Ordinando in base all'età decrescente: Anna > Paolo > Giorgio > Silvia. La persona più giovane in assoluto è Silvia.",
    hint: "La catena di età è: Anna > Paolo > Giorgio > Silvia.",
    level: "base"
  },
  {
    id: 'Q_PECS_LOG_099',
    question: "Cosa stabilisce il principio di non contraddizione formulato da Aristotele?",
    options: [
      { id: 'A', text: "È impossibile che il medesimo attributo appartenga e non appartenga allo stesso tempo e sotto il medesimo rispetto a una stessa cosa." },
      { id: 'B', text: "Ogni cosa è sempre uguale al suo contrario." },
      { id: 'C', text: "La verità di un'affermazione dipende unicamente dall'autorità di chi la pronuncia." },
      { id: 'D', text: "Due premesse negative danno sempre origine a una conclusione positiva certa." }
    ],
    correctAnswerId: 'A',
    explanation: "Il principio aristotelico di non contraddizione afferma l'impossibilità logica che una proposizione sia contemporaneamente vera e falsa sotto il medesimo aspetto e nello stesso momento: non si può affermare e negare lo stesso predicato del medesimo soggetto a un tempo.",
    hint: "Non si può essere e non essere contemporaneamente la stessa cosa sotto il medesimo aspetto.",
    level: "intermedio"
  },
  {
    id: 'Q_PECS_LOG_100',
    question: "Un articolo dal costo originario di 80 euro viene scontato del 25%. Qual è il prezzo finale dell'articolo dopo l'applicazione dello sconto?",
    options: [
      { id: 'A', text: "60 euro" },
      { id: 'B', text: "65 euro" },
      { id: 'C', text: "55 euro" },
      { id: 'D', text: "70 euro" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo sconto del 25% corrisponde a un quarto del prezzo originario: 80 * 0,25 = 20 euro di sconto. Il prezzo finale è: 80 - 20 = 60 euro.",
    hint: "Il 25% di 80 è 20. 80 - 20 = 60 euro.",
    level: "base"
  }
];

const filePath = path.join(__dirname, '../public/db/master_bank/logica/ragionamento_logico.json');
const bank = JSON.parse(fs.readFileSync(filePath, 'utf8'));
console.log('Initial count in ragionamento_logico.json:', bank.length);

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
console.log('Successfully updated ragionamento_logico.json! Total:', bank.length, 'Counts:', counts);
