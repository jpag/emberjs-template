define([], function() {
  //  The default page to use from 'config' array number
  //  array starts with 0.
  var defaultPage = 2;

  var config = [
  		{
  			path:'/',
        name: 'Home page',
  			_Controller: 'views/index',
        _Template: 'contentExample.html',
  			_Model: {
          title   : 'A massive h1 title', 
          subtitle  : 'Some Subtitile'
        },

        subviews: [
          {
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
          },
          {
            _Controller: '_modules/UI.footer',
            _Template: 'UI.footer.html',
            _Model: 'models/Model.footer',
            appendTo: '#footer-composite'
          }
        ]
  		},{
        path:'/directory',
        name: 'Site Directory',
  			_Controller: 'views/directory',
        _Template:'siteDirectory.html',
        _Model : {}
  		},{
        path: '/404',
        name: 'Error Page',
        _Controller: 'views/error',
        _Template:'',
        _Model : {},
      }
    ];

  return {directory:config, defaultPage:defaultPage};
});