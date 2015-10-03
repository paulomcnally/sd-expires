var https = require('https');
var querystring = require('querystring');

var Facebook = function() {

};

Facebook.prototype.expires = function(params, callback) {
  var defaultParams = {
    client_id: process.env.FACEBOOK_ID || params.client_id,
    access_token: process.env.FACEBOOK_ACCESS_TOKEN || params.access_token
  };

  return https.get({
    host: 'graph.facebook.com',
    path: '/oauth/access_token_info?' + querystring.stringify(defaultParams)
  }, function(response) {
    // Continuously update stream with data
    var body = '';
    response.on('data', function(d) {
      body += d;
    });
    response.on('end', function() {
      var parsed = JSON.parse(body);
      callback(parsed);
    });
  });
}

module.exports = new Facebook();
