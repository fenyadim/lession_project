import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCssLoaders = (isDev: boolean): { test: RegExp, use: any[] } => (
    {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]

    }
)
