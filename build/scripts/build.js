({
    appDir  : '../public/assets/js-dev',
    baseUrl : '.',
    dir     : '../public/assets/js',

    optimize            : 'uglify',
    skipDirOptimize     : true,
    normalizeDirDefines : 'skip',

    paths: {
        order       :'lib/order',
        jQuery      :'wrapper/jquery.wrapper',
        Underscore  : 'wrapper/underscore.wrapper',
        backbone    :'wrapper/backbone.wrapper',
        Handlebars  :
        text        :'lib/text',
        jScroll     :'lib/jquery.mousewheel.min',
        jEase       :'lib/jquery.easing.1.3.min',

    },

    shim: {
        "Backbone": {
            deps    : ["jQuery", "Underscore"],
            exports : 'Backbone'
        }
    },

    modules: [
        {
            name    : 'Main'
        }
    ]
})