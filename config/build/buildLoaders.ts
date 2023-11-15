import type webpack from 'webpack'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { type BuildOption } from './types/config'

export function buildLoaders (options: BuildOption): webpack.RuleSetRule[] {
    const { isDev } = options

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

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

    const cssLoader = buildCssLoaders(isDev)

    return [
        svgLoader,
        fileLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader
    ]
}
