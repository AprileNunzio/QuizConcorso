const fs = require('fs');
const path = require('path');

const osQuestions = [
  {
    id: 'Q_INF_OS_051',
    question: "Nel sistema operativo Linux, qual è il gestore di sistema e dei servizi (init system) adottato come standard dalla maggior parte delle distribuzioni moderne (Debian, Ubuntu, RHEL, CentOS)?",
    options: [
      { id: 'A', text: "systemd" },
      { id: 'B', text: "SysVinit" },
      { id: 'C', text: "Upstart" },
      { id: 'D', text: "OpenRC" }
    ],
    correctAnswerId: 'A',
    explanation: "systemd è l'init system e gestore di servizi predefinito su Linux moderno: gestisce l'avvio parallelo dei demoni, le unit (.service, .target, .socket) e il logging unificato con journalctl.",
    hint: "L'init system moderno di Linux basato sul comando systemctl.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_052',
    question: "In ambiente Linux, con quale comando si visualizzano in tempo reale i processi in esecuzione, l'uso di CPU, memoria e swap?",
    options: [
      { id: 'A', text: "top (oppure htop)" },
      { id: 'B', text: "ls -la" },
      { id: 'C', text: "cat /etc/passwd" },
      { id: 'D', text: "chmod 777" }
    ],
    correctAnswerId: 'A',
    explanation: "`top` (o l'alternativa avanzata `htop`) fornisce una panoramica interattiva in tempo reale sui processi attivi, percentuali di carico CPU, memoria allocata e tempo di uptime.",
    hint: "Comando per monitorare dinamicamente i processi di sistema in tempo reale.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_053',
    question: "In Linux, cosa rappresenta il valore ottale '755' applicato ai permessi di un file con il comando 'chmod 755 script.sh'?",
    options: [
      { id: 'A', text: "Proprietario: lettura, scrittura, esecuzione (rwx); Gruppo: lettura ed esecuzione (r-x); Altri: lettura ed esecuzione (r-x)" },
      { id: 'B', text: "Tutti gli utenti hanno permessi di scrittura illimitati" },
      { id: 'C', text: "Il file è crittografato e accessibile solo da root" },
      { id: 'D', text: "Il file può essere modificato solo dopo aver riavviato la macchina" }
    ],
    correctAnswerId: 'A',
    explanation: "In notazione ottale: r=4, w=2, x=1. 7 = 4+2+1 (rwx per l'owner); 5 = 4+1 (r-x per il group); 5 = 4+1 (r-x per others).",
    hint: "7 (4+2+1) per il proprietario, 5 (4+1) per gruppo e altri utenti.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_054',
    question: "Quale file di configurazione in Linux definisce i punti di montaggio statici dei filesystem e delle partizioni all'avvio del sistema?",
    options: [
      { id: 'A', text: "/etc/fstab" },
      { id: 'B', text: "/etc/hosts" },
      { id: 'C', text: "/etc/resolv.conf" },
      { id: 'D', text: "/var/log/syslog" }
    ],
    correctAnswerId: 'A',
    explanation: "`/etc/fstab` (File System Table) elenca i dispositivi a blocchi, i loro UUID, i punti di montaggio (mount point), i tipi di filesystem (ext4, xfs) e le opzioni di montaggio automatico al boot.",
    hint: "File System Table = fstab.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_055',
    question: "In Windows Server e ambienti Active Directory Domain Services (AD DS), cosa sono i 'Group Policy Objects' (GPO)?",
    options: [
      { id: 'A', text: "Insiemi di impostazioni di configurazione centralizzate che gli amministratori applicano a utenti e computer appartenenti a un dominio o a specifiche Unità Organizzative (OU)" },
      { id: 'B', text: "I gruppi di lavoro creati su WhatsApp per comunicare tra colleghi" },
      { id: 'C', text: "I moduli di espansione fisica della memoria RAM del server" },
      { id: 'D', text: "Certificati cartacei rilasciati dopo un corso di formazione" }
    ],
    correctAnswerId: 'A',
    explanation: "Le GPO consentono di gestire centralmente configurazioni di sicurezza, policy di password, blocco periferiche USB, installazione software e restrizioni desktop per migliaia di postazioni nel dominio.",
    hint: "Criteri di gruppo centralizzati in Active Directory per utenti e computer.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_056',
    question: "Cosa si intende per 'Spazio Utente' (User Space) e 'Spazio Kernel' (Kernel Space) nei sistemi operativi moderni?",
    options: [
      { id: 'A', text: "Una separazione di privilegi di memoria: il kernel opera in modalità privilegiata (Ring 0) con accesso diretto all'hardware, mentre le applicazioni utente girano in Ring 3 con accesso controllato tramite System Calls" },
      { id: 'B', text: "La dimensione fisica dell'hard disk riservata ai file personali dell'utente" },
      { id: 'C', text: "L'area dello schermo visibile prima del login" },
      { id: 'D', text: "Il limite di tempo di utilizzo del computer stabilito dal contratto di lavoro" }
    ],
    correctAnswerId: 'A',
    explanation: "Questa separazione architetturale (protezione ad anelli, tipicamente Ring 0 e Ring 3 x86) isola i processi utente difettosi o malevoli, impedendo loro di corrompere la memoria del kernel o crashare l'intero sistema.",
    hint: "Ring 0 (kernel privilegiato) vs Ring 3 (applicazioni utente isolate con chiamate di sistema).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_057',
    question: "In PowerShell su Windows, quale cmdlet viene utilizzato per recuperare informazioni sui processi in esecuzione nel sistema?",
    options: [
      { id: 'A', text: "Get-Process" },
      { id: 'B', text: "Show-Task" },
      { id: 'C', text: "Find-Execution" },
      { id: 'D', text: "Select-Program" }
    ],
    correctAnswerId: 'A',
    explanation: "PowerShell segue la convenzione Verbo-Sostantivo: `Get-Process` (alias `gps` o `ps`) restituisce oggetti processo .NET con ID, CPU, memoria e handle.",
    hint: "Convenzione standard Verbo-Sostantivo in PowerShell: Get-Process.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_058',
    question: "Nel filesystem NTFS di Windows, qual è la differenza tra 'Permessi Condivisione' (Share Permissions) e 'Permessi NTFS' (NTFS Permissions)?",
    options: [
      { id: 'A', text: "I permessi di condivisione si applicano solo all'accesso via rete, mentre i permessi NTFS si applicano sia localmente sia via rete; quando combinati, prevale il permesso più restrittivo" },
      { id: 'B', text: "I permessi NTFS funzionano solo per gli amministratori di dominio" },
      { id: 'C', text: "I permessi di condivisione crittografano i file con algoritmo BitLocker" },
      { id: 'D', text: "Non vi è alcuna differenza, condividono la stessa tabella ACL" }
    ],
    correctAnswerId: 'A',
    explanation: "Se una cartella è condivisa in rete, l'utente è soggetto sia ai permessi di Share sia a quelli NTFS della cartella/file: il sistema calcola l'intersezione applicando la restrizione più severa (most restrictive wins).",
    hint: "Prevale sempre la combinazione più restrittiva tra Share ed NTFS.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_059',
    question: "In Linux, cosa fa il demone 'cron'?",
    options: [
      { id: 'A', text: "Esegue pianificazioni di comandi, script e compiti automatici a orari, giorni o intervalli periodici prefissati (definiti nei file crontab)" },
      { id: 'B', text: "Sincronizza l'orologio con i satelliti GPS" },
      { id: 'C', text: "Misura la velocità di scrittura dell'hard disk" },
      { id: 'D', text: "Gestisce le finestre dell'interfaccia grafica X11" }
    ],
    correctAnswerId: 'A',
    explanation: "cron è lo scheduler fondamentale di Linux: legge le configurazioni crontab (es. `0 2 * * * backup.sh` per le 2:00 di notte) ed esegue i job in background.",
    hint: "Scheduler di processi e script pianificati in ambiente Linux/Unix.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_060',
    question: "Cos'è la memoria 'Swap' in Linux (o il file 'pagefile.sys' in Windows)?",
    options: [
      { id: 'A', text: "Uno spazio su memoria di massa (disco o partizione) utilizzato dal sistema operativo per estendere la memoria virtuale, trasferendovi pagine di memoria RAM inattive quando la RAM fisica scarseggia" },
      { id: 'B', text: "Una scheda di memoria aggiuntiva inserita in una presa USB" },
      { id: 'C', text: "La memoria cache L1 della CPU" },
      { id: 'D', text: "Una cartella riservata ai file del cestino" }
    ],
    correctAnswerId: 'A',
    explanation: "Il paging/swapping consente al gestore della memoria virtuale (VMM) di spostare blocchi di dati (pagine) tra RAM e disco, evitando il blocco immediato per esaurimento memoria (OOM), al costo di tempi di accesso più lenti.",
    hint: "Spazio su disco per estendere virtualmente la RAM fisica.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_061',
    question: "Quale comando Linux consente di terminare forzatamente e immediatamente un processo conoscendone il PID (Process ID)?",
    options: [
      { id: 'A', text: "kill -9 <PID> (oppure kill -SIGKILL <PID>)" },
      { id: 'B', text: "exit <PID>" },
      { id: 'C', text: "stop -force <PID>" },
      { id: 'D', text: "delete <PID>" }
    ],
    correctAnswerId: 'A',
    explanation: "Il segnale 9 (SIGKILL) è un segnale non intercettabile né ignorabile dal processo: il kernel termina immediatamente il processo e ne dealloca le risorse.",
    hint: "SIGKILL (segnale 9) termina forzatamente il processo a livello di kernel.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_062',
    question: "Cosa si intende per 'Kerberos' nell'infrastruttura di autenticazione di Windows Active Directory?",
    options: [
      { id: 'A', text: "Un protocollo di autenticazione di rete a chiave simmetrica basato su ticket (TGT e Service Ticket) rilasciati dal KDC (Key Distribution Center), che impedisce la trasmissione di password in chiaro sulla rete" },
      { id: 'B', text: "Un malware che cripta i file e chiede un riscatto in criptovalute" },
      { id: 'C', text: "Il browser web sviluppato dalla Microsoft per gli uffici ministeriali" },
      { id: 'D', text: "Un cavo di alimentazione schermato per rack industriali" }
    ],
    correctAnswerId: 'A',
    explanation: "Kerberos v5 è il protocollo di autenticazione predefinito in Active Directory: un client si autentica al KDC (sul Domain Controller), ottiene un Ticket-Granting Ticket (TGT) e lo usa per richiedere ticket di servizio senza mai inviare la password sulla rete.",
    hint: "Protocollo di autenticazione basato su ticket del KDC per Single Sign-On sicuro in rete.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_063',
    question: "In ambiente Linux, qual è la funzione del comando 'grep'?",
    options: [
      { id: 'A', text: "Cercare stringhe di testo o pattern basati su espressioni regolari all'interno di file o dall'input standard (stdin)" },
      { id: 'B', text: "Creare un archivio compresso di backup" },
      { id: 'C', text: "Modificare la password dell'amministratore di sistema" },
      { id: 'D', text: "Riavviare la scheda di rete wireless" }
    ],
    correctAnswerId: 'A',
    explanation: "`grep` (Global Regular Expression Print) analizza il testo riga per riga e stampa tutte le righe corrispondenti al pattern o espressione regolare specificata.",
    hint: "Comando principe per la ricerca di testo e pattern regex nei file.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_064',
    question: "Che cos'è il 'Registro di sistema' (Windows Registry) nei sistemi operativi Microsoft?",
    options: [
      { id: 'A', text: "Un database gerarchico centralizzato (organizzato in Hive come HKEY_LOCAL_MACHINE e HKEY_CURRENT_USER) che memorizza le impostazioni di configurazione dell'hardware, del sistema operativo, dei driver e delle applicazioni" },
      { id: 'B', text: "Il libro mastro cartaceo su cui annotare i numeri di inventario dei monitor" },
      { id: 'C', text: "Un software per la gestione dei turni del personale di segreteria" },
      { id: 'D', text: "L'elenco degli indirizzi IP bloccati dal provider internet" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Registry di Windows è il repository centrale di configurazione accessibile tramite l'editor `regedit`, strutturato ad albero con chiavi e valori binari, stringhe e DWORD.",
    hint: "Database gerarchico di configurazione di Windows (HKEY_...).",
    level: "base"
  },
  {
    id: 'Q_INF_OS_065',
    question: "In Linux, cosa indica il 'Load Average' mostrato dal comando 'uptime' con tre valori numerici (es. 0.50, 1.20, 2.10)?",
    options: [
      { id: 'A', text: "Il numero medio di processi in stato di esecuzione (running) o in attesa non interrompibile di I/O (uninterruptible sleep) calcolato rispettivamente nell'ultimo minuto, negli ultimi 5 minuti e negli ultimi 15 minuti" },
      { id: 'B', text: "La percentuale di batteria residua per ciascuna cella" },
      { id: 'C', text: "Il consumo in Kilowattora delle ultime tre ore" },
      { id: 'D', text: "Il numero di tentativi falliti di accesso via SSH" }
    ],
    correctAnswerId: 'A',
    explanation: "I tre numeri del Load Average rappresentano il carico di lavoro del sistema su 1, 5 e 15 minuti. Su un sistema con 4 core, un load average di 4.00 corrisponde al 100% di saturazione.",
    hint: "Carico medio dei processi in coda o in esecuzione su 1, 5 e 15 minuti.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_066',
    question: "In Windows Server, quale ruolo gestisce la risoluzione dei nomi di dominio (FQDN) in indirizzi IP numerici all'interno della rete aziendale?",
    options: [
      { id: 'A', text: "Server DNS (Domain Name System)" },
      { id: 'B', text: "Server DHCP (Dynamic Host Configuration Protocol)" },
      { id: 'C', text: "Server WINS (Windows Internet Name Service)" },
      { id: 'D', text: "Server RADIUS" }
    ],
    correctAnswerId: 'A',
    explanation: "Il ruolo DNS Server in Windows è indispensabile per Active Directory, mappando nomi host (es. `server01.inps.it`) a indirizzi IP e pubblicando record SRV per localizzare i domain controller.",
    hint: "Risoluzione da nomi a indirizzi IP = DNS.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_067',
    question: "Quale comando Linux consente di cambiare il proprietario (user) e il gruppo di un file o di una directory?",
    options: [
      { id: 'A', text: "chown utente:gruppo nomefile" },
      { id: 'B', text: "chmod 777 nomefile" },
      { id: 'C', text: "mv nomefile utente" },
      { id: 'D', text: "passwd utente" }
    ],
    correctAnswerId: 'A',
    explanation: "`chown` (Change Owner) modifica il proprietario e opzionalmente il gruppo assegnato (`chown user:group file`). Con l'opzione `-R` agisce ricorsivamente.",
    hint: "Change Owner = chown.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_068',
    question: "Nel registro eventi di Windows (Event Viewer), quali sono i tre registri principali di sistema storici?",
    options: [
      { id: 'A', text: "Applicazione (Application), Sicurezza (Security) e Sistema (System)" },
      { id: 'B', text: "Audio, Video e Grafica" },
      { id: 'C', text: "Hardware, Software e Reti" },
      { id: 'D', text: "Browser, Email e Chat" }
    ],
    correctAnswerId: 'A',
    explanation: "I registri cardine di Windows sono: System (eventi del kernel e driver), Application (eventi dei programmi installati) e Security (eventi di audit, logon/logoff e accessi alle risorse).",
    hint: "I tre registri storici fondamentali di Windows: Application, Security, System.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_069',
    question: "Cosa si intende per 'Inode' in un filesystem Unix/Linux (come ext4)?",
    options: [
      { id: 'A', text: "Una struttura dati su disco che memorizza tutti i metadati di un file (dimensione, permessi, UID/GID, timestamp, puntatori ai blocchi di dati fisici) ad eccezione del nome del file e del contenuto vero e proprio" },
      { id: 'B', text: "L'icona visualizzata sul desktop dell'utente" },
      { id: 'C', text: "La password cifrata dell'utente di sistema" },
      { id: 'D', text: "Il comando per avviare il browser web in modalità provvisoria" }
    ],
    correctAnswerId: 'A',
    explanation: "L'inode contiene tutti i metadati del file e i puntatori ai blocchi dati su disco. Il nome del file è invece conservato nella directory, che funge da mappa tra stringhe di testo e numeri di inode.",
    hint: "Struttura che memorizza i metadati del file e i puntatori ai blocchi fisici.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_070',
    question: "In Windows, che cosa fa lo strumento 'Sysprep' (System Preparation Tool)?",
    options: [
      { id: 'A', text: "Generalizza un'installazione di Windows rimuovendo informazioni specifiche del sistema (come il SID del computer) per renderla pronta per la clonazione e distribuzione massiva tramite immagini (imaging)" },
      { id: 'B', text: "Ripara automaticamente i pixel bruciati del monitor" },
      { id: 'C', text: "Cancella la cronologia di navigazione di tutti gli utenti" },
      { id: 'D', text: "Crea una nuova partizione formattata in FAT32" }
    ],
    correctAnswerId: 'A',
    explanation: "`sysprep /generalize` rimuove il SID univoco della macchina, i driver specifici e reimposta la fase OOBE (Out-of-Box Experience), consentendo di distribuire l'immagine su centinaia di PC aziendali senza conflitti di SID.",
    hint: "Prepara e generalizza l'immagine di Windows per la clonazione massiva senza duplicati di SID.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_071',
    question: "In Linux, qual è la funzione del comando 'tar -czvf backup.tar.gz /var/www'?",
    options: [
      { id: 'A', text: "Crea un archivio compresso con gzip contenente la directory specificata, mostrando l'output dettagliato a terminale" },
      { id: 'B', text: "Estrae il contenuto di un file ZIP nella cartella temporanea" },
      { id: 'C', text: "Elimina in modo sicuro i file di log più vecchi di 30 giorni" },
      { id: 'D', text: "Verifica l'integrità crittografica di una chiave GPG" }
    ],
    correctAnswerId: 'A',
    explanation: "`c` = create, `z` = comprimi con gzip, `v` = verbose (mostra i file processati), `f` = file di output specificato. È il comando standard per creare archivi `.tar.gz` in ambiente Unix.",
    hint: "-c (create), -z (gzip), -v (verbose), -f (file).",
    level: "base"
  },
  {
    id: 'Q_INF_OS_072',
    question: "Cosa stabilisce l'algoritmo di scheduling 'Round Robin' utilizzato dal kernel per l'assegnazione della CPU ai processi?",
    options: [
      { id: 'A', text: "Assegna a ciascun processo in coda un intervallo di tempo fisso di CPU (quanto di tempo o time slice); scaduto il quanto, il processo viene preemptato e reinserito in fondo alla coda" },
      { id: 'B', text: "Esegue prima i processi più corti senza mai interromperli" },
      { id: 'C', text: "Dà precedenza esclusiva ai processi avviati dall'utente amministratore" },
      { id: 'D', text: "Assegna la CPU in modo casuale mediante estrazione numerica" }
    ],
    correctAnswerId: 'A',
    explanation: "Round Robin è l'algoritmo di scheduling preemptive per eccellenza nei sistemi time-sharing: garantisce equità (fairness) e previene lo starvation assegnando a ogni processo una fetta di tempo definita (time slice).",
    hint: "Assegnazione equa di una fetta di tempo (time slice) a rotazione.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_073',
    question: "In Windows PowerShell, come si concatenano i comandi in modo che l'output di un cmdlet venga passato come oggetto strutturato in input al cmdlet successivo?",
    options: [
      { id: 'A', text: "Utilizzando il carattere pipeline '|'" },
      { id: 'B', text: "Utilizzando il carattere cancelletto '#'" },
      { id: 'C', text: "Utilizzando due punti '::'" },
      { id: 'D', text: "Separando i comandi con virgole multiple" }
    ],
    correctAnswerId: 'A',
    explanation: "A differenza delle shell Unix tradizionali che trasmettono flussi di testo grezzo, la pipeline `|` di PowerShell trasmette veri e propri oggetti .NET strutturati con proprietà e metodi.",
    hint: "Il simbolo di pipeline '|' trasmette oggetti completi tra cmdlet in PowerShell.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_074',
    question: "In ambiente Linux, cosa indica la directory speciale '/proc'?",
    options: [
      { id: 'A', text: "Un filesystem virtuale (pseudo-filesystem) creato dal kernel in memoria RAM che espone informazioni in tempo reale sullo stato del kernel, della memoria e dei processi attivi" },
      { id: 'B', text: "La cartella in cui risiedono i file di installazione dei programmi commerciali" },
      { id: 'C', text: "L'archivio dei documenti cestinati da oltre 60 giorni" },
      { id: 'D', text: "La partizione riservata all'avvio sicuro UEFI" }
    ],
    correctAnswerId: 'A',
    explanation: "`/proc` non occupa spazio su disco: i suoi file (es. `/proc/cpuinfo`, `/proc/meminfo`, `/proc/[PID]/`) sono finestre dinamiche sulla memoria del kernel che permettono di leggere parametri di sistema con comandi testuali come `cat`.",
    hint: "Pseudo-filesystem virtuale in RAM che espone lo stato del kernel e dei processi.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_075',
    question: "Cos'è la funzionalità 'VSS' (Volume Shadow Copy Service) in ambiente Windows Server?",
    options: [
      { id: 'A', text: "Un framework che consente di creare snapshot coerenti e copie shadow a livello di blocco di volumi disco, permettendo il backup di file aperti e database in uso senza bloccare le applicazioni" },
      { id: 'B', text: "Un programma per la grafica vettoriale 3D" },
      { id: 'C', text: "Un driver per la gestione delle ventole di raffreddamento" },
      { id: 'D', text: "Un protocollo di compressione video per videoconferenze" }
    ],
    correctAnswerId: 'A',
    explanation: "VSS coordina applicazioni, writer (come SQL Server o Exchange) e provider di archiviazione per 'congelare' istantaneamente lo stato del volume e fare snapshot/backup affidabili di file bloccati o aperti.",
    hint: "Volume Shadow Copy = snapshot e backup di file e database in uso senza interruzioni.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_076',
    question: "In Linux, cosa indica un 'Hard Link' rispetto a un 'Soft Link' (o Symbolic Link)?",
    options: [
      { id: 'A', text: "L'hard link è un ulteriore nome assegnato al medesimo inode del file originale (se si cancella l'originale i dati rimangono accessibili); il soft link è un file speciale che contiene solo il percorso del file target (se l'originale viene cancellato, il link si rompe)" },
      { id: 'B', text: "L'hard link può collegare file presenti su computer diversi collegati in rete" },
      { id: 'C', text: "Il soft link può essere aperto solo da utenti con permessi di root" },
      { id: 'D', text: "L'hard link occupa sempre il doppio dello spazio su disco rispetto al file originale" }
    ],
    correctAnswerId: 'A',
    explanation: "L'hard link punta direttamente all'inode e incrementa il reference count del file (non può attraversare filesystem diversi); il soft link (`ln -s`) è un puntatore al percorso testuale.",
    hint: "Hard link = stesso inode condiviso. Soft link = puntatore al path (scorciatoia).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_077',
    question: "Quale comando Linux consente di analizzare lo spazio libero e occupato su tutte le partizioni e filesystem montati in formato leggibile (MB/GB)?",
    options: [
      { id: 'A', text: "df -h" },
      { id: 'B', text: "du -sh /" },
      { id: 'C', text: "fdisk -l" },
      { id: 'D', text: "free -m" }
    ],
    correctAnswerId: 'A',
    explanation: "`df -h` (Disk Free, human-readable) mostra spazio totale, usato e disponibile per ogni filesystem montato. `du` calcola invece lo spazio occupato da file/directory specifiche.",
    hint: "df sta per Disk Free; l'opzione -h rende i valori in MB e GB facilmente leggibili.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_078',
    question: "In Windows, che cos'è il 'SID' (Security Identifier)?",
    options: [
      { id: 'A', text: "Un identificatore univoco di lunghezza variabile assegnato a ogni account utente, gruppo o computer di sicurezza per controllarne i diritti di accesso nelle liste ACL" },
      { id: 'B', text: "La password cifrata dell'account di posta elettronica" },
      { id: 'C', text: "Il numero di serie della scheda madre impresso dal costruttore" },
      { id: 'D', text: "Il nome del dominio internet associato al server" }
    ],
    correctAnswerId: 'A',
    explanation: "Il SID (es. `S-1-5-21-...`) identifica univocamente l'entità di sicurezza all'interno del database SAM o di Active Directory. Se si rinomina un utente, il suo SID non cambia e i permessi rimangono intatti.",
    hint: "Identificatore di sicurezza univoco su cui si basano i permessi di Windows.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_079',
    question: "Quale comando Linux visualizza la configurazione degli indirizzi IP, maschere e interfacce di rete (sostituto moderno del vecchio 'ifconfig')?",
    options: [
      { id: 'A', text: "ip addr (oppure ip a)" },
      { id: 'B', text: "netstat -r" },
      { id: 'C', text: "route -n" },
      { id: 'D', text: "ping localhost" }
    ],
    correctAnswerId: 'A',
    explanation: "La suite `iproute2` ha sostituito `net-tools`: il comando `ip addr` (o `ip a`) è lo standard per visualizzare e configurare gli indirizzi IPv4 e IPv6 su Linux.",
    hint: "ip addr della suite iproute2 ha sostituito il deprecato ifconfig.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_080',
    question: "Che cos'è 'WSL' (Windows Subsystem for Linux) presente in Windows 10 e 11?",
    options: [
      { id: 'A', text: "Una funzionalità che permette di eseguire un ambiente Linux completo (incluso kernel Linux nativo in WSL 2) direttamente all'interno di Windows senza l'overhead di una macchina virtuale tradizionale" },
      { id: 'B', text: "Un virus che converte i file Word in formati testo non leggibili" },
      { id: 'C', text: "Un emulatore di vecchi videogiochi per console" },
      { id: 'D', text: "Un software per la navigazione anonima nel Deep Web" }
    ],
    correctAnswerId: 'A',
    explanation: "WSL 2 utilizza una macchina virtuale leggera gestita direttamente dall'hypervisor Hyper-V con un vero kernel Linux open source, offrendo piena compatibilità con chiamate di sistema e supporto per container Docker.",
    hint: "Esegue binari Linux nativi direttamente all'interno di Windows con kernel reale.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_081',
    question: "In Linux, come si reindirizza contemporaneamente sia lo standard output (stdout) sia lo standard error (stderr) di un comando verso un file di log sovrascrivendolo?",
    options: [
      { id: 'A', text: "comando > log.txt 2>&1 (oppure comando &> log.txt)" },
      { id: 'B', text: "comando 2> log.txt" },
      { id: 'C', text: "comando < log.txt" },
      { id: 'D', text: "comando | log.txt" }
    ],
    correctAnswerId: 'A',
    explanation: "`>` reindirizza il descrittore 1 (stdout) al file; `2>&1` reindirizza il descrittore 2 (stderr) verso il descrittore 1. In bash moderna la sintassi compatta è `&> file`.",
    hint: "Reindirizzamento stdout (1) e stderr (2): > file 2>&1 oppure &> file.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_082',
    question: "Cosa si intende per 'BitLocker' nei sistemi operativi Windows?",
    options: [
      { id: 'A', text: "La tecnologia di crittografia completa del volume (Full Disk Encryption) che protegge i dati memorizzati sul disco integrandosi con il chip TPM per impedire accessi non autorizzati in caso di furto fisico del PC" },
      { id: 'B', text: "Un programma per comprimere file ZIP con password a 4 cifre" },
      { id: 'C', text: "Un blocco automatico della tastiera dopo 5 tentativi di PIN errati" },
      { id: 'D', text: "Un firewall hardware installato nella scheda di rete" }
    ],
    correctAnswerId: 'A',
    explanation: "BitLocker cifra l'intero volume di sistema operativo e i dischi dati con algoritmi XTS-AES a 128 o 256 bit: se il disco viene rimosso e collegato a un altro PC, i dati rimangono illeggibili senza la chiave di recupero.",
    hint: "Crittografia completa del disco integrata con il chip TPM in ambiente Windows.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_083',
    question: "In Linux, cosa rappresenta il segnale 'SIGTERM' (segnale 15) rispetto a 'SIGKILL' (segnale 9)?",
    options: [
      { id: 'A', text: "SIGTERM richiede la chiusura ordinata del processo, consentendogli di salvare lo stato e rilasciare le risorse prima di terminare; SIGKILL forza la chiusura immediata da parte del kernel senza possibilità di intercettazione" },
      { id: 'B', text: "SIGTERM riavvia la macchina, mentre SIGKILL spegne il monitor" },
      { id: 'C', text: "SIGTERM può essere inviato solo da utenti con permessi guest" },
      { id: 'D', text: "SIGKILL e SIGTERM sono identici in tutto e per tutto" }
    ],
    correctAnswerId: 'A',
    explanation: "La buona prassi sistemistica prevede di inviare prima SIGTERM (15) per consentire una terminazione pulita (graceful shutdown). Solo se il processo non risponde entro un tempo limite si invia SIGKILL (9).",
    hint: "SIGTERM (15) = richiesta di chiusura ordinata; SIGKILL (9) = abbattimento immediato forzato.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_084',
    question: "Quale file in Linux elenca gli account utente di sistema, i loro identificativi numerici UID/GID, le directory home e le shell di login assegnate?",
    options: [
      { id: 'A', text: "/etc/passwd" },
      { id: 'B', text: "/etc/shadow" },
      { id: 'C', text: "/etc/group" },
      { id: 'D', text: "/etc/sudoers" }
    ],
    correctAnswerId: 'A',
    explanation: "`/etc/passwd` contiene i record degli utenti (username, x, UID, GID, commento, home dir, shell). Gli hash delle password cifrate sono invece conservati in `/etc/shadow`, leggibile solo da root.",
    hint: "/etc/passwd contiene le anagrafiche utenti e UID; /etc/shadow custodisce gli hash delle password.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_085',
    question: "In Windows, cosa fa il comando da riga di comando 'sfc /scannow'?",
    options: [
      { id: 'A', text: "Scansiona l'integrità di tutti i file di sistema protetti e sostituisce i file corrotti o mancanti con copie corrette memorizzate nella cache locale (System File Checker)" },
      { id: 'B', text: "Verifica se il cavo di rete è inserito nello switch" },
      { id: 'C', text: "Formatta la memoria RAM per liberare spazio" },
      { id: 'D', text: "Invia una segnalazione di errore anonima a Microsoft" }
    ],
    correctAnswerId: 'A',
    explanation: "System File Checker (`sfc /scannow`) verifica i checksum dei file critici del sistema operativo e ripristina versioni originali integre dalla directory `WinSxS` se rileva corruzioni.",
    hint: "System File Checker per scansionare e ripristinare file di sistema Windows corrotti.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_086',
    question: "Quale comando Linux consente di cercare file nel filesystem in base a criteri avanzati come nome, dimensione, permessi o data di ultima modifica?",
    options: [
      { id: 'A', text: "find" },
      { id: 'B', text: "locate" },
      { id: 'C', text: "search" },
      { id: 'D', text: "which" }
    ],
    correctAnswerId: 'A',
    explanation: "Il comando `find` attraversa la gerarchia di directory in tempo reale valutando parametri complessi (es. `find /var/log -name '*.log' -size +100M -mtime -7`).",
    hint: "find scansiona il filesystem applicando molteplici filtri di ricerca.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_087',
    question: "In Windows Server, qual è il protocollo di rete utilizzato dai client per accedere a cartelle e file condivisi in rete locale?",
    options: [
      { id: 'A', text: "SMB (Server Message Block) / CIFS" },
      { id: 'B', text: "NFS" },
      { id: 'C', text: "AFP" },
      { id: 'D', text: "Telnet" }
    ],
    correctAnswerId: 'A',
    explanation: "SMB (Server Message Block, con le versioni moderne SMB 3.x che includono crittografia end-to-end e multi-channel) è il protocollo standard per la condivisione file e stampanti nell'ecosistema Windows.",
    hint: "Protocollo di condivisione cartelle di Windows = SMB.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_088',
    question: "In Linux, cosa indica il bit speciale 'Setuid' (SUID) impostato sui permessi di un file eseguibile?",
    options: [
      { id: 'A', text: "Il programma viene eseguito con i privilegi del proprietario del file (tipicamente root) anziché con i privilegi dell'utente che lo sta lanciando (es. /usr/bin/passwd)" },
      { id: 'B', text: "Il file viene automaticamente cancellato dopo il primo utilizzo" },
      { id: 'C', text: "L'eseguibile può essere lanciato solo tramite interfaccia grafica" },
      { id: 'D', text: "Il programma viene eseguito solo in modalità provvisoria" }
    ],
    correctAnswerId: 'A',
    explanation: "Il bit SUID (visibile come una 's' al posto della 'x' dell'owner, es. `-rwsr-xr-x`) permette a utenti comuni di eseguire operazioni privilegiate controllate (come cambiare la propria password modificando `/etc/shadow`).",
    hint: "Esegue il binario con i privilegi del proprietario del file (spesso root).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_089',
    question: "In Windows, quale strumento a riga di comando consente di visualizzare e configurare i criteri di gruppo applicati a un utente o a una macchina (forzando ad esempio l'aggiornamento con /force)?",
    options: [
      { id: 'A', text: "gpupdate / gpresult" },
      { id: 'B', text: "ipconfig /renew" },
      { id: 'C', text: "chkdsk /f" },
      { id: 'D', text: "net user /add" }
    ],
    correctAnswerId: 'A',
    explanation: "`gpupdate /force` forza l'applicazione immediata delle Group Policy (GPO) scaricandole dal Domain Controller; `gpresult /r` genera un report riassuntivo delle policy effettivamente applicate.",
    hint: "Group Policy Update e Group Policy Result = gpupdate e gpresult.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_090',
    question: "Cosa si intende per 'Zombie Process' (processo defunto) nei sistemi operativi Unix/Linux?",
    options: [
      { id: 'A', text: "Un processo che ha completato l'esecuzione ma mantiene la propria voce nella tabella dei processi perché il processo genitore (parent) non ha ancora letto il suo stato di uscita tramite la system call 'wait()'" },
      { id: 'B', text: "Un virus che invia spam nottetempo all'insaputa dell'utente" },
      { id: 'C', text: "Un processo che consuma il 100% della memoria RAM all'infinito" },
      { id: 'D', text: "Un'applicazione chiusa bruscamente per spegnimento della corrente" }
    ],
    correctAnswerId: 'A',
    explanation: "Un processo zombie non consuma CPU o memoria RAM viva, ma occupa uno slot nella tabella dei processi (PID). Se il genitore muore senza raccoglierne lo stato, il processo orfano viene adottato da `init/systemd` (PID 1) che esegue la wait ripulendolo.",
    hint: "Processo terminato il cui stato di uscita non è stato ancora letto dal genitore tramite wait().",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_091',
    question: "In Linux, quale comando visualizza le connessioni di rete attive, le porte in ascolto (listening) e i relativi processi (sostituto moderno di netstat)?",
    options: [
      { id: 'A', text: "ss -tulpn" },
      { id: 'B', text: "ping -c 4" },
      { id: 'C', text: "traceroute" },
      { id: 'D', text: "nslookup" }
    ],
    correctAnswerId: 'A',
    explanation: "`ss` (Socket Statistics) estrae informazioni direttamente dallo spazio kernel; le opzioni `-tulpn` mostrano socket TCP (-t), UDP (-u), in ascolto (-l), numeriche (-n) e con nome del processo/PID (-p).",
    hint: "ss (Socket Statistics) è il successore rapido di netstat.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_092',
    question: "In Windows, cos'è il 'Task Manager' (Gestione attività) e quale combinazione rapida di tasti lo apre direttamente?",
    options: [
      { id: 'A', text: "Lo strumento per visualizzare processi, prestazioni, avvio e utenti; si apre direttamente con Ctrl + Shift + Esc" },
      { id: 'B', text: "Un programma per inviare email; si apre con Alt + F4" },
      { id: 'C', text: "L'editor del registro; si apre con Windows + R" },
      { id: 'D', text: "Il visualizzatore di eventi; si apre con Shift + Tab" }
    ],
    correctAnswerId: 'A',
    explanation: "`Ctrl + Shift + Esc` bypassa la schermata intermedia di sicurezza e apre istantaneamente il Task Manager di Windows.",
    hint: "Scorciatoia rapida diretta: Ctrl + Shift + Esc.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_093',
    question: "Cosa stabilisce l'algoritmo 'OOM Killer' (Out-Of-Memory Killer) del kernel Linux?",
    options: [
      { id: 'A', text: "Interviene quando la memoria RAM e lo spazio di swap sono completamente saturi, selezionando e terminando forzatamente il processo con il punteggio oom_score più elevato per salvare il sistema dal crash totale" },
      { id: 'B', text: "Elimina i file duplicati per recuperare spazio su disco" },
      { id: 'C', text: "Riavvia la scheda grafica in caso di sfarfallio dello schermo" },
      { id: 'D', text: "Chiude automaticamente le schede del browser web non utilizzate da più di un'ora" }
    ],
    correctAnswerId: 'A',
    explanation: "Quando la memoria fisica e lo swap si esauriscono completamente, l'OOM Killer calcola un punteggio di penalità e invia un SIGKILL al processo più 'vorace' o meno critico per evitare il kernel panic.",
    hint: "Meccanismo estremo del kernel per abbattere processi quando la memoria è completamente esaurita.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_094',
    question: "In Windows Server, quale tecnologia cluster consente a due o più server fisici di lavorare insieme per garantire alta disponibilità (failover) a macchine virtuali Hyper-V o database?",
    options: [
      { id: 'A', text: "WSFC (Windows Server Failover Clustering)" },
      { id: 'B', text: "DirectShow" },
      { id: 'C', text: "Windows Media Player Sharing" },
      { id: 'D', text: "BitLocker Network Unlock" }
    ],
    correctAnswerId: 'A',
    explanation: "Windows Server Failover Clustering (WSFC) monitora i nodi del cluster: se un server si guasta, i servizi e le VM vengono migrati e riavviati automaticamente sui nodi superstiti senza perdita di disponibilità.",
    hint: "Failover Clustering di Windows Server per garantire alta affidabilità e continuità.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_095',
    question: "In Linux, cosa fa il comando 'tail -f /var/log/nginx/access.log'?",
    options: [
      { id: 'A', text: "Visualizza le ultime righe del file di log e rimane in attesa continua, mostrando a schermo ogni nuova riga aggiunta in tempo reale" },
      { id: 'B', text: "Cancella le ultime 10 righe del file di log" },
      { id: 'C', text: "Converte il file di log in un documento PDF" },
      { id: 'D', text: "Invia il file di log tramite email all'amministratore" }
    ],
    correctAnswerId: 'A',
    explanation: "L'opzione `-f` (follow) mantiene il comando aperto in ascolto sul descrittore di file, consentendo di monitorare in diretta gli accessi web o gli errori nei file di log.",
    hint: "L'opzione -f segue (follow) in diretta le nuove righe scritte nel file di log.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_096',
    question: "Qual è la funzione del comando 'chkdsk C: /f /r' in Windows?",
    options: [
      { id: 'A', text: "Verifica l'integrità del filesystem del disco C:, corregge gli errori logici (/f) e individua i settori danneggiati fisicamente recuperando le informazioni leggibili (/r)" },
      { id: 'B', text: "Formatta il disco C: eliminando tutti i programmi" },
      { id: 'C', text: "Aggiorna i driver della scheda madre" },
      { id: 'D', text: "Scarica l'ultima versione di Windows Update" }
    ],
    correctAnswerId: 'A',
    explanation: "`chkdsk` (Check Disk) è l'utilità di verifica del disco: `/f` corregge gli errori di filesystem, `/r` localizza i settori danneggiati (bad sectors) e tenta il recupero dei dati leggibili.",
    hint: "Check Disk per correggere errori di filesystem e scovare settori danneggiati.",
    level: "base"
  },
  {
    id: 'Q_INF_OS_097',
    question: "In Linux, cosa si intende per 'systemd target' rispetto ai vecchi 'runlevel' di SysVinit?",
    options: [
      { id: 'A', text: "Un'unità di raggruppamento che definisce uno stato di sincronizzazione o modalità operativa del sistema (es. multi-user.target equivale al runlevel 3, graphical.target al runlevel 5)" },
      { id: 'B', text: "Il disco di destinazione per i backup automatici" },
      { id: 'C', text: "Un bersaglio grafico per calibrare il puntatore del mouse" },
      { id: 'D', text: "Un'applicazione per il disegno tecnico assistito" }
    ],
    correctAnswerId: 'A',
    explanation: "I target di systemd hanno sostituito i runlevel numerici: `multi-user.target` è la modalità testo multi-utente, `graphical.target` avvia il server grafico, `rescue.target` la modalità di emergenza a singolo utente.",
    hint: "I target di systemd hanno rimpiazzato i runlevel (es. graphical.target = runlevel 5).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_098',
    question: "In Windows, cos'è il file system 'ReFS' (Resilient File System) introdotto nei sistemi Windows Server?",
    options: [
      { id: 'A', text: "Un filesystem progettato per massimizzare la disponibilità e la resilienza dei dati, dotato di auto-riparazione della corruzione dei metadati mediante checksum di integrità e supporto per volumi enormi (fino a 35 PB)" },
      { id: 'B', text: "Un filesystem compatibile solo con dischetti floppy da 1,44 MB" },
      { id: 'C', text: "Un protocollo di crittografia per chat aziendali" },
      { id: 'D', text: "La partizione su cui risiede il cestino di Windows" }
    ],
    correctAnswerId: 'A',
    explanation: "ReFS è il successore enterprise di NTFS per grossi archivi e macchine virtuali: rileva e corregge automaticamente la corruzione silente dei dati (bit rot) grazie a checksum di integrità.",
    hint: "Resilient File System con auto-riparazione e checksum per l'integrità dei dati.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_OS_099',
    question: "In ambiente Linux, qual è la funzione del comando 'strace'?",
    options: [
      { id: 'A', text: "Uno strumento di diagnostica e debug che intercetta e registra tutte le chiamate di sistema (system calls) effettuate da un processo e i segnali che riceve" },
      { id: 'B', text: "Un software per tracciare la rotta aerea dei voli commerciali" },
      { id: 'C', text: "Un programma per eliminare i file temporanei della cronologia internet" },
      { id: 'D', text: "Un comando per formattare i dischi SSD in formato ext3" }
    ],
    correctAnswerId: 'A',
    explanation: "`strace` traccia l'interazione tra processo e kernel: mostra aperture di file (`open`), letture/scritture (`read`/`write`), allocazioni di memoria (`mmap`), risultando fondamentale per capire perché un programma va in errore.",
    hint: "Intercetta e visualizza tutte le chiamate di sistema (system call) di un processo.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_OS_100',
    question: "In Windows Server Active Directory, quali sono i ruoli 'FSMO' (Flexible Single Master Operation) assegnati ai Domain Controller?",
    options: [
      { id: 'A', text: "Cinque ruoli specializzati (Schema Master, Domain Naming Master, RID Master, PDC Emulator, Infrastructure Master) in cui un solo DC alla volta è autorizzato a compiere specifiche modifiche per prevenire conflitti" },
      { id: 'B', text: "I protocolli di crittografia usati per le videochiamate di Teams" },
      { id: 'C', text: "I livelli di velocità delle ventole del server rack" },
      { id: 'D', text: "Le classi di indirizzi IP assegnate ai client Wi-Fi" }
    ],
    correctAnswerId: 'A',
    explanation: "Sebbene Active Directory sia un modello multi-master, 5 compiti critici (2 a livello di foresta e 3 a livello di dominio) richiedono un unico master per evitare collisioni (Schema, Domain Naming, RID, PDC Emulator, Infrastructure).",
    hint: "I 5 ruoli a master singolo in Active Directory (Schema, RID, PDC, ecc.).",
    level: "avanzato"
  }
];

// Append to os_linux_windows.json
const osPath = path.join(__dirname, '../public/db/master_bank/informatica/os_linux_windows.json');
const osData = JSON.parse(fs.readFileSync(osPath, 'utf8'));
osData.push(...osQuestions);

const letters = ['A', 'B', 'C', 'D'];
osData.forEach((q, idx) => {
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

fs.writeFileSync(osPath, JSON.stringify(osData, null, 2), 'utf8');
const osCounts = { A: 0, B: 0, C: 0, D: 0 };
osData.forEach(q => osCounts[q.correctAnswerId]++);
console.log('OS Linux/Windows updated! Total:', osData.length, 'Counts:', osCounts);

// Now Middleware Questions (Q_INF_MID_051 to 100)
const midQuestions = [
  {
    id: 'Q_INF_MID_051',
    question: "Nel contesto delle architetture software enterprise, che cos'è il 'Middleware'?",
    options: [
      { id: 'A', text: "Uno strato software intermedio che fornisce servizi e funzionalità comuni (comunicazione, gestione transazioni, autenticazione, code di messaggi) alle applicazioni, disaccoppiandole dal sistema operativo e dall'hardware sottostante" },
      { id: 'B', text: "L'unità centrale di elaborazione montata sulla scheda madre" },
      { id: 'C', text: "Un cavo di collegamento tra monitor e scheda video" },
      { id: 'D', text: "Un software di fotoritocco per immagini raster" }
    ],
    correctAnswerId: 'A',
    explanation: "Il middleware agisce da 'collante software' (software glue): connette applicazioni eterogenee distribuite e fornisce astrazioni per la gestione delle chiamate remote, database pooling, messaggistica e sicurezza.",
    hint: "Strato intermedio tra sistema operativo e applicazioni che gestisce comunicazioni e servizi distribuiti.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_052',
    question: "Qual è la differenza fondamentale tra un 'Web Server' (es. NGINX, Apache HTTP Server) e un 'Application Server' (es. Tomcat, WildFly/JBoss, WebLogic)?",
    options: [
      { id: 'A', text: "Il Web Server gestisce principalmente richieste HTTP per contenuti statici o fa da reverse proxy; l'Application Server ospita ed esegue la logica di business applicativa dinamica, gestendo container di servlet/EJB, transazioni e pool di risorse" },
      { id: 'B', text: "Il Web Server funziona solo su computer portatili" },
      { id: 'C', text: "L'Application Server non può connettersi a una rete internet" },
      { id: 'D', text: "Non esiste alcuna differenza, sono sinonimi" }
    ],
    correctAnswerId: 'A',
    explanation: "I Web Server sono ottimizzati per servire file statici (HTML, CSS, immagini) e instradare traffico; gli Application Server forniscono un ambiente di esecuzione completo per la logica aziendale (Java EE/Jakarta EE, Spring).",
    hint: "Web server per contenuti statici e proxy; Application server per la logica di business ed EJB/servlet.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_053',
    question: "In un'architettura di bilanciamento del carico (Load Balancing), come funziona l'algoritmo 'Round Robin'?",
    options: [
      { id: 'A', text: "Distribuisce le richieste in ingresso a ciascun server del pool in modo sequenziale e ciclico, una dopo l'altra" },
      { id: 'B', text: "Invia tutte le richieste sempre al server con l'indirizzo IP più basso" },
      { id: 'C', text: "Inoltra il traffico solo al server che consuma meno energia elettrica" },
      { id: 'D', text: "Scarta casualmente il 50% dei pacchetti in arrivo" }
    ],
    correctAnswerId: 'A',
    explanation: "Round Robin cicla regolarmente tra i server disponibili (1, 2, 3, 1, 2, 3...). Se i server hanno capacità di calcolo disomogenee si usa la variante Weighted Round Robin.",
    hint: "Distribuzione ciclica e sequenziale delle richieste a ciascun nodo.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_054',
    question: "Che cos'è un 'Reverse Proxy' (come NGINX o HAProxy) posizionato davanti ai server applicativi?",
    options: [
      { id: 'A', text: "Un server intermediario che riceve le richieste dei client esterni e le inoltra ai server interni appropriati, offrendo SSL termination, caching dei contenuti, bilanciamento del carico e protezione dell'infrastruttura backend" },
      { id: 'B', text: "Un proxy che consente ai dipendenti interni di navigare anonimamente su internet" },
      { id: 'C', text: "Un dispositivo hardware per la duplicazione di nastri magnetici" },
      { id: 'D', text: "Un software per la scansione automatica di ricevute cartacee" }
    ],
    correctAnswerId: 'A',
    explanation: "Mentre un forward proxy protegge i client interni verso internet, il reverse proxy protegge e ottimizza i server interni esponendo un unico indirizzo pubblico sicuro.",
    hint: "Intermediario che accetta richieste esterne e le distribuisce ai server backend interni.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_055',
    question: "Nel contesto dei Message Broker (es. RabbitMQ, Apache Kafka), qual è la differenza tra i modelli di messaggistica 'Point-to-Point' (Poda) e 'Publish-Subscribe' (Topic)?",
    options: [
      { id: 'A', text: "Nel Point-to-Point ciascun messaggio viene consumato ed elaborato da un solo ricevitore; nel Publish-Subscribe il messaggio viene recapitato a tutti i subscriber registrati su quel topic" },
      { id: 'B', text: "Nel Point-to-Point i messaggi vengono inviati solo via cavo seriale" },
      { id: 'C', text: "Nel Publish-Subscribe non è permessa la crittografia dei dati" },
      { id: 'D', text: "Non vi è alcuna differenza, entrambi inviano i messaggi a tutti i computer della rete" }
    ],
    correctAnswerId: 'A',
    explanation: "Point-to-Point (Queue): distribuzione del carico tra worker (ogni messaggio va a uno solo). Pub-Sub (Topic): trasmissione broadcast multi-destinatario (ogni abbonato riceve una copia del messaggio).",
    hint: "Queue = 1 a 1 (un solo consumatore per messaggio). Topic = 1 a molti (tutti i sottoscrittori).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_056',
    question: "In Apache Kafka, che cos'è un 'Topic' e come viene partizionato per consentire scalabilità orizzontale?",
    options: [
      { id: 'A', text: "Un topic è un canale logico di memorizzazione di record suddiviso in più 'partizioni' ordinate e immutabili, distribuibili su nodi broker diversi per consentire la lettura e scrittura parallela da parte di più consumer" },
      { id: 'B', text: "Un file compresso salvato nella cartella Documenti dell'utente" },
      { id: 'C', text: "Un'istruzione SQL per creare una tabella temporanea" },
      { id: 'D', text: "Una licenza d'uso per server commerciali IBM" }
    ],
    correctAnswerId: 'A',
    explanation: "Il partizionamento è l'unità base di scalabilità di Kafka: i record all'interno di ciascuna partizione hanno un offset sequenziale univoco, permettendo a un consumer group di leggere partizioni diverse in parallelo.",
    hint: "Il topic è suddiviso in partizioni ordinate che consentono throughput parallelo elevatissimo.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_MID_057',
    question: "Cos'è Docker nel contesto della containerizzazione applicativa?",
    options: [
      { id: 'A', text: "Una piattaforma open source che permette di impacchettare un'applicazione e tutte le sue dipendenze in un'unità standardizzata e leggera (container) che condivide il kernel del sistema operativo host isolandosi tramite cgroups e namespaces" },
      { id: 'B', text: "Un hypervisor di Tipo 1 che emula l'hardware del BIOS completo" },
      { id: 'C', text: "Un tipo di connettore di alimentazione per server rack" },
      { id: 'D', text: "Un software per la fatturazione elettronica della Pubblica Amministrazione" }
    ],
    correctAnswerId: 'A',
    explanation: "A differenza delle VM tradizionali che includono un intero sistema operativo guest e pesano diversi gigabyte, i container Docker condividono il kernel dell'host, avviandosi in millisecondi con consumi minimi di risorse.",
    hint: "Container leggeri che condividono il kernel dell'host sfruttando cgroups e namespace.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_058',
    question: "In Kubernetes (K8s), qual è la più piccola unità di calcolo distribuibile ed eseguibile?",
    options: [
      { id: 'A', text: "Il Pod" },
      { id: 'B', text: "Il Cluster" },
      { id: 'C', text: "Il Namespace" },
      { id: 'D', text: "Il Worker Node" }
    ],
    correctAnswerId: 'A',
    explanation: "Un Pod incapsula uno o più container strettamente accoppiati (es. applicazione e sidecar) che condividono lo stesso spazio di rete (stesso indirizzo IP e porte) e gli stessi volumi di storage.",
    hint: "L'unità minima atomica in Kubernetes è il Pod.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_059',
    question: "In Kubernetes, qual è il ruolo del componente 'Kubelet' presente su ciascun nodo worker?",
    options: [
      { id: 'A', text: "È l'agente che gira su ogni nodo del cluster e si assicura che i container descritti nei PodSpec siano effettivamente avviati, sani e in esecuzione sul container runtime locale" },
      { id: 'B', text: "Il database relazionale che memorizza lo stato dell'intero cluster" },
      { id: 'C', text: "Il firewall che blocca gli attacchi DDoS esterni" },
      { id: 'D', text: "L'interfaccia grafica web per gli sviluppatori" }
    ],
    correctAnswerId: 'A',
    explanation: "Kubelet comunica costantemente con l'API Server del control plane: riceve le specifiche dei Pod assegnati a quel nodo e interagisce con il runtime (es. containerd) per mantenerli nello stato desiderato.",
    hint: "Agente locale del nodo worker che garantisce l'avvio e la salute dei Pod.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_060',
    question: "Quale database distribuito chiave-valore è utilizzato dal Control Plane di Kubernetes per memorizzare lo stato completo e la configurazione dell'intero cluster?",
    options: [
      { id: 'A', text: "etcd" },
      { id: 'B', text: "MySQL" },
      { id: 'C', text: "Oracle Database" },
      { id: 'D', text: "Microsoft Access" }
    ],
    correctAnswerId: 'A',
    explanation: "etcd è un data store distribuito, fortemente coerente (basato sull'algoritmo di consenso Raft) e ad alta disponibilità, impiegato da Kubernetes come unica fonte di verità (single source of truth) per l'intero cluster.",
    hint: "etcd è il database distribuito di stato del control plane di Kubernetes.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_061',
    question: "In un'architettura a microservizi, cosa stabilisce il pattern 'Circuit Breaker'?",
    options: [
      { id: 'A', text: "Rileva fallimenti ripetuti nelle chiamate a un servizio remoto e 'apre il circuito', interrompendo temporaneamente l'invio di ulteriori richieste per consentire al servizio degradato di riprendersi senza saturare le risorse del chiamante" },
      { id: 'B', text: "Stacca la corrente elettrica al server rack in caso di fulmine" },
      { id: 'C', text: "Disattiva il Wi-Fi se la password viene digitata male per 3 volte" },
      { id: 'D', text: "Elimina le email contrassegnate come spam" }
    ],
    correctAnswerId: 'A',
    explanation: "Ispirato agli interruttori elettrici magnetotermici, il Circuit Breaker (Close, Open, Half-Open) previene guasti a cascata (cascading failures) restituendo immediatamente un errore o fallback finché il servizio remoto non torna stabile.",
    hint: "Interrompe temporaneamente le chiamate verso servizi remoti guasti per evitare blocchi a catena.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_062',
    question: "Cosa si intende per 'Service Mesh' (es. Istio, Linkerd) in ambienti cloud-native complessi?",
    options: [
      { id: 'A', text: "Un'infrastruttura dedicata che gestisce la comunicazione tra microservizi (service-to-service communication) tramite proxy sidecar (es. Envoy), fornendo crittografia mTLS automatica, tracing distribuito, metriche e routing avanzato" },
      { id: 'B', text: "Una maglia metallica protettiva per i cavi in fibra ottica" },
      { id: 'C', text: "Un software per disegnare grafici statistici delle assenze del personale" },
      { id: 'D', text: "Un server per l'invio di SMS pubblicitari ai cittadini" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Service Mesh delega la complessità di rete (mTLS, circuit breaking, retry, osservabilità) a proxy sidecar affiancati a ciascun container, senza dover modificare il codice sorgente delle applicazioni.",
    hint: "Infrastruttura di comunicazione service-to-service con proxy sidecar (mTLS, tracing, metriche).",
    level: "avanzato"
  },
  {
    id: 'Q_INF_MID_063',
    question: "In Apache Tomcat o altri servlet container Java, che cos'è il 'Connection Pool' per i database (es. HikariCP)?",
    options: [
      { id: 'A', text: "Una riserva di connessioni fisiche al database pre-inizializzate e mantenute aperte, pronte per essere riutilizzate dalle richieste dei client evitando il pesante costo di handshake di aprire e chiudere connessioni per ogni query" },
      { id: 'B', text: "Una piscina con acqua di raffreddamento per i server" },
      { id: 'C', text: "Un archivio cartaceo di numeri telefonici dei fornitori" },
      { id: 'D', text: "Un cavo di rete condiviso tra dieci computer diversi" }
    ],
    correctAnswerId: 'A',
    explanation: "Aprire una connessione TCP/TLS e autenticarsi con il database è un'operazione lenta ed onerosa. Un pool di connessioni (DataSource) riutilizza connessioni già attive, abbattendo la latenza applicativa.",
    hint: "Insieme di connessioni al DB già aperte e pronte al riuso immediato.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_064',
    question: "Cosa si intende per 'Stateless' in un'architettura di microservizi o API REST?",
    options: [
      { id: 'A', text: "Ciascuna richiesta HTTP da parte del client deve contenere tutte le informazioni necessarie per essere elaborata dal server, senza che quest'ultimo mantenga sessioni memorizzate in memoria locale tra una chiamata e l'altra" },
      { id: 'B', text: "L'applicazione può funzionare solo senza connessione a internet" },
      { id: 'C', text: "Il server non ha un nome di dominio registrato" },
      { id: 'D', text: "Le chiamate possono essere effettuate solo durante i giorni feriali" }
    ],
    correctAnswerId: 'A',
    explanation: "L'assenza di stato sul server (Statelessness) consente una scalabilità orizzontale ideale: un load balancer può indirizzare qualsiasi richiesta a qualunque istanza del pool indistintamente.",
    hint: "Nessuna sessione sul server: ogni richiesta contiene tutto il contesto (es. token JWT).",
    level: "base"
  },
  {
    id: 'Q_INF_MID_065',
    question: "Che cos'è un token 'JWT' (JSON Web Token) e come è strutturato?",
    options: [
      { id: 'A', text: "Uno standard aperto (RFC 7519) per la trasmissione sicura di informazioni tra parti come oggetto JSON, strutturato in tre parti separate da punti: Header, Payload e Signature (base64url encoded)" },
      { id: 'B', text: "Una moneta metallica da inserire nel computer per navigare in rete" },
      { id: 'C', text: "Un file audio contenente le istruzioni per l'uso del software" },
      { id: 'D', text: "Un codice fiscale provvisorio assegnato agli stranieri residenti" }
    ],
    correctAnswerId: 'A',
    explanation: "I token JWT (formato `header.payload.signature`) consentono autenticazione stateless: il server valida l'autenticità dei dati (claims) verificando la firma crittografica senza consultare il database ad ogni chiamata.",
    hint: "Header.Payload.Signature: token stateless firmato per autenticazione web.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_066',
    question: "In Kubernetes, quale risorsa espone un set di Pod come servizio di rete all'interno del cluster e ne bilancia il traffico su un IP virtuale stabile?",
    options: [
      { id: 'A', text: "Service (ClusterIP, NodePort, LoadBalancer)" },
      { id: 'B', text: "ConfigMap" },
      { id: 'C', text: "PersistentVolumeClaim" },
      { id: 'D', text: "DaemonSet" }
    ],
    correctAnswerId: 'A',
    explanation: "I Pod sono effimeri e cambiano IP a ogni riavvio; il Service fornisce un endpoint stabile (con proprio IP virtuale e nome DNS interno) e instrada il traffico ai Pod sani identificati dai selector.",
    hint: "La risorsa Service garantisce IP stabile e bilanciamento del traffico verso i Pod.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_067',
    question: "Cosa si intende per 'Horizontal Pod Autoscaler' (HPA) in Kubernetes?",
    options: [
      { id: 'A', text: "Un controller che aumenta o riduce automaticamente il numero di repliche dei Pod all'interno di un Deployment in base all'utilizzo effettivo di CPU, memoria o metriche personalizzate" },
      { id: 'B', text: "L'allungamento orizzontale dei caratteri tipografici nei report PDF" },
      { id: 'C', text: "La sostituzione automatica dei monitor vecchi con modelli widescreen" },
      { id: 'D', text: "Il backup settimanale dei file di testo sul server secondario" }
    ],
    correctAnswerId: 'A',
    explanation: "L'HPA monitora le metriche (es. se l'utilizzo medio di CPU supera il 70%) e scala orizzontalmente aumentando il numero di repliche del Pod per gestire i picchi, riducendole nei momenti di calma.",
    hint: "Scalabilità orizzontale automatica: aggiunge o toglie repliche di Pod in base al carico.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_068',
    question: "In Docker, qual è lo scopo del comando 'docker build -t mia-app:latest .'?",
    options: [
      { id: 'A', text: "Costruire un'immagine Docker leggendo le istruzioni contenute nel Dockerfile presente nella directory corrente e assegnarle un tag identificativo" },
      { id: 'B', text: "Cancellare tutti i container fermi sul server" },
      { id: 'C', text: "Scaricare un aggiornamento del sistema operativo host" },
      { id: 'D', text: "Inviare un file di log all'amministratore di sistema" }
    ],
    correctAnswerId: 'A',
    explanation: "`docker build` compila l'immagine a strati (layers) eseguendo le istruzioni del Dockerfile (FROM, COPY, RUN, CMD) ed etichettandola con il nome specificato dal parametro `-t`.",
    hint: "Costruzione di una nuova immagine Docker a partire da un Dockerfile.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_069',
    question: "Che cos'è 'Redis' e per quale scopo principale viene utilizzato nelle architetture web enterprise?",
    options: [
      { id: 'A', text: "Un data store in-memory open source ad altissime prestazioni strutturato a chiave-valore, impiegato prevalentemente come cache distribuita, message broker e gestore di sessioni utente" },
      { id: 'B', text: "Un antivirus per computer Windows 98" },
      { id: 'C', text: "Un compilatore per linguaggio Cobol" },
      { id: 'D', text: "Un browser per la navigazione su reti intranet private" }
    ],
    correctAnswerId: 'A',
    explanation: "Mantenendo i dati interamente in memoria RAM (con opzionale persistenza su disco RDB/AOF), Redis garantisce tempi di risposta sub-millisecondo, ideale per caching e gestione code.",
    hint: "Database in-memory chiave-valore ultra-veloce usato per cache e sessioni.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_070',
    question: "In un cluster Kubernetes, qual è il ruolo del 'Kube-Scheduler' nel Control Plane?",
    options: [
      { id: 'A', text: "Assegna i Pod appena creati ai nodi worker più idonei del cluster, valutando risorse richieste, vincoli di affinità/anti-affinità, taints e tollerations" },
      { id: 'B', text: "Imposta la sveglia mattutina per gli amministratori di sistema" },
      { id: 'C', text: "Calcola le ferie residue dei dipendenti della sede centrale" },
      { id: 'D', text: "Verifica che le fatture elettroniche siano pagate nei termini" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Kube-Scheduler decide 'dove' posizionare i Pod: filtra i nodi disponibili per requisiti hardware/software, assegna loro un punteggio (scoring) e vincola il Pod al nodo migliore.",
    hint: "Decide su quale nodo worker far girare ciascun Pod in base alle risorse disponibili.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_071',
    question: "Quale standard e protocollo di messaggistica asincrona è ampiamente utilizzato da RabbitMQ per garantire interoperabilità tra linguaggi diversi?",
    options: [
      { id: 'A', text: "AMQP (Advanced Message Queuing Protocol)" },
      { id: 'B', text: "SMTP" },
      { id: 'C', text: "FTP" },
      { id: 'D', text: "Telnet" }
    ],
    correctAnswerId: 'A',
    explanation: "AMQP è il protocollo aperto a livello applicativo per la messaggistica asincrona che definisce code, exchange (Direct, Fanout, Topic, Headers) e binding in RabbitMQ.",
    hint: "AMQP = Advanced Message Queuing Protocol.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_072',
    question: "Nel protocollo HTTP/2 e HTTP/3, quale funzionalità risolve il problema del 'Head-of-Line Blocking' delle connessioni HTTP/1.1?",
    options: [
      { id: 'A', text: "Il multiplexing delle richieste e delle risposte su una singola connessione TCP (in HTTP/2) o basata su UDP/QUIC (in HTTP/3)" },
      { id: 'B', text: "La cancellazione automatica della cronologia del browser" },
      { id: 'C', text: "L'uso obbligatorio di modem a 56k" },
      { id: 'D', text: "Il divieto di visualizzare immagini e video" }
    ],
    correctAnswerId: 'A',
    explanation: "Il multiplexing consente a più stream di richieste e risposte di viaggiare contemporaneamente interleaved su un'unica connessione; HTTP/3 usa QUIC (su UDP) eliminando anche il blocco a livello di trasporto TCP.",
    hint: "Multiplexing di flussi paralleli su una sola connessione.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_MID_073',
    question: "In Docker, qual è la funzione di un file 'docker-compose.yml'?",
    options: [
      { id: 'A', text: "Definire ed eseguire applicazioni multi-container, specificando servizi, reti virtuali e volumi condivisi in un unico file dichiarativo con un singolo comando (docker compose up)" },
      { id: 'B', text: "Comprimere le immagini fotografiche scattate con lo smartphone" },
      { id: 'C', text: "Tradurre il testo di un'applicazione in dialetti regionali" },
      { id: 'D', text: "Monitorare la velocità di rotazione della ventola della CPU" }
    ],
    correctAnswerId: 'A',
    explanation: "Docker Compose permette di orchestrare un intero stack applicativo (es. web app + redis + database postgres) definendone variabili d'ambiente, porte e volumi con semplicità.",
    hint: "Definisce e orchestra applicazioni multi-container in un file YAML.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_074',
    question: "Cosa si intende per 'SSL/TLS Termination' effettuata da un Reverse Proxy o Load Balancer?",
    options: [
      { id: 'A', text: "Il processo in cui il reverse proxy decifra il traffico HTTPS in ingresso e lo inoltra in chiaro (o ri-cifrato) ai server backend della rete interna, sgravandoli dal pesante carico computazionale di crittografia" },
      { id: 'B', text: "La revoca forzata di un certificato scaduto da più di tre anni" },
      { id: 'C', text: "La rottura fisica del cavo di rete durante i lavori di manutenzione" },
      { id: 'D', text: "Il blocco di tutti i siti che terminano con l'estensione .com" }
    ],
    correctAnswerId: 'A',
    explanation: "La TLS termination centralizza la gestione dei certificati digitali e scarica (offload) le operazioni matematiche di handshake asimmetrico dai server applicativi backend.",
    hint: "Decifratura del traffico HTTPS sul proxy per alleggerire i server backend.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_075',
    question: "In Kubernetes, cosa rappresenta una risorsa 'Ingress'?",
    options: [
      { id: 'A', text: "Un oggetto API che gestisce l'accesso esterno (HTTP/HTTPS) ai servizi all'interno del cluster, fornendo routing basato su host e percorsi URL (name-based e path-based routing)" },
      { id: 'B', text: "La porta di ingresso fisica della sala macchine" },
      { id: 'C', text: "Un account utente riservato ai programmatori esterni" },
      { id: 'D', text: "Il connettore per il cavo di alimentazione del server" }
    ],
    correctAnswerId: 'A',
    explanation: "L'Ingress Controller (es. Ingress-NGINX, Traefik) applica le regole definite negli oggetti Ingress per instradare le richieste esterne (es. `api.inps.it/servizio1` -> Service 1).",
    hint: "Gestore del traffico HTTP/HTTPS in ingresso al cluster basato su domini e path.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_076',
    question: "Nel protocollo REST, quali metodi HTTP devono essere 'idempotenti' secondo le specifiche standard RFC?",
    options: [
      { id: 'A', text: "GET, PUT, DELETE, HEAD e OPTIONS (l'effetto sul server di più richieste identiche consecutive è lo stesso di una singola richiesta)" },
      { id: 'B', text: "Solo ed esclusivamente il metodo POST" },
      { id: 'C', text: "Nessun metodo HTTP è mai idempotente" },
      { id: 'D', text: "Tutti i metodi che contengono la parola 'QUERY'" }
    ],
    correctAnswerId: 'A',
    explanation: "Idempotenza significa che eseguire la chiamata N volte produce lo stesso stato finale sul server. GET/HEAD sono sicuri e idempotenti; PUT (sostituzione) e DELETE sono idempotenti; POST non è idempotente (crea N risorse se ripetuto).",
    hint: "GET, PUT, DELETE sono idempotenti; POST non lo è.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_077',
    question: "In un'architettura software a microservizi, cosa si intende per 'Tracing Distribuito' (es. OpenTelemetry, Jaeger)?",
    options: [
      { id: 'A', text: "La capacità di tracciare e monitorare il percorso completo di una singola richiesta utente mentre attraversa molteplici microservizi, database e code, propagando un ID univoco (Trace ID / Span ID)" },
      { id: 'B', text: "Il tracciamento dei pacchi postali tramite codice a barre" },
      { id: 'C', text: "L'elenco degli orari di ingresso dei dipendenti tramite badge" },
      { id: 'D', text: "La stampa dei grafici di utilizzo della stampante di rete" }
    ],
    correctAnswerId: 'A',
    explanation: "Nelle architetture distribuite, una richiesta può toccare decine di servizi: il tracing distribuito associa uno Span a ogni passaggio per individuare esattamente colli di bottiglia e latenze anomale.",
    hint: "Tracciamento end-to-end di una richiesta attraverso molteplici microservizi con Trace ID.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_MID_078',
    question: "In Docker, qual è la funzione di un 'Volume' (Docker Volume)?",
    options: [
      { id: 'A', text: "Garantire la persistenza dei dati al di fuori del ciclo di vita del container, memorizzandoli in una directory gestita da Docker sull'host per evitare che vadano persi quando il container viene eliminato" },
      { id: 'B', text: "Regolare l'intensità del segnale acustico di allarme" },
      { id: 'C', text: "Misurare la capienza del serbatoio dell'impianto antincendio" },
      { id: 'D', text: "Aumentare la memoria video della scheda grafica" }
    ],
    correctAnswerId: 'A',
    explanation: "I container hanno un filesystem effimero (writable layer): cancellando il container, i dati svaniscono. I Volumi preservano dati persistenti (es. file del database, log) indipendentemente dal container.",
    hint: "Meccanismo primario per la persistenza dei dati oltre la vita del container.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_079',
    question: "Quale pattern architetturale viene utilizzato per gestire transazioni distribuite tra più microservizi senza l'impiego del pesante e bloccante protocollo 2PC (Two-Phase Commit)?",
    options: [
      { id: 'A', text: "Saga Pattern (basato su eventi o orchestrazione con transazioni di compensazione)" },
      { id: 'B', text: "Model View Presenter" },
      { id: 'C', text: "Active Record" },
      { id: 'D', text: "Singleton Distribuito" }
    ],
    correctAnswerId: 'A',
    explanation: "Il Saga Pattern scompone una transazione in una sequenza di transazioni locali; se una fallisce, la saga esegue una serie di transazioni compensative (compensating transactions) per annullare gli effetti parziali.",
    hint: "Saga Pattern: sequenza di transazioni locali con azioni di compensazione in caso di errore.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_MID_080',
    question: "In Kubernetes, cosa rappresenta una risorsa 'DaemonSet'?",
    options: [
      { id: 'A', text: "Assicura che una copia identica di un Pod sia in esecuzione su TUTTI i nodi del cluster (o su un sottoinsieme selezionato), tipicamente utilizzata per agenti di log (Fluentd) o monitoraggio (Prometheus Node Exporter)" },
      { id: 'B', text: "Un insieme di utenti con permessi di amministratore supremo" },
      { id: 'C', text: "Un programma che scansiona i virus su un solo computer portatile" },
      { id: 'D', text: "Un database temporaneo per il salvataggio dei carrelli acquisti" }
    ],
    correctAnswerId: 'A',
    explanation: "A differenza del Deployment che distribuisce N repliche casuali, il DaemonSet garantisce esattamente un'istanza per ciascun nodo (quando un nuovo nodo entra nel cluster, il Pod viene avviato automaticamente).",
    hint: "Garantisce l'esecuzione di una copia del Pod su ogni nodo del cluster.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_081',
    question: "Che cos'è 'GraphQL' rispetto alle tradizionali API REST?",
    options: [
      { id: 'A', text: "Un linguaggio di interrogazione per API che consente al client di specificare esattamente i campi e i dati di cui ha bisogno, evitando over-fetching e under-fetching in una singola richiesta HTTP POST" },
      { id: 'B', text: "Un software per la manipolazione di immagini e foto per il web" },
      { id: 'C', text: "Un protocollo di rete per l'invio di fax crittografati" },
      { id: 'D', text: "Un tipo di cavo coassiale per televisione satellitare" }
    ],
    correctAnswerId: 'A',
    explanation: "Sviluppato da Facebook/Meta, GraphQL espone un unico endpoint con schema fortemente tipizzato: il client definisce la 'query' chiedendo solo i campi desiderati, senza richiedere molteplici chiamate REST.",
    hint: "Linguaggio di query per API: il client richiede esattamente i campi che gli servono.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_082',
    question: "Nel protocollo di autenticazione OAuth 2.0, che ruolo ha il 'Resource Server'?",
    options: [
      { id: 'A', text: "Il server che ospita le risorse protette (es. API dell'INPS con i dati del cittadino) ed è in grado di accettare e validare richieste autenticate tramite un Access Token" },
      { id: 'B', text: "Il computer portatile su cui lavora l'utente finale" },
      { id: 'C', text: "L'alimentatore di emergenza della sala server" },
      { id: 'D', text: "Il centralino telefonico per le chiamate di emergenza" }
    ],
    correctAnswerId: 'A',
    explanation: "In OAuth 2.0 i 4 ruoli sono: Resource Owner (utente), Client (app), Authorization Server (rilascia token) e Resource Server (l'API protetta che valida il token ed eroga i dati).",
    hint: "Resource Server = l'API che custodisce le risorse e convalida l'Access Token.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_083',
    question: "In Kubernetes, cosa fa la direttiva 'livenessProbe' all'interno della configurazione di un container?",
    options: [
      { id: 'A', text: "Verifica periodicamente se l'applicazione all'interno del container è ancora viva e funzionante; se il controllo fallisce, Kubernetes riavvia automaticamente il container" },
      { id: 'B', text: "Controlla la temperatura della stanza in cui risiede il server" },
      { id: 'C', text: "Verifica la velocità di digitazione dell'operatore allo sportello" },
      { id: 'D', text: "Elimina definitivamente l'intero cluster in caso di errore di battitura" }
    ],
    correctAnswerId: 'A',
    explanation: "La livenessProbe intercetta stalli o deadlock applicativi interni: se la probe (HTTP, TCP o comando Exec) fallisce, Kubelet riavvia il container per ripristinarne la disponibilità.",
    hint: "Controlla la vitalità dell'app: se fallisce, riavvia il container.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_084',
    question: "Qual è la differenza fondamentale tra 'livenessProbe' e 'readinessProbe' in Kubernetes?",
    options: [
      { id: 'A', text: "La livenessProbe determina quando riavviare il container; la readinessProbe determina se il container è pronto a ricevere traffico di rete (se fallisce, il Pod viene rimosso dagli endpoint del Service senza essere riavviato)" },
      { id: 'B', text: "La readinessProbe formatta il disco fisso prima dell'avvio" },
      { id: 'C', text: "La livenessProbe funziona solo per i database relazionali" },
      { id: 'D', text: "Non vi è alcuna differenza, sono sinonimi" }
    ],
    correctAnswerId: 'A',
    explanation: "Durante l'avvio o durante un sovraccarico temporaneo, un container potrebbe non essere ancora pronto per ricevere traffico. La readinessProbe evita di inviargli richieste senza doverlo riavviare inutilmente.",
    hint: "Liveness riavvia; Readiness esclude temporaneamente dal bilanciamento del traffico.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_085',
    question: "In Docker, qual è il vantaggio dell'utilizzo delle 'Multi-Stage Builds' nel Dockerfile?",
    options: [
      { id: 'A', text: "Permette di utilizzare immagini separate per la compilazione e per l'esecuzione, copiando nell'immagine finale solo i binari compilati e scartando compilatori e dipendenze pesanti, riducendo drasticamente le dimensioni e la superficie di attacco" },
      { id: 'B', text: "Consente di scaricare due container con un solo clic" },
      { id: 'C', text: "Permette di installare Docker su schede madri prive di CPU" },
      { id: 'D', text: "Impedisce a chiunque di cancellare l'immagine dal server" }
    ],
    correctAnswerId: 'A',
    explanation: "Le multi-stage builds (istruzioni `FROM ... AS builder` e successivo `COPY --from=builder`) creano immagini finali snelle (es. basate su Alpine o distroless da poche decine di MB), escludendo SDK e toolchain di compilazione.",
    hint: "Separa la fase di build da quella di runtime, creando immagini minimali e sicure.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_MID_086',
    question: "Cosa si intende per 'Eventual Consistency' (consistenza eventuale) nei database distribuiti e nei sistemi middleware NoSQL?",
    options: [
      { id: 'A', text: "Un modello di consistenza in cui, in assenza di nuovi aggiornamenti, tutti i nodi della rete distribuiranno e sincronizzeranno i dati convergendo eventualmente verso il medesimo valore coerente" },
      { id: 'B', text: "La certezza che il database perderà i dati in caso di black-out elettrico" },
      { id: 'C', text: "L'obbligo di riavviare tutti i server ogni 24 ore esatte" },
      { id: 'D', text: "La cancellazione casuale di un record su dieci" }
    ],
    correctAnswerId: 'A',
    explanation: "Nei sistemi BASE (Basically Available, Soft state, Eventual consistency), per garantire altissima disponibilità e basse latenze su scala globale, le repliche non si sincronizzano istantaneamente ma convergono nel tempo.",
    hint: "I nodi si allineano in modo asincrono convergendo nel tempo allo stesso stato.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_087',
    question: "Cos'è un 'WAF' (Web Application Firewall) rispetto a un tradizionale firewall di rete a livello di pacchetti (Layer 3/4)?",
    options: [
      { id: 'A', text: "Un dispositivo o servizio operante a livello applicativo (Layer 7) che ispeziona il traffico HTTP/HTTPS per rilevare e bloccare attacchi specifici del web quali SQL Injection, XSS, CSRF e inclusioni malevole di file" },
      { id: 'B', text: "Un software per l'estinzione automatica di incendi fisici" },
      { id: 'C', text: "Un programma per la misurazione della velocità dei download" },
      { id: 'D', text: "Un filtro per la polvere installato all'ingresso dei condizionatori" }
    ],
    correctAnswerId: 'A',
    explanation: "I firewall di rete controllano solo IP e porte; il WAF decifra e comprende la semantica HTTP/HTTPS (intestazioni, payload JSON, cookie, parametri URL) applicando regole (es. OWASP Core Rule Set) per bloccare exploit web.",
    hint: "Firewall di Livello 7 che blocca minacce web (SQLi, XSS, ecc.) ispezionando il payload HTTP.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_088',
    question: "In Kubernetes, quale risorsa gestisce applicazioni che necessitano di identità di rete stabile, nomi host persistenti e storage dedicato ordinato (come cluster di database)?",
    options: [
      { id: 'A', text: "StatefulSet" },
      { id: 'B', text: "Deployment" },
      { id: 'C', text: "ReplicaSet" },
      { id: 'D', text: "Job" }
    ],
    correctAnswerId: 'A',
    explanation: "I Deployment creano Pod anonimi e intercambiabili. Lo StatefulSet assegna a ogni Pod un indice ordinale univoco e stabile (es. `db-0`, `db-1`), mantenendo l'associazione con i rispettivi volumi persistenti anche dopo rischedulazioni.",
    hint: "StatefulSet per carichi stateful con identità e dischi stabili (es. database distribuiti).",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_089',
    question: "Che cos'è l'approccio architetturale 'CQRS' (Command Query Responsibility Segregation)?",
    options: [
      { id: 'A', text: "Un pattern che separa nettamente i modelli e le operazioni di lettura dati (Query) da quelle di modifica/scrittura (Command), permettendo di ottimizzare, scalare e persino archiviare separatamente i due flussi" },
      { id: 'B', text: "L'obbligo di utilizzare due monitor per ciascuna postazione di lavoro" },
      { id: 'C', text: "Un sistema di controllo per l'apertura e chiusura delle porte d'ingresso" },
      { id: 'D', text: "Un formato di compressione audio per chiamate di call center" }
    ],
    correctAnswerId: 'A',
    explanation: "CQRS divide i Command (che mutano lo stato e non ritornano dati) dalle Query (che ritornano viste denormalizzate senza mutare lo stato), consentendo architetture asimmetriche scalabili ad alte prestazioni.",
    hint: "Separazione netta tra modelli di scrittura (Command) e modelli di lettura (Query).",
    level: "avanzato"
  },
  {
    id: 'Q_INF_MID_090',
    question: "In NGINX, quale direttiva definisce il gruppo di server backend verso cui inoltrare le richieste del load balancer?",
    options: [
      { id: 'A', text: "upstream" },
      { id: 'B', text: "backend_group" },
      { id: 'C', text: "server_pool" },
      { id: 'D', text: "proxy_targets" }
    ],
    correctAnswerId: 'A',
    explanation: "In NGINX il blocco `upstream nome_pool { server ip1:8080; server ip2:8080; }` raggruppa i server di destinazione, richiamati poi nella direttiva `proxy_pass http://nome_pool;`.",
    hint: "La direttiva standard in NGINX è 'upstream'.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_091',
    question: "Cosa si intende per 'Idempotenza' in un sistema di elaborazione dei messaggi asincroni (Message Consumer)?",
    options: [
      { id: 'A', text: "La capacità del consumer di ricevere ed elaborare lo stesso messaggio duplicato più volte (ad es. per ritrasmissione di rete) senza causare effetti collaterali indesiderati o duplicazioni di stato" },
      { id: 'B', text: "La cancellazione automatica della coda quando si superano 1000 messaggi" },
      { id: 'C', text: "L'invio di notifiche push a tutti gli utenti dell'applicazione" },
      { id: 'D', text: "La crittografia quantistica dei canali di trasmissione" }
    ],
    correctAnswerId: 'A',
    explanation: "Dato che i broker garantiscono tipicamente la consegna 'at-least-once' (almeno una volta), un messaggio può arrivare due volte: un consumer idempotente verifica se l'ID operazione è già stato processato prima di riapplicarlo.",
    hint: "Elaborare lo stesso messaggio più volte producendo sempre il medesimo risultato corretto.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_092',
    question: "In Kubernetes, come vengono iniettate le variabili di configurazione non sensibili e i file di properties all'interno dei container di un Pod?",
    options: [
      { id: 'A', text: "Mediante l'oggetto 'ConfigMap'" },
      { id: 'B', text: "Mediante la risorsa 'Secret' a 256 bit" },
      { id: 'C', text: "Hardcodando i valori direttamente nel codice sorgente dell'applicazione" },
      { id: 'D', text: "Salvandole in un foglio di calcolo Excel condiviso" }
    ],
    correctAnswerId: 'A',
    explanation: "Le ConfigMap separano gli artefatti di configurazione dall'immagine del container, consentendo di iniettare coppie chiave-valore come variabili d'ambiente o montarle come file di configurazione in un volume.",
    hint: "ConfigMap per configurazioni generiche; Secret per credenziali e chiavi private.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_093',
    question: "Quale standard e framework open source è ampiamente utilizzato per documentare, descrivere e testare in modo standardizzato le API REST (ex Swagger)?",
    options: [
      { id: 'A', text: "OpenAPI Specification (OAS)" },
      { id: 'B', text: "WSDL" },
      { id: 'C', text: "PostScript" },
      { id: 'D', text: "DocBook" }
    ],
    correctAnswerId: 'A',
    explanation: "OpenAPI (standard de facto basato su formato JSON/YAML) descrive endpoint, parametri, modelli di richiesta/risposta e schemi di sicurezza, consentendo la generazione automatica di client e documentazione interattiva.",
    hint: "OpenAPI Specification (OAS) è lo standard universale per documentare API REST.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_094',
    question: "Cosa si intende per 'Dead Letter Queue' (DLQ) in un'architettura basata su code di messaggi?",
    options: [
      { id: 'A', text: "Una coda speciale di servizio in cui vengono dirottati automaticamente i messaggi che non possono essere elaborati con successo dopo un numero prefissato di tentativi (retry) a causa di errori applicativi o dati corrotti" },
      { id: 'B', text: "L'elenco degli utenti deceduti non ancora cancellati dall'anagrafe" },
      { id: 'C', text: "Una cartella di spam contenente email pubblicitarie" },
      { id: 'D', text: "Un file di testo contenente i log delle stampanti dismesse" }
    ],
    correctAnswerId: 'A',
    explanation: "La DLQ evita che messaggi 'velenosi' (poison messages) blocchino all'infinito la coda principale con tentativi falliti continui, isolandoli per analisi diagnostica e successivo re-invio manuale.",
    hint: "Coda di isolamento per i messaggi non elaborabili dopo N tentativi falliti.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_095',
    question: "In un cluster Kubernetes, qual è il compito del componente 'kube-proxy'?",
    options: [
      { id: 'A', text: "Gestisce le regole di rete sui singoli nodi (tramite iptables o IPVS) per inoltrare il traffico indirizzato ai Service IP virtuali verso i corretti Pod di backend" },
      { id: 'B', text: "Verifica che il monitor del computer sia pulito" },
      { id: 'C', text: "Invia le buste paga ai dipendenti via posta raccomandata" },
      { id: 'D', text: "Crea una copia di backup delle password degli utenti" }
    ],
    correctAnswerId: 'A',
    explanation: "`kube-proxy` risiede su ciascun nodo ed è responsabile di mantenere le regole di routing (solitamente programmate in iptables o ipvs) che implementano il networking dei ClusterIP dei Service.",
    hint: "Gestore delle regole di rete (iptables/IPVS) sul nodo per l'instradamento dei Service.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_096',
    question: "Che cosa si intende per 'Sticky Session' (o Session Affinity) in un bilanciatore di carico?",
    options: [
      { id: 'A', text: "Una configurazione che indirizza tutte le richieste provenienti da un medesimo client/utente sempre allo stesso server backend per la durata dell'intera sessione (solitamente tramite cookie)" },
      { id: 'B', text: "Un connettore di rete magnetico che non si stacca se tirato" },
      { id: 'C', text: "L'obbligo di rimanere connessi per almeno 8 ore consecutive" },
      { id: 'D', text: "Una finestra pop-up che non può essere chiusa dall'utente" }
    ],
    correctAnswerId: 'A',
    explanation: "Le sticky session sono utili per applicazioni legacy che memorizzano lo stato di sessione nella RAM locale di un singolo server anziché su una cache condivisa (come Redis).",
    hint: "Inoltra sempre lo stesso client allo stesso server per mantenere la sessione locale.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_097',
    question: "Quale strumento open source per l'automazione del deployment e CI/CD è basato su pipeline dichiarative scritte in Jenkinsfile (Groovy)?",
    options: [
      { id: 'A', text: "Jenkins" },
      { id: 'B', text: "Apache Cassandra" },
      { id: 'C', text: "SQLite" },
      { id: 'D', text: "Notepad++" }
    ],
    correctAnswerId: 'A',
    explanation: "Jenkins è il server di automazione CI/CD open source più diffuso, in grado di orchestrare build, test unitari e deployment attraverso pipeline dichiarative definite nei Jenkinsfile.",
    hint: "Server di automazione CI/CD open source celebre per i file Jenkinsfile.",
    level: "base"
  },
  {
    id: 'Q_INF_MID_098',
    question: "Nel protocollo di messaggistica 'gRPC' sviluppato da Google, quale formato di serializzazione binario fortemente tipizzato viene utilizzato al posto del JSON?",
    options: [
      { id: 'A', text: "Protocol Buffers (Protobuf)" },
      { id: 'B', text: "XML Schema (XSD)" },
      { id: 'C', text: "CSV con separatore punto e virgola" },
      { id: 'D', text: "File di testo ASCII non formattato" }
    ],
    correctAnswerId: 'A',
    explanation: "gRPC utilizza Protocol Buffers (file `.proto`): i dati vengono serializzati in un formato binario estremamente compatto e veloce da decodificare, viaggiando su HTTP/2 bidirezionale.",
    hint: "gRPC usa Protocol Buffers (Protobuf) per la serializzazione binaria ultra-veloce.",
    level: "intermedio"
  },
  {
    id: 'Q_INF_MID_099',
    question: "In Kubernetes, cosa accade quando viene impostata una quota 'resource limits' sulla memoria di un container e questa viene superata?",
    options: [
      { id: 'A', text: "Il container viene terminato immediatamente dal sistema operativo per errore OOMKilled (Exit Code 137)" },
      { id: 'B', text: "Il processore rallenta la velocità del 50%" },
      { id: 'C', text: "Viene aggiunta automaticamente nuova memoria RAM fisica al server" },
      { id: 'D', text: "Il container continua a funzionare normalmente senza alcuna conseguenza" }
    ],
    correctAnswerId: 'A',
    explanation: "A differenza della CPU che può essere limitata (throttling), la memoria non può essere compressa: se un container supera il suo `limits.memory`, il kernel Linux lo termina per Out Of Memory (OOMKilled, codice 137).",
    hint: "Superare il limite di memoria comporta l'abbattimento immediato per OOMKilled.",
    level: "avanzato"
  },
  {
    id: 'Q_INF_MID_100',
    question: "Cosa si intende per 'Canary Deployment' nel rilascio di nuove versioni di servizi software?",
    options: [
      { id: 'A', text: "Una strategia di rilascio in cui la nuova versione del software viene distribuita inizialmente a una piccola frazione di utenti reali (es. 5%), monitorandone metriche ed errori prima di estenderla all'intera infrastruttura" },
      { id: 'B', text: "L'installazione del software esclusivamente nelle sedi ubicate nelle isole Canarie" },
      { id: 'C', text: "Un algoritmo per il riconoscimento del canto degli uccelli selvatici" },
      { id: 'D', text: "Il rilascio di un programma durante la notte del capodanno" }
    ],
    correctAnswerId: 'A',
    explanation: "Ispirato ai canarini usati nelle miniere di carbone, il Canary Deployment espone una percentuale ridotta di traffico alla nuova versione; se si rilevano anomalie si fa rollback immediato senza impatto sull'utenza generale.",
    hint: "Rilascio graduale a una piccola percentuale di utenti per testare sul campo la nuova versione.",
    level: "intermedio"
  }
];

// Append to middleware.json
const midPath = path.join(__dirname, '../public/db/master_bank/informatica/middleware.json');
const midData = JSON.parse(fs.readFileSync(midPath, 'utf8'));
midData.push(...midQuestions);

midData.forEach((q, idx) => {
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

fs.writeFileSync(midPath, JSON.stringify(midData, null, 2), 'utf8');
const midCounts = { A: 0, B: 0, C: 0, D: 0 };
midData.forEach(q => midCounts[q.correctAnswerId]++);
console.log('Middleware updated! Total:', midData.length, 'Counts:', midCounts);
