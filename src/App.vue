<template>
  <div id="app" class="container" :style="{ color: colors.charcoal }">
    <div class="row">
      <variable
        title="coffee"
        :backgroundColor="colors.brown"
        :value="coffee.val"
        :isValidInput="util.isValidNumStr"
        :coerceValue="coerceVariable('coffee')"
        @inc="incCoffee"
        @dec="decCoffee"
        @update="updateCoffee(parseFloat($event))"
      />
      <variable
        title="water"
        :backgroundColor="colors.blue"
        :value="water.val"
        :isValidInput="util.isIntStr"
        :coerceValue="coerceVariable('water')"
        @inc="incWater"
        @dec="decWater"
        @update="updateWater(parseInt($event, 10))"
      />
    </div>
    <div class="row">
      <variable
        title="ratio"
        prefix="1:"
        :backgroundColor="colors.gray"
        :value="ratio.val"
        :isValidInput="util.isValidNumStr"
        :coerceValue="coerceVariable('ratio')"
        @inc="incRatio"
        @dec="decRatio"
        @update="updateRatio(parseFloat($event))"
      />
      <timer />
    </div>
  </div>
</template>

<script>
import { colors } from './constants';
import * as util from './util';
import Timer from './components/Timer';
import Variable from './components/Variable';

export default {
  name: 'app',
  components: { Timer, Variable },
  data() {
    return {
      colors,
      util,
      coffee: { val: '20', minVal: 0, maxVal: 500 },
      water: { val: '320', minVal: 0, maxVal: 10000 },
      ratio: { val: '16', minVal: 1, maxVal: 20 }
    };
  },
  methods: {
    incCoffee() {
      const newVal = util.incVal(this.coffeeVal, 0.1);

      if (newVal <= this.coffee.maxVal) {
        this.updateCoffee(newVal);
      }
    },
    decCoffee() {
      const newVal = util.decVal(this.coffeeVal, 0.1);

      if (newVal >= this.coffee.minVal) {
        this.updateCoffee(newVal);
      }
    },
    incWater() {
      const newVal = util.incVal(this.waterVal, 1);

      if (newVal <= this.water.maxVal) {
        this.updateWater(newVal);
      }
    },
    decWater() {
      const newVal = util.decVal(this.waterVal, 1);

      if (newVal >= this.water.minVal) {
        this.updateWater(newVal);
      }
    },
    incRatio() {
      const newVal = util.incVal(this.ratioVal, 0.1);

      if (newVal <= this.ratio.maxVal) {
        this.updateRatio(newVal);
      }
    },
    decRatio() {
      const newVal = util.decVal(this.ratioVal, 0.1);

      if (newVal >= this.ratio.minVal) {
        this.updateRatio(newVal);
      }
    },
    coerceVariable(variable) {
      const maxVal = this[variable].maxVal;

      return (inputStr) => {
        // trim ratio input prefix
        const str = inputStr.indexOf('1:') === 0 ? inputStr.slice(2) : inputStr;

        if (str === '') return this[variable].minVal.toString();

        const newVal = Math.min(parseFloat(str), maxVal);

        return str[str.length - 1] === '.' ? `${newVal}.` : newVal.toString();
      };
    },
    updateCoffee(val) {
      this.coffee.val = val.toString();
      this.water.val = parseInt(val * this.ratioVal, 10).toString();
    },
    updateWater(val) {
      this.water.val = val.toString();
      this.coffee.val = util.toDecimal(val / this.ratioVal).toString();
    },
    updateRatio(val) {
      this.ratio.val = val.toString();
      this.water.val = Math.round(this.coffeeVal * val).toString();
    }
  },
  computed: {
    coffeeVal() {
      return parseFloat(this.coffee.val);
    },
    waterVal() {
      return parseInt(this.water.val, 10);
    },
    ratioVal() {
      return parseFloat(this.ratio.val);
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
