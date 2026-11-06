import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ca', 'en', 'es'],
  defaultLocale: 'ca',
  localePrefix: 'always',
});
