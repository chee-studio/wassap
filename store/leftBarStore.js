import Vue from 'vue'

export const state = () => ({
  drawer: false,
})

export const mutations = {
  setDrawer(state, value) {
    Vue.set(state, 'drawer', value);
  }
}
