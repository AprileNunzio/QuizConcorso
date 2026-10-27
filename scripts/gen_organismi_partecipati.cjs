const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: "Q_ORG_PART_001",
    question: "Quale decreto legislativo costituisce il Testo Unico in materia di Società a Partecipazione Pubblica (TUSP)?",
    options: [
      { id: "A", text: "Il D.Lgs. 19 agosto 2016, n. 175" },
      { id: "B", text: "Il D.Lgs. 267/2000" },
      { id: "C", text: "Il D.Lgs. 165/2001" },
      { id: "D", text: "Il D.Lgs. 36/2023" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.Lgs. 19 agosto 2016, n. 175 (adottato in attuazione della c.d. riforma Madia, L. 124/2015) costituisce il Testo Unico delle Società a Partecipazione Pubblica (TUSP).",
    hint: "Decreto n. 175 del 2016.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_002",
    question: "In quali sole forme societarie le pubbliche amministrazioni possono costituire società o acquisire partecipazioni (art. 3 TUSP)?",
    options: [
      { id: "A", text: "Esclusivamente in società per azioni (S.p.A.) o in società a responsabilità limitata (S.r.l.), anche in forma consortile" },
      { id: "B", text: "In qualsiasi tipo societario compresa la società in nome collettivo (S.n.c.)" },
      { id: "C", text: "Solo come società in accomandita semplice (S.a.s.) assumendo la qualifica di socio accomandatario" },
      { id: "D", text: "In società semplici commerciali senza capitale minimo" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 3, comma 1, TUSP dispone tassativamente che le amministrazioni pubbliche possono costituire o partecipare esclusivamente a società per azioni (S.p.A.) o società a responsabilità limitata (S.r.l.), anche consortili, vietando tipi che comportino responsabilità illimitata.",
    hint: "Solo società di capitali a responsabilità limitata: S.p.A. o S.r.l. (anche consortili).",
    level: "base"
  },
  {
    id: "Q_ORG_PART_003",
    question: "Cosa stabilisce l'art. 4 del TUSP in merito al vincolo di scopo e stretta necessarietà per le partecipazioni pubbliche?",
    options: [
      { id: "A", text: "Le PA non possono costituire o mantenere partecipazioni in società aventi per oggetto attività di produzione di beni e servizi non strettamente necessarie per il perseguimento delle proprie finalità istituzionali" },
      { id: "B", text: "Le PA possono operare liberamente sul mercato per conseguire utili speculativi" },
      { id: "C", text: "È vietato alle PA detenere partecipazioni superiori al 5%" },
      { id: "D", text: "Le partecipazioni societarie devono essere approvate con referendum" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 4, comma 1, TUSP sancisce il principio di stretta necessarietà: le pubbliche amministrazioni non possono, direttamente o indirettamente, costituire società né acquisire o mantenere partecipazioni societarie che non siano strettamente funzionali al soddisfacimento delle loro finalità istituzionali.",
    hint: "Principio di stretta necessarietà e finalità istituzionale.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_004",
    question: "Quale delle seguenti attività è espressamente consentita alle società a partecipazione pubblica ex art. 4, comma 2, TUSP?",
    options: [
      { id: "A", text: "Produzione di un servizio di interesse generale, ivi inclusa la gestione di reti e impianti funzionali ai servizi medesimi" },
      { id: "B", text: "Commercio al dettaglio di abbigliamento per autofinanziarsi" },
      { id: "C", text: "Intermediazione finanziaria speculativa su criptovalute" },
      { id: "D", text: "Gestione di agenzie di scommesse sportive" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 4, comma 2, lett. a), ammette espressamente le società aventi per oggetto la produzione di un servizio di interesse generale, incluse reti e impianti, la progettazione e realizzazione di opere pubbliche, l'autoproduzione di beni o servizi strumentali all'ente.",
    hint: "Servizi di interesse generale o servizi strumentali per la PA socia.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_005",
    question: "Quali sono i tre requisiti cumulativi che caratterizzano la società 'in house providing' ai sensi dell'art. 16 del TUSP e del diritto europeo?",
    options: [
      { id: "A", text: "Capitale interamente pubblico, esercizio di un controllo analogo a quello esercitato sui propri uffici, e oltre l'80% del fatturato svolto nello svolgimento dei compiti affidati dagli enti pubblici soci" },
      { id: "B", text: "Capitale privato al 51%, controllo del consiglio di fabbrica e utile distribuito solo ai residenti" },
      { id: "C", text: "Presenza di un membro nominato dal Prefetto, bilancio certificato e quotazione in borsa" },
      { id: "D", text: "Almeno mille dipendenti, sede all'estero e assenza di controllo pubblico" }
    ],
    correctAnswerId: "A",
    explanation: "I tre requisiti inderogabili per l'in house (art. 16 TUSP) sono: 1) totale partecipazione pubblica (salvo quote private imposte da disposizioni di legge senza controllo); 2) controllo analogo; 3) oltre l'80% del fatturato derivante dallo svolgimento dei compiti affidati dagli enti soci.",
    hint: "Totalità del capitale pubblico + Controllo analogo + Fatturato prevalente (oltre l'80%).",
    level: "base"
  },
  {
    id: "Q_ORG_PART_006",
    question: "In che cosa consiste il 'controllo analogo' dell'ente pubblico sulla società in house (art. 2, comma 1, lett. c, TUSP)?",
    options: [
      { id: "A", text: "La situazione in cui l'amministrazione pubblica esercita su una società un'influenza determinante sia sugli obiettivi strategici che sulle decisioni significative della società stessa" },
      { id: "B", text: "Il semplice possesso della maggioranza del capitale azionario nell'assemblea ordinaria" },
      { id: "C", text: "Il diritto di ricevere una copia del bilancio consuntivo annuale" },
      { id: "D", text: "La nomina di un solo componente del collegio sindacale" }
    ],
    correctAnswerId: "A",
    explanation: "Il controllo analogo (art. 2, lett. c, TUSP) si sostanzia in un'influenza determinante e penetrante sia sugli obiettivi strategici che sulle decisioni gestionali significative della società, tale per cui la società è assimilabile a un'articolazione interna o ufficio dell'ente.",
    hint: "Influenza determinante sugli obiettivi strategici e decisioni significative.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_007",
    question: "Che cos'è il 'controllo analogo congiunto' disciplinato dall'art. 16, comma 2, del TUSP?",
    options: [
      { id: "A", text: "Il controllo analogo esercitato congiuntamente da più amministrazioni pubbliche socie, purché ciascuna partecipi sia agli organi decisionali che agli obiettivi strategici della società partecipata" },
      { id: "B", text: "Il controllo svolto contemporaneamente da un Comune e da un investitore privato" },
      { id: "C", text: "L'ispezione della Guardia di Finanza congiunta alla Corte dei Conti" },
      { id: "D", text: "La gestione congiunta della società da parte dei sindacati" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 16, comma 2, TUSP codifica il controllo analogo congiunto: ricorre quando la società in house è partecipata da più enti pubblici (frequente nei consorzi di comuni o bacini territoriali), a condizione che tutti gli enti soci siano rappresentati negli organi decisionali e possano esercitare congiuntamente un'influenza determinante.",
    hint: "Più enti locali soci che governano congiuntamente la società in house.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_008",
    question: "Le società in house possono partecipare a gare pubbliche bandite da amministrazioni terze diverse dagli enti soci (art. 16, comma 3, TUSP)?",
    options: [
      { id: "A", text: "Sì, ma solo per la quota residua di attività non prevalente (massimo 20% del fatturato), a condizione che non comprometta il perseguimento della missione affidata e che sia previsto dallo statuto" },
      { id: "B", text: "No, è vietata qualsiasi attività esterna a pena di immediata liquidazione" },
      { id: "C", text: "Sì, possono fare concorrenza a qualsiasi privato senza alcun limite di fatturato" },
      { id: "D", text: "Solo previa autorizzazione unanime del Parlamento" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 16, commi 3 e 4, TUSP consente alle in house di svolgere attività per terzi o sul mercato libero nei limiti massimi del 20% del fatturato complessivo (poiché oltre l'80% deve essere dedicato agli enti affidanti), a patto che sia previsto dallo statuto e compatibile con il servizio.",
    hint: "Attività per terzi ammessa solo entro il margine residuo del 20% del fatturato.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_009",
    question: "Quale obbligo periodico è imposto alle pubbliche amministrazioni dall'art. 20 del TUSP per la razionalizzazione delle società partecipate?",
    options: [
      { id: "A", text: "L'obbligo di effettuare annualmente, entro il 31 dicembre, una revisione periodica delle proprie partecipazioni societarie, approvando un piano di razionalizzazione per quelle non conformi ai parametri di legge" },
      { id: "B", text: "L'obbligo di vendere all'asta tutte le partecipazioni ogni cinque anni" },
      { id: "C", text: "La fusione obbligatoria di tutte le società a livello regionale" },
      { id: "D", text: "Il licenziamento di tutti gli amministratori delegati" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 20 TUSP stabilisce che ogni amministrazione pubblica deve provvedere annualmente, entro il 31 dicembre, con apposita delibera (per gli enti locali del Consiglio), ad effettuare una ricognizione di tutte le partecipazioni societarie detenute, predisponendo un piano di razionalizzazione (dismissione, fusione, liquidazione) per quelle che non rispettano i parametri di legge.",
    hint: "Revisione periodica annuale obbligatoria entro il 31 dicembre.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_010",
    question: "Quale dei seguenti costituisce un parametro per cui una società a partecipazione pubblica deve essere dismessa o razionalizzata ex art. 20, comma 2, TUSP?",
    options: [
      { id: "A", text: "Società che nel triennio precedente abbiano registrato un fatturato medio non superiore a 500.000 euro" },
      { id: "B", text: "Società con capitale sociale interamente versato" },
      { id: "C", text: "Società che erogano servizi a tariffa agevolata" },
      { id: "D", text: "Società con un numero di clienti superiore a 10.000" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 20, comma 2, lett. d), TUSP prevede l'obbligo di razionalizzazione per le società che abbiano conseguito, nel triennio precedente, un fatturato medio non superiore alla soglia di 500.000 euro, per eliminare micro-società inefficienti (c.d. scatole vuote).",
    hint: "Soglia minima di fatturato medio triennale: 500.000 euro.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_011",
    question: "Quale altro parametro negativo impone la razionalizzazione della società partecipata ai sensi dell'art. 20, comma 2, lett. e), TUSP?",
    options: [
      { id: "A", text: "La registrazione di un risultato negativo d'esercizio in quattro dei cinque esercizi precedenti" },
      { id: "B", text: "La distribuzione di utili superiori al 10%" },
      { id: "C", text: "Un ritardo di dieci giorni nell'approvazione del bilancio" },
      { id: "D", text: "La presenza di dipendenti laureati" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 20, comma 2, lett. e), TUSP impone la razionalizzazione per le società che abbiano registrato perdite d'esercizio in 4 dei 5 esercizi precedenti, per evitare che la finanza pubblica ripiani continuamente perdite di gestione croniche.",
    hint: "Perdite d'esercizio reiterate: 4 anni su 5 con bilancio in rosso.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_012",
    question: "Cosa accade se un ente locale omette di adottare l'atto di revisione periodica delle società partecipate entro il 31 dicembre (art. 20, comma 7, TUSP)?",
    options: [
      { id: "A", text: "Si applica una sanzione amministrativa pecuniaria da 5.000 a 50.000 euro a carico dei soggetti inadempienti e l'impossibilità di esercitare i diritti sociali fino all'adozione dell'atto" },
      { id: "B", text: "L'ente locale viene sciolto di diritto dal Prefetto" },
      { id: "C", text: "Tutte le partecipazioni diventano di proprietà della Regione" },
      { id: "D", text: "La società partecipata fallisce automaticamente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 20, comma 7, TUSP dispone che in caso di mancata adozione dell'atto di ricognizione, l'amministrazione non può esercitare i diritti sociali e si applica una sanzione pecuniaria da 5.000 a 50.000 euro irrogata dalla Corte dei Conti.",
    hint: "Blocco dei diritti di voto/sociali e sanzione pecuniaria da 5.000 a 50.000 euro.",
    level: "avanzato"
  },
  {
    id: "Q_ORG_PART_013",
    question: "A quale organo spetta negli enti locali la competenza per l'approvazione degli atti costitutivi, acquisto o vendita di partecipazioni societarie e del piano di razionalizzazione?",
    options: [
      { id: "A", text: "Al Consiglio comunale ai sensi dell'art. 42 TUEL e art. 7 TUSP" },
      { id: "B", text: "Alla Giunta comunale con semplice delibera di indirizzo" },
      { id: "C", text: "Al Sindaco monocraticamente con ordinanza" },
      { id: "D", text: "Al Segretario comunale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 42, comma 2, lett. e), TUEL e l'art. 7 TUSP attribuiscono la competenza esclusiva per la costituzione di società, acquisizione o alienazione di partecipazioni e approvazione dei piani di razionalizzazione al Consiglio comunale.",
    hint: "Le decisioni strategiche su creazione, acquisto e dismissione di partecipate sono del Consiglio.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_014",
    question: "A quale controllo preventivo sono soggette le delibere degli enti locali di costituzione di società o di acquisto di partecipazioni ai sensi dell'art. 5 del TUSP?",
    options: [
      { id: "A", text: "Devono essere trasmesse all'ANAC e alla Sezione Regionale di Controllo della Corte dei Conti, che si pronuncia sulla sostenibilità finanziaria e motivazione analitica" },
      { id: "B", text: "Al visto del Prefetto per motivi di ordine pubblico" },
      { id: "C", text: "All'approvazione della Banca Europea degli Investimenti" },
      { id: "D", text: "Ad un referendum abrogativo entro 30 giorni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 5 TUSP impone una motivazione analitica rafforzata per la costituzione di società o acquisto di partecipazioni e l'obbligo di trasmissione all'ANAC e alla Corte dei Conti competente per territorio, che emette parere motivato.",
    hint: "Trasmissione obbligatoria ad ANAC e Sezione di controllo della Corte dei Conti.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_015",
    question: "Di norma, da quanti componenti deve essere costituito l'organo amministrativo delle società a controllo pubblico (art. 11, comma 2, TUSP)?",
    options: [
      { id: "A", text: "Di norma da un Amministratore Unico" },
      { id: "B", text: "Da un Consiglio di Amministrazione composto obbligatoriamente da almeno 7 membri" },
      { id: "C", text: "Da un comitato direttivo di almeno 15 consiglieri comunali" },
      { id: "D", text: "Da un collegio di tre sindaci revisori con poteri gestionali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 11, comma 2, TUSP stabilisce la regola generale per cui l'organo amministrativo delle società a controllo pubblico è costituito da un Amministratore Unico. L'adozione di un CdA collegiale (composto da 3 o 5 membri) è ammessa solo in via eccezionale con motivazione analitica.",
    hint: "La regola ordinaria nel TUSP è l'Amministratore Unico per risparmiare sui costi della politica.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_016",
    question: "Quale tetto massimo complessivo è previsto per i compensi degli amministratori delle società a controllo pubblico ex art. 11, comma 6, TUSP?",
    options: [
      { id: "A", text: "Non può superare il limite massimo retributivo previsto per i dirigenti pubblici (pari a 240.000 euro annui), parametrato per fasce dimensionali" },
      { id: "B", text: "Fino a 1 milione di euro su delibera dell'assemblea dei soci" },
      { id: "C", text: "Esattamente pari al gettone di presenza di un consigliere comunale" },
      { id: "D", text: "I compensi sono fissati liberamente senza alcun tetto di legge" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 11, comma 6, TUSP stabilisce che il compenso complessivo degli amministratori non può superare il tetto retributivo massimo statale (art. 23-ter D.L. 201/2011, pari a 240.000 euro) ed è suddiviso in 5 fasce con specifici massimali decrescenti stabiliti con decreto ministeriale.",
    hint: "Tetto massimo per i dirigenti pubblici dello Stato (240.000 euro lordi annui).",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_017",
    question: "I dipendenti della pubblica amministrazione controllante possono essere nominati amministratori della società partecipata?",
    options: [
      { id: "A", text: "Sì, ma con obbligo di riversamento del compenso alla propria amministrazione di appartenenza (se svolto in orario d'ufficio o per incarico istituzionale), o a titolo gratuito" },
      { id: "B", text: "No, è vietato a pena di decadenza immediata dall'impiego pubblico" },
      { id: "C", text: "Sì, cumulando liberamente entrambi gli stipendi al 100%" },
      { id: "D", text: "Solo se ottengono la dispensa papale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 11, comma 8, TUSP dispone che i dipendenti delle amministrazioni controllanti o partecipanti che ricoprono cariche amministrative nella partecipata riversano il relativo compenso alla propria amministrazione, in applicazione del principio di onnicomprensività del trattamento economico.",
    hint: "Obbligo di riversamento del compenso all'amministrazione di appartenenza (onnicomprensività).",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_018",
    question: "Come deve avvenire il reclutamento del personale nelle società a controllo pubblico ai sensi dell'art. 19 del TUSP?",
    options: [
      { id: "A", text: "Mediante procedure selettive ad evidenza pubblica nel rispetto dei principi di trasparenza, pubblicità, imparzialità ed economicità (art. 35 D.Lgs. 165/2001)" },
      { id: "B", text: "Per chiamata diretta nominativa fiduciaria dell'amministratore delegato" },
      { id: "C", text: "Per cooptazione familiare dei dipendenti in pensione" },
      { id: "D", text: "Solo mediante agenzie di lavoro interinale senza bando" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 19, comma 1 e 2, TUSP impone alle società a controllo pubblico di adottare criteri e modalità per il reclutamento del personale nel rispetto dei principi di trasparenza, pubblicità e imparzialità e dei principi di cui all'art. 35, comma 3, del D.Lgs. 165/2001.",
    hint: "Reclutamento con selezione trasparente e pubblica comparativa, analoga ai concorsi pubblici.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_019",
    question: "Quale sanzione si applica ai contratti di lavoro stipulati dalle società a controllo pubblico in violazione dei principi di selezione pubblica ex art. 19 TUSP?",
    options: [
      { id: "A", text: "I contratti di lavoro sono affetti da nullità insanabile" },
      { id: "B", text: "Una mera sanzione disciplinare verbale al responsabile del personale" },
      { id: "C", text: "La trasformazione automatica in contratto statale a tempo indeterminato" },
      { id: "D", text: "Nessuna, il contratto rimane pienamente valido ed efficace" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 19, comma 4, TUSP stabilisce perentoriamente: 'I contratti di lavoro stipulati in violazione dei provvedimenti o delle disposizioni di cui ai commi 1, 2 e 3 sono nulli'. La nullità tutela la parità di accesso al lavoro nelle partecipate.",
    hint: "Nullità radicale e testuale del contratto di lavoro stipulato illegittimamente.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_020",
    question: "Il personale dipendente delle società a controllo pubblico acquisisce lo status di pubblico dipendente?",
    options: [
      { id: "A", text: "No, il rapporto di lavoro è disciplinato dal codice civile e dalle leggi sul lavoro nell'impresa privata, nonché dai CCNL di settore privati" },
      { id: "B", text: "Sì, diventano automaticamente dipendenti del Ministero dell'Interno" },
      { id: "C", text: "Sì, transitano nel ruolo organico del Comune senza concorso" },
      { id: "D", text: "Acquisiscono la qualifica di pubblici ufficiali in ogni circostanza" }
    ],
    correctAnswerId: "A",
    explanation: "Sebbene il reclutamento avvenga con criteri pubblicistici, il rapporto di lavoro dei dipendenti delle società pubbliche rimane privatistico (subordinato al Libro V del Codice Civile e ai CCNL privatistici di categoria, es. chimico, trasporti, metalmeccanico), non applicandosi lo statuto del pubblico impiego ex D.Lgs. 165/2001.",
    hint: "Rapporto di lavoro di diritto privato (disciplinato dal Codice Civile e CCNL privati).",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_021",
    question: "A quale giurisdizione sono soggette le azioni di responsabilità per danno erariale nei confronti degli amministratori di società 'in house providing'?",
    options: [
      { id: "A", text: "Alla giurisdizione della Corte dei Conti, essendo la società assimilata ad un organo interno dell'amministrazione pubblica" },
      { id: "B", text: "Esclusivamente al Giudice Civile ordinario" },
      { id: "C", text: "Al Giudice di Pace" },
      { id: "D", text: "Al Consiglio di Stato in sede giurisdizionale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 12 TUSP e la consolidata giurisprudenza delle Sezioni Unite della Cassazione attribuiscono alla Corte dei Conti la giurisdizione per il danno arrecato al patrimonio della società in house dagli amministratori o dipendenti, poiché il patrimonio sociale è equiparato a risorse pubbliche.",
    hint: "Corte dei Conti: giurisdizione piena sul danno alle società in house.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_022",
    question: "Quale giudice è competente per l'azione di responsabilità risarcitoria contro gli amministratori di una società partecipata pubblica ORDINARIA (non in house)?",
    options: [
      { id: "A", text: "Il Giudice Ordinario per il danno arrecato al patrimonio sociale, e la Corte dei Conti solo per il danno diretto arrecato dall'amministratore pubblico al socio pubblico (pregiudizio al valore della quota)" },
      { id: "B", text: "Sempre e unicamente il Tribunale Penale" },
      { id: "C", text: "Il TAR competente per territorio" },
      { id: "D", text: "La Corte dei Conti per qualsiasi danno societario interno" }
    ],
    correctAnswerId: "A",
    explanation: "Per le società partecipate ordinarie (non in house), la Corte di Cassazione a Sezioni Unite distingue: l'azione per danno al patrimonio sociale spetta al Giudice Ordinario ex artt. 2392-2393 c.c.; la Corte dei Conti giudica solo sul danno c.d. 'diretto' patito dall'ente socio per svalutazione o perdita della quota causata da colpa grave dei propri rappresentanti.",
    hint: "Giudice ordinario per il patrimonio della società ordinaria; Corte dei Conti per il danno diretto alla quota dell'ente pubblico.",
    level: "avanzato"
  },
  {
    id: "Q_ORG_PART_023",
    question: "Quale divieto pone l'art. 14, comma 5, del TUSP in materia di ripiano delle perdite delle società partecipate (divieto di soccorso finanziario)?",
    options: [
      { id: "A", text: "È vietato alle amministrazioni pubbliche erogare soccorsi finanziari a favore di società partecipate che abbiano registrato perdite reiterate negli ultimi tre esercizi, salvo accordi di ristrutturazione del debito certificati" },
      { id: "B", text: "I Comuni devono ripianare qualsiasi perdita entro 10 giorni" },
      { id: "C", text: "È fatto obbligo di donare immobili comunali alle società in perdita" },
      { id: "D", text: "Le perdite societarie sono coperte dalla Banca d'Italia" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 14, comma 5, TUSP sancisce il divieto di 'soccorso finanziario' a fondo perduto: le PA non possono stanziare risorse per ripianare perdite di società partecipate in crisi cronica, a meno che non vi sia un piano di risanamento asseverato che ne dimostri la reversibilità economica.",
    hint: "Divieto di soccorso finanziario pubblico per coprire perdite reiterate.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_024",
    question: "Che cos'è l'Azienda Speciale disciplinata dall'art. 114 del TUEL?",
    options: [
      { id: "A", text: "Un ente strumentale dell'ente locale dotato di personalità giuridica, di autonomia imprenditoriale e di proprio statuto, per la gestione di servizi pubblici economici e sociali" },
      { id: "B", text: "Una società per azioni quotata in borsa" },
      { id: "C", text: "Una commissione di studio temporanea" },
      { id: "D", text: "Un ufficio anagrafico distaccato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 114, comma 1, TUEL definisce l'azienda speciale quale ente strumentale del comune o della provincia dotato di personalità giuridica, autonomia imprenditoriale e di proprio statuto, approvato dal Consiglio comunale.",
    hint: "Ente strumentale dell'ente locale con personalità giuridica ed autonomia imprenditoriale.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_025",
    question: "Quali sono gli organi dell'Azienda Speciale ai sensi dell'art. 114, comma 3, del TUEL?",
    options: [
      { id: "A", text: "Il Consiglio di amministrazione, il Presidente e il Direttore, al quale compete la responsabilità gestionale" },
      { id: "B", text: "Il Sindaco, il Prefetto e il Vescovo" },
      { id: "C", text: "Solo il Segretario comunale" },
      { id: "D", text: "L'assemblea dei cittadini utenti del servizio" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 114, comma 3, TUEL, sono organi dell'azienda speciale il consiglio di amministrazione, il presidente e il direttore, al quale compete la responsabilità gestionale dell'attività.",
    hint: "CdA, Presidente e Direttore (responsabile della gestione).",
    level: "base"
  },
  {
    id: "Q_ORG_PART_026",
    question: "Che cos'è l''Istituzione' disciplinata dall'art. 114, comma 2, del TUEL?",
    options: [
      { id: "A", text: "L'organismo strumentale dell'ente locale per l'esercizio di servizi sociali senza rilevanza imprenditoriale, dotato di sola autonomia gestionale ma privo di personalità giuridica" },
      { id: "B", text: "Una fondazione bancaria privata" },
      { id: "C", text: "Il tribunale per i minorenni locale" },
      { id: "D", text: "La caserma dei vigili del fuoco comunale" }
    ],
    correctAnswerId: "A",
    explanation: "L'istituzione (art. 114, comma 2, TUEL) è un organismo strumentale del Comune creato per erogare servizi sociali, culturali o educativi (es. asili nido, teatri, farmacie sociali). A differenza dell'azienda speciale, è priva di personalità giuridica autonoma.",
    hint: "Servizi sociali/culturali senza rilevanza economica e priva di personalità giuridica.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_027",
    question: "Cosa stabilisce l'art. 147-quater del TUEL in tema di 'controllo sulle società partecipate' da parte degli enti locali?",
    options: [
      { id: "A", text: "L'ente locale deve definire un sistema di controllo per monitorare l'andamento delle società partecipate, la gestione economico-finanziaria, il rispetto degli obiettivi programmatici e la qualità dei servizi" },
      { id: "B", text: "Il controllo è riservato unicamente al collegio sindacale della società senza coinvolgere gli uffici comunali" },
      { id: "C", text: "È sufficiente acquisire il bilancio ogni dieci anni" },
      { id: "D", text: "L'ente non può richiedere informazioni contabili alle proprie partecipate" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 147-quater TUEL disciplina il controllo interno sulle società partecipate: l'ente locale organizza un idoneo sistema informativo e di monitoraggio periodico per rilevare i rapporti finanziari, l'andamento gestionale e la congruità rispetto agli obiettivi di bilancio.",
    hint: "Controllo strategico e finanziario interno dell'ente locale sulle proprie partecipate.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_028",
    question: "Quale fondo obbligatorio deve essere accantonato nel bilancio dell'ente locale a fronte di perdite reiterate di una società partecipata non in-house (art. 21 TUSP)?",
    options: [
      { id: "A", text: "Un fondo vincolato per perdite di società partecipate nel risultato di amministrazione, pari all'importo corrispondente alla quota di partecipazione nelle perdite" },
      { id: "B", text: "Il Fondo Crediti di Dubbia Esigibilità" },
      { id: "C", text: "Il fondo per le missioni dei dipendenti" },
      { id: "D", text: "Nessun accantonamento, le perdite delle società ordinarie non incidono sull'ente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 21 TUSP impone alle amministrazioni pubbliche socie di società partecipate che registrino perdite di esercizio di accantonare nel bilancio di previsione e vincolare nell'avanzo di amministrazione un apposito fondo proporzionale alla quota di perdita.",
    hint: "Accantonamento cautelativo a bilancio a copertura della quota di perdite societarie.",
    level: "avanzato"
  },
  {
    id: "Q_ORG_PART_029",
    question: "Le società partecipate dagli enti locali sono soggette agli obblighi di trasparenza del D.Lgs. n. 33/2013?",
    options: [
      { id: "A", text: "Sì, le società a controllo pubblico e le in-house sono equiparate alle PA e devono pubblicare i dati nella sezione 'Società Trasparente' del proprio sito" },
      { id: "B", text: "No, il D.Lgs. 33/2013 si applica solo ai ministeri romani" },
      { id: "C", text: "Sono soggette solo se quotate alla Borsa di Milano" },
      { id: "D", text: "Pubblicano solo il nome del presidente senza compensi né bilanci" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 2-bis del D.Lgs. 33/2013, le società in controllo pubblico e le partecipate in house sono integralmente assoggettate alla normativa sulla trasparenza, con l'obbligo di istituire la sezione 'Società trasparente' e pubblicare bilanci, incarichi, compensi e bandi di selezione.",
    hint: "Sezione 'Società Trasparente' analoga ad 'Amministrazione Trasparente'.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_030",
    question: "Quale decreto legislativo ha riformato organicamente la disciplina dei Servizi Pubblici Locali di rilevanza economica?",
    options: [
      { id: "A", text: "Il D.Lgs. 23 dicembre 2022, n. 201" },
      { id: "B", text: "Il D.Lgs. 50/2016" },
      { id: "C", text: "Il D.Lgs. 196/2003" },
      { id: "D", text: "Il Regio Decreto 2440/1923" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.Lgs. 23 dicembre 2022, n. 201 ha approvato il Testo Unico dei servizi pubblici locali di rilevanza economica, che riorganizza le modalità di gestione dei servizi (trasporti, rifiuti, idrico, energia), l'affidamento in house e la motivazione qualificata richiesta agli enti affidanti.",
    hint: "Riforma dei Servizi Pubblici Locali: D.Lgs. 201/2022.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_031",
    question: "Cosa stabilisce l'art. 17 del D.Lgs. 201/2022 per l'affidamento dei servizi pubblici locali mediante gestione 'in house'?",
    options: [
      { id: "A", text: "L'ente locale deve redigere un'apposita relazione motivata che dia conto delle ragioni economiche e sociali che giustificano il mancato ricorso al mercato, dei benefici per la collettività e degli obblighi di servizio pubblico" },
      { id: "B", text: "L'affidamento in house non richiede alcuna motivazione essendo la prima scelta naturale" },
      { id: "C", text: "L'affidamento in house è vietato in tutti i servizi pubblici locali" },
      { id: "D", text: "L'affidamento può durare al massimo 30 giorni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 17 D.Lgs. 201/2022 richiede una motivazione qualificata e comparativa per l'affidamento in house di servizi pubblici locali: l'amministrazione deve illustrare i vantaggi qualitativi, economici e occupazionali rispetto all'esternalizzazione con gara.",
    hint: "Relazione motivata qualificata che giustifica il mancato ricorso al mercato.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_032",
    question: "Che cos'è la società 'mista' pubblico-privata nei servizi pubblici locali (art. 17 TUSP)?",
    options: [
      { id: "A", text: "Una società a capitale misto costituita per la gestione di un servizio in cui il socio privato operativo è scelto obbligatoriamente con gara a doppio oggetto (selezione del socio e affidamento del servizio)" },
      { id: "B", text: "Una società in cui il capitale privato è scelto liberamente dal Sindaco tra i residenti" },
      { id: "C", text: "Una società gestita a turno per sei mesi dal Comune e sei mesi dal privato" },
      { id: "D", text: "Una ditta individuale che riceve un contributo comunale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 17 TUSP disciplina le società miste: la selezione del socio privato deve avvenire mediante procedura a evidenza pubblica con 'gara a doppio oggetto', volta a selezionare contemporaneamente il socio privato per la quota di capitale e per l'esecuzione operativa delle prestazioni del servizio.",
    hint: "Gara a doppio oggetto per la scelta del socio privato industriale.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_033",
    question: "Quale quota minima di capitale deve possedere il socio privato nella società a partecipazione mista pubblico-privata (art. 17, comma 1, TUSP)?",
    options: [
      { id: "A", text: "Una quota di partecipazione non inferiore al 30 per cento del capitale sociale" },
      { id: "B", text: "Una quota non superiore al 5%" },
      { id: "C", text: "Almeno il 90% del capitale" },
      { id: "D", text: "Non è fissata alcuna quota minima" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 17, comma 1, TUSP dispone che la quota di partecipazione del soggetto privato non può essere inferiore al trenta per cento del capitale sociale, al fine di garantire un reale apporto finanziario e operativo del partner industriale.",
    hint: "La quota privata minima nelle società miste è pari al 30%.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_034",
    question: "Le società a partecipazione pubblica sono soggette al fallimento (liquidazione giudiziale ai sensi del Codice della crisi d'impresa e dell'insolvenza)?",
    options: [
      { id: "A", text: "Sì, l'art. 14 del TUSP dispone espressamente che le società a partecipazione pubblica sono soggette alle disposizioni sul fallimento e sulle procedure concorsuali del diritto societario comune" },
      { id: "B", text: "No, la partecipazione pubblica rende la società immune da qualsiasi fallimento" },
      { id: "C", text: "Solo le società con sede a Roma possono fallire" },
      { id: "D", text: "Fallisce l'ente locale e non la società" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 14, comma 1, TUSP stabilisce esplicitamente che le società a partecipazione pubblica sono soggette alle disposizioni sulle procedure concorsuali e liquidazione giudiziale (fallimento) previste dal Codice della Crisi d'Impresa, confermando la natura commerciale privatistica del soggetto.",
    hint: "Fallibilità delle società pubbliche in base alle norme del diritto societario comune.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_035",
    question: "Che cos'è la 'Fondazione di partecipazione' utilizzata dagli enti locali?",
    options: [
      { id: "A", text: "Un organismo di diritto privato a struttura aperta, non a scopo di lucro, in cui enti pubblici e soggetti privati partecipano stabilmente per finalità culturali, sociali o di ricerca" },
      { id: "B", text: "Una banca commerciale locale" },
      { id: "C", text: "Un sindacato di categoria degli amministratori" },
      { id: "D", text: "Un istituto di credito speciale per il personale" }
    ],
    correctAnswerId: "A",
    explanation: "La fondazione di partecipazione è un modello atipico del terzo settore/diritto civile che combina elementi dell'associazione (apertura a nuovi partecipanti) e della fondazione (vincolo patrimoniale di scopo), molto utilizzato dagli enti locali per gestire teatri, musei e progetti culturali.",
    hint: "Organismo non profit a struttura aperta per la cooperazione pubblico-privata (cultura, sociale).",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_036",
    question: "Chi nomina e revoca i rappresentanti del Comune presso enti, aziende ed istituzioni partecipate (art. 50, commi 8 e 9, TUEL)?",
    options: [
      { id: "A", text: "Il Sindaco, sulla base degli indirizzi generali stabiliti dal Consiglio comunale" },
      { id: "B", text: "Il Consiglio comunale a scrutinio segreto nominativo" },
      { id: "C", text: "Il Segretario comunale" },
      { id: "D", text: "I dipendenti del Comune con votazione telematica" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 50, commi 8 e 9, TUEL attribuisce al Sindaco il potere di provvedere alla nomina, alla designazione e alla revoca dei rappresentanti del comune presso enti, aziende ed istituzioni, conformemente agli indirizzi stabiliti dal consiglio.",
    hint: "Il Consiglio fissa gli indirizzi generali, ma il provvedimento di nomina/revoca spetta al Sindaco.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_037",
    question: "Entro quanti giorni dall'insediamento il Sindaco deve provvedere alla nomina dei rappresentanti del Comune presso enti e società partecipate?",
    options: [
      { id: "A", text: "Entro 45 giorni dall'insediamento ovvero entro i termini di scadenza del precedente incarico" },
      { id: "B", text: "Entro 10 giorni lavorativi" },
      { id: "C", text: "Entro 12 mesi" },
      { id: "D", text: "Non vi è alcun termine di legge" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 50, comma 8, TUEL prevede che tutte le nomine spettanti al sindaco siano effettuate entro quarantacinque giorni dall'insediamento, ovvero entro i termini di scadenza dei singoli incarichi pregressi.",
    hint: "Termine fissato dal TUEL: 45 giorni.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_038",
    question: "Nelle società a controllo pubblico è consentito istituire un collegio sindacale composto da soli dipendenti della PA socia?",
    options: [
      { id: "A", text: "No, i componenti del collegio sindacale devono essere iscritti nell'albo dei revisori legali e possedere i requisiti di indipendenza e professionalità previsti dal codice civile" },
      { id: "B", text: "Sì, per ridurre a zero i compensi dei professionisti" },
      { id: "C", text: "Sì, purché siano scelti tra gli uscieri comunali" },
      { id: "D", text: "Il collegio sindacale è vietato nelle società pubbliche" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 3, comma 2, TUSP rinvia per tutto quanto non derogato alle disposizioni del codice civile: i membri dell'organo di controllo (sindaci) devono essere revisori legali iscritti e garantire assoluta indipendenza dalla gestione.",
    hint: "Revisori legali abilitati nel rispetto del Codice Civile.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_039",
    question: "Che cosa si intende per 'società a controllo pubblico' ai sensi dell'art. 2, comma 1, lett. m), del TUSP?",
    options: [
      { id: "A", text: "La società in cui una o più amministrazioni pubbliche esercitano il controllo societario ai sensi dell'art. 2359 c.c. (controllo di diritto, di fatto o contrattuale)" },
      { id: "B", text: "La società che ha un solo dipendente pubblico distaccato" },
      { id: "C", text: "La società che riceve contributi comunitari per il fotovoltaico" },
      { id: "D", text: "Tutte le società che pagano l'IMU regolarmente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 2, lett. m), definisce 'società a controllo pubblico' le società in cui una o più amministrazioni pubbliche esercitano poteri di controllo ai sensi dell'art. 2359 del codice civile (maggioranza dei voti in assemblea, voti sufficienti per esercitare un'influenza dominante o vincoli contrattuali particolari).",
    hint: "Controllo societario ai sensi dell'art. 2359 del Codice Civile esercitato da pubbliche amministrazioni.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_040",
    question: "Cosa stabilisce l'art. 12, comma 2, del TUSP in merito al danno arrecato dai rappresentanti degli enti soci per l'omesso esercizio dei diritti sociali?",
    options: [
      { id: "A", text: "Costituisce danno erariale accertabile dalla Corte dei Conti il pregiudizio economico subito dall'ente socio a causa del mancato o colpevole omesso esercizio dei diritti di vigilanza e voto dei rappresentanti pubblici" },
      { id: "B", text: "Non vi è alcuna responsabilità, il voto è libero e insindacabile" },
      { id: "C", text: "La responsabilità è limitata alla sola sanzione amministrativa del prefetto" },
      { id: "D", text: "Risponde esclusivamente la compagnia assicuratrice dell'ente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 12, comma 2, TUSP sancisce che costituisce danno erariale il pregiudizio patrimoniale arrecato all'ente pubblico socio dai propri rappresentanti per il mancato o negligente esercizio dei diritti sociali (es. mancata contestazione di bilanci falsi o perdite).",
    hint: "Danno erariale dei delegati pubblici per omessa vigilanza o colpevole inerzia sui diritti del socio.",
    level: "avanzato"
  },
  {
    id: "Q_ORG_PART_041",
    question: "Che cosa sono i 'patti parasociali' nelle società partecipate pubbliche (art. 10 TUSP)?",
    options: [
      { id: "A", text: "Accordi tra soci pubblici e privati per regolare l'esercizio del diritto di voto, la governance e la stabilità societaria, la cui durata non può superare cinque anni" },
      { id: "B", text: "Accordi sindacali per il salario accessorio" },
      { id: "C", text: "Contratti di locazione di sedi municipali" },
      { id: "D", text: "Intese segrete vietate dalla legge penale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 10 TUSP disciplina i patti parasociali nelle partecipate, richiamando l'art. 2341-bis c.c.: la loro durata non può superare cinque anni ed essi devono essere motivati e coerenti con le finalità istituzionali dell'ente socio.",
    hint: "Patti parasociali con durata massima quinquennale ex art. 2341-bis c.c.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_042",
    question: "Quale limite numerico di mandati consecutivi si applica ordinariamente agli amministratori delle società a controllo pubblico?",
    options: [
      { id: "A", text: "Non possono essere nominati per più di tre mandati consecutivi" },
      { id: "B", text: "Possono rimanere in carica a vita" },
      { id: "C", text: "Un solo mandato di 1 anno senza rinnovo" },
      { id: "D", text: "Dieci mandati decennali" }
    ],
    correctAnswerId: "A",
    explanation: "In applicazione del principio generale del codice civile (art. 2383 c.c.) e delle linee guida di governance pubblica, la carica dura al massimo per tre esercizi ed è previsto il limite di rotazione per prevenire cristallizzazioni di potere gestionale.",
    hint: "Tre mandati triennali consecutivi come limite standard di buona amministrazione.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_043",
    question: "A quale organo compete l'adozione del bilancio d'esercizio nella società per azioni partecipata dal Comune?",
    options: [
      { id: "A", text: "All'Assemblea ordinaria dei soci, su proposta del consiglio di amministrazione o dell'amministratore unico" },
      { id: "B", text: "Al Consiglio comunale in seduta aperta" },
      { id: "C", text: "Al Collegio dei revisori della società" },
      { id: "D", text: "Al Prefetto" }
    ],
    correctAnswerId: "A",
    explanation: "Secondo le norme ordinarie del Codice Civile (art. 2364 c.c.) applicabili alle società pubbliche ex TUSP, l'approvazione del bilancio di esercizio è atto tipico e inderogabile dell'Assemblea dei soci, in cui il Comune è rappresentato dal Sindaco o suo delegato.",
    hint: "Assemblea dei soci su relazione dell'organo amministrativo.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_044",
    question: "Cosa stabilisce l'art. 26 del TUSP in merito alle società quotate in mercati regolamentati partecipate da enti pubblici?",
    options: [
      { id: "A", text: "Alle società quotate a partecipazione pubblica le disposizioni del TUSP non si applicano, salvo che non sia espressamente previsto" },
      { id: "B", text: "Le società quotate sono vietate alle pubbliche amministrazioni" },
      { id: "C", text: "I dipendenti delle società quotate diventano statali" },
      { id: "D", text: "Tutti i contratti delle società quotate devono essere approvati dal Consiglio comunale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 26 TUSP esclude espressamente le società con azioni quotate in mercati regolamentati (e le loro controllate) dalla maggior parte dei vincoli del TUSP (organi, compensi, reclutamento), per tutelare la parità di mercato con gli altri investitori e l'attrattività sui mercati finanziari.",
    hint: "Esclusione delle società quotate dalla gran parte dei vincoli del TUSP per salvaguardare le dinamiche di borsa.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_045",
    question: "Quale regime contrattuale si applica agli appalti di lavori, servizi e forniture stipulati dalle società 'in house providing'?",
    options: [
      { id: "A", text: "Sono tenute ad applicare integralmente il Codice dei Contratti Pubblici (D.Lgs. 36/2023) per tutti i propri acquisti e affidamenti a terzi" },
      { id: "B", text: "Possono acquistare liberamente senza alcuna gara né bando sul mercato privato" },
      { id: "C", text: "Si applica solo il diritto commerciale estero" },
      { id: "D", text: "Acquistano solo da altre società pubbliche senza fattura" }
    ],
    correctAnswerId: "A",
    explanation: "Le società in house providing, essendo qualificate come organismi di diritto pubblico o stazioni appaltanti equiparate, sono obbligate per legge ad applicare il Codice dei Contratti Pubblici (D.Lgs. 36/2023) per l'approvvigionamento di qualsiasi fornitura, servizio o lavoro.",
    hint: "Obbligo integrale di evidenza pubblica e applicazione del Codice Appalti.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_046",
    question: "Che cos'è il 'bilancio consolidato' dell'ente locale con i propri organismi partecipati (art. 233-bis TUEL e D.Lgs. 118/2011)?",
    options: [
      { id: "A", text: "Il documento contabile che rappresenta la situazione economico-patrimoniale e finanziaria complessiva del 'Gruppo Amministrazione Pubblica' (Comune più società ed enti partecipati/controllati)" },
      { id: "B", text: "La somma matematica dei conti correnti dei consiglieri" },
      { id: "C", text: "Il rendiconto delle sole contravvenzioni del codice della strada" },
      { id: "D", text: "Il bilancio preventivo dello Stato italiano" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 233-bis TUEL stabilisce che gli enti locali approvano entro il 30 settembre di ciascun anno il bilancio consolidato con le proprie aziende, società partecipate ed enti strumentali, elidendo i rapporti infragruppo per dare una visione globale veritiera e corretta del gruppo pubblico locale.",
    hint: "Rappresenta l'aggregato complessivo del Gruppo Comune + Organismi partecipati entro il 30 settembre.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_047",
    question: "Qual è il termine perentorio di approvazione del bilancio consolidato da parte del Consiglio comunale ex art. 233-bis TUEL?",
    options: [
      { id: "A", text: "Entro il 30 settembre dell'anno successivo a quello di riferimento" },
      { id: "B", text: "Entro il 30 aprile dell'anno in corso" },
      { id: "C", text: "Entro il 31 dicembre di ogni biennio" },
      { id: "D", text: "Non vi è alcun termine prefissato" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 233-bis, comma 2, TUEL, il bilancio consolidato è deliberato dal Consiglio comunale entro il 30 settembre dell'anno successivo a quello di riferimento, previa acquisizione del parere dell'organo di revisione contabile.",
    hint: "30 settembre dell'anno successivo.",
    level: "base"
  },
  {
    id: "Q_ORG_PART_048",
    question: "Cosa si intende per 'perimetro di consolidamento' nella redazione del bilancio consolidato degli enti locali?",
    options: [
      { id: "A", text: "L'insieme degli enti, aziende e società partecipate che, superando specifiche soglie di rilevanza (es. totale attivo, patrimonio o fatturato), devono essere inclusi nel bilancio consolidato" },
      { id: "B", text: "I confini geografici del territorio municipale" },
      { id: "C", text: "La recinzione della sede municipale" },
      { id: "D", text: "L'elenco degli immobili comunali vendibili" }
    ],
    correctAnswerId: "A",
    explanation: "Il principio applicato del D.Lgs. 118/2011 definisce il perimetro di consolidamento come l'elenco dei soggetti controllati e partecipati che, non rientrando nei casi di irrilevanza (inferiori al 3% dei parametri dimensionali di bilancio), devono obbligatoriamente essere consolidati.",
    hint: "I soggetti inclusi nel calcolo del bilancio consolidato perché superano le soglie di rilevanza.",
    level: "intermedio"
  },
  {
    id: "Q_ORG_PART_049",
    question: "Cosa stabilisce l'art. 14, comma 2, del TUSP in ordine al blocco delle facoltà assunzionali delle società a controllo pubblico in perdita?",
    options: [
      { id: "A", text: "Qualora la società registri un risultato negativo per due esercizi consecutivi, non può procedere ad assunzioni a tempo indeterminato né ad incrementi retributivi fino al risanamento" },
      { id: "B", text: "La società deve licenziare tutti i dirigenti in 24 ore" },
      { id: "C", text: "I dipendenti non percepiscono stipendio per sei mesi" },
      { id: "D", text: "Le assunzioni possono avvenire solo su autorizzazione del Giudice di Pace" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 14, comma 2, TUSP pone specifici vincoli di contenimento dei costi del personale per le società in perdita, vietando assunzioni a tempo indeterminato e spese per consulenze qualora emergano perdite di esercizio consecutive.",
    hint: "Blocco del turn-over e divieto di nuove assunzioni per le società in perdita.",
    level: "avanzato"
  },
  {
    id: "Q_ORG_PART_050",
    question: "Chi esercita il controllo sulla corretta applicazione delle norme del TUSP e sulle relazioni di razionalizzazione periodica?",
    options: [
      { id: "A", text: "La Corte dei Conti attraverso le Sezioni regionali di controllo e la Struttura di monitoraggio del Ministero dell'Economia e delle Finanze (Dipartimento del Tesoro)" },
      { id: "B", text: "Esclusivamente l'Associazione Bancaria Italiana" },
      { id: "C", text: "Il comando dei Carabinieri forestali" },
      { id: "D", text: "L'assemblea dei consumatori locale" }
    ],
    correctAnswerId: "A",
    explanation: "Il TUSP (art. 15 e 20) assegna il monitoraggio e il controllo al Ministero dell'Economia e delle Finanze (Struttura per il monitoraggio delle partecipazioni pubbliche del Dipartimento del Tesoro) e alla Corte dei Conti, che verifica la veridicità dei piani e sanziona le inadempienze.",
    hint: "Corte dei Conti (Sezioni di controllo) e MEF (Dipartimento del Tesoro).",
    level: "base"
  }
];

const dest = path.join(__dirname, '../public/db/master_bank/diritto/organismi_partecipati.json');
fs.writeFileSync(dest, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Generated ${questions.length} questions in ${dest}`);
