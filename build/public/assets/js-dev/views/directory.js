/*
 * this view takes everything from the Main.siteMap
 * and generates an index page from them.
 */
  
define([
    'BaseView',
    'models/Main.siteMap'
], function(
    BaseView,
    siteMap
) {

    return BaseView.extend({
    	name: 'Site Directory',

    	init: function(_config){
    		// listings
    		var filteredList = [],
                sitePath = '';

            if( window.location.pathname.indexOf(siteMap.locationPath ) == 0 ){
                // really should ONLY equal 0
                sitePath = siteMap.locationPath;
            }

    		for(var a = 0; a < siteMap.directory.length; a++ ){
    			if( siteMap.directory[a].name.toLowerCase() == 'site directory' || 
    				siteMap.directory[a]._Controller == 'views/directory' ){
    				// skip

    			}else {
                    // add this path so that urls point to the right 
                    // path in a relative directory
                    siteMap.directory[a].sitepath = sitePath;

    				filteredList.push( siteMap.directory[a] );
    			}
    		}

    		_config._Model = {listings: filteredList };
    		this._super(_config);
    	}

    });
 });