;(function () {
    'use strict';

    var gUtil = require('./../../../gulp.utils.js')();

    /*
     gulp: gulp, // gulp object require('gulp');
     GP: GP, // GulpPlugins - require('gulp-load-plugins')({lazy:true});
     config: gulpConfig,
     args: args
     */

    gUtil.gulp.task('build-dev', ['build-dev-copy-server']);

    gUtil.gulp.task('build-dev-copy-server', function () {
        gUtil.log('Build Dev. Copying Server files');
        return gUtil.copyFiles(
            gUtil.config.serverSource,
            gUtil.config.buildDevLoc + 'server/'
        );
    });

}());

