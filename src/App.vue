<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style></style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.meta?.access === "admin") {
    if (store.state.user.loginUser.role != "admin") {
      next("/noAuth");
    } else {
      next();
    }
  }
  next();
});
</script>
