import request from "@/utils/request"
import { AxiosRequestConfig, AxiosResponse } from "axios"
import { computed, reactive, ref, Ref, UnwrapRef } from "vue"

interface RequestParams {
  pageindex: number
  pagesize: number
  params: any
}

interface PageTableResult {
  total: number
  content: Array<any>
}

export function pageTable(uri: string) {
  const data = reactive({
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
    data,
    getTableData,
    handleSizeChange,
    handleCurrentChange,
  }
}

export function handleSizeChange(val: number) {
  console.log(val)
}
export function handleCurrentChange(val: number) {
  console.log(val)
}

export default pageTable
