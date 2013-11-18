/*
 * CONFIG settings for REQUIRE JS
 * PATHS etc refs to all libs.
 */

requirejs.config({
    baseUrl: '/assets/js-dev/',

    /*
     * Define aliases for the paths used.
     * If you edit this section, make sure the analog edit goes into
     * build.js as well. These need to stay in sync.
     */

    paths: {
        jQuery          : '_wrappers/jquery.wrapper',
        jScroll         : '_lib/jquery.mousewheel.min',
        jEase           : '_lib/jquery.easing.1.3.min',
        Handlebars      : '_lib/handlebars-1.0.0',
        text            : '_lib/text',
        BaseView        : 'views/_BaseView'
    },
    priority: ['jQuery'],
    shim: {
        "jScroll":{
            deps    :["jQuery"],
            exports :"jScroll"
        },
        "jEase":{
            deps    :["jQuery"],
            exports :"jEase"
        },
        "Handlebars":{
            deps    :["jQuery"],
            exports : "Handlebars"
        },
        "BaseView" : {
            deps    : ["jQuery", "Handlebars"],
            exports : "BaseView"
        }
    }
});

/* -----------------------------------
 * ----- Let us start up the APP -----
 * -----------------------------------
 */

require([
    'jQuery',
    'Handlebars',
    'models/Main.siteMap',
    '_modules/debugger',
    '_modules/Global.setup',
    '_modules/UI.gridoverlay',
    'jScroll',
    'jEase',
    'text' 
], function(
    $,
    Handlebars,
    siteMap
) {
    
    window.App = window.App || {};
    
    // Determine what page or view to load here:
    App.init = function() {
        Debug.trace( ' ----- INITIALIZE APP ----' );
        // Determine the path and what view to load:
        var view = null,
            Address = window.location.pathname;

        for( var s = 0; s < siteMap.directory.length; s++ ){
            if( Address == siteMap.directory[s].path ) {
                Debug.trace("  - page match " + siteMap.directory[s].view );
                view = siteMap.directory[s];
            }
        }

        if( view == null ){
            if( !siteMap.defaultPage ){
                siteMap.defaultPage = 0;
            }
            view = siteMap.directory[ siteMap.defaultPage ];
        }

        App.loadView( view, App.loadComplete );
    };

    /*
     * ----- Load Page View ----
     * load a specified view and template
     */
    App.loadView = function(vw,callBack) {
        require([
                    vw._Controller
                ], function( 
                    View
                ){

                    if( typeof vw.subviews === 'undefined' ){
                        // Debug.trace(vw.view + ' view no subviews Defined ')
                        vw.subviews = [];
                    }
                    
                    if( typeof vw.appendTo === 'undefined' ){
                        // Debug.trace(vw.view + ' view no appendTo Defined ')
                        vw.appendTo = '#site-composite';
                    }

                    if( typeof vw._Model === 'undefined' ){
                        vw._Model = {};
                    }

                    var view = new View(vw);
                        
                    if( typeof callBack !== 'undefined' ){
                        callBack();
                    }

                });
    };  

    /*
     * ------- Reveal ------
     * animate out the loader and fade out
    */
    App.loadComplete = function() {
        Debug.trace(' APP LOAD COMPLETE');
        $("#siteloader")
                .delay(100)
                .animate({
                    "top": "25px"
                })
                .animate({
                    "opacity":0,
                    'top':'-100px'
                }, {
                    duration: 300,
                    complete: App.revealAll
                    // easing:'easeInBounce'
                });
    };

    // remove the loader and show the content
    App.revealAll = function() {
        $("#site-composite").fadeIn();
        $("#siteloader-wrapper").remove();
    };

    App.init();

});

