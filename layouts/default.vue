<template>
  <v-app id="app">
    <Header/>
    <nuxt/>
    <LeftBar/>

    <Footer/>

  </v-app>
</template>

<script>
  import Header from "~/components/head/Header";
  import LeftBar from "../components/common/LeftBar";
  import Footer from "../components/common/Footer";

  export default {
    components: {LeftBar, Header, Footer},
    created() {
      this.$store.dispatch('cookieKeywordsStore/initSavedKeyword')
      this.$store.dispatch('winesStore/getCount')
    },
  }
</script>

<style>
  /*sunflower font*/

</style>
