export type Difficulty = 'Beginner' | 'Intermediate' | 'Expert';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export const quizData: Record<Difficulty, Question[]> = {
  Beginner: [
    {
      id: 1,
      text: "What does 'phishing' refer to?",
      options: [
        "Fishing for data in a lake",
        "Fraudulent emails to steal information",
        "A type of firewall",
        "A secure password protocol"
      ],
      correctAnswer: "Fraudulent emails to steal information"
    },
    {
      id: 2,
      text: "Which of the following is a strong password?",
      options: [
        "password123",
        "admin",
        "MyDogFluffy",
        "P@$$w0rd!2024#XyZ"
      ],
      correctAnswer: "P@$$w0rd!2024#XyZ"
    },
    {
      id: 3,
      text: "What does VPN stand for?",
      options: [
        "Virtual Private Network",
        "Very Public Network",
        "Visual Processing Node",
        "Vulnerable Protocol Network"
      ],
      correctAnswer: "Virtual Private Network"
    },
    {
      id: 4,
      text: "What is malware?",
      options: [
        "Hardware components",
        "Malicious software designed to cause harm",
        "A type of antivirus",
        "A secure web browser"
      ],
      correctAnswer: "Malicious software designed to cause harm"
    },
    {
      id: 5,
      text: "Why should you update your software regularly?",
      options: [
        "To change the color scheme",
        "To patch security vulnerabilities",
        "To make the computer heavier",
        "To delete old files automatically"
      ],
      correctAnswer: "To patch security vulnerabilities"
    },
    {
      id: 6,
      text: "What is two-factor authentication (2FA)?",
      options: [
        "Logging in twice",
        "Using two different passwords",
        "Requiring two forms of identification to access an account",
        "Sharing your password with a friend"
      ],
      correctAnswer: "Requiring two forms of identification to access an account"
    },
    {
      id: 7,
      text: "What does the 'S' in HTTPS stand for?",
      options: [
        "System",
        "Secure",
        "Standard",
        "Software"
      ],
      correctAnswer: "Secure"
    },
    {
      id: 8,
      text: "What is a firewall?",
      options: [
        "A literal wall of fire",
        "A network security system that monitors and controls traffic",
        "A type of computer virus",
        "A fast internet connection"
      ],
      correctAnswer: "A network security system that monitors and controls traffic"
    },
    {
      id: 9,
      text: "What should you do if you find a random USB drive?",
      options: [
        "Plug it into your computer to see what's on it",
        "Give it to a friend",
        "Hand it to IT or security personnel without plugging it in",
        "Format it and use it for yourself"
      ],
      correctAnswer: "Hand it to IT or security personnel without plugging it in"
    },
    {
      id: 10,
      text: "What is social engineering?",
      options: [
        "Building social networks",
        "Manipulating people into giving up confidential information",
        "A type of coding language",
        "Designing user interfaces"
      ],
      correctAnswer: "Manipulating people into giving up confidential information"
    }
  ],
  Intermediate: [
    {
      id: 11,
      text: "What is a DDoS attack?",
      options: [
        "Direct Data Overload System",
        "Distributed Denial of Service",
        "Digital Download Operating System",
        "Data Destruction on Server"
      ],
      correctAnswer: "Distributed Denial of Service"
    },
    {
      id: 12,
      text: "What is the main purpose of encryption?",
      options: [
        "To make files smaller",
        "To convert data into a secure format unreadable without a key",
        "To speed up internet connection",
        "To organize files alphabetically"
      ],
      correctAnswer: "To convert data into a secure format unreadable without a key"
    },
    {
      id: 13,
      text: "What is ransomware?",
      options: [
        "Software that demands payment to restore access to data",
        "A program that generates random passwords",
        "A tool for recovering deleted files",
        "A type of secure email service"
      ],
      correctAnswer: "Software that demands payment to restore access to data"
    },
    {
      id: 14,
      text: "What is a zero-day vulnerability?",
      options: [
        "A bug that takes zero days to fix",
        "A flaw unknown to the vendor, meaning they have zero days to prepare a patch",
        "A virus that deletes all data at midnight",
        "A secure system with zero flaws"
      ],
      correctAnswer: "A flaw unknown to the vendor, meaning they have zero days to prepare a patch"
    },
    {
      id: 15,
      text: "What is the principle of least privilege?",
      options: [
        "Giving users the maximum access possible",
        "Giving users only the access necessary to perform their job",
        "Revoking all access from everyone",
        "Allowing anyone to access the admin panel"
      ],
      correctAnswer: "Giving users only the access necessary to perform their job"
    },
    {
      id: 16,
      text: "What does SQL injection target?",
      options: [
        "Web browsers",
        "Databases",
        "Operating systems",
        "Hardware components"
      ],
      correctAnswer: "Databases"
    },
    {
      id: 17,
      text: "What is a man-in-the-middle (MitM) attack?",
      options: [
        "An attacker secretly intercepts and alters communications between two parties",
        "A physical attack on a server room",
        "A type of phishing email",
        "A virus that hides in the middle of a file"
      ],
      correctAnswer: "An attacker secretly intercepts and alters communications between two parties"
    },
    {
      id: 18,
      text: "What is the difference between HTTP and HTTPS?",
      options: [
        "HTTPS is faster",
        "HTTPS encrypts the data transferred, HTTP does not",
        "HTTP is for mobile, HTTPS is for desktop",
        "There is no difference"
      ],
      correctAnswer: "HTTPS encrypts the data transferred, HTTP does not"
    },
    {
      id: 19,
      text: "What is a botnet?",
      options: [
        "A network of infected devices controlled by an attacker",
        "A friendly robot assistant",
        "A secure internal network",
        "A type of antivirus software"
      ],
      correctAnswer: "A network of infected devices controlled by an attacker"
    },
    {
      id: 20,
      text: "What is penetration testing?",
      options: [
        "Testing how hard a physical server is",
        "Authorized simulated cyberattacks to evaluate system security",
        "Testing internet speed",
        "A method of writing secure code"
      ],
      correctAnswer: "Authorized simulated cyberattacks to evaluate system security"
    }
  ],
  Expert: [
    {
      id: 21,
      text: "What is Cross-Site Scripting (XSS)?",
      options: [
        "Injecting malicious scripts into trusted websites",
        "Crossing out bad code",
        "A secure way to link websites",
        "A database management tool"
      ],
      correctAnswer: "Injecting malicious scripts into trusted websites"
    },
    {
      id: 22,
      text: "What is the purpose of a salt in password hashing?",
      options: [
        "To make the password taste better",
        "To add random data to the password before hashing to defend against dictionary attacks",
        "To encrypt the password twice",
        "To compress the password"
      ],
      correctAnswer: "To add random data to the password before hashing to defend against dictionary attacks"
    },
    {
      id: 23,
      text: "What is a buffer overflow?",
      options: [
        "When a program writes more data to a block of memory than it can hold",
        "When a hard drive is full",
        "When an internet connection is too slow",
        "When a firewall blocks too much traffic"
      ],
      correctAnswer: "When a program writes more data to a block of memory than it can hold"
    },
    {
      id: 24,
      text: "Which encryption algorithm is considered asymmetric?",
      options: [
        "AES",
        "DES",
        "RSA",
        "Blowfish"
      ],
      correctAnswer: "RSA"
    },
    {
      id: 25,
      text: "What is the OSI model layer where IP routing occurs?",
      options: [
        "Layer 2 (Data Link)",
        "Layer 3 (Network)",
        "Layer 4 (Transport)",
        "Layer 7 (Application)"
      ],
      correctAnswer: "Layer 3 (Network)"
    },
    {
      id: 26,
      text: "What is a honeypot in cybersecurity?",
      options: [
        "A trap set to detect, deflect, or study attempts at unauthorized use of information systems",
        "A secure vault for storing passwords",
        "A type of malware",
        "A tool for encrypting emails"
      ],
      correctAnswer: "A trap set to detect, deflect, or study attempts at unauthorized use of information systems"
    },
    {
      id: 27,
      text: "What does CSRF stand for?",
      options: [
        "Cross-Site Request Forgery",
        "Cyber Security Response Force",
        "Central System Routing Function",
        "Code Syntax Review Format"
      ],
      correctAnswer: "Cross-Site Request Forgery"
    },
    {
      id: 28,
      text: "What is the primary difference between symmetric and asymmetric encryption?",
      options: [
        "Symmetric uses one key for both encryption and decryption; asymmetric uses a public/private key pair",
        "Symmetric is slower than asymmetric",
        "Asymmetric is only used for local files",
        "There is no difference"
      ],
      correctAnswer: "Symmetric uses one key for both encryption and decryption; asymmetric uses a public/private key pair"
    },
    {
      id: 29,
      text: "What is steganography?",
      options: [
        "The practice of concealing a file, message, image, or video within another file",
        "A type of dinosaur",
        "A method of cracking passwords",
        "A secure network protocol"
      ],
      correctAnswer: "The practice of concealing a file, message, image, or video within another file"
    },
    {
      id: 30,
      text: "What is an Advanced Persistent Threat (APT)?",
      options: [
        "A quick, automated attack",
        "A prolonged and targeted cyberattack in which an intruder gains access to a network and remains undetected",
        "A type of antivirus software",
        "A secure firewall configuration"
      ],
      correctAnswer: "A prolonged and targeted cyberattack in which an intruder gains access to a network and remains undetected"
    }
  ]
};
