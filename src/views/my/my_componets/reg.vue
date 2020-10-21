<template>
    <div id="app">
            <div class="title">
      <router-link to="/my">
        <img src="../img/back.png" alt="" class="img">
      </router-link>
    </div>
        <div id="reg_form">
            <div>
                <!-- 用户名                                                           失去焦点检测用户名是否合法       -->
                <input type="text" placeholder="请输入注册用户名" id="user" @blur="Check_username()" v-model="username">

            </div>
            <div>
                <!-- 密码 -->
                <input type="password" placeholder="请输入注册密码" id="passward1" @blur="Check_password()" v-model="password">
            </div>
            <div>
                <!-- 确认密码: -->
                <input type="password" placeholder="请输再次确认密码" id="passward2" @blur="Check_password2()" v-model="password2">
            </div>
            <div>
                <!-- 注册邮箱: -->
                <input type="e-mail" placeholder="请输正确的邮箱地址" id="mail" @blur="Check_email()" v-model="email">
            </div>
            <div class="phone">
                <!-- 预留手机号: -->
                <input type="phone" placeholder="请输入正确的手机号" id="phone" @blur="Check_phone()" v-model="phone">
            </div>
        </div>
                <mt-button plain type="primary">注册新用户</mt-button>
            <div id="login">
                <router-link to="/login" class="old_user">——老用户登录——</router-link>
            </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            // 用户名
            username:'',
            // 首次密码
            password:'',
            // 确认密码
            password2:'',
            // 邮箱
            email:'',
            // 手机号
            phone:''
            
        }
    },
        methods:{
            // 验证用户名是否合法
            Check_username(){
                let usernameRegExp = /^[A-Za-z]\d{6,8}$/;
                if(usernameRegExp.test(this.username)){
                    this.$toast({
                        message:'用户名可用',
                        position:'bottom',
                        
                    })
                }else{
                    this.$toast({
                        message:'用户名首位必须以字母开头后＋6到8位数字',
                        position:'bottom'
                    })
                }
            },
            // 验证密码是否在6到8位
            Check_password(){
                let passwordRegExp = /^[0-9A-Za-z]{8,20}$/
                if(passwordRegExp.test(this.password)){
                    
                }else{
                   this.$toast({
                        message:'密码必须是8~20位之间',
                        position:'bottom'
                    })
                }
            },
            // 二次确认密码
            Check_password2(){
                if(this.password2 != this.password){
                    this.$toast({
                        message:'请确保两次密码输入一致',
                        position:'bottom'
                    })
                }else{
                   
                }
            },
            // 验证手机号格式是否正确
            Check_phone(){
                let phoneRegExp = /^1[3|5|6|7|8|9]\d{9}$/;
                if(phoneRegExp.test(this.phone)){
                   
                }else{
                    this.$toast({
                        message:'请输入正确的手机号',
                        position:'bottom'
                    })
                }
            },
            // 验证邮箱格式是否正确
            Check_email(){
                let emailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if(emailRegExp.test(this.email)){
                    
                }else{
                    this.$toast({
                        message:'请输入正确的邮箱格式',
                        position:'bottom'
                    })
                }
            },
            handle(){
                if(this.Check_username() && this.Check_password() && this.Check_password2() && this.Check_phone() && Check_email()){
                    this.axios.post('/register','username')
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

     #reg_form{
        width: 80%;
        margin-top: 120px;
        border: 2px solid rgba(256, 256, 256, 0.5);
        box-shadow:  0px 0px 10px #dbd4d4a9;
        border-radius: 15px;
        margin: 112px auto 15px;
        padding: 10px 0px 10px 0px;
     }
     #reg_form>div{
         border-bottom: 1px solid rgba(256,256,256,.5);
         width: 90%;
         background: rgba(0,0,0,0);
         margin: 0 auto;
         
     }
     #reg_form >div>input{
        width: 90%;
        height: 39px;
        outline: none;
        border: 0px solid #fff ;
        text-align: center;
        background : rgba(0,0, 0, 0);
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
    input::-webkit-input-placeholder{
          color: #ffffff;
        }
    .old_user{
        color: #fff;
    }
    .phone{
        border-bottom:0px solid #fff !important;
    }
    p{
        font-size: 13px;

    }
</style>