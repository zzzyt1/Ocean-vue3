<script setup>
import { ref, onMounted } from "vue";
import { getReserveByOrderAPI, editReserveStatusAPI } from "../../api/order";
import { ElMessage } from "element-plus";
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const orderNum = ref(route.query.orderNum);
const reserveInfo = ref({});
const reserveInit = async () => {
  const res = await getReserveByOrderAPI(orderNum.value);
  reserveInfo.value = res.data;
};
onMounted(async () => {
  await reserveInit();
});

//支付成功
const goReserveList = async () => {
  if (reserveInfo.value[0].status === 1) {
    // router.push('/reserveList');
    return ElMessage({
      message: '该订单已支付',
      type: "error",
    });
  }
  const pay = {
    id: reserveInfo.value[0].id,
    status: 1
  }
  const res = await editReserveStatusAPI(pay);
  if (res.status === 200) {
    ElMessage({
      message: '支付成功',
      type: "success",
    });
  }
  router.push('/order');
};
</script>
<template>
  <div class="pay">
    <div class="main">
      <h2>订单号：{{ orderNum }}</h2>
      <div class="price">
        <span>¥ {{reserveInfo[0]?.price}}</span>
      </div>
      <img src="../../assets/qr.jpg" />
      <div class="title">支付完成后，将跳转订单列表页面</div>
      <div class="footer">
        <p>打开微信/支付宝扫一扫</p>
        <el-button class="btn" @click="goReserveList">支付成功</el-button>
      </div>
    </div>
  </div>
</template>




<style scoped>
.pay {
  width: 100%;
  min-height: 821px;
  background-color: #f8f9fe;
  padding-top: 50px;
}

.main {
  width: 500px;
  height: 500px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  text-align: center;
}

.main h2 {
  font-size: 20px;
}

.main .price {
  font-size: 40px;
  margin: 20px 0;
}

.main img {
  width: 200px;
  height: 200px;
}

.title {
  font-size: 14px;
  color: #999;
  margin-top: 10px;
  margin-bottom: 60px;
}

.footer {
  display: flex;
  align-items: center;
}

.footer p {
  font-size: 14px;
  color: #999;
  margin-right: 20px;
}

.btn {
  width: 200px;
  height: 40px;
  background-color: green;
  color: white;
}

.btn:hover,
.btn:focus {
  background-color: green;
  color: white;
}
</style>