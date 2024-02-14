<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "../store/app";
import { reveal } from "../composables/services";
import ServiceCard from "../components/widgets/ServiceCard.vue";
import Procedimientos from "../components/servicios/procedimientos.vue";

const appStore = useAppStore();

onMounted(() => {
  reveal("hr");
  reveal(".custom-caption");
});

window.addEventListener("scroll", () => reveal("hr"));
window.addEventListener("scroll", () => reveal(".custom-caption"));

// Data
const cardContent = [
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se1",
    title: "Biopsias",
    description:
      "Es la extracción de una parte del cuerpo, su tamaño dependerá de la invasión de la posible enfermedad.",
  },
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se2",
    title: "Piezas Quirúrgicas",
    description:
      "Consiste en la extracción completa o semi completa de un órgano del cuerpo, para análisis histopatológico.",
  },
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se3",
    title: "Inmunohistoquímica",
    description:
      "Es un procedimiento basado en la utilización de anticuerpos, su objetivo es identificar un antígeno específico.",
  },
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se4",
    title: "Transoperatorio por Congelación",
    description:
      "Emite un diagnóstico en tejido fresco que se lo realiza por congelación y en el menor tiempo posible, sirve de guía durante la operación quirúrgica en curso.",
  },
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se5",
    title: "Base líquida",
    description:
      "Es un método muy eficaz mediante el proceso de centrifugado o filtración que al obtener un material libre de impurezas permite un correcto análisis.",
  },
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se6",
    title: "Papanicolaous",
    description:
      "Es una prueba realizada en mujeres que nos permite la detección de alteraciones en el cuello uterino, su función es la detección temprana para evitar un posible cáncer.",
  },
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se7",
    title: "Inmunofluorecencia",
    description:
      "Es un proceso utilizado mediante el uso de anticuerpos para determinar la presencia de determinadas moléculas, que son marcadores importantes en la conclusión diagnóstica.",
  },
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se8",
    title: "Determinación Molecular de HPV",
    description:
      "Una prueba molecular que identifica específicamente los genotipos HPV16 Y HPV18, además de detectar simultáneamente un panel de otros 12 tipos de alto riesgo (HPVAR: 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66 y 68).",
  },
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se9",
    title: "Dermatopatología",
    description:
      "Certificación Internacional, toma y estudio de biopsias para diagnóstico en enfermedades de la piel.",
  },
  {
    img: "https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/se10",
    title: "Interconsulta de casos",
    description:
      "Ocurre cuando el médico o profesional de la salud que lo atiende considera necesario que usted sea evaluado por un especialista adicional.",
  },
];
</script>

<template>
  <div :class="appStore.darkMode ? 'element-dark' : 'element'">
    <q-img class="full-width" style="max-height: 200px">
      <img
        src="https://res.cloudinary.com/dvy167slj/image/upload/f_auto,q_auto/v1/ortegalab/row-bgimage"
      />
    </q-img>

    <div
      class="font-bold q-pt-sm justify-center custom-caption"
      style="font-family: 'Lato'"
    >
      <div
        :class="
          appStore.darkMode
            ? 'text-blue-4 text-h4 q-pt-xl justify-center'
            : 'text-blue-9 text-h4 q-pt-xl justify-center'
        "
      >
        Nuestros servicios
        <hr
          class="q-mb-md"
          :style="
            appStore.darkMode
              ? 'background-color: #64b5f6; max-width: 350px'
              : 'background-color: #1565c0; max-width: 350px'
          "
        />
      </div>
    </div>

    <div
      class="fit row wrap justify-evenly items-center content-center q-pa-xl"
    >
      <template v-for="(content, index) in cardContent" :key="index">
        <ServiceCard
          :img="content.img"
          :title="content.title"
          :description="content.description"
          class="q-my-md"
        />
      </template>
    </div>
  </div>
  <div
    :class="
      appStore.darkMode
        ? 'element-dark row justify-center'
        : 'element row justify-center'
    "
  >
    <Procedimientos style="max-width: 800px" />
  </div>
</template>

<style lang="scss" scoped>
.custom-caption {
  font-size: 48px !important;
  line-height: 1.1em !important;
  text-transform: uppercase;
  font-weight: 400;
  padding: 12px;
  transition: transform 0.7s ease 0.5s;
  transform: translateY(200px);
  opacity: 0;
  text-align: center;
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
