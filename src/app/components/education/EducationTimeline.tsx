import { getTranslations } from 'next-intl/server';

export default async function EducationTimeline() {
  const t = await getTranslations('EducationPage');

  const educationEntries = [
    {
      id: 'bootcamp',
      period: t('bootcamp.period'),
      title: t('bootcamp.title'),
      institution: t('bootcamp.institution'),
      type: 'bootcamp' as const
    },
    {
      id: 'cfgs',
      period: t('cfgs.period'),
      title: t('cfgs.title'),
      institution: t('cfgs.institution'),
      type: 'degree' as const
    },
    {
      id: 'sociology',
      period: t('sociology.period'),
      title: t('sociology.title'),
      institution: t('sociology.institution'),
      type: 'degree' as const
    }
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 dark:bg-blue-800 h-full"></div>
      
      <div className="space-y-12">
        {educationEntries.map((education, index) => (
          <div key={education.id} className="relative">
            {/* Timeline dot */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 z-10 ${
              education.type === 'bootcamp' ? 'bg-green-500' :
              education.type === 'degree' ? 'bg-blue-500' :
              'bg-purple-500'
            }`}></div>
            
            {/* Content */}
            <div className={`flex items-center w-full ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-2">
                    {education.period}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {education.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {education.institution}
                  </p>
                </div>
              </div>
              {/* Empty space for the other side */}
              <div className="w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}