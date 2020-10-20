<template>
    <div class="recommond">
        <div class="recommond-item">
            <router-link to="">
                <img src="@/assets/img/home-img/recom1.jpg" alt="">
                <div>资讯</div>
            </router-link >
        </div>
        <div class="recommond-item">
            <router-link to="">
                <img src="@/assets/img/home-img/recom4.jpg" alt="">
                <div>国际</div>
            </router-link >
        </div>
        <div class="recommond-item">
            <router-link to="">
                <img src="@/assets/img/home-img/recom3.jpg" alt="">
                <div>国内</div>
            </router-link >
        </div>
        <div class="recommond-item">
            <router-link to="">
                <img src="@/assets/img/home-img/recom2.jpg" alt="">
                <div>战况</div>
            </router-link >
        </div>     
    </div>
</template>

<script>
        export default {
            name:"recommond",
            
        }
</script>

<style scoped>
  .recommond{
      display:flex;
      flex-flow:row wrap;
      justify-content:space-around;
      align-items: center;
      font-size:15px;
      height:100px;
      border-bottom:2px solid #f6f6f6;
  }
  .recommond-item{
      width:25%;
  }
  .recommond-item div{
      width:100%;
      text-align:center;
  }
  .recommond img{
      width:60px;
      height:60px;
      display:block;
      margin:0 auto 2px;
      border-radius:50%;
  }
</style>
