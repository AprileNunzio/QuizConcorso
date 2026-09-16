const fs = require('fs');
const path = require('path');

const questions = [
  {
    id: 'Q_LNG_ENG_051',
    question: "Complete the sentence with the correct form: 'If the applicant ______ the missing documentation on time, the pension claim would not have been rejected.'",
    options: [
      { id: 'A', text: "had submitted" },
      { id: 'B', text: "submitted" },
      { id: 'C', text: "would submit" },
      { id: 'D', text: "has submitted" },
    ],
    correctAnswerId: 'A',
    explanation: "This is a Third Conditional sentence expressing an impossible/hypothetical past condition and its past result: If + past perfect ('had submitted'), would + have + past participle ('would not have been rejected').",
    hint: "Third conditional formula: If + Past Perfect, would have + past participle.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_052',
    question: "In European administrative and legal terminology, what is the best English translation for 'sicurezza sociale / previdenza sociale'?",
    options: [
      { id: 'A', text: "Social security" },
      { id: 'B', text: "Social vigilance" },
      { id: 'C', text: "Public certainty" },
      { id: 'D', text: "Welfare police" },
    ],
    correctAnswerId: 'A',
    explanation: "'Social security' is the universally accepted institutional and legal term for public social insurance and social welfare systems protecting citizens against risks like old age, disability, and unemployment.",
    hint: "The standard international term for state welfare and pensions is 'social security'.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_053',
    question: "Choose the correct preposition: 'Public officials must comply ______ the Code of Conduct at all times.'",
    options: [
      { id: 'A', text: "with" },
      { id: 'B', text: "to" },
      { id: 'C', text: "at" },
      { id: 'D', text: "by" },
    ],
    correctAnswerId: 'A',
    explanation: "The verb 'comply' strictly collocates with the preposition 'with' (to comply with rules, regulations, laws, or guidelines).",
    hint: "The fixed verb phrase is 'to comply with'.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_054',
    question: "Which phrasal verb means 'to perform or conduct' an audit or investigation?",
    options: [
      { id: 'A', text: "Carry out" },
      { id: 'B', text: "Give up" },
      { id: 'C', text: "Put off" },
      { id: 'D', text: "Break into" },
    ],
    correctAnswerId: 'A',
    explanation: "'Carry out' means to execute, perform, or conduct (e.g., 'The internal auditor will carry out an inspection of the regional branch').",
    hint: "'Carry out' is commonly used with audits, research, inquiries, and instructions.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_055',
    question: "Complete the formal sentence with the correct negative inversion: 'Seldom ______ such a high volume of digital pension requests in a single week.'",
    options: [
      { id: 'A', text: "have we received" },
      { id: 'B', text: "we have received" },
      { id: 'C', text: "we received" },
      { id: 'D', text: "are we receiving" },
    ],
    correctAnswerId: 'A',
    explanation: "When a sentence starts with a restrictive or negative adverbial like 'Seldom', 'Rarely', or 'Never', formal English requires subject-auxiliary inversion (Seldom + have [auxiliary] + we [subject] + received [main verb]).",
    hint: "Negative adverbs at the beginning of a sentence trigger inversion (auxiliary before subject).",
    level: "avanzato"
  },
  {
    id: 'Q_LNG_ENG_056',
    question: "What is the Italian equivalent of the institutional English term 'statutory deadline'?",
    options: [
      { id: 'A', text: "Termine perentorio o previsto dalla legge" },
      { id: 'B', text: "Proroga facoltativa straordinaria" },
      { id: 'C', text: "Statuto societario transitorio" },
      { id: 'D', text: "Accordo informale tra colleghi" },
    ],
    correctAnswerId: 'A',
    explanation: "'Statutory' means enacted or required by statute (law). A 'statutory deadline' is a time limit established by law, often of a mandatory or peremptory nature.",
    hint: "'Statutory' derives from 'statute' (norma di legge).",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_057',
    question: "Choose the correct modal verb to express past deduction based on strong evidence: 'The department head wasn't in her office all morning; she ______ been attending the board meeting.'",
    options: [
      { id: 'A', text: "must have" },
      { id: 'B', text: "should have" },
      { id: 'C', text: "might not" },
      { id: 'D', text: "would rather" },
    ],
    correctAnswerId: 'A',
    explanation: "'Must have + past participle' expresses a logical deduction or certainty about a past event based on strong evidence ('must have been attending'). 'Should have' expresses an unfulfilled expectation or criticism.",
    hint: "'Must have + past participle' expresses logical certainty about the past.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_058',
    question: "Complete the sentence: 'We look forward to ______ your feedback regarding the updated service delivery charter.'",
    options: [
      { id: 'A', text: "receiving" },
      { id: 'B', text: "receive" },
      { id: 'C', text: "received" },
      { id: 'D', text: "be receiving" },
    ],
    correctAnswerId: 'A',
    explanation: "In the expression 'look forward to', 'to' is a preposition, not an infinitive marker. Therefore, it must be followed by a noun or a gerund (-ing form: 'receiving').",
    hint: "After 'look forward to', always use the gerund (-ing).",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_059',
    question: "What does the formal legal idiom 'without prejudice to' mean in contracts and public notices?",
    options: [
      { id: 'A', text: "Fatto salvo quanto previsto da / senza pregiudizio per" },
      { id: 'B', text: "In contrasto insanabile con" },
      { id: 'C', text: "In violazione intenzionale di" },
      { id: 'D', text: "Con l'annullamento retroattivo di" },
    ],
    correctAnswerId: 'A',
    explanation: "'Without prejudice to' is standard legal drafting language meaning 'without affecting, damaging, or impairing' (fatto salvo / fermo restando).",
    hint: "It protects existing rights from being impaired by a new clause.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_060',
    question: "Complete the sentence with the correct passive construction: 'All personal data ______ in compliance with EU Regulation 2016/679 before being transferred.'",
    options: [
      { id: 'A', text: "must be processed" },
      { id: 'B', text: "must have process" },
      { id: 'C', text: "must process" },
      { id: 'D', text: "has to processing" },
    ],
    correctAnswerId: 'A',
    explanation: "Passive with a modal verb of obligation: modal ('must') + 'be' + past participle ('processed'). 'All personal data must be processed'.",
    hint: "Passive form: modal + be + past participle.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_061',
    question: "What does the noun 'whistleblower' refer to in administrative anti-corruption law?",
    options: [
      { id: 'A', text: "An employee who reports misconduct, illegal acts, or corrupt practices occurring within an organization." },
      { id: 'B', text: "An external vendor supplying siren alarms and emergency equipment to public offices." },
      { id: 'C', text: "A sports referee invited to supervise staff recreational competitions." },
      { id: 'D', text: "A network administrator responsible for sound and acoustic calibrations." },
    ],
    correctAnswerId: 'A',
    explanation: "A 'whistleblower' is an insider (e.g., employee) who reports corruption, illegality, fraud, or danger to the public interest occurring within a public body or enterprise.",
    hint: "A person who exposes wrongdoing inside an organization.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_062',
    question: "Choose the correct phrase to complete the administrative statement: 'The new guidelines were adopted ______ improving service delivery for vulnerable citizens.'",
    options: [
      { id: 'A', text: "with a view to" },
      { id: 'B', text: "in spite to" },
      { id: 'C', text: "owing on" },
      { id: 'D', text: "as far by" },
    ],
    correctAnswerId: 'A',
    explanation: "'With a view to + -ing' is a formal expression meaning 'with the aim or intention of' (al fine di / con l'obiettivo di).",
    hint: "'With a view to' expresses institutional purpose followed by a gerund.",
    level: "avanzato"
  },
  {
    id: 'Q_LNG_ENG_063',
    question: "In economics and social security, what is 'severance pay'?",
    options: [
      { id: 'A', text: "Trattamento di Fine Rapporto (TFR) o indennità di fine servizio corrisposta alla cessazione del rapporto di lavoro." },
      { id: 'B', text: "La trattenuta sindacale mensile sulla busta paga del lavoratore." },
      { id: 'C', text: "Una penale pecuniaria applicata per ritardo ingiustificato sul posto di lavoro." },
      { id: 'D', text: "Il rimborso delle spese vive sostenute durante una missione estera." },
    ],
    correctAnswerId: 'A',
    explanation: "'Severance pay' is the compensation paid by an employer to an employee upon termination of their employment contract (comparable to Italian TFR or indennità di licenziamento/fine rapporto).",
    hint: "Pay upon severing (terminating) the employment relationship.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_064',
    question: "Complete the sentence: 'The director insisted that all audit reports ______ submitted before Friday noon.'",
    options: [
      { id: 'A', text: "be" },
      { id: 'B', text: "are" },
      { id: 'C', text: "were" },
      { id: 'D', text: "would" },
    ],
    correctAnswerId: 'A',
    explanation: "In formal English, verbs expressing demand, recommendation, or necessity (such as 'insist', 'demand', 'require', 'recommend') take the subjunctive mood, which uses the base form of the verb without inflections ('be submitted').",
    hint: "Formal subjunctive after verbs of demanding/insisting: use the base form 'be'.",
    level: "avanzato"
  },
  {
    id: 'Q_LNG_ENG_065',
    question: "What is the meaning of the formal term 'stakeholder' in public management?",
    options: [
      { id: 'A', text: "Any individual, group, or organization that has an interest in or is affected by the outcomes of a public body's policies and services." },
      { id: 'B', text: "The majority shareholder who owns financial equity in a private limited company." },
      { id: 'C', text: "A physical fence installed to secure the server room against unauthorised access." },
      { id: 'D', text: "A legal officer authorized to seize bank accounts during bankruptcy proceedings." },
    ],
    correctAnswerId: 'A',
    explanation: "In governance, a 'stakeholder' (portatore di interesse) is any entity, user, citizen, employee, trade union, or public authority that affects or is affected by the decisions of the organization.",
    hint: "Portatore di interesse in public policy and service management.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_066',
    question: "Select the correct connector: 'The administration met its performance targets ______ facing severe budget constraints.'",
    options: [
      { id: 'A', text: "despite" },
      { id: 'B', text: "although" },
      { id: 'C', text: "even" },
      { id: 'D', text: "whereas" },
    ],
    correctAnswerId: 'A',
    explanation: "'Despite' is a preposition followed by a noun phrase or a gerund ('facing severe budget constraints'). 'Although' would require a full clause with subject and finite verb ('although it faced...').",
    hint: "'Despite' is followed directly by a gerund or noun phrase without 'of'.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_067',
    question: "What does the phrase 'due diligence' mean in institutional contracting and procurement?",
    options: [
      { id: 'A', text: "The comprehensive appraisal and investigation of a business or legal situation before entering into an agreement or contract." },
      { id: 'B', text: "The delay incurred by suppliers due to extreme weather conditions." },
      { id: 'C', text: "An emergency loan granted by the central bank at a subsidized interest rate." },
      { id: 'D', text: "A ceremonial inspection performed during official national holidays." },
    ],
    correctAnswerId: 'A',
    explanation: "'Due diligence' (dovuta diligenza / verifica preliminare di conformità) is the thorough operational, legal, and financial investigation undertaken prior to signing contracts or tenders.",
    hint: "Careful audit and background assessment before making commitments.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_068',
    question: "Which phrasal verb means 'to prepare or write' a legal draft or official contract?",
    options: [
      { id: 'A', text: "Draw up" },
      { id: 'B', text: "Back out" },
      { id: 'C', text: "Take over" },
      { id: 'D', text: "Look into" },
    ],
    correctAnswerId: 'A',
    explanation: "'Draw up' is the standard phrasal verb meaning to formulate, draft, or compose a written document, contract, plan, or agreement (e.g., 'to draw up a decree').",
    hint: "'Draw up' means redigere o stilare un documento.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_069',
    question: "Complete the sentence: 'Under Italian administrative law, public bodies are ______ by the principle of transparency.'",
    options: [
      { id: 'A', text: "bound" },
      { id: 'B', text: "bind" },
      { id: 'C', text: "bonding" },
      { id: 'D', text: "bounded" },
    ],
    correctAnswerId: 'A',
    explanation: "'Bound' is the past participle of 'bind'. 'To be bound by' means to be legally obliged or constrained to comply with a law or principle (essere vincolati da).",
    hint: "'To be bound by' means essere obbligati/vincolati per legge.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_070',
    question: "What is the meaning of 'redress' in citizen-administration relations?",
    options: [
      { id: 'A', text: "Remedy or compensation for a wrong, grievance, or administrative malfunction." },
      { id: 'B', text: "A formal dress code mandatory for public hearings." },
      { id: 'C', text: "The physical relocation of staff to newly painted offices." },
      { id: 'D', text: "A second warning issued prior to disciplinary dismissal." },
    ],
    correctAnswerId: 'A',
    explanation: "'Redress' (ricorso, indennizzo, riparazione) means setting right a wrong or obtaining remedy/compensation for unfair treatment or maladministration (e.g., 'right to seek redress').",
    hint: "Rimborso, risarcimento o rimedio a un'ingiustizia o errore.",
    level: "avanzato"
  },
  {
    id: 'Q_LNG_ENG_071',
    question: "Choose the correct sentence in reported speech: Direct: 'We will publish the test results tomorrow,' the commissioner said.",
    options: [
      { id: 'A', text: "The commissioner said that they would publish the test results the following day." },
      { id: 'B', text: "The commissioner said that we will publish the test results tomorrow." },
      { id: 'C', text: "The commissioner told that they published the test results tomorrow." },
      { id: 'D', text: "The commissioner said they would published the test results next day." },
    ],
    correctAnswerId: 'A',
    explanation: "In reported speech, backshifting transforms 'will publish' into 'would publish', 'we' becomes 'they', and time adverbials like 'tomorrow' become 'the following day' or 'the next day'.",
    hint: "Will -> would, tomorrow -> the following day.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_072',
    question: "In a formal email, which closing formula is most appropriate when addressing an unknown recipient starting with 'Dear Sir or Madam'?",
    options: [
      { id: 'A', text: "Yours faithfully," },
      { id: 'B', text: "Yours sincerely," },
      { id: 'C', text: "Best regards always," },
      { id: 'D', text: "Cheers," },
    ],
    correctAnswerId: 'A',
    explanation: "Standard British/International formal correspondence rule: 'Dear Sir/Madam' pairs with 'Yours faithfully,'. When you address a person by name ('Dear Mr Smith'), you close with 'Yours sincerely,'.",
    hint: "Dear Sir/Madam -> Yours faithfully. Dear Name -> Yours sincerely.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_073',
    question: "What is the meaning of 'discretionary power' in public administrative law?",
    options: [
      { id: 'A', text: "Potere discrezionale (la facoltà della PA di scegliere la soluzione più opportuna per il pubblico interesse entro i limiti della legge)." },
      { id: 'B', text: "Potere vincolato senza alcun margine di apprezzamento dell'interesse pubblico." },
      { id: 'C', text: "La facoltà di mantenere segrete le spese dei partiti politici." },
      { id: 'D', text: "Un'autorizzazione temporanea a violare le norme contabili per motivi di cassa." },
    ],
    correctAnswerId: 'A',
    explanation: "'Discretionary power' translates directly to 'potere discrezionale', meaning the lawful authority of a public body to exercise judgment and evaluate different choices in pursuing the public interest.",
    hint: "Discrezionalità amministrativa in inglese si traduce 'administrative discretion' o 'discretionary power'.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_074',
    question: "Choose the correct prepositional phrase: 'The resolution was adopted ______ the Board of Directors.'",
    options: [
      { id: 'A', text: "on behalf of" },
      { id: 'B', text: "in front with" },
      { id: 'C', text: "on account to" },
      { id: 'D', text: "in spite for" },
    ],
    correctAnswerId: 'A',
    explanation: "'On behalf of' means 'as a representative of' or 'in the name of' (a nome di / per conto di).",
    hint: "Per conto di / a nome di = 'on behalf of'.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_075',
    question: "Complete the sentence: 'Public spending must be strictly monitored to prevent ______ of funds.'",
    options: [
      { id: 'A', text: "misappropriation" },
      { id: 'B', text: "appropriationable" },
      { id: 'C', text: "misappropriatingly" },
      { id: 'D', text: "properness" },
    ],
    correctAnswerId: 'A',
    explanation: "'Misappropriation of funds' (appropriazione indebita / distrazione di fondi pubblici / peculato) is the noun that accurately fits after the verb 'prevent'.",
    hint: "The legal term for wrongful taking or misapplication of money is 'misappropriation'.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_076',
    question: "What is the role of an 'ombudsman' in public governance?",
    options: [
      { id: 'A', text: "An independent official appointed to investigate citizens' complaints against maladministration by public authorities." },
      { id: 'B', text: "A certified IT technician tasked with building biometric firewalls." },
      { id: 'C', text: "A bailiff in charge of collecting real estate debts for commercial banks." },
      { id: 'D', text: "A legal scholar who translates international treaties into national dialects." },
    ],
    correctAnswerId: 'A',
    explanation: "The 'ombudsman' (difensore civico) is an independent public officer who receives and investigates complaints from individuals against public sector administrative bodies.",
    hint: "'Ombudsman' is the universal international term for difensore civico.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_077',
    question: "Choose the correct verbal expression: 'The committee decided to ______ the meeting until the financial audit was concluded.'",
    options: [
      { id: 'A', text: "adjourn" },
      { id: 'B', text: "expire" },
      { id: 'C', text: "terminate into" },
      { id: 'D', text: "relinquish" },
    ],
    correctAnswerId: 'A',
    explanation: "'To adjourn a meeting' is the formal term meaning to suspend proceedings with the intention of resuming at a later time (aggiornare / rinviare la seduta).",
    hint: "Formal term for postponing or suspending an official session is 'to adjourn'.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_078',
    question: "What does 'conflict of interest' signify in the public sector context?",
    options: [
      { id: 'A', text: "A situation where a public servant's private interests could improperly influence the performance of their official duties." },
      { id: 'B', text: "A dispute between two rival political parties during an electoral campaign." },
      { id: 'C', text: "A disagreement between union leaders over the date of a national strike." },
      { id: 'D', text: "A computer glitch that causes two databases to crash simultaneously." },
    ],
    correctAnswerId: 'A',
    explanation: "A 'conflict of interest' (conflitto di interessi) arises when an official's personal, financial, or family interests clash with their public duty of impartiality and integrity.",
    hint: "Personal interest vs public duty of impartiality.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_079',
    question: "Complete the sentence with the correct relative pronoun: 'The newly appointed inspector, ______ credentials were confirmed by the ministry, will begin work on Monday.'",
    options: [
      { id: 'A', text: "whose" },
      { id: 'B', text: "whom" },
      { id: 'C', text: "which" },
      { id: 'D', text: "who" },
    ],
    correctAnswerId: 'A',
    explanation: "'Whose' indicates possession ('whose credentials' = the credentials of the inspector). It is used for both persons and organizations in formal English relative clauses.",
    hint: "'Whose' denotes possession (i cui titoli / le cui credenziali).",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_080',
    question: "What is the meaning of 'non-binding opinion' in European administrative decision-making?",
    options: [
      { id: 'A', text: "Parere non vincolante (un parere consultivo che l'organo decidente non è obbligato a seguire)." },
      { id: 'B', text: "Un atto giurisdizionale definitivo contro cui non è ammesso ricorso." },
      { id: 'C', text: "Una clausola penale inserita obbligatoriamente nei contratti di locazione." },
      { id: 'D', text: "Un documento informatico privo di marcatura temporale certificata." },
    ],
    correctAnswerId: 'A',
    explanation: "'Non-binding' means advisory or consultative without coercive legal obligation. An authority must request or consider it, but is not legally obliged to conform its final decision to it.",
    hint: "'Binding' = vincolante; 'Non-binding' = non vincolante / facoltativo.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_081',
    question: "Select the correct adjective: 'The candidate presented ______ evidence proving five years of continuous service.'",
    options: [
      { id: 'A', text: "compelling" },
      { id: 'B', text: "compellingly" },
      { id: 'C', text: "compulsion" },
      { id: 'D', text: "compulsoriness" },
    ],
    correctAnswerId: 'A',
    explanation: "'Compelling' is an adjective meaning persuasive, convincing, and cogent (e.g., 'compelling evidence' = prove inconfutabili / convincenti).",
    hint: "'Compelling' is an adjective modifying the noun 'evidence'.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_082',
    question: "Which of the following expressions means 'in vigore' when speaking of laws and regulations?",
    options: [
      { id: 'A', text: "In force / in effect" },
      { id: 'B', text: "On strain" },
      { id: 'C', text: "By vigor" },
      { id: 'D', text: "At strength" },
    ],
    correctAnswerId: 'A',
    explanation: "In legal and institutional English, when a statute, regulation, or treaty is active and legally binding, it is said to be 'in force' (to come into force / to enter into force) or 'in effect'.",
    hint: "'Enter into force' = entrare in vigore.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_083',
    question: "Complete the sentence with the correct conditional structure: 'Had the regional director known about the discrepancy, he ______ immediate corrective measures.'",
    options: [
      { id: 'A', text: "would have taken" },
      { id: 'B', text: "will take" },
      { id: 'C', text: "takes" },
      { id: 'D', text: "had taken" },
    ],
    correctAnswerId: 'A',
    explanation: "This is an inverted Third Conditional (without 'if'): 'Had the director known' = 'If the director had known'. The main clause requires 'would have + past participle' ('would have taken').",
    hint: "Inversion of third conditional: Had + subject + past participle -> would have + past participle.",
    level: "avanzato"
  },
  {
    id: 'Q_LNG_ENG_084',
    question: "What does the administrative abbreviation 'KPI' stand for in public performance management?",
    options: [
      { id: 'A', text: "Key Performance Indicator" },
      { id: 'B', text: "Known Protocol Index" },
      { id: 'C', text: "Knowledge Procurement Item" },
      { id: 'D', text: "Key Public Initiative" },
    ],
    correctAnswerId: 'A',
    explanation: "'KPI' stands for Key Performance Indicator (indicatore chiave di prestazione), used in PA management to measure efficiency, efficacy, and target fulfillment.",
    hint: "Standard acronym for measuring organizational achievement and results.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_085',
    question: "Choose the correct term: 'Failure to perform contractual duties constitutes a ______ of contract.'",
    options: [
      { id: 'A', text: "breach" },
      { id: 'B', text: "brake" },
      { id: 'C', text: "branch" },
      { id: 'D', text: "brooch" },
    ],
    correctAnswerId: 'A',
    explanation: "'Breach of contract' (inadempimento / violazione contrattuale) is the established legal term for breaking or failing to fulfill terms of an agreement.",
    hint: "'Breach' means infrazione o violazione.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_086',
    question: "What is the meaning of the English phrase 'burden of proof' in administrative and court proceedings?",
    options: [
      { id: 'A', text: "Onere della prova (l'obbligo a carico di una parte processuale di dimostrare i fatti costitutivi della propria pretesa)." },
      { id: 'B', text: "Il costo materiale della stampa delle perizie d'ufficio." },
      { id: 'C', text: "La responsabilità penale per falsa testimonianza." },
      { id: 'D', text: "La durata massima della custodia cautelare dell'indagato." },
    ],
    correctAnswerId: 'A',
    explanation: "'Burden of proof' (onus probandi) translates to 'onere della prova': the duty of a party to provide sufficient evidence to support their claim or defense.",
    hint: "'Burden' = onere, carico. 'Proof' = prova.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_087',
    question: "Complete the sentence: 'The guidelines emphasize that services must be accessible ______ all citizens, regardless of disability.'",
    options: [
      { id: 'A', text: "to" },
      { id: 'B', text: "with" },
      { id: 'C', text: "at" },
      { id: 'D', text: "towards" },
    ],
    correctAnswerId: 'A',
    explanation: "The adjective 'accessible' takes the preposition 'to' when indicating the persons or groups who are able to use or reach something ('accessible to all citizens').",
    hint: "Collocation: 'accessible to someone'.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_088',
    question: "What is meant by 'maladministration' in the European Union public administration framework?",
    options: [
      { id: 'A', text: "Poor, improper, or unlawful administrative action, including administrative irregularities, unfairness, discrimination, or unreasonable delay." },
      { id: 'B', text: "The ordinary management of financial accounts during bank holidays." },
      { id: 'C', text: "The voluntary retirement of senior managers at age 65." },
      { id: 'D', text: "The introduction of automated ticketing software in hospitals." },
    ],
    correctAnswerId: 'A',
    explanation: "'Maladministration' (cattiva amministrazione) covers all instances of improper or unlawful administrative conduct, neglect, abuse of power, refusal of information, or unjust delays identified by European and national Ombudsmen.",
    hint: "Cattiva amministrazione, negligenza o scorrettezza burocratica.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_089',
    question: "Choose the correct verb form: 'By the time the new digital platform goes live next month, the technicians ______ testing it for six months.'",
    options: [
      { id: 'A', text: "will have been" },
      { id: 'B', text: "will be" },
      { id: 'C', text: "have been" },
      { id: 'D', text: "are" },
    ],
    correctAnswerId: 'A',
    explanation: "Future Perfect Continuous: 'By the time [future point], subject + will have been + -ing'. It stresses the duration of an ongoing activity up to a specific point in the future.",
    hint: "'By the time...' in the future calls for the Future Perfect (will have been).",
    level: "avanzato"
  },
  {
    id: 'Q_LNG_ENG_090',
    question: "What does the idiom 'to phase in' mean regarding the implementation of new legislation?",
    options: [
      { id: 'A', text: "To introduce or implement gradually in stages over a period of time." },
      { id: 'B', text: "To abruptly abolish a regulation without prior notification." },
      { id: 'C', text: "To veto a bill passed by parliament." },
      { id: 'D', text: "To increase the retirement age by ten years overnight." },
    ],
    correctAnswerId: 'A',
    explanation: "'To phase in' means to introduce something gradually in successive stages (introdurre gradualmente / a scaglioni), as opposed to 'phase out' which means to eliminate gradually.",
    hint: "Introdurre per gradi. L'opposto è 'phase out' (eliminare per gradi).",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_091',
    question: "What is the English legal term for 'rinuncia a un diritto'?",
    options: [
      { id: 'A', text: "Waiver" },
      { id: 'B', text: "Warranty" },
      { id: 'C', text: "Warrant" },
      { id: 'D', text: "Wharf" },
    ],
    correctAnswerId: 'A',
    explanation: "A 'waiver' is an intentional relinquishment, surrender, or abandonment of a known right, claim, or privilege (rinuncia formale / deroga).",
    hint: "To waive a right -> noun: waiver.",
    level: "intermedio"
  },
  {
    id: 'Q_LNG_ENG_092',
    question: "Complete the sentence: 'The board approved the budget ______ condition that staffing expenses remain unchanged.'",
    options: [
      { id: 'A', text: "on" },
      { id: 'B', text: "at" },
      { id: 'C', text: "under" },
      { id: 'D', text: "by" },
    ],
    correctAnswerId: 'A',
    explanation: "The established idiomatic conjunction is 'on condition that' (a condizione che / a patto che).",
    hint: "Fixed expression: 'on condition that'.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_093',
    question: "What is the translation of 'organo collegiale' in English institutional contexts?",
    options: [
      { id: 'A', text: "Collegial body / collective organ" },
      { id: 'B', text: "School council unit" },
      { id: 'C', text: "Solitary officer" },
      { id: 'D', text: "University club" },
    ],
    correctAnswerId: 'A',
    explanation: "'Collegial body' or 'collective body' is the standard translation for a board, committee, or assembly of members acting jointly (organo collegiale).",
    hint: "'Collegial body' denotes a committee or multi-member organ.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_094',
    question: "Which term denotes the state of being answerable and legally responsible for one's official decisions and expenditures?",
    options: [
      { id: 'A', text: "Accountability" },
      { id: 'B', text: "Accounting" },
      { id: 'C', text: "Accuracy" },
      { id: 'D', text: "Acquittal" },
    ],
    correctAnswerId: 'A',
    explanation: "'Accountability' is the obligation of public organizations and civil servants to account for their activities, accept responsibility for them, and disclose the results in a transparent manner.",
    hint: "Responsabilizzazione, trasparenza e dovere di rendiconto.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_095',
    question: "Select the sentence with the correct subjunctive expression after 'lest':",
    options: [
      { id: 'A', text: "The records were encrypted lest sensitive data be leaked." },
      { id: 'B', text: "The records were encrypted lest sensitive data would have leak." },
      { id: 'C', text: "The records were encrypted lest sensitive data leaks." },
      { id: 'D', text: "The records were encrypted lest sensitive data is leaking." },
    ],
    correctAnswerId: 'A',
    explanation: "In formal literary and legal English, 'lest' (per timore che / affinché non) takes the present subjunctive (base form of the verb: 'be leaked' or 'should be leaked').",
    hint: "'Lest' is followed by the subjunctive base form (be, take, do).",
    level: "avanzato"
  },
  {
    id: 'Q_LNG_ENG_096',
    question: "What does 'procurement' mean in public sector operations?",
    options: [
      { id: 'A', text: "The process of purchasing, sourcing, or acquiring goods, services, or public works through tenders and competitive procedures." },
      { id: 'B', text: "The medical procurement of organs for surgical transplantation." },
      { id: 'C', text: "The delegation of judicial authority from a magistrate to a clerk." },
      { id: 'D', text: "The voluntary surrender of corporate bonds before maturity." },
    ],
    correctAnswerId: 'A',
    explanation: "'Public procurement' (appalti pubblici / approvvigionamento di beni e servizi) is the overall procedure by which governmental agencies purchase works, goods, and services from economic operators.",
    hint: "Appalti e acquisti pubblici di beni, servizi e lavori.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_097',
    question: "Complete the sentence with the correct preposition: 'The citizen lodged a formal appeal ______ the administrative rejection.'",
    options: [
      { id: 'A', text: "against" },
      { id: 'B', text: "to" },
      { id: 'C', text: "on" },
      { id: 'D', text: "upon" },
    ],
    correctAnswerId: 'A',
    explanation: "In legal and administrative English, one 'lodges or files an appeal against' an adverse decision, judgment, or decree ('appeal against').",
    hint: "Un ricorso si presenta 'contro' (against) un provvedimento sfavorevole.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_098',
    question: "What is the meaning of 'null and void' in contract law?",
    options: [
      { id: 'A', text: "Nullo e privo di qualsiasi effetto giuridico ab origine." },
      { id: 'B', text: "Temporaneamente sospeso in attesa di visto di congruità." },
      { id: 'C', text: "Valido ma sottoposto a condizione risolutiva decennale." },
      { id: 'D', text: "Applicabile solo ai cittadini residenti all'estero." },
    ],
    correctAnswerId: 'A',
    explanation: "'Null and void' is a legal doublet meaning completely without legal force, invalid, and ineffective from the outset (nullo di pieno diritto).",
    hint: "Legal doublet for completely invalid: nullo e privo di effetti.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_099',
    question: "Choose the correct phrasing: 'The new decree will take ______ from the first day of next month.'",
    options: [
      { id: 'A', text: "effect" },
      { id: 'B', text: "affect" },
      { id: 'C', text: "effort" },
      { id: 'D', text: "effective" },
    ],
    correctAnswerId: 'A',
    explanation: "'To take effect' is the established legal idiom meaning to become operative or binding (produrre effetti / avere efficacia). 'Affect' is usually a verb, whereas 'effect' is the noun.",
    hint: "Take effect = avere efficacia / decorrenza.",
    level: "base"
  },
  {
    id: 'Q_LNG_ENG_100',
    question: "What is the translation of 'imparzialità e buon andamento' (art. 97 Cost.) in European public law literature?",
    options: [
      { id: 'A', text: "Impartiality and good administration (or sound administration / proper functioning)" },
      { id: 'B', text: "Indifference and swift progression" },
      { id: 'C', text: "Partial neutrality and budgetary thrift" },
      { id: 'D', text: "Discretion and speedy judicial review" },
    ],
    correctAnswerId: 'A',
    explanation: "Article 97 of the Italian Constitution's core principles 'imparzialità e buon andamento' are universally translated in EU legal literature and comparative administrative law as 'impartiality and good (or sound) administration'.",
    hint: "Good administration / sound administration + impartiality.",
    level: "intermedio"
  }
];

const filePath = path.join(__dirname, '../public/db/master_bank/lingue/inglese.json');
const bank = JSON.parse(fs.readFileSync(filePath, 'utf8'));
console.log('Initial count in inglese.json:', bank.length);

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
console.log('Successfully updated inglese.json! Total:', bank.length, 'Counts:', counts);
