<script setup lang="ts">
import { onMounted } from "vue";
import { reveal } from "../../composables/services";
import Card from "../components/widgets/Card.vue";

// Data
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

if (process.client) {
  // Only run this code on the client-side (in the browser)
  window.addEventListener("scroll", () => reveal("hr"));
  window.addEventListener("scroll", () => reveal(".custom-caption"));
}
</script>

<template>
  <div
    class="element fit column wrap justify-center items-center content-center q-pb-xl"
  >
    <div
      class="text-left font-bold q-pt-sm custom-caption"
      style="font-family: 'Lato'"
    >
      <div class="text-h4 q-pt-xl">Cartera de servicios</div>
      <div class="text-subtitle1">Ponemos a su disposición el estudio de:</div>
    </div>

    <hr class="q-mb-md" />

    <div class="fit row wrap justify-evenly items-center content-center">
      <template v-for="(content, index) in cardContent" :key="index">
        <Card
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
  color: #fff;
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
  width: 28%; /* You can adjust this value to set the desired length */
  transition: transform 0.7s ease 0.5s;
  transform: translateX(-600px);
  opacity: 0;
}

hr.active {
  transform: translateX(0px);
  opacity: 1;
}
</style>
