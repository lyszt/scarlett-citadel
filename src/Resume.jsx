import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css'; // Assuming shared styles

const Resume = React.forwardRef((props, ref) => {
    const { t } = useTranslation();

    // Reusable component for timeline items (Experience & Education)
    const TimelineItem = ({ title, subtitle, description }) => (
        <div className="relative pl-8 sm:pl-12 py-4 group">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-stone-300 group-last:h-1/2"></div>
            {/* Dot */}
            <div className="absolute left-[-6px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-stone-100"></div>
            <h3 className="text-xl font-semibold text-stone-700">{title}</h3>
            <p className="text-md text-stone-500 mb-2">{subtitle}</p>
            <p className="text-stone-600">{description}</p>
        </div>
    );

    return (
        <section className="z-10 w-screen absolute top-0 left-0 h-full overflow-y-auto " id="Resume">
            {/* Header Block */}
            <div className="bg-stone-900 text-white w-full flex items-center justify-center py-20 px-8 pt-[10%]">
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-wider">{t('resumeName')}</h1>
                    <p className="text-2xl text-stone-300 mt-2">{t('resumeTagline')}</p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-stone-100 w-full flex justify-center py-16 px-8">
                <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column (Experience) */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-stone-800 border-b-4 border-cyan-400 pb-2 mb-8">{t('experienceTitle')}</h2>
                        <div className="flex flex-col">
                            <TimelineItem
                                title={t('job1Title')}
                                subtitle={`${t('job1Company')} | ${t('job1Date')}`}
                                description={t('job1Desc')}
                            />
                            <TimelineItem
                                title={t('job2Title')}
                                subtitle={`${t('job2Company')} | ${t('job2Date')}`}
                                description={t('job2Desc')}
                            />
                            <TimelineItem
                                title={t('job3Title')}
                                subtitle={`${t('job3Company')} | ${t('job3Date')}`}
                                description={t('job3Desc')}
                            />
                        </div>
                    </div>

                    {/* Right Column (Skills, Education, Languages) */}
                    <div className="lg:col-span-1">
                        {/* Education */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-stone-800 border-b-2 border-stone-300 pb-2 mb-4">{t('educationCvTitle')}</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-stone-700">{t('degree1Title')}</h3>
                                    <p className="text-sm text-stone-500">{t('degree1School')} | {t('degree1Date')}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-stone-700">{t('degree2Title')}</h3>
                                    <p className="text-sm text-stone-500">{t('degree2School')} | {t('degree2Date')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-stone-800 border-b-2 border-stone-300 pb-2 mb-4">{t('skillsTitle')}</h2>
                            <div className="flex flex-wrap gap-2">
                                {t('skillsList', { returnObjects: true }).map(skill => (
                                    <span key={skill} className="bg-stone-200 text-stone-700 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div>
                            <h2 className="text-2xl font-bold text-stone-800 border-b-2 border-stone-300 pb-2 mb-4">{t('languagesTitle')}</h2>
                            <ul className="text-stone-600 space-y-2">
                                <li>{t('langEnglish')}</li>
                                <li>{t('langFrench')}</li>
                                <li>{t('langPortuguese')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Resume;

