Front-End Rapid deploy prototype template
========================================

Template with SASS, and Handlebars, using jQuery and Require for usage in in rapid prototyping builds.

This is not an optimized means of running super fast sites, but a way of easily configuring a site with some basic elements that can be pulled in quickly.

1st you should look at the Main.siteMap.js file to look at how things are managed and dynaimcally rendered.
	update the default page a user would visit, recommended is the directory page.
	update the pathname depending on the URI path being used on your localhost or website. You can define pathname of a website running this in a folder like "/version2" but it will still run locally no problem as "localhost/"

	- _Model defines a json file that should have all sort of copy and configuration settings you will use in your view
	- _Controller defines the logic of what happens in your view (click events, resizing, scroll). Bind to elements from your template here and create all the events that will happen and actions.
	- _Template defines the html and {{tags}} to let the model autopopulate it with content.


/assets/js-dev/_modules :
	self powered elements that can run solo and automatically.
	or elements that can be repurposed elsewhere like a nav/footer/dropdown
	* maybe UI stuff does not belong here * as those need 
	to know where to append to

/assets/js-dev/_wrappers :
	wrappers for certain libraries loaded with require

/assets/js-dev/models :
	all configuration files and information should exist in here.
	* some debate about dividing views from their controller objects. *

/assets/js-dev/views :
	components of a page/ and pages themselves depends on user usage

/assets/templates/
	handlebar templates loaded into view.
	* warning loading .html extensions with firefox or ie could be a problem

* TODO
	- build out more UI component examples (dropdown, autocomplete, etc.)
	- update build optimizer script
	- event dispatcher (a good way of triggering events and passing that on to multiple views)
	- event manager in views allow for events binded to specific elements

* COMPLETE
	- easier relative paths (so you can plop this into a subfolder rather then root public)
	- added example of a blank empty template