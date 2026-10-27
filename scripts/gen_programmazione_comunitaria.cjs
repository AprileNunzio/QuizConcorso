const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: "Q_PROG_COM_001",
    question: "Che cos'è il Quadro Finanziario Pluriennale (QFP) dell'Unione Europea?",
    options: [
      { id: "A", text: "Il piano di bilancio a lungo termine dell'UE che fissa per un periodo di almeno 5 anni (di norma 7 anni) i tetti massimi di spesa per categoria di politiche comunitarie" },
      { id: "B", text: "Il bilancio consolidato delle regioni italiane" },
      { id: "C", text: "Un prestito bancario concesso dalla BCE ai Comuni dissestati" },
      { id: "D", text: "Il regolamento per la stampa delle banconote euro" }
    ],
    correctAnswerId: "A",
    explanation: "Il Quadro Finanziario Pluriennale (art. 312 TFUE) stabilisce l'ammontare massimo delle risorse per ciascun settore di spesa dell'Unione Europea per un ciclo settennale (attualmente ciclo 2021-2027), vincolando i bilanci annuali dell'UE.",
    hint: "Bilancio programmatico settennale dell'UE che definisce i massimali di spesa per rubrica.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_002",
    question: "Quale regolamento europeo stabilisce le disposizioni comuni (RDC) applicabili ai fondi della Politica di Coesione per il periodo 2021-2027?",
    options: [
      { id: "A", text: "Il Regolamento (UE) 2021/1060" },
      { id: "B", text: "Il Regolamento (UE) 2016/679" },
      { id: "C", text: "Il Regolamento (CE) 2000/1" },
      { id: "D", text: "La Direttiva 2014/24/UE" }
    ],
    correctAnswerId: "A",
    explanation: "Il Regolamento (UE) 2021/1060 del 24 giugno 2021 contiene le disposizioni comuni (Common Provisions Regulation - CPR) applicabili a 8 fondi europei per il ciclo di programmazione 2021-2027 (FESR, FSE+, Fondo di Coesione, JTF, FEAMPA, ecc.).",
    hint: "Regolamento RDC n. 1060 del 2021.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_003",
    question: "Quali sono i principali Fondi Strutturali e di Investimento Europei (Fondi SIE) a gestione concorrente per la coesione economica, sociale e territoriale?",
    options: [
      { id: "A", text: "Il FESR (Fondo Europeo di Sviluppo Regionale) e il FSE+ (Fondo Sociale Europeo Plus)" },
      { id: "B", text: "L'INPS e l'INAIL a livello comunitario" },
      { id: "C", text: "Il Fondo Monetario Internazionale e la Banca Mondiale" },
      { id: "D", text: "La Cassa Depositi e Prestiti e il Fondo Salva Stati" }
    ],
    correctAnswerId: "A",
    explanation: "I due pilastri storici dei fondi strutturali europei sono il FESR (infrastrutture, innovazione, sviluppo produttivo regionale) e il FSE+ (occupazione, formazione, competenze, inclusione sociale e lotta alla povertà).",
    hint: "FESR (sviluppo regionale/infrastrutture) e FSE+ (capitale umano/lavoro/inclusione).",
    level: "base"
  },
  {
    id: "Q_PROG_COM_004",
    question: "Qual è la missione principale del Fondo Europeo di Sviluppo Regionale (FESR)?",
    options: [
      { id: "A", text: "Contribuire a ridurre i divari tra i livelli di sviluppo delle varie regioni dell'Unione e il ritardo delle regioni meno favorite" },
      { id: "B", text: "Finanziare esclusivamente le pensioni di vecchiaia dei lavoratori europei" },
      { id: "C", text: "Gestire il debito pubblico della zona euro" },
      { id: "D", text: "Assicurare la difesa militare comune dell'Europa" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 176 TFUE dispone che il FESR è destinato a concorrere alla correzione dei principali squilibri regionali nell'Unione, sostenendo investimenti produttivi, transizione digitale ed ecologica, PMI e infrastrutture.",
    hint: "Riduzione dei divari di sviluppo socio-economico tra le regioni europee.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_005",
    question: "Quali sono i 5 Obiettivi Strategici di Policy (OP) su cui si concentra la Politica di Coesione UE per il periodo 2021-2027?",
    options: [
      { id: "A", text: "Un'Europa più intelligente (OP1), più verde (OP2), più connessa (OP3), più sociale (OP4) e più vicina ai cittadini (OP5)" },
      { id: "B", text: "Agricoltura, pesca, trasporti marittimi, commercio e telecomunicazioni" },
      { id: "C", text: "Meno tasse, più debito, inflazione zero, frontiere chiuse e svalutazione" },
      { id: "D", text: "Finanza, borsa, banche, investimenti esteri e valuta" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 5 del Reg. (UE) 2021/1060 struttura la politica di coesione su 5 Obiettivi di Policy: OP1 Smarter Europe (innovazione e digitalizzazione); OP2 Greener Europe (clima e transizione verde); OP3 Connected Europe (trasporti ed energia); OP4 More Social Europe (lavoro, salute e inclusione); OP5 Europe Closer to Citizens (sviluppo territoriale locale e urbano).",
    hint: "I 5 OP: Più Intelligente, Più Verde, Più Connessa, Più Sociale, Più Vicina ai Cittadini.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_006",
    question: "Che cos'è l'Accordo di Partenariato stipulato tra l'Italia e la Commissione Europea?",
    options: [
      { id: "A", text: "Il documento strategico nazionale che definisce gli orientamenti, i fabbisogni, la concentrazione tematica e la ripartizione dei fondi europei per il ciclo 2021-2027 a livello statale e regionale" },
      { id: "B", text: "Il trattato di pace tra i Paesi fondatori dell'UE" },
      { id: "C", text: "Il contratto di assunzione dei funzionari comunitari italiani" },
      { id: "D", text: "L'accordo doganale con la Gran Bretagna post-Brexit" }
    ],
    correctAnswerId: "A",
    explanation: "L'Accordo di Partenariato (art. 10 Reg. 2021/1060) è il quadro strategico concordato tra lo Stato membro e la Commissione UE, che fissa la strategia di sviluppo del Paese e l'allocazione delle risorse comunitarie nei Programmi Nazionali (PN) e Programmi Regionali (PR/POR).",
    hint: "Quadro strategico d'intesa tra Governo italiano e Bruxelles per l'intero settennato.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_007",
    question: "Quale autorità è formalmente responsabile della corretta ed efficace gestione e attuazione di un Programma Operativo cofinanziato dai fondi UE?",
    options: [
      { id: "A", text: "L'Autorità di Gestione (AdG)" },
      { id: "B", text: "Il Tribunale Amministrativo Regionale" },
      { id: "C", text: "Il Sindaco del capoluogo di Regione" },
      { id: "D", text: "La Corte di Giustizia di Lussemburgo" }
    ],
    correctAnswerId: "A",
    explanation: "L'Autorità di Gestione (AdG - art. 72 Reg. 2021/1060) è l'organo amministrativo deputato alla gestione operativa del programma: pubblica gli avvisi/bandi, seleziona i progetti da finanziare, firma le convenzioni, monitora l'avanzamento ed effettua i controlli di primo livello.",
    hint: "AdG: presidia la programmazione, emanazione bandi, selezione progetti e controlli di 1° livello.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_008",
    question: "Quale organismo indipendente svolge i controlli di secondo livello e la certificazione di audit sui sistemi di gestione e sui conti del programma?",
    options: [
      { id: "A", text: "L'Autorità di Audit (AdA)" },
      { id: "B", text: "Il Comitato economico e sociale locale" },
      { id: "C", text: "I beneficiari finali riuniti in assemblea" },
      { id: "D", text: "Il tesoriere comunale" }
    ],
    correctAnswerId: "A",
    explanation: "L'Autorità di Audit (AdA - art. 77 Reg. 2021/1060) opera in totale indipendenza funzionale rispetto all'AdG: effettua audit sui sistemi di gestione e controllo e audit su un campione statisticamente rappresentativo di operazioni, rilasciando il parere annuale di audit alla Commissione UE.",
    hint: "Audit indipendente di secondo livello sul corretto funzionamento dell'intero sistema.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_009",
    question: "Quale organo collegiale vigila sull'attuazione del programma operativo e approva le modifiche ai criteri di selezione delle operazioni?",
    options: [
      { id: "A", text: "Il Comitato di Sorveglianza (CdS)" },
      { id: "B", text: "Il Consiglio dei Ministri dell'Interno" },
      { id: "C", text: "L'ordine provinciale dei revisori dei conti" },
      { id: "D", text: "La consulta delle associazioni sportive" }
    ],
    correctAnswerId: "A",
    explanation: "Il Comitato di Sorveglianza (art. 38 Reg. 2021/1060) è istituito entro 3 mesi dall'approvazione del programma: riunisce rappresentanti dell'AdG, dei ministeri competenti, della Commissione UE, degli enti locali e delle parti economiche e sociali, esaminando i progressi e approvando criteri di selezione e relazioni.",
    hint: "Comitato di Sorveglianza paritetico con le parti economiche e sociali e Commissione UE.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_010",
    question: "In che cosa consiste la regola del 'disimpegno automatico' (regola N+3) ex art. 105 del Regolamento (UE) 2021/1060?",
    options: [
      { id: "A", text: "La Commissione disimpegna la parte di importo impegnato in un dato anno che non è stata liquidata a titolo di prefinanziamento o per la quale non è stata presentata domanda di pagamento entro il 31 dicembre del terzo anno successivo (N+3)" },
      { id: "B", text: "Il divieto per i Comuni di chiedere mutui dopo tre anni" },
      { id: "C", text: "L'obbligo di restituire tutti i fondi ricevuti entro 3 mesi" },
      { id: "D", text: "La cancellazione dei debiti non riscossi entro tre settimane" }
    ],
    correctAnswerId: "A",
    explanation: "La regola N+3 fissa una scadenza perentoria per la spesa: le risorse impegnate dall'UE nell'anno N devono essere effettivamente spese e rendicontate dagli Stati entro il 31 dicembre dell'anno N+3, pena la perdita definitiva e automatica dei fondi non spesi (disimpegno).",
    hint: "Entro 3 anni (N+3) i fondi impegnati devono essere spesi e certificati, pena la revoca.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_011",
    question: "Qual è lo strumento straordinario di ripresa economica dell'Unione Europea istituito per fronteggiare le conseguenze della pandemia da COVID-19?",
    options: [
      { id: "A", text: "Next Generation EU (NGEU), attuato principalmente attraverso il Dispositivo per la Ripresa e la Resilienza (RRF)" },
      { id: "B", text: "Il Meccanismo Europeo di Stabilità (MES) ordinario" },
      { id: "C", text: "Il Piano Marshall delle Nazioni Unite" },
      { id: "D", text: "Il Fondo di Solidarietà per il commercio" }
    ],
    correctAnswerId: "A",
    explanation: "Next Generation EU (Reg. UE 2021/241) è il programma straordinario da oltre 800 miliardi di euro finanziato mediante emissione di debito comune europeo, il cui fulcro operativo è il Dispositivo per la Ripresa e la Resilienza (RRF - Recovery and Resilience Facility).",
    hint: "Next Generation EU e dispositivo RRF.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_012",
    question: "In quante Missioni tematiche è articolato il Piano Nazionale di Ripresa e Resilienza (PNRR) dell'Italia?",
    options: [
      { id: "A", text: "6 Missioni" },
      { id: "B", text: "12 Missioni" },
      { id: "C", text: "3 Missioni" },
      { id: "D", text: "20 Missioni" }
    ],
    correctAnswerId: "A",
    explanation: "Il PNRR italiano è suddiviso in 6 Missioni: M1 Digitalizzazione, innovazione, competitività e cultura; M2 Rivoluzione verde e transizione ecologica; M3 Infrastrutture per la mobilità sostenibile; M4 Istruzione e ricerca; M5 Inclusione e coesione; M6 Salute (più il capitolo REPowerEU).",
    hint: "Le storiche 6 Missioni del PNRR italiano.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_013",
    question: "Qual è la differenza fondamentale tra 'Milestone' e 'Target' nella disciplina di attuazione del PNRR?",
    options: [
      { id: "A", text: "I Milestone sono traguardi qualitativi (es. approvazione di riforme legislative o operative); i Target sono obiettivi quantitativi misurabili (es. chilometri di ferrovie, posti asili nido, edifici efficientati)" },
      { id: "B", text: "I Milestone riguardano le sole Regioni, i Target i soli Comuni" },
      { id: "C", text: "I Milestone sono le spese effettuate in euro, i Target sono le sanzioni per ritardo" },
      { id: "D", text: "Non vi è alcuna differenza, essendo due sinonimi contabili" }
    ],
    correctAnswerId: "A",
    explanation: "L'erogazione dei fondi PNRR da parte della Commissione UE è condizionata non alla rendicontazione dei costi sostenuti (come nei fondi strutturali), bensì al raggiungimento effettivo di: Milestone (tappe qualitative, riforme, entrate in vigore) e Target (risultati fisici quantitativi verificabili).",
    hint: "Milestone = traguardo qualitativo (es. riforma normativa); Target = obiettivo quantitativo numerico.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_014",
    question: "Che cosa prescrive il principio del 'Do No Significant Harm' (DNSH) obbligatorio per tutti gli interventi finanziati dal PNRR?",
    options: [
      { id: "A", text: "Nessuna misura finanziata dal Piano deve arrecare un danno significativo a nessuno dei 6 obiettivi ambientali definiti dal Regolamento Tassonomia UE (Reg. 2020/852)" },
      { id: "B", text: "I progetti non devono licenziare personale nei primi tre mesi" },
      { id: "C", text: "È vietato acquistare prodotti fabbricati al di fuori dell'Unione Europea" },
      { id: "D", text: "I contratti d'appalto devono essere stipulati solo con imprese artigiane" }
    ],
    correctAnswerId: "A",
    explanation: "Il principio DNSH ('non arrecare un danno significativo all'ambiente', art. 17 Reg. UE 2020/852) vincola ogni investimento e riforma del PNRR rispetto a: mitigazione cambiamenti climatici, adattamento, uso sostenibile delle acque, economia circolare, prevenzione inquinamento e tutela della biodiversità.",
    hint: "Vincolo di conformità ambientale rispetto ai sei obiettivi della Tassonomia UE.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_015",
    question: "Quale piattaforma informatica centralizzata è stata istituita dal Ministero dell'Economia e delle Finanze per il monitoraggio, controllo e rendicontazione del PNRR?",
    options: [
      { id: "A", text: "Il sistema ReGiS" },
      { id: "B", text: "Il portale INPS PECS" },
      { id: "C", text: "Il sistema ANPR" },
      { id: "D", text: "La piattaforma PagoPA" }
    ],
    correctAnswerId: "A",
    explanation: "ReGiS (sviluppato dalla Ragioneria Generale dello Stato - MEF ex art. 1, comma 1042, L. 178/2020) è il sistema informativo unico attraverso cui tutte le amministrazioni attuatrici (inclusi i Comuni) inseriscono i dati di avanzamento procedurale, finanziario, fisico e di rendicontazione dei progetti PNRR.",
    hint: "Sistema unico di rendicontazione e monitoraggio PNRR: ReGiS.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_016",
    question: "Che cosa si intende per 'Soggetto Attuatore' nell'architettura di governance del PNRR?",
    options: [
      { id: "A", text: "Il soggetto pubblico o privato (frequentemente il Comune o altro ente locale) responsabile della realizzazione operativa del singolo progetto e del caricamento dei dati di spesa su ReGiS" },
      { id: "B", text: "La Commissione europea a Bruxelles" },
      { id: "C", text: "L'impresa subappaltatrice priva di CIG" },
      { id: "D", text: "Il singolo cittadino beneficiario di una borsa di studio" }
    ],
    correctAnswerId: "A",
    explanation: "Il Soggetto Attuatore (art. 9 D.L. 77/2021) è l'ente (ministero, regione, comune, città metropolitana) titolare dell'intervento pubblico cui spetta la progettazione, l'affidamento, la gestione e la rendicontazione dell'opera o del servizio finanziato dal PNRR.",
    hint: "Il titolare della gestione e realizzazione pratica del progetto (es. Comune per un asilo nido).",
    level: "base"
  },
  {
    id: "Q_PROG_COM_017",
    question: "Che cos'è il 'Project Cycle Management' (PCM - Gestione del Ciclo del Progetto) nella metodologia europea?",
    options: [
      { id: "A", text: "Un metodo di gestione per fasi logiche successive (programmazione, identificazione, formulazione, finanziamento, attuazione, valutazione) per assicurare l'efficacia e la coerenza dei progetti comunitari" },
      { id: "B", text: "Un software per la fatturazione elettronica dei fornitori" },
      { id: "C", text: "La scadenza quinquennale per il rinnovo delle patenti di guida" },
      { id: "D", text: "Il ciclo di vita delle banconote emesse dalla BCE" }
    ],
    correctAnswerId: "A",
    explanation: "Il Project Cycle Management (PCM) è la metodologia standard ideata dalla Commissione Europea per strutturare l'intero ciclo di vita di un progetto in 6 fasi correlate, basata sulla gestione per obiettivi e sul coinvolgimento degli stakeholder.",
    hint: "Metodologia strutturata di gestione del ciclo di progetto adottata dalla Commissione Europea.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_018",
    question: "Quale strumento fondamentale del PCM consente di strutturare la logica di intervento, gli indicatori e le ipotesi di rischio in una tabella a matrice?",
    options: [
      { id: "A", text: "Il Quadro Logico (Logical Framework Matrix)" },
      { id: "B", text: "Il conto economico riclassificato a margine operativo lordo" },
      { id: "C", text: "La busta paga dei collaboratori" },
      { id: "D", text: "L'organigramma del personale comunale" }
    ],
    correctAnswerId: "A",
    explanation: "Il Logical Framework Approach (Quadro Logico) sintetizza in una matrice 4x4 la logica dell'intervento (Obiettivo Generale, Obiettivo Specifico, Risultati attesi, Attività), gli Indicatori Oggettivamente Verificabili (IOV), le Fonti di Verifica e le Ipotesi/Condizioni esterne di rischio.",
    hint: "La matrice del Quadro Logico (Logical Framework).",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_019",
    question: "Nella fase di analisi del Quadro Logico, a che cosa serve la costruzione dell''Albero dei Problemi'?",
    options: [
      { id: "A", text: "A identificare i problemi prioritari e strutturarli in una gerarchia logica di causa-effetto, ponendo al centro il problema focale" },
      { id: "B", text: "A calcolare il tasso di interesse bancario del mutuo" },
      { id: "C", text: "A censire il patrimonio arboreo del verde pubblico urbano" },
      { id: "D", text: "A redigere la graduatoria dei candidati idonei ad un concorso" }
    ],
    correctAnswerId: "A",
    explanation: "L'albero dei problemi (Problem Tree) è una tecnica partecipativa del PCM che analizza la situazione di partenza: individua il problema principale, le sue cause determinanti (radici dell'albero) e i suoi effetti negativi (rami dell'albero).",
    hint: "Analisi causale delle criticità: cause (radici), problema principale (tronco), effetti (chioma).",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_020",
    question: "Come viene convertito l''Albero dei Problemi' nell''Albero degli Obiettivi' nel Quadro Logico?",
    options: [
      { id: "A", text: "Trasformando tutte le situazioni negative identificate nei problemi in situazioni positive e desiderabili da raggiungere nel futuro (relazione mezzo-fine)" },
      { id: "B", text: "Cancellando tutti i problemi insolubili senza considerarli" },
      { id: "C", text: "Moltiplicando per due il budget di ciascun capitolo" },
      { id: "D", text: "Sostituendo i partner privati con enti ministeriali" }
    ],
    correctAnswerId: "A",
    explanation: "L'albero degli obiettivi si ottiene riformulando in positivo le condizioni negative dell'albero dei problemi: le cause diventano mezzi (attività e risultati) e gli effetti diventano fini/obiettivi desiderabili.",
    hint: "Conversione in positivo: dai problemi (cause-effetti) agli obiettivi (mezzi-fini).",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_021",
    question: "Cosa indicano gli 'Indicatori Oggettivamente Verificabili' (IOV / KPI) nella matrice del Quadro Logico?",
    options: [
      { id: "A", text: "I parametri quantitativi e qualitativi, corredati di valori target e tempistiche (QQT: Quantità, Qualità, Tempo), per misurare il raggiungimento degli obiettivi del progetto" },
      { id: "B", text: "I dati anagrafici del responsabile del procedimento" },
      { id: "C", text: "Le coordinate geografiche della sede operativa" },
      { id: "D", text: "I codici bancari IBAN per l'erogazione degli anticipi" }
    ],
    correctAnswerId: "A",
    explanation: "Gli IOV specificano in modo oggettivo, misurabile e verificabile il successo dell'azione a ciascun livello della logica di intervento, definendo: quantità, qualità, target di riferimento, beneficiari e orizzonte temporale.",
    hint: "Metriche oggettive per misurare il raggiungimento dei risultati (Indicatori SMART / IOV).",
    level: "base"
  },
  {
    id: "Q_PROG_COM_022",
    question: "Che cosa sono le Opzioni Semplificate di Costo (OSC / SCOs) nella rendicontazione dei progetti finanziati dai fondi europei (artt. 53-56 Reg. UE 2021/1060)?",
    options: [
      { id: "A", text: "Metodologie di rimborso basate su costi unitari standard, somme forfettarie (lump sum) o tassi forfettari (flat rate), che non richiedono la presentazione di fatture e pezze giustificative per ogni singola spesa" },
      { id: "B", text: "La possibilità di omettere del tutto la rendicontazione contabile" },
      { id: "C", text: "Uno sconto riservato agli enti locali in dissesto" },
      { id: "D", text: "L'uso esclusivo di banconote contanti per le spese vive" }
    ],
    correctAnswerId: "A",
    explanation: "Le Opzioni Semplificate di Costo (OSC) mirano a ridurre gli oneri burocratici: il rimborso delle spese ai beneficiari avviene sulla base di parametri predefiniti o risultati oggettivi conseguiti (output-based), anziché sulla tracciabilità delle singole fatture a piè di lista.",
    hint: "Rimborso forfettario o per costi standard/output senza giustificativi analitici per ogni scontrino.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_023",
    question: "Che cos'è la 'pista di controllo' (audit trail) nella gestione e rendicontazione dei fondi europei?",
    options: [
      { id: "A", text: "La documentazione cronologica e ordinata che permette di ricostruire in modo chiaro e trasparente l'intero flusso finanziario e procedurale, collegando le spese rendicontate ai relativi documenti giustificativi originali" },
      { id: "B", text: "Il tracciato stradale percorso dagli ispettori durante le verifiche" },
      { id: "C", text: "Il verbale delle assemblee sindacali d'ufficio" },
      { id: "D", text: "L'elenco degli indirizzi IP dei computer dell'amministrazione" }
    ],
    correctAnswerId: "A",
    explanation: "L'audit trail (art. 69 Reg. 2021/1060) è la concatenazione documentale (delibere, bandi, contratti, fatture, quietanze, SAL, bonifici) che consente ai revisori nazionali ed europei di verificare senza ambiguità la legittimità, l'effettività e l'ammissibilità di ciascun euro speso.",
    hint: "Tracciabilità documentale completa tra spesa dichiarata all'UE e giustificativo contabile originale.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_024",
    question: "In che cosa consiste il 'divieto di doppio finanziamento' previsto per i fondi europei e il PNRR (art. 9 Reg. UE 2021/241)?",
    options: [
      { id: "A", text: "Lo stesso identico costo o spesa non può essere rimborsato due volte da fonti di finanziamento pubbliche diverse (ad es. fondi UE e bilancio statale o PNRR)" },
      { id: "B", text: "Un ente non può partecipare a due bandi nello stesso anno" },
      { id: "C", text: "I fornitori non possono ricevere più di un bonifico al mese" },
      { id: "D", text: "La garanzia provvisoria non può essere prestata da due istituti bancari" }
    ],
    correctAnswerId: "A",
    explanation: "Il divieto di doppio finanziamento vieta che una determinata spesa sia imputata e rimborsata a valere su due programmi o fondi diversi (es. finanziare la stessa fattura su FESR e su PNRR). È invece ammessa la complementarietà tra progetti distinti su uno stesso plesso.",
    hint: "Lo stesso costo non può ricevere due rimborsi pubblici da fondi diversi.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_025",
    question: "Quale ruolo svolge l'OLAF (Ufficio Europeo per la Lotta Antifrode)?",
    options: [
      { id: "A", text: "Indaga su frodi, corruzione e qualsiasi altra attività illecita lesiva degli interessi finanziari dell'Unione Europea e su colpe gravi all'interno delle istituzioni europee" },
      { id: "B", text: "Emette i titoli di stato dell'Eurozona" },
      { id: "C", text: "Esercita la funzione giurisdizionale civile in primo grado" },
      { id: "D", text: "Gestisce le iscrizioni scolastiche all'estero" }
    ],
    correctAnswerId: "A",
    explanation: "L'OLAF (Office Européen de Lutte Anti-Fraude) è l'organismo investigativo amministrativo dell'UE che conduce indagini indipendenti su casi di frode a danno del bilancio comunitario, collaborando con la Guardia di Finanza in Italia e con l'EPPO.",
    hint: "Ufficio europeo incaricato di combattere frodi e corruzione sui fondi comunitari.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_026",
    question: "Quale fondo europeo è stato specificamente istituito dal Regolamento (UE) 2021/1056 per sostenere i territori maggiormente colpiti dalla transizione climatica verso la neutralità carbonica?",
    options: [
      { id: "A", text: "Il Fondo per una Transizione Giusta (JTF - Just Transition Fund)" },
      { id: "B", text: "Il Fondo Sociale Europeo per l'agricoltura" },
      { id: "C", text: "Il Fondo di Garanzia dei Depositi" },
      { id: "D", text: "Il Fondo Pensioni Complementare" }
    ],
    correctAnswerId: "A",
    explanation: "Il Just Transition Fund (JTF) è uno strumento chiave del Green Deal europeo volto a supportare economicamente e socialmente le aree ad alta intensità di carbonio o dipendenti da combustibili fossili (es. Taranto e Sulcis Iglesiente in Italia) nella riconversione industriale sostenibile.",
    hint: "JTF (Fondo per una Transizione Giusta): pilastro sociale del Green Deal per territori industriali.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_027",
    question: "Che cos'è il 'Fondo per lo Sviluppo e la Coesione' (FSC) nell'ordinamento finanziario italiano?",
    options: [
      { id: "A", text: "Lo strumento finanziario nazionale cardine (istituito dal D.Lgs. 88/2011) per attuare politiche di riequilibrio economico e sociale e per cofinanziare gli interventi complementari ai fondi europei, destinato per l'80% al Mezzogiorno" },
      { id: "B", text: "Un fondo bancario speculativo a capitale di rischio" },
      { id: "C", text: "Il fondo per pagare le indennità di fine rapporto dei ministri" },
      { id: "D", text: "Un tributo locale sulle seconde case" }
    ],
    correctAnswerId: "A",
    explanation: "Il Fondo per lo Sviluppo e la Coesione (FSC, ex Fondo per le Aree Sottoutilizzate FAS) è lo strumento finanziario congiunto nazionale disciplinato dal D.Lgs. 88/2011 per finanziare progetti di investimento strategici, con vincolo di destinazione per almeno l'80% alle regioni del Mezzogiorno.",
    hint: "Fondo nazionale per il riequilibrio territoriale (vincolo 80% al Mezzogiorno).",
    level: "base"
  },
  {
    id: "Q_PROG_COM_028",
    question: "Quale principio contabile comunitario impone che i fondi europei non debbano sostituire le normali spese pubbliche strutturali di uno Stato membro?",
    options: [
      { id: "A", text: "Il principio di addizionalità" },
      { id: "B", text: "Il principio di proporzionalità" },
      { id: "C", text: "Il principio di universalità" },
      { id: "D", text: "Il principio di alternatività" }
    ],
    correctAnswerId: "A",
    explanation: "Il principio di addizionalità (art. 106 TFUE e Regolamenti comunitari) impone che le sovvenzioni dell'UE debbano aggiungersi (e non sostituire) alla spesa pubblica nazionale ordinaria, affinché gli investimenti comunitari generino un reale effetto leva di sviluppo economico aggiuntivo.",
    hint: "Addizionalità: i fondi UE si sommano alle risorse nazionali senza rimpiazzarle.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_029",
    question: "In che cosa consiste il 'tasso di cofinanziamento' nei programmi comunitari?",
    options: [
      { id: "A", text: "La percentuale della spesa ammissibile di un programma o progetto coperta dal contributo del fondo europeo, mentre la quota restante è a carico di risorse nazionali/regionali" },
      { id: "B", text: "Il tasso di interesse applicato ai prestiti bancari dei Comuni" },
      { id: "C", text: "La quota di utili trattenuta dalla Commissione europea" },
      { id: "D", text: "La commissione dovuta agli intermediari finanziari" }
    ],
    correctAnswerId: "A",
    explanation: "Il cofinanziamento esprime la corresponsabilità finanziaria: l'Unione Europea finanzia una percentuale del costo del progetto (es. 70%, 85% nelle regioni meno sviluppate o 40%-50% nelle regioni più sviluppate), richiedendo allo Stato membro di coprire la quota restante tramite il Fondo di Rotazione ex L. 183/1987.",
    hint: "Ripartizione della spesa tra contributo a fondo perduto UE e risorse statali/regionali.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_030",
    question: "Quale legge italiana ha istituito il 'Fondo di Rotazione per l'attuazione delle politiche comunitarie' presso il MEF-RGS?",
    options: [
      { id: "A", text: "La Legge 16 aprile 1987, n. 183" },
      { id: "B", text: "La Legge 241/1990" },
      { id: "C", text: "Il D.Lgs. 267/2000" },
      { id: "D", text: "La Legge 190/2012" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge n. 183/1987 ha istituito presso la Ragioneria Generale dello Stato (Ispettorato Generale per i Rapporti Finanziari con l'UE - IGRUE) il Fondo di Rotazione, che assicura il cofinanziamento nazionale a carico dello Stato per i programmi finanziati dai fondi UE.",
    hint: "Legge 183 del 1987 (Fondo di Rotazione IGRUE).",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_031",
    question: "In quali tre categorie di regioni sono classificate le aree territoriali dell'UE ai fini della concentrazione delle risorse della Politica di Coesione 2021-2027?",
    options: [
      { id: "A", text: "Regioni meno sviluppate (PIL pro capite inferiore al 75% della media UE), regioni in transizione (PIL tra 75% e 100%) e regioni più sviluppate (PIL superiore al 100%)" },
      { id: "B", text: "Regioni montane, costiere e pianeggianti" },
      { id: "C", text: "Regioni industriali, agricole e commerciali" },
      { id: "D", text: "Regioni a statuto speciale e a statuto ordinario" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 108 Reg. 2021/1060 classifica le regioni NUTS 2 in: 1) meno sviluppate (es. Campania, Calabria, Sicilia, Puglia, Basilicata, Molise), che ricevono la maggioranza dei fondi e tassi di cofinanziamento fino all'85%; 2) in transizione (es. Sardegna, Umbria, Marche); 3) più sviluppate (centro-nord Italia).",
    hint: "Meno sviluppate (<75% PIL), In transizione (75-100%), Più sviluppate (>100%).",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_032",
    question: "Che cosa si intende per 'condizioni abilitanti' (enabling conditions) nella programmazione comunitaria 2021-2027?",
    options: [
      { id: "A", text: "I prerequisiti strategici, normativi ed istituzionali che gli Stati membri devono soddisfare preventivamente e mantenere per tutto il ciclo per poter richiedere i rimborsi della spesa comunitaria" },
      { id: "B", text: "Il possesso di licenze software per i dipendenti" },
      { id: "C", text: "L'adesione obbligatoria alla NATO" },
      { id: "D", text: "L'esenzione dalle imposte per tutte le imprese aggiudicatarie" }
    ],
    correctAnswerId: "A",
    explanation: "Le condizioni abilitanti (art. 15 Reg. 2021/1060) sostituiscono le vecchie 'condizionalità ex-ante': sono prerequisiti orizzontali (es. Carta dei diritti fondamentali, appalti, aiuti di Stato, convenzione ONU disabilità) e tematici necessari per l'approvazione e la rimborsabilità delle spese dei programmi.",
    hint: "Prerequisiti normativi/istituzionali vincolanti per sbloccare i pagamenti della Commissione UE.",
    level: "avanzato"
  },
  {
    id: "Q_PROG_COM_033",
    question: "Che cos'è il programma europeo 'LIFE'?",
    options: [
      { id: "A", text: "Lo strumento di finanziamento dell'UE dedicato specificamente all'ambiente, alla conservazione della natura e all'azione per il clima" },
      { id: "B", text: "Il programma per la mobilità degli studenti universitari" },
      { id: "C", text: "Il fondo per la costruzione di porti turistici" },
      { id: "D", text: "La cassa mutua per i funzionari europei" }
    ],
    correctAnswerId: "A",
    explanation: "Il Programma LIFE (a gestione diretta della Commissione Europea) finanzia progetti dimostrativi, pilota e buone pratiche nei settori natura e biodiversità, economia circolare, mitigazione e adattamento ai cambiamenti climatici e transizione all'energia pulita.",
    hint: "Programma a gestione diretta per ambiente, biodiversità e clima.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_034",
    question: "Che cosa caratterizza i programmi europei 'a gestione diretta' (come Horizon Europe, Erasmus+, Creative Europe) rispetto a quelli 'a gestione concorrente' (FESR, FSE+)?",
    options: [
      { id: "A", text: "Nei programmi a gestione diretta i bandi sono pubblicati e gestiti direttamente dalla Commissione Europea (o sue agenzie esecutive) e le proposte competono a livello europeo tra consorzi transnazionali" },
      { id: "B", text: "I programmi a gestione diretta sono gestiti dalle sole Province" },
      { id: "C", text: "Non richiedono alcun bando di gara" },
      { id: "D", text: "Sono riservati ai soli cittadini residenti a Bruxelles" }
    ],
    correctAnswerId: "A",
    explanation: "Nei fondi a gestione concorrente (FESR, FSE+) la Commissione delega la gestione alle Regioni/Ministeri statali. Nei fondi a gestione diretta i bandi sono emanati direttamente da Bruxelles, i fondi sono gestiti centralmente e richiedono quasi sempre partenariati internazionali transfrontalieri.",
    hint: "Gestione diretta = bandi emanati direttamente dalla Commissione Europea a Bruxelles.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_035",
    question: "Che cosa si intende per 'CUP' (Codice Unico di Progetto) nella gestione dei progetti PNRR e delle politiche di coesione in Italia?",
    options: [
      { id: "A", text: "Il codice alfanumerico di 15 caratteri che identifica in modo univoco ogni progetto d'investimento pubblico, obbligatorio su tutti gli atti amministrativi e mandati di pagamento" },
      { id: "B", text: "Il codice fiscale dell'amministratore delegato dell'impresa appaltatrice" },
      { id: "C", text: "La password di accesso al portale ReGiS" },
      { id: "D", text: "Il numero di protocollo generale del Comune" }
    ],
    correctAnswerId: "A",
    explanation: "Il CUP (art. 11 L. 144/1999) identifica univocamente ogni progetto di investimento pubblico a livello nazionale. Nel PNRR e nei programmi europei la presenza del CUP è requisito inderogabile di ammissibilità della spesa e tracciabilità finanziaria.",
    hint: "Codice di 15 caratteri che identifica ogni investimento pubblico.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_036",
    question: "Che cos'è la 'Strategia Nazionale per le Aree Interne' (SNAI) cofinanziata dai fondi europei?",
    options: [
      { id: "A", text: "Una politica territoriale integrata volta a contrastare lo spopolamento e favorire lo sviluppo dei territori italiani marginali e distanti dai centri di offerta dei servizi essenziali (istruzione, salute, mobilità)" },
      { id: "B", text: "Il piano per recintare i parchi archeologici" },
      { id: "C", text: "La fusione obbligatoria di tutti i comuni sotto i 500 abitanti" },
      { id: "D", text: "Il piano di risanamento delle grandi metropoli del Nord" }
    ],
    correctAnswerId: "A",
    explanation: "La SNAI interviene sulle aree montane e rurali del Paese (aree intermedie, periferiche e ultra-periferiche) migliorando la qualità dei servizi di cittadinanza (sanità, trasporti, scuola) e promuovendo progetti di sviluppo economico locale sostenibile con risorse statali e fondi SIE (FESR, FSE, FEASR).",
    hint: "SNAI: contrasto allo spopolamento e valorizzazione delle aree rurali e montane periferiche.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_037",
    question: "Quale principio stabilisce il Regolamento (UE) 2021/1060 in materia di rispetto dei diritti fondamentali nell'attuazione dei fondi europei?",
    options: [
      { id: "A", text: "Tutti i programmi e le operazioni finanziate devono assicurare il rispetto della Carta dei diritti fondamentali dell'UE, la parità di genere, la non discriminazione e l'accessibilità per le persone con disabilità" },
      { id: "B", text: "I diritti fondamentali possono essere sospesi durante i cantieri di opere pubbliche" },
      { id: "C", text: "I requisiti di accessibilità si applicano solo ai treni ad alta velocità" },
      { id: "D", text: "Non vi sono clausole sui diritti umani nella gestione finanziaria" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 9 Reg. 2021/1060 stabilisce i principi orizzontali inderogabili: rispetto della Carta dei diritti fondamentali, parità uomo-donna, non discriminazione basata su sesso, razza, religione, disabilità, età o orientamento sessuale e sviluppo sostenibile.",
    hint: "Principi orizzontali di parità, non discriminazione e accessibilità disabili.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_038",
    question: "Qual è il periodo di conservazione obbligatoria dei documenti giustificativi relativi alle spese dei programmi europei 2021-2027 (art. 82 Reg. 2021/1060)?",
    options: [
      { id: "A", text: "Almeno 5 anni a decorrere dal 31 dicembre dell'anno in cui è effettuato l'ultimo pagamento da parte dell'Autorità di Gestione al beneficiario" },
      { id: "B", text: "6 mesi dalla conclusione dei lavori" },
      { id: "C", text: "30 giorni lavorativi" },
      { id: "D", text: "A vita per qualsiasi tipo di spesa" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 82 Reg. 2021/1060 riduce a 5 anni (decorrenti dal 31 dicembre dell'anno dell'ultimo pagamento al beneficiario) l'obbligo di conservazione di tutti i documenti giustificativi ai fini delle verifiche di audit, salvo sospensioni per contenziosi o indagini giudiziarie.",
    hint: "Termine di conservazione documentale per audit: 5 anni dall'ultimo pagamento.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_039",
    question: "Cosa si intende per 'irregolarità' nella gestione dei fondi europei (art. 2, punto 31, Reg. 2021/1060)?",
    options: [
      { id: "A", text: "Qualsiasi violazione del diritto applicabile derivante da un'azione o omissione di un operatore economico che arreca o potrebbe arrecare pregiudizio al bilancio dell'Unione mediante l'imputazione di una spesa indebita" },
      { id: "B", text: "Un errore di ortografia in una lettera di trasmissione" },
      { id: "C", text: "Il ritardo nella consegna del catering alla conferenza di apertura" },
      { id: "D", text: "La mancata firma del Sindaco su una foto di cantiere" }
    ],
    correctAnswerId: "A",
    explanation: "L'irregolarità è qualsiasi non conformità alle norme (comunitarie o nazionali sugli appalti, ammissibilità spesa, trasparenza) che determini o possa determinare un ingiustificato esborso a carico del bilancio UE. Non presuppone necessariamente la frode o il dolo.",
    hint: "Violazione di norme che comporta un indebito esborso per il bilancio europeo.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_040",
    question: "Qual è la differenza fondamentale tra 'irregolarità' e 'frode' nell'ambito dei fondi comunitari?",
    options: [
      { id: "A", text: "La frode è un'irregolarità commessa intenzionalmente (con dolo) mediante utilizzo di dichiarazioni false, documenti contraffatti o omissioni dolose, costituendo reato penale" },
      { id: "B", text: "L'irregolarità è punita con l'arresto, la frode con una multa amministrativa" },
      { id: "C", text: "Non vi è alcuna differenza, sono termini interscambiabili" },
      { id: "D", text: "La frode riguarda solo le spese per la cancelleria" }
    ],
    correctAnswerId: "A",
    explanation: "Mentre l'irregolarità può essere frutto di colpa lieve o errore interpretativo, la frode (direttiva UE 2017/1371 - Direttiva PIF) richiede l'elemento soggettivo del dolo (intenzionalità di conseguire indebitamente risorse pubbliche falsificando documenti o dati).",
    hint: "Frode = intenzionalità dolosa e rilievo penale; Irregolarità = violazione anche solo colposa.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_041",
    question: "Che cos'è l'approccio 'LEADER' e i Gruppi di Azione Locale (GAL) finanziati dai fondi europei di sviluppo rurale (FEASR)?",
    options: [
      { id: "A", text: "Una modalità di sviluppo locale di tipo partecipativo (CLLD - Community-Led Local Development), promossa dal basso (bottom-up) da partenariati pubblico-privati locali per valorizzare aree rurali" },
      { id: "B", text: "Il corso di formazione per dirigenti generali dei ministeri" },
      { id: "C", text: "Un'associazione di categoria degli imprenditori agricoli" },
      { id: "D", text: "Il concorso per l'assunzione di periti agrari" }
    ],
    correctAnswerId: "A",
    explanation: "Il metodo LEADER (Liaison Entre Actions de Développement de l'Économie Rurale) attua lo sviluppo locale 'dal basso' attraverso i GAL (Gruppi di Azione Locale), che raggruppano comuni, imprese e associazioni per elaborare e gestire Strategie di Sviluppo Locale nei territori rurali.",
    hint: "Metodologia bottom-up (dal basso verso l'alto) per lo sviluppo locale rurale con i GAL.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_042",
    question: "Quale funzione svolgono le 'linee guida per l'ammissibilità della spesa' approvate a livello nazionale e di programma?",
    options: [
      { id: "A", text: "Definiscono le categorie di costo ammissibili a cofinanziamento, le condizioni per il rimborso, i periodi di ammissibilità temporale e la documentazione probatoria necessaria" },
      { id: "B", text: "Fissano il prezzo massimo di vendita degli immobili pubblici" },
      { id: "C", text: "Stabiliscono gli orari di apertura dei musei regionali" },
      { id: "D", text: "Regolano le assunzioni per chiamata diretta nei comuni" }
    ],
    correctAnswerId: "A",
    explanation: "Le Linee Guida sull'ammissibilità della spesa (D.P.R. 22/2018 e s.m.i.) stabiliscono le regole dettagliate per determinare quali costi sostenuti dai beneficiari possono essere rendicontati e rimborsati dai fondi europei (es. personale, spese generali, attrezzature, consulenze).",
    hint: "Regole che stabiliscono cosa può essere rimborsato con fondi UE e a quali condizioni.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_043",
    question: "Cosa stabilisce l'art. 65 del Regolamento (UE) 2021/1060 in tema di 'durabilità delle operazioni' per gli investimenti in infrastrutture o produttivi?",
    options: [
      { id: "A", text: "L'ente beneficiario deve rimborsare il contributo se entro 5 anni dal pagamento finale (o 3 anni per le PMI) l'operazione cessa l'attività, cambia proprietà conferendo un indebito vantaggio o subisce una modifica sostanziale" },
      { id: "B", text: "Le opere pubbliche devono rimanere inalterate per almeno 100 anni" },
      { id: "C", text: "I beni acquistati devono essere rottamati dopo due anni" },
      { id: "D", text: "Non è previsto alcun vincolo di mantenimento dopo l'incasso del saldo" }
    ],
    correctAnswerId: "A",
    explanation: "Il vincolo di durabilità (stabilità dell'operazione) impone che per 5 anni dal pagamento finale l'investimento non subisca una cessazione dell'attività produttiva o una rilocalizzazione, né un cambio di destinazione d'uso che ne alteri le finalità originarie, pena la revoca del finanziamento.",
    hint: "Vincolo di destinazione e mantenimento quinquennale dell'opera/investimento finanziato.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_044",
    question: "Che cosa si intende per 'Anticipo' (o prefinanziamento) erogato dall'AdG al beneficiario pubblico di un progetto europeo?",
    options: [
      { id: "A", text: "L'erogazione iniziale di una quota percentuale del contributo ammesso a finanziamento, volta a garantire la liquidità necessaria per avviare le attività progettuali" },
      { id: "B", text: "Il saldo definitivo a chiusura del cantiere" },
      { id: "C", text: "Un premio per aver terminato in anticipo i lavori" },
      { id: "D", text: "Un prestito a tasso usuraio" }
    ],
    correctAnswerId: "A",
    explanation: "Il prefinanziamento o anticipazione iniziale consente agli enti pubblici attuatori di disporre della liquidità indispensabile per dare avvio alle gare e ai contratti senza dover anticipare la totalità delle risorse con fondi propri di cassa.",
    hint: "Quota iniziale erogata a monte per garantire la liquidità per l'avvio delle attività.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_045",
    question: "In che cosa consistono i 'Controlli di Primo Livello' (verifiche di gestione ex art. 74 Reg. UE 2021/1060)?",
    options: [
      { id: "A", text: "Nei controlli amministrativi documentali sul 100% delle domande di rimborso presentate dai beneficiari e in verifiche in loco a campione per accertare l'effettiva esecuzione dell'operazione e la regolarità della spesa" },
      { id: "B", text: "Nelle ispezioni della Corte di Giustizia a Bruxelles" },
      { id: "C", text: "Nelle sole interviste telefoniche ai cittadini" },
      { id: "D", text: "Nei controlli svolti dal collegio sindacale della banca tesoriera" }
    ],
    correctAnswerId: "A",
    explanation: "I controlli di primo livello (svolti dall'Autorità di Gestione o da controllori delegati) verificano la correttezza formale, la conformità alle norme sugli appalti, la tracciabilità e la consistenza fisica delle prestazioni fatturate prima dell'erogazione del rimborso.",
    hint: "Verifiche documentali al 100% e verifiche fisiche in loco prima di pagare il saldo.",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_046",
    question: "Che cosa si intende per 'Target di Spesa' assegnato annualmente a ciascun Programma Regionale o Nazionale?",
    options: [
      { id: "A", text: "L'ammontare minimo di pagamenti certificati che il Programma deve raggiungere entro il 31 dicembre di ciascun anno per scongiurare il disimpegno automatico comunitario (N+3)" },
      { id: "B", text: "Il limite massimo di stipendio erogabile al dirigente" },
      { id: "C", text: "Il costo del biglietto per partecipare agli eventi europei" },
      { id: "D", text: "Il numero di assessori ammessi al tavolo di monitoraggio" }
    ],
    correctAnswerId: "A",
    explanation: "Il target di spesa è l'obiettivo annuale quantificato in euro di pagamenti effettivi agli attuatori che l'AdG deve certificare a Bruxelles per non incorrere nel taglio retroattivo delle risorse da parte della Commissione per mancato rispetto dell'N+3.",
    hint: "Obiettivo minimo di spesa certificata annuale per evitare il taglio dei fondi.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_047",
    question: "In tema di comunicazione e visibilità, quale obbligo incombe sui beneficiari di finanziamenti PNRR e fondi europei?",
    options: [
      { id: "A", text: "Esporre l'emblema dell'Unione Europea e la dichiarazione di finanziamento (es. 'Finanziato dall'Unione europea - NextGenerationEU' o bandiera UE con nome del Fondo) su tutti i documenti, siti web, cartelloni e targhe di cantiere permanenti" },
      { id: "B", text: "Inviare un regalo natalizio ai commissari europei" },
      { id: "C", text: "Stampare tutti gli atti in lingua francese" },
      { id: "D", text: "Nessun obbligo, la provenienza dei fondi è protetta da segreto di Stato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 50 del Reg. 2021/1060 e le linee guida del PNRR impongono rigidi obblighi di visibilità e trasparenza: logo dell'Unione Europea, menzione del fondo o di NextGenerationEU e apposizione di targhe o cartelloni visibili al pubblico.",
    hint: "Obbligo di esposizione dell'emblema UE e della dicitura di finanziamento europeo su cartelloni e siti.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_048",
    question: "Quale ruolo svolge il Dipartimento per le Politiche di Coesione e il Sud presso la Presidenza del Consiglio dei Ministri in Italia?",
    options: [
      { id: "A", text: "Coordina a livello nazionale la programmazione strategica, il negoziato dell'Accordo di Partenariato, la gestione del Fondo per lo Sviluppo e la Coesione e il monitoraggio delle politiche di coesione territoriali" },
      { id: "B", text: "Gestisce direttamente le carceri del Mezzogiorno" },
      { id: "C", text: "Emette i titoli del debito pubblico dello Stato" },
      { id: "D", text: "Nomina i sindaci dei comuni montani" }
    ],
    correctAnswerId: "A",
    explanation: "Il Dipartimento per le Politiche di Coesione (e l'Agenzia per la Coesione Territoriale ora confluita nella Presidenza del Consiglio) è la struttura apicale del Governo deputata a coordinare la programmazione e l'attuazione degli interventi europei e nazionali di coesione.",
    hint: "Struttura governativa centrale di coordinamento della politica di coesione nazionale ed europea.",
    level: "base"
  },
  {
    id: "Q_PROG_COM_049",
    question: "Che cos'è la 'Valutazione Ambientale Strategica' (VAS) prevista dalla Direttiva 2001/42/CE per i programmi comunitari?",
    options: [
      { id: "A", text: "La valutazione sistematica degli effetti sull'ambiente dei piani e dei programmi di sviluppo prima della loro definitiva approvazione da parte delle autorità competenti" },
      { id: "B", text: "Il collaudo statico di un singolo ponte stradale" },
      { id: "C", text: "La raccolta differenziata dei rifiuti negli uffici regionali" },
      { id: "D", text: "La tassa applicata sull'acquisto di automobili elettriche" }
    ],
    correctAnswerId: "A",
    explanation: "La VAS (disciplinata dal D.Lgs. 152/2006 e dalla direttiva europea 2001/42/CE) è la procedura di valutazione preventiva volta ad integrare le considerazioni ambientali nella fase di elaborazione e approvazione di piani e programmi operativi prima che essi diventino vincolanti.",
    hint: "Valutazione preventiva dell'impatto ambientale su piani e programmi operativi (a monte della VIA).",
    level: "intermedio"
  },
  {
    id: "Q_PROG_COM_050",
    question: "Quale tutela giuridica è prevista dall'art. 61 del Regolamento Finanziario dell'UE (Reg. 2018/1046) in materia di conflitto di interessi nella gestione dei fondi comunitari?",
    options: [
      { id: "A", text: "Gli agenti finanziari e tutte le persone che intervengono nell'esecuzione del bilancio devono astenersi da qualsiasi azione che possa porre i propri interessi personali, familiari, economici o politici in conflitto con quelli dell'Unione" },
      { id: "B", text: "Il conflitto di interessi è consentito se comunicato con 24 ore di ritardo" },
      { id: "C", text: "È fatto divieto assoluto ai dipendenti di avere un conto corrente bancario" },
      { id: "D", text: "Il conflitto di interessi rileva solo se riguarda somme superiori a dieci milioni di euro" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 61 del Regolamento Finanziario UE sancisce il rigoroso obbligo di astensione per chiunque intervenga nell'esecuzione del bilancio dell'Unione qualora l'esercizio imparziale delle funzioni sia compromesso da motivi familiari, affettivi, politici o di interesse economico diretto o indiretto.",
    hint: "Obbligo perentorio di astensione per preservare la totale imparzialità nella spesa dei fondi UE.",
    level: "base"
  }
];

const dest = path.join(__dirname, '../public/db/master_bank/gestione_pa/programmazione_comunitaria.json');
fs.writeFileSync(dest, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Generated ${questions.length} questions in ${dest}`);
