/* eslint-disable no-redeclare */
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <code>{{ info }}</code>
    <h1><el-button type="primary" @click="login">login</el-button></h1>
    <h1>
      <el-button type="primary" @click="pageTable.init">loading</el-button>
    </h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="permissionsName" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="resource" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="description" label="地址"> </el-table-column>
    </el-table>

    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PageTable from "@/components/PageTable";
import { useStore } from "vuex";
import request from "@/utils/request";
export default defineComponent({
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val: number) {
      // this.pageTable.init(pagesize);
      console.log(val);
    },
    handleCurrentChange(val: number) {
      // this.getall(val);
      console.log(val);
    },
  },
  setup() {
    const pageTable = new PageTable("/permission/pagelist");
    const store = useStore();
    let info = ref({});
    let tableData: any = ref([]);
    let total = ref(0);
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
      console.log(pageTable.init());
      console.log(store.state.user.token);
    };
    return {
      pageTable,
      login,
      info,
      gettoken,
      tableData,
      total,
    };
  },
  created() {},
});
</script>
