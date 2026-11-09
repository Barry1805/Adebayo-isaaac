import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  X, 
  CalendarCheck, 
  ExternalLink, 
  Download,
  ShieldCheck,
  User,
  Mail,
  Building2
} from 'lucide-react';
import { Language } from '../types/index.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialTopic?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialTopic,
}) => {
  const isEn = lang === 'en';

  // Booking steps: 1 = Date & Time, 2 = Details, 3 = Confirmed
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Calendar dates
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    // default to next business day
    const next = new Date(today);
    next.setDate(next.getDate() + (next.getDay() === 5 ? 3 : next.getDay() === 6 ? 2 : 1));
    return next;
  });

  const [selectedTime, setSelectedTime] = useState<string>('14:00');
  const [timezone, setTimezone] = useState<string>('UTC (GMT+0)');

  // Form Details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [callTopic, setCallTopic] = useState(initialTopic || 'Architecture & Health Discovery');
  const [environment, setEnvironment] = useState('Atlassian Cloud');
  const [notes, setNotes] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialTopic) {
      setCallTopic(initialTopic);
    }
  }, [initialTopic]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Available time slots
  const timeSlots = [
    '09:30', '10:30', '11:30', '14:00', '15:00', '16:00', '17:00'
  ];

  // Calendar generation helpers
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sun

  const monthNames = isEn
    ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    : ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDateSelect = (d: number) => {
    const dObj = new Date(year, month, d);
    setSelectedDate(dObj);
  };

  const isWeekend = (d: number) => {
    const dayOfWeek = new Date(year, month, d).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const isSelected = (d: number) => {
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === d
    );
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `DISC-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setStep(3);
  };

  // Google Calendar Link generator
  const getGoogleCalendarUrl = () => {
    const startIso = selectedDate.toISOString().replace(/-|:|\.\d\d\d/g, '').substring(0, 8);
    const startStr = `${startIso}T${selectedTime.replace(':', '')}00Z`;
    const title = encodeURIComponent(`Isaac Adebayo Discovery Call — ${callTopic}`);
    const details = encodeURIComponent(
      `Discovery Call with Isaac Adebayo (Jira Expert & Atlassian Systems Consultant, Alluvium Engineering).\n\nTopic: ${callTopic}\nEnvironment: ${environment}\nNotes: ${notes}\nBooking Ref: ${bookingRef}\nMeeting Link: Google Meet video conference link will be active 10 mins prior.`
    );
    const location = encodeURIComponent('Google Meet (link inside calendar invitation)');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startStr}/${startStr}`;
  };

  // Download .ics file
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Isaac Adebayo//Discovery Call//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Isaac Adebayo Discovery Call — ${callTopic}`,
      `DESCRIPTION:Atlassian Systems & Architecture Discovery Call with Isaac Adebayo. Ref: ${bookingRef}`,
      `LOCATION:Google Meet Video Conference`,
      `DTSTART:${selectedDate.toISOString().substring(0, 10).replace(/-/g, '')}T${selectedTime.replace(':', '')}00Z`,
      `DTEND:${selectedDate.toISOString().substring(0, 10).replace(/-/g, '')}T${(parseInt(selectedTime.split(':')[0]) + 1).toString().padStart(2, '0')}${selectedTime.split(':')[1]}00Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `discovery-call-isaac-adebayo-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-white dark:bg-[#161619] border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between shrink-0 bg-neutral-50/50 dark:bg-[#1a1a1e]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <span>{isEn ? 'Book a Discovery Call' : 'Забронювати консультацію'}</span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-normal px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40">
                  {isEn ? '30 Min · Video' : '30 хв · Відео'}
                </span>
              </h3>
              <p className="text-xs text-neutral-500">
                {isEn ? 'Direct 1-on-1 architecture consultation with Isaac Adebayo' : 'Індивідуальна архітектурна сесія з Ісааком Адебайо'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="space-y-6">
              {/* Call Overview Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 text-xs">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>30 minutes duration</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <Video className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Google Meet video call</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <Globe className="w-4 h-4 text-indigo-500 shrink-0" />
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="bg-transparent text-neutral-800 dark:text-neutral-200 font-medium focus:outline-hidden cursor-pointer"
                  >
                    <option value="UTC (GMT+0)" className="bg-white dark:bg-neutral-800">UTC (GMT+0)</option>
                    <option value="London (GMT+0)" className="bg-white dark:bg-neutral-800">London (GMT+0)</option>
                    <option value="Lagos (WAT, GMT+1)" className="bg-white dark:bg-neutral-800">Lagos (WAT, GMT+1)</option>
                    <option value="Berlin / Paris (CET, GMT+1)" className="bg-white dark:bg-neutral-800">Berlin / Paris (CET)</option>
                    <option value="New York (EST, GMT-5)" className="bg-white dark:bg-neutral-800">New York (EST)</option>
                  </select>
                </div>
              </div>

              {/* Two Column Picker: Left Calendar / Right Time Slots */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left: Interactive Month Grid */}
                <div className="md:col-span-7 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#19191d]">
                  {/* Month Switcher Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 font-mono">
                      {monthNames[month]} {year}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={handlePrevMonth}
                        type="button"
                        className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        title="Previous month"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNextMonth}
                        type="button"
                        className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        title="Next month"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Day of Week Headers */}
                  <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-mono text-neutral-400 mb-2">
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    {/* Empty cells before day 1 */}
                    {Array.from({ length: firstDayIndex }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-8"></div>
                    ))}

                    {/* Month Days */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const dayNum = i + 1;
                      const weekend = isWeekend(dayNum);
                      const selected = isSelected(dayNum);

                      return (
                        <button
                          key={dayNum}
                          type="button"
                          disabled={weekend}
                          onClick={() => handleDateSelect(dayNum)}
                          className={`h-8 rounded flex items-center justify-center font-mono transition-all text-xs ${
                            selected
                              ? 'bg-blue-600 text-white font-semibold shadow-xs'
                              : weekend
                              ? 'text-neutral-300 dark:text-neutral-700 cursor-not-allowed'
                              : 'text-neutral-800 dark:text-neutral-200 hover:bg-blue-50 dark:hover:bg-neutral-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium'
                          }`}
                        >
                          {dayNum}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Available Time Slots */}
                <div className="md:col-span-5 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#19191d] space-y-3">
                  <div className="text-xs font-mono uppercase text-neutral-400 flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span>{isEn ? 'Available Slots' : 'Вільний час'}</span>
                    <span className="text-neutral-500 font-sans">{selectedDate.toLocaleDateString(isEn ? 'en-US' : 'uk-UA', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                  </div>

                  <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                    {timeSlots.map((slot) => {
                      const isTimeActive = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`w-full py-2 px-3 rounded text-xs font-mono font-medium flex items-center justify-between border transition-all ${
                            isTimeActive
                              ? 'border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 ring-1 ring-blue-500'
                              : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-neutral-50/50 dark:bg-[#141417]'
                          }`}
                        >
                          <span>{slot}</span>
                          {isTimeActive && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Step 1 Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="text-xs text-neutral-500">
                  {selectedDate.toLocaleDateString(isEn ? 'en-US' : 'uk-UA', { month: 'long', day: 'numeric', year: 'numeric' })} at {selectedTime} ({timezone})
                </div>
                <button
                  onClick={() => setStep(2)}
                  type="button"
                  className="px-5 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-xs"
                >
                  {isEn ? 'Continue to Call Agenda →' : 'Перейти до деталей дзвінка →'}
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleConfirmBooking} className="space-y-5">
              <div className="flex items-center justify-between text-xs text-neutral-500 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="font-mono uppercase">
                  {isEn ? 'Call Details & Agenda' : 'Деталі та тема дзвінка'}
                </span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {isEn ? '← Change Date & Time' : '← Змінити дату та час'}
                </button>
              </div>

              {/* Slot Summary Pill */}
              <div className="p-3 rounded bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs text-neutral-800 dark:text-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold">
                    {selectedDate.toLocaleDateString(isEn ? 'en-US' : 'uk-UA', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span>·</span>
                  <span className="font-mono">{selectedTime} ({timezone})</span>
                </div>
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400">30 MIN SESSION</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                    {isEn ? 'Full Name' : 'Ваше ім’я'} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isEn ? 'Sarah Jenkins' : 'Олена Коваль'}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                    {isEn ? 'Work Email' : 'Робочий Email'} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@company.com"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                    {isEn ? 'Company / Organization' : 'Компанія / Проєкт'}
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={isEn ? 'Acme Corp (150 users)' : 'Tech Solutions'}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                    {isEn ? 'Current Environment' : 'Поточне середовище'}
                  </label>
                  <select
                    value={environment}
                    onChange={(e) => setEnvironment(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600"
                  >
                    <option value="Atlassian Cloud">Atlassian Cloud (Standard/Premium/Enterprise)</option>
                    <option value="Jira Data Center">Jira Data Center / Server</option>
                    <option value="Server-to-Cloud Migration">Server-to-Cloud Migration</option>
                    <option value="Evaluating Options">Evaluating Atlassian Tools</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                  {isEn ? 'Discovery Focus Area' : 'Головна тема консультації'}
                </label>
                <select
                  value={callTopic}
                  onChange={(e) => setCallTopic(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600"
                >
                  <option value="Architecture & Health Discovery">Architecture & Health Discovery (System audit)</option>
                  <option value="JSM & ITSM Service Desk Overhaul">JSM & ITSM Service Desk Overhaul (SLAs, Queues)</option>
                  <option value="Server to Cloud Migration Strategy">Server to Cloud Migration Strategy & Scoping</option>
                  <option value="License Optimization & Cost Audit">License Optimization & Seat Reclamation</option>
                  <option value="Custom Automation & Forge Scoping">Custom Automation & Forge App Scoping</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">
                  {isEn ? 'What is the primary question or decision you are facing?' : 'Яке ключове питання або виклик зараз стоїть перед командою?'}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isEn ? 'e.g. Planning a cloud migration in Q2, need to audit our custom fields and assess plugin parity...' : 'Наприклад: готуємося до переходу в хмару, хочемо перевірити стан полів та налаштувати JSM...'}
                  className="w-full px-3.5 py-2 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:border-blue-600"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                >
                  {isEn ? 'Back to calendar' : 'Назад до календаря'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-sm"
                >
                  {isEn ? 'Confirm & Book Discovery Call' : 'Підтвердити бронювання дзвінка'}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                  {isEn ? 'DISCOVERY CALL SCHEDULED' : 'ДЗВІНОК УСПІШНО ЗАБРОНЬОВАНО'}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {isEn ? `Looking forward to speaking, ${name}!` : `З нетерпінням чекаю на зустріч, ${name}!`}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-md mx-auto">
                  {isEn
                    ? `A calendar invitation with video bridge details has been dispatched to ${email}.`
                    : `Запрошення з посиланням на відеодзвінок надіслано на вашу пошту ${email}.`}
                </p>
              </div>

              {/* Call Summary Card */}
              <div className="max-w-md mx-auto p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-left space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                  <span className="text-neutral-500 uppercase font-mono">Reference:</span>
                  <span className="font-mono font-semibold text-neutral-800 dark:text-neutral-200">{bookingRef}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Date & Time:</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {selectedDate.toLocaleDateString(isEn ? 'en-US' : 'uk-UA', { month: 'short', day: 'numeric', year: 'numeric' })} at {selectedTime} ({timezone})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Topic:</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">{callTopic}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Platform:</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">{environment}</span>
                </div>
              </div>

              {/* Quick Actions: Add to Google Calendar or Download .ics */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Add to Google Calendar' : 'Додати в Google Calendar'}</span>
                </a>

                <button
                  onClick={handleDownloadIcs}
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 rounded transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Download .ICS (Outlook / Apple)' : 'Завантажити .ICS (Outlook / Apple)'}</span>
                </button>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  type="button"
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                >
                  {isEn ? 'Done and return to site' : 'Готово, повернутися на сайт'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
