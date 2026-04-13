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
      text: "Quel est l’acronyme du terme HTTP ?",
      options: [
        "Hypertext Transfer Program",
        " Hyperlink Transmission Text Protocol",
        "Hypertext Transfer Protocol",
        "High-speed Text Transfer Protocol"
      ],
      correctAnswer: "Hypertext Transfer Protocol"
    },
    {
      id: 2,
      text: "Que signifie IP ?",
      options: [
        "Internet Program",
        "Internal Protocol",
        "Interface Program",
        "Internet Protocol"
      ],
      correctAnswer: "Internet Protocol"
    },
    {
      id: 3,
      text: "Quel est le rôle d’un DNS?",
      options: [
        "Crypter les données",
        "Scanner les ports",
        "Bloquer les virus",
        "Traduire un nom de domaine en adresse IP"
      ],
      correctAnswer: "Traduire un nom de domaine en adresse IP"
    },
    {
      id: 4,
      text: "Que signifie 'VPN'?",
      options: [
        "Verified Private Node",
        "Virtual Protocol Network",
        "Virtual Private Network",
        "Very Protected Node"
      ],
      correctAnswer: "Virtual Private Network"
    },
    {
      id: 5,
      text: "Quel est le rôle principal d'un pare-feu (firewall)?",
      options: [
        "Accélérer la connexion internet",
        "Sauvegarder les fichiers automatiquement",
        "Filtrer le trafic réseau entrant et sortant",
        "Filtrer les spams dans les emails"
      ],
      correctAnswer: "Filtrer le trafic réseau entrant et sortant"
    },
    {
      id: 6,
      text: "Une attaque basée sur l'hôte cible?",
      options: [
        "Les routeurs",
        "Les ordinateurs",
        "Les câbles du réseau",
        "Les commutateurs"
      ],
      correctAnswer: "Les ordinateurs"
    },
    {
      id: 7,
      text: "Lequel de ces dispositifs logiciels n’est pas considéré comme un malware ?",
      options: [
        "Pare-feu",
        "Les virus",
        "Ransomware",
        "Hameçonnage"
      ],
      correctAnswer: "Pare-feu"
    },
    {
      id: 8,
      text: "Qu’est-ce qu’un phishing?",
      options: [
        "Un virus caché",
        "Un site securisé",
        "Une technique pour accéder aux informations sensibles ",
        "Un logiciel de sécurité"
      ],
      correctAnswer: "Une technique pour accéder aux informations sensibles "
    },
    {
      id: 9,
      text: "À quoi sert HTTPS sur un site web ?",
      options: [
        "À accélérer le site",
        "À protéger ton ordinateur contre tous les virus",
        "À vérifier automatiquement ton mot de passe",
        "À sécuriser les données échangées"
      ],
      correctAnswer: "À sécuriser les données échangées"
    },
    {
      id: 10,
      text: "Qu'est-ce que l'ingénierie sociale ?",
      options: [
        "Création de réseaux sociaux",
        "Manipuler des personnes pour obtenir des informations confidentielles",
        "Un type de langage de programmation ",
        "Conception d’interfaces utilisateur"
      ],
      correctAnswer: "Manipuler des personnes pour obtenir des informations confidentielles"
    }
  ],
  Intermediate: [
    {
      id: 11,
      text: "Quel port par défaut est utilisé pour SSH?",
      options: [
        "21",
        "22",
        "80",
        "443"
      ],
      correctAnswer: "22"
    },
    {
      id: 12,
      text: "Quel outil est utilisé pour analyser les paquets du réseau?",
      options: [
        "Nmap",
        "Wireshark",
        "Brup Suite",
        "Metasploit"
      ],
      correctAnswer: "Wireshark"
    },
    {
      id: 13,
      text: "Que fait une injection SQL?",
      options: [
        "Inonde le serveur de requêtes",
        "Exécute du JavaScript malveillant côté client",
        "Manipule une base de données via des entrées malveillantes",
        "Contourner l'authentification via des requêtes SQL dans les en-têtes HTTP"
      ],
      correctAnswer: "Manipule une base de données via des entrées malveillantes"
    },
    {
      id: 14,
      text: "Que signifie 'Zero-Day' ?",
      options: [
        "Une faille corrigée en moins de 24h",
        "Une vulnérabilité inconnue du fournisseur sans patch disponible",
        "Un malware qui se déclenche à une date précise",
        "Une attaque lancée à minuit pour éviter la détection"
      ],
      correctAnswer: "Une vulnérabilité inconnue du fournisseur sans patch disponible"
    },
    {
      id: 15,
      text: "L'attaque SMURF",
      options: [
        "Exploite le fonctionnement du protocole ARP",
        "Est une attaque par déni de service",
        "Exploite le fonctionnement du protocole UDP",
        "Exploite le fonctionnement du protocole UDP"
      ],
      correctAnswer: "Est une attaque par déni de service"
    },
    {
      id: 16,
      text: "Dans le protocole SSL, la protection des données est assurée par?",
      options: [
        "La couche Handshake Protocol",
        "La couche ChangeCipherSpec Protocol",
        "La couche Record Protocol",
        " La couche Alert Protocol"
      ],
      correctAnswer: "La couche Record Protocol"
    },
    {
      id: 17,
      text: "Quel protocole est utilisé pour sécuriser les connexions SSH?",
      options: [
        "RSA et AES",
        "MD5",
        "FTP",
        "SMTP"
      ],
      correctAnswer: "RSA et AES"
    },
    {
      id: 18,
      text: "Qu'est-ce qu'une attaque XSS (Cross-Site Scripting)?",
      options: [
        "Injection de scripts malveillants dans une page web",
        "Attaque sur le DNS",
        "Interception du trafic HTTPS",
        "Exploitation d'une faille SSH"
      ],
      correctAnswer: "Injection de scripts malveillants dans une page web"
    },
    {
      id: 19,
      text: "Dans le cadre d'un test d'intrusion, que signifie une approche en 'Boîte Grise' (Grey Box) ?",
      options: [
        "Le test consiste uniquement à vérifier l'intégité physique des serveurs dans le centre de données",
        "Le testeur dispose de certaines informations sur le système cible, mais pas d'un accès complet",
        "Le testeur n'a aucune information préalable et doit découvrir les vulnérabilités de l'extérieur",
        "Le testeur possède une connaissance complète du système cible, y compris les codes sources et les configurations"
      ],
      correctAnswer: "Le testeur dispose de certaines informations sur le système cible, mais pas d'un accès complet"
    },
    {
      id: 20,
      text: "Quelle est la principale différence entre le chiffrement symétrique et le chiffrement asymétrique?",
      options: [
        "Le chiffrement asymétrique ne peut être utilisé que pour les communications par courrier électronique",
        "le chiffrement symétrique est plus lent car il nécessite une puissance de calcul supérieure pour le déchiffrement",
        "",
        "Le chiffrement symétrique utilise une seule clé pour le chiffrement et le déchiffrement, tandis que le chiffrement asymétrique utilise une paire de clés"
      ],
      correctAnswer: "Le chiffrement symétrique utilise une seule clé pour le chiffrement et le déchiffrement, tandis que le chiffrement asymétrique utilise une paire de clés"
    }
  ],
  Expert: [
    {
      id: 21,
      text: "Que fait la commande suivante nc -lvnp 4444?",
      options: [
        "Scanne les ports de 0 a 4444",
        "Lance un serveur web sur le port 4444",
        "Ouvre un listener Netcat sur le port 4444",
        "Crypte les données"
      ],
      correctAnswer: "Ouvre un listener Netcat sur le port 4444"
    },
    {
      id: 22,
      text: "Que fait la commande suivante chmod 4755 fichier?",
      options: [
        "Supprime le fichier",
        "Cache le fichier",
        "Donne les droits root via SUID",
        "Crypte le fichier"
      ],
      correctAnswer: "Donne les droits root via SUID"
    },
    {
      id: 23,
      text: "Qu'est-ce que le CVSS et à quoi sert son score ?",
      options: [
        "Un score numérique de 0 à 10 évaluant la sévérité d'une vulnérabilité",
        "Un standard de chiffrement pour les communications entre SOC et CERT",
        "Un système de classification des malwares par famille et comportement",
        "Un score mesurant le temps moyen de détection d'une intrusion"
      ],
      correctAnswer: "Un score numérique de 0 à 10 évaluant la sévérité d'une vulnérabilité"
    },
    {
      id: 24,
      text: "Qu'est-ce que le 'Living off the Land' (LotL)?",
      options: [
        "Mener des attaques depuis des pays sans extradition",
        "Utiliser uniquement des malwares open source",
        "Exploiter des vulnérabilités dans les hyperviseurs pour sortir d'une VM",
        "Utiliser des outils légitimes déjà présents sur le système cible"
      ],
      correctAnswer: "Utiliser des outils légitimes déjà présents sur le système cible"
    },
    {
      id: 25,
      text: "Un attaque de type IP Spoofing consiste à se faire passer pour une machine B auprès d'une machine A, laquelle de ces étapes n’est pas une composante de l’attaque ?",
      options: [
        "Le pirate paralyse la machine B",
        "Le pirate devine le procédé de A pour générer des numéros de séquence",
        "Le pirate se fait passer pour B auprès de A",
        "Le pirate chiffre toutes les communications entre A et B"
      ],
      correctAnswer: "Le pirate chiffre toutes les communications entre A et B"
    },
    {
      id: 26,
      text: "Quelle technique de forensics permet d'analyser un système sans altérer les preuves?",
      options: [
        "Analyser directement le système live",
        "Créer une image disque bit-à-bit puis analyser la copie",
        "Supprimer les fichiers suspects",
        "Redémarrer le système"
      ],
      correctAnswer: "Créer une image disque bit-à-bit puis analyser la copie"
    },
    {
      id: 27,
      text: "Dans un pentest, que teste l'outil Burp Suite?",
      options: [
        "La sécurité réseau (couche 3)",
        "Les applications web via un proxy interceptant HTTP/S ",
        "La résistance au DDoS",
        "La sécurité physique"
      ],
      correctAnswer: "Les applications web via un proxy interceptant HTTP/S "
    },
    {
      id: 28,
      text: "Dans le cadre d'un échange de clés Diffie-Hellman, quelle est la difficulté qui empêche de calculer la clé secrète partagée ?",
      options: [
        "La difficulté de factoriser le produitde grands nombres premiers",
        "L'impossibilité de prédire le vecteur d'intialisation (IV) utilisé pour le chiffrement par bloc",
        "La collision de hashage via l'attaque de birthday",
        "Le problème du logarithme discret dans un groupe cyclique fini"
      ],
      correctAnswer: "Le problème du logarithme discret dans un groupe cyclique fini"
    },
    {
      id: 29,
      text: "Qu'est-ce qu'une attaque par 'Padding Oracle' dans le contexte du protocole TLS ?",
      options: [
        "L'injection de caractères de remplissage dans une base de données pour contourner l'authentification",
        "Une attaque qui utilise les messages d'erreur du serveur concernant le padding pour déchiffrer les données sans la clé",
        "Une technique consistant à remplir la mémoire tampon d'une application pour exécuter du code arbitraire",
        "L'utilisation d'un certificat auto-signé pour usurper l'identité d'un serveur légitime"
      ],
      correctAnswer: "Une attaque qui utilise les messages d'erreur du serveur concernant le padding pour déchiffrer les données sans la clé"
    },
    {
      id: 30,
      text: "Quel mécanisme de sécurité permet de limiter les dégâts d'une exploitation de vulnérabilité en rendant les adresses mémoire des bibliothèques imprévisibles à chaque exécution ?",
      options: [
        "Le sanboxing (bac à sable)",
        "ASLR (Address Space Layout Randomization)",
        "DEP(DataExecution Prevention)",
        "HSTS (HTTP Strict Transport Security)"
      ],
      correctAnswer: "ASLR (Address Space Layout Randomization)"
    }
  ]
};
