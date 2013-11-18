define([
    "BaseView",
    'models/Main.siteMap'
], function(
    BaseView,
    siteMap
) {

    return BaseView.extend({
    	name: 'site directory',

    	init: function(_config){
    		Debug.trace(' site directory - INIT - ');
    		// listings
    		var filteredList = siteMap.directory;
    			
    		_config._Model = {listings: filteredList };
    		Debug.trace( _config );
    		this._super(_config);
    	}
    });
 });