<template>
  <div class="container">
    <wineList/>
    <AddWineBtn/>
  </div>
</template>

<script>
  import WineList from "../components/body/WineList";
  import AddWineBtn from "../components/common/AddWineBtn";

  export default {
    components: {WineList, AddWineBtn},
    transition(to, from) {
      if (to.name === 'search') {
        return 'slide-left'
      }
      return 'slide-right'
    },
  }
</script>
