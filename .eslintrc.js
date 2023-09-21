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
    plugins: ['react'],
    rules: {
        '@typescript-eslint/indent': [2, 4, { 'ignoredNodes': ['JSXElement'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        'react/no-deprecated': 'off',
        '@typescript-eslint/naming-convention': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-misused-promises': [
            2,
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
