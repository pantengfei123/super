<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center"><h3>亚阿冲突</h3></div></nav-bar>
        <swiper>
             <swiper-item >
                 <a href="javascript:;">
                     <img src="@/assets/img/home-img/home0.jpg" alt="">
                 </a>
             </swiper-item>
             <swiper-item >
                 <a href="javascript:;">
                     <img src="@/assets/img/home-img/home1.jpg" alt="">
                 </a>
             </swiper-item>
             <swiper-item >
                 <a href="javascript:;">
                     <img src="@/assets/img/home-img/home2.jpg" alt="">
                 </a>
             </swiper-item>
             <swiper-item >
                 <a href="javascript:;">
                     <img src="@/assets/img/home-img/home3.jpg" alt="">
                 </a>
             </swiper-item>
             <swiper-item >
                 <a href="javascript:;">
                     <img src="@/assets/img/home-img/home4.jpg" alt="">
                 </a>
             </swiper-item>
             <swiper-item >
                 <a href="javascript:;">
                     <img src="@/assets/img/home-img/home5.jpg" alt="">
                 </a>
             </swiper-item>
        </swiper>
    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import {Swiper,SwiperItem} from "@/components/common/swiper"
    export default {
          name:"home",
          data(){
            return {
                banners:[],
                recommends:[],
            }  
          },
          components:{
                NavBar,
                Swiper,
                SwiperItem
          },
          created() {
               
          }
    }
</script>

<style scoped>
    .home-nav{
        background-color: #1a8bc0;
        color:white;
    }
</style>
