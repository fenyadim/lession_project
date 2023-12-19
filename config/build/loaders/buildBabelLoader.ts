import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin'
import { type BuildOption } from '../types/config'

interface BuildBabelLoaderProps extends BuildOption {
    isTsx?: boolean
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => {
    const isProd = !isDev

    return {
        test: isTsx ? /\.(tsx|jsx)$/ : /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx
                        }
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && isProd && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid']
                        }
                    ],
                    isDev && require.resolve('react-refresh/babel')
                ].filter(Boolean)
            }
        }
    }
}
