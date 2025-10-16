import { Project } from './types';

export const getProjectsData = (t: (key: string) => string): Project[] => [
  {
    company: t('travelport.company'),
    position: t('travelport.position'),
    period: t('travelport.period'),
    description: t('travelport.description'),
    tasks: [
      t('travelport.tasks.0'),
      t('travelport.tasks.1'),
      t('travelport.tasks.2'),
      t('travelport.tasks.3'),
      t('travelport.tasks.4'),
      t('travelport.tasks.5'),
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'MongoDB', 'GitHub', 'GitLab', 'Jenkins', 'Hibernate', 'MySQL']
  },
  {
    company: t('gymbo.company'),
    position: t('gymbo.position'),
    period: t('gymbo.period'),
    description: t('gymbo.description'),
    tasks: [
      t('gymbo.tasks.0'),
      t('gymbo.tasks.1'),
      t('gymbo.tasks.2'),
      t('gymbo.tasks.3'),
      t('gymbo.tasks.4'),
      t('gymbo.tasks.5'),
      t('gymbo.tasks.6'),
      t('gymbo.tasks.7'),
      t('gymbo.tasks.8'),
      t('gymbo.tasks.9'),
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'React', 'TypeScript', 'JWT', 'JUnit', 'Hamcrest', 'GitHub Actions', 'SonarQube']
  },
  {
    company: t('nnergix.company'),
    position: t('nnergix.position'),
    period: t('nnergix.period'),
    description: t('nnergix.description'),
    tasks: [
      t('nnergix.tasks.0'),
      t('nnergix.tasks.1'),
      t('nnergix.tasks.2'),
      t('nnergix.tasks.3'),
      t('nnergix.tasks.4'),
      t('nnergix.tasks.5'),
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'DynamoDB', 'Redis', 'PostgreSQL', 'JPA', 'Hibernate', 'Bitbucket', 'GitHub']
  },
  {
    company: t('cleverpy.company'),
    position: t('cleverpy.position'),
    period: t('cleverpy.period'),
    description: t('cleverpy.description'),
    tasks: [
      t('cleverpy.tasks.0'),
      t('cleverpy.tasks.1'),
      t('cleverpy.tasks.2'),
      t('cleverpy.tasks.3'),
      t('cleverpy.tasks.4'),
      t('cleverpy.tasks.5'),
      t('cleverpy.tasks.6'),
      t('cleverpy.tasks.7'),
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'GeoJSON', 'JUnit', 'Hamcrest', 'GitLab', 'GitHub', 'Jenkins']
  }
];