<template>
  <div id="app">
    <div class="title">
      <router-link to="/my">
        <img src="../img/back.png" alt="" class="img">
      </router-link>
    </div>
    <div id="input">
    <img src="../img/user.png" alt="">

      <input type="text" class="user" :placeholder="data_user" @focus="block(data_user)" @blur="block()">
    
      <input type="password" class="password" :placeholder="data_password" @focus="block(data_password)" @blur="block()">
      
     
        
    </div>
    <div>
        <mt-button plain type="primary">登录</mt-button>
    </div>
    <div id="reg">
      <router-link to="/reg" class="new_user">—— 注册新用户 ——</router-link>
    </div>    
  </div>
</template>
<script>
export default {
  data(){
    return{
      data_user:"请输入用户名",
      data_password:"请输入用密码"
    }
  },
  methods:{
    block(value){
      if(value){
        value==this.data_user ? this.data_user="" : this.data_user="请输入用户名";
        value==this.data_password ? this.data_password="" : this.data_password="请输入用密码"
      }
    }
  }
  
    
}
</script>
<style scoped>
  #app{
    width: 100%;
    height: 667px;
    overflow: auto;    
    background-image: url('../img/bgc.png');
    background-size: 100% 108%;
    text-align: center;
  }
  .title{
    width: 100%;
    padding-right:330px ;
    padding-top: 15px;
  }
  .img{
    width: 30px;
    height: 20px;
    
  }
  #input>img{
   padding-top: 15px;
  }
  #input{
    width: 80%;
    margin-top: 120px;
    border: 2px solid rgba(256, 256, 256, 0.5);
    box-shadow:  0px 0px 10px #dbd4d4a9;
    border-radius: 15px;
    margin: 150px auto 15px;
    text-align: center;
  }
  #input>input{
    
    width: 90%;
    height: 45px;
    outline: none;
    border: 0px solid #fff ;
    text-align: center;
    background: rgba(0,0,0,0);

  }

 #input>.password{
      border-top: 1px solid rgba(230, 225, 229, 0.3);
    }
 button{
        width: 75%;
        height: 35px;
        margin:15px 0px 15px 0px;
        
    }
 .mint-button{
   color: #fff;
   border:1px solid #dbd4d4a9 ;
 }
#reg{
    text-align: center;
}
input::-webkit-input-placeholder{
          color: #ffffff;
        }
.new_user{
  color: #fff;
}
</style>