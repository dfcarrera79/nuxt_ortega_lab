<script setup lang="ts">
import Mision from "../components/nosotros/mision.vue";
import Vision from "../components/nosotros/vision.vue";
import Publicaciones from "../components/nosotros/publicaciones.vue";
</script>

<template>
  <div>
    <q-img class="full-width" style="max-height: 200px">
      <img
        src="https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/row-bgimage"
      />
    </q-img>
    <Mision />
    <Vision />
    <Publicaciones />
  </div>
</template>

<style scoped></style>
