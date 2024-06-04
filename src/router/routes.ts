import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import ACCESSENUM from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import LoginView from "@/views/user/LoginView.vue";
import RegisterView from "@/views/user/RegisterView.vue";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import ManageQuestionView from "@/views/question/ManageQuestionView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "user",
    component: UserLayout,
    meta: {
      isHide: true, //隐藏
    },
    children: [
      {
        path: "/user/login",
        name: "login",
        component: LoginView,
      },
      {
        path: "/user/register",
        name: "register",
        component: RegisterView,
      },
    ],
  },
  {
    path: "/add/question",
    name: "创建题目",
    component: AddQuestionView,
    /*    meta: {
          access: ACCESSENUM.ADMIN,
        },*/
  },
  {
    path: "/update/question",
    name: "更新题目",
    component: AddQuestionView,
    /*    meta: {
          access: ACCESSENUM.ADMIN,
        },*/
  },
  {
    path: "/manage/question",
    name: "管理题目",
    component: ManageQuestionView,
    /*    meta: {
          access: ACCESSENUM.ADMIN,
        },*/
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/hide",
    name: "hide",
    component: HomeView,
    meta: {
      isHide: true, //隐藏
    },
  },
  {
    path: "/noAuth",
    name: "noAuth",
    component: NoAuthView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    meta: {
      access: ACCESSENUM.ADMIN,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];
