import request from "@/utils/request"
import { reactive, toRefs } from "vue"

interface RequestParams {
  pageindex: number
  pagesize: number
  params: any
}

interface PageTableResult extends RequestParams {
  total: number
  content: Array<any>
}

export function pageTable(uri: string) {
  const data: PageTableResult = reactive({
    pageindex: 1,
    pagesize: 12,
    total: 0,
    content: [],
    params: {},
  })
  const getTableData = async () => {
    const res = await request.post(uri, data.params, {
      params: {
        pageindex: data.pageindex,
        pagesize: data.pagesize,
      },
    })
    if (res.data) {
      data.total = res.data.totalElements
      data.content = res.data.content
    }
  }

  const handleSizeChange = (val: number) => {
    data.pagesize = val
    getTableData()
  }

  const handleCurrentChange = (val: number) => {
    data.pageindex = val
    getTableData()
  }

  return {
    ...toRefs(data),
    getTableData,
    handleSizeChange,
    handleCurrentChange,
  }
}

export default pageTable
