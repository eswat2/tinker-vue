<template>
  <div :aria-label="value" :title="value" @click="pick" role="radio">
    <Radio :hex="hex" :selected="selected" />
  </div>
</template>

<script>
import Radio from "./icons/Radio.vue"
import { namedColors } from "../utils"

export default {
  components: {
    Radio,
  },
  computed: {
    hex() {
      return namedColors[this.value]
    },
    selected() {
      return this.value === this.$store.state.app.color
    },
  },
  methods: {
    pick() {
      this.$store.dispatch("colorPick", { color: this.value })
    },
  },
  props: {
    value: String,
  },
}
</script>
