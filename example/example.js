var facebook = require('../lib/sd-expires');

facebook.expires({}, function(data) {
  console.log(JSON.stringify(data, null, 2));
});
