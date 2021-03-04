import request from "@/utils/request"
import { computed, ref, Ref } from "vue"

// export default class PageTable {
//   constructor(uri: string, pagesize: number = 10, pageindex: number = 0) {
//     this.uri = uri
//     this.pagesize = pagesize
//     this.pageindex = pageindex
//     this.init()
//   }
//   uri: string
//   pagesize: number
//   pageindex: number
//   total?: number
//   tableData?: Array<any>

//   init() {
//     const params = {
//       pagesize: this.pagesize,
//       pageindex: this.pageindex,
//     }
//     request.get(this.uri, { params }).then((res) => {
//       console.log(res)
//     })
//   }

//   handleSizeChange(pagesize: number) {
//     console.log(pagesize)
//   }

//   handleCurrentChange(pageindex: number) {
//     console.log(pageindex)
//   }
// }

type PageInfo = {
  pageindex: number
  pagesize: number
}

interface PageTableResult {
  total: Ref<number>
  content: Ref<Array<any>>
  handleSizeChange: (val: number) => void
  handleCurrentChange: (val: number) => void
}

export function pageTable(uri: string): PageTableResult
export function pageTable(
  uri: string,
  pageinfo: PageInfo = { pageindex: 1, pagesize: 12 }
): PageTableResult {
  const data: PageTableResult = {
    total: ref(0),
    content: ref([]),
    handleSizeChange: (val) => {
      pageTable(uri)
    },
    handleCurrentChange: (val) => {
      console.log(val)
    },
  }
  request
    .get(uri, {
      params: {
        pageindex: pageinfo.pageindex,
        pagesize: pageinfo.pagesize,
      },
    })
    .then((res) => {
      data.total.value = res.data.totalElements
      data.content.value = res.data.content
      console.log(data)
      return data
    })
    .catch((err) => {})
    .finally(() => {})
  return data
}

export function handleSizeChange(val: number) {
  console.log(val)
}
export function handleCurrentChange(val: number) {
  console.log(val)
}

export default pageTable
