<template>
  <div class="flex">
    <div class="flex flex-col">
      <div class="flex">
        <span class="mr-10px font-bold">color:</span>
        <span class="text-clrs-slate4 italic">{{ pick }}</span>
      </div>
      <div class="mt-5px flex">
        <span class="mr-10px font-bold">sample:</span>
        <span class="text-clrs-slate4 italic">{{
          `${count > 0 ? values : "..."}`
        }}</span>
      </div>
    </div>
    <TwLabel />
  </div>
</template>

<script>
import TwLabel from "./TwLabel.vue"

export default {
  computed: {
    count() {
      return this.$store.state.app.count
    },
    pick() {
      return this.$store.state.app.color
    },
    values() {
      return this.$store.state.app.values
    },
  },
  components: {
    TwLabel,
  },
}
</script>
