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
  html, body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  #app {
    font-family: 'Noto Sans KR', sans-serif;
  }
</style>
