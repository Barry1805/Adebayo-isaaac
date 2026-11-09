import React, { useState } from 'react';
import { ShieldCheck, ArrowUpRight, Check, ExternalLink, Award, Copy, CheckCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/content.ts';
import { Certification, Language } from '../types/index.ts';

interface CredentialsProps {
  lang: Language;
}

export const Credentials: React.FC<CredentialsProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(code);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="credentials" className="py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              {isEn ? 'CREDENTIALS OVERVIEW' : 'ОГЛЯД СЕРТИФІКАЦІЇ'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              {isEn ? 'Certified depth, practical range.' : 'Сертифікована глибина, практичний діапазон.'}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
              {isEn
                ? 'Official certifications validated by Atlassian University and CertMetrics transcript registry.'
                : 'Офіційні сертифікації, підтверджені Atlassian University та публічним реєстром CertMetrics.'}
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/isaac-adebayo-66304223a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 border border-neutral-300 dark:border-neutral-700 rounded bg-white dark:bg-[#161619] transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>{isEn ? 'Verify credentials on LinkedIn' : 'Переглянути сертифікати в LinkedIn'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Certifications List */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-[#161619] overflow-hidden divide-y divide-neutral-200 dark:divide-neutral-800">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50/60 dark:hover:bg-[#1a1a1e] transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="font-mono text-xs text-neutral-400 w-6 shrink-0">
                  {cert.number}
                </span>

                <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      {cert.title}
                    </h3>
                    {cert.code && (
                      <button
                        onClick={() => handleCopyCode(cert.code!)}
                        type="button"
                        title="Click to copy credential code"
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <span>{cert.code}</span>
                        {copiedId === cert.code ? (
                          <CheckCheck className="w-3 h-3 text-emerald-500" />
                        ) : (
                          <Copy className="w-2.5 h-2.5 text-neutral-400" />
                        )}
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    <span>{cert.issuedBy}</span>
                    <span>·</span>
                    <span className="line-clamp-1">{cert.skills.slice(0, 3).join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Verify affordance */}
              <div className="flex items-center gap-3 shrink-0 pl-10 md:pl-0">
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 rounded transition-colors whitespace-nowrap"
                  >
                    <span>{isEn ? 'Verify' : 'Перевірити'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                    <Check className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Certified' : 'Підтверджено'}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
