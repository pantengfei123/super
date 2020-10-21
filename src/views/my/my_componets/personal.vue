<template>
    <div id="app">
        
        <ul class="all">
            <li class="img">
                <router-link to="/my">
                    <img src="../img/back.png" alt="" class="back">
                </router-link>
            </li>
            <li class="flex_container" id="photo">
                <span id="headphoto">头像</span>
                <img src="../img/user.png" alt="" width="40px" height="40px">
            </li>
            <li class="flex_container">
                <span>用户名</span> 
                <span>munan</span>
            </li>
            <li class="flex_container">
                <span>账号</span> 
                <span>munan888</span>
            </li>
            <li class="flex_container">
                <span>绑定手机</span> 
                <span>177123456789</span>
            </li>
            <li class="flex_container">
                <span>绑定邮箱</span>
                <span>419772562@qq.com</span>
            </li>
            <li>
                <span>修改信息</span> 
            </li>   
        </ul>
    </div>
</template> 
<style scoped>
    #app{
        height: 100%;
        overflow: hidden; 
        background-color:rgba(185, 180, 180, 0.3);
        background-size: 100% 100%; 
    }
    .img{
        height: 35px ;
        background-color: #1690E6;
        padding: 10px;
        margin-bottom: 15px ;
    }
    .back{
        width: 21px;
        height: 15px;
    }
    .flex_container{
        width: 100%;
        height: 35px;
        padding-left: 30px;
        padding-right: 20px;
        /* padding-top: 10px; */
        border-bottom: 1px solid rgba(0,0,0,0.1);
        background-color: rgba(256,256,256,0.5);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #photo{
        height: 60px;
    }
    .flex_container>span{
        font-family: italic;
        color: #000;

    }
    li>span:nth-child(2){
        color:rgba(185, 180, 180, 0.9);
    }
    ul>li:last-child{
                width: 100%;
        height: 35px;
        padding-left: 30px;
        padding-right: 20px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        background-color: rgba(256,256,256,0.5);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: italic;
        color: #000;
    }
</style>