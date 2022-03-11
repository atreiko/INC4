"use strict";

/**
 * 
 * @param {String} domain 
 * @returns {String}
 */
function createURL(domain) {
  return function (url) {
    return "https://".concat(url, ".").concat(domain);
  };
}

var uaURL = createURL('ua');
console.log(uaURL('meta'), uaURL('web-promo'));
var comURL = createURL('com');
console.log(comURL('google'), comURL('twitter'));