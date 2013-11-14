define([], function() {
  //  The default page to use from 'config' array number
  //  array starts with 0.
  var defaultPage = 2;

  var config = [
  		{
  			path:'/',
        name: 'Home page',
  			view: 'pages/index',
  			status: 'complete',
        config: {
          title   : 'A massive h1 title', 
          subtitle  : 'Some Subtitile'
        },
        subviews: [
          {
            view: '_modules/UI.nav',
            appendTo: 'this #nav-block',
            width: '100%',
            config: {
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
            }
          },
          {
            view: '_modules/UI.footer',
            appendTo: '#footer-composite'
          }
        ]
  		},{
        path:'/directory',
        name: 'Site Directory',
  			view: 'pages/directory',
  			status: 'in review'
  		},{
        path: '/404',
        name: 'Error Page',
        view: 'pages/error'
      }
    ];

  return {directory:config, defaultPage:defaultPage};
});