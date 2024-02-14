<script setup lang="ts">
import About from "../components/index/about.vue";
import WebLab from "../components/index/weblab.vue";
import Services from "../components/index/services.vue";
import Carousel from "../components/index/carousel.vue";
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
