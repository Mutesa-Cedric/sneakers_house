<template>
    <div @click="checkClick" ref="menuWrap" class="  fixed z-50 left-0 top-0 w-full h-screen md:hidden">
        <div class="max-w-xs w-full flex flex-col items-center pt-12 h-full bg-white">
            <img src="/images/icon-close.svg" class="cursor-pointer" @click="toggleShowMenu()"/>
            <ul class="flex flex-col items-center space-y-3 pt-16 font-bold text-sm capitalize text-black-light">
                <li v-for="(listItem,index) in listItems" :key="index" class="listItem cursor-pointer border-orange ">
                    {{listItem}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
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
    methods: {
        ...mapMutations(['TOGGLE_SHOW_MENU']),
        checkClick(e) {
            if (e.target === this.$refs.menuWrap) {
                this.TOGGLE_SHOW_MENU();
            }
        },
        toggleShowMenu(){
            this.TOGGLE_SHOW_MENU();
        }
    }
}

</script>