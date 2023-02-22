const nodeExternals = require("webpack-node-externals");
module.exports = {
  babel: {
    plugins: [
      ["react-native-web", { commonjs: true }],
    ]
  },
  webpack: {
    configure: {
      target: "electron-renderer",
      externals: [
        nodeExternals({
          allowlist: [/webpack(\/.*)?/, "electron-devtools-installer"],
        }),
      ],
    },
  },
};
