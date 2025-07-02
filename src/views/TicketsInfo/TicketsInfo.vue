<template>
  <div class="ticket-info">
    <!-- 页面标题 -->
    <header class="header">
      <h1>海洋馆票务资讯</h1>
    </header>

    <!-- 门票类型信息 -->
    <section class="ticket-section">
      <h2>门票类型</h2>
      <table class="ticket-table">
        <thead>
          <tr>
            <th>票种</th>
            <th>说明</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>成人票</td>
            <td>适用于18岁以上游客</td>
            <td>¥100</td>
          </tr>
          <tr>
            <td>儿童票</td>
            <td>适用于1.2米以上儿童</td>
            <td>¥50</td>
          </tr>
          <tr>
            <td>老人票</td>
            <td>适用于65岁以上持证老人</td>
            <td>¥60</td>
          </tr>
          <tr>
            <td>学生票</td>
            <td>凭学生证购买</td>
            <td>¥80</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 优惠政策信息 -->
    <section class="ticket-section">
      <h2>优惠政策</h2>
      <ul class="discount-list">
        <li>儿童（1.2 米以下）免票。</li>
        <li>老人（65 岁以上）凭有效证件享 50% 优惠。</li>
        <li>学生凭学生证可享 80% 优惠。</li>
        <li>军人和医务人员凭证件免费。</li>
        <li>老人票和学生票需现场凭有效证件方可使用</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
/* 页面整体样式 */
.ticket-info {
  /* max-width: 800px; */
  height: calc(100vh - 150px);
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
.ticket-section {
  margin: 0 20% 30px;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
}

/* 表格样式 */
.ticket-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
.ticket-table th,
.ticket-table td {
  padding: 12px;
  border: 1px solid #ccc;
  text-align: left;
}
.ticket-table th {
  background-color: #1e90ff;
  color: #fff;
  font-weight: bold;
}

/* 优惠政策列表样式 */
.discount-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 10px;
}
.discount-list li {
  margin-bottom: 8px;
}

/* 响应式样式 */
@media (max-width: 600px) {
  .header h1 {
    font-size: 1.5em;
  }
  .ticket-section {
    padding: 15px;
  }
  .ticket-table th,
  .ticket-table td {
    padding: 8px;
  }
}
</style>
