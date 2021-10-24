<template>
  <router-view></router-view>

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vite + Vue 3 + Quasar" />

  <div class="q-mt-md">
    <q-btn icon="mail" color="teal">Test</q-btn>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
