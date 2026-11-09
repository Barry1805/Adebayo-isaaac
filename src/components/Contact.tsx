import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Linkedin, 
  ExternalLink, 
  MessageSquare, 
  Globe, 
  ShieldCheck, 
  ArrowUpRight,
  Calendar,
  Clock,
  Video,
  Copy,
  Check
} from 'lucide-react';
import { DeploymentType, Language } from '../types/index.ts';

interface ContactProps {
  lang: Language;
  prefilledScope?: string;
  prefilledMessage?: string;
  prefilledDeployment?: DeploymentType;
  onOpenBooking?: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  lang,
  prefilledScope,
  prefilledMessage,
  prefilledDeployment,
  onOpenBooking,
}) => {
  const isEn = lang === 'en';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [deployment, setDeployment] = useState<DeploymentType>(prefilledDeployment || 'Cloud');
  const [scope, setScope] = useState(prefilledScope || 'Technical Assessment');
  const [message, setMessage] = useState(prefilledMessage || '');
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionReference, setSubmissionReference] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  useEffect(() => {
    if (prefilledScope) setScope(prefilledScope);
  }, [prefilledScope]);

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
      setCharCount(prefilledMessage.length);
    }
  }, [prefilledMessage]);

  useEffect(() => {
    if (prefilledDeployment) setDeployment(prefilledDeployment);
  }, [prefilledDeployment]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setMessage(val);
    setCharCount(val.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.length < 10) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `IA-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionReference(ref);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(submissionReference);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-50/40 dark:bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {isEn ? 'DIRECT CONTACT' : 'ЗВ’ЯЗОК'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {isEn ? 'Have an Atlassian system that needs untangling?' : 'Маєте систему Atlassian, яку потрібно оптимізувати?'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            {isEn
              ? 'Share your current architecture, the decision you need to make, and whether you are running Cloud, Server, or Data Center. I read and respond to every message.'
              : 'Опишіть вашу поточну архітектуру, завдання, яке необхідно вирішити, та вашу платформу (Cloud, Server чи Data Center). Я особисто відповідаю на кожне звернення.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Response Commitment */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161619] space-y-4">
              <div className="text-xs font-mono uppercase text-neutral-400">
                {isEn ? 'Direct Channels & Professional Networks' : 'Професійні контакти та мережі'}
              </div>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/isaac-adebayo-66304223a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-medium transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>

                <a
                  href="https://alluvium.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-medium transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-emerald-500" />
                    <span>Alluvium Solutions</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>

                <a
                  href="https://community.atlassian.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-medium transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-indigo-500" />
                    <span>Atlassian Community Contributor</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
                {isEn
                  ? 'Engagements are delivered with structured milestone deliverables, full auditability, and team enablement.'
                  : 'Співпраця здійснюється за чіткими етапами з повною прозорістю та навчанням вашої внутрішньої команди.'}
              </div>
            </div>

            <div className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161619] space-y-2">
              <div className="text-xs font-mono text-neutral-400 uppercase">
                {isEn ? 'Engagement Standards' : 'Принципи взаємодії'}
              </div>
              <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1.5 list-disc list-inside">
                <li>{isEn ? 'Vendor-neutral architecture advice' : 'Незалежні архітектурні поради'}</li>
                <li>{isEn ? 'Zero lock-in with clear team runbooks' : 'Повна передача документації без штучної залежності'}</li>
                <li>{isEn ? 'Enterprise NDA coverage for sensitive systems' : 'Підписання NDA для захисту корпоративних даних'}</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Discovery Call Booking Card + Written Inquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Preferred Booking CTA Banner */}
            {onOpenBooking && (
              <div className="p-6 rounded-lg border border-blue-200 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400">
                    <Calendar className="w-4 h-4" />
                    <span>{isEn ? 'Fastest Response' : 'Найшвидший спосіб'}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {isEn ? 'Slots Available This Week' : 'Є вільні слоти цього тижня'}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    {isEn ? 'Book a 30-Minute Discovery Call' : 'Забронювати 30-хвилинний дзвінок'}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {isEn
                      ? 'Pick a date & time on the calendar for a live 1-on-1 architecture session.'
                      : 'Оберіть зручний час у календарі для живої архітектурної сесії.'}
                  </p>
                </div>

                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Open Calendar' : 'Відкрити календар'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="p-6 sm:p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161619] shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100 dark:border-neutral-800">
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  {isEn ? 'Or Send Architecture Brief' : 'Або надішліть письмовий бриф'}
                </span>
                <span className="text-xs text-neutral-500 font-sans">
                  {isEn ? 'Response within 24h' : 'Відповідь до 24 год'}
                </span>
              </div>
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {isEn ? 'Inquiry Received' : 'Запит успішно надіслано'}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                    {isEn
                      ? `Thank you, ${name}. Isaac Adebayo has received your message regarding your ${deployment} environment and will follow up at ${email} within 24 business hours.`
                      : `Дякую, ${name}. Ісаак Адебайо отримав ваше повідомлення щодо платформи ${deployment} і зв’яжеться за адресою ${email} протягом 24 робочих годин.`}
                  </p>

                  <div className="inline-flex items-center gap-2 p-2 px-3 rounded bg-neutral-100 dark:bg-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                    <span>Reference: {submissionReference}</span>
                    <button
                      onClick={handleCopyRef}
                      type="button"
                      className="p-1 hover:text-blue-500 transition-colors"
                      title="Copy reference code"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                        setCharCount(0);
                      }}
                      type="button"
                      className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {isEn ? 'Submit another inquiry' : 'Надіслати ще один запит'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                        {isEn ? 'Your Name' : 'Ваше ім’я'} *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isEn ? 'Sarah Connor' : 'Олена'}
                        className="w-full px-3.5 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                        {isEn ? 'Work Email' : 'Робочий Email'} *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="deployment" className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                        {isEn ? 'Deployment Platform' : 'Платформа'}
                      </label>
                      <select
                        id="deployment"
                        value={deployment}
                        onChange={(e) => setDeployment(e.target.value as DeploymentType)}
                        className="w-full px-3.5 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600"
                      >
                        <option value="Cloud">Atlassian Cloud</option>
                        <option value="Data Center">Jira Data Center</option>
                        <option value="Hybrid / Migration">Server to Cloud Migration</option>
                        <option value="Evaluating">Evaluating Options</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="scope" className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                        {isEn ? 'Primary Objective' : 'Головне завдання'}
                      </label>
                      <input
                        id="scope"
                        type="text"
                        value={scope}
                        onChange={(e) => setScope(e.target.value)}
                        placeholder={isEn ? 'e.g. JSM Optimization, Cloud Migration' : 'Наприклад: Оптимізація JSM, Міграція'}
                        className="w-full px-3.5 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="message" className="block text-xs font-mono uppercase text-neutral-500">
                        {isEn ? 'What needs to change?' : 'Що саме потрібно вирішити?'} *
                      </label>
                      <span className={`text-[11px] font-mono ${charCount < 10 ? 'text-amber-500' : 'text-neutral-400'}`}>
                        {charCount} / 3,000 {isEn ? 'chars' : 'симв.'}
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      minLength={10}
                      maxLength={3000}
                      value={message}
                      onChange={handleMessageChange}
                      placeholder={
                        isEn
                          ? 'Describe your team size, key operational hurdles (e.g. slow response times, migration risks, permission clutter), and desired timeframe...'
                          : 'Опишіть розмір команди, поточні труднощі (повільний сапорт, хаос у правах, підготовка до міграції) та бажані терміни...'
                      }
                      className="w-full px-3.5 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                    {charCount > 0 && charCount < 10 && (
                      <p className="text-[11px] text-amber-500 mt-1 font-mono">
                        {isEn ? 'Please provide at least 10 characters.' : 'Будь ласка, вкажіть щонайменше 10 символів.'}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || charCount < 10}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors shadow-sm"
                    >
                      {isSubmitting ? (
                        <span>{isEn ? 'Sending...' : 'Відправка...'}</span>
                      ) : (
                        <>
                          <span>{isEn ? 'Send inquiry' : 'Надіслати запит'}</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
