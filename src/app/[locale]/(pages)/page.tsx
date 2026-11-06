import NavigationBar from '@/app/components/layout/NavigationBar';
import HeroSection from '@/app/components/home/HeroSection';
import TechnologyStack from '@/app/components/home/TechnologyStack';
import PersonalProject from '@/app/components/home/PersonalProject';
import Footer from '@/app/components/layout/Footer';
import FeaturedProjects from '@/app/components/home/FeaturedProjects';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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