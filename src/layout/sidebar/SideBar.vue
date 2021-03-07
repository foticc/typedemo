<template>
  <div class="sidebar">
    {{ isCollapse }}
    <el-scrollbar>
      <el-menu
        :collapse-transition="true"
        :uniqueOpened="false"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
        :collapse="isCollapse"
      >
        <menu-tree :dataList="menu" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import MenuTree from "./MenuTree.vue";
import menu from "@/utils/siderbar";

export default defineComponent({
  components: {
    MenuTree,
  },
  data() {
    return {
      menu,
    };
  },
  computed: {
    ...mapGetters(["isCollapse"]),
  },
  setup() {},
});
</script>

<style  scoped>
/* 
.sidebar {
     width: 100%;
     height: 100%;
   text-align: left;
     background-color: #545c64;
}
 .el-menu {
   border: none;
 }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
*/
</style>

