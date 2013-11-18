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
                        this.mouseEnter(ev);
                    }
        },

        init : function(_config){
            this._super(_config);
        },

        mouseEnter: function(ev) {
            Debug.trace(' ------ mouse enter ----- ');
        }

    });
});
