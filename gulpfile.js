"use strict";

// website data
const portfolio_img = "images/portfolio";
const data = {
    navlinks: [
            {url: "index.html", text: "Home"},
            {url: "storage/resume-2019.pdf", text: "Resume"},
            {url: "portfolio.html", text: "Portfolio"},
            {url: "https://github.com/mattConn/", text: "GitHub"},
            {url: "https://www.linkedin.com/in/mattconndev/", text: "LinkedIn"},
            {url: "https://twitter.com/mattconndev", text: "Twitter"},
            {url: "https://medium.com/@mattconndev", text: "Blog"}
        ],
    portfolio: [
        {text: "Charlie Webpage \"TL;DR\"", url: "http://helloitscharlie.com/tldr", img_fg: `${portfolio_img}/charlie-webpage-tldr-2.png`, img_bg: `${portfolio_img}/charlie-webpage-tldr.png`,},
        {text: "Casa Apicii", url: "http://casaapicii.com", img_fg: `${portfolio_img}/casa-apicii-2.png`, img_bg: `${portfolio_img}/casa-apicii.png`},
        {text: "Margaux NY", url: "https://margauxny.com/", img_fg: `${portfolio_img}/`, img_bg: `${portfolio_img}/margaux.png`},
        {text: "Follow The Money", url: "http://partners.wsj.com/netflix/follow-the-money/", img_fg: `${portfolio_img}/follow-the-money-2.png`, img_bg: `${portfolio_img}/follow-the-money.png`,},
        {text: "Defy Hunger Together", url: "http://partners.wsj.com/mini/defy-hunger-together/", img_fg: `${portfolio_img}/defy-hunger-2.png`, img_bg: `${portfolio_img}/defy-hunger.png`}
    ]
};

const del = require("del");
const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");
const sass = require("gulp-sass");

// move stored files
function move() {
    return gulp.src("src/storage/*")
        .pipe(gulp.dest("dist/storage"))

        .pipe(gulp.src("src/images/**/*"))
        .pipe(gulp.dest("dist/images"))

        .pipe(gulp.src("src/phaser-js-game/**/*"))
        .pipe(gulp.dest("dist/phaser-js-game"))

        .pipe(gulp.src("src/game-development-with-phaser/**/*"))
        .pipe(gulp.dest("dist/game-development-with-phaser"));
}

// generate css with sass
function styles() {
    return gulp.src(["src/styles/*.scss", "!src/styles/_*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("dist/styles"));
}

// generate html with nunjucks 
function templates() {
    return gulp.src(["src/templates/*.html","!src/templates/_*.html"])
    .pipe(nunjucks.compile(data))
    .pipe(gulp.dest("dist/"));
}

function javascript() {
    return gulp.src("src/javascript/*.js")
    .pipe(gulp.dest("dist"));
}

function clean() {
    return del("dist");
}


// watch files for changes
function watch() {
    gulp.watch(["src/templates/**/*.html"], templates);
    gulp.watch("src/styles/*.scss", styles);
    gulp.watch("src/javascript/*.js", javascript);
    gulp.watch("src/storage/*", move)

}
// tasks
exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.javascript = javascript;
exports.move = move;
exports.watch = watch;
exports.default = gulp.series(templates, styles, javascript, move);