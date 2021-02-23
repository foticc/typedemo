<template>
  <div class="layout">
    <el-container>
      <el-aside>
        <side-bar />
      </el-aside>
      <el-container>
        <el-header>
          <nav-bar />
        </el-header>
        <el-main>
          <app-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMain from "@/layout/appmain/AppMain.vue";
import NavBar from "@/layout/navbar/NavBar.vue";
import SideBar from "@/layout/sidebar/SideBar.vue";

export default defineComponent({
  components: {
    AppMain,
    NavBar,
    SideBar,
  },
});
</script>

<style lang="less" scoped>
// #layout {
//   width: 100%;
//   height: 100%;
//   position: relative;
//   margin-top: 5px;
// }
.layout {
  position: relative;
}
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
}
</style>