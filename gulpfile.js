"use strict";

// website data
const data = {
    navlinks: [
            {url: "index.html", text: "Home"},
            {url: "storage/resume-2019.pdf", text: "Resume"},
            {url: "portfolio.html", text: "Portfolio"},
            {url: "https://github.com/mattConn/", text: "GitHub"},
            {url: "https://codepen.io/mattConn/", text: "CodePen"},
            {url: "https://www.linkedin.com/in/mattconndev/", text: "LinkedIn"},
            {url: "https://twitter.com/mattconndev", text: "Twitter"},
            {url: "https://dev.to/mattconn", text: "Blog"}
        ]
};

const del = require("del");
const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");
const sass = require("gulp-sass");

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

function clean() {
    return del("dist");
}

// tasks
exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.default = gulp.series(templates, styles);