
// you can create an entire site just by using this page

define([], function() {
  //  The default page to use from 'config' array number
  //  array starts with 0.
  var defaultPage = 0;

  //if you are running this site in a subfolder 
  // you are gonna need to define the sub folder here
  // always have first slash not last slash:
  // i.e. www.example.com/v2/prototypesite/ would looke like pathname = "/v2/prototypesite";
  var pathname = "/v2/prototypesite";

  // if you have a re-occuring subview that doesn't auto intitate in main
  // declare it here and save lines of code
  var nav = {
            _Controller: '_modules/UI.nav',
            _Template: 'UI.nav.html',
            _Model: {
              links : [
                {
                  link: 'home'
                },{
                  link: 'editorial'
                },{
                  link: 'about'
                },{
                  link: 'contact'
                }
              ]
            },
            prependTo: 'body',
            width: '100%'
          };

  var footer = {
                _Controller: '_modules/UI.footer',
                _Template: 'UI.footer.html',
                _Model: 'models/Model.footer',
                appendTo: '#footer-composite'
                };

  var config = [
  		{
        path:'/directory',
        name: 'Site Directory',
        _Controller: 'views/directory',
        _Template:'directory.html',
        _Model : {}
      },{
  			path:'/homepage',
        name: 'Home page',
        status: 'In Production',
        description: 'Index page of the site demo',
  			_Controller: 'views/index',
        _Template: 'contentExample.html',
  			_Model: {
          title   : 'A massive h1 title', 
          subtitle  : 'Some Subtitile'
        },
        subviews: [
          nav,
          footer
        ]
  		},{
        path: '/404',
        name: 'Error Page',
        status: 'Pending Design',
        description: 'Example of a 404 error page.',
        _Controller: 'views/error',
        _Template:'',
        _Model : {},
      }
    ];

  return {directory:config, defaultPage:defaultPage, locationPath:pathname };
});