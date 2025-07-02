<script setup>


</script>

<template>
  <div class="news">
    <div class="item">
      <div class="left">
        <img src="../../assets/ocean/3 (2).jpg" alt="">
      </div>
      <div class="right">
        <div class="title">公益丨直播世界地球日海滩“减塑”，一起行动吧！</div>
        <div class="info">
          今年世界地球日的主题是“携手为保护地球投资（Invest In Our
          Planet）”。地球上海洋总面积拥有约占地球表面积的71%，海洋文化与大陆文化是相互影响、相互融合、相互促进的，每个个体为环保做出的努力都将会化成伟大的力量。在海滩清理的过程中，大连圣亚志愿服务小组发现海滩垃圾更多的是生活垃圾，如果这些被冲入海洋，被海洋生物误食，不仅会对它们的生命安全构成威胁，也会让海洋
          生态环境被破坏；而被遗落在海滩的废弃品会被埋藏在沙砾之中，为游人行走安全留下隐患。
        </div>
        <div class="time">
          <span>2024-04-22</span>
          <span>阅读 1550</span>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../assets/ocean/3 (1).png" alt="">
      </div>
      <div class="right">
        <div class="title">公益丨保护水生动物，携手涉海科研院所及政企单位共建海洋未来！</div>
        <div class="info">
          为全面贯彻落实《中华人民共和国野生动物保护法》，牢固树立习近平生态文明思想，提高公众对保护野生动物的科学认知，调动公众参与水生野生动物保护的积极性，开展科普宣传活动，为每一位到来的游客分发野
          生动物保护宣传册，并为他们介绍部分国家级保护动物物种。其中，“国家一级保护动物-西太平洋斑海豹”备受关注。
        </div>
        <div class="time">
          <span>2024-05-12</span>
          <span>阅读 3300</span>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../assets/ocean/3 (1).jpg" alt="">
      </div>
      <div class="right">
        <div class="title">公益丨弘扬“一二九精神”，做无私无畏、服务社会的人</div>
        <div class="info">
          会上，党员志愿者代表和基层员工代表发言。质朴的语言表达了他们对志愿一线的那份热忱。本次参与支援人员来自企业的各个岗位，他们中有管理人员、党员干部、新
          晋馆长和一线员工，每个人都克服困难，无畏危险，出色完成了本次支援任务，用自己的实际行动诠释初心和使命。这是每一位志愿者的荣誉，也是向这场没有硝烟的战斗中所有的逆行英雄致敬。
        </div>
        <div class="time">
          <span>2024-06-21</span>
          <span>阅读 5000</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.news {
  padding: 30px 20%;

  .item {
    display: flex;
    width: 1200px;
    height: 220px;
    padding-bottom: 20px;
    margin-top: 20px;
    border-bottom: 1px solid #eee;

    .left {
      width: 300px;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .right {
      flex: 1;
      padding-left: 20px;

      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .info {
        margin-bottom: 30px;
      }

      .time {
        font-size: 12px;
        color: #999;

        span {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>