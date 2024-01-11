<template>
  <span class="text-clrs-slate4 ml-auto align-top text-xs italic">
    Tailwind {{ version }}
  </span>
</template>

<script>
import { TW_VERSION } from "../utils"

export default {
  name: "tw-label",
  data() {
    return {
      version: TW_VERSION,
    }
  },
}
</script>
