<template>
  <main class="ds1-main">
    <Eswat2 />
    <Header label="tinker-vue" />
    <Controls />
    <Colors />
    <hr class="ml-0 mr-0" />
    <Values />
  </main>
</template>

<script setup>
import { onMounted } from "vue"
import { useTinkerStore } from "./stores"

import Colors from "./components/Colors.vue"
import Controls from "./components/Controls.vue"
import Eswat2 from "./components/Eswat2.vue"
import Header from "./components/Header.vue"
import Values from "./components/Values.vue"

onMounted(() => {
  const store = useTinkerStore()

  store.init()
})
</script>
