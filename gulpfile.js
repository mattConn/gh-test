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

const dist = "dist"; // distributable
const src = "src"; // source

const del = require("del");
const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");

// generate html from pug
function html() {
    return gulp.src(["src/*.html","!src/_*.html"])
    .pipe(nunjucks.compile(data))
    .pipe(gulp.dest(`${dist}/`));
}

function clean() {
    return del(dist);
}

exports.html = html;
exports.clean = clean;
exports.default = gulp.series(html);