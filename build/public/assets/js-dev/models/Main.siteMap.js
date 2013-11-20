
// you can create an entire site just by using this page

define([], function() {
  //  The default page to use from 'config' array number
  //  array starts with 0.
  var defaultPage = 2;

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
            appendTo: 'parent #nav-block',
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
  			path:'/',
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
        path:'/directory',
        name: 'Site Directory',
  			_Controller: 'views/directory',
        _Template:'directory.html',
        _Model : {}
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

  return {directory:config, defaultPage:defaultPage};
});