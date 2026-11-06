import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { asset } from '@/app/lib/assets';

export default async function HeroSection() {
  const t = await getTranslations('HomePage');

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 sm:py-24 pt-32 sm:pt-40">
      {/* Professional Headshot with Hover Effect */}
      <div className="mb-8 group">
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1.5 border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image 
              src={asset('/images/profile.png')} // Update this path to your actual image
              alt="Pol Farreny Capdevila - Software Engineer"
              width={160}
              height={160}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-6">
        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-blue-700 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
          {t('title')}
        </h1>

        {/* Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          {t('status')}
        </div>
        
        {/* Professional Description */}
        <div className="space-y-4 mb-6">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
}