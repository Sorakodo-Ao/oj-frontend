import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  //储存用户信息
  state: () => ({
    loginUser: {
      username: "load",
      role: "notLogin",
    },
  }),
  // actions
  actions: {
    getLoginUser({ commit, state }, payload) {
      //TODO 获取远程登录信息
      commit("update");
    },
  },

  // mutations
  // 更新用户状态
  mutations: {
    update(state, payload) {
      state.loginUser.username = "caiwei";
      state.loginUser.role = "admin";
    },
  },
} as StoreOptions<any>;
