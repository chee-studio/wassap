<template>
  <div>
    <v-card
      color="#2d4679"
      dark
    >
      <v-card-text>
        <a
          class="grey--text text--lighten-3"
          href="https://cafe.naver.com/winerack24/28877"
          target="_blank"
        >★와쌉★ 와인 싸게 사는 사람들.xlsx</a>의 "내가 산 와인 가격 공유" 엑셀 데이터 기반입니다.

        <h3 >
          현재 사이트에 문제가 생겨 검색 결과가 안나오고 있습니다.
          얼른 정상화 되도록 노력하겠습니다!
        </h3>
      </v-card-text>
      <v-card-text>
        <v-combobox
          v-model="keyword"
          :items="wineTitles"
          label="Wine label"
          @change="changeKeyboard()"
          color='#000'
        ></v-combobox>
      </v-card-text>
    </v-card>

    <WineList :keyword="searchedKeyword"/>
  </div>
</template>

<script>
  import WineList from "../components/WineList";
  import ServerConfig from '../server.config.js'

  export default {
    components: {WineList},
    methods: {
      changeKeyboard() {
        this.searchedKeyword = this.keyword
      }
    },
    data: () => ({
      keyword: null,
      searchedKeyword: '',
      wineTitles: []
    }),
    mounted() {
      fetch(`${ServerConfig.url}/wines/`)
      .then(res => res.json())
      .then(res => {
        this.wineTitles = res
      })
    }
  }
</script>
