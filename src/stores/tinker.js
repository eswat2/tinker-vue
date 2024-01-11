import { ref } from "vue"
import { defineStore } from "pinia"
import { bag, sample } from "../utils"

const DEFAULT_COLOR = "bada55"
const DEFAULT_COUNT = 0
const DEFAULT_LIST = [...sample]

const useTinkerStore = defineStore("tinker", () => {
  const color = ref(DEFAULT_COLOR)
  const count = ref(DEFAULT_COUNT)
  const values = ref(DEFAULT_LIST)
  // internal...
  const _saveState = () => {
    bag.store({
      color: color.value,
      count: count.value,
      values: values.value,
    })
  }
  // actions...
  const init = () => {
    const data = bag.get()

    if (data) {
      color.value = data.color
      count.value = data.count
      values.value = data.values
    }
  }
  const reset = () => {
    color.value = DEFAULT_COLOR
    count.value = DEFAULT_COUNT
    values.value = DEFAULT_LIST

    _saveState(color, count, values)
  }
  const refresh = () => {
    const data = sample.map(() => Math.floor(Math.random() * 100))

    count.value += 1
    values.value = data

    _saveState(color, count, values)
  }
  const colorPick = (value) => {
    color.value = value

    _saveState(color, count, values)
  }

  return { color, count, values, init, reset, refresh, colorPick }
})

export { useTinkerStore }
export default useTinkerStore
