
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";

export default [
  // Next.js core web vitals configuration
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      next
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    }
  },
  
  // Additional 
  {
    rules: {
      // your custom rules here
    }
  }
];