<template>
    <div class="flex items-center justify-center w-full lg:px-48">
       <nav class="flex justify-between w-full items-center border-b border-gray-blue py-9">
         <div class="flex items-center space-x-12">
            <img src="/images/logo.svg" class="h-5"/>
            <ul class="flex items-center space-x-6 text-sm capitalize text-gray-blue">
                <li v-for="(listItem,index) in listItems" :key="index" class="cursor-pointer hover:font-bold hover:border-b border-b-orange">
                    {{listItem}}
                </li>
            </ul>
         </div>
         <div class="flex space-x-8 items-center">
            <img src="/images/icon-cart.svg" class="h-5 w-5"/>
            <img src="/images/image-avatar.png" class="rounded-full h-9 w-9"/>
        </div>
       </nav>
    </div>

</template>

<script lang="ts">
export default {
    name: 'Navbar',
    data() {
        return {
            listItems:[
                'collections',
                'Men',
                'women',
                'about',
                'contact'
            ]
        }
    }
}
</script>