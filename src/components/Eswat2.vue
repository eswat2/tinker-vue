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

<script>
import Fingerprint from "./icons/Fingerprint.vue"

export default {
  name: "eswat2",
  data() {
    return {
      url: "https://eswat2.github.io",
      who: "eswat2",
    }
  },
  components: {
    Fingerprint,
  },
}
</script>
