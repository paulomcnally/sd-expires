# sd-expires

Check if a Facebook access token expired

## Required

    process.env.FACEBOOK_ID
    process.env.FACEBOOK_ACCESS_TOKEN

## Example

    var facebook = require('sd-expires');

    facebook.expires({}, function(data) {
      console.log(JSON.stringify(data, null, 2));
    });

## More info

https://developers.facebook.com/docs/facebook-login/access-tokens
