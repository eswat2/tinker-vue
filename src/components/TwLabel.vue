<template>
  <span class="text-clrs-slate4 ml-auto align-top text-xs italic">
    Tailwind {{ version }}
  </span>
</template>

<script setup>
import { TW_VERSION } from "../utils"

const version = TW_VERSION
</script>
