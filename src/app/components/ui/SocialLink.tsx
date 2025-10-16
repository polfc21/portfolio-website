import { SocialLinkProps } from '@/app/lib/types';

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}