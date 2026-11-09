import { CaseStudy, Certification, CapabilityPillar, EngagementTier } from '../types/index.ts';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    number: '01',
    sector: {
      en: 'Enterprise Support · ITSM & ESM',
      uk: 'Корпоративна підтримка · ITSM та ESM',
    },
    category: 'itsm',
    title: {
      en: 'Multi-tier Jira Service Management optimization',
      uk: 'Оптимізація багаторівневої підтримки в Jira Service Management',
    },
    context: {
      en: 'A growing enterprise needed a unified service desk across IT, DevOps, and Facilities with automated escalation, strict SLAs, and minimal response delays.',
      uk: 'Зростаюча компанія потребувала єдиного сервіс-деску для IT, DevOps та адміністративних служб із автоматичною ескалацією та точними SLA.',
    },
    intervention: {
      en: 'Engineered unified intake request types, calendar-aware SLA metrics, automated ticket assignment by technician specialization, and incident on-call escalation in JSM.',
      uk: 'Спроєктовано єдині типи запитів, таймери SLA за робочими графіками, автопризначення інженерів за спеціалізацією та ескалацію інцидентів.',
    },
    outcome: {
      en: 'Over 45% reduction in first-response times, eliminating ticket bottlenecks and lost customer requests.',
      uk: 'Скорочення часу першої реакції на понад 45%, ліквідація "забутих" тікетів та прозорість для менеджменту.',
    },
    metric: {
      value: '-45%',
      label: {
        en: 'First-response time across enterprise service queues',
        uk: 'Час першої реакції у сервісних чергах',
      },
    },
    technicalHighlights: {
      en: [
        'Streamlined 8 fragmented intake portals into a unified, searchable customer service catalog',
        'Implemented smart triage automation rules routing tickets based on impact and urgency matrix',
        'Configured Assets (Insight CMDB) object schemas linking users to their assigned workstations and cloud accounts',
        'Automated post-incident report generation into Confluence spaces for root-cause retrospectives'
      ],
      uk: [
        'Об’єднано 8 розрізнених порталів у зручний каталог послуг для співробітників',
        'Впроваджено правила автоматизації для маршрутизації задач за матрицею терміновості',
        'Налаштовано схему Assets (CMDB) для прив’язки користувачів до обладнання та хмарних сервісів',
        'Автоматизовано створення ретроспектив у Confluence після закриття критичних інцидентів'
      ]
    },
    tools: ['Jira Service Management', 'Assets (Insight)', 'Automation for Jira', 'Opsgenie', 'Confluence']
  },
  {
    id: 'case-02',
    number: '02',
    sector: {
      en: 'Cloud Migration · Atlassian Systems',
      uk: 'Хмарна міграція · Системи Atlassian',
    },
    category: 'migration',
    title: {
      en: 'Jira Data Center to Atlassian Cloud Enterprise migration',
      uk: 'Міграція з Jira Data Center у Atlassian Cloud Enterprise',
    },
    context: {
      en: 'A technology firm operating heavily customized legacy Jira Server/DC instances needed a risk-free migration to Jira Cloud with clean data hygiene.',
      uk: 'Технологічна компанія зі застарілими інстансами Jira Server/DC потребувала безпечної міграції в Cloud із очищенням даних.',
    },
    intervention: {
      en: 'Executed pre-migration database audit, pruned 200+ redundant custom fields and orphaned schemes, validated marketplace app parity, and ran staging dry-runs.',
      uk: 'Проведено аудит бази даних, скорочено понад 200 дублюючих полів, перевірено сумісність плагінів та виконано тестові прогони міграції.',
    },
    outcome: {
      en: 'Zero data loss migration across 180,000+ issues with zero business disruption over a planned weekend cutover.',
      uk: 'Міграція без втрати даних понад 180 000 задач та без простоїв у робочі години під час вихідних.',
    },
    metric: {
      value: '180k+',
      label: {
        en: 'Historical issues successfully migrated with zero data loss',
        uk: 'Задач успішно перенесено без жодних втрат даних',
      },
    },
    technicalHighlights: {
      en: [
        'Utilized Jira Cloud Migration Assistant (JCMA) with custom scripting for advanced link validations',
        'Rationalized 42 legacy custom workflow schemes down to 5 standardized agile lifecycles',
        'Replaced expensive third-party Server plugins with native Cloud automations and lightweight Forge apps',
        'Designed post-migration team onboarding workshops and administrative handover documentation'
      ],
      uk: [
        'Використано JCMA зі спеціальними скриптами для валідації зв’язків та вкладень',
        'Уніфіковано 42 застарілі схеми процесів до 5 сучасних agile-життєвих циклів',
        'Замінено дорогі плагіни вбудованою хмарною автоматизацією та Forge',
        'Проведено навчання команди та передано повну документацію з адміністрування'
      ]
    },
    tools: ['Jira Cloud', 'JCMA', 'ScriptRunner', 'Atlassian Guard', 'Forge']
  },
  {
    id: 'case-03',
    number: '03',
    sector: {
      en: 'Engineering Delivery · Agile Governance',
      uk: 'Інженерна розробка · Agile управління',
    },
    category: 'security',
    title: {
      en: 'Cross-functional delivery pipeline & workflow unification',
      uk: 'Уніфікація пайплайну розробки та робочих процесів команд',
    },
    context: {
      en: 'Multiple product and engineering squads suffered from misaligned sprint definitions, inconsistent status meanings, and manual release tracking.',
      uk: 'Кілька продуктових та інженерних команд стикалися з неузгодженими статусами, хаосом у спринтах та ручним контролем релізів.',
    },
    intervention: {
      en: 'Standardized delivery lifecycles, mapped Git commits and pull requests directly to Jira epics, and configured automated release gating.',
      uk: 'Стандартизовано життєві цикли задач, підключено автооновлення статусів за подіями в Git та налаштовано контроль релізів.',
    },
    outcome: {
      en: 'End-to-end visibility from ideation to production deploy, cutting release coordination overhead by 60%.',
      uk: 'Наскрізна видимість від ідеї до продакшну, скорочення часу на координацію релізів на 60%.',
    },
    metric: {
      value: '60%',
      label: {
        en: 'Reduction in manual release tracking and sync meetings',
        uk: 'Скорочення часу на ручну синхронізацію релізів',
      },
    },
    technicalHighlights: {
      en: [
        'Integrated GitHub/GitLab webhooks to automatically transition issues on branch create and PR merge',
        'Structured Advanced Roadmaps hierarchies for executive portfolio predictability',
        'Standardized issue types, components, and priority schemas across all engineering squads',
        'Configured automated sprint health analytics and blocker escalation notifications'
      ],
      uk: [
        'Інтегровано вебхуки GitHub/GitLab для автоматичної зміни статусів задач',
        'Налаштовано ієрархію в Advanced Roadmaps для стратегічного планування',
        'Уніфіковано типи задач, компоненти та пріоритети для всіх підрозділів',
        'Впроваджено аналітику спринтів та сповіщення про заблоковані задачі'
      ]
    },
    tools: ['Jira Software Cloud', 'Advanced Roadmaps', 'GitHub / GitLab Integration', 'Automation for Jira', 'Confluence']
  },
  {
    id: 'case-04',
    number: '04',
    sector: {
      en: 'Governance · License & Asset Optimization',
      uk: 'Управління · Оптимізація ліцензій та активів',
    },
    category: 'multiclient',
    title: {
      en: 'Atlassian Guard security hardening & license rationalization',
      uk: 'Посилення безпеки з Atlassian Guard та оптимізація ліцензій',
    },
    context: {
      en: 'An enterprise was overpaying for unallocated Atlassian user tiers while suffering from uncontrolled admin privileges and lack of centralized SSO/SCIM.',
      uk: 'Компанія переплачувала за неактивні акаунти, маючи при цьому надмірну кількість адміністраторів та відсутність централізованого SSO.',
    },
    intervention: {
      en: 'Implemented Atlassian Guard with Okta/Azure AD SAML SSO, automated SCIM provisioning/deprovisioning, and audited global permissions.',
      uk: 'Впроваджено Atlassian Guard із Okta/Azure AD SSO, налаштовано автосинхронізацію користувачів через SCIM та очищено привілеї.',
    },
    outcome: {
      en: 'Reclaimed 28% of dormant license seats and secured all organizational data under strict enterprise identity controls.',
      uk: 'Звільнено 28% неактивних ліцензій та захищено корпоративні дані єдиною політикою авторизації.',
    },
    metric: {
      value: '28%',
      label: {
        en: 'Immediate reduction in recurring user license waste',
        uk: 'Зменшення щомісячних витрат на невикористані ліцензії',
      },
    },
    technicalHighlights: {
      en: [
        'Configured automated de-provisioning scripts revoking licenses after 45 days of dormancy',
        'Locked down Project Administration rights to prevent unauthorized custom field and workflow creation',
        'Established Issue Security Schemes protecting sensitive HR and financial engineering tickets',
        'Built executive licensing dashboards in eazyBI tracking seat consumption vs headcount growth'
      ],
      uk: [
        'Налаштовано автоматичне відкликання ліцензій після 45 днів неактивності',
        'Обмежено права адмінів проєктів для запобігання хаотичному створенню полів',
        'Впроваджено схеми Issue Security для захисту конфіденційних задач',
        'Створено аналітичні дашборди у eazyBI для контролю споживання ліцензій'
      ]
    },
    tools: ['Atlassian Guard', 'Azure AD / Okta SSO', 'Jira Software', 'Assets', 'eazyBI']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'jira-expert',
    number: '01',
    title: 'Jira Expert — Alluvium Engineering',
    code: 'ALLUVIUM-ENG',
    verifyUrl: 'https://alluvium.net/',
    issuedBy: 'Alluvium Solutions',
    skills: ['Enterprise Service Management', 'Jira Cloud Architecture', 'Advanced Workflow Design', 'JSM SLA Engineering', 'Solution Delivery']
  },
  {
    id: 'acp-cloud-admin',
    number: '02',
    title: 'Atlassian Cloud Organization Administration',
    code: 'ACP-520',
    verifyUrl: 'https://www.linkedin.com/in/isaac-adebayo-66304223a',
    issuedBy: 'Atlassian',
    skills: ['Organization-level administration', 'Atlassian Guard & SSO', 'User lifecycle provisioning & SCIM', 'Security compliance']
  },
  {
    id: 'acp-jira-admin',
    number: '03',
    title: 'Jira Administrator for Cloud',
    code: 'ACP-120',
    verifyUrl: 'https://www.linkedin.com/in/isaac-adebayo-66304223a',
    issuedBy: 'Atlassian',
    skills: ['Project schemes & permissions', 'Complex workflows & validators', 'Field configurations', 'Global administration']
  },
  {
    id: 'jsm-foundations',
    number: '04',
    title: 'ITSM with Jira Service Management Foundations',
    code: 'ITSM-JSM',
    verifyUrl: 'https://www.linkedin.com/in/isaac-adebayo-66304223a',
    issuedBy: 'Atlassian',
    skills: ['Incident & problem management', 'Service requests & change approval', 'SLA architecture', 'Customer portal design']
  },
  {
    id: 'agile-jira',
    number: '05',
    title: 'Agile Delivery in Jira Software',
    issuedBy: 'Atlassian',
    skills: ['Scrum and Kanban frameworks', 'Sprint planning & velocity metrics', 'Release management', 'Backlog grooming best practices']
  },
  {
    id: 'assets-cmdb',
    number: '06',
    title: 'Assets & CMDB Infrastructure Architecture',
    issuedBy: 'Alluvium & Atlassian Ecosystem',
    skills: ['Hardware & software asset schemas', 'Dependency mapping', 'Service desk integration', 'Lifecycle reconciliation']
  }
];

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    number: '01',
    title: {
      en: 'ITSM & Enterprise Service Desks',
      uk: 'ITSM та корпоративні сервіс-дески',
    },
    description: {
      en: 'Service management structured around predictable response times, clean triage queues, and reduced engineer fatigue.',
      uk: 'Управління послугами з прогнозованим часом реакції, чіткими чергами та автоматизацією рутини.',
    },
    items: {
      en: [
        'Incident, problem, change, and service request management',
        'JSM customer portals, tier 1–3 queues, and 24/7 on-call escalation',
        'Assets / CMDB dependency mapping and knowledge base integration'
      ],
      uk: [
        'Управління інцидентами, проблемами, змінами та запитами',
        'Портали JSM, багаторівневі черги та графіки чергувань 24/7',
        'База активів Assets / CMDB та інтеграція бази знань Confluence'
      ]
    }
  },
  {
    number: '02',
    title: {
      en: 'Cloud Migrations & Architecture',
      uk: 'Хмарні міграції та архітектура',
    },
    description: {
      en: 'Clean, zero-downtime migrations from Server/Data Center to Atlassian Cloud Enterprise with comprehensive data hygiene.',
      uk: 'Безпечні міграції із серверних систем у Atlassian Cloud із очищенням зайвих даних та повною валідацією.',
    },
    items: {
      en: [
        'Server & Data Center to Cloud migration strategy and execution',
        'Pre-migration cleanup: custom field rationalization & scheme consolidation',
        'Marketplace app parity assessment and cloud-native replacements'
      ],
      uk: [
        'Стратегія та виконання міграцій із Server / Data Center у Cloud',
        'Попередній аудит: очищення кастомних полів та уніфікація схем',
        'Оцінка плагінів маркетплейсу та підбір хмарних альтернатив'
      ]
    }
  },
  {
    number: '03',
    title: {
      en: 'Automation & Integration Engineering',
      uk: 'Інженерна автоматизація та інтеграції',
    },
    description: {
      en: 'Eliminate repetitive manual clicks and connect your Atlassian footprint directly into your engineering ecosystem.',
      uk: 'Усунення ручних операцій та безшовне поєднання Atlassian із сучасним стеком розробки.',
    },
    items: {
      en: [
        'Automation for Jira, ScriptRunner, Python, and REST API pipelines',
        'DevOps integrations with GitHub, GitLab, and CI/CD deployment gates',
        'Atlassian Forge apps, webhooks, and third-party SaaS connectors'
      ],
      uk: [
        'Automation for Jira, ScriptRunner, Python та REST API пайплайни',
        'DevOps-інтеграція з GitHub, GitLab та гейтами деплою',
        'Розробка на Atlassian Forge, вебхуки та конектори для SaaS'
      ]
    }
  },
  {
    number: '04',
    title: {
      en: 'Governance & License Optimization',
      uk: 'Управління доступом та оптимізація ліцензій',
    },
    description: {
      en: 'Hardened access controls and compliance-ready permissions that prevent configuration decay and eliminate seat waste.',
      uk: 'Надійний контроль прав доступу, відповідність вимогам аудиту та скорочення перевитрат на ліцензії.',
    },
    items: {
      en: [
        'Role-based permission schemes and issue-level security models',
        'Atlassian Guard, SAML SSO, and automated SCIM user lifecycle management',
        'License usage analytics, inactive seat pruning, and tier rightsizing'
      ],
      uk: [
        'Рольові матриці прав доступу та схеми безпеки задач (Issue Security)',
        'Atlassian Guard, SAML SSO та автоматичне відкликання прав через SCIM',
        'Аналітика споживання ліцензій, видалення "мертвих" акаунтів та оптимізація витрат'
      ]
    }
  }
];

