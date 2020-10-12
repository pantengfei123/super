<template>
  <div id="app">
    <router-view></router-view>
    <my-tab-bar ></my-tab-bar>
  </div>
</template>

<script>
import MyTabBar from "@/components/common/MyTabBar.vue"
    export default {
         name:"app",
         components:{
             MyTabBar
         }
    }
</script>
<style>
  @import "assets/css/base.css";
  
</style>
