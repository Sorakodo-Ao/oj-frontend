import ACCESSENUM from "@/access/accessEnum";

/**
 *
 * @param loginUser 当前用户
 * @param needAccess 当前访问页面需要的权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESSENUM.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? ACCESSENUM.NOT_LOGIN;
  if (needAccess === ACCESSENUM.NOT_LOGIN) {
    return true;
  }
  //需要用户登录
  if (needAccess === ACCESSENUM.USER) {
    if (loginUserAccess === ACCESSENUM.NOT_LOGIN) {
      //用户未登录
      return false;
    }
  }
  //管理员
  if (needAccess === ACCESSENUM.ADMIN) {
    if (loginUserAccess !== ACCESSENUM.ADMIN) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};
export default checkAccess;
