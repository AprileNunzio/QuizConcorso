const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: "Q_TRIB_LOC_001",
    question: "Quale principio costituzionale fondamentale pone una riserva di legge in materia di prestazioni patrimoniali imposte e tributi?",
    options: [
      { id: "A", text: "L'art. 23 della Costituzione ('Nessuna prestazione personale o patrimoniale può essere imposta se non in base alla legge')" },
      { id: "B", text: "L'art. 13 della Costituzione" },
      { id: "C", text: "L'art. 97 della Costituzione" },
      { id: "D", text: "L'art. 11 della Costituzione" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 23 Cost. sancisce la riserva di legge relativa in materia tributaria: solo una fonte primaria statale o regionale (nel quadro del coordinamento) può istituire un tributo, determinandone presupposto, soggetti passivi e base imponibile.",
    hint: "Riserva di legge in base alla quale nessun tributo può essere istituito senza base legislativa.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_002",
    question: "Cosa stabilisce l'art. 53, primo comma, della Costituzione italiana?",
    options: [
      { id: "A", text: "Tutti sono tenuti a concorrere alle spese pubbliche in ragione della loro capacità contributiva" },
      { id: "B", text: "Le imposte devono essere uguali per tutti i cittadini indipendentemente dal reddito" },
      { id: "C", text: "I tributi locali non possono mai superare il 10% del valore degli immobili" },
      { id: "D", text: "Ogni cittadino ha diritto di concordare l'aliquota con il Comune" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 53, comma 1, Cost. enuncia il principio della capacità contributiva: il dovere tributario grava su tutti in relazione alla loro effettiva idoneità economica a concorrere alle spese pubbliche.",
    hint: "Dovere generale di concorso alle spese pubbliche parametrato alla forza economica.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_003",
    question: "Quale criterio deve informare il sistema tributario italiano ai sensi dell'art. 53, secondo comma, Cost.?",
    options: [
      { id: "A", text: "Criteri di progressività" },
      { id: "B", text: "Criteri di proporzionalità fissa e invariabile (flat tax generalizzata)" },
      { id: "C", text: "Criteri regressivi in base all'età del contribuente" },
      { id: "D", text: "Criteri di totale discrezionalità dei Comuni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 53, comma 2, Cost. dispone: 'Il sistema tributario è informato a criteri di progressività'. All'aumentare della base imponibile, l'incidenza percentuale del prelievo fiscale aumenta.",
    hint: "L'aliquota media cresce all'aumentare della ricchezza o reddito.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_004",
    question: "Qual è la differenza fondamentale tra 'imposta' e 'tassa' nel diritto tributario?",
    options: [
      { id: "A", text: "L'imposta è un prelievo coattivo acausale destinato a finanziare spese pubbliche indivisibili; la tassa è collegata alla fruizione o richiesta di un servizio pubblico divisibile o di un atto amministrativo specifico" },
      { id: "B", text: "L'imposta è dovuta solo dalle società, la tassa solo dalle persone fisiche" },
      { id: "C", text: "La tassa è decisa dal Prefetto, l'imposta dalla Giunta" },
      { id: "D", text: "Non vi è alcuna differenza, essendo sinonimi nel diritto tributario" }
    ],
    correctAnswerId: "A",
    explanation: "L'imposta è un tributo acausale per spese indivisibili (es. difesa, ordine pubblico, IRPEF, IMU); la tassa è un tributo paracommutativo dovuto a fronte della fruizione o fruibilità potenziale di un servizio pubblico divisibile (es. TARI, tasse scolastiche, concessioni).",
    hint: "Imposta = spesa pubblica indivisibile (senza controprestazione diretta); Tassa = servizio pubblico divisibile specifico.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_005",
    question: "Ai sensi dell'art. 3 dello Statuto dei diritti del contribuente (Legge n. 212/2000), le disposizioni tributarie:",
    options: [
      { id: "A", text: "Non hanno efficacia retroattiva e per i tributi periodici le modifiche si applicano solo a partire dal periodo d'imposta successivo a quello in corso" },
      { id: "B", text: "Hanno sempre efficacia retroattiva fino a dieci anni precedenti" },
      { id: "C", text: "Entrano in vigore 180 giorni dopo la pubblicazione in Gazzetta" },
      { id: "D", text: "Possono essere derogate liberamente da circolari comunali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 3 della L. 212/2000 pone il principio di irretroattività delle norme tributarie: salvo interpretazione autentica, non hanno mai efficacia retroattiva e per i tributi periodici operano dal periodo successivo.",
    hint: "Principio fondamentale di certezza del diritto e non retroattività della norma fiscale.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_006",
    question: "Cosa stabilisce l'art. 6-bis dello Statuto del contribuente (introdotto dal D.Lgs. 219/2023) in merito al contraddittorio preventivo?",
    options: [
      { id: "A", text: "Tutti gli atti autonomamente impugnabili dinanzi alla giurisdizione tributaria sono preceduti, a pena di annullabilità, da un contraddittorio informato ed effettivo con assegnazione di un termine non inferiore a 60 giorni per controdedurre" },
      { id: "B", text: "Il contraddittorio è facoltativo e attivabile solo su autorizzazione del giudice" },
      { id: "C", text: "Il contribuente non ha mai diritto di controdedurre prima della notifica dell'atto" },
      { id: "D", text: "Si applica unicamente alle indagini della Guardia di Finanza per evasione penale" }
    ],
    correctAnswerId: "A",
    explanation: "La riforma dello Statuto (D.Lgs. 219/2023 in attuazione della delega fiscale) ha generalizzato il principio del contraddittorio preventivo (art. 6-bis L. 212/2000), rendendo obbligatorio comunicare lo schema d'atto al contribuente concedendogli almeno 60 giorni per presentare osservazioni prima della notifica dell'avviso.",
    hint: "Contraddittorio preventivo obbligatorio a pena di annullabilità dell'atto finale.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_007",
    question: "Quale legge disciplina attualmente l'Imposta Municipale Propria (Nuova IMU)?",
    options: [
      { id: "A", text: "La Legge 27 dicembre 2019, n. 160 (Legge di Bilancio 2020, commi 738-783)" },
      { id: "B", text: "Il D.Lgs. 504/1992 sull'ICI" },
      { id: "C", text: "La Legge 241/1990 sul procedimento" },
      { id: "D", text: "Il Regio Decreto 1175/1931" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge n. 160/2019 (art. 1, commi 738 e ss.) ha riformato e unificato la disciplina dell'IMU, abolendo contestualmente la TASI e lasciando in vigore l'IMU come tributo patrimoniale locale.",
    hint: "Legge di bilancio 2020: unificazione IMU-TASI.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_008",
    question: "Qual è il presupposto impositivo dell'IMU ai sensi dell'art. 1, comma 740, della Legge 160/2019?",
    options: [
      { id: "A", text: "Il possesso di fabbricati, aree fabbricabili e terreni agricoli siti nel territorio comunale, a qualsiasi uso destinati, ivi compresi quelli strumentali o alla cui produzione o scambio è diretta l'attività dell'impresa" },
      { id: "B", text: "La residenza anagrafica nel comune da almeno un anno" },
      { id: "C", text: "La stipula di un contratto di locazione ad uso abitativo" },
      { id: "D", text: "Il mero transito su strade comunali con autoveicoli" }
    ],
    correctAnswerId: "A",
    explanation: "Il presupposto dell'IMU è il possesso di immobili (fabbricati, aree fabbricabili e terreni agricoli) a titolo di proprietà o di altro diritto reale di godimento (usufrutto, uso, abitazione, enfiteusi, superficie).",
    hint: "Possesso di fabbricati, aree fabbricabili e terreni agricoli a titolo di proprietà o diritto reale.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_009",
    question: "L'abitazione principale è assoggettata al pagamento dell'IMU?",
    options: [
      { id: "A", text: "No, è esente dall'IMU, ad eccezione di quelle classificate nelle categorie catastali di lusso A/1, A/8 e A/9" },
      { id: "B", text: "Sì, tutte le abitazioni principali pagano l'aliquota ordinaria senza sconti" },
      { id: "C", text: "È esente solo se il proprietario ha più di 80 anni" },
      { id: "D", text: "Paga solo se situata nei centri storici dei capoluoghi" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 740 e 741, L. 160/2019 esenta dall'IMU l'abitazione principale (e relative pertinenze C/2, C/6, C/7 nel limite di una per categoria), purché non appartenga alle categorie catastali di pregio o lusso (A/1 signorili, A/8 ville, A/9 castelli/palazzi artistici).",
    hint: "Esente la prima casa non di lusso; restano tassate A/1, A/8 e A/9.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_010",
    question: "Che cosa si intende per 'abitazione principale' ai fini dell'esenzione IMU (art. 1, comma 741, lett. b), Legge 160/2019)?",
    options: [
      { id: "A", text: "L'immobile, iscritto o iscrivibile nel catasto edilizio urbano come unica unità immobiliare, nel quale il possessore e i componenti del suo nucleo familiare dimorano abitualmente e risiedono anagraficamente" },
      { id: "B", text: "La casa dove il proprietario trascorre le vacanze estive" },
      { id: "C", text: "Qualsiasi immobile di proprietà locato a studenti universitari" },
      { id: "D", text: "L'ufficio o studio professionale intestato al titolare" }
    ],
    correctAnswerId: "A",
    explanation: "Ai fini IMU l'abitazione principale richiede la presenza congiunta di due elementi costitutivi inderogabili: la residenza anagrafica e la dimora abituale (fatto materiale del vivere quotidiano nell'immobile).",
    hint: "Doppio requisito concorrente: residenza anagrafica + dimora abituale effettiva.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_011",
    question: "Come si determina la base imponibile dei fabbricati iscritti in catasto ai fini del calcolo dell'IMU?",
    options: [
      { id: "A", text: "Rivalutando la rendita catastale del 5% e moltiplicando il risultato per i coefficienti moltiplicatori specifici per categoria catastale (es. 160 per gruppo A eccetto A/10)" },
      { id: "B", text: "Prendendo il prezzo di compravendita notarile dell'immobile" },
      { id: "C", text: "In base al reddito complessivo IRPEF del proprietario" },
      { id: "D", text: "Moltiplicando i metri quadri dell'appartamento per una tariffa fissa di 10 euro" }
    ],
    correctAnswerId: "A",
    explanation: "La base imponibile dei fabbricati si calcola applicando alla rendita catastale vigente al 1° gennaio la rivalutazione del 5% e moltiplicando per il moltiplicatore catastale previsto per legge (es. 160 per abitazioni, 140 per B, 80 per A/10, 65 per D ecc.).",
    hint: "Rendita catastale rivalutata del 5% moltiplicata per il coefficiente di categoria.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_012",
    question: "A quale soggetto spetta la quota di gettito IMU derivante dagli immobili ad uso produttivo classificati nel gruppo catastale D (art. 1, comma 744, L. 160/2019)?",
    options: [
      { id: "A", text: "Allo Stato, calcolata con l'aliquota standard dello 0,76% (7,6 per mille), mentre il Comune può manovrare solo l'eccedenza fino all'1,06%" },
      { id: "B", text: "Interamente al Comune senza alcuna quota erariale" },
      { id: "C", text: "Alla Camera di Commercio provinciale" },
      { id: "D", text: "Alla Regione per finanziare il fondo trasporti" }
    ],
    correctAnswerId: "A",
    explanation: "Per gli immobili del gruppo D (capannoni, opifici industriali), l'aliquota di base dello 0,76% è riservata allo Stato ed è incassata direttamente dall'Erario. Il Comune può solo manovrare l'aliquota incrementandola fino all'1,06% introitando la differenza.",
    hint: "Gettito riservato allo Stato con aliquota base dello 0,76% per la categoria D.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_013",
    question: "Quali sono le scadenze ordinarie per il versamento dell'IMU in autoliquidazione da parte dei contribuenti?",
    options: [
      { id: "A", text: "In due rate di pari importo: l'acconto entro il 16 giugno e il saldo entro il 16 dicembre (o in unica soluzione entro il 16 giugno)" },
      { id: "B", text: "In quattro rate trimestrali: marzo, giugno, settembre e dicembre" },
      { id: "C", text: "Entro il 31 dicembre di ogni anno solare" },
      { id: "D", text: "Entro 30 giorni dalla notifica della cartella di pagamento" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 762, L. 160/2019 stabilisce che il versamento dell'imposta è effettuato in due rate: la prima con scadenza il 16 giugno (acconto al 50%), la seconda con scadenza il 16 dicembre (a saldo dell'imposta dovuta per l'intero anno con conguaglio).",
    hint: "Acconto il 16 giugno, saldo a conguaglio il 16 dicembre.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_014",
    question: "Quale modello di pagamento deve essere utilizzato dai contribuenti per versare l'IMU o la TARI?",
    options: [
      { id: "A", text: "Il Modello F24 (oppure la piattaforma PagoPA nei casi abilitati dal Comune)" },
      { id: "B", text: "Esclusivamente l'assegno circolare non trasferibile intestato al Sindaco" },
      { id: "C", text: "La cambiale agraria vistata dalla Prefettura" },
      { id: "D", text: "La consegna di banconote contanti presso il comando di polizia locale" }
    ],
    correctAnswerId: "A",
    explanation: "Il pagamento dell'IMU è eseguito mediante modello F24 (con utilizzo dei codici tributo erariali istituiti dall'Agenzia delle Entrate) o tramite la piattaforma PagoPA, consentendo la compensazione con crediti erariali.",
    hint: "Modello F24 unificato o piattaforma PagoPA.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_015",
    question: "Qual è il presupposto della Tassa sui Rifiuti (TARI) disciplinata dalla Legge n. 147/2013?",
    options: [
      { id: "A", text: "Il possesso o la detenzione a qualsiasi titolo di locali o di aree scoperte operative, a qualsiasi uso adibiti, suscettibili di produrre rifiuti urbani" },
      { id: "B", text: "Il numero di automobili possedute dalla famiglia" },
      { id: "C", text: "Il reddito ISEE certificato del nucleo familiare" },
      { id: "D", text: "La sola proprietà dell'immobile, anche se privo di allacci e inutilizzabile" }
    ],
    correctAnswerId: "A",
    explanation: "Il presupposto della TARI (art. 1, comma 641, L. 147/2013) è il possesso o la detenzione a qualsiasi titolo di locali o aree scoperte suscettibili di produrre rifiuti urbani. A differenza dell'IMU, la TARI grava sull'occupante/utilizzatore materiale effettivo.",
    hint: "Possesso o detenzione di locali/aree suscettibili di produrre rifiuti urbani (grava su chi occupa o detiene).",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_016",
    question: "In caso di locazione di durata non superiore a sei mesi nel corso dello stesso anno solare, chi è tenuto al pagamento della TARI?",
    options: [
      { id: "A", text: "Il possessore dell'immobile a titolo di proprietà, usufrutto, uso, abitazione o superficie" },
      { id: "B", text: "L'inquilino affittuario per la sola frazione di giorni" },
      { id: "C", text: "Il Comune che subentra nel debito" },
      { id: "D", text: "L'agenzia immobiliare intermediaria" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 643, L. 147/2013 stabilisce che in caso di detenzione temporanea di durata non superiore a sei mesi nel corso dello stesso anno solare, la TARI è dovuta soltanto dal possessore dei locali e delle aree a titolo di proprietà o altro diritto reale.",
    hint: "Nelle locazioni brevi (sotto i 6 mesi) la TARI rimane in capo al proprietario.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_017",
    question: "Da quali due componenti è formata la tariffa della TARI?",
    options: [
      { id: "A", text: "Una quota fissa (determinata in relazione alle componenti essenziali del costo del servizio) e una quota variabile (rapportata alla quantità di rifiuti conferiti/stimati)" },
      { id: "B", text: "Una quota per l'acqua e una quota per il gas metano" },
      { id: "C", text: "Una quota statale e una quota regionale" },
      { id: "D", text: "Una quota per le sole aree verdi e una per i balconi" }
    ],
    correctAnswerId: "A",
    explanation: "La tariffa TARI si compone di: quota fissa (che finanzia i costi fissi e generali del servizio, es. spazzamento strade, ammortamenti, costi amministrativi) e quota variabile (che copre i costi operativi legati alla quantità di rifiuti prodotti e smaltiti).",
    hint: "Quota fissa (costi generali) + Quota variabile (costi legati alla produzione di rifiuti).",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_018",
    question: "Quale autorità indipendente approva il metodo tariffario per il settore dei rifiuti urbani (MTR) che vincola la redazione del PEF dei Comuni?",
    options: [
      { id: "A", text: "L'ARERA (Autorità di Regolazione per Energia Reti e Ambiente)" },
      { id: "B", text: "L'AGCM (Autorità Garante della Concorrenza e del Mercato)" },
      { id: "C", text: "L'ANAC" },
      { id: "D", text: "L'ISTAT" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge n. 205/2017 ha attribuito ad ARERA le funzioni di regolazione e controllo del ciclo dei rifiuti urbani, inclusa la determinazione dei criteri per la definizione delle tariffe e l'adozione del Metodo Tariffario Rifiuti (MTR e MTR-2) vincolante per Comuni ed enti d'ambito.",
    hint: "ARERA è il regolatore nazionale dei rifiuti, dell'acqua e dell'energia.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_019",
    question: "Quale principio economico comunitario governa la determinazione complessiva del gettito TARI attraverso il Piano Economico Finanziario (PEF)?",
    options: [
      { id: "A", text: "Il principio di copertura integrale dei costi del servizio ('chi inquina paga')" },
      { id: "B", text: "Il principio del massimo profitto per la tesoreria comunale" },
      { id: "C", text: "Il principio della gratuità generalizzata per tutte le imprese" },
      { id: "D", text: "Il divieto di superare il gettito dell'anno 1990" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 654, L. 147/2013 impone che la tariffa TARI debba garantire l'integrale copertura dei costi di investimento e di esercizio relativi al servizio di gestione dei rifiuti urbani, conformemente al principio europeo 'chi inquina paga'.",
    hint: "Totale dei costi del servizio = Totale del gettito TARI tariffato (copertura al 100%).",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_020",
    question: "Quale aliquota massima può deliberare il Comune per l'Addizionale Comunale all'IRPEF (D.Lgs. n. 360/1998)?",
    options: [
      { id: "A", text: "Fino ad un massimo dello 0,8% (con facoltà di differenziazione per scaglioni di reddito o introduzione di soglia di esenzione)" },
      { id: "B", text: "Fino al 5% del reddito imponibile" },
      { id: "C", text: "Fino allo 0,1% non superabile in nessun caso" },
      { id: "D", text: "Non vi sono limiti potendo il Comune assorbire l'intera imposta sul reddito" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1 del D.Lgs. 360/1998 e s.m.i. fissa l'aliquota massima dell'addizionale comunale all'IRPEF allo 0,8 per cento (salvo deroghe speciali per Comuni in predissesto/dissesto o specifici accordi). I Comuni possono deliberare scaglioni allineati a quelli erariali o soglie di esenzione.",
    hint: "Il tetto standard è dello 0,8%.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_021",
    question: "Quale nuovo canone patrimoniale unico è stato istituito dall'art. 1, commi 816-836, della Legge 160/2019 a decorrere dal 1° gennaio 2021?",
    options: [
      { id: "A", text: "Il Canone Unico Patrimoniale (CUP) di concessione, autorizzazione o esposizione pubblicitaria" },
      { id: "B", text: "Il Canone Idrico Integrato Regionale" },
      { id: "C", text: "Il Canone TV speciale per gli uffici pubblici" },
      { id: "D", text: "Il Tributo provinciale per i ponti e i viadotti" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge di Bilancio 2020 ha istituito dal 1° gennaio 2021 il Canone Unico Patrimoniale (CUP), che riunisce in un unico prelievo non tributario: TOSAP, COSAP, Imposta comunale sulla pubblicità, diritti sulle pubbliche affissioni e canone non ricognitorio.",
    hint: "Sostituisce TOSAP, COSAP e Pubblicità con un canone patrimoniale unificato.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_022",
    question: "Che natura giuridica ha il Canone Unico Patrimoniale (CUP) rispetto ai precedenti tributi soppressi (TOSAP/ICP)?",
    options: [
      { id: "A", text: "Ha natura di corrispettivo di diritto pubblico patrimoniale (entrata extra-tributaria), con giurisdizione del Giudice Ordinario" },
      { id: "B", text: "Ha natura di tributo erariale con giurisdizione della Corte dei Conti" },
      { id: "C", text: "Ha natura di imposta progressiva sul reddito" },
      { id: "D", text: "Ha natura di sanzione amministrativa pecuniaria" }
    ],
    correctAnswerId: "A",
    explanation: "Il legislatore ha qualificato il CUP come entrata patrimoniale non tributaria (canone concessorio), determinando lo spostamento della giurisdizione contenziosa dalle Corti di giustizia tributaria al Giudice Ordinario (Tribunale civile).",
    hint: "È un'entrata patrimoniale extra-tributaria soggetta al Giudice Ordinario.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_023",
    question: "Entro quale termine di decadenza il Comune deve notificare l'avviso di accertamento per omessa dichiarazione o infedele versamento dei tributi locali (art. 1, comma 161, Legge n. 296/2006)?",
    options: [
      { id: "A", text: "Entro il 31 dicembre del quinto anno successivo a quello in cui la dichiarazione o il versamento avrebbero dovuto essere effettuati" },
      { id: "B", text: "Entro il 31 dicembre del decimo anno successivo" },
      { id: "C", text: "Entro 60 giorni dalla fine dell'esercizio" },
      { id: "D", text: "Entro 12 mesi dalla scoperta dell'evasione" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 161, della L. 296/2006 (Finanziaria 2007) stabilisce che gli avvisi di accertamento in rettifica e d'ufficio devono essere notificati, a pena di decadenza, entro il 31 dicembre del quinto anno successivo a quello in cui la dichiarazione o il versamento sono stati o avrebbero dovuto essere effettuati.",
    hint: "Decadenza quinquennale: 31 dicembre del quinto anno successivo.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_024",
    question: "Che cos'è l'accertamento esecutivo per le entrate tributarie e patrimoniali dei Comuni introdotto dalla Legge n. 160/2019 (commi 792 e ss.)?",
    options: [
      { id: "A", text: "L'avviso di accertamento che concentra in un unico atto il titolo esecutivo e il precetto, divenendo esecutivo decorsi 60 giorni dalla notifica senza bisogno di emettere la cartella di pagamento" },
      { id: "B", text: "L'arresto immediato del contribuente moroso" },
      { id: "C", text: "L'ordine di pignoramento emesso dalla Giunta comunale in via provvisoria" },
      { id: "D", text: "La vendita all'asta automatica dell'immobile dopo 15 giorni" }
    ],
    correctAnswerId: "A",
    explanation: "I commi 792-804 dell'art. 1 L. 160/2019 hanno esteso agli enti locali l'accertamento esecutivo (già in uso per le imposte statali): l'atto di accertamento acquista efficacia di titolo esecutivo idoneo all'esecuzione forzata dopo 60 giorni, superando la fase intermedia dell'ingiunzione o cartella.",
    hint: "Unico atto: avviso di accertamento + intimazione ad adempiere con valore di titolo esecutivo dopo 60 giorni.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_025",
    question: "A quale organo spetta l'approvazione delle aliquote dei tributi comunali e delle relative tariffe?",
    options: [
      { id: "A", text: "Al Consiglio comunale (con delibera da adottare entro il termine per l'approvazione del bilancio di previsione)" },
      { id: "B", text: "Al Segretario generale del Comune con propria determinazione" },
      { id: "C", text: "Al Prefetto della Provincia territorialmente competente" },
      { id: "D", text: "Esclusivamente al Ministero dell'Economia e delle Finanze" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 42, comma 2, lett. f), TUEL riserva alla competenza esclusiva del Consiglio comunale l'istituzione e ordinamento dei tributi, con la disciplina dei relativi regolamenti e la determinazione delle aliquote e tariffe (salvo tariffe servizi a domanda individuale di spettanza della Giunta).",
    hint: "La competenza tributaria e tariffaria fondamentale spetta al Consiglio ex art. 42 TUEL.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_026",
    question: "Cosa stabilisce l'art. 1, comma 169, della Legge n. 296/2006 sull'efficacia retroattiva delle delibere regolamentari e tariffarie comunali approvate entro il termine del bilancio?",
    options: [
      { id: "A", text: "Le aliquote e tariffe approvate entro il termine di legge per il bilancio di previsione hanno efficacia dal 1° gennaio dell'anno di riferimento (deroga espressa allo Statuto del contribuente)" },
      { id: "B", text: "Si applicano solo a decorrere dall'anno solare successivo" },
      { id: "C", text: "Sono prive di qualsiasi efficacia fino a ratifica parlamentare" },
      { id: "D", text: "Valgono solo per gli ultimi due mesi dell'anno" }
    ],
    correctAnswerId: "A",
    explanation: "La norma stabilisce che gli enti locali deliberano le tariffe e le aliquote relative ai tributi di loro competenza entro la data fissata da norme statali per la deliberazione del bilancio di previsione. Dette deliberazioni, anche se approvate successivamente all'inizio dell'esercizio, hanno effetto dal 1° gennaio dell'anno di riferimento.",
    hint: "Efficacia retroattiva al 1° gennaio dell'anno in corso purché deliberate entro il termine di approvazione del bilancio.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_027",
    question: "Che cosa accade se il Comune non delibera le nuove aliquote tributarie entro il termine di approvazione del bilancio di previsione?",
    options: [
      { id: "A", text: "Si intendono prorogate le aliquote e le tariffe deliberate per l'anno precedente" },
      { id: "B", text: "Le imposte comunali si azzerano per l'intero anno in corso" },
      { id: "C", text: "Si applicano le aliquote minime previste dalla legge statale" },
      { id: "D", text: "Tutti i contribuenti sono esentati da IMU e TARI" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 169, della L. 296/2006 dispone espressamente che in caso di mancata approvazione delle tariffe entro i termini, le aliquote e tariffe si intendono prorogate di diritto di anno in anno nella misura precedentemente deliberata.",
    hint: "Regola della proroga tacita delle aliquote e tariffe dell'anno precedente.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_028",
    question: "Quale condizione è necessaria affinché i regolamenti e le delibere di approvazione delle aliquote IMU abbiano efficacia per l'anno di riferimento (art. 1, comma 767, L. 160/2019)?",
    options: [
      { id: "A", text: "L'inserimento del testo nel Portale del federalismo fiscale entro il 14 ottobre e la pubblicazione sul sito del MEF entro il 28 ottobre dello stesso anno" },
      { id: "B", text: "L'affissione cartacea all'albo pretorio per 90 giorni" },
      { id: "C", text: "L'invio con raccomandata A/R a tutti i residenti" },
      { id: "D", text: "Il visto preventivo della Corte Costituzionale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 767, L. 160/2019 prevede che le delibere e i regolamenti IMU sono efficaci per l'anno di riferimento se inseriti sul Portale del federalismo fiscale entro il termine del 14 ottobre dello stesso anno e pubblicati sul sito internet del MEF entro il 28 ottobre.",
    hint: "Doppia scadenza telematica: trasmissione al Portale entro 14 ottobre, pubblicazione MEF entro 28 ottobre.",
    level: "avanzato"
  },
  {
    id: "Q_TRIB_LOC_029",
    question: "Come si chiamano gli organi giurisdizionali di primo e secondo grado della giustizia tributaria a seguito della riforma della Legge n. 130/2022?",
    options: [
      { id: "A", text: "Corti di Giustizia Tributaria di primo grado e Corti di Giustizia Tributaria di secondo grado" },
      { id: "B", text: "Commissioni Tributarie Provinciali e Regionali" },
      { id: "C", text: "Tribunali Amministrativi Tributari e Consiglio di Stato Fiscale" },
      { id: "D", text: "Uffici del Giudice di Pace Fiscale e Corte d'Appello Erariale" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge 31 agosto 2022, n. 130 ha ridefinito l'ordinamento della giustizia tributaria, ridenominando le vecchie Commissioni tributarie provinciali e regionali in 'Corti di Giustizia Tributaria di primo grado' (provinciali) e 'Corti di Giustizia Tributaria di secondo grado' (regionali).",
    hint: "Ridenominazione in Corti di Giustizia Tributaria di primo e secondo grado.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_030",
    question: "Entro quale termine deve essere notificato il ricorso giurisdizionale tributario alla controparte impositrice ex art. 21 del D.Lgs. n. 546/1992?",
    options: [
      { id: "A", text: "Entro 60 giorni dalla data di notificazione dell'atto impugnato (avviso di accertamento o liquidazione)" },
      { id: "B", text: "Entro 120 giorni dalla notifica" },
      { id: "C", text: "Entro 30 giorni lavorativi" },
      { id: "D", text: "Entro 180 giorni solari" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 21, comma 1, del D.Lgs. 546/1992 fissa a pena di inammissibilità in 60 giorni dalla notificazione dell'atto impositivo il termine per la proposizione del ricorso dinanzi alla Corte di Giustizia Tributaria di primo grado.",
    hint: "Termine decadenziale di 60 giorni dalla notifica dell'atto.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_031",
    question: "Entro quanti giorni dalla notifica alla controparte il ricorrente deve costituirsi in giudizio depositando il ricorso presso la Corte di Giustizia Tributaria (art. 22 D.Lgs. 546/1992)?",
    options: [
      { id: "A", text: "Entro 30 giorni dalla proposizione del ricorso, a pena di inammissibilità, tramite il Processo Tributario Telematico (SIGIT)" },
      { id: "B", text: "Entro 60 giorni lavorativi" },
      { id: "C", text: "Entro un anno solare" },
      { id: "D", text: "In qualsiasi momento fino all'udienza di discussione" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 22 D.Lgs. 546/1992 stabilisce che il ricorrente, entro 30 giorni dalla notifica del ricorso alla controparte, deve costituirsi in giudizio a pena di inammissibilità insanabile, depositando telematicamente il ricorso e i relativi allegati.",
    hint: "Costituzione in giudizio telematica entro 30 giorni a pena di inammissibilità.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_032",
    question: "Chi rappresenta il vertice nomofilattico per l'impugnazione delle sentenze pronunciate dalle Corti di Giustizia Tributaria di secondo grado?",
    options: [
      { id: "A", text: "La Corte di Cassazione (Sezione Tributaria Civile)" },
      { id: "B", text: "Il Consiglio di Stato" },
      { id: "C", text: "La Corte dei Conti" },
      { id: "D", text: "La Corte Costituzionale" }
    ],
    correctAnswerId: "A",
    explanation: "Avverso le sentenze delle Corti di Giustizia Tributaria di secondo grado è ammesso ricorso per Cassazione ex art. 360 c.p.c. dinanzi alla Corte di Cassazione per soli motivi di legittimità (violazione o falsa applicazione di norme di diritto).",
    hint: "Le controversie tributarie salgono in terzo grado dinanzi alla Suprema Corte di Cassazione.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_033",
    question: "In che cosa consiste l'istituto dell'autotutela tributaria esercitabile dal Comune (art. 10-quater e 10-quinquies della Legge n. 212/2000)?",
    options: [
      { id: "A", text: "Il potere-dovere dell'amministrazione impositrice di annullare o revocare d'ufficio un proprio atto illegittimo o infondato, sia su istanza del contribuente sia di propria iniziativa" },
      { id: "B", text: "La facoltà del contribuente di autoridursi le imposte dovute" },
      { id: "C", text: "La difesa giudiziale dell'ente affidata a dipendenti senza laurea" },
      { id: "D", text: "Il rimborso delle sole spese postali sostenute dall'ente" }
    ],
    correctAnswerId: "A",
    explanation: "La riforma fiscale ha inserito nello Statuto del contribuente l'autotutela obbligatoria (per vizi macroscopici come errore di persona, evidente errore di calcolo, tributo già pagato) e l'autotutela facoltativa, con cui il Comune ritira l'atto illegittimo o viziato nel merito.",
    hint: "Ritiro/annullamento d'ufficio in autotutela dell'atto impositivo errato o illegittimo.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_034",
    question: "Quale sanzione amministrativa pecuniaria si applica ordinariamente in caso di omesso o ritardato versamento dei tributi locali (art. 13 D.Lgs. 471/1997)?",
    options: [
      { id: "A", text: "La sanzione del 30% dell'importo non versato (riducibile in caso di ravvedimento operoso o ritardi minimi)" },
      { id: "B", text: "La sanzione del 100% dell'importo" },
      { id: "C", text: "Una sanzione fissa di 10 euro indipendentemente dalla somma" },
      { id: "D", text: "Il sequestro preventivo dell'automobile del contribuente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 13 del D.Lgs. 471/1997 prevede una sanzione amministrativa base del 30% per ogni omesso o ritardato versamento di tributi. La sanzione è ridotta a un terzo se il ritardo non supera i 90 giorni (15%) e all'1% al giorno se il ritardo non supera i 15 giorni.",
    hint: "Sanzione standard del 30% per omesso versamento, graduabile al ribasso con il ravvedimento.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_035",
    question: "Che cos'è il 'ravvedimento operoso' disciplinato dall'art. 13 del D.Lgs. n. 472/1997?",
    options: [
      { id: "A", text: "La facoltà del contribuente di sanare spontaneamente violazioni tributarie pagando il tributo dovuto, gli interessi legali e una sanzione ridotta parametrata alla tempestività del pagamento" },
      { id: "B", text: "La cancellazione d'ufficio dei debiti da parte dell'Agenzia delle Entrate" },
      { id: "C", text: "Il ricorso urgente al Sindaco per chiedere la grazia fiscale" },
      { id: "D", text: "La rateizzazione forzosa decennale imposta dal TAR" }
    ],
    correctAnswerId: "A",
    explanation: "Il ravvedimento operoso consente al contribuente di regolarizzare spontaneamente le violazioni fiscali prima della notifica di atti di accertamento, beneficiando di una significativa riduzione delle sanzioni (da 1/10 fino a 1/5 del minimo a seconda del tempo trascorso).",
    hint: "Spontanea regolarizzazione del debito tributario con sanzioni attenuate.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_036",
    question: "Quale soggetto provvede alla notificazione degli atti di accertamento dei tributi comunali?",
    options: [
      { id: "A", text: "Il messo comunale, il messo notificatore speciale o il servizio postale con raccomandata A/R, ovvero mediante Posta Elettronica Certificata (PEC) per i soggetti obbligati o censiti in INI-PEC/INAD" },
      { id: "B", text: "Esclusivamente l'ufficiale giudiziario del Tribunale civile" },
      { id: "C", text: "Un consigliere comunale di opposizione" },
      { id: "D", text: "La notifica avviene solo tramite avviso sonoro in piazza" }
    ],
    correctAnswerId: "A",
    explanation: "La notifica degli atti tributari locali avviene a mezzo messo comunale, messi speciali abilitati ex L. 296/2006, servizio postale tramite raccomandata con ricevuta di ritorno o notifica telematica tramite PEC a imprese, professionisti e cittadini dotati di domicilio digitale (INAD).",
    hint: "Messo notificatore, raccomandata A/R o notifica digitale PEC (domicilio digitale).",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_037",
    question: "Che cos'è l'interpello del contribuente disciplinato dall'art. 11 della Legge n. 212/2000?",
    options: [
      { id: "A", text: "L'istanza con cui il contribuente interpella l'amministrazione finanziaria sull'applicazione delle disposizioni tributarie a fattispecie concrete e personali di incerta interpretazione" },
      { id: "B", text: "L'interrogazione parlamentare presentata da un deputato" },
      { id: "C", text: "La richiesta di dimissioni del responsabile dell'ufficio tributi" },
      { id: "D", text: "La richiesta di certificato dei carichi pendenti penali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 11 L. 212/2000 consente al contribuente di rivolgere istanza motivata al Comune prima di porre in essere il comportamento fiscale, per ottenere chiarimenti su norme tributarie oggettivamente incerte. La risposta scritta vincola l'amministrazione verso quel contribuente.",
    hint: "Quesito preventivo su casi concreti ed interpretazione dubbia di norme fiscali.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_038",
    question: "Quale effetto produce la mancata risposta del Comune ad una rituale istanza di interpello entro i termini di legge (art. 11 L. 212/2000)?",
    options: [
      { id: "A", text: "La mancata risposta entro i termini equivale a silenzio assenso e a condivisione della soluzione interpretativa proposta dal contribuente" },
      { id: "B", text: "La sanzione del raddoppio del tributo a carico del contribuente" },
      { id: "C", text: "Il rigetto automatico dell'istanza" },
      { id: "D", text: "L'annullamento della carica di Sindaco" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 11 L. 212/2000, il decorso del termine (90 giorni per interpelli ordinari) senza che sia stata notificata la risposta equivale a condivisione dell'interpretazione prospettata dal contribuente (silenzio assenso con efficacia vincolante).",
    hint: "Silenzio assenso vincolante per l'ente: vale l'interpretazione prospettata dal richiedente.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_039",
    question: "In materia di TARI, come vengono trattate le superfici delle utenze non domestiche in cui si formano rifiuti speciali (art. 1, comma 649, L. 147/2013)?",
    options: [
      { id: "A", text: "Nella determinazione della superficie tassabile non si tiene conto della parte di area in cui si formano in via continuativa e prevalente rifiuti speciali al cui smaltimento sono tenuti a provvedere a proprie spese i relativi produttori" },
      { id: "B", text: "Pagano una tariffa quintuplicata rispetto a quella ordinaria" },
      { id: "C", text: "Vengono espropriate dal Comune" },
      { id: "D", text: "Sono soggette alla sola quota variabile senza quota fissa" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 649, L. 147/2013 prevede che le superfici dove si formano in via continuativa e prevalente rifiuti speciali siano escluse dal calcolo della superficie tassabile TARI, purché il produttore dimostri l'avvenuto avvio al recupero/smaltimento tramite idonea documentazione (formulari FIR).",
    hint: "Defassazione delle superfici operative produttive di rifiuti speciali avviati al riciclo/smaltimento privato.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_040",
    question: "Che cos'è l'Imposta di Soggiorno (art. 4 del D.Lgs. n. 23/2011)?",
    options: [
      { id: "A", text: "Un tributo locale facoltativo che i Comuni capoluogo di provincia, le unioni di comuni e le località turistiche possono istituire a carico di coloro che alloggiano nelle strutture ricettive del proprio territorio" },
      { id: "B", text: "Una tassa statale applicata sui visti d'ingresso dei cittadini extracomunitari" },
      { id: "C", text: "Un'imposta regionale sulle seconde case al mare" },
      { id: "D", text: "Il canone per il noleggio dei locali comunali per feste" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 4 del D.Lgs. 23/2011 disciplina l'imposta di soggiorno, il cui gettito è vincolato a finanziare interventi in materia di turismo, manutenzione dei beni culturali e ambientali nonché dei relativi servizi pubblici locali.",
    hint: "Tributo di scopo turistico a carico degli ospiti delle strutture ricettive.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_041",
    question: "Quale ruolo rivestono i gestori delle strutture ricettive nella riscossione dell'Imposta di Soggiorno a seguito del D.L. n. 34/2020?",
    options: [
      { id: "A", text: "Sono responsabili del pagamento dell'imposta di soggiorno con diritto di rivalsa sui soggetti passivi, della presentazione della dichiarazione e degli altri adempimenti" },
      { id: "B", text: "Sono meri spettatori senza alcun obbligo di riscossione né contabile" },
      { id: "C", text: "Sono agenti contabili della Corte Costituzionale" },
      { id: "D", text: "Devono versare l'imposta attingendo esclusivamente ai propri utili aziendali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 180 del D.L. 34/2020 (Decreto Rilancio) ha qualificato il gestore della struttura ricettiva quale 'responsabile del pagamento dell'imposta' con diritto di rivalsa sull'ospite, depenalizzando il precedente peculato e introducendo una sanzione amministrativa pecuniaria per omesso versamento.",
    hint: "Responsabile del pagamento con rivalsa sugli ospiti e obbligo di riversamento al Comune.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_042",
    question: "Che cos'è l'imposta di scopo (ISCOP) deliberabile dai Comuni ex art. 6 del D.Lgs. 23/2011?",
    options: [
      { id: "A", text: "Un tributo destinato a finanziare specificamente la realizzazione di determinate opere pubbliche individuate dal Comune nel regolamento" },
      { id: "B", text: "Un tributo straordinario per sanare i disavanzi delle aziende partecipate" },
      { id: "C", text: "Una tassa speciale per finanziare le spese di cancelleria" },
      { id: "D", text: "Un prelievo applicato sui concorsi a premi locali" }
    ],
    correctAnswerId: "A",
    explanation: "L'imposta di scopo comunale (art. 6 D.Lgs. 23/2011) può essere istituita per una durata massima di dieci anni per finanziare fino al 30% del costo complessivo di un'opera pubblica specifica (trasporti, arredo urbano, asili, parchi). Se l'opera non inizia entro due anni, le somme riscosse devono essere rimborsate.",
    hint: "Tributo destinato alla copertura di una specifica opera pubblica, con obbligo di rimborso se non realizzata.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_043",
    question: "Quale agevolazione IMU è prevista per gli immobili concessi in comodato d'uso gratuito a parenti in linea retta di primo grado (genitori/figli) ex Legge 160/2019?",
    options: [
      { id: "A", text: "La riduzione del 50% della base imponibile, purché il contratto sia registrato e il comodante possieda una sola abitazione in Italia e risieda nello stesso comune" },
      { id: "B", text: "L'esenzione totale al 100% senza alcuna condizione" },
      { id: "C", text: "La maggiorazione dell'aliquota del 20%" },
      { id: "D", text: "L'azzeramento della sola TARI" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, comma 747, lett. c), L. 160/2019 prevede la riduzione della base imponibile del 50% per le unità immobiliari concesse in comodato a parenti in linea retta entro il primo grado che le utilizzano come abitazione principale, con contratto registrato e requisiti specifici di residenza.",
    hint: "Abbattimento del 50% della base imponibile con contratto registrato.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_044",
    question: "Che agevolazione fiscale IMU compete agli immobili locati a 'canone concordato' ex Legge n. 431/1998?",
    options: [
      { id: "A", text: "L'imposta, determinata applicando l'aliquota stabilita dal comune, è ridotta al 75% (riduzione del 25%)" },
      { id: "B", text: "L'esenzione totale perpetua" },
      { id: "C", text: "Una riduzione del 10% della sola quota statale" },
      { id: "D", text: "Nessuna agevolazione, applicandosi l'aliquota massima ordinaria" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 1, comma 760, L. 160/2019, per le abitazioni locate a canone concordato di cui alla Legge 431/1998, l'imposta determinata applicando l'aliquota stabilita dal comune è ridotta al 75 per cento (sconto del 25%).",
    hint: "Riduzione al 75% dell'imposta dovuta per i contratti a canone concordato.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_045",
    question: "Qual è il limite di valore per le controversie tributarie al fine dell'assistenza tecnica obbligatoria di un difensore abilitato (art. 12 D.Lgs. 546/1992)?",
    options: [
      { id: "A", text: "Per le controversie di valore fino a 3.000 euro le parti possono stare in giudizio personalmente senza difensore" },
      { id: "B", text: "Il difensore è sempre obbligatorio anche per 1 euro di contenzioso" },
      { id: "C", text: "Fino a 50.000 euro non serve mai il difensore" },
      { id: "D", text: "Il limite è fissato in 100.000 euro" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 12, comma 2, D.Lgs. 546/1992 prevede che per le controversie di valore non superiore a tremila euro le parti possono stare in giudizio personalmente senza l'assistenza tecnica di un avvocato o commercialista abilitato.",
    hint: "Soglia di 3.000 euro di valore della lite per stare in giudizio da soli.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_046",
    question: "Che cosa si intende per 'valore della lite' ai fini dell'applicazione delle regole processuali e del contributo unificato tributario?",
    options: [
      { id: "A", text: "L'importo del solo tributo al netto degli interessi e delle sanzioni irrogate con l'atto impugnato (salvo controversie relative esclusivamente alle sole sanzioni)" },
      { id: "B", text: "Il totale complessivo comprensivo di sanzioni, interessi e spese postali moltiplicato per due" },
      { id: "C", text: "Il reddito ISEE del ricorrente" },
      { id: "D", text: "Il valore commerciale dell'immobile stimato dall'OMI" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 12, comma 2, D.Lgs. 546/1992, per valore della lite si intende l'importo del solo tributo al netto degli interessi e delle eventuali sanzioni irrogate. In caso di controversie relative solo a sanzioni, il valore è costituito dalla somma di queste.",
    hint: "Solo tributo netto (senza interessi né sanzioni), salvo che si impugnino sole sanzioni.",
    level: "base"
  },
  {
    id: "Q_TRIB_LOC_047",
    question: "Chi può svolgere le funzioni di Giudice monocratico nelle Corti di Giustizia Tributaria di primo grado a seguito della riforma del 2022?",
    options: [
      { id: "A", text: "Un magistrato tributario designato per le controversie di valore fino a 5.000 euro" },
      { id: "B", text: "Tutte le cause senza limiti di importo" },
      { id: "C", text: "Esclusivamente il Presidente della Corte d'Appello" },
      { id: "D", text: "Un funzionario dell'Agenzia delle Entrate" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge 130/2022 (art. 4-bis D.Lgs. 546/92) ha introdotto il giudice monocratico per le controversie tributarie di valore fino a 5.000 euro (escluse quelle di valore indeterminabile), al fine di velocizzare la trattazione del contenzioso bagatellare.",
    hint: "Giudice monocratico tributario per liti di valore fino a 5.000 euro.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_048",
    question: "Quale effetto ha la proposizione del ricorso tributario sull'esecutività dell'atto impugnato?",
    options: [
      { id: "A", text: "Il ricorso non sospende automaticamente l'esecuzione dell'atto, ma il contribuente può chiedere la sospensione giudiziale dell'efficacia esecutiva se dimostra il fumus boni iuris e il periculum in mora (art. 47 D.Lgs. 546/92)" },
      { id: "B", text: "Il ricorso annulla immediatamente e per sempre il debito tributario" },
      { id: "C", text: "Il ricorso sospende per legge ogni pagamento senza bisogno di istanza al giudice" },
      { id: "D", text: "L'ente locale può vendere all'asta i beni prima ancora di costituirsi in giudizio" }
    ],
    correctAnswerId: "A",
    explanation: "Il ricorso giurisdizionale non ha effetto sospensivo automatico. Il contribuente può presentare motivata istanza di sospensione cautelare alla Corte di giustizia tributaria dimostrando la probabile fondatezza del ricorso (fumus) e il rischio di un danno grave e irreparabile (periculum in mora).",
    hint: "Nessuna sospensione automatica: occorre istanza motivata con fumus e periculum.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_049",
    question: "Che cos'è la conciliazione giudiziale nel processo tributario (artt. 48, 48-bis e 48-ter D.Lgs. 546/1992)?",
    options: [
      { id: "A", text: "L'accordo transattivo tra contribuente ed ente impositore per definire la lite con riduzione delle sanzioni amministrative al 40%, 50% o 60% del minimo a seconda del grado di giudizio" },
      { id: "B", text: "L'arbitrato privato affidato ad un notaio con spese a carico del Comune" },
      { id: "C", text: "La remissione del debito per motivi elettorali" },
      { id: "D", text: "L'annullamento della causa per mancata comparizione" }
    ],
    correctAnswerId: "A",
    explanation: "La conciliazione tributaria consente di chiudere la lite (fuori udienza o in udienza) in primo o secondo grado e in Cassazione. In caso di perfezionamento le sanzioni amministrative si applicano nella misura del 40% del minimo in primo grado, del 50% in secondo grado e del 60% in Cassazione.",
    hint: "Accordo che estingue la lite con forte abbattimento percentuale delle sanzioni.",
    level: "intermedio"
  },
  {
    id: "Q_TRIB_LOC_050",
    question: "Quale regime fiscale di esenzione IMU compete agli immobili utilizzati dagli enti non commerciali (ENC) per finalità meramente assistenziali, sanitarie, didattiche o ricettive (art. 1, comma 759, lett. g), L. 160/2019)?",
    options: [
      { id: "A", text: "L'esenzione si applica solo se gli immobili sono destinati esclusivamente allo svolgimento con modalità non commerciali di attività meritevoli previste dalla legge" },
      { id: "B", text: "Tutti gli immobili di qualsiasi ente no profit sono esenti anche se gestiscono hotel di lusso a tariffe di mercato" },
      { id: "C", text: "Gli enti del terzo settore sono sempre tassati con aliquota raddoppiata" },
      { id: "D", text: "L'esenzione si applica solo se l'ente paga dividendi agli associati" }
    ],
    correctAnswerId: "A",
    explanation: "L'esenzione IMU per gli enti non commerciali richiede un duplice requisito: soggettivo (ente non commerciale/ETS) e oggettivo (svolgimento esclusivo di attività istituzionali assistenziali, didattiche, culturali con modalità rigorosamente non commerciali, ossia senza scopo di lucro e a titolo gratuito o dietro corrispettivo meramente simbolico).",
    hint: "Requisito congiunto: natura non commerciale dell'ente + modalità concrete rigorosamente non commerciali.",
    level: "intermedio"
  }
];

const dest = path.join(__dirname, '../public/db/master_bank/tributario/diritto_tributario.json');
fs.writeFileSync(dest, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Generated ${questions.length} questions in ${dest}`);
