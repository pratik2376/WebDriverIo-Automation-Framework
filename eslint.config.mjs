import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["test-app/*.js"] },
  {
    ignores: ["allure-report", "allure-results", "node_modules", ".gitignore","eslint.config.mjs","package-lock.json" , "package.json","README.md","wdio.conf.js"]
  },
  {languageOptions: { globals: {...globals.mocha, ...globals.browser, ...globals.node, $: 'readonly', browser: 'readonly',expect: 'readonly',} }},
  pluginJs.configs.recommended,
];