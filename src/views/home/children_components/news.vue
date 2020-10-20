<template>
    <div class="news"> 
        <h5>不再容忍！亚阿第三次停火协议依旧无效，俄罗斯将公开介入纳卡地区的武装冲突！</h5>
        <div class="imgs" v-if="noimg">
            <img src="@/assets/img/home-img/news1.jpg" alt="">
            <img src="@/assets/img/home-img/news2.jpg" alt="">
            <img src="@/assets/img/home-img/news3.jpg" alt="">
        </div>
        <div v-else class="text">9月27日开始，亚美尼亚和阿塞拜疆在纳卡地区爆发激烈的武装冲突，双方的停火协议也一波三折。从10月10日亚阿双方签订第一次停火协议，五分钟后双方再度爆发军事冲突。10月18日亚阿双方二度签订停火协议，仅仅过去四分钟后再度爆发军事冲突！

　　对此俄罗斯高层发出警告，当亚阿第三次停火协议依旧无效的时候，俄罗斯军队将被迫介入纳卡地区的军事冲突!</div>
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
        text-indent:32px;
    }
    .size{
        margin:3px auto 5px;
        font-size:12px;
   }
   .left{
       margin-right:10px;
   }
</style>
