<template>
  <div class="container">

    <MainBanner/>

    <v-alert
      type="info"
      icon="mdi-ghost"
      dense
      tile
      color="#2c4679"
      border="left"
      style="margin-bottom: 10px; margin-top: 10px;"
    >
      <div style="font-size: 0.9rem;">
        현재 총 <span style="color: white">{{allCount}}</span> 건의 와인 가격 검색이 가능해요.
      </div>
      <div style="font-size: 0.7rem;color: lightblue;">
        어제는 {{yesterdayCount}}건, 오늘은 지금까지 <span style="color: white">{{todayCount}}</span>건이 추가되었어요!
      </div>

    </v-alert>

    <KeywordsBox/>
    <RockCurtain/>

<!--    <AddWineBtn/>-->

  </div>
</template>

<script>
  import KeywordsBox from "../components/body/KeywordsBox";
  import MainBanner from "../components/body/MainBanner";
  import RockCurtain from "../components/common/RockCurtain";
  import AddWineBtn from "../components/common/AddWineBtn";

  export default {
    components: {RockCurtain, KeywordsBox, MainBanner, AddWineBtn},

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
        return this.$store.state.winesStore.counts.allCount;
      },
      yesterdayCount() {
        return this.$store.state.winesStore.counts.yesterdayCount;
      },
      todayCount() {
        return this.$store.state.winesStore.counts.todayCount;
      }
    },
    data() {
      return {
        isProgramming: true
      }
    },
  }
</script>

<style>
  #screen {
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    z-index: 1;
  }
</style>
