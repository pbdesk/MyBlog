/* jshint -W068 */
;(function(){
    'use strict';

    var publicLoc = './public/';
    var serverLoc = './server/';

    var src               = 'app';
    var build             = 'build';
    var development       = 'build/development';
    var production        = 'build/production';
    var srcAssets         = 'app/_assets';
    var developmentAssets = 'build/assets';
    var productionAssets  = 'build/production/assets';

    module.exports = {
        browsersync: {
            development: {
                server: {
                    baseDir: [development, build, src]
                },
                port: 9999,
                files: [
                    developmentAssets + '/css/*.css',
                    developmentAssets + '/js/*.js',
                    developmentAssets + '/images/**',
                    developmentAssets + '/fonts/*'
                ]
            }
        },
        delete: {
            src: [developmentAssets]
        },
        jekyll: {
            development: {
                src:    src,
                dest:   development,
                config: '_config.yml'
            }
        }
    };

   /* module.exports = function() {
        var gulpConfig = {
            tempLoc: './.temp',
            buildLoc: './build',
            buildDevLoc: './build/dev/',
            buildRelLoc: './build/release/',
            buildPath: '',
            alljs:[
                './!*.js',
                './server/!**!/!*.js',
                './gulp/!**!/!*.js'
            ],
            publicJs:[

            ],
            publicCss:[

            ],
            serverSource: [
                './server/!**!/!*.*'
            ],
            bowerComponentsLoc: './bower_components/',
            publicVendorFolder: './public/vendor/',
            bower: {
                jquery: {
                    source: './bower_components/jquery/dist/!*.*',
                    dest: './public/vendor/jquery/'
                },
                bootstrap: {
                    source: './bower_components/bootstrap/dist/!**!/!*.*',
                    dest: './public/vendor/bootstrap/'
                },
                toastr: {
                    source: [
                        './bower_components/toastr/!*.css',
                        './bower_components/toastr/!*.js'
                    ],
                    dest: './public/vendor/toastr/'
                },
                fontawesomeCSS: {
                    source: './bower_components/fontawesome/css/!*.css',
                    dest: './public/vendor/fontawesome/'
                },
                fontawesomeFONTS: {
                    source: './bower_components/fontawesome/fonts/!*.*',
                    dest: './public/vendor/fontawesome/fonts/'
                },
                angularCore: {
                    source: [
                        './bower_components/angular/angular.js',
                        './bower_components/angular/angular.min.js',
                        './bower_components/angular/angular.min.js.map',
                        './bower_components/angular/angular-csp.css'
                    ],
                    dest: './public/vendor/angular/'
                }
            },
            myCss: [
                './public/css/!*.css'
            ],
            autoprefixerOptions: {
                cascade: true,
                remove: false,
                browsers :['> 5%', 'last 2 versions']
            }
        };
        return gulpConfig;
    };*/

}());
