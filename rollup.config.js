const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "src/index.js",
  output: {
    file: "public/bundle.js",
    format: "iife",
  },
  plugins: [resolve(), commonjs()],
};
