<template>
  <div class="flex flex-col items-center lg:space-y-24 lg:overflow-hidden">
    <Navbar />
    <Cart/>
    <div class="flex flex-col lg:flex-row items-center justify-between lg:px-48">
      <div class="flex flex-col space-y-6 w-full">
        <div class="">
          <img :src="`/images/${currentProduct.images[selectedImage].original}`" class="w-3/4 h-3/4 rounded-xl" />
        </div>
        <div class="space-x-12 flex">
          <div v-for="(image,index) in currentProduct.images" :key="index" @click="changeSelectedImage(index)"
            :style="`background-image:url(/images/${image.thumbnail}) `"
            class="rounded-lg h-16 w-16 bg-center cursor-pointer bg-cover bg-no-repeat">
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-6 lg:pl-12">
        <p class="text-orange uppercase font-semibold">{{currentProduct.company}}</p>
        <h1 class="capitalize font-bold text-5xl">{{currentProduct.title}}</h1>
        <p class="text-gray-blue">{{currentProduct.description}}</p>
        <div class="flex flex-col space-y-2">
          <div class="flex space-x-4">
            <p class="font-bold text-xl">${{currentPrice}}.00</p>
            <p v-if="currentProduct.discount"
              class="text-orange bg-orange-light text-sm px-2 flex items-center justify-center rounded-md font-bold">
              {{currentProduct.discount}}%</p>
          </div>
          <p className="line-through tet-gray-blue">${{currentProduct.price}}</p>
        </div>
        <div class="flex items-center space-x-5 lg:space-x-10">
          <div class="flex bg-gray-blue-light shadow-md space-x-8 py-3 px-8 rounded-lg">
            <button @click="decrementProductQuantity()">
              <img src="/images/icon-minus.svg" />
            </button>
            <p>{{currentProductQuantity}}</p>
            <button @click="incrementProductQuantity()">
              <img src="/images/icon-plus.svg" />
            </button>
          </div>
          <button @click="addToCart"
            class="bg-orange text-gray-blue-light flex items-center py-3 px-8 lg:px-16 rounded-lg shadow-lg space-x-4 text-sm">
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
            selectedImage: 0
        };
    },
    computed: {
        ...mapState(["currentProduct", "itemsInCart"])
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
            this.ADD_TO_CART(this.currentProduct);
            console.log(this.itemsInCart);
        },
        changeSelectedImage(index: number) {
            this.selectedImage = index;
        },
        incrementProductQuantity() {
            if (this.currentProduct.quantityAvailable > this.currentProductQuantity) {
                this.currentProductQuantity++;
                console.log(this.currentProductQuantity);
            }
        },
        decrementProductQuantity() {
            if (this.currentProductQuantity !== 0) {
                this.currentProductQuantity--;
            }
        }
    },
    components: { Cart }
})
</script>
