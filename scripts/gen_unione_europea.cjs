const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: "Q_DIR_UE_001",
    question: "Quali sono i due trattati fondamentali sui quali si fonda attualmente l'ordinamento dell'Unione Europea?",
    options: [
      { id: "A", text: "Il Trattato sull'Unione Europea (TUE) e il Trattato sul Funzionamento dell'Unione Europea (TFUE)" },
      { id: "B", text: "Il Trattato di Maastricht e il Trattato di Schengen" },
      { id: "C", text: "Il Trattato di Roma e la Costituzione Europea" },
      { id: "D", text: "Il Patto di Stabilità e Crescita e il Trattato di Nizza" }
    ],
    correctAnswerId: "A",
    explanation: "A seguito dell'entrata in vigore del Trattato di Lisbona (1° dicembre 2009), l'Unione Europea si fonda su due trattati aventi pari valore giuridico: il Trattato sull'Unione Europea (TUE) e il Trattato sul Funzionamento dell'Unione Europea (TFUE).",
    hint: "TUE e TFUE costituiscono il vertice delle fonti primarie del diritto unionale.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_002",
    question: "Che valore giuridico attribuisce l'art. 6 del TUE alla Carta dei diritti fondamentali dell'Unione Europea (Carta di Nizza)?",
    options: [
      { id: "A", text: "Lo stesso valore giuridico dei trattati (diritto primario)" },
      { id: "B", text: "Valore di mera raccomandazione politica non vincolante" },
      { id: "C", text: "Valore di fonte secondaria subordinata alle direttive" },
      { id: "D", text: "Valore interpretativo facoltativo per i soli giudici penali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 6, paragrafo 1, TUE sancisce: 'L'Unione riconosce i diritti, le libertà e i principi sanciti nella Carta dei diritti fondamentali dell'Unione europea [...], che ha lo stesso valore giuridico dei trattati'.",
    hint: "La Carta di Nizza ha efficacia vincolante pari a quella dei Trattati fondamentali.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_003",
    question: "In base all'art. 5 del TUE, in virtù di quale principio l'Unione agisce esclusivamente nei limiti delle competenze che le sono attribuite dagli Stati membri nei trattati?",
    options: [
      { id: "A", text: "Principio di attribuzione" },
      { id: "B", text: "Principio di sussidiarietà" },
      { id: "C", text: "Principio di proporzionalità" },
      { id: "D", text: "Principio di leale cooperazione" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 5, par. 2, TUE, in virtù del principio di attribuzione, l'Unione agisce esclusivamente nei limiti delle competenze che le sono attribuite dagli Stati membri nei trattati per realizzare gli obiettivi stabiliti. Qualsiasi competenza non attribuita appartiene agli Stati.",
    hint: "L'UE non ha competenza generale, ma solo le competenze espressamente devolutele dagli Stati.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_004",
    question: "In quali materie si applica il principio di sussidiarietà sancito dall'art. 5, paragrafo 3, del TUE?",
    options: [
      { id: "A", text: "Nei settori che non sono di competenza esclusiva dell'Unione Europea" },
      { id: "B", text: "Esclusivamente nelle materie di competenza esclusiva dell'Unione" },
      { id: "C", text: "In tutte le materie senza alcuna eccezione" },
      { id: "D", text: "Soltanto nell'ambito della politica monetaria dell'Eurozona" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 5, par. 3, TUE stabilisce che nei settori che non sono di sua competenza esclusiva, l'Unione interviene soltanto se e in quanto gli obiettivi non possono essere conseguiti in misura sufficiente dagli Stati membri ma possono essere conseguiti meglio a livello di Unione.",
    hint: "La sussidiarietà opera nelle competenze concorrenti o di sostegno, mai in quelle esclusive.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_005",
    question: "Cosa prescrive il principio di proporzionalità di cui all'art. 5, paragrafo 4, del TUE?",
    options: [
      { id: "A", text: "Il contenuto e la forma dell'azione dell'Unione non devono andare oltre quanto necessario per il conseguimento degli obiettivi dei trattati" },
      { id: "B", text: "Le decisioni del Consiglio devono essere prese sempre all'unanimità" },
      { id: "C", text: "Ogni Stato riceve fondi europei in misura proporzionale alla sua estensione geografica" },
      { id: "D", text: "I deputati europei devono essere eletti con formula proporzionale pura senza sbarramento" }
    ],
    correctAnswerId: "A",
    explanation: "In virtù del principio di proporzionalità (art. 5, par. 4, TUE), l'azione dell'Unione si limita a quanto strettamente necessario per raggiungere gli scopi dei trattati, scegliendo la misura meno restrittiva e invasiva possibile per gli Stati membri.",
    hint: "Adeguatezza e non eccedenza dei mezzi rispetto ai fini prefissati.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_006",
    question: "Quale organo dell'Unione Europea è composto dai Capi di Stato o di Governo degli Stati membri, dal suo Presidente e dal Presidente della Commissione?",
    options: [
      { id: "A", text: "Il Consiglio Europeo" },
      { id: "B", text: "Il Consiglio dell'Unione Europea" },
      { id: "C", text: "Il Parlamento Europeo" },
      { id: "D", text: "Il Comitato delle Regioni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 15 TUE disciplina il Consiglio Europeo: riunisce i Capi di Stato o di Governo dei Paesi membri, il Presidente del Consiglio europeo e il Presidente della Commissione. Definisce le priorità e gli orientamenti politici generali dell'Unione, ma non esercita funzioni legislative.",
    hint: "È il vertice politico supremo dell'UE (vertice dei leader).",
    level: "base"
  },
  {
    id: "Q_DIR_UE_007",
    question: "Quanto dura il mandato del Presidente del Consiglio Europeo ai sensi dell'art. 15, paragrafo 5, TUE?",
    options: [
      { id: "A", text: "Due anni e mezzo, rinnovabile una sola volta" },
      { id: "B", text: "Cinque anni non rinnovabili" },
      { id: "C", text: "Sei mesi a rotazione semestrale" },
      { id: "D", text: "Un anno solare" }
    ],
    correctAnswerId: "A",
    explanation: "Il Presidente del Consiglio europeo è eletto dal Consiglio europeo a maggioranza qualificata per un mandato di due anni e mezzo, rinnovabile una sola volta (art. 15, par. 5, TUE).",
    hint: "Mandato di 2,5 anni (metà legislatura europea), rinnovabile una volta.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_008",
    question: "Quale istituzione dell'Unione Europea è eletta a suffragio universale diretto dai cittadini degli Stati membri?",
    options: [
      { id: "A", text: "Il Parlamento Europeo" },
      { id: "B", text: "La Commissione Europea" },
      { id: "C", text: "Il Consiglio dell'Unione Europea" },
      { id: "D", text: "La Corte di Giustizia dell'Unione Europea" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 14 TUE stabilisce che il Parlamento europeo è composto dai rappresentanti dei cittadini dell'Unione, eletti a suffragio universale diretto, libero e segreto ogni cinque anni.",
    hint: "È l'unica istituzione dell'UE eletta direttamente dai cittadini.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_009",
    question: "Qual è il numero massimo di deputati europei stabilito dall'art. 14, paragrafo 2, del TUE?",
    options: [
      { id: "A", text: "750 più il Presidente" },
      { id: "B", text: "1.000 componenti" },
      { id: "C", text: "500 componenti" },
      { id: "D", text: "650 più il Presidente" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 14, par. 2, TUE, la composizione del Parlamento europeo non può superare i 750 deputati, più il Presidente. La rappresentanza dei cittadini è garantita in modo degressivamente proporzionale, con una soglia minima di 6 seggi e un massimo di 96 seggi per Stato membro.",
    hint: "Il tetto fissato dai Trattati è di 750 più 1 (il Presidente).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_010",
    question: "Come viene esercitata la presidenza del Consiglio dell'Unione Europea (dei Ministri), ad eccezione della formazione Affari Esteri?",
    options: [
      { id: "A", text: "A rotazione paritaria tra gli Stati membri per periodi di 6 mesi (sistema dei c.d. 'troika'/gruppi di 3 Stati per 18 mesi)" },
      { id: "B", text: "Da un presidente eletto a vita dai ministri dell'economia" },
      { id: "C", text: "Sempre dallo Stato membro con il PIL più elevato" },
      { id: "D", text: "Dal Presidente della Commissione Europea" }
    ],
    correctAnswerId: "A",
    explanation: "La presidenza del Consiglio dell'UE (art. 16, par. 9, TUE) è esercitata dai rappresentanti degli Stati membri nel Consiglio secondo un sistema di rotazione paritaria semestrale (ogni 6 mesi un Paese membro diverso presiede i lavori, coordinato nel trio di presidenza).",
    hint: "Rotazione semestrale tra tutti gli Stati membri dell'UE.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_011",
    question: "Chi presiede la formazione 'Affari Esteri' del Consiglio dell'Unione Europea?",
    options: [
      { id: "A", text: "L'Alto Rappresentante dell'Unione per gli affari esteri e la politica di sicurezza" },
      { id: "B", text: "Il Segretario Generale della NATO" },
      { id: "C", text: "Il Ministro degli Esteri dello Stato che ha la presidenza semestrale di turno" },
      { id: "D", text: "Il Presidente del Parlamento europeo" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 18, par. 3, TUE, l'Alto Rappresentante per gli affari esteri e la politica di sicurezza presiede in via permanente la formazione 'Affari Esteri' del Consiglio dell'UE ed è contemporaneamente uno dei Vicepresidenti della Commissione.",
    hint: "È il responsabile della politica estera e di sicurezza comune (PESC).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_012",
    question: "Quale istituzione dell'Unione Europea detiene il monopolio quasi generale dell'iniziativa legislativa?",
    options: [
      { id: "A", text: "La Commissione Europea" },
      { id: "B", text: "La Corte di Giustizia UE" },
      { id: "C", text: "La Banca Centrale Europea" },
      { id: "D", text: "Il Comitato Economico e Sociale" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 17, par. 2, TUE, gli atti legislativi dell'Unione possono essere adottati solo su proposta della Commissione, salvo che i trattati non dispongano diversamente. La Commissione è l'organo esecutivo indipendente custode dei trattati.",
    hint: "La Commissione 'propone', il Parlamento e il Consiglio 'dispongono/approvano'.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_013",
    question: "A quale istituzione spetta votare la mozione di censura nei confronti della Commissione Europea?",
    options: [
      { id: "A", text: "Al Parlamento Europeo, a maggioranza dei due terzi dei voti espressi e a maggioranza dei suoi componenti" },
      { id: "B", text: "Al Consiglio Europeo all'unanimità" },
      { id: "C", text: "Alla Corte dei Conti europea" },
      { id: "D", text: "Ai Parlamenti nazionali riuniti a Roma" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 234 TFUE e l'art. 17 TUE prevedono che il Parlamento europeo possa votare una mozione di censura sull'operato della Commissione. Se approvata (a maggioranza di due terzi dei voti espressi e maggioranza dei componenti), i membri della Commissione si dimettono collettivamente dalle loro funzioni.",
    hint: "Rapporto di responsabilità politica della Commissione davanti al Parlamento europeo.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_014",
    question: "Che caratteristiche ha il 'Regolamento' europeo ai sensi dell'art. 288 del TFUE?",
    options: [
      { id: "A", text: "Ha portata generale, è obbligatorio in tutti i suoi elementi ed è direttamente applicabile in ciascuno degli Stati membri" },
      { id: "B", text: "Vincola solo per il risultato da raggiungere, lasciando agli Stati la competenza per forma e mezzi" },
      { id: "C", text: "È vincolante solo se ratificato con legge formale dal Parlamento nazionale" },
      { id: "D", text: "Ha mero valore programmatico e non produce effetti diretti verso i privati" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 288, comma 2, TFUE stabilisce: 'Il regolamento ha portata generale. Esso è obbligatorio in tutti i suoi elementi e direttamente applicabile in ciascuno degli Stati membri'. Non necessita di atti di recepimento nazionale ed entra direttamente negli ordinamenti interni.",
    hint: "Portata generale, obbligatorietà integrale e diretta applicabilità immediata.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_015",
    question: "Che caratteristiche ha la 'Direttiva' europea ai sensi dell'art. 288 del TFUE?",
    options: [
      { id: "A", text: "Vincola lo Stato membro cui è rivolta per quanto riguarda il risultato da raggiungere, salva restando la competenza degli organi nazionali in merito alla forma e ai mezzi" },
      { id: "B", text: "È direttamente applicabile nei confronti dei cittadini fin dal giorno della pubblicazione sulla GUUE senza necessità di norme interne" },
      { id: "C", text: "Ha portata generale e si rivolge a tutti i cittadini senza distinzioni" },
      { id: "D", text: "Non ha mai alcun effetto vincolante per le autorità pubbliche" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 288, comma 3, TFUE dispone: 'La direttiva vincola lo Stato membro cui è rivolta per quanto riguarda il risultato da raggiungere, salva restando la competenza degli organi nazionali in merito alla forma e ai mezzi'. Richiede un atto statale di recepimento entro il termine fissato.",
    hint: "Obbliga sul risultato finale ma lascia libera la scelta di forma e mezzi agli Stati.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_016",
    question: "A quali condizioni una direttiva comunitaria non tempestivamente recepita produce 'effetti diretti verticali'?",
    options: [
      { id: "A", text: "Qualora le sue disposizioni siano chiare, precise e incondizionate, potendo essere invocate dal singolo cittadino nei confronti dello Stato inadempiente" },
      { id: "B", text: "In qualsiasi caso anche nei rapporti orizzontali tra privati cittadini" },
      { id: "C", text: "Solo se autorizzata con sentenza preliminare della Corte Costituzionale" },
      { id: "D", text: "Mai, la direttiva non può in nessun caso produrre effetti prima del recepimento" }
    ],
    correctAnswerId: "A",
    explanation: "Secondo la consolidata giurisprudenza della CGUE (casi Van Duyn, Ratti), le direttive 'self-executing' non recepite entro la scadenza possono essere fatte valere direttamente dai singoli nei confronti dello Stato inadempiente (efficacia diretta verticale ascendente), mentre non hanno efficacia orizzontale tra privati.",
    hint: "Disposizioni chiare, precise, incondizionate azionabili dal cittadino contro la PA.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_017",
    question: "In che cosa consiste il principio del primato del diritto dell'Unione Europea sull'ordinamento interno degli Stati membri?",
    options: [
      { id: "A", text: "Le norme dell'Unione prevalgono sulle norme interne contrastanti, anche posteriori e di rango legislativo primario, che il giudice nazionale deve disapplicare" },
      { id: "B", text: "Le leggi statali prevalgono sempre sui regolamenti comunitari" },
      { id: "C", text: "I trattati comunitari sono subordinati ai regolamenti regionali" },
      { id: "D", text: "Il diritto UE si applica solo dopo un referendum confermativo popolare" }
    ],
    correctAnswerId: "A",
    explanation: "Sancito dalla Corte di Giustizia a partire dalla storica sentenza Costa c. ENEL (1964) e ribadito dalla sentenza Simmenthal (1978), il principio del primato comporta che il diritto dell'Unione prevale sul diritto nazionale confliggente, imponendo al giudice nazionale di disapplicare la norma interna contrastante.",
    hint: "Prevalenza del diritto unionale e dovere del giudice interno di disapplicare la legge nazionale in contrasto.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_018",
    question: "Come ha recepito la Corte Costituzionale italiana il principio del primato del diritto UE (sentenza Granital n. 170/1984)?",
    options: [
      { id: "A", text: "Ordinamento interno e ordinamento comunitario sono distinti e autonomi ma coordinati: la norma interna incompatibile non è dichiarata incostituzionale, bensì disapplicata (ritratta) a favore della norma UE direttamente applicabile" },
      { id: "B", text: "La Corte Costituzionale ha respinto il primato dichiarando nulle tutte le direttive" },
      { id: "C", text: "Le leggi italiane sono state formalmente incorporate nel Trattato di Roma" },
      { id: "D", text: "Il giudice ordinario deve sollevare sempre questione di legittimità costituzionale prima di disapplicare una legge" }
    ],
    correctAnswerId: "A",
    explanation: "Con la celebre sentenza Granital (170/1984), la Consulta ha adottato la teoria dualista: l'ordinamento italiano e quello comunitario sono ordinamenti autonomi e coordinati ex art. 11 Cost. Il giudice ordinario deve disapplicare direttamente la norma nazionale contrastante con una norma UE self-executing senza sollevare questione di costituzionalità.",
    hint: "Sentenza Granital: disapplicazione diretta della legge interna contrastante da parte del giudice comune.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_019",
    question: "Che cosa rappresenta la 'teoria dei controlimiti' elaborata dalla Corte Costituzionale italiana?",
    options: [
      { id: "A", text: "Il limite insuperabile al primato del diritto UE, rappresentato dai principi supremi dell'ordinamento costituzionale italiano e dai diritti inalienabili della persona umana" },
      { id: "B", text: "Il divieto per l'Italia di superare il 3% del deficit pubblico" },
      { id: "C", text: "Il controllo doganale sulle merci provenienti da Paesi extra-UE" },
      { id: "D", text: "Il limite numerico dei regolamenti comunitari adottabili in un anno" }
    ],
    correctAnswerId: "A",
    explanation: "La teoria dei controlimiti stabilisce che, sebbene l'ordinamento italiano consenta limitazioni di sovranità a favore dell'UE (art. 11 Cost.), tali cessioni non possono mai violare i principi supremi dell'ordine costituzionale e i diritti inviolabili della persona, a presidio dei quali la Consulta mantiene un sindacato ultimo.",
    hint: "I principi supremi e i diritti inviolabili della Costituzione italiana resistono anche alle norme UE.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_UE_020",
    question: "Quale strumento giurisdizionale ex art. 267 del TFUE consente al giudice nazionale di chiedere alla CGUE l'interpretazione dei trattati o la validità degli atti dell'Unione?",
    options: [
      { id: "A", text: "Il rinvio pregiudiziale" },
      { id: "B", text: "Il ricorso per infrazione" },
      { id: "C", text: "Il ricorso per annullamento" },
      { id: "D", text: "Il ricorso in carenza" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 267 TFUE disciplina il rinvio pregiudiziale (di interpretazione o di validità): il giudice nazionale dinanzi al quale sorge una questione di diritto UE può, e se di ultima istanza deve, sospendere il processo e rimettere la questione alla Corte di Giustizia UE per assicurare un'interpretazione uniforme.",
    hint: "Dialogo diretto tra giudice nazionale e giudice di Lussemburgo per garantire l'uniformità del diritto UE.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_021",
    question: "I giudici nazionali di ultima istanza (es. Corte di Cassazione, Consiglio di Stato) sono obbligati a sollevare il rinvio pregiudiziale alla CGUE?",
    options: [
      { id: "A", text: "Sì, hanno l'obbligo di rimettere la questione alla Corte di Giustizia, salvo che la questione sia identica ad una già decisa o che la corretta interpretazione si imponga con evidenza tale da non lasciare dubbi (atto chiaro)" },
      { id: "B", text: "No, la facoltà è sempre puramente discrezionale" },
      { id: "C", text: "Solo se vi è il consenso formale del Ministro della Giustizia" },
      { id: "D", text: "È fatto espresso divieto ai giudici di ultima istanza di adire la CGUE" }
    ],
    correctAnswerId: "A",
    explanation: "Ai sensi dell'art. 267, comma 3, TFUE e della giurisprudenza Cilfit, il giudice di ultima istanza è tenuto a sollevare il rinvio pregiudiziale, tranne nei casi di 'acte éclairé' (questione già risolta) o 'acte clair' (il significato della norma è talmente evidente da non lasciare spazio a ragionevoli dubbi).",
    hint: "Dottrina dell'atto chiaro (sentenza CILFIT).",
    level: "avanzato"
  },
  {
    id: "Q_DIR_UE_022",
    question: "Chi può promuovere il ricorso per inadempimento (procedura di infrazione) contro uno Stato membro ai sensi degli artt. 258 e 259 TFUE?",
    options: [
      { id: "A", text: "La Commissione Europea oppure un altro Stato membro" },
      { id: "B", text: "Qualsiasi cittadino europeo direttamente dinanzi alla CGUE" },
      { id: "C", text: "Esclusivamente il Presidente del Consiglio Europeo" },
      { id: "D", text: "Il Segretario Generale dell'ONU" }
    ],
    correctAnswerId: "A",
    explanation: "La procedura di infrazione è promossa dalla Commissione Europea (art. 258 TFUE) mediante lettera di messa in mora e parere motivato, oppure da un altro Stato membro (art. 259 TFUE). I singoli cittadini possono solo presentare una denuncia/esposto alla Commissione.",
    hint: "La Commissione è l'attrice istituzionale ordinaria per infrazione dei Trattati.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_023",
    question: "Cosa può imporre la Corte di Giustizia UE allo Stato membro che non abbia dato esecuzione ad una precedente sentenza di inadempimento (art. 260 TFUE)?",
    options: [
      { id: "A", text: "Il pagamento di una somma forfettaria o di una penalità di mora" },
      { id: "B", text: "La decadenza automatica dall'Unione Europea" },
      { id: "C", text: "L'arresto dei ministri competenti" },
      { id: "D", text: "Il divieto di voto per 20 anni in tutte le istituzioni" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 260, par. 2, TFUE stabilisce che, su ricorso della Commissione, la Corte può condannare lo Stato inadempiente al pagamento di sanzioni pecuniarie consistenti in una somma forfettaria e/o in una penalità di mora giornaliera fino alla rimozione dell'infrazione.",
    hint: "Condanna a pesanti sanzioni finanziarie (somma forfettaria e penalità di mora).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_024",
    question: "Che cos'è la 'procedura legislativa ordinaria' dell'Unione Europea (art. 294 TFUE)?",
    options: [
      { id: "A", text: "L'adozione congiunta di un regolamento, una direttiva o una decisione da parte del Parlamento europeo e del Consiglio, su proposta della Commissione (ex codecisione)" },
      { id: "B", text: "L'adozione di un decreto da parte del solo Presidente della Commissione" },
      { id: "C", text: "L'approvazione delle leggi da parte dei soli Parlamenti nazionali" },
      { id: "D", text: "La consultazione plebiscitaria dei cittadini dei 27 Paesi" }
    ],
    correctAnswerId: "A",
    explanation: "La procedura legislativa ordinaria (art. 294 TFUE) costituisce la regola generale per l'approvazione degli atti dell'Unione: Parlamento e Consiglio agiscono su un piano di assoluta parità legislativa (codecisione) su proposta della Commissione.",
    hint: "Adozione congiunta su base paritaria tra Parlamento europeo e Consiglio dell'UE.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_025",
    question: "Come viene calcolata la maggioranza qualificata nel Consiglio dell'Unione Europea (regola della doppia maggioranza ex art. 16 TUE)?",
    options: [
      { id: "A", text: "Almeno il 55% degli Stati membri (almeno 15 su 27) che rappresentino almeno il 65% della popolazione complessiva dell'Unione" },
      { id: "B", text: "La maggioranza assoluta degli Stati purché abbiano l'Euro come moneta" },
      { id: "C", text: "I due terzi degli Stati membri senza vincolo demografico" },
      { id: "D", text: "Almeno il 75% degli Stati e l'85% della popolazione" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 16, par. 4, TUE prevede la regola della doppia maggioranza: per l'approvazione occorre il voto favorevole di almeno il 55% dei membri del Consiglio (almeno 15 Stati), che totalizzino almeno il 65% della popolazione dell'UE.",
    hint: "55% degli Stati e 65% della popolazione dell'Unione Europea.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_026",
    question: "Da quanti Stati deve essere composta la minoranza di blocco nel Consiglio dell'Unione Europea?",
    options: [
      { id: "A", text: "Almeno 4 membri del Consiglio che rappresentino più del 35% della popolazione dell'Unione" },
      { id: "B", text: "Da qualsiasi singolo Stato membro con diritto di veto" },
      { id: "C", text: "Da almeno 10 Stati indipendentemente dalla popolazione" },
      { id: "D", text: "Da almeno 2 Stati fondatori" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 16, par. 4, TUE stabilisce che la minoranza di blocco deve comprendere almeno quattro Stati membri, al fine di evitare che solo 2 o 3 grandi Paesi da soli possano paralizzare l'adozione delle decisioni.",
    hint: "Occorrono almeno 4 Paesi membri per formare una valida minoranza di blocco.",
    level: "avanzato"
  },
  {
    id: "Q_DIR_UE_027",
    question: "Chi possiede la cittadinanza dell'Unione Europea ai sensi dell'art. 20 del TFUE?",
    options: [
      { id: "A", text: "Chiunque abbia la cittadinanza di uno Stato membro; la cittadinanza dell'Unione si aggiunge alla cittadinanza nazionale e non la sostituisce" },
      { id: "B", text: "Chiunque risieda stabilmente nel territorio europeo da almeno tre mesi" },
      { id: "C", text: "Soltanto chi supera un esame di diritto comunitario a Bruxelles" },
      { id: "D", text: "Tutti i cittadini del continente europeo compresi quelli extra-UE" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 20 TFUE stabilisce: 'È istituita una cittadinanza dell'Unione. È cittadino dell'Unione chiunque abbia la cittadinanza di uno Stato membro. La cittadinanza dell'Unione si aggiunge alla cittadinanza nazionale e non la sostituisce'.",
    hint: "Status derivato che si aggiunge senza sostituire la cittadinanza nazionale.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_028",
    question: "Quale diritto elettorale riconosce l'art. 22 TFUE al cittadino dell'Unione residente in uno Stato membro di cui non è cittadino?",
    options: [
      { id: "A", text: "Il diritto di elettorato attivo e passivo alle elezioni comunali e alle elezioni del Parlamento europeo alle stesse condizioni dei cittadini di detto Stato" },
      { id: "B", text: "Il diritto di votare alle elezioni politiche per il Parlamento nazionale" },
      { id: "C", text: "Il diritto di candidarsi a Presidente della Repubblica" },
      { id: "D", text: "Nessun diritto di voto al di fuori del proprio Stato di origine" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 22 TFUE attribuisce ad ogni cittadino dell'Unione residente in uno Stato membro diverso dal proprio il diritto di votare ed essere eletto alle elezioni amministrative comunali e alle elezioni del Parlamento europeo alle medesime condizioni dei cittadini dello Stato ospitante.",
    hint: "Voto per le elezioni comunali e per il Parlamento europeo.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_029",
    question: "Quale principio sancisce la storica sentenza della CGUE 'Francovich' (1991)?",
    options: [
      { id: "A", text: "Il principio della responsabilità patrimoniale e risarcitoria dello Stato membro per i danni causati ai singoli dalla mancata o scorretta attuazione di una direttiva UE" },
      { id: "B", text: "Il divieto per gli enti locali di bandire concorsi pubblici" },
      { id: "C", text: "L'obbligo di adottare la moneta unica entro sei mesi" },
      { id: "D", text: "La prevalenza del diritto penale interno sulle norme comunitarie" }
    ],
    correctAnswerId: "A",
    explanation: "Con la sentenza Francovich e Bonifaci (cause C-6/90 e C-9/90), la CGUE ha affermato il principio fondamentale della responsabilità risarcitoria dello Stato membro inadempiente per violazione del diritto UE nei confronti dei privati danneggiati.",
    hint: "Diritto al risarcimento del danno contro lo Stato per mancato recepimento delle direttive.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_030",
    question: "Quale articolo della Costituzione italiana impegna il legislatore statale e regionale al rispetto dei vincoli derivanti dall'ordinamento comunitario?",
    options: [
      { id: "A", text: "Articolo 117, primo comma" },
      { id: "B", text: "Articolo 1" },
      { id: "C", text: "Articolo 50" },
      { id: "D", text: "Articolo 138" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 117, comma 1, Cost. (come modificato dalla L. Cost. 3/2001) sancisce: 'La potestà legislativa è esercitata dallo Stato e dalle Regioni nel rispetto della Costituzione, nonché dei vincoli derivanti dall'ordinamento comunitario e dagli obblighi internazionali'.",
    hint: "Vincolo esplicito di conformità della legge statale e regionale all'ordinamento UE.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_031",
    question: "Come viene attuato ordinariamente il diritto dell'Unione Europea nell'ordinamento italiano ai sensi della Legge n. 234/2012?",
    options: [
      { id: "A", text: "Mediante due distinti strumenti legislativi annuali: la Legge di delegazione europea e la Legge europea" },
      { id: "B", text: "Attraverso decreti ministeriali non soggetti a controllo parlamentare" },
      { id: "C", text: "Con l'automatica traduzione in italiano pubblicata sul sito del Quirinale" },
      { id: "D", text: "Mediante ordini di servizio prefettizi" }
    ],
    correctAnswerId: "A",
    explanation: "La Legge n. 234/2012 ha sdoppiato la precedente legge comunitaria annuale in due strumenti distinti: la Legge di delegazione europea (per il conferimento di deleghe legislative al Governo per il recepimento di direttive) e la Legge europea (per l'adeguamento normativo diretto e chiusura delle procedure di infrazione).",
    hint: "Legge di delegazione europea + Legge europea annuale (L. 234/2012).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_032",
    question: "Quali sono le 'quattro libertà fondamentali' su cui si basa il mercato interno dell'Unione Europea?",
    options: [
      { id: "A", text: "Libera circolazione delle merci, delle persone, dei servizi e dei capitali" },
      { id: "B", text: "Libertà di stampa, di sciopero, di culto e di riunione" },
      { id: "C", text: "Libertà di spesa, di debito, di tassazione e di svalutazione" },
      { id: "D", text: "Libera circolazione di armi, veicoli pesanti, valuta estera e petrolio" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 26 TFUE sancisce che il mercato interno comporta uno spazio senza frontiere interne, nel quale è assicurata la libera circolazione delle merci, delle persone, dei servizi e dei capitali (le c.d. quattro libertà cardine comunitarie).",
    hint: "Merci, persone, servizi e capitali: i 4 pilastri del mercato unico europeo.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_033",
    question: "Che cosa vieta l'art. 34 del TFUE in materia di libera circolazione delle merci?",
    options: [
      { id: "A", text: "Le restrizioni quantitative all'importazione nonché qualsiasi misura di effetto equivalente tra gli Stati membri" },
      { id: "B", text: "Il trasporto di merci per via aerea tra capitali" },
      { id: "C", text: "La vendita a distanza di prodotti alimentari" },
      { id: "D", text: "L'applicazione di marchi di garanzia nazionali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 34 TFUE vieta tra gli Stati membri le restrizioni quantitative all'importazione nonché qualsiasi misura ad effetto equivalente (definita dalla formula Dassonville come ogni normativa commerciale che ostacoli direttamente o indirettamente il commercio intracomunitario).",
    hint: "Divieto di dazi, contingenti e misure equivalenti (principio del mutuo riconoscimento, sentenza Cassis de Dijon).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_034",
    question: "In che cosa consiste il 'principio del mutuo riconoscimento' sancito dalla giurisprudenza 'Cassis de Dijon' (1979)?",
    options: [
      { id: "A", text: "I prodotti legalmente fabbricati e commercializzati in uno Stato membro devono essere ammessi liberamente al commercio in tutti gli altri Stati membri, salvo inderogabili esigenze imperative di interesse generale" },
      { id: "B", text: "Il riconoscimento reciproco dei titoli nobiliari" },
      { id: "C", text: "L'obbligo di unificare tutte le ricette tipiche regionali" },
      { id: "D", text: "La reciprocità di voto tra cittadini europei ed extra-europei" }
    ],
    correctAnswerId: "A",
    explanation: "Con la storica sentenza Cassis de Dijon, la CGUE ha stabilito che ogni bene legalmente prodotto e venduto in uno Stato membro dell'UE può circolare liberamente negli altri Paesi, non potendo gli Stati opporre regole tecniche interne a meno di giustificate esigenze imperative di interesse generale.",
    hint: "Un prodotto conforme alle leggi di uno Stato UE può circolare liberamente in tutta l'Unione.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_035",
    question: "Quale divieto pone l'art. 107 del TFUE in merito agli 'aiuti di Stato' concessi dai Paesi membri alle imprese?",
    options: [
      { id: "A", text: "Sono incompatibili con il mercato interno gli aiuti concessi dagli Stati che, favorendo talune imprese o produzioni, falsino o minaccino di falsare la concorrenza e incidano sugli scambi tra Stati membri" },
      { id: "B", text: "È vietato alle imprese pagare le imposte locali" },
      { id: "C", text: "È vietato concedere qualsiasi credito bancario alle piccole imprese" },
      { id: "D", text: "Tutti gli aiuti sono sempre vietati anche in caso di calamità naturali gravissime" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 107, par. 1, TFUE pone il divieto generale degli aiuti di Stato che alterano la parità concorrenziale nel mercato unico, salvo deroghe 'de jure' (es. danni da calamità naturali) o autorizzabili dalla Commissione (sviluppo economico di regioni svantaggiate, progetti di comune interesse europeo).",
    hint: "Divieto di sovvenzioni pubbliche distorsive della concorrenza.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_036",
    question: "Quale compito fondamentale è affidato alla Banca Centrale Europea (BCE) ai sensi dell'art. 127 del TFUE?",
    options: [
      { id: "A", text: "Mantenere la stabilità dei prezzi nell'area dell'euro" },
      { id: "B", text: "Fissare le imposte sul reddito per tutti i cittadini comunitari" },
      { id: "C", text: "Finanziare direttamente i disavanzi dei governi nazionali con moneta legale" },
      { id: "D", text: "Gestire il bilancio delle singole regioni europee" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 127, par. 1, TFUE stabilisce chiaramente: 'L'obiettivo principale del Sistema europeo di banche centrali [...] è il mantenimento della stabilità dei prezzi'. Solo subordinatamente a ciò, sostiene le politiche economiche generali dell'Unione.",
    hint: "L'obiettivo prioritario e primario statutario della BCE è la stabilità dei prezzi (controllo dell'inflazione).",
    level: "base"
  },
  {
    id: "Q_DIR_UE_037",
    question: "Cosa stabilisce l'art. 123 del TFUE circa il divieto di finanziamento monetario dei debiti pubblici?",
    options: [
      { id: "A", text: "È vietata la concessione di scoperti di conto o qualsiasi altra facilitazione creditizia da parte della BCE o delle banche centrali nazionali a istituzioni o governi dell'Unione e l'acquisto diretto di titoli di debito pubblico all'emissione" },
      { id: "B", text: "La BCE è obbligata a comprare tutti i titoli di debito emessi dal Tesoro" },
      { id: "C", text: "I debiti pubblici devono essere ripianati annualmente dalla Commissione" },
      { id: "D", text: "Gli Stati possono stampare liberamente banconote euro senza autorizzazione" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 123 TFUE sancisce il tassativo divieto di monetizzazione del debito pubblico: la BCE e le banche centrali non possono concedere crediti diretti né acquistare titoli pubblici sul mercato primario (all'emissione) direttamente dagli Stati.",
    hint: "Divieto di finanziamento monetario diretto degli Stati da parte della banca centrale.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_038",
    question: "In quale sede giurisdizionale si articolano la Corte di Giustizia e il Tribunale dell'Unione Europea (art. 19 TUE)?",
    options: [
      { id: "A", text: "Presso la Corte di Giustizia dell'Unione Europea con sede a Lussemburgo" },
      { id: "B", text: "Presso la Corte Europea dei Diritti dell'Uomo con sede a Strasburgo" },
      { id: "C", text: "Presso la Corte Internazionale di Giustizia con sede a L'Aja" },
      { id: "D", text: "Presso il Tribunale Penale Internazionale a Ginevra" }
    ],
    correctAnswerId: "A",
    explanation: "L'istituzione giudiziaria dell'UE è la Corte di Giustizia dell'Unione Europea (CGUE), che ha sede a Lussemburgo e comprende la Corte di Giustizia (organo superiore) e il Tribunale (istituito per sgravare il contenzioso promosso da persone fisiche e giuridiche).",
    hint: "La CGUE ha sede a Lussemburgo (da non confondere con la CEDU di Strasburgo o la Corte dell'Aja).",
    level: "base"
  },
  {
    id: "Q_DIR_UE_039",
    question: "Qual è la differenza fondamentale tra la Corte di Giustizia dell'Unione Europea (CGUE) e la Corte Europea dei Diritti dell'Uomo (CEDU)?",
    options: [
      { id: "A", text: "La CGUE è un'istituzione dell'Unione Europea con sede a Lussemburgo; la CEDU appartiene al Consiglio d'Europa (organizzazione diversa dall'UE) con sede a Strasburgo" },
      { id: "B", text: "La CGUE giudica solo reati di guerra, la CEDU reati fiscali" },
      { id: "C", text: "Sono lo stesso identico tribunale con due nomi alternativi" },
      { id: "D", text: "La CEDU emana regolamenti direttamente applicabili, la CGUE no" }
    ],
    correctAnswerId: "A",
    explanation: "La CGUE (Lussemburgo) è l'organo giudiziario dell'Unione Europea che assicura il rispetto del diritto dell'UE. La CEDU (Strasburgo) è l'organo del Consiglio d'Europa (istituito nel 1949 con 46 Stati membri) competente per le violazioni della Convenzione Europea dei Diritti dell'Uomo del 1950.",
    hint: "Consiglio d'Europa e CEDU non sono organi dell'Unione Europea.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_040",
    question: "Chi nomina i membri della Commissione Europea dopo la designazione e l'approvazione parlamentare?",
    options: [
      { id: "A", text: "Il Consiglio Europeo a maggioranza qualificata, su proposta concordata con il Presidente eletto della Commissione e previa approvazione del Parlamento Europeo" },
      { id: "B", text: "Il Segretario Generale delle Nazioni Unite" },
      { id: "C", text: "I cittadini con elezione popolare diretta simultanea" },
      { id: "D", text: "La Corte di Giustizia all'unanimità" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 17, par. 7, TUE delinea la procedura: il Consiglio europeo propone al Parlamento il Presidente della Commissione; il Parlamento lo elegge; il Consiglio d'intesa col Presidente adotta l'elenco dei Commissari; la Commissione collegiale è sottoposta al voto di approvazione del Parlamento ed è infine formalmente nominata dal Consiglio europeo.",
    hint: "Procedura articolata con voto di approvazione parlamentare dell'intero collegio.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_041",
    question: "In caso di recesso di uno Stato membro dall'Unione Europea (come avvenuto con la Brexit), quale articolo del TUE si applica?",
    options: [
      { id: "A", text: "Articolo 50 del TUE" },
      { id: "B", text: "Articolo 1 del TFUE" },
      { id: "C", text: "Articolo 139 del TUE" },
      { id: "D", text: "Articolo 7 del TUE" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 50 del Trattato sull'Unione Europea (introdotto da Lisbona) disciplina la procedura di recesso volontario e unilaterale di uno Stato membro dall'Unione, con notifica al Consiglio europeo e negoziazione di un accordo di recesso entro un termine di due anni (salvo proroga).",
    hint: "La celebre clausola di recesso volontario: Articolo 50 TUE.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_042",
    question: "Che cosa si intende per 'decisione' ai sensi dell'art. 288 del TFUE?",
    options: [
      { id: "A", text: "Un atto obbligatorio in tutti i suoi elementi; se designa i destinatari, è obbligatoria soltanto nei confronti di questi" },
      { id: "B", text: "Un parere non vincolante rivolto alle imprese" },
      { id: "C", text: "Una proposta di legge ancora in discussione" },
      { id: "D", text: "Un accordo tra sindacati europei" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 288, comma 4, TFUE stabilisce: 'La decisione è obbligatoria in tutti i suoi elementi. Se designa i destinatari è obbligatoria soltanto nei confronti di questi'. Può avere carattere individuale (es. decisioni antitrust della Commissione) o generale.",
    hint: "Obbligatoria in tutti i suoi elementi, a portata individuale o generale.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_043",
    question: "Cosa stabilisce l'art. 7 del TUE in caso di violazione grave e persistente dei valori dell'Unione da parte di uno Stato membro?",
    options: [
      { id: "A", text: "La sospensione di alcuni dei diritti derivanti dall'applicazione dei trattati, compresi i diritti di voto del rappresentante di tale Stato nel Consiglio" },
      { id: "B", text: "L'espulsione immediata con perdita del territorio nazionale" },
      { id: "C", text: "La chiusura forzata di tutte le ambasciate" },
      { id: "D", text: "Una multa pari all'intero debito pubblico dello Stato" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 7 TUE prevede una procedura sanzionatoria per tutelare i valori di cui all'art. 2 (democrazia, stato di diritto, rispetto dei diritti umani). Il Consiglio europeo può constatare all'unanimità l'esistenza di una violazione grave e persistente e il Consiglio può deliberare a maggioranza qualificata di sospendere il diritto di voto dello Stato.",
    hint: "Procedura di salvaguardia dello stato di diritto con sospensione del diritto di voto nel Consiglio.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_044",
    question: "Che ruolo svolge il Mediatore Europeo ai sensi dell'art. 228 del TFUE?",
    options: [
      { id: "A", text: "Riceve e istruisce le denunce relative a casi di cattiva amministrazione nell'azione delle istituzioni, degli organi o degli organismi dell'Unione" },
      { id: "B", text: "Rappresenta l'Unione Europea dinanzi al Tribunale penale internazionale" },
      { id: "C", text: "Media gli accordi salariali delle aziende multinazionali" },
      { id: "D", text: "Negozia i trattati di pace al confine dell'Europa" }
    ],
    correctAnswerId: "A",
    explanation: "Il Mediatore europeo (art. 228 TFUE), eletto dal Parlamento europeo, esamina i casi di cattiva amministrazione (ingiustizie, ritardi ingiustificati, discriminazioni, mancanza di trasparenza) compiuti dalle istituzioni ed organi dell'UE (ad esclusione della Corte di Giustizia nell'esercizio delle funzioni giurisdizionali).",
    hint: "È il difensore civico per la 'cattiva amministrazione' delle istituzioni europee.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_045",
    question: "A quale istituzione spetta verificare la legittimità e la regolarità delle entrate e delle spese dell'Unione Europea ex art. 287 TFUE?",
    options: [
      { id: "A", text: "Alla Corte dei Conti europea" },
      { id: "B", text: "Alla Banca Europea per gli Investimenti (BEI)" },
      { id: "C", text: "All'OLAF in via esclusiva" },
      { id: "D", text: "Al Consiglio di Sicurezza" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 287 TFUE attribuisce alla Corte dei Conti europea il controllo di legittimità e regolarità di tutte le entrate e le spese dell'Unione, nonché l'accertamento della sana gestione finanziaria, presentando una dichiarazione di affidabilità (DAS) a Parlamento e Consiglio.",
    hint: "Organo di controllo contabile e finanziario esterno dell'UE.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_046",
    question: "Che cos'è l'Accordo di Schengen e quale principio fondamentale ha istituito?",
    options: [
      { id: "A", text: "L'eliminazione dei controlli sistematici alle frontiere interne tra i Paesi aderenti e il rafforzamento dei controlli alle frontiere esterne" },
      { id: "B", text: "L'adozione obbligatoria della carta d'identità bilingue" },
      { id: "C", text: "Il divieto di viaggiare all'estero per motivi turistici senza visto" },
      { id: "D", text: "L'istituzione di una moneta unica cartacea provvisoria" }
    ],
    correctAnswerId: "A",
    explanation: "L'acquis di Schengen (integrato nei Trattati dal Trattato di Amsterdam) abolisce i controlli alle frontiere interne tra gli Stati partecipanti, istituendo un regime comune di vigilanza alle frontiere esterne e cooperazione di polizia giudiziaria (SIS - Sistema d'Informazione Schengen).",
    hint: "Abolizione delle barriere e dei controlli ai confini interni dello spazio Schengen.",
    level: "base"
  },
  {
    id: "Q_DIR_UE_047",
    question: "Che cos'è l'Iniziativa dei Cittadini Europei (ICE) disciplinata dall'art. 11, paragrafo 4, del TUE?",
    options: [
      { id: "A", text: "La facoltà per almeno un milione di cittadini europei appartenenti ad almeno un quarto degli Stati membri di invitare la Commissione a presentare una proposta legislativa" },
      { id: "B", text: "Il potere di abrogare con referendum popolare un regolamento comunitario" },
      { id: "C", text: "La possibilità di eleggere direttamente il Presidente dell'Unione ogni due anni" },
      { id: "D", text: "La raccolta fondi per finanziare borse di studio Erasmus" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 11, par. 4, TUE disciplina l'Iniziativa dei cittadini europei (ICE): almeno 1 milione di cittadini dell'UE, provenienti da almeno 7 Stati membri diversi, possono invitare la Commissione europea a presentare una proposta appropriata su materie in cui l'Unione ha competenza.",
    hint: "Democrazia partecipativa: 1 milione di firme da almeno un quarto dei Paesi membri.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_048",
    question: "Cosa stabilisce l'art. 263 del TFUE in ordine al ricorso per annullamento?",
    options: [
      { id: "A", text: "Consente alla Corte di Giustizia UE di controllare la legittimità degli atti legislativi e degli altri atti vincolanti delle istituzioni per vizi di incompetenza, violazione di forme sostanziali, violazione dei trattati o sviamento di potere" },
      { id: "B", text: "Permette a ciascun cittadino di annullare qualsiasi delibera comunale davanti al TAR" },
      { id: "C", text: "Riguarda l'annullamento dei debiti sovrani dei Paesi in crisi" },
      { id: "D", text: "È un ricorso riservato esclusivamente alle organizzazioni sindacali" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 263 TFUE disciplina il ricorso di annullamento, con cui si impugnano atti illegittimi delle istituzioni UE entro due mesi. I vizi censurabili sono: incompetenza, violazione di forme sostanziali, violazione dei Trattati o di qualsiasi regola di diritto relativa alla loro applicazione, e sviamento di potere.",
    hint: "I quattro classici vizi di legittimità degli atti comunitari davanti alla CGUE.",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_049",
    question: "Che cos'è l'Ufficio del Pubblico Ministero Europeo (EPPO - European Public Prosecutor's Office)?",
    options: [
      { id: "A", text: "Un organo indipendente dell'Unione Europea incaricato di indagare, perseguire e rinviare a giudizio gli autori di reati che ledono gli interessi finanziari dell'UE (es. frodi, corruzione, riciclaggio, frodi IVA transfrontaliere)" },
      { id: "B", text: "Un'agenzia di polizia che gestisce le carceri europee" },
      { id: "C", text: "La cancelleria della Corte di Cassazione a Roma" },
      { id: "D", text: "La commissione disciplinare dei parlamentari europei" }
    ],
    correctAnswerId: "A",
    explanation: "Istituito con regolamento UE 2017/1939 in cooperazione rafforzata, l'EPPO (operativo dal 2021 con sede a Lussemburgo) è la procura europea competente a perseguire penalmente dinanzi ai tribunali nazionali i delitti lesivi del bilancio e degli interessi finanziari dell'Unione Europea (direttiva PIF).",
    hint: "Procura europea per i reati a danno dei fondi e delle finanze comunitarie (PNRR, fondi UE, frodi IVA).",
    level: "intermedio"
  },
  {
    id: "Q_DIR_UE_050",
    question: "Quale principio disciplina la cooperazione leale tra l'Unione Europea e gli Stati membri ai sensi dell'art. 4, paragrafo 3, del TUE?",
    options: [
      { id: "A", text: "L'Unione e gli Stati membri si rispettano e si assistono reciprocamente nell'adempimento dei compiti derivanti dai trattati, astenendosi da qualsiasi misura che rischi di compromettere la realizzazione degli obiettivi dell'Unione" },
      { id: "B", text: "Gli Stati membri devono versare il 50% delle imposte erariali direttamente a Bruxelles" },
      { id: "C", text: "L'obbligo di uniformare le leggi penali nazionali entro 5 anni" },
      { id: "D", text: "La facoltà degli Stati di ignorare le sentenze della Corte di Giustizia se sfavorevoli" }
    ],
    correctAnswerId: "A",
    explanation: "L'art. 4, par. 3, TUE sancisce il principio di leale cooperazione: gli Stati membri adottano ogni misura di carattere generale o particolare idonea ad assicurare l'adempimento degli obblighi derivanti dai trattati e facilitano all'Unione l'adempimento dei suoi compiti, astenendosi da misure pregiudizievoli.",
    hint: "Assistenza reciproca e divieto di comportamenti contrari agli scopi dell'Unione.",
    level: "base"
  }
];

const dest = path.join(__dirname, '../public/db/master_bank/diritto/unione_europea.json');
fs.writeFileSync(dest, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Generated ${questions.length} questions in ${dest}`);
