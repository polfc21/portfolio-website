import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getProjectsData } from '@/app/lib/projects';
import ProjectCard from './ProjectCard';

export default async function ProjectList() {
  const t = await getTranslations('ProjectsPage');
  const projects = getProjectsData(t);

  // Define anchors for each project
  const projectsWithAnchors = [
    { ...projects[0], anchor: 'travelport' },
    { ...projects[1], anchor: 'gymbo' },
    { ...projects[2], anchor: 'nnergix' },
    { ...projects[3], anchor: 'cleverpy' }
  ];

  return (
    <section className="pt-32 sm:pt-40 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-blue-700 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectsWithAnchors.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              tasksTitle={t('tasksTitle')}
              technologiesTitle={t('technologiesTitle')}
              anchor={project.anchor} // Pass anchor to ProjectCard
            />
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            ← {t('backToHome')}
          </Link>
        </div>
      </div>
    </section>
  );
}