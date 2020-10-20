<template>
    <div>
        我的
        <input type="text" :placeholder="data" @focus="as(1)" @blur="as(0)">
        <input type="text" :placeholder="data1" @focus="as(2)" @blur="as(0)">
        <input type="text" :placeholder="data2" @focus="as(3)" @blur="as(0)">
        <input type="text" :placeholder="data3" @focus="as(4)" @blur="as(0)">
    </div>
</template>

<script>
export default {
     data(){
       return {
           data:"a",
           data1:"b",
           data2:"c",
           data3:"d"
         
       }  
     },
     methods:{
         as(ss){
             if(ss){
                 if(ss==1){
                     this.data="";
                     return
                 }
                 if(ss==2){
                     this.data1="";
                      return
                 }
                 if(ss==3){
                     this.data2="";
                      return
                 }
                 if(ss==4){
                     this.data3="";
                      return
                 }
             }
             this.data="a"
             this.data1="b"
             this.data2="c"
             this.data3="d"
            
         }
     }
}
</script>

<style>

</style>
