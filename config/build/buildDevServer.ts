import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type BuildOption } from './types/config'

export function buildDevServer (option: BuildOption): DevServerConfiguration {
    return {
        port: option.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
