import React from 'react';
import { ShieldCheck, Compass, CheckCircle2, ExternalLink, Globe } from 'lucide-react';
import { Language } from '../types/index.ts';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const isEn = lang === 'en';

  const principles = [
    {
      title: isEn ? 'Explicit constraints over open-ended sprawl' : 'Чіткі обмеження замість безконтрольного розростання',
      desc: isEn
        ? 'A system where every team creates unvetted custom fields and statuses quickly becomes an unmaintainable swamp. Disciplined boundaries keep platforms fast and legible.'
        : 'Система, де кожна команда створює неперевірені поля та статуси, швидко стає болотом. Дисципліновані межі зберігають платформу швидкою та зрозумілою.'
    },
    {
      title: isEn ? 'Sustainable ownership by your internal team' : 'Легка підтримка вашою внутрішньою командою',
      desc: isEn
        ? 'I do not build brittle, black-box scripts that require ongoing consultant dependency. Every architectural configuration is paired with clear runbooks and ADRs.'
        : 'Я не створюю складних "магічних" скриптів, які потребують постійної присутності консультанта. Кожне рішення супроводжується інструкціями та ADR.'
    },
    {
      title: isEn ? 'Risk-mitigated migrations & staged cutovers' : 'Безпечні міграції та поетапне впровадження',
      desc: isEn
        ? 'Permission updates, schema normalizations, and Server to Cloud migrations are rigorously tested on staging dry-run replicas before touching production.'
        : 'Оновлення прав, нормалізація схем та перехід у Cloud детально тестуються на копіях даних до фінального релізу в продакшн.'
    },
    {
      title: isEn ? 'Clean data over expensive marketplace band-aids' : 'Чисті дані замість надлишкових платних плагінів',
      desc: isEn
        ? 'Before adding another recurring third-party subscription, we maximize native Atlassian Cloud capabilities, Automation for Jira, and light Forge extensions.'
        : 'Перш ніж купувати чергову дорогу підписку на маркетплейсі, ми максимально використовуємо вбудовану автоматизацію та легкі Forge-додатки.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {isEn ? 'ABOUT & PHILOSOPHY' : 'ПРО МЕНЕ ТА ПІДХІД'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {isEn ? 'Systems should make ownership obvious.' : 'Системи повинні робити відповідальність очевидною.'}
          </h2>
        </div>

        {/* 2-Column Split: Consultant Profile & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Portrait & Core Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-square max-w-sm shadow-sm">
              <img
                src="/assets/aistudio/image_94c47ce0.png"
                alt="Isaac Adebayo — Jira Expert & Atlassian Systems Consultant"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-neutral-950/85 backdrop-blur-xs border border-neutral-800 px-3 py-2 rounded text-xs text-neutral-200 flex items-center justify-between">
                <span>Isaac Adebayo</span>
                <span className="font-mono text-neutral-400 text-[11px]">Alluvium Engineering</span>
              </div>
            </div>

            <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#161619] space-y-2 text-xs">
              <div className="flex items-center justify-between text-neutral-500">
                <span>{isEn ? 'Role' : 'Посада'}:</span>
                <span className="font-medium text-neutral-800 dark:text-neutral-200">Jira Expert</span>
              </div>
              <div className="flex items-center justify-between text-neutral-500">
                <span>{isEn ? 'Affiliation' : 'Компанія'}:</span>
                <a
                  href="https://alluvium.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  Alluvium Solutions <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between text-neutral-500">
                <span>{isEn ? 'Focus' : 'Спеціалізація'}:</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">ITSM · Cloud Migration</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative Bio */}
          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-normal">
              {isEn
                ? 'Isaac Adebayo is a Jira Expert and Atlassian Systems Consultant on the Engineering Team at Alluvium, working with clients across global scale.'
                : 'Ісаак Адебайо — Jira Expert та консультант з екосистеми Atlassian в інженерній команді компанії Alluvium.'}
            </p>

            <p>
              {isEn
                ? 'My focus is the operating model behind the configuration: fewer manual steps, cleaner data, lower license waste, and a platform your team can maintain after the engagement ends. As part of Alluvium, I guide organizations through Jira Service Management deployments, Server-to-Cloud migrations, custom automation rules, and governance hardening.'
                : 'Мій фокус — операційна модель, що стоїть за налаштуваннями: мінімум ручних операцій, чисті дані, оптимізовані витрати на ліцензії та платформа, яку команда може підтримувати самостійно. Разом із Alluvium я допомагаю впроваджувати JSM, проводити міграції в Cloud та вибудовувати стандарти безпеки.'}
            </p>

            <p>
              {isEn
                ? 'Too many Atlassian setups degenerate into tool sprawl where engineers fight confusing validation rules and managers struggle to extract a coherent report. By aligning Jira and JSM with practical delivery rhythms, Atlassian becomes a catalyst for momentum rather than an administrative tax.'
                : 'Занадто часто системи Atlassian перетворюються на лабіринт, де інженери змушені боротися із заплутаними екранами, а лідери не можуть отримати достовірні звіти. Налагоджуючи Jira та JSM відповідно до реальних ритмів розробки, ми робимо платформу надійним двигуном робочих процесів.'}
            </p>

            {/* Principles Checklist */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                {isEn ? 'Operating Principles' : 'Операційні принципи'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {principles.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-[#161619]"
                  >
                    <div className="flex items-start gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal pl-6">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
