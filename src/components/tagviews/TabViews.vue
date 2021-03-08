<template>
  <el-tabs
    type="border-card"
    @tab-click="handleClick"
    @tab-remove="handleRemove"
    v-model="active"
    closable="true"
  >
    <el-tab-pane v-for="t in tagViews" :key="t" :name="t" lazy="true">
      <template #label>
        <span
          ><i class="el-icon-date"></i>
          <router-link :to="t" />
          {{ t }}</span
        >
      </template>
      <slot />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { mapGetters, useStore } from "vuex";
import { defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "TabViews",
  watch: {
    // $route() {
    //   this.$store.commit("pushTag", this.$route.path);
    // },
  },
  computed: {
    ...mapGetters(["tagViews"]),
    routes() {
      console.log(this.$route);
      return this.$route;
    },
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    handleClick() {
      this.switchTab(this.active);
    },
    handleRemove(tab: any) {
      this.$store.commit("setting/removeTab", tab);
    },
  },
  setup() {
    const active = ref("/");
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const switchTab = (route: string) => {
      router.push({ path: route });
      active.value = route;
    };

    watch(
      () => route.path,
      (topath) => {
        let tabs: Array<string> = store.getters.tagViews;
        if (tabs.indexOf(topath) < 0) {
          store.commit("setting/pushTag", topath);
        }
        switchTab(topath);
      }
    );

    return {
      active,
      switchTab,
    };
  },
});
</script>

<style>
</style>