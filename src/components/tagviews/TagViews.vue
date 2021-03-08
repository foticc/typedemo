<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <template #label>
        <span><i class="el-icon-date"></i> 主页</span>
      </template>
      我的行程{{ tagViews }}
    </el-tab-pane>
    <el-tab-pane label="消息中心">{{ routes }}</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TagViews",
  watch: {
    $route() {
      this.$store.commit("pushTag", 123);
    },
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
});
</script>

<style>
</style>