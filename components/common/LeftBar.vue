<template>
<span>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
  >
    <ExtraLinks/>
  </v-navigation-drawer>
</span>

</template>

<script>
  import ExtraLinks from "./ExtraLinks";
  export default {
    components: {ExtraLinks},
    computed: {
      drawer: {
        get() {
          return this.$store.state.leftBarStore.drawer
        },
        set(value) {
          this.$store.commit('leftBarStore/setDrawer', value)
        }
      },
    },
  }
</script>
