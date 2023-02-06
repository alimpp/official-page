<template>
  <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="autoplayTime">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <div class="items" :style="{ 'background-image': 'url(' + slide.image + ')' }">
          <div class="glass">
            <span class="size_very_medium">{{ slide.title }}</span>
            <p class="size_very_small">{{ slide.content }}</p>
          </div>
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
  min-height: 450px;
  width: 100%;
  color: #fff;
  .items {
    width: 100%;
    min-height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .glass {
      width: 100%;
      min-height: 450px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 60px;
      background: rgba(16, 16, 16, 0.5);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
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
