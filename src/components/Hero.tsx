import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Layers, Award, Terminal, Calendar, MessageSquare } from 'lucide-react';
import { Language } from '../types/index.ts';

interface HeroProps {
  lang: Language;
  onOpenContact: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContact, onOpenBooking }) => {
  const isEn = lang === 'en';

  return (
    <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subdued Kicker (Zero-Pill Discipline) */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Jira Expert & Atlassian Consultant</span>
          <span className="text-neutral-400 dark:text-neutral-600">/</span>
          <span className="text-neutral-500 dark:text-neutral-400">Alluvium Engineering Team</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100 max-w-4xl leading-[1.1] mb-6 text-balance">
          {isEn ? (
            <>
              I design Atlassian systems that{' '}
              <span className="text-blue-600 dark:text-blue-400 font-normal">stay useful</span> as teams scale.
            </>
          ) : (
            <>
              Системи Atlassian, які{' '}
              <span className="text-blue-600 dark:text-blue-400 font-normal">залишаються керованими</span> зі зростанням команд.
            </>
          )}
        </h1>

        {/* Lead Prose */}
        <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed mb-10">
          {isEn
            ? 'I turn Jira, JSM, Confluence, and Assets into an operating system for delivery — with clearer ownership, less manual work, and reporting leaders can trust.'
            : 'Я перетворюю Jira, JSM, Confluence та Assets на операційну систему для розробки — з чіткою відповідальністю, мінімумом ручної праці та прозорою звітністю для керівництва.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={onOpenBooking}
            type="button"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded transition-colors shadow-sm cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
            <span>{isEn ? 'Book a Discovery Call' : 'Забронювати дзвінок'}</span>
            <span className="text-[11px] font-mono text-blue-200 bg-blue-700/60 px-1.5 py-0.5 rounded ml-1">30 min</span>
          </button>

          <button
            onClick={onOpenContact}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-neutral-500" />
            <span>{isEn ? 'Send Architecture Brief' : 'Надіслати бриф'}</span>
          </button>

          <a
            href="#work"
            className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <span>{isEn ? 'See selected work ↓' : 'Переглянути кейси ↓'}</span>
          </a>

          <a
            href="#assessment"
            className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <span>{isEn ? 'Run health assessment →' : 'Швидка діагностика →'}</span>
          </a>
        </div>

        {/* Credibility Grid (4-Column strip strictly formatted) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-left">
          <div className="p-4 rounded border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#161619]">
            <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 mb-2">
              <Layers className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-mono">{isEn ? 'EXPERIENCE' : 'ДОСВІД'}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-neutral-900 dark:text-neutral-100 tabular-nums">
              8+
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {isEn ? 'years of hands-on delivery' : 'років практичної реалізації'}
            </div>
          </div>

          <div className="p-4 rounded border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#161619]">
            <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 mb-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-mono">{isEn ? 'STANDARDS' : 'СТАНДАРТИ'}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-neutral-900 dark:text-neutral-100 tabular-nums">
              6
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {isEn ? 'Atlassian certifications' : 'сертифікацій Atlassian'}
            </div>
          </div>

          <div className="p-4 rounded border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#161619]">
            <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 mb-2">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-mono">{isEn ? 'DEPLOYMENT' : 'ДЕПЛОЙМЕНТ'}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-neutral-900 dark:text-neutral-100">
              Cloud + DC
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {isEn ? 'platform experience' : 'досвід на обох платформах'}
            </div>
          </div>

          <div className="p-4 rounded border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#161619]">
            <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 mb-2">
              <ShieldCheck className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-mono">{isEn ? 'GOVERNANCE' : 'БЕЗПЕКА'}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-neutral-900 dark:text-neutral-100">
              Enterprise
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {isEn ? 'security & compliance focus' : 'фокус на аудиті та надійності'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
