<template>
  <vc-panel title="timer" :backgroundColor="backgroundColor">
    <div class="container">
      <div class="row">
        <h1>{{minutes}}:{{seconds}}</h1>
      </div>
      <div class="row" />
      <div class="row">
        <div class="buttons-cont">
          <vc-button
            v-if="noSecondsElapsed || incrementerAtLastCleared"
            :backgroundColor="colors.charcoalDark" 
            :color="colors.white" 
            :onClick="startTimer"
          >
            start
          </vc-button>
          <vc-button
            v-else
            :backgroundColor="colors.charcoalDark" 
            :color="colors.white" 
            :onClick="stopTimer"
          >
            stop
          </vc-button>
          <vc-button
            v-if="!noSecondsElapsed && incrementerAtLastCleared"
            :backgroundColor="colors.charcoalLight" 
            :color="colors.white" 
            :onClick="resetTimer"
          >
            reset
          </vc-button>
        </div>
      </div>
    </div>
  </vc-panel>
</template>

<script>
import VcButton from './VcButton';
import VcPanel from './VcPanel';
import { colors } from '../constants';

export default {
  name: 'timer',
  components: { VcButton, VcPanel },
  data() {
    return {
      colors,
      secondsElapsed: 0,
      isRunning: false,
      lastClearedIncrementer: null,
      incrementer: null
    };
  },
  methods: {
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.incrementer = setInterval(() => {
          this.secondsElapsed += 1;
        }, 1000);
      }
    },
    stopTimer() {
      if (this.isRunning) {
        this.isRunning = false;
        if (this.incrementer) clearInterval(this.incrementer);
        this.lastClearedIncrementer = this.incrementer;
      }
    },
    resetTimer() {
      this.secondsElapsed = 0;
    }
  },
  computed: {
    minutes() {
      return Math.floor(this.secondsElapsed / 60).toString();
    },
    seconds() {
      return (`0${this.secondsElapsed % 60}`).slice(-2);
    },
    noSecondsElapsed() {
      return this.secondsElapsed === 0;
    },
    incrementerAtLastCleared() {
      return this.incrementer === this.lastClearedIncrementer;
    },
    backgroundColor() {
      return this.noSecondsElapsed && this.isRunning ?
        colors.green :
        colors.white;
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
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
