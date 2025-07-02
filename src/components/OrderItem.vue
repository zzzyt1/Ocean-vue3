<script setup>
import { computed, defineEmits  } from 'vue';
import { useRouter } from 'vue-router';
import { editReserveStatusAPI } from '../api/order';
import { ElMessage } from 'element-plus';
const props = defineProps({
  orderinfo: Object,
});
// 根据订单状态返回字符串
const Status = computed(() => {
  const { status } = props.orderinfo;
  switch (status) {
    case '0':
      return '未支付';
    case '1':
      return '已支付';
    case '2':
      return '已退款';
    default:
      return '未知';
  }
});

// 根据订单状态返回颜色
const statusColor = computed(() => {
  const { status } = props.orderinfo;
  switch (status) {
    case '0':
      return '#67C23A'; // 未支付 - 绿色
    case '1':
      return '#409EFF'; // 已支付 - 蓝色
    case '2':
      return '#F56C6C'; // 已退款 - 红色
    default:
      return '#909399';
  }
});

const router = useRouter();
const pay = () => {
  router.push({
    path: '/Payment',
    query: {
      orderNum: props.orderinfo.order_number,
    }
  });
}
// 定义一个事件，用于通知父组件
const emit = defineEmits(['refundSuccess']);
const refund = async (id) => {
  const res = await editReserveStatusAPI({
    id: id,
    status: 2
  });
  if (res.status === 200) {
    ElMessage.success('退款成功');
    emit('refundSuccess'); // 触发退款成功事件
  }
}
</script>

<template>
  <div class="order-item">
    <div class="order-item-left">
      <img src="../assets/headlogo.png" alt="">
    </div>
    <div class="order-item-right">
      <div class="right-item1">
        <h2><el-tag class="tag" :style="{ backgroundColor: statusColor, color: '#fff' }">
            {{ Status }}
          </el-tag>
          订单编号：{{ orderinfo.order_number }}</h2>
        <h2>预约时间：{{ orderinfo.time }}</h2>
      </div>
      <div class="right-item2">
        <h2>成人票：{{ orderinfo.adult_ticket }} 张</h2>
        <h2>儿童票：{{ orderinfo.child_ticket }} 张</h2>
        <h2>老人票：{{ orderinfo.senior_ticket }} 张</h2>
        <h2>学生票：{{ orderinfo.student_ticket }} 张</h2>
        <h2>总价：{{ orderinfo.price }} 元</h2>
      </div>
      <div class="right-item3">
        <el-button type="primary" @click="pay" v-if="orderinfo.status === '0'">去支付</el-button>
        <el-button type="primary" @click="refund(orderinfo.id)" v-if="orderinfo.status === '1'">退款</el-button>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.order-item {
  height: 190px;
  display: flex;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .order-item-left {
    flex-shrink: 0;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 8px;
    }
  }

  .order-item-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .right-item1,
    .right-item2,
    .right-item3 {
      margin-bottom: 10px;
    }

    .right-item1 {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: 16px;
        font-weight: normal;
        color: #333;
      }
    }

    .right-item2 {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;

      h2 {
        font-size: 14px;
        font-weight: normal;
        color: #666;
        flex-basis: calc(50% - 15px);
      }
    }

    .right-item3 {
      display: flex;
      gap: 10px;

      .el-button {
        padding: 8px 20px;
      }
    }
  }
}
</style>