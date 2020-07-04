<template>
  <div class="container">

    <MainBanner/>

    <v-alert
      type="info"
      icon="mdi-fruit-grapes"
      dense
      tile
      color="#2c4679"
      border="left"
      style="margin-bottom: 10px; margin-top: 10px;"
    >
      <div style="font-size: 0.8rem;">
        ★와쌉★에 담겨있는 와인가 정보는 총 {{allCount}} 건 이에요.
      </div>

      <div style="font-size: 0.7rem;color: lightblue;">
        오늘은 {{yesterdayCount}}건 등록되었어요. 감사해요!
      </div>
    </v-alert>

    <KeywordsBox/>

  </div>
</template>

<script>
  import KeywordsBox from "../components/body/KeywordsBox";
  import MainBanner from "../components/body/MainBanner";

  export default {
    components: {KeywordsBox, MainBanner},

    methods: {
      getYesterday() {
        // let d = new Date();
        // d.setTime(new Date().getTime() - (1 * 24 * 60 * 60 * 1000)); //1일전
        // return d.format('MM-DD')

        const today = new Date()
        const yesterday = new Date(today)

        yesterday.setDate(yesterday.getDate() - 1)

        // debugger
        today.toDateString()
        return yesterday.getDate()
      }
    },
    computed: {
      allCount() {
        let count = this.$store.state.winesStore.counts.allCount;
        if (count === undefined) {
          return 0
        }
        return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      },
      yesterdayCount() {
        let count = this.$store.state.winesStore.counts.yesterdayCount;
        if (count === undefined) {
          return 0
        }
        return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      },
    }
  }
</script>
