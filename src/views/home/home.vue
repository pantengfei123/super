<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center"><h3>购物街</h3></div></nav-bar>
        <swiper>
             <swiper-item ></swiper-item>
        </swiper>
    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import {getHomeMultidata} from "@/network/home.js";
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
              getHomeMultidata().then(res=>{
                  console.log(res);
                  this.banners=res.data.banner.list;
                  this.recommends=res.data.recommend.list;
              })
          }
    }
</script>

<style scoped>
    .home-nav{
        background-color: var(--color-tint);
        color:white;
    }
</style>
