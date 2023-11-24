<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>



<template>
  <router-view />
</template>

<style lang="scss">
body {
  background: white;
}

a:hover {
  background: transparent;
}

$red : #ff0000;
$blue : #3887fe;
$purple: #b74bfc;
$pink: #fb1aac;
$orange: #fb3d00;
$yellow: #f8cc08;
$green: #92e041;

button {
  font-size: 1rem;
  padding: 1rem 5rem;
  border-radius: 1rem;
  background: linear-gradient(-45deg, $blue, $purple, $pink);
  background-size: 100% 100%;
  color: white;
  font-weight: 700;
  border: 0;
  cursor: pointer;
}
</style>
