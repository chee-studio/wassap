import ServerConfig from "../server.config";
import Vue from 'vue'

export const state = () => ({
  keyword: '',
  wineList: [],
  counts: {}
})

export const mutations = {
  setWine(state, wines) {
    wines.sort((a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate));
    wines.map((value, index) => {
      value.no = index + 1
      value.price = value.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    })
    Vue.set(state, 'wineList', wines);
  },
  setKeyword(state, keyword) {
    Vue.set(state, 'keyword', keyword);
  },
  setCounts(state, counts) {
    console.log(counts)

    Vue.set(state, 'counts', {
      allCount: counts.allCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      yesterdayCount: counts.yesterdayCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      todayCount: counts.todayCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    });
  }
}
export const actions = {
  searchWine({state, commit}, keyword) {
    if (keyword == null || keyword.trim() === '') {
      return
    }
    keyword = keyword.trim()

    fetch(`${ServerConfig.url}/wines/${keyword}`)
    .then(res => res.json())
    .then(res => {
      commit('setKeyword', keyword)
      commit('setWine', res)
    })
  },

  getCount({state, commit}, keyword) {
    fetch(`${ServerConfig.url}/wines/count`)
    .then(res => res.json())
    .then(res => {
      commit('setCounts', res)
    })
  }
}
