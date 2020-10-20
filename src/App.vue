<template>
  <div id="app">
    <router-view></router-view>
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
  html,body,#app{
    height:100%;
  }
  my-tab-bar{
     z-index:999;
  }
</style>
