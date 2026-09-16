const fs = require('fs');
const path = require('path');

const hwQuestions = [
  {
    id: 'Q_INF_HW_051',
    question: "Quale componente della CPU si occupa dell'esecuzione delle operazioni aritmetiche fondamentali e dei confronti logici?",
    options: [
      { id: 'A', text: "L'ALU (Arithmetic Logic Unit)" },
      { id: 'B', text: "La Control Unit (CU)" },
      { id: 'C', text: "Il Program Counter (PC)" },
      { id: 'D', text: "Il Memory Data Register (MDR)" }
    ],
    correctAnswerId: 'A',
    explanation: "L'ALU (Unità Aritmetico-Logica) è il circuito digitale all'interno della CPU deputato al calcolo matematico (somma, sottrazione, moltiplicazione) e logico (AND, OR, NOT, confronti booleani).",
    hint: "ALU sta per Arithmetic Logic Unit.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_052',
    question: "Che funzione svolge il registro 'Program Counter' (PC) all'interno del processore?",
    options: [
      { id: 'A', text: "Contiene l'indirizzo di memoria della prossima istruzione da prelevare (fetch) ed eseguire" },
      { id: 'B', text: "Conta il numero totale di ore di accensione continuativa della macchina" },
      { id: 'C', text: "Memorizza l'istruzione attualmente in fase di decodifica" },
      { id: 'D', text: "Calcola la percentuale di utilizzo della memoria virtuale di swap" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Program Counter (o Instruction Pointer) memorizza l'indirizzo di memoria della prossima istruzione macchina da prelevare e si incrementa automaticamente dopo ogni ciclo di fetch.",
    hint: "Punta sempre alla successiva istruzione nella sequenza di esecuzione.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_053',
    question: "Qual è la differenza fondamentale tra le architetture di memoria 'Von Neumann' e 'Harvard'?",
    options: [
      { id: 'A', text: "Nell'architettura Von Neumann dati e istruzioni condividono lo stesso spazio di memoria e gli stessi bus, mentre in Harvard memorie e bus per dati e istruzioni sono fisicamente separati" },
      { id: 'B', text: "Von Neumann non supporta le memorie cache L1 e L2" },
      { id: 'C', text: "Harvard è utilizzata esclusivamente nei computer quantistici a superconduttori" },
      { id: 'D', text: "Von Neumann richiede obbligatoriamente bus a 128 bit di ampiezza" }
    ],
    correctAnswerId: 'A',
    explanation: "Nel modello di Von Neumann istruzioni di programma e dati risiedono nello stesso spazio d'indirizzamento (creando il potenziale 'collo di bottiglia di Von Neumann'), mentre l'architettura Harvard mantiene spazi di memoria e percorsi di bus separati.",
    hint: "Harvard = bus e memorie separate per dati e codice.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_054',
    question: "Cosa si intende per 'Pipelining' nell'architettura dei moderni microprocessori?",
    options: [
      { id: 'A', text: "La suddivisione dell'elaborazione delle istruzioni in stadi sequenziali indipendenti, consentendo la sovrapposizione temporale di più istruzioni in fasi diverse del ciclo" },
      { id: 'B', text: "Il raffreddamento a liquido mediante condotti in rame dei transistor della scheda madre" },
      { id: 'C', text: "La copia speculare dei dati su due dischi rigidi simultaneamente" },
      { id: 'D', text: "La compressione automatica dei file salvati nella memoria ROM" }
    ],
    correctAnswerId: 'A',
    explanation: "La pipeline divide l'esecuzione di un'istruzione in stadi (Fetch, Decode, Execute, Memory, Write-back), permettendo a una nuova istruzione di entrare nello stadio 1 prima che la precedente abbia completato lo stadio 5.",
    hint: "Lavoro a catena di montaggio applicato alle istruzioni CPU.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_055',
    question: "Nelle memorie cache della CPU, cosa indica l'ordine gerarchico L1, L2 e L3?",
    options: [
      { id: 'A', text: "L1 è la più vicina ai core, la più veloce e la più piccola; L3 è la più capiente, più lenta rispetto a L1/L2 e spesso condivisa tra tutti i core" },
      { id: 'B', text: "L3 è la più veloce in assoluto ed è realizzata con celle DRAM a rinfresco periodico" },
      { id: 'C', text: "L1 è una memoria esterna collocata sul modulo RAM principale" },
      { id: 'D', text: "I livelli L1, L2 e L3 hanno la medesima velocità e differiscono solo per il voltaggio" }
    ],
    correctAnswerId: 'A',
    explanation: "L1 (Level 1) è integrata direttamente nel core, con latenze di pochi cicli di clock; salendo a L2 e L3 la capacità aumenta significativamente a scapito della latenza.",
    hint: "L1: minima capacità, massima velocità; L3: massima capacità tra le cache, latenza maggiore.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_056',
    question: "Che tipologia di memoria RAM è tipicamente utilizzata nei server aziendali ad alta affidabilità come quelli dell'INPS?",
    options: [
      { id: 'A', text: "RAM ECC (Error-Correcting Code), in grado di rilevare e correggere errori a singolo bit al volo" },
      { id: 'B', text: "RAM Non-ECC a bassa latenza per overclocking grafico" },
      { id: 'C', text: "Memorie EEPROM a sola lettura permanente" },
      { id: 'D', text: "Memorie flash NOR ad accesso sequenziale" }
    ],
    correctAnswerId: 'A',
    explanation: "Le memorie ECC (Error-Correcting Code) includono bit aggiuntivi per individuare e correggere automaticamente gli errori a singolo bit causati da interferenze elettromagnetiche o raggi cosmici, garantendo stabilità mission-critical.",
    hint: "ECC = Error-Correcting Code per la correzione automatica degli errori di memoria.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_057',
    question: "Quale protocollo e interfaccia consentono agli SSD moderni (NVMe) di raggiungere velocità di trasferimento di diversi GB/s rispetto ai tradizionali dischi SATA?",
    options: [
      { id: 'A', text: "Il protocollo NVMe basato sul bus PCIe (PCI Express) a più corsie (lanes)" },
      { id: 'B', text: "Il protocollo IDE/ATA su cavo flat a 80 poli" },
      { id: 'C', text: "L'interfaccia seriale RS-232 a 9 pin" },
      { id: 'D', text: "Il bus I2C per sensori termici" }
    ],
    correctAnswerId: 'A',
    explanation: "NVMe (Non-Volatile Memory Express) supera i limiti del bus SATA III (6 Gbps) collegandosi direttamente al bus PCIe della scheda madre, sfruttando code multiple (fino a 64K code) e parallelismo hardware.",
    hint: "NVMe si collega direttamente alle corsie del bus PCI Express.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_058',
    question: "Qual è la funzione del modulo crittografico hardware TPM (Trusted Platform Module) 2.0 presente nei computer aziendali?",
    options: [
      { id: 'A', text: "Generare, memorizzare e proteggere chiavi crittografiche, certificati e misurazioni dell'integrità del sistema di avvio (Secure Boot)" },
      { id: 'B', text: "Aumentare la frequenza di clock della scheda video nei calcoli tridimensionali" },
      { id: 'C', text: "Gestire il traffico dei pacchetti di rete wireless su frequenza a 5 GHz" },
      { id: 'D', text: "Alimentare le ventole del case quando il carico termico supera i 70 gradi" }
    ],
    correctAnswerId: 'A',
    explanation: "Il TPM (Trusted Platform Module) è un chip di sicurezza hardware dedicato alla crittografia sicura (es. per BitLocker), alla firma digitale e all'attestazione dello stato del sistema contro malware a livello di bootkit.",
    hint: "Chip crittografico hardware per la protezione delle chiavi e del boot sicuro.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_059',
    question: "In cosa si differenzia il moderno firmware UEFI rispetto al vecchio sistema BIOS legacy?",
    options: [
      { id: 'A', text: "Supporta dischi con partizionamento GPT oltre i 2 TB, avvio sicuro (Secure Boot), architettura a 32/64 bit e interfaccia grafica avanzata" },
      { id: 'B', text: "Funziona esclusivamente in modalità reale a 16 bit senza supporto per la rete" },
      { id: 'C', text: "Non risiede su chip di memoria non volatile sulla scheda madre" },
      { id: 'D', text: "È incompatibile con i processori multicore x86-64" }
    ],
    correctAnswerId: 'A',
    explanation: "UEFI (Unified Extensible Firmware Interface) ha sostituito il BIOS legacy a 16 bit introducendo supporto nativo per GPT (partizioni fino a 9,4 ZB), tempi di boot più rapidi, Secure Boot e driver modulari indipendenti.",
    hint: "UEFI supera i limiti a 2 TB del BIOS, introduce GPT e il Secure Boot.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_060',
    question: "Che cosa si intende per 'Core' e 'Thread' (o logical processor) in una CPU con tecnologia Simultaneous Multi-Threading (SMT / Hyper-Threading)?",
    options: [
      { id: 'A', text: "Il Core è l'unità di calcolo fisica indipendente; il Thread logico consente a un singolo core fisico di eseguire due flussi di istruzioni contemporaneamente duplicando solo i registri di stato" },
      { id: 'B', text: "Il Thread è la ventola di raffreddamento e il Core è il dissipatore metallico" },
      { id: 'C', text: "Core e Thread sono sinonimi perfettamente coincidenti nel conteggio delle unità fisiche di silicio" },
      { id: 'D', text: "Il Thread è la memoria RAM esterna e il Core è il circuito di alimentazione VRM" }
    ],
    correctAnswerId: 'A',
    explanation: "L'Hyper-Threading/SMT duplica lo stato architetturale del core (registri, program counter) ma condivide le unità di esecuzione fisiche (ALU, FPU), permettendo al sistema operativo di vedere due processori logici per ciascun core fisico.",
    hint: "Core fisico vs processore logico (thread) per sfruttare i tempi morti della pipeline.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_061',
    question: "Quale livello di RAID (Redundant Array of Independent Disks) offre contemporaneamente striping dei dati e parità distribuita su tutti i dischi, tollerando il guasto di un singolo disco?",
    options: [
      { id: 'A', text: "RAID 5" },
      { id: 'B', text: "RAID 0" },
      { id: 'C', text: "RAID 1" },
      { id: 'D', text: "JBOD" }
    ],
    correctAnswerId: 'A',
    explanation: "RAID 5 combina striping a livello di blocchi e parità distribuita (richiede almeno 3 dischi). Se uno dei dischi si guasta, i dati possono essere ricostruiti al volo usando l'operazione logica XOR sui dischi rimanenti.",
    hint: "Parità distribuita su almeno 3 dischi con tolleranza alla rottura di 1 disco = RAID 5.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_062',
    question: "Qual è il vantaggio principale di una configurazione RAID 10 (1+0) rispetto a RAID 5 o RAID 6?",
    options: [
      { id: 'A', text: "Combina il mirroring (RAID 1) e lo striping (RAID 0), offrendo massime prestazioni di I/O e tempi di ricostruzione molto rapidi senza calcoli complessi di parità" },
      { id: 'B', text: "Richiede un solo disco rigido per funzionare regolarmente" },
      { id: 'C', text: "Permette di utilizzare il 100% della capacità complessiva dei dischi installati" },
      { id: 'D', text: "Non necessita di alcun controller hardware o software" }
    ],
    correctAnswerId: 'A',
    explanation: "RAID 10 esegue lo striping su insiemi di dischi speculati (minimo 4 dischi). Poiché non deve calcolare blocchi di parità con algoritmi XOR (come RAID 5/6), garantisce prestazioni di scrittura eccezionali e ricostruzioni immediate.",
    hint: "RAID 10 = Mirroring + Striping, altissime prestazioni di lettura/scrittura senza overhead di parità.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_063',
    question: "Quale standard di bus e connettore grafico supporta larghezze di banda superiori a 40 Gbps e il tunneling contemporaneo di dati PCIe, display DisplayPort e alimentazione USB Power Delivery?",
    options: [
      { id: 'A', text: "Thunderbolt 4 / USB4 (con connettore Type-C)" },
      { id: 'B', text: "VGA analogico D-Sub a 15 pin" },
      { id: 'C', text: "DVI-D Single Link" },
      { id: 'D', text: "Porta parallela IEEE 1284" }
    ],
    correctAnswerId: 'A',
    explanation: "Thunderbolt 4 e USB4 utilizzano il connettore USB-C e garantiscono fino a 40 Gbps di banda bidirezionale, incapsulando video DisplayPort, dati PCIe nativi e fino a 100-240W di alimentazione (Power Delivery).",
    hint: "40 Gbps, connettore Type-C, tunneling PCIe e DisplayPort = Thunderbolt 4 / USB4.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_064',
    question: "Cos'è la memoria 'SRAM' (Static RAM) rispetto alla 'DRAM' (Dynamic RAM)?",
    options: [
      { id: 'A', text: "La SRAM è basata su circuiti bistabili (flip-flop a 4-6 transistor), è molto più veloce e non necessita di cicli periodici di rinfresco, motivo per cui è usata per le memorie cache" },
      { id: 'B', text: "La SRAM si basa su un singolo transistor e un condensatore che si scarica continuamente" },
      { id: 'C', text: "La SRAM mantiene i dati anche a computer spento senza alimentazione elettrica" },
      { id: 'D', text: "La SRAM è la memoria magnetica utilizzata nei floppy disk da 3,5 pollici" }
    ],
    correctAnswerId: 'A',
    explanation: "La SRAM usa transistor incrociati in configurazione flip-flop, evitando la perdita di carica e il refresh continuo richiesto dai condensatori della DRAM, offrendo tempi di accesso dell'ordine di nanosecondi a costo e ingombro maggiori.",
    hint: "SRAM: flip-flop, nessun rinfresco, altissima velocità (memoria cache).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_065',
    question: "Cosa indica il parametro 'TDP' (Thermal Design Power) nelle specifiche hardware di una CPU o GPU?",
    options: [
      { id: 'A', text: "La quantità massima di calore generata dal componente sotto carico di lavoro reale che il sistema di raffreddamento deve essere in grado di dissipare" },
      { id: 'B', text: "La velocità massima di rotazione della ventola in giri al minuto" },
      { id: 'C', text: "Il tempo di decadimento radioattivo del silicio drogato" },
      { id: 'D', text: "Il numero massimo di pixel renderizzabili in un secondo" }
    ],
    correctAnswerId: 'A',
    explanation: "Il TDP (espresso in Watt) misura la potenza termica di progetto che il dissipatore e l'alimentazione devono gestire per mantenere il componente entro le temperature operative di sicurezza.",
    hint: "Thermal Design Power = potenza termica da dissipare.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_066',
    question: "Che cosa si intende per 'Bus Master' all'interno di un'architettura hardware?",
    options: [
      { id: 'A', text: "Un dispositivo o periferica in grado di avviare autonomamente trasferimenti di dati sul bus di sistema senza l'intervento costante della CPU (come nel DMA)" },
      { id: 'B', text: "Il cavo principale che collega l'alimentatore alla presa a muro" },
      { id: 'C', text: "L'amministratore di rete delegato alla configurazione degli switch" },
      { id: 'D', text: "Un programma resident memory che intercetta i tasti premuti sulla tastiera" }
    ],
    correctAnswerId: 'A',
    explanation: "Il bus mastering consente a un controller di periferica (es. scheda di rete o controller RAID) di assumere il controllo del bus e trasferire dati direttamente da/verso la memoria principale (DMA) sgravando la CPU.",
    hint: "La periferica controlla direttamente il bus per scambiare dati senza occupare la CPU.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_HW_067',
    question: "Cosa accade durante la fase di 'POST' (Power-On Self-Test) al momento dell'accensione del computer?",
    options: [
      { id: 'A', text: "Il firmware esegue una serie di controlli diagnostici preliminari sui componenti hardware essenziali (CPU, memoria RAM, controller video, tastiera) prima di avviare il boot loader" },
      { id: 'B', text: "Viene inviata una richiesta HTTP a un server centrale per verificare la licenza software" },
      { id: 'C', text: "Il disco rigido viene formattato a basso livello per eliminare i file temporanei" },
      { id: 'D', text: "Viene avviato direttamente il browser web predefinito dell'utente" }
    ],
    correctAnswerId: 'A',
    explanation: "Il POST è la routine diagnostica eseguita dal firmware (UEFI/BIOS) all'avvio: verifica la presenza e la corretta inizializzazione di processore, RAM, chipset e schede essenziali prima di cedere il controllo al boot loader.",
    hint: "Power-On Self-Test = autodiagnosi hardware iniziale prima del caricamento del sistema operativo.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_068',
    question: "Quale tipologia di attacco hardware sfrutta l'esecuzione speculativa e le memorie cache dei microprocessori moderni?",
    options: [
      { id: 'A', text: "Meltdown e Spectre (Side-Channel Attacks)" },
      { id: 'B', text: "SQL Injection" },
      { id: 'C', text: "Cross-Site Scripting (XSS)" },
      { id: 'D', text: "SYN Flood" }
    ],
    correctAnswerId: 'A',
    explanation: "Meltdown e Spectre sono vulnerabilità microarchitetturali scoperte nel 2018 che sfruttano l'esecuzione speculativa e i canali laterali (side-channel) della cache per leggere dati riservati dalla memoria del kernel o di altri processi.",
    hint: "Vulnerabilità celebri dell'hardware e dell'esecuzione speculativa: Spectre e Meltdown.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_HW_069',
    question: "Nelle memorie flash SSD di tipo NAND, cosa indica la classificazione SLC, MLC, TLC e QLC?",
    options: [
      { id: 'A', text: "Il numero di bit memorizzati in ogni singola cella di memoria: 1 bit (SLC), 2 bit (MLC), 3 bit (TLC), 4 bit (QLC)" },
      { id: 'B', text: "Il numero di porte USB supportate dal controller esterno" },
      { id: 'C', text: "La velocità della ventola in decibel" },
      { id: 'D', text: "Il tipo di connettore di alimentazione SATA a 15 pin" }
    ],
    correctAnswerId: 'A',
    explanation: "Single-Level Cell (1 bit), Multi-Level Cell (2 bit), Triple-Level Cell (3 bit), Quad-Level Cell (4 bit). Più bit per cella aumentano la densità e riducono i costi, ma diminuiscono la velocità e la longevità (cicli P/E).",
    hint: "Indica quanti bit di informazione vengono memorizzati in ciascuna cella NAND.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_070',
    question: "Che cos'è la tecnologia 'ECC on-die' introdotta nativamente nello standard di memoria DDR5?",
    options: [
      { id: 'A', text: "Un circuito di correzione degli errori integrato all'interno di ciascun chip di memoria DRAM per proteggere la densità crescente delle celle, diverso dall'ECC side-band a livello di modulo per server" },
      { id: 'B', text: "Un modulo GPS per tracciare la posizione fisica della scheda madre" },
      { id: 'C', text: "Una ventola microscopica montata su ciascun banco di memoria" },
      { id: 'D', text: "Un sistema di crittografia a chiave pubblica asimmetrica a 4096 bit" }
    ],
    correctAnswerId: 'A',
    explanation: "Nelle DDR5 l'ECC on-die corregge gli errori a livello di silicio all'interno del singolo chip DRAM per compensare la ridottissima scala di fabbricazione; per i server aziendali è comunque necessario l'ECC side-band aggiuntivo per proteggere il bus di trasmissione.",
    hint: "Protezione integrata all'interno del singolo silicio DRAM nelle memorie DDR5.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_HW_071',
    question: "Cosa stabilisce la legge di Moore formulata originariamente da Gordon Moore?",
    options: [
      { id: 'A', text: "Il numero di transistor presenti in un circuito integrato raddoppia approssimativamente ogni due anni" },
      { id: 'B', text: "Il consumo elettrico dei computer si dimezza ogni sei mesi" },
      { id: 'C', text: "La velocità di connessione internet quadruplica ogni dieci anni" },
      { id: 'D', text: "I monitor a tubo catodico hanno una durata massima di cinque anni" }
    ],
    correctAnswerId: 'A',
    explanation: "La legge di Moore (1965) ha previsto la crescita esponenziale della densità dei transistor nei circuiti integrati (raddoppio ogni 18-24 mesi circa), guidando l'evoluzione dei processori per decenni.",
    hint: "Raddoppio dei transistor ogni due anni circa su circuito integrato.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_072',
    question: "Quale tipologia di connettore di alimentazione fornisce l'energia principale alla scheda madre ATX standard nei moderni PC desktop?",
    options: [
      { id: 'A', text: "Connettore a 24 pin ATX principale" },
      { id: 'B', text: "Connettore jack audio da 3.5 mm" },
      { id: 'C', text: "Connettore Molex a 4 pin per floppy disk" },
      { id: 'D', text: "Porta HDMI 2.1" }
    ],
    correctAnswerId: 'A',
    explanation: "L'alimentazione principale delle motherboard ATX standard è fornita dal connettore primario a 24 pin (originariamente 20 pin nelle vecchie specifiche ATX).",
    hint: "Connettore lungo a 24 pin principale sulla scheda madre.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_073',
    question: "Cosa si intende per 'Collo di bottiglia di Von Neumann' (Von Neumann Bottleneck)?",
    options: [
      { id: 'A', text: "Il limite prestazionale imposto dalla larghezza di banda e dalla velocità di trasferimento del bus condiviso tra la CPU e la memoria centrale rispetto alla velocità della CPU stessa" },
      { id: 'B', text: "L'impossibilità di collegare più di due monitor contemporaneamente" },
      { id: 'C', text: "La rottura fisica dei connettori a causa di surriscaldamento estivo" },
      { id: 'D', text: "La limitazione al solo supporto di tastiere con layout anglosassone" }
    ],
    correctAnswerId: 'A',
    explanation: "Poiché il processore elabora dati a frequenze molto superiori alla velocità con cui la memoria RAM può fornirglieli attraverso il bus di sistema, la CPU trascorre cicli preziosi in attesa (risolto parzialmente dalle memorie cache multi-livello).",
    hint: "Il disallineamento tra velocità della CPU e larghezza di banda della memoria centrale.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_HW_074',
    question: "Qual è la funzione del chip 'Northbridge' (oggi integrato direttamente nel die della CPU nei processori moderni)?",
    options: [
      { id: 'A', text: "Gestire la comunicazione ad altissima velocità tra la CPU, la memoria RAM e gli slot grafici primari PCIe" },
      { id: 'B', text: "Gestire esclusivamente le porte lente seriali e parallele" },
      { id: 'C', text: "Alimentare le luci LED decorative del case del computer" },
      { id: 'D', text: "Convertire il segnale di rete da analogico a digitale" }
    ],
    correctAnswerId: 'A',
    explanation: "Nel tradizionale chipset a due componenti, il Northbridge collegava i componenti più veloci (RAM e scheda video). Oggi il memory controller e le linee PCIe per GPU sono integrate direttamente all'interno della CPU.",
    hint: "Northbridge = collegamento veloce con RAM e canali PCIe principali.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_075',
    question: "In cosa consiste la tecnologia di virtualizzazione assistita dall'hardware (Intel VT-x / AMD-V)?",
    options: [
      { id: 'A', text: "Istruzioni hardware dedicate che consentono a un hypervisor di eseguire macchine virtuali (VM) con prestazioni vicine a quelle native, gestendo gli stati di CPU e memoria senza complessa emulazione software" },
      { id: 'B', text: "Un visore per la realtà virtuale collegato tramite cavo HDMI" },
      { id: 'C', text: "Un software per la creazione di cartelle compresse protette da password" },
      { id: 'D', text: "Un protocollo di backup notturno su nastri magnetici" }
    ],
    correctAnswerId: 'A',
    explanation: "Intel VT-x e AMD-V forniscono estensioni al set di istruzioni del processore che permettono agli hypervisor (come VMware ESXi, KVM, Hyper-V) di isolare e gestire direttamente le macchine virtuali con ring dedicati (root/non-root mode).",
    hint: "Supporto della CPU all'hypervisor per eseguire macchine virtuali efficienti.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_076',
    question: "Quale delle seguenti memorie è non volatile e programmabile/cancellabile elettricamente a blocchi?",
    options: [
      { id: 'A', text: "Memoria Flash (NAND/NOR)" },
      { id: 'B', text: "DRAM sincrona (SDRAM)" },
      { id: 'C', text: "Cache L1 della CPU" },
      { id: 'D', text: "Registri interni dell'ALU" }
    ],
    correctAnswerId: 'A',
    explanation: "La memoria flash è un'evoluzione della EEPROM che mantiene i dati senza alimentazione elettrica e consente la cancellazione e riprogrammazione elettrica per blocchi (utilizzata in SSD, chiavette USB e smartphone).",
    hint: "Memoria a stato solido non volatile cancellabile per blocchi: memoria Flash.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_077',
    question: "Qual è il tempo di latenza 'CAS Latency' (CL) specificato nei moduli di memoria RAM?",
    options: [
      { id: 'A', text: "Il ritardo, espresso in cicli di clock, che intercorre tra l'invio del comando di lettura di una colonna di memoria e il momento in cui il dato è disponibile sui pin di uscita" },
      { id: 'B', text: "Il numero di anni di garanzia forniti dal produttore del modulo" },
      { id: 'C', text: "Il tempo impiegato dal computer per eseguire lo spegnimento termico di emergenza" },
      { id: 'D', text: "La distanza fisica in millimetri tra i contatti dorati dello slot" }
    ],
    correctAnswerId: 'A',
    explanation: "La CAS (Column Address Strobe) Latency misura il numero di cicli di clock necessari al chip di memoria per restituire il dato richiesto dopo aver ricevuto l'indirizzo di colonna. A parità di frequenza, una CL inferiore indica maggiore velocità.",
    hint: "Numero di cicli di clock per rendere disponibile il dato in lettura della colonna.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_078',
    question: "Che cosa si intende per architettura CPU 'RISC' rispetto a 'CISC'?",
    options: [
      { id: 'A', text: "RISC (Reduced Instruction Set Computer) usa un insieme ridotto di istruzioni semplici ed uniformi eseguibili in un singolo ciclo, mentre CISC ha istruzioni complesse e di lunghezza variabile" },
      { id: 'B', text: "RISC è un'architettura progettata esclusivamente per videogiochi a 8 bit" },
      { id: 'C', text: "CISC non supporta la memoria cache L2" },
      { id: 'D', text: "I processori RISC non contengono registri interni" }
    ],
    correctAnswerId: 'A',
    explanation: "RISC (es. ARM, RISC-V) privilegia istruzioni semplici di lunghezza fissa ottimizzate per la pipeline, mentre CISC (es. x86 di Intel e AMD) include istruzioni complesse ad alto livello capaci di eseguire più operazioni in memoria con un singolo opcode.",
    hint: "RISC = istruzioni ridotte e snelle a ciclo singolo (ARM). CISC = istruzioni complesse e ricche (x86).",
    level: "base"
  },
  {
    id: 'Q_INF_HW_079',
    question: "Cosa indica l'interfaccia 'S.M.A.R.T.' (Self-Monitoring, Analysis and Reporting Technology) integrata negli hard disk e SSD?",
    options: [
      { id: 'A', text: "Un sistema di monitoraggio interno che analizza parametri di affidabilità (settori riallocati, temperatura, ore di funzionamento, usura celle) per prevedere guasti imminenti" },
      { id: 'B', text: "Un protocollo di intelligenza artificiale per l'indicizzazione automatica dei documenti PDF" },
      { id: 'C', text: "Un connettore per il collegamento di cuffie e microfoni da ufficio" },
      { id: 'D', text: "Un software per la navigazione anonima nel Dark Web" }
    ],
    correctAnswerId: 'A',
    explanation: "S.M.A.R.T. è il sistema diagnostico hardware che traccia lo stato di salute dei drive di memorizzazione, avvisando l'amministratore prima che si verifichi una perdita irreversibile dei dati.",
    hint: "Sistema di monitoraggio e previsione dei guasti hardware delle memorie di massa.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_080',
    question: "Quale livello di RAID richiede un minimo di 4 dischi e tollera il guasto contemporaneo di un massimo di DUE dischi grazie a due serie indipendenti di parità?",
    options: [
      { id: 'A', text: "RAID 6" },
      { id: 'B', text: "RAID 5" },
      { id: 'C', text: "RAID 1" },
      { id: 'D', text: "RAID 0" }
    ],
    correctAnswerId: 'A',
    explanation: "RAID 6 utilizza doppia parità distribuita (usando algoritmi di Reed-Solomon oltre allo XOR) e richiede almeno 4 dischi, consentendo al sistema di continuare a funzionare anche se si rompono due dischi simultaneamente.",
    hint: "Doppia parità e tolleranza al guasto di DUE dischi contemporanei = RAID 6.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_081',
    question: "Nelle architetture di bus PCIe (PCI Express), cosa significa che uno slot è 'PCIe 4.0 x16'?",
    options: [
      { id: 'A', text: "Utilizza la specifica di quarta generazione con una larghezza di 16 corsie (lanes) bidirezionali indipendenti per il trasferimento dati" },
      { id: 'B', text: "Richiede 16 alimentatori separati per funzionare" },
      { id: 'C', text: "Può contenere fino a 16 schede grafiche impilate" },
      { id: 'D', text: "Funziona a una frequenza massima fissa di 16 MHz" }
    ],
    correctAnswerId: 'A',
    explanation: "Il numero preceduto da 'x' indica il numero di corsie fisiche (lanes) parallele (x1, x4, x8, x16). Uno slot x16 offre la massima ampiezza di banda della generazione PCIe di riferimento (usato tipicamente per schede video e storage RAID enterprise).",
    hint: "x16 indica 16 corsie (lanes) di trasmissione dati simultanee.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_082',
    question: "Cos'è la memoria 'ROM' (Read-Only Memory) a maschera rispetto a una 'EPROM'?",
    options: [
      { id: 'A', text: "La ROM a maschera viene scritta fisicamente durante il processo produttivo in fabbrica e non è modificabile; la EPROM può essere cancellata esponendola a raggi ultravioletti e riprogrammata" },
      { id: 'B', text: "La EPROM è una memoria volatile che perde i dati in assenza di corrente" },
      { id: 'C', text: "La ROM a maschera è un disco ottico riscrivibile da 700 MB" },
      { id: 'D', text: "La EPROM è un componente meccanico privo di circuiti elettronici" }
    ],
    correctAnswerId: 'A',
    explanation: "Le ROM classiche a maschera avevano i bit impressi per via fotolitografica. Le EPROM (Erasable Programmable ROM) avevano una caratteristica finestrella trasparente in quarzo per cancellare le cariche tramite lampade UV.",
    hint: "EPROM = Erasable Programmable Read-Only Memory (cancellabile con raggi UV).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_083',
    question: "In un computer server, cosa indica la funzione di alimentazione ridondante '1+1 Hot-Swap'?",
    options: [
      { id: 'A', text: "La presenza di due alimentatori identici: se uno si guasta l'altro sostiene l'intero carico istantaneamente, e l'unità rotta può essere sostituita a caldo senza spegnere il server" },
      { id: 'B', text: "L'uso obbligatorio di due cavi di messa a terra separati" },
      { id: 'C', text: "Un generatore a gasolio esterno integrato nel rack" },
      { id: 'D', text: "L'alternanza programmata di alimentazione a 110V e 220V ogni 60 minuti" }
    ],
    correctAnswerId: 'A',
    explanation: "Hot-swap significa sostituibile a caldo: il modulo guasto viene estratto e sostituito mentre il server continua a erogare i servizi ininterrottamente grazie al modulo ridondante superstite.",
    hint: "Continuità di servizio: sostituzione del componente guasto senza spegnere la macchina.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_084',
    question: "Che funzione ha la batteria a bottone (CR2032) presente sulla scheda madre del computer?",
    options: [
      { id: 'A', text: "Mantiene alimentato il circuito dell'orologio in tempo reale (RTC - Real Time Clock) e la memoria CMOS volatile contenente le impostazioni del firmware quando la macchina è scollegata dalla presa" },
      { id: 'B', text: "Alimenta la CPU in modalità risparmio energetico durante lo standby" },
      { id: 'C', text: "Fornisce energia al monitor in caso di blackout prolungato" },
      { id: 'D', text: "Permette di connettersi a internet anche senza cavo ethernet" }
    ],
    correctAnswerId: 'A',
    explanation: "La batteria tampone (tipicamente al litio CR2032) assicura che l'orologio di sistema (RTC) continui a scandire data e ora e che i parametri CMOS non vadano persi quando il PC è spento o privo di corrente.",
    hint: "Batteria tampone per orologio RTC e memoria parametri CMOS.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_085',
    question: "Cos'è l'interfaccia di gestione fuori banda 'IPMI' (Intelligent Platform Management Interface) o iLO/iDRAC presente sui server hardware?",
    options: [
      { id: 'A', text: "Un sottosistema autonomo (con proprio processore di gestione BMC e scheda di rete) che permette di monitorare, accendere/spegnere e controllare il server da remoto anche se il sistema operativo principale è bloccato o spento" },
      { id: 'B', text: "Un protocollo di compressione per la riproduzione di file audio MP3" },
      { id: 'C', text: "Il software per la gestione dei turni del personale di portineria" },
      { id: 'D', text: "Un antivirus per l'analisi dei messaggi di posta elettronica certificata" }
    ],
    correctAnswerId: 'A',
    explanation: "IPMI, HP iLO e Dell iDRAC consentono la gestione out-of-band: gli amministratori possono riavviare il server, accedere alla console KVM remota e montare immagini ISO a distanza, a prescindere dallo stato del sistema operativo.",
    hint: "Gestione hardware remota out-of-band (fuori banda) per server aziendali.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_HW_086',
    question: "Nelle trasmissioni seriali asincrone (es. RS-232, UART), a cosa servono i 'bit di start' e i 'bit di stop'?",
    options: [
      { id: 'A', text: "A sincronizzare il ricevitore sul flusso di dati delimitando l'inizio e la fine di ciascun carattere trasmesso in assenza di un segnale di clock condiviso" },
      { id: 'B', text: "A crittografare il payload mediante cifrario di Cesare" },
      { id: 'C', text: "A indicare la temperatura in gradi Celsius della porta seriale" },
      { id: 'D', text: "A misurare la tensione dell'alimentazione a 12 Volt" }
    ],
    correctAnswerId: 'A',
    explanation: "Nelle comunicazioni asincrone non c'è un filo per il segnale di clock comune: la transizione del bit di start sincronizza il campionamento del ricevitore, e il bit di stop ripristina la linea allo stato di riposo (idle).",
    hint: "Delimitano l'inizio e la fine del byte trasmesso per sincronizzare la lettura.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_087',
    question: "Che cos'è l'interruzione hardware (Hardware Interrupt) e come viene gestita dalla CPU?",
    options: [
      { id: 'A', text: "Un segnale elettrico inviato da una periferica sulla linea IRQ che induce la CPU a sospendere temporaneamente il flusso corrente per eseguire un'apposita routine di servizio (ISR - Interrupt Service Routine)" },
      { id: 'B', text: "Un corto circuito che causa lo spegnimento immediato della scheda madre" },
      { id: 'C', text: "Una pausa programmata di 10 millisecondi per consentire la ricarica dei condensatori" },
      { id: 'D', text: "L'eliminazione forzata di un file dal cestino di sistema" }
    ],
    correctAnswerId: 'A',
    explanation: "Gli interrupt consentono alle periferiche (tastiera, disco, scheda di rete) di richiedere attenzione immediata alla CPU senza che questa debba effettuare polling continuo; il processore salva il contesto ed esegue l'ISR.",
    hint: "Segnale IRQ che dirotta l'esecuzione sulla Interrupt Service Routine (ISR).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_088',
    question: "Qual è il vantaggio dell'accesso diretto alla memoria (DMA - Direct Memory Access) nei computer?",
    options: [
      { id: 'A', text: "Consente ai dispositivi hardware di trasferire dati direttamente verso o dalla memoria RAM senza impegnare costantemente la CPU in cicli di lettura/scrittura" },
      { id: 'B', text: "Permette di raddoppiare fisicamente la capacità della memoria RAM installata" },
      { id: 'C', text: "Protegge il computer da infezioni malware basate su script PowerShell" },
      { id: 'D', text: "Evita la necessità di installare un disco fisso nel case" }
    ],
    correctAnswerId: 'A',
    explanation: "Il controller DMA gestisce il trasferimento di blocchi di dati tra memoria e periferiche (es. lettura da disco o pacchetti di rete), consentendo alla CPU di dedicarsi ad altri calcoli in parallelo.",
    hint: "Trasferimento dati memoria-periferica senza gravare sui registri della CPU.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_089',
    question: "Che cos'è la 'risoluzione nativa' di un monitor LCD/OLED?",
    options: [
      { id: 'A', text: "Il numero esatto di pixel fisici (orizzontali per verticali) di cui è composto il pannello visivo del display" },
      { id: 'B', text: "Il tempo di risposta espresso in millisecondi per il passaggio da grigio a grigio" },
      { id: 'C', text: "Il consumo orario in chilowattora con luminosità al 50%" },
      { id: 'D', text: "La lunghezza in centimetri del cavo di collegamento video" }
    ],
    correctAnswerId: 'A',
    explanation: "A differenza dei vecchi monitor CRT a fascio elettronico, i display a matrice fissa (LCD, LED, OLED) hanno una griglia fissa di pixel: visualizzare risoluzioni diverse da quella nativa richiede interpolazione o scaling.",
    hint: "Numero fisico di punti luce/pixel reali che compongono la matrice del pannello.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_090',
    question: "In termini di cablaggio e alimentazione, cosa significa lo standard 'PoE' (Power over Ethernet - IEEE 802.3af/at/bt)?",
    options: [
      { id: 'A', text: "La tecnologia che permette di alimentare elettricamente dispositivi di rete (telefoni VoIP, access point Wi-Fi, telecamere IP) tramite il medesimo cavo di rete ethernet a doppino ritorto" },
      { id: 'B', text: "La trasmissione di file crittografati attraverso la linea elettrica a 220V" },
      { id: 'C', text: "Un protocollo di sicurezza per evitare che i router vengano colpiti da fulmini" },
      { id: 'D', text: "Il blocco automatico della navigazione internet durante le ore notturne" }
    ],
    correctAnswerId: 'A',
    explanation: "PoE trasmette corrente continua insieme ai pacchetti dati sui cavi Cat5e/6/6a, eliminando la necessità di prese di corrente e trasformatori dedicati vicino a telecamere IP, sensori e telefoni VoIP.",
    hint: "Alimentazione elettrica trasportata sullo stesso cavo Ethernet di rete.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_091',
    question: "Cosa si intende per 'branch predictor' (predittore di diramazione) nei moderni processori?",
    options: [
      { id: 'A', text: "Un circuito specializzato che tenta di indovinare quale ramo di un'istruzione condizionale (if/else) verrà intrapreso prima che la condizione sia effettivamente valutata, per mantenere piena la pipeline" },
      { id: 'B', text: "Un sistema di ventilazione intelligente che devia il flusso d'aria calda" },
      { id: 'C', text: "Un algoritmo per scegliere quale fornitore hardware contattare per gli acquisti" },
      { id: 'D', text: "Un meccanismo per bilanciare la carica tra due batterie portatili" }
    ],
    correctAnswerId: 'A',
    explanation: "Il branch prediction evita stalli nella pipeline: ipotizza l'esito dei salti condizionali ed esegue speculativamente le istruzioni successive; in caso di errore (misprediction), la pipeline viene svuotata.",
    hint: "Indovina la direzione dei salti condizionali per evitare arresti della pipeline.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_HW_092',
    question: "Quale interfaccia di memoria RAM ha introdotto canali a 32 bit indipendenti per modulo (2 canali a 32 bit anziché un singolo canale a 64 bit per modulo) e il PMIC (Power Management IC) a bordo?",
    options: [
      { id: 'A', text: "DDR5" },
      { id: 'B', text: "DDR2" },
      { id: 'C', text: "DDR3" },
      { id: 'D', text: "SDR SDRAM" }
    ],
    correctAnswerId: 'A',
    explanation: "Le memorie DDR5 suddividono ciascun modulo DIMM in due canali a 32 bit indipendenti (più 8 bit ECC per canale) per ridurre le contese di accesso, e integrano il chip di regolazione della tensione (PMIC) direttamente sul circuito del modulo.",
    hint: "Due canali indipendenti a 32 bit per modulo e regolatore PMIC a bordo = DDR5.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_HW_093',
    question: "Cos'è il 'Thermal Throttling' in un microprocessore o scheda video?",
    options: [
      { id: 'A', text: "Il meccanismo di protezione che riduce automaticamente la frequenza di clock e la tensione della CPU per diminuire la temperatura quando viene superata la soglia termica massima sicura" },
      { id: 'B', text: "L'applicazione periodica di pasta termica a base di metallo liquido" },
      { id: 'C', text: "Il congelamento istantaneo dell'alimentatore per condensazione interna" },
      { id: 'D', text: "L'aumento della risoluzione dello schermo durante le sessioni di gioco" }
    ],
    correctAnswerId: 'A',
    explanation: "Per evitare danni fisici permanenti da surriscaldamento, i processori moderni monitorano i sensori termici e scalano frequenza e voltaggio (throttling) per raffreddarsi, con conseguente calo temporaneo di prestazioni.",
    hint: "Protezione termica automatica: taglia la frequenza per non bruciare il chip.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_094',
    question: "Che tipologia di switch meccanico per tastiere è priva di contatti metallici fisici di attrito ed è basata sull'interruzione di un fascio di luce a infrarossi?",
    options: [
      { id: 'A', text: "Switch ottico (optoelettronico)" },
      { id: 'B', text: "Tastiera a membrana con cupola in gomma" },
      { id: 'C', text: "Switch a lamella metallica classica" },
      { id: 'D', text: "Tastiera a perforazione di schede" }
    ],
    correctAnswerId: 'A',
    explanation: "Gli switch ottici utilizzano un fotodiodo e un emettitore LED a infrarossi: la pressione del tasto blocca o sblocca il fascio luminoso, offrendo tempi di attuazione ultra-rapidi e immunità all'usura da contatto.",
    hint: "Attuazione basata sull'interruzione di un fascio luminoso a infrarossi.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_095',
    question: "Nelle architetture server a rack, quale unità di misura standard (U) definisce l'altezza verticale dei componenti (1U)?",
    options: [
      { id: 'A', text: "1,75 pollici (pari a 44,45 millimetri)" },
      { id: 'B', text: "5,5 centimetri esatti" },
      { id: 'C', text: "10 pollici quadrati" },
      { id: 'D', text: "12 millimetri di spessore" }
    ],
    correctAnswerId: 'A',
    explanation: "1U (Rack Unit) è lo standard industriale (EIA-310) per rack da 19 pollici e corrisponde a 1,75 pollici (44,45 mm) di altezza. I server sono comunemente alti 1U, 2U, 4U.",
    hint: "1U = 1,75 pollici = 44,45 mm.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_096',
    question: "Quale funzione svolgono le schede di rete con capacità 'SR-IOV' (Single Root I/O Virtualization)?",
    options: [
      { id: 'A', text: "Permettono a un singolo dispositivo fisico PCIe di presentarsi all'hypervisor come molteplici dispositivi virtuali separati (Virtual Functions - VF), collegabili direttamente alle macchine virtuali bypassando il vSwitch software" },
      { id: 'B', text: "Consentono di connettere contemporaneamente 100 cavi telefonici a un router" },
      { id: 'C', text: "Aumentano la potenza del segnale Wi-Fi oltre i limiti di legge" },
      { id: 'D', text: "Memorizzano l'intero sistema operativo all'interno del chip BIOS della scheda" }
    ],
    correctAnswerId: 'A',
    explanation: "SR-IOV virtualizza l'hardware PCIe a livello di silicio, creando Virtual Functions che le VM possono utilizzare direttamente (pass-through parziale), garantendo latenze minime e throughput di rete pari al metallo nudo.",
    hint: "Virtualizzazione hardware di schede PCIe per collegare direttamente le VM alle funzioni di rete.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_HW_097',
    question: "Cosa si intende per 'Write Amplification Factor' (WAF) nelle memorie a stato solido SSD?",
    options: [
      { id: 'A', text: "Il rapporto tra la quantità di dati effettivamente scritti sulla memoria flash NAND fisica e la quantità di dati inviati dal sistema operativo al controller SSD" },
      { id: 'B', text: "L'amplificazione del volume dell'altoparlante durante le notifiche di sistema" },
      { id: 'C', text: "L'aumento automatico della dimensione dei caratteri tipografici nei documenti Word" },
      { id: 'D', text: "Il moltiplicatore di clock della scheda audio integrata" }
    ],
    correctAnswerId: 'A',
    explanation: "Poiché la memoria flash deve cancellare interi blocchi prima di poter riscrivere le pagine (garbage collection), la quantità di dati scritti fisicamente sulla NAND è spesso superiore a quella richiesta dall'OS (WAF > 1), impattando su prestazioni e usura.",
    hint: "Rapporto tra dati scritti su chip NAND e dati richiesti dall'host (WAF).",
    level: "avanzato"
  },
  {
    id: 'Q_INF_HW_098',
    question: "Quale tipo di cavo ethernet twisted pair (doppino ritorto) include una schermatura a lamina metallica attorno a ciascuna singola coppia e una maglia intrecciata complessiva esterna?",
    options: [
      { id: 'A', text: "S/FTP (Screened Foiled Twisted Pair)" },
      { id: 'B', text: "U/UTP (Unshielded Twisted Pair)" },
      { id: 'C', text: "Cavo coassiale a 50 Ohm" },
      { id: 'D', text: "Cavo telefonico piattina a due poli" }
    ],
    correctAnswerId: 'A',
    explanation: "S/FTP offre la massima protezione contro il rumore e la diafonia (crosstalk): ciascuna coppia di fili è schermata con un foglio di alluminio (Foiled) e l'intero fascio di 4 coppie è avvolto da una calza metallica (Screened).",
    hint: "Doppia schermatura: lamina sulle singole coppie e calza metallica esterna.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_HW_099',
    question: "Qual è la funzione del comando 'TRIM' inviato dal sistema operativo all'unità SSD?",
    options: [
      { id: 'A', text: "Informa l'SSD su quali blocchi di dati non contengono più informazioni valide a seguito della cancellazione di file, consentendo al controller di ottimizzare la garbage collection" },
      { id: 'B', text: "Regola l'inclinazione fisica del disco nel case per ridurre le vibrazioni" },
      { id: 'C', text: "Riduce il consumo elettrico del monitor quando l'utente si allontana" },
      { id: 'D', text: "Installa automaticamente gli aggiornamenti di sicurezza di Windows" }
    ],
    correctAnswerId: 'A',
    explanation: "Senza TRIM l'SSD non sa che un file è stato cancellato dall'OS finché non tenta di sovrascriverlo. Il comando TRIM permette all'SSD di contrassegnare le pagine come libere in anticipo, preservando velocità e durata.",
    hint: "Segnala all'SSD i blocchi di dati cancellati per ottimizzare pulizia e riscrittura.",
    level: "base"
  },
  {
    id: 'Q_INF_HW_100',
    question: "Che cosa si intende per 'Form Factor' (fattore di forma) nell'hardware per personal computer (es. ATX, Micro-ATX, Mini-ITX)?",
    options: [
      { id: 'A', text: "La specifica standardizzata che definisce dimensioni fisiche, posizionamento dei fori di montaggio, layout dei connettori e disposizione degli slot di espansione della scheda madre e del case" },
      { id: 'B', text: "La formula matematica per calcolare l'imposta IVA sull'acquisto di componenti esteri" },
      { id: 'C', text: "Il tipo di crittografia utilizzato dalla chiave Wi-Fi" },
      { id: 'D', text: "La velocità massima di calcolo in virgola mobile per secondo (FLOPS)" }
    ],
    correctAnswerId: 'A',
    explanation: "Il form factor standardizza forma geometrica, ingombri e punti di fissaggio di schede madri, alimentatori e chassis per garantire la compatibilità meccanica tra componenti di produttori diversi.",
    hint: "Standard geometrico di dimensioni, fori di montaggio e connettori della scheda madre.",
    level: "base"
  }
];

// Append to hardware_base.json
const hwPath = path.join(__dirname, '../public/db/master_bank/informatica/hardware_base.json');
const hwData = JSON.parse(fs.readFileSync(hwPath, 'utf8'));
hwData.push(...hwQuestions);

const letters = ['A', 'B', 'C', 'D'];
hwData.forEach((q, idx) => {
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

fs.writeFileSync(hwPath, JSON.stringify(hwData, null, 2), 'utf8');
const hwCounts = { A: 0, B: 0, C: 0, D: 0 };
hwData.forEach(q => hwCounts[q.correctAnswerId]++);
console.log('Hardware updated! Total:', hwData.length, 'Counts:', hwCounts);

// Now Linguaggi Questions (Q_INF_LANG_051 to 100)
const langQuestions = [
  {
    id: 'Q_INF_LANG_051',
    question: "Nel paradigma di programmazione orientata agli oggetti (OOP), qual è il principio che consiste nel nascondere i dettagli implementativi interni di un oggetto esponendo solo un'interfaccia pubblica controllata?",
    options: [
      { id: 'A', text: "Incapsulamento (Encapsulation)" },
      { id: 'B', text: "Ereditarietà multipla" },
      { id: 'C', text: "Polimorfismo dinamico" },
      { id: 'D', text: "Tipizzazione debole" }
    ],
    correctAnswerId: 'A',
    explanation: "L'incapsulamento racchiude stato (attributi) e comportamento (metodi) all'interno della classe, proteggendo i dati interni mediante modificatori di accesso (private, protected) e fornendo metodi getter/setter dedicati.",
    hint: "Nascondere lo stato interno esponendo solo metodi pubblici.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_052',
    question: "In Java, qual è la differenza fondamentale tra 'Heap' e 'Stack' nella gestione della memoria da parte della JVM?",
    options: [
      { id: 'A', text: "Lo Stack memorizza le chiamate ai metodi e le variabili locali di tipo primitivo per ciascun thread, mentre l'Heap è l'area condivisa in cui risiedono tutti gli oggetti creati e le loro variabili di istanza" },
      { id: 'B', text: "Lo Stack è gestito dal Garbage Collector, mentre l'Heap ha dimensione fissa all'avvio del programma" },
      { id: 'C', text: "L'Heap memorizza esclusivamente il codice sorgente in formato testo" },
      { id: 'D', text: "Non esiste alcuna distinzione, sono due nomi per la medesima struttura dati FIFO" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo Stack gestisce l'esecuzione dei frame con ciclo di vita LIFO per ciascun thread; l'Heap memorizza tutti gli oggetti allocati dinamicamente (tramite 'new') ed è gestito dal Garbage Collector.",
    hint: "Stack: variabili locali e frame di chiamata. Heap: oggetti dinamici gestiti dal GC.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_053',
    question: "Quale design pattern creazionale assicura che una classe abbia una sola istanza all'interno dell'applicazione e fornisce un punto di accesso globale ad essa?",
    options: [
      { id: 'A', text: "Singleton Pattern" },
      { id: 'B', text: "Observer Pattern" },
      { id: 'C', text: "Factory Method" },
      { id: 'D', text: "Adapter Pattern" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Singleton garantisce l'unicità dell'istanza (es. pool di connessioni al database, logger centrale) mantenendo un costruttore privato e un metodo statico 'getInstance()'.",
    hint: "Una sola istanza per l'intera vita dell'applicazione = Singleton.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_054',
    question: "In Python, cosa fa la parola chiave 'yield' all'interno di una funzione?",
    options: [
      { id: 'A', text: "Trasforma la funzione in un generatore (generator), restituendo un valore e sospendendo l'esecuzione mantenendo lo stato per la successiva chiamata" },
      { id: 'B', text: "Termina definitivamente l'esecuzione del programma sollevando un'eccezione critica" },
      { id: 'C', text: "Importa una libreria esterna da un repository remoto" },
      { id: 'D', text: "Converte automaticamente una stringa in un intero a 64 bit" }
    ],
    correctAnswerId: 'A',
    explanation: "'yield' produce un valore su richiesta (lazy evaluation) senza caricare l'intera sequenza in memoria, trasformando la funzione in un generatore iterabile con 'next()'.",
    hint: "'yield' produce un generatore che rilascia valori uno alla volta su richiesta.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_055',
    question: "Nel runtime JavaScript/Node.js, che cos'è l'Event Loop?",
    options: [
      { id: 'A', text: "Il meccanismo single-threaded che coordina l'esecuzione del codice sincrono, monitora la Call Stack e scarica le callback dalla Task Queue/Microtask Queue quando lo stack è vuoto" },
      { id: 'B', text: "Un ciclo for infinito che surriscalda la CPU per testare i dissipatori termici" },
      { id: 'C', text: "Un compilatore che traduce il codice JavaScript in C++ prima dell'esecuzione" },
      { id: 'D', text: "Un database relazionale integrato nel browser" }
    ],
    correctAnswerId: 'A',
    explanation: "L'Event Loop consente a JavaScript di gestire operazioni I/O asincrone non bloccanti pur avendo un unico thread di esecuzione principale, prelevando compiti dalle code di callback appena la Call Stack si svuota.",
    hint: "Gestisce l'asincronia single-thread trasferendo i task completati nella Call Stack.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_056',
    question: "In Git, qual è la differenza sostanziale tra i comandi 'git merge' e 'git rebase' per integrare i cambiamenti di un branch?",
    options: [
      { id: 'A', text: "'git merge' crea un nuovo commit di fusione conservando l'intera storia dei rami, mentre 'git rebase' riscrive la cronologia riapplicando i commit del branch corrente in cima al branch di destinazione" },
      { id: 'B', text: "'git rebase' elimina per sempre tutti i file modificati" },
      { id: 'C', text: "'git merge' funziona solo se non ci sono connessioni di rete attive" },
      { id: 'D', text: "'git rebase' è un comando esclusivo di Subversion (SVN) non supportato da Git" }
    ],
    correctAnswerId: 'A',
    explanation: "Merge preserva la cronologia reale creando un merge commit a due padri; Rebase crea una storia lineare e pulita riscrivendo gli hash dei commit spostandoli sulla base aggiornata.",
    hint: "Merge conserva la cronologia originale con un merge commit; Rebase crea una cronologia lineare.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_057',
    question: "In TypeScript, qual è il vantaggio dell'uso dei 'Generics' (<T>)?",
    options: [
      { id: 'A', text: "Consentono di definire funzioni, classi e interfacce riutilizzabili che operano su tipi di dati diversi mantenendo la rigorosa sicurezza sui tipi (type safety) a tempo di compilazione" },
      { id: 'B', text: "Disattivano tutti i controlli del compilatore trasformando ogni variabile nel tipo 'any'" },
      { id: 'C', text: "Aumentano la velocità di download dei pacchetti npm" },
      { id: 'D', text: "Permettono di eseguire codice TypeScript direttamente nel kernel del sistema operativo" }
    ],
    correctAnswerId: 'A',
    explanation: "I Generics permettono di parametrizzare i tipi (es. `Array<T>`, `Promise<T>`), evitando conversioni manuali o l'uso di 'any' e garantendo che il compilatore intercetti errori di tipo a tempo di sviluppo.",
    hint: "Generics = riusabilità del codice senza rinunciare alla tipizzazione statica.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_058',
    question: "Cosa stabilisce il principio 'Open/Closed' (la 'O' nei principi SOLID dell'ingegneria del software)?",
    options: [
      { id: 'A', text: "Le entità software (classi, moduli, funzioni) dovrebbero essere aperte all'estensione, ma chiuse alla modifica" },
      { id: 'B', text: "I file del codice sorgente devono essere aperti di giorno e chiusi di notte" },
      { id: 'C', text: "Il software deve essere rigorosamente proprietario e mai open source" },
      { id: 'D', text: "Tutti i metodi di una classe devono essere dichiarati 'final'" }
    ],
    correctAnswerId: 'A',
    explanation: "Il principio Open/Closed impone di progettare il codice in modo che nuovi comportamenti possano essere aggiunti creando nuove classi (es. mediante ereditarietà o interfacce) senza dover alterare il codice esistente e testato.",
    hint: "Aperto all'estensione, chiuso alla modifica.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_059',
    question: "In Java, cosa succede quando una variabile fa riferimento a un oggetto che non ha più alcun riferimento attivo raggiungibile nel programma?",
    options: [
      { id: 'A', text: "L'oggetto diventa idoneo (eligible) per la deallocazione automatica da parte del Garbage Collector" },
      { id: 'B', text: "Il sistema operativo termina immediatamente il processo con un errore di Segmentation Fault" },
      { id: 'C', text: "L'oggetto viene automaticamente salvato in un file di testo sul disco C:" },
      { id: 'D', text: "La memoria RAM si blocca permanentemente fino al riavvio fisico del computer" }
    ],
    correctAnswerId: 'A',
    explanation: "La JVM utilizza algoritmi di Garbage Collection (come Mark-and-Sweep, G1, ZGC): quando un oggetto non è più raggiungibile da alcuna 'GC Root', viene contrassegnato e la sua memoria liberata.",
    hint: "Gli oggetti orfani senza riferimenti vengono spazzati via dal Garbage Collector.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_060',
    question: "In Python, qual è il comportamento e lo scopo del 'Global Interpreter Lock' (GIL) nell'implementazione standard CPython?",
    options: [
      { id: 'A', text: "È un meccanismo di sincronizzazione che impedisce l'esecuzione contemporanea di più thread Python nativi su core CPU multipli, consentendo a un solo thread alla volta di eseguire bytecode Python" },
      { id: 'B', text: "È un software antivirus che blocca i file corrotti scaricati con pip" },
      { id: 'C', text: "È una password obbligatoria per eseguire script Python nei terminali Linux" },
      { id: 'D', text: "Un protocollo di crittografia per le connessioni database PostgreSQL" }
    ],
    correctAnswerId: 'A',
    explanation: "Il GIL in CPython protegge la gestione della memoria interna (reference counting) da corruzioni in ambienti multithreading, limitando il reale parallelismo su più core CPU per compiti CPU-bound (risolvibile con multiprocessing).",
    hint: "Il GIL permette a un solo thread nativo alla volta di eseguire bytecode in CPython.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_LANG_061',
    question: "Nel paradigma della programmazione funzionale, cosa si intende per 'funzione pura' (Pure Function)?",
    options: [
      { id: 'A', text: "Una funzione che, a parità di argomenti in ingresso, restituisce sempre lo stesso valore e non produce effetti collaterali (side effects) sullo stato del sistema" },
      { id: 'B', text: "Una funzione che non contiene commenti o spazi vuoti nel codice sorgente" },
      { id: 'C', text: "Una funzione scritta esclusivamente in linguaggio assembly a 64 bit" },
      { id: 'D', text: "Una funzione che può essere eseguita solo da utenti con privilegi di amministratore" }
    ],
    correctAnswerId: 'A',
    explanation: "Una funzione pura è deterministica (stesso input = stesso output) e non modifica variabili globali, non esegue I/O su disco, né muta argomenti passati per riferimento, rendendo il codice predicibile e facilmente testabile.",
    hint: "Deterministica e senza effetti collaterali (side effects).",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_062',
    question: "In C++, qual è la differenza fondamentale tra allocazione di memoria con 'malloc()' e con l'operatore 'new'?",
    options: [
      { id: 'A', text: "'new' alloca la memoria e invoca automaticamente il costruttore dell'oggetto restituendo un puntatore tipizzato; 'malloc()' alloca solo una sequenza di byte grezzi senza invocare alcun costruttore" },
      { id: 'B', text: "'malloc()' dealloca la memoria automaticamente all'uscita dal blocco di codice" },
      { id: 'C', text: "'new' alloca memoria solo sulla memoria cache L1 della CPU" },
      { id: 'D', text: "Non vi è alcuna differenza, 'malloc' e 'new' sono identici" }
    ],
    correctAnswerId: 'A',
    explanation: "'new' è parte integrante del linguaggio C++ (type-safe, chiama costruttori, solleva bad_alloc in caso di esaurimento memoria); 'malloc' è una funzione di libreria C che alloca blocchi void* grezzi.",
    hint: "'new' crea l'oggetto e chiama il costruttore; 'malloc' assegna solo byte di memoria grezza.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_063',
    question: "Cosa si intende per 'Dependency Injection' (DI) nei moderni framework applicativi (es. Spring Boot, Angular, .NET)?",
    options: [
      { id: 'A', text: "Un pattern architetturale in cui le dipendenze di un componente non vengono istanziate direttamente al suo interno, ma vengono fornite (iniettate) dall'esterno da un container IoC" },
      { id: 'B', text: "Un attacco informatico basato sull'iniezione di codice maligno nei form HTML" },
      { id: 'C', text: "L'installazione automatica di driver per stampanti di rete" },
      { id: 'D', text: "La sostituzione forzata di un hard disk difettoso in una catena RAID" }
    ],
    correctAnswerId: 'A',
    explanation: "La Dependency Injection applica il principio di Inversione del Controllo (IoC): disaccoppia le classi fornendo le istanze necessarie (servizi, repository) tramite costruttore o annotazioni (@Autowired, @Inject).",
    hint: "Le dipendenze vengono passate dall'esterno per disaccoppiare i componenti.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_064',
    question: "In Git, qual è la funzione del comando 'git stash'?",
    options: [
      { id: 'A', text: "Salva temporaneamente le modifiche non ancora committate (tracciate e non) in uno stack separato, ripristinando la working directory allo stato pulito dell'ultimo commit" },
      { id: 'B', text: "Cancella in modo permanente l'intero repository locale e remoto" },
      { id: 'C', text: "Esegue il push immediato sul branch di produzione senza richiedere password" },
      { id: 'D', text: "Crea una copia compressa .zip da spedire via posta elettronica" }
    ],
    correctAnswerId: 'A',
    explanation: "'git stash' congela le modifiche in sospeso permettendo allo sviluppatore di cambiare rapidamente branch o fare un pull; le modifiche possono essere poi riapplicate con 'git stash pop'.",
    hint: "Ripone temporaneamente le modifiche in un cassetto sicuro per pulire la cartella di lavoro.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_065',
    question: "Quale struttura dati opera secondo il principio LIFO (Last In, First Out)?",
    options: [
      { id: 'A', text: "Pila (Stack)" },
      { id: 'B', text: "Coda (Queue)" },
      { id: 'C', text: "Lista doppiamente concatenata" },
      { id: 'D', text: "Albero binario di ricerca (BST)" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo Stack (Pila) inserisce ed estrae elementi dallo stesso estremo (top): l'ultimo elemento inserito (Push) è il primo ad essere estratto (Pop) - principio LIFO.",
    hint: "LIFO: Last In, First Out = Pila (Stack). La Coda (Queue) è invece FIFO.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_066',
    question: "In termini di complessità computazionale asintotica (notazione Big-O), qual è il tempo medio di ricerca di un elemento in una tabella Hash (Hash Table) ben dimensionata?",
    options: [
      { id: 'A', text: "O(1) - Tempo costante" },
      { id: 'B', text: "O(n^2) - Tempo quadratico" },
      { id: 'C', text: "O(log n) - Tempo logaritmico" },
      { id: 'D', text: "O(n!) - Tempo fattoriale" }
    ],
    correctAnswerId: 'A',
    explanation: "Grazie alla funzione hash che calcola direttamente l'indice del bucket in cui risiede l'elemento, l'accesso, l'inserimento e la cancellazione avvengono in media in tempo costante O(1).",
    hint: "Tempo costante medio O(1) grazie alla funzione di hashing.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_067',
    question: "Nel modello MVC (Model-View-Controller), qual è il ruolo del 'Controller'?",
    options: [
      { id: 'A', text: "Riceve gli input dell'utente (richieste HTTP), elabora la logica di controllo invocando il Modello e seleziona la Vista appropriata da restituire" },
      { id: 'B', text: "Memorizza in modo persistente le tabelle del database relazionale" },
      { id: 'C', text: "Definisce unicamente lo stile grafico CSS e i colori della pagina web" },
      { id: 'D', text: "Verifica che il cavo di rete sia collegato allo switch di piano" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Controller funge da intermediario: intercetta le azioni dell'utente, aggiorna il Model e restituisce i dati alla View per la renderizzazione finale.",
    hint: "Mediatore che riceve l'input, aziona il Model e sceglie la View.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_068',
    question: "In Python, cosa fa la funzione built-in 'zip()'?",
    options: [
      { id: 'A', text: "Accoppia elementi corrispondenti provenienti da due o più iterabili restituendo un iteratore di tuple" },
      { id: 'B', text: "Comprime i file del progetto in un archivio ZIP con algoritmo DEFLATE" },
      { id: 'C', text: "Cripta una stringa con chiave AES a 256 bit" },
      { id: 'D', text: "Rallenta l'esecuzione del codice di un secondo per ogni ciclo" }
    ],
    correctAnswerId: 'A',
    explanation: "`zip([1, 2], ['a', 'b'])` restituisce un iteratore di tuple `(1, 'a'), (2, 'b')`, unendo parallelamente gli iterabili.",
    hint: "Unisce a coppie (o n-uple) elementi di liste diverse come una cerniera lampo.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_069',
    question: "Cosa si intende per 'Polimorfismo' nella programmazione ad oggetti?",
    options: [
      { id: 'A', text: "La capacità di oggetti di classi diverse derivate da una medesima classe base o interfaccia di rispondere allo stesso messaggio (chiamata di metodo) in modo specifico per ciascun tipo" },
      { id: 'B', text: "La conversione automatica di file audio in file di testo" },
      { id: 'C', text: "La duplicazione del codice sorgente su più dischi per ridondanza" },
      { id: 'D', text: "L'assegnazione casuale dei nomi delle variabili a tempo di esecuzione" }
    ],
    correctAnswerId: 'A',
    explanation: "Il polimorfismo consente di trattare oggetti di tipi derivati tramite riferimenti della classe base/interfaccia comune, risolvendo a tempo di esecuzione (late binding / dynamic dispatch) l'implementazione specifica corretta.",
    hint: "Una stessa interfaccia, comportamenti diversi in base al tipo concreto dell'oggetto.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_070',
    question: "In JavaScript, qual è la differenza fondamentale tra '==' (uguaglianza debole) e '===' (uguaglianza stretta)?",
    options: [
      { id: 'A', text: "'==' esegue la coercizione automatica del tipo (type coercion) prima del confronto, mentre '===' confronta sia il valore sia il tipo senza alcuna conversione implicita" },
      { id: 'B', text: "'===' assegna un valore alla variabile, mentre '==' esegue un confronto" },
      { id: 'C', text: "'==' funziona solo per i numeri interi, mentre '===' per i numeri a virgola mobile" },
      { id: 'D', text: "Non vi è alcuna differenza, '===' è solo una convenzione estetica introdotta in ES6" }
    ],
    correctAnswerId: 'A',
    explanation: "`'5' == 5` restituisce `true` (la stringa viene convertita in numero), mentre `'5' === 5` restituisce `false` perché i tipi differiscono (string vs number).",
    hint: "'===' controlla identità di valore E tipo senza conversioni automatiche.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_071',
    question: "Qual è il tempo di esecuzione dell'algoritmo di ordinamento 'Merge Sort' nel caso peggiore?",
    options: [
      { id: 'A', text: "O(n log n)" },
      { id: 'B', text: "O(n^2)" },
      { id: 'C', text: "O(n)" },
      { id: 'D', text: "O(1)" }
    ],
    correctAnswerId: 'A',
    explanation: "Merge Sort è un algoritmo divide-et-impera stabile che garantisce complessità temporale O(n log n) in tutti i casi (ottimo, medio e peggiore), a fronte di uno spazio ausiliario aggiuntivo O(n).",
    hint: "Merge Sort garantisce sempre O(n log n) anche nel caso peggiore.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_072',
    question: "In Java, qual è la caratteristica della parola chiave 'final' applicata a una classe?",
    options: [
      { id: 'A', text: "La classe non può essere estesa (non ammette sottoclassi/ereditarietà)" },
      { id: 'B', text: "Tutti i metodi della classe diventano automaticamente privati" },
      { id: 'C', text: "La classe può essere istanziata una sola volta nell'intero programma" },
      { id: 'D', text: "La classe viene cancellata dal disco al termine dell'esecuzione" }
    ],
    correctAnswerId: 'A',
    explanation: "Una classe dichiarata `final` (es. `java.lang.String`) è immutabile nella sua gerarchia ed è protetta dall'essere ereditata o sovrascritta (previene sottoclassi).",
    hint: "Classe final = non può essere estesa tramite ereditarietà.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_073',
    question: "In Python, qual è il risultato dell'espressione: [x**2 for x in range(5) if x % 2 != 0]?",
    options: [
      { id: 'A', text: "[1, 9]" },
      { id: 'B', text: "[0, 4, 16]" },
      { id: 'C', text: "[1, 4, 9, 16]" },
      { id: 'D', text: "[0, 1, 4, 9, 16]" }
    ],
    correctAnswerId: 'A',
    explanation: "Range(5) genera 0, 1, 2, 3, 4. I numeri dispari (x % 2 != 0) sono 1 e 3. Elevandoli al quadrato: 1^2 = 1 e 3^2 = 9. Il risultato è la lista [1, 9].",
    hint: "Filtra i dispari minori di 5 (1 e 3) e ne calcola il quadrato: [1, 9].",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_074',
    question: "Cosa si intende per 'Deadlock' nella programmazione concorrente e multithreading?",
    options: [
      { id: 'A', text: "Una situazione di stallo permanente in cui due o più thread rimangono bloccati all'infinito poiché ciascuno attende una risorsa trattenuta dall'altro (attesa circolare)" },
      { id: 'B', text: "Un errore di sintassi rilevato dal compilatore prima dell'avvio" },
      { id: 'C', text: "La disconnessione automatica per inattività dell'utente dopo 15 minuti" },
      { id: 'D', text: "La chiusura forzata del programma per mancanza di spazio su disco" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Deadlock (blocco critico) si verifica quando sono soddisfatte le quattro condizioni di Coffman: mutua esclusione, possesso e attesa, assenza di preemption e attesa circolare.",
    hint: "Stallo circolare tra thread che si contendono risorse bloccate a vicenda.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_075',
    question: "In SQL o nei linguaggi ad alto livello, cos'è una transazione ACID?",
    options: [
      { id: 'A', text: "Una sequenza di operazioni che soddisfa le quattro proprietà di Atomicità, Coerenza, Isolamento e Durabilità" },
      { id: 'B', text: "Un'istruzione per la cancellazione di virus dai file di registro" },
      { id: 'C', text: "Un algoritmo di compressione con perdita per immagini JPEG" },
      { id: 'D', text: "Un software di gestione degli stipendi dei dipendenti pubblici" }
    ],
    correctAnswerId: 'A',
    explanation: "ACID garantisce affidabilità: Atomicità (tutto o niente), Coerenza (regole di integrità rispettate), Isolamento (transazioni concorrenti separate), Durabilità (modifiche salvate anche dopo crash).",
    hint: "Atomicity, Consistency, Isolation, Durability.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_076',
    question: "In C#, cosa rappresenta il costrutto 'using' applicato a un oggetto che implementa l'interfaccia 'IDisposable'?",
    options: [
      { id: 'A', text: "Garantisce che il metodo 'Dispose()' venga invocato automaticamente all'uscita dal blocco di codice per rilasciare tempestivamente le risorse non gestite (file, socket), anche in caso di eccezione" },
      { id: 'B', text: "Importa un file musicale MP3 nella timeline del progetto" },
      { id: 'C', text: "Crea una nuova connessione satellitare per il backup cloud" },
      { id: 'D', text: "Impedisce la scrittura del codice da parte di programmatori junior" }
    ],
    correctAnswerId: 'A',
    explanation: "Lo statement `using (var res = new Resource()) { ... }` si traduce in un blocco `try-finally` in cui `res.Dispose()` viene chiamato con certezza per rilasciare handle di file, connessioni o memoria nativa.",
    hint: "Chiamata automatica a Dispose() per rilasciare risorse all'uscita dal blocco.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_077',
    question: "Cos'è il pattern 'Observer' (noto anche come Publish-Subscribe)?",
    options: [
      { id: 'A', text: "Un pattern comportamentale in cui un oggetto (Subject) mantiene un elenco di dipendenti (Observers) e li notifica automaticamente di qualsiasi cambiamento di stato invocando un loro metodo" },
      { id: 'B', text: "Un programma per intercettare i tasti premuti sulle tastiere USB" },
      { id: 'C', text: "Un sistema per nascondere le cartelle riservate agli utenti non autorizzati" },
      { id: 'D', text: "Un metodo per convertire i numeri binari in esadecimali" }
    ],
    correctAnswerId: 'A',
    explanation: "L'Observer definisce una dipendenza uno-a-molti: quando lo stato del Subject muta, tutti gli Observer registrati ricevono una notifica automatica (alla base dei sistemi ad eventi, MVC e reactive programming).",
    hint: "Pattern uno-a-molti per notificare automaticamente i cambiamenti di stato agli ascoltatori.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_078',
    question: "In Java, qual è la differenza tra 'StringBuilder' e 'StringBuffer'?",
    options: [
      { id: 'A', text: "'StringBuffer' è thread-safe (i suoi metodi sono sincronizzati), mentre 'StringBuilder' non è sincronizzato ed è quindi più veloce in contesti a thread singolo" },
      { id: 'B', text: "'StringBuilder' può contenere solo numeri, mentre 'StringBuffer' solo caratteri alfanumerici" },
      { id: 'C', text: "'StringBuffer' salva i dati sul disco rigido in formato HTML" },
      { id: 'D', text: "Non esiste alcuna differenza, sono due classi identiche deprecate da Java 8" }
    ],
    correctAnswerId: 'A',
    explanation: "Entrambi creano sequenze di caratteri mutabili (a differenza di String che è immutabile); StringBuffer garantisce thread-safety tramite sincronizzazione, mentre StringBuilder è più performante per uso locale.",
    hint: "StringBuffer è sincronizzato (thread-safe); StringBuilder è più veloce e non sincronizzato.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_079',
    question: "In Python, cosa si intende per 'decoratore' (decorator) indicato con la sintassi '@'?",
    options: [
      { id: 'A', text: "Una funzione che accetta un'altra funzione come argomento, ne estende o modifica il comportamento e restituisce una nuova funzione, senza alterare il codice originale" },
      { id: 'B', text: "Uno strumento per colorare il testo all'interno dell'editor di codice" },
      { id: 'C', text: "Un'istruzione per aggiungere bordi arrotondati alle finestre dell'interfaccia grafica" },
      { id: 'D', text: "Un comando per formattare i numeri con due cifre decimali fisse" }
    ],
    correctAnswerId: 'A',
    explanation: "I decoratori implementano il pattern Decorator a livello di sintassi: racchiudono la funzione originale in un wrapper per aggiungere funzionalità trasversali (es. logging, timing, autenticazione).",
    hint: "Funzione wrapper che aggiunge funzionalità a un'altra funzione senza modificarla.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_080',
    question: "Nel controllo di versione con Git, cosa fa il comando 'git cherry-pick <commit-hash>'?",
    options: [
      { id: 'A', text: "Applica le modifiche introdotte da uno specifico commit esistente nel branch corrente creando un nuovo commit" },
      { id: 'B', text: "Elimina tutti i commit più vecchi di un anno per risparmiare spazio su disco" },
      { id: 'C', text: "Unisce forzatamente tutti i branch del repository in un unico ramo master" },
      { id: 'D', text: "Invia una notifica push a tutti i collaboratori registrati su GitHub" }
    ],
    correctAnswerId: 'A',
    explanation: "'git cherry-pick' consente di prelevare singolarmente una specifica patch/commit da un altro ramo (es. un bugfix su develop) e applicarla al ramo di lavoro attuale.",
    hint: "Preleva un singolo commit mirato e lo applica sul branch corrente.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_081',
    question: "Quale struttura dati è ideale per implementare la coda di stampa dei documenti di un ufficio pubblico (FIFO - First In, First Out)?",
    options: [
      { id: 'A', text: "Coda (Queue)" },
      { id: 'B', text: "Pila (Stack)" },
      { id: 'C', text: "Matrice quadrata sparsa" },
      { id: 'D', text: "Grafo aciclico orientato" }
    ],
    correctAnswerId: 'A',
    explanation: "La Queue rispetta la politica FIFO: il primo documento inviato alla stampante (enqueue) è il primo a essere stampato (dequeue).",
    hint: "FIFO: il primo che entra è il primo a uscire = Coda (Queue).",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_082',
    question: "In JavaScript, che cosa restituisce l'operatore 'typeof null' per una storica anomalia del linguaggio mai rimossa per retrocompatibilità?",
    options: [
      { id: 'A', text: "\"object\"" },
      { id: 'B', text: "\"null\"" },
      { id: 'C', text: "\"undefined\"" },
      { id: 'D', text: "\"boolean\"" }
    ],
    correctAnswerId: 'A',
    explanation: "Nelle prime versioni di JavaScript i valori erano rappresentati con tag di tipo e puntatori: il tipo oggetto aveva tag 0, e il puntatore null (0x00) veniva interpretato come oggetto. Per compatibilità con il web è rimasto `typeof null === 'object'`.",
    hint: "Storico bug rimasto per retrocompatibilità: typeof null restituisce 'object'.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_083',
    question: "In Java e nella programmazione OOP, cosa si intende per 'Overloading' rispetto a 'Overriding'?",
    options: [
      { id: 'A', text: "L'Overloading definisce metodi con lo stesso nome ma firme/parametri diversi nella stessa classe; l'Overriding ridefinisce nella sottoclasse un metodo ereditato con la medesima firma" },
      { id: 'B', text: "L'Overloading si usa solo per le interfacce, mentre l'Overriding solo per le classi astratte" },
      { id: 'C', text: "L'Overloading richiede la connessione a un server esterno" },
      { id: 'D', text: "Non vi è alcuna differenza, sono due sinonimi per la stessa istruzione" }
    ],
    correctAnswerId: 'A',
    explanation: "Overloading = stesso nome, parametri diversi a tempo di compilazione (polimorfismo statico). Overriding = riscrittura di metodo ereditato con annotazione @Override a tempo di esecuzione (polimorfismo dinamico).",
    hint: "Overloading: stessi metodi con argomenti diversi. Overriding: ridefinizione del metodo ereditato.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_084',
    question: "Che cos'è una 'Race Condition' nella programmazione software?",
    options: [
      { id: 'A', text: "Un'anomalia in cui il risultato dell'esecuzione dipende dalla sequenza temporale incontrollata o dall'interleaving con cui thread concorrenti accedono e modificano dati condivisi" },
      { id: 'B', text: "Un test di velocità tra due processori prodotti da marche concorrenti" },
      { id: 'C', text: "La scadenza di una sessione di autenticazione utente" },
      { id: 'D', text: "L'aggiornamento simultaneo dell'antivirus su più computer della rete" }
    ],
    correctAnswerId: 'A',
    explanation: "Una condizione di gara si verifica quando due thread leggono e scrivono la stessa locazione di memoria senza opportuna sincronizzazione (es. mutex, semafori), producendo stati inconsistenti casuali.",
    hint: "Comportamento errato dovuto all'ordine imprevisto di esecuzione tra thread concorrenti.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_085',
    question: "In linguaggi come Rust o C++, cosa si intende per 'RAII' (Resource Acquisition Is Initialization)?",
    options: [
      { id: 'A', text: "Un idioma di programmazione in cui l'acquisizione di una risorsa è legata all'inizializzazione dell'oggetto (nel costruttore) e il suo rilascio avviene automaticamente nel distruttore al termine dello scope" },
      { id: 'B', text: "L'installazione remota automatizzata del sistema operativo via rete" },
      { id: 'C', text: "Un protocollo di trasmissione audio ad alta definizione" },
      { id: 'D', text: "Un tipo di connettore elettrico con fusibile incorporato" }
    ],
    correctAnswerId: 'A',
    explanation: "RAII garantisce che non vi siano leak di memoria o handle aperti: la vita della risorsa è legata alla durata dell'oggetto nello stack; uscendo dallo scope, il distruttore viene invocato automaticamente.",
    hint: "Gestione delle risorse legata al ciclo di vita dell'oggetto (costruttore/distruttore).",
    level: "avanzato"
  },
  {
    id: 'Q_INF_LANG_086',
    question: "Nel linguaggio C, cosa rappresenta l'operatore unario '&' posto davanti al nome di una variabile (es. &x)?",
    options: [
      { id: 'A', text: "Restituisce l'indirizzo di memoria fisica in cui risiede la variabile" },
      { id: 'B', text: "Calcola la radice quadrata del valore della variabile" },
      { id: 'C', text: "Incrementa di un'unità il valore contenuto nella variabile" },
      { id: 'D', text: "Converte il valore della variabile in lettere maiuscole" }
    ],
    correctAnswerId: 'A',
    explanation: "In C l'operatore `&` è l'operatore 'address-of': restituisce l'indirizzo di memoria della variabile (puntatore), mentre l'asterisco `*` è l'operatore di dereferenziazione.",
    hint: "Operatore 'indirizzo di': &var restituisce il puntatore alla variabile.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_087',
    question: "In Python, qual è la differenza tra una 'Lista' ([]) e una 'Tupla' (())?",
    options: [
      { id: 'A', text: "Le liste sono strutture dati mutabili (possono essere modificate dopo la creazione), mentre le tuple sono immutabili" },
      { id: 'B', text: "Le tuple possono contenere solo numeri, mentre le liste solo testo" },
      { id: 'C', text: "Le liste non possono essere ordinate con la funzione sort()" },
      { id: 'D', text: "Le tuple sono memorizzate esclusivamente su server cloud" }
    ],
    correctAnswerId: 'A',
    explanation: "Le tuple sono sequenze immutabili: una volta create non possono essere estese né alterate, il che le rende utilizzabili come chiavi di dizionari (sono hashable) e più veloci delle liste.",
    hint: "Lista = mutabile; Tupla = immutabile.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_088',
    question: "Nel paradigma architetturale dei Microservizi, cosa definisce il pattern 'API Gateway'?",
    options: [
      { id: 'A', text: "Un singolo punto di ingresso per tutti i client esterni che instrada le richieste ai microservizi interni, gestendo autenticazione, rate limiting, logging e aggregazione delle risposte" },
      { id: 'B', text: "Un firewall fisico installato all'ingresso della sala server" },
      { id: 'C', text: "Un modem analogico per l'invio automatico di fax" },
      { id: 'D', text: "Un cavo in fibra ottica sottomarino tra Europa e Stati Uniti" }
    ],
    correctAnswerId: 'A',
    explanation: "L'API Gateway centralizza le funzionalità trasversali (reverse proxy, autenticazione JWT, SSL termination, caching, throttling) per evitare che ogni singolo microservizio debba reimplementarle.",
    hint: "Punto di ingresso unico che smista il traffico verso i vari microservizi interni.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_089',
    question: "In JavaScript/TypeScript, qual è il comportamento del costrutto 'async / await'?",
    options: [
      { id: 'A', text: "Fornisce una sintassi sincrona per lavorare con le Promises, mettendo in pausa l'esecuzione della funzione async finché la Promise non si risolve o viene rifiutata, senza bloccare il thread principale" },
      { id: 'B', text: "Costringe il processore a eseguire il codice su un secondo computer" },
      { id: 'C', text: "Crea un nuovo processo di sistema operativo con privilegi di root" },
      { id: 'D', text: "Salva automaticamente il database su un server di backup ogni minuto" }
    ],
    correctAnswerId: 'A',
    explanation: "`async/await` è zucchero sintattico costruito sopra le Promise: consente di scrivere codice asincrono leggibile in sequenza senza annidare callback (`callback hell`).",
    hint: "Sintassi elegante per gestire Promises asincrone in modo lineare.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_090',
    question: "Cosa stabilisce il principio 'Liskov Substitution Principle' (LSP nei principi SOLID)?",
    options: [
      { id: 'A', text: "Gli oggetti di una classe derivata devono poter sostituire gli oggetti della classe base senza alterare la correttezza del programma" },
      { id: 'B', text: "Ogni file di codice deve essere firmato digitalmente da almeno due sviluppatori" },
      { id: 'C', text: "Tutti i nomi delle variabili devono essere scritti in lettere minuscole" },
      { id: 'D', text: "Le classi devono contenere un massimo di dieci righe di codice ciascuna" }
    ],
    correctAnswerId: 'A',
    explanation: "Formulato da Barbara Liskov: se S è un sottotipo di T, gli oggetti di tipo T devono poter essere rimpiazzati con oggetti di tipo S senza causare comportamenti inattesi o violare pre/post-condizioni.",
    hint: "Una sottoclasse deve poter essere usata ovunque sia prevista la classe genitore.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_LANG_091',
    question: "In Python, cosa fa il blocco 'try... except... finally' quando viene sollevata un'eccezione non gestita?",
    options: [
      { id: 'A', text: "Il blocco 'finally' viene SEMPRE eseguito prima che l'eccezione si propaghi all'esterno o il programma termini" },
      { id: 'B', text: "Il blocco 'finally' viene saltato completamente se si verifica un errore" },
      { id: 'C', text: "Il blocco 'finally' viene rieseguito 10 volte consecutive" },
      { id: 'D', text: "Il programma ignora l'eccezione e prosegue come se nulla fosse" }
    ],
    correctAnswerId: 'A',
    explanation: "La clausola `finally` è garantita in qualsiasi scenario (con o senza eccezioni sollevate o catturate), motivo per cui è usata per il cleanup di connessioni e file.",
    hint: "Il blocco 'finally' viene SEMPRE eseguito, con o senza errori.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_092',
    question: "In Java, qual è la differenza tra un'Interfaccia (dopo Java 8) e una Classe Astratta?",
    options: [
      { id: 'A', text: "Una classe può implementare molteplici interfacce ma può estendere una sola classe astratta; inoltre le classi astratte possono avere campi di stato di istanza e costruttori, a differenza delle interfacce" },
      { id: 'B', text: "Le interfacce non possono avere alcun metodo implementato con codice" },
      { id: 'C', text: "Le classi astratte possono essere istanziate direttamente con l'operatore new" },
      { id: 'D', text: "Non esiste alcuna differenza, sono sinonimi" }
    ],
    correctAnswerId: 'A',
    explanation: "Java supporta l'ereditarietà multipla di tipo tramite interfacce (che da Java 8 possono avere metodi `default` e `static`), ma mantiene l'ereditarietà singola per le classi (astratte o concrete) che mantengono stato e costruttori.",
    hint: "Ereditarietà multipla di interfacce vs ereditarietà singola di classe.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_093',
    question: "In un database relazionale o in un'applicazione backend, cosa si intende per 'SQL Injection'?",
    options: [
      { id: 'A', text: "Una vulnerabilità di sicurezza in cui dati forniti dall'utente non sanificati vengono concatenati direttamente in una query SQL, permettendo all'attaccante di eseguire comandi arbitrari sul database" },
      { id: 'B', text: "Un'istruzione di ottimizzazione per creare indici clustered" },
      { id: 'C', text: "Un cavo in rame per collegare due server di database" },
      { id: 'D', text: "Un processo per riordinare alfabeticamente le tabelle" }
    ],
    correctAnswerId: 'A',
    explanation: "La SQLi si verifica quando l'input esterno altera la struttura sintattica della query. Si mitiga tassativamente con Prepared Statements e query parametrizzate.",
    hint: "Attacco basato sull'iniezione di codice SQL arbitrario tramite input non validato.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_094',
    question: "Quale pattern architetturale viene utilizzato per disaccoppiare la creazione di famiglie di oggetti correlati o dipendenti senza specificarne le classi concrete?",
    options: [
      { id: 'A', text: "Abstract Factory Pattern" },
      { id: 'B', text: "Facade Pattern" },
      { id: 'C', text: "Decorator Pattern" },
      { id: 'D', text: "Proxy Pattern" }
    ],
    correctAnswerId: 'A',
    explanation: "L'Abstract Factory fornisce un'interfaccia per creare famiglie di oggetti connessi (es. componenti UI per Windows o Mac) garantendo che l'applicazione utilizzi la famiglia corretta.",
    hint: "Fabbrica di fabbriche per creare famiglie di oggetti correlati.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_095',
    question: "In Git, qual è l'effetto del comando 'git reset --hard HEAD~1'?",
    options: [
      { id: 'A', text: "Elimina l'ultimo commit, ripristina la cronologia al commit precedente e cancella irreversibilmente tutte le modifiche sia dalla staging area sia dalla working directory" },
      { id: 'B', text: "Invia l'ultimo commit al server remoto" },
      { id: 'C', text: "Crea un nuovo branch chiamato 'HEAD'" },
      { id: 'D', text: "Apre l'editor di testo per modificare il messaggio di commit" }
    ],
    correctAnswerId: 'A',
    explanation: "`--hard` distrugge sia lo snapshot nel commit sia il lavoro locale non salvato, riportando l'albero di lavoro all'esatto stato del commit puntato.",
    hint: "Reset distruttivo: cancella commit, indice e modifiche nella working directory.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_096',
    question: "Che cos'è una funzione 'ricorsiva' nella programmazione?",
    options: [
      { id: 'A', text: "Una funzione che richiama se stessa all'interno del proprio corpo per risolvere sottoproblemi più piccoli, terminando quando raggiunge un caso base (base case)" },
      { id: 'B', text: "Una funzione che può essere scritta solo in latino" },
      { id: 'C', text: "Una funzione che viene richiamata ogni ora da un timer di sistema" },
      { id: 'D', text: "Una funzione memorizzata su una scheda perforata" }
    ],
    correctAnswerId: 'A',
    explanation: "La ricorsione divide il problema in istanze più piccole dello stesso problema. È indispensabile definire un caso base per evitare il superamento dello stack (StackOverflowError).",
    hint: "Funzione che richiama se stessa fino al raggiungimento del caso base.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_097',
    question: "In linguaggi come JavaScript e Python, cosa si intende per 'Closure' (chiusura)?",
    options: [
      { id: 'A', text: "Una funzione che conserva l'accesso alle variabili del suo ambiente lessicale circostante (scope) anche dopo che la funzione esterna ha terminato la propria esecuzione" },
      { id: 'B', text: "La chiusura forzata del prompt dei comandi" },
      { id: 'C', text: "La disconnessione automatica del monitor a fine orario lavorativo" },
      { id: 'D', text: "Un blocco di codice che non restituisce alcun valore numerico" }
    ],
    correctAnswerId: 'A',
    explanation: "Una closure combina la funzione con l'ambiente in cui è stata dichiarata: permette alla funzione interna di 'ricordare' e manipolare variabili esterne anche al di fuori del loro scope originale.",
    hint: "Funzione che 'ricorda' le variabili dell'ambiente in cui è stata creata.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_098',
    question: "In C++, qual è lo scopo del puntatore speciale 'this' all'interno di un metodo di istanza non statico?",
    options: [
      { id: 'A', text: "Punta all'indirizzo di memoria dell'oggetto corrente sul quale il metodo è stato invocato" },
      { id: 'B', text: "Indica l'indirizzo del primo server della rete locale" },
      { id: 'C', text: "Punta alla classe genitore eliminando tutte le proprietà figlie" },
      { id: 'D', text: "Memorizza la licenza software del compilatore" }
    ],
    correctAnswerId: 'A',
    explanation: "Il puntatore implicito `this` (o `self` in Python) rappresenta l'istanza specifica dell'oggetto che sta eseguendo il metodo, consentendo di distinguere parametri locali da attributi di istanza (`this->x = x`).",
    hint: "Puntatore all'istanza corrente dell'oggetto.",
    level: "base"
  },
  {
    id: 'Q_INF_LANG_099',
    question: "Cosa stabilisce il principio 'Interface Segregation Principle' (ISP nei principi SOLID)?",
    options: [
      { id: 'A', text: "I client non dovrebbero essere costretti a dipendere da interfacce contenenti metodi che non utilizzano (è preferibile creare molte interfacce specifiche e snelle anziché una sola interfaccia enorme)" },
      { id: 'B', text: "Le interfacce grafiche devono essere utilizzate solo da utenti con schermo a colori" },
      { id: 'C', text: "Tutti i programmi devono comunicare solo tramite cavi seriali" },
      { id: 'D', text: "È vietato dichiarare più di due classi nello stesso package" }
    ],
    correctAnswerId: 'A',
    explanation: "L'ISP raccomanda interfacce coese e granulari: se un'interfaccia ha troppi metodi disomogenei, le classi che la implementano finiscono per contenere metodi vuoti o inutili.",
    hint: "Meglio molte interfacce piccole e specifiche che un'unica interfaccia mastodontica.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_LANG_100',
    question: "In un contesto di integrazione continua (CI/CD), cosa si intende per 'Test Unitario' (Unit Test)?",
    options: [
      { id: 'A', text: "Un test automatizzato che verifica il corretto funzionamento della più piccola unità testabile di codice sorgente (solitamente una singola funzione o metodo) in isolamento da dipendenze esterne" },
      { id: 'B', text: "Il collaudo della resistenza al fuoco del server rack" },
      { id: 'C', text: "Un questionario a risposte multiple somministrato agli utenti finali dell'applicazione" },
      { id: 'D', text: "La verifica che la spina della corrente sia inserita nella presa elettrica" }
    ],
    correctAnswerId: 'A',
    explanation: "I test unitari verificano singoli metodi o funzioni in modo rapido e ripetibile, usando mock o stub per simulare database o servizi esterni e isolare l'unità logica sotto esame.",
    hint: "Test automatizzato della più piccola unità isolata di codice (funzione/metodo).",
    level: "base"
  }
];

// Append to linguaggi.json
const langPath = path.join(__dirname, '../public/db/master_bank/informatica/linguaggi.json');
const langData = JSON.parse(fs.readFileSync(langPath, 'utf8'));
langData.push(...langQuestions);

langData.forEach((q, idx) => {
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

fs.writeFileSync(langPath, JSON.stringify(langData, null, 2), 'utf8');
const langCounts = { A: 0, B: 0, C: 0, D: 0 };
langData.forEach(q => langCounts[q.correctAnswerId]++);
console.log('Linguaggi updated! Total:', langData.length, 'Counts:', langCounts);
