<template>
  <div>
    <v-alert
      type="info"
      icon="mdi-ghost"
      dense
      tile
      color="#2c4679"
      border="left"
      style=""
      class="alretStyle"
    >
      <div style="font-size: 0.9rem;">
        현재 총 <span style="color: white">{{allCount}}</span> 건의 와인 가격 검색이 가능해요.
      </div>
      <div style="font-size: 0.7rem;color: lightblue;">
        어제는 {{yesterdayCount}}건, 오늘은 지금까지 <span style="color: white">{{todayCount}}</span>건이 추가되었어요!
      </div>
    </v-alert>

    <v-list-item :href=writingPostNoticeUrl target="_blank" style="padding: 0">
      <v-alert
        type="info"
        icon="mdi-creation"
        dense
        tile
        color="teal darken-3"
        border="left"
        style="width: 100%"
        href="www.naver.com"
        class="alretStyle"
      >
        <div style="font-size: 0.9rem;">
          와인 등록 기능 오픈!
        </div>
        <div style="font-size: 0.7rem;color: #E0F2F1;">
          아래 쪽 하단의 핑크색 동그라미를 눌러보세요.
          <span style="float: right;color: #4DB6AC;font-size: 0.7rem"><v-icon size="0.9rem" color="teal lighten-2">mdi-link-variant</v-icon> 관련 글 보기</span>
        </div>
      </v-alert>
    </v-list-item>
  </div>
</template>

<script>

  export default {
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
      writingPostNoticeUrl() {
        return this.$device.isDesktop ? 'https://cafe.naver.com/winerack24/48046' : 'https://m.cafe.naver.com/winerack24/48046'
      },
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
  }

</script>

<style scoped>
  .alretStyle {
    margin-top: 10px;
    margin-bottom: 0 !important;
  }
</style>
