<template>
  <v-list
    dense
    nav
    class="py-0"
  >

    <v-list-item :href=cafeUrl target="_blank" two-line>
      <v-list-item-avatar>
        <v-img
          width="30px"
          src="https://cafeptthumb-phinf.pstatic.net/MjAyMDA0MjJfMjUx/MDAxNTg3NTU3OTg5NDE0.tigmj2Y7lxWPCjDBNPPyZJ2RNtHOrXpocCm9Ih3hdAkg.k0X8ouuBdvOdk77w_5QXh0-cPQ6oIGV8BEULaon_lw0g.JPEG/externalFile.jpg?type=f150_150_mask">
        </v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>★와쌉★ 네이버 카페</v-list-item-title>
        <v-list-item-subtitle>바로가기</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item :href=noticeUrl target="_blank">
      <v-list-item-icon>
        <v-icon class="LeftBarIcon">mdi-drag-horizontal-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-content style="padding-top: 12px;">
        <v-list-item-title>공지사항</v-list-item-title>
        <!--            <v-list-item-subtitle>바로가기</v-list-item-subtitle>-->
      </v-list-item-content>
    </v-list-item>

    <v-list-item href="https://forms.gle/obF2fYCrsNzdSEaEA" target="_blank">
      <v-list-item-icon>
        <v-icon class="LeftBarIcon">mdi-drag-horizontal-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-content style="padding-top: 12px;">
        <v-list-item-title>와인 가격 입력하기</v-list-item-title>
        <!--            <v-list-item-subtitle>바로가기</v-list-item-subtitle>-->
      </v-list-item-content>
    </v-list-item>

    <v-list-item :href=opinionUrl target="_blank">
      <v-list-item-icon>
        <v-icon class="LeftBarIcon">mdi-drag-horizontal-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-content style="padding-top: 12px;">
        <v-list-item-title>의견&불편사항 접수하기</v-list-item-title>
        <!--            <v-list-item-subtitle>얼른 만</v-list-item-subtitle>-->
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    computed: {
      noticeUrl() {
        return this.$device.isDesktop ? 'https://cafe.naver.com/ArticleList.nhn?search.clubid=20564405&search.menuid=137&search.boardtype=L#' : 'https://m.cafe.naver.com/ca-fe/web/cafes/20564405/menus/137'
        // return 'https://m.cafe.naver.com/ca-fe/web/cafes/20564405/menus/137'
      },
      cafeUrl() {
        return this.$device.isDesktop ? 'https://cafe.naver.com/winerack24' : 'https://m.cafe.naver.com/winerack24'
        // return 'https://m.cafe.naver.com/winerack24'
      },
      opinionUrl() {
        return this.$device.isDesktop ? 'https://cafe.naver.com/winerack24?iframe_url=/MemoList.nhn%3Fsearch.clubid=20564405%26search.menuid=138%26viewType=pc#' : 'https://m.cafe.naver.com/MemoList.nhn?search.clubid=20564405&search.menuid=138';
        // return 'https://m.cafe.naver.com/MemoList.nhn?search.clubid=20564405&search.menuid=138'
      }
    },
  }
</script>

<style scoped>
  .LeftBarIcon {
    font-size: 1rem;
    padding-left: 10px;
    padding-top: 5px;
  }
</style>
