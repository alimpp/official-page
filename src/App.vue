<template>
  <div
    class="app"
    :class="{
      application_dark_mode_theme: watchTheme === 'dark',
      application_light_mode_theme: watchTheme === 'light',
    }"
  >
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
}
</style>
