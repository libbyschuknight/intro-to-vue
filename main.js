Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" :alt="altText">
        <!-- can do :src, shorthand for v-bind:src -->
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1> <!-- called an expression -->
        <p v-if="inStock">In Stock</p>
        <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p> -->
        <!-- <p v-else :class="{ outOfStock: !inStock }">
          Out of Stock
        </p> -->
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <!-- <a :href="url" target="_blank">This is a link from the Vue Instance</a> -->
        <!-- <p v-show="inStock">In Stock</p> display: none -->
        <!-- <p v-if="onSale">On Sale!</p> -->
        <p>{{ sale }} </p>

        <product-details :details="details"></product-details>

        <div class="color-box"
          v-for="(variant, index) in variants"
          :key="variant.variantId"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)"
          >
          <!-- v-on:mouseover == @mouseover -->
        </div>
        <ul>
          <li v-for="size in sizes">{{size}}</li>
        </ul>

        <button v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
          >Add to Cart
        </button>
          {{ inStock }}
        <button v-on:click="removeFromCart">Remove from Cart</button>
        <div class="cart">
          <p>Cart {{cart}}</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
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
    }
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
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  },
})


var app = new Vue({
  // Vue Instance
  el: '#app',
  data: {
    premium: false
  }
  // element e.g. id='app'
});
