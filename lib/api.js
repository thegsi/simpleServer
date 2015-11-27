require('env2')('./config.env');
var stripe = require('stripe')(process.env.TEST_SECRET);

exports.register = function(server, options, next) {

  server.route([{
      method: 'POST',
      path: '/data',
      config: {
        description: 'return the data receive',
        handler: function(request, reply) {
          var stripeToken = request.payload.stripeToken;

          var charge = stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: stripeToken,
            description: "Example charge"
          }, function(err, charge) {
            if (err && err.type === 'StripeCardError') {
              // The card has been declined
            } else{
              console.log("success!");
            }
          });
        }
      }
    }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Data'
};
