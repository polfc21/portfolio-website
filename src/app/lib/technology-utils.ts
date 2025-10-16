import { Technology, TechnologyWithIcon } from './types';
import { getTechnologiesByNames } from './technologies';

export function resolveTechnologyData(technologies: Technology[]): TechnologyWithIcon[] {
  return technologies.map(tech => ({
    name: tech.name,
    color: tech.color,
    iconName: tech.icon,
    iconData: tech
  }));
}

export function resolveProjectTechnologiesData(technologyNames: string[]): TechnologyWithIcon[] {
  const techs = getTechnologiesByNames(technologyNames);
  return resolveTechnologyData(techs);
}