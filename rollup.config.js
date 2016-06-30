import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/main.js',
  format: 'umd',
  plugins: [ babel(), uglify() ],
  dest: 'dist/nicetime.min.js'
};