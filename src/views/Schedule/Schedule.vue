<template>
  <div class="schedule">
    <!-- 页面标题 -->
    <header class="header">
      <h1>海洋馆时间表</h1>
      <p>了解每日开放时间和表演安排，享受您的海洋之旅！</p>
    </header>

    <!-- 海洋世界时间表 -->
    <section class="schedule-section">
      <h2>海洋世界</h2>
      <p>开放时间：09:00 - 18:00</p>
      <table class="schedule-table">
        <thead>
          <tr>
            <th>表演项目</th>
            <th>时间</th>
            <th>地点</th>
          </tr>
          <tr>
            <td>海豚表演</td>
            <td>10:00, 14:00, 16:00</td>
            <td>海洋世界·海豚湾</td>
          </tr>
          <tr>
            <td>海狮互动</td>
            <td>11:30, 15:00</td>
            <td>海洋世界·海狮剧场</td>
          </tr>
        </thead>
      </table>
    </section>

    <!-- 极地世界时间表 -->
    <section class="schedule-section">
      <h2>极地世界</h2>
      <p>开放时间：09:00 - 18:00</p>
      <table class="schedule-table">
        <thead>

          <tr>
            <th>表演项目</th>
            <th>时间</th>
            <th>地点</th>
          </tr>
          <tr>
            <td>北极狐互动</td>
            <td>10:30, 13:30</td>
            <td>极地世界·北极动物村</td>
          </tr>
          <tr>
            <td>企鹅喂食</td>
            <td>11:00, 15:30</td>
            <td>极地世界·企鹅馆</td>
          </tr>
        </thead>
      </table>
    </section>

    <!-- 白鲸传奇时间表 -->
    <section class="schedule-section">
      <h2>白鲸传奇</h2>
      <p>开放时间：09:30 - 17:30</p>
      <table class="schedule-table">
        <thead>
        <tr>
          <th>表演项目</th>
          <th>时间</th>
          <th>地点</th>
        </tr>
        <tr>
          <td>白鲸表演</td>
          <td>11:00, 14:00, 16:30</td>
          <td>白鲸传奇·白鲸剧场</td>
        </tr>
        <tr>
          <td>白鲸互动</td>
          <td>12:30, 15:30</td>
          <td>白鲸传奇·互动区</td>
        </tr>
      </thead>
      </table>
    </section>
  </div>
</template>

<style scoped>
/* 页面整体样式 */
.schedule {
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

.header p {
  font-size: 1em;
  color: #555;
  font-weight: 800;
}

/* 各板块样式 */
.schedule-section {
  margin: 0 20% 30px;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
}

/* 表格样式 */
.schedule-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.schedule-table th,
.schedule-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.schedule-table th {
  background-color: #1e90ff;
  color: #fff;
}

.schedule-table td {
  background-color: #f9f9f9;
}

/* 响应式样式 */
@media (max-width: 600px) {
  .header h1 {
    font-size: 1.5em;
  }

  .schedule-section {
    padding: 15px;
  }

  .schedule-table th,
  .schedule-table td {
    padding: 8px;
  }
}
</style>
