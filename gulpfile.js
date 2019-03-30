"use strict";

const dist = "dist"; // distributable
const src = "src"; // source

const del = require("del");
const gulp = require("gulp");
const pug = require("gulp-pug");

// generate html from pug
function html() {
    return gulp.src("pug/*.pug")
    .pipe(pug())
    .pipe(gulp.dest(`${dist}/`));
}

function clean() {
    return del(dist);
}

exports.html = html;
exports.clean = clean;
exports.default = gulp.series(html);