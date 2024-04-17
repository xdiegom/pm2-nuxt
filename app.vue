<template>
  <div><strong>NUXT_FOO_KEY</strong>: {{ fooKey }}</div>
</template>

<script setup lang="ts">
const { $config } = useNuxtApp();

const fooKey = computed(() => {
  return $config.public.FOO_KEY;
});
</script>
