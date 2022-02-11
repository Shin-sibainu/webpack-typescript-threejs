module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  entry: "./src/index.ts",
  output: {
    //出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        //拡張子.tsの場合
        test: /\.ts/,
        //Typescriptをコンパイルする
        use: "ts-loader",
      },
    ],
  },
  //import文で.tsファイルを解決するため
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
      static: "./dist"
  }
};
