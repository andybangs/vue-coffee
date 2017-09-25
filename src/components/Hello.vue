<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      message: 'Welcome to VueCoffee!'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

input {
  font-size: 16px;
  padding: 10px;
}
</style>
