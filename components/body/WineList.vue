<template>
  <div style="margin-top: 10px">
    <v-alert
      type="info"
      icon="mdi-pig"
      dense
      tile
      color="#2c4679"
      border="left"
      v-show="searchResult.length > 0"
      style="font-size: 0.9rem; margin-bottom: 10px"
    >
      총 {{searchResult.length}} 건의 가격 정보를 찾았어요!
      <div style="font-size: 0.7rem;color: lightblue;">
        평균 가격은 <span style="color: white">{{calculatedAmount.avg}}</span>원 중간 가격은 <span style="color: white">{{calculatedAmount.mid}}</span>원 이에요.
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
      style="border: 1px solid #e4e4e4;"
    ></v-data-table>

    <div v-if="false">
      <v-card-text style="position: fixed; top: 90%;">
        <v-fab-transition>
          <v-btn
            v-show="!hidden"
            color="pink"
            dark
            absolute
            top
            right
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card-text>
    </div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      headers: [
        {text: '', value: 'no', width: '40px', 'font-size': '100px', 'fontSize': '100px', 'class': '111'},
        {text: '와인 명', value: 'name', width: '130px'},
        {text: '가격', value: 'price', width: '50px'},
        {text: '확인일', value: 'purchaseDate', width: '80px'},
        {text: '확인처', value: 'purchasePlace', width: '100px'}
      ],
      hidden: true,
    }),
    computed: {
      searchResult() {
        return this.$store.state.winesStore.wineList
      },
      calculatedAmount() {
        let wineList = this.$store.state.winesStore.wineList
        if (wineList.length === 0) {
          return {avg: 0, mid: 0}
        }
        if (wineList.length === 1) {
          return {avg: wineList[0].price, mid: wineList[0].price}
        }

        let wines = [...this.$store.state.winesStore.wineList]

        return {
          avg: (Math.floor(wines.reduce((a, b) => a + b.price.replace(',', '') * 1, 0) / wines.length)).toString()
                                                                                                       .replace(
                                                                                                         /\B(?=(\d{3})+(?!\d))/g,
                                                                                                         ","),
          mid: wines.sort((a, b) => a.price.replace(',', '') * 1 - b.price.replace(',', '') * 1)[Math.floor(
            wines.length / 2)].price
        }
      },
    },
    watch: {
      keyword() {
        fetch(`${ServerConfig.url}/wines/${this.keyword}`)
        .then(res => res.json())
        .then(res => {
          this.searchResult = res
        })
        .catch(err => {
          console.log(err)
        })
      },
    },
    mounted() {
      let that = this
      setTimeout(function () {that.hidden = false}, 200)
    }
  }
</script>
