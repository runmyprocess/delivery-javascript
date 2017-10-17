/**
 * Gulp configuration file
 * For convenience all the Gulp tasks are aliased in Npm
 * Tasks : bundle, minify, lint, test, doc
 */

// Main
const gulp = require('gulp')
const webpack = require('webpack-stream')

// Optimization
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

// Test
const eslint = require('gulp-eslint')
const mocha = require('gulp-mocha')

// Documentation
const documentation = require('gulp-documentation')
const template = require('gulp-template')
const fs = require('fs')

// Utilities
const sequence = require('gulp-sequence')
const rename = require('gulp-rename')
const gutil = require('gulp-util')
const del = require('del')

// Webpack config
var webpackConfig = require('./webpack.config.js')

// Data
const packageJSON = require('./package.json')
const prefix = 'runmyprocess-delivery-app'
const source = './src/js/main.js'

gulp.task('build', function () {
  return gulp.src('src/index.js')
    .pipe(webpack({
      // Any configuration options...
    }))
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min'
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', sequence('bundle', 'minify'))

// LINT - ESLINT
gulp.task('lint', () =>
  gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(eslint.failAfterError())
)

// TEST - MOCHA
gulp.task('test', function () {
  gulp.src('./test/test.js', {read: false})
  // `gulp-mocha` needs filepaths so you can't have any plugins before it
    .pipe(mocha({
      reporter: 'spec',
      require: 'babel-register',
      globals: {
        should: require('chai')
      }
    }))
    .on('error', gutil.log)
})

// BUNDLE - WEBPACK
gulp.task('bundle', function (done) {
  'use strict'
  del(['dist/js/*.js', 'dist/js/tmp/*.js', '!dist/js/archive/*.js'])
  return gulp.src(source)
    .pipe(
      webpack(webpackConfig)
        .on('error', gutil.log)
    )
    .pipe(babel())
    .pipe(rename(prefix + '-' + packageJSON.version + '.js'))
    .pipe(gulp.dest('./dist/js/tmp'))
    // .on('end', done)
})

// TRANSPILE - BABEL
gulp.task('babel', () => {
  return gulp.src('./dist/js/tmp/*.js')
    // .pipe(babel())
    .pipe(rename(function (path) {
      path.basename += '.babel'
    }))
    .pipe(gulp.dest('dist/js'))
})

// MINIFY - UGLIFY
gulp.task('minify', function () {
  return gulp.src('./dist/js/tmp/*.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min'
    }))
    .pipe(gulp.dest('./dist/js'))
})

// BACKUP
gulp.task('backup', () =>
  gulp.src('dist/js/*.js')
    .pipe(gulp.dest('./dist/js/archive'))
    .pipe(gulp.dest('./backup'))
)

// DOCUMENTATION
gulp.task('doc', () =>
  gulp.src(source)
    .pipe(documentation('html', {'config': 'documentation.yml'}))
    .pipe(gulp.dest('./doc'))
)

// DOWNLOAD PAGE
gulp.task('page', () =>
  gulp.src('src/doc.html')
    .pipe(template({
      description: packageJSON.description,
      version: packageJSON.version,
      contributors: packageJSON.contributors,
      homepage: packageJSON.homepage,
      bugs: packageJSON.bugs,
      archives: fs.readdirSync('dist/js/archive/'),
      prefix: prefix
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(''))
)
