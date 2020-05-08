 // подключаем gulp
 import gulp from "gulp";

 // создадим две переменные, отвечающие за чтение исходных файлов (src) и запись сгенерированных файлов (dest).
 import { src, dest } from "gulp";
 
 // передаем модули в переменные
 import autoprefixer from "gulp-autoprefixer";
 import rename from "gulp-rename";
 import sass from "gulp-sass";
 import cssnano from "cssnano";


// создаём переменную "путь" которая будет использоваться галпом в своих методах 

 var path = {
        build: {
            // путь к новому файлу, который соберет gulp (изначально dist/)
            css: "styles/"
    },      
            // путь, откуда gulp возьмёт исходные файлы (изначально src/)
        src: {
            css: "blocks/*.scss",
    }
}


// далее сборка 

function css (){
    return src(path.src.css, {base: "blocks/"})
        .pipe(sass())
        .pipe(autoprefixer({
            Browserslist: ['last 8 versions'],
            cascade: true
    }))
}
