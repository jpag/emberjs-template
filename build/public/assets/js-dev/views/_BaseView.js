define([], function() {
	// add Private Variables here:
	
    return window.Class.extend({
    	
        settings    : {},
        name        : 'baseView',

    	// Event manager for this view 
        // keeps in scope of this view only 
        // so nothing else will respond to 'event'
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
            
            this.settings = _config;
            this.renderTemplate();
    	},

        renderTemplate : function() {
            // Debug.trace(' - Loading template ' );

            var view = this;
            
            require([
                'text!/assets/templates/'+this.settings._Template,
                this.settings._Model
            ],function(
                Template,
                Model
            ){

                Debug.trace( ' - loaded - ' + view.name);
                if( typeof Model === 'undefined' ){
                    Model = view.settings._Model;
                }

                var handlebar = Handlebars.compile(Template);
                view.$el = $( handlebar(Model) );

                // should we wrap all views in a div like other frameworks?
                var appendTo = view.settings.appendTo,
                    parent = 'parent ';

                if( appendTo.indexOf( parent ) == 0 ){
                    // attach to the parent:
                    Debug.trace(' - '+ view.name + ' Attaching to the parent view');
                    var find = appendTo.substr( parent.length  );
                    appendTo = view.settings.parent.find( find );
                }

                $( view.settings.parent ).addClass("selected");
                $( appendTo ).append( view.$el );

                view.didInsertElement();
            });
        },

    	didInsertElement : function() {
            //check for other views to inject
            Debug.trace( ' Loaded and Inserted - ' + this.name );
            
            // now check for subviews:
            var subviews = this.settings.subviews;
            for( var s = 0; s < subviews.length; s++ ){
                var subview = subviews[s];
                    subview.parent = this.$el;
                App.loadView(subview);
            }

            // ADD BIND EVENTS HERE:
    	}

    });

});

