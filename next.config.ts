import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const repo = 'portfolio-website';
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubPages ? `/${repo}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
