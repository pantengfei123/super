<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center"><h3>聚焦亚阿</h3></div></nav-bar>
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
        <recommend></recommend>
        <div class="three">
            <div class="third">
                <span> <img class="hot" src="@/assets/img/home-img/hot.png" alt=""> 最新战况</span>
                <router-link to="/event" class="recom">文章推荐</router-link> 
            </div>
            <viedes></viedes>
             <news data="true"></news>
             <news data="false"></news>
        </div>
        <my-tab-bar></my-tab-bar>
    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import {Swiper,SwiperItem} from "@/components/common/swiper";
import Recommend from "./children_components/Recommond.vue"
import Viedes from "./children_components/Viedes.vue"
import News from "./children_components/news.vue"
import MyTabBar from "@/components/common/MyTabBar.vue"

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
                SwiperItem,
                Recommend,
                Viedes,
                News,
                MyTabBar
          },
          created() {
               
          }
    }
</script>

<style scoped>
    .home-nav{
        background:-webkit-linear-gradient(left, #56CCF2,#46ADF0);;
        color:white;
        font-style: 微软雅黑;
    }
    .third{
        display:flex;
        width:98%;
        margin:0 auto;
        margin-top:5px; 
        justify-content: space-between
    }
    .third span{
        font-weight: bold;
        color:black;
        display: inline-flex;
        /* background-image: url("../../assets/img/home-img/hot.png") ; */
    }
    .hot{
        width:16px;
        height:16px;
    }
    .third>.recom{
         font-size:14px;
         font-weight: bold;
         color:purple;
    }
    .three{
        margin-bottom:52px;
    }
</style>
