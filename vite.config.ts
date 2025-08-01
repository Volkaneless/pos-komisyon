import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Pre-render routes for better SEO
const prerenderRoutes = [
  '/',
  '/pos-types/sanal',
  '/pos-types/banka', 
  '/pos-types/cep',
  '/pos-types/mobil',
  '/pos-types/yazarkasa',
  '/pos-types/borsa-araci-kurum',
  '/calculator',
  '/amazon-calculator',
  '/trendyol-calculator',
  '/hepsiburada-calculator',
  '/n11-calculator',
  '/dolap-calculator',
  '/param-guvende-calculator',
  '/crypto-exchanges'
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Performance optimizations
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: true
  }
}));
