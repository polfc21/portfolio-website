'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Education } from '@/app/lib/types';

export default function EducationCards() {
  const t = useTranslations('EducationPage');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const educationData: Education[] = [
    {
      id: 'bootcamp',
      title: t('bootcamp.title'),
      institution: t('bootcamp.institution'),
      period: t('bootcamp.period'),
      location: t('bootcamp.location'),
      description: t('bootcamp.description'),
      subjects: [
        t('bootcamp.subjects.0'),
        t('bootcamp.subjects.1'),
        t('bootcamp.subjects.2'),
        t('bootcamp.subjects.3'),
        t('bootcamp.subjects.4'),
        t('bootcamp.subjects.5')
      ],
      skills: [
        t('bootcamp.skills.0'),
        t('bootcamp.skills.1'),
        t('bootcamp.skills.2'),
        t('bootcamp.skills.3')
      ],
      type: 'bootcamp'
    },
    {
      id: 'cfgs',
      title: t('cfgs.title'),
      institution: t('cfgs.institution'),
      period: t('cfgs.period'),
      location: t('cfgs.location'),
      description: t('cfgs.description'),
      subjects: [
        t('cfgs.subjects.0'),
        t('cfgs.subjects.1'),
        t('cfgs.subjects.2'),
        t('cfgs.subjects.3'),
        t('cfgs.subjects.4')
      ],
      skills: [
        t('cfgs.skills.0'),
        t('cfgs.skills.1'),
        t('cfgs.skills.2'),
        t('cfgs.skills.3')
      ],
      type: 'degree'
    },
    {
      id: 'sociology',
      title: t('sociology.title'),
      institution: t('sociology.institution'),
      period: t('sociology.period'),
      location: t('sociology.location'),
      description: t('sociology.description'),
      subjects: [
        t('sociology.subjects.0'),
        t('sociology.subjects.1'),
        t('sociology.subjects.2'),
        t('sociology.subjects.3')
      ],
      skills: [
        t('sociology.skills.0'),
        t('sociology.skills.1'),
        t('sociology.skills.2')
      ],
      type: 'degree'
    }
  ];

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {educationData.map((education) => (
        <div
          key={education.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => toggleCard(education.id)}
        >
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                  education.type === 'bootcamp' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  education.type === 'degree' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                }`}>
                  {education.type === 'bootcamp' ? 'Bootcamp' : 
                   education.type === 'degree' ? 'Degree' : 'Certification'}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {education.title}
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  expandedCard === education.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
              {education.institution}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {education.period} • {education.location}
            </p>
          </div>

          {/* Description (always visible) */}
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
            {education.description}
          </p>

          {/* Expandable Content */}
          {expandedCard === education.id && (
            <div className="space-y-4 animate-fadeIn">
              {/* Subjects */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                  Key Subjects:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                  Skills Developed:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Expand/Collapse Hint */}
          {!expandedCard && (
            <div className="text-blue-600 dark:text-blue-400 text-xs font-medium flex items-center mt-2">
              <span>Click to see details</span>
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}