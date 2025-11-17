import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...js.configs.recommended,
    plugins: {
      next
    },
    rules: {
        ...next.configs.recommended.rules,
        extends: compat.extends("next/core-web-vitals"),
    }
}]);