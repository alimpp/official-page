<template>
  <div class="w-100 d-flex flex-column">
    <desktopNav />
    <router-view></router-view>
    <applicationFooter />
  </div>
</template>

<script setup>
import desktopNav from "@/layout/desktopNav";
import applicationFooter from "@/layout/applicationFooter";
</script>

<style></style>
