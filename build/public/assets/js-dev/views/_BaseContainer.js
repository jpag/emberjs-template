define([], function() {
	// add Private Variables here:
	
    return Em.View.extend({
    	
    	// https://gist.github.com/stefanpenner/5627411
    	// may need to revisit this:
    	//container: window.App.__container__,

    	// Configure your view with these variables that will be
    	// injected into the template and can be autoupdated on change
    	//controller : Ember.Object.create({}),

    	// Default tag is div = <DIV>
    	//tagName: 'li',

    	// Array of strings to put into the class="" attribute
    	classNames: ['container'],

    	// Loaded Handlebars or HTML template to display 
    	// this view on the page:
    	// template: Ember.Handlebars.compile(loadedTemplate),
    	templateName: 'undefined',

    	// Event manager for this view 
    	// keeps in scope of this view only 
    	// so nothing else will respond to 'event'
    	eventManager: Ember.Object.create({}),

    	init: function() {
    		this._super();
    	},

    	didInsertElement : function() {
            //check for other views to inject
            var thisID = '#'+this.get('elementId');
            Debug.trace( ' INSERTED INTO DOM: ' + thisID );
            this.injectSubviews( this.subviews );   
    	},

    	// willInsertElement : function(){
    		
    	// },

        injectSubviews : function(sviews) {
            var thisID = '#'+this.get('elementId');
            Debug.trace( ' this ID ' + thisID );
            Debug.trace( this.elementId );
            
            for(var s = 0; s < sviews.length; s++ ){
                
                var subview = sviews[s];

                // subview
                if( typeof subview.appendTo === 'undefined' ){
                    subview.appendTo = thisID;
                } else {
                    
                    // should it always append thisID regardless 
                    // of if there is a 'this' there?

                    subview.appendTo = subview.appendTo.replace('this',thisID);
                }
                Debug.trace(subview.view + ' append TO: ' + subview.appendTo );
                App.loadView(subview);
            }
        }
    	
    });
});