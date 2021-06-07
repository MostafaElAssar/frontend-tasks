<template>
  <a href="/" class="logo">Company</a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
a::after {
  content: url("/imaginary-co.png");
  position: absolute;
  left: 0;
}
</style>
