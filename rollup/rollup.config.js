import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

const babelOptions = require('./babel.config');

export default [
  // Universal module definition (UMD) build
  // - including console.* statements
  // - conditionally used to match snapshot size
  {
    input: './src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'iife',
      name: 'abcExample',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        ...babelOptions,
      }),
      resolve({
        extensions: ['.js']
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      copy({
        targets: [
          {src: 'src/index.html', dest: 'dist'},
          {src: 'src/favicon.ico', dest: 'dist'},
        ]
      }),
    ],
  },
];
