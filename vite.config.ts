import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  // Determine base path for GitHub Pages
  // Format: /{repo-name}/ (e.g., /senior-flutter-developer-portfolio/)
  // Use env variable to allow override, fallback to '/' for local dev
  const base = process.env.VITE_BASE_PATH || (mode === 'production' ? '/senior-flutter-developer-portfolio/' : '/');

  return {
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.MAIL_JS_SERVICE_ID': JSON.stringify(env.MAIL_JS_SERVICE_ID),
      'process.env.MAIL_JS_TEMPLATE_ID': JSON.stringify(env.MAIL_JS_TEMPLATE_ID),
      'process.env.MAIL_JS_KEY': JSON.stringify(env.MAIL_JS_KEY),
      'process.env.VITE_RECAPTCHA_SITE_KEY': JSON.stringify(env.VITE_RECAPTCHA_SITE_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: false, // Disable in production for security
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
    },
  };
});
