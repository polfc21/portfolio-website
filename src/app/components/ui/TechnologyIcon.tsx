import Image from 'next/image';
import { JSX } from 'react';
import { TechnologyIconProps } from '@/app/lib/types';

export default function TechnologyIcon({ name, src, className = "w-6 h-6" }: TechnologyIconProps): JSX.Element {
  return (
    <Image 
      src={src} 
      alt={name}
      width={24}
      height={24}
      className={`${className} object-contain`}
    />
  );
}