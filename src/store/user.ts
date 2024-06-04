import { StoreOptions } from "vuex";
import ACCESSENUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  //储存用户信息
  state: () => ({
    loginUser: {
      userName: "load",
    },
  }),
  // actions
  actions: {
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("update", res.data);
      } else {
        commit("update", {
          ...state.loginUser,
          userRole: ACCESSENUM.NOT_LOGIN,
        });
      }
    },
  },

  // mutations
  // 更新用户状态
  mutations: {
    update(state, payload) {
      console.log("payload = ", payload);
      console.log("loginUser = ", state);
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
