const menu = [
  {
    id: "1",
    title: "导航1",
    name: "名称",
    icon: "图标",
    router: "hello",
    children: [
      {
        id: "1-1",
        title: "导航1-1",
        name: "名称",
        icon: "图标",
        router: "hello",
        children: [
          {
            id: "1-1-1",
            title: "导航1-1-1",
            name: "名称",
            icon: "图标",
            router: "hello",
            children: [],
          },
          {
            id: "1-1-2",
            title: "导航1-1-2",
            name: "名称",
            icon: "图标",
            router: "home",
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
    icon: "图标",
    router: "about",
    children: [],
  },
]

export default menu
