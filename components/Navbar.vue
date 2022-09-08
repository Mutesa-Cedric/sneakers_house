<template>
    <div class="flex items-center justify-center w-full lg:px-48">
        <nav class="flex justify-between w-full items-center border-b border-gray-blue py-9">
            <div class="flex items-center space-x-12">
                <img src="/images/logo.svg" class="h-5 mb-3" />
                <ul class="flex items-center space-x-6 text-sm capitalize text-gray-blue">
                    <li v-for="(listItem,index) in listItems" :key="index"
                        class="listItem cursor-pointer border-orange ">
                        {{listItem}}
                    </li>
                </ul>
            </div>
            <div class="flex space-x-8 items-center">
                <div @click="toggleShowCart()" class="relative cursor-pointer">
                    <span v-show="itemsInCart.length!==0"
                        class=" text-xs text-gray-blue-light bg-orange h-3 w-3 p-2 flex items-center justify-center font-bold rounded-full absolute -top-2 left-3">
                        {{itemsInCart.length}}
                    </span>
                    <img src="/images/icon-cart.svg" class="h-5 w-5 cartIcon" />
                </div>
                <img src="/images/image-avatar.png" class="rounded-full h-9 w-9" />
            </div>
        </nav>
    </div>

</template>

<script lang="ts">
import { mapState, mapMutations } from "vuex";
export default {
    name: 'Navbar',
    data() {
        return {
            listItems: [
                'collections',
                'Men',
                'women',
                'about',
                'contact'
            ]
        }
    },
    computed: {
        ...mapState(['showCart', 'itemsInCart'])
    },
    methods: {
        ...mapMutations(['TOGGLE_SHOW_CART']),
        toggleShowCart(): void {
            this.TOGGLE_SHOW_CART();
        }
    }
}
</script>
