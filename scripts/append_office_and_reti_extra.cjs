const fs = require('fs');
const path = require('path');

const offQuestions = [
  {
    id: 'Q_INF_OFF_051',
    question: "In Microsoft Excel, quale funzione di ricerca avanzata ha superato i limiti storici di CERCA.VERT (VLOOKUP), consentendo ricerche sia verso destra che verso sinistra e non richiedendo che la colonna di ricerca sia la prima della tabella?",
    options: [
      { id: 'A', text: "CERCA.X (XLOOKUP)" },
      { id: 'B', text: "SOMMA.SE (SUMIF)" },
      { id: 'C', text: "CONCATENA (CONCATENATE)" },
      { id: 'D', text: "CONTA.VUOTE (COUNTBLANK)" }
    ],
    correctAnswerId: 'A',
    explanation: "CERCA.X (introdotta da Microsoft) cerca in un array e restituisce valori corrispondenti da un altro array in qualsiasi direzione, include la gestione nativa degli errori 'se_non_trovato' e cerca per default corrispondenze esatte.",
    hint: "La funzione moderna e flessibile di Excel che sostituisce CERCA.VERT è CERCA.X.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_052',
    question: "In Excel, quale combinazione di funzioni storiche viene utilizzata per effettuare ricerche bidirezionali e dinamiche senza i vincoli di CERCA.VERT?",
    options: [
      { id: 'A', text: "INDICE e CONFRONTA (INDEX e MATCH)" },
      { id: 'B', text: "MEDIA e VARIANZA" },
      { id: 'C', text: "SINISTRA e DESTRA" },
      { id: 'D', text: "MAIUSC e MINUSC" }
    ],
    correctAnswerId: 'A',
    explanation: "La coppia `INDICE(matrice, CONFRONTA(valore, vettore_ricerca, 0))` restituisce il valore alla riga individuata da CONFRONTA, consentendo ricerche a sinistra e non risentendo dell'inserimento di nuove colonne nella tabella.",
    hint: "Coppia celebre per ricerche complesse in Excel: INDICE + CONFRONTA.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OFF_053',
    question: "Cosa fa una 'Tabella Pivot' in Microsoft Excel?",
    options: [
      { id: 'A', text: "Consente di riassumere, aggregare, analizzare ed esplorare dinamicamente grandi quantità di dati grezzi, organizzandoli per righe, colonne, filtri e valori (somme, conteggi, medie)" },
      { id: 'B', text: "Formatta le celle con colori casuali per migliorarne l'estetica" },
      { id: 'C', text: "Elimina automaticamente tutte le righe con numeri dispari" },
      { id: 'D', text: "Converte il foglio di calcolo in una presentazione PowerPoint" }
    ],
    correctAnswerId: 'A',
    explanation: "Le Tabelle Pivot sono lo strumento primario di Business Intelligence in Excel: raggruppano istantaneamente migliaia di record per categorie (es. per sede INPS, per anno o per tipologia prestazione) senza dover scrivere formule complesse.",
    hint: "Strumento interattivo di riepilogo e aggregazione multidimensionale dei dati.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_054',
    question: "In Excel, cosa indica il simbolo del dollaro '$' anteposto a una riga o colonna in un riferimento di cella (es. $A$1)?",
    options: [
      { id: 'A', text: "Rende il riferimento 'assoluto', bloccando la colonna o la riga in modo che non cambi quando la formula viene trascinata o copiata in altre celle" },
      { id: 'B', text: "Formatta il contenuto della cella in valuta Dollaro Statunitense" },
      { id: 'C', text: "Indica che la cella contiene un errore di divisione per zero" },
      { id: 'D', text: "Protegge la cella con una password a 8 caratteri" }
    ],
    correctAnswerId: 'A',
    explanation: "I riferimenti relativi (es. `A1`) si aggiornano traslando la formula; anteponendo il `$` si creano riferimenti assoluti (`$A$1`) o misti (`$A1`, `A$1`) che mantengono fisse colonna e/o riga durante il trascinamento.",
    hint: "Il dollaro '$' blocca colonna e/o riga rendendo il riferimento assoluto.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_055',
    question: "Quale formato standard internazionale aperto è progettato specificamente per l'archiviazione e conservazione digitale a lungo termine di documenti elettronici (preservandone resa visiva e metadati)?",
    options: [
      { id: 'A', text: "PDF/A (ISO 19005)" },
      { id: 'B', text: "DOCX" },
      { id: 'C', text: "RTF" },
      { id: 'D', text: "BMP" }
    ],
    correctAnswerId: 'A',
    explanation: "PDF/A (PDF for Archiving) è il formato aperto obbligatorio per la conservazione a norma nella PA: vieta elementi che compromettono la leggibilità futura (font non incorporati, codice JavaScript eseguibile, audio/video esterni).",
    hint: "Standard ISO per la conservazione a lungo termine dei documenti digitali della PA: PDF/A.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_056',
    question: "In Microsoft Word, qual è il vantaggio principale dell'utilizzo rigoroso degli 'Stili di testo' (Titolo 1, Titolo 2, Normale)?",
    options: [
      { id: 'A', text: "Garantire coerenza grafica all'intero documento, consentire la generazione automatica del sommario/indice e favorire l'accessibilità per i lettori di schermo (screen reader)" },
      { id: 'B', text: "Impedire che il file venga aperto su computer diversi" },
      { id: 'C', text: "Ridurre la dimensione del file Word del 90%" },
      { id: 'D', text: "Inviare automaticamente il documento alla stampante" }
    ],
    correctAnswerId: 'A',
    explanation: "Gli Stili strutturano semanticamente il documento: permettono di aggiornare l'aspetto tipografico globale con un solo clic, generano l'indice ipertestuale automatico e soddisfano i requisiti di accessibilità (L. 4/2004).",
    hint: "Strutturazione semantica, aggiornamento rapido e sommario automatico.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_057',
    question: "In Microsoft Word, a cosa serve la funzionalità di 'Stampa Unione' (Mail Merge)?",
    options: [
      { id: 'A', text: "A generare in serie documenti personalizzati (lettere, comunicazioni, etichette) unendo un testo modello a una sorgente dati strutturata (es. tabella Excel o database di indirizzi)" },
      { id: 'B', text: "A stampare due fogli contemporaneamente su due stampanti diverse" },
      { id: 'C', text: "A unire fisicamente due fogli di carta con la spillatrice" },
      { id: 'D', text: "A convertire un documento cartaceo in un file audio MP3" }
    ],
    correctAnswerId: 'A',
    explanation: "La Stampa Unione fonde un documento principale (con campi unione come `<<Nome>>`, `<<Indirizzo>>`) con un elenco dati, producendo comunicazioni personalizzate per migliaia di utenti.",
    hint: "Unione di un documento modello con un database/foglio Excel per invii massivi personalizzati.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_058',
    question: "In Excel, qual è il risultato della formula: =SE(E(10>5; 3<2); \"OK\"; \"KO\")?",
    options: [
      { id: 'A', text: "\"KO\"" },
      { id: 'B', text: "\"OK\"" },
      { id: 'C', text: "#VALORE!" },
      { id: 'D', text: "VERO" }
    ],
    correctAnswerId: 'A',
    explanation: "La funzione `E(condizione1; condizione2)` restituisce VERO solo se tutte le condizioni sono verificate. Qui 10>5 è VERO, ma 3<2 è FALSO. `E(...)` vale FALSO; quindi la funzione `SE(...)` restituisce il ramo falso: \"KO\".",
    hint: "La funzione logica E richiede che TUTTE le condizioni siano vere; poiché 3<2 è falsa, restituisce KO.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_059',
    question: "In Microsoft PowerPoint, qual è la funzione dello 'Schema diapositiva' (Slide Master)?",
    options: [
      { id: 'A', text: "La diapositiva principale di controllo che memorizza le informazioni di formattazione globale (sfondo, caratteri, colori, segnaposto e logo) applicate uniformemente a tutte le diapositive della presentazione" },
      { id: 'B', text: "L'indice alfabetico stampato sull'ultima pagina della dispensa" },
      { id: 'C', text: "Il telecomando Bluetooth per avanzare tra le slide" },
      { id: 'D', text: "Un cronometro per misurare il tempo di esposizione del relatore" }
    ],
    correctAnswerId: 'A',
    explanation: "Modificando lo Schema Diapositiva (Slide Master) si modificano layout, loghi istituzionali e font in tutte le slide della presentazione simultaneamente, preservando identità visiva e standard aziendali.",
    hint: "Modello globale master che definisce layout, colori e loghi per l'intera presentazione.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_060',
    question: "Cosa rappresenta l'errore '#N/D' (#N/A) in Microsoft Excel?",
    options: [
      { id: 'A', text: "Valore non disponibile (Not Available), tipicamente generato quando una funzione di ricerca (come CERCA.VERT o CONFRONTA) non trova il valore cercato nella matrice specificata" },
      { id: 'B', text: "La colonna è troppo stretta per visualizzare il numero" },
      { id: 'C', text: "Una divisione matematica per zero" },
      { id: 'D', text: "Il testo inserito contiene caratteri cinesi non riconosciuti" }
    ],
    correctAnswerId: 'A',
    explanation: "`#N/D` indica che la formula non trova una corrispondenza valida. Può essere gestito elegantemente con la funzione `=SE.NON.DISP(formula; valore_alternativo)` o `=SE.ERRORE(...)`.",
    hint: "Valore non disponibile: la ricerca non ha trovato alcun elemento corrispondente.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_061',
    question: "In Microsoft Excel, quale strumento consente di impostare regole di controllo sui dati digitati dagli utenti in una cella (es. accettare solo numeri compresi tra 1 e 100 o scegliere da un menu a tendina)?",
    options: [
      { id: 'A', text: "Convalida dati (Data Validation)" },
      { id: 'B', text: "Formattazione condizionale" },
      { id: 'C', text: "Raggruppa e struttura" },
      { id: 'D', text: "Trova e sostituisci" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo strumento Convalida Dati consente di limitare l'input degli operatori (elenchi a discesa, range numerici, date valide), mostrando messaggi di avviso o blocco per evitare errori di data entry.",
    hint: "Convalida dati permette di creare elenchi a tendina e verificare la correttezza dell'input.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_062',
    question: "Cosa fa la 'Formattazione condizionale' in Excel?",
    options: [
      { id: 'A', text: "Modifica automaticamente l'aspetto visivo delle celle (colore di sfondo, testo, barre dei dati o icone) in base al soddisfacimento di criteri o regole logiche sui valori contenuti" },
      { id: 'B', text: "Cancella le celle vuote all'uscita dal programma" },
      { id: 'C', text: "Formatta il computer se il file viene copiato su una chiavetta USB" },
      { id: 'D', text: "Calcola il codice fiscale del proprietario del computer" }
    ],
    correctAnswerId: 'A',
    explanation: "La Formattazione Condizionale colora istantaneamente celle in base a regole (es. evidenzia in rosso i valori negativi, in verde quelli sopra la media o applica scale cromatiche termiche).",
    hint: "Evidenziazione visiva e automatica delle celle che rispettano determinate condizioni.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_063',
    question: "Cosa sono le 'Macro' in Microsoft Office (Word, Excel) e quale linguaggio di scripting utilizzano nativamente?",
    options: [
      { id: 'A', text: "Sequenze di comandi e istruzioni registrate o programmate in Visual Basic for Applications (VBA) per automatizzare attività e calcoli ripetitivi" },
      { id: 'B', text: "Immagini di grandi dimensioni inserite come sfondo delle pagine" },
      { id: 'C', text: "Caratteri tipografici con corpo superiore a 48 punti" },
      { id: 'D', text: "File audio preregistrati da ascoltare durante la lettura" }
    ],
    correctAnswerId: 'A',
    explanation: "Le macro consentono l'automazione di flussi di lavoro complessi tramite VBA (Visual Basic for Applications); i file Excel contenenti macro hanno estensione `.xlsm`.",
    hint: "Automazione basata sul linguaggio Visual Basic for Applications (VBA).",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_064',
    question: "In Microsoft Word, a cosa serve la funzione 'Revisioni' (Track Changes)?",
    options: [
      { id: 'A', text: "A tenere traccia di tutte le modifiche, inserimenti, cancellazioni e commenti apportati al documento dai diversi collaboratori, consentendo all'autore di accettarle o rifiutarle singolarmente" },
      { id: 'B', text: "A verificare l'autenticità della licenza software con la casa produttrice" },
      { id: 'C', text: "A riparare gli errori di stampa della cartuccia d'inchiostro" },
      { id: 'D', text: "A cancellare tutte le parole che contengono errori ortografici" }
    ],
    correctAnswerId: 'A',
    explanation: "La modalità 'Revisioni' evidenzia visivamente le modifiche con colori distinti per ogni revisore (barrato per le eliminazioni, sottolineato per le aggiunte), facilitando il lavoro collaborativo sui testi normativi e relazioni.",
    hint: "Tiene traccia delle modifiche collaborative permettendo di accettarle o rifiutarle.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_065',
    question: "Quale formato di file aperto e basato su XML è lo standard nativo utilizzato per i documenti di testo in LibreOffice / OpenOffice Writer?",
    options: [
      { id: 'A', text: ".ODT (OpenDocument Text)" },
      { id: 'B', text: ".EXE" },
      { id: 'C', text: ".DLL" },
      { id: 'D', text: ".MP4" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo standard ODF (Open Document Format for Office Applications - ISO/IEC 26300) definisce le estensioni `.odt` per il testo, `.ods` per i fogli di calcolo e `.odp` per le presentazioni, ed è supportato nativamente anche da MS Office.",
    hint: "OpenDocument Text ha estensione .odt.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_066',
    question: "In Microsoft Excel, quale formula calcola la somma dei valori nell'intervallo C1:C50 SOLO per le righe in cui il corrispondente valore nella colonna A è uguale a 'INPS'?",
    options: [
      { id: 'A', text: "=SOMMA.SE(A1:A50; \"INPS\"; C1:C50)" },
      { id: 'B', text: "=SOMMA(A1:A50; C1:C50)" },
      { id: 'C', text: "=CONTA.SE(C1:C50; \"INPS\")" },
      { id: 'D', text: "=MEDIA.SE(A1:C50; \"INPS\")" }
    ],
    correctAnswerId: 'A',
    explanation: "`SOMMA.SE(intervallo_criterio; criterio; [intervallo_somma])` valuta la colonna A e, quando trova 'INPS', somma il valore corrispondente della colonna C.",
    hint: "Sintassi: =SOMMA.SE(intervallo; criterio; [intervallo_somma]).",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_067',
    question: "Cosa rappresenta l'errore '#RIF!' (#REF!) in Microsoft Excel?",
    options: [
      { id: 'A', text: "Riferimento di cella non valido, che si verifica tipicamente quando le celle o l'intera riga/colonna richiamate nella formula sono state eliminate fisicamente" },
      { id: 'B', text: "La formula contiene un errore di ortografia nel nome della funzione" },
      { id: 'C', text: "Il risultato della formula supera un miliardo di euro" },
      { id: 'D', text: "Il foglio di lavoro è protetto da un certificato digitale scaduto" }
    ],
    correctAnswerId: 'A',
    explanation: "`#RIF!` si genera quando una formula fa riferimento a una cella che è stata cancellata (o sovrascritta con un'operazione di incolla), rendendo impossibile il calcolo per mancanza del riferimento.",
    hint: "Riferimento non valido generato dall'eliminazione di righe o colonne coinvolte nella formula.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_068',
    question: "In Microsoft Word, qual è la funzione dell'interruzione di 'Sezione' rispetto a una semplice interruzione di 'Pagina'?",
    options: [
      { id: 'A', text: "L'interruzione di sezione consente di isolare parti del documento per applicare impostazioni di pagina indipendenti (es. orientamento orizzontale/verticale diverso, margini differenti, intestazioni e piè di pagina diversi o numerazione specifica)" },
      { id: 'B', text: "L'interruzione di sezione divide il documento in due file separati salvati sul desktop" },
      { id: 'C', text: "L'interruzione di sezione elimina automaticamente le immagini dalla pagina" },
      { id: 'D', text: "Non vi è alcuna differenza, producono esattamente lo stesso effetto" }
    ],
    correctAnswerId: 'A',
    explanation: "Una semplice interruzione di pagina sposta il testo alla pagina successiva mantenendo il layout globale; l'interruzione di sezione crea un blocco indipendente che può avere orientamento, margini e intestazioni completamente personalizzate.",
    hint: "La sezione permette di cambiare orientamento (es. orizzontale per tabelle larghe) o intestazioni.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OFF_069',
    question: "In Excel, cosa fa la combinazione di tasti 'F4' quando si sta editando una formula all'interno della barra della formula?",
    options: [
      { id: 'A', text: "Cicla ciclicamente il tipo di riferimento della cella selezionata tra relativo (A1), assoluto ($A$1), misto con riga fissa (A$1) e misto con colonna fissa ($A1)" },
      { id: 'B', text: "Cancella l'intero foglio di calcolo" },
      { id: 'C', text: "Formatta il testo in grassetto e sottolineato" },
      { id: 'D', text: "Chiude immediatamente il programma senza salvare" }
    ],
    correctAnswerId: 'A',
    explanation: "Premendo F4 sul riferimento di cella vengono aggiunti/rimossi i caratteri `$`, passando rapidamente da relativo ad assoluto o misto.",
    hint: "Scorciatoia magica per aggiungere o togliere il '$' nei riferimenti di cella.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_070',
    question: "In Microsoft Outlook, qual è la differenza tra i campi 'CC' (Copia Carbone) e 'CCN' (Copia Carbone Nascosta / BCC)?",
    options: [
      { id: 'A', text: "I destinatari in CC sono visibili a tutti i partecipanti al messaggio; gli indirizzi inseriti in CCN sono totalmente nascosti e invisibili agli altri destinatari, a tutela della privacy" },
      { id: 'B', text: "I messaggi inviati in CCN hanno una tariffa postale aggiuntiva" },
      { id: 'C', text: "I messaggi in CC possono essere letti solo su smartphone" },
      { id: 'D', text: "Il campo CCN può contenere al massimo un singolo indirizzo email" }
    ],
    correctAnswerId: 'A',
    explanation: "L'uso del CCN (BCC) è obbligatorio quando si inviano comunicazioni massive a terzi per non violare il GDPR, evitando che gli indirizzi personali siano visibili agli altri riceventi.",
    hint: "CCN nasconde gli indirizzi agli altri destinatari per tutelare la privacy.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_071',
    question: "In Excel, quale funzione restituisce la data odierna del computer senza specificare l'orario, aggiornandosi dinamicamente ad ogni ricalcolo?",
    options: [
      { id: 'A', text: "=OGGI()" },
      { id: 'B', text: "=ADESSO()" },
      { id: 'C', text: "=DATA()" },
      { id: 'D', text: "=ANNO()" }
    ],
    correctAnswerId: 'A',
    explanation: "`=OGGI()` restituisce solo la data corrente (es. 16/09/2026); `=ADESSO()` restituisce sia la data sia l'ora corrente.",
    hint: "OGGI() per la sola data corrente; ADESSO() include anche l'ora.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_072',
    question: "Cosa si intende per 'Riferimento circolare' in Microsoft Excel?",
    options: [
      { id: 'A', text: "Una situazione anomala in cui una formula fa riferimento direttamente o indirettamente alla cella in cui risiede la formula stessa, generando un calcolo infinito non risolvibile" },
      { id: 'B', text: "Un grafico a torta perfettamente rotondo" },
      { id: 'C', text: "Una circolare amministrativa inviata a tutte le sedi regionali" },
      { id: 'D', text: "Una tabella che contiene più di cento colonne" }
    ],
    correctAnswerId: 'A',
    explanation: "Se nella cella A1 scriviamo `=A1 + 10`, Excel avvisa della presenza di un riferimento circolare perché la cella dipende dal proprio stesso risultato.",
    hint: "Una formula che include nel proprio calcolo la cella in cui è scritta.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_073',
    question: "In Microsoft PowerPoint, qual è la funzione delle 'Note del relatore' (Presenter Notes)?",
    options: [
      { id: 'A', text: "Testi e appunti di supporto visibili solo al relatore sul proprio schermo durante la presentazione in modalità relatore, ma nascosti al pubblico che visualizza la proiezione" },
      { id: 'B', text: "Note musicali suonate al cambio di ogni slide" },
      { id: 'C', text: "I voti assegnati dalla commissione esaminatrice al candidato" },
      { id: 'D', text: "Un sommario obbligatorio da stampare su pergamena" }
    ],
    correctAnswerId: 'A',
    explanation: "La vista relatore sfrutta il doppio monitor: il pubblico vede la slide pulita sul proiettore, mentre il relatore legge appunti, slide successiva e cronometro sullo schermo del portatile.",
    hint: "Appunti visibili solo sullo schermo del presentatore durante la proiezione.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_074',
    question: "Quale funzione di Excel conta quante celle all'interno di un intervallo contengono numeri (ignorando celle vuote e celle con testo)?",
    options: [
      { id: 'A', text: "=CONTA.NUMERI()" },
      { id: 'B', text: "=CONTA.VALORI()" },
      { id: 'C', text: "=CONTA.SE()" },
      { id: 'D', text: "=SOMMA()" }
    ],
    correctAnswerId: 'A',
    explanation: "`CONTA.NUMERI()` (COUNT) conta solo le celle che contengono valori numerici o date; `CONTA.VALORI()` (COUNTA) conta tutte le celle non vuote (inclusi testi ed errori).",
    hint: "CONTA.NUMERI conta solo i numeri; CONTA.VALORI conta tutte le celle piene.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_075',
    question: "In Microsoft Word, come si inserisce una nota che viene visualizzata in calce alla pagina corrente rispetto a una 'Nota di chiusura'?",
    options: [
      { id: 'A', text: "Inserendo una 'Nota a piè di pagina' (Footnote), che appare in fondo alla medesima pagina, mentre la nota di chiusura (Endnote) viene posizionata alla fine dell'intero documento o della sezione" },
      { id: 'B', text: "Disegnando una casella di testo a mano con il mouse" },
      { id: 'C', text: "Cambiando il colore del testo in giallo" },
      { id: 'D', text: "Premendo dieci volte il tasto Invio" }
    ],
    correctAnswerId: 'A',
    explanation: "Le note a piè di pagina (Footnotes) si collocano alla base della pagina in cui si trova il rimando; le note di chiusura (Endnotes) si accumulano alla fine del documento.",
    hint: "Nota a piè di pagina = fondo pagina corrente; Nota di chiusura = fine documento.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_076',
    question: "Cosa si intende per 'CSV' (Comma-Separated Values)?",
    options: [
      { id: 'A', text: "Un formato di file di testo semplice aperto utilizzato per lo scambio di dati tabulari, in cui ogni riga rappresenta un record e i campi sono separati da un carattere delimitatore (solitamente virgola o punto e virgola)" },
      { id: 'B', text: "Un algoritmo di compressione video ad alta definizione" },
      { id: 'C', text: "Un protocollo di autenticazione biometrica per smartphone" },
      { id: 'D', text: "Il codice di sicurezza a tre cifre stampato sul retro delle carte di credito" }
    ],
    correctAnswerId: 'A',
    explanation: "CSV è il formato di interscambio universale tra banche dati e fogli di calcolo: è leggibile con qualsiasi editor di testo e facilmente importabile/esportabile in Excel e database relazionali.",
    hint: "File di testo delimitato da virgole o punti e virgola per lo scambio di dati tabulari.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_077',
    question: "In Excel, cosa fa lo strumento 'Blocca riquadri' (Freeze Panes)?",
    options: [
      { id: 'A', text: "Mantiene visibili le righe di intestazione o le prime colonne durante lo scorrimento (scrolling) verticale o orizzontale del foglio di lavoro" },
      { id: 'B', text: "Protegge il computer dal surriscaldamento estivo" },
      { id: 'C', text: "Impedisce la stampa del file su carta chimica" },
      { id: 'D', text: "Crittografa le celle con password a 128 bit" }
    ],
    correctAnswerId: 'A',
    explanation: "Blocca Riquadri consente di scorrere tabelle enormi senza perdere di vista le etichette delle intestazioni di colonna o la prima colonna con i nominativi.",
    hint: "Blocca righe e colonne di intestazione durante lo scorrimento del foglio.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_078',
    question: "In Microsoft Access, cosa rappresenta la 'Chiave Primaria' (Primary Key) di una tabella?",
    options: [
      { id: 'A', text: "Un campo o combinazione di campi che identifica in modo univoco e non duplicabile ciascun record all'interno della tabella (non può contenere valori nulli)" },
      { id: 'B', text: "La password per sbloccare il computer dell'ufficio" },
      { id: 'C', text: "Il primo campo di testo creato durante l'installazione del software" },
      { id: 'D', text: "Un cavo metallico per fissare il case alla scrivania" }
    ],
    correctAnswerId: 'A',
    explanation: "La Primary Key garantisce l'integrità dell'entità nel modello relazionale: identifica univocamente la riga (es. Codice Fiscale, Matricola dipendente) ed è indicizzata univocamente.",
    hint: "Identificatore univoco e non nullo di ciascun record della tabella.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_079',
    question: "In Excel, quale funzione estrae un numero specificato di caratteri da una stringa di testo a partire da una posizione iniziale prefissata?",
    options: [
      { id: 'A', text: "=STRINGA.ESTRAI() (MID)" },
      { id: 'B', text: "=LUNGHEZZA() (LEN)" },
      { id: 'C', text: "=ANNULLA.SPAZI() (TRIM)" },
      { id: 'D', text: "=SOSTITUISCI() (SUBSTITUTE)" }
    ],
    correctAnswerId: 'A',
    explanation: "`=STRINGA.ESTRAI(testo; inizio; num_caratteri)` estrae una sottostringa partendo dalla posizione indicata (es. per estrarre l'anno o mese dal codice fiscale).",
    hint: "STRINGA.ESTRAI estrae caratteri dal centro del testo specificando la posizione di partenza.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_080',
    question: "Cosa accade quando si applica la funzione 'Rimuovi duplicati' in una tabella di Microsoft Excel?",
    options: [
      { id: 'A', text: "Excel elimina definitivamente le righe identiche in base alle colonne selezionate, mantenendo solo la prima istanza del record trovato" },
      { id: 'B', text: "Le righe duplicate vengono evidenziate con testo lampeggiante" },
      { id: 'C', text: "I dati duplicati vengono spostati in un nuovo file sul Desktop" },
      { id: 'D', text: "Le celle duplicate vengono sostituite con il numero zero" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo strumento Rimuovi Duplicati esamina le colonne spuntate e cancella fisicamente le righe duplicate ridondanti, lasciando unicamente i record distinti univoci.",
    hint: "Cancella le righe duplicate lasciando una sola istanza del record.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_081',
    question: "In Microsoft Word, quale scorciatoia da tastiera standard permette di selezionare istantaneamente tutto il contenuto del documento?",
    options: [
      { id: 'A', text: "Ctrl + 5 (del tastierino) oppure Ctrl + A (nella versione inglese) / Ctrl + T (nella versione italiana)" },
      { id: 'B', text: "Alt + F4" },
      { id: 'C', text: "Ctrl + Z" },
      { id: 'D', text: "Shift + Esc" }
    ],
    correctAnswerId: 'A',
    explanation: "In Word in italiano la scorciatoia classica è `Ctrl + 5` (sul tastierino numerico disattivato) o `Ctrl + T` (seleziona tutto), corrispondente a `Ctrl + A` (Select All) nelle versioni internazionali.",
    hint: "Seleziona tutto il testo del documento.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_082',
    question: "Cosa fa la funzione '=TESTO()' in Microsoft Excel?",
    options: [
      { id: 'A', text: "Converte un valore numerico in una stringa di testo applicando una formattazione specifica (es. date, percentuali, valuta) definita tramite un codice di formato" },
      { id: 'B', text: "Legge ad alta voce il testo tramite sintetizzatore vocale" },
      { id: 'C', text: "Conta le parole presenti all'interno del foglio" },
      { id: 'D', text: "Invia un messaggio SMS al numero memorizzato nella cella" }
    ],
    correctAnswerId: 'A',
    explanation: "`=TESTO(A1; \"gg/mm/aaaa\")` o `=TESTO(B1; \"€ #.##0,00\")` trasforma il numero in testo con il formato desiderato, utile per concatenare numeri e date all'interno di frasi.",
    hint: "Formatta un numero o data e lo restituisce come stringa di testo.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OFF_083',
    question: "In Microsoft Access, cosa stabilisce l'opzione 'Integrità referenziale' tra due tabelle collegate da una relazione uno-a-molti?",
    options: [
      { id: 'A', text: "Impedisce l'inserimento di record nella tabella 'molti' privi di una chiave esterna corrispondente valida nella tabella 'uno', e impedisce la cancellazione di record 'padre' che hanno figli collegati (salvo eliminazione a catena)" },
      { id: 'B', text: "Raddoppia la velocità del disco fisso durante le query" },
      { id: 'C', text: "Formatta automaticamente le tabelle con caratteri Arial" },
      { id: 'D', text: "Permette di condividere il database solo su computer Apple" }
    ],
    correctAnswerId: 'A',
    explanation: "L'integrità referenziale garantisce che le relazioni tra tabelle rimangano coerenti: evita record 'orfani' (es. un pagamento associato a un cittadino non presente nell'anagrafica).",
    hint: "Regola che impedisce la creazione di record orfani nelle relazioni tra tabelle.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OFF_084',
    question: "Quale combinazione di tasti permette di incollare solo i 'Valori' calcolati in Excel senza incollare formule o formattazione?",
    options: [
      { id: 'A', text: "Incolla speciale -> Valori (Ctrl + Alt + V, poi V)" },
      { id: 'B', text: "Ctrl + V semplice" },
      { id: 'C', text: "Ctrl + X" },
      { id: 'D', text: "Shift + Canc" }
    ],
    correctAnswerId: 'A',
    explanation: "L'opzione Incolla Speciale (Valori) converte formule dinamiche nei loro risultati statici, essenziale prima di cancellare le colonne di supporto da cui dipendeva il calcolo.",
    hint: "Incolla Speciale -> Valori.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_085',
    question: "In Microsoft Word, cosa indica il carattere speciale invisibile 'Pilcrow' (¶) visualizzabile premendo il pulsante 'Mostra tutto'?",
    options: [
      { id: 'A', text: "La fine di un paragrafo (generata premendo il tasto Invio)" },
      { id: 'B', text: "La presenza di un virus nel documento" },
      { id: 'C', text: "Un errore di ortografia non correggibile" },
      { id: 'D', text: "Un'interruzione di corrente imminente" }
    ],
    correctAnswerId: 'A',
    explanation: "Il simbolo ¶ (piede di mosca) delimita i paragrafi in Word: memorizza le impostazioni di formattazione del paragrafo precedente (allineamento, interlinea, rientri).",
    hint: "Simbolo di fine paragrafo (tasto Invio).",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_086',
    question: "In Excel, quale funzione restituisce il numero di caratteri totali contenuti in una cella di testo (inclusi spazi e punteggiatura)?",
    options: [
      { id: 'A', text: "=LUNGHEZZA() (LEN)" },
      { id: 'B', text: "=CONTA.LETTERE()" },
      { id: 'C', text: "=DIMENSIONE()" },
      { id: 'D', text: "=CALCOLA.CARATTERI()" }
    ],
    correctAnswerId: 'A',
    explanation: "`=LUNGHEZZA(\"INPS 2026\")` restituisce 9 (4 lettere + 1 spazio + 4 cifre). È usata per verificare che codici fiscali o IBAN abbiano il numero corretto di caratteri.",
    hint: "Funzione LUNGHEZZA (LEN) per contare i caratteri di una cella.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_087',
    question: "Cosa fa lo strumento 'Filtro avanzato' in Microsoft Excel rispetto al 'Filtro automatico' classico?",
    options: [
      { id: 'A', text: "Consente di impostare criteri complessi distribuiti su più righe e colonne (con logica E su stessa riga e logica O su righe diverse) e di copiare i risultati filtrati in un'altra posizione del foglio" },
      { id: 'B', text: "Elimina le email spam dalla casella di posta" },
      { id: 'C', text: "Blocca l'accesso alle celle con password crittografica" },
      { id: 'D', text: "Formatta le celle in grassetto corsivo" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Filtro Avanzato legge un intervallo criteri separato: righe diverse corrispondono a condizioni OR, colonne diverse sulla stessa riga a condizioni AND, permettendo di estrarre elenchi univoci ovunque.",
    hint: "Permette criteri logici complessi E/O scritti su un intervallo criteri dedicato.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OFF_088',
    question: "In Microsoft PowerPoint, qual è la differenza tra una 'Transizione' e un''Animazione'?",
    options: [
      { id: 'A', text: "La transizione è l'effetto visivo che si verifica nel passaggio da una diapositiva all'altra; l'animazione è l'effetto applicato ai singoli elementi (testo, immagini, forme) all'interno della stessa diapositiva" },
      { id: 'B', text: "L'animazione riguarda solo i suoni, la transizione solo i colori" },
      { id: 'C', text: "Le transizioni possono essere inserite solo nei file Excel" },
      { id: 'D', text: "Non vi è alcuna differenza tra i due concetti" }
    ],
    correctAnswerId: 'A',
    explanation: "Transizione = cambio slide (es. dissolvenza, scorrimento tra slide). Animazione = movimento o comparsa degli oggetti interni (es. entrata testo a cascata).",
    hint: "Transizione tra diapositive diverse; animazione sugli oggetti interni alla slide.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_089',
    question: "Quale funzione di Excel rimuove automaticamente tutti gli spazi iniziali, finali e gli spazi doppi tra le parole in una stringa di testo?",
    options: [
      { id: 'A', text: "=ANNULLA.SPAZI() (TRIM)" },
      { id: 'B', text: "=PULISCI() (CLEAN)" },
      { id: 'C', text: "=ELIMINA.SPAZI()" },
      { id: 'D', text: "=COMPRIMI()" }
    ],
    correctAnswerId: 'A',
    explanation: "`=ANNULLA.SPAZI(A1)` ripulisce le stringhe importate da gestionali o database, rimuovendo spazi spuri all'inizio, alla fine e riducendo gli spazi multipli interni a un singolo spazio.",
    hint: "ANNULLA.SPAZI (TRIM) per ripulire spazi in eccesso.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_090',
    question: "In Excel, cosa restituisce la formula: =CONCAT(\"Funzionario \"; \"PECS \"; 2026)?",
    options: [
      { id: 'A', text: "\"Funzionario PECS 2026\"" },
      { id: 'B', text: "#NOME?" },
      { id: 'C', text: "\"FunzionarioPECS2026\"" },
      { id: 'D', text: "2026" }
    ],
    correctAnswerId: 'A',
    explanation: "`CONCAT` unisce stringhe e numeri in un'unica stringa continua, preservando gli spazi interni dichiarati tra virgolette.",
    hint: "Unisce le stringhe nell'ordine specificato.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_091',
    question: "In Microsoft Word, come si imposta un'interruzione di pagina forzata tramite scorciatoia da tastiera?",
    options: [
      { id: 'A', text: "Ctrl + Invio (Enter)" },
      { id: 'B', text: "Shift + Spazio" },
      { id: 'C', text: "Alt + Tab" },
      { id: 'D', text: "Ctrl + Z" }
    ],
    correctAnswerId: 'A',
    explanation: "Premere `Ctrl + Invio` inserisce immediatamente un'interruzione di pagina, spostando il cursore all'inizio della pagina successiva senza dover premere ripetutamente Invio.",
    hint: "Ctrl + Invio per andare a una nuova pagina istantaneamente.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_092',
    question: "Cosa fa lo strumento 'Trova obiettivo' (Goal Seek) in Microsoft Excel?",
    options: [
      { id: 'A', text: "Calcola all'indietro il valore di input necessario in una cella per ottenere un risultato desiderato prefissato in una cella contenente una formula (analisi di simulazione what-if a variabile singola)" },
      { id: 'B', text: "Individua le parole con errori grammaticali nel foglio" },
      { id: 'C', text: "Imposta gli obiettivi di carriera del personale dell'ufficio" },
      { id: 'D', text: "Verifica che il mouse funzioni regolarmente" }
    ],
    correctAnswerId: 'A',
    explanation: "Goal Seek risolve equazioni per tentativi: dato il risultato desiderato di una formula (es. rata del prestito = 500€), trova il valore che deve assumere l'input (es. capitale finanziabile).",
    hint: "Analisi what-if a ritroso per trovare il valore di input che dà il risultato desiderato.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OFF_093',
    question: "In Microsoft Access, cosa si intende per 'Maschera' (Form)?",
    options: [
      { id: 'A', text: "Un'interfaccia grafica user-friendly progettata per visualizzare, inserire e modificare comodamente i dati delle tabelle e query sottostanti, senza interagire direttamente con la griglia dei dati grezzi" },
      { id: 'B', text: "Un filtro per la polvere da applicare al computer" },
      { id: 'C', text: "La password per accedere come amministratore" },
      { id: 'D', text: "Un modulo cartaceo da compilare a penna" }
    ],
    correctAnswerId: 'A',
    explanation: "Le maschere in Access fungono da interfaccia utente: contengono pulsanti, caselle combinate, controlli convalidati e sottomaschere per facilitare il data entry e migliorare l'usabilità.",
    hint: "Interfaccia grafica per l'inserimento e la visualizzazione amichevole dei dati.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_094',
    question: "In Excel, cosa permette di fare la funzionalità 'Testo in colonne' (Text to Columns)?",
    options: [
      { id: 'A', text: "Suddividere il contenuto di una singola colonna di testo in più colonne separate in base a un delimitatore (es. tabulazione, punto e virgola, virgola, spazio) o a larghezza fissa" },
      { id: 'B', text: "Colorare il testo con caratteri multicolore" },
      { id: 'C', text: "Ruotare il testo verticalmente di 90 gradi" },
      { id: 'D', text: "Cancellare le prime tre colonne del foglio di calcolo" }
    ],
    correctAnswerId: 'A',
    explanation: "Testo in Colonne è fondamentale per importare dati non strutturati (es. campi 'Cognome Nome' o stringhe CSV) separandoli rapidamente in colonne distinte.",
    hint: "Separa una singola stringa in più colonne basandosi su un delimitatore.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_095',
    question: "In Microsoft Excel, quale formula restituisce il valore MASSIMO presente nell'intervallo B2:B100?",
    options: [
      { id: 'A', text: "=MAX(B2:B100)" },
      { id: 'B', text: "=SUPERIORE(B2:B100)" },
      { id: 'C', text: "=GRANDE(B2:B100)" },
      { id: 'D', text: "=TOP(B2:B100)" }
    ],
    correctAnswerId: 'A',
    explanation: "`=MAX(intervallo)` restituisce il valore numerico più alto; `=MIN(intervallo)` restituisce il valore più basso.",
    hint: "La funzione standard per il valore massimo è =MAX().",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_096',
    question: "In Microsoft Word, a cosa serve il 'Pannello di navigazione' (Navigation Pane)?",
    options: [
      { id: 'A', text: "Visualizzare la struttura dei titoli del documento (basata sugli stili), consentendo di saltare rapidamente da un capitolo all'altro, riorganizzare intere sezioni trascinandole e cercare termini nel testo" },
      { id: 'B', text: "Mostrare le previsioni meteo della città di residenza" },
      { id: 'C', text: "Configurare la connessione Wi-Fi aziendale" },
      { id: 'D', text: "Stampare le diapositive in formato opuscolo" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Pannello di Navigazione (apribile con `Ctrl + F`) mostra l'albero gerarchico dei Titoli: permette di scorrere agevolmente documenti di centinaia di pagine e spostare sezioni intere col drag-and-drop.",
    hint: "Mostra l'albero dei titoli per navigare rapidamente in documenti complessi.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_097',
    question: "Quale funzione di Excel conta le celle vuote presenti all'interno dell'intervallo specificato?",
    options: [
      { id: 'A', text: "=CONTA.VUOTE() (COUNTBLANK)" },
      { id: 'B', text: "=CONTA.ZERO()" },
      { id: 'C', text: "=VUOTE()" },
      { id: 'D', text: "=NESSUN.DATO()" }
    ],
    correctAnswerId: 'A',
    explanation: "`=CONTA.VUOTE(A1:A50)` restituisce il numero di celle prive di qualsiasi contenuto all'interno dell'intervallo specificato.",
    hint: "CONTA.VUOTE conta specificamente le celle prive di dati.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_098',
    question: "In Microsoft Access, cosa rappresenta un 'Report' (Rapporto)?",
    options: [
      { id: 'A', text: "Un oggetto formattato per organizzare, riassumere e presentare i dati di tabelle o query in modo ottimizzato per la stampa cartacea o l'esportazione in formato PDF" },
      { id: 'B', text: "Un allarme di sicurezza inviato via email al responsabile IT" },
      { id: 'C', text: "Il log delle ore di straordinario dei programmatori" },
      { id: 'D', text: "Una cartella contenente file di backup non compressi" }
    ],
    correctAnswerId: 'A',
    explanation: "I Report servono per la stampa e la rendicontazione: impaginano dati raggruppati con intestazioni, totalizzatori di gruppo e piè di pagina formattati per documenti cartacei o PDF ufficiali.",
    hint: "Oggetto di Access ottimizzato per la formattazione e la stampa cartacea/PDF dei dati.",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_099',
    question: "In Excel, cosa fa la funzione '=MAIUSC.INIZ()' (PROPER)?",
    options: [
      { id: 'A', text: "Converte in maiuscolo la prima lettera di ciascuna parola presente nella stringa di testo, trasformando tutte le altre lettere in minuscolo" },
      { id: 'B', text: "Converte l'intero testo in lettere tutte maiuscole" },
      { id: 'C', text: "Converte l'intero testo in lettere tutte minuscole" },
      { id: 'D', text: "Cancella le lettere maiuscole dalla cella" }
    ],
    correctAnswerId: 'A',
    explanation: "`=MAIUSC.INIZ(\"mario rossi\")` restituisce `\"Mario Rossi\"`. È ideale per uniformare nominativi di persone, vie o città scritti in modo disomogeneo.",
    hint: "Prima lettera di ogni parola in maiuscolo (Mario Rossi).",
    level: "base"
  },
  {
    id: 'Q_INF_OFF_100',
    question: "Qual è il formato standard per i modelli predefiniti riutilizzabili di Microsoft Word ed Excel?",
    options: [
      { id: 'A', text: ".dotx (per Word) e .xltx (per Excel)" },
      { id: 'B', text: ".exe e .bat" },
      { id: 'C', text: ".mp3 e .wav" },
      { id: 'D', text: ".sys e .ini" }
    ],
    correctAnswerId: 'A',
    explanation: "I file modello (Template) hanno estensione con la 't' finale: `.dotx` per Word e `.xltx` per Excel. Facendo doppio clic su di essi, il software apre un nuovo documento senza intaccare il modello originale.",
    hint: "Modelli: .dotx per Word, .xltx per Excel (la 't' sta per template).",
    level: "base"
  }
];

// Append to office.json
const offPath = path.join(__dirname, '../public/db/master_bank/informatica/office.json');
const offData = JSON.parse(fs.readFileSync(offPath, 'utf8'));
offData.push(...offQuestions);

const letters = ['A', 'B', 'C', 'D'];
offData.forEach((q, idx) => {
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

fs.writeFileSync(offPath, JSON.stringify(offData, null, 2), 'utf8');
const offCounts = { A: 0, B: 0, C: 0, D: 0 };
offData.forEach(q => offCounts[q.correctAnswerId]++);
console.log('Office updated! Total:', offData.length, 'Counts:', offCounts);

// Now Reti Questions (Q_INF_NET_051 to 100)
const netQuestions = [
  {
    id: 'Q_INF_NET_051',
    question: "Nel modello ISO/OSI a 7 livelli, qual è il livello responsabile dell'instradamento (routing) dei pacchetti attraverso reti eterogenee mediante indirizzamento logico?",
    options: [
      { id: 'A', text: "Livello 3 - Rete (Network Layer)" },
      { id: 'B', text: "Livello 2 - Collegamento Dati (Data Link Layer)" },
      { id: 'C', text: "Livello 4 - Trasporto (Transport Layer)" },
      { id: 'D', text: "Livello 7 - Applicazione (Application Layer)" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Livello 3 (Rete) gestisce l'indirizzamento logico (IP) e l'instradamento (routing) tra reti diverse tramite router; il Livello 2 (Data Link) gestisce indirizzi fisici MAC e frame su rete locale.",
    hint: "Routing e indirizzi IP operano al Livello 3 (Rete) del modello OSI.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_052',
    question: "Quale meccanismo di sincronizzazione a tre vie (Three-Way Handshake) stabilisce una connessione affidabile nel protocollo TCP prima dello scambio dei dati?",
    options: [
      { id: 'A', text: "SYN -> SYN-ACK -> ACK" },
      { id: 'B', text: "PING -> PONG -> ECHO" },
      { id: 'C', text: "HELLO -> CONNECT -> OK" },
      { id: 'D', text: "REQUEST -> CONFIRM -> FIN" }
    ],
    correctAnswerId: 'A',
    explanation: "Il client invia SYN (sincronizza numero di sequenza); il server risponde con SYN-ACK; il client conferma con ACK. Solo dopo questo handshake a 3 vie la connessione TCP è considerata stabilita (ESTABLISHED).",
    hint: "SYN, SYN-ACK, ACK: il classico three-way handshake di TCP.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_053',
    question: "Qual è la differenza fondamentale tra il protocollo di trasporto TCP e il protocollo UDP?",
    options: [
      { id: 'A', text: "TCP è orientato alla connessione, garantisce la consegna ordinata e affidabile dei pacchetti con ritrasmissione e controllo di flusso; UDP è privo di connessione (connectionless) e non garantisce consegna né ordine, offrendo minima latenza" },
      { id: 'B', text: "UDP può essere utilizzato solo per inviare email testuali" },
      { id: 'C', text: "TCP non funziona sulle reti in fibra ottica" },
      { id: 'D', text: "UDP supporta la crittografia quantistica a 512 bit" }
    ],
    correctAnswerId: 'A',
    explanation: "TCP garantisce affidabilità (usato per web, email, banche dati); UDP elimina handshake e riscontri di ricezione per minimizzare il ritardo (usato per DNS, streaming video, VoIP e gaming).",
    hint: "TCP è affidabile e orientato alla connessione; UDP è veloce e senza riscontri.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_054',
    question: "In notazione CIDR IPv4, quanti indirizzi IP utilizzabili per gli host fornisce una subnet con prefisso '/24' (es. 192.168.1.0/24)?",
    options: [
      { id: 'A', text: "254 indirizzi (su 256 totali, sottraendo indirizzo di rete e broadcast)" },
      { id: 'B', text: "256 indirizzi tutti utilizzabili" },
      { id: 'C', text: "128 indirizzi" },
      { id: 'D', text: "512 indirizzi" }
    ],
    correctAnswerId: 'A',
    explanation: "Una /24 riserva 8 bit per gli host: 2^8 = 256 indirizzi totali. Sottraendo l'indirizzo di rete (il primo, .0) e l'indirizzo di broadcast (l'ultimo, .255), restano 254 indirizzi assegnabili agli host.",
    hint: "256 totali meno l'indirizzo di rete e il broadcast = 254 indirizzi utili.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_055',
    question: "Quale protocollo risolve l'indirizzo logico IP di un host nel corrispondente indirizzo fisico hardware (MAC address) all'interno di una rete locale ethernet?",
    options: [
      { id: 'A', text: "ARP (Address Resolution Protocol)" },
      { id: 'B', text: "DHCP" },
      { id: 'C', text: "DNS" },
      { id: 'D', text: "ICMP" }
    ],
    correctAnswerId: 'A',
    explanation: "Quando un computer deve inviare un frame a un IP della stessa sottorete, invia una richiesta broadcast ARP ('Chi ha questo IP?'); l'host destinatario risponde con il proprio indirizzo MAC univoco.",
    hint: "ARP converte l'indirizzo IP in indirizzo fisico MAC.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_056',
    question: "Che cosa sono le 'VLAN' (Virtual Local Area Network - IEEE 802.1Q)?",
    options: [
      { id: 'A', text: "Reti logiche indipendenti create all'interno della medesima infrastruttura fisica di switch, che segmentano il dominio di broadcast e isolano il traffico tra uffici diversi per sicurezza ed efficienza" },
      { id: 'B', text: "Cavi di rete invisibili che funzionano a raggi ultravioletti" },
      { id: 'C', text: "Connessioni internet satellitari ad uso esclusivo dell'esercito" },
      { id: 'D', text: "Hard disk virtuali condivisi su cloud" }
    ],
    correctAnswerId: 'A',
    explanation: "Le VLAN segmentano gli switch fisici in più domini di broadcast separati (es. VLAN Uffici, VLAN Server, VLAN Ospiti). La comunicazione tra VLAN diverse richiede obbligatoriamente un router (routing inter-VLAN).",
    hint: "Segmentazione logica di una rete fisica su switch per separare broadcast e sicurezza.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_057',
    question: "A quale livello del modello ISO/OSI opera uno Switch Ethernet standard Layer 2?",
    options: [
      { id: 'A', text: "Livello 2 - Collegamento Dati (Data Link)" },
      { id: 'B', text: "Livello 3 - Rete (Network)" },
      { id: 'C', text: "Livello 1 - Fisico (Physical)" },
      { id: 'D', text: "Livello 5 - Sessione (Session)" }
    ],
    correctAnswerId: 'A',
    explanation: "Uno switch di livello 2 instrada i frame ethernet esaminando gli indirizzi MAC memorizzati nella sua tabella CAM (Content Addressable Memory), senza interpretare indirizzi IP.",
    hint: "Lo switch L2 opera al livello 2 (Data Link) basandosi sugli indirizzi MAC.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_058',
    question: "Quale protocollo di gestione della rete assegna automaticamente e dinamicamente parametri di configurazione IP (indirizzo, subnet mask, default gateway, DNS) ai dispositivi client al momento della connessione?",
    options: [
      { id: 'A', text: "DHCP (Dynamic Host Configuration Protocol)" },
      { id: 'B', text: "SNMP" },
      { id: 'C', text: "NTP" },
      { id: 'D', text: "TFTP" }
    ],
    correctAnswerId: 'A',
    explanation: "DHCP automatizza la configurazione IP dei client attraverso il processo a 4 fasi DORA: Discover, Offer, Request, Acknowledge, evitando configurazioni manuali ed errori di duplicazione IP.",
    hint: "Assegnazione automatica degli indirizzi IP = DHCP (processo DORA).",
    level: "base"
  },
  {
    id: 'Q_INF_NET_059',
    question: "Qual è la lunghezza e la struttura di un indirizzo IPv6 rispetto a un indirizzo IPv4?",
    options: [
      { id: 'A', text: "IPv6 ha una lunghezza di 128 bit (scritto in 8 gruppi di 4 cifre esadecimali separati da due punti), mentre IPv4 è lungo 32 bit (4 ottetti decimali separati da punti)" },
      { id: 'B', text: "IPv6 è lungo 64 bit ed è identico al codice MAC" },
      { id: 'C', text: "IPv4 e IPv6 hanno entrambi 128 bit ma usano alfabeti diversi" },
      { id: 'D', text: "IPv6 è lungo solo 16 bit per velocizzare i router" }
    ],
    correctAnswerId: 'A',
    explanation: "Per superare l'esaurimento dei circa 4,3 miliardi di indirizzi IPv4 a 32 bit, IPv6 adotta indirizzi a 128 bit (pari a 3,4 * 10^38 indirizzi univoci), eliminando la necessità di NAT.",
    hint: "IPv4 = 32 bit (decimale puntato); IPv6 = 128 bit (esadecimale a blocchi).",
    level: "base"
  },
  {
    id: 'Q_INF_NET_060',
    question: "In una rete TCP/IP, qual è il compito del 'Default Gateway' configurato su un computer client?",
    options: [
      { id: 'A', text: "È l'indirizzo IP del router locale a cui il computer invia tutti i pacchetti destinati a reti esterne e non appartenenti alla propria subnet locale" },
      { id: 'B', text: "Il server che assegna le password di posta elettronica" },
      { id: 'C', text: "La presa a muro in cui viene inserito il cavo di rete" },
      { id: 'D', text: "Il monitor del computer di controllo della sicurezza" }
    ],
    correctAnswerId: 'A',
    explanation: "Se la destinazione è fuori dalla subnet locale (verificato confrontando l'IP con la subnet mask), l'host inoltra il pacchetto al Default Gateway (il router) per l'instradamento verso internet o altre reti.",
    hint: "Punto di uscita obbligato (il router) per inviare traffico all'esterno della propria subnet.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_061',
    question: "Quale protocollo di sicurezza garantisce la riservatezza e l'integrità delle comunicazioni web HTTPS cifrando il canale di trasporto tra browser e server web?",
    options: [
      { id: 'A', text: "TLS 1.3 (Transport Layer Security)" },
      { id: 'B', text: "WEP" },
      { id: 'C', text: "Telnet" },
      { id: 'D', text: "SNMP v1" }
    ],
    correctAnswerId: 'A',
    explanation: "TLS (che ha sostituito il vecchio e insicuro SSL) combina crittografia asimmetrica per l'handshake e scambio chiavi (ECDHE) con crittografia simmetrica ad alte prestazioni (AES-GCM) per il payload cifrato.",
    hint: "Transport Layer Security (TLS 1.3) è lo standard alla base di HTTPS.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_062',
    question: "Qual è la funzione del protocollo 'ICMP' (Internet Control Message Protocol) e quale strumento diagnostico fondamentale lo utilizza?",
    options: [
      { id: 'A', text: "Fornisce segnalazioni di errore e messaggi di controllo diagnostico sul funzionamento della rete; è utilizzato dal comando 'ping' (Echo Request / Echo Reply)" },
      { id: 'B', text: "Trasferisce file musicali ad alta definizione tra computer" },
      { id: 'C', text: "Formatta le schede di memoria SD" },
      { id: 'D', text: "Gestisce la stampa su plotter di grandi dimensioni" }
    ],
    correctAnswerId: 'A',
    explanation: "ICMP opera a livello di rete (Layer 3) ed è usato da router e host per notificare problemi (es. 'Destination Unreachable', 'Time Exceeded') e per la diagnostica con `ping` e `traceroute`.",
    hint: "ICMP gestisce messaggi di controllo e risponde alle richieste del comando ping.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_063',
    question: "Cosa stabilisce lo standard 'NAT' (Network Address Translation) nei router aziendali e domestici?",
    options: [
      { id: 'A', text: "Mappa molteplici indirizzi IP privati della rete locale (RFC 1918) su un unico (o pochi) indirizzo IP pubblico routabile su internet, traducendo numeri di porta (NAPT/PAT)" },
      { id: 'B', text: "Aumenta la frequenza di clock del processore del router" },
      { id: 'C', text: "Converte i cavi in rame in cavi di fibra ottica" },
      { id: 'D', text: "Elimina automaticamente i virus dai messaggi di posta elettronica" }
    ],
    correctAnswerId: 'A',
    explanation: "Il NAT/PAT ha prolungato la vita di IPv4 consentendo a intere reti private (es. 192.168.x.x o 10.x.x.x) di condividere un unico IP pubblico assegnato dal provider internet.",
    hint: "Traduce indirizzi IP privati in indirizzi IP pubblici e viceversa.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_064',
    question: "Quale porta TCP è registrata e utilizzata come standard dal protocollo di amministrazione remota sicura 'SSH' (Secure Shell)?",
    options: [
      { id: 'A', text: "Porta TCP 22" },
      { id: 'B', text: "Porta TCP 80" },
      { id: 'C', text: "Porta TCP 443" },
      { id: 'D', text: "Porta TCP 21" }
    ],
    correctAnswerId: 'A',
    explanation: "SSH ascolta di default sulla porta TCP 22; HTTP sulla 80, HTTPS sulla 443 e FTP sulla 21.",
    hint: "SSH ascolta sulla porta TCP 22.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_065',
    question: "Che cos'è l'attacco 'Man-in-the-Middle' (MitM) basato su 'ARP Poisoning' (o ARP Spoofing)?",
    options: [
      { id: 'A', text: "L'attaccante invia risposte ARP artefatte nella rete locale associando il proprio indirizzo MAC all'indirizzo IP del gateway, intercettando, modificando o bloccando tutto il traffico della vittima" },
      { id: 'B', text: "Un malware che disattiva l'alimentatore della stampante" },
      { id: 'C', text: "Un attacco che fa vibrare lo schermo del monitor" },
      { id: 'D', text: "La duplicazione fisica delle chiavi della stanza server" }
    ],
    correctAnswerId: 'A',
    explanation: "Poiché il protocollo ARP non è autenticato, uno switch innocente accetta pacchetti ARP falsificati che avvelenano la cache ARP dei client, dirottando il traffico verso l'attaccante (MitM). Si mitiga con il Dynamic ARP Inspection (DAI).",
    hint: "Avvelenamento della tabella ARP per dirottare il traffico di rete verso l'attaccante.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_066',
    question: "Nel protocollo DNS, quale tipologia di record associa un nome di dominio (FQDN) a un indirizzo IPv4?",
    options: [
      { id: 'A', text: "Record A" },
      { id: 'B', text: "Record AAAA" },
      { id: 'C', text: "Record MX" },
      { id: 'D', text: "Record CNAME" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Record A mappa un nome host su un indirizzo IPv4 a 32 bit; il Record AAAA mappa su IPv6 a 128 bit; il Record MX indica i server di posta; CNAME è un alias.",
    hint: "Record A per IPv4; Record AAAA per IPv6.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_067',
    question: "Cosa stabilisce il protocollo 'Spanning Tree Protocol' (STP - IEEE 802.1D) negli switch ethernet?",
    options: [
      { id: 'A', text: "Previene la formazione di anelli logici (loop di rete) e conseguenti tempeste di broadcast (broadcast storm) bloccando selettivamente porte ridondanti e attivandole solo in caso di guasto" },
      { id: 'B', text: "Misura l'altezza degli alberi nei parchi pubblici comunali" },
      { id: 'C', text: "Pulisce automaticamente la polvere dai connettori RJ-45" },
      { id: 'D', text: "Assegna i numeri di telefono ai centralini VoIP" }
    ],
    correctAnswerId: 'A',
    explanation: "Se in una rete di switch ci sono percorsi chiusi (loop), i frame broadcast circolano all'infinito saturando la rete e bloccando gli switch. STP costruisce un albero logico aciclico (tree) disabilitando i link ridondanti.",
    hint: "Previene loop e tempeste di broadcast nella rete di switch.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_068',
    question: "Quale range di indirizzi IPv4 fa parte delle classi private riservate ad uso interno (RFC 1918) e NON instradabili su internet?",
    options: [
      { id: 'A', text: "10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16" },
      { id: 'B', text: "8.8.8.0/24 e 1.1.1.0/24" },
      { id: 'C', text: "200.100.50.0/24" },
      { id: 'D', text: "151.1.1.0/24" }
    ],
    correctAnswerId: 'A',
    explanation: "La RFC 1918 riserva tre blocchi per le reti locali: Classe A (10.0.0.0 - 10.255.255.255), Classe B (172.16.0.0 - 172.31.255.255) e Classe C (192.168.0.0 - 192.168.255.255).",
    hint: "I tre blocchi IP privati RFC 1918: 10.x.x.x, 172.16-31.x.x e 192.168.x.x.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_069',
    question: "In una VPN aziendale, qual è la differenza fondamentale tra modalità 'Split Tunneling' e 'Full Tunneling'?",
    options: [
      { id: 'A', text: "Nel Full Tunneling tutto il traffico internet del client viene convogliato criptato nella rete aziendale; nello Split Tunneling solo il traffico destinato ai server aziendali passa nella VPN, mentre la normale navigazione web esce direttamente dalla connessione locale" },
      { id: 'B', text: "Lo Split Tunneling dimezza la velocità di connessione" },
      { id: 'C', text: "Il Full Tunneling può funzionare solo su telefoni cellulari" },
      { id: 'D', text: "Non vi è alcuna differenza nella gestione dell'instradamento" }
    ],
    correctAnswerId: 'A',
    explanation: "Full Tunneling garantisce massimo controllo e sicurezza (tutto il traffico è filtrato dal firewall aziendale), ma consuma molta banda aziendale; lo Split Tunneling preserva la banda ma espone a rischi se il PC accede direttamente a internet.",
    hint: "Full: tutto il traffico nella VPN. Split: solo il traffico per la rete interna passa nella VPN.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_070',
    question: "Cos'è un attacco 'DDoS' (Distributed Denial of Service) di tipo 'SYN Flood'?",
    options: [
      { id: 'A', text: "L'attaccante inonda il server bersaglio di pacchetti TCP SYN con indirizzi IP sorgente falsificati, lasciando aperte migliaia di connessioni incomplete (stato SYN_RECEIVED) esaurendo la tabella di backlog del server" },
      { id: 'B', text: "Un'inondazione fisica della stanza dei server causata da tubature rotte" },
      { id: 'C', text: "Un messaggio di posta con allegato un file di 10 Gigabyte" },
      { id: 'D', text: "La rimozione forzata della presa di corrente elettrica" }
    ],
    correctAnswerId: 'A',
    explanation: "Il SYN Flood sfrutta la prima fase del 3-way handshake: il server alloca risorse per ogni SYN e attende l'ACK che non arriverà mai, saturando la coda di ascolto. Si contrasta con i SYN Cookies.",
    hint: "Inonda il server di richieste SYN senza completare l'handshake per esaurire le risorse di connessione.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_071',
    question: "Quale dispositivo di rete opera tipicamente al Livello 1 (Fisico) del modello OSI limitandosi a ritrasmettere elettricamente i bit su tutte le porte?",
    options: [
      { id: 'A', text: "Hub (Ripetitore multiporta)" },
      { id: 'B', text: "Router" },
      { id: 'C', text: "Switch Layer 3" },
      { id: 'D', text: "Firewall di nuova generazione" }
    ],
    correctAnswerId: 'A',
    explanation: "L'Hub è un ripetitore cieco a livello fisico: condivide un unico dominio di collisione e replica elettricamente ogni segnale in ingresso su tutte le altre porte, a differenza dello Switch.",
    hint: "L'Hub opera al livello 1 fisico e genera un unico dominio di collisione.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_072',
    question: "Nelle reti wireless Wi-Fi aziendali, quale standard di sicurezza offre autenticazione individuale degli utenti tramite server RADIUS (802.1X) anziché una password condivisa?",
    options: [
      { id: 'A', text: "WPA2/WPA3 Enterprise" },
      { id: 'B', text: "WPA Personal (Pre-Shared Key)" },
      { id: 'C', text: "WEP a 64 bit" },
      { id: 'D', text: "WPS con pulsante push-button" }
    ],
    correctAnswerId: 'A',
    explanation: "WPA Enterprise usa il framework 802.1X/EAP interfacciandosi con un server RADIUS o Active Directory: ogni dipendente usa le proprie credenziali personali, eliminando il rischio di una chiave condivisa.",
    hint: "WPA Enterprise si appoggia a server RADIUS (802.1X) con credenziali individuali.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_073',
    question: "Quale comando diagnostico consente di tracciare la sequenza di router (hop) attraversati da un pacchetto per raggiungere una destinazione remota?",
    options: [
      { id: 'A', text: "traceroute (in Linux) / tracert (in Windows)" },
      { id: 'B', text: "ipconfig" },
      { id: 'C', text: "hostname" },
      { id: 'D', text: "net user" }
    ],
    correctAnswerId: 'A',
    explanation: "`traceroute`/`tracert` invia pacchetti incrementando progressivamente il valore del campo TTL (Time To Live), provocando risposte ICMP 'Time Exceeded' da ciascun router lungo il cammino.",
    hint: "tracert o traceroute traccia i salti (hop) tra i router lungo il percorso.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_074',
    question: "Che cosa si intende per 'MTU' (Maximum Transmission Unit) in una rete ethernet standard?",
    options: [
      { id: 'A', text: "La dimensione massima in byte del payload a livello 3 (incluso header IP) che può essere trasmesso in un singolo frame senza frammentazione (pari a 1500 byte in Ethernet standard)" },
      { id: 'B', text: "La velocità massima di download consentita dalla fibra ottica" },
      { id: 'C', text: "Il numero massimo di computer collegabili a uno switch" },
      { id: 'D', text: "Il voltaggio della corrente che viaggia nel cavo di rete" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo standard Ethernet II fissa la MTU a 1500 byte. Pacchetti più grandi devono essere frammentati, a meno che tutti i dispositivi non supportino i cosiddetti Jumbo Frame (fino a 9000 byte).",
    hint: "1500 byte: dimensione massima del pacchetto prima della frammentazione.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_075',
    question: "Nel protocollo IP, qual è lo scopo del campo 'TTL' (Time To Live) nell'header del pacchetto IPv4 (o 'Hop Limit' in IPv6)?",
    options: [
      { id: 'A', text: "Evitare che pacchetti non recapitabili circolino all'infinito nella rete a causa di cicli di routing errati, venendo decrementato di 1 da ciascun router e scartato quando raggiunge lo zero" },
      { id: 'B', text: "Misurare la durata della batteria dello smartphone" },
      { id: 'C', text: "Impostare la data di scadenza della licenza del software" },
      { id: 'D', text: "Controllare il volume degli altoparlanti del computer" }
    ],
    correctAnswerId: 'A',
    explanation: "Ogni router decrementa il TTL: quando il TTL arriva a 0, il router scarta il pacchetto e invia al mittente un messaggio ICMP 'Time Exceeded', impedendo la saturazione della rete.",
    hint: "Contatore che decrementa a ogni salto per evitare che pacchetti girino all'infinito in loop.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_076',
    question: "Quale porta di trasporto UDP utilizza il protocollo DNS per le normali interrogazioni di risoluzione nomi?",
    options: [
      { id: 'A', text: "Porta UDP 53" },
      { id: 'B', text: "Porta UDP 67" },
      { id: 'C', text: "Porta UDP 123" },
      { id: 'D', text: "Porta UDP 161" }
    ],
    correctAnswerId: 'A',
    explanation: "Il DNS opera normalmente su porta UDP 53 per query e risposte rapide (utilizzando TCP 53 solo per zone transfer o risposte superiori a 512 byte).",
    hint: "Il DNS ascolta sulla porta 53 (UDP per query standard).",
    level: "base"
  },
  {
    id: 'Q_INF_NET_077',
    question: "Cosa si intende per 'Stateful Inspection' (ispezione di stato) in un firewall aziendale?",
    options: [
      { id: 'A', text: "La capacità del firewall di tracciare lo stato delle connessioni TCP/UDP attive in una tabella di stato (state table), autorizzando automaticamente i pacchetti di ritorno legittimi senza bisogno di regole esplicite" },
      { id: 'B', text: "L'ispezione visiva dei connettori da parte della guardia giurata" },
      { id: 'C', text: "Il controllo della temperatura corporea dei dipendenti" },
      { id: 'D', text: "Un software che cancella i file scaricati da internet ogni sera" }
    ],
    correctAnswerId: 'A',
    explanation: "A differenza dei vecchi filtri di pacchetto statici (stateless), un firewall stateful sa se un pacchetto in arrivo appartiene a una sessione precedentemente avviata dall'interno, garantendo massima sicurezza.",
    hint: "Tiene traccia dello stato della sessione per far passare automaticamente il traffico di risposta.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_078',
    question: "In una rete locale ethernet, che cos'è una 'Broadcast Storm' (tempesta di broadcast)?",
    options: [
      { id: 'A', text: "Una situazione anomala in cui frame broadcast proliferano e circolano all'infinito a causa di anelli fisici (loop) non bloccati, saturando completamente la banda e mandando in crash gli switch" },
      { id: 'B', text: "Un temporale che interrompe le trasmissioni televisive satellitari" },
      { id: 'C', text: "L'invio massivo di email pubblicitarie promozionali" },
      { id: 'D', text: "Un guasto all'alimentatore centrale dello stabile" }
    ],
    correctAnswerId: 'A',
    explanation: "Poiché gli switch inoltrano i broadcast su tutte le porte (flood), in presenza di un loop i frame si moltiplicano esponenzialmente fino al blocco totale della rete locale (prevenuto da STP).",
    hint: "Proliferazione incontrollata di frame broadcast dovuta a loop di rete che paralizza gli switch.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_079',
    question: "Quale protocollo di routing dinamico di tipo 'Link-State' utilizza l'algoritmo di Dijkstra (SPF - Shortest Path First) per calcolare il percorso migliore all'interno di un Autonomous System (IGP)?",
    options: [
      { id: 'A', text: "OSPF (Open Shortest Path First)" },
      { id: 'B', text: "RIP (Routing Information Protocol)" },
      { id: 'C', text: "BGP (Border Gateway Protocol)" },
      { id: 'D', text: "EGP" }
    ],
    correctAnswerId: 'A',
    explanation: "OSPF è il protocollo IGP link-state standard più diffuso: ogni router costruisce una mappa topologica completa dell'area ed esegue l'algoritmo di Dijkstra per individuare il cammino a costo minimo.",
    hint: "OSPF usa l'algoritmo di Dijkstra (Shortest Path First) per calcolare le rotte migliori.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_080',
    question: "Cosa stabilisce il protocollo di routing 'BGP' (Border Gateway Protocol)?",
    options: [
      { id: 'A', text: "È il protocollo di routing inter-dominio (EGP - Exterior Gateway Protocol) fondamentale su cui si basa il funzionamento globale di Internet, scambiando informazioni di raggiungibilità tra Autonomous System (AS) indipendenti" },
      { id: 'B', text: "Gestisce le password delle caselle di posta elettronica aziendali" },
      { id: 'C', text: "Controlla la velocità delle ventole dei router di casa" },
      { id: 'D', text: "Assegna gli indirizzi MAC alle schede di rete prodotte in Europa" }
    ],
    correctAnswerId: 'A',
    explanation: "BGP (attualmente BGP-4) è il collante della rete Internet mondiale: è un protocollo di tipo path-vector che applica policy amministrative e di peering per instradare pacchetti tra diversi provider e grandi organizzazioni.",
    hint: "Il protocollo di routing globale che tiene insieme l'intera rete Internet tra Autonomous System.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_NET_081',
    question: "In termini di cablaggio in fibra ottica, qual è la differenza fondamentale tra fibra 'Monomodale' (SMF) e fibra 'Multimodale' (MMF)?",
    options: [
      { id: 'A', text: "La fibra monomodale ha un nucleo sottilissimo (circa 9 micron), consente la propagazione di un solo raggio laser ed è adatta per lunghissime distanze (decine di km); la multimodale ha nucleo più largo (50-62.5 micron) ed è usata per brevi distanze (datacenter/LAN)" },
      { id: 'B', text: "La fibra monomodale è fatta di plastica riciclata, la multimodale di rame" },
      { id: 'C', text: "La fibra multimodale richiede cavi elettrici di supporto" },
      { id: 'D', text: "Non vi è alcuna differenza nella distanza coperta" }
    ],
    correctAnswerId: 'A',
    explanation: "Nella fibra multimodale la luce viaggia riflettendosi su percorsi multipli (dispersione modale), limitando la portata a qualche centinaio di metri; la monomodale elimina la dispersione modale coprendo tratte metropolitane e sottomarine.",
    hint: "Monomodale per lunghe distanze (nucleo 9 µm); Multimodale per campus e datacenter (nucleo 50 µm).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_082',
    question: "Quale porta UDP è utilizzata dal protocollo NTP (Network Time Protocol) per la sincronizzazione precisa degli orologi di sistema dei computer sulla rete?",
    options: [
      { id: 'A', text: "Porta UDP 123" },
      { id: 'B', text: "Porta UDP 80" },
      { id: 'C', text: "Porta UDP 21" },
      { id: 'D', text: "Porta UDP 443" }
    ],
    correctAnswerId: 'A',
    explanation: "NTP (Network Time Protocol) opera su porta UDP 123, sincronizzando i clock dei computer con server di riferimento ad alta precisione (stratum 0/1) con precisione al millisecondo.",
    hint: "NTP sincronizza data e ora su porta UDP 123.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_083',
    question: "Che cos'è una 'DMZ' (Demilitarized Zone) nell'architettura di sicurezza della rete di una pubblica amministrazione?",
    options: [
      { id: 'A', text: "Una sottorete isolata e controllata da firewall che ospita i servizi pubblici accessibili da internet (web server, posta, portale INPS), separandoli e proteggendo la rete intranet aziendale interna da intrusioni dirette" },
      { id: 'B', text: "Una stanza sotterranea protetta contro attacchi nucleari" },
      { id: 'C', text: "L'area della reception dove i visitatori lasciano i telefoni cellulari" },
      { id: 'D', text: "Un software per la cancellazione definitiva di dischi dismessi" }
    ],
    correctAnswerId: 'A',
    explanation: "La DMZ fa da cuscinetto di sicurezza: se un server esposto al pubblico nella DMZ viene compromesso, il firewall interno impedisce all'attaccante di accedere direttamente ai database o ai PC della rete interna privata.",
    hint: "Zona demilitarizzata che ospita i server pubblici isolandoli dalla rete interna privata.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_084',
    question: "Cosa si intende per 'Default Route' (Rotta predefinita) in una tabella di routing IPv4?",
    options: [
      { id: 'A', text: "La rotta di fallback indicata con 0.0.0.0/0 (o gateway of last resort) utilizzata per instradare qualsiasi pacchetto il cui indirizzo di destinazione non corrisponde ad alcuna voce specifica nella tabella" },
      { id: 'B', text: "La rotta per stampare i documenti di testo in rete" },
      { id: 'C', text: "L'indirizzo di memoria del bios" },
      { id: 'D', text: "La velocità massima di download concordata con il provider" }
    ],
    correctAnswerId: 'A',
    explanation: "La rotta `0.0.0.0 con netmask 0.0.0.0` (0.0.0.0/0) rappresenta 'tutte le destinazioni sconosciute': se non esiste una rotta più specifica (longest prefix match), il pacchetto viene inviato a questo gateway.",
    hint: "La rotta universale 0.0.0.0/0 (gateway of last resort).",
    level: "base"
  },
  {
    id: 'Q_INF_NET_085',
    question: "Quale tecnica di sicurezza sugli switch ethernet previene l'installazione di server DHCP non autorizzati (rogue DHCP server) nella rete aziendale?",
    options: [
      { id: 'A', text: "DHCP Snooping" },
      { id: 'B', text: "Port Mirroring" },
      { id: 'C', text: "Jumbo Frame" },
      { id: 'D', text: "Wake-on-LAN" }
    ],
    correctAnswerId: 'A',
    explanation: "Il DHCP Snooping classifica le porte dello switch in 'trusted' (collegate ai server DHCP legittimi) e 'untrusted': qualsiasi pacchetto DHCP di offerta proveniente da una porta non autorizzata viene scartato.",
    hint: "DHCP Snooping blocca server DHCP non autorizzati filtrando le porte dello switch.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_086',
    question: "Nel contesto della suite di protocolli IPsec (Internet Protocol Security), quale protocollo fornisce autenticazione, integrità e crittografia completa del payload?",
    options: [
      { id: 'A', text: "ESP (Encapsulating Security Payload)" },
      { id: 'B', text: "AH (Authentication Header)" },
      { id: 'C', text: "GRE" },
      { id: 'D', text: "L2TP senza crittografia" }
    ],
    correctAnswerId: 'A',
    explanation: "AH garantisce autenticazione e integrità ma NON cifra i dati; ESP (protocollo IP 50) garantisce confidenzialità (crittografia), integrità e autenticazione dell'origine dei dati.",
    hint: "ESP cifra e protegge i dati all'interno di tunnel IPsec.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_087',
    question: "Quale comando da terminale visualizza la tabella di routing locale del computer?",
    options: [
      { id: 'A', text: "route print (in Windows) oppure ip route (in Linux)" },
      { id: 'B', text: "cls / clear" },
      { id: 'C', text: "chkdsk" },
      { id: 'D', text: "mkdir /root" }
    ],
    correctAnswerId: 'A',
    explanation: "In Windows `route print` o `netstat -r` mostrano la tabella di instradamento; in ambiente Linux si utilizza `ip route show` o `route -n`.",
    hint: "route print su Windows e ip route su Linux mostrano la tabella di instradamento.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_088',
    question: "In cosa consiste l'attacco informatico di tipo 'DNS Amplification' (amplificazione DNS)?",
    options: [
      { id: 'A', text: "Un attacco DDoS basato su UDP in cui l'attaccante invia richieste DNS voluminose (es. 'ANY') a server DNS aperti con l'IP sorgente falsificato (spoofed) impostato sull'IP della vittima, saturandone la banda con risposte decine di volte più grandi della richiesta" },
      { id: 'B', text: "L'aumento del volume delle cuffie dei dipendenti" },
      { id: 'C', text: "La clonazione di dischi fissi tramite porta seriale" },
      { id: 'D', text: "Un virus che riscrive le impostazioni della stampante" }
    ],
    correctAnswerId: 'A',
    explanation: "Sfrutta il protocollo UDP senza connessione: piccole query con IP vittima contraffatto generano risposte fino a 50 volte più grandi (grazie a EDNS0/DNSSEC) dirette contro la vittima, travolgendone la connettività.",
    hint: "Attacco DDoS che sfrutta UDP e server DNS ricorsivi aperti per moltiplicare il volume di traffico.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_NET_089',
    question: "Cosa si intende per 'Port Mirroring' (o SPAN - Switched Port Analyzer) su uno switch di rete?",
    options: [
      { id: 'A', text: "Una funzione che copia tutto il traffico di rete transitante su una determinata porta (o VLAN) e lo invia a un'altra porta specifica dello switch a cui è collegato un analizzatore di rete o sistema IDS/IPS (es. Wireshark)" },
      { id: 'B', text: "La duplicazione speculare dei monitor dei computer dei dipendenti" },
      { id: 'C', text: "Un connettore riflettente per cavi ottici sottomarini" },
      { id: 'D', text: "Un programma per la creazione di copie di sicurezza di fogli Excel" }
    ],
    correctAnswerId: 'A',
    explanation: "Poiché gli switch non inviano il traffico unicast su tutte le porte, il Port Mirroring è indispensabile per permettere a sonde di sicurezza, IDS (Snort/Suricata) o analizzatori di pacchetti di analizzare il traffico di rete.",
    hint: "Copia il traffico di una o più porte su una porta dedicata per analisi di sicurezza (Wireshark).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_090',
    question: "Quale meccanismo di sicurezza del protocollo DNS garantisce l'autenticità e l'integrità delle risposte DNS mediante firme digitali crittografiche?",
    options: [
      { id: 'A', text: "DNSSEC (DNS Security Extensions)" },
      { id: 'B', text: "DNS Cache Poisoning" },
      { id: 'C', text: "WINS" },
      { id: 'D', text: "NetBIOS" }
    ],
    correctAnswerId: 'A',
    explanation: "DNSSEC aggiunge record crittografici (RRSIG, DNSKEY, DS) per consentire ai resolver di verificare che la risposta DNS provenga realmente dalla zona autorevole e non sia stata manomessa in transito.",
    hint: "DNS Security Extensions (DNSSEC) valida le risposte DNS con firme crittografiche.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_091',
    question: "Nel protocollo TCP, a cosa serve il meccanismo della 'Finestra di scorrimento' (Sliding Window)?",
    options: [
      { id: 'A', text: "A gestire il controllo di flusso (flow control), regolando la quantità di dati che il mittente può trasmettere prima di dover ricevere una conferma di ricezione (ACK) dal destinatario" },
      { id: 'B', text: "A ridimensionare le finestre grafiche di Windows" },
      { id: 'C', text: "A cancellare i file temporanei non utilizzati da oltre un mese" },
      { id: 'D', text: "A calcolare il tempo di accensione dello schermo" }
    ],
    correctAnswerId: 'A',
    explanation: "Il destinatario comunica la dimensione del proprio buffer disponibile nel campo Window Size dell'header TCP, impedendo al mittente veloce di inondare e mandare in overflow un ricevitore più lento.",
    hint: "Regola il volume di dati trasmissibili prima di attendere gli ACK (controllo di flusso).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_092',
    question: "Quale tipologia di firewall analizza i pacchetti fino al Livello 7 del modello OSI, controllando firme applicative, ispezionando il traffico crittografato SSL/TLS e integrando motori antivirus e IPS?",
    options: [
      { id: 'A', text: "Next-Generation Firewall (NGFW)" },
      { id: 'B', text: "Packet Filter stateless a livello 3" },
      { id: 'C', text: "Hub passivo" },
      { id: 'D', text: "Switch unmanaged a 8 porte" }
    ],
    correctAnswerId: 'A',
    explanation: "I firewall di nuova generazione (NGFW, es. Fortinet, Palo Alto, Check Point) non guardano solo porte e IP, ma identificano le specifiche applicazioni web, decifrano il traffico e applicano protezione da malware e intrusioni.",
    hint: "Next-Generation Firewall (NGFW) combina ispezione Layer 7, decifratura SSL e IPS.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_093',
    question: "In una rete ethernet con velocità a 10 Gigabit/s (10GBASE-T), quale categoria minima di cavo in rame a doppino ritorto è necessaria per coprire la distanza standard di 100 metri?",
    options: [
      { id: 'A', text: "Categoria 6A (Cat 6A)" },
      { id: 'B', text: "Categoria 5 (Cat 5)" },
      { id: 'C', text: "Categoria 3 per linee telefoniche" },
      { id: 'D', text: "Cavo coassiale a 75 Ohm" }
    ],
    correctAnswerId: 'A',
    explanation: "La Cat 6 standard supporta 10 Gbps solo fino a 37-55 metri in condizioni favorevoli; per garantire 10 Gbps sull'intera distanza di 100 metri è necessaria la Categoria 6A (frequenza 500 MHz) o superiore.",
    hint: "Cat 6A supporta 10 Gbps fino alla distanza massima di 100 metri.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_094',
    question: "Cos'è un indirizzo 'Loopback' in IPv4 e quale indirizzo standard rappresenta la macchina locale?",
    options: [
      { id: 'A', text: "127.0.0.1 (tutta la classe 127.0.0.0/8), utilizzato per testare le funzionalità della pila TCP/IP locale senza inviare pacchetti sulla rete fisica" },
      { id: 'B', text: "192.168.1.1" },
      { id: 'C', text: "255.255.255.255" },
      { id: 'D', text: "0.0.0.0" }
    ],
    correctAnswerId: 'A',
    explanation: "Il blocco 127.0.0.0/8 è riservato al loopback: il traffico inviato a 127.0.0.1 (localhost) viene reindirizzato internamente dallo stack software senza toccare la scheda di rete fisica.",
    hint: "127.0.0.1 è l'indirizzo di loopback locale (localhost).",
    level: "base"
  },
  {
    id: 'Q_INF_NET_095',
    question: "Quale protocollo di gestione e monitoraggio dei dispositivi di rete (router, switch, server) opera tramite OID (Object Identifier) organizzati in MIB (Management Information Base)?",
    options: [
      { id: 'A', text: "SNMP (Simple Network Management Protocol)" },
      { id: 'B', text: "SMTP" },
      { id: 'C', text: "POP3" },
      { id: 'D', text: "IMAP" }
    ],
    correctAnswerId: 'A',
    explanation: "SNMP (specie nella versione sicura SNMPv3 con autenticazione e crittografia) consente ai sistemi di monitoraggio (Zabbix, Nagios, PRTG) di interrogare lo stato di porte, carico e traffico dei dispositivi.",
    hint: "SNMP (Simple Network Management Protocol) con architettura MIB/OID.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_096',
    question: "Cosa si intende per 'Broadcast Domain' (Dominio di broadcast)?",
    options: [
      { id: 'A', text: "L'insieme di tutti i nodi di una rete che possono ricevere un frame di broadcast ethernet (inviato all'indirizzo MAC FF:FF:FF:FF:FF:FF); è delimitato da router o VLAN" },
      { id: 'B', text: "Un sito web registrato su un provider estero" },
      { id: 'C', text: "Un canale televisivo con trasmissione digitale terrestre" },
      { id: 'D', text: "Una stanza contenente computer portatili" }
    ],
    correctAnswerId: 'A',
    explanation: "Tutti gli host collegati a uno switch o hub appartengono allo stesso dominio di broadcast. Solo un router (o una VLAN configurata) interrompe e delimita la diffusione dei pacchetti broadcast.",
    hint: "I broadcast ethernet si propagano all'interno dello switch e vengono bloccati dai router.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_097',
    question: "Nel protocollo IPv6, qual è l'indirizzo speciale equivalente al 'loopback' 127.0.0.1 di IPv4?",
    options: [
      { id: 'A', text: "::1 (oppure 0:0:0:0:0:0:0:1)" },
      { id: 'B', text: "fe80::1" },
      { id: 'C', text: "ff02::1" },
      { id: 'D', text: "2001::1" }
    ],
    correctAnswerId: 'A',
    explanation: "In IPv6 il loopback è rappresentato da 127 zeri seguiti da un 1, compresso come `::1/128`.",
    hint: "::1 è il loopback IPv6.",
    level: "base"
  },
  {
    id: 'Q_INF_NET_098',
    question: "In termini di architettura di rete, cosa si intende per 'SDN' (Software-Defined Networking)?",
    options: [
      { id: 'A', text: "Un'architettura che separa nettamente il Piano di Controllo (Control Plane - decisioni di instradamento centralizzate) dal Piano Dati (Data Plane - inoltro fisico dei pacchetti sui dispositivi di rete)" },
      { id: 'B', text: "Un cavo di rete rivestito in gomma isolante" },
      { id: 'C', text: "Un contratto di manutenzione per le stampanti aziendali" },
      { id: 'D', text: "Un'applicazione per la condivisione di immagini fotografiche" }
    ],
    correctAnswerId: 'A',
    explanation: "Nel modello SDN (es. protocollo OpenFlow), l'intelligenza e le policy sono centralizzate in un controller software programmabile, mentre switch e router eseguono semplicemente le istruzioni di inoltro a basso livello.",
    hint: "Separazione tra Control Plane centralizzato e Data Plane sui dispositivi fisici.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_NET_099',
    question: "Che cos'è il 'NAT Loopback' (o Hairpinning) su un router?",
    options: [
      { id: 'A', text: "La funzionalità che consente a un host interno della LAN di accedere a un server interno della stessa LAN digitando il suo indirizzo IP pubblico o nome di dominio FQDN esterno anziché l'IP privato locale" },
      { id: 'B', text: "Un difetto di fabbricazione che brucia la presa di corrente" },
      { id: 'C', text: "Una curva a 180 gradi del cavo ethernet" },
      { id: 'D', text: "La disconnessione della linea telefonica durante un temporale" }
    ],
    correctAnswerId: 'A',
    explanation: "Senza Hairpinning NAT, un computer della rete interna non può raggiungere un web server locale tramite l'IP pubblico dell'azienda, perché il router non saprebbe reinstradare indietro il pacchetto verso la LAN.",
    hint: "Permette a host interni di contattare server interni usando l'IP pubblico.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_NET_100',
    question: "Cosa stabilisce lo standard di autenticazione di rete 'IEEE 802.1X'?",
    options: [
      { id: 'A', text: "Un protocollo di sicurezza per il controllo degli accessi basato su porte che richiede l'autenticazione preventiva del client (tramite credenziali o certificato su server RADIUS) prima di abilitare la porta fisica dello switch o l'accesso alla rete Wi-Fi" },
      { id: 'B', text: "Un cavo in fibra ottica speciale per le comunicazioni tra ospedali" },
      { id: 'C', text: "Un sistema di numerazione per le prese elettriche dell'ufficio" },
      { id: 'D', text: "La scansione automatica dei documenti cartacei in formato bitmap" }
    ],
    correctAnswerId: 'A',
    explanation: "Con 802.1X (Network Access Control - NAC), se un dispositivo non autorizzato si collega a una presa ethernet a muro dell'INPS, la porta rimane bloccata e non riceve traffico né indirizzo IP finché non si autentica con successo.",
    hint: "Controllo degli accessi alla rete alle porte di switch e Wi-Fi con server RADIUS.",
    level: "avanzato"
  }
];

// Append to reti.json
const netPath = path.join(__dirname, '../public/db/master_bank/informatica/reti.json');
const netData = JSON.parse(fs.readFileSync(netPath, 'utf8'));
netData.push(...netQuestions);

netData.forEach((q, idx) => {
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

fs.writeFileSync(netPath, JSON.stringify(netData, null, 2), 'utf8');
const netCounts = { A: 0, B: 0, C: 0, D: 0 };
netData.forEach(q => netCounts[q.correctAnswerId]++);
console.log('Reti updated! Total:', netData.length, 'Counts:', netCounts);
