<template>
  <h1
    class="mb-11 ml-0 mr-0 mt-11 text-center text-6xl font-thin uppercase text-clrs-red"
  >
    {{ label }}
  </h1>
</template>

<script setup>
const props = defineProps({
  label: String,
})
</script>
