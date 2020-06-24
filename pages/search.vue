<template>
  <div class="container">
    <wineList/>
  </div>
</template>

<script>
  import WineList from "../components/body/WineList";

  export default {
    layout: 'new/default',
    components: {WineList},
    transition(to, from) {
      if (to.name === 'search') {
        return 'slide-left'
      }
      return 'slide-right'
    },
  }
</script>
