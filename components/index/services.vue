<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "../../store/app";
import { reveal } from "../../composables/services";
import CardWidget from "../widgets/Card.vue";

// Data
const appStore = useAppStore();
const cardContent = [
  {
    logo: "His",
    title: "HISTOLOGÍA",
    description:
      "Estudio de todo tipo de tejidos orgánicos en seres humanos, sus características y función darán como resultado un acertado diagnóstico.",
  },
  {
    logo: "Cis",
    title: "CITOLOGÍA",
    description:
      "Citología vaginal en base líquida o Citología de líquidos o fluidos corporales. Se realiza un diagnóstico morfológico celular en un material óptimo para análisis microscópico.",
  },
  {
    logo: "IHQ",
    title: "INMUNOHISTOQUÍMICA",
    description:
      "Inmunohistoquímica, estudio que determina presencia y nivel específico de proteínas celulares mediante la utilización de anticuerpos, para determinar el comportamiento de tumores.",
  },
  {
    logo: "BM",
    title: "BIOLOGÍA MOLECULAR",
    description:
      "Detección de virus de papiloma humano. Prueba molecular que identifica los genotipos HPV16 y HPV18, además de detectar simultáneamente un panel de 12 de alto riesgo (HPVAR:31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66 y 68).",
  },
];

// Methods
onMounted(() => {
  reveal(".pgraph");
  reveal("hr");
  reveal(".custom-caption");
});

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
  >
    <div
      :class="
        appStore.darkMode
          ? 'text-left font-bold q-pt-sm custom-caption text-blue-4'
          : 'text-left font-bold q-pt-sm custom-caption text-blue-9'
      "
      style="font-family: 'Lato'"
    >
      <div class="text-h4 q-pt-xl">Cartera de servicios</div>
      <div class="text-subtitle1">
        Ponemos a su disposición el estudio de:
        <hr
          class="q-mb-md"
          :style="
            appStore.darkMode
              ? 'background-color: #64b5f6;'
              : 'background-color: #1565c0;'
          "
        />
      </div>
    </div>

    <div class="fit row wrap justify-evenly items-center content-center">
      <template v-for="(content, index) in cardContent" :key="index">
        <CardWidget
          :logo="content.logo"
          :title="content.title"
          :description="content.description"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-caption {
  text-align: left !important;
  font-size: 48px !important;
  line-height: 1.1em !important;
  text-transform: uppercase;
  font-weight: 400;
  padding: 12px;
  transition: transform 0.7s ease 0.5s;
  transform: translateY(200px);
  opacity: 0;
}

.custom-caption.active {
  transform: translateY(0px);
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
</style>
