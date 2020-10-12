<template>
    <div>
      <tab-bar>
        <tab-bar-item path="/home" activeColor="#d4237a">
           <img slot="item-icon" src="@/assets/img/house-active.svg" alt="">
           <img slot="item-icon-active" src="@/assets/img/house.svg" alt="">
           <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/class" activeColor="#d4237a">
           <img slot="item-icon" src="@/assets/img/class.svg" alt="">
           <img slot="item-icon-active" src="@/assets/img/class-active.svg" alt="">
           <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/shopping" activeColor="#d4237a">
           <img slot="item-icon" src="@/assets/img/shopping.svg" alt="">
           <img slot="item-icon-active" src="@/assets/img/shopping-active.svg" alt="">
           <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/my" activeColor="#d4237a">
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
