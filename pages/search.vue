<template>
  <div class="container">
    <div class="text-right">
      <v-chip
        class="ma-2"
        color="pink"
        label
        small
        text-color="white"
      >
        <v-icon left>mdi-share-variant</v-icon>
        Tags
      </v-chip>

      <v-chip
        class="ma-2"
        color="primary"
        label
        small
      >
        <v-icon left>mdi-account-circle-outline</v-icon>
        John Leider
      </v-chip>

      <v-chip
        class="ma-2"
        close
        color="cyan"
        label
        small
        text-color="white"
      >
        <v-icon left>mdi-twitter</v-icon>
        New Tweets
      </v-chip>
    </div>
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
