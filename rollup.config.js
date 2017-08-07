const pkg = require('./package.json');

export default {
  dest: 'dist/bundles/' + pkg.name + '.umd.js',
  entry: 'dist/index.js',
  format: 'umd',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs': 'rxjs'
  },
  moduleName: 'ng.simpleForms',
  sourceMap: false,
  external: [ '@angular/core', 'rxjs' ]
}
