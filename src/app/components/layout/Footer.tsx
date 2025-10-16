import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section - Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('builtWith')}
            </p>
          </div>

          {/* Center Section - Built With */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              © {currentYear} Pol Farreny Capdevila. {t('allRightsReserved')}.
            </p>
          </div>

          {/* Right Section - Contact CTA */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-right">
              {t('projectInMind')}
            </p>
            <a 
              href="/contact" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
            >
              {t('letsTalk')} →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}