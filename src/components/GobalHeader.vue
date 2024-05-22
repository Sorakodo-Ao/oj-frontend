<template>
  <div id="gobalHeader">
    <a-menu mode="horizontal">
      <a-menu-item mode="horizontal" @menu-item-click="doMenuClick">
        <div class="title-bar">
          <img class="logo" src="../assets/Online-Judge-logo.png" />
          <div class="title">Online-Judge</div>
        </div>
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { routes } from "@/router/routes";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  computed: {
    routes() {
      return routes;
    },
  },
});
const router = useRouter();

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
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
