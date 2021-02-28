const menu = [
  {
    id: "1",
    title: "标题",
    name: "名称",
    icon: "图标",
    router: "hello",
    children: [
      {
        title: "子标题",
        name: "名称",
        icon: "图标",
        router: "hello",
        children: [
          {
            title: "子标题",
            name: "名称",
            icon: "图标",
            router: "hello",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "标题",
    name: "名称",
    icon: "图标",
    router: "about",
    children: [],
  },
]

export default menu
