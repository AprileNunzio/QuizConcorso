const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/db/master_bank/previdenza/previdenza_inps.json');
const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

const newQuestions = [
  {
    id: "Q_PECS_PREV_051",
    question: "In base al D.L. 4 maggio 2023, n. 48 (convertito con L. 85/2023), quale misura ha sostituito il Reddito di Cittadinanza per i nuclei familiari con almeno un minore, un disabile, un ultrasessantenne o una persona in condizione di svantaggio?",
    options: [
      { id: "A", text: "Il Reddito di Dignità Nazionale (RDN)" },
      { id: "B", text: "L'Assegno di Inclusione (ADI)" },
      { id: "C", text: "Il Supporto Straordinario al Reddito (SSR)" },
      { id: "D", text: "L'Indennità di Assistenza Sociale Integrata (IASI)" }
    ],
    correctAnswerId: "B",
    explanation: "Il D.L. 48/2023 ha introdotto l'Assegno di Inclusione (ADI) a decorrere dal 1° gennaio 2024, quale misura di contrasto alla povertà condizionata alla prova dei mezzi e all'adesione a un percorso personalizzato di inclusione sociale e lavorativa per nuclei con componenti fragili.",
    hint: "La sigla ufficiale della misura è ADI.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_052",
    question: "Qual è il valore massimo dell'ISEE ordinario richiesto per l'accesso all'Assegno di Inclusione (ADI)?",
    options: [
      { id: "A", text: "7.500 euro annui" },
      { id: "B", text: "12.000 euro annui" },
      { id: "C", text: "9.360 euro annui" },
      { id: "D", text: "15.000 euro annui" }
    ],
    correctAnswerId: "C",
    explanation: "Ai sensi dell'art. 2, comma 2, del D.L. 48/2023, il nucleo familiare del richiedente ADI deve essere in possesso di un valore dell'ISEE, in corso di validità, non superiore a 9.360 euro.",
    hint: "È la medesima soglia ISEE stabilita originariamente per il Reddito di Cittadinanza.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_053",
    question: "Quale misura introdotta dal D.L. 48/2023 è destinata ai componenti dei nuclei familiari di età compresa tra 18 e 59 anni attivabili al lavoro, privi dei requisiti per l'ADI?",
    options: [
      { id: "A", text: "L'Assegno di Ricollocazione Straordinario" },
      { id: "B", text: "Il Fondo Nuove Competenze Individuale" },
      { id: "C", text: "La Garanzia Occupabilità Lavoratori Diretta" },
      { id: "D", text: "Il Supporto per la Formazione e il Lavoro (SFL)" }
    ],
    correctAnswerId: "D",
    explanation: "Il Supporto per la Formazione e il Lavoro (SFL), disciplinato dall'art. 12 del D.L. 48/2023, è una misura attiva di politica del lavoro che prevede un'indennità economica di 350 euro mensili legata alla partecipazione a progetti di formazione e orientamento.",
    hint: "Prevede la partecipazione a corsi formativi e orientamento al lavoro.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_054",
    question: "Qual è l'importo mensile e la durata massima dell'indennità economica prevista per il Supporto per la Formazione e il Lavoro (SFL)?",
    options: [
      { id: "A", text: "350 euro mensili per un massimo di 12 mesi non rinnovabili" },
      { id: "B", text: "500 euro mensili per un massimo di 18 mesi rinnovabili" },
      { id: "C", text: "450 euro mensili per tutta la durata dello stato di disoccupazione" },
      { id: "D", text: "300 euro mensili per 6 mesi rinnovabili una sola volta" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 12, comma 7, del D.L. 48/2023 stabilisce che il beneficio economico del SFL è pari a 350 euro mensili ed è erogato per tutta la durata della partecipazione al programma formativo e comunque per un periodo massimo di 12 mensilità complessive.",
    hint: "L'assegno è di 350 euro e non è rinnovabile oltre un anno.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_055",
    question: "In base alla Legge di Bilancio 2024 e alle successive conferme, quali sono i requisiti per l'accesso alla pensione anticipata flessibile c.d. 'Quota 103'?",
    options: [
      { id: "A", text: "Almeno 64 anni di età e 39 anni di contribuzione accreditata" },
      { id: "B", text: "Almeno 62 anni di età e 41 anni di contribuzione accreditata" },
      { id: "C", text: "Almeno 60 anni di età e 43 anni di contribuzione accreditata" },
      { id: "D", text: "Almeno 63 anni di età e 40 anni di contribuzione accreditata" }
    ],
    correctAnswerId: "B",
    explanation: "La pensione 'Quota 103' richiede la maturazione congiunta di almeno 62 anni di età anagrafica e di almeno 41 anni di anzianità contributiva entro il 31 dicembre dell'anno di riferimento.",
    hint: "62 + 41 = 103.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_056",
    question: "Quale regime di calcolo e quale tetto massimo di importo si applicano a chi consegue la pensione 'Quota 103' a decorrere dal 2024?",
    options: [
      { id: "A", text: "Calcolo misto integrale senza alcun tetto massimo all'assegno pensionistico" },
      { id: "B", text: "Calcolo retributivo puro fino a 67 anni di età, con tetto pari a 8 volte il trattamento minimo" },
      { id: "C", text: "Calcolo interamente contributivo con importo massimo pari a quattro volte il trattamento minimo INPS fino all'età di vecchiaia" },
      { id: "D", text: "Calcolo con riduzione fissa del 15% sul montante contributivo e nessun limite di importo" }
    ],
    correctAnswerId: "C",
    explanation: "La Legge di Bilancio 2024 (L. 213/2023) ha disposto che per chi matura i requisiti dal 2024 la pensione Quota 103 è determinata secondo le regole del sistema contributivo e il trattamento mensile non può superare quattro volte il trattamento minimo INPS fino al compimento dei 67 anni.",
    hint: "Ricalcolo contributivo e tetto di 4 volte il minimo.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_057",
    question: "Quali sono le 'finestre mobili' di decorrenza previste dalla disciplina della Quota 103 per i lavoratori che maturano i requisiti dal 2024?",
    options: [
      { id: "A", text: "1 mese per il settore privato e 3 mesi per il pubblico impiego" },
      { id: "B", text: "12 mesi per tutti i lavoratori indipendentemente dal settore" },
      { id: "C", text: "3 mesi per i lavoratori privati e 6 mesi per i dipendenti pubblici" },
      { id: "D", text: "7 mesi per i lavoratori privati e 9 mesi per i dipendenti pubblici" }
    ],
    correctAnswerId: "D",
    explanation: "Con la stretta della L. 213/2023, i termini di differimento per la decorrenza del primo assegno di Quota 103 sono stati ampliati rispettivamente a 7 mesi per i dipendenti privati e a 9 mesi per i dipendenti delle pubbliche amministrazioni.",
    hint: "I mesi di finestra sono 7 per il privato e 9 per il pubblico.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_058",
    question: "Chi sono le beneficiarie del trattamento anticipato c.d. 'Opzione Donna' secondo la normativa vigente?",
    options: [
      { id: "A", text: "Lavoratrici con 35 anni di contributi e 61 anni di età (riducibile con figli), appartenenti alle categorie caregiver, invalide al 74%, licenziate o dipendenti da aziende in crisi" },
      { id: "B", text: "Tutte le lavoratrici dipendenti del settore privato con almeno 30 anni di contribuzione, senza ulteriori requisiti soggettivi" },
      { id: "C", text: "Esclusivamente le lavoratrici autonome della Gestione Separata con 40 anni di versamenti" },
      { id: "D", text: "Le lavoratrici con almeno 58 anni di età e 20 anni di contributi che rinunciano alla liquidazione del TFS" }
    ],
    correctAnswerId: "A",
    explanation: "La versione attuale di Opzione Donna limita l'accesso alle lavoratrici che hanno maturato 35 anni di contributi e 61 anni di età (con sconti fino a 2 anni per figli), che si trovino in una delle tre condizioni di disagio: caregiver di familiare disabile grave, invalide civili con percentuale pari o superiore al 74%, licenziate o dipendenti di imprese in stato di crisi.",
    hint: "Requisito di 35 anni di contributi abbinato a condizioni specifiche di fragilità.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_059",
    question: "A quale età anagrafica è possibile accedere all'indennità 'APE Sociale' per i lavoratori svantaggiati (disoccupati, caregiver, invalidi al 74%, gravosi) a decorrere dal 2024?",
    options: [
      { id: "A", text: "60 anni" },
      { id: "B", text: "63 anni e 5 mesi" },
      { id: "C", text: "65 anni compiuti" },
      { id: "D", text: "62 anni esatti" }
    ],
    correctAnswerId: "B",
    explanation: "A decorrere dal 1° gennaio 2024 il requisito anagrafico di accesso all'APE Sociale è stato innalzato da 63 anni a 63 anni e 5 mesi, fermo restando il requisito contributivo (minimo 30 o 36 anni a seconda della categoria).",
    hint: "Il requisito di età è stato elevato a 63 anni e 5 mesi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_060",
    question: "Da quale mese di fruizione dell'indennità di disoccupazione NASpI si applica la riduzione progressiva del 3% (c.d. decalage)?",
    options: [
      { id: "A", text: "Dal primo giorno del sesto mese di fruizione (o dell'ottavo mese per chi ha compiuto 55 anni)" },
      { id: "B", text: "Dal primo giorno del secondo mese per tutti i percettori" },
      { id: "C", text: "Dal dodicesimo mese di fruizione continuativa" },
      { id: "D", text: "La NASpI non subisce mai alcuna riduzione progressiva" }
    ],
    correctAnswerId: "A",
    explanation: "In base all'art. 4, comma 3, del D.Lgs. 22/2015 come modificato dalla L. 234/2021, la NASpI si riduce del 3% ogni mese a decorrere dal primo giorno del sesto mese di fruizione; tale riduzione decorre invece dall'ottavo mese per i beneficiari che abbiano compiuto 55 anni di età alla data di presentazione della domanda.",
    hint: "Decalage a partire dal sesto mese, ritardato all'ottavo per gli over 55.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_061",
    question: "Qual è la durata massima di erogazione dell'indennità NASpI?",
    options: [
      { id: "A", text: "Pari alla metà delle settimane di contribuzione degli ultimi quattro anni, fino a un massimo di 24 mesi" },
      { id: "B", text: "Sempre pari a 12 mesi fissi per qualsiasi anzianità contributiva" },
      { id: "C", text: "Pari al totale delle settimane lavorate nel quinquennio precedente" },
      { id: "D", text: "Massimo 36 mesi per i lavoratori over 50" }
    ],
    correctAnswerId: "A",
    explanation: "La NASpI è corrisposta mensilmente per un numero di settimane pari alla metà delle settimane di contribuzione degli ultimi quattro anni. Poiché in 4 anni vi sono 208 settimane, la durata massima è di 104 settimane (circa 24 mesi).",
    hint: "Metà delle settimane lavorate nel quadriennio, tetto di 24 mesi.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_062",
    question: "In caso di avvio di attività di lavoro autonomo o d'impresa individuale, il percettore di NASpI può richiedere la liquidazione anticipata dell'indennità?",
    options: [
      { id: "A", text: "No, l'indennità decade immediatamente e per intero" },
      { id: "B", text: "Sì, può richiedere la liquidazione anticipata in un'unica soluzione dell'importo complessivo del trattamento spettante e non ancora percepito" },
      { id: "C", text: "Sì, ma solo per una quota massima del 20% dell'importo residuo" },
      { id: "D", text: "Solo previa costituzione di un fondo fiduciario presso il MEF" }
    ],
    correctAnswerId: "B",
    explanation: "Ai sensi dell'art. 8 del D.Lgs. 22/2015, il lavoratore che ha diritto alla NASpI può richiedere la liquidazione anticipata, in un'unica soluzione, dell'importo complessivo dell'indennità a titolo di incentivo all'autoimprenditorialità.",
    hint: "Si tratta dell'anticipazione NASpI in unica soluzione per autoimprenditorialità.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_063",
    question: "Quale categoria di lavoratori è tutelata dall'indennità di disoccupazione DIS-COLL ex art. 15 D.Lgs. 22/2015?",
    options: [
      { id: "A", text: "I lavoratori domestici e colf" },
      { id: "B", text: "I collaboratori coordinati e continuativi, dottorandi e assegnisti di ricerca iscritti in via esclusiva alla Gestione Separata INPS" },
      { id: "C", text: "I dipendenti pubblici a tempo indeterminato licenziati per motivi disciplinari" },
      { id: "D", text: "I lavoratori agricoli a tempo determinato" }
    ],
    correctAnswerId: "B",
    explanation: "La DIS-COLL è la prestazione a sostegno del reddito riservata ai collaboratori coordinati e continuativi, collaboratori a progetto, assegnisti e dottorandi di ricerca iscritti in via esclusiva alla Gestione Separata INPS, non pensionati e privi di partita IVA.",
    hint: "È l'indennità specifica per i parasubordinati e cococo della Gestione Separata.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_064",
    question: "Quale importante modifica ha apportato la Legge di Bilancio 2022 (L. 234/2021) alla platea dei datori di lavoro obbligati alla disciplina del Fondo di Integrazione Salariale (FIS)?",
    options: [
      { id: "A", text: "Ha ristretto il FIS ai soli datori di lavoro industriali con oltre 50 dipendenti" },
      { id: "B", text: "Ha esteso la tutela del FIS a tutti i datori di lavoro del settore privato che occupano almeno un dipendente, non coperti da CIGO o da Fondi di solidarietà bilaterali" },
      { id: "C", text: "Ha soppresso il FIS accorpandolo alla Cassa Integrazione Guadagni Straordinaria" },
      { id: "D", text: "Ha limitato l'accesso ai soli lavoratori con contratto di apprendistato professionalizzante" }
    ],
    correctAnswerId: "B",
    explanation: "La riforma degli ammortizzatori sociali (L. 234/2021) ha sancito il principio dell'universalizzazione delle tutele, estendendo l'obbligo di contribuzione e la tutela del FIS a tutti i datori di lavoro che occupano anche un solo dipendente (soglia dimensionale ridotta da più di 5 dipendenti ad almeno 1).",
    hint: "La soglia di applicazione è stata abbassata a partire da un solo dipendente.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_065",
    question: "A quanto ammonta la misura ordinaria dell'integrazione salariale (CIGO e CIGS) rispetto alla retribuzione globale che sarebbe spettata al lavoratore per le ore non lavorate?",
    options: [
      { id: "A", text: "Al 50% della retribuzione" },
      { id: "B", text: "All'80% della retribuzione globale di fatto, nei limiti dei massimali mensili stabiliti annualmente dalla legge" },
      { id: "C", text: "Al 100% della retribuzione netta contrattuale" },
      { id: "D", text: "Al 65% per i primi tre mesi e al 40% per i mesi successivi" }
    ],
    correctAnswerId: "B",
    explanation: "Ai sensi dell'art. 3 del D.Lgs. 148/2015, il trattamento di integrazione salariale ammonta all'80% della retribuzione globale che sarebbe spettata al lavoratore per le ore di lavoro non prestate, entro un limite massimale unico rivalutato annualmente.",
    hint: "L'aliquota standard è l'80% entro i massimali INPS.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_066",
    question: "Cos'è l'Assegno Unico e Universale (AUU) introdotto dal D.Lgs. 29 dicembre 2021, n. 230?",
    options: [
      { id: "A", text: "Un beneficio economico mensile attribuito a tutti i nuclei familiari per ogni figlio a carico fino al compimento dei 21 anni (e senza limiti di età per i figli disabili)" },
      { id: "B", text: "Una detrazione fiscale IRPEF fruibile unicamente con la dichiarazione dei redditi modello 730" },
      { id: "C", text: "Una prestazione riservata esclusivamente ai lavoratori dipendenti con ISEE inferiore a 5.000 euro" },
      { id: "D", text: "Un'indennità corrisposta solo ai genitori con almeno 4 figli conviventi" }
    ],
    correctAnswerId: "A",
    explanation: "L'AUU (D.Lgs. 230/2021) è un beneficio economico a carattere universalistico riconosciuto mensilmente dall'INPS per ciascun figlio a carico dal 7° mese di gravidanza fino a 21 anni (in presenza di percorsi di studio o lavoro) e senza alcun limite di età per i figli con disabilità.",
    hint: "Spetta fino a 21 anni e senza limiti di età per figli disabili.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_067",
    question: "L'Assegno Unico e Universale spetta anche in assenza di presentazione di un'attestazione ISEE valida?",
    options: [
      { id: "A", text: "No, la domanda viene respinta d'ufficio e non è ammessa alcuna erogazione" },
      { id: "B", text: "Sì, ma in tal caso viene corrisposto l'importo minimo di base previsto dalla tabella normativa" },
      { id: "C", text: "Sì, e viene corrisposto d'ufficio l'importo massimo" },
      { id: "D", text: "Solo per i nuclei residenti nelle Regioni a statuto speciale" }
    ],
    correctAnswerId: "B",
    explanation: "L'AUU è universale: in assenza di ISEE o per ISEE pari o superiore alla soglia massima (oltre 45.000 euro), l'INPS eroga comunque la prestazione nell'importo minimo previsto per legge per ciascun figlio.",
    hint: "Senza ISEE si ha comunque diritto alla quota minima base.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_068",
    question: "Quale istituto previdenziale consente al lavoratore di unificare gratuitamente tutti i periodi assicurativi non coincidenti posseduti in gestioni previdenziali diverse al fine di conseguire un unico trattamento pensionistico?",
    options: [
      { id: "A", text: "La ricongiunzione onerosa ex Legge 29/1979" },
      { id: "B", text: "Il cumulo dei periodi assicurativi ex art. 1, commi 239-246, Legge 228/2012" },
      { id: "C", text: "Il riscatto dei periodi di non lavoro ex D.Lgs. 564/1996" },
      { id: "D", text: "La surroga assicurativa tra fondi speciali" }
    ],
    correctAnswerId: "B",
    explanation: "Il cumulo gratuito introdotto dalla L. 228/2012 (e ampliato dalla L. 232/2016) consente la sommatoria gratuita di tutti i periodi contributivi non coincidenti accreditati presso diverse gestioni INPS e casse professionali, con liquidazione pro-rata della pensione da parte di ciascuna cassa.",
    hint: "È il meccanismo del cumulo gratuito della Legge 228/2012.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_069",
    question: "In cosa differisce la 'ricongiunzione' ex L. 29/1979 dal 'cumulo gratuito' dei periodi assicurativi?",
    options: [
      { id: "A", text: "La ricongiunzione comporta il trasferimento fisico effettivo dei contributi da una cassa all'altra ed è generalmente onerosa a carico del lavoratore" },
      { id: "B", text: "La ricongiunzione è sempre gratuita mentre il cumulo comporta una trattenuta mensile del 10%" },
      { id: "C", text: "La ricongiunzione è consentita solo per i periodi svolti all'estero in paesi extra-UE" },
      { id: "D", text: "Non vi è alcuna differenza, sono sinonimi procedurali" }
    ],
    correctAnswerId: "A",
    explanation: "La ricongiunzione (L. 29/1979 per lavoratori dipendenti e L. 45/1990 per liberi professionisti) trasferisce la contribuzione nell'ordinamento della gestione accentrante ed è onerosa a carico del richiedente (salvo eccezioni), a differenza del cumulo che è gratuito e a calcolo pro-quota.",
    hint: "La ricongiunzione trasferisce i contributi ed è a titolo oneroso.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_070",
    question: "Chi può accedere alla facoltà di riscatto agevolato del corso legale di laurea introdotto dall'art. 20 del D.L. 4/2019 (conv. in L. 26/2019)?",
    options: [
      { id: "A", text: "Tutti i laureati purché i periodi da riscattare si collochino nell'ambito del sistema di calcolo contributivo (ossia dal 1° gennaio 1996 in poi)" },
      { id: "B", text: "I soli lavoratori che abbiano maturato almeno 30 anni di servizio effettivo prima dell'istanza" },
      { id: "C", text: "Chiunque abbia conseguito la laurea con voto non inferiore a 105/110" },
      { id: "D", text: "Esclusivamente i dipendenti pubblici assunti a tempo determinato" }
    ],
    correctAnswerId: "A",
    explanation: "Il riscatto di laurea agevolato ex art. 20 D.L. 4/2019 richiede che i periodi del corso di studi si collochino nel sistema contributivo (dal 1/1/1996 o previo esercizio dell'opzione al contributivo) e calcola l'onere applicando l'aliquota contributiva IVS al minimale della Gestione Commercianti e Artigiani.",
    hint: "Periodi collocati temporalmente nel sistema contributivo (post-1995).",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_071",
    question: "Nel calcolo del riscatto di laurea agevolato (a percentuale fissa sul minimale IVS artigiani/esercenti), l'onere per ciascun anno da riscattare è all'incirca pari a:",
    options: [
      { id: "A", text: "Circa 6.000 euro all'anno, fiscalmente interamente deducibile dal reddito complessivo" },
      { id: "B", text: "25.000 euro all'anno senza alcuna agevolazione fiscale" },
      { id: "C", text: "1.200 euro forfettari una tantum" },
      { id: "D", text: "Una quota variabile tra il 50% e l'80% dell'ultima retribuzione annua lorda" }
    ],
    correctAnswerId: "A",
    explanation: "L'onere del riscatto agevolato si determina moltiplicando il minimale contributivo della Gestione Artigiani/Commercianti per l'aliquota del 33%, risultando pari a circa 6.000 euro per anno di corso riscattato, interamente deducibile dall'IRPEF (o detraibile al 50% per gli inoccupati).",
    hint: "È pari a circa 6.000 euro per anno con deducibilità fiscale.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_072",
    question: "Quale aliquota contributiva IVS si applica ai liberi professionisti privi di altra cassa previdenziale iscritti alla Gestione Separata INPS?",
    options: [
      { id: "A", text: "10% fisso" },
      { id: "B", text: "26,07% (comprensivo delle aliquote aggiuntive per maternità, malattia e ISCRO)" },
      { id: "C", text: "35,50%" },
      { id: "D", text: "15,00% come per la flat tax" }
    ],
    correctAnswerId: "B",
    explanation: "Per i professionisti con partita IVA iscritti alla Gestione Separata INPS non assicurati presso altre forme pensionistiche obbligatorie né pensionati, l'aliquota complessiva è pari al 26,07% (25% previdenza IVS + aliquote aggiuntive per prestazioni di maternità, congedo parentale, degenza ospedaliera e ISCRO).",
    hint: "Circa il 26% complessivo per professionisti non iscritti ad altra previdenza.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_073",
    question: "Cos'è l'indennità straordinaria di continuità reddituale e operativa (ISCRO) erogata dall'INPS?",
    options: [
      { id: "A", text: "Una cassa integrazione a favore dei lavoratori dipendenti del settore edilizio" },
      { id: "B", text: "Un ammortizzatore sociale a favore dei lavoratori autonomi iscritti alla Gestione Separata che hanno subito una significativa riduzione del reddito" },
      { id: "C", text: "Un assegno integrativo per i pensionati di vecchiaia residenti all'estero" },
      { id: "D", text: "Un contributo a fondo perduto per l'acquisto di macchinari industriali" }
    ],
    correctAnswerId: "B",
    explanation: "L'ISCRO (introdotta sperimentalmente e poi resa strutturale dalla Legge di Bilancio 2024) è una prestazione di sostegno al reddito riconosciuta per sei mesi ai liberi professionisti iscritti alla Gestione Separata che abbiano registrato un calo di reddito di almeno il 70% rispetto alla media dei due anni precedenti.",
    hint: "È l'ammortizzatore sociale per le partite IVA della Gestione Separata.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_074",
    question: "A quale categoria di soggetti compete l'Assegno Sociale disciplinato dall'art. 3, comma 6, della Legge 335/1995?",
    options: [
      { id: "A", text: "Ai soli lavoratori dipendenti con 40 anni di contributi che abbiano subito un infortunio sul lavoro" },
      { id: "B", text: "Ai cittadini italiani, comunitari ed equiparati residenti stabilmente in Italia, con almeno 67 anni di età, che si trovino in condizioni economiche disagiate" },
      { id: "C", text: "Ai minori orfani di entrambi i genitori fino alla maggiore età" },
      { id: "D", text: "Ai disoccupati di lunga durata di età compresa tra 45 e 55 anni" }
    ],
    correctAnswerId: "B",
    explanation: "L'Assegno Sociale è una prestazione assistenziale (non previdenziale) riconosciuta ai cittadini italiani, dell'UE ed extracomunitari con permesso di lungo soggiorno, con almeno 67 anni di età, residenti in via continuativa in Italia da almeno 10 anni, con redditi inferiori ai limiti annuali stabiliti dalla legge.",
    hint: "Prestazione assistenziale dai 67 anni condizionata a requisiti di reddito e residenza.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_075",
    question: "L'Assegno Sociale erogato dall'INPS può essere esportato e pagato all'estero qualora il titolare trasferisca la residenza fuori dall'Italia?",
    options: [
      { id: "A", text: "Sì, senza alcuna limitazione geografica" },
      { id: "B", text: "Sì, ma solo nei paesi dell'Unione Europea" },
      { id: "C", text: "No, l'Assegno Sociale è una prestazione assistenziale inesportabile e viene sospeso o revocato in caso di soggiorno o trasferimento all'estero" },
      { id: "D", text: "Sì, previo pagamento di una cauzione consolare" }
    ],
    correctAnswerId: "C",
    explanation: "In base alla normativa nazionale e ai regolamenti comunitari di coordinamento della sicurezza sociale (Reg. CE 883/2004), le prestazioni speciali a carattere non contributivo come l'Assegno Sociale non sono esportabili: il soggiorno all'estero per oltre 30 giorni ne determina la sospensione e il trasferimento della residenza la revoca.",
    hint: "Le prestazioni assistenziali non contributive sono inesportabili all'estero.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_076",
    question: "Qual è il requisito sanitario minimo per avere diritto all'assegno mensile di assistenza per invalidi civili parziali (art. 13 L. 118/1971)?",
    options: [
      { id: "A", text: "Una percentuale di invalidità civile compresa tra il 74% e il 99%" },
      { id: "B", text: "Una percentuale pari ad almeno il 50%" },
      { id: "C", text: "Il riconoscimento della totale inabilità al 100%" },
      { id: "D", text: "Una menomazione che riduca la capacità di guadagno ad almeno due terzi (67%)" }
    ],
    correctAnswerId: "A",
    explanation: "L'assegno mensile di invalidità civile spetta agli invalidi parziali di età compresa tra 18 e 67 anni cui sia stata riconosciuta una riduzione della capacità lavorativa compresa tra il 74% e il 99%, nel rispetto dei limiti di reddito personale fissati annualmente.",
    hint: "La soglia minima di invalidità civile è il 74%.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_077",
    question: "Quale condizione medica è richiesta per il riconoscimento dell'indennità di accompagnamento ai sensi della Legge 11 febbraio 1980, n. 18?",
    options: [
      { id: "A", text: "Invalidità al 74% con reddito inferiore a 10.000 euro" },
      { id: "B", text: "Totale inabilità (100%) e impossibilità di deambulare senza l'aiuto permanente di un accompagnatore oppure incapacità di compiere gli atti quotidiani della vita" },
      { id: "C", text: "Qualsiasi disabilità fisica o psichica certificata dal medico curante" },
      { id: "D", text: "Aver compiuto 80 anni ed essere titolare di pensione di vecchiaia" }
    ],
    correctAnswerId: "B",
    explanation: "L'indennità di accompagnamento è subordinata alla sussistenza contestuale del 100% di invalidità e dell'impossibilità di deambulare autonomamente senza l'aiuto permanente di un accompagnatore o della necessità di assistenza continua per compiere gli atti quotidiani della vita. Non è vincolata a limiti di reddito né di età.",
    hint: "100% di invalidità con impossibilità di deambulare o incapacità per gli atti quotidiani.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_078",
    question: "L'indennità di accompagnamento erogata dall'INPS è soggetta a limiti di reddito del beneficiario o del suo nucleo familiare?",
    options: [
      { id: "A", text: "Sì, ha gli stessi limiti di reddito dell'Assegno Sociale" },
      { id: "B", text: "No, è corrisposta al solo titolo della minorazione fisica o psichica, indipendentemente dalle condizioni economiche e reddituali dell'invalido" },
      { id: "C", text: "Sì, solo se il richiedente ha meno di 67 anni" },
      { id: "D", text: "È proporzionale al valore ISEE socio-sanitario" }
    ],
    correctAnswerId: "B",
    explanation: "L'indennità di accompagnamento è una prestazione economica assistenziale a carattere universale e non reddituale: viene erogata a prescindere dal reddito del beneficiario e dei suoi familiari e non è assoggettabile a IRPEF.",
    hint: "È indipendente dal reddito dell'invalido.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_079",
    question: "Cosa si intende per 'flusso Uniemens' trasmesso mensilmente dai datori di lavoro all'INPS?",
    options: [
      { id: "A", text: "Il sistema telematico di dichiarazione mensile unificata dei dati retributivi e delle informazioni contributive dei lavoratori dipendenti e parasubordinati" },
      { id: "B", text: "La comunicazione di assunzione trasmessa ai Centri per l'Impiego" },
      { id: "C", text: "Il bonifico bancario cumulativo per il versamento delle ritenute IRPEF" },
      { id: "D", text: "La richiesta preventiva di autorizzazione alla cassa integrazione" }
    ],
    correctAnswerId: "A",
    explanation: "L'Uniemens è il flusso informativo telematico mensile attraverso il quale i datori di lavoro denunciano all'INPS le retribuzioni corrisposte ai propri dipendenti, i dati previdenziali e assistenziali e le informazioni utili per il calcolo dei contributi e l'alimentazione delle posizioni assicurative individuali.",
    hint: "È la denuncia mensile unificata dei dati retributivi e contributivi.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_080",
    question: "Entro quale termine deve essere inviato il flusso Uniemens all'INPS per ciascun periodo di paga?",
    options: [
      { id: "A", text: "Entro il giorno 16 del mese successivo a quello di competenza" },
      { id: "B", text: "Entro l'ultimo giorno del mese successivo a quello di competenza" },
      { id: "C", text: "Entro 5 giorni dalla chiusura delle buste paga" },
      { id: "D", text: "Trimestralmente entro la fine del mese successivo al trimestre solare" }
    ],
    correctAnswerId: "B",
    explanation: "La trasmissione del flusso Uniemens deve avvenire entro l'ultimo giorno del mese successivo a quello di competenza (mentre il pagamento dei relativi contributi tramite F24 scade il giorno 16 del mese successivo).",
    hint: "La trasmissione telematica scade l'ultimo giorno del mese successivo.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_081",
    question: "Quale funzione assolve il modello DM10/Virtuale nel flusso Uniemens gestito dal Funzionario INPS?",
    options: [
      { id: "A", text: "Rappresenta il quadro contabile riepilogativo di debito/credito aziendale che confronta i contributi dovuti con le somme anticipate per conto dell'INPS (es. malattia, maternità, ANF/AUU conguagli)" },
      { id: "B", text: "È il certificato di idoneità sanitaria al lavoro" },
      { id: "C", text: "È il contratto collettivo aziendale depositato presso l'INL" },
      { id: "D", text: "È la fattura elettronica emessa dai fornitori dell'ente" }
    ],
    correctAnswerId: "A",
    explanation: "Il quadro DM10 virtuale del flusso Uniemens evidenzia il saldo contabile tra i contributi a debito dell'azienda e le somme poste a conguaglio (a credito per indennità anticipate dal datore di lavoro per conto dell'Istituto come malattia, maternità, congedi parentali).",
    hint: "Saldo contabile tra debiti contributivi e crediti per indennità anticipate.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_082",
    question: "Cosa accade nel caso in cui un datore di lavoro ometta il versamento delle ritenute previdenziali operate sulla retribuzione dei lavoratori per un importo superiore a 10.000 euro annui (art. 2, comma 1-bis, D.L. 463/1983)?",
    options: [
      { id: "A", text: "Si configura una fattispecie di reato punita con la reclusione fino a tre anni, salvo che il versamento sia effettuato entro tre mesi dalla contestazione" },
      { id: "B", text: "Si applica unicamente una sanzione amministrativa pecuniaria da 100 a 500 euro" },
      { id: "C", text: "Il debito decade automaticamente per prescrizione biennale" },
      { id: "D", text: "L'azienda viene commissariata d'ufficio dal Prefetto" }
    ],
    correctAnswerId: "A",
    explanation: "L'omesso versamento delle ritenute previdenziali superiori a 10.000 euro annui costituisce reato punito con la reclusione fino a tre anni e la multa. Il datore di lavoro non è punibile se provvede al versamento entro tre mesi dalla notifica della contestazione o dell'accertamento dell'INPS.",
    hint: "Sopra i 10.000 euro annui scatta il reato penale, con causa di non punibilità se paga entro 3 mesi.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_083",
    question: "Qual è il termine ordinario di prescrizione dei contributi di previdenza e di assistenza sociale obbligatoria ai sensi dell'art. 3 della Legge 335/1995?",
    options: [
      { id: "A", text: "Dieci anni per qualsiasi gestione" },
      { id: "B", text: "Cinque anni (salvi i casi di denuncia del lavoratore entro i termini che elevano la prescrizione a dieci anni per taluni periodi pregressi)" },
      { id: "C", text: "Venti anni come per i diritti reali" },
      { id: "D", text: "Due anni dalla scadenza del modello Uniemens" }
    ],
    correctAnswerId: "B",
    explanation: "Ai sensi dell'art. 3, commi 9 e 10, della L. 335/1995, le contribuzioni di previdenza e di assistenza sociale obbligatoria si prescrivono con il decorso di cinque anni dalla data di scadenza del termine di versamento.",
    hint: "La prescrizione ordinaria dei contributi previdenziali è di 5 anni.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_084",
    question: "Cosa prevede il principio dell'automaticità delle prestazioni previdenziali sancito dall'art. 2116 del Codice Civile?",
    options: [
      { id: "A", text: "Le prestazioni previdenziali sono dovute al lavoratore anche quando l'imprenditore non ha versato regolarmente i contributi dovuti, nei limiti stabiliti dalle leggi speciali" },
      { id: "B", text: "Le pensioni vengono accreditate automaticamente al compimento del sessantesimo anno di età senza domanda" },
      { id: "C", text: "I datori di lavoro sono sollevati da qualsiasi responsabilità contributiva in caso di insolvenza" },
      { id: "D", text: "La pensione aumenta automaticamente dell'8% ogni anno a prescindere dal PIL" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2116 c.c. tutela il lavoratore subordinato stabilendo che le prestazioni previdenziali sono erogate dall'Istituto assicuratore anche in caso di mancato o irregolare versamento dei contributi da parte del datore di lavoro, salvo i limiti di prescrizione del diritto alla contribuzione.",
    hint: "Tutela il lavoratore garantendo le prestazioni anche se i contributi sono stati omessi dal datore.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_085",
    question: "Il principio dell'automaticità delle prestazioni ex art. 2116 c.c. si applica anche ai lavoratori autonomi e ai professionisti iscritti alla Gestione Separata?",
    options: [
      { id: "A", text: "Sì, opera integralmente ed esattamente come per i lavoratori subordinati" },
      { id: "B", text: "No, per i lavoratori autonomi e i professionisti vale la regola generale secondo cui le prestazioni sono subordinate all'effettivo e regolare versamento della contribuzione" },
      { id: "C", text: "Solo se il professionista ha un reddito inferiore a 15.000 euro" },
      { id: "D", text: "Solo per le prestazioni di maternità e malattia, ma non per la pensione" }
    ],
    correctAnswerId: "B",
    explanation: "La giurisprudenza consolidata della Corte di Cassazione e della Corte Costituzionale esclude l'applicabilità dell'art. 2116 c.c. ai lavoratori autonomi (artigiani, commercianti, coltivatori diretti e liberi professionisti), in quanto responsabili diretti del proprio obbligo contributivo.",
    hint: "Per gli autonomi non vale l'automaticità: se non versano, non maturano la prestazione.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_086",
    question: "Cos'è la rendita vitalizia reversibile di cui all'art. 13 della Legge 12 agosto 1962, n. 1338?",
    options: [
      { id: "A", text: "Una polizza assicurativa privata stipulata dai dirigenti pubblici" },
      { id: "B", text: "Uno strumento che consente al datore di lavoro o al lavoratore stesso di riscattare, mediante versamento di una riserva matematica, periodi contributivi omessi e caduti in prescrizione" },
      { id: "C", text: "Un vitalizio concesso ai superstiti di vittime del dovere" },
      { id: "D", text: "Una maggiorazione dell'assegno di reversibilità per vedove senza figli" }
    ],
    correctAnswerId: "B",
    explanation: "L'art. 13 della Legge 1338/1962 consente di costituire presso l'INPS una rendita vitalizia per coprire periodi di lavoro per i quali il datore di lavoro ha omesso il versamento dei contributi e per i quali è intervenuta la prescrizione quinquennale, dietro pagamento della relativa riserva matematica.",
    hint: "Permette di recuperare i contributi caduti in prescrizione tramite riserva matematica.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_087",
    question: "A chi spetta la pensione ai superstiti nella forma della 'pensione di reversibilità'?",
    options: [
      { id: "A", text: "Ai familiari superstiti del lavoratore deceduto che non era ancora titolare di trattamento pensionistico" },
      { id: "B", text: "Ai familiari del pensionato deceduto aventi diritto (coniuge, figli minori o studenti/inabili, e in subordine genitori o fratelli a carico)" },
      { id: "C", text: "Al datore di lavoro che ha anticipato le spese del funerale" },
      { id: "D", text: "Esclusivamente ai figli maggiorenni disoccupati" }
    ],
    correctAnswerId: "B",
    explanation: "La pensione di reversibilità spetta ai familiari superstiti in caso di decesso di un soggetto già titolare di pensione diretta (di vecchiaia, anticipata o inabilità). Se invece il deceduto era lavoratore attivo, la prestazione ai superstiti assume la denominazione di 'pensione indiretta'.",
    hint: "Spetta ai familiari quando il deceduto era già titolare di pensione.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_088",
    question: "Quale percentuale della pensione del dante causa spetta di norma al coniuge superstite in assenza di figli aventi diritto?",
    options: [
      { id: "A", text: "100%" },
      { id: "B", text: "80%" },
      { id: "C", text: "60%" },
      { id: "D", text: "40%" }
    ],
    correctAnswerId: "C",
    explanation: "Ai sensi dell'art. 1, comma 41, della Legge 335/1995 e della tabella F allegata, l'aliquota di reversibilità spettante al coniuge superstite in assenza di figli è pari al 60% del trattamento goduto o spettante al dante causa.",
    hint: "La quota spettante al solo coniuge superstite è il 60%.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_089",
    question: "I trattamenti pensionistici ai superstiti possono subire riduzioni per cumulo con i redditi personali del beneficiario?",
    options: [
      { id: "A", text: "No, la pensione ai superstiti è intangibile e non può mai essere decurtata" },
      { id: "B", text: "Sì, subiscono una riduzione del 25%, 40% o 50% in base a scaglioni di reddito personale superiori a tre, quattro o cinque volte il trattamento minimo INPS (salvo che vi siano figli minori o inabili)" },
      { id: "C", text: "Vengono azzerati totalmente se il reddito supera i 10.000 euro annui" },
      { id: "D", text: "Subiscono una riduzione solo se il beneficiario risiede all'estero" }
    ],
    correctAnswerId: "B",
    explanation: "In base alla Tabella F della L. 335/1995, la pensione ai superstiti si riduce del 25%, 40% o 50% se il titolare possiede altri redditi che superano rispettivamente 3, 4 o 5 volte il trattamento minimo annuo. I tagli non si applicano se nel nucleo vi sono figli minori, studenti o inabili.",
    hint: "Tagli del 25%, 40% o 50% a seconda del reddito, esclusi se ci sono figli a carico.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_090",
    question: "Cosa stabilisce la c.d. 'perequazione automatica' delle pensioni?",
    options: [
      { id: "A", text: "La rivalutazione annuale dei trattamenti pensionistici all'inizio di ciascun anno per adeguarli alla variazione del costo della vita calcolata dall'ISTAT" },
      { id: "B", text: "La decurtazione degli assegni più elevati per finanziare la cassa integrazione" },
      { id: "C", text: "L'allineamento automatico delle pensioni italiane alla media dei paesi dell'area OCSE" },
      { id: "D", text: "L'aumento fisso di 100 euro per ogni anno di anzianità maturata" }
    ],
    correctAnswerId: "A",
    explanation: "La perequazione automatica delle pensioni è il meccanismo legale di adeguamento dell'importo dei trattamenti pensionistici all'inflazione e all'aumento del costo della vita, misurato dall'indice ISTAT dei prezzi al consumo per le famiglie di operai e impiegati (FOI).",
    hint: "È l'adeguamento annuale dell'assegno all'inflazione misurata dall'ISTAT.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_091",
    question: "Quali sono i requisiti contributivi ordinari per il riconoscimento della pensione di inabilità ordinaria ai sensi della Legge 222/1984?",
    options: [
      { id: "A", text: "Almeno 20 anni di contributi effettivi di cui 10 nell'ultimo quinquennio" },
      { id: "B", text: "Almeno 5 anni di contribuzione (260 contributi settimanali), di cui almeno 3 anni (156 contributi settimanali) nel quinquennio precedente la data di presentazione della domanda" },
      { id: "C", text: "Almeno 10 anni di contribuzione continuativa senza alcuna interruzione" },
      { id: "D", text: "Non è richiesto alcun requisito contributivo, essendo sufficiente l'iscrizione all'INPS" }
    ],
    correctAnswerId: "B",
    explanation: "Ai sensi degli artt. 1 e 4 della L. 222/1984, sia per l'assegno ordinario di invalidità che per la pensione di inabilità lavorativa è richiesto il versamento di almeno 5 anni di contributi, di cui almeno 3 anni nel quinquennio antecedente la domanda.",
    hint: "Requisito contributivo: 5 anni di contributi di cui 3 nel quinquennio antecedente.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_092",
    question: "Cosa distingue l'Assegno Ordinario di Invalidità (AOI) dalla Pensione di Inabilità ai sensi della Legge 222/1984?",
    options: [
      { id: "A", text: "L'AOI richiede una riduzione permanente a meno di un terzo della capacità lavorativa ed è compatibile con lo svolgimento di attività lavorativa; l'inabilità richiede l'assoluta e permanente impossibilità a qualsiasi attività ed è incompatibile con il lavoro" },
      { id: "B", text: "L'AOI spetta solo ai dipendenti pubblici, l'inabilità solo ai lavoratori autonomi" },
      { id: "C", text: "L'AOI è erogato a vita fin dal primo rilascio, mentre l'inabilità scade dopo 6 mesi" },
      { id: "D", text: "L'inabilità richiede 30 anni di contribuzione, l'AOI solo 1 anno" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1 della L. 222/1984 definisce l'invalidità come riduzione a meno di un terzo della capacità di lavoro (compatibile con il lavoro), mentre l'art. 2 definisce l'inabilità come assoluta e permanente impossibilità a svolgere qualsiasi attività lavorativa (comportando la cancellazione da albi e la cessazione del rapporto).",
    hint: "L'AOI consente di continuare a lavorare, l'inabilità è incompatibile con il lavoro.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_093",
    question: "Qual è la durata dell'Assegno Ordinario di Invalidità e quando diventa definitivo?",
    options: [
      { id: "A", text: "Ha durata triennale, può essere rinnovato previa domanda e visita medica, e dopo tre riconoscimenti consecutivi è confermato automaticamente (salva la facoltà di revisione dell'INPS)" },
      { id: "B", text: "Ha durata annuale e non può essere rinnovato più di una volta" },
      { id: "C", text: "È a tempo indeterminato fin dalla prima concessione senza possibilità di verifica" },
      { id: "D", text: "Dura 5 anni e poi si trasforma obbligatoriamente in pensione anticipata" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 7, della L. 222/1984 stabilisce che l'assegno è riconosciuto per un periodo di tre anni ed è rinnovabile per periodi della stessa durata su domanda dell'interessato. Dopo tre riconoscimenti consecutivi (ossia 9 anni) l'assegno è confermato automaticamente, ferma restando la facoltà di revisione sanitaria dell'Istituto.",
    hint: "Triennale, confermato automaticamente dopo 3 concessioni consecutive.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_094",
    question: "Al compimento dell'età anagrafica per la vecchiaia (attualmente 67 anni), in cosa si trasforma l'Assegno Ordinario di Invalidità in favore del titolare che ha cessato il lavoro subordinato?",
    options: [
      { id: "A", text: "In pensione di vecchiaia, purché sussistano i requisiti di contribuzione prescritti" },
      { id: "B", text: "In Assegno Sociale d'ufficio decurtato del 50%" },
      { id: "C", text: "Viene revocato definitivamente senza alcuna sostituzione" },
      { id: "D", text: "In rendita vitalizia INAIL" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 1, comma 10, della L. 222/1984, al compimento dell'età stabilita per il pensionamento di vecchiaia, l'assegno ordinario di invalidità si trasforma in pensione di vecchiaia, a condizione che il titolare abbia cessato il rapporto di lavoro dipendente e possieda i requisiti contributivi.",
    hint: "Si trasforma in pensione di vecchiaia al compimento dell'età prevista.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_095",
    question: "Cos'è il Durc On Line (Documento Unico di Regolarità Contributiva)?",
    options: [
      { id: "A", text: "L'attestazione telematica della regolarità dei pagamenti e degli adempimenti previdenziali, assistenziali e assicurativi nei confronti di INPS, INAIL e Casse Edili" },
      { id: "B", text: "Il certificato penale del datore di lavoro" },
      { id: "C", text: "Il registro dei contratti stipulati dalla PA con i fornitori" },
      { id: "D", text: "La dichiarazione di conformità degli impianti aziendali" }
    ],
    correctAnswerId: "A",
    explanation: "Il DURC online (D.M. 30 gennaio 2015) è il certificato con cui, in tempo reale con modalità telematiche, viene attestata la regolarità contributiva di un'impresa nei confronti di INPS, INAIL e (per l'edilizia) Casse Edili, indispensabile per appalti pubblici, benefici normativi e contributivi.",
    hint: "Attesta la regolarità contributiva nei confronti di INPS, INAIL e Casse Edili.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_096",
    question: "Qual è la durata di validità del Documento Unico di Regolarità Contributiva (DURC) dal momento del rilascio?",
    options: [
      { id: "A", text: "30 giorni" },
      { id: "B", text: "60 giorni" },
      { id: "C", text: "120 giorni" },
      { id: "D", text: "Un anno solare" }
    ],
    correctAnswerId: "C",
    explanation: "Ai sensi dell'art. 7 del D.M. 30 gennaio 2015, il DURC online ha una validità di 120 giorni dalla data di emissione del documento, periodo entro il quale può essere utilizzato per tutti i rapporti con stazioni appaltanti e amministrazioni procedenti.",
    hint: "La validità standard del DURC è di 120 giorni.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_097",
    question: "Cosa accade se dall'interrogazione telematica per il DURC emerge un'irregolarità contributiva dell'impresa?",
    options: [
      { id: "A", text: "Viene emesso all'istante un DURC negativo definitivo con interdizione immediata dagli appalti" },
      { id: "B", text: "L'INPS o l'ente previdente invia un 'invito a regolarizzare', assegnando un termine di 15 giorni per sanare la pendenza o fornire chiarimenti" },
      { id: "C", text: "L'impresa viene multata automaticamente con una penale di 10.000 euro" },
      { id: "D", text: "La pratica viene archiviata e la richiesta cancellata senza comunicazione" }
    ],
    correctAnswerId: "B",
    explanation: "Qualora emerga una causa ostativa al rilascio del DURC, l'ente notifica all'impresa o all'intermediario l'invito a regolarizzare (art. 4 D.M. 30/1/2015), concedendo 15 giorni di tempo per versare i contributi o regolarizzare l'anomalia prima di emettere esito negativo.",
    hint: "Invito a regolarizzare con termine di 15 giorni prima del diniego.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_PREV_098",
    question: "Cosa prevede l'intervento sostitutivo della stazione appaltante in caso di DURC negativo dell'appaltatore (art. 11, comma 6, D.Lgs. 36/2023 - Codice dei Contratti Pubblici)?",
    options: [
      { id: "A", text: "La stazione appaltante trattiene dal pagamento dovuto all'appaltatore l'importo corrispondente all'inadempienza contributiva e lo versa direttamente all'INPS e agli altri istituti previdenziali" },
      { id: "B", text: "La stazione appaltante annulla l'appalto e non versa alcun corrispettivo a nessuno" },
      { id: "C", text: "La stazione appaltante subentra nella gestione societaria dell'impresa appaltatrice" },
      { id: "D", text: "Il credito contributivo viene integralmente cancellato" }
    ],
    correctAnswerId: "A",
    explanation: "In caso di inadempienza contributiva risultante dal DURC, la stazione appaltante trattiene dalle somme dovute per lo stato avanzamento lavori l'importo corrispondente al debito contributivo e previdenziale e lo versa direttamente agli enti previdenziali creditori.",
    hint: "Pagamento diretto da parte della stazione appaltante agli enti previdenziali.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_PREV_099",
    question: "In caso di diniego di una prestazione previdenziale da parte dell'INPS, entro quale termine perentorio l'interessato deve proporre ricorso amministrativo dinanzi al competente Comitato dell'Istituto?",
    options: [
      { id: "A", text: "30 giorni" },
      { id: "B", text: "60 giorni" },
      { id: "C", text: "90 giorni dalla data di ricezione della comunicazione del provvedimento" },
      { id: "D", text: "120 giorni" }
    ],
    correctAnswerId: "C",
    explanation: "Ai sensi dell'art. 46 della L. 88/1989 e delle disposizioni regolamentari INPS, contro i provvedimenti dell'Istituto in materia di prestazioni è ammesso ricorso amministrativo al comitato competente entro il termine perentorio di 90 giorni dalla comunicazione dell'atto.",
    hint: "Termine perentorio di 90 giorni dalla notifica o comunicazione del diniego.",
    level: "base"
  },
  {
    id: "Q_PECS_PREV_100",
    question: "Cosa accade se il Comitato INPS non si pronuncia sul ricorso amministrativo entro il termine di 90 giorni dalla presentazione?",
    options: [
      { id: "A", text: "Il ricorso si intende accolto a tutti gli effetti per silenzio assenso" },
      { id: "B", text: "Il ricorso si intende respinto a tutti gli effetti (silenzio-rigetto), consentendo all'interessato di adire l'autorità giudiziaria ordinaria in funzione di giudice del lavoro ex art. 443 c.p.c." },
      { id: "C", text: "Il funzionario che ha istruito la pratica decade automaticamente dall'impiego" },
      { id: "D", text: "Il termine di prescrizione giudiziaria viene prorogato di cinque anni" }
    ],
    correctAnswerId: "B",
    explanation: "Decorsi inutilmente 90 giorni dalla presentazione del ricorso senza che il comitato si sia pronunciato, si forma il silenzio-rigetto: la fase amministrativa si considera esaurita e l'interessato può proporre ricorso giudiziario dinanzi al Tribunale del Lavoro entro il termine di decadenza triennale.",
    hint: "Si forma il silenzio-rigetto che apre la via al ricorso giudiziario.",
    level: "intermedio"
  }
];

const merged = [...existing, ...newQuestions];
fs.writeFileSync(targetFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Successfully added ${newQuestions.length} questions to previdenza_inps.json. Total questions: ${merged.length}`);
