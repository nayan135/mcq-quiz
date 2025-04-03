{
    number: 1,
    question: "What is an operating system?",
    options: [
      { label: "i", text: "Interface between the hardware and application programs" },
      { label: "ii", text: "Collection of programs that manages hardware resources" },
      { label: "iii", text: "System service provider to the application programs" },
      { label: "iv", text: "All of the mentioned" },
    ],
    correctAnswer: "iv",
    reason:
      "An operating system provides an interface between hardware and applications, manages hardware resources, and offers system services – hence all the mentioned options are correct.",
  },
  {
    number: 2,
    question: "What is the main function of the command interpreter?",
    options: [
      { label: "i", text: "To provide the interface between the API and application program" },
      { label: "ii", text: "To handle the files in the operating system" },
      { label: "iii", text: "To get and execute the next user-specified command" },
      { label: "iv", text: "None of the mentioned" },
    ],
    correctAnswer: "iii",
    reason:
      "The command interpreter (shell) reads user commands and executes them, making option iii the correct answer.",
  },
  {
    number: 3,
    question: "In operating systems, which of the following is/are CPU scheduling algorithms?",
    options: [
      { label: "I", text: "Priority" },
      { label: "II", text: "Round Robin" },
      { label: "III", text: "Shortest Job First" },
      { label: "IV", text: "All of the mentioned" },
    ],
    correctAnswer: "IV",
    reason:
      "All the listed algorithms – Priority, Round Robin, and Shortest Job First – are used for CPU scheduling.",
  },
  {
    number: 4,
    question: "To access the services of the operating system, the interface is provided by the _____",
    options: [
      { label: "I", text: "Library" },
      { label: "II", text: "System Calls" },
      { label: "III", text: "Assembly instructions" },
      { label: "IV", text: "API" },
    ],
    correctAnswer: "II",
    reason:
      "User-level programs generally access OS services via library routines that wrap system calls, making the library the interface.",
  },
  {
    number: 5,
    question: "CPU scheduling is the basis of _____",
    options: [
      { label: "I", text: "Multiprogramming operating systems" },
      { label: "II", text: "Time-sharing operating systems" },
      { label: "III", text: "Multiprocessor systems" },
      { label: "IV", text: "None of the mentioned" },
    ],
    correctAnswer: "I",
    reason: "Multiprogramming systems depend on CPU scheduling to manage multiple processes in memory effectively.",
  },
  {
    number: 6,
    question: "Which one of the following is not true?",
    options: [
      { label: "I", text: "Kernel remains in the memory during the entire computer session" },
      { label: "II", text: "Kernel is made of various modules which cannot be loaded in a running operating system" },
      { label: "III", text: "Kernel is the first part of the operating system to load into memory during booting" },
      { label: "IV", text: "Kernel is the program that constitutes the central core of the operating system" },
    ],
    correctAnswer: "II",
    reason:
      "Modern OS kernels are often modular and support dynamic loading/unloading of modules; statement II is incorrect.",
  },
  {
    number: 7,
    question: "Which one of the following errors will be handled by the operating system?",
    options: [
      { label: "I", text: "Lack of paper in printer" },
      { label: "II", text: "Connection failure in the network" },
      { label: "III", text: "Power failure" },
      { label: "IV", text: "All of the mentioned" },
    ],
    correctAnswer: "IV",
    reason:
      "Operating systems include mechanisms to handle hardware-related errors, which can include all the listed error types.",
  },
  {
    number: 8,
    question: "Where is the operating system placed in the memory?",
    options: [
      { label: "I", text: "Either low or high memory (depending on the location of the interrupt vector)" },
      { label: "II", text: "In the low memory" },
      { label: "III", text: "In the high memory" },
      { label: "IV", text: "None of the mentioned" },
    ],
    correctAnswer: "I",
    reason:
      "OS placement depends on system architecture; it can reside in low or high memory based on the location of interrupt vectors.",
  },
  {
    number: 9,
    question: "If a process fails, most operating systems write the error information to a _____",
    options: [
      { label: "I", text: "New file" },
      { label: "II", text: "Another running process" },
      { label: "III", text: "Log file" },
      { label: "IV", text: "None of the mentioned" },
    ],
    correctAnswer: "III",
    reason: "Error logs are maintained by the OS to record error information for debugging and auditing purposes.",
  },
  {
    number: 10,
    question: "Which one of the following is not a real time operating system?",
    options: [
      { label: "I", text: "RTLinux" },
      { label: "II", text: "PalmOS" },
      { label: "III", text: "QNX" },
      { label: "IV", text: "Vx Works" },
    ],
    correctAnswer: "II",
    reason:
      "PalmOS is designed for consumer handheld devices and is not tailored for real-time applications, unlike RTLinux, QNX, and Vx Works which are real-time operating systems.",
  },
  {
    number: 11,
    question: "What does OS X have?",
    options: [
      { label: "I", text: "Monolithic kernel with modules" },
      { label: "II", text: "Palm OS" },
      { label: "III", text: "Monolithic kernel" },
    ],
    correctAnswer: "I",
    reason:
      "OS X employs a hybrid kernel design that incorporates characteristics of a monolithic kernel along with modular components.",
  },
  {
    number: 12,
    question: "In an operating system, each process has its own _____",
    options: [
      { label: "I", text: "Open files" },
      { label: "II", text: "Pending alarms, signals, and signal handlers" },
      { label: "III", text: "Address space and global variables" },
      { label: "IV", text: "All of the mentioned" },
    ],
    correctAnswer: "IV",
    reason:
      "A process maintains its own set of open files, signal handlers, and address space; thus, all the mentioned elements are specific to a process.",
  },
  {
    number: 13,
    question:
      "In a timeshare operating system, when the time slot assigned to a process is completed, the process switches from the current state to which state?",
    options: [
      { label: "I", text: "Suspended state" },
      { label: "II", text: "Terminated state" },
      { label: "III", text: "Running state" },
      { label: "IV", text: "Ready state" },
    ],
    correctAnswer: "IV",
    reason: "After its time slice expires, the process returns to the ready state, waiting to be scheduled again.",
  },
  {
    number: 14,
    question:
      "Cascading termination refers to the termination of all child processes if the parent process terminates _____",
    options: [
      { label: "i", text: "Normally or abnormally" },
      { label: "ii", text: "Normally" },
      { label: "iii", text: "Abnormally" },
      { label: "iv", text: "None of the mentioned" },
    ],
    correctAnswer: "i",
    reason:
      "Cascading termination implies that regardless of whether the parent terminates normally or abnormally, its child processes are also terminated.",
  },
  {
    number: 15,
    question:
      "When a process is in a 'Blocked' state waiting for some I/O service, when the service is completed, it goes to the _____ state.",
    options: [
      { label: "I", text: "Terminated state" },
      { label: "II", text: "Suspended state" },
      { label: "III", text: "Running state" },
      { label: "IV", text: "Ready state" },
    ],
    correctAnswer: "IV",
    reason: "Once I/O is complete, the process becomes ready for CPU allocation, hence it enters the ready state.",
  },
  {
    number: 16,
    question: "Transient operating system code is a code that _____",
    options: [
      { label: "I", text: "Stays in the memory always" },
      { label: "II", text: "Never enters the memory space" },
      { label: "III", text: "Comes and goes as needed" },
      { label: "IV", text: "Is not easily accessible" },
    ],
    correctAnswer: "III",
    reason:
      "Transient code is loaded only when needed and removed afterward, so its presence in memory is temporary.",
  },
  {
    number: 17,
    question:
      "The portion of the process scheduler in an operating system that dispatches processes is concerned with _____",
    options: [
      { label: "I", text: "Assigning ready processes to waiting queue" },
      { label: "II", text: "Assigning running processes to blocked queue" },
      { label: "III", text: "Assigning ready processes to CPU" },
      { label: "IV", text: "All of the mentioned" },
    ],
    correctAnswer: "III",
    reason: "Dispatching is the act of selecting a process from the ready queue and assigning the CPU to it.",
  },
  {
    number: 18,
    question: "The FCFS algorithm is particularly troublesome for _____",
    options: [
      { label: "I", text: "Operating systems" },
      { label: "II", text: "Time sharing systems" },
      { label: "III", text: "Multiprocessor systems" },
      { label: "IV", text: "Multiprogramming systems" },
    ],
    correctAnswer: "II",
    reason:
      "FCFS scheduling can lead to long wait times and poor response, which is especially problematic in time-sharing environments.",
  },
  {
    number: 19,
    question: "For an effective operating system, when should deadlock be checked?",
    options: [
      { label: "I", text: "Every time a resource request is made at fixed time intervals" },
      { label: "II", text: "At fixed time intervals" },
      { label: "III", text: "Every time a resource request is made" },
      { label: "IV", text: "None of the mentioned" },
    ],
    correctAnswer: "II",
    reason:
      "Periodic checks (at fixed intervals) allow the OS to manage resources without incurring the overhead of checking with every request.",
  },
  {
    number: 20,
    question:
      "A deadlock avoidance algorithm dynamically examines the ______ to ensure that a circular wait condition can never exist.",
    options: [
      { label: "I", text: "Operating system" },
      { label: "II", text: "Resources" },
      { label: "III", text: "System storage state" },
      { label: "IV", text: "Resource allocation state" },
    ],
    correctAnswer: "IV",
    reason:
      "Deadlock avoidance algorithms analyze the current resource allocation state to determine if granting a request leads to an unsafe condition.",
  },
  {
    number: 21,
    question: "Swapping operations only ______ into operating system buffers.",
    options: [
      { label: "I", text: "Must never" },
      { label: "II", text: "Maybe" },
      { label: "III", text: "Can" },
      { label: "IV", text: "Must" },
    ],
    correctAnswer: "I",
    reason:
      "Swapping should not involve operating system buffers directly as it deals with memory management at a system level.",
  },
  {
    number: 22,
    question: "The main memory accommodates _____",
    options: [
      { label: "I", text: "CPU" },
      { label: "II", text: "User processes" },
      { label: "III", text: "Operating system" },
      { label: "IV", text: "All of the mentioned" },
    ],
    correctAnswer: "IV",
    reason:
      "Main memory holds the operating system, user processes, and other essential data required for execution.",
  },
  {
    number: 23,
    question: "The operating system is responsible for _____",
    options: [
      { label: "I", text: "Bad-block recovery" },
      { label: "II", text: "Disk initialization" },
      { label: "III", text: "User processes" },
      { label: "IV", text: "Booting from disk" },
      { label: "V", text: "All of the mentioned" },
    ],
    correctAnswer: "V",
    reason:
      "The operating system is involved in all these tasks—from managing disk errors to initiating boot procedures and handling user processes.",
  },
  {
    number: 24,
    question:
      "The operating system and other processes are protected from being modified by an already running process because _____",
    options: [
      {
        label: "I",
        text: "Every address generated by the CPU is checked against the relocation and limit registers",
      },
      { label: "II", text: "They have a protection algorithm" },
      { label: "III", text: "They are in different memory spaces" },
      { label: "IV", text: "They are in different logical addresses" },
    ],
    correctAnswer: "I",
    reason:
      "Hardware-level protection mechanisms (using relocation and limit registers) ensure that processes cannot modify memory outside their allocated space.",
  },
  {
    number: 25,
    question: "Using transient code execution, the size of the operating system during program execution _____",
    options: [
      { label: "I", text: "Maintains" },
      { label: "II", text: "Changes" },
      { label: "III", text: "Increases" },
      { label: "IV", text: "Decreases" },
    ],
    correctAnswer: "II",
    reason:
      "Since transient code is loaded only when needed, the memory footprint of the OS changes dynamically during execution.",
  },
  {
    number: 26,
    question:
      "The operating system maintains a table that keeps track of how many frames have been allocated, exist, and how many are available. This is called the _____ table.",
    options: [
      { label: "I", text: "Memory table" },
      { label: "II", text: "Mapping table" },
      { label: "III", text: "Page table" },
      { label: "IV", text: "Frame table" },
    ],
    correctAnswer: "IV",
    reason: "The frame table tracks the allocation of physical memory frames.",
  },
  {
    number: 27,
    question:
      "To obtain better memory utilization, dynamic loading is used. With dynamic loading, a routine is not loaded until it is called. For implementing dynamic loading, _____ is essential.",
    options: [
      { label: "I", text: "Special support from the operating system" },
      { label: "II", text: "Special support from hardware is required" },
      { label: "III", text: "User programs can implement dynamic loading without any special support" },
      { label: "IV", text: "Special support from both hardware and operating system is essential" },
    ],
    correctAnswer: "I",
    reason: "The OS must provide mechanisms to load routines on demand to support dynamic loading.",
  },
  {
    number: 28,
    question:
      "The ______ presents a uniform device-access interface to the I/O subsystem, much as system calls provide a standard interface between the application and the operating system.",
    options: [
      { label: "I", text: "Device drivers" },
      { label: "II", text: "I/O systems" },
      { label: "III", text: "Devices" },
      { label: "IV", text: "Buses" },
    ],
    correctAnswer: "I",
    reason: "Device drivers abstract the hardware details and provide a consistent interface for I/O operations.",
  },
  {
    number: 29,
    question: "In a real time operating system, a task must be serviced by its deadline period.",
    options: [
      { label: "I", text: "Process scheduling can be done only once" },
      { label: "II", text: "All processes have the same priority" },
      { label: "III", text: "Kernel is not required" },
      { label: "IV", text: "A task must be serviced by its deadline period" },
    ],
    correctAnswer: "IV",
    reason: "A hallmark of real-time systems is the guarantee that tasks meet their deadline periods.",
  },
  {
    number: 30,
    question: "A hard real time operating system has _____ jitter than a soft real time operating system.",
    options: [
      { label: "I", text: "Equal" },
      { label: "II", text: "More" },
      { label: "III", text: "Less" },
      { label: "IV", text: "None of the mentioned" },
    ],
    correctAnswer: "III",
    reason: "Hard real-time systems must minimize jitter to guarantee that deadlines are met consistently.",
  },
  {
    number: 31,
    question: "For real time operating systems, interrupt latency should be _____",
    options: [
      { label: "I", text: "Zero" },
      { label: "II", text: "Minimal" },
      { label: "III", text: "Maximum" },
      { label: "IV", text: "Dependent on the scheduling" },
    ],
    correctAnswer: "II",
    reason: "Minimal interrupt latency is crucial in real-time systems to ensure prompt processing of interrupts.",
  },
  {
    number: 32,
    question: "Which one of the following is a real time operating system?",
    options: [
      { label: "I", text: "Windows CE" },
      { label: "II", text: "RTLinux" },
      { label: "III", text: "VxWorks" },
      { label: "IV", text: "All of the mentioned" },
    ],
    correctAnswer: "IV",
    reason: "All listed options are known to be used in real-time applications.",
  },
  {
    number: 33,
    question: "The priority of a process will _____ if the scheduler assigns it a static priority.",
    options: [
      { label: "I", text: "Depends on the operating system" },
      { label: "II", text: "Change" },
      { label: "III", text: "Remain unchanged" },
      { label: "IV", text: "None of the mentioned" },
    ],
    correctAnswer: "III",
    reason: "A static priority is fixed by definition and does not change during process execution.",
  },