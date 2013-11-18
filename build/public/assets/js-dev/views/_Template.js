define([
    "BaseView"
], function(
    BaseView
) {

    return BaseView.extend({
        // name :'name of view [optional]',

        eventManager : {
            'click' : function(ev){ 
                        this.clickEvent(ev);
                    }
        },

        /*
        init : function(_config){
            this._super(_config);
        },
        */
        
        /*
        didInsertElement : function(){
            this._super();
        }
        */

        clickEvent: function(ev) {
            Debug.trace(' ------ mouse enter ----- ');
        }

    });
});
