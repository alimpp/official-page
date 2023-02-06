<template>
  <div class="change-theme-container">
    <i
      class="bi bi-brightness-high"
      @click="changeTheme"
      v-if="watchTheme === 'dark'"
    ></i>
    <i class="bi bi-moon-stars" @click="changeTheme" v-if="watchTheme === 'light'"></i>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
function changeTheme() {
  theme.changeThemeStatus();
}
</script>

<style lang="scss" scoped>
.change-theme-container {
  i {
    padding: 0px 10px;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
