<script>
import { ref } from "vue";

export default {
  setup() {
    const slide = ref(1);
    const autoplay = ref(false);
    const isHovered = ref(false);
    const newLHovered = ref(false);
    const newRHovered = ref(false);

    const handleMouseEnter = () => {
      isHovered.value = true;
      autoplay.value = false;
    };

    const handleMouseLeave = () => {
      isHovered.value = false;
      autoplay.value = true;
    };

    const handleLBtnEnter = () => {
      newLHovered.value = true;
    };

    const handleLBtnLeave = () => {
      newLHovered.value = false;
    };

    const handleRBtnEnter = () => {
      newRHovered.value = true;
    };

    const handleRBtnLeave = () => {
      newRHovered.value = false;
    };

    return {
      slide,
      autoplay,
      isHovered,
      newLHovered,
      newRHovered,
      handleMouseEnter,
      handleMouseLeave,
      handleLBtnEnter,
      handleLBtnLeave,
      handleRBtnEnter,
      handleRBtnLeave,
    };
  },
};
</script>

<template>
  <div class="q-pa-none">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
      height="750px"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <q-carousel-slide :name="1" img-src="../assets/img1.png" />
      <q-carousel-slide :name="2" img-src="../assets/img2.jpg"
        ><div class="custom-caption elem" style="font-family: 'Lato'">
          <div class="text-h4">Citología en base líquida</div>
          <div class="text-subtitle1 q-mb-md">
            Detección oportuna de cáncer de cuello uterino (Papa Nicolau)
          </div>
          <q-btn
            dense
            outline
            no-caps
            label="Más información"
            class="custom-btn et_pb_text_1"
            style="font-weight: 400"
            color="white"
            href="#/servicios"
          >
            <q-icon left size="2em" name="chevron_right" />
          </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="../assets/img3.jpg"
        ><div class="custom-caption elem" style="font-family: 'Lato'">
          <div class="text-h4">Comprometidos con la docencia</div>
          <div class="text-subtitle1 q-mb-md">
            y la investigación en el área de patología
          </div>
          <q-btn
            dense
            outline
            no-caps
            label="Más información"
            class="custom-btn et_pb_text_1"
            style="font-weight: 400"
            href="#/nosotros"
          >
            <q-icon left size="2em" name="chevron_right" />
          </q-btn>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="../assets/img4.png"
        ><div
          class="custom-caption elem q-pa-xl"
          style="
            font-family: 'Lato';
            opacity: 0.5;
            background-color: #191919;
            width: 250px;
            height: 150px;
          "
        >
          <div class="text-h4">WebLAB</div>
          <div class="text-subtitle1 q-mb-md">Resultados en línea</div>
          <q-btn
            dense
            outline
            no-caps
            label="LOGIN"
            class="custom-btn et_pb_text_1"
            style="font-weight: 400"
            href="https://www.loxasoluciones-cloud.com:8081/#/login?redirect=/?app=portal_resultadoslab"
          >
            <q-icon left size="2em" name="chevron_right" />
          </q-btn>
        </div>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control
          position="top-left"
          :offset="[0, 350]"
          class="q-pl-md"
        >
          <q-btn
            :class="isHovered ? 'elemLeft' : 'elemLeftReverse'"
            round
            unelevated
            flat
            dense
            @click="$refs.carousel.previous()"
            :color="newLHovered ? 'primary' : 'white'"
            @mouseenter="handleLBtnEnter"
            @mouseleave="handleLBtnLeave"
          >
            <q-icon size="3em" name="chevron_left" />
          </q-btn>
        </q-carousel-control>
        <q-carousel-control
          position="top-right"
          :offset="[0, 350]"
          class="q-pr-md"
        >
          <q-btn
            :class="isHovered ? 'elemRigth' : 'elemRigthReverse'"
            round
            unelevated
            flat
            dense
            @click="$refs.carousel.next()"
            :color="newRHovered ? 'primary' : 'white'"
            @mouseenter="handleRBtnEnter"
            @mouseleave="handleRBtnLeave"
          >
            <q-icon size="3em" name="chevron_right" />
          </q-btn>
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<style lang="scss" scoped>
@import "../css/carousel-styles.scss";
.et_pb_text_1 {
  line-height: 1.6em;
  font-family: "Josefin Sans", Helvetica, Arial, Lucida, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6em;
  margin-bottom: 29px !important;
}
</style>
