import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ENGAGEMENT_TIERS } from '../data/content.ts';
import { Language } from '../types/index.ts';

interface EngagementTiersProps {
  lang: Language;
  onSelectTier: (tierTitle: string) => void;
}

export const EngagementTiers: React.FC<EngagementTiersProps> = ({ lang, onSelectTier }) => {
  const isEn = lang === 'en';

  return (
    <section className="py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {isEn ? 'ENGAGEMENT MODELS' : 'ФОРМАТИ СПІВПРАЦІ'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {isEn ? 'Start with the level of certainty you need.' : 'Почніть із комфортного для вас рівня визначеності.'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2">
            {isEn
              ? 'From focused platform advisory to end-to-end architectural delivery, engagements are structured around clear deliverables.'
              : 'Від точкових консультацій до повного інженерного впровадження — співпраця будується навколо чітких результатів.'}
          </p>
        </div>

        {/* 4 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGAGEMENT_TIERS.map((tier) => (
            <div
              key={tier.number}
              className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#161619] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                  <span>FORMAT {tier.number}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">SCOPED</span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {tier.title[lang]}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                  {tier.description[lang]}
                </p>

                <div className="pt-2 pb-4">
                  <div className="text-[11px] font-mono uppercase text-neutral-400 mb-2">
                    {isEn ? 'Key Deliverables' : 'Ключові результати'}
                  </div>
                  <div className="space-y-2">
                    {tier.deliverables[lang].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => onSelectTier(tier.title[lang])}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 border border-neutral-300 dark:border-neutral-700 hover:border-blue-500 rounded bg-white dark:bg-neutral-800/80 transition-colors"
                >
                  <span>{isEn ? 'Select this scope' : 'Обрати цей формат'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
