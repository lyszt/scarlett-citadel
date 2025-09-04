import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    // --- MainNav & LanguageSelector ---
                    navHome: 'Home',
                    navAbout: 'About',
                    navHireMe: 'Hire me',
                    navProjects: 'Projects',
                    navResume: 'Resume',
                    navPublications: 'Publications',
                    selectLanguage: 'Select a language',
                    chooseLanguagePrompt: 'Choose your preferred language for the site.',
                    translateAlt: 'Translate the website to your preferred language.',

                    // --- About Component ---
                    aboutTitle: 'SI FALLOR, SUM',
                    aboutParagraph1:
                        'I am a <strong>web and software developer and designer</strong> who enjoys creating avant-garde interactive tools and interfaces. Interested in modernism, minimalism, <strong>computational graphics, machine learning and language learning</strong>.',
                    aboutParagraph2:
                        "For several years I have worked as an autonomous <strong>freelance web developer and graphic designer</strong>, specializing in <strong>user-centric design (UI/UX)</strong> and <strong>complex software development</strong>. I'm available in <strong>French, English, and Portuguese</strong>.",

                    // --- Education ---
                    educationTitle: 'EDUCATION',
                    educationParagraph1:
                        'My academic journey began at the <strong>Fundação Instituto de Educação de Barueri (FIEB)</strong>, where an associate degree gave me a solid, hands-on foundation in software development and project implementation.',
                    educationParagraph2:
                        "I'm currently completing a Bachelor's in Computer Science at the <strong>Universidade Federal da Fronteira Sul (UFFS)</strong>. There I served as an undergraduate TA, conducted AI research (PIBIC), and participated in ICPC.",

                    // --- Resume & Contact ---
                    initials: 'JL',
                    resumeName: "João Luís Almeida Santos",
                    resumeTagline: 'Full-Stack Developer',
                    contactTitle: 'Contact',
                    contactEmail: 'jluis.kaldwin@gmail.com',
                    contactPhone: '+55 49 99994-9613',
                    contactLocation: 'Chapecó, Santa Catarina, Brazil',
                    lookingFor: 'Open to work',
                    openToWork: 'Open to opportunities',

                    // --- Small stats (used in profile card) ---
                    yearsExperienceLabel: 'Experience',
                    yearsExperience: '2y',
                    projectsLabel: 'Projects',
                    projects: '8',
                    clientsLabel: 'Clients',
                    clients: '5',
                    languagesLabel: 'Languages',
                    languagesCount: '3',

                    // --- Skills & Languages ---
                    skillsTitle: 'Skills',
                    skillsSubtitle: 'Technical & design',
                    skillsList: ['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'HTML/CSS', 'UI/UX Design', 'Data Science'],
                    languagesTitle: 'Languages',
                    languagesSubtitle: 'Spoken & written',
                    langEnglish: 'English — Fluent (C2)',
                    langFrench: 'French — Advanced (C1)',
                    langPortuguese: 'Portuguese — Native',
                    langSpanish: 'Spanish — Intermediate (B2)',

                    // --- Experience & Education entries ---
                    experienceTitle: 'Experience',
                    experienceSubtitle: 'Selected roles & accomplishments',
                    job1Title: 'Software Engineering Trainee',
                    job1Company: 'Abensoft',
                    job1Date: 'May 2025 - Present',
                    job1Desc:
                        'Development of a CRUD system for a correspondent banking platform, utilizing JavaScript, HTML/CSS, and Bootstrap on the front-end, with integration to a back-end built in Erlang/Zotonic and a PostgreSQL database. The scope also included the creation of automation routines (RPA) and web scraping tools using Selenium and AWS Lambda.',
                    job2Title: 'Undergraduate Researcher – Artificial Intelligence (PIBIC)',
                    job2Company: 'UFFS',
                    job2Date: 'Aug 2025 - Present',
                    job2Desc:
                        'Conducted research on Monte Carlo Tree Search (MCTS), analyzing its drawbacks, advantages, and limitations in complex multiplayer games. Investigated strategies for improving decision-making in AI agents through game-theoretic approaches. Implemented and tested AI algorithms to evaluate performance in various multiplayer scenarios. Collaborated with research advisors on data analysis, documentation, and presentation of scientific results.',
                    job3Title: 'Information Technology Intern',
                    job3Company: 'UFFS',
                    job3Date: 'Apr 2024 - May 2025',
                    job3Desc:
                        'Maintenance of computers and IT equipment, management and upkeep of IT systems, and user authentication support for administrative, academic, and student users. Development of tutorials for system use, installation and configuration of printing systems, and providing technical support for IT infrastructure. Implemented automation and optimization of work processes using Python and Excel, enhancing overall efficiency and accuracy. Created reporting tools through Python packages like Selenium and Pandas for automated analysis of data. Contributed to the implementation of Moodle and other educational resources for new postgraduate courses.',
                    job4Title: 'Freelance Creative',
                    job4Company: 'Self-employed',
                    job4Date: 'Aug 2019 - Mar 2024',
                    job4Desc:
                        'Freelance work for international clients, mostly from the United States, via Upwork and similar platforms. This work mainly consists of developing web and visual solutions, including video editing, motion graphics, animation and programming.',
                    job5Title: 'Tutor of Portuguese as a Foreign Language',
                    job5Company: 'UFFS',
                    job5Date: 'Feb 2023 - Dec 2023',
                    job5Desc:
                        'For a short time, I ventured through a different area, working as a teacher of Portuguese as a Foreign Language. I offered my knowledge of language and helped exchange students grasp the subtilities of the portuguese language. Those same students were mainly native speakers of English and French, and my skills with those languages came a long way. I also used my knowledge of design to build visual educational resources.',

                    educationCvTitle: 'Education',
                    degree1Title: "Bachelor's Degree, Computer Science",
                    degree1School: 'Universidade Federal da Fronteira Sul (UFFS)',
                    degree1Date: '2024 - Present',
                    degree2Title: "Associate's Degree, Web Development",
                    degree2School: 'FIEB - Fundação Instituto de Educação de Barueri',
                    degree2Date: '2018 - 2020',

                    learnMoreButton: 'Learn more',
                    lattesTitle: 'Lattes curriculum (PT-BR)',
                    playMusicAlt: 'Play music theme.',
                    saveButton: 'Save',
                    viewWorkButton: 'View work',
                    contactMe: 'Contact me',
                },
            },

            pt: {
                translation: {
                    navHome: 'Início',
                    navAbout: 'Sobre',
                    navHireMe: 'Contrate-me',
                    navProjects: 'Projetos',
                    navResume: 'Currículo',
                    navPublications: 'Publicações',
                    selectLanguage: 'Selecione um idioma',
                    chooseLanguagePrompt: 'Escolha seu idioma de preferência para o site.',
                    translateAlt: 'Traduza o site para o seu idioma de preferência.',

                    aboutTitle: 'SI FALLOR, SUM',
                    aboutParagraph1:
                        'Sou <strong>desenvolvedor e designer de web e software</strong> que gosta de criar ferramentas e interfaces interativas de vanguarda. Interesso-me por modernismo, minimalismo, <strong>gráficos computacionais, aprendizado de máquina e aprendizado de idiomas</strong>.',
                    aboutParagraph2:
                        'Há vários anos trabalho como <strong>freelancer</strong> em desenvolvimento web e design gráfico, com foco em <strong>UI/UX</strong> e desenvolvimento de software complexo.',

                    educationTitle: 'EDUCAÇÃO',
                    educationParagraph1:
                        'Minha jornada acadêmica começou na <strong>Fundação Instituto de Educação de Barueri (FIEB)</strong>, com um curso técnico que me deu base prática em desenvolvimento de software.',
                    educationParagraph2:
                        'Atualmente curso Bacharelado em Ciência da Computação na <strong>Universidade Federal da Fronteira Sul (UFFS)</strong>, atuando em pesquisa (PIBIC) e como monitor acadêmico.',

                    initials: 'JL',
                    resumeName: 'João Luís Almeida Santos',
                    resumeTagline: 'Desenvolvedor Full-Stack',
                    contactTitle: 'Contato',
                    contactEmail: 'jluis.kaldwin@gmail.com',
                    contactPhone: '+55 49 99994-9613',
                    contactLocation: 'Chapecó, Santa Catarina, Brasil',
                    lookingFor: 'Aberto a oportunidades',
                    openToWork: 'Aberto a oportunidades',

                    yearsExperienceLabel: 'Experiência',
                    yearsExperience: '2a',
                    projectsLabel: 'Projetos',
                    projects: '8',
                    clientsLabel: 'Clientes',
                    clients: '5',
                    languagesLabel: 'Idiomas',
                    languagesCount: '3',

                    skillsTitle: 'Habilidades',
                    skillsSubtitle: 'Técnicas e design',
                    skillsList: ['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'HTML/CSS', 'UI/UX Design', 'Ciência de Dados'],
                    languagesTitle: 'Idiomas',
                    languagesSubtitle: 'Falados e escritos',
                    langEnglish: 'Inglês — Fluente (C2)',
                    langFrench: 'Francês — Avançado (C1)',
                    langPortuguese: 'Português — Nativo',
                    langSpanish: 'Espanhol — Intermediário (B2)',

                    experienceTitle: 'Experiência',
                    experienceSubtitle: 'Cargos e realizações selecionadas',
                    job1Title: 'Estagiário de Engenharia de Software',
                    job1Company: 'Abensoft',
                    job1Date: 'Maio 2025 - Presente',
                    job1Desc:
                        'Desenvolvimento de um sistema CRUD para uma plataforma bancária correspondente, utilizando JavaScript, HTML/CSS e Bootstrap no front-end, com integração a um back-end construído em Erlang/Zotonic e um banco de dados PostgreSQL. O escopo também incluiu a criação de rotinas de automação (RPA) e ferramentas de web scraping usando Selenium e AWS Lambda.',
                    job2Title: 'Pesquisador de Graduação – IA (PIBIC)',
                    job2Company: 'UFFS',
                    job2Date: 'Ago 2025 - Presente',
                    job2Desc:
                        'Conduzi pesquisas sobre Monte Carlo Tree Search (MCTS), analisando suas desvantagens, vantagens e limitações em jogos multiplayer complexos. Investiguei estratégias para melhorar a tomada de decisão em agentes de IA através de abordagens da teoria dos jogos. Implementei e testei algoritmos de IA para avaliar o desempenho em vários cenários multiplayer. Colaborei com orientadores de pesquisa na análise de dados, documentação e apresentação de resultados científicos.',
                    job3Title: 'Estagiário de TI',
                    job3Company: 'UFFS',
                    job3Date: 'Abr 2024 - Maio 2025',
                    job3Desc:
                        'Manutenção de computadores e equipamentos de TI, gestão e conservação de sistemas de TI, e suporte de autenticação de usuários para uso administrativo, acadêmico e de alunos. Desenvolvimento de tutoriais para uso de sistemas, instalação e configuração de sistemas de impressão, e fornecimento de suporte técnico para a infraestrutura de TI. Implementei automação e otimização de processos de trabalho usando Python e Excel, melhorando a eficiência e a precisão geral. Criei ferramentas de relatórios usando pacotes Python como Selenium e Pandas para análise automatizada de dados. Contribuí para a implementação do Moodle e outros recursos educacionais para novos cursos de pós-graduação.',
                    job4Title: 'Freelancer',
                    job4Company: 'Autônomo',
                    job4Date: 'Ago 2019 - Mar 2024',
                    job4Desc:
                        'Trabalhei como freelancer para clientes internacionais, em sua maioria dos Estados Unidos, através de plataformas como Upwork. Meu trabalho principal consistiu em desenvolver soluções web e visuais, incluindo edição de vídeo, motion graphics, animação e programação.',
                    job5Title: 'Tutor de Português como Língua Estrangeira',
                    job5Company: 'UFFS',
                    job5Date: 'Fev 2023 - Dez 2023',
                    job5Desc:
                        'Atuei como professor de Português para estrangeiros, auxiliando estudantes de intercâmbio, em especial falantes de inglês e francês. Usei minhas habilidades multilíngues para ajudá-los a entender as nuances do idioma. Além disso, utilizei meu conhecimento em design para criar materiais didáticos visuais e dinâmicos.',

                    educationCvTitle: 'Formação',
                    degree1Title: 'Bacharelado em Ciência da Computação',
                    degree1School: 'Universidade Federal da Fronteira Sul (UFFS)',
                    degree1Date: '2024 - Presente',
                    degree2Title: 'Curso Técnico em Desenvolvimento Web',
                    degree2School: 'FIEB - Fundação Instituto de Educação de Barueri',
                    degree2Date: '2018 - 2020',

                    learnMoreButton: 'Saiba mais',
                    lattesTitle: 'Currículo Lattes (PT-BR)',
                    playMusicAlt: 'Tocar tema musical.',
                    saveButton: 'Salvar',
                    viewWorkButton: 'Ver trabalhos',
                    contactMe: 'Contactar',
                },
            },

            fr: {
                translation: {
                    navHome: 'Accueil',
                    navAbout: 'À propos',
                    navHireMe: 'Engagez-moi',
                    navProjects: 'Projets',
                    navResume: 'CV',
                    navPublications: 'Publications',
                    selectLanguage: 'Sélectionnez une langue',
                    chooseLanguagePrompt: 'Choisissez votre langue préférée pour le site.',
                    translateAlt: 'Traduire le site web dans votre langue préférée.',

                    aboutTitle: 'SI FALLOR, SUM',
                    aboutParagraph1:
                        'Je suis un <strong>développeur et designer web et logiciel</strong> qui aime créer des outils et interfaces interactifs d\'avant-garde. Intéressé par le modernisme, le minimalisme, <strong>l\'infographie, le machine learning et l\'apprentissage des langues</strong>.',
                    aboutParagraph2:
                        'Depuis plusieurs années, je travaille en freelance en développement web et design graphique, spécialisé en UI/UX et développement logiciel complexe.',

                    educationTitle: 'ÉDUCATION',
                    educationParagraph1:
                        'Mon parcours a commencé à la <strong>Fundação Instituto de Educação de Barueri (FIEB)</strong>, où un diplôme technique m\'a donné une base pratique.',
                    educationParagraph2:
                        'Je poursuis une licence en informatique à l\'<strong>Universidade Federal da Fronteira Sul (UFFS)</strong>, participant à la recherche (PIBIC) et à l\'enseignement.',

                    initials: 'JL',
                    resumeName: 'João Luís Almeida Santos',
                    resumeTagline: 'Développeur Full-Stack',
                    contactTitle: 'Contact',
                    contactEmail: 'jluis.kaldwin@gmail.com',
                    contactPhone: '+55 49 99994-9613',
                    contactLocation: 'Chapecó, Santa Catarina, Brésil',
                    lookingFor: 'Ouvert aux opportunités',
                    openToWork: 'Ouvert aux opportunités',

                    yearsExperienceLabel: 'Expérience',
                    yearsExperience: '2a',
                    projectsLabel: 'Projets',
                    projects: '8',
                    clientsLabel: 'Clients',
                    clients: '5',
                    languagesLabel: 'Langues',
                    languagesCount: '3',

                    skillsTitle: 'Compétences',scarlett
                    skillsSubtitle: 'Technique & design',
                    skillsList: ['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'HTML/CSS', 'Design UI/UX', 'Science des données'],
                    languagesTitle: 'Langues',
                    languagesSubtitle: 'Oral & écrit',
                    langEnglish: 'Anglais — Courant (C2)',
                    langFrench: 'Français — Avancé (C1)',
                    langPortuguese: 'Portugais — Natif',
                    langSpanish: 'Espagnol — Intermédiaire (B2)',

                    experienceTitle: 'Expérience',
                    experienceSubtitle: 'Rôles et réalisations sélectionnés',
                    job1Title: 'Stagiaire en Génie Logiciel',
                    job1Company: 'Abensoft',
                    job1Date: "Mai 2025 - Aujourd'hui",
                    job1Desc:
                        'Développement d\'un système CRUD pour une plateforme bancaire correspondante, en utilisant JavaScript, HTML/CSS et Bootstrap pour le front-end, avec une intégration à un back-end construit en Erlang/Zotonic et une base de données PostgreSQL. Le projet incluait également la création de routines d\'automatisation (RPA) et d\'outils de web scraping avec Selenium et AWS Lambda.',
                    job2Title: 'Chercheur – IA (PIBIC)',
                    job2Company: 'UFFS',
                    job2Date: "Août 2025 - Aujourd'hui",
                    job2Desc:
                        'J\'ai mené des recherches sur l\'algorithme Monte Carlo Tree Search (MCTS), en analysant ses inconvénients, ses avantages et ses limites dans les jeux multijoueurs complexes. J\'ai étudié des stratégies pour améliorer la prise de décision des agents d\'IA à l\'aide d\'approches basées sur la théorie des jeux. J\'ai mis en œuvre et testé des algorithmes d\'IA pour évaluer leurs performances dans divers scénarios multijoueurs. J\'ai collaboré avec des conseillers de recherche sur l\'analyse des données, la documentation et la présentation des résultats scientifiques.',
                    job3Title: "Stagiaire en IT",
                    job3Company: 'UFFS',
                    job3Date: 'Avr 2024 - Mai 2025',
                    job3Desc:
                        'Maintenance d\'ordinateurs et d\'équipements informatiques, gestion et entretien des systèmes informatiques, et support d\'authentification des utilisateurs pour le personnel administratif, académique et les étudiants. Développement de tutoriels pour l\'utilisation des systèmes, installation et configuration des systèmes d\'impression, et fourniture d\'un support technique pour l\'infrastructure informatique. J\'ai mis en œuvre l\'automatisation et l\'optimisation des processus de travail à l\'aide de Python et d\'Excel, améliorant ainsi l\'efficacité et la précision globales. J\'ai créé des outils de reporting via des packages Python comme Selenium et Pandas pour l\'analyse automatisée des données. J\'ai contribué à la mise en œuvre de Moodle et d\'autres ressources éducatives pour les nouveaux cursus de troisième cycle.',
                    job4Title: 'Freelancer',
                    job4Company: 'À son compte',
                    job4Date: 'Août 2019 - Mars 2024',
                    job4Desc:
                        'J\'ai travaillé en freelance pour une clientèle internationale, majoritairement aux États-Unis, via des plateformes comme Upwork. Mon travail principal a consisté à concevoir et développer des solutions web et visuelles, telles que le montage vidéo, l\'animation graphique (motion graphics) et la programmation.',
                    job5Title: 'Tuteur de Portugais Langue Étrangère',
                    job5Company: 'UFFS',
                    job5Date: 'Fév 2023 - Déc 2023',
                    job5Desc:
                        'J\'ai exercé en tant que professeur de portugais pour étudiants étrangers, principalement anglophones et francophones. J\'ai mis mes compétences multilingues à profit pour les aider à maîtriser les subtilités de la langue portugaise. J\'ai également utilisé mes compétences en design pour créer des supports pédagogiques visuels et engageants.',

                    educationCvTitle: 'Formation',
                    degree1Title: "Licence, Informatique",
                    degree1School: 'Universidade Federal da Fronteira Sul (UFFS)',
                    degree1Date: '2024 - Aujourd\'hui',
                    degree2Title: 'Diplôme technique, Développement Web',
                    degree2School: 'FIEB - Fundação Instituto de Educação de Barueri',
                    degree2Date: '2018 - 2020',

                    learnMoreButton: 'En savoir plus',
                    lattesTitle: 'Curriculum Lattes (PT-BR)',
                    playMusicAlt: 'Jouer le thème.',
                    saveButton: 'Enregistrer',
                    viewWorkButton: 'Voir travaux',
                    contactMe: 'Me contacter',
                },
            },

            it: {
                translation: {
                    navHome: 'Home',
                    navAbout: 'Chi sono',
                    navHireMe: 'Assumimi',
                    navProjects: 'Progetti',
                    navResume: 'Curriculum',
                    navPublications: 'Pubblicazione',
                    selectLanguage: 'Seleziona una lingua',
                    chooseLanguagePrompt: 'Scegli la lingua preferita per il sito.',
                    translateAlt: 'Traduci il sito nella tua lingua preferita.',

                    aboutTitle: 'SI FALLOR, SUM',
                    aboutParagraph1:
                        "Sono uno <strong>sviluppatore e designer web e software</strong> che ama creare strumenti e interfacce interattive d'avanguardia. Interessato al modernismo, minimalismo, <strong>computer graphics, machine learning e apprendimento linguistico</strong>.",
                    aboutParagraph2:
                        "Negli ultimi anni ho lavorato come freelance in sviluppo web e graphic design, specializzandomi in UI/UX e sviluppo software complesso.",

                    educationTitle: 'FORMAZIONE',
                    educationParagraph1:
                        "Il mio percorso è iniziato presso la <strong>Fundação Instituto de Educação de Barueri (FIEB)</strong>, con un corso tecnico che mi ha dato solide basi pratiche.",
                    educationParagraph2:
                        "Sto studiando Informatica presso l'<strong>Universidade Federal da Fronteira Sul (UFFS)</strong>, partecipando a ricerca (PIBIC) e assistenza didattica.",

                    initials: 'JL',
                    resumeName: 'João Luís Almeida Santos',
                    resumeTagline: 'Sviluppatore Full-Stack',
                    contactTitle: 'Contatto',
                    contactEmail: 'jluis.kaldwin@gmail.com',
                    contactPhone: '+55 49 99994-9613',
                    contactLocation: 'Chapecó, Santa Catarina, Brasile',
                    lookingFor: 'Aperto a collaborazioni',
                    openToWork: 'Aperto a opportunità',

                    yearsExperienceLabel: 'Esperienza',
                    yearsExperience: '2a',
                    projectsLabel: 'Progetti',
                    projects: '8',
                    clientsLabel: 'Clienti',
                    clients: '5',
                    languagesLabel: 'Lingue',
                    languagesCount: '3',

                    skillsTitle: 'Competenze',
                    skillsSubtitle: 'Tecniche & design',
                    skillsList: ['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'HTML/CSS', 'UI/UX Design', 'Data Science'],
                    languagesTitle: 'Lingue',
                    languagesSubtitle: 'Parlato e scritto',
                    langEnglish: 'Inglese — Fluente (C2)',
                    langFrench: 'Francese — Avanzato (C1)',
                    langPortuguese: 'Portoghese — Madrelingua',
                    langSpanish: 'Spagnolo — Intermedio (B2)',

                    experienceTitle: 'Esperienza',
                    experienceSubtitle: 'Posizioni e risultati selezionati',
                    job1Title: 'Stagista Ingegneria del Software',
                    job1Company: 'Abensoft',
                    job1Date: 'Maggio 2025 - Presente',
                    job1Desc:
                        "Sviluppo di un sistema CRUD per una piattaforma bancaria corrispondente, utilizzando JavaScript, HTML/CSS e Bootstrap per il front-end, con integrazione a un back-end costruito in Erlang/Zotonic e un database PostgreSQL. Il progetto ha anche incluso la creazione di routine di automazione (RPA) e strumenti di web scraping utilizzando Selenium e AWS Lambda.",
                    job2Title: 'Ricercatore Universitario – IA (PIBIC)',
                    job2Company: 'UFFS',
                    job2Date: 'Ago 2025 - Presente',
                    job2Desc:
                        'Ho condotto ricerche su Monte Carlo Tree Search (MCTS), analizzando svantaggi, vantaggi e limiti nei giochi multiplayer complessi. Ho studiato strategie per migliorare il processo decisionale degli agenti IA tramite approcci basati sulla teoria dei giochi. Ho implementato e testato algoritmi IA per valutare le prestazioni in vari scenari multiplayer. Ho collaborato con i supervisori di ricerca per l\'analisi dei dati, la documentazione e la presentazione dei risultati scientifici.',
                    job3Title: "Stagista IT",
                    job3Company: 'UFFS',
                    job3Date: 'Apr 2024 - Mag 2025',
                    job3Desc:
                        'Manutenzione di computer e attrezzature IT, gestione e manutenzione dei sistemi IT e supporto all\'autenticazione degli utenti per il personale amministrativo, accademico e gli studenti. Sviluppo di tutorial per l\'uso dei sistemi, installazione e configurazione di sistemi di stampa e fornitura di supporto tecnico per l\'infrastruttura IT. Ho implementato l\'automazione e l\'ottimizzazione dei processi di lavoro utilizzando Python e Excel, migliorando l\'efficienza e l\'accuratezza complessive. Ho creato strumenti di reporting tramite pacchetti Python come Selenium e Pandas per l\'analisi automatizzata dei dati. Ho contribuito all\'implementazione di Moodle e altre risorse educative per i nuovi corsi post-laurea.',
                    job4Title: 'Freelance',
                    job4Company: 'Autonomo',
                    job4Date: 'Ago 2019 - Mar 2024',
                    job4Desc:
                        'Ho lavorato come freelance per clienti internazionali, soprattutto dagli Stati Uniti, tramite piattaforme come Upwork. Le mie mansioni principali includevano lo sviluppo di soluzioni web e visive, come editing video, motion graphics, animazione e programmazione.',
                    job5Title: 'Tutor di Portoghese come Lingua Straniera',
                    job5Company: 'UFFS',
                    job5Date: 'Feb 2023 - Dic 2023',
                    job5Desc:
                        'Ho lavorato come insegnante di portoghese per studenti stranieri, principalmente anglofoni e francofoni. Ho sfruttato le mie competenze multilingue per aiutarli a comprendere le sfumature della lingua portoghese. Inoltre, ho applicato le mie conoscenze di design per sviluppare materiali didattici visivi e interattivi.',

                    educationCvTitle: 'Formazione',
                    degree1Title: 'Laurea in Informatica',
                    degree1School: 'Universidade Federal da Fronteira Sul (UFFS)',
                    degree1Date: '2024 - Presente',
                    degree2Title: 'Diploma Tecnico in Sviluppo Web',
                    degree2School: 'FIEB - Fundação Instituto de Educação de Barueri',
                    degree2Date: '2018 - 2020',

                    learnMoreButton: 'Scopri di più',
                    lattesTitle: 'Curriculum Lattes (PT-BR)',
                    playMusicAlt: 'Riproduci il tema.',
                    saveButton: 'Salva',
                    viewWorkButton: 'Vedi lavori',
                    contactMe: 'Contattami',
                },
            },
        },

        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;