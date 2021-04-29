const gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
        imagemin = require('gulp-imagemin'),
        notify = require('gulp-notify');

gulp.task('img', function(done) {
    gulp.src("src/image/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/image"));

        done();
})

gulp.task('autoprefixer', function(done) {
	gulp.src("src/css/*.css")
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest("src/css"));

        done();
})

gulp.task('sass', function(done) {
    gulp.src("src/scss/*.scss")
        .pipe( sass().on( 'error', notify.onError(
              {
                message: "<%= error.message %>",
                title  : "Sass Error!"
              } ) )
          )
        .pipe(autoprefixer())
        .pipe(gulp.dest("src/css"))
        .pipe(notify('SCSS - successful!'))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/scss/*.scss", gulp.series('sass'));
    gulp.watch("src/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('sass', 'autoprefixer', 'serve'));