<template>
  <div class="wlCard">
    <v-tabs
      v-model="tab"
      fixed-tabs
    >
      <v-tab>즐겨찾기</v-tab>
      <v-tab>최근 검색어</v-tab>

    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-list two-line subheader>
          <v-list-item
            v-for="content in item.content"
            :key="content.keyword"
          >
            <nuxt-link :to="nextUri(content.keyword)" style="width: 100%">
              <v-list-item-content>
                <v-list-item-title v-text="content.keyword"></v-list-item-title>
                <v-list-item-subtitle v-text="content.date"></v-list-item-subtitle>
              </v-list-item-content>
            </nuxt-link>

            <v-list-item-action @click="iconAction({key: item.key, keyword: content.keyword})">
              <v-btn icon>
                <v-icon style="color: #d3d3d3">{{item.icon}}</v-icon>
              </v-btn>
            </v-list-item-action>

          </v-list-item>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
  </div>

</template>

<script>
  export default {
    name: "SearchKeywords",
    data: () => ({
      tab: 0,
      MESSAGE: {
        NO_LIKE: "즐겨찾기가 없습니다.",
        NO_RESENT: "최근 검색어가 없습니다."
      }
    }),
    computed: {
      items() {
        let lovedKeywords = this.$store.state.cookieKeywordsStore.lovedKeywords
        if (lovedKeywords == null) {
          lovedKeywords = []
          // lovedKeywords = [this.MESSAGE.NO_LIKE]
        }

        let resentSearchedKeywords = this.$store.state.cookieKeywordsStore.resentSearchedKeywords
        if (resentSearchedKeywords == null) {
          resentSearchedKeywords = []
          // resentSearchedKeywords = [this.MESSAGE.NO_RESENT]
        }
        return [{tab: '즐겨찾기 검색어', key: 'lovedKeywords', content: lovedKeywords, icon: 'mdi-heart-broken'},
          {tab: '최근 검색어', key: 'resentSearchedKeywords', content: resentSearchedKeywords, icon: 'mdi-delete'}]
      }
    },
    methods: {
      nextUri(keyword) {
        return `/search?keyword=${keyword}`
      },

      iconAction({key, keyword}) {
        this.$store.dispatch('cookieKeywordsStore/removeKeywordAtCookie', {key, keyword})
      }
    }
  }
</script>
