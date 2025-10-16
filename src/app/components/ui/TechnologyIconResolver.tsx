import { 
  SiSpring, SiApachekafka, SiSwagger, SiHibernate, SiReact, 
  SiTypescript, SiNextdotjs, SiKotlin, SiKtor, SiCoil, 
  SiJetpackcompose, SiAxios, SiI18Next, SiAndroid, SiDocker, 
  SiKubernetes, SiOpensearch, SiTerraform, SiPostgresql, 
  SiMongodb, SiMysql, SiGit, SiPython, SiAuth0, SiOkta, 
  SiJunit5, SiSonarcloud, SiSonar, SiEslint, SiJenkins, 
  SiGithubactions, SiSonarqube 
} from 'react-icons/si';
import { TechnologyIconResolverProps } from '@/app/lib/types';
import TechnologyIcon from './TechnologyIcon';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'spring-boot': SiSpring,
  'spring-security': SiSpring,
  'spring-batch': SiSpring,
  'kafka': SiApachekafka,
  'hibernate': SiHibernate,
  'swagger': SiSwagger,
  'opensearch': SiOpensearch,
  'junit5': SiJunit5,
  'auth0': SiAuth0,
  'okta': SiOkta,
  'python': SiPython,
  'react': SiReact,
  'typescript': SiTypescript,
  'nextjs': SiNextdotjs,
  'eslint': SiEslint,
  'i18next': SiI18Next,
  'axios': SiAxios,
  'kotlin': SiKotlin,
  'android': SiAndroid,
  'ktor': SiKtor,
  'jetpack-compose': SiJetpackcompose,
  'coil': SiCoil,
  'docker': SiDocker,
  'kubernetes': SiKubernetes,
  'terraform': SiTerraform,
  'postgresql': SiPostgresql,
  'mongodb': SiMongodb,
  'mysql': SiMysql,
  'git': SiGit,
  'jenkins': SiJenkins,
  'github-actions': SiGithubactions,
  'sonarqube': SiSonarqube,
  'sonarcloud': SiSonarcloud,
  'sonar': SiSonar,
};

export default function TechnologyIconResolver({ 
  iconName, 
  color = "", 
  className = "w-6 h-6" 
}: TechnologyIconResolverProps) {
  const IconComponent = iconMap[iconName];
  
  // Handle custom image icons (Java, AWS, PostGIS, Karate, JMeter)
  const customImageIcons = ['java', 'aws', 'postgis', 'karate', 'jmeter'];
  
  if (customImageIcons.includes(iconName)) {
    return (
      <TechnologyIcon 
        name={iconName}
        src={`/icons/technologies/${iconName}.png`}
        className={`${className} ${color}`}
      />
    );
  }
  
  if (!IconComponent) {
    return (
      <div className={`${className} ${color} bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-xs font-bold`}>
        {iconName.charAt(0).toUpperCase()}
      </div>
    );
  }

  return <IconComponent className={`${className} ${color}`} />;
}