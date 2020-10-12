<template>
    <div id="class">
        <nav-bar class="class-nav"><div slot="center"><h3>购物街</h3></div></nav-bar>
    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
    export default {
           name:"class",
           components:{
                NavBar
          }
    }
</script>

<style scoped>
     .class-nav{
        background-color: var(--color-tint);
        color:white;
    }
</style>
