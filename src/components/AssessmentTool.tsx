import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, ArrowRight, RotateCcw, Sparkles, Send } from 'lucide-react';
import { Language } from '../types/index.ts';

interface AssessmentToolProps {
  lang: Language;
  onApplyAssessmentToContact: (data: {
    deployment: string;
    teamSize: string;
    friction: string;
    recommendation: string;
  }) => void;
}

export const AssessmentTool: React.FC<AssessmentToolProps> = ({
  lang,
  onApplyAssessmentToContact,
}) => {
  const isEn = lang === 'en';

  const [step, setStep] = useState<number>(1);
  const [deployment, setDeployment] = useState<string>('Jira Cloud Enterprise');
  const [teamSize, setTeamSize] = useState<string>('500–2,500 users');
  const [friction, setFriction] = useState<string>('permissions');
  const [maturity, setMaturity] = useState<string>('legacy');

  const frictionOptions = [
    {
      id: 'permissions',
      label: isEn ? 'Permission Chaos & Audit Risk' : 'Хаос у правах доступу та ризики аудиту',
      desc: isEn
        ? 'Too many admins, public boards, no SSO/SCIM sync, or failed compliance checks.'
        : 'Забагато адмінів, публічні проєкти, відсутність SCIM або зауваження від аудиторів.'
    },
    {
      id: 'sla',
      label: isEn ? 'Slow Triage & Missed SLAs' : 'Повільний сапорт та порушення SLA',
      desc: isEn
        ? 'Customer tickets sit unassigned, escalations rely on chat, and MTTR is unpredictable.'
        : 'Тікети висять без призначених, ескалація в чатах, а MTTR непередбачуваний.'
    },
    {
      id: 'bloat',
      label: isEn ? 'Workflow Bloat & Tool Sprawl' : 'Роздуті робочі процеси та хаос полів',
      desc: isEn
        ? 'Hundreds of unused custom fields, fragmented Jira instances, and messy status maps.'
        : 'Сотні зайвих полів, різні інстанси та неможливість звести аналітику.'
    },
    {
      id: 'licensing',
      label: isEn ? 'Uncontrolled License Spend' : 'Неконтрольовані витрати на ліцензії',
      desc: isEn
        ? 'Paying top tier for inactive accounts and overlapping Marketplace app subscriptions.'
        : 'Переплата за неактивних користувачів та дублюючі платні плагіни.'
    }
  ];

  // Compute calculated recommendations
  const getAnalysis = () => {
    let score = 58;
    let riskLabel = isEn ? 'High Governance Friction' : 'Високий операційний ризик';
    let recommendations: string[] = [];

    if (friction === 'permissions') {
      score = 52;
      riskLabel = isEn ? 'Elevated Access Exposure' : 'Ризик витоку прав та даних';
      recommendations = isEn
        ? [
            'Audit global project administrators and institute role-based security schemes',
            'Enforce Atlassian Guard SAML SSO with automated SCIM deprovisioning',
            'Configure issue-level security schemes for sensitive client and HR tickets'
          ]
        : [
            'Провести ревізію прав адмінів та запровадити рольові матриці',
            'Підключити Atlassian Guard SAML SSO з автоматичним відкликанням через SCIM',
            'Налаштувати схеми Issue Security для конфіденційних задач'
          ];
    } else if (friction === 'sla') {
      score = 64;
      riskLabel = isEn ? 'Service Delivery Bottleneck' : 'Вузьке місце у сервісній підтримці';
      recommendations = isEn
        ? [
            'Restructure Jira Service Management queues with strict L1–L3 triage logic',
            'Introduce business-calendar aware SLA timers with proactive breach paging',
            'Automate repetitive request fulfillment (passwords, software access) via Assets'
          ]
        : [
            'Реструктурувати черги JSM з чіткою логікою L1–L3',
            'Налаштувати точні таймери SLA з урахуванням робочих годин та оповіщень',
            'Автоматизувати виконання типових запитів через зв’язку з Assets'
          ];
    } else if (friction === 'bloat') {
      score = 48;
      riskLabel = isEn ? 'Critical Architectural Debt' : 'Критичний архітектурний борг';
      recommendations = isEn
        ? [
            'Rationalize custom fields (target: reduce redundant fields by >60%)',
            'Standardize divergent workflows down to 4–6 core enterprise lifecycles',
            'Consolidate orphaned Jira projects into unified portfolio hierarchies'
          ]
        : [
            'Очистити кастомні поля (ціль: скоротити надлишкові поля на понад 60%)',
            'Стандартизувати робочі процеси до 4–6 базових життєвих циклів',
            'Об’єднати розпорошені проєкти в єдину структуру портфоліо'
          ];
    } else {
      score = 61;
      riskLabel = isEn ? 'Sub-optimal Licensing Efficiency' : 'Неефективне ліцензування';
      recommendations = isEn
        ? [
            'Audit active vs dormant user sessions; automate 90-day inactivity pruning',
            'Review Marketplace plugins for native automation replacements',
            'Rightsize Cloud subscription tiers based on real feature consumption'
          ]
        : [
            'Провести аудит активних сесій та налаштувати видалення неактивних акаунтів',
            'Замінити надлишкові плагіни вбудованою автоматизацією Atlassian',
            'Оптимізувати рівні підписок на основі реального використання функцій'
          ];
    }

    return { score, riskLabel, recommendations };
  };

  const analysis = getAnalysis();

  const handleApplyToContact = () => {
    onApplyAssessmentToContact({
      deployment,
      teamSize,
      friction: frictionOptions.find(f => f.id === friction)?.label || friction,
      recommendation: analysis.recommendations[0],
    });
  };

  return (
    <section id="assessment" className="py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121214]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {isEn ? 'INTERACTIVE DIAGNOSTIC' : 'ІНТЕРАКТИВНА ДІАГНОСТИКА'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {isEn ? 'Atlassian Operating Health Assessment' : 'Оцінка стану операційної моделі Atlassian'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3">
            {isEn
              ? 'Select your organization parameters to identify structural bottlenecks, governance exposure, and high-impact interventions.'
              : 'Вкажіть параметри вашої організації, щоб виявити приховані вузькі місця, ризики безпеки та пріоритетні покращення.'}
          </p>
        </div>

        {/* Assessment Card */}
        <div className="p-6 sm:p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#161619] shadow-xs">
          
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <span>STEP 01 OF 02: ENVIRONMENT & SCALE</span>
                <span className="text-blue-600 dark:text-blue-400">INPUT CONFIGURATION</span>
              </div>

              {/* Question 1: Platform */}
              <div>
                <label className="block text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2 uppercase">
                  {isEn ? 'Current Atlassian Environment' : 'Поточне середовище Atlassian'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Jira Cloud (Standard / Premium)',
                    'Jira Cloud Enterprise',
                    'Jira Data Center (Self-Hosted)',
                    'Hybrid / Planning Cloud Migration'
                  ].map((env) => (
                    <button
                      key={env}
                      onClick={() => setDeployment(env)}
                      type="button"
                      className={`text-left p-3 rounded border text-xs sm:text-sm font-medium transition-all ${
                        deployment === env
                          ? 'border-blue-600 dark:border-blue-500 bg-white dark:bg-[#1f1f24] text-neutral-900 dark:text-white ring-1 ring-blue-500'
                          : 'border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-[#141416] text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                      }`}
                    >
                      {env}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Team scale */}
              <div>
                <label className="block text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2 uppercase">
                  {isEn ? 'User Base & Seat Tier' : 'Кількість користувачів'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['25–150 users', '150–500 users', '500–2,500 users', '2,500+ users'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setTeamSize(size)}
                      type="button"
                      className={`p-2.5 rounded border text-xs font-mono font-medium text-center transition-all ${
                        teamSize === size
                          ? 'border-blue-600 dark:border-blue-500 bg-white dark:bg-[#1f1f24] text-blue-600 dark:text-blue-400 ring-1 ring-blue-500'
                          : 'border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-[#141416] text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                >
                  <span>{isEn ? 'Next: Operational Challenges' : 'Далі: Операційні виклики'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <span>STEP 02 OF 02: PRIMARY FRICTION & MATURITY</span>
                <button
                  onClick={() => setStep(1)}
                  type="button"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  {isEn ? '← Back' : '← Назад'}
                </button>
              </div>

              {/* Question 3: Friction */}
              <div>
                <label className="block text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2 uppercase">
                  {isEn ? 'Where is the greatest drag on your team?' : 'Де виникає найбільше тертя у вашій системі?'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {frictionOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setFriction(opt.id)}
                      type="button"
                      className={`text-left p-4 rounded border transition-all ${
                        friction === opt.id
                          ? 'border-blue-600 dark:border-blue-500 bg-white dark:bg-[#1f1f24] text-neutral-900 dark:text-white ring-1 ring-blue-500'
                          : 'border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-[#141416] text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-semibold mb-1">{opt.label}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  type="button"
                  className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  {isEn ? 'Modify environment parameters' : 'Змінити параметри'}
                </button>
                <button
                  onClick={() => setStep(3)}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                >
                  <span>{isEn ? 'Generate Diagnostic Report' : 'Згенерувати звіт аудиту'}</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <span>DIAGNOSTIC REPORT · TAILORED ARCHITECTURE SYNTHESIS</span>
                <button
                  onClick={() => setStep(1)}
                  type="button"
                  className="inline-flex items-center gap-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{isEn ? 'Recalculate' : 'Перерахувати'}</span>
                </button>
              </div>

              {/* Scorecard Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c20]">
                  <div className="text-xs font-mono text-neutral-500 uppercase">
                    {isEn ? 'Platform Health Index' : 'Індекс керованості'}
                  </div>
                  <div className="text-3xl font-mono font-bold text-amber-500 dark:text-amber-400 mt-1 tabular-nums">
                    {analysis.score} / 100
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {isEn ? 'Elevated configuration friction' : 'Потребує оптимізації'}
                  </div>
                </div>

                <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c20]">
                  <div className="text-xs font-mono text-neutral-500 uppercase">
                    {isEn ? 'Assessed Risk Profile' : 'Профіль ризику'}
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-2 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{analysis.riskLabel}</span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {deployment} · {teamSize}
                  </div>
                </div>

                <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c20]">
                  <div className="text-xs font-mono text-neutral-500 uppercase">
                    {isEn ? 'Recommended Scope' : 'Рекомендований формат'}
                  </div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">
                    {isEn ? 'Technical Assessment + Roadmap' : 'Технічний аудит + дорожня карта'}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {isEn ? '2–3 week structured sprint' : '2–3 тижні структурованої роботи'}
                  </div>
                </div>
              </div>

              {/* Actionable Recommendations */}
              <div className="p-5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c20] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {isEn ? 'Prioritized Architectural Interventions' : 'Пріоритетні архітектурні кроки'}
                </div>
                <div className="space-y-2.5">
                  {analysis.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transfer to Inquiry */}
              <div className="p-4 rounded border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-700 dark:text-neutral-300 text-center sm:text-left">
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {isEn ? 'Ready to remediate these findings?' : 'Готові впровадити ці зміни на практиці?'}
                  </div>
                  <div className="text-neutral-500 dark:text-neutral-400">
                    {isEn
                      ? 'Pre-fill the inquiry form below with this assessment summary.'
                      : 'Перенести цей аналіз безпосередньо у форму запиту нижче.'}
                  </div>
                </div>

                <button
                  onClick={handleApplyToContact}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors whitespace-nowrap shrink-0 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Transfer to Inquiry Form' : 'Заповнити форму запиту'}</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
