import request from "@/utils/request"

interface tableQuery {
  pageindex: number
  pagesize: number
  queryparams: any
}

export function pagelist(params: tableQuery) {
  console.log("table.ts")
  return request.post("/hanzi/pagelist", params.queryparams, {
    params,
  })
}
