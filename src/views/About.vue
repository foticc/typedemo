<template>
  <div>
    <h1>About</h1>
    <code>{{ info }}</code>
    <h1><el-button type="primary" @click="login">login</el-button></h1>
    <h1>
      <el-input v-model="params.word" placeholder=""></el-input>
      <el-button type="primary" @click="getTableData()">loading</el-button>
    </h1>
    <el-table :data="content" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="word" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="pinyin" label="地址"> </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageindex"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { pageTable } from "@/components/PageTable";
import { useStore } from "vuex";
import request from "@/utils/request";
export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  setup() {
    const {
      total,
      content,
      pageindex,
      pagesize,
      params,
      getTableData,
      handleSizeChange,
      handleCurrentChange,
    } = pageTable("/hanzi/pagelist");
    const store = useStore();
    let info = ref({});
    // let tableData: any = ref([]);

    // const getall = ({ pagesize: number, pageindex: number }) => {
    //   request
    //     .get("/permission/pagelist", { params: { pagesize, pageindex } })
    //     .then((res) => {
    //       tableData.value = res.data.content;
    //       total.value = res.data.totalElements;
    //     });
    // };
    const login = async () => {
      request
        .post("/index/login", {
          username: "admin",
          password: "123456",
        })
        .then((res) => {
          info.value = res.data;
          console.log(res);
          store.state.user.token = res.headers.token;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const gettoken = () => {
      console.log(store.state.user.token);
    };
    return {
      info,
      gettoken,
      pageTable,
      login,
      total,
      content,
      pageindex,
      pagesize,
      params,
      getTableData,
      handleSizeChange,
      handleCurrentChange,
    };
  },
  created() {},
});
</script>
