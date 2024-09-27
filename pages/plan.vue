<template>
  <section>
    <h2>This page will be displayed at the /plan route.</h2>
  </section>
  <div>{{ data }}</div>
  <NuxtLink href="/">back home</NuxtLink>
</template>

<script setup lang="ts">
const { data } = await useFetch('/push/c49e6439147c7829166c38c4/plan');
console.log(data.value);
</script>
