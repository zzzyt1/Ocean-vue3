<script setup>


</script>

<template>
  <div class="projects">
    <div class="item">
      <div class="title">海洋世界</div>
      <div class="content">
        <img src="../../assets/ocean/2 (3).png" alt="">
        <div class="info">
          <div class="info-title">海豚湾之恋</div>
          <div class="info-label">
            浪漫动人“白鲸海豚”超级水秀，约10-20分钟适合所有年龄
          </div>
          <div class="info-msg">
            奇幻的360度多维水秀场，海豚、白鲸与美人鱼、王子、月光天使等角色联袂演绎真人版“人鱼童话”。多种艺术形式、多重情感体验，强大的表演阵容，带给你梦幻、动人的海洋大戏！
            《海豚湾之恋》是一场糅合多元艺术形式的水秀表演，制作班底由原迪斯尼全球娱乐创意总监罗尼•罗德雷格斯率领，美国著名娱乐表演产品设计公司Brown
            Entertainment创意大师Bill•Brown担纲导演、《花木兰》音乐人亲自配乐联袂打造，带给你震撼人心的视听盛宴！
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title">极地世界</div>
      <div class="content">
        <img src="../../assets/ocean/2 (2).png" alt="">
        <div class="info">
          <div class="info-title">功夫海象</div>
          <div class="info-label">
            爆笑幽默“海狮海象”舞台剧，约10-20分钟适合所有年龄
          </div>
          <div class="info-msg">
            身躯庞大、天然呆萌，会模仿迈克尔·杰克逊舞蹈的“功夫海象”亮相大连圣亚极地世界，与皮肤黑亮、身手灵活的海狮联袂演出极地星搭档：
            美女互动、大牌登台、各种霸气侧漏、各种无厘头、各种神级吐槽……还有搞笑幽默的主持人，一起打造爆笑“大片”！
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title">白鲸传奇</div>
      <div class="content">
        <img src="../../assets/ocean/2 (1).png" alt="">
        <div class="info">
          <div class="info-title">海豚湾之恋</div>
          <div class="info-label">
            震撼唯美双人双鲸海底共舞，约5-10分钟年龄
          </div>
          <div class="info-msg">
            白鲸水下表演，双人双鲸升级震撼演绎“白鲸骑士”、“水下华尔兹”、海底拼“心型”，人鲸大回环挑战，同步转体1080°，全水景精彩表演，兼具难度与创意的人鲸默契共舞，唯美圣亚极地世界。

            《白鲸传奇》是一场由白鲸小九领衔主演的白鲸水下表演秀。拥有长16.8米，宽6.6米，水深6米的水下表演场，驯养人员全程不佩戴气瓶等潜水用具，与白鲸水中共舞，呈现出人与海洋动物和谐共处的奇妙图景。

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.projects {
  padding: 20px 20%;

  .item {
    margin-bottom: 50px;
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    color: #192061;
    margin-bottom: 20px;
  }

  .content {
    display: flex;

    img {
      width: 640px;
      height: 425px;
      margin-right: 20px;
    }

    .info {
      .info-title {
        width: 250px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        font-size: 35px;
        color: #fff;
        margin-bottom: 10px;
        border-radius: 10px;
        background-color: rgb(57, 70, 167);
      }

      .info-label {
        font-size: 18px;
        color: #666;
        margin: 20px 0;
      }

      .info-msg {
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
}
</style>