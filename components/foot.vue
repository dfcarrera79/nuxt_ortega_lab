<script setup lang="ts">
import { useAppStore } from "../store/app";

const appStore = useAppStore();
</script>

<template>
  <div
    :class="
      !appStore.darkMode
        ? 'element column full-width'
        : 'element-dark column full-width'
    "
  >
    <div
      class="row justify-around items-center content-center"
      style="height: 150px"
    >
      <div :class="appStore.darkMode ? 'text-white' : 'text-grey-9'">
        <div class="text-h4" style="font-family: 'Lato'">
          Ortega Pathology Lab
        </div>
        <hr
          :style="
            !appStore.darkMode
              ? 'background-color: grey;'
              : 'background-color: white;'
          "
        />

        <div class="text-subtitle1 et_pb_text_1">
          Tu salud, nuestro compromiso.
        </div>
      </div>
      <div class="row justify-center">
        <q-btn
          flat
          size="lg"
          target="_blank"
          href="https://www.facebook.com/LabPath"
        >
          <q-avatar>
            <img src="/img/facebook.svg" />
          </q-avatar>
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
            anchor="bottom middle"
            self="top middle"
          >
            <span class="et_pb_text_1">Ir a Facebook</span>
          </q-tooltip>
        </q-btn>
        <q-btn
          flat
          size="lg"
          target="_blank"
          href="https://www.instagram.com/ortega_pathology/"
        >
          <q-avatar>
            <img src="/img/instagram.svg" />
          </q-avatar>
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
            anchor="bottom middle"
            self="top middle"
          >
            <span class="et_pb_text_1">Ir a Instagram</span>
          </q-tooltip>
        </q-btn>
      </div>
    </div>

    <div :class="appStore.darkMode ? 'text-white' : 'text-grey-9'">
      <div class="row justify-evenly">
        <p class="text-caption et_pb_text_1">Copyright &copy; 2024 OrtegaLab</p>
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
  width: 100%;
}
</style>
