({
    
    appDir  : '../public/assets/js-dev',
    baseUrl : '.',
    dir     : '../public/assets/js',

    optimize            : 'uglify',
    skipDirOptimize     : true,
    normalizeDirDefines : 'skip',

    paths: {
        jQuery          : '_wrappers/jquery.wrapper',
        jScroll         : '_lib/jquery.mousewheel.min',
        jEase           : '_lib/jquery.easing.1.3.min',
        Handlebars      : '_lib/handlebars-1.0.0',
        text            : '_lib/text',
        BaseView        : 'views/_BaseView'
    },

    shim: {

    },

    modules: [
        {
            name    : 'Main'
        }
    ]
})