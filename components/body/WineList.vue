<template>
  <div class="wlCard">
    <v-data-table
      id="wineList"
      :headers="headers"
      :items="searchResult"
      hide-default-footer
      class="elevation-1"
      :mobile-breakpoint="NaN"
      :options="{
        itemsPerPage: 1000
      }"
      :sort-by="['purchaseDate']"
      :sort-desc="[true]"
      no-data-text="와인 검색 결과가 없습니다."
    ></v-data-table>
  </div>
</template>

<script>

  export default {
    data: () => ({
      headers: [
        {text: '', value: 'no', width: '40px', 'font-size':'100px', 'fontSize':'100px','class':'111'},
        {text: '와인 명', value: 'name', width: '130px'},
        {text: '가격', value: 'price', width: '50px'},
        {text: '구매일', value: 'purchaseDate', width: '70px'},
        {text: '구매처', value: 'purchasePlace', width: '100px'}
      ]
    }),
    computed: {
      searchResult() {
        return this.$store.state.winesStore.wineList
      }
    },
    watch: {
      keyword() {
        fetch(`${ServerConfig.url}/wines/${this.keyword}`)
        .then(res => res.json())
        .then(res => {
          this.searchResult = res
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

