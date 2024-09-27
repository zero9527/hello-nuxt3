<template>
  <section>
    <h2>This page will be displayed at the /hello route.</h2>
  </section>
  <input type="file" @change="fileChange"></input>
  <p>
    <button @click="upload">上传</button>
  </p>
  <div>
    <NuxtLink href="/">back home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const file = ref();

function fileChange(e: Event) {
  file.value = (e.target as HTMLInputElement).files?.[0];
  console.log(file.value);
}

async function upload() {
  const formData = new FormData();
  formData.append('file', file.value);
  const res = await $fetch('/api/hello', { method: 'POST', body: formData });
  console.log(res);
}
</script>
