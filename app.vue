<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch<{ appKey: string; appName: string }>('/api/app');
console.log(data.value);
</script>
