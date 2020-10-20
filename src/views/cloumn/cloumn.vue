<template>
  <div class="text-one">
    <div class="search">
      <!-- 搜索框开始 -->
      <div>
        <input type="text" placeholder="请输入..." class="search-one" />
        <button class="search-button">搜索</button>
      </div>
    </div>
    <!-- 搜索框结束 -->

    <!-- 专栏开始 -->
    <router-link to="/chat" v-for="(elem,i) of arrays" :key="i">
      <div class="one-push">
        <div>
          <img src="./image/timg.jpg" alt="" width="80px" height="80px" />
        </div>
        <div class="push-flex">
          <h3 class="push-ya">{{elem.name}}</h3>
          <br />
          <span class="open-one">{{elem.read}}</span>
          <span class="open-one">{{elem.discuss}}</span>
        </div>
        <div class="right_one">
          <img src="./image/right.png" alt="" width="16px">
        </div>
      </div>
    </router-link>
    <!-- 专栏结束 -->
    <my-tab-bar></my-tab-bar>
  </div>
</template>

<script>
import MyTabBar from "@/components/common/MyTabBar.vue"

export default {
  data() {
    return {
      arrays:'',
      name:'',
      read:'',
      discuss:'',
    };
  },
  components:{
    MyTabBar
  },
  mounted() {
    let array = [
      {
        name:'一周热文',
        read:'379.6万阅读',
        discuss:'6585评论',
      },{
        name:'一周分享',
        read:'379.6万阅读',
        discuss:'6989评论',
      },{
        name:'一周排行',
        read:'389.6万阅读',
        discuss:'4569评论',
      },{
        name:'热门新闻',
        read:'798.9万阅读',
        discuss:'6323评论',
      },{
        name:'亚阿冲突',
        read:'798.9万阅读',
        discuss:'6323评论',
      },
    ];
    this.arrays=array;
  },
};
</script>

<style scoped>
.text-one{
  margin-bottom: 50px;
}
.search {
  height: 40px;
  background-color: rgb(38, 162, 255);
  display: flex;
  align-items: center;
}
.search-one {
  margin-left: 15px;
  border: 1px solid rgb(38, 162, 255);
  padding-left: 5px;
  outline: none;
  border-color: rgb(38, 162, 255);
  height: 30px;
  border-radius:10px 0 0px 10px;
  z-index: 999;
}
.search-button{
  width: 50px;
  height: 28px;
  position: relative;
  left: -2px;
  border: none;
  background-color:  rgb(18, 183, 233);
}
.search-button:focus{
  border: none;
  outline: none;

}
.push-ya {
  padding-top: 10px;
  padding-left: 10px;
  color: red;
}
.open-one {
  position: relative;
  top: -8px;
  padding-left: 10px;
}
.one-push {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  /* border-top: 1px solid black; */
  border-bottom: 1px solid rgb(206, 201, 201);
}
.right_one{
  position: relative;
  top: 30px;
  right: -15%;
}
</style>