<script setup>
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="layout">
    <NavigationBar />
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.layout{
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  min-width: 1400px;
}
</style>
