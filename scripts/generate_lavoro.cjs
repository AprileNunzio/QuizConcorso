const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: "Q_PECS_LAV_001",
    question: "In base all'art. 2094 del Codice Civile, qual è l'elemento essenziale e qualificante del rapporto di lavoro subordinato?",
    options: [
      { id: "A", text: "La sottoposizione del prestatore di lavoro alle direttive tecniche, organizzative e disciplinari del datore di lavoro (etero-direzione)" },
      { id: "B", text: "L'esclusività della prestazione e il divieto assoluto di svolgere qualsiasi altra attività" },
      { id: "C", text: "La retribuzione corrisposta esclusivamente a cottimo con cadenza settimanale" },
      { id: "D", text: "L'assunzione del rischio economico dell'impresa da parte del lavoratore" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2094 c.c. definisce prestatore di lavoro subordinato chi si obbliga mediante retribuzione a collaborare nell'impresa, prestando il proprio lavoro intellettuale o manuale alle dipendenze e sotto la direzione dell'imprenditore (etero-direzione).",
    hint: "È il vincolo di dipendenza e subordinazione alle direttive datoriali.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_002",
    question: "Cosa dispone l'art. 2 del D.Lgs. 81/2015 in merito alle collaborazioni organizzate dal committente (etero-organizzate)?",
    options: [
      { id: "A", text: "Si applica la disciplina del rapporto di lavoro subordinato se le modalità di esecuzione della prestazione sono organizzate mediante piattaforma anche digitale dal committente per tempi e luoghi di lavoro" },
      { id: "B", text: "Sono vietate a pena di reclusione per il committente" },
      { id: "C", text: "Sono considerate automaticamente prestazioni di lavoro autonomo occasionale senza contributi" },
      { id: "D", text: "Possono essere svolte solo da soggetti di età inferiore a 25 anni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2, comma 1, del D.Lgs. 81/2015 stabilisce che si applica la disciplina del lavoro subordinato anche ai rapporti di collaborazione con prestazioni prevalentemente personali, continuative e le cui modalità di esecuzione siano organizzate dal committente (incluse le prestazioni rese tramite piattaforme digitali).",
    hint: "Se il committente organizza tempi e luoghi della prestazione scatta la tutela della subordinazione.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_003",
    question: "Quale principio disciplina lo 'ius variandi' del datore di lavoro sulle mansioni del dipendente ai sensi dell'art. 2103 c.c. riformato dal D.Lgs. 81/2015?",
    options: [
      { id: "A", text: "Il lavoratore può essere adibito a mansioni riconducibili allo stesso livello e categoria legale di inquadramento delle ultime effettivamente svolte" },
      { id: "B", text: "Il lavoratore può essere sempre retrocesso di livello senza alcuna motivazione o limite" },
      { id: "C", text: "Le mansioni possono variare solo in presenza di un accordo notarile annuale" },
      { id: "D", text: "È fatto divieto assoluto di modificare le mansioni stabilite nella lettera di assunzione" }
    ],
    correctAnswerId: "A",
    explanation: "Il nuovo testo dell'art. 2103 c.c. ha superato il criterio dell'equivalenza professionale soggettiva, consentendo l'adibizione a ogni mansione riconducibile allo stesso livello e categoria legale di inquadramento contrattuale.",
    hint: "La mobilità orizzontale è ammessa nell'ambito dello stesso livello contrattuale e categoria.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_004",
    question: "In quali ipotesi l'art. 2103 c.c. consente eccezionalmente l'assegnazione del lavoratore a mansioni appartenenti al livello di inquadramento inferiore?",
    options: [
      { id: "A", text: "In caso di modifica degli assetti organizzativi aziendali che incide sulla posizione del lavoratore, oppure nelle ipotesi previste dai contratti collettivi, mantenendo il trattamento retributivo originario" },
      { id: "B", text: "A discrezione insindacabile del datore di lavoro con decurtazione immediata della retribuzione" },
      { id: "C", text: "Soltanto quando il lavoratore abbia accumulato più di tre sanzioni disciplinari nello stesso mese" },
      { id: "D", text: "In nessun caso, il demansionamento è nullo in modo assoluto e inderogabile" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2103 c.c. ammette il mutamento in peius di un solo livello (nell'ambito della medesima categoria) in caso di modifica degli assetti organizzativi o nelle ipotesi dei CCNL, conservando il livello retributivo previgente (salvi gli elementi legati alla specifica modalità di resa della prestazione).",
    hint: "Ammesso per ristrutturazione organizzativa conservando la retribuzione base.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_LAV_005",
    question: "Quali sono i doveri fondamentali del lavoratore subordinato enunciati dagli articoli 2104 e 2105 del Codice Civile?",
    options: [
      { id: "A", text: "Diligenza nell'adempimento della prestazione, obbedienza alle direttive datoriali, obbligo di fedeltà e divieto di concorrenza o divulgazione di notizie riservate" },
      { id: "B", text: "Solo il divieto di assentarsi per malattia per più di 15 giorni all'anno" },
      { id: "C", text: "L'obbligo di raggiungere gli obiettivi finanziari stabiliti dal consiglio di amministrazione" },
      { id: "D", text: "La totale disponibilità a prestare straordinario notturno festivo non retribuito" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2104 c.c. disciplina la diligenza richiesta dalla natura della prestazione e l'obbligo di osservare le disposizioni per l'esecuzione del lavoro; l'art. 2105 c.c. sancisce l'obbligo di fedeltà, consistente nel divieto di trattare affari in concorrenza e di divulgare notizie attinenti all'organizzazione aziendale.",
    hint: "Diligenza, obbedienza e obbligo di fedeltà/divieto di concorrenza.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_006",
    question: "Quali requisiti di validità richiede l'art. 2125 c.c. per il patto di non concorrenza stipulato tra datore di lavoro e lavoratore per il periodo successivo alla cessazione del rapporto?",
    options: [
      { id: "A", text: "Forma scritta ad substantia, previsione di un corrispettivo economico a favore del lavoratore e delimitazione dell'oggetto, del tempo e del luogo della restrizione" },
      { id: "B", text: "È sufficiente una promessa verbale purché confermata da due colleghi" },
      { id: "C", text: "Il patto è valido anche senza alcun compenso monetario se dura meno di 10 anni" },
      { id: "D", text: "La convalida espressa dell'Ispettorato Territoriale del Lavoro prima della cessazione" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 2125 c.c., il patto di non concorrenza post-contrattuale è nullo se non risulta da atto scritto, se non è pattuito un corrispettivo economico congruo e se il vincolo non è contenuto entro determinati limiti di oggetto, tempo (max 5 anni dirigenti, 3 anni altri) e luogo.",
    hint: "Forma scritta, corrispettivo economico e limiti di tempo, luogo e oggetto.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_007",
    question: "Qual è la procedura obbligatoria stabilita dall'art. 7 della Legge 300/1970 (Statuto dei Lavoratori) per l'irrogazione di una sanzione disciplinare conservativa?",
    options: [
      { id: "A", text: "Preventiva contestazione scritta e specifica dell'addebito, con concessione di almeno 5 giorni al lavoratore per presentare le proprie giustificazioni" },
      { id: "B", text: "Comunicazione verbale immediata e trattenuta immediata sullo stipendio del mese in corso" },
      { id: "C", text: "Autorizzazione preventiva del Prefetto della provincia in cui ha sede l'azienda" },
      { id: "D", text: "Notifica dell'atto di contestazione a mezzo ufficiale giudiziario entro 60 giorni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 7 L. 300/1970 impone la contestazione preventiva, specifica e tempestiva dell'addebito per iscritto; il datore non può adottare il provvedimento disciplinare prima che siano trascorsi 5 giorni dalla contestazione per consentire la difesa del lavoratore.",
    hint: "Contestazione scritta dell'addebito e termine di almeno 5 giorni a difesa.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_008",
    question: "Quali sono i limiti massimi legali per le sanzioni disciplinari conservative previsti dall'art. 7 dello Statuto dei Lavoratori?",
    options: [
      { id: "A", text: "La multa non può superare 4 ore della retribuzione base e la sospensione dal lavoro e dalla retribuzione non può superare 10 giorni" },
      { id: "B", text: "La multa può raggiungere l'intero stipendio mensile e la sospensione fino a 6 mesi" },
      { id: "C", text: "La sospensione non può superare 48 ore consecutive" },
      { id: "D", text: "Non vi sono limiti legali, decide liberamente il datore di lavoro nel regolamento interno" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 7 della L. 300/1970 fissa un tetto massimo invalicabile per le sanzioni conservative: la multa non può superare l'importo di 4 ore della retribuzione base e la sospensione dal servizio e dal trattamento economico non può essere disposta per più di 10 giorni.",
    hint: "Multa max 4 ore, sospensione max 10 giorni.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_009",
    question: "In materia di orario di lavoro, cosa prevede il D.Lgs. 66/2003 in ordine all'orario normale settimanale e al limite massimo comprensivo dello straordinario?",
    options: [
      { id: "A", text: "L'orario normale è fissato in 40 ore settimanali e la durata media settimanale non può superare 48 ore, comprese le ore di straordinario, calcolate su un periodo non superiore a 4 mesi" },
      { id: "B", text: "L'orario normale è di 36 ore e il limite massimo è di 60 ore settimanali" },
      { id: "C", text: "Non vi è alcun orario normale, purché si rispettino 8 ore al giorno" },
      { id: "D", text: "L'orario massimo è di 40 ore comprensive di ogni tipo di straordinario" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.Lgs. 66/2003 (attuativo delle direttive UE) stabilisce l'orario normale in 40 ore settimanali e il limite massimo medio in 48 ore settimanali (straordinario compreso) calcolato con riferimento a un arco temporale standard di 4 mesi.",
    hint: "40 ore normali e media massima di 48 ore comprensiva di straordinario.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_010",
    question: "Qual è il riposo giornaliero consecutivo minimo garantito al lavoratore dal D.Lgs. 66/2003?",
    options: [
      { id: "A", text: "11 ore consecutive di riposo ogni 24 ore" },
      { id: "B", text: "8 ore consecutive di riposo ogni 24 ore" },
      { id: "C", text: "14 ore di riposo cumulabili nell'arco della settimana" },
      { id: "D", text: "6 ore consecutive di riposo notturno" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 7 del D.Lgs. 66/2003 sancisce che il lavoratore ha diritto a 11 ore di riposo consecutivo ogni 24 ore, fatto salvo il regime delle attività a turni o deroghe contrattuali collettive previste dalla legge.",
    hint: "Il riposo giornaliero minimo legale è di 11 ore consecutive.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_011",
    question: "In base alla Costituzione (art. 36) e al D.Lgs. 66/2003, le ferie annuali retribuite del lavoratore:",
    options: [
      { id: "A", text: "Hanno una durata minima inderogabile di 4 settimane e non possono essere sostituite da indennità per ferie non godute, salvo il caso di risoluzione del rapporto di lavoro" },
      { id: "B", text: "Possono essere sempre monetizzate su accordo scritto tra azienda e dipendente" },
      { id: "C", text: "Sono stabilite in 15 giorni all'anno e si prescrivono dopo 6 mesi" },
      { id: "D", text: "Spettano soltanto dopo aver completato 3 anni di anzianità di servizio" }
    ],
    correctAnswerId: "A",
    explanation: "Il diritto alle ferie è irrinunciabile (art. 36 Cost.). Il D.Lgs. 66/2003 fissa in 4 settimane il periodo minimo annuale e vieta espressamente la monetizzazione delle stesse in corso di rapporto, consentendo l'indennità sostitutiva solo alla cessazione definitiva del contratto.",
    hint: "Minimo 4 settimane e divieto assoluto di monetizzazione durante il rapporto.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_012",
    question: "Secondo la disciplina del contratto a tempo determinato (D.Lgs. 81/2015, modificato dal D.L. 48/2023), entro quale durata il contratto è stipulabile liberamente senza necessità di indicare causali (c.d. acausale)?",
    options: [
      { id: "A", text: "Fino a 12 mesi" },
      { id: "B", text: "Fino a 24 mesi" },
      { id: "C", text: "Fino a 6 mesi" },
      { id: "D", text: "Fino a 36 mesi" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.L. 48/2023 (Decreto Lavoro) ha confermato che il contratto a tempo determinato è acausale per i primi 12 mesi. Oltre i 12 mesi e fino a 24 mesi occorrono le causali individuate dai CCNL, accordi aziendali o, in subordine, per esigenze tecniche, organizzative o sostitutive.",
    hint: "I primi 12 mesi sono liberi da causale.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_013",
    question: "Qual è la durata massima complessiva del rapporto di lavoro a tempo determinato tra lo stesso datore di lavoro e lo stesso lavoratore per lo svolgimento di mansioni di pari livello e categoria?",
    options: [
      { id: "A", text: "24 mesi, salve diverse disposizioni dei contratti collettivi" },
      { id: "B", text: "36 mesi inderogabili" },
      { id: "C", text: "48 mesi" },
      { id: "D", text: "12 mesi senza alcuna proroga" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 19 del D.Lgs. 81/2015 fissa in 24 mesi il limite massimo complessivo di durata per successione di contratti a termine tra le stesse parti per mansioni di pari livello (estensibile di ulteriori 12 mesi solo presso l'ITL per il c.d. contratto di deroga assistita).",
    hint: "Il limite massimo legale standard è di 24 mesi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_014",
    question: "In quale dei seguenti casi la legge vieta espressamente la stipulazione di contratti a tempo determinato e contratti di somministrazione di lavoro?",
    options: [
      { id: "A", text: "Per la sostituzione di lavoratori che esercitano il diritto di sciopero e presso unità produttive che non abbiano effettuato la valutazione dei rischi (DVR)" },
      { id: "B", text: "Durante i mesi estivi o nelle giornate festive" },
      { id: "C", text: "Nei confronti di lavoratori di età superiore a 50 anni" },
      { id: "D", text: "Nelle imprese con un fatturato annuo superiore a 10 milioni di euro" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 20 del D.Lgs. 81/2015 pone divieti tassativi alla stipula di contratti a termine e somministrazione: sostituzione di scioperanti, unità con licenziamenti collettivi o CIG nei 6 mesi antecedenti per mansioni identiche, e datori che non hanno redatto il DVR sulla sicurezza sul lavoro.",
    hint: "Vietato per sostituire lavoratori in sciopero o se manca il DVR sulla sicurezza.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_015",
    question: "Che cos'è il 'lavoro agile' (smart working) secondo la Legge 22 maggio 2017, n. 81?",
    options: [
      { id: "A", text: "Una modalità di esecuzione del rapporto di lavoro subordinato stabilita mediante accordo tra le parti, anche con forme di organizzazione per fasi, cicli e obiettivi e senza precisi vincoli di orario o di luogo di lavoro, con possibile utilizzo di strumenti tecnologici" },
      { id: "B", text: "Un contratto di lavoro autonomo occasionale senza vincoli previdenziali" },
      { id: "C", text: "Una forma di telelavoro obbligatorio con postazione fissa al domicilio verificata dalla ASL" },
      { id: "D", text: "Un tirocinio formativo non retribuito svolto presso il domicilio dello studente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 18 della L. 81/2017 definisce lo smart working non come un nuovo tipo contrattuale, ma come una modalità flessibile di esecuzione del lavoro subordinato, basata su accordo individuale, svolta in parte all'interno e in parte all'esterno dei locali aziendali.",
    hint: "È una modalità di svolgimento del lavoro subordinato per fasi e obiettivi senza vincoli rigidi di luogo.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_016",
    question: "Cosa garantisce la Legge 81/2017 al lavoratore agile in materia di trattamento economico e normativo?",
    options: [
      { id: "A", text: "La parità di trattamento: il lavoratore agile ha diritto a un trattamento economico e normativo non inferiore a quello applicato ai lavoratori che svolgono le medesime mansioni esclusivamente all'interno dell'azienda" },
      { id: "B", text: "Una decurtazione del 20% della retribuzione a titolo di rimborso spese elettriche" },
      { id: "C", text: "La perdita dei diritti sindacali e del diritto di sciopero" },
      { id: "D", text: "L'esclusione dall'obbligo di iscrizione all'INPS" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 20 della Legge 81/2017 stabilisce il principio di non discriminazione: il lavoratore agile gode del medesimo trattamento complessivo, economico e normativo, spettante ai colleghi che operano interamente in presenza.",
    hint: "Principio di parità di trattamento e non discriminazione.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_017",
    question: "Cosa prevede la normativa sul lavoro agile in merito al 'diritto alla disconnessione'?",
    options: [
      { id: "A", text: "L'accordo individuale deve individuare i tempi di riposo del lavoratore nonché le misure tecniche e organizzative necessarie per assicurare la completa disattivazione delle strumentazioni tecnologiche di lavoro" },
      { id: "B", text: "Il lavoratore deve rimanere reperibile 24 ore su 24 compresi i giorni festivi" },
      { id: "C", text: "Il datore di lavoro può inviare comunicazioni e richiedere risposte immediate in qualsiasi orario" },
      { id: "D", text: "È fatto divieto al dipendente di spegnere il cellulare aziendale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 19 della Legge 81/2017 (e successive modifiche) impone che l'accordo di smart working specifichi le fasce di disconnessione e i tempi di riposo nei quali il lavoratore ha pieno diritto di non rispondere a mail, chiamate o notifiche di lavoro.",
    hint: "Diritto a non essere contattati e a disattivare i dispositivi di lavoro nei tempi di riposo.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_018",
    question: "Quale criterio fondamentale distingue l'appalto genuino di opere o servizi dalla somministrazione illecita di lavoro (art. 29 D.Lgs. 276/2003)?",
    options: [
      { id: "A", text: "L'organizzazione dei mezzi necessari da parte dell'appaltatore e l'assunzione del rischio d'impresa con effettivo esercizio del potere direttivo sui propri dipendenti" },
      { id: "B", text: "L'importo del contratto superiore a 100.000 euro" },
      { id: "C", text: "La presenza di una sede legale dell'appaltatore nella stessa provincia del committente" },
      { id: "D", text: "Il fatto che i lavoratori utilizzino esclusivamente i computer del committente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 29 D.Lgs. 276/2003 stabilisce che l'appalto si distingue dalla somministrazione per l'organizzazione dei mezzi da parte dell'appaltatore (che può consistere anche nell'organizzazione e direzione del personale) e per l'assunzione del reale rischio d'impresa.",
    hint: "Organizzazione dei mezzi, gestione dei lavoratori e rischio d'impresa in capo all'appaltatore.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_019",
    question: "In materia di responsabilità solidale negli appalti (art. 29 c. 2 D.Lgs. 276/2003), entro quale termine il lavoratore o l'ente previdenziale può rivalersi sul committente?",
    options: [
      { id: "A", text: "Entro il limite di due anni dalla cessazione dell'appalto" },
      { id: "B", text: "Entro sei mesi dall'inizio dell'appalto" },
      { id: "C", text: "Entro dieci anni dalla stipulazione del contratto d'appalto" },
      { id: "D", text: "Senza alcun limite temporale" }
    ],
    correctAnswerId: "A",
    explanation: "Il committente imprenditore è obbligato in solido con l'appaltatore (e con gli eventuali subappaltatori) a corrispondere ai lavoratori i trattamenti retributivi e i contributi previdenziali e assicurativi dovuti entro il limite di due anni dalla cessazione dell'appalto.",
    hint: "Il termine di decadenza per la solidarietà del committente è di due anni.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_020",
    question: "Cosa stabilisce l'art. 2112 del Codice Civile in caso di trasferimento d'azienda o di ramo d'azienda?",
    options: [
      { id: "A", text: "Il rapporto di lavoro continua con il cessionario e il lavoratore conserva tutti i diritti che ne derivano; il cedente e il cessionario sono obbligati in solido per tutti i crediti maturati fino al momento del trasferimento" },
      { id: "B", text: "Tutti i contratti di lavoro si risolvono automaticamente e devono essere riscritti con periodo di prova" },
      { id: "C", text: "Il cessionario può licenziare liberamente tutti i dipendenti con indennità di una mensilità" },
      { id: "D", text: "I lavoratori perdono l'anzianità di servizio pregressa" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2112 c.c. garantisce la continuità automatica del rapporto di lavoro con l'acquirente (cessionario), la conservazione dei trattamenti contrattuali ed economici acquisiti e la responsabilità solidale tra cedente e cessionario per i crediti pendenti del dipendente.",
    hint: "Continuità del rapporto, mantenimento dei diritti e responsabilità solidale per i crediti pregressi.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_021",
    question: "Ai sensi dell'art. 2112 c.c., il trasferimento d'azienda costituisce di per sé motivo legittimo di licenziamento dei lavoratori?",
    options: [
      { id: "A", text: "No, il trasferimento d'azienda non costituisce di per sé motivo di licenziamento" },
      { id: "B", text: "Sì, il cedente ha diritto di licenziare fino al 50% dell'organico" },
      { id: "C", text: "Sì, ma solo per i lavoratori con meno di 5 anni di anzianità" },
      { id: "D", text: "Sì, purché sia pagata una doppia indennità di mancato preavviso" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2112, comma 4, c.c. statuisce in modo perentorio che il trasferimento d'azienda non costituisce di per sé motivo di licenziamento. Eventuali licenziamenti intimati per il solo fatto del trasferimento sono nulli.",
    hint: "La cessione d'azienda non può mai costituire di per sé causa di licenziamento.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_022",
    question: "Che cosa definisce il licenziamento per 'giusta causa' ai sensi dell'art. 2119 del Codice Civile?",
    options: [
      { id: "A", text: "Una causa gravissima che non consente la prosecuzione, anche provvisoria, del rapporto di lavoro, permettendo il recesso immediato senza preavviso" },
      { id: "B", text: "Un grave inadempimento che consente comunque il rispetto del periodo di preavviso" },
      { id: "C", text: "La chiusura dello stabilimento produttivo per motivi economici" },
      { id: "D", text: "Il raggiungimento dell'età di 60 anni da parte del lavoratore" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2119 c.c. disciplina la giusta causa: un fatto talmente lesivo del vincolo fiduciario da non consentire la prosecuzione neppure provvisoria del rapporto; per questo motivo il licenziamento ha effetto immediato (in tronco) senza preavviso.",
    hint: "Gravità tale da non permettere neppure un solo giorno di prosecuzione (senza preavviso).",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_023",
    question: "Qual è la differenza fondamentale tra 'giustificato motivo soggettivo' e 'giustificato motivo oggettivo' di licenziamento (L. 604/1966)?",
    options: [
      { id: "A", text: "Il motivo soggettivo consiste in un notevole inadempimento degli obblighi contrattuali del lavoratore; il motivo oggettivo risiede in ragioni inerenti all'attività produttiva, all'organizzazione del lavoro e al suo regolare funzionamento" },
      { id: "B", text: "Il motivo soggettivo non richiede il preavviso, mentre l'oggettivo richiede 6 mesi di preavviso" },
      { id: "C", text: "Il motivo soggettivo riguarda solo i dirigenti, l'oggettivo tutti gli altri dipendenti" },
      { id: "D", text: "Non vi è alcuna differenza giurisprudenziale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 3 della L. 604/1966 definisce il giustificato motivo soggettivo (colpa del lavoratore: notevole inadempimento con preavviso) e il giustificato motivo oggettivo (ragioni economico-organizzative aziendali e soppressione del posto).",
    hint: "Soggettivo = colpa del dipendente; Oggettivo = riorganizzazione aziendale e soppressione del posto.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_024",
    question: "In caso di licenziamento per giustificato motivo oggettivo, quale obbligo preventivo grava sul datore di lavoro prima di procedere al recesso (c.d. obbligo di repêchage)?",
    options: [
      { id: "A", text: "L'onere di verificare l'impossibilità di ricollocare utilmente il lavoratore all'interno dell'azienda in altre mansioni disponibili dello stesso livello o anche di livello inferiore" },
      { id: "B", text: "L'obbligo di pagare un anno di stipendio a fondo perduto" },
      { id: "C", text: "L'obbligo di assumere un familiare del dipendente licenziato" },
      { id: "D", text: "L'onere di sottoporre il dipendente a un esame di idoneità psico-attitudinale" }
    ],
    correctAnswerId: "A",
    explanation: "L'obbligo di repêchage (ricollocamento) impone al datore di provare di non poter adibire il lavoratore ad altre mansioni compatibili con il suo inquadramento (o anche inferiori, previo consenso) presenti nella struttura aziendale.",
    hint: "Dovere di verificare l'impossibilità di ricollocare il lavoratore in altre posizioni vacanti.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_025",
    question: "Quale sanzione si applica in caso di licenziamento intimato per motivi discriminatori (art. 3 L. 108/1990 e D.Lgs. 23/2015)?",
    options: [
      { id: "A", text: "La nullità del licenziamento con reintegrazione nel posto di lavoro e risarcimento del danno non inferiore a cinque mensilità di retribuzione, indipendentemente dal numero di dipendenti dell'azienda" },
      { id: "B", text: "Il pagamento di una sola sanzione amministrativa pecuniaria da 500 a 2.000 euro" },
      { id: "C", text: "La reintegrazione solo nelle aziende con più di 100 dipendenti" },
      { id: "D", text: "Un'indennità economica pari a 2 mensilità senza possibilità di reintegro" }
    ],
    correctAnswerId: "A",
    explanation: "Il licenziamento discriminatorio (per ragioni politiche, religiose, sindacali, di genere, orientamento sessuale, disabilità, ecc.) è radicalmente nullo in qualunque regime e per qualsiasi dimensione aziendale, comportando sempre la reintegrazione piena nel posto di lavoro.",
    hint: "Nullità assoluta con tutela reintegratoria piena per qualsiasi dimensione aziendale.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_026",
    question: "Cosa ha stabilito la storica sentenza della Corte Costituzionale n. 194/2018 in merito all'indennità risarcitoria per licenziamento illegittimo nel 'Jobs Act' (D.Lgs. 23/2015)?",
    options: [
      { id: "A", text: "Ha dichiarato illegittimo il criterio di calcolo rigido e automatico ancorato alla sola anzianità di servizio, attribuendo al giudice il potere di determinare l'indennità congrua tra il minimo e il massimo legale considerando molteplici fattori" },
      { id: "B", text: "Ha ripristinato l'art. 18 dello Statuto dei Lavoratori per tutti i lavoratori italiani" },
      { id: "C", text: "Ha vietato i licenziamenti economici per tutte le società per azioni" },
      { id: "D", text: "Ha imposto l'approvazione del Ministero del Lavoro per qualsiasi licenziamento individuale" }
    ],
    correctAnswerId: "A",
    explanation: "La Consulta con sentenza n. 194/2018 ha censurato il meccanismo automatico delle tutele crescenti (2 mensilità per ogni anno di servizio), restituendo al giudice il potere discrezionale di quantificare il ristoro economico tenendo conto di anzianità, carichi di famiglia, dimensioni aziendali e comportamento delle parti.",
    hint: "Eliminato l'automatismo fisso basato solo sugli anni di anzianità.",
    level: "avanzato"
  },
  {
    id: "Q_PECS_LAV_027",
    question: "Quando si configura un 'licenziamento collettivo' ai sensi della Legge 23 luglio 1991, n. 223?",
    options: [
      { id: "A", text: "Quando un'impresa con più di 15 dipendenti, in conseguenza di riduzione o trasformazione di attività, intenda effettuare almeno 5 licenziamenti nell'arco di 120 giorni in una o più unità produttive della stessa provincia" },
      { id: "B", text: "Quando vengono licenziati almeno 2 lavoratori in un anno solare" },
      { id: "C", text: "Quando fallisce una cooperativa sociale di servizi" },
      { id: "D", text: "Quando un'azienda licenzia l'intero consiglio di amministrazione" }
    ],
    correctAnswerId: "A",
    explanation: "La procedura di licenziamento collettivo (art. 4 e 24 L. 223/1991) scatta per i datori di lavoro che occupano più di 15 dipendenti e che intendano effettuare almeno 5 licenziamenti nell'arco di 120 giorni nella stessa provincia per riduzione, trasformazione o cessazione di attività.",
    hint: "Più di 15 dipendenti e almeno 5 licenziamenti in 120 giorni.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_028",
    question: "Quali sono i criteri legali di scelta dei lavoratori da licenziare in una procedura di licenziamento collettivo, in assenza di diversi criteri concordati nei contratti collettivi (art. 5 L. 223/1991)?",
    options: [
      { id: "A", text: "I carichi di famiglia, l'anzianità di servizio e le esigenze tecnico-produttive e organizzative, applicati in concorso tra loro" },
      { id: "B", text: "L'età anagrafica crescente (si licenziano prima i più anziani)" },
      { id: "C", text: "Il livello di retribuzione percepito (si licenziano i più pagati)" },
      { id: "D", text: "Il sorteggio pubblico alla presenza del prefetto" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 5, comma 1, L. 223/1991 prevede che, in assenza di accordo sindacale, i lavoratori vengano individuati combinando tra loro: carichi di famiglia, anzianità di servizio ed esigenze tecnico-produttive/organizzative.",
    hint: "I criteri di legge sono: carichi di famiglia, anzianità ed esigenze aziendali.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_029",
    question: "Quali sono le causali di intervento della Cassa Integrazione Guadagni Ordinaria (CIGO) disciplinate dal D.Lgs. 148/2015?",
    options: [
      { id: "A", text: "Difficoltà temporanee di mercato o eventi transitori e non imputabili né all'impresa né ai lavoratori, comprese le intemperie stagionali" },
      { id: "B", text: "Crisi aziendale definitiva con chiusura irreversibile dell'attività" },
      { id: "C", text: "Riorganizzazione aziendale della durata di tre anni" },
      { id: "D", text: "Mancato raggiungimento degli utili d'esercizio preventivati" }
    ],
    correctAnswerId: "A",
    explanation: "La CIGO (art. 11 D.Lgs. 148/2015) interviene per eventi transitori e non imputabili al datore di lavoro o ai lavoratori (es. improvvisa mancanza di commesse temporanea, alluvioni, intemperie stagionali nell'edilizia).",
    hint: "Eventi temporanei e transitori non imputabili alle parti (es. maltempo, calo ordini momentaneo).",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_030",
    question: "Quali sono le tre causali tassative previste per l'intervento della Cassa Integrazione Guadagni Straordinaria (CIGS) ai sensi dell'art. 21 del D.Lgs. 148/2015?",
    options: [
      { id: "A", text: "Riorganizzazione aziendale, crisi aziendale e contratti di solidarietà" },
      { id: "B", text: "Sciopero generale, festività infrasettimanali e assemblee sindacali" },
      { id: "C", text: "Assunzione di nuovi dirigenti, fusione societaria e cambio di sede" },
      { id: "D", text: "Ristrutturazione dei debiti bancari senza piano industriale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 21 del D.Lgs. 148/2015 individua tassativamente le causali CIGS in: a) riorganizzazione aziendale; b) crisi aziendale; c) contratti di solidarietà difensivi.",
    hint: "Le tre causali storiche: riorganizzazione, crisi aziendale e contratti di solidarietà.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_031",
    question: "A quanto ammonta l'integrazione salariale corrisposta dall'INPS ai lavoratori in cassa integrazione (CIGO e CIGS)?",
    options: [
      { id: "A", text: "All'80% della retribuzione globale di fatto che sarebbe spettata per le ore di lavoro non prestate, entro un limite massimale mensile stabilito per legge" },
      { id: "B", text: "Al 100% della retribuzione lorda contrattuale senza alcun tetto" },
      { id: "C", text: "Al 50% dell'Assegno Sociale" },
      { id: "D", text: "A una cifra fissa di 700 euro al mese uguale per tutti" }
    ],
    correctAnswerId: "A",
    explanation: "L'integrazione salariale ammonta all'80% del trattamento retributivo globale che sarebbe spettato per le ore non lavorate, tra le zero ore e il limite dell'orario contrattuale, assoggettata al massimale unico mensile rivalutato annualmente dall'INPS.",
    hint: "È pari all'80% dello stipendio perso entro il massimale di legge.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_032",
    question: "Cosa sono i Contratti di Solidarietà difensivi ex art. 21 del D.Lgs. 148/2015?",
    options: [
      { id: "A", text: "Accordi collettivi aziendali che stabiliscono una riduzione concordata dell'orario di lavoro per evitare, in tutto o in parte, la riduzione o la dichiarazione di esubero del personale, con intervento della CIGS a compensazione parziale della perdita retributiva" },
      { id: "B", text: "Contratti con cui i lavoratori donano parte dello stipendio ad associazioni benefiche" },
      { id: "C", text: "Accordi per assumere giovani tirocinanti a spese dei lavoratori anziani" },
      { id: "D", text: "Patti di solidarietà familiare tra colleghi dello stesso ufficio" }
    ],
    correctAnswerId: "A",
    explanation: "I contratti di solidarietà difensivi mirano a difendere l'occupazione ('lavorare meno per lavorare tutti'): l'orario di lavoro viene ridotto concordemente e l'INPS eroga l'integrazione CIGS all'80% sulle ore tagliate.",
    hint: "Accordi di riduzione dell'orario per evitare licenziamenti con intervento della CIGS.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_033",
    question: "A seguito della Legge di Bilancio 2022 (L. 234/2021), a quali datori di lavoro del settore privato si applica la disciplina del Fondo di Integrazione Salariale (FIS) gestito dall'INPS?",
    options: [
      { id: "A", text: "A tutti i datori di lavoro che occupano almeno un dipendente, operanti in settori non coperti dalla normativa in materia di Cassa Integrazione Guadagni Ordinaria (CIGO) e privi di fondi di solidarietà bilaterali" },
      { id: "B", text: "Soltanto alle multinazionali con più di 1.000 lavoratori" },
      { id: "C", text: "Esclusivamente alle cooperative sociali di assistenza anziani" },
      { id: "D", text: "Ai datori di lavoro agricoli a conduzione familiare" }
    ],
    correctAnswerId: "A",
    explanation: "La riforma degli ammortizzatori sociali (L. 234/2021) ha universalizzato le tutele, estendendo il FIS a tutti i datori di lavoro del settore privato con almeno 1 dipendente che non rientrano nell'ambito di applicazione della CIGO né di fondi bilaterali.",
    hint: "Si applica a tutti i datori con almeno 1 dipendente non coperti da CIGO.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_034",
    question: "Chi sono i destinatari dell'indennità di disoccupazione NASpI istituita dal D.Lgs. 22/2015?",
    options: [
      { id: "A", text: "I lavoratori dipendenti del settore privato, gli apprendisti, i soci lavoratori di cooperative con rapporto subordinato e il personale a tempo determinato della Pubblica Amministrazione che abbiano perso involontariamente l'occupazione" },
      { id: "B", text: "Tutti i dipendenti pubblici a tempo indeterminato licenziati per motivi disciplinari" },
      { id: "C", text: "Esclusivamente i titolari di partita IVA con ricavi nulli" },
      { id: "D", text: "I liberi professionisti iscritti agli albi professionali" }
    ],
    correctAnswerId: "A",
    explanation: "La NASpI tutela i lavoratori con rapporto di lavoro subordinato (inclusi apprendisti, soci di cooperative e dipendenti pubblici a termine) che abbiano perso involontariamente il lavoro. Sono esclusi i dipendenti a tempo indeterminato della PA.",
    hint: "Lavoratori dipendenti subordinati privati e dipendenti pubblici a tempo determinato.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_035",
    question: "Quale requisito contributivo minimo deve possedere il lavoratore per accedere alla NASpI?",
    options: [
      { id: "A", text: "Almeno 13 settimane di contribuzione nei quattro anni precedenti l'inizio del periodo di disoccupazione" },
      { id: "B", text: "Almeno 52 settimane di contribuzione nell'ultimo anno" },
      { id: "C", text: "Almeno 5 anni di contribuzione continuativa" },
      { id: "D", text: "Non è richiesto alcun requisito contributivo, basta lo stato di disoccupazione" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 3 del D.Lgs. 22/2015, il requisito contributivo per la NASpI consiste nell'avere almeno tredici settimane di contribuzione accreditata nei quattro anni che precedono l'evento di disoccupazione.",
    hint: "Servono almeno 13 settimane di contributi negli ultimi 4 anni.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_036",
    question: "Quale evento di cessazione del rapporto di lavoro, pur non essendo formalmente un licenziamento, consente comunque la percezione della NASpI?",
    options: [
      { id: "A", text: "Le dimissioni per giusta causa (es. mancato pagamento retribuzioni) e la risoluzione consensuale intervenuta nell'ambito della conciliazione obbligatoria presso l'ITL" },
      { id: "B", text: "Le dimissioni volontarie ordinarie senza motivazione" },
      { id: "C", text: "La risoluzione consensuale decisa verbalmente tra lavoratore e datore" },
      { id: "D", text: "L'abbandono ingiustificato del posto di lavoro per più di tre giorni" }
    ],
    correctAnswerId: "A",
    explanation: "L'accesso alla NASpI è garantito anche in caso di dimissioni per giusta causa (riconosciute come evento non imputabile al lavoratore per grave colpa datoriale) e in caso di risoluzione consensuale avvenuta con la procedura conciliativa ex art. 7 L. 604/1966 o per trasferimento oltre 50 km.",
    hint: "Dimissioni per giusta causa e risoluzione consensuale protetta presso l'ITL.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_037",
    question: "Come viene calcolata la durata massima della prestazione di disoccupazione NASpI?",
    options: [
      { id: "A", text: "È corrisposta per un numero di settimane pari alla metà delle settimane di contribuzione degli ultimi 4 anni (fino a un massimo di 24 mesi)" },
      { id: "B", text: "Ha sempre una durata fissa di 12 mesi per tutti" },
      { id: "C", text: "È pari all'esatto numero di mesi lavorati negli ultimi 10 anni" },
      { id: "D", text: "Dura 36 mesi per i lavoratori con più di 50 anni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 5 del D.Lgs. 22/2015 prevede che la NASpI duri per un periodo pari alla metà delle settimane di contribuzione maturate nell'ultimo quadriennio (escludendo i periodi che hanno già dato luogo a precedente indennità), con un tetto massimo di 24 mesi (104 settimane).",
    hint: "La metà delle settimane accreditate negli ultimi 4 anni (max 24 mesi).",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_038",
    question: "Come funziona il meccanismo di 'décalage' (riduzione progressiva) della NASpI?",
    options: [
      { id: "A", text: "L'indennità si riduce del 3% ogni mese a decorrere dal primo giorno del sesto mese di fruizione (o dall'ottavo mese per i beneficiari che abbiano compiuto 55 anni di età)" },
      { id: "B", text: "L'indennità si riduce del 10% ogni mese a partire dal secondo mese" },
      { id: "C", text: "L'importo viene dimezzato al termine del primo anno" },
      { id: "D", text: "Non vi è alcuna riduzione, l'importo resta costante per l'intera durata" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge di Bilancio 2022 ha modificato il décalage: la NASpI si riduce del 3% al mese a partire dal 6° mese (151° giorno di fruizione); per i soggetti di età pari o superiore a 55 anni alla data di presentazione della domanda, il taglio scatta dall'8° mese (211° giorno).",
    hint: "Taglio del 3% al mese dal sesto mese (dall'ottavo mese per gli over 55).",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_039",
    question: "Cosa prevede l'art. 8 del D.Lgs. 22/2015 in merito alla liquidazione anticipata della NASpI in unica soluzione?",
    options: [
      { id: "A", text: "Il lavoratore avente diritto alla NASpI può richiederne la liquidazione anticipata in unica soluzione come incentivo all'avvio di un'attività di lavoro autonomo, di impresa individuale o per la sottoscrizione di capitale sociale di una cooperativa" },
      { id: "B", text: "L'anticipo è consentito per l'acquisto della prima casa di abitazione" },
      { id: "C", text: "L'anticipo è concesso solo se il lavoratore si trasferisce all'estero" },
      { id: "D", text: "È vietata qualsiasi liquidazione anticipata delle prestazioni di disoccupazione" }
    ],
    correctAnswerId: "A",
    explanation: "L'incentivo all'autoimprenditorialità consente al disoccupato di percepire l'intero importo residuo della NASpI in un'unica tranche per avviare una propria attività autonoma, un'impresa o entrare in cooperativa, con obbligo di restituzione se viene assunto subordinato prima della scadenza teorica.",
    hint: "Anticipazione in unica soluzione per chi avvia un'attività autonoma o una cooperativa.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_040",
    question: "Quale prestazione di disoccupazione spetta ai collaboratori coordinati e continuativi (co.co.co.) iscritti in via esclusiva alla Gestione Separata INPS in caso di cessazione involontaria?",
    options: [
      { id: "A", text: "La DIS-COLL (indennità di disoccupazione per i collaboratori coordinati e continuativi)" },
      { id: "B", text: "La Cassa Integrazione Guadagni Straordinaria" },
      { id: "C", text: "L'Assegno Sociale anticipato" },
      { id: "D", text: "L'indennità ordinaria di mobilità" }
    ],
    correctAnswerId: "A",
    explanation: "La DIS-COLL (art. 15 D.Lgs. 22/2015 resa strutturale) è l'indennità di disoccupazione specifica per i lavoratori parasubordinati (collaboratori continuativi, assegnisti di ricerca, dottorandi di ricerca con borsa) iscritti in via esclusiva alla Gestione Separata INPS.",
    hint: "La prestazione per i collaboratori è la DIS-COLL.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_041",
    question: "Qual è la durata complessiva del congedo di maternità obbligatorio per le lavoratrici dipendenti secondo il Testo Unico D.Lgs. 151/2001?",
    options: [
      { id: "A", text: "Cinque mesi complessivi (generalmente 2 mesi prima del parto e 3 mesi dopo, con facoltà di flessibilità 1+4 o interamente dopo il parto previa attestazione medica)" },
      { id: "B", text: "Tre mesi complessivi dopo il parto" },
      { id: "C", text: "Dodici mesi continuativi retribuiti" },
      { id: "D", text: "Sei mesi obbligatori prima del parto" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.Lgs. 151/2001 fissa il congedo di maternità in 5 mesi. La lavoratrice può optare per la fruizione standard (2 prima e 3 dopo), per la flessibilità (1 prima e 4 dopo) o per l'astensione interamente successiva al parto (0+5), a condizione che il medico attesti l'assenza di rischi per madre e nascituro.",
    hint: "5 mesi in totale, con possibilità di opzione flessibile (1+4 o 0+5).",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_042",
    question: "A quanto ammonta l'indennità economica erogata dall'INPS per il periodo di congedo di maternità obbligatorio?",
    options: [
      { id: "A", text: "All'80% della retribuzione media globale giornaliera, anticipata dal datore di lavoro e posta a conguaglio con i contributi dovuti all'INPS" },
      { id: "B", text: "Al 50% dello stipendio minimo tabellare" },
      { id: "C", text: "Al 100% a carico esclusivo dell'azienda senza rimborsi INPS" },
      { id: "D", text: "A una cifra fissa forfettaria pari a 300 euro al mese" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 22 D.Lgs. 151/2001, l'indennità di maternità a carico dell'INPS è pari all'80% della retribuzione globale giornaliera (spesso integrata al 100% dai CCNL di categoria a carico del datore di lavoro).",
    hint: "Indennità INPS all'80% della retribuzione.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_043",
    question: "In cosa consiste il 'congedo di paternità obbligatorio' introdotto stabilmente nel nostro ordinamento in attuazione della direttiva UE sul work-life balance (D.Lgs. 105/2022)?",
    options: [
      { id: "A", text: "Un congedo di 10 giorni lavorativi (20 in caso di parto plurimo), retribuito al 100%, che il padre lavoratore deve fruire tra i due mesi precedenti e i cinque mesi successivi al parto, anche durante il congedo di maternità della madre" },
      { id: "B", text: "Una giornata libera da concordare con i colleghi di reparto" },
      { id: "C", text: "Un congedo di 6 mesi non retribuito subordinato all'assenso datoriale" },
      { id: "D", text: "Un'opzione fruibile solo in caso di decesso o grave infermità della madre" }
    ],
    correctAnswerId: "A",
    explanation: "Il congedo di paternità obbligatorio (art. 27-bis D.Lgs. 151/2001 modificato dal D.Lgs. 105/2022) garantisce al padre 10 giorni di astensione piena retribuita al 100% dall'INPS, autonomo e concorrente rispetto al congedo della madre.",
    hint: "10 giorni lavorativi retribuiti al 100% entro 5 mesi dalla nascita.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_044",
    question: "Quali permessi retribuiti spettano al lavoratore dipendente ai sensi dell'art. 33 della Legge 104/1992?",
    options: [
      { id: "A", text: "Tre giorni di permesso mensile retribuito (coperto da contribuzione figurativa e a carico INPS) per assistere un familiare con disabilità grave o fruibili dal lavoratore disabile per se stesso" },
      { id: "B", text: "Un giorno ogni sei mesi senza copertura figurativa" },
      { id: "C", text: "Due ore di permesso al mese non cumulabili" },
      { id: "D", text: "Trenta giorni di ferie supplementari non indennizzate" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 33 commi 3 e 6 della L. 104/1992 prevede 3 giorni di permesso mensile retribuito (frazionabili anche in ore in base ai contratti collettivi) per l'assistenza a coniuge, convivente di fatto, unito civilmente o parente entro il 2° grado (o 3° in casi particolari) con handicap in situazione di gravità.",
    hint: "Tre giorni al mese retribuiti per l'assistenza al familiare con disabilità grave.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_045",
    question: "A chi spetta il 'congedo straordinario biennale' retribuito di cui all'art. 42 c. 5 del D.Lgs. 151/2001 per l'assistenza a persone con disabilità grave?",
    options: [
      { id: "A", text: "Al coniuge convivente, alla parte dell'unione civile o al convivente di fatto e, a scorrere in ordine di priorità in caso di decesso/mancanza o patologie invalidanti, ai genitori, ai figli conviventi, ai fratelli/sorelle conviventi e a parenti/affini entro il 3° grado" },
      { id: "B", text: "A qualsiasi parente anche non convivente purché residente nello stesso comune" },
      { id: "C", text: "Esclusivamente ai figli unici maschi di età inferiore a 40 anni" },
      { id: "D", text: "Ai soli dipendenti pubblici con qualifica dirigenziale" }
    ],
    correctAnswerId: "A",
    explanation: "Il congedo straordinario (fino a 2 anni nell'arco della vita lavorativa con indennità economica parametrata all'ultima retribuzione entro un tetto massimo annuo) segue una rigida graduatoria di priorità familiare vincolata alla convivenza con il disabile grave.",
    hint: "Spetta prioritariamente al coniuge/convivente e poi a genitori, figli e fratelli conviventi.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_046",
    question: "Quale documento aziendale fondamentale in materia di sicurezza sul lavoro non può mai essere delegato dal datore di lavoro ai sensi dell'art. 17 del D.Lgs. 81/2008?",
    options: [
      { id: "A", text: "La valutazione di tutti i rischi con la conseguente elaborazione del Documento di Valutazione dei Rischi (DVR) e la designazione del Responsabile del Servizio di Prevenzione e Protezione (RSPP)" },
      { id: "B", text: "La nomina del medico competente" },
      { id: "C", text: "L'acquisto dei dispositivi di protezione individuale (DPI)" },
      { id: "D", text: "La convocazione della riunione periodica di sicurezza" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 17 D.Lgs. 81/2008 individua due obblighi non delegabili del datore di lavoro: 1) la valutazione di tutti i rischi e la redazione del DVR; 2) la designazione del responsabile del servizio di prevenzione e protezione dai rischi (RSPP).",
    hint: "Valutazione dei rischi (DVR) e nomina dell'RSPP non sono mai delegabili.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_047",
    question: "Qual è la procedura obbligatoria per le dimissioni volontarie e la risoluzione consensuale del lavoratore subordinato introdotta dall'art. 26 del D.Lgs. 151/2015?",
    options: [
      { id: "A", text: "Devono essere trasmesse esclusivamente con modalità telematiche su appositi moduli disponibili sul portale del Ministero del Lavoro (o tramite patronati/consulenti), a pena di inefficacia" },
      { id: "B", text: "È sufficiente una lettera informale consegnata a mano al datore di lavoro" },
      { id: "C", text: "Devono essere comunicate tramite telegramma postale entro 48 ore" },
      { id: "D", text: "Richiedono una sentenza del Tribunale del Lavoro" }
    ],
    correctAnswerId: "A",
    explanation: "Per contrastare il fenomeno illegale delle 'dimissioni in bianco', l'art. 26 D.Lgs. 151/2015 ha reso obbligatoria la procedura telematica online con marcatura temporale: le dimissioni presentate su carta o via email semplice sono giuridicamente inefficaci.",
    hint: "Procedura telematica online obbligatoria a pena di inefficacia per impedire le dimissioni in bianco.",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_048",
    question: "Entro quale termine il lavoratore che ha inviato le dimissioni con modalità telematica può revocarle?",
    options: [
      { id: "A", text: "Entro 7 giorni dalla trasmissione del modulo telematico con le medesime modalità" },
      { id: "B", text: "Entro 24 ore dall'invio" },
      { id: "C", text: "Entro 30 giorni previo accordo con il datore di lavoro" },
      { id: "D", text: "Le dimissioni telematiche sono irrevocabili fin dal primo istante" }
    ],
    correctAnswerId: "A",
    explanation: "La legge riconosce al lavoratore il diritto di ripensamento: entro 7 giorni dalla data di trasmissione del modulo telematico di dimissioni o risoluzione consensuale, il lavoratore ha la facoltà di revocare il recesso con le medesime modalità telematiche.",
    hint: "Facoltà di revoca entro una settimana (7 giorni).",
    level: "base"
  },
  {
    id: "Q_PECS_LAV_049",
    question: "Cosa sancisce l'art. 2113 del Codice Civile in materia di rinunzie e transazioni del lavoratore aventi a oggetto diritti derivanti da disposizioni inderogabili di legge o di contratto collettivo?",
    options: [
      { id: "A", text: "Le rinunzie e le transazioni sono invalide e possono essere impugnate dal lavoratore nel termine di decadenza di sei mesi dalla cessazione del rapporto o dalla data dell'atto, salvo che siano concluse nelle sedi protette previste dalla legge" },
      { id: "B", text: "Sono sempre pienamente valide e vincolanti fin dalla firma" },
      { id: "C", text: "Sono nulle solo se il lavoratore ha meno di 18 anni" },
      { id: "D", text: "Comportano una sanzione penale a carico del dipendente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2113 c.c. protegge il contraente debole: rinunce e transazioni su diritti indisponibili sono annullabili e impugnabili entro 6 mesi. Sono invece inoppugnabili e valide se concluse in 'sedi protette' (davanti all'ITL, in sede sindacale ex art. 411 c.p.c. o davanti al giudice).",
    hint: "Invalide e impugnabili entro 6 mesi, a meno che non siano sottoscritte in sede protetta.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_050",
    question: "Qual è il termine ordinario di prescrizione dei crediti retributivi del lavoratore (stipendi, straordinari, differenze retributive) ai sensi dell'art. 2948 n. 4 c.c.?",
    options: [
      { id: "A", text: "Cinque anni" },
      { id: "B", text: "Dieci anni" },
      { id: "C", text: "Un anno" },
      { id: "D", text: "Tre anni" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 2948, n. 4, del Codice Civile, i crediti per tutto ciò che deve pagarsi periodicamente ad anno o in termini più brevi (compresi stipendi, indennità e retribuzioni) sono soggetti alla prescrizione breve di cinque anni.",
    hint: "I crediti retributivi periodici si prescrivono in 5 anni.",
    level: "base"
  }
];

const dest = path.join(__dirname, '../public/db/master_bank/lavoro/diritto_lavoro.json');
fs.writeFileSync(dest, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Generated ${questions.length} questions in ${dest}`);
