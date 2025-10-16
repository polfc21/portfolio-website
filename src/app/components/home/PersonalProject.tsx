import { getTranslations } from 'next-intl/server';

export default async function PersonalProject() {
  const t = await getTranslations('HomePage');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        {t('personalProject.title')}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {t('personalProject.description')}
      </p>
    </div>
  );
}