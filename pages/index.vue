<script setup lang="ts">
import Services from "../components/index/ServicesComponent.vue";
import About from "../components/index/AboutComponent.vue";
import Carousel from "../components/index/CarouselComponent.vue";
import WebLab from "../components/index/WebLabComponent.vue";
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div class="full-width">
      <Carousel />
    </div>
    <Services />
    <About />
    <WebLab />
  </q-page>
</template>
