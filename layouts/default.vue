<script setup lang="ts">
import { useQuasar } from "quasar";
import Foot from "../components/FooterComponent.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

// Data
const $q = useQuasar();
const scrolled = ref(false);
const isHovered = ref(false);
const rightDrawerOpen = ref(false);
const menuList = [
  {
    icon: "home",
    label: "Inicio",
    separator: false,
    to: "/",
  },
  {
    icon: "medical_services",
    label: "Servicios",
    separator: false,
    to: "#/servicios",
  },
  {
    icon: "group",
    label: "Nosotros",
    separator: false,
    to: "#/nosotros",
  },
  {
    icon: "alternate_email",
    label: "Contacto",
    separator: false,
    to: "#/contacto",
  },
  {
    icon: "article",
    label: "Resultados Online",
    separator: false,
    to: "http://ortegalabcloud.com/",
  },
];

// Methods
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};

// Función para manejar el evento de desplazamiento
const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};

// Agregar y quitar el listener del evento de desplazamiento
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <q-layout view="hHr lpR fFf">
    <q-page-container style="margin-top: -91px">
      <router-view />
    </q-page-container>

    <q-header class="text-white background-none">
      <q-toolbar>
        <q-toolbar-title>
          <a href="/">
            <img
              ref="logo"
              src="../assets/logo.png"
              class="q-pa-sm q-transition--fast"
              :style="{ height: scrolled ? '50px' : '70px' }"
              alt="Descripción de la imagen"
            />
          </a>
        </q-toolbar-title>
        <q-space />
        <div class="q-pr-md" v-if="!($q.screen.lt.md || $q.screen.lt.sm)">
          <q-btn
            outline
            color="white"
            no-caps
            label="Resultados Online"
            class="custom-btn et_pb_text_1"
            href="http://ortegalabcloud.com/"
          >
            <q-icon left size="2em" name="chevron_right" />
          </q-btn>
        </div>
        <q-btn
          dense
          flat
          round
          icon="menu"
          :color="isHovered ? 'primary' : 'white'"
          @click="toggleRightDrawer"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      behavior="mobile"
      style="background-color: #191919"
    >
      <q-scroll-area class="fit text-white et_pb_text_1">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              :href="menuItem.to"
              :active="menuItem.label === 'Outbox'"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" size="sm" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
          <q-expansion-item expand-separator icon="language" label="WebLAB">
            <q-list>
              <q-item clickable v-ripple href="http://186.5.111.32:9595/sage/">
                <q-item-section avatar>
                  <q-icon name="atr" />
                </q-item-section>
                <q-item-section> Financiero </q-item-section>
              </q-item>

              <q-item clickable v-ripple href="http://186.5.111.32:3000">
                <q-item-section avatar>
                  <q-icon name="atr" />
                </q-item-section>
                <q-item-section> Pneuma </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
      <div class="absolute" style="top: 15px; right: 10px">
        <q-btn
          dense
          round
          flat
          :color="isHovered ? 'primary' : 'white'"
          unelevated
          icon="close"
          @click="rightDrawerOpen = false"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        />
      </div>
    </q-drawer>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn icon="keyboard_arrow_up" outline round color="white">
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
          anchor="center right"
          self="center left"
        >
          <span class="et_pb_text_1" style="white-space: nowrap"
            >Ir al inicio</span
          >
        </q-tooltip>
      </q-btn>
    </q-page-scroller>

    <div
      :class="
        !scrolled
          ? 'fixed-bottom-right fixed-whatsapp-btn'
          : 'fixed-bottom-right whatsapp-btn'
      "
    >
      <q-btn
        flat
        round
        size="md"
        target="_blank"
        href="https://wa.me/593995984963"
      >
        <q-avatar>
          <img src="../assets/whatsapp.svg" />
        </q-avatar>
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
          anchor="center right"
          self="center left"
        >
          <span class="et_pb_text_1" style="white-space: nowrap"
            >Escríbenos por WhatsApp</span
          >
        </q-tooltip>
      </q-btn>
    </div>

    <Foot />
  </q-layout>
</template>

<style lang="scss">
.et_pb_text_1 {
  line-height: 1.6em;
  font-family: "Josefin Sans", Helvetica, Arial, Lucida, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6em;
}

.whatsapp-btn {
  margin-right: 15px;
  margin-bottom: 70px;
  transition: transform 0.5s ease;
}

.fixed-whatsapp-btn {
  margin-right: 15px;
  margin-bottom: 70px;
  transform: translateY(40px); /* Adjust the initial position */
}

.background-none {
  background: rgba(222, 218, 218, 0);
}
.q-transition--fast {
  transition: height 0.4s ease; /* Ajusta la duración y el tipo de animación según tus preferencias */
}

.custom-btn:hover .q-icon {
  animation: moveIconToRight 0.1s ease-in-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
}

@keyframes moveIconToRight {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(8px);
  }
}

.custom-btn:not(:hover) .q-icon {
  display: none;
}
</style>
