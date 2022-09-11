<template>
    <div class="flex items-center justify-center w-full lg:px-24 xl:px-48">
        <nav class="flex justify-between w-full items-center border-b border-gray-blue md:py-9 py-4 md:px-0 px-4">
            <div class="flex items-center md:space-x-12 space-x-3">
                <img @click="toggleShowMenu()" src="/images/icon-menu.svg" class="md:hidden"/>
                <img src="/images/logo.svg" class="md:h-5 h-4 md:mb-3" />
                <ul class="md:flex hidden items-center space-x-6 text-sm capitalize text-gray-blue">
                    <li v-for="(listItem,index) in listItems" :key="index"
                        class="listItem cursor-pointer border-orange ">
                        {{listItem}}
                    </li>
                </ul>
            </div> 
            <div class="flex md:space-x-8 space-x-3 items-center">
                <div @click="toggleShowCart()" class="relative cursor-pointer">
                    <span v-show="itemsInCart.length!==0"
                        class=" text-xs text-gray-blue-light bg-orange h-3 w-3 p-2 flex items-center justify-center font-bold rounded-full absolute -top-2 left-3">
                        {{itemsInCart.length}}
                    </span>
                    <img src="/images/icon-cart.svg" class="h-5 w-5 cartIcon" />
                </div>
                <img src="/images/image-avatar.png" class="rounded-full md:h-9 md:w-9 h-7 w-7" />
            </div>
        </nav>
    </div>
</template>

<script>
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
            ],
            showMenu:false
        }
    },
    computed: {
        ...mapState(['showCart', 'itemsInCart'])
    },
    methods: {
        ...mapMutations(['TOGGLE_SHOW_CART','TOGGLE_SHOW_MENU']),
        toggleShowCart() {
            this.TOGGLE_SHOW_CART();
        },
        toggleShowMenu(){
            this.TOGGLE_SHOW_MENU();
        }
    }
}
</script>