export const ENGAGEMENT_TIERS: EngagementTier[] = [
  {
    number: '01',
    title: {
      en: 'JSM & ITSM Optimization',
      uk: 'Оптимізація JSM та ITSM',
    },
    description: {
      en: 'Practical service desk restructuring, SLA design, and triage automation for teams looking to dramatically improve response metrics.',
      uk: 'Практичне переналаштування сервіс-деску, дизайн SLA та автоматизація маршрутизації для підвищення швидкості реакції.',
    },
    idealFor: {
      en: 'Support, IT, and operations teams struggling with slow response times, ticket chaos, or unorganized email intake.',
      uk: 'Команди підтримки та IT, які страждають від повільної обробки звернень, хаосу в чергах та пропущених дедлайнів.',
    },
    deliverables: {
      en: [
        'JSM portal & request catalog redesign',
        'Business-calendar SLA configurations',
        'Tier 1–3 queue hierarchy setup',
        'Automated ticket routing rules'
      ],
      uk: [
        'Оновлення порталу JSM та каталогу послуг',
        'Налаштування SLA за робочими графіками',
        'Ієрархія черг підтримки L1–L3',
        'Правила автоматичної маршрутизації'
      ]
    }
  },
  {
    number: '02',
    title: {
      en: 'Atlassian Cloud Migration',
      uk: 'Міграція в Atlassian Cloud',
    },
    description: {
      en: 'End-to-end migration execution from Server or Data Center to Cloud with meticulous pre-migration cleanup and zero data loss.',
      uk: 'Повний супровід міграції із Server/Data Center у Cloud із попереднім очищенням бази та без втрати даних.',
    },
    idealFor: {
      en: 'Organizations preparing to move from on-premise Jira/Confluence to modern Atlassian Cloud Enterprise.',
      uk: 'Організації, які планують перехід із локальних серверів у сучасне середовище Atlassian Cloud.',
    },
    deliverables: {
      en: [
        'Pre-migration database & app audit',
        'Field & workflow scheme consolidation',
        'Staging dry-run test execution',
        'Cutover execution & post-launch support'
      ],
      uk: [
        'Аудит бази даних та плагінів перед міграцією',
        'Консолідація полів та схем процесів',
        'Тестова міграція на копії середовища',
        'Фінальне перенесення та пост-міграційна підтримка'
      ]
    }
  },
  {
    number: '03',
    title: {
      en: 'Architecture & Health Audit',
      uk: 'Технічний та архітектурний аудит',
    },
    description: {
      en: 'A structured evaluation of system performance, permission schemes, custom field bloat, and license spend with prioritized fixes.',
      uk: 'Структурований аналіз продуктивності, прав доступу, надлишковості налаштувань та ліцензійних витрат.',
    },
    idealFor: {
      en: 'Engineering and IT leadership seeking an objective evaluation of Atlassian technical debt, compliance risk, and cost savings.',
      uk: 'Керівники IT та інженерії, яким потрібна незалежна оцінка технічного боргу, безпеки та оптимізації бюджету.',
    },
    deliverables: {
      en: [
        'Comprehensive health & risk scorecard',
        'Custom field & scheme bloat report',
        'License optimization & seat recovery plan',
        'Prioritized architectural roadmap'
      ],
      uk: [
        'Детальний звіт стану системи та матриця ризиків',
        'Аналіз надлишковості кастомних полів',
        'План скорочення витрат на ліцензії',
        'Пріоритизована дорожня карта покращень'
      ]
    }
  },
  {
    number: '04',
    title: {
      en: 'Custom Automation & Forge Delivery',
      uk: 'Кастомна автоматизація та Forge',
    },
    description: {
      en: 'Turnkey automation pipelines, REST API connectors, and bespoke Forge applications for unique business workflows.',
      uk: 'Розробка складних пайплайнів автоматизації, інтеграцій через REST API та спеціалізованих додатків Forge.',
    },
    idealFor: {
      en: 'Teams requiring complex multi-system sync (CRM, HR, Git, CI/CD) beyond out-of-the-box configuration.',
      uk: 'Команди, яким необхідна двостороння синхронізація із зовнішніми системами (CRM, HR, Git, CI/CD).',
    },
    deliverables: {
      en: [
        'Custom Automation for Jira rule suites',
        'ScriptRunner / Python automation scripts',
        'Atlassian Forge bespoke plugins',
        'System architecture documentation & handover'
      ],
      uk: [
        'Комплекси правил Automation for Jira',
        'Скрипти автоматизації на ScriptRunner / Python',
        'Розробка додатків Atlassian Forge',
        'Архітектурна документація та інструкції'
      ]
    }
  }
];

