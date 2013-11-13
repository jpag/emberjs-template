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
        subviews: [
          {
            view: '_modules/nav',
            appendTo: '#nav-block'
          },
          {
            view: '_modules/footer',
            appendTo: '#footer-block'
          }
        ]
  		},
  		{
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