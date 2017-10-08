<template>
<input
  type="text"
  ref="input"
  :value="prefix ? prefix.concat(value) : value"
  :style="{ backgroundColor }"
  @input="update($event.target.value, value)"
/>
</template>

<script>

export default {
  name: 'vc-input',
  props: ['backgroundColor', 'value', 'prefix', 'isValidInput', 'coerceValue'],
  methods: {
    update(newVal, oldVal) {
      if (!this.isValidInput(newVal)) {
        this.$refs.input.value = this.prefix ?
          this.prefix.concat(oldVal) :
          oldVal;

        return;
      }

      const coercedValue = this.coerceValue(newVal);

      if (coercedValue !== newVal) {
        this.$refs.input.value = this.prefix ?
          this.prefix.concat(coercedValue) :
          coercedValue;
      }

      this.$emit('update', coercedValue);
    }
  }
};
</script>

<style scoped>
input {
  border: none;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  width: 95%;
}

input:focus {
  outline-width: 0;
}
</style>
