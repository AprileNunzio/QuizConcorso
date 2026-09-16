const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../public/db/master_bank/diritto/pubblico_impiego.json');
const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

const newQuestions = [
  {
    id: "Q_DIR_PUB_051",
    question: "A seguito del D.P.R. 13 giugno 2023, n. 81, quale nuova disciplina è stata introdotta nel Codice di Comportamento dei dipendenti pubblici (D.P.R. 62/2013)?",
    options: [
      { id: "A", text: "La regolamentazione espressa dell'utilizzo dei social media e delle tecnologie informatiche da parte dei dipendenti pubblici (art. 11-bis), vietando dichiarazioni che ledano il prestigio, il decoro o l'immagine dell'amministrazione" },
      { id: "B", text: "L'abolizione delle sanzioni disciplinari per assenteismo" },
      { id: "C", text: "L'obbligo di indossare un'uniforme uguale in tutti i ministeri" },
      { id: "D", text: "La liberalizzazione totale dell'accettazione di regali senza limiti di valore" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.P.R. 81/2023 ha integrato il Codice di comportamento introducendo l'art. 11-bis (Utilizzo delle tecnologie informatiche e dei mezzi di informazione e social media): il dipendente deve tutelare l'immagine dell'ente, non può diffondere dati o documenti riservati e deve specificare che le opinioni espresse a titolo personale non impegnano l'amministrazione.",
    hint: "Regolamentazione dell'uso dei social media a tutela del decoro e dell'immagine dell'amministrazione.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_052",
    question: "Quale principio sancisce l'art. 4 del D.Lgs. 165/2001 in merito alla distinzione dei ruoli tra organi di governo e dirigenza pubblica?",
    options: [
      { id: "A", text: "Il principio di separazione tra indirizzo politico-amministrativo (spettante agli organi di governo) e gestione finanziaria, tecnica e amministrativa (riservata in via esclusiva ai dirigenti)" },
      { id: "B", text: "La totale subordinazione dei dirigenti alla volontà personale e insindacabile del ministro o sindaco" },
      { id: "C", text: "L'attribuzione della gestione operativa e degli appalti direttamente agli assessori" },
      { id: "D", text: "La rotazione obbligatoria giornaliera tra politici e dirigenti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 4 D.Lgs. 165/2001 stabilisce il principio cardine della separazione: gli organi politici definiscono gli obiettivi e i programmi e verificano i risultati; ai dirigenti spetta in via esclusiva l'adozione degli atti di gestione, l'impegno di spesa e l'organizzazione delle risorse umane e strumentali.",
    hint: "Separazione tra indirizzo politico-amministrativo e gestione dirigenziale autonoma.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_053",
    question: "In base all'art. 5, comma 2, del D.Lgs. 165/2001, con quali poteri e capacità il dirigente pubblico assume le determinazioni per l'organizzazione degli uffici e la gestione dei rapporti di lavoro?",
    options: [
      { id: "A", text: "Con la capacità e i poteri del comune datore di lavoro privato (atti di diritto privato/negoziale)" },
      { id: "B", text: "Esclusivamente mediante provvedimenti amministrativi autoritativi impugnabili al TAR" },
      { id: "C", text: "Con decreti aventi forza di legge" },
      { id: "D", text: "Previa autorizzazione vincolante del Prefetto" }
    ],
    correctAnswerId: "A",
    explanation: "La privatizzazione del pubblico impiego si fonda sul principio che la gestione del personale da parte della dirigenza avviene con i poteri del datore di lavoro privato ai sensi del Codice Civile, devolvendo le controversie alla giurisdizione del Giudice Ordinario (Tribunale del Lavoro).",
    hint: "Con la capacità e i poteri del privato datore di lavoro.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_054",
    question: "Cosa stabilisce l'art. 52, comma 1, del D.Lgs. 165/2001 in materia di mansioni del dipendente pubblico?",
    options: [
      { id: "A", text: "Il dipendente deve essere adibito alle mansioni per le quali è stato assunto o alle mansioni equivalenti nell'ambito dell'area di inquadramento ovvero a quelle corrispondenti alla qualifica superiore successivamente acquisita per concorso o progressione" },
      { id: "B", text: "Il dipendente può essere retrocesso liberamente a mansioni inferiori ogni mese" },
      { id: "C", text: "Il dipendente ha diritto di scegliere autonomamente quali mansioni svolgere" },
      { id: "D", text: "Tutti i dipendenti pubblici svolgono mansioni intercambiabili a prescindere dal titolo" }
    ],
    correctAnswerId: "A",
    explanation: "Nel pubblico impiego privatizzato il principio di equivalenza delle mansioni è ancorato all'area di inquadramento (classificazione contrattuale): all'interno della medesima area tutte le mansioni sono esigibili e considerate professionalmente equivalenti.",
    hint: "Mansioni di assunzione o equivalenti nell'ambito della medesima area contrattuale.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_055",
    question: "Nel pubblico impiego, cosa accade nel caso in cui un dipendente venga assegnato a mansioni superiori al di fuori delle ipotesi tassativamente previste dall'art. 52 D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "L'assegnazione è nulla, ma al dipendente spetta il trattamento economico corrispondente all'attività svolta per il periodo di effettiva prestazione; l'assegnazione a mansioni superiori NON comporta in nessun caso l'acquisizione della qualifica superiore (divieto di promozione automatica ex art. 97 Cost.)" },
      { id: "B", text: "Il dipendente acquisisce automaticamente e per sempre la qualifica superiore dopo tre mesi" },
      { id: "C", text: "Il dipendente non ha diritto ad alcun compenso economico e l'atto è valido" },
      { id: "D", text: "L'amministrazione viene commissariata dal Consiglio di Stato" }
    ],
    correctAnswerId: "A",
    explanation: "A differenza del settore privato (art. 2103 c.c.), nel pubblico impiego vige il principio costituzionale dell'accesso agli impieghi tramite concorso (art. 97 Cost.): lo svolgimento di mansioni superiori, anche prolungato, non può mai determinare l'inquadramento nella qualifica superiore, dando diritto unicamente alle differenze retributive.",
    hint: "Diritto alle differenze retributive ma divieto assoluto di promozione automatica nella qualifica.",
    level: "intermedio"
  },
  {
    id: "Q_PECS_LAV_056",
    question: "In quali sole ipotesi tassative l'art. 52, comma 2, D.Lgs. 165/2001 consente l'assegnazione provvisoria a mansioni superiori nel pubblico impiego?",
    options: [
      { id: "A", text: "1) Vacanza di posto in organico, per non più di sei mesi (prorogabili fino a dodici per concorso avviato); 2) Sostituzione di altro dipendente assente con diritto alla conservazione del posto (esclusa l'assenza per ferie)" },
      { id: "B", text: "In qualsiasi momento su richiesta verbale del dipendente" },
      { id: "C", text: "Solo per sostituire colleghi assenti per ferie estive" },
      { id: "D", text: "Sempre, purché il dipendente abbia più di 60 anni" }
    ],
    correctAnswerId: "A",
    explanation: "Le mansioni superiori sono ammesse solo per obiettive esigenze di servizio e per due sole causali: vacanza di posto (max 6 mesi prorogabili a 12 se la procedura selettiva è avviata) o sostituzione di lavoratore assente con diritto al posto (maternità, malattia, aspettativa).",
    hint: "Vacanza di posto (max 6/12 mesi) o sostituzione di dipendente assente con diritto al posto.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_057",
    question: "Quale responsabilità grava sul dirigente pubblico che abbia disposto o consentito l'assegnazione illegittima di un dipendente a mansioni superiori al di fuori dei casi di legge?",
    options: [
      { id: "A", text: "Risponde personalmente del maggior onere economico erogato per danno erariale dinanzi alla Corte dei Conti, qualora abbia agito con dolo o colpa grave" },
      { id: "B", text: "Nessuna responsabilità, essendo la gestione delle risorse libera" },
      { id: "C", text: "È punito con la sanzione della decurtazione del punteggio sulla patente" },
      { id: "D", text: "Deve pagare una penale simbolica di un euro all'ARAN" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 52, comma 5, D.Lgs. 165/2001, il dirigente che ha disposto illegittimamente l'assegnazione a mansioni superiori risponde patrimonialmente del danno erariale arrecato all'ente (differenze retributive indebitamente corrisposte) dinanzi alla Corte dei Conti.",
    hint: "Responsabilità patrimoniale per danno erariale dinanzi alla Corte dei Conti se con dolo o colpa grave.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_058",
    question: "Quale innovazione ha introdotto il D.P.R. 16 giugno 2023, n. 82 nella disciplina dei concorsi pubblici per l'accesso al lavoro nella Pubblica Amministrazione?",
    options: [
      { id: "A", text: "L'utilizzo obbligatorio ed esclusivo del Portale unico del reclutamento inPA (inpa.gov.it), la digitalizzazione integrale delle prove, la riduzione dei tempi di conclusione a sei mesi e specifiche tutele per la parità di genere e lo stato di gravidanza o allattamento" },
      { id: "B", text: "L'abolizione delle prove scritte sostituite da colloqui telefonici" },
      { id: "C", text: "L'obbligo di presentare le domande esclusivamente a mano presso la Prefettura" },
      { id: "D", text: "L'eliminazione dei requisiti di idoneità fisica e morale" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.P.R. 82/2023 ha riscritto il regolamento dei concorsi (D.P.R. 487/1994): centralità del portale inPA, conclusione entro 180 giorni, prove digitali con correzione automatica, garanzia di prove asincrone per candidate in gravidanza/allattamento e trasparenza delle graduatorie.",
    hint: "Portale inPA obbligatorio, digitalizzazione prove, conclusione in 6 mesi e tutele genitoriali.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_059",
    question: "Qual è la durata di efficacia delle graduatorie dei concorsi pubblici per il reclutamento del personale nelle amministrazioni pubbliche (art. 35, comma 5-ter, D.Lgs. 165/2001)?",
    options: [
      { id: "A", text: "Due anni dalla data di approvazione" },
      { id: "B", text: "Cinque anni prorogabili a dieci" },
      { id: "C", text: "Sei mesi non rinnovabili" },
      { id: "D", text: "A tempo indeterminato fino a esaurimento degli idonei" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 35, comma 5-ter, del D.Lgs. 165/2001, le graduatorie dei concorsi per il reclutamento del personale presso le pubbliche amministrazioni rimangono vigenti per un termine di due anni dalla data di approvazione.",
    hint: "Validità fissata in due anni dall'approvazione.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_060",
    question: "Cosa stabilisce l'art. 53 del D.Lgs. 165/2001 in merito al principio di esclusività del rapporto di lavoro per i dipendenti pubblici a tempo pieno?",
    options: [
      { id: "A", text: "Il dipendente pubblico a tempo pieno deve dedicare tutte le sue energie lavorative all'amministrazione di appartenenza, con divieto di esercitare il commercio, l'industria, professioni o assumere impieghi alle dipendenze di privati (salve le deroghe di legge e gli incarichi preventivamente autorizzati)" },
      { id: "B", text: "Il dipendente può aprire liberamente negozi e imprese commerciali purché fuori dall'orario di lavoro" },
      { id: "C", text: "Non esiste alcun principio di esclusività nel pubblico impiego" },
      { id: "D", text: "L'esclusività si applica solo per il primo mese di servizio" }
    ],
    correctAnswerId: "A",
    explanation: "Il principio di esclusività (derivante dall'art. 98 Cost.: 'I pubblici impiegati sono al servizio esclusivo della Nazione') vieta l'esercizio di attività industriali, commerciali o cariche societarie a scopo di lucro, subordinando qualsiasi incarico extra-istituzionale a preventiva autorizzazione formale dell'ente.",
    hint: "Dovere di servizio esclusivo e divieto di attività commerciali o impieghi privati non autorizzati.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_061",
    question: "Quale conseguenza patrimoniale prevede l'art. 53, commi 7 e 7-bis, D.Lgs. 165/2001 qualora un dipendente pubblico svolga un incarico retribuito senza la prescritta autorizzazione preventiva dell'amministrazione?",
    options: [
      { id: "A", text: "Il compenso dovuto per l'incarico deve essere versato dal dipendente (o dall'erogatore) nel conto dell'entrata del bilancio dell'amministrazione di appartenenza per confluire nel fondo di produttività, ferma restando la responsabilità disciplinare" },
      { id: "B", text: "Il compenso viene confiscato e trattenuto dal datore privato" },
      { id: "C", text: "Nessuna conseguenza economica, ma solo un rimprovero verbale" },
      { id: "D", text: "Il raddoppio dello stipendio del dipendente" }
    ],
    correctAnswerId: "A",
    explanation: "I compensi percepiti per incarichi non autorizzati costituiscono un indebito arricchimento a danno della PA: il dipendente ha l'obbligo di riversare l'intera somma all'amministrazione di appartenenza (azione di recupero attivabile anche dalla Corte dei Conti).",
    hint: "Obbligo di riversamento dell'intero compenso nel bilancio dell'amministrazione di appartenenza.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_062",
    question: "Cosa si intende per divieto di 'Pantouflage' o 'Revolving doors' sancito dall'art. 53, comma 16-ter, del D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "Il divieto per i dipendenti pubblici che, negli ultimi tre anni di servizio, hanno esercitato poteri autoritativi o negoziali per conto della PA, di svolgere attività lavorativa o professionale presso i soggetti privati destinatari dell'attività della PA, nei tre anni successivi alla cessazione del rapporto di pubblico impiego" },
      { id: "B", text: "Il divieto di indossare abiti non consoni negli uffici pubblici" },
      { id: "C", text: "Il divieto di entrare e uscire più di due volte dall'edificio durante la giornata" },
      { id: "D", text: "L'obbligo di risiedere nel comune in cui ha sede l'ufficio" }
    ],
    correctAnswerId: "A",
    explanation: "La norma anti-pantouflage previene la corruzione e la cattura dell'agente pubblico: vieta il passaggio nel privato controllato (divieto triennale post-cessazione) a pena di nullità dei contratti stipulati e divieto per il privato di contrattare con la PA per i tre anni successivi.",
    hint: "Divieto triennale post-cessazione di lavorare per privati destinatari dei poteri gestiti in servizio.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_063",
    question: "Quali sanzioni conseguono alla violazione del divieto di pantouflage ex art. 53, comma 16-ter, D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "I contratti conclusi e gli incarichi conferiti in violazione del divieto sono nulli ed è fatto divieto ai soggetti privati che li hanno conclusi o conferiti di contrattare con le pubbliche amministrazioni per i successivi tre anni, con restituzione dei compensi percepiti" },
      { id: "B", text: "L'arresto facoltativo del dipendente per 24 ore" },
      { id: "C", text: "Una sanzione amministrativa simbolica di 50 euro" },
      { id: "D", text: "Nessuna sanzione patrimoniale per il soggetto privato" }
    ],
    correctAnswerId: "A",
    explanation: "Le sanzioni sono severissime: nullità radicale del contratto di lavoro privato, obbligo di restituzione dei compensi e interdizione triennale per l'impresa privata a stipulare qualsiasi contratto con le pubbliche amministrazioni.",
    hint: "Nullità dei contratti, interdizione triennale per l'impresa e restituzione dei compensi.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_PUB_064",
    question: "A quale organo è affidata in via esclusiva la competenza per l'irrogazione delle sanzioni disciplinari superiori al rimprovero verbale nel pubblico impiego privatizzato (art. 55-bis D.Lgs. 165/2001)?",
    options: [
      { id: "A", text: "All'Ufficio Procedimenti Disciplinari (UPD) istituito presso ciascuna amministrazione" },
      { id: "B", text: "Al Prefetto della provincia" },
      { id: "C", text: "Al Giudice di Pace" },
      { id: "D", text: "Al Comitato dei Cittadini" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 55-bis, comma 2, D.Lgs. 165/2001, il responsabile della struttura può irrogare solo il rimprovero verbale; per tutte le sanzioni di maggiore gravità (censura, sospensione, licenziamento) la competenza è riservata all'UPD.",
    hint: "Ufficio Procedimenti Disciplinari (UPD).",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_065",
    question: "Entro quale termine perentorio l'Ufficio Procedimenti Disciplinari (UPD) deve contestare per iscritto l'addebito al dipendente a pena di decadenza dall'azione disciplinare (art. 55-bis, comma 4, D.Lgs. 165/2001)?",
    options: [
      { id: "A", text: "Entro trenta giorni dalla ricezione della segnalazione o dalla data in cui l'ufficio ha avuto altrimenti conoscenza dell'infrazione" },
      { id: "B", text: "Entro novanta giorni" },
      { id: "C", text: "Entro un anno solare" },
      { id: "D", text: "Entro 48 ore" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 55-bis, comma 4, D.Lgs. 165/2001 stabilisce che la contestazione dell'addebito deve avvenire entro 30 giorni dalla ricezione della segnalazione del dirigente o dalla conoscenza dell'illecito, a garanzia della tempestività e del diritto di difesa.",
    hint: "Contestazione dell'addebito entro 30 giorni dalla conoscenza.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_066",
    question: "Quale termine a difesa deve essere garantito al dipendente pubblico tra la notifica della contestazione dell'addebito e l'audizione a difesa dinanzi all'UPD?",
    options: [
      { id: "A", text: "Un termine non inferiore a venti giorni" },
      { id: "B", text: "Tre giorni lavorativi" },
      { id: "C", text: "Due mesi" },
      { id: "D", text: "Non è obbligatorio alcun termine a difesa" }
    ],
    correctAnswerId: "A",
    explanation: "Il dipendente ha diritto di essere convocato per l'audizione con un preavviso di almeno 20 giorni dalla data della contestazione, potendo depositare memorie scritte o farsi assistere da un procuratore o rappresentante sindacale.",
    hint: "Termine a difesa non inferiore a 20 giorni per la convocazione all'audizione.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_067",
    question: "Entro quale termine perentorio deve concludersi il procedimento disciplinare dinanzi all'UPD (art. 55-bis, comma 4, D.Lgs. 165/2001)?",
    options: [
      { id: "A", text: "Entro centoventi giorni dalla data di contestazione dell'addebito" },
      { id: "B", text: "Entro trenta giorni" },
      { id: "C", text: "Entro un anno solare" },
      { id: "D", text: "Entro centottanta giorni" }
    ],
    correctAnswerId: "A",
    explanation: "A seguito delle riforme Madia, il termine generale di conclusione del procedimento disciplinare (con l'atto di archiviazione o di irrogazione della sanzione) è fissato in 120 giorni dalla contestazione dell'addebito.",
    hint: "Conclusione del procedimento disciplinare entro 120 giorni dalla contestazione.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_068",
    question: "Cosa prevede l'art. 55-quater del D.Lgs. 165/2001 in caso di 'Falsa attestazione della presenza in servizio' commessa mediante alterazione dei sistemi di rilevamento o timbratura per conto di colleghi assenti?",
    options: [
      { id: "A", text: "La sospensione cautelare dal servizio entro 48 ore senza stipendio (con corresponsione della sola indennità alimentare) e la sanzione del licenziamento disciplinare obbligatorio, con procedimento accelerato concluso entro 30 giorni" },
      { id: "B", text: "La perdita di una giornata di ferie" },
      { id: "C", text: "Il trasferimento a domanda presso un altro ufficio" },
      { id: "D", text: "Un rimprovero verbale alla presenza di due testimoni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 55-quater (introdotto dal D.Lgs. 116/2016 per contrastare i c.d. furbetti del cartellino) prevede una procedura speciale immediata: sospensione cautelare obbligatoria entro 48 ore e licenziamento con e senza preavviso entro 30 giorni.",
    hint: "Sospensione cautelare immediata entro 48 ore e licenziamento disciplinare rapido entro 30 giorni.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_069",
    question: "Quale ulteriore segnalazione è obbligatoria per il dirigente in caso di falsa attestazione della presenza in servizio oltre al procedimento disciplinare?",
    options: [
      { id: "A", text: "Denuncia immediata alla Procura della Repubblica (per truffa aggravata ai danni dello Stato ex art. 640, comma 2, c.p.) e segnalazione alla Procura regionale della Corte dei Conti per danno d'immagine (quantificato per legge in misura non inferiore a sei mensilità)" },
      { id: "B", text: "Notifica all'Ufficio Scolastico Regionale" },
      { id: "C", text: "Comunicazione all'Ordine dei Giornalisti" },
      { id: "D", text: "Nessuna segnalazione essendo sufficiente il licenziamento interno" }
    ],
    correctAnswerId: "A",
    explanation: "La falsa attestazione comporta la trasmissione degli atti alla Procura penale (reato di truffa aggravata e falso) e alla Corte dei Conti: la legge prevede una presunzione legale di danno all'immagine della PA non inferiore a 6 mensilità dell'ultimo stipendio.",
    hint: "Segnalazione alla Procura penale e alla Corte dei Conti con danno d'immagine minimo di sei mensilità.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_070",
    question: "Cosa stabilisce l'art. 55-ter del D.Lgs. 165/2001 in ordine ai rapporti tra procedimento disciplinare e procedimento penale?",
    options: [
      { id: "A", text: "Il procedimento disciplinare che ha ad oggetto fatti penalmente rilevanti è di norma proseguito e concluso anche in pendenza del procedimento penale; la sospensione facoltativa è ammessa solo per infrazioni complesse che richiedono accertamenti istruttori penali non disponibili" },
      { id: "B", text: "Il procedimento disciplinare deve essere sempre obbligatoriamente sospeso fino alla Cassazione" },
      { id: "C", text: "Il procedimento penale si estingue se la PA irroga una sanzione disciplinare" },
      { id: "D", text: "La PA non può mai sanzionare fatti che costituiscono reato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 55-ter ha sancito il principio della tempestività e autonomia dell'azione disciplinare rispetto al processo penale: la regola generale è che il procedimento disciplinare non viene sospeso ma si conclude autonomamente sulla base degli elementi probatori acquisiti.",
    hint: "Principio di autonomia e non sospensione obbligatoria del procedimento disciplinare.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_071",
    question: "Cosa accade qualora un dipendente licenziato in sede disciplinare venga successivamente assolto in sede penale irrevocabile con la formula 'perché il fatto non sussiste' o 'perché l'imputato non lo ha commesso' (art. 55-ter, comma 2, D.Lgs. 165/2001)?",
    options: [
      { id: "A", text: "L'UPD riapre il procedimento disciplinare su istanza del dipendente entro sei mesi dal passaggio in giudicato della sentenza per riadeguare le determinazioni e disporre la riammissione in servizio con corresponsione degli arretrati" },
      { id: "B", text: "La sentenza penale di assoluzione non produce alcun effetto sul licenziamento definitivo" },
      { id: "C", text: "Il dipendente può solo richiedere un risarcimento al Ministero della Giustizia" },
      { id: "D", text: "L'amministrazione deve chiudere la sede territoriale in cui lavorava il dipendente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 55-ter, comma 2, garantisce la riapertura del procedimento disciplinare per conformare l'esito disciplinare al giudicato penale di assoluzione piena con reintegrazione e corresponsione delle somme dovute.",
    hint: "Riapertura del procedimento disciplinare per reintegrazione a seguito di assoluzione penale piena.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_PUB_072",
    question: "Cos'è il 'Whistleblowing' tutelato nel settore pubblico dal D.Lgs. 10 marzo 2023, n. 24 (in attuazione della Direttiva UE 2019/1937)?",
    options: [
      { id: "A", text: "La tutela della persona che segnala, divulga o denuncia violazioni di disposizioni normative nazionali o dell'UE che ledono l'interesse pubblico o l'integrità dell'amministrazione pubblica, apprese nell'ambito del contesto lavorativo" },
      { id: "B", text: "Il sistema di allarme sonoro per l'evacuazione degli edifici in caso di incendio" },
      { id: "C", text: "Un concorso per fischietti tradizionali organizzato dal dopolavoro" },
      { id: "D", text: "La diffusione pubblica di canzoni satiriche contro i dirigenti" }
    ],
    correctAnswerId: "A",
    explanation: "Il D.Lgs. 24/2023 protegge il whistleblower (segnalante): garantisce canali interni ed esterni sicuri e tracciati, protegge l'anonimato e la riservatezza dell'identità e vieta qualsiasi forma di ritorsione, discriminazione o demansionamento.",
    hint: "Protezione del dipendente che segnala violazioni o illeciti appresi sul lavoro (D.Lgs. 24/2023).",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_073",
    question: "Quale protezione fondamentale garantisce il D.Lgs. 24/2023 al dipendente pubblico che effettua una segnalazione di illecito (Whistleblower)?",
    options: [
      { id: "A", text: "Il divieto assoluto di qualsiasi misura ritorsiva (es. licenziamento, trasferimento, demansionamento, mancata promozione), la tutela dell'identità del segnalante e la nullità di diritto di ogni atto ritorsivo adottato nei suoi confronti" },
      { id: "B", text: "L'esenzione a vita dal rispetto dell'orario di lavoro" },
      { id: "C", text: "Il raddoppio dello stipendio tabellare" },
      { id: "D", text: "L'attribuzione automatica della qualifica di dirigente di vertice" }
    ],
    correctAnswerId: "A",
    explanation: "La legge sancisce la nullità di qualsiasi atto ritorsivo (licenziamento, mutamento mansioni, revoca incarico) commesso a causa della segnalazione: in caso di controversia spetta all'amministrazione l'onere di provare che la misura adottata non era ritorsiva.",
    hint: "Divieto assoluto di ritorsioni, tutela della riservatezza e nullità di qualsiasi atto discriminatorio.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_074",
    question: "A quale autorità pubblica compete la gestione del 'canale di segnalazione esterno' del Whistleblowing e l'irrogazione delle sanzioni per ritorsioni contro i segnalanti?",
    options: [
      { id: "A", text: "All'Autorità Nazionale Anticorruzione (ANAC)" },
      { id: "B", text: "Al Garante per la concorrenza e il mercato" },
      { id: "C", text: "Al Ministero delle Infrastrutture e dei Trasporti" },
      { id: "D", text: "All'Istat" }
    ],
    correctAnswerId: "A",
    explanation: "L'ANAC gestisce il canale esterno nazionale per le segnalazioni di whistleblowing e ha poteri sanzionatori pecuniari (da 10.000 a 50.000 euro) contro chi attua ritorsioni, ostacola le segnalazioni o viola l'obbligo di riservatezza dell'identità.",
    hint: "Autorità Nazionale Anticorruzione (ANAC).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_075",
    question: "In caso di licenziamento illegittimo intimato al dipendente pubblico privatizzato, quale forma di tutela è prevista dall'art. 63, comma 2, del D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "La reintegrazione nel posto di lavoro e il pagamento di un'indennità risarcitoria commisurata all'ultima retribuzione globale di fatto fino a un massimo di 24 mensilità, oltre al versamento dei contributi previdenziali (reintegra piena/forte)" },
      { id: "B", text: "La sola tutela economica senza possibilità di tornare al lavoro" },
      { id: "C", text: "La perdita di tutti i diritti acquisiti" },
      { id: "D", text: "Il pensionamento anticipato forzato" }
    ],
    correctAnswerId: "A",
    explanation: "Nel pubblico impiego privatizzato non si applicano le tutele solo indennitarie del Jobs Act (D.Lgs. 23/2015): l'art. 63 D.Lgs. 165/2001 (novellato dal D.Lgs. 75/2017) garantisce sempre la reintegrazione nel posto di lavoro e il risarcimento fino a 24 mensilità.",
    hint: "Reintegrazione obbligatoria nel posto di lavoro e risarcimento fino a 24 mensilità.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_076",
    question: "Quale autorità giudiziaria è competente per le controversie relative al rapporto di lavoro del personale pubblico privatizzato (art. 63 D.Lgs. 165/2001)?",
    options: [
      { id: "A", text: "Il Giudice Ordinario in funzione di Giudice del Lavoro (Tribunale del Lavoro)" },
      { id: "B", text: "Il Tribunale Amministrativo Regionale (TAR)" },
      { id: "C", text: "La Corte dei Conti in sede giurisdizionale" },
      { id: "D", text: "La Corte di Giustizia dell'Unione Europea in unico grado" }
    ],
    correctAnswerId: "A",
    explanation: "Per la totalità del personale contrattualizzato (incluso il personale dell'INPS e dei ministeri), la giurisdizione sulle controversie di lavoro spetta al Tribunale Ordinario in funzione di Giudice del Lavoro.",
    hint: "Giudice Ordinario del Lavoro.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_077",
    question: "In quali materie del rapporto di lavoro pubblico la giurisdizione resta invece devoluta al Giudice Amministrativo (TAR) ai sensi dell'art. 63, comma 4, D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "Le controversie in materia di procedure concorsuali per l'assunzione dei dipendenti delle pubbliche amministrazioni (fino all'approvazione della graduatoria finale)" },
      { id: "B", text: "Le sanzioni disciplinari della sospensione dal servizio" },
      { id: "C", text: "Il pagamento delle ferie arretrate" },
      { id: "D", text: "I permessi studio della legge 104" }
    ],
    correctAnswerId: "A",
    explanation: "Le procedure concorsuali di assunzione attengono all'esercizio di poteri autoritativi pubblicistici e restano radicate dinanzi al TAR fino alla stipula del contratto individuale di lavoro, momento dal quale subentra il Giudice del Lavoro.",
    hint: "Controversie sulle procedure concorsuali di assunzione devolute al TAR.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_078",
    question: "Cos'è l'ARAN (Agenzia per la Rappresentanza Negoziale delle Pubbliche Amministrazioni) ex art. 46 D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "L'organismo tecnico dotato di personalità giuridica di diritto pubblico che ha la rappresentanza legale esclusiva delle pubbliche amministrazioni nella contrattazione collettiva nazionale di comparto" },
      { id: "B", text: "Un'agenzia privata di lavoro interinale" },
      { id: "C", text: "Un comitato sindacale dei lavoratori della scuola" },
      { id: "D", text: "L'ente che gestisce i fondi pensione integrativi dei dirigenti" }
    ],
    correctAnswerId: "A",
    explanation: "L'ARAN rappresenta legalmente tutte le amministrazioni pubbliche nei tavoli negoziali di livello nazionale, stipulando i CCNL di comparto e quadro sulla base degli indirizzi formulati dai Comitati di Settore.",
    hint: "Rappresentanza legale negoziale delle pubbliche amministrazioni nella contrattazione nazionale.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_079",
    question: "Quale criterio di rappresentatività sindacale ammette un'organizzazione sindacale alla contrattazione collettiva nazionale di comparto ai sensi dell'art. 43 del D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "Una rappresentatività non inferiore al 5% calcolata come media tra il dato associativo (percentuale delle deleghe per la trattenuta sindacale) e il dato elettorale (percentuale dei voti ottenuti nelle elezioni delle RSU)" },
      { id: "B", text: "L'iscrizione di almeno il 50% di tutti i dipendenti della Repubblica" },
      { id: "C", text: "La presenza in almeno 20 province italiane" },
      { id: "D", text: "Il riconoscimento con decreto del Capo dello Stato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 43 D.Lgs. 165/2001 fissa la soglia di sbarramento della rappresentatività al 5% come media tra le deleghe sindacali certificate e i voti conseguiti nelle elezioni della Rappresentanza Sindacale Unitaria (RSU).",
    hint: "Soglia del 5% calcolata come media tra dato associativo (deleghe) ed elettorale (voti RSU).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_080",
    question: "Cosa sono le RSU (Rappresentanze Sindacali Unitarie) nel pubblico impiego?",
    options: [
      { id: "A", text: "Organismi sindacali istituiti in ciascun luogo di lavoro con almeno 15 dipendenti, eletti a suffragio universale e segreto da tutti i lavoratori (iscritti e non iscritti al sindacato) con mandato triennale" },
      { id: "B", text: "Commissioni disciplinari nominate dal direttore di sede" },
      { id: "C", text: "Ispettori del Ministero dell'Economia" },
      { id: "D", text: "Uffici dedicati alla distribuzione dei buoni pasto" }
    ],
    correctAnswerId: "A",
    explanation: "Le RSU sono elette direttamente dai dipendenti pubblici ogni tre anni a scrutinio segreto su liste concorrenti, esercitano i diritti sindacali in azienda e partecipano alla contrattazione integrativa d'ufficio/ente.",
    hint: "Elette democraticamente da tutti i lavoratori ogni 3 anni per la contrattazione integrativa.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_081",
    question: "Quale controllo preventivo di compatibilità economica e finanziaria è obbligatorio prima della sottoscrizione definitiva di un Contratto Collettivo Nazionale di Lavoro (CCNL) nel pubblico impiego?",
    options: [
      { id: "A", text: "La certificazione di compatibilità con gli strumenti di programmazione e bilancio resa dalla Corte dei Conti (art. 47 D.Lgs. 165/2001)" },
      { id: "B", text: "L'autorizzazione della Banca Centrale Europea" },
      { id: "C", text: "Un referendum popolare abrogativo preventivo" },
      { id: "D", text: "Il parere conforme dell'Unesco" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 47 D.Lgs. 165/2001 prevede che l'ipotesi di accordo siglata dall'ARAN sia sottoposta al controllo della Corte dei Conti per la certificazione dei costi contrattuali e della loro copertura finanziaria rispetto ai vincoli di bilancio dello Stato.",
    hint: "Certificazione di compatibilità finanziaria della Corte dei Conti ex art. 47 D.Lgs. 165/2001.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_082",
    question: "Cosa sono le 'Progressioni Economiche All'Interno Delle Aree' (c.d. differenziali stipendiali) disciplinate dal CCNL Funzioni Centrali 2019-2021?",
    options: [
      { id: "A", text: "Aumenti stipendiali stabili attribuiti a seguito di selezioni interne basate sulla valutazione positiva della performance individuale degli ultimi tre anni, sull'esperienza maturata e sulle competenze professionali acquisite" },
      { id: "B", text: "Passaggi automatici per pura anzianità senza alcuna valutazione" },
      { id: "C", text: "Gratifiche una tantum erogate a Pasqua" },
      { id: "D", text: "Aumenti concessi a sorteggio tra i dipendenti" }
    ],
    correctAnswerId: "A",
    explanation: "I differenziali stipendiali sostituiscono le vecchie fasce economiche: sono aumenti stabili attribuiti tramite procedura selettiva interna meritocratica (valutazione performance triennale, esperienza professionale, titoli formativi) finanziati dal fondo risorse decentrate.",
    hint: "Differenziali stipendiali attribuiti mediante selezioni meritocratiche basate sulla performance triennale.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_083",
    question: "In cosa differiscono le 'Progressioni Verticali' tra le aree rispetto alle progressioni orizzontali (art. 52, comma 1-bis, D.Lgs. 165/2001)?",
    options: [
      { id: "A", text: "Le progressioni verticali comportano il passaggio alla qualifica o area professionale superiore (es. da Assistente a Funzionario) tramite procedura selettiva comparativa pubblica o con riserva al personale interno nei limiti stabiliti dalla legge" },
      { id: "B", text: "Le progressioni verticali riguardano solo il cambio di ufficio a un piano più alto dell'edificio" },
      { id: "C", text: "Non comportano alcuna variazione di mansioni né di stipendio" },
      { id: "D", text: "Sono vietate tassativamente dalla Costituzione in ogni caso" }
    ],
    correctAnswerId: "A",
    explanation: "Progressione orizzontale = stesso profilo e mansioni, incremento retributivo (differenziale stipendiale). Progressione verticale = passaggio di categoria/area (es. da Assistente a Funzionario), che richiede titolo di studio per l'accesso e procedura selettiva comparativa.",
    hint: "Passaggio all'area superiore (es. da Assistente a Funzionario) mediante selezione comparativa.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_084",
    question: "Cos'è il periodo di prova per i neo-assunti nell'Area dei Funzionari PECS dell'INPS ai sensi del CCNL Funzioni Centrali?",
    options: [
      { id: "A", text: "Un periodo di quattro mesi di effettivo servizio, durante o al termine del quale ciascuna delle parti può recedere dal rapporto senza obbligo di preavviso" },
      { id: "B", text: "Un periodo di due anni non prorogabili" },
      { id: "C", text: "Un mese di corso teorico non retribuito" },
      { id: "D", text: "Non è previsto alcun periodo di prova per i vincitori di concorso pubblico" }
    ],
    correctAnswerId: "A",
    explanation: "Per l'Area dei Funzionari il CCNL Funzioni Centrali fissa la durata del periodo di prova in 4 mesi di effettivo servizio (esclusi congedi o assenze prolungate), decorso il quale il dipendente si intende confermato a tempo indeterminato.",
    hint: "Quattro mesi di effettivo servizio.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_085",
    question: "Quale regime orario ordinario di lavoro è stabilito dal CCNL Comparto Funzioni Centrali per il personale delle aree (compresi i funzionari PECS)?",
    options: [
      { id: "A", text: "36 ore settimanali articolate su 5 o 6 giorni lavorativi" },
      { id: "B", text: "40 ore fisse con orario continuato obbligatorio" },
      { id: "C", text: "48 ore settimanali come nel settore privato industriale" },
      { id: "D", text: "30 ore a scelta libera del dipendente" }
    ],
    correctAnswerId: "A",
    explanation: "L'articolazione standard dell'orario di lavoro nel pubblico impiego statale ed enti pubblici non economici (INPS) è di 36 ore settimanali, con flessibilità in entrata e uscita e fasce di compresenza regolate dalla contrattazione integrativa.",
    hint: "36 ore settimanali ordinarie.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_086",
    question: "Quale tutela economica è prevista durante il congedo di maternità obbligatorio di 5 mesi per le dipendenti pubbliche dell'INPS?",
    options: [
      { id: "A", text: "Intera retribuzione fissa e continuativa al 100% per tutti i cinque mesi di congedo obbligatorio" },
      { id: "B", text: "Solo l'80% della retribuzione come nel settore privato" },
      { id: "C", text: "Un'indennità forfettaria di 500 euro al mese" },
      { id: "D", text: "Nessuna retribuzione ma solo conservazione del posto" }
    ],
    correctAnswerId: "A",
    explanation: "A differenza del regime ordinario privato (dove l'INPS indennizza l'80%), i contratti collettivi del pubblico impiego (CCNL Funzioni Centrali) riconoscono alla lavoratrice pubblica il 100% della retribuzione per l'intero periodo di astensione obbligatoria.",
    hint: "Retribuzione integrale al 100% per i 5 mesi di astensione obbligatoria nel pubblico impiego.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_087",
    question: "A quanti giorni di permesso retribuito annuale per 'motivi personali o familiari' ha diritto il dipendente pubblico ai sensi del CCNL Funzioni Centrali?",
    options: [
      { id: "A", text: "Tre giorni all'anno, fruibili anche su base oraria per un massimo di 18 ore annuali, documentati o autocertificati" },
      { id: "B", text: "Trenta giorni consecutivi" },
      { id: "C", text: "Nessun giorno retribuito, solo permessi non retribuiti" },
      { id: "D", text: "Tre mesi di calendario" }
    ],
    correctAnswerId: "A",
    explanation: "Il CCNL Funzioni Centrali prevede 3 giorni all'anno (ovvero 18 ore complessive frazionabili) di permessi retribuiti per particolari motivi personali o familiari, non soggetti a decurtazione stipendiale.",
    hint: "3 giorni o 18 ore all'anno per motivi personali o familiari.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_088",
    question: "Qual è la disciplina del 'periodo di comporto' per malattia nel CCNL Comparto Funzioni Centrali?",
    options: [
      { id: "A", text: "Diritto alla conservazione del posto per 18 mesi nel triennio, con retribuzione al 100% per i primi 9 mesi, al 90% per i successivi 3 mesi e al 50% per gli ulteriori 6 mesi (con possibilità di ulteriori 18 mesi non retribuiti in casi particolarmente gravi)" },
      { id: "B", text: "Licenziamento immediato dopo 30 giorni consecutivi di assenza" },
      { id: "C", text: "Conservazione del posto per 5 anni con retribuzione al 100%" },
      { id: "D", text: "Retribuzione ridotta al 20% fin dal primo giorno per qualsiasi patologia" }
    ],
    correctAnswerId: "A",
    explanation: "Il periodo di comporto ordinario è di 18 mesi sommando le assenze nel triennio mobile, con retribuzione scalare (100% primi 9 mesi, 90% mesi 10-12, 50% mesi 13-18); superato tale periodo il dipendente può richiedere ulteriori 18 mesi non retribuiti prima del licenziamento per inidoneità.",
    hint: "18 mesi nel triennio con retribuzione scalare (100%, 90%, 50%).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_089",
    question: "In caso di patologie gravi che richiedono terapie salvavita (es. emodialisi, chemioterapia), quale regime si applica alle assenze del dipendente pubblico?",
    options: [
      { id: "A", text: "I giorni di ricovero ospedaliero o di trattamento e i giorni di assenza dovuti agli effetti collaterali certificati sono esclusi dal computo del periodo di comporto e sono retribuiti per intero al 100%" },
      { id: "B", text: "Le assenze sono conteggiate doppiamente nel comporto" },
      { id: "C", text: "Il dipendente viene collocato immediatamente a riposo d'ufficio" },
      { id: "D", text: "La retribuzione viene azzerata fin dal primo giorno" }
    ],
    correctAnswerId: "A",
    explanation: "I CCNL pubblici tutelano specificamente le terapie salvavita: le giornate di somministrazione e quelle di inabilità temporanea da effetti collaterali non intaccano i 18 mesi di comporto e mantengono lo stipendio integrale al 100%.",
    hint: "Esclusione dal periodo di comporto e retribuzione al 100% per terapie salvavita.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_090",
    question: "Cos'è il 'Trattamento di Fine Servizio' (TFS) e a chi si applica nel settore pubblico rispetto al TFR?",
    options: [
      { id: "A", text: "Il regime previdenziale di indennità di buonuscita (IBU) o premio di servizio che si applica ai dipendenti pubblici assunti a tempo indeterminato prima del 1° gennaio 2001, mentre a quelli assunti successivamente si applica il TFR ordinario" },
      { id: "B", text: "Una polizza assicurativa privata facoltativa" },
      { id: "C", text: "Un sussidio di disoccupazione corrisposto solo ai precari" },
      { id: "D", text: "Non vi è alcuna differenza, sono sinonimi procedurali" }
    ],
    correctAnswerId: "A",
    explanation: "I dipendenti pubblici assunti a tempo indeterminato entro il 31/12/2000 ricadono nel regime di TFS (indennità di buonuscita/indennità premio di servizio a calcolo retributivo), mentre gli assunti dal 1/1/2001 ricadono nel regime di TFR ex art. 2120 c.c.",
    hint: "TFS per assunti entro il 31/12/2000, TFR per assunti dal 1° gennaio 2001.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_091",
    question: "In caso di cessazione del rapporto di lavoro per collocamento a riposo di vecchiaia di un dipendente pubblico, quali sono i tempi ordinari di liquidazione della prima tranche del TFS/TFR da parte dell'INPS?",
    options: [
      { id: "A", text: "Non prima di dodici mesi dalla cessazione del servizio (più 90 giorni per gli adempimenti dell'ente)" },
      { id: "B", text: "Entro 24 ore dall'ultimo giorno di lavoro" },
      { id: "C", text: "Subito alla consegna del badge aziendale" },
      { id: "D", text: "Dopo 10 anni solari" }
    ],
    correctAnswerId: "A",
    explanation: "L'erogazione del TFS/TFR pubblico è differita: in caso di vecchiaia decorrono 12 mesi (più 90 giorni di franchigia tecnica), mentre in caso di dimissioni volontarie o pensionamento anticipato il differimento è di 24 mesi (salvo anticipo bancario a tasso agevolato).",
    hint: "Differimento di 12 mesi per vecchiaia (24 mesi per dimissioni/anticipata).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_092",
    question: "Cosa stabilisce l'art. 54 del D.Lgs. 165/2001 in ordine all'efficacia del Codice di Comportamento dei dipendenti pubblici?",
    options: [
      { id: "A", text: "Le disposizioni del Codice di comportamento costituiscono doveri minimi di diligenza, lealtà e imparzialità, e la loro violazione integra fonte di responsabilità disciplinare e rileva ai fini della responsabilità civile, amministrativo-contabile ed etico-professionale" },
      { id: "B", text: "Ha mero valore morale privo di alcuna efficacia disciplinare o giuridica" },
      { id: "C", text: "Si applica solo quando il dipendente si trova fisicamente all'estero" },
      { id: "D", text: "Può essere disapplicato con accordo verbale tra colleghi" }
    ],
    correctAnswerId: "A",
    explanation: "Il Codice di Comportamento non è una guida etica facoltativa, ma un corpo di regole giuridiche cogenti: la violazione dei doveri in esso contenuti dà luogo a sanzione disciplinare espressa e concorre alla valutazione della responsabilità erariale.",
    hint: "Doveri minimi cogenti la cui violazione costituisce illecito disciplinare.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_093",
    question: "Cosa deve fare il dipendente pubblico che riceva un ordine di servizio da un superiore gerarchico che ritenga palesemente illegittimo (art. 17 D.P.R. 3/1957)?",
    options: [
      { id: "A", text: "Farne rimostranza motivata al superiore; se l'ordine è rinnovato per iscritto ha il dovere di eseguirlo, a meno che l'atto non sia vietato dalla legge penale o costituisca illecito amministrativo grave" },
      { id: "B", text: "Eseguirlo immediatamente senza mai sollevare alcuna obiezione" },
      { id: "C", text: "Chiamare la televisione per denunciare il dirigente" },
      { id: "D", text: "Eseguirlo anche se consiste nel commettere un omicidio o una truffa" }
    ],
    correctAnswerId: "A",
    explanation: "Il dovere di rimostranza (art. 17 Statuto impiegati civili) impone al dipendente di segnalare formalmente l'illegittimità. Se l'ordine è reiterato per iscritto deve essere eseguito liberando il dipendente da colpa, a meno che l'atto costituisca reato penale (nel qual caso permane il dovere assoluto di rifiuto).",
    hint: "Dovere di rimostranza motivata: esecuzione solo se ribadito per iscritto, salvo costituisca reato.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_094",
    question: "Quale responsabilità patrimoniale grava sul dipendente pubblico per i danni cagionati a terzi nell'esercizio delle sue funzioni (art. 28 Costituzione)?",
    options: [
      { id: "A", text: "Risponde direttamente per i fatti commessi con dolo o colpa grave; l'amministrazione risponde in solido con il dipendente verso il terzo danneggiato, salvo diritto di rivalsa dell'amministrazione dinanzi alla Corte dei Conti per danno erariale indiretto" },
      { id: "B", text: "Risponde solo il Presidente della Repubblica in via personale" },
      { id: "C", text: "Il dipendente pubblico non è mai responsabile verso i cittadini" },
      { id: "D", text: "La responsabilità grava sul comune di nascita del dipendente" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 28 Cost. sancisce la responsabilità diretta dei funzionari e dipendenti per atti compiuti in violazione di diritti; il terzo può agire contro la PA e il dipendente, e l'amministrazione condannata si rivale sul dipendente dinanzi alla Corte dei Conti per dolo o colpa grave.",
    hint: "Responsabilità solidale della PA con rivalsa erariale sul dipendente per dolo o colpa grave.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_095",
    question: "Cos'è la 'Responsabilità Dirigenziale' disciplinata dall'art. 21 del D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "Una specifica responsabilità legata al mancato raggiungimento degli obiettivi assegnati nel piano della performance o all'inosservanza delle direttive dell'organo di governo, che comporta l'impossibilità di rinnovo dell'incarico, la revoca anticipata o il recesso dal rapporto nei casi più gravi" },
      { id: "B", text: "Una multa fissa mensile pagata da tutti i dirigenti" },
      { id: "C", text: "La responsabilità penale per i reati commessi dai singoli cittadini" },
      { id: "D", text: "L'obbligo di guidare personalmente i pulmini aziendali" }
    ],
    correctAnswerId: "A",
    explanation: "La responsabilità dirigenziale sanziona il fallimento gestionale: mancato raggiungimento degli obiettivi di performance o grave inosservanza delle direttive impartite, comportando la perdita della retribuzione di risultato, la revoca dell'incarico o la retrocessione.",
    hint: "Responsabilità per mancato raggiungimento degli obiettivi o violazione delle direttive.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_096",
    question: "Quale organo consultivo e di garanzia interviene prima dell'adozione dei provvedimenti di revoca dell'incarico dirigenziale per responsabilità dirigenziale?",
    options: [
      { id: "A", text: "Il Comitato dei Garanti (art. 22 D.Lgs. 165/2001)" },
      { id: "B", text: "La Consulta Regionale degli Ordini Professionali" },
      { id: "C", text: "Il Consiglio di Quartiere" },
      { id: "D", text: "Il collegio dei periti agrari" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 22 D.Lgs. 165/2001 istituisce il Comitato dei Garanti (composto da magistrati, dirigenti ed esperti), il cui parere conforme è obbligatorio prima che l'amministrazione adotti misure sanzionatorie di revoca per responsabilità dirigenziale.",
    hint: "Comitato dei Garanti ex art. 22 D.Lgs. 165/2001.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_PUB_097",
    question: "In materia di pari opportunità e benessere organizzativo, cosa istituisce obbligatoriamente ciascuna pubblica amministrazione ai sensi dell'art. 57 del D.Lgs. 165/2001?",
    options: [
      { id: "A", text: "Il Comitato Unico di Garanzia per le pari opportunità, la valorizzazione del benessere di chi lavora e contro le discriminazioni (CUG)" },
      { id: "B", text: "Il circolo del bridge per i dirigenti anziani" },
      { id: "C", text: "L'ufficio acquisti dei regali aziendali" },
      { id: "D", text: "Una commissione speciale per la censura della posta privata" }
    ],
    correctAnswerId: "A",
    explanation: "Il CUG (Comitato Unico di Garanzia) unifica le competenze dei vecchi comitati per le pari opportunità e contro il mobbing: ha composizione paritetica (amministrazione e sindacati) e promuove azioni positive per il benessere e contro le discriminazioni sul lavoro.",
    hint: "Comitato Unico di Garanzia (CUG) per le pari opportunità e il benessere organizzativo.",
    level: "base"
  },
  {
    id: "Q_DIR_PUB_098",
    question: "Cos'è il 'Fondo Risorse Decentrate' (FRD) nell'INPS e negli enti del Comparto Funzioni Centrali?",
    options: [
      { id: "A", text: "Il fondo annuale alimentato dalle risorse contrattuali destinato a finanziare la retribuzione accessoria di produttività, i differenziali stipendiali e le indennità di turno, reperibilità e specifiche responsabilità del personale non dirigente" },
      { id: "B", text: "Il conto dedicato alle spese di rappresentanza diplomatica" },
      { id: "C", text: "Un fondo azionario quotato alla Borsa di New York" },
      { id: "D", text: "La riserva per i rimborsi benzina dei ministri" }
    ],
    correctAnswerId: "A",
    explanation: "Il Fondo Risorse Decentrate è la provvista finanziaria contrattuale gestita a livello di ente per remunerare il merito, i progetti speciali, la produttività collettiva e individuale e i trattamenti accessori stabiliti dalla contrattazione integrativa.",
    hint: "Fondo per finanziare la produttività, i differenziali stipendiali e le indennità accessorie del personale.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_099",
    question: "Quale regime si applica alle ferie non godute del dipendente pubblico alla data di cessazione del rapporto di lavoro (art. 5, comma 8, D.L. 95/2012 conv. in L. 135/2012)?",
    options: [
      { id: "A", text: "Le ferie devono essere obbligatoriamente fruite e non possono dar luogo in nessun caso a trattamenti economici sostitutivi (divieto generale di monetizzazione), salvo eccezioni tassative incolpevoli individuate dalla giurisprudenza europea (es. morte, malattia prolungata impeditiva fino a cessazione)" },
      { id: "B", text: "Vengono sempre liquidate in contanti nell'ultima busta paga a semplice richiesta" },
      { id: "C", text: "Possono essere donate a colleghi di altri ministeri" },
      { id: "D", text: "Vengono trasformate in buoni acquisto benzina" }
    ],
    correctAnswerId: "A",
    explanation: "La spending review (D.L. 95/2012) ha imposto il divieto inderogabile di monetizzazione delle ferie per i dipendenti pubblici, mitigato dalla Corte di Giustizia UE e Corte Costituzionale solo nelle eccezionali ipotesi in cui il mancato godimento dipenda da cause non imputabili al lavoratore (malattia invalidante fino al recesso, decesso).",
    hint: "Divieto inderogabile di monetizzazione salvo casi eccezionali e incolpevoli (malattia, decesso).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_PUB_100",
    question: "A chi compete la gestione del 'Fascicolo Elettronico del Dipendente' e dell'anagrafe delle prestazioni nella Pubblica Amministrazione?",
    options: [
      { id: "A", text: "Alla Direzione Risorse Umane di ciascuna amministrazione, con obbligo di alimentazione delle banche dati e comunicazione periodica degli incarichi autorizzati al Dipartimento della Funzione Pubblica tramite il sistema 'PerlaPA'" },
      { id: "B", text: "Alla stazione dei Carabinieri del comune di residenza" },
      { id: "C", text: "A una società privata con sede all'estero" },
      { id: "D", text: "Ai singoli impiegati che lo conservano a casa propria" }
    ],
    correctAnswerId: "A",
    explanation: "La gestione del capitale umano nella PA è digitalizzata: il fascicolo del personale è telematico e l'anagrafe delle prestazioni (art. 53 D.Lgs. 165/2001) viene obbligatoriamente alimentata dall'ente attraverso l'applicativo PerlaPA della Funzione Pubblica per garantire la totale trasparenza degli incarichi conferiti.",
    hint: "Direzione Risorse Umane con alimentazione dell'applicativo PerlaPA della Funzione Pubblica.",
    level: "base"
  }
];

const merged = [...existing, ...newQuestions];
fs.writeFileSync(targetFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`Successfully added ${newQuestions.length} questions to pubblico_impiego.json. Total questions: ${merged.length}`);
