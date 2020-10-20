<template>
  <div class="article">
    <!-- 顶部导航开始 -->
    <header>
      <mt-header title="亚阿冲突" fixed>
        <router-link slot="left" to="/event">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </header>
    <!-- 导航导航结束 -->
    <!-- 新闻面板开始 -->
    <div class="context">
      <!-- 标题和作者详情板块开始 -->
      <div class="context-head">
        <h3>亚阿冲突最新状况</h3>
        <div class="author">
          <div class="img">
            <img src="../../assets/img/my-imgs/0.jpg" alt="" />
          </div>
          <div class="author-time">
            <p>大傻逼</p>
            <span>2020-10-17 发布</span>
          </div>
          <div :class="attention">
            <button @click="onattention">{{ attention_masge }}</button>
          </div>
        </div>
      </div>
      <!-- 标题和作者详情板块结束 -->
      <!-- 正文面板开始 -->
      <div class="main">
        <article
          class="syl-page-article syl-device-pc tt-article-content font_m"
        >
          <p>
            也许在许多人眼中亚美尼亚与阿塞拜疆的冲突只是两国家之间的争端，实则背后涉及到土耳其等外部势力的干涉，如果没有土耳其的怂恿的话，阿塞拜疆不可能拥有这么大的决心开战，还敢不顾及各国的反对，别看外面相当强硬，实则等于土耳其迈出危险一步。
          </p>
          <div class="pgc-img">
            <img
              src="https://p1-tt.byteimg.com/origin/pgc-image/6492a2cce7eb4804816e03efeff65704?from=pc"
              img_width="1140"
              img_height="760"
              alt="伊朗调集200辆坦克，亚阿冲突升级，啥原因对阿塞拜疆如此不满？"
              inline="0"
              class="syl-page-img"
            />
            <p class="pgc-img-caption">伊亚关系不错</p>
          </div>
          <p>
            如今随着冲突的持续时间越来越长，那么形势对于阿塞拜疆与土耳其越来越不利，不仅在战场上没有取得预期的效果，国际干涉的力度正在加大，即便双方达成了停火协议，事实上已经被撕毁，但是留给阿塞拜疆时间不多了，如果关注一下，现在周边地区的俄罗斯和伊朗已经大举增兵应对。
          </p>
          <p>
            在10月初的时候，人们就发现伊朗正在向边境地区调兵，可能调集200辆以上坦克到达边境，显然他并不是针对亚美尼亚，现在亚阿冲突升级，啥原因让伊朗对阿塞拜疆如此不满？
          </p>
          <div class="pgc-img">
            <img
              src="https://p3-tt.byteimg.com/origin/pgc-image/07ed9da64ab642fca684fbfc50575425?from=pc"
              img_width="1058"
              img_height="1060"
              alt="伊朗调集200辆坦克，亚阿冲突升级，啥原因对阿塞拜疆如此不满？"
              inline="0"
              class="syl-page-img"
            />
            <p class="pgc-img-caption">伊朗增兵边境</p>
          </div>
          <p>
            如果谈及相关情况的话，表面直接的原因为城门失火殃及池鱼，在冲突当中，双方交火的炮弹竟然落入了伊朗境内，还造成了人员伤亡，阿塞拜疆无人机无故地进入了伊朗领空，这让伊朗相当不满意，公开警告：对我们国家的任何攻击都是无法容忍的。
          </p>
          <p>
            实际原因为这场冲突打乱了地区局势，伊朗作为其邻国深受其苦，非常的忧心有可能造成更大规模的灾难性及后果，目前的增兵行动就完全可以理解，也许伊朗毫无参战之意，但是防患于未然是必须做的。
          </p>
          <div class="pgc-img">
            <img
              src="https://p3-tt.byteimg.com/origin/pgc-image/8f031cec62e049cfb2635b6d397c8020?from=pc"
              img_width="1655"
              img_height="953"
              alt="伊朗调集200辆坦克，亚阿冲突升级，啥原因对阿塞拜疆如此不满？"
              inline="0"
              class="syl-page-img"
            />
            <p class="pgc-img-caption">火箭弹打到伊朗</p>
          </div>
          <p>
            如果翻开历史的话，可以看出这一个地区发生了战乱往往具有种族清洗之类的内容。100多年前的亚美尼亚大屠杀的阴影还在，如果真的出现那个局面，伊朗真的不知道如何应对。
          </p>
          <div class="pgc-img">
            <img
              src="https://p3-tt.byteimg.com/origin/pgc-image/3d0db71fc69b47c2b4ecd710fb9d3f21?from=pc"
              img_width="641"
              img_height="347"
              alt="伊朗调集200辆坦克，亚阿冲突升级，啥原因对阿塞拜疆如此不满？"
              inline="0"
              class="syl-page-img"
            />
            <p class="pgc-img-caption">伊朗人在观战</p>
          </div>
          <p>
            这场战争可能涉及大阿塞拜疆主义的兴起，为伊朗要警惕的事情，还有土耳其扩张势力之忧，土耳其借战争之机提升自己在南高加索地区的影响力，甚至扩展到中亚地区，这显然影响到了伊朗，不管怎么说，伊朗与土耳其只能是保持良好的关系，不意味着已经结成盟友，在一些问题依然有不小的冲突。
          </p>
          <div class="pgc-img">
            <img
              src="https://p1-tt.byteimg.com/origin/pgc-image/118145c4c07a4cd394e50fe2b0556b02?from=pc"
              img_width="1008"
              img_height="1360"
              alt="伊朗调集200辆坦克，亚阿冲突升级，啥原因对阿塞拜疆如此不满？"
              inline="0"
              class="syl-page-img"
            />
            <p class="pgc-img-caption">被击落的无人机</p>
          </div>
          <p>
            不管怎么说，目前的局势非常的复杂，伊朗根本不敢掉以轻心，自然要多做准备，有关的增兵行动也许只是正常反应的一部分。
          </p>
        </article>
        <!-- 评论区开始 -->
        <div class="comment" >
          <h4>评论区</h4>
          <h5>560条评论</h5>
        </div>
        <!-- 用户评论内容开始 -->
        <div class="comment-list" v-for="(v,k) of comment_message" :key="k">
          <div>
            <img src="../../assets/img/my-imgs/0.jpg" alt="">
          </div>
          <div>{{v}}</div>
        </div>
        <!-- 用户评论内容结束 -->
        <!-- 评论区结束 -->
      </div>
      <!-- 正文面板结束 -->
    </div>
    <!-- 新闻面板结束 -->
    <!-- 底部选项卡开始 -->
    <my-footer v-on:childByValue="childByValue"></my-footer>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.article {
  border-bottom: none;
  margin-bottom:50px;
}
.author {
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 5px;
  background-color: rgb(245, 245, 245);
}
.author > div {
  margin-left: 8px;
}
.context {
  margin-top: 45px;
}
.context-head {
  margin-top: 5px;
}
.context-head > h3 {
  padding-left: 10px;
}
.context-head img {
  width: 40px;
  border-radius: 50%;
}
.author > .attention {
  position: absolute;
  right: 10px;
}
.author > .on_attention {
  position: absolute;
  right: 10px;
}
.attention > button {
  padding: 4px 8px 4px 8px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
}
.on_attention > button {
  padding: 4px 8px 4px 8px;
  background-color: white;
  border: 1px solid black;
  color: black;
  border-radius: 5px;
  outline: none;
  font-size: 12px;
}
.author-time > span {
  font-size: 10px;
}
.main {
  margin-bottom: 45px;
  padding: 8px;
}
.main p {
  line-height: 25px;
}
.main img {
  width: 100%;
}
.comment{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

}
.comment-list{
  margin-top: 8px;
  background-color:  rgb(245, 245, 245);
}
.comment-list img{
  width: 35px;
  border-radius: 50%;
}
.comment-list>:last-child{
  margin-top: 5px;
}
</style>
<script>
import MyFooter from "@/components/my_project/my_footer.vue";
export default {
  components: {
    MyFooter,
  },
  data() {
    return {
      attention: {
        attention: true,
        on_attention: false,
      },
      attention_masge: "关注",
      comment_message:[]
    };
  },
  methods: {
    onattention() {
      if (this.attention.attention) {
        this.attention.on_attention = true;
        this.attention.attention = false;
        this.attention_masge = "已关注";
        this.$toast({
          message: "关注成功",
          position: "top",
          duration: "2000",
        });
      } else if (this.attention.on_attention) {
        this.attention.on_attention = false;
        this.attention.attention = true;
        this.attention_masge = "关注";
        this.$toast({
          message: "取消关注",
          position: "top",
          duration: "2000",
        });
      }
    },
    childByValue:function(childValue){
      console.log(childValue);
      this.comment_message.unshift(childValue);
    }
  },
};
</script>