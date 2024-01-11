<template>
  <div :aria-label="value" :title="value" @click="pick" role="radio">
    <Radio :hex="hex" :selected="selected" />
  </div>
</template>

<script setup>
import { computed } from "vue"
import Radio from "./icons/Radio.vue"
import { useTinkerStore } from "../stores"
import { namedColors } from "../utils"

const store = useTinkerStore()

const props = defineProps({
  value: String,
})
const hex = computed(() => namedColors[props.value])
const selected = computed(() => props.value === store.color)
const pick = () => store.colorPick(props.value)
</script>
