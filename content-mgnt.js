var proxyAgent;
var HttpsProxyAgent = require('https-proxy-agent');
// HTTP/HTTPS proxy to connect to 
var proxy = "http://proxy.gtm.lilly.com:9000";
console.log('Using proxy server: %s', proxy);
proxyAgent = new HttpsProxyAgent(proxy);


var contentful = require('contentful-management');

var spaceId = 'u6pxao3c2t73';
var accessToken = '27d4d9a88426b84e054302623acfa577546ad3976b25503a02fc62530bdcb51b';
var contentTypeId = '1qMGnWoHqE2EwscGEaows4';

var client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken,
    agent: proxyAgent
});

// a custom "Generic Content" content type
var entry = {
    fields: {
        name: {
            'en-US': "Take a Trip!"
        },
        description: {
            'en-US': "Title for page 4"
        },
        content: {
            'en-US': {title: "Take a Trip"}
        }
    }
};

module.exports = {
  createEntrydata : function()
  {
  
    client.getSpace('u6pxao3c2t73')
    .then(function (space) {
    space.createEntry('comments',{ 
            fields: {
              content: {'en-US': 'Hello, World!'}
            }
         })
    });     
  }
}