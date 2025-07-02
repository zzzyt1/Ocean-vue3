<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

</script>

<template>
  <div class="adnimaldetail">
    <div class="top"><img src="../../assets/bg.png" alt=""></div>
    <div class="content">
      <div class="title">
        <h1>{{route.query.name}}</h1>
        <div class="location">{{route.query.location}}</div>
      </div>
      <div class="main">
        <img :src="route.query.img" alt="">
        <div class="info">
          <h2>动物介绍</h2>
          <h3>{{route.query.name}}</h3>
          <div class="info-item">
            学名：{{route.query.scientificName}}
          </div>
          <div class="info-item">
            别名：{{route.query.alias}}
          </div>
          <div class="info-item">
            体长：{{route.query.bodyLength}}
          </div>
          <div class="info-item">
            体重：{{route.query.bodyWeight}}
          </div>
          <div class="info-item">
            分布：{{route.query.distributed}}
          </div>
        </div>
      </div>
      <div class="science">
        <h1>趣味科普</h1>
        <div class="msg">
          {{route.query.popularScience}}
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.adnimaldetail {
  .top {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    margin: 20px 23%;

    .title {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;

      h1 {
        font-size: 30px;
        font-weight: 800;
        color: #F55E0D;
      }

      .location {
        font-size: 18px;
        margin-left: 20px
      }
    }

    .main {
      display: flex;
      margin-top: 20px;

      img {
        width: 600px;
        height: 400px;
        border-radius: 20px;
      }

      .info {
        margin-left: 30px;

        h2 {
          font-size: 28px;
          font-weight: 800;
          padding-bottom: 20px;
          color: #192061;
        }

        h3 {
          font-size: 20px;
          font-weight: 800;
          padding-bottom: 20px;
        }

        .info-item {
          font-size: 18px;
          padding-bottom: 20px;
        }
      }
    }

    .science {
      margin-top: 20px;

      h1 {
        font-size: 25px;
        font-weight: 800;
        padding-bottom: 20px;
      }

      .msg {
        font-size: 20px;

      }
    }
  }
}
</style>