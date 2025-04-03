// Define types for our quiz data
export interface Option {
  label: string
  text: string
}

export interface Question {
  number: number
  question: string
  options: Option[]
  correctAnswer: string
  reason: string
}

export interface QuizData {
  questions: Question[]
}

// Sample quiz data based on the provided JSON format
export const quizData: QuizData = {
  questions: [
   
    {
      number: 34,
      question: "What are the characteristics of Host based IDS?",
      options: [
        { label: "I", text: "Logs are analysed to detect trails of intrusion" },
        { label: "II", text: "The host operating system logs in the audit information" },
        { label: "III", text: "Logs include logins, file opens, and program executions" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "IV",
      reason: "Host-based IDS analyze various logs (intrusion trails, audit logs, file accesses) to detect intrusions.",
    },
    {
      number: 35,
      question: "What are the characteristics of stack based IDS?",
      options: [
        { label: "I", text: "It is programmed to interpret a certain series of packets" },
        { label: "II", text: "It models the normal usage of the network as a noise characterization" },
        { label: "III", text: "It is integrated closely with the TCP/IP stack and watches packets" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "III",
      reason: "Stack-based IDS are integrated into the protocol stack to monitor and analyze network packets directly.",
    },
    {
      number: 36,
      question:
        "If the sum of the working set sizes increases, exceeding the total number of available frames, the operating system _____",
      options: [
        { label: "I", text: "Selects a process to suspend" },
        { label: "II", text: "The system crashes" },
        { label: "III", text: "Then the process crashes" },
        { label: "IV", text: "The memory overflows" },
      ],
      correctAnswer: "I",
      reason:
        "When available memory is exceeded, the OS may suspend a process to free up frames and avoid system instability.",
    },
    {
      number: 37,
      question: "The information about all files is kept in the _____",
      options: [
        { label: "I", text: "Operating system" },
        { label: "II", text: "Separate directory structure" },
        { label: "III", text: "Swap space" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "II",
      reason: "File systems maintain a separate directory structure to store metadata and organize file information.",
    },
    {
      number: 38,
      question:
        "The operating system keeps a small table called the _____ containing information about all open files.",
      options: [
        { label: "I", text: "File table" },
        { label: "II", text: "Directory table" },
        { label: "III", text: "Open-file table" },
        { label: "IV", text: "System table" },
      ],
      correctAnswer: "III",
      reason: "The open-file table is used by the OS to track all files that are currently opened by processes.",
    },
    {
      number: 39,
      question: "What will happen in a single level directory?",
      options: [
        { label: "I", text: "All files are contained in the same directory" },
        { label: "II", text: "All files are contained in different directories all at the same level" },
        { label: "III", text: "Depends on the operating system" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "I",
      reason: "In a single-level directory system, every file is stored in one common directory.",
    },
    {
      number: 40,
      question: "When traversing directory trees, the operating system _____ the acyclic structure to preserve it.",
      options: [
        { label: "I", text: "Deletes links" },
        { label: "II", text: "Ignores links" },
        { label: "III", text: "Considers links" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "II",
      reason:
        "To avoid creating cycles in the directory tree, the OS typically ignores symbolic links when preserving the acyclic structure.",
    },
    {
      number: 41,
      question: "To recover from failures in the network, ______ must be maintained.",
      options: [
        { label: "I", text: "Operating system state" },
        { label: "II", text: "IP address information" },
        { label: "III", text: "Stateless operation" },
        { label: "IV", text: "Stateful information" },
      ],
      correctAnswer: "IV",
      reason: "Maintaining stateful information is essential for recovery procedures and ensuring network resilience.",
    },
    {
      number: 42,
      question:
        "On systems where there are multiple operating systems, the decision to load a particular one is made by the _____",
      options: [
        { label: "I", text: "Process control block" },
        { label: "II", text: "File control block" },
        { label: "III", text: "Boot loader" },
        { label: "IV", text: "Bootstrap" },
      ],
      correctAnswer: "III",
      reason:
        "The boot loader is responsible for selecting and loading the appropriate operating system during startup.",
    },
    {
      number: 43,
      question: "Whenever a process needs I/O to or from a disk, it issues a _____",
      options: [
        { label: "I", text: "System call to the operating system" },
        { label: "II", text: "System call to the CPU" },
        { label: "III", text: "A special procedure" },
        { label: "IV", text: "Bootstrap" },
      ],
      correctAnswer: "I",
      reason:
        "Disk I/O operations are managed by the OS, and processes must invoke system calls to request these services.",
    },
    {
      number: 44,
      question: "The two steps the operating system takes to use a disk to hold its files are _____ and _____",
      options: [
        { label: "I", text: "Caching & logical formatting" },
        { label: "II", text: "Logical formatting & swap space creation" },
        { label: "III", text: "Swap space creation & caching" },
        { label: "IV", text: "Partitioning & logical formatting" },
      ],
      correctAnswer: "IV",
      reason: "Disks are prepared by first partitioning and then applying a logical format to set up the file system.",
    },
    {
      number: 45,
      question:
        "The program that initializes all aspects of the system, from CPU registers to device controllers and main memory, and then starts the operating system is called the _____",
      options: [
        { label: "I", text: "Bootstrap" },
        { label: "II", text: "Main" },
        { label: "III", text: "Bootloader" },
        { label: "IV", text: "ROM" },
      ],
      correctAnswer: "I",
      reason:
        "The bootstrap program is responsible for initializing the system hardware and loading the operating system into memory.",
    },
    {
      number: 46,
      question:
        "In SCSI disks used in high-end PCs, the disk is initialized during _____ formatting, and the controller maintains a list of _____",
      options: [
        { label: "I", text: "Destroyed blocks, partitioning" },
        { label: "II", text: "Destroyed blocks, high level formatting" },
        { label: "III", text: "Bad blocks, low level formatting" },
        { label: "IV", text: "Bad blocks, partitioning" },
      ],
      correctAnswer: "III",
      reason:
        "During low level formatting, the disk is checked for bad blocks which the controller then marks and avoids using.",
    },
    {
      number: 47,
      question:
        "Which principle states that programs, users, and systems should be given just enough privileges to perform their tasks?",
      options: [
        { label: "I", text: "Principle of least privilege" },
        { label: "II", text: "Principle of maximum access" },
        { label: "III", text: "Principle of minimum rights" },
        { label: "IV", text: "Principle of operating system" },
      ],
      correctAnswer: "I",
      reason:
        "The principle of least privilege minimizes security risks by ensuring that no more privileges than necessary are granted.",
    },
    {
      number: 48,
      question: "Network operating system runs on _____",
      options: [
        { label: "I", text: "Every system in the network" },
        { label: "II", text: "Both the server and every system in the network" },
        { label: "III", text: "Only on servers" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "II",
      reason:
        "A network operating system is designed to run on both servers and client systems, managing network resources collectively.",
    },
    {
      number: 49,
      question: "What are the types of distributed operating systems?",
      options: [
        { label: "I", text: "Zone based Operating system" },
        { label: "II", text: "Network Operating system" },
        { label: "III", text: "Level based Operating system" },
        { label: "IV", text: "All of the mentioned" },
      ],
      correctAnswer: "IV",
      reason:
        "Distributed operating systems can be classified in various ways, including zone-based, network-based, and level-based approaches.",
    },
    {
      number: 50,
      question: "In Unix, which system call creates a new process?",
      options: [
        { label: "I", text: "Create" },
        { label: "II", text: "New" },
        { label: "III", text: "Fork" },
        { label: "IV", text: "None of the mentioned" },
      ],
      correctAnswer: "III",
      reason:
        "The fork() system call is the standard method in Unix to create a new process by duplicating the calling process.",
    },
  ],
}

