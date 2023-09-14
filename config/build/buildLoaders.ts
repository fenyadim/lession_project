import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOption } from "./types/config";

export function buildLoaders(option: BuildOption): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: option.isDev ? '[name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
          },
        }
      },
      "sass-loader"
    ],

  };

  return [tsLoader, cssLoader];
}
