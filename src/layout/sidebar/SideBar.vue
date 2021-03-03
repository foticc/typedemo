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
      <menu-tree :dataList="menu" />
    </el-menu>
  </div>
</template>
<script lang="ts">
import menu from "@/utils/siderbar";
import { defineComponent } from "vue";
import MenuTree from "./MenuTree.vue";

export default defineComponent({
  components: {
    MenuTree,
  },
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

