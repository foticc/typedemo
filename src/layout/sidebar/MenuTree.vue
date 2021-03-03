<template>
  <div>
    <template v-for="m in menu" :key="m.id">
      <el-submenu :index="m.id" v-if="m.children.length > 0">
        <template #title v-if="m.icon != null">
          <i :class="m.icon"></i>
          <span>{{ m.id }}{{ m.title }}</span>
        </template>
        <menu-tree :dataList="m.children" />
      </el-submenu>
      <el-menu-item v-else-if="m.children.length == 0" :index="m.router">
        <template #title>
          <i :class="m.icon"></i>
          <span>{{ m.id }}{{ m.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MenuTree",
  props: {
    dataList: Array,
  },
  setup(props) {
    const menu = ref(props.dataList);
    return {
      menu,
    };
  },
});
</script>