;(function(){
    'use strict';

    var appFolder = './app/';
    var buildFolder = appFolder + 'build/';
    var currentTheme = 'green'; // red blue


    module.exports =  {
        serverJS:[
            './server/**/*.js'
        ],
        imagesSrc:[
            './app/img/**/*.*'
        ],
        appFolder: appFolder,
        buildFolder: buildFolder,
        htmlFiles: [
            appFolder + '_site/**/*.html'
        ],
        imagesDest: './app/_site/img',
        cssBuildFolder: buildFolder + 'css/',
        cssFiles: [
            appFolder + '/css/flexslider.css' ,
            appFolder + '/css/prettyPhoto.css',
            appFolder + '/css/style.css',
            appFolder + 'css/custom.css'
        ],
        cssTheme: [
            appFolder + 'css/' + currentTheme + '.css'
        ],
        cssBundle: [
           buildFolder  +  'css/flexslider.css' ,
           buildFolder  +  'css/prettyPhoto.css',
           buildFolder  +  'css/theme.css',
           buildFolder  +  'css/style.css',
           buildFolder  +  'css/custom.css'
        ],
        cssBundleDest: appFolder + 'css/',
        jsBuildFolder: buildFolder + 'js/',
        jsFiles:[
            appFolder + 'js/easing.js',
            appFolder + 'js/flexslider.js',
            appFolder + 'js/jquery.prettyPhoto.js',
            appFolder + 'js/isotope.js',
            appFolder + 'js/custom.js',
        ],
        jsMinFiles:[
            buildFolder + 'js/easing.js',
            buildFolder + 'js/flexslider.js',
            buildFolder + 'js/jquery.prettyPhoto.js',
            buildFolder + 'js/isotope.js',
            buildFolder + 'js/custom.js',
        ],
        jsBundleDest: appFolder + 'js/',
    };

}());