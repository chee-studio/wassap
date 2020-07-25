import Vue from 'vue'

export const state = () => ({
  lovedKeywords: [],
  resentSearchedKeywords: []
})

export const mutations = {
  setKeywords(state, {key, keywords}) {
    if (keywords == null) {
      keywords = []
    }

    Vue.set(state, key, keywords);
  }
}
export const actions = {
  initSavedKeyword({state, commit}, keyword) {
    let lovedKeywords = this.$cookies.get("lovedKeywords");
    if (lovedKeywords == null) {
      lovedKeywords = []
    }

    let resentSearchedKeywords = this.$cookies.get("resentSearchedKeywords")
    if (resentSearchedKeywords == null) {
      resentSearchedKeywords = []
    }

    commit('setKeywords', {key: 'lovedKeywords', keywords: sort(lovedKeywords)})
    commit('setKeywords', {key: 'resentSearchedKeywords', keywords: sort(resentSearchedKeywords)})
  },

  addKeyword({state, commit}, {key, keyword}) {
    if (keyword === null || keyword.trim() === '') {
      return false
    }
    keyword = keyword.trim()
    let keywords = this.$cookies.get(key);
    if (keywords == null) {
      keywords = []
    }

    keywords = keywords.filter(c => c.keyword.trim() !== keyword.trim())
    keywords.push({keyword: keyword, date: new Date().toISOString().substring(0, 10)})

    this.$cookies.set(key, keywords, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      });
    commit('setKeywords', {key: key, keywords: sort(keywords)})
    return true
  },

  removeKeywordAtCookie({state, commit}, {key, keyword}) {
    if (keyword == null) {
      return
    }
    let keywords = state[key]

    keywords = keywords.filter(c => c.keyword.trim() !== keyword.trim())
    this.$cookies.set(key, [...keywords], {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      });
    commit('setKeywords', {key: key, keywords: keywords})
  },
}

function sort(arrays) {
  return [...arrays].sort((a, b) => new Date(b.date) - new Date(a.date))
}
