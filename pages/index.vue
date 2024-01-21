<script setup lang="ts">
import About from "../components/index/AboutComponent.vue";
import Carousel from "../components/index/CarouselComponent.vue";
import WebLab from "../components/index/WebLabComponent.vue";
</script>
<template>
  <q-page class="row items-center justify-evenly">
    <div class="full-width">
      <Carousel />
    </div>

    <About />
    <WebLab />
  </q-page>
</template>
