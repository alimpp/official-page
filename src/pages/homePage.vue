<template>
  <div class="home-page d-flex flex-column">
    <baseCarousel autoplayTime="3000" :slides="dataSource" />
    <div class="container">
      <baseDivider class="mt-3" text="All Services" width="110px" />
      <div class="row">
        <div class="col-lg-3 mt-4 mb-5" v-for="data in dataSource" :key="data.id">
          <homePageCard :img="data.image" :title="data.title" :content="data.content" />
        </div>
      </div>
    </div>
    <homePageDetail />
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6 mt-2">
          <baseDivider text="Services" width="100px" />
          <span class="size_very_small"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ullam
            ipsum! Id officia alias odit ratione autem laboriosam, quia reprehenderit
            corporis vel in earum quos veritatis veniam commodi necessitatibus eos Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro sit veniam cum
            repellendus veritatis fuga harum eaque! Similique dolorum veniam, molestiae
            mollitia alias enim aliquam doloremque! Laborum, deleniti fugiat?</span
          >
          <div class="d-flex mt-1">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-facebook px-2"></i>
            <i class="bi bi-twitter"></i>
          </div>
        </div>
        <div class="col-lg-6 mt-2">
          <baseDivider text="Support" width="100px" />
          <span class="size_very_small"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ullam
            ipsum! Id officia alias odit ratione autem laboriosam, quia reprehenderit
            corporis vel in earum quos veritatis veniam commodi necessitatibus eos Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro sit veniam cum
            repellendus veritatis fuga harum eaque! Similique dolorum veniam, molestiae
            mollitia alias enim aliquam doloremque! Laborum, deleniti fugiat?</span
          >
          <div class="d-flex mt-1">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-facebook px-2"></i>
            <i class="bi bi-twitter"></i>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6 mt-2">
          <baseDivider text="Expriences" width="100px" />
          <span class="size_very_small"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ullam
            ipsum! Id officia alias odit ratione autem laboriosam, quia reprehenderit
            corporis vel in earum quos veritatis veniam commodi necessitatibus eos Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro sit veniam cum
            repellendus veritatis fuga harum eaque! Similique dolorum veniam, molestiae
            mollitia alias enim aliquam doloremque! Laborum, deleniti fugiat?</span
          >
          <div class="d-flex mt-1">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-facebook px-2"></i>
            <i class="bi bi-twitter"></i>
          </div>
        </div>
        <div class="col-lg-6 mt-2">
          <baseDivider text="Transfer" width="100px" />
          <span class="size_very_small"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ullam
            ipsum! Id officia alias odit ratione autem laboriosam, quia reprehenderit
            corporis vel in earum quos veritatis veniam commodi necessitatibus eos Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro sit veniam cum
            repellendus veritatis fuga harum eaque! Similique dolorum veniam, molestiae
            mollitia alias enim aliquam doloremque! Laborum, deleniti fugiat?</span
          >
          <div class="d-flex mt-1">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-facebook px-2"></i>
            <i class="bi bi-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import baseCarousel from "@/components/base/baseCarousel";
import homePageCard from "@/components/cards/homePageCard";
import baseDivider from "@/components/base/baseDivider";
import homePageDetail from "@/components/homePageDetail";
import { onBeforeMount, computed } from "vue";
import { carouselApi } from "@/api/carouselApi";
import { carouselDataStore } from "@/stores/carouselDataStore";

const carouselStore = carouselDataStore();

onBeforeMount(() => {
  carouselApi();
});

const dataSource = computed(() => {
  return carouselStore.carousel;
});
</script>

<style></style>
