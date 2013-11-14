define([
    'BaseView',
    'text!/assets/templates/UI.footer.html'
], function(
    BaseView,
    loadedTemplate
) {
	// add Private Variables here:
    var templateID = window.App.injectTemplate(loadedTemplate);	

    return BaseView.extend({
    	
    	// https://gist.github.com/stefanpenner/5627411
    	// may need to revisit this:
    	container: window.App.__container__,

    	// Configure your view with these variables that will be
    	// injected into the template and can be autoupdated on change
    	//controller : Ember.Object.create({}),

    	// Default tag is div = <DIV>
    	//tagName: 'li',

    	// Array of strings to put into the class="" attribute
    	// classNames: ['container'],

    	// Loaded Handlebars or HTML template to display 
    	// this view on the page:
    	// template: Ember.Handlebars.compile(loadedTemplate),
    	templateName: templateID,

    	// Event manager for this view 
    	// keeps in scope of this view only 
    	// so nothing else will respond to 'event'
    	eventManager: Ember.Object.create({}),

   
    });
});