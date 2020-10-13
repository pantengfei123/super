<template>
    <div>
      <tab-bar>
        <tab-bar-item path="/home" activeColor="#1f73ba">
           <img slot="item-icon" src="@/assets/img/house-active.svg" alt="">
           <img slot="item-icon-active" src="@/assets/img/house.svg" alt="">
           <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/class" activeColor="#1f73ba">
           <img slot="item-icon" src="@/assets/img/news.svg" alt="">
           <img slot="item-icon-active" src="@/assets/img/news-active.svg" alt="">
           <div slot="item-text">时事</div>
        </tab-bar-item>
        <tab-bar-item path="/shopping" activeColor="#1f73ba">
           <img slot="item-icon" src="@/assets/img/column.svg" alt="">
           <img slot="item-icon-active" src="@/assets/img/column-active.svg" alt="">
           <div slot="item-text">专题</div>
        </tab-bar-item>
        <tab-bar-item path="/my" activeColor="#1f73ba">
           <img slot="item-icon" src="@/assets/img/my.svg" alt="">
           <img slot="item-icon-active" src="@/assets/img/my-active.svg" alt="">
           <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
import TabBar from "./TabBar.vue";
import TabBarItem from "./TabBarItem.vue"
export default {
     data(){
       return{
         
       } 
     },
     components:{
       TabBar,
       TabBarItem
       
     }     
}
</script>

<style scoped>
 
</style>
