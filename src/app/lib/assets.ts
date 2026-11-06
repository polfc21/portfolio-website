// Prefixes public asset paths with the GitHub Pages base path.
// `NEXT_PUBLIC_BASE_PATH` is inlined at build time by next.config.ts.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  return `${basePath}${path}`;
}
