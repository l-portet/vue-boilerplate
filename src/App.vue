<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  height: 939px;
  padding: 2% 20%;
  box-sizing: border-box;
}
h1 {
  font-size: 50px;
  margin-bottom: 0;
}

h2 {
  margin-top: 10px;
  font-weight: normal;
  font-size: 30px;
}

button,
input {
  font: inherit;
  font-size: 25px;
}
</style>
