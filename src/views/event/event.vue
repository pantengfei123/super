<template>
  <div>
    <div class="my-head">
      <!-- 顶部选项卡 -->
      <mt-navbar v-model="active" fixed>
        <mt-tab-item id="1">综合</mt-tab-item>
        <mt-tab-item id="2">热点</mt-tab-item>
        <mt-tab-item id="3">资讯</mt-tab-item>
        <mt-tab-item id="4">视频</mt-tab-item>
      </mt-navbar>
      <!-- 顶部选项卡结束 -->
    </div>
    <!-- 面板开始 -->
    <div class="tab">
      <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item id="1">
          <div v-for="(v, k) of news" :key="k" class="content">
            <router-link to="/article"><p>{{ v.title }}</p></router-link>
            <div class="author_article">
              <div class="author">
                <img src="../../assets/img/my-imgs/0.jpg" alt="" />
                <p>作者:{{ v.author }}</p>
              </div>
              <div class="article">
                <p>{{ v.content }}</p>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2"
          ><div v-for="(v, k) of news" :key="k" class="content">
            <router-link to="/article"><p>{{ v.title }}</p></router-link>
            <div class="author_article">
              <div class="author">
                <img src="../../assets/img/my-imgs/0.jpg" alt="" />
                <p>作者:{{ v.author }}</p>
              </div>
              <div class="article">
                <p>{{ v.content }}</p>
              </div>
            </div>
          </div></mt-tab-container-item
        >
        <mt-tab-container-item id="3"
          ><div v-for="(v, k) of news" :key="k" class="content">
            <router-link to="/article"><p>{{ v.title }}</p></router-link>
            <div class="author_article">
              <div class="author">
                <img src="../../assets/img/my-imgs/0.jpg" alt="" />
                <p>作者:{{ v.author }}</p>
              </div>
              <div class="article">
                <p>{{ v.content }}</p>
              </div>
            </div>
          </div></mt-tab-container-item
        >
        <mt-tab-container-item id="4"
          ><div v-for="(v, k) of news" :key="k" class="content">
            <router-link to="/article"><p>{{ v.title }}</p></router-link>
            <div class="author_article">
              <div class="author">
                <img src="../../assets/img/my-imgs/0.jpg" alt="" />
                <p>作者:{{ v.author }}</p>
              </div>
              <div class="article">
                <p>{{ v.content }}</p>
              </div>
            </div>
          </div></mt-tab-container-item
        >
      </mt-tab-container>
    </div>
     <my-tab-bar></my-tab-bar>
    <!-- 面板结束 -->
  </div>
</template>
<style scoped>
.tab{
  margin-top: 50px;
}
.tab>div {
  margin-top: 5px;
}
.content {
  /* border-bottom: 1px solid grey; */
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  /* box-shadow: 0px 0px 6px 1px gray; */
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 245, 245);
}
.content>a{
  text-decoration: none;
  color: black;
}
.author > p {
  font-size: 10px;
  text-align: center;
}
.author > img {
  border-radius: 8px;
}
.mint-navbar {
  border: 1px solid #26a2ff;
  /* border-radius: 8px; */
  background-color: #26a2ff !important;
}
.mint-tab-container-item{
    margin-bottom: 55px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid rgb(245, 245, 245) !important;
  color: white !important;
  margin-bottom: -3px;
}
.mint-navbar .mint-tab-item {
  color: black !important;
}
.author_article{
  display: flex;
  margin-top: 5px;
}
.article{
    margin-left: 8px;
}
</style>
<script>
import MyTabBar from "@/components/common/MyTabBar.vue"

export default {
  data() {
    return {
      active: "1",
      news: [],
    };
  },
  components:{
        MyTabBar
     },
  watch: {
    active() {
      this.axios
        .get("/news", {
          params: {
            cid: this.active,
          },
        })
        .then((result) => {
          this.news = result.data;
        });
    },
  },
  mounted() {
    this.axios
      .get("/news", {
        params: {
          cid: this.active,
        },
      })
      .then((result) => {
        this.news = result.data;
      });
  },
};
</script>
