<template>
<span>
  <v-app-bar-nav-icon @click="clickHeadIcon()">
    <v-icon>{{ btn[!isNotSearch?1:0] }}</v-icon>
  </v-app-bar-nav-icon>
</span>

</template>

<script>
  export default {
    data() {
      return {
        btn: ["mdi-menu", "mdi-arrow-left"],
        isNotSearch: true
      }
    },
    methods: {
      clickHeadIcon() {
        console.log()
        if (this.$route.path !== "/search") {
          this.$store.commit('leftBarStore/setDrawer', !this.$store.state.leftBarStore.drawer)
        } else {
          this.$router.replace("/")
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
