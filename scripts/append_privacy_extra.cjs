const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: 'Q_DIR_PRIV_051',
    question: "Ai sensi dell'art. 6 del GDPR e dell'art. 2-ter del D.Lgs. 196/2003 (Codice Privacy novellato), quale tra le seguenti costituisce la base giuridica ordinaria per il trattamento di dati personali effettuato da una pubblica amministrazione come l'INPS?",
    options: [
      { id: 'A', text: "L'adempimento di un obbligo legale o l'esecuzione di un compito di interesse pubblico o connesso all'esercizio di pubblici poteri." },
      { id: 'B', text: "Il preventivo ed espresso consenso informato e per iscritto manifestato dal cittadino/utente interessato." },
      { id: 'C', text: "Il perseguimento del legittimo interesse del titolare del trattamento o di terzi, previa valutazione comparativa." },
      { id: 'D', text: "La stipulazione di una transazione privatistica o accordo procedimentale tra l'amministrazione e l'interessato." }
    ],
    correctAnswerId: 'A',
    explanation: "Ai sensi dell'art. 6, par. 1, lett. c) ed e) del GDPR e dell'art. 2-ter del Codice Privacy, il trattamento di dati personali da parte di una PA è lecito solo se necessario per adempiere un obbligo legale o per l'esecuzione di un compito di interesse pubblico. Il consenso non è generalmente base idonea per la PA a causa dello squilibrio di potere tra cittadino e autorità.",
    hint: "La PA agisce in base alla legge per scopi istituzionali, non fonda i propri trattamenti ordinari sul consenso.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_052',
    question: "Ai sensi dell'art. 9 del GDPR, il trattamento di categorie particolari di dati personali (quali dati sanitari o sindacali) da parte dell'INPS per finalità previdenziali è consentito:",
    options: [
      { id: 'A', text: "Quando è necessario per assolvere gli obblighi ed esercitare i diritti specifici in materia di diritto del lavoro, sicurezza sociale e protezione sociale, o per motivi di interesse pubblico rilevante." },
      { id: 'B', text: "Esclusivamente dietro autorizzazione singola e preventiva rilasciata volta per volta dal Garante per la Privacy." },
      { id: 'C', text: "Solo se l'interessato presta consenso esplicito e revocabile in ogni momento senza conseguenze sulle prestazioni erogabili." },
      { id: 'D', text: "Unicamente qualora i dati siano stati precedentemente e irreversibilmente anonimizzati prima di qualsiasi utilizzo." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 9, par. 2, lett. b) e g) del GDPR ammette il trattamento di dati particolari (es. sanitari per invalidità civile) se necessario in materia di sicurezza e protezione sociale, oppure per motivi di interesse pubblico rilevante sulla base del diritto dell'Unione o degli Stati membri (art. 2-sexies Codice Privacy).",
    hint: "La sicurezza sociale e la protezione sociale costituiscono eccezioni esplicite al divieto generale di trattamento dei dati particolari.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_053',
    question: "Cosa prevede il principio di \"Accountability\" (Responsabilizzazione) sancito dall'art. 5, paragrafo 2, del GDPR?",
    options: [
      { id: 'A', text: "Il titolare del trattamento è competente per il rispetto dei principi di protezione dei dati e deve essere in grado di comprovarlo documentalmente." },
      { id: 'B', text: "Il responsabile della protezione dei dati (DPO) assume la responsabilità civile e penale personale per qualsiasi violazione dei dati." },
      { id: 'C', text: "Ogni dipendente pubblico risponde direttamente e patrimonialmente in solido con il Garante per i trattamenti non conformi." },
      { id: 'D', text: "La pubblica amministrazione è esentata dalla rendicontazione delle misure di sicurezza se adotta software certificati AgID." }
    ],
    correctAnswerId: 'A',
    explanation: "Il principio di accountability impone che il titolare (es. l'Ente previdenziale) non solo rispetti i principi di liceità, correttezza, trasparenza, minimizzazione, esattezza, limitazione della conservazione e integrità/riservatezza, ma sia in grado di dimostrare l'adozione di misure tecniche e organizzative adeguate.",
    hint: "Responsabilizzazione significa conformità sostanziale e capacità di comprovarla.",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_054',
    question: "Ai sensi dell'art. 25 del GDPR, in cosa consiste il principio di protezione dei dati \"fin dalla progettazione\" (Data Protection by Design)?",
    options: [
      { id: 'A', text: "Nell'integrazione di misure tecniche e organizzative adeguate (es. pseudonimizzazione, minimizzazione) fin dal momento della determinazione dei mezzi di trattamento e prima dell'inizio del trattamento stesso." },
      { id: 'B', text: "Nell'obbligo di sottoporre ogni software della PA alla previa validazione e firma digitale del Presidente dell'Autorità Garante." },
      { id: 'C', text: "Nel divieto assoluto di modificare la struttura delle banche dati pubbliche dopo il loro rilascio in esercizio." },
      { id: 'D', text: "Nell'adozione esclusiva di formati di dati aperti e non proprietari nei sistemi informatici gestionali." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 25, par. 1, GDPR prevede che il titolare, sia al momento di determinare i mezzi del trattamento sia all'atto del trattamento stesso, metta in atto misure tecniche e organizzative adeguate volte ad attuare efficacemente i principi di protezione dei dati (privacy by design).",
    hint: "La tutela della riservatezza deve essere concepita prima dell'inizio del trattamento, non aggiunta successivamente.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_055',
    question: "Ai sensi dell'art. 25, paragrafo 2, del GDPR, il principio di protezione dei dati \"per impostazione predefinita\" (Data Protection by Default) impone che:",
    options: [
      { id: 'A', text: "Siano trattati, per impostazione predefinita, solo i dati personali necessari per ciascuna specifica finalità del trattamento, limitandone quantità, periodo di conservazione e accessibilità." },
      { id: 'B', text: "Tutti i dati personali raccolti debbano essere automaticamente cancellati dopo 30 giorni dalla conclusione dell'istruttoria." },
      { id: 'C', text: "I dati debbano essere accessibili di default a qualsiasi dipendente dell'amministrazione dotato di SPID di livello 3." },
      { id: 'D', text: "Ogni impostazione di privacy debba poter essere modificata esclusivamente tramite istanza formale al Garante." }
    ],
    correctAnswerId: 'A',
    explanation: "La privacy by default garantisce che, senza l'intervento attivo dell'interessato, i sistemi siano configurati per raccogliere e trattare unicamente i dati strettamente necessari per volume, periodo di conservazione e sfera di accessibilità.",
    hint: "Minimizzazione automatica: raccogliere e rendere visibile solo lo stretto necessario senza azioni manuali dell'utente.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_056',
    question: "La designazione del Responsabile della Protezione dei Dati (DPO / RPD), ai sensi dell'art. 37 del GDPR, è:",
    options: [
      { id: 'A', text: "Sempre obbligatoria quando il trattamento è effettuato da un'autorità pubblica o da un organismo pubblico, come l'INPS." },
      { id: 'B', text: "Facoltativa per le pubbliche amministrazioni, divenendo obbligatoria solo se occupano oltre 500 dipendenti." },
      { id: 'C', text: "Obbligatoria solo per le imprese private quotate in borsa o appartenenti al settore bancario e assicurativo." },
      { id: 'D', text: "Rimessa alla discrezionalità insindacabile dell'organo di indirizzo politico dell'ente pubblico." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 37, par. 1, lett. a) del GDPR dispone che la nomina del DPO/RPD è sempre obbligatoria se il trattamento è eseguito da un'autorità pubblica o da un organismo pubblico (eccettuate le autorità giurisdizionali nell'esercizio delle loro funzioni).",
    hint: "Per tutte le pubbliche amministrazioni il DPO è una figura obbligatoria per legge.",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_057',
    question: "Ai sensi dell'art. 38 del GDPR, quale posizione ricopre il Responsabile della Protezione dei Dati (DPO) all'interno dell'organizzazione del titolare del trattamento?",
    options: [
      { id: 'A', text: "Agisce in piena indipendenza, non riceve alcuna istruzione sull'esecuzione dei suoi compiti e riferisce direttamente al vertice gerarchico del titolare." },
      { id: 'B', text: "È gerarchicamente subordinato al Responsabile dei Sistemi Informativi (CIO) e deve seguirne le direttive operative." },
      { id: 'C', text: "È un consulente privo di qualsiasi potere di interlocuzione diretta con l'Autorità Garante per la Privacy." },
      { id: 'D', text: "Risponde disciplinarmente delle sanzioni pecuniarie comminate dal Garante all'ente di appartenenza." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 38, par. 3, del GDPR stabilisce che il RPD non deve ricevere istruzioni per quanto riguarda l'esecuzione dei compiti assegnati, non può essere rimosso o penalizzato per l'adempimento delle sue funzioni e riferisce direttamente al vertice del titolare.",
    hint: "Il DPO gode di autonomia, indipendenza e contatto diretto con il vertice.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_058',
    question: "Quale delle seguenti funzioni è tipicamente incompatibile con il ruolo di Responsabile della Protezione dei Dati (DPO) per conflitto di interessi?",
    options: [
      { id: 'A', text: "Responsabile della Direzione Sistemi Informativi e Tecnologici (CIO) o Responsabile delle Risorse Umane (HR)." },
      { id: 'B', text: "Docente universitario o esperto giuridico esterno incaricato di sola formazione specialistica in materia di privacy." },
      { id: 'C', text: "Funzionario dell'ufficio relazioni con il pubblico con compiti meramente esecutivi di protocollazione." },
      { id: 'D', text: "Membro aggregato privo di diritto di voto nella commissione per la digitalizzazione degli atti." }
    ],
    correctAnswerId: 'A',
    explanation: "Il DPO non può determinare le finalità e i mezzi del trattamento dei dati. Figure apicali quali il responsabile IT, HR o marketing determinano finalità e mezzi dei trattamenti, trovandosi in palese conflitto di interessi (Linee Guida WP243 del Comitato Europeo).",
    hint: "Chi decide 'come e perché' trattare i dati (IT, HR) non può controllare se stesso.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_059',
    question: "Ai sensi dell'art. 28 del GDPR, quali requisiti formali deve possedere il rapporto tra il titolare del trattamento (es. INPS) e un fornitore esterno che tratta dati per suo conto (Responsabile del trattamento)?",
    options: [
      { id: 'A', text: "Deve essere disciplinato da un contratto o altro atto giuridico vincolante per iscritto, che stabilisca analiticamente materia, durata, natura, finalità, tipo di dati e obblighi di sicurezza." },
      { id: 'B', text: "È sufficiente uno scambio di comunicazioni via PEC con tacita accettazione delle condizioni generali di fornitura." },
      { id: 'C', text: "Non è richiesto alcun atto formale se il fornitore è una società a totale partecipazione pubblica (in-house)." },
      { id: 'D', text: "Richiede esclusivamente l'iscrizione del fornitore nell'albo dei fornitori certificati dell'Agenzia per l'Italia Digitale." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 28, par. 3, GDPR impone che il trattamento da parte di un responsabile sia regolato da un contratto o altro atto giuridico vincolante per iscritto a norma di legge che vincoli il responsabile al titolare e ne fissi analiticamente istruzioni e obblighi.",
    hint: "Occorre un contratto formale scritto conforme a tutte le prescrizioni dell'art. 28.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_060',
    question: "Qual è il termine perentorio stabilito dall'art. 33 del GDPR affinché il titolare del trattamento notifichi una violazione dei dati personali (Data Breach) al Garante, qualora vi sia un rischio per i diritti e le libertà?",
    options: [
      { id: 'A', text: "Entro 72 ore dal momento in cui ne è venuto a conoscenza, senza ingiustificato ritardo." },
      { id: 'B', text: "Entro 30 giorni lavorativi dall'avvenuta completa rimozione della falla di sicurezza informatica." },
      { id: 'C', text: "Entro 24 ore lavorative dal momento in cui il Responsabile IT redige la relazione peritale giurata." },
      { id: 'D', text: "Entro 15 giorni solari dalla notifica ricevuta dal fornitore dell'infrastruttura cloud." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 33, par. 1, GDPR stabilisce che, in caso di data breach, il titolare notifica la violazione all'autorità di controllo competente senza ingiustificato ritardo e, ove fattibile, entro 72 ore dal momento in cui ne è venuto a conoscenza.",
    hint: "La regola aurea di notifica al Garante è 72 ore.",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_061',
    question: "Ai sensi dell'art. 34 del GDPR, quando il titolare del trattamento è tenuto a comunicare la violazione dei dati personali anche ai singoli interessati (es. assicurati/pensionati coinvolti)?",
    options: [
      { id: 'A', text: "Quando la violazione dei dati personali è suscettibile di presentare un rischio elevato per i diritti e le libertà delle persone fisiche." },
      { id: 'B', text: "Sempre, per qualsiasi tipologia di violazione informatica, anche in caso di cifratura integra dei dati violati." },
      { id: 'C', text: "Solamente quando vi sia stata una specifica richiesta formale pervenuta da almeno cento interessati." },
      { id: 'D', text: "Esclusivamente quando la violazione comporta una perdita economica diretta e quantificabile superiore a 10.000 euro." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 34, par. 1, GDPR prescrive che, quando la violazione presenta un 'rischio elevato' per i diritti e le libertà, il titolare la comunica all'interessato senza ingiustificato ritardo, a meno che non ricorrano le condizioni di esenzione (es. dati cifrati inaccessibili).",
    hint: "La notifica al Garante richiede 'rischio', la comunicazione all'interessato richiede 'rischio elevato'.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_062',
    question: "In quale dei seguenti casi il titolare è esonerato dalla comunicazione del data breach all'interessato ex art. 34, par. 3, del GDPR?",
    options: [
      { id: 'A', text: "Se ha applicato ai dati oggetto della violazione misure tecniche di protezione adeguate (come la cifratura) che li rendono inintelligibili a chiunque non sia autorizzato ad accedervi." },
      { id: 'B', text: "Se l'interessato ha un'età superiore a 67 anni o è titolare di una pensione minima di vecchiaia." },
      { id: 'C', text: "Se la violazione è stata causata da un fornitore con sede legale all'interno di un Paese membro dell'OCSE." },
      { id: 'D', text: "Se la pubblica amministrazione dichiara che la notizia provocherebbe allarme sociale e danno reputazionale." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 34, par. 3, lett. a) GDPR esenta dalla comunicazione all'interessato se il titolare ha applicato misure tecniche e organizzative adeguate (segnatamente la cifratura) che rendono i dati inintelligibili ai soggetti non autorizzati.",
    hint: "La cifratura preventiva ad alto standard protegge il dato e neutralizza il rischio per l'interessato.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_063',
    question: "Ai sensi dell'art. 30 del GDPR, la tenuta del Registro delle attività di trattamento è obbligatoria per un ente pubblico come l'INPS?",
    options: [
      { id: 'A', text: "Sì, è obbligatoria per tutte le pubbliche amministrazioni e organismi pubblici, indipendentemente dal numero di dipendenti." },
      { id: 'B', text: "No, le amministrazioni pubbliche godono di esenzione generale in virtù del principio di continuità amministrativa." },
      { id: 'C', text: "Sì, ma solo per i trattamenti che comportano transazioni finanziarie verso l'estero." },
      { id: 'D', text: "È obbligatoria solo su ordine specifico notificato dal Garante per la Privacy a seguito di ispezione." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 30 del GDPR obbliga le autorità pubbliche e gli organismi pubblici alla tenuta del Registro dei trattamenti (sia in qualità di titolare sia di responsabile). La deroga per le PMI sotto i 250 dipendenti non si applica comunque alle PA né a chi tratta dati particolari.",
    hint: "Tutte le PA hanno l'obbligo perentorio di tenere e aggiornare il Registro dei trattamenti.",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_064',
    question: "Cosa deve contenere, tra l'altro, il Registro delle attività di trattamento del titolare ai sensi dell'art. 30, par. 1, del GDPR?",
    options: [
      { id: 'A', text: "Finalità del trattamento, categorie di interessati e di dati, destinatari, eventuali trasferimenti verso paesi terzi, termini di cancellazione e descrizione generale delle misure di sicurezza." },
      { id: 'B', text: "Il codice fiscale di tutti gli utenti registrati sul portale istituzionale dell'amministrazione." },
      { id: 'C', text: "L'elenco nominativo delle sanzioni disciplinari comminate ai dipendenti per infrazioni relative al regolamento d'ufficio." },
      { id: 'D', text: "Il bilancio preventivo e consuntivo delle spese sostenute per l'adeguamento dell'infrastruttura di rete aziendale." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 30 GDPR specifica i contenuti obbligatori del Registro del titolare: dati di contatto, finalità, categorie di interessati e dati, categorie di destinatari, trasferimenti verso paesi terzi con adeguate garanzie, termini ultimi per la cancellazione e sintesi delle misure di sicurezza ex art. 32.",
    hint: "È la mappa d'insieme di chi, cosa, perché, dove e per quanto tempo si trattano i dati personali.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_065',
    question: "Ai sensi dell'art. 35 del GDPR, quando è obbligatorio procedere a una Valutazione d'Impatto sulla Protezione dei Dati (DPIA)?",
    options: [
      { id: 'A', text: "Quando un tipo di trattamento, specie se prevede l'uso di nuove tecnologie, può presentare un rischio elevato per i diritti e le libertà delle persone fisiche." },
      { id: 'B', text: "Per qualsiasi operazione di trattamento, inclusa la gestione ordinaria dell'archivio cartaceo delle ferie del personale." },
      { id: 'C', text: "Soltanto ed esclusivamente in caso di procedimenti penali a carico di dirigenti dell'ente." },
      { id: 'D', text: "Unicamente qualora i dati personali siano acquistati da banche dati private a titolo oneroso." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 35, par. 1, GDPR prevede l'obbligo di DPIA quando un trattamento, allorché prevede l'uso di nuove tecnologie, considerati la natura, l'oggetto, il contesto e le finalità, può presentare un rischio elevato per i diritti e le libertà.",
    hint: "La DPIA è richiesta per trattamenti innovativi o ad alto rischio (es. algoritmi, profilazione su larga scala, dati sanitari).",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_066',
    question: "In quale dei seguenti casi l'art. 35, par. 3, del GDPR stabilisce esplicitamente l'obbligo di effettuare una DPIA?",
    options: [
      { id: 'A', text: "Trattamento su larga scala di categorie particolari di dati (art. 9) o di dati relativi a condanne penali e reati (art. 10)." },
      { id: 'B', text: "Trattamento dei dati anagrafici dei soli dipendenti per l'elaborazione del cedolino dello stipendio." },
      { id: 'C', text: "Pubblicazione di una delibera dell'ente sull'albo pretorio in formato PDF aperto." },
      { id: 'D', text: "Invio di newsletter istituzionali a utenti che abbiano liberamente registrato la propria email." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 35, par. 3, individua casi obbligatori: a) valutazione sistematica e globale basata su trattamento automatizzato/profilazione con effetti giuridici; b) trattamento su larga scala di dati particolari o giudiziari; c) sorveglianza sistematica su larga scala di zona accessibile al pubblico.",
    hint: "Larga scala + dati particolari/giudiziari = DPIA sempre obbligatoria.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_067',
    question: "Ai sensi dell'art. 36 del GDPR, qualora dalla valutazione di impatto (DPIA) emerga che il trattamento presenterebbe un rischio elevato che il titolare non può mitigare con misure ragionevoli, il titolare deve:",
    options: [
      { id: 'A', text: "Consultare l'autorità di controllo (Garante per la protezione dei dati personali) prima di procedere al trattamento." },
      { id: 'B', text: "Procedere comunque al trattamento notificando la circostanza agli utenti entro 180 giorni solari." },
      { id: 'C', text: "Sospendere a tempo indeterminato qualsiasi attività dell'ufficio e commissariare la direzione centrale." },
      { id: 'D', text: "Richiedere un parere vincolante alla Corte dei Conti in ordine alla sostenibilità economica dei rischi." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 36 GDPR disciplina la 'consultazione preventiva': prima di iniziare il trattamento, il titolare consulta l'autorità di controllo qualora la DPIA indichi che il trattamento presenterebbe un rischio elevato in assenza di misure adottate dal titolare per attenuare il rischio.",
    hint: "Se il rischio residuo rimane elevato, la legge impone la consultazione preventiva del Garante.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_068',
    question: "Ai sensi dell'art. 17 del GDPR, il \"diritto alla cancellazione\" (diritto all'oblio) può essere esercitato dall'assicurato nei confronti dell'INPS per ottenere la cancellazione della propria posizione contributiva?",
    options: [
      { id: 'A', text: "No, poiché il diritto alla cancellazione è escluso quando il trattamento è necessario per l'adempimento di un obbligo legale o per l'esecuzione di un compito svolto nel pubblico interesse o nell'esercizio di pubblici poteri." },
      { id: 'B', text: "Sì, il diritto all'oblio è un diritto soggettivo assoluto e incondizionato che prevale su ogni legge statale." },
      { id: 'C', text: "Sì, ma solo subordinatamente al pagamento di un contributo per i diritti di cancellazione d'archivio." },
      { id: 'D', text: "Sì, purché l'interessato rinunci formalmente al diritto a percepire qualsiasi futura prestazione pensionistica." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 17, par. 3, lett. b) del GDPR esclude espressamente il diritto alla cancellazione quando il trattamento è necessario per l'adempimento di un obbligo legale previsto dal diritto dell'UE o dello Stato membro cui è soggetto il titolare, o per l'esecuzione di un compito di pubblico interesse o nell'esercizio di pubblici poteri.",
    hint: "La previdenza obbligatoria risponde a un obbligo di legge inderogabile: i contributi non si cancellano a richiesta.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_069',
    question: "Ai sensi dell'art. 20 del GDPR, il diritto alla \"portabilità dei dati\" si applica ai trattamenti effettuati dall'INPS per lo svolgimento delle sue funzioni istituzionali?",
    options: [
      { id: 'A', text: "No, l'art. 20, par. 3, stabilisce espressamente che il diritto alla portabilità non si applica al trattamento necessario per l'esecuzione di un compito di interesse pubblico o connesso all'esercizio di pubblici poteri." },
      { id: 'B', text: "Sì, ogni cittadino ha il diritto di trasferire i propri dati previdenziali su una piattaforma privata di cloud a sua scelta." },
      { id: 'C', text: "Sì, purché i dati siano trasferiti esclusivamente verso un altro ente di previdenza con sede nell'Unione Europea." },
      { id: 'D', text: "Sì, ma solo con il rilascio di un token crittografico validato dall'Agenzia per la Cybersicurezza Nazionale (ACN)." }
    ],
    correctAnswerId: 'A',
    explanation: "Ai sensi dell'art. 20, par. 3, del GDPR, il diritto alla portabilità dei dati si applica solo quando la base giuridica è il consenso o il contratto, e non si applica al trattamento necessario per l'esecuzione di un compito di interesse pubblico o connesso a pubblici poteri.",
    hint: "La portabilità non si applica ai compiti di interesse pubblico della PA.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_070',
    question: "Ai sensi dell'art. 22 del GDPR e dei consolidati orientamenti della giurisprudenza amministrativa (Consiglio di Stato), qual è la regola per le decisioni amministrative basate su algoritmi e processi decisionali automatizzati nella PA?",
    options: [
      { id: 'A', text: "L'algoritmo può essere utilizzato ma devono essere garantiti i principi di trasparenza/conoscibilità della logica algoritmica, non discriminazione e riserva di intervento umano (la decisione finale non può essere totalmente de-umanizzata se produce effetti sfavorevoli)." },
      { id: 'B', text: "L'uso di algoritmi nei procedimenti amministrativi della PA è tassativamente vietato dall'ordinamento giuridico italiano ed europeo." },
      { id: 'C', text: "L'algoritmo ha valore di atto amministrativo fidefacente e insindacabile, non assoggettabile a impugnazione innanzi al TAR." },
      { id: 'D', text: "Il codice sorgente dell'algoritmo costituisce segreto di Stato e non può in alcun caso essere divulgato o spiegato agli interessati." }
    ],
    correctAnswerId: 'A',
    explanation: "Il Consiglio di Stato (es. sentt. 2270/2019 e 8472/2019) ha affermato che l'uso dell'algoritmo nella PA è ammissibile a condizione che siano rispettati: piena conoscibilità e trasparenza della formula, non discriminazione algoritmica e principio di non esclusività della decisione algoritmica (supervisione umana significativa ex art. 22 GDPR).",
    hint: "Trasparenza algoritmica e intervento umano sono capisaldi dello stato di diritto e del GDPR.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_071',
    question: "Ai sensi dell'art. 12 del GDPR, entro quale termine il titolare del trattamento deve fornire all'interessato le informazioni relative all'azione intrapresa riguardo a una richiesta di esercizio dei diritti (es. accesso, rettifica)?",
    options: [
      { id: 'A', text: "Al più tardi entro un mese dal ricevimento della richiesta, prorogabile di due mesi se necessario per la complessità." },
      { id: 'B', text: "Entro e non oltre 24 ore dalla protocollazione dell'istanza da parte dell'ufficio competente." },
      { id: 'C', text: "Entro il termine perentorio di 120 giorni stabilito dalla legge generale sul procedimento amministrativo (L. 241/90)." },
      { id: 'D', text: "Entro un anno solare, previa comunicazione interlocutoria da trasmettere entro il primo semestre." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 12, par. 3, GDPR prevede che il titolare fornisca le informazioni senza ingiustificato ritardo e comunque al più tardi entro un mese dal ricevimento. Tale termine può essere prorogato di due mesi se necessario, tenuto conto della complessità e del numero delle richieste.",
    hint: "Regola generale del GDPR per le risposte alle istanze: 1 mese (prorogabile di altri 2 mesi).",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_072',
    question: "Qualora il titolare del trattamento decida di non ottemperare alla richiesta dell'interessato (es. negando la cancellazione di dati), cosa deve fare ai sensi dell'art. 12, par. 4, del GDPR?",
    options: [
      { id: 'A', text: "Informare l'interessato senza ritardo, e al più tardi entro un mese, dei motivi dell'inottemperanza e della possibilità di proporre reclamo al Garante o ricorso giurisdizionale." },
      { id: 'B', text: "Applicare la regola del silenzio-assenso decorsi 30 giorni dalla mancata risposta formale." },
      { id: 'C', text: "Trasmettere gli atti alla Procura della Repubblica competente per territorio." },
      { id: 'D', text: "Richiedere un indennizzo forfettario per spese amministrative di rigetto istanza." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 12, par. 4, del GDPR impone al titolare che non ottemperi di informare l'interessato entro un mese dei motivi del diniego e dell'avviso che può proporre reclamo a un'autorità di controllo e proporre ricorso giurisdizionale.",
    hint: "Obbligo di motivazione entro 1 mese e avviso dei mezzi di tutela (reclamo al Garante o ricorso al giudice).",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_073',
    question: "Qual è la composizione dell'Autorità Garante per la protezione dei dati personali ai sensi dell'art. 153 del Codice Privacy (D.Lgs. 196/2003)?",
    options: [
      { id: 'A', text: "È un organo collegiale composto da quattro membri, eletti due dalla Camera dei deputati e due dal Senato della Repubblica." },
      { id: 'B', text: "È un organo monocratico nominato con decreto del Presidente della Repubblica su proposta del Ministro della Giustizia." },
      { id: 'C', text: "È composto da sette magistrati designati a rotazione dal Consiglio Superiore della Magistratura." },
      { id: 'D', text: "È un comitato direttivo composto dai Direttori Generali di INPS, INAIL, Agenzia delle Entrate e AgID." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 153 del Codice Privacy stabilisce che il Collegio del Garante è composto da quattro membri, eletti per metà dalla Camera dei deputati e per metà dal Senato della Repubblica tra personalità che assicurano indipendenza e comprovata competenza.",
    hint: "4 membri parlamentari (2 Camera, 2 Senato).",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_074',
    question: "Quanto dura il mandato dei componenti dell'Autorità Garante per la protezione dei dati personali e quale regime di rieleggibilità si applica?",
    options: [
      { id: 'A', text: "Dura sette anni e non possono essere rinnovati." },
      { id: 'B', text: "Dura cinque anni ed è rinnovabile una sola volta consecutiva." },
      { id: 'C', text: "Dura tre anni rinnovabile per un massimo di tre mandati." },
      { id: 'D', text: "Dura a vita, salvo decadenza per incompatibilità o revoca motivata del Parlamento." }
    ],
    correctAnswerId: 'A',
    explanation: "I membri del Garante durano in carica sette anni e non possono essere confermati (mandato settennale non rinnovabile), a garanzia della loro assoluta indipendenza e autonomia.",
    hint: "7 anni, mandato non rinnovabile (come i giudici della Corte Costituzionale ne durano 9, il Garante ne dura 7).",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_075',
    question: "Ai sensi dell'art. 77 del GDPR, chiunque ritenga che il trattamento dei dati personali che lo riguarda sia stato effettuato in violazione del regolamento ha il diritto di proporre:",
    options: [
      { id: 'A', text: "Reclamo a un'autorità di controllo, segnatamente nello Stato membro in cui risiede abitualmente, lavora oppure del luogo ove si è verificata la presunta violazione." },
      { id: 'B', text: "Esclusivamente ricorso straordinario al Presidente della Repubblica previo versamento del contributo unificato." },
      { id: 'C', text: "Denuncia querela inderogabilmente entro 48 ore dalla scoperta del fatto presso il comando Carabinieri competente." },
      { id: 'D', text: "Interpello vincolante alla Corte di Giustizia dell'Unione Europea in via incidentale diretta." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 77 GDPR riconosce a ogni interessato il diritto di proporre reclamo all'autorità di controllo (in Italia, il Garante Privacy). Tale diritto non pregiudica altri ricorsi amministrativi o giurisdizionali (art. 78 e 79 GDPR).",
    hint: "Il rimedio amministrativo tipico e diretto è il reclamo all'autorità di controllo (Garante).",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_076',
    question: "Ai sensi dell'art. 79 del GDPR e dell'art. 152 del Codice Privacy, il ricorso giurisdizionale contro i provvedimenti del Garante Privacy si propone innanzi:",
    options: [
      { id: 'A', text: "Al Tribunale ordinario del luogo in cui ha la residenza o la sede il titolare del trattamento, con rito ordinario/semplificato di cognizione." },
      { id: 'B', text: "Esclusivamente al TAR del Lazio in sede giurisdizionale esclusiva a pena di nullità." },
      { id: 'C', text: "Alla Corte d'Appello - Sezione Lavoro e Previdenza Sociale in unico grado." },
      { id: 'D', text: "Al Consiglio di Stato in adunanza plenaria previo parere della Corte dei Conti." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 152 del D.Lgs. 196/2003 (e art. 10 D.Lgs. 150/2011) devolve le controversie contro i provvedimenti del Garante (o per violazione delle norme privacy) alla giurisdizione del giudice ordinario (Tribunale ordinario civile).",
    hint: "Le opposizioni ai provvedimenti del Garante Privacy vanno al giudice ordinario civile (Tribunale), non al TAR.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_077',
    question: "Ai sensi dell'art. 2-quaterdecies del D.Lgs. 196/2003, come sono qualificati i dipendenti o collaboratori interni che trattano dati sotto l'autorità diretta del titolare (INPS)?",
    options: [
      { id: 'A', text: "Soggetti designati ed espressamente autorizzati al trattamento dei dati personali, che operano sotto l'autorità diretta del titolare conformemente alle istruzioni ricevute." },
      { id: 'B', text: "Contitolari del trattamento dotati di autonoma soggettività giuridica e responsabilità civile illimitata." },
      { id: 'C', text: "Responsabili esterni del trattamento obbligati alla stipula di apposito contratto d'appalto di servizi." },
      { id: 'D', text: "Ufficiali ausiliari di polizia giudiziaria con compiti di indagine cibernetica preventiva." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 2-quaterdecies del Codice Privacy disciplina le 'persone autorizzate al trattamento': il titolare o il responsabile può prevedere che specifici compiti e funzioni siano attribuiti a persone fisiche espressamente designate, che operano sotto la loro autorità diretta.",
    hint: "Sono le persone fisiche dipendenti/autorizzate dal titolare che operano secondo istruzioni impartite.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_078',
    question: "Ai sensi dell'art. 4, punto 5), del GDPR, cosa si intende per \"pseudonimizzazione\"?",
    options: [
      { id: 'A', text: "Il trattamento dei dati personali in modo tale che non possano più essere attribuiti a un interessato specifico senza l'utilizzo di informazioni aggiuntive, a condizione che queste siano conservate separatamente." },
      { id: 'B', text: "L'eliminazione totale e irreversibile di qualsiasi legame con il soggetto, rendendo il dato non più qualificabile come dato personale." },
      { id: 'C', text: "La crittografia asimmetrica applicata esclusivamente alle comunicazioni tra dirigenti generali della pubblica amministrazione." },
      { id: 'D', text: "L'omissione dell'indirizzo di residenza anagrafica negli atti pubblicati sull'Albo Pretorio on-line." }
    ],
    correctAnswerId: 'A',
    explanation: "La pseudonimizzazione separa i dati identificativi dalle informazioni sostanziali tramite chiavi/codici conservati a parte con misure tecniche. A differenza dell'anonimizzazione irreversibile, i dati pseudonimizzati restano dati personali tutelati dal GDPR.",
    hint: "Dati disaccoppiati ma ricollegabili con una chiave separata; restano comunque dati personali.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_079',
    question: "I dati resi anonimi (anonimizzazione irreversibile) ricadono nell'ambito di applicazione materiale del GDPR?",
    options: [
      { id: 'A', text: "No, i principi di protezione dei dati non si applicano a informazioni anonime, vale a dire informazioni che non si riferiscono a una persona fisica identificata o identificabile." },
      { id: 'B', text: "Sì, a qualsiasi dato numerico o statistico si applica l'intera disciplina del GDPR senza eccezione." },
      { id: 'C', text: "Sì, ma solo se l'insieme anonimo comprende un numero di record superiore a 10.000 unità." },
      { id: 'D', text: "No, ad eccezione del caso in cui i dati siano conservati all'interno di datacenter pubblici dell'Unione." }
    ],
    correctAnswerId: 'A',
    explanation: "Il Considerando 26 del GDPR chiarisce che i principi di protezione dei dati non si applicano alle informazioni anonime, ossia dati che non si riferiscono a una persona fisica identificata o identificabile o a dati resi sufficientemente anonimi da non consentire l'identificazione.",
    hint: "Il dato veramente anonimo esce dal campo di applicazione del GDPR.",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_080',
    question: "Ai sensi dell'art. 83 del GDPR e dell'art. 166 del Codice Privacy, quale disciplina si applica per le sanzioni amministrative pecuniarie comminate a una pubblica amministrazione come l'INPS?",
    options: [
      { id: 'A', text: "Le sanzioni pecuniarie possono essere applicate anche alle PA, ma i proventi sono versati a un apposito capitolo dell'entrata del bilancio dello Stato e i limiti massimi previsti dal GDPR si applicano con specifici criteri di graduazione." },
      { id: 'B', text: "Le pubbliche amministrazioni sono per legge totalmente immuni da qualsiasi tipologia di sanzione pecuniaria comminata dal Garante." },
      { id: 'C', text: "Il Garante può infliggere alle PA esclusivamente sanzioni disciplinari a carico del vertice politico." },
      { id: 'D', text: "Le sanzioni sono automaticamente decurtate dal gettito fiscale regionale dell'anno successivo." }
    ],
    correctAnswerId: 'A',
    explanation: "L'Italia non ha introdotto un'esenzione per le PA (come consentito in via opzionale dall'art. 83, par. 7 GDPR). L'art. 166 del Codice Privacy prevede che le sanzioni pecuniarie siano applicabili anche alle PA e ne disciplina l'applicazione e la destinazione dei proventi.",
    hint: "In Italia le PA sono soggette a sanzioni pecuniarie del Garante Privacy.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_081',
    question: "Qual è il limite massimo edittale per le sanzioni amministrative pecuniarie previste dall'art. 83, paragrafo 5, del GDPR per le violazioni più gravi (es. principi di base, diritti dell'interessato, trasferimenti internazionali)?",
    options: [
      { id: 'A', text: "Fino a 20.000.000 di euro o, per le imprese, fino al 4% del fatturato mondiale totale annuo dell'esercizio precedente, se superiore." },
      { id: 'B', text: "Fino a 10.000.000 di euro o, per le imprese, fino al 2% del fatturato mondiale totale annuo." },
      { id: 'C', text: "Fino a 50.000.000 di euro per qualsiasi soggetto pubblico o privato senza distinzione." },
      { id: 'D', text: "Fino a un massimo simbolico di 500.000 euro per tutte le istituzioni comunitarie e nazionali." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 83, par. 5, del GDPR fissa per le violazioni più gravi (violazione dei principi base ex artt. 5, 6, 7, 9; diritti degli interessati artt. 12-22; trasferimenti esteri artt. 44-49) sanzioni fino a 20 milioni di euro o al 4% del fatturato mondiale.",
    hint: "Livello massimo: 20 milioni o 4% di fatturato. (Il livello minore è 10 milioni o 2%).",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_082',
    question: "Ai sensi dell'art. 167 del D.Lgs. 196/2003 (Codice Privacy novellato), il reato di \"Trattamento illecito di dati\" si perfeziona:",
    options: [
      { id: 'A', text: "Quando il fatto è commesso al fine di trarre per sé o per altri profitto ovvero di arrecare un danno, e dal fatto deriva effettivo nocumento all'interessato." },
      { id: 'B', text: "Per la semplice negligenza o colpa lieve nell'archiviazione di una pratica di pensione." },
      { id: 'C', text: "Solo se la condotta è commessa da pubblici ufficiali in servizio presso le cancellerie giudiziarie." },
      { id: 'D', text: "Indipendentemente da qualsiasi dolo specifico o nocumento, per la mera violazione formale del registro." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 167 Codice Privacy punisce chiunque, al fine di trarre per sé o per altri profitto ovvero di arrecare danno ad altri, procede al trattamento illecito, se dal fatto deriva nocumento (dolo specifico + elemento costitutivo del nocumento).",
    hint: "Dolo specifico (fine di profitto o di recare danno) + effettivo nocumento.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_083',
    question: "Cosa punisce l'art. 167-bis del Codice Privacy introdotto dal D.Lgs. 101/2018?",
    options: [
      { id: 'A', text: "La comunicazione e diffusione illecita di dati personali riferibili a un numero elevato di persone, commessa a fini di profitto o per arrecare danno, da cui derivi nocumento." },
      { id: 'B', text: "La mancata nomina del DPO all'interno di un comune con popolazione superiore a 5.000 abitanti." },
      { id: 'C', text: "L'omesso aggiornamento semestrale della password di accesso al sistema operativo Windows." },
      { id: 'D', text: "La cancellazione colposa di una copia di backup conservata su nastro magnetico." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 167-bis sanziona penalmente la comunicazione e diffusione su larga scala (riferibili a un numero elevato di persone) di archivi o banche dati personali in violazione delle disposizioni richiamate, con fine di profitto o danno e derivato nocumento.",
    hint: "Art. 167-bis riguarda archivi massivi o dati riferibili a un numero elevato di persone.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_084',
    question: "Ai sensi dell'art. 44 del GDPR, il trasferimento di dati personali verso un Paese terzo o un'organizzazione internazionale può avvenire:",
    options: [
      { id: 'A', text: "Solo se il Paese terzo garantisce un livello di protezione adeguato (decisione di adeguatezza della Commissione UE) o in presenza di garanzie adeguate (clausole tipo, norme vincolanti d'impresa)." },
      { id: 'B', text: "Liberamente, senza alcuna restrizione o controllo da parte delle istituzioni comunitarie." },
      { id: 'C', text: "Esclusivamente dietro stipula di un trattato bilaterale di pace ratificato dal Parlamento nazionale." },
      { id: 'D', text: "Solo se i dati sono stati stampati su supporto cartaceo e spediti a mezzo valigia diplomatica." }
    ],
    correctAnswerId: 'A',
    explanation: "Il capo V del GDPR (artt. 44-50) regola i trasferimenti internazionali: la base preferenziale è la decisione di adeguatezza della Commissione UE (art. 45), seguita da garanzie adeguate (art. 46, es. Clausole Contrattuali Tipo - SCC) o deroghe specifiche (art. 49).",
    hint: "Decisione di adeguatezza o garanzie adeguate (come le Clausole Tipo) per trasferire dati extra-UE.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_085',
    question: "Qual è l'attuale quadro giuridico che disciplina i trasferimenti commerciali di dati personali dall'UE verso gli Stati Uniti, a seguito della decisione di adeguatezza della Commissione europea del luglio 2023?",
    options: [
      { id: 'A', text: "L'EU-US Data Privacy Framework (DPF)." },
      { id: 'B', text: "Il Safe Harbor Agreement." },
      { id: 'C', text: "Il Privacy Shield 1.0 (sentenza Schrems II)." },
      { id: 'D', text: "L'Accordo Transatlantico di Bretton Woods per la Privacy Digitale." }
    ],
    correctAnswerId: 'A',
    explanation: "Dopo l'annullamento del Safe Harbor (Schrems I) e del Privacy Shield (Schrems II), la Commissione UE ha adottato il 10 luglio 2023 la decisione di adeguatezza per l'EU-US Data Privacy Framework (DPF).",
    hint: "Il nuovo accordo UE-USA approvato a luglio 2023 si chiama EU-US Data Privacy Framework.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_086',
    question: "Ai sensi dell'art. 13 e 14 del GDPR, quali informazioni devono essere fornite all'interessato nell'informativa privacy da parte dell'amministrazione?",
    options: [
      { id: 'A', text: "Identità e dati di contatto del titolare e del DPO, finalità e base giuridica del trattamento, destinatari, periodo di conservazione e diritti dell'interessato." },
      { id: 'B', text: "Solo l'indirizzo della sede legale dell'amministrazione e l'orario di apertura degli sportelli al pubblico." },
      { id: 'C', text: "L'elenco nominativo con matricola di tutti i programmatori che hanno compilato il codice sorgente dell'applicativo." },
      { id: 'D', text: "Le specifiche hardware dei server e le chiavi crittografiche private utilizzate per la firma dei documenti." }
    ],
    correctAnswerId: 'A',
    explanation: "Gli artt. 13 (raccolta presso l'interessato) e 14 (raccolta non presso l'interessato) fissano gli elementi essenziali dell'informativa: titolare, DPO, finalità, basi giuridiche, destinatari, trasferimenti extra-UE, tempo di conservazione, diritti, reclamo al Garante, eventuale profilazione.",
    hint: "L'informativa deve spiegare con chiarezza e trasparenza chi tratta i dati, perché, per quanto tempo e quali diritti spettano all'utente.",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_087',
    question: "Ai sensi dell'art. 15 del GDPR, il diritto di accesso dell'interessato conferisce il diritto di:",
    options: [
      { id: 'A', text: "Ottenere dal titolare la conferma che sia o meno in corso un trattamento di dati personali che lo riguardano e, in tal caso, di ottenere l'accesso ai dati e a tutte le relative informazioni sul trattamento." },
      { id: 'B', text: "Modificare unilateralmente a proprio piacimento l'ammontare dei contributi figurativi versati." },
      { id: 'C', text: "Accedere liberamente a tutte le caselle di posta elettronica istituzionali dei dirigenti dell'ente." },
      { id: 'D', text: "Pretendere la consegna materiale degli hard disk su cui sono memorizzati i dati dell'archivio storico." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 15 garantisce il diritto di accesso: sapere se vi è un trattamento in corso, ottenere copia dei dati trattati e informazioni su finalità, categorie, destinatari, conservazione e diritti.",
    hint: "Accesso = conferma del trattamento + copia dei propri dati + informazioni su modalità e finalità.",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_088',
    question: "Ai sensi dell'art. 16 del GDPR, il diritto di rettifica consente all'interessato di ottenere:",
    options: [
      { id: 'A', text: "La rettifica dei dati personali inesatti che lo riguardano senza ingiustificato ritardo e l'integrazione dei dati incompleti." },
      { id: 'B', text: "L'annullamento retroattivo di sanzioni amministrative o contributive legittimamente irrogate." },
      { id: 'C', text: "La sostituzione del proprio codice fiscale con un identificativo numerico anonimo di fantasia." },
      { id: 'D', text: "L'attribuzione d'ufficio di una qualifica superiore nei ruoli organici della funzione pubblica." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 16 GDPR sancisce che l'interessato ha il diritto di ottenere dal titolare del trattamento la rettifica dei dati personali inesatti che lo riguardano senza ingiustificato ritardo, nonché l'integrazione dei dati personali incompleti.",
    hint: "Rettifica = correzione dei dati inesatti e integrazione di quelli incompleti.",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_089',
    question: "Ai sensi dell'art. 18 del GDPR, in quali circostanze l'interessato ha il diritto di ottenere dal titolare la \"limitazione del trattamento\"?",
    options: [
      { id: 'A', text: "Quando contesta l'esattezza dei dati (per il periodo necessario alla verifica), se il trattamento è illecito ma si oppone alla cancellazione, o se i dati gli servono per l'accertamento di un diritto in sede giudiziaria." },
      { id: 'B', text: "In qualsiasi momento senza alcuna motivazione o circostanza oggettiva verificabile." },
      { id: 'C', text: "Solo qualora l'interessato abbia formalmente depositato ricorso per fallimento personale." },
      { id: 'D', text: "Esclusivamente durante il periodo di ferie estive dei dipendenti dell'amministrazione erogatrice." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 18 GDPR elenca i casi tassativi di limitazione: contestazione dell'esattezza dei dati; trattamento illecito con preferenza per la limitazione anziché la cancellazione; utilità per l'interessato in giudizio benché non più utili al titolare; pendenza di opposizione ex art. 21.",
    hint: "Limitazione = congelamento temporaneo dell'uso dei dati in pendenza di accertamenti o verifiche.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_090',
    question: "Qual è l'effetto pratico della limitazione del trattamento disposta ai sensi dell'art. 18, paragrafo 2, del GDPR?",
    options: [
      { id: 'A', text: "Tali dati personali possono essere trattati, salvo che per la semplice conservazione, solo con il consenso dell'interessato o per l'accertamento di diritti in sede giudiziaria o per motivi di interesse pubblico rilevante." },
      { id: 'B', text: "I dati vengono distrutti fisicamente mediante sovrascrittura a basso livello dei supporti di memorizzazione." },
      { id: 'C', text: "I dati vengono trasferiti d'ufficio alla banca dati centrale dell'Interpol." },
      { id: 'D', text: "I dati possono continuare a essere utilizzati liberamente per elaborazioni statistiche e profilazione." }
    ],
    correctAnswerId: 'A',
    explanation: "Se il trattamento è limitato, i dati possono essere solo conservati, e trattati in altro modo solo con il consenso dell'interessato o per tutelare diritti in sede giudiziaria o per tutelare i diritti di altra persona fisica/giuridica o per motivi di interesse pubblico rilevante.",
    hint: "I dati restano conservati ('congelati') ma non possono essere utilizzati altrimenti senza consenso o eccezioni di legge.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_091',
    question: "Ai sensi dell'art. 21 del GDPR, in merito al diritto di opposizione, cosa accade se l'interessato si oppone al trattamento svolto dalla PA per l'esecuzione di un compito di interesse pubblico?",
    options: [
      { id: 'A', text: "Il titolare si astiene dal trattare ulteriormente i dati salvo che dimostri l'esistenza di motivi legittimi cogenti per procedere al trattamento che prevalgono sugli interessi dell'interessato, oppure per l'accertamento di un diritto in sede giudiziaria." },
      { id: 'B', text: "Il trattamento cessa immediatamente e categoricamente senza alcuna possibilità per l'ente di motivare la prosecuzione." },
      { id: 'C', text: "L'opposizione decade automaticamente trascorsi 10 giorni dalla sua presentazione senza bisogno di riscontro." },
      { id: 'D', text: "La pubblica amministrazione è autorizzata a sospendere l'erogazione dello stipendio o della pensione all'interessato." }
    ],
    correctAnswerId: 'A',
    explanation: "Art. 21, par. 1: l'interessato ha il diritto di opporsi in qualsiasi momento per motivi connessi alla sua situazione particolare. Il titolare si astiene dal trattare ulteriormente i dati salvo che dimostri motivi legittimi cogenti prevalenti.",
    hint: "La PA può superare l'opposizione solo dimostrando motivi legittimi cogenti e prevalenti.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_092',
    question: "In tema di videosorveglianza sui luoghi di lavoro presso le sedi territoriali dell'INPS, quale rapporto sussiste tra il GDPR e l'art. 4 della Legge 300/1970 (Statuto dei Lavoratori)?",
    options: [
      { id: 'A', text: "Gli impianti di videosorveglianza dai quali derivi la possibilità di controllo a distanza dei lavoratori possono essere installati esclusivamente previo accordo con le RSA/RSU o autorizzazione dell'Ispettorato del Lavoro, nel rispetto dei principi di proporzionalità e minimizzazione del GDPR." },
      { id: 'B', text: "Il GDPR ha implicitamente abrogato l'art. 4 dello Statuto dei Lavoratori, consentendo la videosorveglianza libera in virtù dell'accountability." },
      { id: 'C', text: "La videosorveglianza è sempre vietata all'interno di qualsiasi ufficio pubblico, anche se adibito a caveau o sportello bancario." },
      { id: 'D', text: "È sufficiente il consenso scritto della maggioranza assoluta dei dipendenti dell'ufficio interessato." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 114 del Codice Privacy e l'art. 88 del GDPR richiamano e mantengono fermo l'art. 4 dello Statuto dei Lavoratori (novellato dal Jobs Act): telecamere ammesse solo per esigenze organizzative, produttive, sicurezza o tutela patrimonio, previo accordo sindacale o autorizzazione ITL, rispettando sempre i principi privacy.",
    hint: "Doppio binario: rispetto dell'art. 4 Statuto Lavoratori (accordo sindacale o autorizzazione ITL) + principi GDPR.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_093',
    question: "Ai sensi dell'art. 2-sexies del Codice Privacy (D.Lgs. 196/2003 novellato dal D.Lgs. 101/2018), il trattamento delle categorie particolari di dati personali da parte di soggetti pubblici per motivi di interesse pubblico rilevante è consentito:",
    options: [
      { id: 'A', text: "Solo se previsto dal diritto dell'Unione Europea ovvero da una disposizione di legge o di regolamento che specifichi i tipi di dati trattabili, le operazioni eseguibili e il motivo di interesse pubblico." },
      { id: 'B', text: "In qualunque ipotesi ritenuta opportuna dal dirigente dell'ufficio territoriale competente mediante ordine di servizio." },
      { id: 'C', text: "Esclusivamente qualora i dati personali siano consultabili liberamente su internet da qualsiasi cittadino." },
      { id: 'D', text: "Solo qualora intervenga un'ordinanza contingibile e urgente del Prefetto della Provincia." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 2-sexies stabilisce che i trattamenti di dati particolari per motivi di interesse pubblico rilevante (art. 9, par. 2, lett. g) GDPR) sono ammessi solo se previsti da norme di legge o regolamento che specifichino finalità, tipi di dati e misure appropriate di tutela.",
    hint: "Principio di legalità: occorre una specifica fonte normativa primaria o secondaria regolamentare.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_094',
    question: "Cosa dispone l'art. 2-octies del Codice Privacy in merito al trattamento dei dati giudiziari (relativi a condanne penali e reati) di cui all'art. 10 del GDPR?",
    options: [
      { id: 'A', text: "È consentito solo se autorizzato da espressa disposizione di legge o di regolamento che preveda garanzie appropriate per i diritti e le libertà degli interessati." },
      { id: 'B', text: "È rimesso al libero accordo contrattuale stipulato con i sindacati maggiormente rappresentativi." },
      { id: 'C', text: "È vietato in modo assoluto e inderogabile a qualsiasi pubblica amministrazione civile non giudiziaria." },
      { id: 'D', text: "È permesso solo a condizione che l'interessato rinunci espressamente all'assistenza di un difensore legale." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 10 GDPR e l'art. 2-octies Codice Privacy ammettono il trattamento di dati giudiziari sotto il controllo dell'autorità pubblica o se autorizzato da disposizioni di legge o di regolamento che prevedano garanzie adeguate.",
    hint: "Dati giudiziari ammessi solo se disciplinati espressamente da legge o regolamento con adeguate tutele.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_095',
    question: "Ai sensi dell'art. 26 del GDPR, quando due o più titolari del trattamento determinano congiuntamente le finalità e i mezzi del trattamento (es. INPS e Ministero del Lavoro su banche dati condivise), essi sono definiti:",
    options: [
      { id: 'A', text: "Contitolari del trattamento, e determinano le rispettive responsabilità mediante un accordo interno trasparente." },
      { id: 'B', text: "Responsabile primario e sub-responsabile esecutivo privi di vincoli reciproci." },
      { id: 'C', text: "Titolare delegante e fiduciario esecutore testamentario dei diritti." },
      { id: 'D', text: "Coppia funzionale asimmetrica sottoposta a tutela prefettizia obbligatoria." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 26 GDPR disciplina la contitolarità: due o più titolari determinano congiuntamente finalità e mezzi, definendo le rispettive responsabilità nell'osservanza del regolamento tramite un accordo interno, il cui contenuto essenziale è messo a disposizione dell'interessato.",
    hint: "Contitolarità = determinazione congiunta di finalità e mezzi + accordo interno trasparente.",
    level: "base"
  },
  {
    id: 'Q_DIR_PRIV_096',
    question: "Nel caso di contitolarità del trattamento ex art. 26 del GDPR, l'interessato nei confronti di chi può esercitare i propri diritti?",
    options: [
      { id: 'A', text: "Può esercitare i propri diritti nei confronti di e contro ciascun contitolare del trattamento, a prescindere dalle clausole dell'accordo interno tra essi stipulato." },
      { id: 'B', text: "Solo ed esclusivamente nei confronti del contitolare avente sede legale in Roma." },
      { id: 'C', text: "Soltanto nei confronti del contitolare designato nell'accordo come unico punto di contatto, senza poter agire contro l'altro." },
      { id: 'D', text: "Esclusivamente convenendo entrambi i contitolari contemporaneamente davanti alla Corte Suprema di Cassazione." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 26, par. 3, del GDPR stabilisce a massima tutela del cittadino che, a prescindere dalle disposizioni dell'accordo interno, l'interessato può esercitare i propri diritti nei confronti di e contro ciascun contitolare del trattamento.",
    hint: "Massima tutela dell'interessato: può rivolgersi indifferentemente a ciascuno dei contitolari.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_097',
    question: "Ai sensi dell'art. 32 del GDPR sulla sicurezza del trattamento, il titolare e il responsabile mettono in atto misure tecniche e organizzative adeguate per garantire un livello di sicurezza adeguato al rischio, tenendo conto:",
    options: [
      { id: 'A', text: "Dello stato dell'arte e dei costi di attuazione, nonché della natura, dell'oggetto, del contesto e delle finalità del trattamento, come anche del rischio di varia probabilità e gravità per i diritti e le libertà." },
      { id: 'B', text: "Esclusivamente del prezzo di acquisto di licenze software commerciali fornite da vendor internazionali convenzionati." },
      { id: 'C', text: "Solamente delle indicazioni generiche fornite verbalmente nel corso delle riunioni sindacali periodiche." },
      { id: 'D', text: "Unicamente della presenza o assenza di virus informatici rilevati nel corso dell'ultimo anno solare." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 32 GDPR adotta un approccio basato sul rischio: le misure (cifratura, resilienza, ripristino tempestivo, test periodici) devono essere adeguate tenuto conto di stato dell'arte, costi di attuazione, natura, contesto e probabilità/gravità dei rischi.",
    hint: "Approccio basato sul rischio (Risk-based approach): stato dell'arte, costi, contesto e gravità del rischio.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_098',
    question: "Cosa prevede l'art. 32, par. 1, lett. d) del GDPR come misura di sicurezza obbligatoria?",
    options: [
      { id: 'A', text: "Una procedura per testare, verificare e valutare regolarmente l'efficacia delle misure tecniche e organizzative al fine di garantire la sicurezza del trattamento." },
      { id: 'B', text: "L'obbligo di disconnettere tutti i terminali dalla rete internet al termine di ogni turno lavorativo." },
      { id: 'C', text: "La distruzione fisica di tutti i server dell'amministrazione ogni cinque anni solari." },
      { id: 'D', text: "L'installazione obbligatoria di almeno tre differenti programmi antivirus sul medesimo computer." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 32, par. 1, lett. d) richiede una procedura per testare, verificare e valutare periodicamente l'efficacia delle misure tecniche e organizzative adottate (vulnerability assessment, penetration test, controlli di conformità).",
    hint: "Test e verifiche periodiche sull'efficacia delle difese e delle misure tecniche.",
    level: "intermedio"
  },
  {
    id: 'Q_DIR_PRIV_099',
    question: "Ai sensi dell'art. 168 del Codice Privacy, quale condotta integra il reato di \"Falsità nelle dichiarazioni al Garante o interruzione dell'esecuzione dei compiti o dell'esercizio dei poteri del Garante\"?",
    options: [
      { id: 'A', text: "Chiunque, in un procedimento o nel corso di accertamenti dinanzi al Garante, dichiara o attesta falsamente notizie o circostanze o produce atti o documenti falsi, ovvero cagiona un'interruzione dei compiti del Garante." },
      { id: 'B', text: "L'omessa risposta a una semplice email informativa inviata dal servizio newsletter dell'ente." },
      { id: 'C', text: "Il mero ritardo incolpevole nella consegna di una memoria dovuto a sciopero dei servizi postali." },
      { id: 'D', text: "L'impugnazione di una delibera del Garante innanzi al Tribunale ordinario nei termini di legge." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 168 del D.Lgs. 196/2003 sanziona con la reclusione chiunque dichiari il falso o esibisca atti contraffatti dinanzi al Garante Privacy o ne ostacoli/interrompa l'attività ispettiva e i poteri istituzionali.",
    hint: "Dichiarare il falso al Garante o bloccare le sue ispezioni costituisce reato penale punito con la reclusione.",
    level: "avanzato"
  },
  {
    id: 'Q_DIR_PRIV_100',
    question: "In merito all'accesso civico generalizzato (FOIA, art. 5, comma 2, D.Lgs. 33/2013) e alla tutela dei dati personali, quale limite esclude o differisce l'ostensione dei documenti da parte dell'amministrazione?",
    options: [
      { id: 'A', text: "L'accesso è rifiutato se il diniego è necessario per evitare un pregiudizio concreto alla tutela della protezione dei dati personali, in conformità con la disciplina legislativa in materia (art. 5-bis, comma 2, lett. a)." },
      { id: 'B', text: "La presenza di qualsiasi dato personale nei documenti comporta sempre l'obbligo inderogabile di secretare l'intero fascicolo." },
      { id: 'C', text: "L'accesso civico prevale in ogni caso sulla privacy, per cui tutti i dati anagrafici e patrimoniali devono essere ostesi senza oscuramento." },
      { id: 'D', text: "Il rifiuto può essere opposto solo se il richiedente non dimostra un interesse diretto, concreto e attuale alla consultazione." }
    ],
    correctAnswerId: 'A',
    explanation: "L'art. 5-bis, comma 2, lett. a) del D.Lgs. 33/2013 stabilisce che l'accesso civico generalizzato è rifiutato se ciò è necessario per evitare un pregiudizio concreto alla protezione dei dati personali (Linee guida ANAC n. 1309/2016 e Garante Privacy: obbligo di sentire i controinteressati ed eventuale mascheramento/omissis).",
    hint: "Il bilanciamento FOIA-Privacy tutela il dato personale se la divulgazione reca pregiudizio concreto.",
    level: "avanzato"
  }
];

const filePath = path.join(__dirname, '../public/db/master_bank/diritto/privacy_gdpr.json');
const bank = JSON.parse(fs.readFileSync(filePath, 'utf8'));

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
console.log('Successfully updated privacy_gdpr.json! Total:', bank.length, 'Counts:', counts);
