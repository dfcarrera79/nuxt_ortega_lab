<script setup lang="ts">
/* Defined props */
const props = defineProps({
  img: {
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
</script>

<template>
  <div class="card">
    <img :src="props.img" alt="" />
    <div class="row justify-center q-pa-md my-card">
      <h4 style="font-family: 'Lato'">{{ props.title }}</h4>
      <p class="et_pb_text_1">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-card {
  position: absolute;
  height: 400px;
  background: rgba(0, 0, 0, 0.4);
  transform: translateY(400px);
  transition: transform 0.3s ease;
}

.my-card:hover {
  transform: translateY(
    200px
  ); /* Puedes ajustar la cantidad de píxeles según sea necesario */
}

.et_pb_text_1 {
  line-height: 1.6em;
  font-family: "Josefin Sans", Helvetica, Arial, Lucida, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6em;
  margin-bottom: 29px !important;
}

// Colors
$color-primary-white: rgb(240, 240, 240);

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: "Roboto", sans-serif;
}

.card {
  width: 24rem;
  height: 36rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: $color-primary-white;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
    transition: opacity 0.2s ease-out;
  }

  &:hover img {
    transition: opacity 0.3s ease-in;
    opacity: 0.7;
  }
}

.material-symbols-outlined {
  vertical-align: middle;
}
</style>
