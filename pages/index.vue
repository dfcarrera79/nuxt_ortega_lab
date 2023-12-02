<script setup lang="ts">
import { useQuasar } from "quasar";
import type { QBtnProps, QNotifyOptions } from "quasar";

const { dialog, bottomSheet, loading, loadingBar, notify, dark, screen } =
  useQuasar();

loadingBar.setDefaults({
  color: "green",
  size: "15px",
  position: "bottom",
});

const themeIcon = computed(() => (dark.isActive ? "dark_mode" : "light_mode"));

const showBottomsheet = () =>
  bottomSheet({
    message: "Bottom Sheet",
    actions: [
      {
        label: "Drive",
        img: "https://cdn.quasar.dev/img/logo_drive_128px.png",
        id: "drive",
      },
      {
        label: "Keep",
        img: "https://cdn.quasar.dev/img/logo_keep_128px.png",
        id: "keep",
      },
      {
        label: "Google Hangouts",
        img: "https://cdn.quasar.dev/img/logo_hangouts_128px.png",
        id: "calendar",
      },
      {
        label: "Calendar",
        img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
        id: "calendar",
      },
    ],
  });

const random = <T extends string>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

type Position = Exclude<QNotifyOptions["position"], undefined>;

const buttons: QBtnProps[] = [
  {
    label: "Bottomsheet",
    onClick: () => showBottomsheet(),
  },
  {
    label: "Loading",
    onClick: () => {
      loading.show();
      setTimeout(() => {
        loading.hide();
      }, 1000);
    },
  },
  {
    label: "LoadingBar",
    onClick: () => {
      loadingBar.start();
      setTimeout(() => {
        loadingBar.stop();
      }, 1000);
    },
  },
  {
    label: "Dialog",
    onClick: () => dialog({ message: "Hello World" }),
  },
  {
    label: "Notify",
    onClick: () =>
      notify({
        message: "Hello World",
        position: random<Position>([
          "left",
          "right",
          "center",
          "bottom",
          "top",
        ]),
      }),
  },
];
</script>
<template>
  <q-page class="column justify-center content-center">
    <div
      id="mensaje"
      class="text-body1 text-weight-medium q-pa-md"
      style="text-align: center"
    >
      <q-img src="../assets/loxasoluciones.png" alt="loxasoluciones" />
      <p>
        Producto desarrollado por Loxasoluciones bajo la dirección de Diego
        Fernando Carrera
      </p>

      <p>
        <a href="https://wa.me/593986704083" target="_blank">0986704083</a> -
        <a href="mailto:dfcarrera@outlook.com">dfcarrera@outlook.com</a>
      </p>

      <p>
        <a href="https://www.loxasoluciones.com/" target="_blank"
          >Loxasoluciones</a
        >, Loja - Ecuador
      </p>
    </div>
  </q-page>
</template>
