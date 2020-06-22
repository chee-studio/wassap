<template>
  <div class="container">
    <KeywordsBox/>
  </div>
</template>

<script>
  import KeywordsBox from "../components/body/KeywordsBox";

  export default {
    transition (to, from) {

      if (to.name === 'search') {
        return 'slide-left'
      }
      return 'slide-right'
    },
    layout: 'new/default',
    components: {KeywordsBox},
  }
</script>
