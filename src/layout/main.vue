<template>
  <div class="w-100 d-flex flex-column">
    <navigation />
    <router-view></router-view>
    <applicationFooter />
  </div>
</template>

<script setup>
import navigation from "@/layout/navigation";
import applicationFooter from "@/layout/applicationFooter";
</script>

<style></style>
