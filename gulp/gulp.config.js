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
           buildFolder  +  '/css/flexslider.css' ,
           buildFolder  +  '/css/prettyPhoto.css',
           buildFolder  +  '/css/theme.css',
           buildFolder  +  '/css/style.css',
           buildFolder  +  'css/custom.css'
        ],
        cssBundleDest: appFolder + 'css/'
    };

}());