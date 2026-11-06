import { FeaturedProject } from '@/app/lib/types';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function FeaturedProjects() {
  const t = await getTranslations('HomePage');

  const featuredProjects: FeaturedProject[] = [
    {
      company: t('featuredProjects.travelport.company'),
      position: t('featuredProjects.travelport.position'),
      period: t('featuredProjects.travelport.period'),
      description: t('featuredProjects.travelport.description'),
      anchor: 'travelport' // Unique anchor for each project
    },
    {
      company: t('featuredProjects.gymbo.company'),
      position: t('featuredProjects.gymbo.position'),
      period: t('featuredProjects.gymbo.period'),
      description: t('featuredProjects.gymbo.description'),
      anchor: 'gymbo'
    },
    {
      company: t('featuredProjects.nnergix.company'),
      position: t('featuredProjects.nnergix.position'),
      period: t('featuredProjects.nnergix.period'),
      description: t('featuredProjects.nnergix.description'),
      anchor: 'nnergix'
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-blue-700 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
          {t('featuredProjects.title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('featuredProjects.subtitle')}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredProjects.map((project, index) => (
          <Link 
            key={index}
            href={`/projects#${project.anchor}`}
            className="block group" // Make the entire card clickable
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 h-full cursor-pointer">
              <div className="flex flex-col h-full">
                {/* Company & Position */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.company}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {project.position}
                  </p>
                </div>

                {/* Period */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                    {project.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Click Hint */}
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-xs font-medium">
                  <span>View details</span>
                  <svg 
                    className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center">
        <Link
          href="/projects"
          className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <span>{t('featuredProjects.viewAllButton')}</span>
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}