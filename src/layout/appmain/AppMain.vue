<template>
  <div id="appmain">
    <transition name="fade-transform" mode="out-in">
      <router-view key="/about" />
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    key() {
      return this.$route.path;
    },
  },
  setup() {},
});
</script>

<style lang="less" scoped>
#appmain {
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 62px);
}
</style>

