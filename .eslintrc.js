module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:storybook/recommended',
        'plugin:@conarti/feature-sliced/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'eslint-plugin-react-hooks',
        // 'fenyadim-plugin',
    ],
    rules: {
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/react-in-jsx-scope': 'off',
        // 'fenyadim-plugin/path-checker': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-namespace': [2, { allowDeclarations: true }],
        'react/no-deprecated': 'off',
        '@typescript-eslint/naming-convention': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'n/no-callback-literal': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@conarti/feature-sliced/layers-slices': 'warn',
        '@typescript-eslint/consistent-type-imports': [
            1,
            {
                disallowTypeAnnotations: false,
            },
        ],
        '@typescript-eslint/no-misused-promises': [
            2,
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
