import { SpecialtyCardProps } from '@/app/lib/types';

export default function SpecialtyCard({ title, technologies }: SpecialtyCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">{title}</h4>
      <div className="flex flex-wrap justify-center gap-2">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center group relative">
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center p-2 hover:scale-110 transition-transform">
              {tech.icon}
            </div>
            <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}