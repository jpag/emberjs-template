define([
	"BaseView"
], function(
	BaseView
) {

    return BaseView.extend({
        name :'OTHER VIEW',

        eventManager : {
            touch : function(){
                Debug.trace(' something serious here');
            }
        },

        init : function(_config){
            Debug.trace(this.name + ' VIEW init - ');
            this._super(_config);
        }
    });
});