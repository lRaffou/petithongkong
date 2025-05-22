import eslintPluginNext from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

export default [...tseslint.configs.recommended, ...eslintPluginNext.configs['core-web-vitals']];
