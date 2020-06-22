<template>
  <div style="width: 100%; margin-top: 20px">
    <nuxt-link :to="nextUri" style="color: white">
      <v-combobox
        class="combobox"
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="keyword"
        color="#2c4679"
        hide-no-data
        hide-selected
        item-text="label"
        placeholder="와인 라벨로 검색"
        append-outer-icon="mdi-magnify"
        return-object
        ref="autocomplete1"
        @click:append-outer="searchWine"
        @keyup.enter="pressEnter"
        @keydown.enter="searchWine"
      />
    </nuxt-link>
  </div>
</template>
<script>
  import ServerConfig from '../../server.config.js'

  export default {
    data: () => ({
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      // keyword: null,
      wineTitles: []
    }),

    computed: {
      items() {
        console.log('items')
        return this.wineTitles

      },
      keyword: {
        get() {
          return this.$store.state.winesStore.keyword
          // return '1'
        },
        set(value) {
          console.log('searchbox computed keyword set.')
          this.$store.commit('winesStore/setKeyword', value);
        },
      },
      nextUri() {
        if (!!this.$store.state.winesStore.keyword) {
          return `/search?keyword=${this.$store.state.winesStore.keyword}`
        }
        return '/search'
      }
    },
    methods: {
      pressEnter(e) {
        this.$refs.autocomplete1.blur()
      },
      searchWine(e) {
        let keyword = this.keyword
        if (keyword === null || keyword.trim() === '') {
          return
        }
        keyword = keyword.trim()

        this.$store.dispatch('cookieKeywordsStore/addKeyword', {key: 'resentSearchedKeywords', keyword})
        this.$store.dispatch('winesStore/searchWine', keyword)
        this.$router.replace({name: "search", query: {keyword: keyword}})
      },
    },

    watch: {
      keyword(val) {
        // Items have already been loaded
        if (this.items.length > 0) {
          return
        }

        // Items have already been requested
        if (this.isLoading) {
          return
        }

        this.isLoading = true

        fetch(`${ServerConfig.url}/wines/`)
        .then(res => res.json())
        .then(res => {
          // console.log(res)
          this.wineTitles = res
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
      },
      '$route.path': function (e) {
        this.$store.dispatch('winesStore/searchWine', this.$route.query.keyword)
      }
    },
    mounted() {
      this.$store.dispatch('winesStore/searchWine', this.$route.query.keyword)
    },
  }
</script>
