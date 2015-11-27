exports.register = function(server, options, next) {

  server.route([{
        method: 'GET',
        path: '/',
        config: {
          description: 'return the home page',
          handler: {
            file: 'index.html'
          }
        }
      }

  ]);

return next();
};

exports.register.attributes = {
  name: 'Home'
};
