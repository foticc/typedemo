<template>
  <div class="sidebar">
    <el-menu
      :uniqueOpened="false"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <template v-for="m in menu" :key="m.id">
        <el-submenu :index="m.id" v-if="m.children.length > 0">
          <template #title v-if="m.icon != null">
            <i :class="m.icon"></i>
            <span>{{ m.id }}{{ m.title }}</span>
          </template>
          <el-menu-item
            :index="mc.router"
            v-for="mc in m.children"
            :key="mc.id"
          >
            {{ mc.title }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="m.router">
          <template #title>
            <i :class="m.icon"></i>
            <span>{{ m.id }}{{ m.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import menu from "@/utils/siderbar";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      menu,
    };
  },
});
</script>

<style lang="less" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  text-align: left;
  background-color: #545c64;
}
.el-menu {
  border-right: none;
}
</style>

