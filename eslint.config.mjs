import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import {
  cleanCodeBaseRules,
  cleanCodeTypeScriptRules,
  cleanCodeTypeAwareRules,
  cleanCodeServerClientRules,
  cleanCodeMetadataRules,
  cleanCodeInteractionRules,
  cleanCodePerformanceRules,
  cleanCodeReactRules,
} from "./clean-code-rules.mjs";

const SOURCE_FILES = ["app/**", "components/**", "context/**", "lib/**", "data/**"];
const UI_FILES = ["app/**", "components/**", "context/**"];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  cleanCodeBaseRules,
  cleanCodeTypeScriptRules,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: cleanCodeTypeAwareRules.rules,
  },
  { files: ["app/**"], ...cleanCodeMetadataRules },
  { files: UI_FILES, ...cleanCodeInteractionRules },
  { files: SOURCE_FILES, ...cleanCodePerformanceRules },
  { files: SOURCE_FILES, rules: cleanCodeReactRules.rules },
  {
    // Server/client boundary isolation (CLAUDE.md Rule 17) — UI code only.
    files: ["app/**", "components/**"],
    rules: cleanCodeServerClientRules.rules,
  },
  {
    // Framework/tooling entry points that must default-export.
    files: [
      "**/page.tsx",
      "**/layout.tsx",
      "**/template.tsx",
      "**/loading.tsx",
      "**/error.tsx",
      "**/not-found.tsx",
      "**/global-error.tsx",
      "**/global-not-found.tsx",
      "**/default.tsx",
      "**/route.ts",
      "**/middleware.ts",
      "**/instrumentation.ts",
      "**/sitemap.ts",
      "**/robots.ts",
      "**/opengraph-image.tsx",
      "**/twitter-image.tsx",
      "**/icon.tsx",
      "**/apple-icon.tsx",
      "next.config.*",
      "postcss.config.*",
      "eslint.config.*",
      "playwright.config.*",
    ],
    rules: { "no-restricted-syntax": "off" },
  },
  {
    // The unambiguously server-only subset — also lift the import ban.
    files: [
      "**/route.ts",
      "**/middleware.ts",
      "**/instrumentation.ts",
      "**/sitemap.ts",
      "**/robots.ts",
      "**/opengraph-image.tsx",
      "**/twitter-image.tsx",
      "**/icon.tsx",
      "**/apple-icon.tsx",
    ],
    rules: { "no-restricted-imports": "off" },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored copy of the canonical rules: re-copied, never edited here.
    "clean-code-rules.mjs",
  ]),
]);

export default eslintConfig;
