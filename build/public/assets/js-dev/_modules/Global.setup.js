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
});
