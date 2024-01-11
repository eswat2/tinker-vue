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

<script setup>
import { computed } from "vue"
import { useTinkerStore } from "../stores"

import TwLabel from "./TwLabel.vue"

const store = useTinkerStore()

const count = computed(() => store.count)
const pick = computed(() => store.color)
const values = computed(() => store.values)
</script>
