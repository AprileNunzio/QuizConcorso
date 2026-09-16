const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/db/master_bank/lavoro/diritto_lavoro.json');
const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

const newQuestions = [
  {
    id: "Q_PECS_LAV_051",
    question: "A seguito delle modifiche introdotte dal D.L. 4 maggio 2023, n. 48 (Decreto Lavoro), entro quale limite di durata il contratto di lavoro a tempo determinato può essere stipulato liberamente senza necessità di apporre alcuna causale giustificativa?",
    options: [
      { id: "A", text: "6 mesi" },
      { id: "B", text: "12 mesi" },
      { id: "C", text: "18 mesi" },
      { id: "D", text: "24 mesi" }
    ],
    correctAnswerId: "B",
    explanation: "Il D.L. 48/2023 ha confermato che il contratto a tempo determinato è acausale per i primi 12 mesi; il superamento di tale limite e fino a un massimo complessivo di 24 mesi è consentito solo in presenza di causali previste dalla contrattazione collettiva o, in subordine, per esigenze tecniche, organizzative o sostitutive.",
    hint: "Il periodo acausale standard è di 12 mesi.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_052",
    question: "Quali causali legittimano la stipula o la proroga di un contratto a termine per una durata superiore a 12 mesi e fino a 24 mesi ai sensi dell'art. 19 del D.Lgs. 81/2015 come modificato dal D.L. 48/2023?",
    options: [
      { id: "A", text: "Nei casi previsti dai contratti collettivi nazionali, territoriali o aziendali stipulati dalle associazioni sindacali comparativamente più rappresentative, oppure, in assenza, per esigenze di natura tecnica, organizzativa o produttiva individuate dalle parti o per sostituzione" },
      { id: "B", text: "Esclusivamente per l'avvio di nuove attività industriali comunicate al Ministero del Lavoro" },
      { id: "C", text: "In qualsiasi caso purché il lavoratore acconsenta per iscritto dinanzi alla Prefettura" },
      { id: "D", text: "Solo per lavoratori che abbiano compiuto 50 anni di età" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 19, comma 1, D.Lgs. 81/2015 (novellato dal D.L. 48/2023) demanda prioritariamente ai contratti collettivi (CCNL, territoriali o aziendali) l'individuazione delle causali; in via sussidiaria le parti possono concordare causali tecniche/organizzative/produttive oppure ricorrere alla sostituzione di altri lavoratori.",
    hint: "Priorità alla contrattazione collettiva con clausola sussidiaria tra le parti o sostituzione.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_053",
    question: "Qual è il limite quantitativo ordinario legale per l'assunzione di lavoratori a tempo determinato rispetto al numero dei lavoratori a tempo indeterminato in forza al 1° gennaio dell'anno di assunzione (art. 23 D.Lgs. 81/2015)?",
    options: [
      { id: "A", text: "10%" },
      { id: "B", text: "20%" },
      { id: "C", text: "30%" },
      { id: "D", text: "50%" }
    ],
    correctAnswerId: "B",
    explanation: "Salvo diversa disposizione dei contratti collettivi, non possono essere assunti lavoratori a tempo determinato in misura superiore al 20% del numero dei lavoratori a tempo indeterminato in forza al 1° gennaio dell'anno di assunzione.",
    hint: "La percentuale legale di contingentamento è il 20%.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_054",
    question: "Cosa stabilisce la regola del c.d. 'stop and go' in caso di riassunzione a termine dello stesso lavoratore?",
    options: [
      { id: "A", text: "Deve intercorrere un intervallo di almeno 10 giorni dalla scadenza di un contratto fino a 6 mesi, o di 20 giorni se il contratto precedente superava i 6 mesi" },
      { id: "B", text: "Il datore di lavoro non può riassumere lo stesso lavoratore per almeno un anno solare" },
      { id: "C", text: "Occorre sempre un periodo di pausa obbligatoria di 60 giorni lavorativi" },
      { id: "D", text: "Nessun intervallo è richiesto in caso di accordo verbale" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 21, comma 2, del D.Lgs. 81/2015, qualora il lavoratore sia riassunto a tempo determinato entro 10 giorni dalla scadenza di un contratto di durata fino a 6 mesi, ovvero entro 20 giorni per contratti superiori a 6 mesi, il secondo contratto si trasforma a tempo indeterminato.",
    hint: "Intervallo minimo di 10 o 20 giorni a seconda della durata del contratto precedente.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_055",
    question: "In caso di violazione dell'intervallo temporale minimo dello 'stop and go', quale conseguenza giuridica prevede la legge?",
    options: [
      { id: "A", text: "L'applicazione di una sanzione amministrativa pecuniaria di 500 euro" },
      { id: "B", text: "La conversione del secondo contratto a tempo indeterminato fin dalla data di stipulazione" },
      { id: "C", text: "La sospensione dell'attività d'impresa per 30 giorni" },
      { id: "D", text: "L'annullamento della contribuzione previdenziale versata" }
    ],
    correctAnswerId: "B",
    explanation: "La violazione dei termini di intervallo tra contratti a termine successivi comporta per legge la conversione del nuovo contratto in rapporto di lavoro a tempo indeterminato.",
    hint: "Scatta la conversione a tempo indeterminato.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_056",
    question: "Cos'è la somministrazione di lavoro a tempo indeterminato (c.d. staff leasing) disciplinata dall'art. 30 e ss. del D.Lgs. 81/2015?",
    options: [
      { id: "A", text: "Una tipologia negoziale in cui l'agenzia di somministrazione assume il lavoratore a tempo indeterminato e lo invia in missione presso un utilizzatore" },
      { id: "B", text: "Una forma illecita di intermediazione vietata penalmente" },
      { id: "C", text: "Un appalto di servizi privo di personale dipendente" },
      { id: "D", text: "Il distacco ministeriale dei funzionari pubblici presso società private" }
    ],
    correctAnswerId: "A",
    explanation: "Lo staff leasing è il contratto commerciale di somministrazione a tempo indeterminato tra somministratore e utilizzatore, a fronte del quale l'agenzia stipula con il lavoratore un contratto di lavoro subordinato a tempo indeterminato, garantendo un'indennità di disponibilità per i periodi tra una missione e l'altra.",
    hint: "Assunzione a tempo indeterminato da parte dell'agenzia per missioni presso utilizzatori.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_057",
    question: "Quale principio fondamentale governa il trattamento economico e normativo del lavoratore somministrato rispetto ai dipendenti dell'impresa utilizzatrice (art. 35 D.Lgs. 81/2015)?",
    options: [
      { id: "A", text: "Il principio della retribuzione ridotta del 15% per compensare il margine dell'agenzia" },
      { id: "B", text: "Il principio di parità di trattamento: per tutta la durata della missione ha diritto a condizioni economiche e normative complessivamente non inferiori a quelle dei dipendenti di pari livello dell'utilizzatore" },
      { id: "C", text: "L'applicazione esclusiva del salario minimo federale stabilito dall'OIL" },
      { id: "D", text: "Il divieto di erogazione di qualsiasi premio di risultato o straordinario" }
    ],
    correctAnswerId: "B",
    explanation: "Ai sensi dell'art. 35 D.Lgs. 81/2015, il lavoratore somministrato ha diritto, a parità di mansioni svolte, a un trattamento economico e normativo complessivamente non inferiore a quello dei lavoratori dipendenti dall'utilizzatore inquadrati allo stesso livello.",
    hint: "Principio inderogabile di parità di trattamento economico e normativo.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_058",
    question: "In caso di somministrazione di lavoro, chi risponde in solido con l'agenzia per i crediti retributivi e i contributi previdenziali dovuti al lavoratore?",
    options: [
      { id: "A", text: "L'utilizzatore risponde in solido con il somministratore per i crediti retributivi e per i versamenti dei contributi previdenziali maturati durante la missione" },
      { id: "B", text: "Solo il fondo di garanzia istituito presso l'INPS" },
      { id: "C", text: "L'utilizzatore è totalmente esente da qualsiasi forma di responsabilità" },
      { id: "D", text: "La Camera di Commercio della provincia in cui ha sede l'agenzia" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 35, comma 2, D.Lgs. 81/2015 prevede la responsabilità solidale tra utilizzatore e somministratore per la corresponsione dei trattamenti retributivi e per il versamento dei contributi previdenziali in favore dei lavoratori somministrati.",
    hint: "Responsabilità solidale diretta tra utilizzatore e somministratore.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_059",
    question: "In base all'art. 2103 del Codice Civile (come riscritto dall'art. 3 del D.Lgs. 81/2015), a quali mansioni può essere adibito il lavoratore dal datore di lavoro nell'esercizio dello ius variandi?",
    options: [
      { id: "A", text: "A quelle per le quali è stato assunto o a quelle corrispondenti all'inquadramento superiore successivamente acquisito ovvero a mansioni riconducibili allo stesso livello e categoria legale di inquadramento delle ultime effettivamente svolte" },
      { id: "B", text: "A qualsiasi mansione anche manuale purché all'interno della stessa sede provinciale" },
      { id: "C", text: "Esclusivamente alle mansioni identiche e tassative indicate nel contratto individuale senza alcuna variazione possibile" },
      { id: "D", text: "A mansioni inferiori a totale discrezione insindacabile del datore" }
    ],
    correctAnswerId: "A",
    explanation: "La riforma dell'art. 2103 c.c. ha superato il previgente concetto di 'equivalenza professionale' formale, ancorando la mobilità orizzontale all'appartenenza allo 'stesso livello e categoria legale di inquadramento' previsti dal contratto collettivo applicato.",
    hint: "Mansioni riconducibili allo stesso livello e categoria legale di inquadramento.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_060",
    question: "In quali casi l'art. 2103 c.c. consente legittimamente l'assegnazione del lavoratore a mansioni appartenenti al livello di inquadramento inferiore (demansionamento unilaterale)?",
    options: [
      { id: "A", text: "In caso di modifica degli assetti organizzativi aziendali che incide sulla posizione del lavoratore, limitatamente a mansioni del livello immediatamente inferiore purché rientranti nella medesima categoria legale" },
      { id: "B", text: "Ogni volta che l'azienda registri una perdita di fatturato annuale superiore al 5%" },
      { id: "C", text: "Come sanzione disciplinare conservativa per assenze ingiustificate" },
      { id: "D", text: "Non è mai ammesso in nessun caso dall'ordinamento" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2103, comma 2, c.c. ammette il mutamento a mansioni inferiori (di un solo livello e nella medesima categoria legale) solo in caso di modifica degli assetti organizzativi aziendali che incidano sulla posizione del lavoratore, conservando comunque il livello di inquadramento e la retribuzione di base.",
    hint: "Ammesso solo per modifica degli assetti organizzativi, al livello immediatamente inferiore e a parità di retribuzione.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_LAV_061",
    question: "Dove possono essere stipulati validi 'patti di demansionamento' nell'interesse del lavoratore alla conservazione dell'occupazione o all'acquisizione di una diversa professionalità (art. 2103, comma 6, c.c.)?",
    options: [
      { id: "A", text: "Nelle sedi c.d. protette (Commissione di conciliazione presso l'ITL, sede sindacale, commissioni di certificazione) con facoltà di farsi assistere da un rappresentante sindacale o avvocato" },
      { id: "B", text: "Con semplice scambio di email o corrispondenza ordinaria tra le parti" },
      { id: "C", text: "Unicamente mediante atto pubblico rogato da notaio alla presenza di due testimoni" },
      { id: "D", text: "Presso il comune di residenza del lavoratore" }
    ],
    correctAnswerId: "A",
    explanation: "I patti individuali di dequalificazione/demansionamento (anche con riduzione della retribuzione) sono validi solo se stipulati nelle sedi protette ex art. 2113, quarto comma, c.c. o avanti alle commissioni di certificazione, nell'interesse del lavoratore alla salvaguardia del posto di lavoro o al miglioramento delle condizioni di vita.",
    hint: "Stipula obbligatoria in sede protetta (ITL, sindacato, certificazione).",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_062",
    question: "Dopo quanto tempo di adibizione continuativa a mansioni superiori il lavoratore subordinato privato acquisisce in via definitiva il diritto all'inquadramento superiore (salvo sostituzione di lavoratore assente con diritto alla conservazione del posto)?",
    options: [
      { id: "A", text: "Dopo il periodo fissato dai contratti collettivi o, in mancanza, dopo sei mesi continuativi (o tre mesi per mansioni dirigenziali)" },
      { id: "B", text: "Dopo 15 giorni di svolgimento effettivo" },
      { id: "C", text: "Dopo due anni continuativi" },
      { id: "D", text: "Il diritto non si consolida mai automaticamente nel settore privato" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 2103, comma 7, c.c., l'assegnazione a mansioni superiori diviene definitiva dopo il periodo fissato dai contratti collettivi o, in mancanza, dopo sei mesi continuativi (ovvero tre mesi per le qualifiche con mansioni direttive/dirigenziali).",
    hint: "Sei mesi continuativi in assenza di diversa previsione contrattuale.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_063",
    question: "Qual è la durata normale dell'orario settimanale di lavoro stabilita dal D.Lgs. 8 aprile 2003, n. 66?",
    options: [
      { id: "A", text: "36 ore" },
      { id: "B", text: "40 ore" },
      { id: "C", text: "44 ore" },
      { id: "D", text: "48 ore" }
    ],
    correctAnswerId: "B",
    explanation: "L'art. 3, comma 1, del D.Lgs. 66/2003 fissa l'orario normale di lavoro in 40 ore settimanali, facendo salva la facoltà dei contratti collettivi di stabilire una durata minore o riferire l'orario normale alla durata media delle prestazioni in un periodo non superiore all'anno.",
    hint: "L'orario normale standard è di 40 ore settimanali.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_064",
    question: "Qual è la durata massima dell'orario di lavoro settimanale comprensiva del lavoro straordinario (art. 4 D.Lgs. 66/2003)?",
    options: [
      { id: "A", text: "Non può superare, per ogni periodo di sette giorni, la media di 48 ore, calcolata con riferimento a un periodo non superiore a quattro mesi" },
      { id: "B", text: "60 ore settimanali fisse senza possibilità di recupero" },
      { id: "C", text: "Non può mai superare le 42 ore settimanali" },
      { id: "D", text: "55 ore medie mensili" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 4, comma 2, D.Lgs. 66/2003, la durata media dell'orario di lavoro non può in ogni caso superare, per ogni periodo di sette giorni, le 48 ore, comprese le ore di lavoro straordinario, calcolate su un periodo di riferimento non superiore a 4 mesi (estendibile dai CCNL fino a 6 o 12 mesi per ragioni obiettive).",
    hint: "Limite medio massimo di 48 ore settimanali su arco quadrimestrale.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_065",
    question: "A quante ore di riposo giornaliero consecutivo ha diritto il lavoratore ogni ventiquattro ore ai sensi dell'art. 7 del D.Lgs. 66/2003?",
    options: [
      { id: "A", text: "Almeno 8 ore" },
      { id: "B", text: "Almeno 11 ore consecutive" },
      { id: "C", text: "Almeno 14 ore" },
      { id: "D", text: "Non vi è un limite fisso di riposo continuativo" }
    ],
    correctAnswerId: "B",
    explanation: "L'art. 7 del D.Lgs. 66/2003 sancisce il diritto inderogabile del lavoratore a fruire di almeno 11 ore di riposo consecutivo ogni 24 ore.",
    hint: "11 ore consecutive di riposo ogni ventiquattro ore.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_066",
    question: "Qual è la disciplina legale inderogabile delle ferie annuali stabilita dall'art. 10 del D.Lgs. 66/2003?",
    options: [
      { id: "A", text: "Il lavoratore ha diritto a un periodo annuale di ferie retribuite non inferiore a quattro settimane; tale periodo minimo non può essere sostituito dalla relativa indennità per ferie non godute, salvo il caso di risoluzione del rapporto di lavoro" },
      { id: "B", text: "Le ferie ammontano a due settimane e possono essere sempre monetizzate con il consenso del lavoratore" },
      { id: "C", text: "Il periodo di ferie è a discrezione del datore di lavoro e non può superare 10 giorni lavorativi" },
      { id: "D", text: "Le ferie possono essere sostituite da buoni spesa o welfare aziendale a richiesta dell'impresa" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 10 D.Lgs. 66/2003 (in attuazione dell'art. 36 Cost.) stabilisce che il periodo minimo di ferie è di 4 settimane all'anno (di cui almeno due consecutive su richiesta) e vige il divieto assoluto di monetizzazione durante il rapporto, salvo alla cessazione dello stesso.",
    hint: "Almeno 4 settimane, con divieto assoluto di monetizzazione durante il rapporto.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_067",
    question: "Qual è la durata del congedo di paternità obbligatorio introdotto dal D.Lgs. 105/2022 a carico dell'INPS?",
    options: [
      { id: "A", text: "3 giorni lavorativi" },
      { id: "B", text: "10 giorni lavorativi retribuiti al 100% dell'indennità" },
      { id: "C", text: "30 giorni di calendario" },
      { id: "D", text: "5 giorni fruibili solo congiuntamente alla madre" }
    ],
    correctAnswerId: "B",
    explanation: "L'art. 27-bis del D.Lgs. 151/2001 (introdotto dal D.Lgs. 105/2022) prevede che il padre lavoratore dipendente fruisca di un congedo di paternità obbligatorio di 10 giorni lavorativi (20 in caso di parto plurimo), indennizzati al 100% dall'INPS, fruibili dai 2 mesi precedenti fino ai 5 mesi successivi al parto.",
    hint: "10 giorni lavorativi indennizzati al 100%.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_068",
    question: "A quale percentuale della retribuzione è indennizzato il congedo parentale per i primi mesi secondo le novità introdotte dalle recenti Leggi di Bilancio?",
    options: [
      { id: "A", text: "Sempre al 30% per tutti i mesi di fruizione" },
      { id: "B", text: "All'80% della retribuzione per i primi due mesi fruiti entro i 6 anni di vita del bambino (in alternativa tra i genitori) e al 30% per i mesi successivi" },
      { id: "C", text: "Al 100% per l'intero primo anno di vita" },
      { id: "D", text: "Al 50% forfettario senza distinzione di anzianità" }
    ],
    correctAnswerId: "B",
    explanation: "Le Leggi di Bilancio per il 2023 e 2024 hanno elevato l'indennità per il congedo parentale all'80% della retribuzione per i primi due mesi di congedo fruiti entro il sesto anno di vita del figlio (in alternativa tra i genitori lavoratori dipendenti), mentre i restanti periodi restano indennizzati al 30%.",
    hint: "Elevato all'80% per i primi due mesi entro i 6 anni di vita del minore.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_069",
    question: "Cos'è il 'diritto alla disconnessione' previsto dalla Legge 81/2017 in materia di lavoro agile (smart working)?",
    options: [
      { id: "A", text: "Il diritto del lavoratore a spegnere i dispositivi tecnologici e non rispondere alle comunicazioni aziendali durante le fasce di riposo individuate nell'accordo individuale" },
      { id: "B", text: "Il potere del datore di lavoro di bloccare l'accesso a internet dei dipendenti durante l'orario d'ufficio" },
      { id: "C", text: "La disattivazione automatica della casella email durante i weekend ordinata dall'AGCOM" },
      { id: "D", text: "Un bonus economico erogato a chi non possiede connessione Wi-Fi" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 19 della Legge 81/2017 sancisce che l'accordo sul lavoro agile deve individuare le misure tecniche e organizzative necessarie per assicurare la disconnessione del lavoratore dalle strumentazioni tecnologiche di lavoro, a salvaguardia del suo riposo e della sua salute.",
    hint: "Tutela il riposo escludendo l'obbligo di connessione e risposta fuori dall'orario.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_070",
    question: "Quale regime si applica agli infortuni sul lavoro occorsi durante la prestazione resa in modalità di lavoro agile (art. 23 L. 81/2017)?",
    options: [
      { id: "A", text: "Il lavoratore agile ha diritto alla tutela contro gli infortuni sul lavoro e le malattie professionali dipendenti da rischi connessi alla prestazione lavorativa resa all'esterno dei locali aziendali secondo la disciplina ordinaria INAIL" },
      { id: "B", text: "Nessuna tutela assicurativa, essendo il lavoratore responsabile esclusivo del proprio ambiente domestico" },
      { id: "C", text: "Gli infortuni domestici sono coperti solo da assicurazioni private stipulate dal dipendente" },
      { id: "D", text: "Si applica una franchigia economica obbligatoria di 5.000 euro a carico del datore" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 23 L. 81/2017, il lavoratore agile è pienamente tutelato dall'INAIL sia per gli infortuni occorsi nell'abitazione o nel luogo prescelto per la prestazione connessi al lavoro, sia per l'infortunio in itinere qualora la scelta del luogo sia giustificata da esigenze collegate alla prestazione o alla conciliazione vita-lavoro.",
    hint: "Piena copertura assicurativa ordinaria INAIL.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_071",
    question: "Cosa definisce la 'giusta causa' di licenziamento ai sensi dell'art. 2119 del Codice Civile?",
    options: [
      { id: "A", text: "Una causa che non consente la prosecuzione, anche provvisoria, del rapporto di lavoro" },
      { id: "B", text: "Un notevole inadempimento degli obblighi contrattuali che consente il preavviso" },
      { id: "C", text: "La soppressione del posto di lavoro per riorganizzazione tecnologica" },
      { id: "D", text: "Il raggiungimento dell'età pensionabile di vecchiaia" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2119 c.c. definisce la giusta causa come quella causa gravissima che non consente la prosecuzione, anche provvisoria, del rapporto; in tal caso il recesso avviene con effetto immediato (in tronco), senza obbligo di concedere il preavviso né di pagare la relativa indennità sostitutiva.",
    hint: "Impedisce la prosecuzione anche provvisoria e determina il licenziamento in tronco.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_072",
    question: "In cosa differisce il licenziamento per 'giustificato motivo soggettivo' dal licenziamento per 'giusta causa'?",
    options: [
      { id: "A", text: "Il giustificato motivo soggettivo è integrato da un notevole inadempimento degli obblighi contrattuali del lavoratore ma, essendo meno grave della giusta causa, comporta l'obbligo di concedere il periodo di preavviso o la relativa indennità sostitutiva" },
      { id: "B", text: "Il giustificato motivo soggettivo riguarda solo motivi economici aziendali" },
      { id: "C", text: "La giusta causa richiede sempre l'autorizzazione preventiva dell'Ispettorato del Lavoro" },
      { id: "D", text: "Non vi è alcuna differenza sostanziale né di procedura" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 3 della L. 604/1966, il giustificato motivo soggettivo consiste in un 'notevole inadempimento' degli obblighi contrattuali. A differenza della giusta causa (che non tollera neppure la prosecuzione provvisoria ed è senza preavviso), il GMS obbliga il datore al rispetto del preavviso.",
    hint: "Notevole inadempimento con diritto al preavviso.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_073",
    question: "Cosa si intende per licenziamento per 'giustificato motivo oggettivo' (GMO) ex art. 3 Legge 604/1966?",
    options: [
      { id: "A", text: "Un licenziamento determinato da ragioni inerenti all'attività produttiva, all'organizzazione del lavoro e al regolare funzionamento di essa" },
      { id: "B", text: "Un recesso fondato esclusivamente sulla violazione del codice disciplinare" },
      { id: "C", text: "La cessazione del rapporto per compimento del periodo di comporto per malattia" },
      { id: "D", text: "Il licenziamento intimato per ragioni di discriminazione sindacale o politica" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 3 L. 604/1966 definisce il GMO come quel licenziamento determinato da ragioni economiche, tecniche, organizzative o produttive dell'impresa (es. soppressione del reparto, introduzione di nuove macchine, riassetto aziendale).",
    hint: "Ragioni connesse all'organizzazione del lavoro e alla produzione (motivi economici).",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_074",
    question: "Quale onere incombe sul datore di lavoro per dimostrare la legittimità del licenziamento per giustificato motivo oggettivo (c.d. obbligo di repechage)?",
    options: [
      { id: "A", text: "L'onere di provare l'impossibilità di adibire il lavoratore ad altre mansioni equivalenti o anche inferiori presenti nell'organizzazione aziendale" },
      { id: "B", text: "L'onere di acquistare un'altra azienda per riassorbire il personale" },
      { id: "C", text: "L'obbligo di pagare uno stipendio supplementare a tutti i colleghi del licenziato" },
      { id: "D", text: "Nessun onere ulteriore oltre alla semplice comunicazione scritta" }
    ],
    correctAnswerId: "A",
    explanation: "La giurisprudenza costante impone al datore di lavoro l'onere di provare il c.d. repechage, ossia che non vi siano posizioni lavorative alternative all'interno dell'intera struttura aziendale cui ricollocare proficuamente il lavoratore, anche con mansioni inferiori.",
    hint: "Prova dell'impossibilità di ricollocare il lavoratore in altre mansioni aziendali.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_075",
    question: "A seguito delle storiche sentenze della Corte Costituzionale (n. 194/2018 e n. 150/2020) sul D.Lgs. 23/2015 (Contratto a tutele crescenti), come viene determinato il risarcimento per licenziamento illegittimo privo di giusta causa o GMO?",
    options: [
      { id: "A", text: "Non più in base a un mero automatismo matematico legato all'anzianità di servizio, ma dal giudice entro i limiti minimo e massimo di legge, tenendo conto dell'anzianità, del numero dei dipendenti, delle dimensioni dell'impresa e del comportamento delle parti" },
      { id: "B", text: "Con una cifra fissa di 100.000 euro per qualsiasi dipendente" },
      { id: "C", text: "Esclusivamente applicando due mensilità per ogni anno di servizio senza valutazione giudiziale" },
      { id: "D", text: "Attraverso un sorteggio pubblico tra le tabelle dell'Ispettorato del Lavoro" }
    ],
    correctAnswerId: "A",
    explanation: "La Corte Costituzionale (sent. 194/2018) ha dichiarato incostituzionale il criterio rigido e automatico delle due mensilità per anno di servizio, restituendo al giudice del lavoro la discrezionalità di quantificare l'indennità risarcitoria tra il minimo e il massimo edittale (attualmente da 6 a 36 mensilità) valutando molteplici parametri.",
    hint: "Discrezionalità del giudice tra minimo e massimo, superando il rigido automatismo matematico.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_LAV_076",
    question: "In quali casi eccezionali nel regime del D.Lgs. 23/2015 (tutele crescenti) residua la reintegrazione nel posto di lavoro per licenziamento economico (GMO)?",
    options: [
      { id: "A", text: "In nessun caso per il licenziamento economico, essendo prevista solo la tutela indennitaria monetaria (salvo che il fatto sia nullo per discriminazione o motivo illecito)" },
      { id: "B", text: "Sempre, in ogni ipotesi di mancato repechage" },
      { id: "C", text: "Solo se l'azienda occupa più di 500 dipendenti" },
      { id: "D", text: "Se il dipendente è laureato con lode" }
    ],
    correctAnswerId: "A",
    explanation: "A differenza dell'art. 18 Statuto (come modificato dalla L. 92/2012), nel regime delle tutele crescenti (D.Lgs. 23/2015) l'insussistenza del giustificato motivo oggettivo non dà mai diritto alla reintegra ma solo all'indennità economica; la reintegra opera solo per licenziamenti nulli (discriminatori, intimati in concomitanza di matrimonio o maternità) o per insussistenza del fatto materiale nel GMS/giusta causa.",
    hint: "Per il GMO nelle tutele crescenti la tutela è unicamente risarcitoria economica.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_LAV_077",
    question: "Quali requisiti integrano la fattispecie di 'licenziamento collettivo' ai sensi della Legge 23 luglio 1991, n. 223?",
    options: [
      { id: "A", text: "Impresa con più di 15 dipendenti che intende effettuare almeno 5 licenziamenti nell'arco di 120 giorni in ciascuna unità produttiva o in più unità nell'ambito della stessa provincia, per riduzione o trasformazione di attività" },
      { id: "B", text: "Qualsiasi impresa che licenzi 2 lavoratori contemporaneamente" },
      { id: "C", text: "Imprese artigiane che riducano l'orario di lavoro a metà dei dipendenti" },
      { id: "D", text: "Licenziamento di almeno 50 lavoratori nell'arco di un biennio solare" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge 223/1991 (artt. 4 e 24) definisce il licenziamento collettivo per le imprese che occupano più di 15 dipendenti e che intendano effettuare almeno 5 licenziamenti nell'arco di 120 giorni nella stessa provincia in conseguenza di riduzione o trasformazione di attività o lavoro.",
    hint: "Più di 15 dipendenti, almeno 5 licenziamenti nell'arco di 120 giorni.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_078",
    question: "In caso di licenziamento collettivo ex L. 223/1991, quali criteri di scelta dei lavoratori da licenziare si applicano in mancanza di diversi criteri concordati nei contratti collettivi?",
    options: [
      { id: "A", text: "I criteri legali concorrenti: carichi di famiglia, anzianità di servizio ed esigenze tecnico-produttive e organizzative dell'impresa" },
      { id: "B", text: "Esclusivamente l'ordine alfabetico dei dipendenti" },
      { id: "C", text: "Il livello retributivo più alto" },
      { id: "D", text: "La residenza anagrafica più distante dalla sede di lavoro" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 5, comma 1, L. 223/1991 stabilisce che, in assenza di diversi criteri stabiliti dagli accordi sindacali, l'individuazione dei lavoratori deve avvenire nel rispetto congiunto di tre criteri legali: carichi di famiglia, anzianità e motivi tecnico-produttivi.",
    hint: "Carichi di famiglia, anzianità ed esigenze tecnico-produttive.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_079",
    question: "Entro quale termine decadenziale il lavoratore deve impugnare stragiudizialmente il licenziamento a pena di inefficacia (art. 6 Legge 604/1966)?",
    options: [
      { id: "A", text: "Entro 60 giorni dalla ricezione della comunicazione scritta del licenziamento" },
      { id: "B", text: "Entro 30 giorni" },
      { id: "C", text: "Entro 120 giorni" },
      { id: "D", text: "Entro 5 anni" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 6 L. 604/1966, il licenziamento deve essere impugnato a pena di decadenza entro 60 giorni dalla ricezione della sua comunicazione scritta, con qualsiasi atto scritto, anche extragiudiziale, idoneo a rendere nota la volontà del lavoratore.",
    hint: "Termine decadenziale di 60 giorni per l'impugnazione stragiudiziale.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_080",
    question: "A seguito dell'impugnazione stragiudiziale del licenziamento entro 60 giorni, entro quale termine successivo deve essere depositato il ricorso giudiziale dinanzi al Tribunale del Lavoro?",
    options: [
      { id: "A", text: "Entro 180 giorni a pena di inefficacia dell'impugnazione" },
      { id: "B", text: "Entro 30 giorni" },
      { id: "C", text: "Entro un anno solare" },
      { id: "D", text: "Entro 60 giorni esatti" }
    ],
    correctAnswerId: "A",
    explanation: "L'impugnazione è inefficace se non è seguita, entro il successivo termine perentorio di 180 giorni, dal deposito del ricorso nella cancelleria del tribunale in funzione di giudice del lavoro ovvero dalla comunicazione alla controparte della richiesta di tentativo di conciliazione o arbitrato.",
    hint: "Successivo termine perentorio di 180 giorni per il deposito del ricorso in tribunale.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_081",
    question: "Quale importante modifica ha apportato la 'Riforma Cartabia' (D.Lgs. 149/2022) al contenzioso sui licenziamenti?",
    options: [
      { id: "A", text: "Ha abrogato il c.d. 'Rito Fornero' (L. 92/2012), riconducendo le controversie sui licenziamenti nell'alveo del rito ordinario del lavoro (art. 409 e ss. c.p.c.) con corsia di trattazione prioritaria" },
      { id: "B", text: "Ha reso obbligatorio l'arbitrato privato vietando il ricorso al TAR" },
      { id: "C", text: "Ha abolito la figura del giudice del lavoro monocratico sostituendola con un collegio di cinque giudici" },
      { id: "D", text: "Ha introdotto l'obbligo di conciliazione notarile preventiva" }
    ],
    correctAnswerId: "A",
    explanation: "La Riforma Cartabia ha abrogato il rito sommario speciale introdotto dalla Legge Fornero (commi 47-69 art. 1 L. 92/2012), unificando il rito per i licenziamenti sotto il modello generale dell'art. 409 c.p.c., prevedendo specifiche norme per garantire la trattazione celere.",
    hint: "Abrogazione del Rito Fornero e ritorno al rito del lavoro con priorità.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_LAV_082",
    question: "Cos'è il Trattamento di Fine Rapporto (TFR) disciplinato dall'art. 2120 del Codice Civile?",
    options: [
      { id: "A", text: "Una forma di retribuzione differita corrisposta al lavoratore all'atto della cessazione del rapporto di lavoro, accantonata annualmente dividendo la retribuzione utile per 13,5" },
      { id: "B", text: "Una penale risarcitoria pagata dall'INPS in caso di fallimento" },
      { id: "C", text: "Un'indennità forfettaria pari a una mensilità per ogni dieci anni di lavoro" },
      { id: "D", text: "Un fondo azionario a rischio gestito direttamente dalle rappresentanze sindacali" }
    ],
    correctAnswerId: "A",
    explanation: "Il TFR è una quota di retribuzione accantonata annualmente dal datore di lavoro per ciascun dipendente, calcolata dividendo la retribuzione annua per 13,5, rivalutata al 31 dicembre di ogni anno con un tasso fisso dell'1,5% aumentato del 75% dell'indice dei prezzi al consumo ISTAT.",
    hint: "Retribuzione differita calcolata dividendo la retribuzione per 13,5 con rivalutazione legale.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_083",
    question: "Nelle aziende con almeno 50 dipendenti, quale destinazione hanno le quote di TFR maturate dai lavoratori che scelgono di mantenere il TFR in azienda (D.Lgs. 252/2005)?",
    options: [
      { id: "A", text: "Vengono versate obbligatoriamente dal datore di lavoro al Fondo di Tesoreria gestito dall'INPS per conto dello Stato" },
      { id: "B", text: "Restano nella disponibilità liquida dell'imprenditore senza alcun vincolo" },
      { id: "C", text: "Vengono conferite obbligatoriamente a fondi pensione aperti" },
      { id: "D", text: "Vengono convertite in titoli di Stato a rendimento fisso" }
    ],
    correctAnswerId: "A",
    explanation: "I datori di lavoro del settore privato con almeno 50 dipendenti sono tenuti a versare le quote di TFR dei dipendenti che non hanno optato per la previdenza complementare al 'Fondo per l'erogazione ai lavoratori dipendenti del settore privato dei trattamenti di fine rapporto' (Fondo Tesoreria INPS).",
    hint: "Versamento al Fondo di Tesoreria INPS.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_084",
    question: "In presenza di quali condizioni il lavoratore con almeno 8 anni di servizio presso lo stesso datore può richiedere un'anticipazione del TFR (art. 2120 c.c.)?",
    options: [
      { id: "A", text: "Fino al 70% del trattamento maturato, per spese sanitarie straordinarie o per l'acquisto della prima casa per sé o per i figli" },
      { id: "B", text: "Fino al 100% per qualsiasi spesa personale senza giustificazione" },
      { id: "C", text: "Solo per finanziare viaggi all'estero" },
      { id: "D", text: "Solo in caso di decesso del coniuge" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2120, comma 6 e ss., c.c. consente l'anticipazione del TFR fino al 70% a chi abbia almeno 8 anni di anzianità, per spese sanitarie straordinarie per terapie e interventi necessari, o per l'acquisto della prima casa di abitazione per sé o per i figli, entro il limite annuale del 10% degli aventi titolo e del 4% del personale.",
    hint: "Almeno 8 anni di servizio, anticipazione fino al 70% per salute o prima casa.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_085",
    question: "Cos'è il Fondo di Garanzia per il TFR e i crediti di lavoro istituito presso l'INPS (Legge 297/1982 e D.Lgs. 80/1992)?",
    options: [
      { id: "A", text: "Un fondo pubblico che si sostituisce al datore di lavoro insolvente o fallito nel pagamento del TFR e delle ultime tre mensilità di retribuzione ai lavoratori" },
      { id: "B", text: "Un fondo che eroga prestiti personali a tassi agevolati ai dirigenti d'azienda" },
      { id: "C", text: "Un consorzio di banche private per la gestione delle liquidazioni aziendali" },
      { id: "D", text: "Un'assicurazione privata obbligatoria contro gli infortuni sportivi" }
    ],
    correctAnswerId: "A",
    explanation: "Il Fondo di Garanzia INPS interviene a tutela dei lavoratori dipendenti in caso di insolvenza del datore di lavoro (liquidazione giudiziale/fallimento, concordato, esecuzione forzata infruttuosa), garantendo la liquidazione del TFR e delle ultime 3 mensilità retributive maturate negli ultimi 12 mesi di rapporto.",
    hint: "Interviene in caso di insolvenza/fallimento per pagare TFR e ultime 3 mensilità.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_086",
    question: "Quale elemento distingue l'appalto genuino di servizi (art. 29 D.Lgs. 276/2003) dalla somministrazione o dall'illecita interposizione di manodopera?",
    options: [
      { id: "A", text: "L'organizzazione dei mezzi necessari da parte dell'appaltatore (con effettivo esercizio del potere direttivo sui lavoratori) e l'assunzione del rischio d'impresa" },
      { id: "B", text: "La presenza di un capitale sociale dell'appaltatore superiore a un milione di euro" },
      { id: "C", text: "Il fatto che i lavoratori indossino divise fornite dal committente" },
      { id: "D", text: "La durata dell'appalto inferiore a 30 giorni" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 29 D.Lgs. 276/2003, il contratto di appalto si distingue dalla somministrazione di lavoro per l'organizzazione dei mezzi necessari da parte dell'appaltatore (che può anche consistere nell'esercizio del potere direttivo e organizzativo sui propri dipendenti) e per l'assunzione del rischio d'impresa.",
    hint: "Organizzazione dei mezzi, gestione direttiva autonoma e assunzione del rischio d'impresa.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_087",
    question: "Cosa prevede il regime di responsabilità solidale negli appalti di opere o servizi tra committente, appaltatore ed eventuali subappaltatori (art. 29, comma 2, D.Lgs. 276/2003)?",
    options: [
      { id: "A", text: "Il committente risponde in solido con l'appaltatore e i subappaltatori, entro il limite di due anni dalla cessazione dell'appalto, per i trattamenti retributivi, le quote di TFR e i contributi previdenziali e assicurativi dovuti ai dipendenti impiegati nell'appalto" },
      { id: "B", text: "La responsabilità del committente cessa immediatamente all'atto della firma del contratto d'appalto" },
      { id: "C", text: "Il committente risponde solo ed esclusivamente delle sanzioni penali e non dei debiti retributivi" },
      { id: "D", text: "La solidarietà opera solo se l'appaltatore ha sede all'estero" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 29, comma 2, D.Lgs. 276/2003 stabilisce che il committente imprenditore o datore di lavoro è obbligato in solido con l'appaltatore e con ciascuno degli eventuali subappaltatori entro il limite di due anni dalla cessazione dell'appalto a corrispondere ai lavoratori i trattamenti retributivi, il TFR e i contributi previdenziali.",
    hint: "Responsabilità solidale biennale per retribuzioni, TFR e contributi INPS/INAIL.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_088",
    question: "Quali sono gli obblighi non delegabili del datore di lavoro in materia di salute e sicurezza sul lavoro ai sensi dell'art. 17 del D.Lgs. 81/2008?",
    options: [
      { id: "A", text: "La valutazione di tutti i rischi con la conseguente redazione del DVR (Documento di Valutazione dei Rischi) e la designazione del Responsabile del Servizio di Prevenzione e Protezione (RSPP)" },
      { id: "B", text: "L'acquisto dei dispositivi di protezione individuale e la pulizia giornaliera dei locali" },
      { id: "C", text: "La nomina del medico competente e la tenuta del registro infortuni" },
      { id: "D", text: "L'erogazione della retribuzione mensile e la concessione dei permessi sindacali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 17 D.Lgs. 81/2008 individua due soli compiti che il datore di lavoro non può in alcun caso delegare: 1) la valutazione di tutti i rischi con la redazione del Documento di Valutazione dei Rischi (DVR); 2) la designazione del Responsabile del Servizio di Prevenzione e Protezione (RSPP).",
    hint: "DVR e nomina dell'RSPP sono obblighi personali e non delegabili.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_089",
    question: "Chi è il Rappresentante dei Lavoratori per la Sicurezza (RLS) ai sensi del D.Lgs. 81/2008?",
    options: [
      { id: "A", text: "La persona eletta o designata dai lavoratori per rappresentarli in tutti gli aspetti della salute e della sicurezza sul lavoro, obbligatoriamente presente in tutte le aziende o unità produttive" },
      { id: "B", text: "Un funzionario ispettivo inviato dall'INAIL con poteri sanzionatori" },
      { id: "C", text: "Il medico del lavoro incaricato delle visite periodiche" },
      { id: "D", text: "Il titolare dell'impresa nei periodi di prova" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 47 D.Lgs. 81/2008 sancisce che in ogni azienda o unità produttiva è istituito il Rappresentante dei Lavoratori per la Sicurezza (RLS), eletto dai lavoratori (nelle aziende fino a 15 dipendenti) o designato nell'ambito delle rappresentanze sindacali aziendali (sopra i 15 dipendenti).",
    hint: "Figura eletta dai lavoratori a tutela della salute e sicurezza in azienda.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_090",
    question: "In caso di trasferimento d'azienda ex art. 2112 c.c., cosa accade ai rapporti di lavoro in essere al momento della cessione?",
    options: [
      { id: "A", text: "Il rapporto di lavoro continua con il cessionario e il lavoratore conserva tutti i diritti che ne derivano; il cedente e il cessionario sono obbligati in solido per tutti i crediti maturati dal lavoratore fino al trasferimento" },
      { id: "B", text: "I rapporti di lavoro si estinguono automaticamente salvo stipula di un nuovo contratto con periodo di prova" },
      { id: "C", text: "I lavoratori passano all'INPS in cassa integrazione a zero ore a tempo indeterminato" },
      { id: "D", text: "Il cessionario può licenziare liberamente tutti i dipendenti senza alcuna giustificazione" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2112 c.c. garantisce la continuità del rapporto di lavoro con il subentrante (senza novazione né periodo di prova), la conservazione dell'anzianità e dei trattamenti acquisiti e la responsabilità solidale tra cedente e cessionario per i crediti maturati.",
    hint: "Continuità automatica del rapporto di lavoro e responsabilità solidale cedente-cessionario.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_091",
    question: "Il trasferimento d'azienda costituisce di per sé motivo legittimo di licenziamento dei lavoratori coinvolti?",
    options: [
      { id: "A", text: "No, l'art. 2112, comma 4, c.c. stabilisce espressamente che il trasferimento d'azienda non costituisce di per sé motivo di licenziamento" },
      { id: "B", text: "Sì, il cedente può licenziare il 50% dei lavoratori per facilitare la vendita" },
      { id: "C", text: "Sì, ma solo per i lavoratori con meno di tre anni di anzianità" },
      { id: "D", text: "Solo previa autorizzazione del Ministero dello Sviluppo Economico" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 2112, comma 4, c.c., il trasferimento d'azienda non può mai costituire di per sé motivo legittimo di licenziamento. Resta salva la facoltà di licenziare per giusta causa o per giustificato motivo autonomo e indipendente dall'operazione di cessione.",
    hint: "Il trasferimento d'azienda non può mai costituire motivo di licenziamento.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_092",
    question: "Cos'è il contratto di lavoro a tempo parziale (part-time) disciplinato dal D.Lgs. 81/2015?",
    options: [
      { id: "A", text: "Un contratto di lavoro subordinato in cui l'orario di lavoro concordato è inferiore all'orario normale di 40 ore settimanali o al minor orario previsto dal CCNL, stipulato necessariamente in forma scritta ad probationem" },
      { id: "B", text: "Un rapporto di lavoro non tutelato dalle norme previdenziali" },
      { id: "C", text: "Un contratto stipulabile unicamente a tempo determinato per un massimo di tre mesi" },
      { id: "D", text: "Un'attività svolta a favore di due datori contemporaneamente nelle stesse ore" }
    ],
    correctAnswerId: "A",
    explanation: "Il part-time (artt. 4-12 D.Lgs. 81/2015) richiede la forma scritta per la prova e la puntuale indicazione della durata e della collocazione temporale della prestazione (orizzontale, verticale o ciclico), garantendo il principio di non discriminazione e il proporzionamento del trattamento economico.",
    hint: "Orario inferiore al tempo pieno, forma scritta per la prova e proporzionamento del salario.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_093",
    question: "Cosa sono le 'clausole elastiche' nel contratto a tempo parziale?",
    options: [
      { id: "A", text: "Pattuizioni scritte con cui il datore di lavoro e il lavoratore concordano la facoltà per il datore di variare la collocazione temporale della prestazione lavorativa o di aumentarne la durata rispetto a quella inizialmente concordata" },
      { id: "B", text: "Clausole che consentono di ridurre lo stipendio in base alla produttività" },
      { id: "C", text: "Accordi verbali per lavorare durante le festività senza maggiorazione" },
      { id: "D", text: "Condizioni che consentono al datore di licenziare senza preavviso" }
    ],
    correctAnswerId: "A",
    explanation: "Le clausole elastiche (art. 6 D.Lgs. 81/2015) consentono la modifica della collocazione temporale dell'orario o la variazione in aumento della durata della prestazione; richiedono forma scritta a pena di nullità, un preavviso minimo di 2 giorni lavorativi e specifiche maggiorazioni retributive.",
    hint: "Patti scritti per variare la collocazione temporale o incrementare l'orario part-time.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_094",
    question: "Il rifiuto del lavoratore di trasformare il proprio rapporto di lavoro a tempo pieno in tempo parziale, o viceversa, costituisce motivo legittimo di licenziamento?",
    options: [
      { id: "A", text: "No, il rifiuto del lavoratore non costituisce in nessun caso motivo di licenziamento per giustificato motivo" },
      { id: "B", text: "Sì, integra una grave insubordinazione punita con il licenziamento in tronco" },
      { id: "C", text: "Sì, ma solo nelle aziende con oltre 100 dipendenti" },
      { id: "D", text: "Comporta la perdita della retribuzione per un periodo di sei mesi" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 8, comma 1, D.Lgs. 81/2015 stabilisce categoricamente che il rifiuto del lavoratore di trasformare il proprio rapporto di lavoro a tempo pieno in rapporto a tempo parziale, o viceversa, non costituisce giustificato motivo di licenziamento.",
    hint: "Il rifiuto della variazione d'orario non può mai giustificare il licenziamento.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_095",
    question: "Cos'è il patto di prova nel contratto di lavoro subordinato (art. 2096 c.c.)?",
    options: [
      { id: "A", text: "Una clausola che deve risultare da atto scritto a pena di nullità, anteriore o contestuale all'assunzione, durante la quale ciascuna delle parti può recedere liberamente senza obbligo di preavviso né indennità" },
      { id: "B", text: "Un accordo verbale che dura finché il datore lo ritiene opportuno" },
      { id: "C", text: "Un periodo di tirocinio non retribuito e non coperto da contribuzione" },
      { id: "D", text: "Un contratto speciale riservato agli apprendisti minorenni" }
    ],
    correctAnswerId: "A",
    explanation: "Il patto di prova (art. 2096 c.c.) richiede la forma scritta ad substantiam prima dell'inizio dell'attività e la specifica indicazione delle mansioni. Durante la prova il recesso è libero (ad nutum), fatto salvo il caso di motivo illecito o di mancata messa in condizione di svolgere la prova.",
    hint: "Forma scritta a pena di nullità anteriore o contestuale, recesso libero senza preavviso.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_096",
    question: "Quale limite massimo di durata per il patto di prova è previsto dalla legge e dal D.Lgs. 104/2022 (Decreto Trasparenza)?",
    options: [
      { id: "A", text: "Non può superare i sei mesi (ed è proporzionato alla durata del contratto e alle mansioni nei contratti a termine)" },
      { id: "B", text: "Un anno solare continuativo" },
      { id: "C", text: "30 giorni inderogabili per tutti i livelli" },
      { id: "D", text: "Non vi è alcun limite di durata stabilito dall'ordinamento" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 10 della Legge 604/1966 e l'art. 7 D.Lgs. 104/2022 fissano la durata massima del periodo di prova in sei mesi. Nel contratto a termine il periodo di prova deve essere proporzionato alla durata del contratto e alla natura delle mansioni.",
    hint: "Limite massimo generale di 6 mesi, con proporzionamento per i contratti a termine.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_097",
    question: "Cosa stabilisce l'art. 2105 del Codice Civile in merito all'obbligo di fedeltà del prestatore di lavoro?",
    options: [
      { id: "A", text: "Il prestatore di lavoro non deve trattare affari, per conto proprio o di terzi, in concorrenza con l'imprenditore, né divulgare notizie attinenti all'organizzazione e ai metodi di produzione dell'impresa, o farne uso in modo da poter recare ad essa pregiudizio" },
      { id: "B", text: "Il lavoratore deve iscriversi obbligatoriamente allo stesso partito politico del datore" },
      { id: "C", text: "Il lavoratore non può svolgere alcun'altra attività retribuita per tutta la vita" },
      { id: "D", text: "L'obbligo di prestare straordinari non retribuiti in caso di crisi aziendale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2105 c.c. pone a carico del lavoratore due doveri specifici discendenti dal dovere di fedeltà: il divieto di concorrenza durante il rapporto di lavoro e l'obbligo di riservatezza (divieto di divulgazione o utilizzo pregiudizievole di segreti aziendali e organizzativi).",
    hint: "Divieto di concorrenza e obbligo di segretezza/riservatezza aziendale.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_098",
    question: "Quali requisiti di validità sono prescritti dall'art. 2125 c.c. per il 'patto di non concorrenza' successivo alla cessazione del rapporto di lavoro?",
    options: [
      { id: "A", text: "Forma scritta a pena di nullità, pattuizione di un corrispettivo congruo a favore del lavoratore, e vincoli determinati di oggetto, di tempo (massimo 5 anni per i dirigenti e 3 anni per gli altri lavoratori) e di luogo" },
      { id: "B", text: "Semplice consenso orale confermato da due colleghi" },
      { id: "C", text: "Divieto illimitato nel tempo su tutto il territorio mondiale senza compenso" },
      { id: "D", text: "Solo una trattenuta mensile del 5% sull'ultimo stipendio" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2125 c.c. sanziona con la nullità il patto di non concorrenza post-contrattuale privo di forma scritta, privo di corrispettivo adeguato, o che non contenga limiti precisi di oggetto, luogo e tempo (massimo 3 anni per impiegati/operai, 5 per dirigenti).",
    hint: "Forma scritta, corrispettivo economico congruo, limiti di tempo (max 3 o 5 anni), luogo e oggetto.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_099",
    question: "Cosa prevede la procedura disciplinare stabilita dall'art. 7 della Legge 300/1970 (Statuto dei Lavoratori) prima dell'irrogazione di qualsiasi sanzione disciplinare più grave del rimprovero verbale?",
    options: [
      { id: "A", text: "La previa contestazione scritta dell'addebito al lavoratore e la concessione di un termine di almeno 5 giorni per presentare le proprie difese (anche con l'assistenza sindacale)" },
      { id: "B", text: "L'immediata sospensione dello stipendio per almeno 30 giorni" },
      { id: "C", text: "L'interrogatorio obbligatorio del lavoratore dinanzi ai Carabinieri" },
      { id: "D", text: "La revoca immediata delle ferie già maturate" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 7 Statuto Lavoratori impone l'affissione del codice disciplinare, la contestazione per iscritto specifica, tempestiva e immutabile dei fatti addebitati e l'obbligo di attendere almeno 5 giorni prima di adottare il provvedimento per consentire al lavoratore di difendersi.",
    hint: "Contestazione scritta specifica e termine a difesa di almeno 5 giorni.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_100",
    question: "Qual è il limite massimo legale per la sanzione disciplinare conservativa della 'multa' e della 'sospensione dal servizio e dalla retribuzione' nel settore privato ex art. 7 L. 300/1970?",
    options: [
      { id: "A", text: "La multa non può superare l'importo di 4 ore di retribuzione base e la sospensione dal servizio non può superare 10 giorni" },
      { id: "B", text: "La multa può arrivare a una mensilità e la sospensione a sei mesi" },
      { id: "C", text: "La multa è sempre pari al 50% dello stipendio" },
      { id: "D", text: "Non vi sono limiti quantitativi salvo quanto stabilito dal giudice" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 7, comma 4, della Legge 300/1970 stabilisce che le sanzioni disciplinari non possono comportare mutamenti definitivi del rapporto; la multa non può superare l'importo di quattro ore della retribuzione base e la sospensione dal servizio e dalla retribuzione non può superare dieci giorni.",
    hint: "Multa max 4 ore, sospensione max 10 giorni.",
    level: "intermedio"
  }
];

const merged = [...existing, ...newQuestions];
fs.writeFileSync(targetFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Successfully added ${newQuestions.length} questions to diritto_lavoro.json. Total questions: ${merged.length}`);
