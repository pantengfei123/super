<template>
    <div id="hy-swiper">
        <div class="swiper"  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>
        <slot name="indicator"></slot>
        <div class="indicator">
            <slot name="indicator">
                <div v-for="(item,index) in slideCount" class="indi_item" :class="{active:index=== currentIndex-1}" :key="index"></div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
           name:"Swiper",
           props:{
               interval:{
                   type:Number,
                   default:3000
               },
           },
           data(){
              return {
                  slideCount:0,
                  totalWidth:0,
                  swiperStyle:{},
                  currentIndex:1,
                  scrolling:false
              }
           },
           mounted(){
               setTimeout(()=>{
                   this.handleDom();
                   this.startTimer();
               },3000)
           },
           methods:{
               startTimer(){
                   this.playTimer=window.setInterval(()=>{
                       this.currentIndex++;
                       this.scrollingContent(-this.currentIndex*this.totalWidth);
                   },this.interval)
               },
               stopTimer(){
                 window.clearInterval(this.playTimer);  
               },
               setTransform(position){
                    this.swiperStyle.transform =`translate3d(${position}px,0,0)`;
                    this.swiperStyle["-webkit-transform"]=`translate3d(${position}px,0,0)`;
                    this.swiperStyle["-ms-transform"]=`translated3d(${position}px,0,0)`;
               },
               handleDom(){
                   let swiperEL=document.querySelector(".swiper");
                   let slideELs= swiperEL.getElementsByClassName("slide");
                   this.slideCount=slideEls.length;
                   if(this.slideCount>1) {
                       let cloneFirst=slideELs[0].cloneNode(true);
                       let cloneLast=slideELs[this.slideCount-1].cloneNode(true);
                       swiperEL.insertBefore(cloneLast,slidesELs[0]);
                       swiperEL.appendChild(cloneFirst);
                       this.totalWidth=swiperEL.offsetWidth;
                       this.swiperStyle=swiperEL.style;
                   }
                  this.setTransform(-this.totalWidth);
               }
           }
           
    }
</script>

<style>

</style>
