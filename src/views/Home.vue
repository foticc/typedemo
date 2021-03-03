<template>
  <div class="about">
    <h1>Home</h1>
    <h1>
      <el-input v-model="word" placeholder="请输入内容"></el-input>

      <el-button type="primary" @click="table">loading</el-button>
    </h1>

    <el-table :data="content" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="pinyin" label="拼音" width="180">
      </el-table-column>
      <el-table-column prop="word" label="汉字"> </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageindex"
        :page-sizes="[12, 20, 40, 60]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import request from "@/utils/request";

export default defineComponent({
  name: "Home",
  methods: {
    handleSizeChange(val: number) {
      // this.pageTable.init(pagesize);
      this.table(this.pageindex, val);
    },
    handleCurrentChange(val: number) {
      // this.getall(val);
      this.table(val, this.pagesize);
    },
  },
  setup() {
    const content = ref([]);
    const total = ref(0);
    const pageindex = ref(1);
    const pagesize = ref(12);
    const word = ref("yi");
    const table = async (pageindex: number = 1, pagesize: number = 12) => {
      await request
        .get("/hanzi/pagelist", {
          params: {
            pageindex,
            pagesize,
            "hanzi.word": word.value,
          },
        })
        .then((res) => {
          content.value = res.data.content;
          total.value = res.data.totalElements;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    onBeforeMount(table);
    return {
      content,
      total,
      table,
      pageindex,
      pagesize,
      word,
    };
  },
});
</script>

