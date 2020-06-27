<template>
  <div>
    <v-app-bar
      color="white"
      :flat="true"
      id="appBar"
    >
      <LeftBarBtn/>
      <SearchInput/>
      <LoveBtn/>
    </v-app-bar>
  </div>
</template>

<style>
  #appBar > div {
    border-bottom: 1px solid #e4e4e4;
  }
</style>
<script>
  import LeftBarBtn from "../common/LeftBarBtn";
  import SearchInput from "./SearchInput";
  import LoveBtn from "./LoveBtn";

  export default {
    components: {LoveBtn, LeftBarBtn, SearchInput}
  }
</script>
