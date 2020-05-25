var app = new Vue({
  // Vue Instance
  el: '#app', // element e.g. id='app'
  data: {
    brand: 'Schumacher-Knight',
    product: 'Socks', // Vue is reactive = change product here, will change in view, anywhere
    description: 'This is a description for the product',
    selectedVariant: 0,
    // image: 'vmSocks-green-onWhite.jpg',
    // inventory: 8,
    // inStock: true,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'vmSocks-green-onWhite.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'vmSocks-blue-onWhite.jpg',
        variantQuantity: 0
      }
    ],
    sizes: ['extra-small', 'small', 'medium', 'large'],
    altText: 'A pair of socks',
    url:
      'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    cart: 0
  },
  methods: {
    // ES6 shorthand for an anonymous function, not all browsers support this though
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!'
      }
      return this.brand + ' ' + this.product + ' are not on sale'
    }
  }
});
