const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const mocha = require('gulp-mocha');

gulp.task('test-unit', testUnit);
gulp.task('build', build);

/****** Task Function Definitions ******/

function build() {
  return gulp.src('src/**/*.ts', {
      base: 'dist',
    })
    .pipe(tsProject())
    .pipe(gulp.dest('dist'));
}

function testUnit(done) {
  return gulp.src('test/**/*.ts', {
      base: '.'
    })
    .pipe(tsProject())
    .pipe(gulp.dest('.'))
    .pipe(mocha({
      reporter: 'nyan'
    }));

  done();
}