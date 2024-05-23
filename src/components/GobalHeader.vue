<template>
  <a-row id="gobalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectesKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/Online-Judge-logo.png" />
            <div class="title">OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.username ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
/*console.log(store.state.user.loginUser);*/
setTimeout(() => {
  store.dispatch("user/getLoginUser");
}, 3000);
//默认主页
const selectesKeys = ref(["/"]);

//点击路由，跳转后，更新选中的菜单项高亮
router.afterEach((to, from) => {
  selectesKeys.value = [to.path];
});
//点击子菜单跳转到对应路由
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
#gobalHeader {
  box-shadow: #eee 5px 5px 5px;
}

.title-bar {
  display: flex;
  align-items: center;
}

.title-bar .logo {
  height: 48px;
  height: 48px;
}

.title-bar .title {
  color: aqua;
  margin-left: 8px;
  margin-top: 10px;
}
</style>
