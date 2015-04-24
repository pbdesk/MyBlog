;(function () {
    'use strict';

    var GU = require('./gulp/gulp.utils');
    var requireDir = require('require-dir')('./gulp/tasks', {recurse: true});

    GU.gulp.task('help', GU.GP.taskListing);
    GU.gulp.task('default', ['help']);

    GU.gulp.task('images',  function() {
        //log('Copying and compressing the images');

        return GU.gulp
            .src(GU.Configs.images)
            .pipe(GU.GP.imagemin({optimizationLevel: 4}))
            .pipe(GU.gulp.dest(GU.Configs.buildLoc));
    });


})();

