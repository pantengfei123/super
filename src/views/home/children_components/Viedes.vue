<template>
    <div class="video">
         <h5>无制空权是多么可怕！亚美尼亚防空部队火力全开，阿战机被击落</h5>
         <div class="part2">
             <div class="btn"  @click.capture="show">
                 <img v-if="see" :src="ul" @click.capture="plays" class="imgs" alt="">
             </div>
             <video src="@/assets/img/home-video/video0.mp4" width="100%" height="200px"></video>
            <div class="size">
                <span class="left">环球网</span>   
                <span class="left">44评</span>   
                <span class="left">4小时前</span>   
            </div>
         </div>
    </div>
</template>

<script>
    import Play from "../../../static/play.png";
    import Pause from "../../../static/pause.png";
import { clearTimeout } from 'timers';
    export default {
         name:"viedes",
         data(){
             return {
                 ul:Play,
                 click:false,
                 see:true,
                 ss:null
             }
         },
         methods:{
             show(){
                var vie=document.querySelector("video");
                var img=document.querySelector(".imgs");
              
                
                 if(vie.paused){
                     
                     window.clearTimeout(this.ss);
                     console.log(this.ss)
                     this.see=true;
                     this.ul=Play;
                     return ;
                 }else{
                    
                    window.clearTimeout(this.ss);
                     this.see=true;
                     this.ul=Pause;
                     this.ss=window.setTimeout(()=>{
                           this.see=false;
                     },3000)
                     
                 }
             },
             plays(){
                var vie=document.querySelector("video");
                var img=document.querySelector(".imgs");
                if(!vie.paused){ 
                    window.clearTimeout(this.ss);
                    vie.pause();
                    this.see=true;
                    this.ul=Play;
                }else{ 
                    this.ul=Pause;
                    this.see=false;
                    vie.play();
                    
                }
                
             }
         }
    }
</script>

<style scoped>
   h5{
       width:90%;
       font-weight: 100;
       color:black;
       margin:6px auto 2px;
   }
   .video{
       width:95%;
       margin:0 auto;
       padding-bottom:10px;
       border-bottom: 3px solid #f6f6f6;
   }
   .part2{
       position: relative;
   }
   .part2>video{
       border-radius:8px;
   }
   .btn{
       width:95%;
       height:200px;
       position: absolute;
       left: 0; 
       right: 0; 
       margin-left: auto; 
       margin-right: auto; 
       z-index:100;
   }
   .btn>img{
        width:40px;
        height:40px;
        position:absolute;
        left: 0; 
        right: 0; 
        top:0;
        bottom:0;
        margin: auto; 
        z-index:100;
   }
   .size{
        margin:0 auto 5px;
        font-size:12px;
   }
   .left{
       margin-right:10px;
   }
</style>
