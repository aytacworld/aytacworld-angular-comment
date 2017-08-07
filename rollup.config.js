const pkg = require('./package.json');

export default {
  dest: 'dist/bundles/' + pkg.name + '.umd.js',
  entry: 'dist/index.js',
  format: 'umd',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    '@angular/common': 'ng.common',
    'rxjs': 'rxjs'
  },
  moduleName: 'ng.simpleForms',
  sourceMap: false,
  external: ['@angular/core', '@angular/forms', '@angular/common', 'rxjs']
}
