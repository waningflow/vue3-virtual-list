import fs from "fs";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";
import PostCSS from "rollup-plugin-postcss";
import pkg from "./package.json"; // import our package.json file to re-use the naming

const esbrowserslist = fs
  .readFileSync("./.browserslistrc")
  .toString()
  .split("\n")
  .filter(entry => entry && entry.substring(0, 2) !== "ie");

export default {
  // this is the file containing all our exported components/functions
  input: "src/index.ts",
  // this is an array of outputed formats
  output: [
    {
      file: pkg.module, // the name of our esm librry
      format: "esm" // the format of choice
      // sourcemap: true // ask rollup to include sourcemaps
    },
    {
      file: pkg.main,
      format: "cjs"
      // sourcemap: true
    },
    {
      file: pkg.unpkg,
      format: "umd",
      name: "Vue3VirtualList",
      // sourcemap: true,
      globals: {
        vue: "Vue"
      }
    }
  ],
  // this is an array of the plugins that we are including
  plugins: [
    vue(),
    PostCSS({
      modules: {
        generateScopedName: "[local]___[hash:base64:5]"
      },
      include: /&module=.*\.css$/
    }),
    // Process all `<style>` blocks except `<style module>`.
    PostCSS({ include: /(?<!&module=.*)\.css$/ }),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
      babelHelpers: "bundled",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: esbrowserslist
          }
        ],
        "@babel/preset-typescript"
      ]
    }),
    commonjs()
  ],
  // ask rollup to not bundle Vue in the library
  external: ["vue"]
};
