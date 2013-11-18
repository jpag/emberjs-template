define([
	"BaseView"
], function(
	BaseView
) {

    return BaseView.extend({
        name :'indexView',

        eventManager : {
            // 'click' : function(e){
            //     Debug.trace(' click something serious here');
            // },

            'click' : function(ev){ 
                        this.clickEvent(ev);
                    }
        },

        init : function(_config){
            this._super(_config);
        },

        clickEvent: function(ev) {
            Debug.trace(' ------ click ----- ');
        }

    });
});
