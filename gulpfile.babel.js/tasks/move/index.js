/* eslint-disable no-unused-vars */

import gulp from "gulp";
import path from "path";
import { paths } from "../../config";

export default gulp.task("move", done => {
    let file1 = gulp.src(path.resolve(`${paths.src}/team.json`))
        .pipe(gulp.dest(paths.dist));


    done();
});
