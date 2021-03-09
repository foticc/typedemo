<template>
  <!-- <Suspense> -->
  <!-- <template #default> -->
  <div id="appmain">
    <!-- <transition name="fade-transform" mode="out-in">
      <router-view key="/about" />
    </transition> -->
    <tab-views>
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </tab-views>
  </div>
  <!-- </template> -->
  <!-- <template #default>
      <h1>加载失败...12121221.</h1>
    </template> -->
  <!-- </Suspense> -->
</template>
<script lang="ts">
import TabViews from "@/components/tabviews/TabViews.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TabViews },
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

