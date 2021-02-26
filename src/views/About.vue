<template>
  <div class="about">
    <h1>This is an about page</h1>
    <code v-for="(v, k) in info" :key="k">{{ k }}:{{ v }}</code>
    <h1><el-button type="primary" @click="login">login</el-button></h1>
    <h1><el-button type="primary" @click="gettoken">vuex</el-button></h1>

    <h1><el-button type="primary" @click="getall">loading</el-button></h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import request from "@/utils/request";
import qs from "qs";
export default defineComponent({
  data() {
    return {
      tableData: [],
    };
  },
  setup() {
    const store = useStore();
    let info = ref({});
    const getall = async () => {
      await request.get("/api/index/clients");
    };
    const login = async () => {
      request
        .post(
          "/auth/oauth/token",
          qs.stringify({
            grant_type: "password",
            client_id: "client",
            scope: "all",
            username: "admin",
            password: "123456",
            client_secret: "123",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          info.value = res.data;
          store.state.user.token = res.data.access_token;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const gettoken = () => {
      console.log(store.state.user.token);
    };
    return {
      getall,
      login,
      info,
      gettoken,
    };
  },
  created() {
    this.getall;
  },
});
</script>
