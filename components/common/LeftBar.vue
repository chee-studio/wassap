<template>
<span>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
  >
    <v-list
      dense
      nav
      class="py-0"
    >

      <a href="https://m.cafe.naver.com/winerack24">
        <v-list-item two-line>
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
      </a>

      <v-divider></v-divider>

      <a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=20564405&search.menuid=137&search.boardtype=L#">
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="LeftBarIcon">mdi-drag-horizontal-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="padding-top: 12px;">
            <v-list-item-title>공지사항</v-list-item-title>
<!--            <v-list-item-subtitle>바로가기</v-list-item-subtitle>-->
          </v-list-item-content>
        </v-list-item>
      </a>

      <a href="https://forms.gle/obF2fYCrsNzdSEaEA">
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="LeftBarIcon">mdi-drag-horizontal-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="padding-top: 12px;">
            <v-list-item-title>와인 가격 입력 하기</v-list-item-title>
<!--            <v-list-item-subtitle>바로가기</v-list-item-subtitle>-->
          </v-list-item-content>
        </v-list-item>
      </a>

    </v-list>
  </v-navigation-drawer>
</span>

</template>

<script>
  export default {
    computed: {
      drawer: {
        get() {
          return this.$store.state.leftBarStore.drawer
        },
        set(value) {
          this.$store.commit('leftBarStore/setDrawer', value)
        }
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
