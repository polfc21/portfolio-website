import NavigationBar from '@/app/components/layout/NavigationBar';
import HeroSection from '@/app/components/home/HeroSection';
import TechnologyStack from '@/app/components/home/TechnologyStack';
import PersonalProject from '@/app/components/home/PersonalProject';
import Footer from '../components/layout/Footer';
import FeaturedProjects from '../components/home/FeaturedProjects';

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-900">
      <div className="min-h-screen flex flex-col">
        <NavigationBar />
        <div className="flex-grow">
          <HeroSection />
          <PersonalProject />
          <FeaturedProjects />
          <TechnologyStack />
        </div>
        <Footer />
      </div>
    </main>
  );
}