import gulp from 'gulp';
import path from 'path';
import { paths } from '../../config';


export default gulp.task('fonts', () => {
    return gulp.src(path.resolve(paths.src, paths.fonts.src))
        .pipe(gulp.dest(path.resolve(paths.dist, paths.fonts.dist)));
});
