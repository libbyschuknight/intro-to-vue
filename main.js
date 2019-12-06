var app = new Vue({
  // Vue Instance
  el: '#app', // element e.g. id="app"
  data: {
    product: 'Socks', // Vue is reactive = change product here, will change in view, anywhere
    description: 'This is a description for the product',
    image: 'vmSocks-green-onWhite.jpg',
    altText: 'A pair of socks',
    url:
      'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
  }
});
