const getters = {
  token: (state: any) => state.user.token,
  isCollapse: (state: any) => state.setting.isCollapse,
  tagViews: (state: any) => state.setting.tagViews,
}
export default getters
