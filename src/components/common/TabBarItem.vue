<template>
    <div class=tab-bar-item @click="itemClick">
         <div v-if="isActive"><slot name="item-icon"></slot></div>
         <div v-else><slot name="item-icon-active"></slot></div>
         <div :style="isActiveStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default { 
       name:"TarBarItem",  
       props:{
             path:String,
             activeColor:{
               type:String,
               default:"red"
             }
              },
       data(){
        return {
          
        }
       },
       computed:{
         isActive(){
           if(this.$route.path.indexOf(this.path)!==-1){
              return false;
           }else{
             return true;
           }
         },
         isActiveStyle(){
          return !this.isActive?{color:this.activeColor}:{};
         }
       },
       methods:{
         itemClick(){
           if(this.$router.history.current.fullPath==this.path){
             return
           }else{
             this.$router.push(this.path);
           }
         }
       }
}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  text-align:center;
  height:49px;
  font-size:14px;

}
.tab-bar-item img{
  width:24px;
  height:24px;
  margin-bottom:2px;
  margin-top:3px;
  vertical-align: middle;
}
</style>
