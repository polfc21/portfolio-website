import { ProjectCardProps, TechnologyWithIcon } from '@/app/lib/types';
import { resolveProjectTechnologiesData } from '@/app/lib/technology-utils';
import TechnologyIconResolver from '@/app/components/ui/TechnologyIconResolver';

function createProjectTechnologyIcons(technologiesData: TechnologyWithIcon[]) {
  return technologiesData.map(tech => ({
    ...tech,
    icon: <TechnologyIconResolver iconName={tech.iconName} color={tech.color} />
  }));
}

export default function ProjectCard({ project, tasksTitle, technologiesTitle, anchor }: ProjectCardProps) {
  // Get technology data (pure data, no JSX)
  const technologyData = resolveProjectTechnologiesData(project.technologies);
  
  // Create JSX icons in the component
  const technologyIcons = createProjectTechnologyIcons(technologyData);

  return (
    <div 
      id={anchor} // Add ID for anchor linking
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 scroll-mt-32" // scroll-mt-32 for offset
    >
      {/* Company Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.company}
          </h3>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
            {project.position}
          </p>
        </div>
        <span className="inline-block mt-2 sm:mt-0 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
          {project.period}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Tasks */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {tasksTitle}
        </h4>
        <ul className="space-y-2">
          {project.tasks.map((task, taskIndex) => (
            <li key={taskIndex} className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              <span className="text-gray-700 dark:text-gray-300">{task}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies with Icons */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {technologiesTitle}
        </h4>
        <div className="flex flex-wrap gap-3">
          {technologyIcons.map((tech, techIndex) => (
            <div key={techIndex} className="flex flex-col items-center group relative">
              <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center p-2 hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}