const gulp = require('gulp');
const del = require('del');
const nunjucksRender = require('gulp-nunjucks-render');

gulp.task('clean', function () {
  del.sync(['dist/**']);
});

function copyImg() {
    return gulp.src([
      'src/assets/img/*'
    ])
    .pipe(gulp.dest('dist/assets/img'));
  }

  function copyPdf() {
    return gulp.src([
      './src/assets/pdf/*'
    ])
    .pipe(gulp.dest('dist/pdf'));
  }
  
  function copyHTML() {
    return gulp.src('src/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['src/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('dist'));
  }

  function copyJs() {
    return gulp.src('src/assets/**/*.js')
    .pipe(gulp.dest('dist/assets'));
  }

  function copyStyles() {
    return gulp.src('src/assets/css/*.css')
    .pipe(gulp.dest('dist/assets/css'));
  }

function gulptest(done) {
    return gulp.series(copyImg, copyPdf, copyStyles, copyHTML, copyJs),
    done()
  }
  gulp.task("gulptest", gulptest);

gulp.task('build', gulp.series(copyImg, copyPdf, copyStyles, copyHTML, copyJs));
