<template>
  <div class="wlCard">
    <v-alert
      type="info"
      icon="mdi-firework"
      dense
      tile
      color="#2c4679"
      border="left"
      v-show="searchResult.length > 0"
      style="font-size: 0.9rem"
    >
      총 {{searchResult.length}} 건의 구매 내역을 찾았어요!

      <div style="font-size: 0.7rem;color: lightblue;">
        평균 가격은 {{calculatedAmount.avg}}원 중간 가격은 {{calculatedAmount.mid}}원 이에요.
      </div>


    </v-alert>

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
      style="border-top: 1px solid #e4e4e4"
    ></v-data-table>
  </div>
</template>

<script>

  export default {
    data: () => ({
      headers: [
        {text: '', value: 'no', width: '40px', 'font-size': '100px', 'fontSize': '100px', 'class': '111'},
        {text: '와인 명', value: 'name', width: '130px'},
        {text: '가격', value: 'price', width: '50px'},
        {text: '구매일', value: 'purchaseDate', width: '70px'},
        {text: '구매처', value: 'purchasePlace', width: '100px'}
      ],
    }),
    computed: {
      searchResult() {
        return this.$store.state.winesStore.wineList
      },
      calculatedAmount() {
        if (this.$store.state.winesStore.wineList.length === 0) {
          return {avg: 0, mid: 0}
        }
        let wines = [...this.$store.state.winesStore.wineList]
        let that = this

        return {
          avg: (Math.floor(wines.reduce((a, b) => a + b.price.replace(',', '') * 1, 0) / wines.length)).toString()
                                                                                                       .replace(
                                                                                                         /\B(?=(\d{3})+(?!\d))/g,
                                                                                                         ","),
          mid: wines.sort((a, b) => a.price.replace(',', '') * 1 - b.price.replace(',', '') * 1)[wines.length / 2].price
        }
      },
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

