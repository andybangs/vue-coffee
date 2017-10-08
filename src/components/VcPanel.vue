<template>
  <div class="container" v-bind:style="{ backgroundColor }">
    <div class="header">
      <h2>{{ title }}</h2>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vc-panel',
  props: {
    title: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .1em;
  border-bottom: solid 1.5px;
}

.container {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.header {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 5;
}
</style>
