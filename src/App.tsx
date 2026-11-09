/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { InteractiveModel } from './components/InteractiveModel.tsx';
import { CaseStudies } from './components/CaseStudies.tsx';
import { AssessmentTool } from './components/AssessmentTool.tsx';
import { Expertise } from './components/Expertise.tsx';
import { EngagementTiers } from './components/EngagementTiers.tsx';
import { Credentials } from './components/Credentials.tsx';
import { About } from './components/About.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { DeploymentType, Language } from './types/index.ts';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isDark, setIsDark] = useState<boolean>(true);
  
  // Booking modal state
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [bookingTopic, setBookingTopic] = useState<string>('Architecture & Health Discovery');

  // Contact form pre-fill states
  const [contactScope, setContactScope] = useState<string>('');
  const [contactMessage, setContactMessage] = useState<string>('');
  const [contactDeployment, setContactDeployment] = useState<DeploymentType>('Cloud');

  // Synchronize document theme class with isDark state
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      document.body.className = 'bg-[#121214] text-[#EDEDED] antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200';
    } else {
      root.classList.remove('dark');
      document.body.className = 'bg-[#FAFAFA] text-[#171717] antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200';
    }
  }, [isDark]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'uk' : 'en'));
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenBooking = (topic?: string) => {
    if (topic) {
      setBookingTopic(topic);
    }
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const handleOpenContact = (topic?: string) => {
    if (topic) {
      setContactScope(topic);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (tierTitle: string) => {
    // Open discovery call with preselected tier topic!
    handleOpenBooking(`Engagement Scoping: ${tierTitle}`);
  };

  const handleApplyAssessmentToContact = (data: {
    deployment: string;
    teamSize: string;
    friction: string;
    recommendation: string;
  }) => {
    let depType: DeploymentType = 'Cloud';
    if (data.deployment.includes('Data Center')) depType = 'Data Center';
    else if (data.deployment.includes('Hybrid')) depType = 'Hybrid / Migration';
    else if (data.deployment.includes('Evaluating')) depType = 'Evaluating';

    setContactDeployment(depType);
    setContactScope(`Assessment Follow-up: ${data.friction}`);
    setContactMessage(
      `Assessment Diagnostics:\n- Environment: ${data.deployment}\n- Organization Scale: ${data.teamSize}\n- Primary Friction: ${data.friction}\n- Priority Remediation: ${data.recommendation}\n\nWe would like to discuss next steps for an architectural engagement.`
    );
    handleOpenContact();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200">
      {/* Top Bar Header */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenContact={handleOpenContact}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenContact={() => handleOpenContact()}
          onOpenBooking={() => handleOpenBooking()}
        />

        <InteractiveModel
          lang={lang}
        />

        <CaseStudies
          lang={lang}
          onOpenContact={handleOpenContact}
        />

        <AssessmentTool
          lang={lang}
          onApplyAssessmentToContact={handleApplyAssessmentToContact}
        />

        <Expertise
          lang={lang}
        />

        <EngagementTiers
          lang={lang}
          onSelectTier={handleSelectTier}
        />

        <Credentials
          lang={lang}
        />

        <About
          lang={lang}
        />

        <Contact
          lang={lang}
          prefilledScope={contactScope}
          prefilledMessage={contactMessage}
          prefilledDeployment={contactDeployment}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
      />

      {/* Interactive Discovery Call Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        lang={lang}
        initialTopic={bookingTopic}
      />
    </div>
  );
}
