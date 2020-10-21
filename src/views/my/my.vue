<template>
    <div id="app">
        <div class="title">
            <div id="user_photo"></div>
            <div id="bt">
            <mt-button type="primary" size="large" plain id="bt1" @click="login()">登录</mt-button>
            <mt-button type="primary" size="large" plain id="bt2" @click="reg()">注册</mt-button>
        </div>
        </div>  
       <div class="table" >
           <table style="width:100%;margin:0 auto">
               <tr>
                   <td>
                       <router-link to="/personal">
                           <div class="sprite1"></div>
                           个人中心
                       </router-link>
                    </td>
               </tr>
               <tr>
                   <td>
                       <div class="sprite2"></div>
                       VIP模块
                    </td>
               </tr>
               <tr>
                   <td>
                       <div class="sprite3"></div>
                       我的收藏
                    </td>
               </tr>
               <tr>
                   <td>
                       <div class="sprite4"></div>
                       消息中心
                    </td>
               </tr>
               <tr>
                   <td>
                       <div class="sprite5"></div>
                       设置
                    </td>
               </tr>
               <tr>
                   <td>
                       <div class="sprite6"></div> 
                       关于我们
                    </td>
               </tr>
           </table>
       </div>     
    </div>
</template>

<script>
export default {
    methods:{
        login(){
            this.$router.push('/login')
        },
        reg(){
            this.$router.push('/reg')
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .title{
        background:#1690E6;
        background-size: 100% 300%;
        z-index: -1;
        width: 100%;
        height: 235px;
    }
    
    #user_photo{
        width:100px;
        height:100px;
        background-image:url('./img/user.png');
        background-size: 100% 100%;
        border: 0px solid blue;
        border-radius: 50%;
        position: absolute;
        left: 137.5px;
        top: 10px;
        z-index: 200;
    }
    #bt1{
        width:250px;
        color: #ffffee;
        background-color: rgba(255,255,255,.3);
    }
    #bt2{
        width: 250px;
        margin-top: 5px ;
        color: #ffffee;
        background-color: rgba(255,255,255,.3);

    }
    #bt{
       position: absolute;
       left: 63px;
       top: 125px;

    }
    .table{
        position: absolute;
        top: 234px;
        font: normal bold 18px/20px arial,sans-serif;
        width: 100%;
        margin: 0 auto;
    }
    tr>td{
        width: 100%;
        height: 35px;
        padding-left: 15px;        
    }
    tr:nth-child(odd){
        background-color: #FFF;
        
    }
    tr:nth-child(even){
        background-color: #E5E5E5;
        
    }
    .sprite1{
        width:25px;
        height:25px;
        background-image: url(img/sprite.png);
        background-position:2px 3px;
        display: inline-block
    }
    .sprite2{
        width:25px;
        height:25px;
        background-image: url(img/sprite.png);
        background-position:-296px 8px;
        display: inline-block
    }
    .sprite3{
        width:25px;
        height:25px;
        background-image: url(img/sprite.png);
        background-position:4PX -45PX;
        display: inline-block
    }
    .sprite4{
        width:25px;
        height:25px;
        background-image: url(img/sprite.png);
        background-position:4px -20px;
        display: inline-block
    }
    .sprite5{
        width:25px;
        height:25px;
        background-image: url(img/sprite.png);
        background-position:4px -268px;
        display: inline-block   
    }
    .sprite6{
        width:25px;
        height:25px;
        background-image: url(img/sprite.png);
        background-position:4px -369px;
        display: inline-block
    }
</style>


