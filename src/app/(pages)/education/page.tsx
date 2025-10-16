import { getTranslations } from 'next-intl/server';
import NavigationBar from '@/app/components/layout/NavigationBar';
import Footer from '@/app/components/layout/Footer';
import EducationTimeline from '@/app/components/education/EducationTimeline';
import EducationCards from '@/app/components/education/EducationCards';

export default async function EducationPage() {
  const t = await getTranslations('EducationPage');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-900">
      <div className="min-h-screen flex flex-col">
        <NavigationBar />
        <div className="flex-grow py-16">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-blue-700 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                {t('title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>

            {/* Timeline Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {t('timelineTitle')}
              </h2>
              <EducationTimeline />
            </div>

            {/* Detailed Cards Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {t('detailsTitle')}
              </h2>
              <EducationCards />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}