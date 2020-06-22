import Vue from 'vue'

export const state = () => ({
  drawer: false,
})

export const mutations = {
  setDrawer(state, value) {
    console.log("store setDrawer")
    Vue.set(state, 'drawer', value);
  }
}
