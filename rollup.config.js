import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV === "production";

/** @type {import("rollup").RollupOptions[]} */
const config = [{
    input: "src/index.ts",
    output: {
        compact: isProduction,
        file: "dist/index.js",
        format: "umd",
        name: "JsonTyped",
        sourcemap: true
    },
    plugins: [typescript()],
    treeshake: isProduction
}, {
    input: "src/index.ts",
    output: {
        file: "dist/index.d.ts",
        format: "es"
    },
    plugins: [dts()]
}];

if (isProduction) config[0].plugins?.push(terser());

// tslint:disable-next-line: no-default-export
export default config;
