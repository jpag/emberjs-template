define([], function() {
	// add Private Variables here:
	
    return function(
    	
    	// Event manager for this view 
    	// keeps in scope of this view only 
    	// so nothing else will respond to 'event'
    	eventManager: Ember.Object.create({}),

    	init: function() {
    	
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
    );
});