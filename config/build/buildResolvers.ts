import type webpack from 'webpack'
import { type BuildOption } from './types/config'

export function buildResolvers ({ paths }: BuildOption): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            paths.src,
            'node_modules'
        ],
        mainFiles: ['index'],
        alias: {
            '@': paths.src
        }
    }
}
