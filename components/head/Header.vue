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
    border-bottom: 1px solid lightgray;
  }
</style>
<script>
  import LeftBarBtn from "../common/LeftBarBtn";
  import SearchInput from "./SearchInput";
  import LoveBtn from "./LoveBtn";

  export default {
    components: {LoveBtn, LeftBarBtn, SearchInput},
    data() {
      return {
        btn: ["mdi-menu", "mdi-arrow-left"],
        isNotSearch: true
      }
    },
    computed: {
      getIcon() {
        if (!this.continuous && !this.rtl) {
          return false
        }
      }
    },
    methods: {
      clickHeadIcon() {
        if (this.$route.path !== "/search") {
          console.log("TODO")
        } else {
          this.$router.go(-1)
        }
      }
    },
    watch: {
      '$route.path': function (e) {
        this.isNotSearch = e !== "/search";
      }
    },
    mounted() {
      this.isNotSearch = this.$route.path !== "/search";
    }
  }
</script>
