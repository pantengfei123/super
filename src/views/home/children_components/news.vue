<template>
    <div class="news"> 
        <div class="text">不再容忍！亚阿第三次停火协议依旧无效，俄罗斯将公开介入纳卡地区的武装冲突！</div>
        <div class="imgs" v-if="noimg">
            <img src="@/assets/img/home-img/news1.jpg" alt="">
            <img src="@/assets/img/home-img/news2.jpg" alt="">
            <img src="@/assets/img/home-img/news3.jpg" alt="">
        </div>
        <div class="size">
            <span class="left">真理报</span>
            <span class="left">6评</span>
            <span class="left">11小时前</span>
        </div>
    </div>
</template>

<script>
export default {
        data(){
            return {
               noimg:null
            }
        },
        props:["data"],
        mounted(){
            
            if(this.data=="true"){
                this.noimg=true
            }else{
                this.noimg=false
            }
        }
       
}
</script>

<style scoped>
    .news{
        width:95%;
        margin:0 auto;
        padding-bottom:10px;
        border-bottom:3px solid #f6f6f6;
    }
    .imgs{
        display:flex;
        margin-top:5px;
        justify-content:space-between;
        border-radius:8px;
        overflow:hidden;
    }
    .imgs>img{
        width:33%;
    }
    .text{
        margin-top:5px;
        color:black;
    }
    .size{
        margin:3px auto 5px;
        font-size:12px;
   }
   .left{
       margin-right:10px;
   }
</style>
