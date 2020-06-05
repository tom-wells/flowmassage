var gulp = require('gulp')

//css
var cleanCss = require('gulp-clean-css')
var postcss = require('gulp-postcss')
var sourcemaps = require('gulp-sourcemaps')
var concat = require('gulp-concat')

// browser refresh 
var browserSync = require('browser-sync').create();
// images 
var imagemin = require("gulp-imagemin")
// github
var ghpages = require("gh-pages")



gulp.task('css', function() {
    return gulp.src([
        "src/css/reset.css",
        "src/css/app.css",
        "src/css/typography.css"
    ])
    .pipe(sourcemaps.init())
    .pipe(
        postcss([
            require('autoprefixer'),
            require('postcss-preset-env')({
                stage: 1,
                browsers: ["IE 11" , "last 2 versions"]
            })
        ])
        )
        .pipe(concat("app.css"))
    .pipe(
        cleanCss({
            compatibility: 'ie8'
        })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())

})

gulp.task("html",function () {
    return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"))
})

gulp.task("images", function () {
    return gulp.src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
})




gulp.task("fonts", function() {
    return gulp.src("src/fonts/*")
    .pipe(gulp.dest("dist/fonts"))
})

gulp.task("scripts", function() {
    return gulp.src("src/scripts/*")
    .pipe(gulp.dest("dist/scripts"))
})

gulp.task('watch', function () {

    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })

    gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload)
    gulp.watch("src/css/*", ["css"])
    gulp.watch("src/fonts/*", ["fonts"])
    gulp.watch("src/img/*", ["images"])
    gulp.watch("src/scripts/*", ["scripts"])

})


gulp.task("deploy", function() {
    ghpages.publish("dist")
})

gulp.task('default', ["html", "css", "fonts", "images", "scripts", "watch"])
    // we wnat to run "sass css/app.scss app.css --watch"