<template>
  <div class="bg-image">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.bg-image {
  background-image: url("../assets/background.jpg");
  background-repeat: repeat;
  background-size: cover;
}
</style>
