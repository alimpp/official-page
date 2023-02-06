<template>
  <div class="base-divider-container d-flex flex-column">
    <span class="size_samll">{{ text }}</span>
    <div class="line warning_background" :style="{ width: width }"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "",
    required: true,
  },
  width: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.base-divider-container {
  span {
    font-weight: 600;
    padding: 5px 4px;
  }
  .line {
    height: 1px;
  }
}
</style>
