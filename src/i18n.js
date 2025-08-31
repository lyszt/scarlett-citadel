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
                    // --- MainNav Component ---
                    navHome: 'Home',
                    navAbout: 'About',
                    navHireMe: 'Hire me',
                    navProjects: 'Projects',
                    navResume: 'Resume',
                    // --- LanguageSelector Component ---
                    selectLanguage: 'Select a Language',
                    chooseLanguagePrompt: 'Choose your preferred language for the site.',
                    // --- About Component ---
                    aboutTitle: 'SI FALLOR, SUM', 
                    aboutParagraph1: 'I am a <strong>web and software developer and designer</strong> who enjoys creating avant-garde interactive tools and interfaces. Interested in modernism, minimalism, <strong>computational graphics, machine-learning and language-learning</strong>.',
                    aboutParagraph2: 'Since several years ago, I have been working autonomously as a <strong>freelance web developer and graphic designer</strong>, specializing in <strong>user-centric design (UI/UX)</strong> and <strong>complex software development</strong>. I\'m available in <strong>French, English, and Portuguese</strong>. Whether you\'re based in Paris, New York, São Paulo, or anywhere else in the world, really. I\'m ready to bring your ideas to life—no matter the language or location. If you wish to hire a <strong>multi-skilled, adaptable professional</strong>, then reach out to me. Let\'s get started on your next project today.',
                    educationTitle: 'EDUCATION',
                    educationParagraph1: 'My academic journey began at the <strong>Fundação Instituto de Educação de Barueri (FIEB)</strong>, where an associate degree gave me a solid, hands-on foundation in software development and project implementation.',
                    educationParagraph2: 'I am now undergoing a Bachelor\'s in Computer Science at the <strong>Universidade Federal da Fronteira Sul (UFFS)</strong>. There, I have served as an Undergraduate Teaching Assistant for algorithms and data structures, conducted scientific research in Artificial Intelligence (PIBIC), and earned a Certificate of Achievement in the <strong>International Collegiate Programming Contest (ICPC)</strong>.',
                    learnMoreButton: 'Learn more',
                    lattesTitle: 'Lattes curriculum (PT-BR)',
                    // --- MusicPlayer Component ---
                    playMusicAlt: 'Play music theme.'
                }
            },
            pt: {
                translation: {
                    // --- MainNav Component ---
                    navHome: 'Início',
                    navAbout: 'Sobre',
                    navHireMe: 'Contrate-me',
                    navProjects: 'Projetos',
                    navResume: 'Currículo',
                    // --- LanguageSelector Component ---
                    selectLanguage: 'Selecione um Idioma',
                    chooseLanguagePrompt: 'Escolha seu idioma de preferência para o site.',
                    // --- About Component ---
                    aboutTitle: 'SI FALLOR, SUM', 
                    aboutParagraph1: 'Sou <strong>desenvolvedor e designer de web e software</strong> que gosta de criar ferramentas e interfaces interativas de vanguarda. Tenho interesse em modernismo, minimalismo, <strong>gráficos computacionais, aprendizado de máquina e aprendizado de idiomas</strong>.',
                    aboutParagraph2: 'Há vários anos, trabalho de forma autônoma como <strong>desenvolvedor web e designer gráfico freelancer</strong>, especializando-me em <strong>design centrado no usuário (UI/UX)</strong> e <strong>desenvolvimento de software complexo</strong>. Estou disponível em <strong>francês, inglês e português</strong>. Seja em Paris, Nova York, São Paulo ou em qualquer outro lugar do mundo. Estou pronto para dar vida às suas ideias, independentemente do idioma ou local. Se desejar contratar um <strong>profissional versátil e adaptável</strong>, entre em contato comigo. Vamos começar seu próximo projeto hoje.',
                    educationTitle: 'EDUCAÇÃO',
                    educationParagraph1: 'Minha jornada acadêmica começou na <strong>Fundação Instituto de Educação de Barueri (FIEB)</strong>, onde um curso técnico me deu uma base sólida e prática em desenvolvimento de software e implementação de projetos.',
                    educationParagraph2: 'Atualmente, estou cursando Bacharelado em Ciência da Computação na <strong>Universidade Federal da Fronteira Sul (UFFS)</strong>. Lá, atuei como Monitor Acadêmico de algoritmos e estruturas de dados, realizei pesquisa científica em Inteligência Artificial (PIBIC) e recebi um Certificado de Destaque na <strong>Competição Internacional de Programação Colegiada (ICPC)</strong>.',
                    learnMoreButton: 'Saiba mais',
                    lattesTitle: 'Currículo Lattes (PT-BR)',
                    // --- MusicPlayer Component ---
                    playMusicAlt: 'Tocar tema musical.'
                }
            },
            fr: {
                translation: {
                    // --- MainNav Component ---
                    navHome: 'Accueil',
                    navAbout: 'À propos',
                    navHireMe: 'Engagez-moi',
                    navProjects: 'Projets',
                    navResume: 'CV',
                    // --- LanguageSelector Component ---
                    selectLanguage: 'Sélectionnez une langue',
                    chooseLanguagePrompt: 'Choisissez votre langue préférée pour le site.',
                    // --- About Component ---
                    aboutTitle: 'SI FALLOR, SUM', 
                    aboutParagraph1: 'Je suis un <strong>développeur et concepteur web et logiciel</strong> qui aime créer des outils et des interfaces interactifs d\'avant-garde. Intéressé par le modernisme, le minimalisme, <strong>l\'infographie, l\'apprentissage automatique et l\'apprentissage des langues</strong>.',
                    aboutParagraph2: 'Depuis plusieurs années, je travaille de manière autonome en tant que <strong>développeur web et graphiste indépendant</strong>, spécialisé dans la <strong>conception centrée sur l\'utilisateur (UI/UX)</strong> et le <strong>développement de logiciels complexes</strong>. Je suis disponible en <strong>français, anglais e portoghese</strong>. Que vous soyez basé à Paris, New York, São Paulo ou n\'importe où ailleurs dans le monde. Je suis prêt à donner vie à vos idées, quelle que soit la langue ou le lieu. Si vous souhaitez embaucher un <strong>professionnel polyvalent et adaptable</strong>, contactez-moi. Commençons votre prochain projet dès aujourd\'hui.',
                    educationTitle: 'ÉDUCATION',
                    educationParagraph1: 'Mon parcours académique a commencé à la <strong>Fundação Instituto de Educação de Barueri (FIEB)</strong>, où un diplôme d\'associé m\'a donné une base solide et pratique en développement de logiciels et en mise en œuvre de projets.',
                    educationParagraph2: 'Je poursuis actuellement une licence en informatique à l\'<strong>Universidade Federal da Fronteira Sul (UFFS)</strong>. Là-bas, j\'ai été assistant d\'enseignement pour les cours d\'algorithmes et de structures de données, j\'ai mené des recherches scientifiques en intelligence artificielle (PIBIC) et j\'ai obtenu un certificat de réussite au <strong>Concours International de Programmation Universitaire (ICPC)</strong>.',
                    learnMoreButton: 'En savoir plus',
                    lattesTitle: 'Curriculum Lattes (PT-BR)',
                    // --- MusicPlayer Component ---
                    playMusicAlt: 'Jouer le thème musical.'
                }
            },
            it: {
                translation: {
                    // --- MainNav Component ---
                    navHome: 'Home',
                    navAbout: 'Chi sono',
                    navHireMe: 'Assumimi',
                    navProjects: 'Progetti',
                    navResume: 'Resume',
                    // --- LanguageSelector Component ---
                    selectLanguage: 'Seleziona una Lingua',
                    chooseLanguagePrompt: 'Scegli la tua lingua preferita per il sito.',
                    // --- About Component ---
                    aboutTitle: 'SI FALLOR, SUM', 
                    aboutParagraph1: 'Sono uno <strong>sviluppatore e designer di software e web</strong> che ama creare strumenti e interfacce interattive all\'avanguardia. Interessato al modernismo, al minimalismo, <strong>alla computer grafica, all\'apprendimento automatico e all\'apprendimento delle lingue</strong>.',
                    aboutParagraph2: 'Da diversi anni lavoro in modo autonomo come <strong>sviluppatore web e graphic designer freelance</strong>, specializzandomi in <strong>design centrato sull\'utente (UI/UX)</strong> e nello <strong>sviluppo di software complessi</strong>. Sono disponibile in <strong>francese, inglese e portoghese</strong>. Che tu sia a Parigi, New York, San Paolo o in qualsiasi altra parte del mondo. Sono pronto a dare vita alle tue idee, indipendentemente dalla lingua o dal luogo. Se desideri assumere un <strong>professionista versatile e adattabile</strong>, contattami. Iniziamo oggi il tuo prossimo progetto.',
                    educationTitle: 'FORMAZIONE',
                    educationParagraph1: 'Il mio percorso accademico è iniziato presso la <strong>Fundação Instituto de Educação de Barueri (FIEB)</strong>, dove un diploma di associato mi ha fornito una solida base pratica nello sviluppo di software e nell\'implementazione di progetti.',
                    educationParagraph2: 'Attualmente sto frequentando un corso di laurea in Informatica presso l\'<strong>Universidade Federal da Fronteira Sul (UFFS)</strong>. Lì, ho lavorato come assistente didattico per algoritmi e strutture dati, ho condotto ricerche scientifiche in Intelligenza Artificiale (PIBIC) e ho ottenuto un Certificato di Merito al <strong>Concorso Internazionale di Programmazione per Universitari (ICPC)</strong>.',
                    learnMoreButton: 'Saperne di più',
                    lattesTitle: 'Curriculum Lattes (PT-BR)',
                    // --- MusicPlayer Component ---
                    playMusicAlt: 'Riproduci il tema musicale.'
                }
            }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;