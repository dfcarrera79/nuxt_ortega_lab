<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "../../store/app";
import { reveal } from "../../composables/services";

const appStore = useAppStore();

onMounted(() => {
  reveal(".pgraph");
  reveal(".container_img");
  reveal("hr");
  reveal(".custom-caption");
});

window.addEventListener("scroll", () => reveal(".pgraph"));
window.addEventListener("scroll", () => reveal(".container_img"));
window.addEventListener("scroll", () => reveal("hr"));
window.addEventListener("scroll", () => reveal(".custom-caption"));
</script>

<template>
  <div
    :class="
      appStore.darkMode
        ? 'element-dark fit column wrap justify-center items-center content-center q-pb-xl'
        : 'element fit column wrap justify-center items-center content-center q-pb-xl'
    "
    style="height: 600px"
  >
    <div class="fit row wrap justify-center items-center content-center">
      <div class="wrap column q-pa-xl" style="max-width: 500px">
        <div
          class="text-left font-bold q-pt-sm custom-caption title"
          style="font-family: 'Lato'; font-size: 18px"
        >
          <div
            :class="
              appStore.darkMode ? 'text-h4 text-blue-4' : 'text-h4 text-blue-9'
            "
          >
            Nuestra Misión
          </div>
        </div>
        <hr
          class="q-mb-md"
          :style="
            appStore.darkMode
              ? 'background-color: #64b5f6;'
              : 'background-color: #1565c0;'
          "
        />
        <div class="text-subtitle1 text-left pgraph et_pb_text_1">
          <p :class="appStore.darkMode ? 'text-white' : 'text-grey-9'">
            Proveer servicios y herramientas de apoyo para proporcionar un
            diagnóstico seguro, confiable y oportuno, mediante la atención de
            médicos especialistas con preparación académica constante,
            tecnología de vanguardia, control de calidad, ética profesional,
            equipo humano calificado y enfocados en las exigencias de la
            medicina moderna para satisfacción de nuestros pacientes.
          </p>
        </div>
      </div>
      <div class="container_outer_img">
        <div class="column container_img">
          <q-img
            src="https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/n1"
            fit="scale-down"
            style="max-width: 400px"
          />
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
  font-size: 20px;
  line-height: 1.6em;
  margin-bottom: 29px !important;
}
.custom-caption {
  text-align: left !important;
  font-size: 48px !important;
  line-height: 1.1em !important;
  text-transform: uppercase;
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

.element-dark {
  background-image: linear-gradient(
    142deg,
    #5b5b5b 0%,
    rgba(0, 0, 0, 0.5) 100%
  ) !important;
}
/* Para dark mode no activo (inverso de los colores de .element) */
.element {
  background-image: linear-gradient(
    142deg,
    #a4a4a4 0%,
    /* Color de fondo blanco en lugar de #5b5b5b */ rgba(255, 255, 255, 0.5)
      100% /* Color del fondo con opacidad en lugar de rgba(0, 0, 0, 0.9) */
  ) !important;
}

hr {
  border: none;
  height: 0.75px;
  width: 100%; /* You can adjust this value to set the desired length */
  transition: transform 0.7s ease 0.5s;
  transform: translateX(-600px);
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
