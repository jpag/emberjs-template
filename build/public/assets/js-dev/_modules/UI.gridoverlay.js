require([
    'jQuery',
    'Handlebars',
    'text!/assets/templates/UI.gridoverlay.html'
], function(
    $,
    Handlebars,
    Template
) {

	// example of a view working independently of anything else,
	// just dump your code in here:

	var handlebar = Handlebars.compile(Template),
		view = $( handlebar() );

	$('body').append(view)

	$('body').on({
		"keyup": keyup
	})
    
    function keyup(ev) {
    	Debug.trace(' ev - KEYUP ' );
    	Debug.trace( ev.keyCode );
    	if( ev.keyCode == 71 ){
    		view.toggleClass('active');
    	}
    }

});