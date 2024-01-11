<template>
  <div class="flex flex-wrap" role="radiogroup">
    <ColorPick
      v-for="(key, indx) in keys"
      v-bind:key="keyFor(indx)"
      v-bind:value="key"
    />
  </div>
</template>

<script setup>
import ColorPick from "./ColorPick.vue"
import { colorNames } from "../utils"

const keys = colorNames
const keyFor = (indx) => `pick-${indx}`
</script>
