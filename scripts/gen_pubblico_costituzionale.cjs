const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: "Q_PUB_COST_001",
    question: "In base all'articolo 1 della Costituzione italiana, a chi appartiene la sovranità?",
    options: [
      { id: "A", text: "Al popolo, che la esercita nelle forme e nei limiti della Costituzione" },
      { id: "B", text: "Al Parlamento, quale organo rappresentativo supremo" },
      { id: "C", text: "Al Presidente della Repubblica, garante dell'unità nazionale" },
      { id: "D", text: "Allo Stato-persona, dotato di personalità giuridica originaria" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 1, secondo comma, Cost. dispone: 'La sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione'.",
    hint: "La sovranità è popolare ma non illimitata, essendo vincolata alle norme costituzionali.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_002",
    question: "Quale principio fondamentale è sancito dall'art. 3, secondo comma, della Costituzione italiana?",
    options: [
      { id: "A", text: "Il principio di eguaglianza formale" },
      { id: "B", text: "Il principio di eguaglianza sostanziale" },
      { id: "C", text: "Il principio lavorista" },
      { id: "D", text: "Il principio pacifista" }
    ],
    correctAnswerId: "B",
    explanation: "L'art. 3, comma 2, Cost. introduce il principio di eguaglianza sostanziale, impegnando la Repubblica a rimuovere gli ostacoli di ordine economico e sociale che limitano la libertà e l'eguaglianza.",
    hint: "Impegna la Repubblica ad una condotta attiva per rimuovere gli ostacoli socio-economici.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_003",
    question: "Quali principi regolano l'organizzazione dei pubblici uffici ai sensi dell'art. 97 della Costituzione?",
    options: [
      { id: "A", text: "Buon andamento e imparzialità dell'amministrazione" },
      { id: "B", text: "Segretezza e gerarchia assoluta" },
      { id: "C", text: "Celerità a discapito della motivazione degli atti" },
      { id: "D", text: "Autonomia politica e discrezionalità insindacabile" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 97, comma 2, Cost. stabilisce che i pubblici uffici sono organizzati secondo disposizioni di legge, in modo che siano assicurati il buon andamento e l'imparzialità dell'amministrazione.",
    hint: "Sono i due cardini cardine dell'azione e dell'organizzazione amministrativa italiana.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_004",
    question: "In quale caso il Governo può adottare provvedimenti provvisori con forza di legge (decreti-legge) ai sensi dell'art. 77 Cost.?",
    options: [
      { id: "A", text: "In casi straordinari di necessità e d'urgenza" },
      { id: "B", text: "Previa legge di delegazione approvata dalle Camere" },
      { id: "C", text: "Ogni qualvolta vi sia una crisi di Governo imminente" },
      { id: "D", text: "Esclusivamente su richiesta motivata del Presidente della Repubblica" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 77, comma 2, Cost., il Governo può adottare decreti-legge sotto la sua responsabilità solo in casi straordinari di necessità e d'urgenza.",
    hint: "Necessità e urgenza straordinarie sono i requisiti di validità costituzionale del decreto-legge.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_005",
    question: "Entro quanti giorni dalla pubblicazione un decreto-legge perde efficacia sin dall'inizio se non viene convertito in legge?",
    options: [
      { id: "A", text: "30 giorni" },
      { id: "B", text: "60 giorni" },
      { id: "C", text: "90 giorni" },
      { id: "D", text: "120 giorni" }
    ],
    correctAnswerId: "B",
    explanation: "L'art. 77, comma 3, Cost. prevede che i decreti perdono efficacia sin dall'inizio, se non sono convertiti in legge entro sessanta giorni dalla loro pubblicazione.",
    hint: "Il termine di decadenza retroattiva è di due mesi.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_006",
    question: "Quale organo costituzionale delibera lo stato di guerra e conferisce al Governo i poteri necessari?",
    options: [
      { id: "A", text: "Le Camere del Parlamento" },
      { id: "B", text: "Il Presidente della Repubblica" },
      { id: "C", text: "Il Consiglio Supremo di Difesa" },
      { id: "D", text: "La Corte Costituzionale" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 78 Cost., le Camere deliberano lo stato di guerra e conferiscono al Governo i poteri necessari. Il Presidente della Repubblica dichiara poi lo stato di guerra deliberato dalle Camere (art. 87).",
    hint: "La delibera spetta al Parlamento; la formale dichiarazione spetta al Capo dello Stato.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_007",
    question: "Qual è il quorum necessario per l'approvazione di una legge costituzionale in prima deliberazione da parte di ciascuna Camera?",
    options: [
      { id: "A", text: "Maggioranza semplice (maggioranza dei presenti)" },
      { id: "B", text: "Maggioranza assoluta dei componenti" },
      { id: "C", text: "Maggioranza dei due terzi dei componenti" },
      { id: "D", text: "Unanimità dei votanti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 138 Cost. richiede per le leggi di revisione costituzionale due successive deliberazioni ad intervallo non minore di tre mesi: nella prima deliberazione è sufficiente la maggioranza semplice dei presenti.",
    hint: "Nella prima deliberazione si applicano le regole ordinarie di voto delle Camere.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_008",
    question: "Quando non è ammesso il referendum confermativo per una legge di revisione costituzionale ex art. 138 Cost.?",
    options: [
      { id: "A", text: "Se nella seconda votazione la legge è stata approvata a maggioranza dei due terzi dei componenti di ciascuna Camera" },
      { id: "B", text: "Se è richiesta da cinque consigli regionali" },
      { id: "C", text: "Se riguarda materie di bilancio o tributarie" },
      { id: "D", text: "Se è stata approvata all'unanimità dal Consiglio dei Ministri" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 138, comma 3, Cost., non si fa luogo a referendum se la legge è stata approvata nella seconda votazione da ciascuna delle Camere a maggioranza di due terzi dei suoi componenti.",
    hint: "La maggioranza qualificata dei 2/3 esclude il referendum oppositivo.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_009",
    question: "Quale maggioranza è richiesta per la concessione della fiducia iniziale al Governo da parte di ciascuna Camera?",
    options: [
      { id: "A", text: "Maggioranza semplice (dei presenti)" },
      { id: "B", text: "Maggioranza assoluta dei componenti" },
      { id: "C", text: "Maggioranza qualificata dei 3/5" },
      { id: "D", text: "Maggioranza dei due terzi dei votanti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 94 Cost. stabilisce che il Governo deve avere la fiducia delle due Camere, accordata o revocata mediante mozione motivata e votata per appello nominale a maggioranza semplice.",
    hint: "Non è richiesta la maggioranza assoluta dell'aula, basta la maggioranza dei presenti.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_010",
    question: "Da chi è presieduto il Consiglio Superiore della Magistratura (CSM)?",
    options: [
      { id: "A", text: "Dal Presidente della Repubblica" },
      { id: "B", text: "Dal Primo Presidente della Corte di Cassazione" },
      { id: "C", text: "Dal Ministro della Giustizia" },
      { id: "D", text: "Dal Presidente della Corte Costituzionale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 104, comma 2, Cost. stabilisce che il Consiglio Superiore della Magistratura è presieduto dal Presidente della Repubblica.",
    hint: "La presidenza è attribuita al Capo dello Stato a garanzia dell'indipendenza dell'ordine giudiziario.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_011",
    question: "Quali membri di diritto compongono il Consiglio Superiore della Magistratura oltre al Presidente della Repubblica?",
    options: [
      { id: "A", text: "Il Primo Presidente e il Procuratore Generale della Corte di Cassazione" },
      { id: "B", text: "Il Ministro della Giustizia e il Presidente del Consiglio di Stato" },
      { id: "C", text: "I Presidenti della Camera dei Deputati e del Senato della Repubblica" },
      { id: "D", text: "Il Presidente della Corte dei Conti e l'Avvocato Generale dello Stato" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 104, comma 3, Cost., ne fanno parte di diritto il Primo Presidente e il Procuratore Generale della Corte di Cassazione.",
    hint: "Sono i due vertici giudicanti e requirenti della Suprema Corte di Cassazione.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_012",
    question: "Da quanti giudici è composta la Corte Costituzionale nei giudizi ordinari di legittimità costituzionale?",
    options: [
      { id: "A", text: "15 giudici" },
      { id: "B", text: "12 giudici" },
      { id: "C", text: "21 giudici" },
      { id: "D", text: "9 giudici" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 135, comma 1, Cost. dispone che la Corte Costituzionale è composta di 15 giudici (nominati per un terzo dal Presidente della Repubblica, un terzo dal Parlamento in seduta comune e un terzo dalle supreme magistrature).",
    hint: "Sono 5 nominati dal Capo dello Stato, 5 dal Parlamento in seduta comune e 5 dalle supreme magistrature.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_013",
    question: "Quanto dura in carica un giudice della Corte Costituzionale e può essere nuovamente nominato?",
    options: [
      { id: "A", text: "Dura in carica 9 anni e non può essere nuovamente nominato" },
      { id: "B", text: "Dura in carica 7 anni ed è rieleggibile una sola volta" },
      { id: "C", text: "Dura in carica a vita" },
      { id: "D", text: "Dura in carica 5 anni con mandato rinnovabile indefinitamente" }
    ],
    correctAnswerId: "A",
    explanation: "I giudici della Corte Costituzionale durano in carica nove anni, decorrenti dal giorno del giuramento, e non possono essere nuovamente nominati (art. 135, comma 3, Cost.).",
    hint: "Il mandato dura nove anni senza possibilità di rielezione immediata o differita.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_014",
    question: "Ai sensi dell'art. 117 della Costituzione, a quale soggetto spetta la potestà legislativa nelle materie non espressamente riservate alla legislazione dello Stato?",
    options: [
      { id: "A", text: "Alle Regioni (potestà legislativa residuale)" },
      { id: "B", text: "Allo Stato in via sussidiaria" },
      { id: "C", text: "Ai Comuni e alle Città Metropolitane" },
      { id: "D", text: "Al Consiglio di Stato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 117, comma 4, Cost. sancisce la potestà legislativa residuale delle Regioni: 'Spetta alle Regioni la potestà legislativa in riferimento ad ogni materia non espressamente riservata alla legislazione dello Stato'.",
    hint: "La clausola di residualità dopo la riforma del Titolo V del 2001 opera a favore degli enti regionali.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_015",
    question: "In quale articolo della Costituzione italiana è sancito il principio di sussidiarietà verticale nell'attribuzione delle funzioni amministrative?",
    options: [
      { id: "A", text: "Articolo 118" },
      { id: "B", text: "Articolo 117" },
      { id: "C", text: "Articolo 114" },
      { id: "D", text: "Articolo 120" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 118, primo comma, Cost. stabilisce che le funzioni amministrative sono attribuite ai Comuni salvo che, per assicurarne l'esercizio unitario, siano conferite a Province, Città metropolitane, Regioni e Stato, sulla base dei principi di sussidiarietà, differenziazione ed adeguatezza.",
    hint: "L'articolo parte dall'ente più vicino al cittadino: il Comune.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_016",
    question: "Che cosa si intende per sussidiarietà orizzontale ai sensi dell'art. 118, ultimo comma, della Costituzione?",
    options: [
      { id: "A", text: "L'autonoma iniziativa dei cittadini, singoli e associati, per lo svolgimento di attività di interesse generale favorita dai pubblici poteri" },
      { id: "B", text: "Il passaggio di competenze amministrative tra Comuni limitrofi" },
      { id: "C", text: "Il soccorso finanziario tra Regioni a statuto speciale e ordinario" },
      { id: "D", text: "L'obbligo dei Comuni di delegare i servizi sociali alle Province" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 118, comma 4, Cost. sancisce la sussidiarietà orizzontale: Stato, Regioni, Città metropolitane, Province e Comuni favoriscono l'autonoma iniziativa dei cittadini, singoli e associati, per lo svolgimento di attività di interesse generale.",
    hint: "Riguarda il rapporto tra istituzioni pubbliche e società civile/cittadini.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_017",
    question: "In caso di scioglimento delle Camere da parte del Presidente della Repubblica, entro quanti giorni devono svolgersi le elezioni delle nuove Camere?",
    options: [
      { id: "A", text: "Entro 70 giorni dallo scioglimento" },
      { id: "B", text: "Entro 30 giorni dallo scioglimento" },
      { id: "C", text: "Entro 90 giorni dallo scioglimento" },
      { id: "D", text: "Entro 120 giorni dallo scioglimento" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 61 Cost. dispone che le elezioni delle nuove Camere hanno luogo entro settanta giorni dalla fine delle precedenti. La prima riunione ha luogo non oltre il ventesimo giorno dalle elezioni.",
    hint: "Il termine costituzionale massimo è fissato in settanta giorni.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_018",
    question: "Che cos'è la 'prorogatio' delle Camere?",
    options: [
      { id: "A", text: "L'istituto in virtù del quale i poteri delle Camere sciolte o scadute sono prorogati finché non siano riunite le nuove Camere" },
      { id: "B", text: "Il prolungamento della durata della legislatura deliberato in tempo di guerra" },
      { id: "C", text: "La facoltà del Presidente della Repubblica di differire la prima seduta parlamentare" },
      { id: "D", text: "La possibilità per i parlamentari di astenersi dall'attività di voto" }
    ],
    correctAnswerId: "A",
    explanation: "La prorogatio (art. 61, comma 2, Cost.) garantisce la continuità dell'organo parlamentare nel periodo intercorrente tra lo scioglimento o fine mandato e la prima riunione delle nuove Camere, limitatamente all'ordinaria amministrazione e atti improrogabili.",
    hint: "Distingui la prorogatio ordinaria dalla proroga della legislatura (che è possibile solo per legge in tempo di guerra, art. 60).",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_019",
    question: "Quale fonte del diritto prevale tra una legge ordinaria dello Stato e un regolamento dell'esecutivo statale in caso di contrasto?",
    options: [
      { id: "A", text: "La legge ordinaria dello Stato, in forza del principio di gerarchia delle fonti" },
      { id: "B", text: "Il regolamento, se posteriore nel tempo (criterio cronologico)" },
      { id: "C", text: "Prevalgono in modo paritetico secondo discrezionalità del giudice" },
      { id: "D", text: "Il regolamento, in quanto fonte di normazione secondaria specializzata" }
    ],
    correctAnswerId: "A",
    explanation: "In virtù del principio di gerarchia delle fonti, la legge ordinaria (fonte primaria) prevale sul regolamento dell'esecutivo (fonte secondaria), il quale è nullo o disapplicabile se in contrasto con la legge.",
    hint: "La norma primaria prevale sempre sulla norma subordinata/secondaria.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_020",
    question: "Cosa stabilisce l'art. 23 della Costituzione in merito alle prestazioni personali e patrimoniali?",
    options: [
      { id: "A", text: "Nessuna prestazione personale o patrimoniale può essere imposta se non in base alla legge (riserva di legge)" },
      { id: "B", text: "Ogni cittadino ha diritto di rifiutare tributi non concordati con il Comune" },
      { id: "C", text: "Le imposte possono essere istituite con mero atto amministrativo d'urgenza" },
      { id: "D", text: "Tutte le prestazioni patrimoniali devono essere approvate con referendum popolare" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 23 Cost. recita: 'Nessuna prestazione personale o patrimoniale può essere imposta se non in base alla legge'. Trattasi di riserva di legge relativa.",
    hint: "Sancisce il principio storico 'no taxation without representation'.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_021",
    question: "Chi promuove la questione di legittimità costituzionale in via incidentale?",
    options: [
      { id: "A", text: "Il giudice a quo nel corso di un giudizio, d'ufficio o su istanza di parte" },
      { id: "B", text: "Il Governo contro una legge regionale entro 60 giorni" },
      { id: "C", text: "Almeno cinquantamila elettori con raccolta firme" },
      { id: "D", text: "Il Presidente della Repubblica prima di promulgare la legge" }
    ],
    correctAnswerId: "A",
    explanation: "Il giudizio in via incidentale sorge nell'ambito di un processo dinanzi a un'autorità giurisdizionale (giudice a quo), che sospende il processo e rimette gli atti alla Consulta qualora ritenga la questione rilevante e non manifestamente infondata.",
    hint: "Nasce come incidente processuale durante un giudizio.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_022",
    question: "Quale effetto produce una sentenza di accoglimento della Corte Costituzionale?",
    options: [
      { id: "A", text: "La norma cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione (efficacia erga omnes ed ex tunc)" },
      { id: "B", text: "La norma continua a produrre effetti solo per i processi già conclusi con sentenza passata in giudicato, salvo condanne penali" },
      { id: "C", text: "Ha efficacia solo tra le parti del giudizio a quo (inter partes)" },
      { id: "D", text: "Costituisce una mera raccomandazione al Parlamento per abrogare la legge" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 136 Cost. prevede che quando la Corte dichiara l'illegittimità costituzionale, la norma cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione. La dichiarazione di incostituzionalità ha efficacia retroattiva (ex tunc), travolgendo tutti i rapporti pendenti.",
    hint: "Elimina la norma dall'ordinamento con efficacia per tutti (erga omnes).",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_023",
    question: "Quale principio costituzionale in materia di bilancio è stato introdotto con la riforma dell'art. 81 Cost. (Legge cost. 1/2012)?",
    options: [
      { id: "A", text: "Il principio dell'equilibrio tra entrate e spese del bilancio, tenuto conto delle fasi del ciclo economico" },
      { id: "B", text: "Il divieto assoluto per lo Stato di emettere titoli di debito pubblico" },
      { id: "C", text: "L'obbligo di approvare il bilancio mediante referendum preventivo" },
      { id: "D", text: "La totale soppressione del controllo della Corte dei Conti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 81, primo comma, Cost. stabilisce: 'Lo Stato assicura l'equilibrio tra le entrate e le spese del proprio bilancio, tenendo conto delle fasi avverse e delle fasi favorevoli del ciclo economico'.",
    hint: "Riforma nota come introduzione del pareggio/equilibrio di bilancio derivante dagli impegni europei.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_024",
    question: "In caso di parità di voti in una deliberazione della Camera dei Deputati, la proposta:",
    options: [
      { id: "A", text: "Si intende respinta" },
      { id: "B", text: "Viene approvata con il voto decisivo del Presidente d'Assemblea" },
      { id: "C", text: "È rinviata automaticamente alla commissione competente" },
      { id: "D", text: "Viene trasmessa direttamente al Senato per il parere vincolante" }
    ],
    correctAnswerId: "A",
    explanation: "Secondo i regolamenti parlamentari della Camera dei deputati, qualora una votazione registri parità di voti favorevoli e contrari, la deliberazione si considera respinta.",
    hint: "Per approvare una proposta occorre la maggioranza, quindi in caso di parità non vi è maggioranza favorevole.",
    level: "avanzato"
  },
  {
    id: "Q_PUB_COST_025",
    question: "A quale organo spetta, ai sensi dell'art. 100 della Costituzione, il controllo preventivo di legittimità sugli atti del Governo?",
    options: [
      { id: "A", text: "Alla Corte dei Conti" },
      { id: "B", text: "Al Consiglio di Stato" },
      { id: "C", text: "Alla Corte Costituzionale" },
      { id: "D", text: "All'Avvocatura Generale dello Stato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 100, comma 2, Cost. dispone: 'La Corte dei conti esercita il controllo preventivo di legittimità sugli atti del Governo, e anche quello successivo sulla gestione del bilancio dello Stato'.",
    hint: "È la magistratura contabile suprema.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_026",
    question: "Che natura ha il Consiglio di Stato ai sensi dell'art. 100, primo comma, della Costituzione?",
    options: [
      { id: "A", text: "Organo di consulenza giuridico-amministrativa e di tutela della giustizia nell'amministrazione" },
      { id: "B", text: "Organo legislativo speciale per le regioni autonome" },
      { id: "C", text: "Commissione parlamentare d'inchiesta permanente" },
      { id: "D", text: "Organo di polizia amministrativa e giudiziaria" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 100, comma 1, Cost. qualifica il Consiglio di Stato quale 'organo di consulenza giuridico-amministrativa e di tutela della giustizia nell'amministrazione'.",
    hint: "Svolge una duplice funzione: consultiva e giurisdizionale.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_027",
    question: "Per quali reati il Presidente della Repubblica può essere messo in stato di accusa dal Parlamento in seduta comune ai sensi dell'art. 90 Cost.?",
    options: [
      { id: "A", text: "Alto tradimento e attentato alla Costituzione" },
      { id: "B", text: "Concussione, corruzione e peculato" },
      { id: "C", text: "Diffamazione e abuso d'ufficio" },
      { id: "D", text: "Qualsiasi reato comune commesso durante il settennato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 90 Cost. sancisce: 'Il Presidente della Repubblica non è responsabile degli atti compiuti nell'esercizio delle sue funzioni, tranne che per alto tradimento o per attentato alla Costituzione'.",
    hint: "Sono le uniche due fattispecie di reato presidenziale funzionale.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_028",
    question: "Quale maggioranza è richiesta al Parlamento in seduta comune per mettere in stato di accusa il Presidente della Repubblica?",
    options: [
      { id: "A", text: "Maggioranza assoluta dei suoi membri" },
      { id: "B", text: "Maggioranza dei due terzi dei componenti" },
      { id: "C", text: "Maggioranza semplice dei presenti" },
      { id: "D", text: "Maggioranza dei tre quinti dei votanti" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 90, comma 2, Cost. prevede che la messa in stato di accusa è deliberata dal Parlamento in seduta comune a maggioranza assoluta dei suoi membri.",
    hint: "Occorre il voto favorevole della metà più uno degli aventi diritto.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_029",
    question: "Chi controfirma gli atti del Presidente della Repubblica per conferirne validità ai sensi dell'art. 89 Cost.?",
    options: [
      { id: "A", text: "I ministri proponenti (o competenti), che ne assumono la responsabilità" },
      { id: "B", text: "Il Presidente della Corte Costituzionale" },
      { id: "C", text: "I Presidenti delle due Camere" },
      { id: "D", text: "Il Segretario Generale del Quirinale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 89 Cost. stabilisce: 'Nessun atto del Presidente della Repubblica è valido se non è controfirmato dai ministri proponenti, che ne assumono la responsabilità'. Gli atti con valore legislativo sono controfirmati anche dal Presidente del Consiglio.",
    hint: "L'istituto della controfirma ministeriale trasferisce la responsabilità politica e giuridica al Governo.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_030",
    question: "Che cosa si intende per 'riserva di legge assoluta'?",
    options: [
      { id: "A", text: "La disciplina dell'intera materia deve essere regolata compiutamente da una fonte primaria di rango legislativo, escludendo l'intervento di regolamenti governativi" },
      { id: "B", text: "La materia può essere disciplinata solo da leggi costituzionali" },
      { id: "C", text: "La legge fissa solo i principi generali lasciando l'attuazione al regolamento" },
      { id: "D", text: "La competenza spetta in via assoluta ed esclusiva alle Regioni" }
    ],
    correctAnswerId: "A",
    explanation: "Nella riserva di legge assoluta l'intera materia deve essere disciplinata dalla legge o atto avente forza di legge, ammettendosi solo regolamenti di stretta esecuzione (es. art. 13 Cost. per la libertà personale).",
    hint: "Esclude l'integrazione discrezionale ad opera di fonti secondarie dell'esecutivo.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_031",
    question: "Che cosa si intende per 'riserva di legge relativa'?",
    options: [
      { id: "A", text: "La legge deve fissare i principi e le linee guida della materia, lasciando all'esecutivo e ai regolamenti la disciplina di dettaglio" },
      { id: "B", text: "La legge può essere derogata da qualsiasi circolare ministeriale" },
      { id: "C", text: "La materia deve essere approvata solo a maggioranza relativa" },
      { id: "D", text: "La disciplina è subordinata al nulla osta preventivo della Corte Costituzionale" }
    ],
    correctAnswerId: "A",
    explanation: "Nella riserva di legge relativa (come ad es. l'art. 23 e l'art. 97 Cost.), la legge stabilisce i principi fondamentali e i criteri direttivi, consentendo alle fonti secondarie di specificare la disciplina esecutiva e di dettaglio.",
    hint: "Consente l'integrazione da parte dei regolamenti governativi nel rispetto della cornice legislativa.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_032",
    question: "Quale principio stabilisce l'art. 54 della Costituzione per i cittadini cui sono affidate funzioni pubbliche?",
    options: [
      { id: "A", text: "Il dovere di adempierle con disciplina ed onore, prestando giuramento nei casi stabiliti dalla legge" },
      { id: "B", text: "L'immunità da qualsiasi responsabilità civile o penale" },
      { id: "C", text: "L'esonero dal pagamento dei tributi locali durante l'incarico" },
      { id: "D", text: "L'obbligo di iscrizione ad un albo professionale specifico" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 54, comma 2, Cost. dispone: 'I cittadini cui sono affidate funzioni pubbliche hanno il dovere di adempierle con disciplina ed onore, prestando giuramento nei casi stabiliti dalla legge'.",
    hint: "Disciplina ed onore sono i requisiti etici e costituzionali del funzionario pubblico.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_033",
    question: "In materia di accesso ai pubblici impieghi, quale principio generale è stabilito dall'art. 97, quarto comma, Cost.?",
    options: [
      { id: "A", text: "Agli impieghi nelle pubbliche amministrazioni si accede mediante concorso, salvo i casi stabiliti dalla legge" },
      { id: "B", text: "L'accesso avviene prioritariamente per chiamata diretta discrezionale del dirigente" },
      { id: "C", text: "L'accesso è riservato esclusivamente a candidati con anzianità di servizio precedente" },
      { id: "D", text: "Tutti i posti devono essere assegnati tramite sorteggio pubblico" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 97, ultimo comma, Cost. stabilisce: 'Agli impieghi nelle pubbliche amministrazioni si accede mediante concorso, salvo i casi stabiliti dalla legge'.",
    hint: "Il concorso pubblico è la regola costituzionale per garantire merito e imparzialità.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_034",
    question: "Chi ha il potere di sciogliere un Consiglio Regionale e rimuovere il Presidente della Giunta ai sensi dell'art. 126 Cost.?",
    options: [
      { id: "A", text: "Il Presidente della Repubblica con decreto motivato, sentita una Commissione di deputati e senatori" },
      { id: "B", text: "Il Presidente del Consiglio dei Ministri con propria ordinanza" },
      { id: "C", text: "Il Prefetto del capoluogo di Regione" },
      { id: "D", text: "La Corte Costituzionale all'unanimità" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 126, comma 1, Cost. prevede che con decreto motivato del Presidente della Repubblica sono disposti lo scioglimento del Consiglio regionale e la rimozione del Presidente della Giunta che abbiano compiuto atti contrari alla Costituzione o gravi violazioni di legge.",
    hint: "L'atto formale è il D.P.R. su proposta del Presidente del Consiglio previa deliberazione del CdM.",
    level: "avanzato"
  },
  {
    id: "Q_PUB_COST_035",
    question: "In caso di contrasto tra due norme di pari grado gerarchico entrate in vigore in momenti diversi, quale criterio si applica per risolvere l'antinomia?",
    options: [
      { id: "A", text: "Il criterio cronologico (lex posterior derogat priori)" },
      { id: "B", text: "Il criterio gerarchico" },
      { id: "C", text: "Il criterio di specialità necessariamente a favore della prima" },
      { id: "D", text: "Il rinvio d'ufficio alla Corte Costituzionale" }
    ],
    correctAnswerId: "A",
    explanation: "Tra fonti dello stesso grado gerarchico opera il criterio cronologico: la legge successiva abroga la legge anteriore nel tempo (lex posterior derogat legi priori, art. 15 Preleggi).",
    hint: "La norma più recente nel tempo prevale su quella precedente.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_036",
    question: "Che cosa si intende per abrogazione tacita di una legge ai sensi dell'art. 15 delle Preleggi?",
    options: [
      { id: "A", text: "L'abrogazione che deriva da un'incompatibilità oggettiva tra le nuove disposizioni e le precedenti" },
      { id: "B", text: "L'abrogazione espressamente dichiarata dal legislatore nell'articolo finale" },
      { id: "C", text: "L'abrogazione disposta dal Presidente della Repubblica con proprio messaggio" },
      { id: "D", text: "Il disuso prolungato della norma per almeno dieci anni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 15 delle Disposizioni sulla legge in generale prevede che le leggi sono abrogate per dichiarazione espressa, o per incompatibilità tra le nuove disposizioni e le precedenti (tacita), o perché la nuova legge regola l'intera materia.",
    hint: "Non c'è una frase espressa di abrogazione, ma le due norme non possono convivere logicamente.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_037",
    question: "Ai sensi dell'art. 119 Cost., gli enti locali (Comuni, Province, Città Metropolitane e Regioni) hanno autonomia finanziaria:",
    options: [
      { id: "A", text: "Di entrata e di spesa, nel rispetto dell'equilibrio dei relativi bilanci e dell'ordinamento UE" },
      { id: "B", text: "Solo di spesa, potendo incassare esclusivamente trasferimenti erariali dello Stato" },
      { id: "C", text: "Illimitata e svincolata da qualsiasi coordinamento della finanza pubblica" },
      { id: "D", text: "Subordinata all'autorizzazione semestrale del Ministero dell'Economia e delle Finanze" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 119, comma 1, Cost. dispone: 'I Comuni, le Province, le Città metropolitane e le Regioni hanno autonomia finanziaria di entrata e di spesa, nel rispetto dell'equilibrio dei relativi bilanci, e concorrono ad assicurare l'osservanza dei vincoli economici e finanziari derivanti dall'ordinamento dell'Unione europea'.",
    hint: "Autonomia sia dal lato entrate (tributi ed entrate proprie) che dal lato spese, coordinata con i vincoli UE.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_038",
    question: "Per quali spese i Comuni, le Province, le Città Metropolitane e le Regioni possono ricorrere all'indebitamento ai sensi dell'art. 119, ultimo comma, Cost.?",
    options: [
      { id: "A", text: "Solo per finanziare spese di investimento, con contestuale definizione di piani di ammortamento e a condizione che per il complesso degli enti sia rispettato l'equilibrio" },
      { id: "B", text: "Per qualsiasi spesa corrente in caso di disavanzo temporaneo" },
      { id: "C", text: "Esclusivamente per il pagamento delle retribuzioni del personale dipendente" },
      { id: "D", text: "Non possono mai contrarre alcun mutuo o debito" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 119, ultimo comma, Cost. sancisce la c.d. 'Golden Rule': gli enti locali possono ricorrere all'indebitamento solo per finanziare spese di investimento, con esclusione assoluta del finanziamento di spesa corrente.",
    hint: "I mutui e i debiti sono ammessi soltanto per investimenti (opere pubbliche, infrastrutture).",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_039",
    question: "A quale organo compete l'emanazione dei regolamenti governativi ex art. 17 della Legge n. 400/1988?",
    options: [
      { id: "A", text: "Al Presidente della Repubblica, con decreto (D.P.R.), previa deliberazione del Consiglio dei Ministri e sentito il Consiglio di Stato" },
      { id: "B", text: "Al Presidente del Senato, sentita la Conferenza Stato-Regioni" },
      { id: "C", text: "Al Ministro competente per materia senza alcun parere" },
      { id: "D", text: "Direttamente alla Corte Costituzionale" }
    ],
    correctAnswerId: "A",
    explanation: "I regolamenti governativi sono deliberati dal Consiglio dei Ministri, sentito il parere del Consiglio di Stato, ed emanati dal Presidente della Repubblica con proprio decreto (D.P.R.), poi sottoposti al visto della Corte dei Conti.",
    hint: "Forma del D.P.R. previa deliberazione collegiale del Consiglio dei Ministri.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_040",
    question: "In tema di iniziativa legislativa popolare ex art. 71 Cost., da quante firme di elettori deve essere sottoscritta la proposta di legge redatta in articoli?",
    options: [
      { id: "A", text: "Almeno 50.000 elettori" },
      { id: "B", text: "Almeno 100.000 elettori" },
      { id: "C", text: "Almeno 500.000 elettori" },
      { id: "D", text: "Almeno 20.000 elettori" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 71, secondo comma, Cost. prevede che il popolo esercita l'iniziativa delle leggi, mediante la proposta, da parte di almeno cinquantamila elettori, di un progetto redatto in articoli.",
    hint: "Per l'iniziativa legislativa bastano 50.000 firme; per il referendum abrogativo ne servono 500.000.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_041",
    question: "Quale tra le seguenti materie NON può essere oggetto di referendum abrogativo ai sensi dell'art. 75, secondo comma, Cost.?",
    options: [
      { id: "A", text: "Leggi tributarie e di bilancio, di amnistia e di indulto, di autorizzazione a ratificare trattati internazionali" },
      { id: "B", text: "Leggi elettorali per il Parlamento" },
      { id: "C", text: "Leggi in materia di pubblico impiego e contratti di lavoro" },
      { id: "D", text: "Leggi penali relative ai reati contro il patrimonio" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 75, comma 2, Cost. stabilisce espressamente: 'Non è ammesso il referendum per le leggi tributarie e di bilancio, di amnistia e di indulto, di autorizzazione a ratificare trattati internazionali'.",
    hint: "Tributi, bilanci, amnistia, indulto e ratifica trattati sono i limiti costituzionali espliciti.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_042",
    question: "Chi giudica sull'ammissibilità dei referendum abrogativi in Italia?",
    options: [
      { id: "A", text: "La Corte Costituzionale" },
      { id: "B", text: "L'Ufficio Centrale per il Referendum presso la Corte di Cassazione" },
      { id: "C", text: "Il Presidente della Repubblica" },
      { id: "D", text: "Il Consiglio di Stato" }
    ],
    correctAnswerId: "A",
    explanation: "La Corte Costituzionale giudica se le richieste di referendum abrogativo presentate a norma dell'art. 75 siano ammissibili ai sensi del secondo comma dell'articolo stesso (art. 2 L. Cost. 1/1953). L'Ufficio centrale presso la Cassazione controlla invece la regolarità formale/firme.",
    hint: "Il giudizio di ammissibilità sostanziale è competenza esclusiva della Consulta.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_043",
    question: "Quale effetto giuridico produce l'approvazione di una mozione di sfiducia da parte di una sola delle due Camere nei confronti del Governo?",
    options: [
      { id: "A", text: "L'obbligo giuridico e politico di dimissioni del Governo nelle mani del Capo dello Stato" },
      { id: "B", text: "Nessun effetto, occorre la sfiducia congiunta di entrambe le Camere" },
      { id: "C", text: "La sospensione del Governo per un periodo di quindici giorni" },
      { id: "D", text: "Lo scioglimento automatico della Camera che ha votato contro" }
    ],
    correctAnswerId: "A",
    explanation: "Poiché il Governo deve godere della fiducia di entrambe le Camere (art. 94 Cost.), il venir meno della fiducia anche in una sola Camera obbliga il Presidente del Consiglio a rassegnare le dimissioni dell'esecutivo.",
    hint: "Nel nostro bicameralismo paritario la fiducia deve sussistere presso entrambi i rami del Parlamento.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_044",
    question: "In base all'art. 98 della Costituzione, per quali categorie di pubblici funzionari la legge può stabilire limitazioni al diritto di iscriversi ai partiti politici?",
    options: [
      { id: "A", text: "Magistrati, militari di carriera in servizio attivo, funzionari ed agenti di polizia, rappresentanti diplomatici e consolari all'estero" },
      { id: "B", text: "Insegnanti scolastici e professori universitari" },
      { id: "C", text: "Tutti i dipendenti amministrativi degli enti locali" },
      { id: "D", text: "Medici e infermieri del Servizio Sanitario Nazionale" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 98, comma 3, Cost. prevede: 'Si possono con legge stabilire limitazioni al diritto d'iscriversi ai partiti politici per i magistrati, i militari di carriera in servizio attivo, i funzionari ed agenti di polizia, i rappresentanti diplomatici e consolari all'estero'.",
    hint: "Figure per le quali l'imparzialità e la neutralità istituzionale devono essere massime ed evidenti.",
    level: "intermedio"
  },
  {
    id: "Q_PUB_COST_045",
    question: "Che cosa si intende per 'antinomia normativa'?",
    options: [
      { id: "A", text: "Un contrasto o incompatibilità logico-giuridica tra due o più norme applicabili alla medesima fattispecie" },
      { id: "B", text: "La perdita di efficacia di una legge per prescrizione" },
      { id: "C", text: "La pubblicazione di una norma priva di firma presidenziale" },
      { id: "D", text: "L'accordo bilaterale stipulato tra Stato e Regioni" }
    ],
    correctAnswerId: "A",
    explanation: "L'antinomia indica la situazione di conflitto tra norme giuridiche appartenenti allo stesso ordinamento che collegano alla medesima fattispecie conseguenze giuridiche tra loro incompatibili.",
    hint: "Conflitto tra norme risolvibile mediante i criteri cronologico, gerarchico, di specialità o di competenza.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_046",
    question: "Quale criterio di risoluzione delle antinomie prevale in caso di contrasto tra una norma speciale anteriore e una norma generale posteriore?",
    options: [
      { id: "A", text: "Il criterio di specialità: la norma speciale anteriore non è abrogata dalla legge generale successiva, salvo espressa deroga" },
      { id: "B", text: "Il criterio cronologico, con abrogazione automatica della norma speciale" },
      { id: "C", text: "Il criterio gerarchico, annullando la norma anteriore" },
      { id: "D", text: "La disapplicazione obbligatoria di entrambe" }
    ],
    correctAnswerId: "A",
    explanation: "In base al brocardo 'lex posterior generalis non derogat priori speciali', la norma speciale anteriore continua ad applicarsi alla materia specifica e non viene abrogata dalla legge generale posteriore, a meno che non emerga una chiara volontà abrogativa del legislatore.",
    hint: "La legge speciale resiste alla legge generale sopravvenuta.",
    level: "avanzato"
  },
  {
    id: "Q_PUB_COST_047",
    question: "Ai sensi dell'art. 101 della Costituzione, a che cosa sono soggetti i giudici nell'esercizio delle loro funzioni?",
    options: [
      { id: "A", text: "Soltanto alla legge" },
      { id: "B", text: "Alle direttive vincolanti del Ministro della Giustizia" },
      { id: "C", text: "Agli indirizzi politici approvati dal Parlamento" },
      { id: "D", text: "Ai pareri vincolanti del Consiglio di Stato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 101, secondo comma, Cost. sancisce il principio fondamentale di indipendenza della magistratura: 'I giudici sono soggetti soltanto alla legge'.",
    hint: "Nessun potere politico o gerarchico può impartire ordini al giudice nell'attività decisoria.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_048",
    question: "Quale organo è competente a giudicare sui conflitti di attribuzione tra i poteri dello Stato e su quelli tra lo Stato e le Regioni?",
    options: [
      { id: "A", text: "La Corte Costituzionale" },
      { id: "B", text: "La Corte di Cassazione a Sezioni Unite" },
      { id: "C", text: "Il Consiglio di Stato" },
      { id: "D", text: "Il Senato della Repubblica" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 134 Cost. attribuisce alla Corte Costituzionale il giudizio sui conflitti di attribuzione tra i poteri dello Stato e su quelli tra lo Stato e le Regioni, e tra le Regioni.",
    hint: "La Consulta risolve le dispute di attribuzione costituzionale tra poteri ed enti territoriali.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_049",
    question: "Cosa stabilisce l'art. 28 della Costituzione in merito alla responsabilità dei funzionari e dipendenti pubblici?",
    options: [
      { id: "A", text: "I funzionari e i dipendenti dello Stato e degli enti pubblici sono direttamente responsabili, secondo le leggi penali, civili e amministrative, degli atti compiuti in violazione di diritti" },
      { id: "B", text: "I dipendenti pubblici rispondono solo dinanzi al proprio dirigente senza responsabilità civile" },
      { id: "C", text: "La responsabilità è sempre e unicamente imputata all'amministrazione, escludendo il funzionario" },
      { id: "D", text: "I dipendenti rispondono civilmente solo se hanno conseguito un arricchimento personale illecito" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 28 Cost. stabilisce: 'I funzionari e i dipendenti dello Stato e degli enti pubblici sono direttamente responsabili, secondo le leggi penali, civili e amministrative, degli atti compiuti in violazione di diritti. In tali casi la responsabilità civile si estende allo Stato e agli enti pubblici'.",
    hint: "Responsabilità diretta del dipendente con estensione solidale allo Stato/ente pubblico.",
    level: "base"
  },
  {
    id: "Q_PUB_COST_050",
    question: "Quale limite assoluto ed esplicito alla revisione costituzionale è posto dall'art. 139 della Costituzione italiana?",
    options: [
      { id: "A", text: "La forma repubblicana non può essere oggetto di revisione costituzionale" },
      { id: "B", text: "Il numero dei ministeri non può essere ridotto" },
      { id: "C", text: "I confini regionali non possono mai essere modificati" },
      { id: "D", text: "Il sistema bicamerale non può subire modifiche al numero dei parlamentari" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 139 Cost., norma di chiusura della Carta fondamentale, stabilisce in modo perentorio: 'La forma repubblicana non può essere oggetto di revisione costituzionale'.",
    hint: "È l'unico limite esplicito testuale posto dal Costituente alla modifica della Costituzione.",
    level: "base"
  }
];

const dest = path.join(__dirname, '../public/db/master_bank/diritto/pubblico_costituzionale.json');
fs.writeFileSync(dest, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Generated ${questions.length} questions in ${dest}`);
