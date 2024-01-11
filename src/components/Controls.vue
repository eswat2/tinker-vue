<template>
  <div class="mb-10px mt-3 flex items-center">
    <button
      aria-label="Refresh"
      title="Refresh"
      class="ds1-button data-button bg-clrs-blue"
      @click="handleClick"
    >
      <Refresh />
    </button>
    <button
      aria-label="Reset"
      title="Reset"
      class="ds1-button data-button bg-clrs-red"
      @click="handleClear"
    >
      <Close />
    </button>
    <span class="flex items-center">
      <ChevronDoubleLeft id="chevron" size="28" />
      <span class="italic">
        click a button...
        <sup>{{ count }}</sup>
      </span>
    </span>
  </div>
</template>

<script>
import ChevronDoubleLeft from "./icons/ChevronDoubleLeft.vue"
import Close from "./icons/Close.vue"
import Refresh from "./icons/Refresh.vue"

export default {
  components: {
    ChevronDoubleLeft,
    Close,
    Refresh,
  },
  computed: {
    count() {
      return this.$store.state.app.count
    },
  },
  methods: {
    handleClear: function () {
      this.$store.dispatch("reset")
    },
    handleClick: function () {
      this.$store.dispatch("refresh")
    },
  },
}
</script>
