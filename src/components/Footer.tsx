import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types/index.ts';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isEn = lang === 'en';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0f0f11] text-xs text-neutral-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-xs bg-blue-600 inline-block"></span>
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            Isaac Adebayo
          </span>
          <span>·</span>
          <span>© {new Date().getFullYear()}</span>
          <span>·</span>
          <span>{isEn ? 'Jira Expert · Alluvium Engineering' : 'Jira Expert · Інженерна команда Alluvium'}</span>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="https://alluvium.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Alluvium
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-adebayo-66304223a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>{isEn ? 'Back to top' : 'Догори'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
