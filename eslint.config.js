//Ce fichier de configuration permet de définir comment ESLint doit se comporter dans votre projet Vue.js avec TypeScript.
//Il indique quels fichiers doivent être analysés et quels répertoires doivent être ignorés.
//Il applique également des configurations de linting spécifiques à Vue et TypeScript,
//tout en désactivant les règles de formatage pour permettre à Prettier de gérer ce dernier.
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  skipFormatting,
]
