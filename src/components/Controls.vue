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

<script setup>
import { computed } from "vue"
import { useTinkerStore } from "../stores"

import ChevronDoubleLeft from "./icons/ChevronDoubleLeft.vue"
import Close from "./icons/Close.vue"
import Refresh from "./icons/Refresh.vue"

const store = useTinkerStore()

const count = computed(() => store.count)

const handleClear = () => store.reset()
const handleClick = () => store.refresh()
</script>
