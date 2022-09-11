<template>
  <div class="flex overflow-hidden flex-col items-center xl:space-y-24 lg:space-y-16">
    <transition name="menu">
      <Menu v-if="showMenu" />
    </transition>
    <Navbar />
    <Cart />
    <div class="flex flex-col lg:flex-row items-center justify-between lg:px-24 xl:px-48">
      <div class="flex relative flex-col space-y-6 w-full">
        <div class="">
          <img :src="`/images/${currentProduct.images[selectedImage].original}`" class="xl:w-3/4 lg:w-full lg:h-full xl:h-3/4 h-64 sm:h-80 w-screen lg:rounded-xl" />
        </div>
        <div class="lg:hidden h-full w-full">
          <button @click="previousImage" class="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md absolute top-24 left-4">
            <img src="/images/icon-previous.svg" class="h-3 w-2"/>
          </button>
          <button @click="nextImage" class="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md absolute top-24 right-4">
            <img src="/images/icon-next.svg" class="h-3 w-2"/>
          </button>
        </div>
        <div class="space-x-12 hidden lg:flex">
          <div v-for="(image,index) in currentProduct.images" :key="index" @click="changeSelectedImage(index)"
            :style="`background-image:url(/images/${image.thumbnail}) `"
            :class="`${index===selectedImage ? 'active' : ''}  thumbnail rounded-lg h-16 w-16 bg-center cursor-pointer bg-cover bg-no-repeat`">
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:space-y-6 space-y-2 px-8 lg:px-0 lg:pl-12">
        <p class="text-orange uppercase text-sm md:text-base font-semibold">{{currentProduct.company}}</p>
        <h1 class="capitalize font-bold md:text-3xl lg:text-5xl">{{currentProduct.title}}</h1>
        <p class="text-gray-blue text-sm md:text-base">{{currentProduct.description}}</p>
        <div class="flex flex-col space-y-2">
          <div class="flex space-x-4">
            <p class="font-bold lg:text-xl">${{currentPrice}}.00</p>
            <p v-if="currentProduct.discount"
              class="text-orange bg-orange-light lg:text-sm text-xs px-2 flex items-center justify-center rounded-md font-bold">
              {{currentProduct.discount}}%</p>
          </div>
          <p className="text-gray-blue text-xs">${{currentProduct.price}}</p>
        </div>
        <div class="flex flex-col md:flex-row items-center md:space-x-5 space-y-3 md:space-y-0 lg:space-x-10">
          <div class="flex items-center justify-center bg-gray-blue-light shadow-md space-x-8 w-full md:w-auto py-3 px-8 rounded-lg">
            <button @click="decrementProductQuantity()">
              <img src="/images/icon-minus.svg" />
            </button>
            <p>{{currentProductQuantity}}</p>
            <button @click="incrementProductQuantity()">
              <img src="/images/icon-plus.svg" />
            </button>
          </div>
          <button @click="addToCart"
            class="bg-orange text-gray-blue-light flex items-center justify-center py-3 px-8 w-full md:w-auto xl:px-16 rounded-lg shadow-lg space-x-4 lg:space-x-2 xl:space-x-4 text-sm">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="white" fill-rule="nonzero" />
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from "vuex";
import Cart from '~/components/Cart.vue';

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      currentPrice: 0,
      currentProductQuantity: 0,
      selectedImage: 0,
      warning: false,
    };
  },
  computed: {
    ...mapState(["currentProduct", "itemsInCart", "showMenu"])
  },
  created() {
    if (this.currentProduct.discount) {
      this.currentPrice = this.currentProduct.price - ((this.currentProduct.discount * this.currentProduct.price) / 100);
    }
    else {
      this.currentPrice = this.currentProduct.price;
    }
  },
  methods: {
    ...mapMutations(["ADD_TO_CART"]),
    addToCart() {
      let itemToAdd = {
        ...this.currentProduct,
        finalPrice: this.currentPrice,
        quantity: this.currentProductQuantity
      };
      if (this.currentProductQuantity === 0) return alert("You can't buy a product with 0 quantity!");
      this.ADD_TO_CART(itemToAdd);
    },
    changeSelectedImage(index: number) {
      this.selectedImage = index;
    },
    incrementProductQuantity() {
      if (this.currentProduct.quantityAvailable > this.currentProductQuantity) {
        this.currentProductQuantity++;
      }
    },
    decrementProductQuantity() {
      if (this.currentProductQuantity !== 0) {
        this.currentProductQuantity--;
      }
    },
    nextImage(){
      if(this.selectedImage<this.currentProduct.images.length-1){
        this.selectedImage++;
      }else{
        this.selectedImage=0;
      }
    },
    previousImage(){
      if(this.selectedImage!==0){
        this.selectedImage--;
      }else{
        this.selectedImage=this.currentProduct.images.length-1;
      }
    }
  },
  components: { Cart },
})
</script>

<style>
.menu-enter-active,
.menu-leave-active {
  transition: 0.8s ease all;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(-250px);
}

.listItem {
  padding-bottom: 12px;
}

.listItem:hover {
  color: black;
  font: bold;
  border-bottom-width: 2px;
}

.cancelledText {
  text-decoration: line-through;
}

.cartIcon:hover {
  color: black;
}

.thumbnail.active {
  border: 3px solid orange;
}
</style>