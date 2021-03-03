import request from "@/utils/request"

export default class PageTable {
  constructor(uri: string, pagesize: number = 10, pageindex: number = 0) {
    this.uri = uri
    this.pagesize = pagesize
    this.pageindex = pageindex
    this.init()
  }
  uri: string
  pagesize: number
  pageindex: number
  total?: number
  tableData?: Array<any>

  init() {
    const params = {
      pagesize: this.pagesize,
      pageindex: this.pageindex,
    }
    request.get(this.uri, { params }).then((res) => {
      console.log(res)
    })
  }

  handleSizeChange(pagesize: number) {
    console.log(pagesize)
  }

  handleCurrentChange(pageindex: number) {
    console.log(pageindex)
  }
}
