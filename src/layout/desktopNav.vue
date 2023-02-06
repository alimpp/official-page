<template>
  <div class="desktop-nav-container light_background">
    <div class="logo-container">
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="item-container">
      <themeSwitcher />
    </div>
  </div>
</template>

<script setup>
import themeSwitcher from "@/components/themeSwitcher";
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
