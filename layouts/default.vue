<template>
  <v-app id="app">
    <Header/>
    <nuxt />
    <LeftBar/>
  </v-app>
</template>

<script>
  import Header from "~/components/head/Header";
  import LeftBar from "../components/common/LeftBar";

  export default {
    components: {LeftBar, Header},
    created() {
      this.$store.dispatch('cookieKeywordsStore/initSavedKeyword')
    },
  }
</script>

<style>
  /*sunflower font*/
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500&family=Sunflower:wght@300&display=swap');
  html, body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  #app {
    font-family: 'Noto Sans KR', sans-serif;
  }
</style>
