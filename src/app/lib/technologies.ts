import { TechnologyCategory, Technology } from './types';

export const technologies: TechnologyCategory = {
  backEnd: [
    { name: 'Java', icon: 'java', color: 'text-red-500' },
    { name: 'Spring Boot', icon: 'spring-boot', color: 'text-green-500' },
    { name: 'Spring Security', icon: 'spring-security', color: 'text-blue-500' },
    { name: 'Spring Batch', icon: 'spring-batch', color: 'text-purple-500' },
    { name: 'Kafka', icon: 'kafka', color: 'text-black dark:text-white' },
    { name: 'Hibernate', icon: 'hibernate', color: 'text-orange-500' },
    { name: 'Swagger', icon: 'swagger', color: 'text-green-400' },
    { name: 'OpenSearch', icon: 'opensearch', color: 'text-blue-500' },
    { name: 'JUnit 5', icon: 'junit5', color: 'text-green-600' },
    { name: 'Auth0', icon: 'auth0', color: 'text-black dark:text-white' },
    { name: 'Okta', icon: 'okta', color: 'text-blue-600' },
    { name: 'Python', icon: 'python', color: 'text-blue-500' },
  ],
  frontEnd: [
    { name: 'React', icon: 'react', color: 'text-blue-500' },
    { name: 'TypeScript', icon: 'typescript', color: 'text-blue-600' },
    { name: 'Next.js', icon: 'nextjs', color: 'text-black dark:text-white' },
    { name: 'ESLint', icon: 'eslint', color: 'text-yellow-500' },
    { name: 'i18next', icon: 'i18next', color: 'text-green-500' },
    { name: 'Axios', icon: 'axios', color: 'text-blue-400' },
  ],
  mobile: [
    { name: 'Kotlin', icon: 'kotlin', color: 'text-purple-500' },
    { name: 'Android', icon: 'android', color: 'text-green-500' },
    { name: 'Ktor', icon: 'ktor', color: 'text-purple-400' },
    { name: 'Jetpack Compose', icon: 'jetpack-compose', color: 'text-green-600' },
    { name: 'Coil', icon: 'coil', color: 'text-blue-400' },
  ],
  devops: [
    { name: 'Docker', icon: 'docker', color: 'text-blue-500' },
    { name: 'Kubernetes', icon: 'kubernetes', color: 'text-blue-600' },
    { name: 'Terraform', icon: 'terraform', color: 'text-purple-600' },
    { name: 'AWS', icon: 'aws', color: 'text-orange-500' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'postgresql', color: 'text-blue-700' },
    { name: 'PostGIS', icon: 'postgis', color: 'text-green-500' },
    { name: 'MongoDB', icon: 'mongodb', color: 'text-green-600' },
    { name: 'MySQL', icon: 'mysql', color: 'text-blue-500' },
  ],
  tools: [
    { name: 'Git', icon: 'git', color: 'text-orange-500' },
    { name: 'Jenkins', icon: 'jenkins', color: 'text-red-500' },
    { name: 'GitHub Actions', icon: 'github-actions', color: 'text-black dark:text-white' },
    { name: 'SonarQube', icon: 'sonarqube', color: 'text-pink-500' },
    { name: 'SonarCloud', icon: 'sonarcloud', color: 'text-blue-500' },
    { name: 'Sonar', icon: 'sonar', color: 'text-blue-400' },
    { name: 'Karate', icon: 'karate', color: 'text-red-600' },
    { name: 'JMeter', icon: 'jmeter', color: 'text-blue-500' },
  ]
};

export const technologyMap: Record<string, Technology> = {};

Object.values(technologies).flat().forEach(tech => {
  technologyMap[tech.name.toLowerCase()] = tech;
});

export function getTechnologyByName(name: string): Technology | undefined {
  return technologyMap[name.toLowerCase()];
}

export function getTechnologiesByNames(names: string[]): Technology[] {
  return names
    .map(name => getTechnologyByName(name))
    .filter((tech): tech is Technology => tech !== undefined);
}