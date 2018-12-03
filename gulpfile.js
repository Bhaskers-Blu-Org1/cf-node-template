const gulp = require('gulp');
const tsPipeline = require('gulp-webpack-typescript-pipeline');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const mocha = require('gulp-mocha');

tsPipeline.registerBuildGulpTasks(
  gulp,
  {
    entryPoints: {
      'scoringEngine': './src/index.ts'
    },
    outputDir: __dirname + '/dist'
  }
);

gulp.task('test-unit', () => {
    return gulp.src('test/**/*.ts', {
        base: '.'
      })
      /*transpile*/
      .pipe(tsProject())
      /*flush to disk*/
      .pipe(gulp.dest('.'))
      /*execute tests*/
      .pipe(mocha({
        reporter: 'nyan'
      }));
  });