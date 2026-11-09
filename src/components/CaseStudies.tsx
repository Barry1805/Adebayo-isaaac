import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, X, Shield, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/content.ts';
import { CaseStudy, Language } from '../types/index.ts';

interface CaseStudiesProps {
  lang: Language;
  onOpenContact: (topic?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ lang, onOpenContact }) => {
  const isEn = lang === 'en';
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filters = [
    { id: 'all', label: isEn ? 'All Engagements' : 'Всі кейси' },
    { id: 'security', label: isEn ? 'Security & Compliance' : 'Безпека та аудит' },
    { id: 'itsm', label: isEn ? 'ITSM Operations' : 'ITSM та підтримка' },
    { id: 'multiclient', label: isEn ? 'Multi-Client Architecture' : 'Мультитенентність' },
    { id: 'migration', label: isEn ? 'Migration & Governance' : 'Міграція та стандарти' },
  ];

  const filteredCases = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category === activeFilter);

  return (
    <section id="work" className="py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              {isEn ? 'SELECTED WORK' : 'ОБРАНІ КЕЙСИ'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              {isEn ? 'Complex systems, made operable.' : 'Складні системи, зроблені керованими.'}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
              {isEn
                ? 'Anonymized engagements across regulated, service, and multi-team environments.'
                : 'Анонімізовані проєкти у регульованих індустріях, сервісних організаціях та масштабованих середовищах.'}
            </p>
          </div>

          {/* Clean Segmented Filter Bar (Interactive Buttons Allowed under §1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800/90 rounded-lg border border-neutral-200 dark:border-neutral-700">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                  activeFilter === filter.id
                    ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((caseItem) => (
            <article
              key={caseItem.id}
              className="group p-6 sm:p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161619] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Editorial numbering + Unboxed sector metadata */}
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800/80 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">{caseItem.number}</span>
                    <span>·</span>
                    <span>{caseItem.sector[lang]}</span>
                  </div>
                  {caseItem.metric && (
                    <span className="text-blue-600 dark:text-blue-400 font-semibold font-sans">
                      {caseItem.metric.value}
                    </span>
                  )}
                </div>

                {/* Case Study Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-950 dark:text-neutral-100 mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {caseItem.title[lang]}
                </h3>

                {/* 3-Part Narrative: Context / Intervention / Outcome */}
                <div className="space-y-4 text-sm leading-relaxed mb-6">
                  <div>
                    <div className="text-xs font-mono uppercase text-neutral-400 dark:text-neutral-500 mb-1">
                      {isEn ? 'Context' : 'Контекст'}
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      {caseItem.context[lang]}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase text-neutral-400 dark:text-neutral-500 mb-1">
                      {isEn ? 'Intervention' : 'Що було зроблено'}
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      {caseItem.intervention[lang]}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase text-neutral-400 dark:text-neutral-500 mb-1">
                      {isEn ? 'Outcome' : 'Результат'}
                    </div>
                    <p className="text-neutral-900 dark:text-neutral-100 font-medium">
                      {caseItem.outcome[lang]}
                    </p>
                    {caseItem.metric && (
                      <div className="mt-1 text-xs text-blue-600 dark:text-blue-400 font-mono">
                        {caseItem.metric.value} — {caseItem.metric.label[lang]}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions & Tool metadata */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-neutral-500 font-mono">
                  {caseItem.tools.slice(0, 3).map((tool, idx) => (
                    <span key={idx}>
                      {tool}{idx < 2 ? ' / ' : ''}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCase(caseItem)}
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{isEn ? 'Technical Details' : 'Деталі архітектури'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Deep-Dive Technical Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-2xl bg-white dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 rounded-lg p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">
                  CASE {selectedCase.number} · {selectedCase.sector[lang]}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {selectedCase.title[lang]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <div className="p-4 rounded bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                <div className="text-xs font-mono text-neutral-400 mb-1 uppercase">
                  {isEn ? 'Context & Problem Statement' : 'Контекст та проблема'}
                </div>
                <p className="text-neutral-800 dark:text-neutral-200 font-medium">
                  {selectedCase.context[lang]}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  {isEn ? 'Technical Interventions & Operating Rules' : 'Технічні інтервенції та правила'}
                </h4>
                <ul className="space-y-2.5">
                  {selectedCase.technicalHighlights[lang].map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40">
                <div className="text-xs font-mono text-blue-700 dark:text-blue-400 mb-1 uppercase">
                  {isEn ? 'Business & Governance Outcome' : 'Бізнесовий та комплаєнс результат'}
                </div>
                <p className="text-neutral-900 dark:text-neutral-100 font-medium">
                  {selectedCase.outcome[lang]}
                </p>
                {selectedCase.metric && (
                  <div className="mt-2 text-xs font-mono text-blue-600 dark:text-blue-400">
                    Key Metric: {selectedCase.metric.value} ({selectedCase.metric.label[lang]})
                  </div>
                )}
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-neutral-400 mb-2">
                  {isEn ? 'Stack & Integrations' : 'Стек інструментів'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                {isEn ? 'Anonymized client reference' : 'Анонімізований клієнтський кейс'}
              </span>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  onOpenContact(`Case ${selectedCase.number}: ${selectedCase.title[lang]}`);
                }}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
              >
                <span>{isEn ? 'Inquire about similar scope' : 'Обговорити схожий проєкт'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
