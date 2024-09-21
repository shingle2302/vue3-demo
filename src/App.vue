<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="handleMenuClick"
      >
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>关于</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref } from "vue";

const collapsed = ref(false);
const selectedKeys = ref(["2"]);
</script>

<script>
export default {
  methods: {
    handleMenuClick: function (item) {
      const { key } = item;
      switch (key) {
        case "1":
          this.$router.push("/");
          break;
        case "2":
          this.$router.push("/about");
          break;

        default:
          console.log(key);
      }
    },
  },
};
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
