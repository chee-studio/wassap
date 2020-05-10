<template>
  <v-app>
    <nuxt/>
    <Footer class="footer"/>
  </v-app>
</template>

<script>
  import Footer from '../components/Footer'

  export default {
    components: {Footer}
  }

</script>
<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 15px 0;
    text-align: center;
    color: white;
    background: blue;
  }
</style>
