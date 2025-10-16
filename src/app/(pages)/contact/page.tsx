import { getTranslations } from 'next-intl/server';
import NavigationBar from '@/app/components/layout/NavigationBar';
import Footer from '@/app/components/layout/Footer';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

export default async function ContactPage() {
  const t = await getTranslations('ContactPage');

  const contactMethods = [
    {
      name: t('email.title'),
      description: t('email.description'),
      href: 'mailto:contact@polfarrenycapdevila.com',
      icon: <SiGmail className="w-8 h-8" />,
      color: 'bg-red-500',
      buttonText: t('email.button')
    },
    {
      name: t('linkedin.title'),
      description: t('linkedin.description'),
      href: 'https://www.linkedin.com/in/pol-farreny-capdevila/',
      icon: <SiLinkedin className="w-8 h-8" />,
      color: 'bg-blue-600',
      buttonText: t('linkedin.button')
    },
    {
      name: t('github.title'),
      description: t('github.description'),
      href: 'https://github.com/polfc21',
      icon: <SiGithub className="w-8 h-8" />,
      color: 'bg-gray-800',
      buttonText: t('github.button')
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-900">
      <div className="min-h-screen flex flex-col">
        <NavigationBar />
        <div className="flex-grow flex items-center justify-center py-16">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-blue-700 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                {t('title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {method.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    {method.buttonText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}