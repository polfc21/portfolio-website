import { getTranslations } from 'next-intl/server';
import { technologies } from '@/app/lib/technologies';
import { TechnologyWithIcon } from '@/app/lib/types';
import TechnologyIconResolver from '../ui/TechnologyIconResolver';
import SpecialtyCard from '../ui/SpecialityCard';
import { resolveTechnologyData } from '@/app/lib/technology-utils';

function createTechnologyIcons(technologiesData: TechnologyWithIcon[]): TechnologyWithIcon[] {
  return technologiesData.map(tech => ({
    ...tech,
    icon: <TechnologyIconResolver iconName={tech.iconName} color={tech.color} />
  }));
}

export default async function TechnologyStack() {
  const t = await getTranslations('HomePage');

  // Convert string-based technologies to JSX elements
  const technologiesData = {
    backEnd: resolveTechnologyData(technologies.backEnd),
    frontEnd: resolveTechnologyData(technologies.frontEnd),
    mobile: resolveTechnologyData(technologies.mobile),
    devops: resolveTechnologyData(technologies.devops),
    databases: resolveTechnologyData(technologies.databases),
    tools: resolveTechnologyData(technologies.tools),
  };

  // Create JSX icons in the component (where JSX is allowed)
  const technologiesWithIcons = {
    backEnd: createTechnologyIcons(technologiesData.backEnd),
    frontEnd: createTechnologyIcons(technologiesData.frontEnd),
    mobile: createTechnologyIcons(technologiesData.mobile),
    devops: createTechnologyIcons(technologiesData.devops),
    databases: createTechnologyIcons(technologiesData.databases),
    tools: createTechnologyIcons(technologiesData.tools),
  };

  return (
    <div className="w-full max-w-4xl mt-8 mx-auto px-4 pb-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        {t('specialtiesTitle')}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecialtyCard title="Back-End" technologies={technologiesWithIcons.backEnd} />
        <SpecialtyCard title="Front-End" technologies={technologiesWithIcons.frontEnd} />
        <SpecialtyCard title="Mobile" technologies={technologiesWithIcons.mobile} />
        <SpecialtyCard title="DevOps & Cloud" technologies={technologiesWithIcons.devops} />
        <SpecialtyCard title="Databases" technologies={technologiesWithIcons.databases} />
        <SpecialtyCard title="Tools & CI/CD" technologies={technologiesWithIcons.tools} />
      </div>
    </div>
  );
}