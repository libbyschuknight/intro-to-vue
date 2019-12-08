var app = new Vue({
  // Vue Instance
  el: '#app', // element e.g. id='app'
  data: {
    product: 'Socks', // Vue is reactive = change product here, will change in view, anywhere
    description: 'This is a description for the product',
    image: 'vmSocks-green-onWhite.jpg',
    inventory: 8,
    inStock: true,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: ['extra-small', 'small', 'medium', 'large'],
    altText: 'A pair of socks',
    url:
      'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
  }
});
