import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

// Resume.modern — Website-first, full‑width CTA header & left-aligned two-column content
// Revision: removed contact modal completely (per your instruction).
// - Header CTA now uses direct mailto / tel actions only (no modal state).
// - Modal-related state, handlers and markup removed.
// - Uses full viewport width (w-screen) and solid colors only.

const CONTACT = {
    email: 'jluis.kaldwin@gmail.com',
    phone: '+55 49 99994-9613',
    location: 'Chapecó, SC, Brazil',
};

const Resume = React.forwardRef((props, ref) => {
    const { t } = useTranslation();

    const experiences = [
        {
            title: t('job1Title') || 'Software Engineering Trainee',
            company: t('job1Company') || 'Abensoft',
            date: t('job1Date') || 'May 2025 - Present',
            desc: t('job1Desc') ||
                'Development of a CRUD system for a correspondent banking platform, utilizing JavaScript, HTML/CSS, and Bootstrap on the front-end, with integration to a back-end built in Erlang/Zotonic and a PostgreSQL database. ' +
                'The scope also included the creation of automation routines (RPA) and web scraping tools using Selenium and AWS Lambda.'
        },
        {
            title: t('job2Title') || 'Undergraduate Researcher – Artificial Intelligence (PIBIC)',
            company: t('job2Company') || 'UFFS',
            date: t('job2Date') || 'Aug 2025 - Present',
            desc: t('job2Desc') ||
                'Conducted research on Monte Carlo Tree Search (MCTS), analyzing its drawbacks, advantages, and limitations in complex multiplayer games. ' +
                'Investigated strategies for improving decision-making in AI agents through game-theoretic approaches. ' +
                'Implemented and tested AI algorithms to evaluate performance in various multiplayer scenarios. ' +
                'Collaborated with research advisors on data analysis, documentation, and presentation of scientific results.'
        },
        {
            title: t('job3Title') || 'Information Technology Intern',
            company: t('job3Company') || 'UFFS',
            date: t('job3Date') || 'Apr 2024 - May 2025',
            desc: t('job3Desc') ||
                'Maintenance of computers and IT equipment, management and upkeep of IT systems, and user authentication support for administrative, academic, and student users. ' +
                'Development of tutorials for system use, installation and configuration of printing systems, and providing technical support for IT infrastructure. ' +
                'Implemented automation and optimization of work processes using Python and Excel, enhancing overall efficiency and accuracy. ' +
                'Created reporting tools through Python packages like Selenium and Pandas for automated analysis of data. ' +
                'Contributed to the implementation of Moodle and other educational resources for new postgraduate courses.'
        },
        {
            title: t('job4Title') || 'Freelance Creative',
            company: t('job4Company') || 'Self-employed',
            date: t('job4Date') || 'Aug 2019 - Mar 2024',
            desc: t('job4Desc') ||
                'Freelance work for international clients, mostly from the United States, via Upwork and similar platforms. ' +
                'This work mainly consists of developing web and visual solutions (video editing, motion graphics, animation and programming, etc.).' },
        {
            title: t('job5Title') || 'Tutor of Portuguese as a Foreign Language',
            company: t('job5Company') || 'UFFS',
            date: t('job5Date') || 'Feb 2023 - Dec 2023',
            desc: t('job5Desc') ||
                'Worked as a teacher of Portuguese as a Foreign Language, supporting exchange students (mostly English and French speakers). ' +
                'Helped them grasp the subtleties of Portuguese, applying my multilingual skills. ' +
                'Designed and developed visual educational resources leveraging design knowledge.'
        }
    ];



    const education = [
        { degree: t('degree1Title') || 'B.Sc. Computer Science', school: t('degree1School') || 'UFFS', date: t('degree1Date') || '2024 - Present' },
        { degree: t('degree2Title') || "Associate's Degree, Web Development", school: t('degree2School') || 'FIEB', date: t('degree2Date') || '2018 - 2020' },
    ];

    const skills = Array.isArray(t('skillsList', { returnObjects: true }))
        ? t('skillsList', { returnObjects: true }).map(s => (typeof s === 'string' ? { name: s, level: 0.75 } : s))
        : [{ name: 'JavaScript', level: 0.95 }, { name: 'React', level: 0.9 }, { name: 'Tailwind', level: 0.85 }];

    const [toasts, setToasts] = useState([]);
    const addToast = (text) => {
        const id = Math.random().toString(36).slice(2, 9);
        setToasts(prev => [...prev, { id, text }]);
        setTimeout(() => setToasts(prev => prev.filter(tt => tt.id !== id)), 3000);
    };

    const handleCopy = async (text, label) => {
        try {
            await navigator.clipboard.writeText(text);
            addToast(`${label} copied to clipboard`);
        } catch (e) {
            addToast(`Couldn't copy ${label}`);
        }
    };

    const SkillBar = ({ name, level, index }) => (
        <div className="w-full">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-stone-700">{name}</span>
                <span className="text-xs text-stone-500">{Math.round(level * 100)}%</span>
            </div>
            <div className="bg-stone-200 rounded-full h-2 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${Math.round(level * 100)}%` }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.04 }} className="h-full rounded-full" style={{ backgroundColor: '#06b6d4' }} aria-hidden />
            </div>
        </div>
    );

    // full-width two-column experience row (left metadata / right description)
    const ExperienceRow = ({ item, index }) => (
        <motion.div key={index} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="w-screen px-12 py-6 border-b border-stone-200 bg-white">
            <div className="flex gap-6 items-start">
                <div className="w-1/2 text-left">
                    <div className="text-xs text-stone-500">{item.date}</div>
                    <h3 className="text-xl font-semibold text-stone-900 mt-2">{item.title}</h3>
                    <div className="text-sm text-stone-700 mt-1">{item.company}</div>
                </div>

                <div className="w-1/2 text-left">
                    <p className="text-sm text-stone-700 leading-relaxed">{item.desc}</p>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section ref={ref} id="Resume" className="w-screen min-h-screen absolute top-0 left-0 bg-stone-50 text-stone-900 z-5">
            <header className="w-screen bg-stone-800 text-white pt-[5%]">
                <div className="w-screen flex px-12 py-20 items-start">
                    {/* Left: big promotional text */}
                    <div className="w-1/2 text-left">
                        <div className="text-sm font-medium">{t('initials') || 'JL'}</div>
                        <h1 className="text-4xl font-extrabold leading-tight mt-4">{t('resumeName') || 'João Luís Almeida'}</h1>
                        <p className="mt-4 text-lg text-white/90">{t('resumeTagline') || 'Full-Stack Developer'}</p>

                        <div className="mt-8 flex gap-4">
                            <a href={`mailto:${CONTACT.email}`} className="px-6 py-3 bg-black text-white font-semibold rounded">{t('contactTitle') || 'Contact'}</a>
                            <button onClick={() => handleCopy(CONTACT.email, 'Email')} className="px-6 py-3 bg-white text-black font-semibold rounded">{CONTACT.email}</button>
                        </div>
                    </div>

                    {/* Right: short promotional pitch / stats — still text-left */}
                    <div className="w-1/2 text-left">
                        <div className="text-sm font-medium">{t('experienceTitle') || 'Experience'}</div>
                        <p className="mt-4 text-sm text-white/90 leading-relaxed">
                            È camuffato. È camuffato da cabina telefonica della polizia del 1963. Ogni volta che il
                            TARDIS si materializza in una nuova posizione, entro il primo nanosecondo dall'atterraggio, analizza l'ambiente circostante, calcola
                            una mappa dati dodecadimensionale di tutto ciò che si trova entro un raggio di mille miglia, e poi determina
                            quale involucro esterno si mimetizzerebbe meglio con l'ambiente... e poi si camuffa da cabina telefonica della polizia del 1963.
                        </p>

                        <div className="mt-8 grid grid-cols-3 gap-6 text-left">
                            <div>
                                <div className="text-lg font-bold">{t('yearsExperience') || '2y'}</div>
                                <div className="text-xs text-white/90">{t('yearsExperienceLabel') || 'Experience'}</div>
                            </div>

                            <div>
                                <div className="text-lg font-bold">{t('projects') || '8'}</div>
                                <div className="text-xs text-white/90">{t('projectsLabel') || 'Projects'}</div>
                            </div>

                            <div>
                                <div className="text-lg font-bold">{t('languagesCount') || '3'}</div>
                                <div className="text-xs text-white/90">{t('languagesLabel') || 'Languages'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content — use whole width for rows */}
            <main className="w-screen bg-stone-50">
                <div className="w-screen">
                    {/* Experiences (full-width rows) */}
                    <section aria-labelledby="experience" className="w-screen">
                        <div className="w-screen px-12 py-10">
                            <h2 id="experience" className="text-2xl font-bold text-stone-900 text-left">{t('experienceTitle') || 'Experience'}</h2>
                        </div>

                        <div>
                            {experiences.map((exp, idx) => (
                                <ExperienceRow item={exp} index={idx} key={idx} />
                            ))}
                        </div>
                    </section>

                    {/* Sidebar content (still full height column to the right on large screens) */}
                    <section className="w-screen px-12 py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2" />

                            <aside className="lg:col-span-1 text-left">
                                <div className="bg-white p-6 border border-stone-200">
                                    <h3 className="text-lg font-semibold">{t('educationCvTitle') || 'Education'}</h3>
                                    <div className="mt-3 space-y-3">
                                        {education.map((edu, i) => (
                                            <div key={i}>
                                                <div className="text-sm font-medium text-stone-800">{edu.degree}</div>
                                                <div className="text-xs text-stone-600">{edu.school} • {edu.date}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-6 mt-6 border border-stone-200">
                                    <h3 className="text-lg font-semibold">{t('skillsTitle') || 'Skills'}</h3>
                                    <div className="mt-3 space-y-4">
                                        {skills.map((s, i) => (
                                            <SkillBar key={i} name={s.name} level={s.level ?? 0.6} index={i} />
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-6 mt-6 border border-stone-200">
                                    <h3 className="text-lg font-semibold">{t('languagesTitle') || 'Languages'}</h3>
                                    <ul className="mt-3 text-sm text-stone-700 space-y-2">
                                        <li>{t('langEnglish')}</li>
                                        <li>{t('langFrench')}</li>
                                        <li>{t('langPortuguese')}</li>
                                        <li>{t('langSpanish')}</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </section>
                </div>
            </main>

            {/* Toasts */}
            <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
                {toasts.map(tt => (
                    <motion.div key={tt.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white shadow px-4 py-2 border text-left">
                        <div className="text-sm text-stone-700">{tt.text}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
});

export default Resume;
