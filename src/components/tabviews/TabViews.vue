<template>
  <div id="tags-view-container" class="tags-view-container">
    <el-scrollbar :vertical="true" class="scroll-container">
      <el-tag
        :closable="true"
        :disable-transitions="false"
        :hit="false"
        size="medium"
        v-for="t in tabViews"
        :key="t"
        :name="t"
        @click="handleClick"
        @close="handleRemove(t)"
        >{{ t }}</el-tag
      >
    </el-scrollbar>
  </div>
  <!-- <el-tabs
    type="border-card"
    @tab-click="handleClick"
    @tab-remove="handleRemove"
    v-model="active"
  >
    <el-tab-pane
      v-for="t in tabViews"
      :key="t"
      :name="t"
      :lazy="true"
      :closable="false"
    >
      <template #label>
        <span
          ><i class="el-icon-date"></i>
          <router-link :to="t" />
          {{ t }}</span
        >
      </template>
      <slot />
    </el-tab-pane>
  </el-tabs> -->
</template>

<script lang="ts">
import { mapGetters, useStore } from "vuex";
import { defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "TabViews",
  data() {},
  watch: {
    // $route() {
    //   this.$store.commit("pushTag", this.$route.path);
    // },
  },
  computed: {
    ...mapGetters(["tabViews"]),
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
      console.log(this.tabViews.length);
      if (this.tabViews.length === 0) {
        this.$router.push({ path: "/" });
      } else {
        let tabViewsLast = this.tabViews.length - 1;
        this.switchTab(this.tabViews[tabViewsLast]);
      }
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    // const active = ref("/");
    const active = ref(router.currentRoute.value.path);
    const switchTab = (route: string) => {
      router.push({ path: route });
      active.value = route;
    };

    watch(
      () => route.path,
      (topath) => {
        let tabs: Array<string> = store.getters.tabViews;
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

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-align: left;
}
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
