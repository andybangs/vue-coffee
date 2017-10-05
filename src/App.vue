<template>
  <div id="app" class="container" :style="{ color: colors.charcoal }">
    <div class="row">
      <variable 
        title="coffee"
        :backgroundColor="colors.brown" 
        :value="coffee.val" 
        v-on:inc="inc('coffee')" 
        v-on:dec="dec('coffee')" 
        v-on:update="update('coffee', $event)" 
      />
      <variable 
        title="water"
        :backgroundColor="colors.blue" 
        :value="water.val" 
        v-on:inc="inc('water')" 
        v-on:dec="dec('water')" 
        v-on:update="update('water', $event)" 
      />
    </div>
    <div class="row">
      <variable 
        title="ratio"
        :backgroundColor="colors.gray" 
        :value="ratio.val" 
        v-on:inc="inc('ratio')" 
        v-on:dec="dec('ratio')" 
        v-on:update="update('ratio', $event)" 
      />
      <timer />
    </div>
  </div>
</template>

<script>
import { colors } from './constants';
import Timer from './components/Timer';
import Variable from './components/Variable';

export default {
  name: 'app',
  components: { Timer, Variable },
  data() {
    return {
      colors,
      coffee: { val: 20, maxVal: 500 },
      water: { val: 320, maxVal: 10000 },
      ratio: { val: 16, maxVal: 20 }
    };
  },
  methods: {
    inc(variable) {
      this[variable].val += 1;
    },
    dec(variable) {
      this[variable].val -= 1;
    },
    update(variable, inputStr) {
      this[variable].val = parseFloat(inputStr, 10);
    }
  },
  watch: {
    coffee: {
      handler: function coffee(newCoffee) {
        this.water.val = newCoffee.val * this.ratio.val;
      },
      deep: true
    },
    water: {
      handler: function water(newWater) {
        this.coffee.val = newWater.val / this.ratio.val;
      },
      deep: true
    },
    ratio: {
      handler: function ratio(newRatio) {
        this.water.val = this.coffee.val * newRatio.val;
      },
      deep: true
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  font: 18px 'Roboto Mono', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  font-weight: 300;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.row {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
}
</style>
