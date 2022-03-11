/**
 * 
 * @param {String} domain 
 * @returns {String}
 */

function createURL(domain) {
  return function(url) {
    return `https://${url}.${domain}`
  }
}

const uaURL = createURL('ua')
console.log(
  uaURL('meta'),
  uaURL('web-promo')
);

const comURL = createURL('com')
console.log(
  comURL('google'),
  comURL('twitter')
);

