const menu = [
  {
    id: "1",
    title: "导航1",
    name: "名称",
    icon: "el-icon-s-comment",
    router: "hello",
    children: [
      {
        id: "1-1",
        title: "导航1-1",
        name: "名称",
        icon: "el-icon-s-comment",
        router: "hello",
        children: [
          {
            id: "1-1-1",
            title: "导航1-1-1",
            name: "名称",
            icon: "el-icon-s-comment",
            router: "hello",
            children: [],
          },
          {
            id: "1-1-2",
            title: "导航1-1-2",
            name: "名称",
            icon: "el-icon-s-comment",
            router: "home",
            children: [],
          },
          {
            id: "1-1-3",
            title: "导航1-1-3",
            name: "名称",
            icon: "el-icon-s-comment",
            router: "table",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "导航2",
    name: "名称",
    icon: "el-icon-s-comment",
    router: "about",
    children: [],
  },
]

export default menu