export const TYPICAL_STARTING_POINTS = [
  {
    id: 'workflows',
    title: {
      en: 'Inconsistent workflows and ticket confusion',
      uk: 'Неузгоджені процеси та плутанина в задачах',
    },
    description: {
      en: 'Squads use different statuses for the same milestone, leading to unaligned sprints, broken cross-project boards, and unreliable reporting.',
      uk: 'Команди по-різному трактують статуси, через що ламається наскрізна звітність, а планування спринтів стає непередбачуваним.',
    },
    remedy: {
      en: 'Standardized core agile workflow schemas with explicit transition validators and clean role-based handoffs.',
      uk: 'Стандартизовані схеми робочих процесів із чіткими валідаторами переходів та розподілом зон відповідальності.',
    }
  },
  {
    id: 'slas',
    title: {
      en: 'Slow response times and missed support commitments',
      uk: 'Повільна підтримка та порушення умов SLA',
    },
    description: {
      en: 'Service requests get lost in general queues without auto-triage. Escalations happen haphazardly across chat apps without audit trails.',
      uk: 'Запити губляться у загальних чергах, а ескалація відбувається хаотично в чатах без збереження історії для аналізу.',
    },
    remedy: {
      en: 'Tier 1–3 queue structuring, business-calendar SLA timers, automated technician triage, and integrated on-call schedules.',
      uk: 'Ієрархія черг L1–L3, точні таймери SLA за робочими годинами, авторозподіл задач та інтеграція графіків чергувань.',
    }
  },
  {
    id: 'migration',
    title: {
      en: 'Server to Cloud migration uncertainty & app anxiety',
      uk: 'Невпевненість при міграції із Server у Cloud',
    },
    description: {
      en: 'Fear of losing historical issue links, complex custom fields, or essential marketplace app features during the cloud transition.',
      uk: 'Побоювання втратити зв’язки між задачами, історію змін чи важливий функціонал плагінів під час переходу в Cloud.',
    },
    remedy: {
      en: 'JCMA-guided migration planning, database sanitization, app parity mapping, and staging dry-runs with zero production disruption.',
      uk: 'Покроковий план міграції через JCMA, очищення бази, підбір хмарних аналогів та тестування на ізольованій копії.',
    }
  },
  {
    id: 'security',
    title: {
      en: 'Admin sprawl, permission drift & compliance risks',
      uk: 'Надлишок адмінів, хаос у правах та ризики аудиту',
    },
    description: {
      en: 'Too many team members have global admin rights. Public project visibility and unmanaged user lifecycles create severe security gaps.',
      uk: 'Занадто багато користувачів мають права адміністраторів, а відсутність централізованого контролю створює загрозу витоку даних.',
    },
    remedy: {
      en: 'Least-privilege permission matrix, Atlassian Guard SAML SSO, automated SCIM provisioning, and issue security schemes.',
      uk: 'Принцип найменших привілеїв, впровадження Atlassian Guard SAML SSO, автоматичне відкликання прав через SCIM.',
    }
  },
  {
    id: 'licensing',
    title: {
      en: 'Excessive recurring spending on unused licenses',
      uk: 'Переплата за невикористовувані ліцензії користувачів',
    },
    description: {
      en: 'Paying for top-tier subscriptions and marketplace apps for former employees or inactive contractors who haven’t logged in for months.',
      uk: 'Оплата дорогих підписок за колишніх співробітників чи підрядників, які не заходили в систему місяцями.',
    },
    remedy: {
      en: 'Session activity telemetry, automated 45-day inactivity license reclamation, and marketplace app rationalization.',
      uk: 'Моніторинг активності сесій, автоматичне звільнення неактивних ліцензій та оптимізація тарифних планів.',
    }
  }
];
