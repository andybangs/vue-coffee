<template>
  <vc-panel :title="title" :backgroundColor="backgroundColor">
    <div class="container">
      <div class="row">
        <vc-input
          :value="value"
          :prefix="prefix"
          :backgroundColor="backgroundColor"
          :isValidInput="isValidInput"
          :coerceValue="coerceValue"
          @update="update"
        />
      </div>
      <div class="row" />
      <div class="row">
        <div class="buttons-cont">
          <vc-button
            :backgroundColor="colors.charcoalDark"
            :color="backgroundColor"
            :onClick="dec"
          >
            –
          </vc-button>
          <vc-button
            :backgroundColor="colors.charcoalLight"
            :color="backgroundColor"
            :onClick="inc"
          >
            +
          </vc-button>
        </div>
      </div>
    </div>
  </vc-panel>
</template>

<script>
import VcButton from './VcButton';
import VcInput from './VcInput';
import VcPanel from './VcPanel';
import { colors } from '../constants';

export default {
  name: 'variable',
  components: { VcButton, VcInput, VcPanel },
  props: {
    title: {
      type: String,
      required: true
    },
    prefix: {
      type: String
    },
    value: {
      type: String,
      required: true
    },
    isValidInput: {
      type: Function,
      default: () => true
    },
    coerceValue: {
      type: Function,
      default: x => x
    },
    backgroundColor: {
      type: String,
      default: colors.white
    }
  },
  data() {
    return {
      colors
    };
  },
  methods: {
    inc() {
      this.$emit('inc');
    },
    dec() {
      this.$emit('dec');
    },
    update(val) {
      this.$emit('update', val);
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

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  align-items: center;
}

.buttons-cont {
  display: flex;
  width: 95%;
  max-width: 500px;
  min-height: 36px;
}
</style>
