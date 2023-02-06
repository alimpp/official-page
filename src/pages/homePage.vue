<template>
  <div class="home-page">
    <h1>Hello Home Page</h1>
    <p>{{ dataSource }}</p>
  </div>
</template>

<script setup>
import { onBeforeMount , computed } from "vue";
import { carouselApi } from "@/api/carouselApi";
import {carouselDataStore} from '@/stores/carouselDataStore'

const carouselStore = carouselDataStore()

onBeforeMount(() => {
  carouselApi()
})

const dataSource = computed(() => {
  return carouselStore.carousel
})
</script>

<style></style>
