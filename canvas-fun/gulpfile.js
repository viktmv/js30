const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const mocha = require('gulp-mocha')
const browserSync = require('browser-sync').create()

gulp.task('js', () =>
    gulp.src(['src/*.js','!node_modules/**', '!gulpfile.js'])
        // .pipe(mocha({reporter: 'nyan'}))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(babel({ presets: ['es2015']}))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream())
)

gulp.task('html', () =>
    gulp.src('src/*.html')
        .pipe(gulp.dest('app'))
        // .pipe(browserSync.stream())
)
//
gulp.task('watch', () =>
  gulp.watch(['*/*.js', '*/*.html'], ['js', 'html'])
)

gulp.task('browser-sync', function() {
    browserSync.init({
        server: { baseDir: "app/" }
    })
})

gulp.task('default', ['watch', 'browser-sync', 'js', 'html'])
