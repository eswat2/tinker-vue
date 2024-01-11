import { sample } from "./funnelDefs"
import { bag } from "./bag"

const saveState = (state) => {
  const { color, count, values } = state

  bag.store({ color, count, values })
}

const storeDefs = {
  state: {
    color: "bada55",
    count: 0,
    values: [...sample],
  },
  mutations: {
    initApp(state) {
      const data = bag.get()

      if (data) {
        const { color, count, values } = data

        state.color = color
        state.count = count
        state.values = values
      }
    },
    initValues(state) {
      state.count = 0
      state.values = [...sample]

      saveState(state)
    },
    updateValues(state) {
      const values = sample.map(() => Math.floor(Math.random() * 100))

      state.count += 1
      state.values = values

      saveState(state)
    },
    updateColor(state, { color }) {
      state.color = color

      saveState(state)
    },
  },
  actions: {
    init({ commit }) {
      commit("initApp")
    },
    reset({ commit }) {
      commit("initValues")
    },
    refresh({ commit }) {
      commit("updateValues")
    },
    colorPick({ commit }, data) {
      commit("updateColor", data)
    },
  },
}

export { storeDefs }
export default storeDefs
