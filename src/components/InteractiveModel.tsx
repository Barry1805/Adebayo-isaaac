import React, { useState } from 'react';
import { 
  GitBranch, 
  Layers, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Cpu, 
  Database, 
  FileText, 
  Clock, 
  Share2,
  Zap,
  ZoomIn
} from 'lucide-react';
import { Language } from '../types/index.ts';

interface InteractiveModelProps {
  lang: Language;
}

type ScenarioKey = 'incident' | 'release' | 'assets' | 'multitenant';
type SystemNodeKey = 'jira' | 'jsm' | 'confluence' | 'assets';

export const InteractiveModel: React.FC<InteractiveModelProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>('incident');
  const [selectedNode, setSelectedNode] = useState<SystemNodeKey>('jsm');
  const [viewMode, setViewMode] = useState<'diagram' | 'blueprint'>('diagram');

  const scenarios: Record<ScenarioKey, {
    title: { en: string; uk: string };
    input: { en: string; uk: string };
    systemPath: SystemNodeKey[];
    impact: { en: string; uk: string };
    automation: { en: string; uk: string };
    audit: { en: string; uk: string };
  }> = {
    incident: {
      title: {
        en: 'P1 Incident Escalation & On-Call',
        uk: 'P1 Інцидент: Ескалація та чергування'
      },
      input: {
        en: 'High-severity service degradation reported via monitoring webhook or portal.',
        uk: 'Критична деградація сервісу з моніторингу або клієнтського порталу.'
      },
      systemPath: ['jsm', 'jira', 'confluence'],
      impact: {
        en: '40% reduction in MTTR. Automated bridge call, SLA timer freeze on resolution, post-mortem created.',
        uk: 'Скорочення MTTR на ~40%. Автоматичний дзвінок черговим, зупинка SLA та шаблон ретроспективи.'
      },
      automation: {
        en: 'Webhook triggers Opsgenie paging -> P1 ticket generated in JSM -> Confluence post-mortem drafted automatically.',
        uk: 'Вебхук викликає пейджинг Opsgenie -> створюється P1 тікет у JSM -> драфт ретроспективи в Confluence.'
      },
      audit: {
        en: 'Every status transition and SLA breach recorded with second-precision audit timestamps.',
        uk: 'Кожна зміна статусу та факт SLA фіксуються із секундною точністю в журналі аудиту.'
      }
    },
    release: {
      title: {
        en: 'Cross-Functional Release Governance',
        uk: 'Управління міжкомандним релізом'
      },
      input: {
        en: '4 engineering teams committing code into 1 unified production release window.',
        uk: '4 команди розробки готують зміни до спільного релізу в продакшн.'
      },
      systemPath: ['jira', 'confluence', 'assets'],
      impact: {
        en: 'Zero surprise dependencies. Automated release notes, automated test pass gating, risk classification.',
        uk: 'Жодних прихованих залежностей. Автоматичні реліз-ноти, гейти тестування та оцінка ризиків.'
      },
      automation: {
        en: 'Branch merge triggers Jira issue link -> Xray test execution validates suite -> Approval gate checks CAB in JSM.',
        uk: 'Злиття гілки оновлює тікет Jira -> валідація Xray перевіряє тести -> узгодження CAB у JSM.'
      },
      audit: {
        en: 'Full traceability from commit hash to signed-off change request.',
        uk: 'Повна простежуваність від хешу коміту до підписаного запиту на зміни.'
      }
    },
    assets: {
      title: {
        en: 'Enterprise CMDB & Asset Lifecycle',
        uk: 'CMDB та життєвий цикл IT-активів'
      },
      input: {
        en: 'New employee onboarding or cloud resource deployment request.',
        uk: 'Онбординг нового працівника або запит на виділення хмарної інфраструктури.'
      },
      systemPath: ['assets', 'jsm', 'jira'],
      impact: {
        en: 'Zero license leakage. Complete hardware/software mapping with automated reclamation on offboarding.',
        uk: 'Жодної втрати ліцензій. Повний облік "залізо/софт" з автоматичним відкликанням при звільненні.'
      },
      automation: {
        en: 'HR system syncs user -> JSM spawns hardware procurement task -> Assets schema updates owner and warranty.',
        uk: 'HR-система синхронізує користувача -> JSM генерує задачі на видачу -> Assets оновлює власника.'
      },
      audit: {
        en: 'Hardware custody chain and software license allocations ready for ISO/SOC2 audits.',
        uk: 'Ланцюг передачі обладнання та розподіл ліцензій повністю готові до аудиту SOC2/ISO.'
      }
    },
    multitenant: {
      title: {
        en: 'Multi-Tenant Service Desk Isolation',
        uk: 'Ізоляція мультитенентного сервіс-деску'
      },
      input: {
        en: 'External clients submitting private support tickets into a centralized provider instance.',
        uk: 'Зовнішні клієнти подають конфіденційні звернення в єдиний інстанс провайдера.'
      },
      systemPath: ['jsm', 'assets', 'jira'],
      impact: {
        en: '100% data segregation. Custom client portal themes, automated billable hour exports, SLA guarantees.',
        uk: '100% ізоляція даних. Індивідуальні брендовані портали, автоматичний білінг та гарантії SLA.'
      },
      automation: {
        en: 'Organization domain mapping sets security level -> Engineer worklogs aggregate to monthly billing ledger.',
        uk: 'Домен клієнта встановлює рівень безпеки -> трудовитрати інженерів формують звіт для білінгу.'
      },
      audit: {
        en: 'Strict issue security schemes prevent cross-tenant search or inadvertent notification leaks.',
        uk: 'Суворі схеми Issue Security гарантують відсутність доступу між різними замовниками.'
      }
    }
  };

  const nodeDetails: Record<SystemNodeKey, {
    name: string;
    role: { en: string; uk: string };
    keyFeatures: { en: string[]; uk: string[] };
    standards: { en: string; uk: string };
  }> = {
    jira: {
      name: 'Jira Software',
      role: {
        en: 'Engineering engine & backlog source of truth',
        uk: 'Інженерне ядро та єдине джерело правди про беклог'
      },
      keyFeatures: {
        en: ['Normalized workflow schemes', 'Cross-project board aggregation', 'Strict field configurations', 'Automated transitions'],
        uk: ['Уніфіковані схеми процесів', 'Агрегація дошок між проєктами', 'Мінімалістичні конфігурації полів', 'Автоматичні переходи']
      },
      standards: {
        en: 'No unbounded custom fields; role-based permissions instead of individual user grants.',
        uk: 'Жодних хаотичних кастомних полів; права за ролями замість персональних дозволів.'
      }
    },
    jsm: {
      name: 'Jira Service Management',
      role: {
        en: 'Unified operations, triage, SLAs & customer intake',
        uk: 'Єдиний операційний центр, черги, SLA та прийом звернень'
      },
      keyFeatures: {
        en: ['Tier 1–3 queue hierarchy', 'Business-calendar SLA timers', 'Incident command center & Opsgenie', 'Customer portal groups'],
        uk: ['Ієрархія черг L1–L3', 'Таймери SLA за робочими календарями', 'Командний центр інцидентів та Opsgenie', 'Групи сервісних порталів']
      },
      standards: {
        en: 'Predictable triage within 15 minutes; zero unassigned tickets lingering in root queues.',
        uk: 'Передбачувана обробка до 15 хвилин; жодного тікета без призначеного власника.'
      }
    },
    confluence: {
      name: 'Confluence',
      role: {
        en: 'Living architecture, SOPs & decision records',
        uk: 'Жива архітектура, регламенти та журнал рішень (ADR)'
      },
      keyFeatures: {
        en: ['Dynamic Jira report macros', 'Automated post-mortem templates', 'Architecture Decision Records (ADRs)', 'Customer knowledge base sync'],
        uk: ['Динамічні макроси звітів Jira', 'Автоматичні шаблони ретроспектив', 'Журнали архітектурних рішень (ADR)', 'База знань для клієнтів']
      },
      standards: {
        en: 'Documentation tied directly to operational Jira issues, eliminating stale wiki pages.',
        uk: 'Документація прив’язана безпосередньо до задач Jira, без застарілих "мертвих" сторінок.'
      }
    },
    assets: {
      name: 'Assets (Insight CMDB)',
      role: {
        en: 'Hardware, software, cloud & contract object graph',
        uk: 'Граф зв’язків обладнання, ПЗ, хмарних ресурсів та договорів'
      },
      keyFeatures: {
        en: ['Hardware & laptop custody tracking', 'Software license entitlement sync', 'Cloud resource CMDB schema', 'Vendor contract SLA metadata'],
        uk: ['Облік закріплення ноутбуків та техніки', 'Контроль використання ліцензій ПЗ', 'Схема хмарних ресурсів у CMDB', 'Метадані договорів та вендорські SLA']
      },
      standards: {
        en: 'Automated reconciliation preventing ghost assets and unallocated license spend.',
        uk: 'Автоматична звірка для усунення "мертвих" активів та переплат за ліцензії.'
      }
    }
  };

  return (
    <section className="py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              {isEn ? 'INTERACTIVE OPERATING MODEL' : 'ІНТЕРАКТИВНА МОДЕЛЬ'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              {isEn ? 'A system of work, not a collection of tools.' : 'Система роботи, а не набір розрізнених інструментів.'}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
              {isEn
                ? 'Select a scenario below to explore how work enters, transitions through the core system, and translates into predictable outcomes.'
                : 'Оберіть сценарій нижче, щоб побачити, як завдання надходять, проходять через платформу та перетворюються на керований результат.'}
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-md shrink-0 border border-neutral-200 dark:border-neutral-700">
            <button
              onClick={() => setViewMode('diagram')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                viewMode === 'diagram'
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {isEn ? 'Data Flow Model' : 'Модель потоків'}
            </button>
            <button
              onClick={() => setViewMode('blueprint')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors flex items-center gap-1.5 ${
                viewMode === 'blueprint'
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <ZoomIn className="w-3.5 h-3.5 text-blue-500" />
              <span>{isEn ? 'Architecture Blueprint' : 'Схема архітектури'}</span>
            </button>
          </div>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {(Object.keys(scenarios) as ScenarioKey[]).map((key) => {
            const sc = scenarios[key];
            const isActive = activeScenario === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveScenario(key);
                  setSelectedNode(sc.systemPath[0]);
                }}
                type="button"
                className={`text-left p-3.5 rounded border transition-all ${
                  isActive
                    ? 'border-blue-600 dark:border-blue-500 bg-blue-50/60 dark:bg-blue-950/20 text-blue-950 dark:text-blue-100 ring-1 ring-blue-600 dark:ring-blue-500'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-[#161619] text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 mb-1">
                  {key === 'incident' && 'P1 INCIDENT'}
                  {key === 'release' && 'CROSS-TEAM'}
                  {key === 'assets' && 'CMDB LIFECYCLE'}
                  {key === 'multitenant' && 'MULTI-CLIENT'}
                </div>
                <div className="text-xs sm:text-sm font-semibold leading-snug">
                  {sc.title[lang]}
                </div>
              </button>
            );
          })}
        </div>

        {viewMode === 'diagram' ? (
          /* Interactive Flow Diagram */
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50/50 dark:bg-[#161619] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Work Enters */}
              <div className="lg:col-span-3 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>{isEn ? 'Work Enters' : 'Початок роботи'}</span>
                </div>
                
                <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1d1d21] shadow-xs">
                  <div className="text-xs font-mono text-neutral-400 mb-1">
                    {isEn ? 'TRIGGER EVENT' : 'ТРИГЕР ПОДІЇ'}
                  </div>
                  <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-snug">
                    {scenarios[activeScenario].input[lang]}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">
                    {isEn ? 'Intake Channels' : 'Канали прийому'}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1.5">
                    <div className="flex items-center gap-2 p-2 rounded bg-neutral-100 dark:bg-neutral-800/60">
                      <GitBranch className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{isEn ? 'Software delivery & CI/CD' : 'Розробка ПЗ та CI/CD'}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-neutral-100 dark:bg-neutral-800/60">
                      <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>{isEn ? 'Portfolio & sprint planning' : 'Портфоліо та планування'}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-neutral-100 dark:bg-neutral-800/60">
                      <Users className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{isEn ? 'Cross-team service requests' : 'Міжкомандні сервісні запити'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column: Core System Engine */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{isEn ? 'System Engine' : 'Ядро системи Atlassian'}</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 lowercase">{isEn ? 'click node to inspect' : 'натисніть на вузол'}</span>
                </div>

                {/* 4 Interactive System Nodes Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {(['jira', 'jsm', 'confluence', 'assets'] as SystemNodeKey[]).map((key) => {
                    const isPartOfActiveScenario = scenarios[activeScenario].systemPath.includes(key);
                    const isSelected = selectedNode === key;

                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedNode(key)}
                        type="button"
                        className={`text-left p-4 rounded border transition-all relative ${
                          isSelected
                            ? 'border-blue-600 dark:border-blue-400 bg-white dark:bg-[#202025] shadow-md ring-1 ring-blue-500'
                            : isPartOfActiveScenario
                            ? 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1b1b1f] hover:border-blue-400'
                            : 'border-neutral-200 dark:border-neutral-850 bg-white/60 dark:bg-[#141416] opacity-60 hover:opacity-90'
                        }`}
                      >
                        {isPartOfActiveScenario && (
                          <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                          </span>
                        )}
                        <div className="flex items-center gap-2 mb-2">
                          {key === 'jira' && <GitBranch className="w-4 h-4 text-blue-500" />}
                          {key === 'jsm' && <ShieldAlert className="w-4 h-4 text-emerald-500" />}
                          {key === 'confluence' && <FileText className="w-4 h-4 text-amber-500" />}
                          {key === 'assets' && <Database className="w-4 h-4 text-purple-500" />}
                          <span className="text-xs font-mono font-medium text-neutral-400 uppercase">
                            {key}
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          {nodeDetails[key].name}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">
                          {nodeDetails[key].role[lang]}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Node Details Card */}
                <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c20] space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                    <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                      {nodeDetails[selectedNode].name} — {isEn ? 'Configuration Architecture' : 'Архітектура налаштування'}
                    </span>
                    <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
                      {isEn ? 'ACTIVE SPEC' : 'АКТИВНА СПЕЦИФІКАЦІЯ'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {nodeDetails[selectedNode].keyFeatures[lang].map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800 flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-neutral-700 dark:text-neutral-300">{isEn ? 'Standard:' : 'Стандарт:'}</strong>{' '}
                      {nodeDetails[selectedNode].standards[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Work Improves */}
              <div className="lg:col-span-4 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Work Improves' : 'Результати впровадження'}</span>
                </div>

                <div className="p-4 rounded border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/10 shadow-xs">
                  <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-1">
                    {isEn ? 'OPERATIONAL IMPACT' : 'ОПЕРАЦІЙНИЙ ЕФЕКТ'}
                  </div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
                    {scenarios[activeScenario].impact[lang]}
                  </p>
                </div>

                <div className="p-4 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1d1d21] space-y-3">
                  <div>
                    <div className="text-xs font-mono text-neutral-400 mb-1 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>{isEn ? 'AUTOMATION LOGIC' : 'ЛОГІКА АВТОМАТИЗАЦІЇ'}</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-mono">
                      {scenarios[activeScenario].automation[lang]}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="text-xs font-mono text-neutral-400 mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      <span>{isEn ? 'AUDIT & COMPLIANCE' : 'АУДИТ ТА КОМПЛАЄНС'}</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {scenarios[activeScenario].audit[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
                  <span>Standard workflows</span>
                  <span>·</span>
                  <span>Delivery visibility</span>
                  <span>·</span>
                  <span>Clear ownership</span>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* Technical Blueprint View */
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-neutral-950 text-neutral-100 p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-3">
              <span className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-blue-400" />
                <span>INTEGRATED ENTERPRISE ECOSYSTEM: ARCHITECTURE SCHEMATIC</span>
              </span>
              <span className="text-emerald-400 font-mono">SPEC v4.2 // AUDIT READY</span>
            </div>
            
            <div className="relative rounded overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <img
                src="/src/assets/images/system_architecture_blueprint_1794265607720.jpg"
                alt="Integrated Enterprise Ecosystem: Data Flow Diagram (Jira, Confluence, ESM, Assets)"
                className="w-full h-auto object-cover max-h-[540px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-neutral-950/90 backdrop-blur-sm border border-neutral-800 px-3 py-1.5 rounded text-xs font-mono text-neutral-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>REST API · Webhooks · Atlassian Guard · Assets CMDB Integration</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-neutral-400">
              <div className="p-3 bg-neutral-900/60 rounded border border-neutral-800/80">
                <div className="font-mono text-neutral-200 mb-1">01. INGESTION & TRIAGE</div>
                <p>Incoming incidents, tickets, and work items routed directly through declarative SLA rules without manual sorting.</p>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded border border-neutral-800/80">
                <div className="font-mono text-neutral-200 mb-1">02. EXECUTION ENGINE</div>
                <p>Jira Software and Service Management sync states, trigger downstream pipelines, and ensure field-level compliance.</p>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded border border-neutral-800/80">
                <div className="font-mono text-neutral-200 mb-1">03. KNOWLEDGE & CMDB</div>
                <p>Confluence living documentation and Assets object graph maintain single source of truth for audits and retrospectives.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
