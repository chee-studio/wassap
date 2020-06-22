<template>
  <v-btn icon @click="loveKeyword">
    <v-icon :color="isLoved? '#2c4679' : '#d3d3d3' ">mdi-heart</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: "LoveBtn",
    data() {
      return {
        isLoved: false
      }
    },
    methods: {
      loveKeyword() {
        const keyword = this.$store.state.winesStore.keyword
        if (keyword == null || keyword.trim() === '') {
          return
        }

        if (this.isLoved) {
          this.$store.dispatch('cookieKeywordsStore/removeKeywordAtCookie',
            {key: 'lovedKeywords', keyword}
          )
          this.isLoved = false

        } else {
          this.isLoved = this.$store.dispatch('cookieKeywordsStore/addKeyword',
            {key: 'lovedKeywords', keyword}
          )
        }
      }
    },
    watch: {
      '$store.state.winesStore.keyword': function () {
        // 쿠키에 있는지 없는지에 따라 love 버튼 온오프
        let lovedKeywords = this.$store.state.cookieKeywordsStore.lovedKeywords
        this.isLoved = lovedKeywords.find(k => k.keyword === this.$store.state.winesStore.keyword) !== undefined
      },
      '$store.state.cookieKeywordsStore.lovedKeywords' : function () {
        let lovedKeywords = this.$store.state.cookieKeywordsStore.lovedKeywords
        this.isLoved = lovedKeywords.find(k => k.keyword === this.$store.state.winesStore.keyword) !== undefined
      }
    }
  }
</script>
