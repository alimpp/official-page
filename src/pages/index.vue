<template>
  <div class="home-page d-flex flex-column application_animation">
      <baseCarousel autoplayTime="3000" :slides="dataSource" />
      <div class="container">
        <baseDivider class="mt-3" text="All Services" width="110px" />
        <div class="row">
          <div class="col-lg-3 mt-4 mb-5" v-for="data in dataSource" :key="data.id">
            <pageCard :img="data.image" :title="data.title" :content="data.content" />
          </div>
        </div>
      </div>
      <exprienceBanner />
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-6 mt-2">
            <baseDivider text="Services" width="100px" />
            <span class="size_very_small"
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ullam
              ipsum! Id officia alias odit ratione autem laboriosam, quia reprehenderit
              corporis vel in earum quos veritatis veniam commodi necessitatibus eos Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro sit veniam
              cum repellendus veritatis fuga harum eaque! Similique dolorum veniam,
              molestiae mollitia alias enim aliquam doloremque! Laborum, deleniti
              fugiat?</span
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
              ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro sit veniam
              cum repellendus veritatis fuga harum eaque! Similique dolorum veniam,
              molestiae mollitia alias enim aliquam doloremque! Laborum, deleniti
              fugiat?</span
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
              ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro sit veniam
              cum repellendus veritatis fuga harum eaque! Similique dolorum veniam,
              molestiae mollitia alias enim aliquam doloremque! Laborum, deleniti
              fugiat?</span
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
              ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro sit veniam
              cum repellendus veritatis fuga harum eaque! Similique dolorum veniam,
              molestiae mollitia alias enim aliquam doloremque! Laborum, deleniti
              fugiat?</span
            >
            <div class="d-flex mt-1">
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-facebook px-2"></i>
              <i class="bi bi-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <supportBanner class="mt-5 mb-5" ref="test" />
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6 mt-3">
            <baseDivider text="Send FeedBack" width="150px" />
            <span class="size_very_small"
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ullam
              ipsum! Id officia alias odit ratione autem laboriosam, quia reprehenderit
              corporis vel in earum quos veritatis veniam commodi necessitatibus eos Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro sit veniam
              cum repellendus veritatis fuga harum eaque! Similique dolorum veniam,
              molestiae mollitia alias enim aliquam doloremque! Laborum, deleniti
              fugiat?</span
            >
          </div>
          <div class="col-lg-6 mt-3">
            <feedBack />
          </div>
        </div>
      </div>
      <applicationFooter />
    </div>
</template>

<script setup>
import baseCarousel from "@/components/base/baseCarousel";
import pageCard from "@/components/cards/pageCard";
import baseDivider from "@/components/base/baseDivider";
import exprienceBanner from "@/components/exprienceBanner";
import supportBanner from "@/components/supportBanner";
import navigation from "@/layout/navigation";
import applicationFooter from "@/layout/applicationFooter";
import feedBack from '@/components/feedBack'
import { onBeforeMount, computed, ref } from "vue";
import { carouselApi } from "@/api/carouselApi";
import { carouselDataStore } from "@/stores/carouselDataStore";

const carouselStore = carouselDataStore();
const animation = ref(false);

onBeforeMount(() => {
  carouselApi();
  animation.value = true;
  setTimeout(() => {
    animation.value = false;
  }, 3000);
});

const dataSource = computed(() => {
  return carouselStore.carousel;
});
</script>

<style></style>
