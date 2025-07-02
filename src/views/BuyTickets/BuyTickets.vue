<script setup>
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import { addReserveAPI } from '../../api/order';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const userinfo = computed(() => store.getters.getUserInfo);
const store = useStore();
const tickets = ref({
  adult: { label: '成人票', price: 100, quantity: 0 },
  child: { label: '儿童票', price: 50, quantity: 0 },
  senior: { label: '老人票', price: 60, quantity: 0 },
  student: { label: '学生票', price: 80, quantity: 0 },
});
const disabledDate = (time) => {
  return time.getTime() < Date.now()
}
const totalAmount = ref(0);
const time = ref('')
// 计算总金额
const calculateTotal = () => {
  totalAmount.value = Object.values(tickets.value).reduce((sum, ticket) => {
    return sum + ticket.price * ticket.quantity;
  }, 0);
};

// 提交订单
const submitOrder = async () => {
  if(userinfo.value===null){
    return ElMessage.warning('请先登录');
  }
  if (totalAmount.value === 0) {
    return ElMessage.warning('请至少选择一种票类');
  }
  if (time.value === '') {
    return ElMessage.warning('请选择预约时间');
  }
  const res = await addReserveAPI({
    adult_ticket: tickets.value.adult.quantity,
    child_ticket: tickets.value.child.quantity,
    senior_ticket: tickets.value.senior.quantity,
    student_ticket: tickets.value.student.quantity,
    time: time.value,
    price: totalAmount.value,
    userid: userinfo.value.id,
  });
  if (res.status === 200) {
    ElMessage.success('订单提交成功,请支付');
    router.push({
      path: '/Payment',
      query: {
        orderNum: res.data.order_number,
      }
    });
  }
};
</script>
<template>
  <div class="bg">
    <div class="ticket-booking">
      <h1>海洋馆购票</h1>

      <!-- 票类选择区域 -->
      <div class="ticket-form">
        <el-row :gutter="20" v-for="(ticket, key) in tickets" :key="key" class="ticket-row">
          <el-col :span="6">
            <div class="ticket-type">{{ ticket.label }}</div>
          </el-col>
          <el-col :span="6">
            <div class="ticket-price">{{ ticket.price }} 元</div>
          </el-col>
          <el-col :span="12">
            <el-input-number v-model.number="ticket.quantity" :min="0" :step="1" @change="calculateTotal" label="数量"
              controls-position="end" class="quantity-input" />
          </el-col>
        </el-row>
      </div>
      <div class="time">
        请选择时间：
        <el-date-picker v-model="time" type="date" placeholder="预约时间" format="YYYY/MM/DD" value-format="YYYY-MM-DD"
          :disabled-date="disabledDate" :size="size" />
      </div>
      <!-- 总金额显示 -->
      <div class="total-section">
        <p>总金额: <span class="total-amount">{{ totalAmount }} 元</span></p>
        <el-button type="primary" @click="submitOrder">提交订单</el-button>
      </div>
    </div>
  </div>

</template>


<style scoped>
.bg {
  background-image: url('../../assets/login.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: calc(100vh - 150px);
  padding-top: 120px;
}

.ticket-booking {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  font-size: 1.5em;
  color: #409EFF;
}

.ticket-form {
  margin-top: 20px;
}

.ticket-row {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.ticket-type {
  font-weight: bold;
}

.ticket-price {
  color: #333;
  font-size: 1.1em;
}

.quantity-input {
  width: 100%;
}

.total-section {
  margin-top: 20px;
  text-align: center;
}

.total-amount {
  font-size: 1.5em;
  color: #409EFF;
  font-weight: bold;
}

.el-button {
  margin-top: 15px;
}

.time {
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
  padding: 20px 0;
}
</style>
