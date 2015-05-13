;(function () {
    'use strict';

    var GU = require('./gulp/gulp.utils');
    var requireDir = require('require-dir')('./gulp/tasks', {recurse: true});
    var vinylPaths = require('vinyl-paths');
    var runSequence = require('run-sequence');

    GU.gulp.task('help', GU.GP.taskListing);
    GU.gulp.task('default', ['help']);

    GU.gulp.task('optimize-images',  function() {
        //log('Copying and compressing the images');

        return GU.gulp
            .src(GU.Configs.imagesSrc)
            .pipe(GU.GP.imagemin({optimizationLevel: 4}))
            .pipe(GU.gulp.dest(GU.Configs.imagesDest));
    });

    GU.gulp.task('clean:build', function(done){
        return GU.gulp
            .src(GU.Configs.buildFolder)
            .pipe(vinylPaths(GU.del));
    })

    GU.gulp.task('minify-html', function(done){
        return GU.gulp
            .src(GU.Configs.htmlFiles)
            .pipe(GU.GP.minifyHtml({empty: true}))
            .pipe(GU.gulp.dest(GU.Configs.appFolder + '_site/'));
    })


})();

