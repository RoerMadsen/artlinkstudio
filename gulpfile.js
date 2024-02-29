/*importerer soruce, destination, watch og serie funktioner fra Gulp */
const {src, dest, watch, series } = require('gulp')
/*Importerer Gulp-sass plugin fra Gulp */
const sass = require ('gulp-sass')(require('sass'))

/** Opret funktion der compiler sass til css
 * Tager Sass fra sourcefilen - index.scss og kører det gennem sass plugin, der omdanner det til en css mappe
*/
function buildStyles() {
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

/*Laver en watch funktion, der holder øje med ændringer i index.scss og automatisk overfører rettelser fra sass til css */
function watchTask() {
    watch(['index.scss', 'sass/**/*.scss'], buildStyles);
}


/** Bruger series funktion til at eksportere filerne i korrekt rækkefølge */
exports.default = series(buildStyles, watchTask)

/**
 * Åben Terminal og tast npm install gulp gulp-sass sass --save-dev
 *  derefter "gulp" for at compile */

