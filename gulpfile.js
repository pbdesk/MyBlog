;(function () {
    'use strict';

    var GU = require('./gulp/gulp.utils');
    var requireDir = require('require-dir')('./gulp/tasks', {recurse: true});

    GU.gulp.task('help', GU.GP.taskListing);
    GU.gulp.task('default', ['help']);


})();

