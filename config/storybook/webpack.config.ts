import path from 'path'
import type webpack from 'webpack'
import { DefinePlugin, type RuleSetRule } from 'webpack'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
    const rules = config.module!.rules as RuleSetRule[]
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: ''
    }
    config.resolve!.modules = [paths.src, 'node_modules']
    config.resolve!.extensions!.push('.ts', '.tsx')
    config.resolve!.alias = { '@': paths.src }

    config.module!.rules = rules.map((rule: RuleSetRule) => {
        if ((rule.test as string)?.toString().includes('svg')) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module!.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    })

    config.module!.rules.push(buildCssLoaders(true))

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook')
    }))

    return config
}
