<template>
  <button v-on:click="onClick" :style="{ backgroundColor, color }">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'vc-button',
  props: ['backgroundColor', 'color', 'onClick']
};
</script>

<style scoped>
button {
  cursor: pointer;
  font-size: 24px;
  width: 100%;
  border: none;
}

button:focus {
  outline: none;
}
</style>
