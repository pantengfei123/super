<template>
  <div>
    <div class="my-footer">
      <input type="text" placeholder="快来评论吧" v-model="value"  />
      <div class="functionality">
        <img src="../../assets/img/my-imgs/comment.png" alt="" @click="comment" />
        <img
          src="../../assets/img/my-imgs/collect-not.png"
          alt=""
          v-if="enter"
          @click="collect"
        />
        <img
          src="../../assets/img/my-imgs/collect-on.png"
          alt=""
          v-else
          @click="collect"
        />
        <img src="../../assets/img/my-imgs/transmit.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.my-footer {
  background-color: rgb(38, 162, 255);
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
}
.my-footer > input {
  outline: none;
  margin-left: 5px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid rgb(38, 162, 255);
  padding-left: 10px;
}
.my-footer  img {
  width: 26px;
  margin-left: 20px;
}
.functionality{
    display: flex;
    justify-content: space-around;
}
</style>
<script>
export default {
  data() {
    return {
      enter: true,
      value: "",
    };
  },
  methods: {
    collect() {
      if (this.enter == true) {
        this.enter = false;
        this.$toast({
            message:'收藏成功',
            position:'center',
            duration:'2000'
        })
      } else if (this.enter == false) {
        this.enter = true;
        this.$toast({
            message:'取消收藏',
            position:'center',
            duration:'2000'
        })
      }
    },
    comment() {
      console.log(this.value);
      this.$emit('childByValue',this.value);
      this.value = "";
    },
  },
};
</script>