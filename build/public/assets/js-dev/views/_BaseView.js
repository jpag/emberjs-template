define([], function() {
	
    return window.Class.extend({
    	
        settings    : {},
        name        : 'baseView',

    	/*
         * Event manager for this view 
         * keeps in scope of this view only 
         * so nothing else will respond to 'event'
         */
        eventManager: {
            
            // click : function(event){ do something },

            // ---- Touch
            // touchStart
            // touchMove
            // touchEnd
            // touchCancel
            
            // ---- KEY
            // keyDown
            // keyUp
            // keyPress
            
            // ---- MOUSE
            // mouseDown
            // mouseUp
            // contextMenu
            // click
            // doubleClick
            // mouseMove
            // focusIn
            // focusOut
            // mouseEnter
            // mouseLeave
            
            // ---- FORM
            // submit
            // change
            // focusIn
            // focusOut
            // input

            // ---- HTML 5 drag and drop
            // dragStart
            // drag
            // dragEnter
            // dragLeave
            // drop
            // dragEnd
        },

    	init : function(_config) {
            Debug.trace( this.name + ' INITIALIZED ----- ');

            // Make sure we have all the things we might need:
            // asign defaults if they do not exist
            if( typeof _config.subviews === 'undefined' ){
                // Debug.trace(vw.view + ' view no subviews Defined ')
                _config.subviews = [];
            }
            
            if( typeof _config.appendTo === 'undefined' ){
                // Debug.trace(vw.view + ' view no appendTo Defined ')
                _config.appendTo = '#site-composite';
            }

            if( typeof _config._Model === 'undefined' ){
                _config._Model = {};
            }

            this.settings = _config;
            this.renderTemplate();
    	},

        renderTemplate : function() {
            // Debug.trace(' - Loading template Model ' + this.settings._Model ); 

            var view = this,
                requireArray = [
                                'text!/assets/templates/'+this.settings._Template
                                ];

            /*
             * Do we need to load a model as well?
             * The model will hold all the variables that are to be displayed in the html template
             * _Model can be either a string (path to a config file)
             * or can be an object without the need to load anything else.                                 
             */
            if( typeof this.settings._Model == 'string' ){
                requireArray.push(this.settings._Model);
            };

            require( 
                requireArray,
            function(
                Template,
                Model
            ){

                if( typeof Model === 'undefined' ){
                    Model = view.settings._Model;
                }
                Debug.trace( ' - LOADED - ' + view.name + ' MODEL : ' );
                Debug.trace( Model );

                var handlebar = Handlebars.compile(Template);
                view.$el = $( handlebar(Model) );

                // should we wrap all views in a div like other frameworks?
                var appendTo = view.settings.appendTo,
                    parent = 'parent ';

                if( appendTo.indexOf( parent ) == 0 ){
                    // attach to the parent:
                    // Debug.trace(' - '+ view.name + ' Attaching to the parent view');
                    var find = appendTo.substr( parent.length  );
                    appendTo = view.settings.parent.find( find );
                }

                $( view.settings.parent ).addClass("selected");
                $( appendTo ).append( view.$el );

                view.didInsertElement();
            });
        },

    	didInsertElement : function() {
            // check for other views to inject
            // Debug.trace( ' Loaded and Inserted - ' + this.name );
            
            // now check for subviews:
            var subviews = this.settings.subviews;
            for( var s = 0; s < subviews.length; s++ ){
                var subview = subviews[s];
                    subview.parent = this.$el;
                App.loadView(subview);
            }

            // ADD BIND EVENTS HERE:
            this.bindEvents();
    	},

        bindEvents : function() {
            Debug.trace( ' BIND EVENTS: ' );
            Debug.trace( this.eventManager );

            // bind all the functions to 'this' the view.
            var bindedEvents = {}; 
            for (var key in this.eventManager) {
                Debug.trace( key );
                var func = this.eventManager[key];
                bindedEvents[key] = $.proxy( this.eventManager[key] , this );
            }
            
            // is there a way to bind specific elements within the view:

            this.$el.on( bindedEvents );
        }

    });

});
