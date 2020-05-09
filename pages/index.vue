<template>
  <v-app>
    <v-card
      color="#2d4679"
      dark
    >
      <v-card-text>
        <a
          class="grey--text text--lighten-3"
          href="https://cafe.naver.com/winerack24"
          target="_blank"
        >★와쌉★ 와인 싸게 사는 사람들.xlsx</a>의 "내가 산 와인 가격 공유" 엑셀 데이터 기반입니다.
      </v-card-text>
      <v-card-text>
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="keyword"
          color="white"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="API"
          label="Wine label (ko, en)"
          placeholder="Start typing to Search"
          prepend-icon="mdi-database-search"
          return-object
          @change="change"
          @keyup.enter="change"
        ></v-autocomplete>
      </v-card-text>
    </v-card>
    <WineList :keyword="searchedKeyword" />
  </v-app>

</template>

<script>
  import WineList from "../components/WineList";
  import ServerConfig from '../server.config.js'

  export default {
    components: {WineList},
    methods: {
      change(e) {
        // console.log(e.Description)
        this.searchedKeyword = this.keyword
      }
    },
    data: () => ({
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      keyword: null,
      searchedKeyword: ''
    }),
    computed: {
      fields () {
        if (!this.model) return []
        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.entries.map(entry => {
          // const Description = entry.Description.length > this.descriptionLimit
          //                     ? entry.Description.slice(0, this.descriptionLimit) + '...'
          //                     : entry.Description
          const Description = entry
          return Object.assign({}, entry, { Description })
        })
      },
    },
    watch: {
      keyword (val) {
        // Items have already been loaded
        if (this.items.length > 0) return
        // Items have already been requested
        if (this.isLoading) return
        this.isLoading = true
        // Lazily load input items
        // fetch('https://api.publicapis.org/entries')
        fetch(`${ServerConfig.url}/wines`)
        .then(res => res.json())
        .then(res => {
          // const { count, entries } = res
          // this.count = count
          this.entries = res
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
      },
    },
  }
</script>
