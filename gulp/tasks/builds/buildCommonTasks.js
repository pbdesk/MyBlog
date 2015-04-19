;(function () {
    'use strict';

    var gUtil = require('./../gulp.utils.js')();

    /*
     gulp: gulp, // gulp object require('gulp');
     GP: GP, // GulpPlugins - require('gulp-load-plugins')({lazy:true});
     config: gulpConfig,
     args: args
     */

    gUtil.gulp.task('test-task', function () {
        gUtil.log('this is test task');
    });

}());
