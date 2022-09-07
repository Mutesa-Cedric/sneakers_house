<template>
    <div v-show="showCart" class="bg-white shadow-xl z-50 fixed sm:-top-4 top-12 sm:right-2 right-8 lg:right-20 h-auto flex flex-col p-4 rounded-lg">
        <div class="border-b border-gray-blue py-3">
            <h1 class="font-semibold">Cart</h1>
        </div>
        <div class="flex flex-col items-center justify-center">
            <div v-if="itemsInCart.length==0" class="text-center py-16 px-16 text-sm text-gray-blue font-semibold">
                <span>your cart is empty</span>
            </div>
            <div v-else class="flex flex-col space-y-2">
                <div class="flex flex-col space-y-2 py-3">
                    <div v-for="(item,index ) in itemsInCart" :key="index" class="flex items-center space-x-3">
                        <img :src="`/images/${item.images[0].thumbnail}`" class="w-9 h-9 rounded-md" />
                        <div class="flex flex-col">
                            <p class="text-gray-blue text-sm">{{item.title}}</p>
                            <div class="flex space-x-2 items-center">
                                <div class="text-gray-blue items-center space-x-1 flex text-xs font-semibold">
                                   <span>${{item.finalPrice}}</span>
                                   <img src="/images/icon-close.svg" class="h-2 w-2"/>
                                   <span>{{item.quantity}}</span> 
                                </div>
                                <span class="font-semibold">${{item.finalPrice*item.quantity}}</span>
                                
                            </div>
                        </div>
                        <button @click="removeFromCart(item)" class="flex items-center justify-center">
                            <img src="/images/icon-delete.svg" />
                        </button>
                    </div>
                </div>
                <button class="bg-orange text-white text-sm font-semibold rounded-lg py-3 px-7">
                    Checkout
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapState, mapMutations } from 'vuex';
import { Product } from '~/@types/types';
export default {
    computed: {
        ...mapState(['itemsInCart', 'showCart'])
    },
    methods: {
        ...mapMutations(['REMOVE_FROM_CART']),
        removeFromCart(product: Product) {
            this.REMOVE_FROM_CART(product);
        }
    }
}
</script>

<style scoped>

</style>