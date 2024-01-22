<script setup lang="ts">
import { ref } from 'vue';

/* Defined props */
const props = defineProps({
  logo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Data
const color = ref(false);

//Methods
const onHover = () => {
  color.value = true;
};

const onLeave = () => {
  color.value = false;
};
</script>

<template>
  <div class="q-py-md">
    <q-card
      class="my-card custom-hover-background"
      style="height: 360px"
      @mouseenter="onHover"
      @mouseleave="onLeave"
    >
      <q-card-section>
        <div
          class="column justify-center items-center content-center scale-up-center fadeIn"
        >
          <div class="text-center font-bold q-pt-md">
            <q-btn outline round color="white" size="lg">
              <strong>{{ props.logo }}</strong>
            </q-btn>
            <div
              :class="
                color
                  ? 'q-my-md text-h5 text-white'
                  : 'q-my-md text-h5 text-white'
              "
              style="font-family: 'Lato'"
            >
              <strong>{{ props.title }}</strong>
            </div>
          </div>
          <div
            :class="
              color
                ? 'text-subtitle1 text-center text-white et_pb_text_1'
                : 'text-subtitle1 text-center text-white et_pb_text_1'
            "
          >
            <p>
              {{ props.description }}
            </p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.et_pb_text_1 {
  line-height: 1.6em;
  font-family: 'Josefin Sans', Helvetica, Arial, Lucida, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6em;
  margin-bottom: 29px !important;
}
.my-card {
  width: 100%;
  max-width: 350px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); // Agrega una sombra al hacer hover
    opacity: 0.9; // Reduce ligeramente la opacidad al hacer hover
  }

  &.animate-on-scroll {
    opacity: 1;
    transform: translateY(0);
    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out,
      opacity 0.5s ease-in-out;
  }
}
.custom-hover-background {
  &:hover {
    background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
    transition: background-color 0.3s; // Opcional: agrega una transición suave
  }
}
</style>
