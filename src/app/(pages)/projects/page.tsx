import Footer from '@/app/components/layout/Footer';
import NavigationBar from '@/app/components/layout/NavigationBar';
import ProjectList from '@/app/components/projects/ProjectList';


export default async function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-900">
      <div className="min-h-screen flex flex-col">
        <NavigationBar />
        <div className="flex-grow">
          <ProjectList />
        </div>
        <Footer />
      </div>
    </main>
  );
}