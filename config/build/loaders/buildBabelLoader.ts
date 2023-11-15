import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin'
import { type BuildOption } from '../types/config'

interface BuildBabelLoaderProps extends BuildOption {
    isTsx?: boolean
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => {
    return {
        test: isTsx ? /\.(tsx|jsx)$/ : /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx
                        }
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && [
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
