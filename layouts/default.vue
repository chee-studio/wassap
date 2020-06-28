<template>
  <v-app id="app">
    <Header/>
    <nuxt/>
    <LeftBar/>

    <template>
      <v-footer
        absolute
      >
        <v-spacer></v-spacer>
        <div style="font-size: 0.4rem;color: gray;">
          WASSAP served with <span style="color: red">❤</span> by CheeStudio &copy; {{ new Date().getFullYear() }} WASSAP
        </div>
      </v-footer>
    </template>

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
