<template>
  <div
    class="desktop-nav-container"
    :class="{
      nav_dark_mode_theme: watchTheme === 'dark',
      nav_light_mode_theme: watchTheme === 'light',
    }"
  >
    <div class="logo-container">
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="item-container">
      <themeSwitcher />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import themeSwitcher from "@/components/themeSwitcher";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.desktop-nav-container {
  width: 100%;
  height: 80px;
  display: flex;
  .logo-container {
    width: 120px;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    img {
      width: 110px;
      height: 70px;
    }
  }
  .item-container {
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
</style>
