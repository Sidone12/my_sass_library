const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('shinobi/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))// буде шукати які класи ми використовуємо в html і видаляти всі інші
    .pipe(dest('css'))
}

function watchTask() {
  watch(['sass/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)