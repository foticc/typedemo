const getters = {
  token: (state: any) => state.user.token,
  isCollapse: (state: any) => state.setting.isCollapse,
  tabViews: (state: any) => state.setting.tabViews,
}
export default getters
