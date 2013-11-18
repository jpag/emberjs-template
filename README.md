Front-End Rapid deply prototype template
========================================

Template with SASS, and Handlebars, using jQuery and Require for usage in in rapid prototyping builds.

This is not an optimized means of running super fast sites, but a way of easily configuring a site with some basic elements that can be pulled in quickly.

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

* TODO
	- build out more UI component examples (dropdown, autocomplete, etc.)
	- update build optimizer script
	- event manager/dispatcher (a good way of triggering events and passing that on to multiple views)

