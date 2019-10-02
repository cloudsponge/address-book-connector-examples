import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import html from 'rollup-plugin-template-html';
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
        runtimeHelpers: true,
        ...babelOptions,
      }),
      resolve({
        extensions: ['.js']
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      html({
        template: 'src/index.html',
        filename: 'index.html'
      }),
      copy({
        targets: [
          {src: 'src/favicon.ico', dest: 'dist'},
        ]
      }),
    ],
  },
];
