import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import * as tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  next.configs['flat/recommended'],
];
