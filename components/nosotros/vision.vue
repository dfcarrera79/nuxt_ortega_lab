<script setup lang="ts">
import { onMounted } from "vue";
import { reveal } from "../../composables/services";

onMounted(() => {
  reveal(".pgraph");
  reveal(".container_img");
  reveal("hr");
  reveal(".custom-caption");
});

if (process.client) {
  window.addEventListener("scroll", () => reveal(".pgraph"));
  window.addEventListener("scroll", () => reveal(".container_img"));
  window.addEventListener("scroll", () => reveal("hr"));
  window.addEventListener("scroll", () => reveal(".custom-caption"));
}
</script>

<template>
  <div
    class="element fit column wrap justify-center items-center content-center q-pb-xl"
    style="height: 600px"
  >
    <div class="fit row wrap justify-center items-center content-center">
      <div class="container_outer_img">
        <div class="column container_img">
          <q-img src="/img/s4.jpg" fit="scale-down" style="max-width: 500px" />
        </div>
      </div>
      <div class="wrap column q-pa-xl" style="max-width: 500px">
        <div
          class="text-left font-bold q-pt-sm custom-caption title"
          style="font-family: 'Lato'"
        >
          <div class="text-h4">Nuestra Visión</div>
        </div>
        <hr class="q-mb-md" />
        <div class="text-subtitle1 text-left text-white pgraph et_pb_text_1">
          <p>
            Convertirnos en líder de medicina como laboratorio de Anatomía
            Patológica de la provincia de Loja, brindando servicios de calidad
            que contribuyan a mejorar la calidad de vida de los ciudadanos a
            través de un alto compromiso humano y profesional para tranquilidad
            y beneficio de nuestra sociedad.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.et_pb_text_1 {
  line-height: 1.6em;
  font-family: "Josefin Sans", Helvetica, Arial, Lucida, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6em;
  margin-bottom: 29px !important;
}
.custom-caption {
  text-align: left !important;
  font-size: 48px !important;
  line-height: 1.1em !important;
  text-transform: uppercase;
  color: #fff;
  font-weight: 400;
  padding: 12px;
  transition: transform 0.7s ease 0.5s;
  transform: translateX(1400px);
  opacity: 0;
}

.custom-caption.active {
  transform: translateX(0px);
  opacity: 1;
}

.element {
  background-image: linear-gradient(
    142deg,
    #5b5b5b 0%,
    rgba(0, 0, 0, 0.9) 100%
  ) !important;
}

hr {
  border: none;
  height: 0.75px;
  background-color: white;
  width: 100%; /* You can adjust this value to set the desired length */
  transition: transform 0.7s ease 0.5s;
  transform: translateX(600px);
  opacity: 0;
}

hr.active {
  transform: translateX(0px);
  opacity: 1;
}

.title {
  overflow: hidden;
  height: auto;
}

.container_outer_img {
  margin: 50px;
  width: 50%;
  overflow: hidden;
}

.container_img {
  width: 100%;
  transition: transform 1.25s ease-in-out;
  transform: translateX(500px) scale(0.2);
}

.container_img.active {
  transform: translateX(0px) scale(1);
}

.pgraph {
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
}

.pgraph.active {
  opacity: 1;
}
</style>
