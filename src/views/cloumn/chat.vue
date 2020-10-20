<template>
  <div id="button_50">
    <div id="text-head">
      <!-- 标题开始 -->
      <mt-header style="padding-top: 10px">
        <router-link to="/shopping" slot="left">
          <mt-button icon="back"></mt-button>
          <!-- <img src="./image/left-arrow.png" alt="后退" width="32px" /> -->
        </router-link>
        <span slot="right" style="padding-right: 15px">
          <img src="./image/search-for.png" alt="搜索" width="24px" />
        </span>
        <router-link to="/" slot="right">
          <img src="./image/share.png" alt="分享" width="24px" />
        </router-link>
      </mt-header>
      <div>
        <div class="text-title">#一周热文</div>
        <div
          :class="{ text_aaa: this.praise, text_acc: !this.praise }"
          @click="text_click"
        >
          <span :class="{ text_abb: this.praise, text_add: !this.praise }">
            {{ cocntent }}</span
          >
        </div>
        <div class="text-open">
          <span>390万阅读</span>
          &nbsp;&nbsp;
          <span>24讨论</span>
        </div>
      </div>
      <!-- 标题结束 -->
      <!-- 标题切换开始 -->
      <div id="button_50">
        <mt-navbar v-model="click" class="text-sort">
          <mt-tab-item id="one"> 热门 </mt-tab-item>
          <mt-tab-item id="two"> 看点 </mt-tab-item>
        </mt-navbar>
        <!-- 分界线 -->
        <div v-for="(elem, i) of totality" :key="i">
          <mt-tab-container v-model="click">
            <!-- 热点开始 -->
            <mt-tab-container-item id="one">
              <div class="two-head">
                <img
                  src="./image/head.jpg"
                  alt=""
                  width="40px"
                  class="img-head"
                />
                <h5 class="text-left">{{ elem.uname }}</h5>
                <br />
                <div
                  class="text-left"
                  style="color: rgb(148, 148, 148); font-size: 12px"
                >
                  {{ elem.time_one }}&nbsp;&nbsp;{{ elem.time_two }}
                </div>
                <div class="text-content">
                  {{ elem.content }}
                </div>
                <div class="text-discuss">
                  <img src="./image/discuss.png" alt="" class="text-img" />
                  <div class="discuss">评论</div>
                </div>
              </div>
            </mt-tab-container-item>
            <!-- 热点结束 -->
            <mt-tab-container-item id="two"> <div class="two-head">
                <img
                  src="./image/head.jpg"
                  alt=""
                  width="40px"
                  class="img-head"
                />
                <h5 class="text-left">{{ elem.uname }}</h5>
                <br />
                <div
                  class="text-left"
                  style="color: rgb(148, 148, 148); font-size: 12px"
                >
                  {{ elem.time_one }}&nbsp;&nbsp;{{ elem.time_two }}
                </div>
                <div class="text-content">
                  {{ elem.content }}
                </div>
                <div class="text-discuss">
                  <img src="./image/discuss.png" alt="" class="text-img" />
                  <div class="discuss">评论</div>
                </div>
              </div></mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
    </div>
    <!-- 标题切换结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      praise: true,
      cocntent: "关注",
      click: "one",
      totality: "",
      uname: "",
      time_one: "",
      time_two: "",
      content: "",
    };
  },
  methods: {
    text_click(e) {
      this.praise = !this.praise;
      if (this.praise) {
        this.cocntent = "关注";
      } else {
        this.cocntent = "取消关注";
      }
    },
  },
  mounted() {
    let totality = [
      {
        uname: "啸林传媒",
        time_one: "10-16",
        time_two: "10:30",
        content:
          "10月16日，中央政法委召开全国政法队伍教育整顿试点工作第二次交流会，中央政法委秘书长、全国政法队伍教育整顿试点办公室主任陈一新出席。",
      },
      {
        uname: "啸林传媒",
        time_one: "10-16",
        time_two: "10:30",
        content:
          "10月16日，中央政法委召开全国政法队伍教育整顿试点工作第二次交流会，中央政法委秘书长、全国政法队伍教育整顿试点办公室主任陈一新出席。",
      },
      {
        uname: "啸林传媒",
        time_one: "10-16",
        time_two: "10:30",
        content:
          "10月16日，中央政法委召开全国政法队伍教育整顿试点工作第二次交流会，中央政法委秘书长、全国政法队伍教育整顿试点办公室主任陈一新出席。",
      },
      {
        uname: "啸林传媒",
        time_one: "10-16",
        time_two: "10:30",
        content:
          "10月16日，中央政法委召开全国政法队伍教育整顿试点工作第二次交流会，中央政法委秘书长、全国政法队伍教育整顿试点办公室主任陈一新出席。",
      },
      {
        uname: "啸林传媒",
        time_one: "10-16",
        time_two: "10:30",
        content:
          "10月16日，中央政法委召开全国政法队伍教育整顿试点工作第二次交流会，中央政法委秘书长、全国政法队伍教育整顿试点办公室主任陈一新出席。",
      },
    ];
    this.totality = totality;
  },
};
</script>
<style scoped>
/* 头部样式开始 */
#button_50 {
  margin-bottom: 50px;
}
#text-head {
  height: 160px;
  background-color: rgb(38, 162, 255);
}
.text-title {
  display: inline-block;
  font-size: 24px;
  padding: 25px 15px;
  color: goldenrod;
  /* position: absolute; */
}
.text-open {
  color: white;
  padding-left: 15px;
  padding-bottom: 10px;
}
/* 初始值开始 */
.text_aaa {
  display: inline-block;
  margin-left: 40%;
}
.text_abb {
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  color: white;
}
/* 初始值结束 */
/* 初始值变化开始 */
.text_acc {
  display: inline-block;
  margin-left: 35%;
}
.text_add {
  padding: 5px;
  border-radius: 5px;
  background-color: white;
  color: black;
}
/* 初始值变化结束 */
/* 头部样式结束 */
/* 具体内容分类开始 */
.text-sort {
  margin-bottom: 5px;
}
.img-head {
  background-color: rgb(31, 137, 236);
  border-radius: 50px;
  float: left;
}
.text-left {
  display: inline-block;
  margin-top: 5px;
  margin-left: 15px;
}
.text-content {
  clear: both;
  font-size: 14px;
  margin-left: 0px;
}
.text-discuss {
  text-align: right;
}
.two-head {
  margin: 10px;
  padding: 15px;
  background-color: rgb(245, 245, 245);
}
.text-img {
  width: 18px;
  margin-top: 10px;
}
.discuss {
  position: relative;
  display: inline-block;
  padding: 5px;
  top: -3px;
}
/* 具体内容分类结束 */
</style>
