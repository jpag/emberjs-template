define([
	"BaseView"
], function(
	BaseView
) {

    return BaseView.extend({
        name :'indexView',

        eventManager : {
            click : function(){
                Debug.trace(' something serious here');
            }
        },

        init : function(_config){
            Debug.trace(' INDEX VIEW init - ');
            this._super(_config);
        }
    });
});

/*
    	// init: function() {
    	// 	this._super();
    	// },

    	// didInsertElement : function() {
    	// 	this._super();
    	// },

    	// willInsertElement : function(){
    		
    	// },

    	// Demonstration of how to bind from events:
    	someFurtherFunction : function () {
    		Debug.trace(' execute more work here if you want THIS:');
    	}

        init(configurations);
    };

});
*/