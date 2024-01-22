<script setup lang="ts"></script>

<template>
  <div class="column background full-width">
    <div
      class="row justify-around items-center content-center"
      style="height: 150px"
    >
      <div class="text-white">
        <div class="text-h4" style="font-family: 'Lato'">
          Ortega Pathology Lab
        </div>
        <hr />

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

    <div>
      <div class="row justify-evenly">
        <p class="text-caption text-white et_pb_text_1">
          Copyright &copy; 2024 OrtegaLab
        </p>
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

.background {
  background: linear-gradient(45deg, #333333, #666666);

  /* Establecer un degradado desvanecido hacia abajo */
  background: linear-gradient(to bottom, #333333, #666666);

  /* Añadir una transición suave para el desvanecido */
  transition: background 0.5s ease;
}

hr {
  border: none;
  height: 0.75px;
  background-color: white;
  width: 100%;
}
</style>
