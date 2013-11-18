/*
 * this view takes everything from the Main.siteMap
 * and generates an index page from them.
 */
  
define([
    "BaseView",
    'models/Main.siteMap'
], function(
    BaseView,
    siteMap
) {

    return BaseView.extend({
    	name: 'Site Directory',

    	init: function(_config){
    		// listings
    		var filteredList = [];
    		for(var a = 0; a < siteMap.directory.length; a++ ){
    			if( siteMap.directory[a].name.toLowerCase() == 'site directory' || 
    				siteMap.directory[a]._Controller == 'views/directory' ){
    				// skip

    			}else {
    				filteredList.push( siteMap.directory[a] );
    			}
    		}

    		_config._Model = {listings: filteredList };
    		this._super(_config);
    	}

    });
 });