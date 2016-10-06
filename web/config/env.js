(function (window) {
  window.env = window.env || {};

  // API url
  window.env.apiUrl = 'http://lola-rest.com/api';
  
  window.env.apiAdminUrl = 'http://lola-rest.com/api/admin';
  
  // Base url
  window.env.baseUrl = '/';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.env.enableDebug = true;
}(this));