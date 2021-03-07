<template>
  <div class="navbar">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="b in breadcrumb" :key="b.path" :to="b">
          {{ b.name }}
        </el-breadcrumb-item>
        <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="avatar-container">
      <el-dropdown trigger="click">
        <div class="avatar-wrapper">
          <el-avatar :src="avatar"></el-avatar>
          <i class="el-icon-caret-bottom" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> Home </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="logout">
              <span style="display: block">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      avatar:
        "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1195853901,2803862457&fm=26&gp=0.jpg",
    };
  },
  methods: {
    logout() {
      this.$store.commit("reverse");
    },
  },
  computed: {
    breadcrumb() {
      return this.$route.matched;
    },
  },
});
</script>

<style lang="less" scoped>
.navbar {
  height: 99%;
  padding: auto;
  /* background-color: gray; */
  display: flex;
  justify-content: space-between;
}
.avatar-container {
  margin-top: 10px;
  margin-right: 10px;
}
.breadcrumb {
  margin-top: 40px;
  margin-left: 5px;
}
</style>

