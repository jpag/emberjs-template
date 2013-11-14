/*
	CONFIG settings for REQUIRE JS
	PATHS etc refs to all libs.
*/
requirejs.config({
    baseUrl: '/assets/js-dev/',

    // Define aliases for the paths used.
    //
    // If you edit this section, make sure the analog edit goes into
    // build.js as well. These need to stay in sync.

    paths: {
        jQuery          : '_wrappers/jquery.wrapper',
        jScroll         : '_lib/jquery.mousewheel.min',
        jEase           : '_lib/jquery.easing.1.3.min',
        Handlebars      : '_lib/handlebars-1.0.0',
        Ember           : '_lib/ember-1.1.2',
        text            : '_lib/text',
        BaseContainer   : 'views/_BaseContainer',
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
        "Ember" : {
            deps    : ["jQuery", "Handlebars" ],
            exports : 'Ember'
        },
        "BaseContainer" : {
            deps    : ["jQuery", "Handlebars" , "Ember"],
            exports : "BaseContainer"
        },
        "BaseView" : {
            deps    : ["jQuery", "Handlebars" , "Ember"],
            exports : "BaseView"
        }
    }
});


// ----- Let us start up the APP -----

require([
    'jQuery',
    'Handlebars',
    'Ember',
    'configs/Main.siteMap',
    '_modules/debugger',
    '_modules/Global.setup',
    // need to set this up to run automatically.
    '_modules/UI.gridoverlay',
    'jScroll',
    'jEase',
    'text' 
], function(
    $,
    Handlebars,
    Ember,
    siteMap
) {
    
    window.App = Ember.Application.create();
    
    // Determine what page or view to load here:
    App.init = function() {
        Debug.trace( ' ----- INITIALIZE ----' );
       
        // Determine the path and what view to load:
        
        var view = null,
            Address = window.location.pathname;

        for( var s = 0; s < siteMap.directory.length; s++ ){
            if( Address == siteMap.directory[s].path ) {
                Debug.trace(" found match " + siteMap.directory[s].view );
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
     *
     * ----- Load Page View ----
     *
     */
    // load a specified view 'vw' is the path 
    // relative to the js script folder.
    App.loadView = function(vw,callBack) {
        require([
                    vw.view
                ], function( 
                    View
                ){

                    if( typeof vw.subviews === 'undefined' ){
                        Debug.trace(vw.view + ' view no subviews Defined ')
                        vw.subviews = [];
                    }
                    if( typeof vw.appendTo === 'undefined' ){
                        Debug.trace(vw.view + ' view no appendTo Defined ')
                        vw.appendTo = '#site-composite';
                    }
                    if( typeof vw.config === 'undefined' ){
                        vw.config = Ember.Object.create();
                    }else{
                        vw.config = Ember.Object.create(vw.config);
                    }

                    var view = View.create({
                                            subviews: vw.subviews,
                                            controller: vw.config
                                            }).appendTo(vw.appendTo);    

                    if( typeof callBack !== 'undefined' ){
                        callBack();
                    }

                });
    };  

    // Inject a new template into the Ember app
    App.injectTemplate = function(html) {
        var templateID = 'loaded-template-'+(new Date()).getTime()+'-'+Math.round(Math.random()*999);   
        
        /*
        var template = $('<script/>', {
                                        'data-template-name' : templateID,
                                        type : 'text/x-handlebars'
                                        })
                                        .html(html)
                                        .appendTo("body");
        */

        // force update of Ember Handlebars
        // Ember.Handlebars.bootstrap();
        
        // alternatively could just manually inject into Ember.TEMPLATES[];
        if (Ember.TEMPLATES[templateID] !== undefined) {
            Debug.trace(' Template '+templateID+' already exists');
        } else {
            // Debug.trace(' Template does not exist yet');
            // inject into the Ember template list.
             Ember.TEMPLATES[templateID] = Ember.Handlebars.compile(html);    
        }

        return templateID;
    };

    /*
     *
     * ------- Reval ------
     *
    */
    // animate out the loader and fade out
    App.loadComplete = function() {
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
                    //easing:'easeInBounce'
                });
    };

    // remove the loader and show the content
    App.revealAll = function() {
        $("#site-composite").fadeIn();
        $("#siteloader-wrapper").remove();
    };


    App.init();

});






