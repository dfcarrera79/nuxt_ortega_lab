<script setup>
definePageMeta({
  layout: "empty",
});
</script>
<template>
  <div
    class="fullscreen bg-image text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div class="text-primary" style="font-size: 30vh; opacity: 0.5">404</div>

      <div class="text-h2 text-primary" style="opacity: 0.5">
        Ups. Nada aquí ...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Regresar a ortegalab.com"
        no-caps
      />
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url("https://res.cloudinary.com/dvy167slj/image/upload/v1707948537/background.jpg");
  background-repeat: repeat;
  background-size: cover;
}
</style>
