const gulp = require('gulp')
const pump = require('pump')
const eslint = require('gulp-eslint')
const mocha = require('gulp-mocha')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const documentation = require('gulp-documentation')

/*
gulp.task('compress', function (cb) {
  pump([
    gulp.src('lib/*.js'),
    uglify(),
    gulp.dest('dist'),
    rename('bundle.js')
  ],
  cb
  )
})
*/

gulp.task('build', function () {
  return gulp.src('src/index.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min'
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('test', () =>
  gulp.src('test/test.js', {read: false})
  // `gulp-mocha` needs filepaths so you can't have any plugins before it
    .pipe(mocha({reporter: 'spec'}))
)

gulp.task('babel', () => {
  return gulp.src('src/index.js')
    .pipe(babel())
    .pipe(rename(function (path) {
      path.basename += '.babel'
    }))
    .pipe(gulp.dest('dist'))
})

// Generating a pretty HTML documentation site
gulp.task('documentation', function () {
  return gulp.src('src/index.js')
    .pipe(documentation('html'))
    .pipe(gulp.dest('./doc'))
})

gulp.task('lint', () => {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  // return gulp.src(['**/*.js','!node_modules
  return gulp.src(['src/*.js', '!node_modules/**'])
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

gulp.task('default', ['documentation', 'build'], function () {
  // This will only run if the lint task is successful...
})
