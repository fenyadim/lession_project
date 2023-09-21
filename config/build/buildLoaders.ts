import type webpack from 'webpack'
import { type BuildOption } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'

export function buildLoaders (option: BuildOption): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const babelLoader = {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const cssLoader = buildCssLoaders(option.isDev)

    return [svgLoader, fileLoader, babelLoader, tsLoader, cssLoader]
}
