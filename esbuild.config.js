// This configuration uses esbuild to bundle the JavaScript files in the src directory,
// transpiling them with Babel, and outputs a minified file to the dist directory.
import { build } from "esbuild";
import babel from "esbuild-plugin-babel";


build({
  entryPoints: ["src/main.js"],
  bundle: true,
  outfile: "dist/main.js",
  minify: false,
  plugins: [babel()],
  target: "es5",
}).catch(() => process.exit(1));
