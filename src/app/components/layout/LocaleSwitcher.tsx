'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { asset } from '@/app/lib/assets';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex gap-1 bg-white/50 dark:bg-gray-800/50 p-1 rounded-lg">
      <button
        onClick={() => switchLocale('ca')}
        className="p-2 rounded-md hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors flex items-center justify-center"
        title="Català"
      >
        <Image
          src={asset('/icons/flags/catalunya.png')}
          alt="Català"
          width={20}
          height={20}
          className="w-5 h-5 object-cover rounded-sm"
        />
      </button>
      <button
        onClick={() => switchLocale('en')}
        className="p-2 rounded-md hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors flex items-center justify-center"
        title="English"
      >
        <Image
          src={asset('/icons/flags/united-kingdom.png')}
          alt="English"
          width={20}
          height={20}
          className="w-5 h-5 object-cover rounded-sm"
        />
      </button>
      <button
        onClick={() => switchLocale('es')}
        className="p-2 rounded-md hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors flex items-center justify-center"
        title="Español"
      >
        <Image
          src={asset('/icons/flags/spain.png')}
          alt="Español"
          width={20}
          height={20}
          className="w-5 h-5 object-cover rounded-sm"
        />
      </button>
    </div>
  );
}
