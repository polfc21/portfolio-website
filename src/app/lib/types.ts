import { JSX } from 'react';

export interface Technology {
  name: string;
  icon: string; 
  color: string;
}

export interface TechnologyWithIcon {
  name: string;
  color: string;
  iconName: string;
  iconData: Technology;
  icon?: JSX.Element;
}

export interface Project {
  company: string;
  position: string;
  period: string;
  description: string;
  tasks: string[];
  technologies: string[];
}

export interface ProjectCardProps {
  project: Project;
  tasksTitle: string;
  technologiesTitle: string;
  anchor: string;
}

export interface SpecialtyCardProps {
  title: string;
  technologies: TechnologyWithIcon[];
}

export interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

export interface TechnologyIconProps {
  name: string;
  src: string;
  className?: string;
}

export interface TechnologyIconResolverProps {
  iconName: string;
  className?: string;
  color?: string;
}

export interface TechnologyCategory {
  backEnd: Technology[];
  frontEnd: Technology[];
  mobile: Technology[];
  devops: Technology[];
  databases: Technology[];
  tools: Technology[];
}

export interface FeaturedProject {
  company: string;
  position: string;
  period: string;
  description: string;
  anchor: string;
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  subjects: string[];
  skills: string[];
  type: 'degree' | 'bootcamp' | 'certification';
  current?: boolean;
}