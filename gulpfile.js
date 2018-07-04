const gulp = require('gulp')

gulp.task('default', ()=>{})
const substraction = (x, y) => {
  return x - y
}
substraction(5,2)


var pug = require('gulp-pug');

gulp.task('pug', () => {
  return gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./html/'))
})
