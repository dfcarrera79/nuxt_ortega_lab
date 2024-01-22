<script setup lang="ts">
import Services from "../components/index/services.vue";
import About from "../components/index/about.vue";
import Carousel from "../components/index/carousel.vue";
import WebLab from "../components/index/weblab.vue";
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
