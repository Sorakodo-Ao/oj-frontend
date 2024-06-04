//权限管理
import store from "@/store";
import router from "@/router";
import ACCESSENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("用户 = ", store.state.user.loginUser);
  const loginUser = store.state.user.loginUser;
  //如果之前沒登錄過，自動登錄
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = to.meta?.access ?? ACCESSENUM.NOT_LOGIN;
  //跳转的页面需要登录
  if (needAccess !== ACCESSENUM.NOT_LOGIN) {
    //没登录
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, needAccess as string)) {
      next("/noAuth");
    }
  }
  next();
});
