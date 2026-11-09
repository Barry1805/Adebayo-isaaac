import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  Layers, 
  Code2, 
  Headphones, 
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CAPABILITY_PILLARS, TYPICAL_STARTING_POINTS } from '../data/content.ts';
import { Language } from '../types/index.ts';

interface ExpertiseProps {
  lang: Language;
}

export const Expertise: React.FC<ExpertiseProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const [expandedStartingPoint, setExpandedStartingPoint] = useState<string | null>('workflows');

  const pillarIcons = [
    <Headphones className="w-5 h-5 text-blue-500" key="01" />,
    <ShieldCheck className="w-5 h-5 text-indigo-500" key="02" />,
    <Layers className="w-5 h-5 text-amber-500" key="03" />,
    <Code2 className="w-5 h-5 text-emerald-500" key="04" />,
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {isEn ? 'CORE EXPERTISE' : 'ЕКСПЕРТИЗА'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {isEn ? 'Configure less. Make the system operable.' : 'Мінімум зайвих налаштувань. Максимум керованості.'}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            {isEn
              ? 'The work sits between platform architecture and day-to-day operations. The objective is not more Jira — it is a clearer way for teams to work.'
              : 'Моя робота лежить на перетині архітектури платформи та щоденних операційних процесів. Мета — не "більше Jira", а прозорий і зручний спосіб взаємодії команд.'}
          </p>
        </div>

        {/* 4 Core Capability Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CAPABILITY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161619] hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700">
                    {pillarIcons[idx]}
                  </div>
                  <span className="text-xs font-mono text-neutral-400">PILLAR {pillar.number}</span>
                </div>
                <span className="text-xs font-mono text-neutral-500">ENTERPRISE GRADE</span>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {pillar.title[lang]}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                {pillar.description[lang]}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                {pillar.items[lang].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Typical Starting Points (Interactive Accordion) */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-[#161619] p-6 sm:p-8">
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
              {isEn ? 'COMMON SYMPTOMS' : 'ТИПОВІ ТОЧКИ ВХОДУ'}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {isEn ? 'Typical starting points' : 'З чого зазвичай починається співпраця'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {isEn
                ? 'These recurring patterns signal that Jira has outgrown its initial ad-hoc setup.'
                : 'Ці повторювані ознаки вказують на те, що налаштування системи переросли початковий формат.'}
            </p>
          </div>

          <div className="space-y-3">
            {TYPICAL_STARTING_POINTS.map((sp) => {
              const isExpanded = expandedStartingPoint === sp.id;
              return (
                <div
                  key={sp.id}
                  className="rounded border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#1a1a1e] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedStartingPoint(isExpanded ? null : sp.id)}
                    type="button"
                    className="w-full flex items-center justify-between p-4 text-left text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{sp.title[lang]}</span>
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-neutral-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 border-t border-neutral-100 dark:border-neutral-800 text-xs sm:text-sm space-y-3">
                      <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <strong className="text-neutral-900 dark:text-neutral-200">{isEn ? 'Symptom:' : 'Проблема:'}</strong>{' '}
                        {sp.description[lang]}
                      </div>
                      <div className="p-3 rounded bg-blue-50/60 dark:bg-blue-950/20 text-blue-950 dark:text-blue-100 border border-blue-200/60 dark:border-blue-900/40 text-xs font-mono">
                        <strong className="font-semibold">{isEn ? 'Remedy:' : 'Рішення:'}</strong> {sp.remedy[lang]}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
