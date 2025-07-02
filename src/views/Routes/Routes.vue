<script setup>
import { ref } from 'vue';
import { ElButton } from 'element-plus';
import overview from '../../assets/ocean/总览图.jpg';
import ocean from '../../assets/ocean/海洋世界.jpg';
import polar from '../../assets/ocean/极地世界.jpg';
import coral from '../../assets/ocean/珊瑚世界.jpg';
import deepSea from '../../assets/ocean/深海传奇.jpg';
// 定义地图部分的标签
const mapSections = {
  overview: '总导览图',
  ocean: '海洋世界',
  polar: '极地世界',
  coral: '珊瑚世界',
  deepSea: '深海传奇'
};

// 映射各部分的图片路径
const mapImages = {
  overview: overview,
  ocean: ocean,
  polar: polar,
  coral: coral,
  deepSea: deepSea
};

// 当前显示的图片，默认显示总览图
const currentMap = ref(mapImages.overview);

// 切换显示的地图
const selectMap = (section) => {
  currentMap.value = mapImages[section];
};
</script>
<template>
  <div class="map-view">
    <div class="map-sidebar">
      <el-button v-for="(label, key) in mapSections" :key="key" type="primary" plain @click="selectMap(key)">
        {{ label }}
      </el-button>
    </div>

    <div class="map-display">
      <img :src="currentMap" alt="Map Image" />
    </div>
  </div>
  <div class="route-recommendation">
    <header class="header">
      <h1>海洋馆推荐路线</h1>
      <p>根据我们的推荐路线，您可以轻松游览海洋世界和极地世界的精彩景点！</p>
    </header>

    <section class="route-section">
      <div class="route-item">
        <div class="image-container">
          <img src="../../assets/ocean/5 (1).png" alt="鲨鱼岛" />
        </div>
        <div class="content">
          <h2>位置：海洋世界 - 鲨鱼岛</h2>
          <p>了解鲨鱼的生活习性，观赏它们在水中的优雅泳姿。遭遇沙虎鲨遮天蔽日，欣赏炫彩岩礁光彩夺目，漫步幽蓝海底，300余种、近万尾海洋生灵触手可及，开启海底奇幻之旅。</p>
        </div>
      </div>

      <div class="route-item">
        <div class="image-container">
          <img src="../../assets/ocean/5 (2).png" alt="海底通道" />
        </div>
        <div class="content">
          <h2>位置：海洋世界 - 118米海底通道</h2>
          <p>漫步于118米的海底通道，欣赏海洋生物从四周游过的美景。渔人、潜艇、椰林、鲨鱼交汇其间，鲨鱼触摸池带你体验鲨鱼近在指间的刺激。鲨鱼秋千、“旗鱼号”潜艇带你回归童真童趣，重温永恒的快乐瞬间!</p>
        </div>
      </div>

      <div class="route-item">
        <div class="image-container">
          <img src="../../assets/ocean/5 (3).png" alt="哈瓦那大道" />
        </div>
        <div class="content">
          <h2>位置：海洋世界 - 哈瓦那大道</h2>
          <p>体验加勒比风情的哈瓦那大道，感受异域风情的热情和活力。欢迎来到西印度群岛，位于加勒比海的明珠--哈瓦那一段充满异域风情的休闲区，琳琅满目的海洋特色商品秘制的喷香美食绝对让你大饱口福、眼福和耳福。</p>
        </div>
      </div>

      <div class="route-item">
        <div class="image-container">
          <img src="../../assets/ocean/5 (4).png" alt="企鹅岛" />
        </div>
        <div class="content">
          <h2>位置：极地世界 - 南极企鹅岛</h2>
          <p>观赏南极企鹅的可爱模样，了解它们的生活习惯和环境。南极企鹅社区:水陆两栖的原生态展示环境:
            谈恋爱、抢婚房、偷石子、孵蛋、扮雕塑...王企鹅、白眉企鹅、帽带企鹅三大家族的逗秀生活大舞台!</p>
        </div>
      </div>

      <div class="route-item">
        <div class="image-container">
          <img src="../../assets/ocean/5 (5).png" alt="北极动物村" />
        </div>
        <div class="content">
          <h2>位置：极地世界 - 北极动物村</h2>
          <p>探索北极的神秘生物，了解它们在严寒环境下的生活方式。“北极熊”卡卡热情好客，与斑海豹毗邻为居;聪明狡黠的北极狐整日瘦身，运动不停;北极狼桀骜不驯，威武霸气。</p>
        </div>
      </div>

      <div class="route-item">
        <div class="image-container">
          <img src="../../assets/ocean/5 (6).png" alt="功夫海象表演" />
        </div>
        <div class="content">
          <h2>位置：极地世界 - 功夫海象表演</h2>
          <p>观看精彩的功夫海象表演，体验人类与动物互动的奇妙时刻。功夫小子、迈克尔·杰克逊舞蹈模仿达人--功夫海象联手古灵精怪的海狮与幽默的主持人在拥有3D多媒体舞美效果的表演场，打造爆笑舞台剧!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 页面整体样式 */
.route-recommendation {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* 标题样式 */
.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 2em;
  color: #1e90ff;
  margin: 0;
}

.header p {
  font-size: 1em;
  color: #555;
}

/* 景点项目样式 */
.route-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.route-item {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
}

.image-container {
  flex: 1;
  min-width: 150px;
}

.image-container img {
  width: 100%;
  border-radius: 8px;
}

.content {
  flex: 2;
  padding-left: 20px;
}

.content h2 {
  font-size: 1.5em;
  color: #1e90ff;
  margin-top: 20px;
  margin-bottom: 10px;
}

.content p {
  color: #333;
  margin-top: 10px;
  line-height: 1.5;
}

/* 响应式样式 */
@media (max-width: 600px) {
  .route-item {
    flex-direction: column;
    align-items: center;
  }

  .content {
    padding-left: 0;
  }
}

.map-view {
  display: flex;
}

.map-sidebar {
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f2f5;
}

.map-display {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
}

.map-display img {
  max-width: 100%;
  max-height: 80vh;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>
