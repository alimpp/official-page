<template>
  <baseCard>
    <template #cardContent>
      <div class="d-flex flex-column">
        <img :src="img" alt="image" />
        <span class="size_small primary_color px-3 pt-3">{{ title }}</span>
        <p class="size_very_small px-3 pt-1">{{ content }}</p>
        <div class="d-flex mx-3 mb-2"> 
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-facebook px-2"></i>
            <i class="bi bi-twitter"></i>
        </div>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import baseCard from "@/components/base/baseCard";
const props = defineProps({
  img: {
    type: String,
    default: "",
    required: false,
  },
  title: {
    type: String,
    default: "",
    required: false,
  },
  content: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style>
img{
    width: 100%;
    height: 200px;
}
</style>
