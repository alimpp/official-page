<template>
  <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="autoplayTime">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <div class="items" :style="{ 'background-image': 'url(' + slide.image + ')' }">
          <span class="text">{{ slide.title }}</span>
          <p class="text">{{ slide.content }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
const props = defineProps({
  autoplayTime: {
    type: String,
    default: "",
    required: false,
  },
  slides: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>

<style lang="scss">
.carousel__item {
  min-height: 500px;
  width: 100%;
  color: #fff;
  .items {
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border-radius: 50%;
  color: #fff;
  border: 1px solid white;
}
</style>
