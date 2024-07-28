import { defineConfig, mergeConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      coverage: {
        exclude: [
          ...configDefaults.exclude,
          'src/main.tsx',
          '.eslintrc.cjs',
          '.prettierrc.cjs',
          'src/components/errorPage.tsx',
          'src/components/ErrorBoundary.tsx',
          'src/components/throwError.tsx',
          'src/components/ButtonTheme',
          'src/tests',
          'src/components/Box.tsx',
          'src/services/apiStarWars.ts',
        ],
      },
    },
  }),
);
