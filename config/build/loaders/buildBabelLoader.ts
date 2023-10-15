import { type BuildOption } from '../types/config'

export const buildBabelLoader = ({ isDev }: BuildOption) => {
    return {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: [
                    isDev && require.resolve('react-refresh/babel')
                ].filter(Boolean)
            }
        }
    }
}
