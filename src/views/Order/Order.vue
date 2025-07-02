<script setup>
import { ref, computed, onMounted } from 'vue';
import { editUserInfoAPI } from '../../api/user';
import { getReserveByUserAPI } from '../../api/order';
import SideNav from '../../components/SideNav.vue';
import OrderItem from '../../components/OrderItem.vue';
import { useStore } from 'vuex';
import { ElMessage } from "element-plus";
const store = useStore();
const userinfo = computed(() => store.getters.getUserInfo);

const list = ref([]);
const allList = ref([]);
const getOrderlist = async (page = 1) => {
  const res = await getReserveByUserAPI(userinfo.value.id);
  if (res.status === 200) {
    allList.value = res.data;
    list.value = allList.value.slice(0, 3);
    handlePage(page)
  }

}
onMounted(() => {
  getOrderlist();
})
const currentPage = ref(1);
const handlePage = (page) => {
  const start = (page - 1) * 3
  const end = page * 3
  list.value = allList.value.slice(start, end)
  currentPage.value = page
}
</script>

<template>
  <SideNav>
    <div class="profile">
      <h1>订单列表</h1>
      <div class="item" v-for="(item, index) in list" :key="index">
        <OrderItem :orderinfo="item" @refundSuccess="getOrderlist"/>
      </div>
      <div class="Page">
        <el-pagination @current-change="handlePage" :current-page.sync="currentPage" layout="prev, pager, next"
          :total="allList.length" :page-size="3">
        </el-pagination>
      </div>
    </div>
  </SideNav>

</template>

<style lang="scss">
.profile {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 30px;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }



}
</style>