<template>
  <button @click="onClick" :style="{ backgroundColor, color }">
    <slot />
  </button>
</template>

<script>
import { colors } from '../constants';

export default {
  name: 'vc-button',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    backgroundColor: {
      type: String,
      default: colors.charcoal
    },
    color: {
      type: String,
      default: colors.white
    }
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
  width: 100%;
  border: none;
}

button:focus {
  outline: none;
}
</style>
