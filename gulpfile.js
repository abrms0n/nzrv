 // подключаем gulp
 const gulp = require ("gulp");

 // создадим две переменные, отвечающие за чтение исходных файлов (src) и запись сгенерированных файлов (dest).
 const {src, dest} = require ("gulp");
 
 // передаем модули в переменные
 const autoprefixer = require ("gulp-autoprefixer");
 const rename = require ("gulp-rename");
 const sass = require ("gulp-sass");
 const cssnano = require ("gulp-cssnano");




//  var path = {
//         build: {
//             css: "dist/"
//     },
//         src: {
//             css: "src/style.scss",
//     }
// }



// function css (){
//     return src(path.src.css, {base: "src/"})
//         .pipe(sass())
//         .pipe(autoprefixer({
//             Browserslist: ['last 8 versions'],
//             cascade: true
//     }))
// }