<template>
  <div class="admission-guide">
    <!-- 页面标题 -->
    <header class="header">
      <h1>海洋馆入园须知</h1>
    </header>

    <!-- 开放时间信息 -->
    <section class="guide-section">
      <h2>开放时间</h2>
      <p>每日开放时间：09:00 - 18:00</p>
      <p>周末及节假日：08:30 - 18:30</p>
    </section>

    <!-- 入园规则 -->
    <section class="guide-section">
      <h2>入园规则</h2>
      <ul class="rules-list">
        <li>请自觉排队，接受体温检测及安检后入园。</li>
        <li>入园时请出示有效身份证件及购票凭证。</li>
        <li>严禁携带宠物、易燃易爆物品及危险物品入园。</li>
        <li>禁止在园区内使用无人机等设备进行拍摄。</li>
      </ul>
    </section>

    <!-- 安全提醒 -->
    <section class="guide-section">
      <h2>安全提醒</h2>
      <ul class="safety-list">
        <li>请勿攀爬围栏和触摸水族箱，以免发生意外。</li>
        <li>请照顾好随行儿童，避免在园区内奔跑或追逐。</li>
        <li>禁止向水池中投掷任何物品，以免影响水生动物。</li>
      </ul>
    </section>

    <!-- 服务设施 -->
    <section class="guide-section">
      <h2>服务设施</h2>
      <ul class="facilities-list">
        <li>园区内提供免费 Wi-Fi，便于游客使用。</li>
        <li>设有残疾人专用通道、婴儿车租赁及母婴室。</li>
        <li>提供急救服务，如有需要请联系就近工作人员。</li>
        <li>园区内设有多处餐饮服务点，提供食品和饮品。</li>
      </ul>
    </section>

    <!-- 特别提示 -->
    <section class="guide-section">
      <h2>特别提示</h2>
      <p>为确保参观体验，园区内可能会根据实际情况调整开放区域及参观时间，敬请理解。</p>
      <p>如遇极端天气或特殊情况，园区将暂时闭园或调整开放时间，请关注官方公告。</p>
    </section>
  </div>
</template>

<style scoped>
/* 页面整体样式 */
.admission-guide {
  /* max-width: 800px; */
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-image: url('../../assets/banner2.jpeg');
}

/* 标题样式 */
.header {
  text-align: center;
  margin-bottom: 20px;
  
}
.header h1 {
  font-size: 2em;
  color: #000;
  margin: 0;
  font-weight: 800;
}

/* 各板块样式 */
.guide-section {
  margin-bottom: 30px;
  margin: 20px 20%;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
}

/* 列表样式 */
.rules-list,
.safety-list,
.facilities-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 10px;
}
.rules-list li,
.safety-list li,
.facilities-list li {
  margin-bottom: 8px;
}

/* 特别提示样式 */
.guide-section p {
  margin-bottom: 10px;
}

/* 响应式样式 */
@media (max-width: 600px) {
  .header h1 {
    font-size: 1.5em;
  }
  .guide-section {
    padding: 15px;
  }
}
</style>
