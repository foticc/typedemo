<template>
  <div class="about">
    <h1>Table</h1>
    <h1>
      <el-input v-model="zhengma" placeholder="请输入内容"></el-input>

      <el-button type="primary" @click="table(pageindex, pagesize, zhengma)"
        >loading</el-button
      >
    </h1>

    <el-table :data="content" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="pinyin" label="拼音" width="180">
      </el-table-column>
      <el-table-column prop="zhengma" label="汉字"> </el-table-column>
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
  name: "Table",
  methods: {
    handleSizeChange(val: number) {
      // this.pageTable.init(pagesize);
      this.table(this.pageindex, val, this.zhengma);
    },
    handleCurrentChange(val: number) {
      // this.getall(val);
      this.table(val, this.pagesize, this.zhengma);
    },
  },
  setup() {
    const content = ref([]);
    const total = ref(0);
    const pageindex = ref(1);
    const pagesize = ref(12);
    const zhengma = ref(null);
    const table = async (
      pageindex: number = 1,
      pagesize: number = 12,
      word: any
    ) => {
      await request
        .post(
          "/hanzi/pagelist",
          {
            zhengma: word,
          },
          {
            params: {
              pageindex,
              pagesize,
            },
          }
        )
        .then((res) => {
          content.value = res.data.content;
          total.value = res.data.totalElements;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    onBeforeMount(() => {
      table(pageindex.value, pagesize.value, zhengma.value);
    });
    return {
      content,
      total,
      table,
      pageindex,
      pagesize,
      zhengma,
    };
  },
});
</script>

