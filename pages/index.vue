<template>
  <div class="container">

    <MainBanner/>

    <KeywordsBox/>
  </div>
</template>

<script>
  import KeywordsBox from "../components/body/KeywordsBox";
  import MainBanner from "../components/body/MainBanner";

  export default {
    components: {KeywordsBox, MainBanner},
  }
</script>
