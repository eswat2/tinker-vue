<template>
  <div class="flex flex-wrap" role="radiogroup">
    <ColorPick
      v-for="(key, indx) in keys"
      v-bind:key="keyFor(indx)"
      v-bind:value="key"
    />
  </div>
</template>

<script>
import ColorPick from "./ColorPick.vue"
import { colorNames } from "../utils"

export default {
  data() {
    return {
      keys: colorNames,
    }
  },
  components: {
    ColorPick,
  },
  methods: {
    keyFor(indx) {
      return `pick-${indx}`
    },
  },
}
</script>
