require([
    'jQuery'
], function(
    $
) {

    runGoogleAnalytics();

    // Is this even necessary anymore?
    window.global = new function() {
        return {
            getIE: function(){
                var rv = -1; // Return value assumes failure.
                if (navigator.appName == 'Microsoft Internet Explorer'){
                  var ua = navigator.userAgent;
                  var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                  if (re.exec(ua) != null)
                    rv = parseFloat( RegExp.$1 );
                }
                return rv;
            },
            urlRoot:"assets/"
        }
    };

    //get the on start before any view alters it
    if( !window.Debug || (global.getIE() != -1) ){
        //NOT IN DEBUG MODE if it is IE 'Debug' is a component of IE
        //define a blank function to handle all traces:
        window.Debug = new function(){
            return{
                active:false,
                trace:function(str){}
            }
        };
    }else{
        Debug.init();
    };

    function runGoogleAnalytics () {
        
        window.GA = window.GA || {};

        //analytics:
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
        _gaq.push(['_trackPageview']);
        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        window.GA._gaq = _gaq;
    }

    window.GA.trackEvent = function(category , action , label ){
        label = (typeof label === "undefined") ? "" : label.toString();
        category = category.toString();
        action = action.toString();
        window.GA._gaq.push(['_trackEvent', category, action, label ])
    }
    
    window.GA.TrackPage =  function(page){
        window.GA._gaq.push(['_trackPageview', page ]);
    }

    
    // -----------------------------------------------------------------
    // ----- Means of creating classes that can can extend on one another
    // -----------------------------------------------------------------

    // http://ejohn.org/blog/simple-javascript-inheritance/
    /* Simple JavaScript Inheritance
     * By John Resig http://ejohn.org/
     * MIT Licensed.
     */
    // Inspired by base2 and Prototype
    var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    window.Class = function(){};

    // Create a new Class that inherits from this class
    window.Class.extend = function(prop) {
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
          // Check if we're overwriting an existing function
          prototype[name] = typeof prop[name] == "function" &&
            typeof _super[name] == "function" && fnTest.test(prop[name]) ?
            (function(name, fn){
              return function() {
                var tmp = this._super;
               
                // Add a new ._super() method that is the same method
                // but on the super-class
                this._super = _super[name];
               
                // The method only need to be bound temporarily, so we
                // remove it when we're done executing
                var ret = fn.apply(this, arguments);        
                this._super = tmp;
               
                return ret;
              };
            })(name, prop[name]) :
            prop[name];
        }

        // The dummy class constructor
        function Class() {
          // All construction is actually done in the init method
          if ( !initializing && this.init )
            this.init.apply(this, arguments);
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        return Class;
    };
    
});
