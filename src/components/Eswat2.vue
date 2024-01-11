<template>
  <a
    :href="url"
    class="text-clrs-gray hover:text-clrs-navy absolute right-8 top-8"
    :aria-label="who"
    :title="who"
  >
    <Fingerprint />
  </a>
</template>

<script setup>
import Fingerprint from "./icons/Fingerprint.vue"

const url = "https://eswat2.github.io"
const who = "eswat2"
</script>
