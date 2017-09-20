/**
 * Gulp configuration file
 * For convenience all the Gulp tasks are aliased in Npm
 * Tasks : bundle, minify, lint, test, doc
 */

// Essentials
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

// Utilities
const sequence = require('gulp-sequence')
const rename = require('gulp-rename')
const gutil = require('gulp-util')

// Webpack config
var webpackConfig = require('./webpack.config.js')

const srcFiles = [
  // 'src/**/*.js'
  'src/*.js'
]

// Bundle modules with Webpack
gulp.task('bundle', function (done) {
  'use strict'
  return gulp.src(srcFiles)
    .pipe(
      webpack(webpackConfig)
        .on('error', gutil.log)
    )
    .pipe(gulp.dest('./dist'))
    // .on('end', done)
})

// Transpile to ES5 with Babel
gulp.task('babel', () => {
  return gulp.src('src/index.js')
    .pipe(babel())
    .pipe(rename(function (path) {
      path.basename += '.babel'
    }))
    .pipe(gulp.dest('dist'))
})

// Minify with Uglify
gulp.task('minify', function () {
  return gulp.src('dist/bundle.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min'
    }))
    .pipe(gulp.dest('./dist'))
})

// Test with Mocha
gulp.task('test', function () {
  gulp.src(['test/*.js'], {read: false})
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

// Generate HTML documentation with Documentation
gulp.task('doc', function () {
  return gulp.src('src/*.js')
    .pipe(documentation('html'))
    .pipe(gulp.dest('./doc'))
})

// Lint code with ESLint
// Use ESLint configuration file : .eslintrc
gulp.task('lint', () => {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  // return gulp.src(['**/*.js','!node_modules
  return gulp.src(['src/**/*.js', '!node_modules/**'])
  // eslint() attaches the lint output to the "eslint" property
  // of the file object so it can be used by other modules.
    .pipe(eslint())
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format('stylish'))
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError())
})

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

gulp.task('toto', sequence(['lint', 'test'], ['doc', 'build']))

gulp.task('default', ['doc', 'build'], function () {
  // This will only run if the lint task is successful...
})
