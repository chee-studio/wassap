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
